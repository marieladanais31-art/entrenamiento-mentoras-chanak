import { getBloque, numModulo } from '../data/curriculum'
import { getVideo } from '../data/videos'
import { formatearFecha } from '../lib/calculos'
import EstadoBadge from './ui/EstadoBadge'
import { useIdioma } from '../i18n/idioma'
import { traducirBloques } from '../data/curriculum.en'

export default function BlockView({ bloqueId, progreso, onAbrirModulo, onVolver }) {
  const { t, idioma } = useIdioma()
  const bloque = traducirBloques([getBloque(bloqueId)].filter(Boolean), idioma)[0]
  const mods = progreso?.modulos || {}
  if (!bloque) return null
  const hechos = bloque.modulos.filter((m) => mods[m.id]?.estado === 'completado').length

  return (
    <div className="space-y-4">
      <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">
        {t('bloque.volverPanel')}
      </button>

      <div className="rounded-2xl bg-navy p-5 text-cream shadow-sm">
        <div className="text-[13px] font-bold uppercase tracking-wider text-gold">
          {t('panel.bloque', { n: bloque.numero })} · {bloque.categoria}
          {bloque.porRol ? ` · ${t('panel.porRol')}` : bloque.transversal ? ' · Transversal' : bloque.nivel === 2 ? ' · Coordinator' : ' · Mentor'}
        </div>
        <h2 className="mt-1 text-lg font-bold leading-snug">{bloque.titulo}</h2>
        <p className="mt-1 text-xs text-cream/70">
          {t('bloque.resumen', { n: bloque.modulos.length, horas: bloque.horas, hechos })}
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/15">
          <div className="h-full rounded-full bg-gold" style={{ width: `${(hechos / bloque.modulos.length) * 100}%` }} />
        </div>
        {bloque.porRol && <p className="mt-3 text-xs text-cream/75">{t('panel.porRolTxt')}</p>}
      </div>

      <div className="space-y-3">
        {bloque.modulos.map((m) => {
          const p = mods[m.id]
          const estado = p?.estado || 'pendiente'
          const v = getVideo(m.video)
          return (
            <button
              key={m.id}
              onClick={() => onAbrirModulo(m.id)}
              className="block w-full rounded-2xl bg-white p-4 text-left shadow-sm transition hover:shadow-md active:scale-[0.99]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs font-bold text-teal">{t('bloque.modulo', { id: numModulo(m.id) })}</div>
                  <div className="mt-0.5 text-sm font-semibold leading-snug text-navy">{m.titulo}</div>
                </div>
                <EstadoBadge estado={estado} />
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5 text-[13px]">
                <Chip>⏱ {m.horas}h</Chip>
                {v && <Chip>🎬 {v.id} · {v.duracion}</Chip>}
                <Chip>📝 {m.evaluacion}</Chip>
                {m.entregable && <Chip>📁 {t('bloque.conEntregable')}</Chip>}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-medium">
                {estado === 'completado' && p?.fechaCompletado && (
                  <span className="text-gold">{t('bloque.completadoEl', { fecha: formatearFecha(p.fechaCompletado) })}</span>
                )}
                {p?.quiz && (
                  <span className={p.quiz.aprobado ? 'text-teal' : 'text-coral'}>
                    {p.quiz.aprobado ? '✓' : '↻'} Knowledge Check {p.quiz.aciertos}/{p.quiz.total}
                  </span>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Chip({ children }) {
  return <span className="rounded-full bg-cream px-2.5 py-1 font-medium text-navy/70">{children}</span>
}
