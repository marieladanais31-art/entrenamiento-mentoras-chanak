import { useState } from 'react'
import { VIDEOS_RENDERIZADOS } from '../data/videosRenderizados'
import VideoLeccion from './VideoLeccion'

const normalizar = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const VIDEOS_OFICIALES = [
  {
    id: 'V00',
    titulo: 'Presentación General · Chanak International Academy',
    modulo: 'Introducción',
    tipo: 'Inducción institucional',
    videoUrl: '/videos/presentacion_general.mp4',
    duracion: '5:41',
    fuente: 'Vídeo oficial de inducción y bienvenida de Chanak International Academy.',
  },
  ...VIDEOS_RENDERIZADOS.filter((v) => Boolean(v.videoUrl)).map((v) => ({
    ...v,
    tipo: 'Lección oficial · Mastery Learning',
  })),
]

export default function CatalogoVideos({ onVolver }) {
  const [busqueda, setBusqueda] = useState('')
  const [seleccion, setSeleccion] = useState(VIDEOS_OFICIALES[0]?.id)
  const lista = VIDEOS_OFICIALES.filter((v) => normalizar(`${v.titulo} ${v.modulo} ${v.tipo}`).includes(normalizar(busqueda.trim())))
  const actual = lista.find((v) => v.id === seleccion) || lista[0]

  return (
    <div className="space-y-4">
      <button onClick={onVolver} className="text-sm font-bold text-teal">← Volver al panel</button>
      <section className="rounded-2xl bg-navy p-5 text-cream shadow-sm">
        <h1 className="text-xl font-bold">Vídeos Oficiales de la Formación</h1>
        <p className="mt-2 text-sm leading-relaxed text-cream/80">
          Vídeos institucionales y de dominio académico aprobados para el entrenamiento de mentoras de Chanak International Academy.
        </p>
      </section>
      <label className="block rounded-2xl bg-white p-4 shadow-sm">
        <span className="text-xs font-bold text-navy">Buscar vídeo</span>
        <input
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Presentación, Mastery Learning…"
          className="mt-2 w-full rounded-xl border border-navy/20 p-3 text-sm"
        />
        <span className="mt-2 block text-xs text-navy/60">{lista.length} de {VIDEOS_OFICIALES.length} vídeo(s)</span>
      </label>
      {actual && (
        <section className="rounded-2xl bg-white p-4 shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-navy">{actual.titulo}</h2>
          <VideoLeccion key={actual.id} video={{ url: actual.videoUrl, subtitulos: actual.subtitulos }} />
          <p className="mt-3 text-xs text-navy/60">{actual.modulo} · {actual.duracion} · {actual.tipo}</p>
          {actual.fuente && (
            <p className="mt-2 text-xs leading-relaxed text-navy/70">{actual.fuente}</p>
          )}
        </section>
      )}
      <div className="grid gap-2 sm:grid-cols-2">
        {lista.map((v) => (
          <button
            key={v.id}
            onClick={() => { setSeleccion(v.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className={`rounded-xl border p-3 text-left ${actual?.id === v.id ? 'border-teal bg-teal/10' : 'border-navy/10 bg-white'}`}
          >
            <span className="block text-xs text-navy/50">{v.id} · {v.modulo} · {v.duracion}</span>
            <span className="mt-1 block text-sm font-bold text-navy">{v.titulo}</span>
          </button>
        ))}
      </div>
      {lista.length === 0 && (
        <p className="rounded-xl bg-white p-4 text-sm text-navy">No se encontraron vídeos con ese término.</p>
      )}
    </div>
  )
}
