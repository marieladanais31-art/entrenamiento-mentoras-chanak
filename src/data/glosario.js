// ============================================================
// CHANAK OPERATIONAL GLOSSARY
// Definiciones sencillas de los términos que se usan en toda la formación y en la
// operación diaria. Si una definición depende de una decisión o de un estado vigente
// (p. ej., programas estatales), se indica dónde verificarla; no se afirma lo no aprobado.
// Categorías: id → nombre visible.
// ============================================================

export const CATEGORIAS_GLOSARIO = {
  org: 'Organización y roles',
  academico: 'Modelo y marco académico',
  evaluacion: 'Evaluación y registros',
  sistemas: 'Sistemas',
  crecimiento: 'Crecimiento y familias',
  programas: 'Programas estatales y administración',
  personas: 'Personas y colaboración',
  proteccion: 'Protección y escalamiento',
}

export const GLOSARIO = [
  // ── Organización y roles ──
  { t: 'Chanak Central', c: 'org', d: 'El nivel de dirección de Chanak (Head of School, Operaciones y Administración) que decide lo que no se decide en el territorio: créditos, cambios de vía, políticas, precios, autorizaciones, compromisos económicos y comunicación institucional.' },
  { t: 'Rol (Role)', c: 'org', d: 'Una función con responsabilidades definidas. No es lo mismo que una persona: en etapas iniciales una misma persona puede asumir varios roles compatibles, siempre con cada rol asignado formalmente, su formación completada y los límites de autoridad de cada función.' },
  { t: 'Mentor', c: 'org', d: 'Academic Mentor. Acompaña al estudiante y a su familia: su unidad principal es estudiante + familia + plan académico. Puede trabajar de forma virtual, presencial o híbrida.' },
  { t: 'Coordinator', c: 'org', d: 'Academic Coordinator (virtual u on-site). Supervisa estudiantes, mentores y calidad: revisa el SIS, el PEI, las evidencias y los expedientes, controla intervenciones, hace reporting y mantiene la relación con Chanak Central. El Mentor acompaña; el Coordinador supervisa que el sistema funcione.' },
  { t: 'Country Representative', c: 'org', d: 'Representante de Chanak para un país concreto (por ejemplo, México). Su autorización indica explícitamente el territorio.' },
  { t: 'State Representative', c: 'org', d: 'Representante de Chanak para un estado concreto (por ejemplo, Alabama). Su autorización indica explícitamente el territorio.' },
  { t: 'Program Representative', c: 'org', d: 'Representante de un programa concreto (Dual Diploma, EMA, CHOOSE, Life Skills…). La autorización indica territorio y programa; representar un programa no da autoridad sobre todos los programas.' },
  { t: 'Family Enrollment Advisor', c: 'org', d: 'Family Enrollment & State Programs Advisor. Atiende leads, llamadas y reuniones, orienta a las familias, gestiona matrícula, documentación, onboarding, seguimiento, cartera y renovación. Distingue siempre Approved / Pending / Planned. No tiene acceso académico completo al SIS.' },
  { t: 'Institutional Representative', c: 'org', d: 'Institutional Partnerships Representative. Trabaja con escuelas, iglesias, ministerios, asociaciones y academias. No puede alterar precios, firmar por Chanak, prometer acreditación ni otorgar autorización de sede.' },
  { t: 'English Teacher', c: 'org', d: 'English Teacher / Academic English Instructor. Enseña inglés académico (speaking, reading, writing, vocabulary, presentaciones, investigación) y, cuando corresponde, Dual Diploma. Puede ser también Mentor si se le asigna ese rol.' },
  { t: 'Life Skills Facilitator', c: 'org', d: 'Life Skills & Leadership Facilitator. Facilita identidad, comunicación, liderazgo, decisiones, hábitos, finanzas personales, empleabilidad, emprendimiento, ciudadanía digital y proyecto de vida.' },
  { t: 'Educational Assessment Specialist', c: 'org', d: 'Especialista en Evaluación Diagnóstica Educativa. Realiza servicios educativos NO clínicos (diagnóstico académico, learning skills, bienestar escolar dentro de límites educativos). No emite diagnósticos clínicos: cuando hace falta, deriva a un profesional con licencia (REFER TO LICENSED PROFESSIONAL).' },
  { t: 'Direct Child Contact', c: 'org', d: 'Contacto directo y regular con menores. Si un rol lo tiene, la persona completa obligatoriamente Child & Adolescent Development, Safeguarding, Online Safety y Confidencialidad/Protección de datos antes de completar su ruta.' },

  // ── Modelo y marco académico ──
  { t: 'Off-Campus', c: 'academico', d: 'Programa de Homeschool Guiado: la familia educa en casa con el acompañamiento de un mentor Chanak, un plan académico y seguimiento en el SIS.' },
  { t: 'Dual Diploma', c: 'academico', d: 'Programa con ruta de créditos para obtener el diploma estadounidense en paralelo al sistema local. Funciona con Route Plan, materias, créditos y auditoría de créditos; las equivalencias y homologaciones nunca se prometen sin Chanak Central.' },
  { t: 'PLC', c: 'academico', d: 'Partner Learning Center: centro colaborador que opera localmente bajo los estándares, el SIS y la supervisión de Chanak. Una alianza NO crea automáticamente una sede Chanak.' },
  { t: 'Certification', c: 'academico', d: 'Certificación Institucional: reconocimiento que Chanak puede otorgar a una institución o a una persona tras cumplir requisitos definidos. No es una acreditación y no se debe presentar como tal.' },
  { t: '60/20/20', c: 'academico', d: 'El modelo de Chanak: 60 % Core USA, 20 % Extensión Local y 20 % Life Skills & Leadership con cosmovisión bíblica.' },
  { t: 'Core USA', c: 'academico', d: 'El 60 % del modelo: el currículo académico estadounidense (matemáticas, lectura, ciencias, estudios sociales, etc.) con su Scope & Sequence.' },
  { t: 'Local Extension', c: 'academico', d: 'Extensión Local: el 20 % que adapta el programa a la lengua, la cultura y los requisitos del país o región de la familia, coordinada por un especialista cuando es necesario.' },
  { t: 'Mastery Learning', c: 'academico', d: 'Enfoque en el que el aprendizaje es la constante y el tiempo la variable: el estudiante avanza cuando demuestra dominio (en Chanak, el umbral es el 80 %) y recibe intervención y nuevas oportunidades si no lo alcanza.' },
  { t: 'Mastery-oriented framework', c: 'academico', d: 'Marco académico orientado al dominio: la forma en que Chanak nombra su estructura académica. Se usa esta formulación en documentos y comunicaciones.' },
  { t: 'Scope & Sequence', c: 'academico', d: 'Mapa de competencias, secuencia y evidencia esperada por área y grado (K–12). Es la referencia para planificar, evaluar y documentar.' },
  { t: 'Curriculum Pathway', c: 'academico', d: 'Vía curricular: el currículo concreto que sigue un estudiante (A.C.E., LIFEPAC, Christian Light Education, Chanak Flex). La elección se basa en el diagnóstico y el PEI; los cambios de vía se escalan.' },

  // ── Evaluación y registros ──
  { t: 'Diagnostic Assessment', c: 'evaluacion', d: 'Evaluación inicial de logro académico (matemáticas, lectura, lenguaje, inglés) para situar al estudiante, detectar brechas y orientar la vía curricular.' },
  { t: 'Educational Screening', c: 'evaluacion', d: 'Cribado educativo (no clínico) de hábitos, organización, estrategias, comprensión, ritmo y aprendizaje, o de bienestar escolar y competencias socioemocionales. No diagnostica trastornos.' },
  { t: 'PEI', c: 'evaluacion', d: 'Plan Educativo Individual (en inglés, ILP): el plan académico del estudiante con metas, vía, apoyos y seguimiento, construido a partir del diagnóstico.' },
  { t: 'Credit Audit', c: 'evaluacion', d: 'Auditoría de créditos: revisión de que los créditos y cursos registrados cumplen la política de reconocimiento de créditos antes de emitir o certificar.' },
  { t: 'Transcript', c: 'evaluacion', d: 'Expediente académico oficial: cursos, calificaciones y créditos. Solo se emite desde los registros verificados en el SIS.' },
  { t: 'Evidence', c: 'evaluacion', d: 'Prueba concreta del trabajo y del dominio (trabajo del estudiante, registros fechados, notas con hechos). Sin evidencia no hay dominio demostrado.' },

  // ── Sistemas ──
  { t: 'SIS', c: 'sistemas', d: 'Student Information System: la plataforma oficial de registro y seguimiento (expediente, PEI, progreso, evidencias, intervenciones, alertas). Cada rol accede solo a lo que su función necesita.' },
  { t: 'Portal', c: 'sistemas', d: 'Portal educativo de Chanak: recursos, guías curriculares, Life Skills, Extensión Local, diagnósticos y manuales.' },
  { t: 'Dual Diploma Portal', c: 'sistemas', d: 'Portal del programa Dual Diploma: estudiante, Route Plan, materias, créditos, trabajo pendiente, evidencias y seguimiento.' },

  // ── Crecimiento y familias ──
  { t: 'Lead', c: 'crecimiento', d: 'Persona o familia que ha mostrado interés en Chanak y está registrada para seguimiento.' },
  { t: 'Qualified Lead', c: 'crecimiento', d: 'Lead que cumple los criterios definidos por Chanak (interés real, perfil y programa adecuados). El criterio concreto lo fija Chanak Central.' },
  { t: 'Pipeline', c: 'crecimiento', d: 'El registro ordenado de leads y reuniones por etapa, desde el primer contacto hasta la matrícula o el cierre.' },
  { t: 'Conversion', c: 'crecimiento', d: 'Paso de una etapa a la siguiente del pipeline, y en especial de lead cualificado a matrícula.' },

  // ── Programas estatales y administración ──
  { t: 'Approved / Pending / Planned', c: 'programas', d: 'Los tres estados que se distinguen siempre: Approved (aprobado por el programa), Pending (solicitado o en revisión) y Planned (previsto). Nunca se presenta como aprobado lo que no lo está.' },
  { t: 'EMA', c: 'programas', d: 'Education Market Assistant, plataforma de Step Up For Students (Florida). Hoy el servicio de Chanak aprobado es Matrícula; cualquier otro requiere su propia aprobación. Verifica el estado vigente antes de comunicarlo.' },
  { t: 'CHOOSE', c: 'programas', d: 'Programa CHOOSE de Alabama. Chanak lo trabaja como Education Service Provider; el estado y la terminología correcta se verifican en la documentación de 07_US_PROGRAMS_COMPLIANCE.' },
  { t: 'ClassWallet', c: 'programas', d: 'Plataforma que varios programas estatales usan para pagar a proveedores aprobados.' },
  { t: 'State funding ≠ curriculum', c: 'programas', d: 'El programa estatal es una capa de acceso, financiación y cumplimiento; no cambia el modelo académico de Chanak. La elegibilidad la decide siempre el programa.' },
  { t: 'Grants', c: 'programas', d: 'Subvenciones o ayudas para proyectos: requieren investigación, elegibilidad, diseño de proyecto, presupuesto, solicitud e informe final.' },
  { t: 'Project Development', c: 'programas', d: 'Diseño y gestión de un proyecto: problema, población, objetivo, actividades, resultados, calendario e indicadores.' },
  { t: 'W-9', c: 'programas', d: 'Formulario del IRS que un proveedor estadounidense entrega para que la organización lo identifique fiscalmente. Se solicita antes de procesar pagos.' },
  { t: '1099-NEC', c: 'programas', d: 'Formulario informativo de EE. UU. para pagos a no empleados. Administración determina cuándo corresponde según las reglas vigentes; el umbral se verifica cada año y no se fija en la app.' },

  // ── Personas y colaboración ──
  { t: 'Volunteer', c: 'personas', d: 'Persona que colabora sin remuneración, con rol, confidencialidad, safeguarding y código de conducta acordados. No se llama voluntario a quien trabaja bajo una estructura remunerada.' },
  { t: 'Independent Contractor', c: 'personas', d: 'Prestador de servicios con acuerdo, alcance de trabajo, compensación y entregables. La denominación del contrato no decide por sí sola la relación: se revisa el control conductual, el financiero y la relación entre las partes.' },
  { t: 'Partner', c: 'personas', d: 'Institución colaboradora (iglesia, escuela, asociación, nonprofit, empresa) con la que existe un MOU o acuerdo según la relación.' },

  // ── Protección y escalamiento ──
  { t: 'Safeguarding', c: 'proteccion', d: 'Proteger al menor y actuar ante riesgos: conducta apropiada, comunicaciones, límites, privacidad, imágenes, reuniones online e individuales, señales de riesgo, reporting y escalamiento. Nunca se investiga personalmente una situación de protección.' },
  { t: 'Escalation', c: 'proteccion', d: 'Pasar un asunto al nivel que debe decidirlo. Regla de oro: resuelve lo operativo, documenta lo relevante con hechos y fechas, y escala a Chanak Central lo que afecta a créditos, cambios de vía, seguridad, conducta grave, quejas o compromisos económicos.' },
  { t: 'Observar → Documentar → Apoyar → Comunicar → Escalar/Derivar', c: 'proteccion', d: 'La secuencia de acompañamiento educativo ante cualquier señal en un estudiante. El mentor no es psicólogo clínico: observa, documenta, apoya dentro de su rol, comunica y escala o deriva.' },
]
