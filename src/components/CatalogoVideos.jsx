import { useState } from 'react'
import { VIDEOS_OFICIALES, filtrarVideosCatalogo } from '../data/catalogoVideosData'
import VideoLeccion from './VideoLeccion'

export default function CatalogoVideos({ esAdmin = false, onVolver }) {
  const [busqueda, setBusqueda] = useState('')
  const [filtro, setFiltro] = useState('todos')
  const [seleccion, setSeleccion] = useState(VIDEOS_OFICIALES[0]?.id)

  const listaFiltrada = filtrarVideosCatalogo(esAdmin, busqueda, filtro)
  const actual = listaFiltrada.find((v) => v.id === seleccion) || listaFiltrada[0]

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={onVolver} className="text-sm font-bold text-teal hover:underline">← Volver al panel</button>
        <span className="text-xs text-navy/55 font-medium">Biblioteca Oficial de Vídeos 2026–2027</span>
      </div>

      <section className="rounded-2xl bg-navy p-5 text-cream shadow-sm space-y-2">
        <h1 className="text-xl font-bold">Vídeos Oficiales de la Formación</h1>
        <p className="text-sm leading-relaxed text-cream/80">
          Vídeos institucionales, de dominio pedagógico (Mastery Learning), programas y sistemas abiertos para todas las personas inscritas en Chanak Training.
        </p>
        <div className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-xs text-cream/90 mt-1">
          <span>ℹ️</span>
          <span>Catálogo completo del equipo. Los procedimientos técnicos reservados a administración solo son visibles para cuentas con dicho rol.</span>
        </div>
      </section>

      <div className="rounded-2xl bg-white p-4 shadow-sm space-y-3">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFiltro('todos')}
            className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${filtro === 'todos' ? 'bg-teal text-white' : 'bg-cream text-navy hover:bg-navy/5'}`}
          >
            Todos ({filtrarVideosCatalogo(esAdmin, '', 'todos').length})
          </button>
          <button
            onClick={() => setFiltro('abiertos')}
            className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${filtro === 'abiertos' ? 'bg-teal text-white' : 'bg-cream text-navy hover:bg-navy/5'}`}
          >
            Abiertos ({VIDEOS_OFICIALES.filter(v => !v.restringido).length})
          </button>
          {esAdmin && (
            <button
              onClick={() => setFiltro('admin')}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition ${filtro === 'admin' ? 'bg-teal text-white' : 'bg-cream text-navy hover:bg-navy/5'}`}
            >
              Exclusivos de administración ({VIDEOS_OFICIALES.filter(v => v.restringido).length})
            </button>
          )}
        </div>

        <label className="block">
          <span className="text-xs font-bold text-navy">Buscar en el catálogo</span>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por título, módulo (ej. T1.1, T5.1), tema…"
            className="mt-1.5 w-full rounded-xl border border-navy/20 p-3 text-sm focus:border-teal focus:outline-none"
          />
          <span className="mt-1.5 block text-xs text-navy/60">{listaFiltrada.length} vídeo(s) disponibles</span>
        </label>
      </div>

      {actual && (
        <section className="rounded-2xl bg-white p-5 shadow-sm space-y-3">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal">{actual.modulo}</span>
                {actual.restringido && (
                  <span className="rounded-full bg-gold/20 px-2 py-0.5 text-[10px] font-bold text-navy">
                    🔒 Procedimiento reservado a Administración
                  </span>
                )}
              </div>
              <h2 className="mt-1 text-lg font-bold text-navy">{actual.titulo}</h2>
            </div>
            <span className="shrink-0 rounded-lg bg-cream px-2.5 py-1 text-xs font-mono font-semibold text-navy/70">
              ⏱️ {actual.duracion}
            </span>
          </div>

          <VideoLeccion key={actual.id} video={{ url: actual.videoUrl, subtitulos: actual.subtitulos }} />

          <div className="border-t border-navy/10 pt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-navy/60">
            <span>{actual.tipo}</span>
            {actual.fuente && <span className="text-navy/50">{actual.fuente}</span>}
          </div>
        </section>
      )}

      <div className="grid gap-2 sm:grid-cols-2">
        {listaFiltrada.map((v) => {
          const esActivo = actual?.id === v.id
          return (
            <button
              key={v.id}
              onClick={() => { setSeleccion(v.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className={`rounded-xl border p-3.5 text-left transition ${
                esActivo ? 'border-teal bg-teal/10 shadow-xs' : 'border-navy/10 bg-white hover:border-teal/40 hover:bg-cream/50'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-navy/50">
                <span className="font-semibold text-teal">{v.modulo}</span>
                <span className="font-mono">{v.duracion}</span>
              </div>
              <span className="mt-1 block text-sm font-bold text-navy leading-snug">{v.titulo}</span>
              <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-navy/60">
                {v.restringido ? (
                  <span className="font-semibold text-gold">🔒 Administración</span>
                ) : (
                  <span>▶️ Abierto para todo el equipo</span>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {listaFiltrada.length === 0 && (
        <p className="rounded-xl bg-white p-5 text-sm text-center text-navy/60">No se encontraron vídeos con el criterio de búsqueda.</p>
      )}
    </div>
  )
}
