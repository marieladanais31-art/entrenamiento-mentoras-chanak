import { useEffect, useMemo, useState } from 'react'
import * as api from '../lib/backend'
import { getModulo, VERSION_CURRICULO } from '../data/curriculum'
import { modulosObligatorios, tieneContactoDirecto, rolesDesdeTipoAcceso } from '../data/roles'

// Solicitud de revisión formal. No calcula ni acredita las 180/300 horas.
export default function SolicitudCertificacion({ perfilId, progreso, roles = [], contactoMenores = null, soloLectura = false }) {
  const [registros, setRegistros] = useState([])
  const [error, setError] = useState('')
  const [ocupado, setOcupado] = useState(false)
  const rolesActuales = roles.length ? roles : rolesDesdeTipoAcceso('mentora')
  const esCoordinador = rolesActuales.includes('coordinator') || rolesActuales.includes('partner_director')
  const esMentor = esCoordinador || rolesActuales.includes('mentor')
  const mods = progreso?.modulos || {}
  const rutas = useMemo(() => Object.fromEntries([1, 2].map((nivel) => [
    nivel,
    [...new Set(modulosObligatorios(nivel === 2 ? ['coordinator'] : ['mentor'], contactoMenores))]
      .filter((id) => Boolean(getModulo(id)))
  ])), [contactoMenores])
  const ruta = rutas[esCoordinador ? 2 : 1]
  const pendientes = ruta.filter((id) => mods[id]?.estado !== 'completado')
  const porcentaje = ruta.length ? Math.round(100 * (ruta.length - pendientes.length) / ruta.length) : 0
  const directo = tieneContactoDirecto(rolesActuales, contactoMenores)
  useEffect(() => {
    if (!perfilId || !esMentor) return
    let vivo = true
    api.listarCertificacionesFormales(perfilId)
      .then((data) => { if (vivo) setRegistros(data) })
      .catch((e) => { if (vivo) setError(e.message) })
    return () => { vivo = false }
  }, [perfilId, esMentor])

  async function solicitar(nivel) {
    setError('')
    setOcupado(true)
    try {
      await api.solicitarCertificacionFormal(perfilId, nivel, VERSION_CURRICULO)
      setRegistros(await api.listarCertificacionesFormales(perfilId))
    } catch (e) { setError(e.message) } finally { setOcupado(false) }
  }
  if (!esMentor) return null
  return (
    <section className="rounded-2xl border border-gold/35 bg-white p-5 shadow-sm">
      <h2 className="text-lg font-bold text-navy">🎓 Mis certificaciones académicas</h2>
      <p className="mt-1 text-xs leading-relaxed text-navy/70">
        Tus módulos y conocimientos son una parte del proceso. Para el certificado oficial,
        Dirección verifica horas reales, práctica supervisada, evaluación de competencia y protección de menores.
      </p>
      <div className="mt-3 h-2 overflow-hidden rounded-full bg-navy/10"><div className="h-full rounded-full bg-teal" style={{width: `${porcentaje}%`}} /></div>
      <p className="mt-2 text-xs text-navy/70">{ruta.length-pendientes.length}/{ruta.length} módulos de la ruta evaluados · {pendientes.length} pendientes
        {directo ? ' · Safeguarding y desarrollo infantil obligatorios' : ''}
      </p>
      {error && <p className="mt-2 rounded-lg bg-coral/10 p-2 text-sm text-coral" role="alert">{error}</p>}
      {[1, ...(esCoordinador ? [2] : [])].map((nivel) => {
        const registro = registros.find((x) => x.nivel === nivel && x.version_curriculo === VERSION_CURRICULO)
        const titulo = nivel === 1 ? 'Certified Mentor · 180 h' : 'Certified Coordinator · 300 h acumuladas'
        const faltantesNivel = rutas[nivel].filter((id) => mods[id]?.estado !== 'completado')
        const puedeSolicitar = !registro && faltantesNivel.length === 0 && !soloLectura
        return <div key={nivel} className="mt-3 rounded-xl border border-navy/10 bg-cream/50 p-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <strong className="text-sm text-navy">{titulo}</strong>
            <span className="text-xs font-bold text-teal">{registro ? ({solicitada:'Solicitud recibida',en_revision:'En revisión',aprobada:'Aprobada',rechazada:'Requiere ajustes'}[registro.estado]||registro.estado) : 'Sin solicitar'}</span>
          </div>
          {registro?.observaciones && <p className="mt-2 text-xs text-navy/70">Observaciones de Dirección: {registro.observaciones}</p>}
          {registro?.estado === 'aprobada' && <p className="mt-2 text-sm text-teal">✓ Certificación aprobada · {registro.codigo_verificacion} · {Number(registro.horas_validadas)} horas validadas</p>}
          {!registro && <p className="mt-2 text-xs text-navy/65">{puedeSolicitar ? 'Terminaste los módulos exigidos. Solicita revisión de prácticas y bitácora.' : `Quedan ${faltantesNivel.length} módulos exigidos antes de solicitar la revisión.`}</p>}
          {puedeSolicitar && <button disabled={ocupado} className="mt-2 rounded-lg bg-navy px-3 py-2 text-xs font-bold text-white disabled:opacity-50" onClick={() => solicitar(nivel)}>Solicitar validación institucional →</button>}
        </div>
      })}
      <a href="https://drive.google.com/file/d/11l7EomB_1f3qbXIfYmTwKefUgVbiGoTv/view" target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold text-teal underline">Plan de horas y protocolo de evidencias →</a>
    </section>
  )
}