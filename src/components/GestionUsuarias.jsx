import { useState } from 'react'
import { actualizarPerfil } from '../lib/backend'
import { formatearFecha, iniciales } from '../lib/calculos'

// Aprobación y gestión de cuentas. Solo visible para admin.
export default function GestionUsuarias({ perfiles, miId, onRecargar }) {
  const [ocupado, setOcupado] = useState(null)
  const [error, setError] = useState('')

  const pendientes = perfiles.filter((p) => p.estado === 'pendiente')
  const activas = perfiles.filter((p) => p.estado === 'aprobada')
  const suspendidas = perfiles.filter((p) => p.estado === 'suspendida')

  async function cambiar(id, cambios) {
    setError('')
    setOcupado(id)
    try {
      await actualizarPerfil(id, cambios)
      await onRecargar()
    } catch (e) {
      setError(e.message)
    } finally {
      setOcupado(null)
    }
  }

  return (
    <section className="space-y-4">
      <div>
        <h3 className="font-bold text-navy">Usuarias de la plataforma</h3>
        <p className="text-xs text-navy/55">
          Aprueba las cuentas nuevas y gestiona el acceso del equipo.
        </p>
      </div>

      {error && (
        <p className="rounded-xl border-l-4 border-coral bg-coral/8 px-4 py-2.5 text-xs text-coral">
          {error}
        </p>
      )}

      {/* Pendientes de aprobación */}
      {pendientes.length > 0 && (
        <div className="rounded-2xl border-2 border-gold bg-gold/8 p-4">
          <div className="text-sm font-bold text-navy">
            ⏳ {pendientes.length} cuenta{pendientes.length > 1 ? 's' : ''} esperando aprobación
          </div>
          <ul className="mt-3 space-y-2">
            {pendientes.map((p) => (
              <li
                key={p.id}
                className="flex flex-wrap items-center gap-2 rounded-xl bg-white px-3 py-2.5"
              >
                <Avatar nombre={p.nombre} />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-navy">{p.nombre}</div>
                  <div className="text-[11px] text-navy/50">
                    Solicitó acceso el {formatearFecha(p.creado_en?.slice(0, 10))}
                  </div>
                </div>
                <button
                  onClick={() => cambiar(p.id, { estado: 'aprobada' })}
                  disabled={ocupado === p.id}
                  className="rounded-lg bg-teal px-3 py-1.5 text-xs font-bold text-white disabled:opacity-50"
                >
                  {ocupado === p.id ? '…' : '✓ Aprobar'}
                </button>
                <button
                  onClick={() => cambiar(p.id, { estado: 'suspendida' })}
                  disabled={ocupado === p.id}
                  className="rounded-lg border border-coral/40 px-3 py-1.5 text-xs font-medium text-coral disabled:opacity-50"
                >
                  Rechazar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Activas */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="text-sm font-bold text-navy">
          ✅ Activas <span className="font-normal text-navy/50">({activas.length})</span>
        </div>
        <ul className="mt-3 space-y-2">
          {activas.map((p) => (
            <li
              key={p.id}
              className="flex flex-wrap items-center gap-2 rounded-xl bg-cream/60 px-3 py-2.5"
            >
              <Avatar nombre={p.nombre} />
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-navy">
                  {p.nombre}
                  {p.id === miId && <span className="ml-1 text-[10px] text-navy/45">(tú)</span>}
                </div>
                <div className="text-[11px] text-navy/50">
                  {p.rol === 'admin' ? '🔑 Administradora' : '👩‍🏫 Mentora'}
                </div>
              </div>
              {p.id !== miId && (
                <>
                  <button
                    onClick={() =>
                      cambiar(p.id, { rol: p.rol === 'admin' ? 'mentora' : 'admin' })
                    }
                    disabled={ocupado === p.id}
                    className="rounded-lg bg-navy/10 px-2.5 py-1.5 text-[11px] font-semibold text-navy disabled:opacity-50"
                  >
                    {p.rol === 'admin' ? 'Quitar admin' : 'Hacer admin'}
                  </button>
                  <button
                    onClick={() => cambiar(p.id, { estado: 'suspendida' })}
                    disabled={ocupado === p.id}
                    className="rounded-lg border border-coral/40 px-2.5 py-1.5 text-[11px] font-medium text-coral disabled:opacity-50"
                  >
                    Suspender
                  </button>
                </>
              )}
            </li>
          ))}
          {activas.length === 0 && (
            <li className="rounded-xl bg-cream px-4 py-4 text-center text-xs text-navy/50">
              Todavía no hay usuarias activas.
            </li>
          )}
        </ul>
      </div>

      {/* Suspendidas */}
      {suspendidas.length > 0 && (
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="text-sm font-bold text-navy">
            🔒 Sin acceso <span className="font-normal text-navy/50">({suspendidas.length})</span>
          </div>
          <ul className="mt-3 space-y-2">
            {suspendidas.map((p) => (
              <li
                key={p.id}
                className="flex flex-wrap items-center gap-2 rounded-xl bg-cream/60 px-3 py-2.5"
              >
                <Avatar nombre={p.nombre} apagado />
                <div className="min-w-0 flex-1 text-sm text-navy/60">{p.nombre}</div>
                <button
                  onClick={() => cambiar(p.id, { estado: 'aprobada' })}
                  disabled={ocupado === p.id}
                  className="rounded-lg bg-teal px-3 py-1.5 text-xs font-bold text-white disabled:opacity-50"
                >
                  Reactivar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-[11px] leading-relaxed text-navy/50">
        Para borrar una cuenta por completo hay que eliminarla en Supabase → Authentication →
        Users. Aquí puedes suspender el acceso, que es reversible.
      </p>
    </section>
  )
}

function Avatar({ nombre, apagado }) {
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white ${
        apagado ? 'bg-navy/25' : 'bg-teal'
      }`}
    >
      {iniciales(nombre)}
    </div>
  )
}
