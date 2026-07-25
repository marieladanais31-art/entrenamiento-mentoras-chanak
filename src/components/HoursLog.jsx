import { registroCronologico, resumenMentora, formatearFecha } from '../lib/calculos'
import { NIVEL_1_HORAS, NIVEL_2_HORAS } from '../data/curriculum'

export default function HoursLog({ mentora, progreso, onVolver }) {
  const registro = registroCronologico(progreso)
  const r = resumenMentora(progreso)

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between">
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

      <div className="print-area rounded-2xl bg-white p-5 shadow-sm">
        {/* Encabezado para la versión impresa */}
        <div className="border-b border-navy/10 pb-4">
          <h2 className="text-lg font-bold text-navy">Registro de Horas de Formación</h2>
          <p className="text-sm text-navy/70">
            {mentora.nombre} · Chanak International Academy
          </p>
          <p className="mt-1 text-xs text-navy/50">
            Pathway de Formación de Mentoras 180h/300h · Evidencia indicador MSA T5a · Generado el{' '}
            {formatearFecha(new Date().toISOString().slice(0, 10))}
          </p>
        </div>

        {/* Totales */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Total valor={`${r.horas}h`} etiqueta="Acumuladas" destacado />
          <Total
            valor={`${Math.max(0, NIVEL_1_HORAS - r.horas)}h`}
            etiqueta="Para Mentora (180h)"
          />
          <Total
            valor={`${Math.max(0, NIVEL_2_HORAS - r.horas)}h`}
            etiqueta="Para Coordinadora (300h)"
          />
        </div>

        {/* Tabla cronológica */}
        {registro.length === 0 ? (
          <p className="mt-6 rounded-xl bg-cream px-4 py-6 text-center text-sm text-navy/55">
            Aún no hay módulos iniciados o completados.
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b-2 border-navy/15 text-[10px] uppercase tracking-wide text-navy/50">
                  <th className="py-2 pr-2">Fecha</th>
                  <th className="py-2 pr-2">Módulo</th>
                  <th className="py-2 pr-2 text-right">Horas</th>
                  <th className="py-2">Estado</th>
                </tr>
              </thead>
              <tbody>
                {registro.map((m) => (
                  <tr key={m.id} className="border-b border-navy/5 align-top">
                    <td className="whitespace-nowrap py-2.5 pr-2 font-medium text-navy/70">
                      {formatearFecha(m.fecha)}
                    </td>
                    <td className="py-2.5 pr-2">
                      <span className="font-semibold text-navy">{m.id}</span>{' '}
                      <span className="text-navy/70">{m.titulo}</span>
                    </td>
                    <td className="py-2.5 pr-2 text-right font-semibold text-navy">
                      {m.estado === 'completado' ? m.horas : '—'}
                    </td>
                    <td className="whitespace-nowrap py-2.5">
                      {m.estado === 'completado' ? '✅ Completado' : '🔵 En curso'}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-navy/15 font-bold text-navy">
                  <td className="py-2.5" colSpan={2}>
                    TOTAL ACUMULADO
                  </td>
                  <td className="py-2.5 pr-2 text-right">{r.horas}h</td>
                  <td className="py-2.5 text-[10px] font-medium text-navy/55">
                    Meta: {r.metaHoras}h
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}

        {/* Pie para la versión impresa */}
        <div className="mt-6 border-t border-navy/10 pt-4 text-[10px] leading-relaxed text-navy/45">
          Documento de evidencia de formación del personal (MSA-CESS, indicador T5a).
          <br />
          Certificación emitida por la Head of LSP con visto bueno del Board · Archivo:
          05_PRACTICES.
          <div className="mt-6 grid grid-cols-2 gap-8">
            <div className="border-t border-navy/30 pt-1">Firma de la mentora</div>
            <div className="border-t border-navy/30 pt-1">Firma Head of LSP</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Total({ valor, etiqueta, destacado }) {
  return (
    <div className={`rounded-xl px-2 py-3 ${destacado ? 'bg-teal text-white' : 'bg-cream'}`}>
      <div className={`text-lg font-bold ${destacado ? '' : 'text-navy'}`}>{valor}</div>
      <div className={`text-[10px] font-medium ${destacado ? 'text-white/80' : 'text-navy/55'}`}>
        {etiqueta}
      </div>
    </div>
  )
}
