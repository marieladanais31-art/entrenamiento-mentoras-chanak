import { useState } from 'react'
import { entrar } from '../lib/backend'

export default function ModalPasswordEducaFe({ emailUsuario, onConfirmar, onCancelar }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [validando, setValidando] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    if (!password) return
    setError('')
    setValidando(true)
    try {
      // Re-autenticar contraseña de la usuaria
      await entrar(emailUsuario, password)
      onConfirmar()
    } catch (err) {
      setError('Contraseña incorrecta. Revisa tus datos de acceso a Chanak.')
    } finally {
      setValidando(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 backdrop-blur-sm px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border-2 border-amber-500/30">
        <div className="text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl shadow-inner">
            ☕️
          </div>
          <h3 className="text-lg font-bold text-navy">Área de Gobernanza EducaFe</h3>
          <p className="mt-1 text-xs text-navy/60 leading-relaxed">
            Por seguridad de la Red EducaFe y protección de actas, confirma tu contraseña de acceso a Chanak.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <label className="block">
            <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/60">
              Contraseña de Usuaria
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              autoFocus
              className="mt-1 w-full rounded-xl border border-navy/20 bg-slate-50 px-3 py-2.5 text-sm text-navy focus:border-amber-600 focus:outline-none"
            />
          </label>

          {error && (
            <p className="rounded-xl border-l-4 border-rose-500 bg-rose-50 p-2.5 text-xs text-rose-700 font-medium">
              {error}
            </p>
          )}

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onCancelar}
              className="flex-1 rounded-xl border border-navy/20 py-2.5 text-xs font-bold text-navy/70 hover:bg-slate-100"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={validando || !password}
              className="flex-1 rounded-xl bg-amber-700 py-2.5 text-xs font-bold text-white shadow-sm transition hover:bg-amber-800 disabled:opacity-50"
            >
              {validando ? 'Verificando...' : '🔓 Entrar a EducaFe'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
