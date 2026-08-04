import { useState, useEffect, useCallback } from 'react'
import * as api from '../lib/backend'
import { useIdioma } from '../i18n/idioma'

const TIPOS = [
  { value: 'visionaria', emoji: '🌟', label: 'Visionaria (gratis · 180h)' },
  { value: 'mentora', emoji: '👩🏫', label: 'Mentora (pago · 180h)' },
  { value: 'coordinadora', emoji: '🎯', label: 'Coordinadora (pago · 300h)' },
]

export default function GestionCodigos({ miId }) {
  const { t } = useIdioma()
  const [codigos, setCodigos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [exito, setExito] = useState('')

  // Formulario de creación
  const [nuevoCodigo, setNuevoCodigo] = useState('')
  const [nuevoTipo, setNuevoTipo] = useState('visionaria')
  const [nuevosUsos, setNuevosUsos] = useState(1)
  const [creando, setCreando] = useState(false)

  const cargar = useCallback(async () => {
    setError('')
    try {
      const data = await api.listarCodigos()
      setCodigos(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setCargando(false)
    }
  }, [])

  useEffect(() => { cargar() }, [cargar])

  async function crearCodigo(e) {
    e.preventDefault()
    if (!nuevoCodigo.trim()) return
    setCreando(true)
    setError('')
    setExito('')
    try {
      await api.crearCodigo(nuevoCodigo, nuevoTipo, nuevosUsos, null, miId)
      setNuevoCodigo('')
      setNuevosUsos(1)
      setExito(t('codigos.creado'))
      setTimeout(() => setExito(''), 3000)
      await cargar()
    } catch (e) {
      setError(e.message)
    } finally {
      setCreando(false)
    }
  }

  async function toggleActivo(codigo) {
    setError('')
    try {
      if (codigo.activo) {
        await api.desactivarCodigo(codigo.id)
      } else {
        await api.activarCodigo(codigo.id)
      }
      await cargar()
    } catch (e) {
      setError(e.message)
    }
  }

  function generarAleatorio() {
    const tipo = nuevoTipo === 'visionaria' ? 'VISION' : nuevoTipo === 'mentora' ? 'MENTOR' : 'COORD'
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
    let aleatorio = ''
    for (let i = 0; i < 4; i++) aleatorio += chars[Math.floor(Math.random() * chars.length)]
    setNuevoCodigo(`${tipo}-${aleatorio}`)
  }

  const activos = codigos.filter(c => c.activo)
  const inactivos = codigos.filter(c => !c.activo)

  if (cargando) {
    return <p className="rounded-2xl bg-white px-4 py-8 text-center text-sm text-navy/50 shadow-sm">{t('codigos.cargando')}</p>
  }

  return (
    <div className="space-y-4">
      {/* Crear nuevo código */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <h3 className="font-bold text-navy">{t('codigos.crearTitulo')}</h3>
        <p className="mt-1 text-xs text-navy/55">{t('codigos.crearSub')}</p>

        <form onSubmit={crearCodigo} className="mt-4 space-y-3">
          <div className="flex gap-2">
            <label className="flex-1">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
                {t('codigos.nombre')}
              </span>
              <input
                type="text"
                value={nuevoCodigo}
                onChange={(e) => setNuevoCodigo(e.target.value.toUpperCase())}
                placeholder="MENTOR-PAGO-001"
                className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm text-navy font-mono uppercase placeholder:text-navy/30"
                required
              />
            </label>
            <button
              type="button"
              onClick={generarAleatorio}
              className="mt-5 shrink-0 rounded-lg bg-navy/8 px-3 py-2 text-xs font-medium text-navy hover:bg-navy/15"
            >
              🎲 {t('codigos.generar')}
            </button>
          </div>

          <div className="flex gap-2">
            <label className="flex-1">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
                {t('codigos.tipo')}
              </span>
              <select
                value={nuevoTipo}
                onChange={(e) => setNuevoTipo(e.target.value)}
                className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm text-navy"
              >
                {TIPOS.map(t => (
                  <option key={t.value} value={t.value}>{t.emoji} {t.label}</option>
                ))}
              </select>
            </label>
            <label className="w-24">
              <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
                {t('codigos.usosMax')}
              </span>
              <input
                type="number"
                min="1"
                max="100"
                value={nuevosUsos}
                onChange={(e) => setNuevosUsos(parseInt(e.target.value) || 1)}
                className="mt-1 w-full rounded-lg border border-navy/15 bg-white px-3 py-2 text-sm text-navy text-center"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={creando || !nuevoCodigo.trim()}
            className="w-full rounded-xl bg-teal py-2.5 text-sm font-bold text-white transition hover:bg-teal/90 disabled:opacity-50"
          >
            {creando ? t('codigos.creando') : t('codigos.botonCrear')}
          </button>
        </form>

        {exito && (
          <p className="mt-3 rounded-lg border-l-4 border-teal bg-teal/8 px-3 py-2 text-xs text-navy/75">
            {exito}
          </p>
        )}
      </div>

      {error && (
        <p className="rounded-xl border-l-4 border-coral bg-coral/8 px-4 py-2.5 text-xs text-coral">
          {error}
        </p>
      )}

      {/* Códigos activos */}
      {activos.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wide text-navy/50">
            ✅ {t('codigos.activos')} ({activos.length})
          </h4>
          {activos.map(c => (
            <CodigoCard key={c.id} codigo={c} onToggle={() => toggleActivo(c)} />
          ))}
        </div>
      )}

      {/* Códigos inactivos */}
      {inactivos.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wide text-navy/30">
            🔒 {t('codigos.inactivos')} ({inactivos.length})
          </h4>
          {inactivos.map(c => (
            <CodigoCard key={c.id} codigo={c} onToggle={() => toggleActivo(c)} />
          ))}
        </div>
      )}

      {codigos.length === 0 && (
        <p className="rounded-2xl bg-white px-4 py-8 text-center text-sm text-navy/50 shadow-sm">
          {t('codigos.vacio')}
        </p>
      )}

      {/* Instrucciones */}
      <div className="rounded-2xl bg-gold/10 p-4 text-xs leading-relaxed text-navy/65">
        <p className="font-bold text-navy/80">{t('codigos.instrTitulo')}</p>
        <ol className="mt-2 list-inside list-decimal space-y-1">
          <li>{t('codigos.instr1')}</li>
          <li>{t('codigos.instr2')}</li>
          <li>{t('codigos.instr3')}</li>
        </ol>
      </div>
    </div>
  )
}

function CodigoCard({ codigo: c, onToggle }) {
  const tipo = TIPOS.find(t => t.value === c.tipo_acceso) || TIPOS[1]
  const agotado = c.usos >= c.usos_max
  const fecha = c.creado_en ? new Date(c.creado_en).toLocaleDateString('es') : ''

  return (
    <div className={`flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm ${
      !c.activo ? 'opacity-50' : ''
    }`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-lg">
        {tipo.emoji}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-bold text-navy">{c.codigo}</span>
          {agotado && <span className="rounded bg-coral/15 px-1.5 py-0.5 text-[11px] font-bold text-coral">Agotado</span>}
        </div>
        <p className="text-[12px] text-navy/50">
          {tipo.label} · {c.usos}/{c.usos_max} usos · {fecha}
        </p>
      </div>
      <button
        onClick={onToggle}
        className={`shrink-0 rounded-lg px-3 py-1.5 text-[12px] font-semibold transition ${
          c.activo
            ? 'bg-navy/8 text-navy/70 hover:bg-coral/15 hover:text-coral'
            : 'bg-teal/10 text-teal hover:bg-teal/20'
        }`}
      >
        {c.activo ? '⏸ Desactivar' : '▶ Activar'}
      </button>
    </div>
  )
}
