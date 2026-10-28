export function marcaTemporal(valor) {
  const n = Date.parse(valor || '')
  return Number.isFinite(n) ? n : null
}

export function resumirAccesos(perfiles, accesosMapa, actividad, ahora = Date.now()) {
  const actividadMapa = new Map()
  for (const fila of actividad || []) {
    const n = marcaTemporal(fila.ultima_actividad)
    const previo = actividadMapa.get(fila.perfil_id)
    if (n !== null && (previo === undefined || n > previo)) actividadMapa.set(fila.perfil_id, n)
  }
  return perfiles.map(perfil => {
    const consultado = Object.prototype.hasOwnProperty.call(accesosMapa || {}, perfil.id)
    const inicio = consultado ? marcaTemporal(accesosMapa[perfil.id].ultimo_inicio_sesion) : null
    const ultimaActividad = actividadMapa.get(perfil.id) ?? null
    const senales = [inicio, ultimaActividad].filter(n => n !== null)
    const ultimaSenal = senales.length ? Math.max(...senales) : null
    return { perfil, consultado, inicio, ultimaActividad, ultimaSenal,
      sinInicio: consultado && inicio === null,
      sinSenalSieteDias: ultimaSenal !== null && ahora - ultimaSenal >= 7 * 86400000 }
  }).sort((a, b) => (b.ultimaSenal ?? -Infinity) - (a.ultimaSenal ?? -Infinity) || a.perfil.nombre.localeCompare(b.perfil.nombre))
}
