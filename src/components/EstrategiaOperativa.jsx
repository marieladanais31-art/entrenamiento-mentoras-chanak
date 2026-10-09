import { useState } from 'react'
import { useIdioma } from '../i18n/idioma'

const RUTAS = {
  es: [
    {
      id: 'mercado', titulo: 'Abrir mercado: país, estado o programa', icono: '🌍',
      pasos: ['Recibir de dirección el territorio, programa y objetivo autorizado.', 'Revisar la oferta, precios y mensajes vigentes para ese territorio.', 'Crear un mapa de familias, grupos homeschool, colegios, iglesias y organizaciones.', 'Investigar contactos en Google, Maps, Facebook y directorios; registrar fuente y datos públicos.', 'Preparar publicación, mensaje, landing y respuesta frecuente con materiales autorizados.', 'Solicitar permiso al administrador antes de publicar en grupos de Facebook.', 'Registrar cada consulta, responsable, siguiente acción y fecha de seguimiento.', 'Realizar reunión, enviar propuesta aprobada y escalar precios, contratos o promesas.', 'Medir contactos, reuniones, propuestas, matrículas y continuidad.'],
      evidencia: 'Mapa de actores, registro de contactos, materiales aprobados y reporte de resultados.',
    },
    {
      id: 'ads', titulo: 'Google Ads y difusión digital', icono: '📣',
      pasos: ['Definir una conversión concreta: consulta, diagnóstico o solicitud de matrícula.', 'Seleccionar la web correcta: escuela para servicios escolares; nonprofit para campañas y proyectos de la nonprofit.', 'Definir territorio, público, palabras clave y exclusiones.', 'Comprobar que la página explica el servicio y permite medir la acción.', 'Preparar anuncios sin afirmar aprobaciones, precios o resultados no documentados.', 'Revisar presupuesto, cuenta, etiqueta y medición con la persona autorizada.', 'Publicar únicamente después de aprobación de dirección.', 'Revisar términos de búsqueda, conversiones y consultas; proponer ajustes por escrito.'],
      evidencia: 'Brief de campaña, anuncios revisados, medición y reporte.',
    },
    {
      id: 'estados', titulo: 'Fondos educativos estatales', icono: '🏛️',
      pasos: ['Abrir la matriz y comprobar estado, servicio, territorio y última verificación.', 'Revisar carta de aprobación, portal y guía oficial del programa.', 'Confirmar si el perfil, catálogo, banco y cobro están activados.', 'Preparar materiales que nombren únicamente los servicios autorizados.', 'Buscar familias mediante canales permitidos y registrar consentimiento.', 'Recoger documentación en el SIS sin pedir contraseñas ni controlar fondos familiares.', 'Coordinar prestación, asistencia, evidencia y fechas reales.', 'Administración emite o registra factura según el programa.', 'Conciliar pedido, servicio, factura, pago y expediente.', 'Registrar incidencias, renovación y cambios de reglas.'],
      evidencia: 'Expediente por estado, guía vigente, registro de familia, evidencia del servicio y conciliación.',
    },
    {
      id: 'grants', titulo: 'Empresas, fundaciones, ONG y convocatorias públicas', icono: '🧩',
      pasos: ['Definir necesidad, beneficiarios, territorio y resultado medible.', 'Buscar oportunidades en Candid, fundaciones, empresas y portales públicos.', 'Verificar elegibilidad, plazo, importe, gastos admitidos y obligaciones.', 'Preparar una ficha de decisión: encaja, no encaja o requiere consulta.', 'Diseñar objetivos, actividades, calendario, indicadores y presupuesto.', 'Definir aportes de Chanak y del posible partner.', 'Reunir documentos institucionales y obtener revisión de dirección.', 'Presentar y registrar acuse, plazo de respuesta y próximo seguimiento.', 'Si se aprueba, abrir expediente de ejecución, gastos, evidencias e informes.'],
      evidencia: 'Ficha de oportunidad, proyecto, presupuesto, anexos, acuse e informe.',
    },
    {
      id: 'iglesias', titulo: 'Iglesias y comunidad cristiana', icono: '⛪',
      pasos: ['Identificar una necesidad concreta de jóvenes, familias o educación.', 'Preparar una presentación breve y solicitar reunión con el liderazgo.', 'Escuchar capacidades, espacio, voluntariado, población y objetivos de la iglesia.', 'Elegir una colaboración posible: difusión, becas, patrocinio, sede de actividad o proyecto.', 'Definir aportes, responsables, protección de menores, presupuesto y duración.', 'Enviar propuesta escrita y escalar cualquier convenio a Chanak Central.', 'Ejecutar un piloto con asistencia, evidencias y evaluación.', 'Compartir resultados y decidir continuidad mediante acuerdo escrito.'],
      evidencia: 'Minuta, propuesta, acuerdo autorizado, registro del piloto e informe.',
    },
  ],
  en: [
    { id: 'mercado', titulo: 'Open a country, state or program market', icono: '🌍', pasos: ['Receive the authorized territory, program and objective from administration.', 'Review the current offer, prices and approved messages.', 'Map families, homeschool groups, schools, churches and organizations.', 'Research public contacts through Google, Maps, Facebook and directories.', 'Prepare approved posts, messages, landing pages and answers.', 'Obtain group administrator permission before posting on Facebook.', 'Record every lead, owner, next action and follow-up date.', 'Hold meetings, send approved proposals and escalate prices or agreements.', 'Measure contacts, meetings, proposals, enrollments and retention.'], evidencia: 'Actor map, contact log, approved materials and results report.' },
    { id: 'ads', titulo: 'Google Ads and digital outreach', icono: '📣', pasos: ['Choose one conversion: inquiry, assessment or enrollment request.', 'Use the correct site for the school or nonprofit activity.', 'Define territory, audience, keywords and exclusions.', 'Confirm the landing page explains and measures the service.', 'Draft ads using documented claims.', 'Review budget, account, tag and measurement with the authorized owner.', 'Publish after administration approval.', 'Review search terms, conversions and inquiries.'], evidencia: 'Campaign brief, reviewed ads, measurement and report.' },
    { id: 'estados', titulo: 'State education funding', icono: '🏛️', pasos: ['Check status, service, territory and verification date in the matrix.', 'Read the approval letter, portal and official guide.', 'Confirm profile, catalog, banking and billing activation.', 'Promote only authorized services.', 'Find families through permitted channels and record consent.', 'Collect documents in SIS without requesting family credentials.', 'Coordinate delivery, attendance, evidence and actual dates.', 'Administration submits the program-specific invoice.', 'Reconcile order, service, invoice, payment and record.', 'Track incidents, renewals and rule changes.'], evidencia: 'State file, current guide, family record, service evidence and reconciliation.' },
    { id: 'grants', titulo: 'Companies, foundations, NGOs and public grants', icono: '🧩', pasos: ['Define the need, beneficiaries, territory and measurable result.', 'Search Candid, foundations, companies and public portals.', 'Verify eligibility, deadline, amount, eligible costs and duties.', 'Prepare a go, no-go or review decision sheet.', 'Build objectives, activities, schedule, indicators and budget.', 'Define Chanak and partner contributions.', 'Collect institutional documents and obtain administration review.', 'Submit and record receipt, decision date and follow-up.', 'If funded, open implementation, expense, evidence and reporting records.'], evidencia: 'Opportunity sheet, proposal, budget, attachments, receipt and report.' },
    { id: 'iglesias', titulo: 'Churches and Christian communities', icono: '⛪', pasos: ['Identify a specific youth, family or education need.', 'Prepare a short introduction and request a leadership meeting.', 'Listen for space, volunteers, population and goals.', 'Choose outreach, scholarships, sponsorship, activity space or a project.', 'Define contributions, owners, safeguarding, budget and duration.', 'Send a written proposal and escalate agreements to Chanak Central.', 'Run a pilot with attendance, evidence and evaluation.', 'Share results and decide continuation through a written agreement.'], evidencia: 'Minutes, proposal, authorized agreement, pilot record and report.' },
  ],
}

