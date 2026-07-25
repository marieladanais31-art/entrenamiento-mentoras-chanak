import { registroCronologico, resumenMentora, formatearFecha } from '../lib/calculos'
import { NIVEL_1_HORAS, NIVEL_2_HORAS } from '../data/curriculum'
import { useIdioma } from '../i18n/idioma'

export default function HoursLog({ mentora, progreso, onVolver }) {
  const { t } = useIdioma()
  const registro = registroCronologico(progreso)
  const r = resumenMentora(progreso)

  return (
    <div className="space-y-4">
      <div className="no-print flex items-center justify-between">
        <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">
          {t('bloque.volverPanel')}
        </button>
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-cream hover:bg-navy/90"
        >
          {t('horas.imprimir')}
        </button>
      </div>

      <div className="print-area rounded-2xl bg-white p-5 shadow-sm">
        {/* Encabezado para la versión impresa */}
        <div className="border-b border-navy/10 pb-4">
          <h2 className="text-lg font-bold text-navy">{t('horas.titulo')}</h2>
          <p className="text-sm text-navy/70">
            {mentora.nombre} · Chanak International Academy
          </p>
          <p className="mt-1 text-xs text-navy/50">
            {t('horas.subtitulo', {
              fecha: formatearFecha(new Date().toISOString().slice(0, 10)),
            })}
          </p>
        </div>

        {/* Totales */}
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Total valor={`${r.horas}h`} etiqueta={t('horas.acumuladas')} destacado />
          <Total
            valor={`${Math.max(0, NIVEL_1_HORAS - r.horas)}h`}
            etiqueta={t('horas.paraMentora')}
          />
          <Total
            valor={`${Math.max(0, NIVEL_2_HORAS - r.horas)}h`}
            etiqueta={t('horas.paraCoordinadora')}
          />
        </div>

        {/* Tabla cronológica */}
        {registro.length === 0 ? (
          <p className="mt-6 rounded-xl bg-cream px-4 py-6 text-center text-sm text-navy/55">
            {t('horas.vacio')}
          </p>
        ) : (
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b-2 border-navy/15 text-[12px] uppercase tracking-wide text-navy/50">
                  <th className="py-2 pr-2">{t('horas.colFecha')}</th>
                  <th className="py-2 pr-2">{t('horas.colModulo')}</th>
                  <th className="py-2 pr-2 text-right">{t('horas.colHoras')}</th>
                  <th className="py-2">{t('horas.colEstado')}</th>
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
                      {m.estado === 'completado' ? `✅ ${t('estado.completado')}` : `🔵 ${t('estado.en_curso')}`}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-navy/15 font-bold text-navy">
                  <td className="py-2.5" colSpan={2}>
                    {t('horas.total')}
                  </td>
                  <td className="py-2.5 pr-2 text-right">{r.horas}h</td>
                  <td className="py-2.5 text-[12px] font-medium text-navy/55">
                    {t('horas.meta', { horas: r.metaHoras })}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}

        {/* Pie para la versión impresa */}
        <div className="mt-6 border-t border-navy/10 pt-4 text-[12px] leading-relaxed text-navy/45">
          {t('horas.pieEvidencia')}
          <br />
          {t('horas.pieCert')}
          <div className="mt-6 grid grid-cols-2 gap-8">
            <div className="border-t border-navy/30 pt-1">{t('horas.firmaMentora')}</div>
            <div className="border-t border-navy/30 pt-1">{t('horas.firmaHead')}</div>
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
      <div className={`text-[12px] font-medium ${destacado ? 'text-white/80' : 'text-navy/55'}`}>
        {etiqueta}
      </div>
    </div>
  )
}
