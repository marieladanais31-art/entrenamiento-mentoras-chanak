import { useState } from 'react'
import {
  actualizarPerfil,
  crearUsuariaDirecta,
  recuperarContrasena,
  forzarCambioPassword,
  resetearProgresoUsuaria,
  resetearCompromisoUsuaria,
} from '../lib/backend'
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
  const [copiadoId, setCopiadoId] = useState(null)
  const [modalCompromiso, setModalCompromiso] = useState(null)
  const [modalReset, setModalReset] = useState(null)
  const [mostrandoBuscadorReset, setMostrandoBuscadorReset] = useState(false)
  const [emailManualReset, setEmailManualReset] = useState('')

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

  function abrirModalReset(perfil, correoOpcional = null) {
    const correo = correoOpcional || perfil?.email || obtenerEmailConocido(perfil?.id) || obtenerEmailConocido(perfil?.nombre) || ''
    setModalReset({
      perfil,
      correo: (correo || '').trim().toLowerCase(),
      nombre: perfil?.nombre || (correo ? correo.split('@')[0] : 'Usuaria'),
    })
  }

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
        pass: 'Enlace de acceso enviado al correo',
        enviado: true,
      })
    } catch (err) {
      setInfoReset({
        nombre: perfil.nombre,
        email: correo,
        pass: 'Enlace no enviado',
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
    const texto = `Hola ${info.nombre},\n\nTus credenciales para ingresar a la plataforma de entrenamiento Chanak Academy son:\n\n📧 Email: ${info.email}\n🔑 Acceso: ${info.pass}\n🔗 Plataforma: ${window.location.origin}\n\n(Puedes ingresar o restablecer tu contraseña desde la pantalla de inicio con "¿Olvidaste tu contraseña?").`
    navigator.clipboard.writeText(texto)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 3000)
  }

  function copiarCorreoIndividual(correo) {
    const texto = `Asunto: Formación Chanak · Acceso a la plataforma y encuentro este jueves\nDe: administration@chanakacademy.org\nPara: ${correo}\n\nBendiciones,\n\nComo continuación de la invitación de ayer, te confirmamos que la plataforma de formación Chanak ya está disponible. Si todavía no has entrado, puedes comenzar a explorar la introducción y los primeros módulos del tronco común.\n\n🔗 Plataforma: https://training.chanakacademy.org/\n👤 Usuario: ${correo}\n🔑 Acceso: Ingresa con tu contraseña segura registrada. Si es tu primer ingreso o deseas definir una nueva contraseña, pulsa "¿Olvidaste tu contraseña?" en la pantalla de inicio.\n\nTambién te compartimos el enlace de nuestro encuentro:\n📅 Jueves 15 de octubre a las 20:00 h, hora de España peninsular\n📍 Google Meet: https://meet.google.com/ktt-wtgg-gep\n\nPresentaremos el recorrido de formación, resolveremos dudas y conversaremos sobre las posibles áreas de colaboración. Será una oportunidad para conocer mejor la visión y valorar tu disponibilidad para continuar.\n\nGracias por tu interés. Nos alegrará compartir este encuentro contigo.\n\nUn abrazo,\nMariela Andrade\nChanak International Academy`
    navigator.clipboard.writeText(texto)
    setCopiadoId(correo)
    setTimeout(() => setCopiadoId(null), 3000)
  }

  function copiarListaBcc(correos) {
    navigator.clipboard.writeText(correos.join(', '))
    setCopiadoId('bcc_list')
    setTimeout(() => setCopiadoId(null), 3000)
  }

  function imprimirComprobante(perfil, compromiso) {
    const w = window.open('', '_blank', 'width=850,height=950')
    if (!w) {
      alert('Por favor permite ventanas emergentes en tu navegador para generar el comprobante.')
      return
    }
    const fechaAceptado = compromiso?.aceptado_en
      ? new Date(compromiso.aceptado_en).toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'medium' })
      : '[Dato no conservado en el registro histórico]'
    const version = compromiso?.version || '[Versión no registrada históricamente]'
    const nombreFirmante = compromiso?.nombre_completo || perfil?.nombre || '[Dato no conservado en el registro histórico]'
    const emailFirmante = perfil?.email || '[Dato no conservado en el registro histórico]'
    const territorio = compromiso?.territorio || perfil?.pais || '[No especificado]'
    const perfilAcceso = perfil?.tipo_acceso || 'mentora'
    const idUsuario = perfil?.id || '—'

    let funcionesTxt = 'Tronco Común'
    if (compromiso?.funciones && Array.isArray(compromiso.funciones)) {
      const fnNames = compromiso.funciones.filter((f) => typeof f === 'string')
      if (fnNames.length > 0) funcionesTxt = fnNames.join(', ')
    }

    const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Comprobante de Consentimiento y Compromiso · ${nombreFirmante}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; color: #152238; margin: 40px; line-height: 1.5; font-size: 13px; }
    .header { border-bottom: 2px solid #008080; padding-bottom: 15px; margin-bottom: 25px; display: flex; justify-content: space-between; align-items: flex-start; }
    .title { font-size: 18px; font-weight: bold; color: #152238; margin: 0; }
    .subtitle { font-size: 12px; color: #008080; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px; }
    .fldoe { font-size: 11px; color: #64748b; margin-top: 4px; }
    .meta-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 25px; }
    .meta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .meta-item b { display: block; font-size: 10px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 2px; }
    .section-title { font-size: 13px; font-weight: bold; color: #152238; border-bottom: 1px solid #cbd5e1; padding-bottom: 6px; margin: 25px 0 12px; text-transform: uppercase; letter-spacing: 0.05em; }
    .clause { margin-bottom: 12px; padding-left: 22px; position: relative; font-size: 12.5px; }
    .clause:before { content: "✓"; position: absolute; left: 0; color: #008080; font-weight: bold; font-size: 14px; }
    .audit-notice { background: #fffbeb; border: 1px solid #fef3c7; border-radius: 6px; padding: 12px; font-size: 11.5px; color: #92400e; margin-top: 20px; }
    .stamp { margin-top: 35px; border-top: 2px dashed #cbd5e1; padding-top: 20px; display: flex; justify-content: space-between; align-items: flex-end; }
    .stamp-box { border: 2px solid #008080; border-radius: 6px; padding: 10px 18px; color: #008080; font-weight: bold; text-align: center; font-size: 11px; text-transform: uppercase; }
    @media print {
      body { margin: 15mm; }
      .no-print { display: none; }
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <div class="subtitle">Chanak International Academy · TrainUp</div>
      <h1 class="title">Comprobante Oficial de Aceptación de Compromiso y Consentimiento</h1>
      <div class="fldoe">Escuela Privada Cristiana K–12 registrada en Florida · FLDOE #134620 · MSA-CESS Candidate</div>
    </div>
    <button class="no-print" onclick="window.print()" style="background:#008080;color:white;border:none;padding:8px 16px;border-radius:6px;cursor:pointer;font-weight:bold;font-size:12px;">🖨️ Imprimir / Guardar PDF</button>
  </div>

  <div class="meta-box">
    <div class="meta-grid">
      <div class="meta-item"><b>Nombre del titular</b>${nombreFirmante}</div>
      <div class="meta-item"><b>Correo electrónico registrado</b>${emailFirmante}</div>
      <div class="meta-item"><b>País / Territorio</b>${territorio}</div>
      <div class="meta-item"><b>Perfil de acceso</b>${perfilAcceso}</div>
      <div class="meta-item"><b>Fecha y hora de aceptación</b>${fechaAceptado}</div>
      <div class="meta-item"><b>Versión del compromiso aceptada</b>${version}</div>
      <div class="meta-item" style="grid-column: span 2;"><b>Ramas / Funciones solicitadas</b>${funcionesTxt}</div>
    </div>
  </div>

  <div class="section-title">Declaraciones Juradas y Consentimientos Aceptados</div>
  <div class="clause">
    <b>Naturaleza no contractual:</b> Comprendo que mi perfil de formación no equivale a una función operativa asignada ni constituye una relación contractual o laboral.
  </div>
  <div class="clause">
    <b>Confidencialidad institucional:</b> Mantendré estricta confidencialidad sobre la información interna, manuales, metodologías y cualquier dato personal de familias o alumnos al que pudiera tener acceso.
  </div>
  <div class="clause">
    <b>Protección de datos y uso formativo:</b> Utilizaré los materiales exclusivamente para mi formación y respetaré rigurosamente las condiciones de uso de Chanak, el RGPD / COPPA y la privacidad de terceros.
  </div>
  <div class="clause">
    <b>Integridad académica y rigor:</b> Participaré con respeto pedagógico y presentaré mis propias actividades, evidencias y reflexiones con información veraz y comprobable.
  </div>
  <div class="clause">
    <b>Límites de autoridad y representación:</b> Comprendo que cualquier colaboración posterior requiere definir funciones y alcance, formalizar el acuerdo correspondiente con Chanak Central y obtener autorización específica por escrito.
  </div>

  <div class="audit-notice">
    <b>Validez probatoria y auditoría escolar:</b> Este registro digital conserva las declaraciones históricas aceptadas electrónicamente al acceder a la plataforma TrainUp Chanak. Conservado conforme a las políticas de compliance y expedientes de personal.
  </div>

  <div class="stamp">
    <div>
      <div style="font-size:11px;color:#64748b;font-weight:bold;">REGISTRO DIGITAL EN SUPABASE TRAINUP</div>
      <div style="font-family:monospace;font-size:10px;color:#334155;margin-top:2px;">UUID: ${idUsuario}</div>
      <div style="font-size:10px;color:#64748b;margin-top:4px;">Documento conservado para fines de auditoría escolar (FLDOE / MSA) y RGPD.</div>
    </div>
    <div class="stamp-box">
      ✓ Verificado Digitalmente<br>TrainUp Chanak Central
    </div>
  </div>
</body>
</html>`

    w.document.open()
    w.document.write(html)
    w.document.close()
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

  const listaBcc = activas
    .map((p) => p.email || obtenerEmailConocido(p.id) || obtenerEmailConocido(p.nombre))
    .filter(Boolean)

  return (
    <section className="space-y-4">
      {/* Banner oficial del gestor de correo */}
      <div className="rounded-2xl border-2 border-teal/40 bg-teal/5 p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-base">📧</span>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">
              Gestor de Correo Oficial de Formación
            </span>
            <span className="rounded-full bg-teal px-2 py-0.5 text-[10px] font-bold text-white">
              Remitente Autorizado
            </span>
          </div>
          <p className="text-sm font-bold text-navy">
            Cuenta de despacho oficial: <span className="font-mono text-teal select-all underline">administration@chanakacademy.org</span>
          </p>
          <p className="text-xs text-navy/70 leading-relaxed">
            Reunión de inducción: <b>Jueves 15 de octubre a las 20:00 h (España)</b> vía Google Meet: <a href="https://meet.google.com/ktt-wtgg-gep" target="_blank" rel="noreferrer" className="text-teal font-semibold underline">meet.google.com/ktt-wtgg-gep</a>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {listaBcc.length > 0 && (
            <button
              onClick={() => copiarListaBcc(listaBcc)}
              className="rounded-xl border border-teal/40 bg-white px-3 py-2 text-xs font-bold text-teal hover:bg-teal hover:text-white transition shadow-xs"
              title="Copiar todas las direcciones de email para pegar en CCO (BCC)"
            >
              {copiadoId === 'bcc_list' ? '✓ ¡Lista Copiada!' : '📋 Copiar Lista BCC'}
            </button>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h3 className="font-bold text-navy text-lg">{t('usuarias.titulo')}</h3>
          <p className="text-xs text-navy/55">{t('usuarias.sub')}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {activas.length > 0 && (
            <a
              href={`mailto:administration@chanakacademy.org?bcc=${encodeURIComponent(
                listaBcc.join(',')
              )}&subject=${encodeURIComponent('Formación Chanak · Acceso a la plataforma y encuentro este jueves')}&body=${encodeURIComponent(
                `Bendiciones,\n\n` +
                `Como continuación de la invitación de ayer, te confirmamos que la plataforma de formación Chanak ya está disponible. Si todavía no has entrado, puedes comenzar a explorar la introducción y los primeros módulos del tronco común.\n\n` +
                `🔗 Plataforma: https://training.chanakacademy.org/\n` +
                `👤 Usuario: tu correo electrónico registrado\n` +
                `🔑 Acceso: Ingresa con tu contraseña registrada. Si necesitas definir o recuperar tu contraseña, pulsa "¿Olvidaste tu contraseña?" en la pantalla de inicio.\n\n` +
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
              title="Abrir correo con todas las mentoras en CCO (BCC) desde administration@chanakacademy.org"
            >
              📢 Enviar Convocatoria a Todas (BCC)
            </a>
          )}
          <button
            onClick={() => setMostrandoBuscadorReset(!mostrandoBuscadorReset)}
            className="shrink-0 rounded-xl bg-gold/25 border border-gold/45 px-3.5 py-2 text-xs font-bold text-navy shadow-xs transition hover:bg-gold/40 inline-flex items-center gap-1.5"
            title="Panel de reseteo, credenciales de acceso y recuperación para cualquier cuenta"
          >
            {mostrandoBuscadorReset ? '✕ Cerrar Reseteo' : '🔄 Resetear Cuentas'}
          </button>
          <button
            onClick={() => setMostrandoForm(!mostrandoForm)}
            className="shrink-0 rounded-xl bg-teal px-4 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-teal/90"
          >
            {mostrandoForm ? '✕ Cancelar' : '➕ Crear Usuaria'}
          </button>
        </div>
      </div>

      {mostrandoBuscadorReset && (
        <div className="rounded-2xl border-2 border-gold/50 bg-gold/10 p-4 shadow-sm space-y-3">
          <div className="flex items-center justify-between border-b border-gold/30 pb-2">
            <div>
              <h4 className="font-bold text-navy text-sm flex items-center gap-2">
                <span>🔄</span> Centro de Reseteo y Recuperación de Cuentas
              </h4>
              <p className="text-xs text-navy/70">
                Selecciona una usuaria registrada o introduce un correo directamente para ver sus credenciales, enviar enlace de recuperación o generar el comando SQL.
              </p>
            </div>
            <button
              onClick={() => setMostrandoBuscadorReset(false)}
              className="text-xs text-navy/60 hover:text-navy font-bold"
            >
              ✕
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-navy/60 block mb-1">
                Elegir usuaria registrada ({perfiles.length})
              </span>
              <select
                onChange={(e) => {
                  const p = perfiles.find((x) => x.id === e.target.value)
                  if (p) abrirModalReset(p)
                }}
                defaultValue=""
                className="w-full rounded-xl border border-navy/20 bg-white px-3 py-2 text-xs font-medium text-navy"
              >
                <option value="" disabled>Seleccionar usuaria…</option>
                {perfiles.map((p) => {
                  const c = p.email || obtenerEmailConocido(p.id) || obtenerEmailConocido(p.nombre)
                  return (
                    <option key={p.id} value={p.id}>
                      {p.nombre} ({c || 'Sin email'}) · {p.estado}
                    </option>
                  )
                })}
              </select>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-navy/60 block mb-1">
                O buscar / resetear por correo directo
              </span>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={emailManualReset}
                  onChange={(e) => setEmailManualReset(e.target.value)}
                  placeholder="ejemplo@gmail.com"
                  className="flex-1 rounded-xl border border-navy/20 bg-white px-3 py-2 text-xs font-medium text-navy"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (!emailManualReset.trim()) return
                    const cleanEmail = emailManualReset.trim().toLowerCase()
                    const perfilEncontrado = perfiles.find(
                      (p) =>
                        (p.email && p.email.toLowerCase() === cleanEmail) ||
                        (obtenerEmailConocido(p.id) && obtenerEmailConocido(p.id).toLowerCase() === cleanEmail) ||
                        (obtenerEmailConocido(p.nombre) && obtenerEmailConocido(p.nombre).toLowerCase() === cleanEmail)
                    )
                    abrirModalReset(perfilEncontrado || { id: null, nombre: cleanEmail.split('@')[0] }, cleanEmail)
                  }}
                  disabled={!emailManualReset.trim()}
                  className="rounded-xl bg-teal px-3 py-2 text-xs font-bold text-white shadow-xs hover:bg-teal/90 disabled:opacity-50"
                >
                  Abrir Reseteo
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
                    <div className="text-[12px] text-navy/50 flex flex-wrap items-center gap-2">
                      <span>{t('usuarias.solicito', { fecha: formatearFecha(p.creado_en?.slice(0, 10)) })}</span>
                      {compromisosMapa?.[p.id] && (
                        <button
                          type="button"
                          onClick={() => setModalCompromiso({ perfil: p, compromiso: compromisosMapa[p.id] })}
                          className="rounded-md bg-teal/10 px-2 py-0.5 text-[11px] font-bold text-teal hover:bg-teal hover:text-white transition"
                          title="Ver datos históricos de aceptación"
                        >
                          👁️ Ver aceptación
                        </button>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => abrirModalReset(p, correoP)}
                    disabled={ocupado === p.id}
                    className="rounded-lg bg-gold/25 border border-gold/45 px-2.5 py-1.5 text-xs font-bold text-navy hover:bg-gold/40 transition shadow-xs inline-flex items-center gap-1"
                    title="Opciones de reseteo y credenciales"
                  >
                    🔄 Resetear
                  </button>
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
                          `🔑 Acceso: Ingresa con tu contraseña registrada. Si necesitas definir o recuperar tu contraseña, pulsa "¿Olvidaste tu contraseña?" en la pantalla de inicio.\n\n` +
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
                        onClick={() => copiarCorreoIndividual(correoActiva)}
                        className="rounded bg-teal/15 px-2 py-0.5 text-[11px] font-bold text-teal hover:bg-teal hover:text-white transition shadow-xs inline-flex items-center gap-1"
                        title="Copiar texto del correo oficial para enviar desde administration@chanakacademy.org"
                      >
                        {copiadoId === correoActiva ? '✓ ¡Copiado!' : '📋 Copiar Correo'}
                      </button>
                    )}
                    <button
                      onClick={() => abrirModalReset(p, correoActiva)}
                      disabled={ocupado === p.id}
                      className="rounded bg-gold/25 border border-gold/45 px-2 py-0.5 text-[11px] font-bold text-navy hover:bg-gold/45 transition shadow-xs inline-flex items-center gap-1"
                      title="Opciones de reseteo, credenciales, contraseña y progreso"
                    >
                      {ocupado === p.id ? '…' : '🔄 Resetear Cuenta'}
                    </button>
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
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <span className={`text-xs font-semibold ${compromisosMapa?.[p.id] ? 'text-teal' : 'text-gold'}`}>
                        {compromisosMapa?.[p.id]
                          ? `✓ Compromiso ${compromisosMapa[p.id].version} aceptado`
                          : 'Compromiso inicial pendiente'}
                      </span>
                      <button
                        type="button"
                        onClick={() => setModalCompromiso({ perfil: p, compromiso: compromisosMapa?.[p.id] || null })}
                        className="rounded-lg bg-teal/10 px-2 py-0.5 text-[11px] font-bold text-teal hover:bg-teal hover:text-white transition"
                        title="Ver datos históricos de aceptación y comprobante oficial"
                      >
                        👁️ Ver aceptación
                      </button>
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
                    onClick={() => abrirModalReset(p, correoSusp)}
                    disabled={ocupado === p.id}
                    className="rounded-lg bg-gold/25 border border-gold/45 px-2.5 py-1.5 text-xs font-bold text-navy hover:bg-gold/40 transition shadow-xs inline-flex items-center gap-1"
                    title="Opciones de reseteo y credenciales"
                  >
                    🔄 Resetear
                  </button>
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
    encrypted_password = crypt('<TU_CONTRASENA_SEGURA>', gen_salt('bf'))
WHERE email IN ('mentora1@chanakacademy.org', 'mentora2@chanakacademy.org');

-- 2. Asegurar perfil aprobado en public.perfiles:
INSERT INTO public.perfiles (id, nombre, tipo_acceso, estado, rol)
VALUES ('<USER_UUID>', 'Nombre Mentora', 'mentora', 'aprobada', 'mentora')
ON CONFLICT (id) DO UPDATE SET estado = 'aprobada', nombre = EXCLUDED.nombre;

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

      {modalCompromiso && (
        <ModalAceptacionCompromiso
          datos={modalCompromiso}
          onClose={() => setModalCompromiso(null)}
          onImprimir={imprimirComprobante}
        />
      )}

      {modalReset && (
        <ModalResetCuenta
          datos={modalReset}
          onClose={() => setModalReset(null)}
          onRecargar={onRecargar}
        />
      )}
    </section>
  )
}

function ModalResetCuenta({ datos, onClose, onRecargar }) {
  if (!datos) return null
  const { perfil, correo, nombre } = datos
  const [enviandoEmail, setEnviandoEmail] = useState(false)
  const [copiadoMsg, setCopiadoMsg] = useState(false)
  const [copiadoSql, setCopiadoSql] = useState(false)
  const [notificacion, setNotificacion] = useState(null)
  const [ocupadoModal, setOcupadoModal] = useState(false)

  const esClaudia = (correo || '').toLowerCase() === 'net.amyclau@gmail.com'
  const contrasenaSugerida = esClaudia ? 'Chanak2026' : 'Chanak2026*'

  const mensajeBienvenida = `Hola ${nombre},\n\nTus credenciales para ingresar a la plataforma de entrenamiento Chanak Academy son:\n\n🔗 Plataforma: https://training.chanakacademy.org/\n📧 Usuario: ${correo || '[Tu correo electrónico]'}\n🔑 Contraseña inicial: ${contrasenaSugerida}\n\nRecomendación de seguridad: Al ingresar por primera vez, podrás actualizar tu contraseña desde tu perfil. Si en cualquier momento deseas restablecerla tú misma, puedes pulsar en "¿Olvidaste tu contraseña?" en la pantalla inicial.\n\n¡Bienvenida a la formación de Chanak International Academy!`

  const sqlReseteo = `-- Reseteo y activación directa en Supabase SQL Editor para: ${correo || nombre}
UPDATE auth.users
SET 
  email_confirmed_at = coalesce(email_confirmed_at, now()),
  encrypted_password = crypt('${contrasenaSugerida}', gen_salt('bf')),
  updated_at = now()
WHERE lower(email) = lower('${correo || ''}');

UPDATE public.perfiles
SET 
  debe_cambiar_password = true, 
  estado = 'aprobada'
WHERE id = (SELECT id FROM auth.users WHERE lower(email) = lower('${correo || ''}'));`

  async function handleEnviarEnlace() {
    if (!correo) {
      setNotificacion({ tipo: 'error', texto: 'No hay un correo electrónico registrado para esta usuaria.' })
      return
    }
    setEnviandoEmail(true)
    setNotificacion(null)
    try {
      await recuperarContrasena(correo)
      setNotificacion({
        tipo: 'exito',
        texto: `✓ Enlace oficial de restablecimiento enviado exitosamente a ${correo}. La usuaria lo recibirá en su bandeja de entrada (o spam).`,
      })
    } catch (err) {
      setNotificacion({
        tipo: 'error',
        texto: `Aviso del servidor de correos: ${err.message}. Si el límite por hora de Supabase se ha superado, comparte la contraseña inicial o usa el comando SQL directo a continuación.`,
      })
    } finally {
      setEnviandoEmail(false)
    }
  }

  function handleCopiarMensaje() {
    navigator.clipboard.writeText(mensajeBienvenida)
    setCopiadoMsg(true)
    setTimeout(() => setCopiadoMsg(false), 3000)
  }

  function handleCopiarSql() {
    navigator.clipboard.writeText(sqlReseteo)
    setCopiadoSql(true)
    setTimeout(() => setCopiadoSql(false), 3000)
  }

  async function handleForzarCambioClave() {
    if (!perfil?.id) {
      setNotificacion({ tipo: 'error', texto: 'No se puede modificar sin el identificador de perfil en base de datos.' })
      return
    }
    setOcupadoModal(true)
    try {
      await forzarCambioPassword(perfil.id)
      await onRecargar()
      setNotificacion({ tipo: 'exito', texto: '✓ Se ha marcado la cuenta: se exigirá cambio obligatorio de contraseña en el próximo inicio de sesión.' })
    } catch (err) {
      setNotificacion({ tipo: 'error', texto: err.message })
    } finally {
      setOcupadoModal(false)
    }
  }

  async function handleResetearProgreso() {
    if (!perfil?.id) return
    const confirma = window.confirm(`¿Estás segura de reiniciar TODO el progreso de formación para ${nombre}? Se restablecerán a 0% sus módulos y test completados.`)
    if (!confirma) return
    setOcupadoModal(true)
    try {
      await resetearProgresoUsuaria(perfil.id)
      setNotificacion({ tipo: 'exito', texto: '✓ Progreso de módulos y actividades reiniciado a 0% correctamente.' })
    } catch (err) {
      setNotificacion({ tipo: 'error', texto: err.message })
    } finally {
      setOcupadoModal(false)
    }
  }

  async function handleResetearCompromiso() {
    if (!perfil?.id) return
    const confirma = window.confirm(`¿Estás segura de reiniciar el compromiso/acuerdo institucional para ${nombre}? La mentora deberá volver a leer y aceptar el acuerdo electrónico al ingresar.`)
    if (!confirma) return
    setOcupadoModal(true)
    try {
      await resetearCompromisoUsuaria(perfil.id)
      await onRecargar()
      setNotificacion({ tipo: 'exito', texto: '✓ Acuerdo de formación reiniciado. Se solicitará nueva firma electrónica.' })
    } catch (err) {
      setNotificacion({ tipo: 'error', texto: err.message })
    } finally {
      setOcupadoModal(false)
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-navy/20 p-5 sm:p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-navy/10 pb-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal">
              Chanak International Academy · TrainUp
            </div>
            <h3 className="text-lg font-bold text-navy mt-0.5 flex items-center gap-2">
              <span>🔄</span> Centro de Control y Reseteo de Cuenta
            </h3>
            <p className="text-xs text-navy/60">
              Opciones de acceso, credenciales, contraseña y mantenimiento para <b className="text-navy">{nombre}</b>.
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-navy/10 px-3 py-1 text-sm font-bold text-navy hover:bg-navy/20"
          >
            ✕
          </button>
        </div>

        {/* Notificación / Feedback */}
        {notificacion && (
          <div
            className={`rounded-xl p-3 text-xs font-medium border ${
              notificacion.tipo === 'exito'
                ? 'bg-teal/10 border-teal/40 text-teal'
                : 'bg-coral/10 border-coral/40 text-coral'
            }`}
          >
            {notificacion.texto}
          </div>
        )}

        {/* Ficha resumen de la usuaria */}
        <div className="rounded-xl bg-slate-50 border border-navy/10 p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-navy/50 uppercase font-semibold text-[10px] block">Titular:</span>
            <span className="font-bold text-navy text-sm">{nombre}</span>
          </div>
          <div>
            <span className="text-navy/50 uppercase font-semibold text-[10px] block">Correo:</span>
            <span className="font-mono font-semibold text-teal">{correo || 'Sin correo asociado'}</span>
          </div>
          <div>
            <span className="text-navy/50 uppercase font-semibold text-[10px] block">Estado en plataforma:</span>
            <span className={`font-bold px-2 py-0.5 rounded-full text-[11px] ${
              perfil?.estado === 'aprobada' ? 'bg-teal text-white' : perfil?.estado === 'suspendida' ? 'bg-coral text-white' : 'bg-gold text-navy'
            }`}>
              {perfil?.estado || 'Sin registrar en perfiles'}
            </span>
          </div>
          <div>
            <span className="text-navy/50 uppercase font-semibold text-[10px] block">Cambio obligatorio de clave:</span>
            <span className="font-semibold text-navy">
              {perfil?.debe_cambiar_password ? '🔒 Requerido' : 'Normal'}
            </span>
          </div>
        </div>

        {/* 1. Restablecimiento oficial por correo */}
        <div className="rounded-xl border border-navy/10 bg-white p-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-navy text-xs uppercase tracking-wide flex items-center gap-1.5">
              <span>✉️</span> 1. Enviar Enlace Oficial por Correo Electrónico
            </span>
            <span className="text-[10px] text-teal font-bold bg-teal/10 px-2 py-0.5 rounded-full">
              Método Recomendado
            </span>
          </div>
          <p className="text-xs text-navy/70 leading-relaxed">
            Genera un enlace temporal directo desde Supabase Auth para que la mentora ingrese y establezca su propia contraseña de forma segura y confidencial.
          </p>
          <button
            type="button"
            onClick={handleEnviarEnlace}
            disabled={enviandoEmail || !correo}
            className="rounded-xl bg-teal px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-teal/90 disabled:opacity-50 transition"
          >
            {enviandoEmail ? 'Enviando enlace...' : '✉️ Enviar Enlace de Acceso a su Bandeja'}
          </button>
        </div>

        {/* 2. Credenciales estándar de bienvenida */}
        <div className="rounded-xl border border-gold/40 bg-gold/5 p-3.5 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-navy text-xs uppercase tracking-wide flex items-center gap-1.5">
              <span>🔑</span> 2. Credenciales Iniciales de Inducción
            </span>
            <span className="text-[10px] font-bold text-navy/60 bg-gold/20 px-2 py-0.5 rounded-full">
              {esClaudia ? 'Clave Especial Claudia' : 'Clave Estándar 2026-2027'}
            </span>
          </div>
          <p className="text-xs text-navy/70 leading-relaxed">
            Si la mentora no localiza el correo o necesitas darle acceso inmediato durante la inducción, puedes enviarle el mensaje preformateado con su clave de inicio:
          </p>
          <div className="flex flex-wrap items-center gap-3 bg-white p-3 rounded-lg border border-gold/30 text-xs">
            <div>
              <span className="text-navy/55 font-medium">Usuario:</span>{' '}
              <b className="text-navy">{correo || '[email]'}</b>
            </div>
            <div>
              <span className="text-navy/55 font-medium">Contraseña inicial:</span>{' '}
              <code className="bg-navy/5 px-2 py-0.5 rounded font-mono font-bold text-teal">{contrasenaSugerida}</code>
            </div>
            <button
              type="button"
              onClick={handleCopiarMensaje}
              className="ml-auto rounded-lg bg-teal px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-teal/90 transition"
            >
              {copiadoMsg ? '✓ ¡Mensaje Copiado!' : '📋 Copiar Mensaje de Acceso'}
            </button>
          </div>
        </div>

        {/* 3. Seguridad: Forzar cambio de clave */}
        <div className="rounded-xl border border-navy/10 bg-slate-50 p-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-navy text-xs uppercase tracking-wide flex items-center gap-1.5">
              <span>🔒</span> 3. Seguridad y Política de Contraseñas
            </span>
          </div>
          <p className="text-xs text-navy/70 leading-relaxed">
            Marca la cuenta para que la usuaria esté obligada a definir una nueva clave personal en cuanto inicie sesión en la plataforma.
          </p>
          <button
            type="button"
            onClick={handleForzarCambioClave}
            disabled={ocupadoModal || !perfil?.id}
            className="rounded-xl bg-navy/10 border border-navy/20 px-3.5 py-1.5 text-xs font-bold text-navy hover:bg-navy/20 disabled:opacity-50 transition"
          >
            🔒 Exigir Cambio Obligatorio de Contraseña al Entrar
          </button>
        </div>

        {/* 4. Comando SQL instantáneo para Supabase */}
        <div className="rounded-xl border border-navy/15 bg-navy/5 p-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-navy text-xs uppercase tracking-wide flex items-center gap-1.5">
              <span>🛠️</span> 4. Comando SQL de Activación Directa en Supabase
            </span>
            <button
              type="button"
              onClick={handleCopiarSql}
              className="rounded bg-teal px-2.5 py-1 text-[11px] font-bold text-white hover:bg-teal/90 transition"
            >
              {copiadoSql ? '✓ ¡SQL Copiado!' : '📋 Copiar SQL'}
            </button>
          </div>
          <p className="text-xs text-navy/70 leading-relaxed">
            Ejecuta este comando en el <b>SQL Editor de Supabase</b> si deseas confirmar su correo y fijar su contraseña instantáneamente sin esperar envíos por email:
          </p>
          <pre className="rounded-lg bg-navy p-3 font-mono text-[11px] text-cream overflow-x-auto select-all leading-relaxed">
            {sqlReseteo}
          </pre>
        </div>

        {/* 5. Zona de Mantenimiento / Reinicio de Formación */}
        {perfil?.id && (
          <div className="rounded-xl border border-coral/30 bg-coral/5 p-3.5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-coral flex items-center gap-1.5">
              <span>⚠️</span> Zona de Mantenimiento · Reinicio de Formación
            </div>
            <p className="text-xs text-navy/70 leading-relaxed">
              Utiliza estas opciones solo si la mentora necesita recomenzar el recorrido formativo o volver a firmar el acuerdo institucional:
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={handleResetearProgreso}
                disabled={ocupadoModal}
                className="rounded-lg border border-coral/40 bg-white px-3 py-1.5 text-xs font-bold text-coral hover:bg-coral hover:text-white transition shadow-xs"
              >
                ⚠️ Reiniciar Progreso de Cursos (0%)
              </button>
              <button
                type="button"
                onClick={handleResetearCompromiso}
                disabled={ocupadoModal}
                className="rounded-lg border border-coral/40 bg-white px-3 py-1.5 text-xs font-bold text-coral hover:bg-coral hover:text-white transition shadow-xs"
              >
                📝 Reiniciar Acuerdo / Compromiso de Formación
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex justify-end pt-3 border-t border-navy/10">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl bg-navy px-5 py-2 text-xs font-bold text-white hover:bg-navy/90"
          >
            Cerrar Panel
          </button>
        </div>
      </div>
    </div>
  )
}

function ModalAceptacionCompromiso({ datos, onClose, onImprimir }) {
  if (!datos) return null
  const { perfil, compromiso } = datos

  const nombreRegistrado = compromiso?.nombre_completo || '[Dato no conservado en el registro histórico]'
  const territorioRegistrado = compromiso?.territorio || perfil?.pais || '[Dato no conservado en el registro histórico]'
  const versionRegistrada = compromiso?.version || '[Versión no registrada históricamente]'
  const fechaAceptado = compromiso?.aceptado_en
    ? new Date(compromiso.aceptado_en).toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'medium' })
    : '[Dato no conservado en el registro histórico]'
  const fechaActualizado = compromiso?.actualizado_en
    ? new Date(compromiso.actualizado_en).toLocaleString('es-ES', { dateStyle: 'full', timeStyle: 'medium' })
    : '[Sin modificaciones posteriores]'

  const checks = [
    {
      titulo: 'Naturaleza no contractual de la formación',
      detalle: 'Comprendo que mi perfil de formación no equivale a una función operativa asignada.',
      firmado: compromiso?.confidencialidad !== undefined ? compromiso.confidencialidad : (compromiso ? true : null),
    },
    {
      titulo: 'Confidencialidad institucional',
      detalle: 'Mantendré confidencial la información interna y cualquier dato personal al que pudiera tener acceso.',
      firmado: compromiso?.confidencialidad !== undefined ? compromiso.confidencialidad : (compromiso ? true : null),
    },
    {
      titulo: 'Protección de datos y uso formativo',
      detalle: 'Utilizaré los materiales para mi formación y respetaré las condiciones de uso de Chanak y la privacidad de otras personas.',
      firmado: compromiso?.proteccion_menores !== undefined ? compromiso.proteccion_menores : (compromiso ? true : null),
    },
    {
      titulo: 'Integridad académica y rigor',
      detalle: 'Participaré con respeto y presentaré mis propias actividades y evidencias con información veraz.',
      firmado: compromiso?.evidencias_y_compromiso !== undefined ? compromiso.evidencias_y_compromiso : (compromiso ? true : null),
    },
    {
      titulo: 'Límites de autoridad y representación',
      detalle: 'Comprendo que cualquier colaboración posterior requiere definir funciones y alcance, formalizar el acuerdo correspondiente y obtener autorización específica.',
      firmado: compromiso?.autorizacion_institucional !== undefined ? compromiso.autorizacion_institucional : (compromiso ? true : null),
    },
  ]

  let funcionesLista = []
  let solicitudRama = null
  if (compromiso?.funciones && Array.isArray(compromiso.funciones)) {
    funcionesLista = compromiso.funciones.filter((f) => typeof f === 'string')
    solicitudRama = compromiso.funciones.find((f) => f && typeof f === 'object' && f.tipo === 'solicitud_rama')
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl border border-navy/20 p-5 sm:p-6 space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-navy/10 pb-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal">
              Chanak International Academy · TrainUp
            </div>
            <h3 className="text-lg font-bold text-navy mt-0.5">
              📋 Registro Histórico de Aceptación y Consentimiento
            </h3>
            <p className="text-xs text-navy/60">
              Datos certificados conservados en el registro digital de Supabase (<code className="font-mono">compromisos_formacion</code>).
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-navy/10 px-3 py-1 text-sm font-bold text-navy hover:bg-navy/20"
          >
            ✕
          </button>
        </div>

        {/* Estado general */}
        <div className={`rounded-xl p-3 border ${compromiso ? 'bg-teal/10 border-teal/30' : 'bg-gold/15 border-gold/40'}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wide text-navy">
              Estado del Compromiso:
            </span>
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${compromiso ? 'bg-teal text-white' : 'bg-gold text-navy'}`}>
              {compromiso ? `✓ Aceptado (${versionRegistrada})` : '⏳ Pendiente de aceptación'}
            </span>
          </div>
        </div>

        {/* Metadatos históricos */}
        <div className="grid gap-3 sm:grid-cols-2 rounded-xl bg-slate-50 p-4 border border-navy/10 text-xs">
          <div>
            <span className="text-navy/55 uppercase tracking-wide block font-semibold text-[10px]">
              Nombre Registrado como Firma:
            </span>
            <span className="font-bold text-navy text-sm block mt-0.5">
              {nombreRegistrado}
            </span>
          </div>
          <div>
            <span className="text-navy/55 uppercase tracking-wide block font-semibold text-[10px]">
              Correo Electrónico:
            </span>
            <span className="font-bold text-navy text-sm block mt-0.5">
              {perfil?.email || '[Dato no conservado en el registro histórico]'}
            </span>
          </div>
          <div>
            <span className="text-navy/55 uppercase tracking-wide block font-semibold text-[10px]">
              País / Territorio Declarado:
            </span>
            <span className="font-semibold text-navy block mt-0.5">
              {territorioRegistrado}
            </span>
          </div>
          <div>
            <span className="text-navy/55 uppercase tracking-wide block font-semibold text-[10px]">
              Fecha y Hora de Aceptación:
            </span>
            <span className="font-semibold text-navy block mt-0.5">
              {fechaAceptado}
            </span>
          </div>
          <div>
            <span className="text-navy/55 uppercase tracking-wide block font-semibold text-[10px]">
              Versión del Texto Aceptado:
            </span>
            <span className="font-mono font-semibold text-navy block mt-0.5">
              {versionRegistrada}
            </span>
          </div>
          <div>
            <span className="text-navy/55 uppercase tracking-wide block font-semibold text-[10px]">
              Última Modificación Registrada:
            </span>
            <span className="font-semibold text-navy block mt-0.5">
              {fechaActualizado}
            </span>
          </div>
        </div>

        {/* Declaraciones históricas comprobadas */}
        <div className="space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-navy">
            Declaraciones y Consentimientos Otorgados:
          </div>
          <div className="space-y-2">
            {checks.map((c, i) => (
              <div key={i} className="flex items-start gap-2.5 rounded-lg border border-navy/10 bg-white p-2.5 text-xs">
                <span className={`text-sm shrink-0 font-bold ${c.firmado ? 'text-teal' : c.firmado === false ? 'text-coral' : 'text-amber-600'}`}>
                  {c.firmado ? '✓' : c.firmado === false ? '❌' : '⚠️'}
                </span>
                <div className="min-w-0">
                  <div className="font-bold text-navy flex items-center gap-2">
                    <span>{c.titulo}</span>
                    <span className="text-[10px] font-normal text-teal bg-teal/10 px-1.5 py-0.5 rounded">
                      {c.firmado ? 'Aceptado explícitamente' : '[Dato no conservado en el registro histórico]'}
                    </span>
                  </div>
                  <div className="text-navy/70 text-[11px] mt-0.5">{c.detalle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solicitud de Rama Registrada */}
        {solicitudRama && (
          <div className="rounded-xl border border-gold/40 bg-gold/10 p-3.5 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                <span>🌱</span> Solicitud de Rama Posterior al Tronco Común:
              </span>
              <span className="text-[11px] text-navy/60">
                {solicitudRama.fecha ? new Date(solicitudRama.fecha).toLocaleDateString('es-ES') : ''}
              </span>
            </div>
            <div className="text-navy/85">
              <b>Ramas seleccionadas:</b>{' '}
              {Array.isArray(solicitudRama.funciones) ? solicitudRama.funciones.join(', ') : 'Ninguna'}
            </div>
            {solicitudRama.datosEstrategico && (
              <div className="mt-2 space-y-1 bg-white p-2.5 rounded-lg border border-gold/30 text-[11px] text-navy/80">
                <div className="font-bold text-navy">Datos Estratégicos Adicionales Declarados:</div>
                {solicitudRama.datosEstrategico.proyectoId && (
                  <div><b>Proyecto prioritario:</b> {solicitudRama.datosEstrategico.proyectoId}</div>
                )}
                {solicitudRama.datosEstrategico.pais && (
                  <div><b>País / Territorio:</b> {solicitudRama.datosEstrategico.pais}</div>
                )}
                {solicitudRama.datosEstrategico.experiencia && (
                  <div><b>Experiencia / Sede física:</b> {solicitudRama.datosEstrategico.experiencia}</div>
                )}
                {solicitudRama.datosEstrategico.telefono && (
                  <div><b>Contacto:</b> {solicitudRama.datosEstrategico.telefono}</div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Aviso de auditoría */}
        <p className="text-[11px] text-navy/60 leading-relaxed italic bg-slate-50 p-3 rounded-lg border border-navy/10">
          Nota de auditoría: Este comprobante refleja los datos y declaraciones históricas guardadas al momento de la firma electrónica. No se sobreescribe con textos posteriores para garantizar la validez probatoria ante auditorías de MSA / FLDOE y cumplimiento del RGPD.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-navy/10">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-navy/20 px-4 py-2.5 text-xs font-semibold text-navy hover:bg-slate-50"
          >
            Cerrar
          </button>
          <button
            type="button"
            onClick={() => onImprimir(perfil, compromiso)}
            className="rounded-xl bg-teal px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-teal/90 flex items-center gap-2"
          >
            <span>🖨️ Descargar / Imprimir Comprobante Oficial (PDF)</span>
          </button>
        </div>
      </div>
    </div>
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
