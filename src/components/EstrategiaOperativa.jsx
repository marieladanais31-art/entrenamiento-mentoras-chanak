import { useState } from 'react'
import { useIdioma } from '../i18n/idioma'
import { PROYECTOS_PRIORIDAD, REPRESENTANTES_PAISES } from '../data/roles'

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
      id: 'estados', titulo: 'ESA y fondos educativos estatales (EE. UU.)', icono: '🏛️',
      pasos: ['Abrir la matriz y comprobar estado, servicio, territorio y última verificación.', 'Revisar carta de aprobación, portal y guía oficial del programa.', 'Confirmar si el perfil, catálogo, banco y cobro están activados.', 'Preparar materiales que nombren únicamente los servicios autorizados.', 'Buscar familias mediante canales permitidos y registrar consentimiento.', 'Recoger documentación en el SIS sin pedir contraseñas ni controlar fondos familiares.', 'Coordinar prestación, asistencia, evidencia y fechas reales.', 'Administración emite o registra factura según el programa.', 'Conciliar pedido, servicio, factura, pago y expediente.', 'Registrar incidencias, renovación y cambios de reglas.'],
      evidencia: 'Expediente por estado, guía vigente, registro de familia, evidencia del servicio y conciliación.',
    },
    {
      id: 'grants', titulo: 'Empresas, fundaciones, ONG y convocatorias públicas', icono: '🧩',
      pasos: ['Definir necesidad, beneficiarios, territorio y resultado medible.', 'Buscar oportunidades en Candid, fundaciones, empresas y portales públicos.', 'Verificar elegibilidad, plazo, importe, gastos admitidos y obligaciones.', 'Preparar una ficha de decisión: encaja, no encaja o requiere consulta.', 'Diseñar objetivos, actividades, calendario, indicadores y presupuesto.', 'Definir aportes de Chanak y del posible partner.', 'Reunir documentos institucionales y obtener revisión de dirección.', 'Presentar y registrar acuse, plazo de respuesta y próximo seguimiento.', 'Si se aprueba, abrir expediente de ejecución, gastos, evidencias e informes.'],
      evidencia: 'Ficha de oportunidad, proyecto, presupuesto, anexos, acuse e informe.',
    },
    {
      id: 'educafe', titulo: 'Programas EducaFe (España) · INACTIVOS hasta febrero 2027', icono: '⏸️',
      pasos: ['Situación: la Asociación EducaFe está inactiva hasta febrero de 2027. Sus programas se conocen como contexto, no se operan.', 'Programas que existían: cuota de Socio Colaborador, Iglesia Colaboradora (modelo de alquiler compartido), donaciones locales y proyectos sociales como Life Skills comunitario presentados a convocatorias españolas.', 'No ofrecer, no firmar, no cobrar ni abrir Hubs en nombre de EducaFe hasta que dirección comunique la reactivación.', 'Si una familia, iglesia o entidad pregunta: registrar contacto, interés y fecha, y derivar a dirección. Ofrecer solo lo vigente de Chanak (Off-Campus, Dual Diploma, inglés y Life Skills).', 'En convocatorias de España o la UE, dirección decide qué entidad presenta y con qué lenguaje (impacto social y competencias); no mezclar la narrativa de Chanak (EE. UU.) con la de EducaFe.', 'Mantener la lista de interesados para la reactivación de febrero de 2027.'],
      evidencia: 'Registro de interesados derivados a dirección, sin compromisos firmados ni cobros.',
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
    { id: 'estados', titulo: 'ESA and U.S. state education funding', icono: '🏛️', pasos: ['Check status, service, territory and verification date in the matrix.', 'Read the approval letter, portal and official guide.', 'Confirm profile, catalog, banking and billing activation.', 'Promote only authorized services.', 'Find families through permitted channels and record consent.', 'Collect documents in SIS without requesting family credentials.', 'Coordinate delivery, attendance, evidence and actual dates.', 'Administration submits the program-specific invoice.', 'Reconcile order, service, invoice, payment and record.', 'Track incidents, renewals and rule changes.'], evidencia: 'State file, current guide, family record, service evidence and reconciliation.' },
    { id: 'grants', titulo: 'Companies, foundations, NGOs and public grants', icono: '🧩', pasos: ['Define the need, beneficiaries, territory and measurable result.', 'Search Candid, foundations, companies and public portals.', 'Verify eligibility, deadline, amount, eligible costs and duties.', 'Prepare a go, no-go or review decision sheet.', 'Build objectives, activities, schedule, indicators and budget.', 'Define Chanak and partner contributions.', 'Collect institutional documents and obtain administration review.', 'Submit and record receipt, decision date and follow-up.', 'If funded, open implementation, expense, evidence and reporting records.'], evidencia: 'Opportunity sheet, proposal, budget, attachments, receipt and report.' },
    { id: 'educafe', titulo: 'EducaFe programs (Spain) · INACTIVE until February 2027', icono: '⏸️', pasos: ['Status: Asociación EducaFe is inactive until February 2027. Its programs are context only, not operated.', 'Former programs: Collaborating Member fee, Collaborating Church (shared-rent model), local donations and social projects such as community Life Skills submitted to Spanish calls.', 'Do not offer, sign, charge or open Hubs on behalf of EducaFe until administration announces reactivation.', 'If a family, church or organization asks: record the contact, interest and date, and refer it to administration. Offer only current Chanak services (Off-Campus, Dual Diploma, English and Life Skills).', 'For Spanish or EU calls, administration decides which entity applies and in which language; do not mix the Chanak (U.S.) and EducaFe narratives.', 'Keep the list of interested parties for the February 2027 reactivation.'], evidencia: 'Log of interested parties referred to administration, with no signed commitments or charges.' },
    { id: 'iglesias', titulo: 'Churches and Christian communities', icono: '⛪', pasos: ['Identify a specific youth, family or education need.', 'Prepare a short introduction and request a leadership meeting.', 'Listen for space, volunteers, population and goals.', 'Choose outreach, scholarships, sponsorship, activity space or a project.', 'Define contributions, owners, safeguarding, budget and duration.', 'Send a written proposal and escalate agreements to Chanak Central.', 'Run a pilot with attendance, evidence and evaluation.', 'Share results and decide continuation through a written agreement.'], evidencia: 'Minutes, proposal, authorized agreement, pilot record and report.' },
  ],
}

