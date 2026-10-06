import { resumenMentora, formatearFecha } from '../lib/calculos'
import { CURSO } from '../data/curso'
import { VERSION_CURRICULO } from '../data/curriculum'
import { useIdioma } from '../i18n/idioma'

// Certificado imprimible (A4 horizontal).
// nivel: 1 → CHANAK CERTIFIED MENTOR (180 h) · 2 → CHANAK CERTIFIED COORDINATOR (300 h)
export default function Certificado({ mentora, progreso, nivel, onVolver }) {
  const { t } = useIdioma()
  const r = resumenMentora(progreso)
  const cert = CURSO.certificaciones[nivel - 1] || CURSO.certificaciones[0]
  const hoy = new Date().toISOString().slice(0, 10)
  const idInterno = mentora.idInterno || (mentora.id ? String(mentora.id).slice(0, 8).toUpperCase() : '')
  const ref = `CHK-${cert.codigo}-${hoy.replace(/-/g, '')}`

  if (!(nivel === 2 ? r.elegibleCoordinadora : r.elegibleMentor)) return (
    <section className="rounded-2xl bg-white p-5 text-navy shadow-sm">
      <button onClick={onVolver} className="text-sm font-bold text-teal">Volver</button>
      <h1 className="mt-4 text-xl font-bold">Certificación pendiente de validación formal</h1>
      <p className="mt-3 text-sm">La meta de esta ruta es {cert.horas} horas. Las {r.horas} h mostradas en el app son una estimación de actividades de módulos; no son horas acreditadas ni una autorización de certificación.</p>
      <p className="mt-3 text-sm">Presenta bitácora de tiempo real, currículo y práctica supervisada, portafolio y evaluación a dirección. La resolución y firma se archivan antes de emitir el certificado oficial.</p>
      <a className="mt-4 inline-block text-sm font-bold text-teal underline" href="/formacion/PLAN_FORMACION_180_300.md">Consultar plan y protocolo</a>
    </section>
  )

  return (
    <div className="space-y-4">
      <div className="no-print flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-white p-4 shadow-sm">
        <button onClick={onVolver} className="flex items-center gap-1 text-sm font-semibold text-teal hover:underline">
          {t('bloque.volverPanel')}
        </button>
        <button onClick={() => window.print()} className="flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-navy shadow-sm transition hover:bg-gold/90">
          <span>📥</span>
          <span>{t('cert.descargar')}</span>
        </button>
      </div>

      <p className="no-print rounded-xl bg-gold/10 px-4 py-3 text-xs leading-relaxed text-navy/70">💡 {t('cert.consejo')}</p>

      <div className="print-cert overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="relative border-[10px] border-double border-gold/45 p-8 text-center">
          <img src="/logo-chanak.png" alt="" aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]" />
          <div className="relative">
            <img src="/logo-chanak.png" alt="Chanak International Academy" className="mx-auto h-24 w-24" />
            <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.3em] text-navy/55">Chanak International Academy</div>
            <div className="text-[11px] tracking-wide text-navy/40">{t('cert.escuela')}</div>

            <h1 className="mt-6 text-xl font-bold uppercase tracking-[0.15em] text-navy sm:text-2xl">{cert.nombre}</h1>
            <div className="mx-auto mt-2 h-px w-40 bg-gold" />

            <p className="mt-6 text-xs uppercase tracking-widest text-navy/50">{t('cert.seCertifica')}</p>
            <p className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{mentora.nombre}</p>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-navy/75">
              {t('cert.haCompletado')}
              <br />
              <b className="text-navy">Chanak · Formación de Mentores y Coordinadores 2026–2027</b>
              <br />
              {t('cert.cargaTotal', { horas: cert.horas })}
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-xl border-2 border-gold/40 bg-gold/8 px-5 py-3">
              <div className="text-[12px] font-bold uppercase tracking-widest text-navy/50">{t('cert.pathway')}</div>
              <div className="mt-0.5 text-base font-bold text-gold">{cert.nombre}</div>
              <div className="text-[12px] text-navy/60">{cert.detalle}</div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-10 sm:gap-16">
              <div>
                <div className="h-10" />
                <div className="border-t border-navy/40 pt-1.5 text-[12px] font-semibold text-navy">{t('cert.firma1')}</div>
                <div className="text-[11px] text-navy/50">Chanak International Academy</div>
              </div>
              <div>
                <div className="h-10" />
                <div className="border-t border-navy/40 pt-1.5 text-[12px] font-semibold text-navy">{t('cert.firma2')}</div>
                <div className="text-[11px] text-navy/50">Chanak TrainUp Education, Inc.</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-3 border-t border-navy/10 pt-3 text-[11px] text-navy/45">
              <span>{t('cert.expedido', { fecha: formatearFecha(hoy), horas: r.horas })}</span>
              <span>{idInterno && `ID ${idInterno} · `}Ref. {ref} · {VERSION_CURRICULO}</span>
            </div>
            <p className="mt-2 text-[10px] leading-relaxed text-navy/40">{t('cert.legal')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
