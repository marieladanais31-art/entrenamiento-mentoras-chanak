import { useMemo, useState } from 'react'
import { numModulo } from '../data/curriculum'
import { duracionActividad, fechaActividad } from '../lib/actividad'
import { resumirPersona } from '../lib/resumenActividad'

const PASOS = { video: 'Vídeo', lectura: 'Lectura', practica: 'Práctica', quiz: 'Evaluación', evidencia: 'Evidencia', completado: 'Pantalla de cierre' }

export default function ActividadAdmin({ perfiles, progresos, rolesMapa, compromisosMapa, actividad, errorActividad, onActualizar, onVerUsuaria }) {
  const [buscar, setBuscar] = useState('')
  const [filtro, setFiltro] = useState('todos')
  const [actualizando, setActualizando] = useState(false)
  const filas = useMemo(() => perfiles.map((p) => ({ perfil: p, resumen: resumirPersona(p, progresos[p.id], rolesMapa?.[p.id], compromisosMapa?.[p.id], actividad) })), [perfiles, progresos, rolesMapa, compromisosMapa, actividad])
  const visibles = filas.filter(({ perfil, resumen }) => perfil.nombre.toLowerCase().includes(buscar.toLowerCase()) && (filtro === 'todos' || filtro === 'pendientes' && resumen.atencion > 0 || filtro === 'sin-medicion' && !resumen.tieneMedicion))
  async function actualizar() { setActualizando(true); try { await onActualizar() } finally { setActualizando(false) } }
  return <section className="space-y-4">
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="text-xl font-bold text-navy">Actividad y partes pendientes</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy/75">El tiempo medido comienza con esta actualización. Suma tiempo aproximado con la app visible y actividad reciente. Se pausa tras 2 minutos sin interacción. No equivale a horas acreditadas ni demuestra atención o aprendizaje.</p>
      <p className="mt-2 text-sm text-navy/75">Las secciones abiertas solo indican visitas. Las evaluaciones, evidencias y cierres se comprueban con el progreso guardado, incluido el avance anterior reconocido.</p>
      <p className="mt-2 text-sm text-navy/65">Guardado aproximadamente cada 30 segundos. El cierre del navegador, la falta de conexión o el uso de varios dispositivos pueden afectar la precisión. Horarios de España.</p>
      {errorActividad && <p role="alert" className="mt-3 rounded-lg bg-gold/15 p-3 text-sm text-navy">No se pudo cargar la medición de tiempo: {errorActividad}. El progreso académico sigue disponible.</p>}
      {rolesMapa == null && <p className="mt-2 text-sm text-coral">No se pudieron consultar los roles. El porcentaje muestra solo el tronco común.</p>}
      <div className="mt-4 flex flex-wrap gap-3">
        <input aria-label="Buscar persona" value={buscar} onChange={(e) => setBuscar(e.target.value)} placeholder="Buscar persona…" className="min-w-0 flex-1 rounded-lg border border-navy/20 px-3 py-2" />
        <select aria-label="Filtrar actividad" value={filtro} onChange={(e) => setFiltro(e.target.value)} className="rounded-lg border border-navy/20 px-3 py-2"><option value="todos">Todas las personas</option><option value="pendientes">Con partes pendientes en módulos iniciados</option><option value="sin-medicion">Sin tiempo medido todavía</option></select>
        <button onClick={actualizar} disabled={actualizando} className="rounded-lg bg-teal px-4 py-2 font-bold text-white disabled:opacity-50">{actualizando ? 'Actualizando…' : 'Actualizar datos'}</button>
      </div>
    </div>
    {visibles.map(({ perfil, resumen: r }) => <article key={perfil.id} className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div><h4 className="text-lg font-bold text-navy">{perfil.nombre}</h4><p className="mt-1 text-sm text-navy/70">{perfil.rol === 'admin' ? 'Administración' : perfil.estado} · {r.completados}/{r.total} módulos de su ruta completados o reconocidos ({r.porcentaje} %)</p></div>
        <button onClick={() => onVerUsuaria(perfil.id, perfil.nombre, perfil.id_interno)} className="rounded-lg bg-navy/5 px-3 py-2 text-sm font-bold text-navy">Abrir su avance</button>
      </div>
      <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
        <div><dt className="font-semibold text-navy">Tiempo activo aproximado</dt><dd>{errorActividad ? 'No disponible' : r.tieneMedicion ? duracionActividad(r.segundos) : 'Sin medición histórica'}</dd></div>
        <div><dt className="font-semibold text-navy">Última actividad medida</dt><dd>{errorActividad ? 'No disponible' : fechaActividad(r.ultimaActividad)}</dd></div>
        <div><dt className="font-semibold text-navy">Último cambio de progreso</dt><dd>{fechaActividad(r.ultimoCambio)}</dd></div>
        <div><dt className="font-semibold text-navy">Módulos iniciados para revisar</dt><dd>{r.atencion}</dd></div>
      </dl>
      <details className="mt-4 border-t border-navy/10 pt-3">
        <summary className="cursor-pointer font-semibold text-teal">Ver módulos y qué falta</summary>
        <div className="mt-3 space-y-3">{r.modulos.map((m) => <section key={m.id} className="rounded-xl border border-navy/15 p-4 text-sm">
          <h5 className="font-bold text-navy">{numModulo(m.id)} · {m.titulo}{!m.requerido ? ' (fuera de su ruta actual)' : ''}</h5>
          <p className="mt-1">Estado: <b>{m.progreso.estado === 'reconocido' ? 'Avance anterior reconocido' : m.progreso.estado === 'completado' ? 'Completado' : m.iniciado ? 'Iniciado, sin cierre' : 'Sin iniciar'}</b> · Tiempo: {errorActividad ? 'No disponible' : m.medicion ? duracionActividad(m.medicion.segundos) : 'Sin medición'}</p>
          <p className="mt-2">Secciones abiertas desde la actualización: {m.medicion?.pasos.size ? [...m.medicion.pasos].map((k) => PASOS[k] || k).join(', ') : 'Sin visitas medidas. No permite saber qué leyó antes.'}</p>
          <p className="mt-2">Evaluación: {m.progreso.quiz ? `${m.progreso.quiz.aprobado ? 'Aprobada' : 'Sin aprobar'} (${m.progreso.quiz.aciertos}/${m.progreso.quiz.total})` : m.quizRequerido ? 'Sin resultado guardado' : 'No aplica'}. Evidencia: {m.evidencia ? [m.progreso.notas?.trim() ? 'texto guardado' : '', m.progreso.entregableNombre || m.progreso.entregableUrl ? 'archivo entregado' : ''].filter(Boolean).join(' y ') : m.evidenciaRequerida ? 'Sin entrega registrada' : 'No aplica'}.</p>
          {m.pendientes.length > 0 && m.iniciado && <p className="mt-2 rounded-lg bg-gold/15 p-2 text-navy"><b>Para revisar:</b> {m.pendientes.join(' · ')}{m.progreso.estado === 'reconocido' ? '. El avance reconocido se conserva; estos detalles pueden no existir en los registros anteriores.' : m.cierre ? '. El módulo figura completado, pero faltan estos registros.' : ''}</p>}
        </section>)}</div>
      </details>
    </article>)}
    {!visibles.length && <p className="rounded-xl bg-white p-5 text-navy/65">No hay personas con este filtro.</p>}
  </section>
}
