// ============================================================
// STATE PROGRAM SERVICE MATRIX · Matriz de servicios por programa estatal (EE. UU.)
//
// Fuente interna para formación. Regla de comunicación pública: solo se dice «aprobado» lo que figura
// como aprobado (approved: true). Todo lo demás se dice «en proceso», «en revisión» o «plan».
// «Operativo»: para los programas en trámite, el equipo prepara documentación, flujos y materiales
// internos para activarlos en cuanto cambie el estado; esto NO se comunica a familias como aprobado.
// Estado base: sin fechas de alta confirmadas. «Precio» = por confirmar hasta que lo fije la dirección.
// Los datos se actualizan cuando Chanak Administration confirma un cambio (columna lastVerified).
// ============================================================

export const ESTADOS_PROGRAMA = {
  aprobado: { etiqueta: 'Aprobado', tono: 'ok' },
  en_proceso: { etiqueta: 'En proceso', tono: 'pend' },
  en_revision: { etiqueta: 'En revisión', tono: 'pend' },
  plan: { etiqueta: 'Plan', tono: 'plan' },
  no_aprobado: { etiqueta: 'No aprobado', tono: 'no' },
}

const POR_CONFIRMAR = 'Por confirmar'

export const MATRIZ_PROGRAMAS = [
  // ─── Florida ───
  {
    id: 'FL-EMA-MATRICULA', state: 'Florida', program: 'Step Up For Students · EMA (Home Education Instructional Program)',
    service: 'Matrícula (Enrollment)', status: 'aprobado', approved: true,
    marketplace: 'Servicio publicado en el EMA Marketplace', price: POR_CONFIRMAR,
    eligibility: 'Familias con beca gestionada por Step Up For Students (FES-UA / PEP), según elegibilidad del programa',
    documentation: '07_US_PROGRAMS_COMPLIANCE/Florida', lastVerified: '2026-10-02',
    source: 'Portal EMA de Step Up For Students (stepupforstudents.org)',
    operativo: 'Servicio aprobado. Es el único servicio aprobado en Florida EMA.',
  },
  ...['Life Skills', 'Diagnóstico académico', 'Dual Diploma', 'Otros servicios'].map((s) => ({
    id: `FL-EMA-${s.toUpperCase().replace(/[^A-Z]/g, '')}`, state: 'Florida', program: 'Step Up For Students · EMA (Home Education Instructional Program)',
    service: s, status: 'no_aprobado', approved: false,
    marketplace: 'No publicado', price: POR_CONFIRMAR,
    eligibility: 'No aplicable hasta que el servicio sea aprobado por separado',
    documentation: '07_US_PROGRAMS_COMPLIANCE/Florida', lastVerified: '2026-10-02',
    source: 'Portal EMA de Step Up For Students (stepupforstudents.org)',
    operativo: 'No se ofrece como servicio EMA. Solo Matrícula está aprobada.',
  })),
  // ─── Alabama ───
  {
    id: 'AL-CHOOSE-ESP', state: 'Alabama', program: 'CHOOSE Act',
    service: 'Education Service Provider (ESP)', status: 'aprobado', approved: true,
    marketplace: 'Alta en ClassWallet en curso (bank linking y activación de perfil)', price: POR_CONFIRMAR,
    eligibility: 'Familias participantes del CHOOSE Act, según elegibilidad del programa',
    documentation: '07_US_PROGRAMS_COMPLIANCE/Alabama', lastVerified: '2026-10-02',
    source: 'Programa CHOOSE Act de Alabama y ClassWallet (classwallet.com)',
    operativo: 'Aprobado como ESP. No se dice «Approved Virtual School» hasta que ClassWallet/ALDOR confirmen esa clasificación. Las pruebas estandarizadas son un requisito específico de Alabama.',
  },
  // ─── En proceso ───
  {
    id: 'TX-TEFA', state: 'Texas', program: 'TEFA (Texas Education Freedom Accounts)',
    service: 'Vendor / Educational Service Provider', status: 'en_proceso', approved: false,
    marketplace: 'Solicitud enviada; perfil de proveedor en preparación (Odyssey)', price: POR_CONFIRMAR,
    eligibility: 'Por confirmar con el programa',
    documentation: 'Registro como entidad extranjera ante la Secretaría de Estado de Texas; situación ante el Contralor; perfil en Odyssey',
    lastVerified: '2026-10-05', source: 'Web oficial del programa y Contralor de Texas (comptroller.texas.gov)',
    operativo: 'Documentación y flujo de matrícula preparados para activarse al aprobarse. No decir «proveedor de Texas» mientras no esté aprobado.',
  },
  {
    id: 'AZ-ESA', state: 'Arizona', program: 'ESA (Empowerment Scholarship Account)',
    service: 'Registro como proveedor (ADE Service Provider Registration)', status: 'en_proceso', approved: false,
    marketplace: 'Tras el registro, cobro vía ClassWallet', price: POR_CONFIRMAR,
    eligibility: 'Por confirmar con el programa', documentation: 'Registro de proveedor ante el Departamento de Educación de Arizona',
    lastVerified: '2026-10-05', source: 'Web oficial del programa (Arizona Department of Education)',
    operativo: 'Preparar documentación y materiales internos. No comunicar como aprobado.',
  },
  {
    id: 'AR-EFA', state: 'Arkansas', program: 'EFA (Education Freedom Account)',
    service: 'Part-Time Student-Facing Provider (categoría posible)', status: 'en_proceso', approved: false,
    marketplace: 'Por confirmar; el programa trabaja con ClassWallet', price: POR_CONFIRMAR,
    eligibility: 'Por confirmar con el programa', documentation: 'Solicitud de nuevos proveedores / vendors',
    lastVerified: '2026-10-05', source: 'Web oficial del programa',
    operativo: 'La categoría concreta la confirma Chanak Administration. No comunicar como aprobado.',
  },
  {
    id: 'UT-FITSALL', state: 'Utah', program: 'Utah Fits All',
    service: 'Proveedor en Odyssey (ofertas separadas: Life Skills, Academic English, Tutoring, Diagnostics)', status: 'en_proceso', approved: false,
    marketplace: 'Cada oferta se revisa por separado', price: POR_CONFIRMAR,
    eligibility: 'Por confirmar con el programa', documentation: 'Solicitud como proveedor con EIN federal',
    lastVerified: '2026-10-05', source: 'Web oficial del programa (Odyssey)',
    operativo: 'Preparar las ofertas por separado. No comunicar como aprobado.',
  },
  {
    id: 'WV-HOPE', state: 'West Virginia', program: 'Hope Scholarship',
    service: 'Education Service Provider (New Provider Request Form)', status: 'en_proceso', approved: false,
    marketplace: 'Por confirmar', price: POR_CONFIRMAR,
    eligibility: 'Por confirmar con el programa', documentation: 'Manual de proveedores del programa; New Provider Request Form',
    lastVerified: '2026-10-05', source: 'Web oficial del programa',
    operativo: 'Preparar documentación. No comunicar como aprobado.',
  },
  // ─── Vinculaciones (no son programas estatales de fondos) ───
  {
    id: 'US-NCAA', state: 'Nacional (EE. UU.)', program: 'NCAA Eligibility Center',
    service: 'Revisión de la escuela (core courses)', status: 'en_revision', approved: false,
    marketplace: 'No aplica', price: 'No aplica',
    eligibility: 'Estudiantes-deportistas que aspiran al deporte universitario de EE. UU.; no garantiza elegibilidad ni beca',
    documentation: 'Documentación enviada vía High School Portal', lastVerified: '2026-10-04',
    source: 'NCAA Eligibility Center (eligibilitycenter.org)',
    operativo: 'En revisión. No afirmar que un curso cuenta como core course mientras no haya decisión.',
  },
  {
    id: 'US-NCES', state: 'Nacional (EE. UU.)', program: 'NCES · registro de escuelas privadas',
    service: 'Registro / número de escuela', status: 'en_proceso', approved: false,
    marketplace: 'No aplica', price: 'No aplica',
    eligibility: 'No aplica; figurar en un registro no equivale a acreditación',
    documentation: 'Encuesta PSS según las instrucciones oficiales', lastVerified: '2026-10-05',
    source: 'NCES (nces.ed.gov)',
    operativo: 'Plazo: la dirección estima 3–4 semanas; es información institucional. La fuente oficial indica que la inclusión en el directorio puede tardar más, por lo que no se prometen fechas a las familias.',
  },
  {
    id: 'US-DBU', state: 'Texas', program: 'Dallas Baptist University (DBU)',
    service: 'Solicitud de convenio universitario', status: 'en_proceso', approved: false,
    marketplace: 'No aplica', price: 'No aplica',
    eligibility: 'No definida: no hay condiciones acordadas', documentation: 'Solicitud enviada; reuniones en curso',
    lastVerified: '2026-10-05', source: 'Comunicación de la dirección de Chanak',
    operativo: 'No decir qué ventajas, becas o admisiones incluirá. Convenios con otras universidades: plan posterior a la decisión de MSA-CESS.',
  },
]
