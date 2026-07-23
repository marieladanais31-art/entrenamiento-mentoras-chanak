import { useState } from 'react'
import { BLOQUES } from '../data/curriculum'
import {
  getMentoras,
  agregarMentora,
  getProgreso,
  setEstadoModulo,
  resumenMentora,
  formatearFecha,
} from '../lib/storage'

export default function AdminView({ onVerMentora, onCambio }) {
  const [, setTick] = useState(0)
  const refrescar = () => {
    setTick((t) => t + 1)
    onCambio()
  }
  const mentoras = getMentoras()
  const [nuevoNombre, setNuevoNombre] = useState('')
  const [marcando, setMarcando] = useState(null) // { mentoraId, moduloId }
  const [fecha, setFecha] = useState(() => new Date().toISOString().slice(0, 10))

  function crearMentora(e) {
    e.preventDefault()
    if (agregarMentora(nuevoNombre)) {
      setNuevoNombre('')
      refrescar()
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-navy p-5 text-cream shadow-sm">
        <h2 className="text-lg font-bold">Panel de Administración</h2>
        <p className="mt-1 text-xs text-cream/70">
          Mariela Andrade · Head of LSP · Registro retroactivo y seguimiento del equipo
        </p>
      </div>

      {/* Comparativa de mentoras */}
      <section>
        <h3 className="mb-3 font-bold text-navy">Progreso comparativo</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {mentoras.map((m) => {
            const r = resumenMentora(m.id)
            const pct = Math.min(100, Math.round((r.horas / r.metaHoras) * 100))
            return (
              <div key={m.id} className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-xs font-bold text-white">
                    {m.iniciales}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-navy">{m.nombre}</div>
                    <div className="text-[11px] text-navy/55">
                      Nivel {r.nivelActual} · {r.horas}h / {r.metaHoras}h · {r.completados}{' '}
                      {r.completados === 1 ? 'módulo' : 'módulos'} ✅
                    </div>
                  </div>
                  <div className="text-sm font-bold text-teal">{pct}%</div>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy/10">
                  <div
                    className={`h-full rounded-full ${pct >= 100 ? 'bg-gold' : 'bg-teal'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                {r.elegibleMentor && !r.elegibleCoordinadora && (
                  <div className="mt-2 text-[11px] font-semibold text-gold">
                    🎓 Elegible: Chanak-Certified Mentor
                  </div>
                )}
                {r.elegibleCoordinadora && (
                  <div className="mt-2 text-[11px] font-semibold text-gold">
                    🎓 Elegible: Chanak-Certified Coordinator
                  </div>
                )}
                <button
                  onClick={() => onVerMentora(m.id)}
                  className="mt-3 w-full rounded-lg bg-navy/5 py-2 text-xs font-semibold text-navy transition hover:bg-navy/10"
                >
                  Abrir su panel completo →
                </button>
              </div>
            )
          })}
        </div>
      </section>

      {/* Añadir mentora */}
      <section className="rounded-2xl bg-white p-4 shadow-sm">
        <h3 className="text-sm font-bold text-navy">➕ Añadir nueva mentora</h3>
        <form onSubmit={crearMentora} className="mt-2 flex gap-2">
          <input
            value={nuevoNombre}
            onChange={(e) => setNuevoNombre(e.target.value)}
            placeholder="Nombre y apellido"
            className="min-w-0 flex-1 rounded-lg border border-navy/15 bg-cream/50 px-3 py-2 text-sm focus:border-teal focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-teal px-4 py-2 text-sm font-semibold text-white hover:bg-teal/90"
          >
            Añadir
          </button>
        </form>
      </section>

      {/* Registro retroactivo por mentora */}
      <section>
        <h3 className="mb-1 font-bold text-navy">Registro retroactivo de módulos</h3>
        <p className="mb-3 text-xs text-navy/55">
          Marca módulos como completados en nombre de una mentora, con la fecha real en que los
          estudió. Las horas se suman automáticamente.
        </p>
        <div className="space-y-4">
          {mentoras.map((m) => (
            <TablaRetroactiva
              key={m.id}
              mentora={m}
              marcando={marcando}
              setMarcando={setMarcando}
              fecha={fecha}
              setFecha={setFecha}
              onConfirmar={(moduloId, f) => {
                setEstadoModulo(m.id, moduloId, 'completado', f)
                setMarcando(null)
                refrescar()
              }}
              onDeshacer={(moduloId) => {
                setEstadoModulo(m.id, moduloId, 'pendiente')
                refrescar()
              }}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

function TablaRetroactiva({
  mentora,
  marcando,
  setMarcando,
  fecha,
  setFecha,
  onConfirmar,
  onDeshacer,
}) {
  const [abierto, setAbierto] = useState(false)
  const progreso = getProgreso(mentora.id)

  return (
    <div className="rounded-2xl bg-white shadow-sm">
      <button
        onClick={() => setAbierto(!abierto)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-semibold text-navy">{mentora.nombre}</span>
        <span className="text-xs text-navy/50">{abierto ? '▲ Cerrar' : '▼ Abrir módulos'}</span>
      </button>
      {abierto && (
        <div className="border-t border-navy/5 px-4 pb-4">
          {BLOQUES.map((b) => (
            <div key={b.id} className="mt-3">
              <div className="text-[11px] font-bold uppercase tracking-wide text-teal">
                Bloque {b.numero} — {b.titulo}
              </div>
              <ul className="mt-1.5 space-y-1">
                {b.modulos.map((mod) => {
                  const p = progreso.modulos[mod.id]
                  const completado = p?.estado === 'completado'
                  const esEste =
                    marcando?.mentoraId === mentora.id && marcando?.moduloId === mod.id
                  return (
                    <li
                      key={mod.id}
                      className="flex flex-wrap items-center gap-2 rounded-lg bg-cream/60 px-3 py-2 text-xs"
                    >
                      <span className="font-semibold text-navy">{mod.id}</span>
                      <span className="min-w-0 flex-1 truncate text-navy/70">{mod.titulo}</span>
                      <span className="text-navy/50">{mod.horas}h</span>
                      {completado ? (
                        <span className="flex items-center gap-2">
                          <span className="font-medium text-gold">
                            ✅ {formatearFecha(p.fechaCompletado)}
                          </span>
                          <button
                            onClick={() => onDeshacer(mod.id)}
                            className="text-coral hover:underline"
                          >
                            deshacer
                          </button>
                        </span>
                      ) : esEste ? (
                        <span className="flex items-center gap-1.5">
                          <input
                            type="date"
                            value={fecha}
                            max={new Date().toISOString().slice(0, 10)}
                            onChange={(e) => setFecha(e.target.value)}
                            className="rounded border border-navy/20 bg-white px-1.5 py-1 text-[11px]"
                          />
                          <button
                            onClick={() => onConfirmar(mod.id, fecha)}
                            className="rounded bg-teal px-2 py-1 font-semibold text-white"
                          >
                            OK
                          </button>
                          <button
                            onClick={() => setMarcando(null)}
                            className="text-navy/50 hover:underline"
                          >
                            ✕
                          </button>
                        </span>
                      ) : (
                        <button
                          onClick={() => setMarcando({ mentoraId: mentora.id, moduloId: mod.id })}
                          className="rounded bg-navy/10 px-2 py-1 font-semibold text-navy hover:bg-navy/15"
                        >
                          Marcar ✓
                        </button>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
