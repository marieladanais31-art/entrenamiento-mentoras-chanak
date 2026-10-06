import { TODOS_MODULOS, NIVEL_1_HORAS, NIVEL_2_HORAS, HORAS_MODULOS_N1, HORAS_MODULOS_N2 } from '../data/curriculum'
import { EQUIVALENCIAS } from '../data/equivalencias'
import { ROL_POR_ID, MODULOS_CONTACTO_DIRECTO, modulosObligatorios, tieneContactoDirecto, tieneContactoOcasional, MODULOS_SAFEGUARDING_AWARENESS } from '../data/roles'

// Devuelve una copia del progreso para MOSTRAR (nunca para guardar): los módulos 2026–2027
// no completados cuyo equivalente antiguo está completado aparecen como «reconocido».
export function aplicarEquivalencias(progreso) {
  const mods = progreso?.modulos || {}
  const out = { ...mods }
  for (const [nuevo, antiguos] of Object.entries(EQUIVALENCIAS)) {
    if (mods[nuevo]?.estado === 'completado') continue
    const de = antiguos.filter((a) => mods[a]?.estado === 'completado')
    if (de.length) out[nuevo] = { ...(mods[nuevo] || {}), estado: 'reconocido', reconocidoDe: de }
  }
  return { ...progreso, modulos: out }
}

// Funciones puras de cálculo sobre un objeto de progreso { modulos: {…} }.
// No tocan red ni almacenamiento: así los componentes se mantienen simples.

const HECHO = (mods, id) => ['completado', 'reconocido'].includes(mods[id]?.estado)

// Avance por rol («Tu ruta»): módulos obligatorios del rol + formación de contacto con menores.
// Solo cuenta módulos que existen hoy en la app; las rutas que se incorporan después se
// devuelven en `rutasPendientes` y NUNCA se muestran como 100 %.
export function progresoPorRol(progreso, rolId, contactoMenores = null) {
  const mods = progreso?.modulos || {}
  const rol = ROL_POR_ID[rolId]
  if (!rol) return null
  const ids = modulosObligatorios([rolId], contactoMenores).filter((id) => TODOS_MODULOS.some((m) => m.id === id))
  const hechos = ids.filter((id) => HECHO(mods, id))
  const faltantes = ids.filter((id) => !HECHO(mods, id))
  const pct = ids.length ? Math.round((hechos.length / ids.length) * 100) : 0
  const rutasPendientes = rol.rutasPendientes || []
  return {
    rol,
    total: ids.length,
    hechos: hechos.length,
    pct,
    faltantes,
    rutasPendientes,
    // completo solo si no quedan módulos y no hay rutas por incorporar
    completo: ids.length > 0 && faltantes.length === 0 && rutasPendientes.length === 0,
    modulosCompletos: ids.length > 0 && faltantes.length === 0,
  }
}

// Gating de contacto con menores: si la persona tiene contacto directo, DEBE completar
// Child & Adolescent Development, Safeguarding, Online Safety y Confidentiality/Data Protection.
export function faltantesContactoMenores(progreso, rolesIds, contactoMenores = null) {
  const mods = progreso?.modulos || {}
  if (tieneContactoDirecto(rolesIds, contactoMenores)) return MODULOS_CONTACTO_DIRECTO.filter((id) => !HECHO(mods, id))
  if (tieneContactoOcasional(rolesIds)) return MODULOS_SAFEGUARDING_AWARENESS.filter((id) => !HECHO(mods, id))
  return []
}

