// Matriz interna: guías oficiales 2026–2027 y estatus institucional separado.
// No ampliar aprobaciones ni modificar registros académicos o financieros.
export const ESTADOS_PROGRAMA = {
  "aprobado": {
    "etiqueta": "Aprobado",
    "tono": "ok"
  },
  "en_proceso": {
    "etiqueta": "En proceso",
    "tono": "pend"
  },
  "en_revision": {
    "etiqueta": "En revisión",
    "tono": "pend"
  },
  "plan": {
    "etiqueta": "Plan",
    "tono": "plan"
  },
  "no_aprobado": {
    "etiqueta": "No aprobado",
    "tono": "no"
  }
}

export const MATRIZ_PROGRAMAS = [
  {
    "id": "FL-EMA-MATRICULA",
    "captacion": [
      "Usar el nombre exacto del negocio visible en EMA; comprobarlo en la cuenta institucional antes de publicar instrucciones. La familia puede buscar por nombre y filtros en Marketplace → Find Providers.",
      "Comunicar únicamente el servicio de Matrícula que figura aprobado en el expediente institucional. La guía general no acredita nuevos servicios Chanak: Life Skills, diagnóstico y Dual requieren revisión propia.",
      "Promoción en grupos: verificar reglas y permiso del administrador, compartir un recurso útil y responder consultas voluntarias; no extraer listas de miembros ni solicitar documentos de becas en comentarios.",
      "Identificar el canal económico: tarifa familiar directa vigente del territorio; afiliaciones y convenios según su anexo aprobado. No trasladar precios españoles en euros al catálogo estadounidense.",
      "Antes de ofrecer cobro EMA, Administración confirma cuenta, categoría, catálogo y visibilidad. Usar materiales oficiales acordes al programa concreto; no copiar anuncios de escuela privada como si fueran PEP."
    ],
    "facturacion": [
      "Ruta parental de reserva: Marketplace → Find Providers → estudiante → servicio y cantidad → Add to Cart → Reserve Funds. Después la familia contacta al proveedor para programar. Reserva no equivale a pago ni a matrícula automática.",
      "Ruta de proveedor: Billing → Service Orders; después de prestar el servicio, registrar fechas y datos, guardar y revisar Service Invoicing → Invoice. Reporting permite seguir estado y exportar informes.",
      "En pago directo, se factura después de la prestación. Una posible vía de reembolso depende de beca, categoría y reglas vigentes: no garantizarla ni trasladarla a CHOOSE.",
      "El padre opera y confirma su cuenta. No pedir contraseña, códigos ni acceso; no controlar el destino de sus fondos.",
      "Administración concilia pedido, evidencia, factura y cobro real; registra el pago en el sistema autorizado y verifica su visibilidad. No asumir sincronización automática entre EMA, SIS y Portal."
    ],
    "responsableComercial": "Rol Estratégico (captación y seguimiento) · Administración (facturación)",
    "condiciones": [
      "Consultar Non-School Provider Handbook 2026–2027 (actualizado el 23-jul-2026) y requisitos de la categoría concreta. Cuenta escolar y cuenta de proveedor son rutas distintas.",
      "Para la vía Business Account, vincular cuentas personales con credenciales cuando la categoría las exija. No duplicar la cuenta actual de Chanak.",
      "HEIP exige descripción de cursos/actividades, tarifario y acuerdo de participación. El formulario oficial pide adjuntos PDF y firmas correspondientes.",
      "La guía HEIP excluye escuelas privadas, públicas/charter y tutoría privada de tiempo completo de su definición. Confirmar cómo se clasifica el servicio de Chanak; no deducir aprobación de una modalidad por registro FLDOE.",
      "Verificar categoría, nombre comercial y catálogo real antes de ampliar la oferta; documentos públicos no sustituyen aprobación individual."
    ],
    "fuentesOficiales": [
      "https://www.stepupforstudents.org/handbook-web/non-school-provider-handbook/",
      "https://www.stepupforstudents.org/schools-and-providers/become-a-service-partner-empowerment/",
      "https://go.stepupforstudents.org/hubfs/Providers/External-Guides/Home%20Education%20Program-Home%20Education%20Instructional%20Program.pdf",
      "https://www.stepupforstudents.org/faq/how-do-i-find-a-provider-for-the-items-or-services-my-student-needs/"
    ],
    "noVerificado": [
      "Nombre exacto, categoría y visibilidad actual de la oferta en la cuenta institucional de EMA. Los servicios aprobados se conservan según expediente; no se han ampliado."
    ],
    "state": "Florida",
    "program": "Step Up For Students · EMA (Home Education Instructional Program)",
    "service": "Matrícula (Enrollment)",
    "status": "aprobado",
    "approved": true,
    "marketplace": "Servicio publicado en el EMA Marketplace",
    "price": "Por confirmar",
    "eligibility": "Familias con beca gestionada por Step Up For Students (FES-UA / PEP), según elegibilidad del programa",
    "documentation": "07_US_PROGRAMS_COMPLIANCE/Florida",
    "lastVerified": "2026-10-06 · guías generales; aprobación institucional 2026-10-02",
    "source": "Portal EMA de Step Up For Students (stepupforstudents.org)",
    "operativo": "Servicio aprobado. Es el único servicio aprobado en Florida EMA.",
    "guias": [
      {
        "titulo": "EMA: catálogo y atención a padres",
        "url": "https://drive.google.com/file/d/1_iD_e5OrWZ57OViDtWlcxZsRdx1Knjpl/view"
      }
    ]
  },
  {
    "id": "FL-EMA-LIFESKILLS",
    "state": "Florida",
    "program": "Step Up For Students · EMA (Home Education Instructional Program)",
    "service": "Life Skills",
    "status": "no_aprobado",
    "approved": false,
    "marketplace": "No publicado",
    "price": "Por confirmar",
    "eligibility": "No aplicable hasta que el servicio sea aprobado por separado",
    "documentation": "07_US_PROGRAMS_COMPLIANCE/Florida",
    "lastVerified": "2026-10-02",
    "source": "Portal EMA de Step Up For Students (stepupforstudents.org)",
    "operativo": "No se ofrece como servicio EMA. Solo Matrícula está aprobada."
  },
  {
    "id": "FL-EMA-DIAGNSTICOACADMICO",
    "state": "Florida",
    "program": "Step Up For Students · EMA (Home Education Instructional Program)",
    "service": "Diagnóstico académico",
    "status": "no_aprobado",
    "approved": false,
    "marketplace": "No publicado",
    "price": "Por confirmar",
    "eligibility": "No aplicable hasta que el servicio sea aprobado por separado",
    "documentation": "07_US_PROGRAMS_COMPLIANCE/Florida",
    "lastVerified": "2026-10-02",
    "source": "Portal EMA de Step Up For Students (stepupforstudents.org)",
    "operativo": "No se ofrece como servicio EMA. Solo Matrícula está aprobada."
  },
  {
    "id": "FL-EMA-DUALDIPLOMA",
    "state": "Florida",
    "program": "Step Up For Students · EMA (Home Education Instructional Program)",
    "service": "Dual Diploma",
    "status": "no_aprobado",
    "approved": false,
    "marketplace": "No publicado",
    "price": "Por confirmar",
    "eligibility": "No aplicable hasta que el servicio sea aprobado por separado",
    "documentation": "07_US_PROGRAMS_COMPLIANCE/Florida",
    "lastVerified": "2026-10-02",
    "source": "Portal EMA de Step Up For Students (stepupforstudents.org)",
    "operativo": "No se ofrece como servicio EMA. Solo Matrícula está aprobada."
  },
  {
    "id": "FL-EMA-OTROSSERVICIOS",
    "state": "Florida",
    "program": "Step Up For Students · EMA (Home Education Instructional Program)",
    "service": "Otros servicios",
    "status": "no_aprobado",
    "approved": false,
    "marketplace": "No publicado",
    "price": "Por confirmar",
    "eligibility": "No aplicable hasta que el servicio sea aprobado por separado",
    "documentation": "07_US_PROGRAMS_COMPLIANCE/Florida",
    "lastVerified": "2026-10-02",
    "source": "Portal EMA de Step Up For Students (stepupforstudents.org)",
    "operativo": "No se ofrece como servicio EMA. Solo Matrícula está aprobada."
  },
  {
    "id": "AL-CHOOSE-ESP",
    "captacion": [
      "Presentar la aprobación ESP según expediente; verificar integración ClassWallet y servicio concreto antes de ofrecer pago con fondos. Una integración pendiente permite orientar y registrar interés, sin prometer cobro operativo.",
      "La solicitud familiar 2026–2027 está cerrada; atender familias adjudicadas o registrar interés para próximo ciclo sin inventar fechas. La solicitud ESP permanece abierta todo el año.",
      "Oferta Alabama: Homeschool Guiado, Life Skills, diagnóstico y tutorías según categorías aprobadas. No incorporar Dual Diploma como oferta Alabama por analogía con otros territorios.",
      "Tarifa familiar y convenio se identifican por separado. No usar saldo ESA como precio ni prometer cobertura total."
    ],
    "facturacion": [
      "Familia adjudicada: seguir bienvenida ClassWallet y aceptar el affidavit correspondiente por estudiante; el adulto decide y opera su cuenta.",
      "Pay Vendor permite pago a ESP con factura; Start Shopping es la compra de artículos en Marketplace. Todos los pagos ESA se tramitan por ClassWallet; no hay reembolso de compras particulares a familias.",
      "Factura digital: proveedor y dirección, estudiante, adulto responsable, fecha de factura, fechas de servicio, descripción e importe. Separar cargos de cada estudiante; no documentación manuscrita.",
      "La guía 2026–2027 permite pago antes o después del servicio dentro del ciclo; no trasladar la regla de facturación posterior de EMA. Revisar categoría: un gasto no elegible puede causar rechazo de toda la factura.",
      "Administración concilia factura, prestación y cobro real en el sistema autorizado. No prometer sincronización automática ni repartir fondos o disfrazar gastos."
    ],
    "responsableComercial": "Rol Estratégico (captación y seguimiento) · Administración (facturación)",
    "condiciones": [
      "Alta como ESP en ClassWallet (vinculación bancaria y activación de perfil en curso).",
      "Las pruebas estandarizadas son un requisito específico de Alabama."
    ],
    "fuentesOficiales": [
      "https://chooseact.alabama.gov/",
      "https://www.revenue.alabama.gov/tax-policy/the-choose-act/",
      "https://classwallet.com/alchoose/assets/CHOOSE_ACT_parent_guide_2026-2027.pdf"
    ],
    "noVerificado": [
      "Finalización de integración, categorías específicas y visibilidad de Chanak en ClassWallet. Caducidad de invitación: verificar correo institucional; no fijar plazo a partir de un resumen no recuperado."
    ],
    "state": "Alabama",
    "program": "CHOOSE Act",
    "service": "Education Service Provider (ESP)",
    "status": "aprobado",
    "approved": true,
    "marketplace": "Alta en ClassWallet en curso (bank linking y activación de perfil)",
    "price": "Por confirmar",
    "eligibility": "Familias participantes del CHOOSE Act, según elegibilidad del programa",
    "documentation": "07_US_PROGRAMS_COMPLIANCE/Alabama",
    "lastVerified": "2026-10-06 · guía general; aprobación institucional 2026-10-02",
    "source": "Programa CHOOSE Act de Alabama y ClassWallet (classwallet.com)",
    "operativo": "Aprobado como ESP. No se dice «Approved Virtual School» hasta que ClassWallet/ALDOR confirmen esa clasificación. Las pruebas estandarizadas son un requisito específico de Alabama.",
    "guias": [
      {
        "titulo": "CHOOSE: ClassWallet y atención a padres",
        "url": "https://drive.google.com/file/d/1bGDJ0Lkj4P8zzdA-82gDhy1Bh9Iq1kdw/view"
      }
    ]
  },
  {
    "id": "TX-TEFA",
    "captacion": [
      "No anunciar aprobación o cobertura por este programa mientras esté en proceso. Se puede orientar sobre servicios particulares y registrar interés consentido; no prometer cobro con fondos antes de aprobación e integración."
    ],
    "facturacion": [
      "Tras la aprobación: cobro vía Odyssey (cuenta bancaria por Stripe). La mecánica de facturación se documentará con la aprobación."
    ],
    "responsableComercial": "Rol Estratégico (captación y seguimiento) · Administración (facturación)",
    "condiciones": [
      "Entidad con sede en EE. UU. registrada ante la Secretaría de Estado de Texas (Certificate of Fact, Formation o Filing) y en regla con el Contralor en el impuesto de franquicia, si aplica.",
      "Proveedores en línea o fuera de Texas: la página oficial indica que pueden solicitar y ser aceptados.",
      "Tutores y servicios docentes: certificado o credencial específica y verificación de huellas dactilares en 30 días.",
      "Tras la aprobación: cuenta bancaria vía Stripe y catálogo en Odyssey. Solicitud abierta sin fecha límite en el portal de proveedores."
    ],
    "fuentesOficiales": [
      "https://educationfreedom.texas.gov/providers-vendors/",
      "https://support.withodyssey.com/hc/en-us/articles/44035042254875-Who-Can-Become-a-Vendor-and-What-are-the-Requirements"
    ],
    "noVerificado": [
      "Comunicado del Contralor (nov-2025) menciona acreditación, 2 años de operación y pruebas estandarizadas para escuelas privadas, y que las escuelas virtuales necesitan ubicación en Texas: NO confirmado en fuente primaria completa.",
      "No verificado si personal en el extranjero puede ofrecer servicios como «tutor» sin certificado docente de Texas."
    ],
    "state": "Texas",
    "program": "TEFA (Texas Education Freedom Accounts)",
    "service": "Vendor / Educational Service Provider",
    "status": "en_proceso",
    "approved": false,
    "marketplace": "Solicitud enviada; perfil de proveedor en preparación (Odyssey)",
    "price": "Por confirmar",
    "eligibility": "Por confirmar con el programa",
    "documentation": "Registro como entidad extranjera ante la Secretaría de Estado de Texas; situación ante el Contralor; perfil en Odyssey",
    "lastVerified": "2026-10-05",
    "source": "Web oficial del programa y Contralor de Texas (comptroller.texas.gov)",
    "operativo": "Documentación y flujo de matrícula preparados para activarse al aprobarse. No decir «proveedor de Texas» mientras no esté aprobado."
  },
  {
    "id": "AZ-ESA",
    "captacion": [
      "No anunciar aprobación o cobertura por este programa mientras esté en proceso. Se puede orientar sobre servicios particulares y registrar interés consentido; no prometer cobro con fondos antes de aprobación e integración."
    ],
    "facturacion": [
      "Tras el registro: cobro vía ClassWallet. Las facturas deben llevar nombre, estudiante, servicios, fechas y total (ADE, ESA Support)."
    ],
    "responsableComercial": "Rol Estratégico (captación y seguimiento) · Administración (facturación)",
    "condiciones": [
      "Registro único como proveedor ante ADE (formulario) y alta posterior en ClassWallet, plataforma de pago.",
      "Tutores individuales: diploma de secundaria o superior; instalaciones o negocios: documentación de acreditación o formulario de atestación firmado.",
      "Facturas con nombre, estudiante, servicios, fechas y total; licencia profesional si es terapeuta."
    ],
    "fuentesOficiales": [
      "https://www.azed.gov/esa/esa-support"
    ],
    "noVerificado": [
      "No verificado en fuente oficial: si se admiten proveedores en línea o de fuera del estado, pruebas, antecedentes y fechas. Confirmar en el formulario de ADE."
    ],
    "state": "Arizona",
    "program": "ESA (Empowerment Scholarship Account)",
    "service": "Registro como proveedor (ADE Service Provider Registration)",
    "status": "en_proceso",
    "approved": false,
    "marketplace": "Tras el registro, cobro vía ClassWallet",
    "price": "Por confirmar",
    "eligibility": "Por confirmar con el programa",
    "documentation": "Registro de proveedor ante el Departamento de Educación de Arizona",
    "lastVerified": "2026-10-05",
    "source": "Web oficial del programa (Arizona Department of Education)",
    "operativo": "Preparar documentación y materiales internos. No comunicar como aprobado."
  },
  {
    "id": "AR-EFA",
    "captacion": [
      "No anunciar aprobación o cobertura por este programa mientras esté en proceso. Se puede orientar sobre servicios particulares y registrar interés consentido; no prometer cobro con fondos antes de aprobación e integración."
    ],
    "facturacion": [
      "Tras la aprobación: pagos vía ClassWallet (Direct Pay, Marketplace o reembolso, según la página oficial)."
    ],
    "responsableComercial": "Rol Estratégico (captación y seguimiento) · Administración (facturación)",
    "condiciones": [
      "Tres categorías: tiempo completo con contacto con estudiantes (microescuelas, pods, escuelas en línea), tiempo parcial con contacto (tutores, terapeutas) y sin contacto.",
      "Tiempo parcial: huellas y antecedentes a solicitud; tutores con una credencial entre las que lista el programa.",
      "Pagos vía ClassWallet (Direct Pay, marketplace o reembolso). Pruebas anuales de matemáticas y lectura para estudiantes."
    ],
    "fuentesOficiales": [
      "https://dese.ade.arkansas.gov/Offices/office-of-school-choice-and-parent-empowerment/education-freedom-accounts/information-for-service-providers"
    ],
    "noVerificado": [
      "No verificado: requisitos de la categoría de tiempo completo, admisión de proveedores fuera de Arkansas y fecha límite de solicitud. Contacto oficial indicado en la página: ade.efa@ade.arkansas.gov. El manual de familias leído es de 2025-26."
    ],
    "state": "Arkansas",
    "program": "EFA (Education Freedom Account)",
    "service": "Part-Time Student-Facing Provider (categoría posible)",
    "status": "en_proceso",
    "approved": false,
    "marketplace": "Por confirmar; el programa trabaja con ClassWallet",
    "price": "Por confirmar",
    "eligibility": "Por confirmar con el programa",
    "documentation": "Solicitud de nuevos proveedores / vendors",
    "lastVerified": "2026-10-05",
    "source": "Web oficial del programa",
    "operativo": "La categoría concreta la confirma Chanak Administration. No comunicar como aprobado."
  },
  {
    "id": "UT-FITSALL",
    "captacion": [
      "No anunciar aprobación o cobertura por este programa mientras esté en proceso. Se puede orientar sobre servicios particulares y registrar interés consentido; no prometer cobro con fondos antes de aprobación e integración."
    ],
    "facturacion": [
      "Tras la aprobación: cobro a través de Odyssey; la mecánica concreta de pago no está verificada."
    ],
    "responsableComercial": "Rol Estratégico (captación y seguimiento) · Administración (facturación)",
    "condiciones": [
      "Elegibles: negocios con EIN federal, escuelas y proveedores de servicios que presten el servicio directamente; no son elegibles personas sin EIN ni intermediarios.",
      "Documentos: licencia de negocio o artículos de incorporación y EIN/W-9; licencias profesionales para servicios que las exijan; cumplimiento del Título VI.",
      "Solicitud en el portal de proveedores de Odyssey: categoría de gasto, datos de la organización, idiomas y edades atendidas."
    ],
    "fuentesOficiales": [
      "https://support.withodyssey.com/hc/en-us/articles/37494425843611-Who-can-be-a-Utah-Fits-All-Scholarship-provider",
      "https://support.withodyssey.com/hc/en-us/articles/37894257417499-How-to-Complete-the-Utah-Fits-All-Scholarship-Program-Provider-Application"
    ],
    "noVerificado": [
      "No verificado: requisitos por categoría (Life Skills, inglés académico, tutoría, diagnósticos), proveedores en línea o fuera de Utah, antecedentes, fechas y mecánica de pago."
    ],
    "state": "Utah",
    "program": "Utah Fits All",
    "service": "Proveedor en Odyssey (ofertas separadas: Life Skills, Academic English, Tutoring, Diagnostics)",
    "status": "en_proceso",
    "approved": false,
    "marketplace": "Cada oferta se revisa por separado",
    "price": "Por confirmar",
    "eligibility": "Por confirmar con el programa",
    "documentation": "Solicitud como proveedor con EIN federal",
    "lastVerified": "2026-10-05",
    "source": "Web oficial del programa (Odyssey)",
    "operativo": "Preparar las ofertas por separado. No comunicar como aprobado."
  },
  {
    "id": "WV-HOPE",
    "captacion": [
      "No anunciar aprobación o cobertura por este programa mientras esté en proceso. Se puede orientar sobre servicios particulares y registrar interés consentido; no prometer cobro con fondos antes de aprobación e integración."
    ],
    "facturacion": [
      "Tras la aprobación: perfil en EMA de Step Up for Students para West Virginia, con datos ACH. La mecánica de facturación se documentará con la aprobación."
    ],
    "responsableComercial": "Rol Estratégico (captación y seguimiento) · Administración (facturación)",
    "condiciones": [
      "Alta con el New Provider Request Form y luego perfil en EMA (de Step Up for Students en West Virginia); perfil de negocio vinculado al menos a una cuenta individual.",
      "EIN o SSN coincidente con la declaración de impuestos, datos ACH y aceptación de los términos de ESP con contrato con la Junta.",
      "Control de antecedentes para todo empleado con contacto con estudiantes. Los programas en línea no públicos pueden ser elegibles según el manual."
    ],
    "fuentesOficiales": [
      "https://hopescholarshipwv.gov/Home/Service-Providers"
    ],
    "noVerificado": [
      "El manual leído es del curso 2022-23 (rev. abril 2023) y puede estar desactualizado. No verificado: acreditación para proveedores no escolares, proveedores de fuera del estado y fechas 2026-27. Contacto indicado: help@hopescholarshipwv.com."
    ],
    "state": "West Virginia",
    "program": "Hope Scholarship",
    "service": "Education Service Provider (New Provider Request Form)",
    "status": "en_proceso",
    "approved": false,
    "marketplace": "Por confirmar",
    "price": "Por confirmar",
    "eligibility": "Por confirmar con el programa",
    "documentation": "Manual de proveedores del programa; New Provider Request Form",
    "lastVerified": "2026-10-05",
    "source": "Web oficial del programa",
    "operativo": "Preparar documentación. No comunicar como aprobado."
  },
  {
    "id": "US-NCAA",
    "state": "Nacional (EE. UU.)",
    "program": "NCAA Eligibility Center",
    "service": "Revisión de la escuela (core courses)",
    "status": "en_revision",
    "approved": false,
    "marketplace": "No aplica",
    "price": "No aplica",
    "eligibility": "Estudiantes-deportistas que aspiran al deporte universitario de EE. UU.; no garantiza elegibilidad ni beca",
    "documentation": "Documentación enviada vía High School Portal",
    "lastVerified": "2026-10-04",
    "source": "NCAA Eligibility Center (eligibilitycenter.org)",
    "operativo": "En revisión. No afirmar que un curso cuenta como core course mientras no haya decisión."
  },
  {
    "id": "US-NCES",
    "state": "Nacional (EE. UU.)",
    "program": "NCES · registro de escuelas privadas",
    "service": "Registro / número de escuela",
    "status": "en_proceso",
    "approved": false,
    "marketplace": "No aplica",
    "price": "No aplica",
    "eligibility": "No aplica; figurar en un registro no equivale a acreditación",
    "documentation": "Encuesta PSS según las instrucciones oficiales",
    "lastVerified": "2026-10-05",
    "source": "NCES (nces.ed.gov)",
    "operativo": "Plazo: la dirección estima 3–4 semanas; es información institucional. La fuente oficial indica que la inclusión en el directorio puede tardar más, por lo que no se prometen fechas a las familias."
  },
  {
    "id": "US-DBU",
    "state": "Texas",
    "program": "Dallas Baptist University (DBU)",
    "service": "Solicitud de convenio universitario",
    "status": "en_proceso",
    "approved": false,
    "marketplace": "No aplica",
    "price": "No aplica",
    "eligibility": "No definida: no hay condiciones acordadas",
    "documentation": "Solicitud enviada; reuniones en curso",
    "lastVerified": "2026-10-05",
    "source": "Comunicación de la dirección de Chanak",
    "operativo": "No decir qué ventajas, becas o admisiones incluirá. Convenios con otras universidades: plan posterior a la decisión de MSA-CESS."
  }
]
