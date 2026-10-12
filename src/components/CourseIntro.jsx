import PlanFormacion from './PlanFormacion'
import { CURSO } from '../data/curso'
import { BLOQUES, TODOS_MODULOS, VERSION_CURRICULO, FECHA_ACTUALIZACION } from '../data/curriculum'
import { VIDEOS_RENDERIZADOS } from '../data/videosRenderizados'
import { formatearFecha } from '../lib/calculos'
import { useIdioma } from '../i18n/idioma'
import { traducirBloques } from '../data/curriculum.en'

// Portada de la formación: qué es, para quién, cómo se estudia y qué se certifica.
export default function CourseIntro({ onEmpezar, onVolver }) {
  const { t, idioma } = useIdioma()
  const bloques = traducirBloques(BLOQUES, idioma)
  return (
    <div className="space-y-5">
      <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">{t('curso.volver')}</button>

      <section className="overflow-hidden rounded-2xl bg-navy text-cream shadow-sm">
        <div className="p-6 sm:p-8">
          <img src="/logo-chanak.png" alt="Chanak International Academy" className="mb-5 h-20 w-20 rounded-xl bg-white/95 p-1.5" />
          <div className="text-[13px] font-bold uppercase tracking-[0.2em] text-gold">{t('curso.programaOficial')}</div>
          <h1 className="mt-2 break-words text-xl font-bold leading-tight sm:text-3xl">{CURSO.titulo}</h1>
          <p className="mt-2 text-sm italic text-cream/75">{CURSO.subtitulo}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <Pill>🎓 {CURSO.nivel1}</Pill>
            <Pill>🏛 {CURSO.nivel2}</Pill>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
            <Metric n={BLOQUES.length} l={t('curso.bloques')} />
            <Metric n={TODOS_MODULOS.length} l={t('curso.modulos')} />
            <Metric n={VIDEOS_RENDERIZADOS.length} l={t('curso.videos')} />
          </div>
          <p className="mt-4 text-[11px] text-cream/50">
            {t('curso.version', { version: VERSION_CURRICULO, fecha: formatearFecha(FECHA_ACTUALIZACION) })}
          </p>
        </div>
      </section>

      <Card titulo={t('curso.sobre')}>
        <p className="text-sm leading-relaxed text-navy/75">{CURSO.resumen}</p>
        <div className="mt-4 rounded-xl bg-cream px-4 py-3">
          <div className="text-[12px] font-bold uppercase tracking-wide text-navy/45">{t('curso.dirigido')}</div>
          <p className="mt-1 text-sm text-navy/75">{CURSO.dirigidoA}</p>
        </div>
      </Card>

      <PlanFormacion />
      <Card titulo={t('curso.objetivos')}>
        <ul className="space-y-2.5">
          {CURSO.objetivos.map((o, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-navy/75">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/12 text-[12px] font-bold text-teal">{i + 1}</span>
              {o}
            </li>
          ))}
        </ul>
      </Card>

      <Card titulo={t('curso.comoSeEstudia')}>
        <div className="grid gap-3 sm:grid-cols-2">
          {CURSO.metodologia.map((m) => (
            <div key={m.nombre} className="flex items-start gap-3 rounded-xl bg-cream px-4 py-3">
              <span className="text-xl" aria-hidden>{m.icono}</span>
              <div>
                <div className="text-sm font-semibold text-navy">{m.nombre}</div>
                <div className="text-xs text-navy/60">{m.detalle}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-xl border-l-4 border-gold bg-gold/8 px-4 py-3 text-xs leading-relaxed text-navy/75">
          <b>{t('curso.estandar')}</b> {t('curso.estandarTxt', { pct: Math.round(CURSO.umbralAprobacion * 100) })}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-navy/60">{t('curso.horasNota')}</p>
      </Card>

      <Card titulo={t('curso.temario')}>
        <ol className="space-y-1.5">
          {bloques.map((b) => (
            <li key={b.id} className="flex items-center gap-3 rounded-xl bg-cream px-3 py-2 text-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-navy text-[13px] font-bold text-cream">{b.numero}</span>
              <span className="min-w-0 flex-1 font-medium text-navy">
                {b.titulo}
                <span className="block text-[11px] font-normal text-navy/50">
                  {b.porRol ? t('panel.porRol') : b.transversal ? 'Transversal' : b.nivel === 2 ? 'Coordinator' : 'Mentor'} · {b.categoria}
                </span>
              </span>
              <span className="shrink-0 text-[13px] text-navy/55">{b.modulos.length} {t('curso.mod')} · {b.horas}h</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-navy/55">{CURSO.porRol}</p>
      </Card>

      <Card titulo={t('curso.certificaciones')}>
        <div className="grid gap-3 sm:grid-cols-2">
          {CURSO.certificaciones.map((c) => (
            <div key={c.nombre} className="rounded-xl border-2 border-gold/35 bg-gold/8 p-4">
              <div className="text-2xl font-bold text-gold">{c.horas}h</div>
              <div className="mt-0.5 text-sm font-bold text-navy">{c.nombre}</div>
              <p className="mt-1 text-xs leading-relaxed text-navy/65">{c.detalle}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-navy/50">{t('curso.certNota')}</p>
      </Card>

      <button onClick={onEmpezar} className="w-full rounded-2xl bg-teal py-4 text-sm font-bold text-white shadow-sm transition hover:bg-teal/90">
        {t('curso.empezar')}
      </button>
    </div>
  )
}

function Pill({ children }) {
  return <span className="rounded-full bg-white/10 px-3 py-1.5 font-medium">{children}</span>
}

function Metric({ n, l }) {
  return (
    <div>
      <div className="text-xl font-bold text-gold">{n}</div>
      <div className="text-[12px] uppercase tracking-wide text-cream/60">{l}</div>
    </div>
  )
}

function Card({ titulo, children }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-navy">{titulo}</h2>
      {children}
    </section>
  )
}
