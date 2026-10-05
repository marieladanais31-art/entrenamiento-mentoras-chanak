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
    id: 'FL-EMA-MATRICULA', condiciones: ["Cuenta de proveedor en EMA (cuenta de negocio; las personas con credencial usan cuentas personales vinculadas) y catálogo de servicios; la revisión de credenciales no garantiza la aprobación de cada servicio (Handbook pp. 13-17).", "Documentos de cuenta de negocio: EIN/SSN/ITIN, datos bancarios y nombre registrado ante el IRS (Provider Checklist).", "La familia puede pedir pago directo solo después de prestado el servicio; no se pide a la familia usuario ni contraseña de su cuenta ni se limita el uso de sus fondos (pp. 15-16).", "Publicidad: describir solo servicios aprobados; confirmar elegibilidad antes de anunciar un servicio nuevo (correo de bienvenida de EMA, 5-oct-2026).", "Los servicios no aprobados (Life Skills, Diagnóstico, Dual Diploma) no se ofrecen como EMA hasta su aprobación por separado."], fuentesOficiales: ["https://go.stepupforstudents.org/hubfs/HANDBOOKS/School%20and%20Provider%20Handbooks/Provider-Handbook.pdf", "https://go.stepupforstudents.org/hubfs/Providers/Provider-Checklist-and-Account-Types.pdf"], noVerificado: ["El Handbook consultado cita el periodo julio 2025–junio 2026: confirmar la edición 2026-27.", "Para la categoría «Home Education Instructional Program» el Handbook indica que no es en línea y que lo presta una empresa, no una persona (p. 10): confirmar con Step Up cómo aplica a Chanak antes de ampliar servicios."], state: 'Florida', program: 'Step Up For Students · EMA (Home Education Instructional Program)',
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
    id: 'AL-CHOOSE-ESP', condiciones: ["Alta como ESP en ClassWallet (vinculación bancaria y activación de perfil en curso).", "Las pruebas estandarizadas son un requisito específico de Alabama."], fuentesOficiales: [], noVerificado: ["Condiciones detalladas de ClassWallet/ALDOR: pendiente de leer los documentos recibidos."], state: 'Alabama', program: 'CHOOSE Act',
    service: 'Education Service Provider (ESP)', status: 'aprobado', approved: true,
    marketplace: 'Alta en ClassWallet en curso (bank linking y activación de perfil)', price: POR_CONFIRMAR,
    eligibility: 'Familias participantes del CHOOSE Act, según elegibilidad del programa',
    documentation: '07_US_PROGRAMS_COMPLIANCE/Alabama', lastVerified: '2026-10-02',
    source: 'Programa CHOOSE Act de Alabama y ClassWallet (classwallet.com)',
    operativo: 'Aprobado como ESP. No se dice «Approved Virtual School» hasta que ClassWallet/ALDOR confirmen esa clasificación. Las pruebas estandarizadas son un requisito específico de Alabama.',
  },
  // ─── En proceso ───
  {
    id: 'TX-TEFA', condiciones: ["Entidad con sede en EE. UU. registrada ante la Secretaría de Estado de Texas (Certificate of Fact, Formation o Filing) y en regla con el Contralor en el impuesto de franquicia, si aplica.", "Proveedores en línea o fuera de Texas: la página oficial indica que pueden solicitar y ser aceptados.", "Tutores y servicios docentes: certificado o credencial específica y verificación de huellas dactilares en 30 días.", "Tras la aprobación: cuenta bancaria vía Stripe y catálogo en Odyssey. Solicitud abierta sin fecha límite en el portal de proveedores."], fuentesOficiales: ["https://educationfreedom.texas.gov/providers-vendors/", "https://support.withodyssey.com/hc/en-us/articles/44035042254875-Who-Can-Become-a-Vendor-and-What-are-the-Requirements"], noVerificado: ["Comunicado del Contralor (nov-2025) menciona acreditación, 2 años de operación y pruebas estandarizadas para escuelas privadas, y que las escuelas virtuales necesitan ubicación en Texas: NO confirmado en fuente primaria completa.", "No verificado si personal en el extranjero puede ofrecer servicios como «tutor» sin certificado docente de Texas."], state: 'Texas', program: 'TEFA (Texas Education Freedom Accounts)',
    service: 'Vendor / Educational Service Provider', status: 'en_proceso', approved: false,
    marketplace: 'Solicitud enviada; perfil de proveedor en preparación (Odyssey)', price: POR_CONFIRMAR,
    eligibility: 'Por confirmar con el programa',
    documentation: 'Registro como entidad extranjera ante la Secretaría de Estado de Texas; situación ante el Contralor; perfil en Odyssey',
    lastVerified: '2026-10-05', source: 'Web oficial del programa y Contralor de Texas (comptroller.texas.gov)',
    operativo: 'Documentación y flujo de matrícula preparados para activarse al aprobarse. No decir «proveedor de Texas» mientras no esté aprobado.',
  },
  {
    id: 'AZ-ESA', condiciones: ["Registro único como proveedor ante ADE (formulario) y alta posterior en ClassWallet, plataforma de pago.", "Tutores individuales: diploma de secundaria o superior; instalaciones o negocios: documentación de acreditación o formulario de atestación firmado.", "Facturas con nombre, estudiante, servicios, fechas y total; licencia profesional si es terapeuta."], fuentesOficiales: ["https://www.azed.gov/esa/esa-support"], noVerificado: ["No verificado en fuente oficial: si se admiten proveedores en línea o de fuera del estado, pruebas, antecedentes y fechas. Confirmar en el formulario de ADE."], state: 'Arizona', program: 'ESA (Empowerment Scholarship Account)',
    service: 'Registro como proveedor (ADE Service Provider Registration)', status: 'en_proceso', approved: false,
    marketplace: 'Tras el registro, cobro vía ClassWallet', price: POR_CONFIRMAR,
    eligibility: 'Por confirmar con el programa', documentation: 'Registro de proveedor ante el Departamento de Educación de Arizona',
    lastVerified: '2026-10-05', source: 'Web oficial del programa (Arizona Department of Education)',
    operativo: 'Preparar documentación y materiales internos. No comunicar como aprobado.',
  },
  {
    id: 'AR-EFA', condiciones: ["Tres categorías: tiempo completo con contacto con estudiantes (microescuelas, pods, escuelas en línea), tiempo parcial con contacto (tutores, terapeutas) y sin contacto.", "Tiempo parcial: huellas y antecedentes a solicitud; tutores con una credencial entre las que lista el programa.", "Pagos vía ClassWallet (Direct Pay, marketplace o reembolso). Pruebas anuales de matemáticas y lectura para estudiantes."], fuentesOficiales: ["https://dese.ade.arkansas.gov/Offices/office-of-school-choice-and-parent-empowerment/education-freedom-accounts/information-for-service-providers"], noVerificado: ["No verificado: requisitos de la categoría de tiempo completo, admisión de proveedores fuera de Arkansas y fecha límite de solicitud. Contacto oficial indicado en la página: ade.efa@ade.arkansas.gov. El manual de familias leído es de 2025-26."], state: 'Arkansas', program: 'EFA (Education Freedom Account)',
    service: 'Part-Time Student-Facing Provider (categoría posible)', status: 'en_proceso', approved: false,
    marketplace: 'Por confirmar; el programa trabaja con ClassWallet', price: POR_CONFIRMAR,
    eligibility: 'Por confirmar con el programa', documentation: 'Solicitud de nuevos proveedores / vendors',
    lastVerified: '2026-10-05', source: 'Web oficial del programa',
    operativo: 'La categoría concreta la confirma Chanak Administration. No comunicar como aprobado.',
  },
  {
    id: 'UT-FITSALL', condiciones: ["Elegibles: negocios con EIN federal, escuelas y proveedores de servicios que presten el servicio directamente; no son elegibles personas sin EIN ni intermediarios.", "Documentos: licencia de negocio o artículos de incorporación y EIN/W-9; licencias profesionales para servicios que las exijan; cumplimiento del Título VI.", "Solicitud en el portal de proveedores de Odyssey: categoría de gasto, datos de la organización, idiomas y edades atendidas."], fuentesOficiales: ["https://support.withodyssey.com/hc/en-us/articles/37494425843611-Who-can-be-a-Utah-Fits-All-Scholarship-provider", "https://support.withodyssey.com/hc/en-us/articles/37894257417499-How-to-Complete-the-Utah-Fits-All-Scholarship-Program-Provider-Application"], noVerificado: ["No verificado: requisitos por categoría (Life Skills, inglés académico, tutoría, diagnósticos), proveedores en línea o fuera de Utah, antecedentes, fechas y mecánica de pago."], state: 'Utah', program: 'Utah Fits All',
    service: 'Proveedor en Odyssey (ofertas separadas: Life Skills, Academic English, Tutoring, Diagnostics)', status: 'en_proceso', approved: false,
    marketplace: 'Cada oferta se revisa por separado', price: POR_CONFIRMAR,
    eligibility: 'Por confirmar con el programa', documentation: 'Solicitud como proveedor con EIN federal',
    lastVerified: '2026-10-05', source: 'Web oficial del programa (Odyssey)',
    operativo: 'Preparar las ofertas por separado. No comunicar como aprobado.',
  },
  {
    id: 'WV-HOPE', condiciones: ["Alta con el New Provider Request Form y luego perfil en EMA (de Step Up for Students en West Virginia); perfil de negocio vinculado al menos a una cuenta individual.", "EIN o SSN coincidente con la declaración de impuestos, datos ACH y aceptación de los términos de ESP con contrato con la Junta.", "Control de antecedentes para todo empleado con contacto con estudiantes. Los programas en línea no públicos pueden ser elegibles según el manual."], fuentesOficiales: ["https://hopescholarshipwv.gov/Home/Service-Providers"], noVerificado: ["El manual leído es del curso 2022-23 (rev. abril 2023) y puede estar desactualizado. No verificado: acreditación para proveedores no escolares, proveedores de fuera del estado y fechas 2026-27. Contacto indicado: help@hopescholarshipwv.com."], state: 'West Virginia', program: 'Hope Scholarship',
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
