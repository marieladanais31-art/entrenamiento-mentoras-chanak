import { MENTORAS_BASE } from '../data/mentoras'
import { TODOS_MODULOS, NIVEL_1_HORAS } from '../data/curriculum'

// ─── Claves de localStorage ───
const KEY_MENTORAS_EXTRA = 'chanak_mentoras_extra_v1'
const keyProgreso = (mentoraId) => `chanak_progreso_v1_${mentoraId}`

// ─── Mentoras ───
export function getMentoras() {
  const extra = leerJSON(KEY_MENTORAS_EXTRA, [])
  return [...MENTORAS_BASE, ...extra]
}

export function agregarMentora(nombre) {
  const id = nombre
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  if (!id) return null
  if (getMentoras().some((m) => m.id === id)) return null
  const iniciales = nombre
    .trim()
    .split(/\s+/)
    .map((p) => p[0].toUpperCase())
    .slice(0, 2)
    .join('')
  const nueva = { id, nombre: nombre.trim(), iniciales }
  const extra = leerJSON(KEY_MENTORAS_EXTRA, [])
  guardarJSON(KEY_MENTORAS_EXTRA, [...extra, nueva])
  return nueva
}

// ─── Progreso ───
// Estructura: { modulos: { '1.1': { estado, fechaInicio, fechaCompletado, notas } } }
// estado: 'pendiente' | 'en_curso' | 'completado'
export function getProgreso(mentoraId) {
  return leerJSON(keyProgreso(mentoraId), { modulos: {} })
}

export function setEstadoModulo(mentoraId, moduloId, estado, fecha = null) {
  const progreso = getProgreso(mentoraId)
  const actual = progreso.modulos[moduloId] || {}
  const hoy = new Date().toISOString().slice(0, 10)
  if (estado === 'en_curso') {
    progreso.modulos[moduloId] = {
      ...actual,
      estado,
      fechaInicio: actual.fechaInicio || fecha || hoy,
      fechaCompletado: null,
    }
  } else if (estado === 'completado') {
    progreso.modulos[moduloId] = {
      ...actual,
      estado,
      fechaInicio: actual.fechaInicio || fecha || hoy,
      fechaCompletado: fecha || hoy,
    }
  } else {
    progreso.modulos[moduloId] = { ...actual, estado: 'pendiente', fechaCompletado: null }
  }
  guardarJSON(keyProgreso(mentoraId), progreso)
  return progreso
}

// Resultado del Knowledge Check: { aciertos, total, aprobado }
export function setQuizModulo(mentoraId, moduloId, resultado) {
  const progreso = getProgreso(mentoraId)
  const actual = progreso.modulos[moduloId] || { estado: 'pendiente' }
  // Abrir el módulo automáticamente al primer intento del test
  const estado = actual.estado === 'pendiente' ? 'en_curso' : actual.estado
  const hoy = new Date().toISOString().slice(0, 10)
  progreso.modulos[moduloId] = {
    ...actual,
    estado,
    fechaInicio: actual.fechaInicio || hoy,
    quiz: resultado,
  }
  guardarJSON(keyProgreso(mentoraId), progreso)
  return progreso
}

export function setNotasModulo(mentoraId, moduloId, notas) {
  const progreso = getProgreso(mentoraId)
  progreso.modulos[moduloId] = { ...(progreso.modulos[moduloId] || { estado: 'pendiente' }), notas }
  guardarJSON(keyProgreso(mentoraId), progreso)
  return progreso
}

// ─── Cálculos derivados ───
export function resumenMentora(mentoraId) {
  const progreso = getProgreso(mentoraId)
  let horas = 0
  let completados = 0
  let enCurso = 0
  for (const m of TODOS_MODULOS) {
    const p = progreso.modulos[m.id]
    if (p?.estado === 'completado') {
      horas += m.horas
      completados++
    } else if (p?.estado === 'en_curso') {
      enCurso++
    }
  }
  const nivel1Completo = TODOS_MODULOS.filter((m) => m.nivel === 1).every(
    (m) => progreso.modulos[m.id]?.estado === 'completado'
  )
  const nivel2Completo =
    nivel1Completo &&
    TODOS_MODULOS.filter((m) => m.nivel === 2).every(
      (m) => progreso.modulos[m.id]?.estado === 'completado'
    )
  return {
    horas,
    completados,
    enCurso,
    pendientes: TODOS_MODULOS.length - completados - enCurso,
    nivel1Completo,
    nivel2Completo,
    nivelActual: nivel1Completo ? 2 : 1,
    metaHoras: nivel1Completo ? 300 : NIVEL_1_HORAS,
    elegibleMentor: horas >= NIVEL_1_HORAS && nivel1Completo,
    elegibleCoordinadora: nivel2Completo,
  }
}

export function estadoBloque(mentoraId, bloque) {
  const progreso = getProgreso(mentoraId)
  const estados = bloque.modulos.map((m) => progreso.modulos[m.id]?.estado || 'pendiente')
  if (estados.every((e) => e === 'completado')) return 'completado'
  if (estados.some((e) => e !== 'pendiente')) return 'en_curso'
  return 'pendiente'
}

export function horasBloqueCompletadas(mentoraId, bloque) {
  const progreso = getProgreso(mentoraId)
  return bloque.modulos.reduce(
    (sum, m) => sum + (progreso.modulos[m.id]?.estado === 'completado' ? m.horas : 0),
    0
  )
}

export function registroCronologico(mentoraId) {
  const progreso = getProgreso(mentoraId)
  return TODOS_MODULOS.filter((m) => {
    const e = progreso.modulos[m.id]?.estado
    return e === 'completado' || e === 'en_curso'
  })
    .map((m) => ({
      ...m,
      estado: progreso.modulos[m.id].estado,
      fecha: progreso.modulos[m.id].fechaCompletado || progreso.modulos[m.id].fechaInicio,
    }))
    .sort((a, b) => (a.fecha || '').localeCompare(b.fecha || ''))
}

// ─── Utilidades ───
function leerJSON(key, porDefecto) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : porDefecto
  } catch {
    return porDefecto
  }
}

function guardarJSON(key, valor) {
  localStorage.setItem(key, JSON.stringify(valor))
}

export function formatearFecha(iso) {
  if (!iso) return '—'
  const [y, m, d] = iso.split('-')
  return `${d}/${m}/${y}`
}
