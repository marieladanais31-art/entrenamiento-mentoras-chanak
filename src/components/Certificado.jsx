import { resumenMentora, formatearFecha } from '../lib/calculos'
import { CURSO } from '../data/curso'

// Certificado de participación imprimible (A4 horizontal) con logo Chanak
// y espacio de firmas. nivel: 1 → 180h Mentor · 2 → 300h Coordinator
export default function Certificado({ mentora, progreso, nivel, onVolver }) {
  const r = resumenMentora(progreso)
  const cert = CURSO.certificaciones[nivel - 1]
  const hoy = new Date().toISOString().slice(0, 10)

  return (
    <div className="space-y-4">
      <div className="no-print flex flex-wrap items-center justify-between gap-2">
        <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">
          ← Volver al panel
        </button>
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-cream hover:bg-navy/90"
        >
          🖨 Imprimir / Guardar PDF
        </button>
      </div>

      <p className="no-print rounded-xl bg-gold/10 px-4 py-3 text-xs leading-relaxed text-navy/70">
        <b>Consejo de impresión:</b> en el diálogo de impresión elige orientación{' '}
        <b>horizontal</b> y activa «Gráficos de fondo» para que se impriman los colores.
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

            <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.3em] text-navy/55">
              Chanak International Academy
            </div>
            <div className="text-[9px] tracking-wide text-navy/40">
              Registered Private School · Florida Department of Education #134620
            </div>

            <h1 className="mt-6 text-xl font-bold uppercase tracking-[0.15em] text-navy sm:text-2xl">
              Certificado de Participación
            </h1>
            <div className="mx-auto mt-2 h-px w-40 bg-gold" />

            <p className="mt-6 text-xs uppercase tracking-widest text-navy/50">
              Se certifica que
            </p>
            <p className="mt-2 text-2xl font-bold text-navy sm:text-3xl">{mentora.nombre}</p>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-navy/75">
              ha completado satisfactoriamente el programa de formación
              <br />
              <b className="text-navy">{CURSO.titulo}</b>
              <br />
              con una carga total de <b>{cert.horas} horas</b> de formación teórica, práctica
              supervisada y evaluación por dominio.
            </p>

            <div className="mx-auto mt-6 max-w-md rounded-xl border-2 border-gold/40 bg-gold/8 px-5 py-3">
              <div className="text-[10px] font-bold uppercase tracking-widest text-navy/50">
                Acreditación otorgada
              </div>
              <div className="mt-0.5 text-base font-bold text-gold">{cert.nombre}</div>
              <div className="text-[10px] text-navy/60">{cert.detalle}</div>
            </div>

            <p className="mx-auto mt-5 max-w-lg text-[10px] leading-relaxed text-navy/50">
              Formación alineada con los estándares MSA-CESS (Middle States Association ·
              Commissions on Elementary and Secondary Schools), indicador T5a — formación del
              personal. Programa impartido bajo el modelo académico 60/20/20 y la metodología de
              Mastery Learning de Chanak International Academy.
            </p>

            {/* Firmas */}
            <div className="mt-10 grid grid-cols-2 gap-10 sm:gap-16">
              <div>
                <div className="h-10" />
                <div className="border-t border-navy/40 pt-1.5 text-[10px] font-semibold text-navy">
                  Head of LSP
                </div>
                <div className="text-[9px] text-navy/50">Chanak International Academy</div>
              </div>
              <div>
                <div className="h-10" />
                <div className="border-t border-navy/40 pt-1.5 text-[10px] font-semibold text-navy">
                  Board Representative
                </div>
                <div className="text-[9px] text-navy/50">Visto bueno del Board</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-end justify-between gap-3 border-t border-navy/10 pt-3 text-[9px] text-navy/45">
              <span>
                Expedido el {formatearFecha(hoy)} · Horas registradas: {r.horas}h
              </span>
              <span>
                Ref. CHK-{nivel === 1 ? 'MENTOR' : 'COORD'}-
                {(mentora.nombre || '').replace(/[^A-Za-zÁÉÍÓÚÑ]/g, '').toUpperCase().slice(0, 6)}-{hoy.replace(/-/g, '')}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p className="no-print text-center text-[11px] text-navy/50">
        Archivar en la carpeta {nivel === 1 ? '05_PRACTICES' : '04_PROGRAMS y 05_PRACTICES'} como
        evidencia MSA.
      </p>
    </div>
  )
}
