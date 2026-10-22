// Contador conservador: no suma pestañas ocultas, inactividad o suspensión del equipo.
export const INACTIVIDAD_MS = 120000
export function segundosDelIntervalo({ anterior, ahora, ultimaInteraccion, visible, tieneFoco }) {
  if (!visible || !tieneFoco || ahora <= anterior || ahora - anterior > 15000) return 0
  return Math.max(0, Math.min(ahora, ultimaInteraccion + INACTIVIDAD_MS) - anterior) / 1000
}

export function duracionActividad(segundos) {
  const minutos = Math.floor(Math.max(0, segundos || 0) / 60)
  if (!minutos) return segundos > 0 ? 'Menos de 1 min' : '0 min medidos'
  return minutos < 60 ? `${minutos} min` : `${Math.floor(minutos / 60)} h ${minutos % 60} min`
}

export function fechaActividad(valor) {
  if (!valor || Number.isNaN(Date.parse(valor))) return 'Sin registro'
  return new Intl.DateTimeFormat('es-ES', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Europe/Madrid' }).format(new Date(valor))
}
