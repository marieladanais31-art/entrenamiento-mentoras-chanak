import { TODOS_MODULOS } from '../data/curriculum'
import { getContenido } from '../data/contenido'
import { TRONCO_COMUN, rolesEfectivos, solicitudDe, modulosObligatorios } from '../data/roles'
import { aplicarEquivalencias } from './calculos'

export function resumirPersona(perfil, progreso, roles, compromiso, actividad = []) {
  const propias = actividad.filter((f) => f.perfil_id === perfil.id)
  const porModulo = {}
  let segundos = 0
  let ultimaActividad = null
  const sesiones = new Set()
  for (const fila of propias) {
    segundos += fila.segundos_activos || 0
    sesiones.add(fila.sesion_id)
    if (!ultimaActividad || fila.ultima_actividad > ultimaActividad) ultimaActividad = fila.ultima_actividad
    if (!fila.modulo_id) continue
    const m = porModulo[fila.modulo_id] ||= { segundos: 0, pasos: new Set() }
    m.segundos += fila.segundos_activos || 0
    if (fila.paso) m.pasos.add(fila.paso)
  }
  const efectivas = rolesEfectivos((roles || []).map((r) => r.rol), solicitudDe(compromiso?.funciones)).roles
  const requeridos = new Set(efectivas.length ? modulosObligatorios(efectivas, perfil.contacto_menores ?? null) : TRONCO_COMUN)
  const mods = aplicarEquivalencias(progreso || { modulos: {} }).modulos
  let ultimoCambio = null
  for (const p of Object.values(mods)) if (p.actualizadoEn && (!ultimoCambio || p.actualizadoEn > ultimoCambio)) ultimoCambio = p.actualizadoEn
  const modulos = TODOS_MODULOS.filter((m) => requeridos.has(m.id) || mods[m.id] || porModulo[m.id]).map((m) => {
    const p = mods[m.id] || {}
    const contenido = getContenido(m.id)
    const medicion = porModulo[m.id]
    const quizRequerido = Boolean(contenido?.quiz?.length)
    const evidenciaRequerida = Boolean(contenido?.evidencia || m.entregable)
    const evidencia = Boolean(p.notas?.trim() || p.entregableUrl || p.entregableNombre)
    const cierre = ['completado', 'reconocido'].includes(p.estado)
    const pendientes = []
    if (quizRequerido && !p.quiz?.aprobado) pendientes.push(p.quiz ? 'Evaluación sin aprobar' : 'Evaluación sin entregar')
    if (evidenciaRequerida && !evidencia) pendientes.push('Sin evidencia registrada')
    if (!cierre) pendientes.push('Falta cierre del módulo')
    return { ...m, progreso: p, requerido: requeridos.has(m.id), medicion,
      quizRequerido, evidenciaRequerida, evidencia, cierre, pendientes,
      iniciado: Boolean(p.estado && p.estado !== 'pendiente' || p.quiz || evidencia || medicion) }
  })
  const ruta = modulos.filter((m) => m.requerido)
  const completados = ruta.filter((m) => m.cierre).length
  return { segundos, ultimaActividad, ultimoCambio, sesiones: sesiones.size, tieneMedicion: propias.length > 0,
    modulos, total: ruta.length, completados, porcentaje: ruta.length ? Math.round(100 * completados / ruta.length) : 0,
    atencion: modulos.filter((m) => m.iniciado && m.pendientes.length).length }
}
