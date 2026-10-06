import { useState } from 'react'
import { actualizarPerfil, crearUsuariaDirecta } from '../lib/backend'
import { formatearFecha, iniciales } from '../lib/calculos'
import { useIdioma } from '../i18n/idioma'
import AsignarRoles from './AsignarRoles'

const PAISES = ['España', 'México', 'Panamá', 'Estados Unidos', 'Otro']
const PROGRAMAS = ['Off-Campus', 'Dual Diploma', 'Life Skills', 'Partner Learning Center', 'Varios']

// Aprobación y gestión de cuentas. Solo visible para admin.
export default function GestionUsuarias({ perfiles, miId, onRecargar, rolesMapa }) {
  const { t } = useIdioma()
  const [ocupado, setOcupado] = useState(null)
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  // Formulario para crear usuaria directa
  const [mostrandoForm, setMostrandoForm] = useState(false)
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tipoAcceso, setTipoAcceso] = useState('mentora')
  const [creando, setCreando] = useState(false)

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
      setError(/column|columna|schema cache/i.test(e.message) ? t('usuarias.faltaMigracion') : e.message)
    } finally {
      setOcupado(null)
    }
  }

  async function handleCrear(e) {
    e.preventDefault()
    if (!nombre.trim() || !email.trim() || !password) return
    setCreando(true)
    setError('')
    setExito('')
    try {
      await crearUsuariaDirecta(email, password, nombre, tipoAcceso)
      setExito(`✓ Usuaria "${nombre}" creada y activada correctamente.`)
      setNombre('')
      setEmail('')
      setPassword('')
      setMostrandoForm(false)
      await onRecargar()
      setTimeout(() => setExito(''), 4000)
    } catch (err) {
      setError(err.message)
    } finally {
      setCreando(false)
    }
  }

  return (
    <section className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-navy text-lg">{t('usuarias.titulo')}</h3>
          <p className="text-xs text-navy/55">{t('usuarias.sub')}</p>
        </div>
        <button
          onClick={() => setMostrandoForm(!mostrandoForm)}
          className="shrink-0 rounded-xl bg-teal px-4 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-teal/90"
        >
          {mostrandoForm ? '✕ Cancelar' : '➕ Crear Usuaria Directamente'}
        </button>
      </div>

      {exito && (
        <p className="rounded-xl border-l-4 border-teal bg-teal/10 px-4 py-3 text-xs font-semibold text-teal">
          {exito}
        </p>
      )}

      {error && (
        <p className="rounded-xl border-l-4 border-coral bg-coral/8 px-4 py-2.5 text-xs text-coral">
          {error}
        </p>
      )}

      {/* Formulario de creación de usuaria directa */}
      {mostrandoForm && (
        <form onSubmit={handleCrear} className="rounded-2xl border-2 border-teal/30 bg-white p-5 shadow-md space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h4 className="font-bold text-navy text-sm">
              👤 Registrar y Activar Nueva Usuaria
            </h4>
            <span className="text-[11px] font-semibold text-teal uppercase tracking-wide">
              Acceso Directo Sin Aprobación Manual
            </span>
          </div>


          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
                Nombre y Apellido
              </span>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Thiare Urzua"
                className="mt-1 w-full rounded-xl border border-navy/15 bg-slate-50 px-3 py-2 text-sm text-navy"
                required
              />
            </label>
            <label className="block">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
                Correo Electrónico
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nombre@chanakacademy.org"
                className="mt-1 w-full rounded-xl border border-navy/15 bg-slate-50 px-3 py-2 text-sm text-navy"
                required
              />
            </label>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
                Contraseña Asignada
              </span>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Mínimo 6 caracteres"
                className="mt-1 w-full rounded-xl border border-navy/15 bg-slate-50 px-3 py-2 text-sm text-navy font-mono"
                required
              />
            </label>
            <label className="block">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
                Perfil de Acceso
              </span>
              <select
                value={tipoAcceso}
                onChange={(e) => setTipoAcceso(e.target.value)}
                className="mt-1 w-full rounded-xl border border-navy/15 bg-slate-50 px-3 py-2 text-sm text-navy font-medium"
              >
                <option value="mentora">👩‍🏫 Mentor · Chanak Certified Mentor (41.5 h)</option>
                <option value="coordinadora">🎯 Coordinator · Chanak Certified Coordinator (52 h)</option>
                <option value="visionaria">🤝 Estratégico</option>
              </select>
            </label>
          </div>

          <button
            type="submit"
            disabled={creando || !nombre || !email || !password}
            className="w-full rounded-xl bg-teal py-3 text-sm font-bold text-white transition hover:bg-teal/90 disabled:opacity-50"
          >
            {creando ? 'Creando y Activando...' : '✓ Crear y Activar Cuenta'}
          </button>
        </form>
      )}

      {/* Pendientes de aprobación */}
      {pendientes.length > 0 && (
        <div className="rounded-2xl border-2 border-gold bg-gold/8 p-4">
          <div className="text-sm font-bold text-navy">
            {t('usuarias.esperando', { n: pendientes.length })}
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
                  <div className="text-[13px] text-navy/50">
                    {t('usuarias.solicito', { fecha: formatearFecha(p.creado_en?.slice(0, 10)) })}
                  </div>
                </div>
                <button
                  onClick={() => cambiar(p.id, { estado: 'aprobada' })}
                  disabled={ocupado === p.id}
                  className="rounded-lg bg-teal px-3 py-1.5 text-xs font-bold text-white disabled:opacity-50"
                >
                  {ocupado === p.id ? '…' : t('usuarias.aprobar')}
                </button>
                <button
                  onClick={() => cambiar(p.id, { estado: 'suspendida' })}
                  disabled={ocupado === p.id}
                  className="rounded-lg border border-coral/40 px-3 py-1.5 text-xs font-medium text-coral disabled:opacity-50"
                >
                  {t('usuarias.rechazar')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Activas */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="text-sm font-bold text-navy">
          {t('usuarias.activas')} <span className="font-normal text-navy/50">({activas.length})</span>
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
                  {p.id === miId && <span className="ml-1 text-[12px] text-navy/45">{t('usuarias.tu')}</span>}
                </div>
                <div className="text-[13px] text-navy/50">
                  {p.rol === 'admin' ? t('usuarias.admin') : (
                    <span className="capitalize font-medium text-teal">
                      {p.tipo_acceso === 'visionaria' ? '🤝 Estratégico' : p.tipo_acceso === 'coordinadora' ? '🎯 Coordinator' : '👩‍🏫 Mentor'}
                      {p.pais ? ` · ${p.pais}` : ''}{p.programa ? ` · ${p.programa}` : ''}{p.id_interno ? ` · ID ${p.id_interno}` : ''}
                    </span>
                  )}
                </div>
              </div>
              {p.id !== miId && (
                <>
                  <select
                    value={p.tipo_acceso || 'mentora'}
                    onChange={(e) => cambiar(p.id, { tipo_acceso: e.target.value })}
                    disabled={ocupado === p.id}
                    className="rounded-lg bg-navy/5 px-2 py-1 text-xs text-navy border-none font-medium"
                  >
                    <option value="mentora">👩‍🏫 Mentor</option>
                    <option value="coordinadora">🎯 Coordinator</option>
                    <option value="visionaria">🤝 Estratégico</option>
                  </select>
                  <button
                    onClick={() =>
                      cambiar(p.id, { rol: p.rol === 'admin' ? 'mentora' : 'admin' })
                    }
                    disabled={ocupado === p.id}
                    className="rounded-lg bg-navy/10 px-2.5 py-1.5 text-[13px] font-semibold text-navy disabled:opacity-50"
                  >
                    {p.rol === 'admin' ? t('usuarias.quitarAdmin') : t('usuarias.hacerAdmin')}
                  </button>
                  <button
                    onClick={() => cambiar(p.id, { estado: 'suspendida' })}
                    disabled={ocupado === p.id}
                    className="rounded-lg border border-coral/40 px-2.5 py-1.5 text-[13px] font-medium text-coral disabled:opacity-50"
                  >
                    {t('usuarias.suspender')}
                  </button>
                </>
              )}
              <div className="flex w-full flex-wrap gap-1.5 pl-11">
                <select
                  value={p.pais || ''}
                  onChange={(e) => cambiar(p.id, { pais: e.target.value || null })}
                  disabled={ocupado === p.id}
                  className="rounded-lg bg-white px-2 py-1 text-xs text-navy"
                  aria-label={t('usuarias.pais')}
                >
                  <option value="">{t('usuarias.pais')}…</option>
                  {PAISES.map((x) => <option key={x} value={x}>{x}</option>)}
                </select>
                <select
                  value={p.programa || ''}
                  onChange={(e) => cambiar(p.id, { programa: e.target.value || null })}
                  disabled={ocupado === p.id}
                  className="rounded-lg bg-white px-2 py-1 text-xs text-navy"
                  aria-label={t('usuarias.programa')}
                >
                  <option value="">{t('usuarias.programa')}…</option>
                  {PROGRAMAS.map((x) => <option key={x} value={x}>{x}</option>)}
                </select>
                <input
                  defaultValue={p.id_interno || ''}
                  onBlur={(e) => e.target.value !== (p.id_interno || '') && cambiar(p.id, { id_interno: e.target.value || null })}
                  placeholder={t('usuarias.idInterno')}
                  className="w-28 rounded-lg bg-white px-2 py-1 text-xs text-navy"
                />
              </div>
              <AsignarRoles perfil={p} filas={rolesMapa?.[p.id]} miId={miId} onRecargar={onRecargar} migrado={rolesMapa !== null && rolesMapa !== undefined} />
            </li>
          ))}
          {activas.length === 0 && (
            <li className="rounded-xl bg-cream px-4 py-4 text-center text-xs text-navy/50">
              {t('usuarias.sinActivas')}
            </li>
          )}
        </ul>
      </div>

      {/* Suspendidas */}
      {suspendidas.length > 0 && (
        <div className="rounded-2xl bg-white p-4 shadow-sm">
          <div className="text-sm font-bold text-navy">
            {t('usuarias.sinAcceso')} <span className="font-normal text-navy/50">({suspendidas.length})</span>
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
                  {t('usuarias.reactivar')}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="text-[13px] leading-relaxed text-navy/50">
        {t('usuarias.notaBorrado')}
      </p>
    </section>
  )
}

function Avatar({ nombre, apagado }) {
  return (
    <div
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white ${
        apagado ? 'bg-navy/25' : 'bg-teal'
      }`}
    >
      {iniciales(nombre)}
    </div>
  )
}
