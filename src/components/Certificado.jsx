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
    <section className="rounded-2xl bg-white p-5 text-navy shadow-sm space-y-4">
      <button onClick={onVolver} className="text-sm font-bold text-teal hover:underline">← Volver al panel</button>
      <div className="border-b border-navy/10 pb-3">
        <div className="text-[11px] font-bold uppercase tracking-wider text-teal">Certificación interna</div>
        <h1 className="mt-1 text-xl font-bold">Certificación pendiente de validación formal</h1>
        <p className="mt-2 text-sm text-navy/75 leading-relaxed">
          Certificado de formación interna emitido por Chanak TrainUp Education, Inc. No constituye acreditación institucional, titulación oficial ni autorización para atender estudiantes; esa autorización la concede Dirección mediante asignación escrita.
        </p>
      </div>

      <div className="rounded-2xl border border-teal/30 bg-teal/5 p-4 text-xs leading-relaxed space-y-2.5">
        <div className="font-bold text-teal uppercase tracking-wide flex items-center gap-1.5">
          <span>📋</span> Protocolo de validación por ramas y evidencias:
        </div>
        <div className="space-y-2 text-navy/85">
          <p>
            <b>• Nivel 1 (CHANAK CERTIFIED MENTOR · meta de referencia):</b> Lo valida y aprueba <b>Dirección Académica (Mariela Andrade)</b>. Requiere: Tronco común + Bloques 1 al 6 completados al 100% con Knowledge Checks ≥ 80%, Bloque 9 (Safeguarding y desarrollo), bitácora de autoestudio y práctica pedagógica documentada (180 h como meta de referencia).
          </p>
          <p>
            <b>• Nivel 2 (CHANAK CERTIFIED COORDINATOR · meta de referencia):</b> Lo valida conjuntamente <b>Dirección Académica (Mariela Andrade)</b> y <b>Dirección de Operaciones (Elías Vidal)</b>. Requiere: Certificación de Mentor activa, Bloque 8 completado, evidencias de supervisión de mentores y proyecto de coordinación de centro (300 h como meta de referencia).
          </p>
          <p>
            <b>• Rama Estratégica (Formación en Alianzas y Programas):</b> Lo valida <b>Dirección de Operaciones (Elías Vidal)</b> con la entrega del plan de trabajo territorial o propuesta de proyecto.
          </p>
        </div>
      </div>

      <p className="text-xs text-navy/60 leading-relaxed">
        Las horas mostradas en la app son una estimación de actividades de módulos, no horas acreditadas. La emisión del certificado requiere la resolución favorable archivada en dirección.
      </p>

      <a className="inline-block text-xs font-bold text-teal underline" href="https://drive.google.com/file/d/11l7EomB_1f3qbXIfYmTwKefUgVbiGoTv/view" target="_blank" rel="noreferrer">
        Consultar plan y protocolo de certificación en Drive →
      </a>
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
              <b className="text-navy">Chanak · Formación del Equipo Chanak 2026–2027</b>
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
                <div className="text-[11px] text-navy/50">Dirección Académica · Chanak International Academy</div>
              </div>
              <div>
                <div className="h-10" />
                <div className="border-t border-navy/40 pt-1.5 text-[12px] font-semibold text-navy">{t('cert.firma2')}</div>
                <div className="text-[11px] text-navy/50">Dirección de Operaciones · Chanak TrainUp Education, Inc.</div>
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
