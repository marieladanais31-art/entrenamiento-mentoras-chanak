import { useState } from 'react'
import { registrar, entrar } from '../lib/backend'

// Acceso con correo y contraseña (Supabase Auth).
// Las cuentas nuevas quedan en estado «pendiente» hasta que un admin las aprueba.
export default function Login() {
  const [modo, setModo] = useState('entrar') // 'entrar' | 'registro'
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
        if (nombre.trim().length < 3) throw new Error('Escribe tu nombre y apellido.')
        await registrar(email, password, nombre)
        setAviso(
          'Cuenta creada. Si tu proyecto pide confirmación de correo, revisa tu bandeja. Después, la coordinación debe aprobar tu acceso.'
        )
        setModo('entrar')
        setPassword('')
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
        <div className="mb-7 text-center text-cream">
          <img
            src="/logo-chanak.png"
            alt="Chanak International Academy"
            className="mx-auto mb-4 h-24 w-24 rounded-2xl bg-white/95 p-2"
          />
          <h1 className="text-2xl font-bold tracking-wide">Chanak Academy</h1>
          <p className="mt-1 text-sm text-cream/70">Formación de Mentoras y Coordinadoras</p>
          <p className="mt-1 text-xs text-cream/50">180h Mentora · 300h Coordinadora · MSA-CESS</p>
        </div>

        {/* Pestañas */}
        <div className="mb-4 flex gap-1 rounded-xl bg-white/8 p-1">
          {[
            ['entrar', 'Iniciar sesión'],
            ['registro', 'Crear cuenta'],
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
              etiqueta="Nombre y apellido"
              tipo="text"
              valor={nombre}
              onChange={setNombre}
              placeholder="Ej. Dayana Trillo"
              autoComplete="name"
            />
          )}
          <Campo
            etiqueta="Correo institucional"
            tipo="email"
            valor={email}
            onChange={setEmail}
            placeholder="nombre@chanakacademy.org"
            autoComplete="email"
          />
          <Campo
            etiqueta="Contraseña"
            tipo="password"
            valor={password}
            onChange={setPassword}
            placeholder={modo === 'registro' ? 'Mínimo 6 caracteres' : '••••••••'}
            autoComplete={modo === 'registro' ? 'new-password' : 'current-password'}
          />

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
              ? 'Un momento…'
              : modo === 'registro'
                ? 'Crear mi cuenta'
                : 'Entrar'}
          </button>

          {modo === 'registro' && (
            <p className="text-[11px] leading-relaxed text-navy/55">
              Tu cuenta quedará <b>pendiente de aprobación</b>. La coordinación la activará antes de
              que puedas acceder a la formación.
            </p>
          )}
        </form>

        <p className="mt-7 text-center text-[10px] leading-relaxed text-cream/40">
          Chanak International Academy · FLDOE #134620
          <br />
          Evidencia de formación del personal · Indicador MSA T5a
        </p>
      </div>
    </div>
  )
}

function Campo({ etiqueta, tipo, valor, onChange, placeholder, autoComplete }) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-navy/55">
        {etiqueta}
      </span>
      <input
        type={tipo}
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required
        className="mt-1 w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:border-teal focus:outline-none"
      />
    </label>
  )
}
