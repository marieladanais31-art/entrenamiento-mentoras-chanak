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

// Propuesta de seguimiento para revisión humana; no envía correos.
export function seguimientoInactividad(fila, { errorAccesos = false, errorActividad = false, completo = false, ahora = Date.now() } = {}) {
  if (errorAccesos || errorActividad || !fila.consultado) return { nivel: 'sin-datos', texto: 'Datos insuficientes para valorar inactividad.' }
  if (fila.perfil.estado !== 'aprobada' || fila.perfil.rol === 'admin' || completo) return { nivel: 'excluido', texto: 'Sin recordatorio propuesto: cuenta no activa, administrativa o formación completada.' }
  if (fila.ultimaSenal === null) return { nivel: 'sin-senal', texto: 'Sin señal disponible: confirmar primero si recibió y pudo usar el acceso.' }
  const dias = Math.floor((ahora - fila.ultimaSenal) / 86400000)
  if (dias < 7) return { nivel: 'reciente', dias, texto: 'Tiene una señal reciente; sin recordatorio propuesto.' }
  return { nivel: dias >= 14 ? 'catorce-dias' : 'siete-dias', dias, texto: `${dias} días sin señal registrada. ${dias >= 14 ? 'Proponer contacto personal para ofrecer ayuda.' : 'Proponer un recordatorio amable.'}`, borrador: `Bendiciones, ${fila.perfil.nombre}. Te escribimos para saber cómo vas con la formación Chanak. Puedes continuar en https://training.chanakacademy.org/. Si tienes alguna dificultad de acceso o necesitas apoyo para retomar, responde a este mensaje y te ayudamos. Un abrazo, Formación Chanak.` }
}