export default function EstrategiaOperativa({ onVolver, onVerMatriz, onVerComparativa }) {
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
      <div className="grid gap-3 sm:grid-cols-2">
        {onVerMatriz && <button onClick={onVerMatriz} className="min-h-12 w-full rounded-xl bg-teal px-4 py-3 font-bold text-white shadow-sm hover:opacity-95">{es ? 'Abrir matriz de fondos estatales →' : 'Open state funding matrix →'}</button>}
        {onVerComparativa && <button onClick={onVerComparativa} className="min-h-12 w-full rounded-xl bg-navy px-4 py-3 font-bold text-white shadow-sm hover:opacity-95 flex items-center justify-center gap-2"><span>⚖️</span> {es ? 'Evaluador de Costos y Viabilidad →' : 'Cost Evaluator & Feasibility →'}</button>}
      </div>
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

      {/* Proyectos en Prioridad */}
      <section className="rounded-3xl border-2 border-gold bg-gold/10 p-6 space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-navy">Cartera Operativa 2026–2027</span>
          <h3 className="mt-1 text-xl font-bold text-navy">🚀 Proyectos en Prioridad · Área Estratégica</h3>
          <p className="text-xs text-navy/75 leading-relaxed">
            Iniciativas que requieren coordinación, interlocución institucional, gestión de fondos o montaje de sedes.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROYECTOS_PRIORIDAD.map((pr) => (
            <div key={pr.id} className="rounded-2xl bg-white p-4 shadow-sm border border-gold/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal/10 px-2 py-0.5 rounded">
                  {pr.area}
                </span>
                <h4 className="mt-2 text-sm font-bold text-navy">{pr.titulo}</h4>
                <p className="mt-1 text-xs text-navy/70 leading-relaxed">{pr.descripcion}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-navy/10 text-[11px] text-navy/80">
                <span className="font-bold text-navy">Requisitos clave:</span>
                <ul className="mt-1 list-disc pl-4 space-y-0.5 text-navy/65">
                  {pr.requisitos.map((req, i) => <li key={i}>{req}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Representantes por Países */}
      <section className="rounded-3xl border-2 border-teal bg-white p-6 shadow-sm space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal">Estructura Internacional</span>
          <h3 className="mt-1 text-xl font-bold text-navy">🌍 Estructura por Países y Territorios</h3>
          <p className="text-xs text-navy/70 leading-relaxed">
            EducaFe (España) inactivo hasta febrero 2027 · México en lanzamiento · Panamá en proceso · Estados Unidos (todos los estados con cobertura y fondos).
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {REPRESENTANTES_PAISES.map((p) => {
            const badgeClase =
              p.badgeTono === 'coral'
                ? 'bg-coral/15 text-coral border-coral/30'
                : p.badgeTono === 'gold'
                ? 'bg-gold/25 text-navy border-gold/40'
                : 'bg-teal/15 text-teal border-teal/30'
            return (
              <div key={p.codigo} className="rounded-2xl border border-navy/10 bg-cream/40 p-4 space-y-2">
                <div className="flex items-center justify-between border-b border-navy/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{p.bandera}</span>
                    <span className="font-bold text-navy text-sm">{p.pais}</span>
                  </div>
                  {p.estado && (
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${badgeClase}`}>
                      {p.estado}
                    </span>
                  )}
                </div>
                <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                  {p.territorios.map((t, idx) => (
                    <div key={idx} className={`rounded-xl p-3 shadow-xs border ${t.inactivo ? 'bg-coral/5 border-coral/30' : 'bg-white border-navy/5'}`}>
                      <div className="flex items-start justify-between gap-1 text-xs">
                        <span className={`font-bold shrink-0 ${t.inactivo ? 'text-coral' : 'text-teal'}`}>{t.territorio}</span>
                        <span className={`text-[11px] font-medium text-right ${t.inactivo ? 'text-coral font-semibold' : 'text-navy/60'}`}>{t.funcion}</span>
                      </div>
                      <div className="mt-1 text-xs font-semibold text-navy">
                        👤 {t.representantes.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
