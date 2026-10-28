import { useMemo, useState } from 'react'
import { resumirAccesos } from '../lib/accesos'
import { duracionActividad, fechaActividad } from '../lib/actividad'
import { resumirPersona } from '../lib/resumenActividad'
import UltimoInicioSesion from './UltimoInicioSesion'

export default function AccesosAdmin({ perfiles, accesosMapa, errorAccesos, actividad, errorActividad, progresos, rolesMapa, compromisosMapa, onActualizar, onVerUsuaria }) {
  const [buscar, setBuscar] = useState('')
  const [filtro, setFiltro] = useState('todos')
  const [actualizando, setActualizando] = useState(false)
  const filas = useMemo(() => resumirAccesos(perfiles, accesosMapa, actividad), [perfiles, accesosMapa, actividad])
  const filtroValido = (errorAccesos && filtro === 'sin-inicio') || ((errorAccesos || errorActividad) && filtro === 'siete-dias') ? 'todos' : filtro
  const visibles = filas.filter(f => f.perfil.nombre.toLowerCase().includes(buscar.trim().toLowerCase()) && (filtroValido === 'todos' || filtroValido === 'sin-inicio' && f.sinInicio || filtroValido === 'siete-dias' && f.sinSenalSieteDias))
  async function actualizar() { setActualizando(true); try { await onActualizar() } finally { setActualizando(false) } }
  return <section className="space-y-4" aria-labelledby="ultimos-accesos-titulo">
    <div className="rounded-2xl bg-white p-5 shadow-sm space-y-3">
      <h3 id="ultimos-accesos-titulo" className="text-2xl font-bold text-navy">Últimos accesos de usuarios</h3>
      <p className="text-base leading-relaxed">El inicio de sesión procede del registro de autenticación. La actividad de la app se mide por separado: alguien puede volver con la sesión conservada sin iniciar sesión de nuevo.</p>
      <p className="text-sm leading-relaxed text-navy/75">Ordenado por la señal más reciente entre inicio y actividad registrada. Horarios de España. “Sin inicio registrado” no significa que podamos demostrar que nunca entró; “sin medición” tampoco significa que no haya trabajado.</p>
      {errorAccesos && <p role="alert" className="rounded-xl bg-gold/15 p-4 text-base">No se pudieron consultar los inicios de sesión: {errorAccesos}. No se muestran como si fueran cuentas sin acceso.</p>}
      {errorActividad && <p role="alert" className="rounded-xl bg-gold/15 p-4 text-base">La medición de actividad no está disponible. Los inicios de sesión siguen siendo independientes.</p>}
      <div className="flex flex-wrap gap-3 text-base">
        <input aria-label="Buscar usuario en accesos" placeholder="Buscar nombre…" value={buscar} onChange={e => setBuscar(e.target.value)} className="min-h-12 flex-1 min-w-0 rounded-xl border border-navy/20 px-4 py-3" />
        <select aria-label="Filtrar últimos accesos" value={filtroValido} onChange={e => setFiltro(e.target.value)} className="min-h-12 rounded-xl border border-navy/20 px-3 py-3"><option value="todos">Todas las cuentas ({perfiles.length})</option><option value="sin-inicio" disabled={!!errorAccesos}>Sin inicio de sesión registrado</option><option value="siete-dias" disabled={!!errorAccesos || !!errorActividad}>Sin señal registrada en 7 días</option></select>
        <button onClick={actualizar} disabled={actualizando} className="min-h-12 rounded-xl bg-teal px-5 py-3 font-bold text-white disabled:opacity-50">{actualizando ? 'Actualizando…' : 'Actualizar accesos'}</button>
      </div>
      <p className="text-sm text-navy/70">{visibles.length} de {perfiles.length} cuentas. Para saber qué módulos o entregas faltan, utiliza también “Actividad y pendientes”.</p>
    </div>
    {visibles.map(f => {
      const p = f.perfil
      const r = resumirPersona(p, progresos[p.id], rolesMapa?.[p.id], compromisosMapa?.[p.id], actividad)
      return <article key={p.id} className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-3"><div><h4 className="text-xl font-bold text-navy">{p.nombre}</h4><p className="mt-1 text-sm text-navy/70">{p.estado}{p.pais ? ` · ${p.pais}` : ''}</p></div><button onClick={() => onVerUsuaria(p.id, p.nombre, p.id_interno)} className="min-h-11 rounded-xl bg-navy/5 px-4 py-3 font-bold text-navy">Abrir su avance</button></div>
        <UltimoInicioSesion acceso={accesosMapa?.[p.id]} error={errorAccesos} />
        <dl className="mt-4 grid gap-4 text-base sm:grid-cols-2 lg:grid-cols-4">
          <div><dt className="font-bold">Última actividad en la app</dt><dd className="mt-1">{errorActividad ? 'No disponible' : f.ultimaActividad !== null ? fechaActividad(new Date(f.ultimaActividad).toISOString()) : 'Sin actividad medida'}</dd></div>
          <div><dt className="font-bold">Tiempo activo aproximado</dt><dd className="mt-1">{errorActividad ? 'No disponible' : r.tieneMedicion ? duracionActividad(r.segundos) : 'Sin medición histórica'}</dd></div>
          <div><dt className="font-bold">Avance guardado</dt><dd className="mt-1">{r.completados}/{r.total} módulos ({r.porcentaje} %)</dd></div>
          <div><dt className="font-bold">Último cambio de progreso</dt><dd className="mt-1">{fechaActividad(r.ultimoCambio)}</dd></div>
        </dl>
      </article>
    })}
    {!visibles.length && <p className="rounded-xl bg-white p-5 text-base">No hay cuentas con este filtro.</p>}
  </section>
}
