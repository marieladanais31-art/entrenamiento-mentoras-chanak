import { VIDEOS_RENDERIZADOS } from './videosRenderizados.js'

export const normalizar = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

// Dos vídeos estrictamente técnicos de configuración central permanecen restringidos a administradores y se ocultan a mentores
export const VIDEOS_ADMINISTRATIVOS_RESTRINGIDOS = new Set(['GOOGLE_EDUCATION', 'ADMINISTRADOR_OPERATIVO'])

export const VIDEOS_OFICIALES = [
  {
    id: 'V00',
    titulo: 'Presentación General · Chanak International Academy',
    modulo: 'Introducción',
    tipo: 'Inducción institucional',
    videoUrl: '/videos/presentacion_general.mp4',
    duracion: '5:41',
    fuente: 'Vídeo oficial de inducción y bienvenida de Chanak International Academy.',
    restringido: false,
  },
  ...VIDEOS_RENDERIZADOS.map((v) => {
    const esAdminVideo = VIDEOS_ADMINISTRATIVOS_RESTRINGIDOS.has(v.id)
    const url = v.videoUrl || (v.drive_id ? `https://drive.google.com/file/d/${v.drive_id}/preview` : '')
    return {
      ...v,
      videoUrl: url,
      tipo: esAdminVideo ? 'Procedimiento administrativo central' : (v.tipo || 'Lección oficial · Mastery Learning'),
      restringido: esAdminVideo,
    }
  }),
]

export function filtrarVideosCatalogo(esAdmin = false, busqueda = '', filtro = 'todos') {
  return VIDEOS_OFICIALES.filter((v) => {
    // Si no es admin, los vídeos restringidos se ocultan por completo
    if (!esAdmin && VIDEOS_ADMINISTRATIVOS_RESTRINGIDOS.has(v.id)) return false
    if (filtro === 'abiertos' && v.restringido) return false
    if (filtro === 'admin' && (!v.restringido || !esAdmin)) return false
    const matchTexto = normalizar(`${v.titulo} ${v.modulo} ${v.tipo}`).includes(normalizar(busqueda.trim()))
    return matchTexto
  })
}
