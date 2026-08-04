import { resumenMentora, formatearFecha } from '../lib/calculos'
import { CURSO } from '../data/curso'
import { useIdioma } from '../i18n/idioma'
import { CURSO_EN } from '../data/curso.en'

// Certificado de participación imprimible (A4 horizontal) con logo Chanak
// y espacio de firmas. nivel: 1 → 180h Mentor · 2 → 300h Coordinator
export default function Certificado({ mentora, progreso, nivel, onVolver }) {
  const { t, idioma } = useIdioma()
  const r = resumenMentora(progreso)
  const curso = idioma === 'en' ? CURSO_EN : CURSO
  const cert = curso.certificaciones[nivel - 1]
  const hoy = new Date().toISOString().slice(0, 10)

  return (
    <div className="space-y-4">
      <div className="no-print flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-white p-4 shadow-sm">
        <button onClick={onVolver} className="text-sm font-semibold text-teal hover:underline flex items-center gap-1">
          ← {t('bloque.volverPanel')}
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 rounded-xl bg-gold px-5 py-2.5 text-xs font-bold text-navy shadow-sm transition hover:bg-gold/90"
        >
          <span>📥</span>
          <span>Descargar Certificado (PDF / Imprimir)</span>
        </button>
      </div>

      <p className="no-print rounded-xl bg-gold/10 px-4 py-3 text-xs leading-relaxed text-navy/70">
        💡 {t('cert.consejo')} (En el diálogo de impresión del navegador, selecciona <b>"Guardar como PDF"</b> y la orientación <b>Horizontal / Landscape</b>).
      </p>

      {/* ── Certificado ── */}
      <div className="print-cert overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="relative border-[10px] border-double border-gold/45 p-8 text-center">
          {/* Marca de agua */}
          <img
            src="/logo-chanak.png"
            alt=""
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 w-72 -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
          />

          <div className="relative">
            <img
              src="/logo-chanak.png"
              alt="Chanak International Academy"
              className="mx-auto h-24 w-24"
            />

            <div className="mt-2 text-[12px] font-bold uppercase tracking-[0.3em] text-navy/55">
              Chanak International Academy
            </div>
            <div className="text-[11px] tracking-wide text-navy/40">
              {t('cert.escuela')}
            </div>

            <h1 className="mt-6 text-xl font-bold uppercase tracking-[0.15em] text-navy sm:text-2xl">
              {t('cert.titulo')}
            </h1>
            <div className="mx-auto mt-2 h-px w-40 bg-gold" />

            <p className="mt-6 text-xs uppercase tracking-widest text-navy/50">
              {t('cert.seCertifica')}
            </p>
            <p className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{mentora.nombre}</p>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-navy/75">
              {t('cert.haCompletado')}
              <br />
              <b className="text-navy">{curso.titulo}</b>
              <br />
              {t('cert.cargaTotal', { horas: cert.horas })}
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-xl border-2 border-gold/40 bg-gold/8 px-5 py-3">
              <div className="text-[12px] font-bold uppercase tracking-widest text-navy/50">
                {t('cert.acreditacion')}
              </div>
              <div className="mt-0.5 text-base font-bold text-gold">{cert.nombre}</div>
              <div className="text-[12px] text-navy/60">{cert.detalle}</div>
            </div>

            <p className="mx-auto mt-5 max-w-lg text-[12px] leading-relaxed text-navy/50">
              {t('cert.legal')}
            </p>

            {/* Firmas */}
            <div className="mt-10 grid grid-cols-2 gap-10 sm:gap-16">
              <div>
                <div className="h-10" />
                <div className="border-t border-navy/40 pt-1.5 text-[12px] font-semibold text-navy">
                  {t('cert.headLsp')}
                </div>
                <div className="text-[11px] text-navy/50">Chanak International Academy</div>
              </div>
              <div>
                <div className="h-10" />
                <div className="border-t border-navy/40 pt-1.5 text-[12px] font-semibold text-navy">
                  {t('cert.board')}
                </div>
                <div className="text-[11px] text-navy/50">{t('cert.vistoBueno')}</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-3 border-t border-navy/10 pt-3 text-[11px] text-navy/45">
              <span>
                {t('cert.expedido', { fecha: formatearFecha(hoy), horas: r.horas })}
              </span>
              <span>
                Ref. CHK-{nivel === 1 ? 'MENTOR' : 'COORD'}-
                {(mentora.nombre || '').replace(/[^A-Za-zÁÉÍÓÚÑ]/g, '').toUpperCase().slice(0, 6)}-{hoy.replace(/-/g, '')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="no-print text-center text-[13px] text-navy/50">
        {t('cert.archivar', {
          carpeta: nivel === 1 ? '05_PRACTICES' : '04_PROGRAMS + 05_PRACTICES',
        })}
      </p>
    </div>
  )
}
