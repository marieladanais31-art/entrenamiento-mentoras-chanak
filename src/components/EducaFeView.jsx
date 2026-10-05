import { useIdioma } from '../i18n/idioma'

const HUBS = [
  {
    name: 'Tarragona general',
    lead: 'M. Claudia Garcia',
    status: 'Prioridad grants · Red territorial',
    next: 'Preparar memoria social, mapa de iglesias y evidencias de demanda.',
  },
  {
    name: 'Comunidad Valenciana',
    lead: 'Medalith Rosales',
    status: 'Preparación · Recaudación y familias',
    next: 'Mapear aliados, familias activas, presentaciones a iglesias y requisitos de hub.',
  },
  {
    name: 'Vinaròs · Costa del Azahar',
    lead: 'Dayana Trillo',
    status: 'Comprometido · Presentación pendiente',
    next: 'Coordinar presentación a diaconado y preparar difusión inicial.',
  },
]

export default function EducaFeView({ onVolver }) {
  const { t } = useIdioma()

  return (
    <div className="space-y-6">
      {/* Botón Volver */}
      <div className="no-print flex items-center justify-between">
        <button
          onClick={onVolver}
          className="text-sm font-semibold text-teal hover:underline flex items-center gap-1"
        >
          ← Volver al panel
        </button>
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-800 border border-amber-300">
          Asociación Cristiana EducaFe
        </span>
      </div>

      {/* Cabecera EducaFe */}
      <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-700 via-amber-800 to-amber-950 p-6 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <img
            src="/logo-chanak.png"
            alt="EducaFe"
            className="h-20 w-20 rounded-2xl bg-white p-2 shadow-md shrink-0"
          />
          <div className="text-center sm:text-left">
            <span className="inline-block rounded-full bg-amber-400/20 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-amber-300">
              EducaFe · Formación complementaria
            </span>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              EducaFe / Partner Training
            </h1>
            <p className="mt-1 text-sm text-amber-100/80 leading-relaxed">
              Área separada de la formación oficial de Chanak. La Asociación Cristiana EducaFe es una entidad colaboradora independiente (España); no es un departamento ni un nivel de certificación de Chanak.
            </p>
          </div>
        </div>
      </div>

      {/* Rutas Formatívas y Perfiles */}
      <section className="space-y-3">
        <h3 className="text-base font-bold text-navy flex items-center gap-2">
          <span>🏛️</span> Qué pertenece a cada entidad
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
            <span className="rounded-lg bg-teal/10 px-2.5 py-1 text-xs font-bold text-teal">
              EducaFe · Optional Partner Training
            </span>
            <h4 className="font-bold text-navy text-base">Gobernanza EducaFe y Socias Visionarias</h4>
            <p className="text-xs text-navy/65 leading-relaxed">
              Formación complementaria de la entidad: gobierno asociativo, asambleas, relaciones con iglesias y solicitudes de subvenciones. No forma parte de la ruta Mentor → Coordinator ni otorga certificación Chanak.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-2">
            <span className="rounded-lg bg-amber-500/10 px-2.5 py-1 text-xs font-bold text-amber-700">
              Chanak Training (oficial)
            </span>
            <h4 className="font-bold text-navy text-base">Chanak Certified Mentor (180 h) y Chanak Certified Coordinator (300 h)</h4>
            <p className="text-xs text-navy/65 leading-relaxed">
              Las certificaciones las emite Chanak International Academy según su marco académico. El personal que trabaja en centros vinculados a EducaFe completa la ruta oficial en el panel principal.
            </p>
          </div>
        </div>
      </section>

      {/* Red de Hubs Territorial */}
      <section className="space-y-3">
        <h3 className="text-base font-bold text-navy flex items-center gap-2">
          <span>📍</span> Red territorial de EducaFe
        </h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {HUBS.map((hub, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-navy text-sm">{hub.name}</h4>
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                  {hub.status}
                </span>
              </div>
              <p className="text-xs font-medium text-teal">Coordinación: {hub.lead}</p>
              <p className="text-xs text-navy/60 leading-relaxed bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <b>Próximo paso:</b> {hub.next}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Enlaces de Pago y Donaciones */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-navy flex items-center gap-2">
          <span>💳</span> Enlaces Oficiales de Stripe
        </h3>
        <p className="text-xs text-navy/60 leading-relaxed">
          Los pagos y donaciones se procesan de forma externa y segura a través de Stripe. El portal no almacena tarjetas de crédito ni claves privadas.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href="https://buy.stripe.com/aFa4gA7PbdF180abc84Ni04"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-teal px-4 py-3.5 text-xs font-bold text-white shadow-sm transition hover:bg-teal/90"
          >
            <span>Pago de la formación (gestionado por EducaFe)</span>
            <span>↗</span>
          </a>
          <a
            href="https://donate.stripe.com/eVag1C4dy7U21gI3cc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl bg-amber-600 px-4 py-3.5 text-xs font-bold text-white shadow-sm transition hover:bg-amber-700"
          >
            <span>Hacer Donación General a EducaFe</span>
            <span>↗</span>
          </a>
        </div>
      </section>
    </div>
  )
}
