import { TODOS_MODULOS, NIVEL_1_HORAS, NIVEL_2_HORAS } from '../data/curriculum'

// Funciones puras de cálculo sobre un objeto de progreso { modulos: {…} }.
// No tocan red ni almacenamiento: así los componentes se mantienen simples.

export function resumenMentora(progreso) {
  const mods = progreso?.modulos || {}
  let horas = 0
  let completados = 0
  let enCurso = 0
  // Solo cuentan para la certificación los módulos de la ruta oficial (no los "por rol").
  const ruta = TODOS_MODULOS.filter((m) => !m.porRol)
  for (const m of ruta) {
    const p = mods[m.id]
    if (p?.estado === 'completado') {
      horas += m.horas
      completados++
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
    pendientes: ruta.length - completados - enCurso,
    totalModulos: ruta.length,
    porRolCompletados,
    nivel1Completo,
    nivel2Completo,
    nivelActual: nivel1Completo ? 2 : 1,
    metaHoras: nivel1Completo ? NIVEL_2_HORAS : NIVEL_1_HORAS,
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

// Convierte un enlace de Google Vids / Drive / YouTube / NotebookLM en objeto ejecutable.
export function urlEmbed(url = '') {
  const u = url.trim()
  if (!u) return null
  if (u.includes('notebooklm.google.com') || u.includes('notebooklm')) {
    return { tipo: 'notebooklm', url: u }
  }
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
