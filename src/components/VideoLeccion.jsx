import { useState, useEffect, useRef } from 'react'
import { urlEmbed } from '../lib/calculos'
import { useIdioma } from '../i18n/idioma'

// Reproductor de la lección con soporte para MP4 nativo, embeds de YouTube/Drive/Vimeo,
// y Audio-Guía interactiva integrada (Modo Flow) cuando la lección no tiene vídeo grabado.
export default function VideoLeccion({ video, titulo, guion, esAdmin, onGuardar, onBorrar }) {
  const { t, idioma } = useIdioma()
  const [editando, setEditando] = useState(false)
  const [url, setUrl] = useState(video?.url || '')
  const [nota, setNota] = useState(video?.nota || '')
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')

  // Estado del reproductor de Audio-Guía
  const [hablando, setHablando] = useState(false)
  const [pausado, setPausado] = useState(false)
  const [velocidad, setVelocidad] = useState(1)
  const utterRef = useRef(null)

  const embed = urlEmbed(video?.url)

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [titulo])

  async function guardar() {
    setError('')
    if (!url.trim()) return setError(t('video.errPega') || 'Pega un enlace válido')
    setGuardando(true)
    try {
      await onGuardar(url.trim(), nota)
      setEditando(false)
    } catch (e) {
      setError(e.message)
    } finally {
      setGuardando(false)
    }
  }

  async function borrar() {
    setGuardando(true)
    try {
      await onBorrar()
      setUrl('')
      setNota('')
      setEditando(false)
    } catch (e) {
      setError(e.message)
    } finally {
      setGuardando(false)
    }
  }

  function iniciarAudioGuia() {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta síntesis de voz automática.')
      return
    }

    if (pausado) {
      window.speechSynthesis.resume()
      setPausado(false)
      setHablando(true)
      return
    }

    window.speechSynthesis.cancel()

    const textoNarrar = [
      titulo || '',
      Array.isArray(guion) ? guion.join('. ') : (guion || '')
    ].filter(Boolean).join('. ')

    const u = new SpeechSynthesisUtterance(textoNarrar)
    u.lang = idioma === 'en' ? 'en-US' : 'es-ES'
    u.rate = velocidad

    u.onend = () => {
      setHablando(false)
      setPausado(false)
    }
    u.onerror = () => {
      setHablando(false)
      setPausado(false)
    }

    utterRef.current = u
    window.speechSynthesis.speak(u)
    setHablando(true)
    setPausado(false)
  }

  function pausarAudioGuia() {
    if ('speechSynthesis' in window && hablando) {
      window.speechSynthesis.pause()
      setPausado(true)
      setHablando(false)
    }
  }

  function detenerAudioGuia() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel()
      setHablando(false)
      setPausado(false)
    }
  }

  function cambiarVelocidad(v) {
    setVelocidad(v)
    if (hablando) {
      detenerAudioGuia()
      setTimeout(() => iniciarAudioGuia(), 100)
    }
  }

  // ── Formulario de admin ──
  if (editando) {
    return (
      <div className="rounded-xl border-2 border-teal bg-teal/5 p-4">
        <div className="text-xs font-bold text-navy">🎬 Vídeo del módulo</div>
        <label className="mt-2 block">
          <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
            Enlace (MP4 local, YouTube, Vimeo, Google Drive, Google Vids o cualquier URL)
          </span>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://…/video.mp4 · /videos/01_bienvenida.mp4 · https://youtu.be/…"
            className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-3 py-2 text-xs"
          />
        </label>
        <label className="mt-2 block">
          <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
            {t('video.notaInterna')}
          </span>
          <input
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            placeholder={t('video.notaPh')}
            className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-3 py-2 text-xs"
          />
        </label>
        {error && <p className="mt-2 text-[13px] font-medium text-coral">{error}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={guardar}
            disabled={guardando}
            className="flex-1 rounded-lg bg-teal py-2 text-xs font-bold text-white disabled:opacity-50"
          >
            {guardando ? t('video.guardando') : t('video.guardar')}
          </button>
          <button
            onClick={() => {
              setEditando(false)
              setUrl(video?.url || '')
              setError('')
            }}
            className="rounded-lg bg-navy/10 px-3 py-2 text-xs font-medium text-navy"
          >
            {t('video.cancelar')}
          </button>
          {video?.url && (
            <button
              onClick={borrar}
              disabled={guardando}
              className="rounded-lg border border-coral/40 px-3 py-2 text-xs font-medium text-coral disabled:opacity-50"
            >
              {t('video.borrar')}
            </button>
          )}
        </div>
      </div>
    )
  }

  // ── Vídeo publicado ──
  if (video?.url) {
    return (
      <div className="space-y-2">
        {embed?.tipo === 'mp4' ? (
          <div className="overflow-hidden rounded-xl bg-navy shadow-md">
            <video src={embed.url} controls preload="metadata" playsInline className="aspect-video w-full bg-black">
              {video.subtitulos && <track kind="captions" src={video.subtitulos} srcLang="es" label="Español" default />}
            </video>
          </div>
        ) : embed?.tipo === 'embed' ? (
          <div className="overflow-hidden rounded-xl bg-navy">
            <iframe
              src={embed.url}
              title="Vídeo del módulo"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="aspect-video w-full border-0"
            />
          </div>
        ) : (
          <a
            href={video.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl bg-navy px-4 py-3 text-cream transition hover:bg-navy/90"
          >
            <span className="text-xl" aria-hidden>
              ▶️
            </span>
            <span className="min-w-0 flex-1 text-xs">
              <b className="block">{t('video.abrirNueva')}</b>
              <span className="text-cream/60">{t('video.abrirNuevaSub')}</span>
            </span>
          </a>
        )}
        {esAdmin && (
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={() => setEditando(true)}
              className="text-[13px] font-semibold text-teal hover:underline"
            >
              ✏️ Cambiar vídeo
            </button>
            {video.nota && (
              <span className="text-[13px] text-navy/50">{t('video.nota')}: {video.nota}</span>
            )}
          </div>
        )}
      </div>
    )
  }

  // ── Sin vídeo: Audio-Guía interactiva integrada (Modo Flow) ──
  return (
    <div className="space-y-3 rounded-xl border border-teal/20 bg-gradient-to-br from-teal/6 to-cream p-4 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-teal/15 pb-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal text-base text-white shadow-sm" aria-hidden>
            🎧
          </span>
          <div>
            <div className="text-xs font-bold text-navy">Audio-Guía de la Lección · Modo Flow</div>
            <div className="text-[11px] text-navy/60">Narración asistida de los conceptos clave</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-[11px] font-medium text-navy/55">Velocidad:</span>
          {[1, 1.25, 1.5].map((v) => (
            <button
              key={v}
              onClick={() => cambiarVelocidad(v)}
              className={`rounded px-1.5 py-0.5 text-[11px] font-bold transition ${
                velocidad === v ? 'bg-teal text-white' : 'bg-navy/10 text-navy hover:bg-navy/20'
              }`}
            >
              {v}x
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2">
        {!hablando && !pausado ? (
          <button
            onClick={iniciarAudioGuia}
            className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-teal py-2.5 text-xs font-bold text-white shadow transition hover:bg-teal/90"
          >
            <span className="text-sm">▶</span> Escuchar lección con voz guiada
          </button>
        ) : hablando ? (
          <>
            <button
              onClick={pausarAudioGuia}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-gold py-2.5 text-xs font-bold text-navy shadow transition hover:bg-gold/90"
            >
              <span>⏸</span> Pausar narración
            </button>
            <button
              onClick={detenerAudioGuia}
              className="rounded-lg bg-navy/10 px-3 py-2.5 text-xs font-semibold text-navy hover:bg-navy/20"
            >
              ⏹ Detener
            </button>
          </>
        ) : (
          <>
            <button
              onClick={iniciarAudioGuia}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-teal py-2.5 text-xs font-bold text-white shadow transition hover:bg-teal/90"
            >
              <span>▶</span> Reanudar narración
            </button>
            <button
              onClick={detenerAudioGuia}
              className="rounded-lg bg-navy/10 px-3 py-2.5 text-xs font-semibold text-navy hover:bg-navy/20"
            >
              ⏹ Detener
            </button>
          </>
        )}
      </div>

      {Array.isArray(guion) && guion.length > 0 && (
        <div className="mt-2 rounded-lg bg-white/80 p-3 border border-navy/5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-navy/55">
            Puntos clave a dominar:
          </div>
          <ul className="mt-1.5 space-y-1">
            {guion.slice(0, 4).map((g, idx) => (
              <li key={idx} className="flex items-start gap-1.5 text-xs text-navy/75">
                <span className="text-teal font-bold">✓</span>
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {esAdmin && (
        <div className="pt-1 text-right">
          <button
            onClick={() => setEditando(true)}
            className="text-[11px] font-semibold text-teal hover:underline"
          >
            ➕ Añadir o personalizar enlace de vídeo para este módulo
          </button>
        </div>
      )}
    </div>
  )
}
