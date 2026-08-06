import { useState } from 'react'
import { actualizarContrasena } from '../lib/backend'
import { useIdioma } from '../i18n/idioma'

export default function CambiarContrasena({ onCompletado, onCancelar }) {
  const { t } = useIdioma()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setExito('')

    if (password.length < 6) {
      setError(t('login.contrasenaPh'))
      return
    }

    if (password !== confirmPassword) {
      setError(t('login.contraNoCoincide'))
      return
    }

    setCargando(true)
    try {
      await actualizarContrasena(password)
      setExito(t('login.contraCambiada'))
      setTimeout(() => {
        onCompletado()
      }, 2000)
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
            className="mx-auto mb-4 h-24 w-24 rounded-2xl bg-white/95 p-2 shadow-lg"
          />
          <h1 className="text-2xl font-bold tracking-wide">Chanak Academy</h1>
          <p className="mt-1 text-sm text-cream/70">{t('login.cambiarContra')}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl bg-cream p-5 shadow-lg">
          <div>
            <label className="block">
              <span className="text-[13px] font-semibold uppercase tracking-wide text-navy/55">
                {t('login.nuevaContra')}
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('login.contrasenaPh')}
                required
                className="mt-1 w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:border-teal focus:outline-none"
              />
            </label>
          </div>

          <div>
            <label className="block">
              <span className="text-[13px] font-semibold uppercase tracking-wide text-navy/55">
                {t('login.confirmarContra')}
              </span>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder={t('login.contrasenaPh')}
                required
                className="mt-1 w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 text-sm text-navy placeholder:text-navy/30 focus:border-teal focus:outline-none"
              />
            </label>
          </div>

          {error && (
            <p className="rounded-lg border-l-4 border-coral bg-coral/8 px-3 py-2 text-xs leading-relaxed text-coral">
              {error}
            </p>
          )}

          {exito && (
            <p className="rounded-lg border-l-4 border-teal bg-teal/8 px-3 py-2 text-xs leading-relaxed text-navy/75">
              {exito}
            </p>
          )}

          <div className="flex gap-2">
            <button
              type="button"
              onClick={onCancelar}
              className="flex-1 rounded-xl border border-navy/15 py-3 text-sm font-bold text-navy/70 transition hover:bg-navy/5"
            >
              {t('login.cancelar') || 'Cancelar'}
            </button>
            <button
              type="submit"
              disabled={cargando || !password || !confirmPassword}
              className="flex-1 rounded-xl bg-teal py-3 text-sm font-bold text-white transition hover:bg-teal/90 disabled:opacity-50"
            >
              {cargando ? t('login.esperando') : t('login.botonCambiar')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
