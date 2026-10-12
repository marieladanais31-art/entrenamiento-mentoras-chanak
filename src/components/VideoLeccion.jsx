import { useState } from 'react'
import { urlEmbed } from '../lib/calculos'
import { useIdioma } from '../i18n/idioma'

// Reproductor de la lección. Si eres admin, además puedes añadir, cambiar o
// borrar el vídeo (enlace de Google Vids, Drive o YouTube).
export default function VideoLeccion({ video, esAdmin, onGuardar, onBorrar }) {
  const { t } = useIdioma()
  const [editando, setEditando] = useState(false)
  const [url, setUrl] = useState(video?.url || '')
  const [nota, setNota] = useState(video?.nota || '')
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')

  const embed = urlEmbed(video?.url)

  async function guardar() {
    setError('')
    if (!url.trim()) return setError(t('video.errPega'))
    if (!/^https?:\/\//i.test(url.trim())) return setError(t('video.errHttps'))
    setGuardando(true)
    try {
      await onGuardar(url, nota)
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

  // ── Formulario de admin ──
  if (editando) {
    return (
      <div className="rounded-xl border-2 border-teal bg-teal/5 p-4">
        <div className="text-xs font-bold text-navy">🎬 Vídeo del módulo</div>
        <label className="mt-2 block">
          <span className="text-[12px] font-semibold uppercase tracking-wide text-navy/55">
            Enlace (MP4, YouTube, Vimeo, Google Drive, Google Vids o cualquier URL)
          </span>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://…/video.mp4 · https://youtu.be/… · https://vimeo.com/…"
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
          <div className="overflow-hidden rounded-xl bg-navy">
            <video src={embed.url} controls preload="metadata" playsInline className="aspect-video w-full">
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

  // ── Sin recurso todavía ──
  if (esAdmin) {
    return (
      <button
        onClick={() => setEditando(true)}
        className="flex w-full items-center gap-3 rounded-xl border border-dashed border-teal/50 bg-teal/5 px-4 py-3 text-left transition hover:bg-teal/10"
      >
        <span className="text-xl" aria-hidden>
          ➕
        </span>
        <span className="min-w-0 text-xs leading-relaxed text-navy/70">
          <b className="text-navy/85">Añadir vídeo</b>
          <br />
          Pega la URL del vídeo (MP4, YouTube, Vimeo, Drive o Google Vids). Tiene prioridad sobre src/data/videos.js.
        </span>
      </button>
    )
  }

  return (
    <div className="flex items-center gap-3 rounded-xl bg-cream px-4 py-3">
      <span className="text-xl" aria-hidden>
        🎬
      </span>
      <span className="text-xs leading-relaxed text-navy/60">
        {t('video.proximamente')}
      </span>
    </div>
  )
}
