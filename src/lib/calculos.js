import { TODOS_MODULOS, NIVEL_1_HORAS } from '../data/curriculum'

// Funciones puras de cálculo sobre un objeto de progreso { modulos: {…} }.
// No tocan red ni almacenamiento: así los componentes se mantienen simples.

export function resumenMentora(progreso) {
  const mods = progreso?.modulos || {}
  let horas = 0
  let completados = 0
  let enCurso = 0
  for (const m of TODOS_MODULOS) {
    const p = mods[m.id]
    if (p?.estado === 'completado') {
      horas += m.horas
      completados++
    } else if (p?.estado === 'en_curso') {
      enCurso++
    }
  }
  const nivel1Completo = TODOS_MODULOS.filter((m) => m.nivel === 1).every(
    (m) => mods[m.id]?.estado === 'completado'
  )
  const nivel2Completo =
    nivel1Completo &&
    TODOS_MODULOS.filter((m) => m.nivel === 2).every((m) => mods[m.id]?.estado === 'completado')
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
    (sum, m) => sum + (mods[m.id]?.estado === 'completado' ? m.horas : 0),
    0
  )
}

export function registroCronologico(progreso) {
  const mods = progreso?.modulos || {}
  return TODOS_MODULOS.filter((m) => {
    const e = mods[m.id]?.estado
    return e === 'completado' || e === 'en_curso'
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

// Convierte un enlace de Google Vids / Drive / YouTube en URL incrustable.
// Devuelve null si no reconoce el formato (entonces se ofrece abrir en pestaña).
export function urlEmbed(url = '') {
  const u = url.trim()
  if (!u) return null
  // Google Vids y Google Drive: .../d/<id>/edit|view|preview
  const google = u.match(/(?:vids\.google\.com|docs\.google\.com\/videos|drive\.google\.com)\/.*?\/d\/([\w-]+)/)
  if (google) {
    const host = u.includes('drive.google.com') ? 'drive.google.com/file' : 'docs.google.com/videos'
    return `https://${host}/d/${google[1]}/preview`
  }
  // YouTube
  const yt = u.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([\w-]{11})/)
  if (yt) return `https://www.youtube.com/embed/${yt[1]}`
  // Ya es un embed
  if (/\/(embed|preview)(\?|$|\/)/.test(u)) return u
  return null
}
