import { fechaActividad } from '../lib/actividad'

export default function UltimoInicioSesion({ acceso, error }) {
  return <p className="mt-2 text-sm leading-relaxed text-navy/80"><b>Último inicio de sesión:</b> {error ? 'No disponible: revisa Últimos accesos.' : acceso ? acceso.ultimo_inicio_sesion ? `${fechaActividad(acceso.ultimo_inicio_sesion)} (España)` : 'Sin inicio registrado' : 'Sin datos de autenticación disponibles'}</p>
}
