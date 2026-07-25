import { useState } from 'react'
import { urlEmbed } from '../lib/calculos'

// Reproductor de la lección. Si eres admin, además puedes añadir, cambiar o
// borrar el vídeo (enlace de Google Vids, Drive o YouTube).
export default function VideoLeccion({ video, esAdmin, onGuardar, onBorrar }) {
  const [editando, setEditando] = useState(false)
  const [url, setUrl] = useState(video?.url || '')
  const [nota, setNota] = useState(video?.nota || '')
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')

  const embed = urlEmbed(video?.url)

  async function guardar() {
    setError('')
    if (!url.trim()) return setError('Pega el enlace del vídeo.')
    if (!/^https?:\/\//i.test(url.trim())) return setError('El enlace debe empezar por https://')
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
        <div className="text-xs font-bold text-navy">🎬 Vídeo de la lección</div>
        <label className="mt-2 block">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-navy/55">
            Enlace (Google Vids, Drive o YouTube)
          </span>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://vids.google.com/d/…"
            className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-3 py-2 text-xs"
          />
        </label>
        <label className="mt-2 block">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-navy/55">
            Nota interna (opcional)
          </span>
          <input
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            placeholder="Ej. Pendiente de regrabar la intro"
            className="mt-1 w-full rounded-lg border border-navy/20 bg-white px-3 py-2 text-xs"
          />
        </label>
        {error && <p className="mt-2 text-[11px] font-medium text-coral">{error}</p>}
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={guardar}
            disabled={guardando}
            className="flex-1 rounded-lg bg-teal py-2 text-xs font-bold text-white disabled:opacity-50"
          >
            {guardando ? 'Guardando…' : 'Guardar vídeo'}
          </button>
          <button
            onClick={() => {
              setEditando(false)
              setUrl(video?.url || '')
              setError('')
            }}
            className="rounded-lg bg-navy/10 px-3 py-2 text-xs font-medium text-navy"
          >
            Cancelar
          </button>
          {video?.url && (
            <button
              onClick={borrar}
              disabled={guardando}
              className="rounded-lg border border-coral/40 px-3 py-2 text-xs font-medium text-coral disabled:opacity-50"
            >
              Borrar
            </button>
          )}
        </div>
        <p className="mt-2 text-[10px] leading-relaxed text-navy/50">
          En Google Vids: <b>Compartir → Cualquier persona con el enlace</b> antes de pegarlo, o las
          mentoras no podrán verlo.
        </p>
      </div>
    )
  }

  // ── Vídeo publicado ──
  if (video?.url) {
    return (
      <div>
        {embed ? (
          <div className="overflow-hidden rounded-xl bg-navy">
            <iframe
              src={embed}
              title="Vídeo de la lección"
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
              <b className="block">Ver el vídeo de la lección</b>
              <span className="text-cream/60">Se abre en una pestaña nueva</span>
            </span>
          </a>
        )}
        {esAdmin && (
          <div className="mt-2 flex items-center gap-3">
            <button
              onClick={() => setEditando(true)}
              className="text-[11px] font-semibold text-teal hover:underline"
            >
              ✏️ Cambiar vídeo
            </button>
            {video.nota && (
              <span className="text-[11px] text-navy/50">Nota: {video.nota}</span>
            )}
          </div>
        )}
      </div>
    )
  }

  // ── Sin vídeo todavía ──
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
          <b className="text-navy/85">Añadir vídeo de Google Vids</b>
          <br />
          El guion de abajo está listo para grabarlo.
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
        El vídeo de esta lección estará disponible pronto. Puedes estudiar el contenido escrito más
        abajo.
      </span>
    </div>
  )
}
