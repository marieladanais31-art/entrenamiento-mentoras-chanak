// BLOQUE 7 — USA STATE PROGRAMS / COMPLIANCE (por rol) · BLOQUE 8 — COORDINATOR TRACK
// Fuente: 07_US_PROGRAMS_COMPLIANCE, 08_ACADEMIC_POLICIES, 03_INSTITUCIONES (PLC, Acuerdo Marco y adenda)

export const BLOQUES_7_8 = {
  'T7.1': {
    resumen:
      'Programas estatales aprobados: Florida EMA (servicio Matrícula de Chanak TrainUp Education, Inc.) y Alabama CHOOSE (Approved ESP en ClassWallet).',
    objetivos: ['Describir el estado aprobado en Florida EMA.', 'Explicar Alabama CHOOSE (ESP aprobado).', 'Aplicar la regla de oro: STATE FUNDING ≠ CURRICULUM.'],
    lecciones: [
      {
        titulo: 'Florida EMA y Alabama CHOOSE',
        guion: [
          'Florida: Chanak TrainUp Education, Inc. tiene aprobado el servicio de Matrícula (Enrollment) en el Marketplace EMA de Step Up For Students.',
          'Alabama: Chanak es Approved Education Service Provider (ESP) en el CHOOSE Act, con alta y vinculación en ClassWallet en curso.',
          'Cualquier servicio adicional requiere su propia revisión y aprobación. No se presenta como aprobado lo que no lo está.',
        ],
      },
      {
        titulo: 'STATE FUNDING ≠ CURRICULUM',
        guion: [
          'El programa estatal es una capa de acceso, financiación y cumplimiento; no cambia el modelo académico de Chanak ni su marco orientado al dominio.',
          'La elegibilidad la determina siempre el programa estatal. Nada de lo que diga el mentor garantiza que una beca cubra un gasto concreto.',
          'Las preguntas sobre pagos con fondos estatales se derivan a Chanak Administration.',
        ],
      },
    ],
    practica: {
      situacion: 'Una familia de Florida pregunta: «¿La beca pagará también los materiales y las clases particulares con vosotros?».',
      preguntas: ['¿Qué está aprobado y qué no?', '¿Qué respondes sin prometer?', '¿A quién derivas?'],
      criterio: 'Aprobado: servicio Matrícula. Otros servicios requieren aprobación separada; la elegibilidad la decide el programa. Derivar a Chanak Administration.',
    },
    quiz: [
      { p: '¿Qué servicio de Chanak está aprobado en EMA?', opciones: ['Todos los servicios', 'Matrícula', 'Materiales', 'Tutorías'], correcta: 1, explica: 'Solo el servicio Matrícula está aprobado.' },
      { p: '¿Qué significa STATE FUNDING ≠ CURRICULUM?', opciones: ['Que el estado decide el currículo', 'Que el programa estatal es acceso/financiación, no el modelo académico', 'Que no hay becas', 'Que el currículo cambia según la beca'], correcta: 1, explica: 'La financiación no define el currículo.' },
      { p: '¿Cuál es el estatus oficial de Chanak en Alabama CHOOSE?', opciones: ['Approved Virtual School', 'Approved Education Service Provider (ESP)', 'Solicitud rechazada', 'Solo colegio presencial'], correcta: 1, explica: 'Chanak es Approved ESP con onboarding ClassWallet en curso.' },
      { p: 'Una familia quiere confirmación de que la beca cubre todo. ¿Qué haces?', opciones: ['Confirmar', 'Explicar el estado aprobado y derivar a Chanak Administration', 'Decir que no cubre nada', 'Cambiar el contrato'], correcta: 1, explica: 'Sin promesas; derivar.' },
    ],
    evidencia: 'Redacta tu respuesta a la familia del caso práctico (máx. 6 líneas).',
  },

  'T7.2': {
    resumen:
      'Los 7 estados aprobados: Florida (Step Up / EMA), Alabama (CHOOSE Act), Arizona (ESA), Utah (Utah Fits All), Wyoming (ESA), New Hampshire (EFA) y South Carolina (ESTF). Matriz de evaluación y pruebas estandarizadas por estado.',
    objetivos: [
      'Identificar los 7 estados y programas oficialmente aprobados para Chanak.',
      'Aplicar la cláusula obligatoria de política estatal a toda consulta de familias.',
      'Diferenciar aprobación de proveedor frente a cobertura del 100 % o gratuidad.',
      'Consultar y aplicar los requisitos de pruebas estandarizadas por estado (Categoría C).',
    ],
    lecciones: [
      {
        titulo: 'Los 7 estados aprobados oficialmente',
        guion: [
          'Chanak cuenta con aprobación oficial como proveedor en 7 estados: Florida (Step Up For Students / EMA), Alabama (CHOOSE Act / ClassWallet), Arizona (Arizona ESA / ClassWallet), Utah (Utah Fits All / Odyssey), Wyoming (Wyoming ESA), New Hampshire (EFA) y South Carolina (ESTF).',
          'Texas (TEFA), Arkansas y otros estados continúan en tramitación; no se presentan como aprobados hasta confirmación oficial.',
          'Cláusula obligatoria: «Las familias elegibles pueden solicitar el pago de servicios autorizados con los fondos disponibles de su programa. La aprobación depende del servicio, del estudiante y de las reglas aplicables».',
          'Ser proveedor aprobado NO garantiza cobertura total ni financiación del 100 %: la disponibilidad depende de los fondos asignados a la familia y las reglas del estado.',
        ],
      },
      {
        titulo: 'Pruebas estandarizadas y cumplimiento por estado',
        guion: [
          'Algunos programas estatales exigen pruebas anuales norm-referenced (Categoría C). No son un requisito universal de Chanak: dependen de la ley y del programa de cada estado.',
          'Las pruebas estatales nunca reemplazan la evaluación interna de dominio de Chanak (Nivel A, umbral 80 %). Consulta la matriz State-Specific antes de responder.',
        ],
      },
    ],
    practica: {
      situacion: 'Una familia de Utah o New Hampshire pregunta si tener la beca significa que Chanak es 100 % gratuito y si pueden pagar cualquier servicio.',
      preguntas: ['¿Qué estados están formalmente aprobados?', '¿Qué cláusula obligatoria debes comunicarles?', '¿Cubre la beca automáticamente cualquier servicio?'],
      criterio: 'Cita los 7 estados aprobados; incluye la cláusula obligatoria sobre fondos y servicios autorizados; aclara que la aprobación depende del servicio y reglas aplicables.',
    },
    quiz: [
      { p: '¿Cuáles son los 7 estados con aprobación oficial de Chanak?', opciones: ['Florida, Alabama, Arizona, Utah, Wyoming, New Hampshire y South Carolina', 'Texas, California, Florida y Nueva York', 'Todos los 50 estados de EE. UU.', 'Solo Florida y Texas'], correcta: 0, explica: 'Los 7 estados aprobados son FL, AL, AZ, UT, WY, NH y SC. Texas TEFA sigue en tramitación.' },
      { p: '¿Qué afirma la cláusula obligatoria que debe citarse ante familias?', opciones: ['Que Chanak garantiza beca completa', 'Que las familias elegibles pueden solicitar pago de servicios autorizados según fondos, estudiante y reglas aplicables', 'Que las pruebas estandarizadas son voluntarias en todos los estados', 'Que el estado diseña el currículo'], correcta: 1, explica: 'La cláusula aclara que la aprobación depende del servicio, del estudiante y de las reglas del programa.' },
      { p: '¿Las pruebas estatales externas (Nivel C) sustituyen la evaluación de dominio al 80 % de Chanak?', opciones: ['Sí, totalmente', 'No: la evaluación interna de dominio permanece invariable', 'Solo en primaria', 'Solo si saca sobresaliente'], correcta: 1, explica: 'STATE FUNDING ≠ CURRICULUM: la evaluación de dominio es la constante de Chanak.' },
    ],
    evidencia: 'Resume en una tabla de 7 filas los estados aprobados, su programa y plataforma de tramitación.',
  },

  'T7.3': {
    resumen:
      'Plataformas operativas Odyssey y ClassWallet: cómo funcionan los marketplaces estatales, reserva de fondos por la familia, facturación electrónica por Administración y conciliación de cobros.',
    objetivos: [
      'Navegar los circuitos operativos de Odyssey (Utah) y ClassWallet (Alabama, Arizona, Florida).',
      'Diferenciar la reserva de fondos de la familia de la facturación y cobro real.',
      'Aplicar los controles administrativos para evitar cobros dobles o errores de facturación.',
    ],
    lecciones: [
      {
        titulo: 'Marketplaces Odyssey y ClassWallet',
        guion: [
          'Odyssey gestiona programas como Utah Fits All: la familia selecciona los servicios educativos autorizados y reserva fondos en el marketplace.',
          'ClassWallet opera en Alabama CHOOSE, Arizona ESA y Florida EMA: interfaz para asignación de órdenes de servicio y gestión de proveedores acreditados.',
          'La familia gestiona directamente sus credenciales y autorizaciones parentales; el personal de Chanak nunca solicita ni manipula contraseñas familiares.',
        ],
      },
      {
        titulo: 'Ciclo de facturación y conciliación',
        guion: [
          'La reserva familiar en Odyssey o ClassWallet NO equivale a ingreso recibido: Administración genera la factura formal desglosada tras la prestación del servicio.',
          'Las facturas deben incluir: razón social exacta (Chanak TrainUp Education, Inc.), nombre del alumno, ID, periodo de prestación y concepto formativo aprobado.',
          'Cualquier discrepancia de saldo se concilia entre Administración y el marketplace correspondiente sin alterar la actividad académica del alumno.',
        ],
      },
    ],
    practica: {
      situacion: 'Una familia de Utah te dice que ya «dio a pagar» en Odyssey pero en el SIS su estado no aparece como pagado.',
      preguntas: ['¿Qué diferencia hay entre reservar en el marketplace y confirmar cobro en el SIS?', '¿Qué le explicas a la familia sin generar alarma?', '¿A quién escalas la verificación?'],
      criterio: 'Distingue reserva de fondos de confirmación bancaria; aclara con amabilidad que Administración concilia la factura en Odyssey; deriva a administration@chanakacademy.org.',
    },
    quiz: [
      { p: '¿Qué plataforma tecnológica gestiona Utah Fits All?', opciones: ['Odyssey', 'ClassWallet', 'Stripe directo', 'Venmo'], correcta: 0, explica: 'Utah Fits All utiliza Odyssey como marketplace oficial.' },
      { p: '¿Puede un mentor solicitar la clave de ClassWallet u Odyssey a una familia para agilizar un trámite?', opciones: ['Sí, si la familia da permiso', 'No, nunca: la familia opera su propia cuenta y custodia sus credenciales', 'Solo en fin de semana', 'Solo para soporte técnico'], correcta: 1, explica: 'El acceso a plataformas estatales es personal e intransferible de la familia.' },
      { p: '¿Cuándo se considera completado el pago de un servicio estatal en el SIS?', opciones: ['En cuanto la familia dice que reservó', 'Cuando Administración concilia la orden de servicio y confirma la recepción de los fondos', 'Al iniciar el curso escolar', 'Automáticamente al matricularse'], correcta: 1, explica: 'Se requiere conciliación administrativa de la orden de servicio y pago.' },
    ],
    evidencia: 'Elabora un diagrama de flujo en texto (5 pasos) describiendo el camino desde la reserva familiar en Odyssey/ClassWallet hasta la conciliación en el SIS.',
  },

  'T7.4': {
    resumen:
      'ESA Support Package y límites de servicio: mentoría quincenal (2h/mes), Life Skills grupal (4x60 min/mes, máx. 7 estudiantes por cohorte) y prevención estricta de sobrepromesas de tutoría 1 a 1 ilimitada.',
    objetivos: [
      'Definir con exactitud las horas y componentes del ESA Support Package.',
      'Mantener el límite de ratio de cohorte en Life Skills (máximo 7 alumnos por grupo).',
      'Establecer límites profesionales claros frente a peticiones de tutoría individual ilimitada.',
    ],
    lecciones: [
      {
        titulo: 'Estructura del ESA Support Package',
        guion: [
          'El paquete de apoyo para estudiantes con fondos ESA consta de: 2 horas mensuales de mentoría académica quincenal (2 sesiones de 60 min o 4 de 30 min).',
          '4 sesiones mensuales de 60 minutos de Life Skills & Leadership en formato grupal reducido.',
          'El tamaño máximo de cohorte para Life Skills grupal es de 7 estudiantes, garantizando participación activa y atención cercana.',
        ],
      },
      {
        titulo: 'Límites de servicio y prevención de sobrepromesas',
        guion: [
          'El paquete ESA NO incluye tutoría individualizada intensiva 1 a 1 ilimitada ni clases particulares diarias de recuperación.',
          'Si una familia requiere horas adicionales de tutoría o apoyo psicopedagógico, se gestiona como servicio complementario presupuestado aparte, sujeto a aprobación.',
          'Nunca asegures que el paquete cubre «todo lo que el niño necesite sin límite»: el contrato define el alcance exacto de horas y entregables.',
        ],
      },
    ],
    practica: {
      situacion: 'Una familia con fondos ESA en Arizona exige que la mentora dé clases particulares diarias de 1 hora de matemáticas a su hijo porque «el estado paga el paquete completo».',
      preguntas: ['¿Qué incluye y qué no incluye el ESA Support Package?', '¿Cuál es el tamaño de cohorte y la frecuencia de mentoría?', '¿Cómo reconduces la conversación con la familia?'],
      criterio: 'Recuerda el alcance: 2h/mes mentoría quincenal y 4x60min Life Skills en grupo de máx 7; explica que la tutoría diaria no está incluida y ofrece derivar para cotizar servicios extra.',
    },
    quiz: [
      { p: '¿Cuántas horas de mentoría académica mensual incluye el ESA Support Package?', opciones: ['10 horas semanales', '2 horas al mes (quincenales)', 'Ilimitadas', 'Solo 15 minutos al año'], correcta: 1, explica: 'Incluye 2 horas al mes estructuradas quincenalmente.' },
      { p: '¿Cuál es el límite máximo de estudiantes por cohorte en Life Skills grupal del paquete ESA?', opciones: ['25 estudiantes', '15 estudiantes', '7 estudiantes', 'No hay límite'], correcta: 2, explica: 'El límite fijado para mantener la calidad y seguimiento es de 7 estudiantes.' },
      { p: '¿Qué debes responder si una familia pide tutoría individual diaria dentro de su paquete ESA estándar?', opciones: ['Aceptar para no perder al cliente', 'Aclarar que excede el alcance del paquete y remitir a Administración para valorar servicios adicionales', 'Dar la clase sin registrarla', 'Cancelar la matrícula'], correcta: 1, explica: 'Se aclaran los límites del paquete y se deriva a Administración si requieren servicios adicionales.' },
    ],
    evidencia: 'Redacta un correo modelo de 8–10 líneas explicando con claridad y calidez a una familia ESA los componentes exactos de su paquete de apoyo y sus límites de horas.',
  },

  'T7.5': {
    resumen:
      'Compliance legal, fiscal y contractual en EE. UU.: estatus de contratista independiente (Form 1099-NEC / W-9 vs W-2), facturación electrónica transparente, estricta prohibición de reembolsos indebidos y cumplimiento de FERPA.',
    objetivos: [
      'Diferenciar la relación contractual de contratista independiente (1099) frente a empleo directo (W-2).',
      'Cumplir con las obligaciones de facturación y soporte documental exigidas por los departamentos estatales.',
      'Aplicar la prohibición absoluta de devolución de fondos o incentivos directos a familias.',
      'Salvaguardar la confidencialidad de los expedientes de estudiantes bajo los estándares FERPA.',
    ],
    lecciones: [
      {
        titulo: 'Contratista independiente (1099) vs Empleo (W-2)',
        guion: [
          'Los mentores y especialistas que colaboran bajo contratos de servicios en EE. UU. operan en régimen de contratista independiente (Form 1099-NEC), no como empleados W-2.',
          'Cada contratista aporta su Form W-9 (o W-8BEN si reside en el extranjero), emite facturas por servicios efectivamente prestados y es responsable de sus propias obligaciones tributarias.',
          'Chanak no retiene impuestos de nómina ni asume beneficios laborales salvo que exista un contrato laboral explícito formalizado por escrito.',
        ],
      },
      {
        titulo: 'Compliance financiero y privacidad FERPA',
        guion: [
          'Prohibición de rebajas o reembolsos de fondos estatales: está terminantemente prohibido ofrecer devolver dinero en efectivo, cupones o compensaciones a familias que paguen con fondos estatales (anti-kickback policy).',
          'Toda factura emitida a un programa estatal debe reflejar servicios reales impartidos, con fecha, registro en el SIS y firma de conformidad.',
          'Bajo la ley FERPA, los expedientes académicos, diagnósticos y notas son estrictamente confidenciales: nunca se divulgan a terceros sin consentimiento parental informado.',
        ],
      },
    ],
    practica: {
      situacion: 'Un mentor consulta si puede emitir una factura global por adelantado de todo el semestre para cobrar antes, y si Chanak le enviará un formulario W-2 a final de año.',
      preguntas: ['¿Bajo qué régimen fiscal operan los mentores en EE. UU. (1099 vs W-2)?', '¿Se pueden facturar servicios antes de su prestación efectiva?', '¿Qué documento fiscal se utiliza?'],
      criterio: 'Aclara régimen de contratista independiente (1099-NEC / W-9); explica que la facturación debe corresponder a servicios efectivamente prestados y verificables en el SIS.',
    },
    quiz: [
      { p: '¿Qué régimen contractual y fiscal aplica habitualmente a los mentores colaboradores en EE. UU.?', opciones: ['Contratista independiente (Form 1099-NEC / W-9)', 'Empleado indefinido W-2 con jornada fija', 'Funcionario público del estado', 'Voluntariado no remunerado obligatorio'], correcta: 0, explica: 'Se colabora como contratista independiente con Form 1099-NEC / W-9.' },
      { p: '¿Qué establece la normativa estatal sobre ofrecer comisiones o devolución de dinero a familias con fondos públicos?', opciones: ['Está permitido como estrategia de ventas', 'Está terminantemente prohibido (prohibición de kickbacks o reparto de fondos)', 'Se permite si la familia lo solicita por escrito', 'Solo en Florida'], correcta: 1, explica: 'Los programas estatales prohíben de forma estricta cualquier devolución o reparto de fondos con las familias.' },
      { p: '¿Qué ley federal de EE. UU. protege la privacidad de los registros y expedientes académicos de los estudiantes?', opciones: ['FERPA (Family Educational Rights and Privacy Act)', 'HIPAA', 'GDPR únicamente', 'Clean Air Act'], correcta: 0, explica: 'FERPA regula la privacidad y confidencialidad de los expedientes educativos en EE. UU.' },
    ],
    evidencia: 'Elabora un decálogo de 5 normas de oro sobre compliance fiscal, facturación veraz y protección de datos FERPA para nuevos mentores.',
  },

  'T8.1': {
    resumen:
      'El coordinador garantiza la calidad del equipo de mentores: observa, revisa registros, da retroalimentación y sostiene planes de mejora.',
    objetivos: ['Observar con rúbrica.', 'Dar retroalimentación útil.', 'Diseñar planes de mejora.'],
    lecciones: [
      {
        titulo: 'Observar y revisar',
        guion: [
          'Rúbrica de supervisión: preparación de la semana, seguimiento y metas, calidad del registro en el SIS, evidencias, comunicación con familias, intervención y límites profesionales.',
          'Combina observación directa (sesiones), revisión de registros y muestras de evidencia.',
        ],
      },
      {
        titulo: 'Retroalimentación y mejora',
        guion: [
          'Retroalimentación concreta: qué funciona, qué falta, qué se espera y para cuándo.',
          'Plan de mejora con objetivos, apoyos y fecha de revisión cuando algo no alcanza el estándar.',
          'La supervisión también cuida al mentor: carga, formación pendiente y apoyo.',
        ],
      },
    ],
    practica: {
      situacion: 'Al revisar a una mentora ves registros semanales impecables pero tres estudiantes sin evidencias en dos semanas y una familia sin respuesta.',
      preguntas: ['¿Qué señales ves?', '¿Qué retroalimentación das?', '¿Qué plan de mejora acuerdas?'],
      criterio: 'Registro sin evidencia es una alerta de calidad; feedback concreto y plan de mejora con revisión.',
    },
    quiz: [
      { p: 'Registros completos pero sin evidencias durante semanas. ¿Qué indica?', opciones: ['Todo está bien', 'Una alerta de calidad: el registro debe apoyarse en evidencia', 'Exceso de trabajo', 'Nada'], correcta: 1, explica: 'Sin evidencia no hay dominio demostrado.' },
      { p: '¿Qué debe tener una buena retroalimentación?', opciones: ['Opiniones generales', 'Hechos, expectativa y plazo', 'Solo elogios', 'Solo críticas'], correcta: 1, explica: 'Concreta y accionable.' },
      { p: '¿Cuándo se abre un plan de mejora?', opciones: ['Nunca', 'Cuando algo no alcanza el estándar', 'Solo si hay quejas', 'Una vez al año'], correcta: 1, explica: 'Se abre ante la brecha.' },
      { p: '¿Qué combina la supervisión?', opciones: ['Solo encuestas', 'Observación, revisión de registros y muestras de evidencia', 'Solo reuniones', 'Solo el SIS'], correcta: 1, explica: 'Varias fuentes.' },
    ],
    evidencia: 'Sube una observación documentada con la rúbrica (anonimizada).',
  },

  'T8.2': {
    resumen:
      'Coordinar un Partner Learning Center exige conocer el Acuerdo Marco: qué hace la entidad local, qué hace Chanak Central y cómo se comunican.',
    objetivos: ['Distinguir responsabilidades de la entidad local y de Chanak.', 'Aplicar requisitos de personal, SIS y protección.', 'Explicar la estructura económica sin negociarla.'],
    lecciones: [
      {
        titulo: 'Responsabilidades según el Acuerdo Marco',
        guion: [
          'Chanak: marco académico y curricular, estándares, criterios de evaluación y promoción, formación y certificación, sistemas, supervisión y calidad, documentación académica, autorización de programas y uso del nombre.',
          'Entidad local: cumplimiento legal y permisos, instalaciones, selección y contratación del personal, protección de estudiantes y datos, uso obligatorio del SIS, información veraz y facilitar las revisiones de calidad.',
          'Coordinadores y mentores deben completar y mantener vigente la formación y certificación de Chanak antes de atender estudiantes.',
        ],
      },
      {
        titulo: 'Lo que el acuerdo no es y su economía',
        guion: [
          'No es una autorización gubernamental, ni una licencia educativa, ni una franquicia, ni una joint venture, ni una autorización automática para abrir varias sedes. Cada nueva sede requiere autorización expresa y escrita.',
          'Estructura económica 2026–2027 (adenda económica al Acuerdo Marco): cuota inicial US$3,500, renovación anual US$800 y US$40 por estudiante. Materiales, shipping, servicios especiales y licencias externas aparte.',
          'El coordinador informa y deriva; las condiciones las fija Chanak por escrito.',
        ],
      },
    ],
    practica: {
      situacion: 'La junta de una iglesia que opera un Partner Learning Center quiere abrir un segundo grupo en otra ciudad «con el mismo acuerdo» y contratar a una persona que aún no ha hecho la formación.',
      preguntas: ['¿Se puede abrir con el mismo acuerdo?', '¿Puede atender estudiantes esa persona?', '¿Qué comunicas a Chanak Central?'],
      criterio: 'Cada sede requiere autorización expresa; nadie atiende estudiantes sin formación/certificación; se comunica por escrito a Chanak Central.',
    },
    quiz: [
      { p: '¿El Acuerdo Marco autoriza abrir varias sedes automáticamente?', opciones: ['Sí', 'No: cada sede requiere autorización expresa y escrita', 'Solo en el mismo país', 'Solo con más alumnos'], correcta: 1, explica: 'No hay autorización automática.' },
      { p: '¿Quién contrata al personal local?', opciones: ['Chanak', 'La entidad local', 'MSA', 'El estado'], correcta: 1, explica: 'Relación laboral con la entidad local.' },
      { p: '¿Qué es obligatorio antes de atender estudiantes?', opciones: ['Nada', 'Formación y certificación Chanak vigente', 'Un título de máster', 'Un año de experiencia'], correcta: 1, explica: 'Requisito previo e indispensable.' },
      { p: '¿Cuál es la estructura económica del PLC 2026–2027?', opciones: ['US$40/mes + US$180 matrícula', 'US$3,500 + US$800 anual + US$40 por estudiante', 'US$500 + tabla', 'Gratuito'], correcta: 1, explica: 'Según la adenda económica al Acuerdo Marco.' },
    ],
    evidencia: 'Haz un mapa de responsabilidades (entidad local / Chanak Central) de tu centro o de un centro ejemplo.',
  },

  'T8.3': {
    resumen:
      'El coordinador revisa que cada expediente tenga evidencia, fechas reales y responsable, y reporta incidencias a Chanak Central con criterio y sin demora.',
    objetivos: ['Auditar un expediente.', 'Gestionar evidencia incompleta.', 'Reportar incidencias.'],
    lecciones: [
      {
        titulo: 'Revisión de evidencias',
        guion: [
          'Cada nota del SIS debe tener evidencia, fecha real y responsable. Revisa una muestra de expedientes por mentor cada periodo.',
          'Evidencia incompleta: se solicita y se completa con trabajo real; nunca se reconstruye a posteriori ni se «ajusta» una fecha.',
          'Discrepancias entre transcript y dominio se documentan y escalan a Chanak Central (posible validación).',
        ],
      },
      {
        titulo: 'Incidencias y reporting',
        guion: [
          'Incidencias graves (seguridad, conducta, quejas formales, irregularidades en registros) se reportan por escrito a Chanak Central sin demora; safeguarding va siempre primero al DSL.',
          'Reporting periódico: estudiantes en alerta, intervenciones, calidad del equipo, incidencias y necesidades del centro.',
          'Respeta la privacidad: en informes generales usa IDs.',
        ],
      },
    ],
    practica: {
      situacion: 'Al revisar expedientes encuentras cinco evaluaciones registradas el mismo día con fechas de hace dos meses y sin evidencias adjuntas.',
      preguntas: ['¿Qué indica?', '¿Qué haces con esos registros?', '¿A quién reportas?'],
      criterio: 'Posible registro reconstruido. Se documenta, se pide la evidencia original, no se validan sin evidencia y se reporta a Chanak Central.',
    },
    quiz: [
      { p: 'Un coordinador no ve estudiantes. ¿Qué verifica primero?', opciones: ['Se concede acceso de administrador', 'Su hub, ámbito y carga; informa la incidencia sin ampliar permisos por rutina', 'Crea otra cuenta', 'Crea alumnos de prueba en producción'], correcta: 1, explica: 'La lista inicial depende del hub asignado y de la carga. La formación no altera permisos.' },
      { p: 'Una evidencia está enviada. ¿Qué falta antes de validar el resultado?', opciones: ['Nada', 'Revisar identidad, contenido, acceso y criterio; registrar decisión y comprobar estado', 'Solo descargarla', 'Otorgar Coins'], correcta: 1, explica: 'Enviado y aprobado son estados distintos; la decisión debe tener sustento.' },
      { p: 'Cinco evaluaciones registradas el mismo día con fechas antiguas y sin evidencia. ¿Qué haces?', opciones: ['Validarlas', 'Documentar, pedir evidencia original y reportar a Chanak Central', 'Borrarlas', 'Cambiar las fechas'], correcta: 1, explica: 'Integridad del registro.' },
      { p: '¿Qué debe tener cada nota del SIS?', opciones: ['Solo la nota', 'Evidencia, fecha real y responsable', 'Firma de la familia', 'Nada más'], correcta: 1, explica: 'Trazabilidad.' },
      { p: 'Una posible situación de safeguarding llega al coordinador. ¿Primer paso?', opciones: ['Reporting mensual', 'Informar al DSL de inmediato', 'Esperar', 'Investigar personalmente'], correcta: 1, explica: 'Safeguarding siempre primero al DSL.' },
      { p: '¿Cómo aparecen los estudiantes en los informes generales?', opciones: ['Con nombre completo', 'Con ID', 'Con foto', 'Con dirección'], correcta: 1, explica: 'Privacidad.' },
    ],
    evidencia: 'Sube una revisión de expediente simulada con hallazgos y acciones.',
  },

  'T8.4': {
    resumen:
      'El proyecto de coordinación supervisado integra todo el Coordinator Track en una práctica real que se presenta a Chanak Central.',
    objetivos: ['Planificar un proyecto de coordinación.', 'Ejecutarlo con supervisión.', 'Documentarlo en un portafolio.'],
    lecciones: [
      {
        titulo: 'Planificar',
        guion: [
          'Elige un ámbito real: supervisión de un equipo de mentores, puesta en marcha de un grupo, revisión de expedientes, plan de Extensión Local o plan de calidad del centro.',
          'Define objetivos, acciones, responsables, indicadores, evidencias y calendario.',
        ],
      },
      {
        titulo: 'Ejecutar y presentar',
        guion: [
          'Ejecuta con supervisión de Chanak Central y registra evidencias durante el proceso.',
          'Portafolio final: plan, evidencias, resultados, aprendizajes y propuestas de mejora, sin datos personales de estudiantes.',
          'La revisión final la hace Chanak Central y forma parte de la certificación CHANAK CERTIFIED COORDINATOR.',
        ],
      },
    ],
    practica: {
      situacion: 'Tienes que elegir tu proyecto: tu centro tiene tres mentores nuevos y la Extensión Local sin plan.',
      preguntas: ['¿Qué proyecto eliges y por qué?', '¿Qué indicadores usarás?', '¿Qué evidencias entregarás?'],
      criterio: 'Proyecto con objetivos medibles, indicadores, evidencias y calendario, supervisado.',
    },
    quiz: [
      { p: '¿Quién hace la revisión final del proyecto?', opciones: ['El propio coordinador', 'Chanak Central', 'La familia', 'MSA'], correcta: 1, explica: 'Forma parte de la certificación.' },
      { p: '¿Qué no debe contener el portafolio?', opciones: ['Indicadores', 'Datos personales de estudiantes', 'Evidencias', 'Aprendizajes'], correcta: 1, explica: 'Privacidad.' },
      { p: '¿Qué define un buen plan de proyecto?', opciones: ['Solo una idea', 'Objetivos, acciones, responsables, indicadores, evidencias y calendario', 'Solo un presupuesto', 'Solo fotos'], correcta: 1, explica: 'Estructura completa.' },
      { p: '¿Con qué certificación se relaciona este proyecto?', opciones: ['Chanak Certified Mentor', 'Chanak Certified Coordinator', 'MSA', 'Ninguna'], correcta: 1, explica: 'Cierra el Nivel 2.' },
    ],
    evidencia: 'Sube tu portafolio de proyecto de coordinación.',
  },
}
