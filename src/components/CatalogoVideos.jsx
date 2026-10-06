import { useState } from 'react'
import { VIDEOS_RENDERIZADOS } from '../data/videosRenderizados'
import { SUBTITULOS_VIDEOS } from '../data/subtitulosVideos'
import VideoLeccion from './VideoLeccion'

const normalizar = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export default function CatalogoVideos({ onVolver }) {
  const [busqueda, setBusqueda] = useState('')
  const [seleccion, setSeleccion] = useState(VIDEOS_RENDERIZADOS[0]?.id)
  const lista = VIDEOS_RENDERIZADOS.filter((v) => normalizar(`${v.titulo} ${v.modulo} ${v.tipo}`).includes(normalizar(busqueda.trim())))
  const actual = lista.find((v) => v.id === seleccion) || lista[0]
  return <div className="space-y-4">
    <button onClick={onVolver} className="text-sm font-bold text-teal">← Volver al panel</button>
    <section className="rounded-2xl bg-navy p-5 text-cream shadow-sm">
      <h1 className="text-xl font-bold">Catálogo completo · 87 videos</h1>
      <p className="mt-2 text-sm leading-relaxed text-cream/80">72 resúmenes y microlecciones, 6 procedimientos administrativos y 9 videos de sistemas, PEI, organigrama y perfiles. Narración en español, sin avatar; subtítulos descargables. La lectura, práctica y evidencias completan la formación.</p>
      <p className="mt-2 text-xs leading-relaxed text-cream/70">Los archivos conservan sus permisos de Drive. Consulta al responsable de tu formación si no tienes acceso. Los gráficos explican procedimientos y se distinguen de las pantallas observadas; no muestran una consola privada no verificada.</p>
    </section>
    <label className="block rounded-2xl bg-white p-4 shadow-sm">
      <span className="text-xs font-bold text-navy">Buscar tema o módulo</span>
      <input value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Portal, Helping, PEI, matrícula, T7.1…" className="mt-2 w-full rounded-xl border border-navy/20 p-3 text-sm" />
      <span className="mt-2 block text-xs text-navy/60">{lista.length} de 87 videos</span>
    </label>
    {actual && <section className="rounded-2xl bg-white p-4 shadow-sm">
      <h2 className="mb-3 text-lg font-bold text-navy">{actual.titulo}</h2>
      <VideoLeccion key={actual.id} video={{ url: actual.videoUrl }} />
      <p className="mt-3 text-xs text-navy/60">{actual.modulo} · {actual.duracion} · {actual.tipo}</p>
      <div className="mt-3 flex flex-wrap gap-4 text-xs font-bold text-teal">
        <a href={actual.videoUrl} target="_blank" rel="noreferrer" className="underline">Abrir archivo en Drive</a>
        <a href={`data:text/plain;charset=utf-8,${encodeURIComponent(SUBTITULOS_VIDEOS[actual.id] || '')}`} download={`${actual.id}.srt`} className="underline">Descargar subtítulos SRT</a>
      </div>
      <details className="mt-3 text-xs leading-relaxed text-navy/70"><summary className="cursor-pointer font-semibold">Fuente y alcance</summary><p className="mt-2">{actual.fuente}</p></details>
    </section>}
    <div className="grid gap-2 sm:grid-cols-2">{lista.map((v) => <button key={v.id} data-video-id={v.id} onClick={() => { setSeleccion(v.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className={`rounded-xl border p-3 text-left ${actual?.id === v.id ? 'border-teal bg-teal/10' : 'border-navy/10 bg-white'}`}>
      <span className="block text-xs text-navy/50">{v.id} · {v.modulo} · {v.duracion}</span>
      <span className="mt-1 block text-sm font-bold text-navy">{v.titulo}</span>
    </button>)}</div>
    {lista.length === 0 && <p className="rounded-xl bg-white p-4 text-sm text-navy">No hay videos con ese término. Prueba el nombre del programa o módulo.</p>}
    <p className="text-xs leading-relaxed text-navy/55">Voz sintética local Piper / Sharvard · University of Edinburgh · CC BY 3.0. La certificación completa es Mentor 180 h y Coordinator 300 h, con bitácora, evidencias y resolución de dirección. Estos renders no son una edición de los proyectos anteriores de Google Vids.</p>
  </div>
}