export default function EstrategiaOperativa({ onVolver, onVerMatriz }) {
  const { idioma } = useIdioma()
  const rutas = RUTAS[idioma] || RUTAS.es
  const [abierta, setAbierta] = useState(rutas[0].id)
  const es = idioma === 'es'
  return (
    <div className="space-y-4">
      <button onClick={onVolver} className="min-h-11 text-sm font-bold text-teal hover:underline">← {es ? 'Volver' : 'Back'}</button>
      <section className="rounded-3xl bg-navy p-6 text-cream shadow-sm">
        <div className="text-sm font-bold uppercase tracking-wide text-gold">{es ? 'Perfil Estratégico · guía operativa' : 'Strategic profile · operating guide'}</div>
        <h2 className="mt-2 text-2xl font-extrabold">{es ? 'De la oportunidad al resultado documentado' : 'From opportunity to documented result'}</h2>
        <p className="mt-3 text-sm text-cream/75">{es ? 'Usa la ruta que corresponda a tu asignación. Cada paso deja una evidencia y las decisiones institucionales se escalan a Chanak Central.' : 'Use the route assigned to you. Every step produces evidence and institutional decisions are escalated to Chanak Central.'}</p>
      </section>
      {onVerMatriz && <button onClick={onVerMatriz} className="min-h-12 w-full rounded-xl bg-teal px-4 py-3 font-bold text-white">{es ? 'Abrir matriz de fondos estatales' : 'Open state funding matrix'}</button>}
      <div className="space-y-3">
        {rutas.map((ruta) => (
          <section key={ruta.id} className="overflow-hidden rounded-2xl bg-white shadow-sm">
            <button onClick={() => setAbierta(abierta === ruta.id ? null : ruta.id)} className="flex min-h-14 w-full items-center gap-3 px-5 py-4 text-left font-bold">
              <span className="text-2xl">{ruta.icono}</span><span className="flex-1">{ruta.titulo}</span><span>{abierta === ruta.id ? '−' : '+'}</span>
            </button>
            {abierta === ruta.id && (
              <div className="border-t border-navy/10 px-5 pb-5 pt-4">
                <ol className="space-y-3">
                  {ruta.pasos.map((paso, i) => <li key={paso} className="flex gap-3 text-sm leading-relaxed"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal/15 font-bold text-teal">{i + 1}</span><span>{paso}</span></li>)}
                </ol>
                <p className="mt-5 rounded-xl bg-gold/15 p-4 text-sm"><b>{es ? 'Evidencia mínima:' : 'Minimum evidence:'}</b> {ruta.evidencia}</p>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}
