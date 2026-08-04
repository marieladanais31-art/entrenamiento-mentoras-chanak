import { useState } from 'react'
import { registrar, entrar, validarCodigo, canjearCodigo } from '../lib/backend'
import { SelectorIdioma } from '../i18n/idioma'
import { useIdioma } from '../i18n/idioma'

// Acceso con correo y contraseña (Supabase Auth).
// Al registrarse, si se introduce un código de acceso válido, la cuenta
// se aprueba automáticamente con el tipo correspondiente (visionaria/mentora/coordinadora).
// Sin código, la cuenta queda pendiente hasta que un admin la apruebe.
export default function Login() {
  const { t } = useIdioma()
  const [modo, setModo] = useState('entrar') // 'entrar' | 'registro'
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [codigo, setCodigo] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [aviso, setAviso] = useState('')

  async function enviar(e) {
    e.preventDefault()
    setError('')
    setAviso('')
    setCargando(true)
    try {
      if (modo === 'registro') {
        if (nombre.trim().length < 3) throw new Error(t('login.errNombre'))

        let tipoAcceso = 'mentora'
        let codigoId = null

        // Si hay código de acceso, validarlo primero
        if (codigo.trim()) {
          const resultado = await validarCodigo(codigo)
          if (!resultado.valido) throw new Error(resultado.mensaje)
          tipoAcceso = resultado.tipo_acceso
          codigoId = resultado.codigoId
        }

        await registrar(email, password, nombre, tipoAcceso)

        // Si usó código válido, canjearlo (incrementar usos)
        if (codigoId) {
          try { await canjearCodigo(codigoId) } catch (_) { /* no bloquear registro */ }
        }

        setAviso(
          codigoId
            ? t('login.creadaConCodigo')
            : t('login.creada')
        )
        setModo('entrar')
        setPassword('')
        setCodigo('')
      } else {
        await entrar(email, password)
        // App detecta la sesión por onAuthStateChange
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setCargando(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-4 py-10">
      <div className="w-full max-w-sm">
        <div className="mb-4 flex justify-center">
          <SelectorIdioma />
        </div>
        <div className="mb-7 text-center text-cream">
          <img
            src="/logo-chanak.png"
            alt="Chanak International Academy"
            className="mx-auto mb-4 h-24 w-24 rounded-2xl bg-white/95 p-2"
          />
          <h1 className="text-2xl font-bold tracking-wide">Chanak Academy</h1>
          <p className="mt-1 text-sm text-cream/70">{t('login.subtitulo')}</p>
          <p className="mt-1 text-xs text-cream/50">{t('login.claim')}</p>
        </div>

        {/* Pestañas */}
        <div className="mb-4 flex gap-1 rounded-xl bg-white/8 p-1">
          {[
            ['entrar', t('login.entrar')],
            ['registro', t('login.registro')],
          ].map(([id, texto]) => (
            <button
              key={id}
              onClick={() => {
                setModo(id)
                setError('')
                setAviso('')
              }}
              className={`flex-1 rounded-lg py-2 text-xs font-semibold transition ${
                modo === id ? 'bg-cream text-navy' : 'text-cream/70 hover:text-cream'
              }`}
            >
              {texto}
            </button>
          ))}
        </div>

        <form onSubmit={enviar} className="space-y-3 rounded-2xl bg-cream p-5 shadow-lg">
          {modo === 'registro' && (
            <Campo
              etiqueta={t('login.nombre')}
              tipo="text"
              valor={nombre}
              onChange={setNombre}
              placeholder={t('login.nombrePh')}
              autoComplete="name"
            />
          )}
          <Campo
            etiqueta={t('login.correo')}
            tipo="email"
            valor={email}
            onChange={setEmail}
            placeholder="nombre@chanakacademy.org"
            autoComplete="email"
          />
          <Campo
            etiqueta={t('login.contrasena')}
            tipo="password"
            valor={password}
            onChange={setPassword}
            placeholder={modo === 'registro' ? t('login.contrasenaPh') : '••••••••'}
            autoComplete={modo === 'registro' ? 'new-password' : 'current-password'}
          />

          {modo === 'registro' && (
            <div>
              <Campo
                etiqueta={t('login.codigo')}
                tipo="text"
                valor={codigo}
                onChange={(v) => setCodigo(v.toUpperCase())}
                placeholder={t('login.codigoPh')}
                autoComplete="off"
                requerido={false}
              />
              <p className="mt-1 text-[12px] leading-relaxed text-navy/45">
                {t('login.codigoAyuda')}
              </p>
            </div>
          )}

          {error && (
            <p className="rounded-lg border-l-4 border-coral bg-coral/8 px-3 py-2 text-xs leading-relaxed text-coral">
              {error}
            </p>
          )}
          {aviso && (
            <p className="rounded-lg border-l-4 border-teal bg-teal/8 px-3 py-2 text-xs leading-relaxed text-navy/75">
              {aviso}
            </p>
          )}

          <button
            type="submit"
            disabled={cargando || !email || !password}
            className="w-full rounded-xl bg-teal py-3 text-sm font-bold text-white transition hover:bg-teal/90 disabled:opacity-50"
          >
            {cargando
              ? t('login.esperando')
              : modo === 'registro'
                ? t('login.botonCrear')
                : t('login.botonEntrar')}
          </button>

          {modo === 'registro' && (
            <p className="text-[13px] leading-relaxed text-navy/55">
              {t('login.avisoPendiente')}
            </p>
          )}
        </form>

        <p className="mt-7 text-center text-[12px] leading-relaxed text-cream/40">
          Chanak International Academy · FLDOE #134620
          <br />
          {t('login.pie')}
        </p>
      </div>
    </div>
  )
}

function Campo({ etiqueta, tipo, valor, onChange, placeholder, autoComplete, requerido = true }) {
  return (
    <label className="block">
      <span className="text-[13px] font-semibold uppercase tracking-wide text-navy/55">
        {etiqueta}
      </span>
      <input
        type={tipo}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={requerido}
        className="mt-1 w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:border-teal focus:outline-none"
      />
    </label>
  )
}