// `ctx` = { roles: [...ids], contactoMenores: true|false|null } — si no se pasa, se asume
// la persona con rol Mentor (contacto directo), que es el caso de las cuentas existentes.
export function resumenMentora(progreso, ctx = {}) {
  const rolesCtx = ctx.roles && ctx.roles.length ? ctx.roles : ['mentor']
  const faltantesMenores = faltantesContactoMenores(progreso, rolesCtx, ctx.contactoMenores ?? null)
  const mods = progreso?.modulos || {}
  let horas = 0
  let completados = 0
  let enCurso = 0
  let reconocidos = 0
  // Solo cuentan para la certificación los módulos de la ruta oficial (no los "por rol").
  const ruta = TODOS_MODULOS.filter((m) => !m.porRol && !m.transversal)
  for (const m of ruta) {
    const p = mods[m.id]
    if (p?.estado === 'completado') {
      horas += m.horas
      completados++
    } else if (p?.estado === 'reconocido') {
      // Horas reconocidas de la formación anterior; falta el nuevo Knowledge Check.
      horas += m.horas
      reconocidos++
    } else if (p?.estado === 'en_curso') {
      enCurso++
    }
  }
  const nivel1Completo = ruta.filter((m) => m.nivel === 1).every(
    (m) => mods[m.id]?.estado === 'completado'
  )
  const nivel2Completo =
    nivel1Completo &&
    ruta.filter((m) => m.nivel === 2).every((m) => mods[m.id]?.estado === 'completado')
  const porRolCompletados = TODOS_MODULOS.filter(
    (m) => m.porRol && mods[m.id]?.estado === 'completado'
  ).length
  return {
    horas,
    completados,
    enCurso,
    reconocidos,
    pendientes: ruta.length - completados - enCurso - reconocidos,
    totalModulos: ruta.length,
    porRolCompletados,
    nivel1Completo,
    nivel2Completo,
    nivelActual: nivel1Completo ? 2 : 1,
    metaHoras: nivel1Completo ? NIVEL_2_HORAS : NIVEL_1_HORAS,
    metaHorasModulos: nivel1Completo ? HORAS_MODULOS_N2 : HORAS_MODULOS_N1,
    horasAcreditadasAutomaticas: 0,
    requiereValidacionFormal: nivel1Completo,
    // Las estimaciones y equivalencias no prueban horas reales ni aprobación de dirección.
    // La bitácora y la resolución se validan fuera del contador automático del app.
    // Gating: sin la formación de contacto con menores no se completa la ruta ni se emite certificado.
    faltantesMenores,
    bloqueadoPorMenores: faltantesMenores.length > 0,
    elegibleMentor: false,
    elegibleCoordinadora: false,
  }
}

export function estadoBloque(progreso, bloque) {
  const mods = progreso?.modulos || {}
  const estados = bloque.modulos.map((m) => mods[m.id]?.estado || 'pendiente')
  if (estados.every((e) => e === 'completado')) return 'completado'
  if (estados.some((e) => e !== 'pendiente')) return 'en_curso'
  return 'pendiente'
}

export function horasBloqueCompletadas(progreso, bloque) {
  const mods = progreso?.modulos || {}
  return bloque.modulos.reduce(
    (sum, m) => sum + (['completado', 'reconocido'].includes(mods[m.id]?.estado) ? m.horas : 0),
    0
  )
}

export function registroCronologico(progreso) {
  const mods = progreso?.modulos || {}
  return TODOS_MODULOS.filter((m) => {
    const e = mods[m.id]?.estado
    return e === 'completado' || e === 'en_curso' || e === 'reconocido'
  })
    .map((m) => ({
      ...m,
      estado: mods[m.id].estado,
      fecha: mods[m.id].fechaCompletado || mods[m.id].fechaInicio,
    }))
    .sort((a, b) => (a.fecha || '').localeCompare(b.fecha || ''))
}

export function formatearFecha(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}

export function iniciales(nombre = '') {
  return nombre
    .trim()
    .split(/\s+/)
    .map((p) => p[0]?.toUpperCase() || '')
    .slice(0, 2)
    .join('')
}

// Convierte un enlace de Google Vids / Drive / YouTube / Vimeo / MP4 en objeto ejecutable.
export function urlEmbed(url = '') {
  const u = url.trim()
  if (!u) return null
  // Google Vids y Google Drive: .../d/<id>/edit|view|preview
  const google = u.match(/(?:vids\.google\.com|docs\.google\.com\/videos|drive\.google\.com)\/.*?\/d\/([\w-]+)/)
  if (google) {
    const host = u.includes('drive.google.com') ? 'drive.google.com/file' : 'docs.google.com/videos'
    return { tipo: 'embed', url: `https://${host}/d/${google[1]}/preview` }
  }
  // Vídeo directo (MP4 / WebM / MOV)
  if (/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(u)) return { tipo: 'mp4', url: u }
  // Vimeo
  const vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  if (vm) return { tipo: 'embed', url: `https://player.vimeo.com/video/${vm[1]}` }
  // YouTube
  const yt = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/)
  if (yt) return { tipo: 'embed', url: `https://www.youtube.com/embed/${yt[1]}` }
  // Ya es un embed
  if (/\/(embed|preview)(\?|$|\/)/.test(u)) return { tipo: 'embed', url: u }
  return { tipo: 'link', url: u }
}
