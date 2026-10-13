import { useState } from 'react'
import { actualizarPerfil, crearUsuariaDirecta, recuperarContrasena } from '../lib/backend'
import { formatearFecha, iniciales } from '../lib/calculos'
import { useIdioma } from '../i18n/idioma'
import { obtenerEmailConocido } from '../data/roles'
import AsignarRoles from './AsignarRoles'

const PAISES = ['España', 'México', 'Panamá', 'Estados Unidos', 'Otro']
const PROGRAMAS = ['Off-Campus', 'Dual Diploma', 'Life Skills', 'Partner Learning Center', 'Varios']

// Aprobación y gestión de cuentas. Solo visible para admin.
export default function GestionUsuarias({ perfiles, miId, onRecargar, rolesMapa, compromisosMapa }) {
  const { t } = useIdioma()
  const [ocupado, setOcupado] = useState(null)
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')
  const [infoReset, setInfoReset] = useState(null)
  const [copiado, setCopiado] = useState(false)
  const [editandoNombreId, setEditandoNombreId] = useState(null)
  const [nuevoNombre, setNuevoNombre] = useState('')

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

  async function handleResetPassword(perfil) {
    const correo = perfil.email || obtenerEmailConocido(perfil.id) || obtenerEmailConocido(perfil.nombre)
    if (!correo) {
      setError(`No se encontró un correo electrónico asociado a ${perfil.nombre}.`)
      return
    }
    setOcupado(perfil.id)
    setError('')
    try {
      await recuperarContrasena(correo)
      setInfoReset({
        nombre: perfil.nombre,
        email: correo,
        pass: 'Chanak2026*',
        enviado: true,
      })
    } catch (err) {
      setInfoReset({
        nombre: perfil.nombre,
        email: correo,
        pass: 'Chanak2026*',
        enviado: false,
        error: err.message,
      })
    } finally {
      setOcupado(null)
    }
  }

  async function handleGuardarNombre(id) {
    if (!nuevoNombre.trim()) return
    await cambiar(id, { nombre: nuevoNombre.trim() })
    setEditandoNombreId(null)
  }

  function copiarCredenciales(info) {
    const texto = `Hola ${info.nombre},\n\nTus credenciales para ingresar a la plataforma de entrenamiento Chanak Academy son:\n\n📧 Email: ${info.email}\n🔑 Contraseña de acceso / temporal: ${info.pass}\n🔗 Plataforma: ${window.location.origin}\n\n(Al ingresar por primera vez, el sistema te solicitará cambiar tu contraseña si así lo deseas).`
    navigator.clipboard.writeText(texto)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 3000)
  }

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
        <div className="flex flex-wrap items-center gap-2">
          {activas.length > 0 && (
            <a
              href={`mailto:administration@chanakacademy.org?bcc=${encodeURIComponent(
                activas.map((p) => p.email || obtenerEmailConocido(p.id) || obtenerEmailConocido(p.nombre)).filter(Boolean).join(',')
              )}&subject=${encodeURIComponent('Formación Chanak · Acceso a la plataforma y encuentro este jueves')}&body=${encodeURIComponent(
                `Bendiciones,\n\n` +
                `Como continuación de la invitación de ayer, te confirmamos que la plataforma de formación Chanak ya está disponible. Si todavía no has entrado, puedes comenzar a explorar la introducción y los primeros módulos del tronco común.\n\n` +
                `🔗 Plataforma: https://training.chanakacademy.org/\n` +
                `👤 Usuario: tu correo electrónico registrado\n` +
                `🔑 Contraseña inicial: Chanak2026*\n\n` +
                `En tu primer acceso, la plataforma te pedirá cambiar la contraseña. Si ya ingresaste y la cambiaste, utiliza tu contraseña actual. Si tienes dificultades para acceder, responde a este correo.\n\n` +
                `También te compartimos el enlace de nuestro encuentro:\n` +
                `📅 Jueves 15 de octubre a las 20:00 h, hora de España peninsular\n` +
                `📍 Google Meet: https://meet.google.com/ktt-wtgg-gep\n\n` +
                `Presentaremos el recorrido de formación, resolveremos dudas y conversaremos sobre las posibles áreas de colaboración. Será una oportunidad para conocer mejor la visión y valorar tu disponibilidad para continuar.\n\n` +
                `Gracias por tu interés. Nos alegrará compartir este encuentro contigo.\n\n` +
                `Un abrazo,\n` +
                `Mariela Andrade\n` +
                `Chanak International Academy`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-xl bg-gold/20 border border-gold/40 px-3.5 py-2 text-xs font-bold text-navy shadow-xs transition hover:bg-gold/30 inline-flex items-center gap-1.5"
              title="Abrir un correo con todas las mentoras en CCO (BCC)"
            >
              📢 Enviar Convocatoria a Todas (BCC)
            </a>
          )}
          <button
            onClick={() => setMostrandoForm(!mostrandoForm)}
            className="shrink-0 rounded-xl bg-teal px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-teal/90"
          >
            {mostrandoForm ? '✕ Cancelar' : '➕ Crear Usuaria'}
          </button>
        </div>
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
                <option value="mentora">👩‍🏫 Mentor · Chanak Certified Mentor (180 h)</option>
                <option value="coordinadora">🎯 Coordinator · Chanak Certified Coordinator (300 h)</option>
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

      {/* Modal / Banner de reseteo de contraseña */}
      {infoReset && (
        <div className="rounded-2xl border-2 border-gold bg-gold/15 p-4 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-navy text-sm">
              🔑 Restablecimiento de Acceso · {infoReset.nombre}
            </h4>
            <button
              onClick={() => setInfoReset(null)}
              className="text-xs text-navy/60 hover:text-navy font-bold"
            >
              ✕ Cerrar
            </button>
          </div>
          <p className="text-xs text-navy/80">
            {infoReset.enviado
              ? `✓ Se ha enviado el enlace oficial de restablecimiento a ${infoReset.email}.`
              : `Aviso del servidor de correos: ${infoReset.error || 'Envío por email pendiente'}.`}
            {' '}Puedes compartirle directamente sus credenciales y la contraseña temporal de bienvenida:
          </p>
          <div className="flex flex-wrap items-center gap-3 bg-white p-3 rounded-xl border border-gold/40">
            <div className="text-xs">
              <span className="text-navy/60 font-medium">Email: </span>
              <b className="text-navy">{infoReset.email}</b>
            </div>
            <div className="text-xs">
              <span className="text-navy/60 font-medium">Contraseña temporal: </span>
              <code className="bg-navy/5 px-2 py-0.5 rounded font-mono font-bold text-teal">{infoReset.pass}</code>
            </div>
            <button
              onClick={() => copiarCredenciales(infoReset)}
              className="ml-auto rounded-lg bg-teal px-3 py-1.5 text-xs font-bold text-white shadow-sm hover:bg-teal/90"
            >
              {copiado ? '✓ ¡Copiado!' : '📋 Copiar Datos de Acceso'}
            </button>
          </div>
        </div>
      )}

      {/* Pendientes de aprobación */}
      {pendientes.length > 0 && (
        <div className="rounded-2xl border-2 border-gold bg-gold/8 p-4">
          <div className="text-sm font-bold text-navy">
            {t('usuarias.esperando', { n: pendientes.length })}
          </div>
          <ul className="mt-3 space-y-2">
            {pendientes.map((p) => {
              const correoP = p.email || obtenerEmailConocido(p.id) || obtenerEmailConocido(p.nombre)
              return (
                <li
                  key={p.id}
                  className="flex flex-wrap items-center gap-2 rounded-xl bg-white px-3 py-2.5"
                >
                  <Avatar nombre={p.nombre} />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold text-navy">{p.nombre}</div>
                    <div className="text-xs text-teal font-medium">📧 {correoP || 'Sin email registrado'}</div>
                    <div className="text-[12px] text-navy/50">
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
              )
            })}
          </ul>
        </div>
      )}

      {/* Activas */}
      <div className="rounded-2xl bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold text-navy">
            {t('usuarias.activas')} <span className="font-normal text-navy/50">({activas.length})</span>
          </div>
          <span className="text-[11px] text-navy/50">
            Nombres e emails de mentoras y coordinadoras
          </span>
        </div>
        <ul className="mt-3 space-y-3">
          {activas.map((p) => {
            const correoActiva = p.email || obtenerEmailConocido(p.id) || obtenerEmailConocido(p.nombre)
            return (
              <li
                key={p.id}
                className="flex flex-wrap items-center gap-2 rounded-xl bg-cream/60 px-3 py-3 border border-navy/5"
              >
                <Avatar nombre={p.nombre} />
                <div className="min-w-0 flex-1">
                  {editandoNombreId === p.id ? (
                    <div className="flex items-center gap-1.5 my-1">
                      <input
                        type="text"
                        value={nuevoNombre}
                        onChange={(e) => setNuevoNombre(e.target.value)}
                        className="rounded-lg border border-teal bg-white px-2.5 py-1 text-xs text-navy font-semibold focus:outline-none"
                        autoFocus
                      />
                      <button
                        onClick={() => handleGuardarNombre(p.id)}
                        disabled={ocupado === p.id}
                        className="rounded-lg bg-teal px-2.5 py-1 text-xs font-bold text-white"
                        title="Guardar nombre"
                      >
                        ✓ Guardar
                      </button>
                      <button
                        onClick={() => setEditandoNombreId(null)}
                        className="rounded-lg bg-slate-200 px-2 py-1 text-xs text-navy"
                      >
                        ✕
                      </button>
                    </div>
                  ) : (
                    <div className="text-sm font-semibold text-navy flex items-center gap-1.5">
                      <span>{p.nombre}</span>
                      <button
                        onClick={() => { setEditandoNombreId(p.id); setNuevoNombre(p.nombre) }}
                        className="text-[11px] text-navy/40 hover:text-teal transition"
                        title="Editar nombre para certificado"
                      >
                        ✏️
                      </button>
                      {p.id === miId && <span className="ml-1 text-[11px] font-bold text-teal/80">({t('usuarias.tu')})</span>}
                    </div>
                  )}

                  {/* Correo y botón de resetear contraseña */}
                  <div className="flex flex-wrap items-center gap-2 mt-0.5">
                    <span className="text-xs font-semibold text-teal bg-teal/10 px-2 py-0.5 rounded-md">
                      📧 {correoActiva || 'Sin email registrado'}
                    </span>
                    {correoActiva && (
                      <a
                        href={`mailto:${correoActiva}?subject=${encodeURIComponent('Formación Chanak · Acceso a la plataforma y encuentro este jueves')}&body=${encodeURIComponent(
                          `Bendiciones,\n\n` +
                          `Como continuación de la invitación de ayer, te confirmamos que la plataforma de formación Chanak ya está disponible. Si todavía no has entrado, puedes comenzar a explorar la introducción y los primeros módulos del tronco común.\n\n` +
                          `🔗 Plataforma: https://training.chanakacademy.org/\n` +
                          `👤 Usuario: ${correoActiva}\n` +
                          `🔑 Contraseña inicial: Chanak2026*\n\n` +
                          `En tu primer acceso, la plataforma te pedirá cambiar la contraseña. Si ya ingresaste y la cambiaste, utiliza tu contraseña actual. Si tienes dificultades para acceder, responde a este correo.\n\n` +
                          `También te compartimos el enlace de nuestro encuentro:\n` +
                          `📅 Jueves 15 de octubre a las 20:00 h, hora de España peninsular\n` +
                          `📍 Google Meet: https://meet.google.com/ktt-wtgg-gep\n\n` +
                          `Presentaremos el recorrido de formación, resolveremos dudas y conversaremos sobre las posibles áreas de colaboración. Será una oportunidad para conocer mejor la visión y valorar tu disponibilidad para continuar.\n\n` +
                          `Gracias por tu interés. Nos alegrará compartir este encuentro contigo.\n\n` +
                          `Un abrazo,\n` +
                          `Mariela Andrade\n` +
                          `Chanak International Academy`
                        )}`}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded bg-teal px-2 py-0.5 text-[11px] font-bold text-white hover:bg-teal/80 transition shadow-xs inline-flex items-center gap-1"
                        title="Enviar correo individual con credenciales y reunión"
                      >
                        ✉️ Enviar Acceso y Reunión
                      </a>
                    )}
                    {correoActiva && (
                      <button
                        onClick={() => handleResetPassword(p)}
                        disabled={ocupado === p.id}
                        className="rounded bg-gold/25 px-2 py-0.5 text-[11px] font-bold text-navy hover:bg-gold/45 transition shadow-xs"
                        title="Enviar enlace de recuperación o ver contraseña temporal"
                      >
                        {ocupado === p.id ? '…' : '🔑 Resetear Contraseña'}
                      </button>
                    )}
                  </div>

                  <div className="text-[12px] text-navy/55 mt-1">
                    {p.rol === 'admin' ? (
                      <span className="font-bold text-gold uppercase tracking-wider">👑 {t('usuarias.admin')}</span>
                    ) : (
                      <span className="capitalize font-medium text-navy/70">
                        {p.tipo_acceso === 'visionaria' ? '🤝 Estratégico' : p.tipo_acceso === 'coordinadora' ? '🎯 Coordinator' : '👩‍🏫 Mentor'}
                        {p.pais ? ` · ${p.pais}` : ''}{p.programa ? ` · ${p.programa}` : ''}{p.id_interno ? ` · ID ${p.id_interno}` : ''}
                      </span>
                    )}
                  </div>
                  {compromisosMapa !== undefined && (
                    <div className={`mt-1 text-xs font-semibold ${compromisosMapa?.[p.id] ? 'text-teal' : 'text-gold'}`}>
                      {compromisosMapa?.[p.id]
                        ? `✓ Compromiso ${compromisosMapa[p.id].version} aceptado`
                        : 'Compromiso inicial pendiente'}
                    </div>
                  )}
                </div>

                {p.id !== miId && (
                  <div className="flex flex-wrap items-center gap-1.5">
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
                      className="rounded-lg bg-navy/10 px-2.5 py-1 text-xs font-semibold text-navy disabled:opacity-50"
                    >
                      {p.rol === 'admin' ? t('usuarias.quitarAdmin') : t('usuarias.hacerAdmin')}
                    </button>
                    <button
                      onClick={() => cambiar(p.id, { estado: 'suspendida' })}
                      disabled={ocupado === p.id}
                      className="rounded-lg border border-coral/40 px-2.5 py-1 text-xs font-medium text-coral disabled:opacity-50"
                    >
                      {t('usuarias.suspender')}
                    </button>
                  </div>
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
                <AsignarRoles perfil={p} filas={rolesMapa?.[p.id]} miId={miId} onRecargar={onRecargar} migrado={rolesMapa !== null && rolesMapa !== undefined} funcionesCompromiso={compromisosMapa?.[p.id]?.funciones} />
              </li>
            )
          })}
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
            {suspendidas.map((p) => {
              const correoSusp = p.email || obtenerEmailConocido(p.id) || obtenerEmailConocido(p.nombre)
              return (
                <li
                  key={p.id}
                  className="flex flex-wrap items-center gap-2 rounded-xl bg-cream/60 px-3 py-2.5"
                >
                  <Avatar nombre={p.nombre} apagado />
                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-navy/70 font-semibold">{p.nombre}</div>
                    {correoSusp && <div className="text-xs text-navy/50">📧 {correoSusp}</div>}
                  </div>
                  <button
                    onClick={() => cambiar(p.id, { estado: 'aprobada' })}
                    disabled={ocupado === p.id}
                    className="rounded-lg bg-teal px-3 py-1.5 text-xs font-bold text-white disabled:opacity-50"
                  >
                    {t('usuarias.reactivar')}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {/* Herramienta SQL para administradores */}
      <details className="rounded-xl border border-navy/15 bg-slate-50 p-3.5 text-xs text-navy/70">
        <summary className="cursor-pointer font-bold text-navy hover:text-teal select-none">
          🛠️ Comando SQL de Sincronización de Correos en Supabase (Opcional)
        </summary>
        <div className="mt-2 space-y-2">
          <p>
            Si deseas que la base de datos guarde permanentemente la columna de email dentro de <code>public.perfiles</code>, ejecuta este comando en el <b>SQL Editor</b> de Supabase:
          </p>
          <pre className="rounded-lg bg-navy p-3 font-mono text-[11px] text-cream overflow-x-auto select-all">
{`-- 1. Confirmar email y activar contraseñas de usuarias creadas:
UPDATE auth.users 
SET email_confirmed_at = now(),
    encrypted_password = crypt('Chanak2026*', gen_salt('bf'))
WHERE email IN ('ydita5460@gmail.com', 'florida@chanakacademy.org');

-- 2. Asegurar perfil aprobado en public.perfiles:
INSERT INTO public.perfiles (id, nombre, tipo_acceso, estado, rol)
VALUES ('91bc61f8-ffa8-4eca-a013-0ee8d810dc46', 'Ydita', 'mentora', 'aprobada', 'mentora')
ON CONFLICT (id) DO UPDATE SET estado = 'aprobada', nombre = 'Ydita';

-- 3. Sincronizar columna email (opcional):
ALTER TABLE public.perfiles ADD COLUMN IF NOT EXISTS email text;
UPDATE public.perfiles p
SET email = u.email
FROM auth.users u
WHERE p.id = u.id;`}
          </pre>
        </div>
      </details>

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
