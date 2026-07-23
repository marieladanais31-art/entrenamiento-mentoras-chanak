import { useState } from 'react'
import { getModulo, RECURSOS_GENERALES, MSA_LEYENDA } from '../data/curriculum'
import {
  getProgreso,
  setEstadoModulo,
  setNotasModulo,
  formatearFecha,
} from '../lib/storage'
import EstadoBadge from './ui/EstadoBadge'

export default function ModuleView({ mentora, moduloId, esAdmin, onCambio, onVolver }) {
  const modulo = getModulo(moduloId)
  const [progreso, setProgreso] = useState(() => getProgreso(mentora.id))
  const p = progreso.modulos[moduloId]
  const estado = p?.estado || 'pendiente'

  const [confirmandoFecha, setConfirmandoFecha] = useState(false)
  const [fecha, setFecha] = useState(() => new Date().toISOString().slice(0, 10))
  const [notas, setNotas] = useState(p?.notas || '')
  const [notasGuardadas, setNotasGuardadas] = useState(false)

  if (!modulo) return null

  function marcarEnCurso() {
    setProgreso({ ...setEstadoModulo(mentora.id, moduloId, 'en_curso') })
    onCambio()
  }

  function confirmarCompletado() {
    setProgreso({ ...setEstadoModulo(mentora.id, moduloId, 'completado', fecha) })
    setConfirmandoFecha(false)
    onCambio()
  }

  function reabrir() {
    setProgreso({ ...setEstadoModulo(mentora.id, moduloId, 'en_curso') })
    onCambio()
  }

  function guardarNotas() {
    setNotasModulo(mentora.id, moduloId, notas)
    setNotasGuardadas(true)
    setTimeout(() => setNotasGuardadas(false), 2000)
  }

  return (
    <div className="space-y-4">
      <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">
        ← Volver al bloque
      </button>

      {/* Ficha del módulo */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-teal">
              Módulo {modulo.id} · Bloque {modulo.bloqueId.slice(1)} — {modulo.bloqueTitulo}
            </div>
            <h2 className="mt-1 text-lg font-bold leading-snug text-navy">{modulo.titulo}</h2>
          </div>
          <EstadoBadge estado={estado} />
        </div>

        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <Dato etiqueta="Horas" valor={`${modulo.horas} h`} />
          <Dato etiqueta="Modalidad" valor={modulo.modalidad} />
          <Dato etiqueta="Evaluación" valor={modulo.evaluacion} />
          <Dato
            etiqueta="Completado"
            valor={p?.fechaCompletado ? formatearFecha(p.fechaCompletado) : '—'}
          />
        </dl>

        <div className="mt-4">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-navy/45">
            Indicadores MSA que cubre
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {modulo.indicadores.map((ind) => (
              <span
                key={ind}
                title={MSA_LEYENDA[ind[0]] || ''}
                className="rounded bg-navy/5 px-2 py-1 font-mono text-xs font-medium text-navy/75"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        {/* Acciones de estado */}
        <div className="mt-5 space-y-2">
          {estado === 'pendiente' && (
            <button
              onClick={marcarEnCurso}
              className="w-full rounded-xl bg-teal py-3 text-sm font-semibold text-white transition hover:bg-teal/90"
            >
              🔵 Marcar como En Curso
            </button>
          )}
          {estado !== 'completado' && !confirmandoFecha && (
            <button
              onClick={() => setConfirmandoFecha(true)}
              className="w-full rounded-xl bg-navy py-3 text-sm font-semibold text-cream transition hover:bg-navy/90"
            >
              ✅ Marcar como Completado
            </button>
          )}
          {confirmandoFecha && (
            <div className="rounded-xl border-2 border-teal bg-teal/5 p-4">
              <label className="block text-xs font-semibold text-navy">
                Fecha de completado{esAdmin ? ' (puede ser retroactiva)' : ''}
              </label>
              <input
                type="date"
                value={fecha}
                max={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setFecha(e.target.value)}
                className="mt-2 w-full rounded-lg border border-navy/20 bg-white px-3 py-2 text-sm"
              />
              <div className="mt-3 flex gap-2">
                <button
                  onClick={confirmarCompletado}
                  className="flex-1 rounded-lg bg-teal py-2.5 text-sm font-semibold text-white"
                >
                  Confirmar ({modulo.horas}h)
                </button>
                <button
                  onClick={() => setConfirmandoFecha(false)}
                  className="rounded-lg bg-navy/10 px-4 py-2.5 text-sm font-medium text-navy"
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
          {estado === 'completado' && (
            <button
              onClick={reabrir}
              className="w-full rounded-xl border border-coral/40 py-2.5 text-xs font-medium text-coral transition hover:bg-coral/5"
            >
              Reabrir módulo (volver a En Curso)
            </button>
          )}
        </div>
      </div>

      {/* Contenido del módulo (placeholder) */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold text-navy">📚 Contenido del módulo</h3>
        <p className="mt-2 rounded-xl bg-cream px-4 py-3 text-sm leading-relaxed text-navy/70">
          El contenido detallado de este módulo se trabaja con los materiales de NotebookLM y la
          carpeta de Drive de formación. Modalidad: <b>{modulo.modalidad}</b>. La evidencia de
          evaluación (<b>{modulo.evaluacion}</b>) se archiva en la carpeta 05_PRACTICES.
        </p>
      </div>

      {/* Recursos */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold text-navy">🔗 Recursos</h3>
        <ul className="mt-3 space-y-2">
          {RECURSOS_GENERALES.map((rec) => (
            <li key={rec.url}>
              <a
                href={rec.url}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl bg-cream px-4 py-3 transition hover:bg-teal/10"
              >
                <div className="text-sm font-semibold text-teal">{rec.nombre} ↗</div>
                <div className="text-xs text-navy/60">{rec.descripcion}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Notas de la mentora */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold text-navy">✍️ Notas y reflexión</h3>
        <textarea
          value={notas}
          onChange={(e) => setNotas(e.target.value)}
          rows={4}
          placeholder="Reflexiones, aprendizajes clave, dudas para el taller…"
          className="mt-3 w-full rounded-xl border border-navy/15 bg-cream/50 px-3 py-2.5 text-sm leading-relaxed placeholder:text-navy/35 focus:border-teal focus:outline-none"
        />
        <button
          onClick={guardarNotas}
          className="mt-2 rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-cream transition hover:bg-navy/90"
        >
          {notasGuardadas ? '✓ Guardado' : 'Guardar notas'}
        </button>
      </div>
    </div>
  )
}

function Dato({ etiqueta, valor }) {
  return (
    <div className="rounded-xl bg-cream px-3 py-2">
      <dt className="text-[10px] font-semibold uppercase tracking-wide text-navy/45">
        {etiqueta}
      </dt>
      <dd className="mt-0.5 text-sm font-medium text-navy">{valor}</dd>
    </div>
  )
}
