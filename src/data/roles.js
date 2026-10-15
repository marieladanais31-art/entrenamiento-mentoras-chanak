// ============================================================
// CHANAK STAFF TRAINING & OPERATIONS SYSTEM · Catálogo de roles
//
// Principio: ROLE ≠ PERSON. Un rol describe una función y un conjunto de
// responsabilidades; una misma persona puede asumir varios roles compatibles
// en las etapas iniciales, pero cada rol debe estar asignado formalmente,
// con su formación completada y respetando los límites de autoridad de cada
// función. Los permisos NUNCA se mezclan.
//
// Este catálogo es la fuente de la app. Los documentos operativos (perfiles,
// matrices, plantillas) viven en Drive → 10_PEOPLE_ROLES_TRAINING.
// ============================================================

// Contacto con menores (determina la formación obligatoria):
//  · directo   → direct_child_contact = true  → Child & Adolescent Development + Safeguarding
//                + Online Safety + Confidentiality/Data Protection obligatorios
//  · ocasional → puede coincidir con familias/estudiantes en eventos → Safeguarding Awareness
//  · ninguno   → documentación administrativa pura
export const CONTACTO = { DIRECTO: 'directo', OCASIONAL: 'ocasional', NINGUNO: 'ninguno' }

// Formación transversal de contacto directo con menores (ids de módulo)
export const MODULOS_DESARROLLO = ['T9.1', 'T9.2', 'T9.3', 'T9.4']
export const MODULOS_SAFEGUARDING = ['T6.1', 'T6.2'] // T6.1 Safeguarding · T6.2 Online safety y protección de datos
export const MODULOS_CONTACTO_DIRECTO = [...MODULOS_DESARROLLO, ...MODULOS_SAFEGUARDING]
export const MODULOS_SAFEGUARDING_AWARENESS = ['T6.1']

export const CORE = ['T1.0', 'T1.1', 'T1.2', 'T1.3', 'T1.4']
// TRONCO COMÚN (todas las personas, antes de elegir rama): identidad Chanak, los tres programas
// que opera Chanak (Off-Campus, Dual Diploma, Life Skills), safeguarding y protección de datos.
export const PROGRAMAS_CHANAK = ['T2.1', 'T2.2', 'T2.3']
export const TRONCO_COMUN = [...CORE, ...PROGRAMAS_CHANAK, 'T6.1', 'T6.2']
const B2 = ['T2.1', 'T2.2', 'T2.3', 'T2.4']
const B3 = ['T3.1', 'T3.2', 'T3.2b', 'T3.2c', 'T3.3', 'T3.4']
const B4 = ['T4.1', 'T4.2', 'T4.3', 'T4.4']
const B5 = ['T5.1', 'T5.2', 'T5.3']
const B7 = ['T7.1', 'T7.2']
const B8 = ['T8.1', 'T8.2', 'T8.3', 'T8.4']
const B10_ESTRATEGICO = ['T10.1', 'T10.2', 'T10.3']

// Sistemas y recursos
export const SISTEMAS = {
  SIS: { nombre: 'SIS', detalle: 'Student Information System: expediente, PEI, evidencias, progreso, intervenciones y alertas.' },
  PORTAL: { nombre: 'Portal', detalle: 'Portal educativo Chanak: recursos, guías curriculares, Life Skills, Extensión Local, diagnósticos y manuales.' },
  DUAL: { nombre: 'Dual Diploma Portal', detalle: 'Estudiante, Route Plan, materias, créditos, trabajo pendiente y evidencias del Dual Diploma.' },
  DRIVE: { nombre: 'Drive', detalle: 'Carpeta oficial CHANAK_DOCUMENTOS_2026-2027_FINAL (acceso interno según rol).' },
  ESTADO: { nombre: 'State Program resources', detalle: 'Recursos de programas estatales de EE. UU. (Florida EMA, Alabama CHOOSE y los que estén en proceso). Uso interno de coordinación/administración.' },
}

// Cada rol activa: módulos obligatorios, sistemas, documentos y checklist de permisos.
// `modulos`: ids de módulo ya existentes en la app. `rutasPendientes`: rutas del sistema que
// se incorporan en entregas posteriores (se muestran como «en preparación», nunca como 100 %).
export const ROLES = [
  // ─────────── ACADEMIC & STUDENT SERVICES ───────────
  {
    id: 'mentor',
    area: 'academico',
    nombre: 'Academic Mentor',
    nombreEs: 'Mentor Académico',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Estudiante + familia + plan académico (Off-Campus y Dual Diploma)',
    mensaje: 'El Mentor acompaña al estudiante.',
    modalidades: ['Virtual'],
    modulos: [...TRONCO_COMUN, ...B3, ...B4, ...B5],
    sistemas: { SIS: 'completo', PORTAL: 'completo', DUAL: 'cuando corresponda', DRIVE: 'lectura' },
    domina: ['Diagnóstico', 'PEI', 'Vía curricular', 'Scope & Sequence', 'Mastery', 'Evidencias', 'Progreso', 'Intervención', 'Comunicación', 'Off-Campus (Homeschool Guiado)', 'Dual Diploma'],
    escala: ['Créditos, cambios de vía, seguridad, conducta grave, quejas o compromisos económicos → Chanak Central'],
    documentos: ['Academic Mentor · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Core completado', 'Child & Adolescent Development', 'Safeguarding', 'Online Safety y protección de datos', 'SIS Competency', 'Portal Competency'],
  },
  {
    id: 'coordinator',
    area: 'academico',
    nombre: 'Academic Coordinator',
    nombreEs: 'Coordinador Académico',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Equipo de mentores, profesores de inglés y Life Skills · Off-Campus y Dual Diploma',
    mensaje: 'El Mentor acompaña. El Coordinador supervisa que el sistema funcione.',
    modalidades: ['Virtual'],
    modulos: [...TRONCO_COMUN, ...B3, ...B4, ...B5, ...B8],
    sistemas: { SIS: 'completo + supervisión', PORTAL: 'completo', DUAL: 'completo', DRIVE: 'lectura', ESTADO: 'según asignación' },
    domina: ['Supervisión de mentores', 'Revisión de estudiantes y SIS', 'Verificación de PEI', 'Revisión de evidencia', 'Control de intervenciones', 'Revisión de expedientes', 'Reporting', 'Reuniones', 'Clases de inglés y Life Skills', 'Escalamiento', 'Relación con Chanak Central'],
    escala: ['Incidencias y casos que afectan créditos, seguridad o cumplimiento → Chanak Central'],
    documentos: ['Academic Coordinator · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Todo lo del Mentor', 'Nivel 2 (Coordinator Track)', 'SIS, Portal y Dual Diploma Portal dominados'],
    nota: 'No puede supervisar una herramienta que no sabe manejar.',
  },
  {
    id: 'partner_director',
    area: 'academico',
    nombre: 'Partner School Director',
    nombreEs: 'Director de institución partner',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Una escuela o institución con convenio vigente',
    modalidades: ['Virtual', 'Presencial', 'Híbrido'],
    requiereAlcance: ['territorio', 'programa'],
    modulos: [...TRONCO_COMUN, 'T2.4', ...B3, ...B4, ...B5, 'T6.3', ...B8],
    sistemas: {
      SIS: 'perfil Admin limitado a su institución',
      PORTAL: 'recursos y seguimiento de su institución',
      DUAL: 'supervisión de estudiantes y docentes de su institución cuando corresponda',
      DRIVE: 'convenio, manuales e informes autorizados',
    },
    domina: ['Convenio vigente', 'Programas contratados', 'Equipo asignado', 'Incorporación de estudiantes', 'Supervisión académica', 'Indicadores e informes', 'Incidencias', 'Renovación y continuidad'],
    escala: ['Créditos finales, transcripts, precios, cambios contractuales, seguridad o comunicación pública → Chanak Central'],
    noPuede: ['Ver otras instituciones', 'Modificar precios o convenio', 'Emitir créditos o transcripts finales', 'Crear programas no autorizados'],
    documentos: ['Partner School Director · Role Profile', 'Convenio institucional aplicable', 'Guía de coordinación de institución partner'],
    checklist: ['Institución y convenio asignados', 'Todo lo del Coordinador', 'SIS Admin de institución dominado', 'Dual Diploma cuando corresponda', 'Protección de menores y datos'],
    nota: 'El perfil Admin del SIS queda restringido a la institución asignada. Si el director delega la coordinación diaria, completa la inducción de dirección; quien ejerza como coordinador realiza la ruta completa de 300 h.',
  },
  {
    id: 'english_teacher',
    area: 'academico',
    nombre: 'English Teacher / Academic English Instructor',
    nombreEs: 'Profesor de inglés / Academic English',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Clases de inglés · Off-Campus y Dual Diploma',
    requisito: 'Nivel mínimo: B2–C1 para inglés general; C1–C2 para Dual Diploma.',
    modalidades: ['Virtual'],
    modulos: [...TRONCO_COMUN, 'T4.2', 'T4.3', 'T5.1', 'T5.3', ...MODULOS_CONTACTO_DIRECTO, 'T10.5'],
    sistemas: { SIS: 'estudiantes asignados, evidencia, evaluación y progreso', PORTAL: 'completo', DUAL: 'cuando corresponda', DRIVE: 'lectura' },
    domina: ['English', 'Academic English', 'Speaking', 'Reading', 'Writing', 'Vocabulary', 'Presentations', 'Research', 'Dual Diploma cuando corresponda'],
    escala: [],
    documentos: ['English Teacher · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Child & Adolescent Development', 'Safeguarding', 'SIS', 'Portal', 'Dual Portal cuando corresponda'],
    nota: 'Puede ser también Mentor si se le asigna ese rol.',
  },
  {
    id: 'academic_tutor',
    area: 'academico',
    nombre: 'Academic Tutor',
    nombreEs: 'Tutor académico',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Estudiantes y materias asignadas',
    modalidades: ['Virtual', 'Presencial', 'Híbrido'],
    modulos: [...CORE, 'T3.1', 'T3.2', 'T4.1', 'T4.2', 'T5.1', ...MODULOS_CONTACTO_DIRECTO],
    sistemas: { SIS: 'estudiantes asignados, evidencia y progreso', PORTAL: 'recursos de la materia', DUAL: 'cuando corresponda', DRIVE: 'lectura' },
    domina: ['Tutoría individual o grupal', 'Plan de apoyo', 'Práctica guiada', 'Evidencias', 'Seguimiento del progreso', 'Alertas e intervención'],
    escala: ['Cambios de vía, créditos, diagnóstico, seguridad o acuerdos con la familia → Mentor/Coordinador'],
    documentos: ['Academic Tutor · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Child & Adolescent Development', 'Safeguarding', 'SIS', 'Portal', 'Dual Portal cuando corresponda'],
    nota: 'Accede únicamente a los estudiantes y materias asignados. Puede asumir también el rol Mentor mediante asignación separada.',
  },
  {
    id: 'lifeskills_facilitator',
    area: 'academico',
    nombre: 'Life Skills & Leadership Facilitator',
    nombreEs: 'Facilitador de Life Skills & Leadership',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Clases de Life Skills · grupos 12–15 (Seedling + Explorer) y 16–17 (Builder + Launch)',
    modalidades: ['Virtual'],
    modulos: [...TRONCO_COMUN, 'T4.2', 'T5.1', 'T5.3', ...MODULOS_CONTACTO_DIRECTO, 'T10.5'],
    sistemas: { PORTAL: 'completo', SIS: 'asistencia/progreso/evidencia cuando corresponda', DRIVE: 'lectura' },
    domina: ['Identidad', 'Comunicación', 'Liderazgo', 'Teamwork', 'Decisiones', 'Hábitos', 'Gestión del tiempo', 'Finanzas personales', 'Empleabilidad, CV y entrevistas', 'Emprendimiento', 'Ciudadanía digital', 'Vocación y proyecto de vida'],
    escala: [],
    documentos: ['Life Skills & Leadership Facilitator · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Psychology/Development', 'Safeguarding', 'Portal', 'SIS cuando corresponda'],
  },
  {
    id: 'local_language',
    area: 'academico',
    nombre: 'Local Language Extension & English Coordinator',
    nombreEs: 'Coordinador de Extensión de Lengua Local e inglés',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Extensión Local (20 %) y lenguas locales',
    modalidades: [],
    modulos: [...TRONCO_COMUN, 'T6.3', 'T4.2', 'T5.1', 'T5.3', ...MODULOS_CONTACTO_DIRECTO, 'T10.5'],
    sistemas: { PORTAL: 'completo', SIS: 'estudiantes asignados', DRIVE: 'lectura' },
    domina: ['Extensión Local', 'Lenguas locales', 'Coordinación especializada'],
    escala: [],
    documentos: ['Local Language Extension · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Child & Adolescent Development', 'Safeguarding', 'Portal'],
  },
  {
    id: 'assessment_specialist',
    area: 'academico',
    nombre: 'Educational Assessment Specialist',
    nombreEs: 'Especialista en Evaluación Diagnóstica Educativa',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Servicios educativos NO clínicos de evaluación',
    modalidades: [],
    modulos: [...TRONCO_COMUN, 'T3.4', 'T4.1', 'T4.2', 'T4.3', 'T5.1', ...MODULOS_CONTACTO_DIRECTO, 'T10.5'],
    sistemas: { SIS: 'resultado diagnóstico, aporte al PEI, evidencia, recomendaciones', PORTAL: 'diagnósticos', DRIVE: 'lectura' },
    domina: ['Academic Diagnostic / Achievement Assessment', 'Learning Skills / Educational Screening', 'Social-Emotional / Student Well-Being Screening (límites educativos)'],
    escala: ['Cuando se necesita evaluación clínica: REFER TO LICENSED PROFESSIONAL'],
    documentos: ['Educational Assessment Specialist · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Child & Adolescent Development', 'Safeguarding', 'Límites no clínicos entendidos'],
    nota: 'No se denomina automáticamente «Psychologist». Puede ser psicopedagogo, profesional educativo cualificado, psicólogo cuando corresponda o especialista autorizado según la prueba.',
  },
  {
    id: 'academic_records',
    area: 'academico',
    nombre: 'Academic Records / SIS',
    nombreEs: 'Registros académicos / SIS',
    contacto: CONTACTO.NINGUNO,
    unidad: 'Expedientes, créditos y transcripts',
    modalidades: [],
    modulos: [...CORE, 'T4.4', 'T5.1', 'T6.2', 'T10.4'],
    sistemas: { SIS: 'registros académicos', DUAL: 'registros relevantes al Dual', DRIVE: 'lectura' },
    domina: ['Expedientes', 'Credit Audit', 'Transcript'],
    escala: [],
    documentos: ['Academic Records · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Protección de datos', 'SIS', 'Dual Portal relevante'],
  },

  // ─────────── GROWTH, PARTNERSHIPS & PROJECT DEVELOPMENT ───────────
  {
    id: 'strategic_general',
    area: 'crecimiento',
    nombre: 'Strategic Development',
    nombreEs: 'Desarrollo Estratégico',
    contacto: CONTACTO.OCASIONAL,
    unidad: 'Mercados, fondos, alianzas y proyectos según asignación',
    modalidades: [],
    modulos: [...TRONCO_COMUN, 'T2.4', ...B7, ...B10_ESTRATEGICO],
    sistemas: { DRIVE: 'según asignación', ESTADO: 'según territorio o programa' },
    domina: ['Apertura de mercado', 'ESA y fondos estatales de EE. UU.', 'Programas EducaFe (inactivos hasta febrero 2027)', 'Google Ads y difusión', 'Grants', 'Empresas y ONG', 'Iglesias y alianzas comunitarias'],
    escala: ['Precios, contratos, publicaciones de pago, solicitudes y compromisos institucionales → Chanak Central'],
    documentos: ['Strategic Operating Guide', '30-Day Market Entry Plan', 'Grant Opportunity Sheet'],
    checklist: ['Rol asignado formalmente', 'Territorio o proyecto indicado', 'Chanak Core', 'Límites de autoridad', 'Guía operativa estratégica'],
  },
  {
    id: 'country_rep',
    area: 'crecimiento',
    nombre: 'Country Representative',
    nombreEs: 'Representante de país',
    contacto: CONTACTO.OCASIONAL,
    unidad: 'País (ej.: México)',
    modalidades: [],
    requiereAlcance: ['territorio'],
    modulos: [...CORE, ...B2, 'T6.1', 'T10.1'],
    sistemas: { DRIVE: 'lectura', PORTAL: 'lectura' },
    domina: ['Market Development & Representation', '30-Day Market Entry Plan', 'Programas y tarifas'],
    escala: [],
    documentos: ['Representative · Role Profile', 'Country Brief Template'],
    checklist: ['Rol asignado formalmente', 'Territorio indicado en la autorización', 'Chanak Core', 'Safeguarding Awareness', '30-Day Market Entry Plan'],
  },
  {
    id: 'state_rep',
    area: 'crecimiento',
    nombre: 'State Representative',
    nombreEs: 'Representante de estado',
    contacto: CONTACTO.OCASIONAL,
    unidad: 'Estado (ej.: Alabama)',
    modalidades: [],
    requiereAlcance: ['territorio'],
    modulos: [...CORE, ...B2, ...B7, 'T6.1', 'T10.1'],
    sistemas: { DRIVE: 'lectura', ESTADO: 'según asignación' },
    domina: ['Market Development & Representation', 'Programas estatales: Approved / Pending / Planned'],
    escala: [],
    documentos: ['Representative · Role Profile', 'State Brief Template'],
    checklist: ['Rol asignado formalmente', 'Territorio indicado en la autorización', 'Chanak Core', 'Safeguarding Awareness', '30-Day Market Entry Plan'],
  },
  {
    id: 'program_rep',
    area: 'crecimiento',
    nombre: 'Program Representative',
    nombreEs: 'Representante de programa',
    contacto: CONTACTO.OCASIONAL,
    unidad: 'Programa (ej.: Dual Diploma, EMA, CHOOSE, Life Skills)',
    modalidades: [],
    requiereAlcance: ['territorio', 'programa'],
    modulos: [...CORE, ...B2, 'T6.1', 'T10.1'],
    sistemas: { DRIVE: 'lectura', ESTADO: 'si el programa es estatal' },
    domina: ['Market Development & Representation', 'Programa asignado'],
    escala: [],
    documentos: ['Representative · Role Profile', 'Program Launch Template'],
    checklist: ['Rol asignado formalmente', 'Territorio y programa indicados en la autorización', 'Chanak Core', 'Safeguarding Awareness', '30-Day Market Entry Plan'],
    nota: 'Representar un programa NO da autoridad sobre todos los programas.',
  },
  {
    id: 'family_enrollment',
    area: 'crecimiento',
    nombre: 'Family Enrollment & State Programs Advisor',
    nombreEs: 'Asesor de matrícula familiar y programas estatales',
    contacto: CONTACTO.OCASIONAL,
    unidad: 'Leads, familias y cartera',
    modalidades: [],
    modulos: [...CORE, 'T2.1', 'T2.2', 'T5.3', ...B7, 'T6.1', 'T6.2', 'T10.1', 'T10.4'],
    sistemas: { SIS: 'solo módulo de matrícula (tutor, documentos, estado)', ESTADO: 'según asignación', DRIVE: 'lectura' },
    domina: ['Leads', 'Llamadas y reuniones', 'Orientación', 'Matrícula y documentación', 'Onboarding', 'Seguimiento', 'Cartera', 'Renovación', 'Florida EMA', 'Alabama CHOOSE', 'Reglas de comunicación', 'Approved / Pending / Planned'],
    escala: ['Preguntas sobre pagos con fondos estatales → Chanak Administration'],
    documentos: ['Family Enrollment · Role Profile', 'State Program Service Matrix'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Safeguarding Awareness', 'Estados Approved / Pending / Planned dominados'],
    nota: 'No tiene acceso académico completo al SIS.',
  },
  {
    id: 'institutional_partnerships',
    area: 'crecimiento',
    nombre: 'Institutional Partnerships Representative',
    nombreEs: 'Representante de alianzas institucionales',
    contacto: CONTACTO.OCASIONAL,
    unidad: 'Escuelas, iglesias, ministerios, asociaciones y academias',
    modalidades: [],
    modulos: [...CORE, 'T2.2', 'T2.4', 'T6.1', 'T10.1', 'T10.3'],
    sistemas: { DRIVE: 'lectura' },
    domina: ['Dual Diploma institucional', 'Certification', 'PLC', 'Precios', 'Contratos', 'Presentaciones'],
    escala: ['Cualquier precio, firma, acreditación o autorización de sede → Chanak Central'],
    noPuede: ['Alterar precios', 'Firmar por Chanak', 'Prometer acreditación', 'Otorgar autorización de sede'],
    documentos: ['Institutional Partnerships · Role Profile', 'Partner / Alliance decision guide'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Safeguarding Awareness', 'Límites de autoridad entendidos'],
    nota: 'Una alianza NO crea automáticamente una sede Chanak.',
  },
  {
    id: 'grants_projects',
    area: 'crecimiento',
    nombre: 'Grants & Project Development',
    nombreEs: 'Grants y desarrollo de proyectos',
    contacto: CONTACTO.NINGUNO,
    unidad: 'Subvenciones y proyectos',
    modalidades: [],
    modulos: [...CORE, 'T10.2', 'T10.3'],
    sistemas: { DRIVE: 'según asignación' },
    domina: ['Grant Research', 'Eligibility', 'Project Design', 'Budget', 'Application', 'Reporting'],
    escala: [],
    documentos: ['Grants & Project Development · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Grants & Project Development Track'],
    nota: 'Ruta administrativa separada: no forma parte del Mentor 180 h. Safeguarding Awareness si su función puede llevarlo a eventos o contacto ocasional.',
  },
  {
    id: 'lifeskills_project_coord',
    area: 'crecimiento',
    nombre: 'Life Skills Project Coordinator',
    nombreEs: 'Coordinador de proyectos Life Skills',
    contacto: CONTACTO.OCASIONAL,
    unidad: 'Proyectos comunitarios Life Skills (p. ej., piloto de 4 semanas)',
    modalidades: [],
    modulos: [...CORE, 'T2.3', 'T6.1', 'T6.2', 'T10.2'],
    sistemas: { PORTAL: 'completo', DRIVE: 'según asignación' },
    domina: ['Registro', 'Consentimientos', 'Asistencia', 'Materiales', 'Facilitadores', 'Evaluación pre/post', 'Resultados', 'Evidencia', 'Presupuesto', 'Informe a grant'],
    escala: [],
    documentos: ['Life Skills Project Coordinator · Role Profile', 'Life Skills 4-Week Pilot Template'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Safeguarding', 'Ruta Grants & Project Development'],
    nota: 'Si en el proyecto tiene contacto regular con menores, el administrador debe marcarlo como contacto directo.',
  },
]

// ─── 3 ROLES DE FORMACIÓN ───
// Decisión de dirección (oct 2026): la formación se organiza en solo tres roles. Los 14 perfiles
// detallados de arriba son FUNCIONES dentro de uno de esos roles (cada función conserva sus
// módulos, sistemas, límites y checklist). Una persona puede tener varios roles compatibles.
//  · Mentor      → Mentor Off-Campus / Dual Diploma, Profesor de inglés, Facilitador de Life Skills
//  · Coordinador → supervisión de mentores, clases de inglés y Life Skills; Off-Campus y Dual Diploma
// Mentor y Coordinador cubren la operación Chanak (Off-Campus, Dual Diploma, inglés, Life Skills,
// Extensión Local y evaluación educativa; director de institución partner dentro de Coordinador).
// academic_tutor queda fuera de la formación 2026–2027 (sin grupo: no se elige ni se asigna).
//
// ACCESO: el tronco común y la rama Mentor son libres (cualquiera puede entrar).
// Coordinador lo confirma Dirección Académica; Estratégico, Dirección de Operaciones y Alianzas (Elías).
//  · Estratégico → todos los demás (representación, familias, alianzas, grants y proyectos, registros)
export const GRUPOS = {
  mentor: { id: 'mentor', icono: '👩‍🏫', nombre: 'Mentor', nombreEn: 'Mentor', descripcion: 'Acompañamiento integral a familias y estudiantes de Off-Campus y Dual Diploma desde su inicio. Incluye tutoría pedagógica, clases de inglés y de Life Skills, Extensión Local y evaluación educativa.', funcionPorDefecto: 'mentor', acceso: 'libre' },
  coordinator: { id: 'coordinator', icono: '🎯', nombre: 'Coordinador', nombreEn: 'Coordinator', descripcion: 'Supervisa a mentores y especialistas (SIS, PEI, evidencias, calidad e incidencias de Off-Campus y Dual Diploma). Incluye director de institución partner.', funcionPorDefecto: 'coordinator', acceso: 'confirmacion', confirma: 'Dirección Académica' },
  estrategico: { id: 'estrategico', icono: '🤝', nombre: 'Estratégico', nombreEn: 'Strategic', descripcion: 'Grants (subvenciones), programas de becas y fondos estatales de EE. UU. (ESA), alianzas institucionales y representación territorial por país (España, México, Panamá, USA; EducaFe inactivo hasta feb. 2027).', funcionPorDefecto: 'strategic_general', acceso: 'confirmacion', confirma: 'Dirección de Operaciones y Alianzas (Elías Vidal)' },
}
const GRUPO_DE_FUNCION = {
  mentor: 'mentor', english_teacher: 'mentor', lifeskills_facilitator: 'mentor', local_language: 'mentor', assessment_specialist: 'mentor',
  coordinator: 'coordinator', partner_director: 'coordinator',
  strategic_general: 'estrategico', academic_records: 'estrategico', country_rep: 'estrategico', state_rep: 'estrategico', program_rep: 'estrategico',
  family_enrollment: 'estrategico', institutional_partnerships: 'estrategico', grants_projects: 'estrategico', lifeskills_project_coord: 'estrategico',
}
ROLES.forEach((r) => { r.grupo = GRUPO_DE_FUNCION[r.id] })
export const grupoDe = (funcionId) => GRUPO_DE_FUNCION[funcionId] || null
export const funcionesDe = (grupoId) => ROLES.filter((r) => r.grupo === grupoId)
// Funciones de la formación 2026–2027 (las que tienen grupo)
export const ROLES_VIGENTES = ROLES.filter((r) => r.grupo)

// Especialidades que una persona puede elegir dentro de cada rama (pantalla «Elige tu rama»)
export const ESPECIALIDADES = {
  mentor: [
    { id: 'mentor', nombre: 'Mentor Off-Campus / Dual Diploma', detalle: 'Acompaña el plan académico: diagnóstico, PEI, vía curricular, dominio, evidencias y familia.' },
    { id: 'english_teacher', nombre: 'Profesor/a de inglés', detalle: 'Clases de inglés y Academic English. Nivel B2–C1 (inglés general) o C1–C2 (Dual Diploma).' },
    { id: 'lifeskills_facilitator', nombre: 'Facilitador/a de Life Skills', detalle: 'Clases semanales de Life Skills & Leadership por grupos de edad (12–15 y 16–17).' },
    { id: 'local_language', nombre: 'Extensión Local', detalle: 'Asignaturas del 20 % local (Lengua, Historia, Geografía con competencias LOMLOE), sobre todo en modalidad presencial.' },
    { id: 'assessment_specialist', nombre: 'Especialista en evaluación educativa', detalle: 'Diagnóstico académico y screening educativo NO clínico; aporta al PEI y deriva a profesionales cuando corresponde.' },
  ],
  coordinator: [
    { id: 'coordinator', nombre: 'Coordinador/a Off-Campus y Dual Diploma', detalle: 'Requiere la rama Mentor. Supervisa mentores, especialistas y clases.' },
    { id: 'partner_director', nombre: 'Director/a de institución partner', detalle: 'Dirige una escuela o institución con convenio vigente; SIS limitado a su institución.' },
  ],
  estrategico: [
    {
      id: 'strategic_general',
      nombre: 'Estratégico',
      detalle: 'Grants (subvenciones), programas de becas y fondos estatales (ESA), alianzas institucionales y representación oficial por país. Requiere completar el formulario de postulación.',
    },
  ],
}

// Solicitud de rama guardada por la persona (en compromisos_formacion.funciones)
export const TIPO_SOLICITUD = 'solicitud_rama'
export function solicitudDe(funciones) {
  if (!Array.isArray(funciones)) return null
  const s = funciones.find((f) => f && typeof f === 'object' && f.tipo === TIPO_SOLICITUD)
  if (!s || !Array.isArray(s.funciones)) return null
  const validas = s.funciones.filter((id) => ROL_POR_ID_INTERNO[id] && GRUPO_DE_FUNCION[id])
  return validas.length ? { ...s, funciones: validas } : null
}
const ROL_POR_ID_INTERNO = Object.fromEntries(ROLES.map((r) => [r.id, r]))

export const ROL_POR_ID = Object.fromEntries(ROLES.map((r) => [r.id, r]))

export const AREAS = {
  academico: 'ACADEMIC & STUDENT SERVICES',
  crecimiento: 'GROWTH, PARTNERSHIPS & PROJECT DEVELOPMENT',
}

// Compatibilidad con la columna antigua `tipo_acceso` de perfiles.
// Cuando una persona aún no tiene roles asignados en perfil_roles, se derivan de ahí.
export function rolesDesdeTipoAcceso(tipo) {
  if (tipo === 'coordinadora') return ['mentor', 'coordinator']
  if (tipo === 'visionaria') return ['strategic_general']
  return ['mentor']
}

// Roles efectivos de una persona:
//  1. los asignados formalmente por administración (perfil_roles);
//  2. si no tiene ninguno, la rama que ella misma eligió (provisional hasta que dirección la valide);
//  3. si tampoco eligió, ninguno: solo ve el tronco común y la pantalla «Elige tu rama».
// ¿La función se puede activar sin confirmación? (tronco común y rama Mentor: sí)
export const accesoLibre = (funcionId) => GRUPOS[grupoDe(funcionId)]?.acceso === 'libre'

// Roles efectivos = asignados formalmente + funciones Mentor elegidas por la persona (acceso libre).
// Coordinador y Estratégico elegidos quedan en `pendientes` hasta que la dirección correspondiente
// los confirme (asignación en Administración → Personas).
export function rolesEfectivos(asignados = [], solicitud = null) {
  const elegidas = solicitud?.funciones || []
  const roles = [...new Set([...asignados, ...elegidas.filter(accesoLibre)])]
  const pendientes = elegidas.filter((f) => !accesoLibre(f) && !asignados.includes(f))
  const origen = asignados.length ? 'asignados' : roles.length ? 'solicitud' : 'ninguno'
  return { roles, pendientes, origen }
}

// ¿La persona tiene contacto directo con menores?
// `override` (columna perfiles.contacto_menores): true fuerza «directo», false lo desactiva,
// null/undefined = se deduce de los roles asignados.
export function tieneContactoDirecto(rolesIds = [], override = null) {
  if (override === true) return true
  if (override === false) return false
  return rolesIds.some((id) => ROL_POR_ID[id]?.contacto === CONTACTO.DIRECTO)
}

export function tieneContactoOcasional(rolesIds = []) {
  return rolesIds.some((id) => ROL_POR_ID[id]?.contacto === CONTACTO.OCASIONAL)
}

// Módulos obligatorios de una persona = unión de los módulos de sus roles
// + (si contacto directo) Child & Adolescent Development, Safeguarding, Online Safety y datos
// + (si contacto ocasional) Safeguarding Awareness. Siempre incluye Chanak Core.
export function modulosObligatorios(rolesIds = [], override = null) {
  const set = new Set(TRONCO_COMUN)
  for (const id of rolesIds) (ROL_POR_ID[id]?.modulos || []).forEach((m) => set.add(m))
  if (tieneContactoDirecto(rolesIds, override)) MODULOS_CONTACTO_DIRECTO.forEach((m) => set.add(m))
  else if (tieneContactoOcasional(rolesIds)) MODULOS_SAFEGUARDING_AWARENESS.forEach((m) => set.add(m))
  return [...set]
}

export function sistemasDe(rolesIds = []) {
  const out = {}
  for (const id of rolesIds) {
    for (const [k, v] of Object.entries(ROL_POR_ID[id]?.sistemas || {})) {
      out[k] = out[k] ? `${out[k]} · ${v}` : v
    }
  }
  return out
}

// ════════════════════════════════════════════════════════════
// PROYECTOS EN PRIORIDAD (ÁREA ESTRATÉGICA)
// ════════════════════════════════════════════════════════════
export const PROYECTOS_PRIORIDAD = [
  {
    id: 'grants_plataformas',
    titulo: 'Grants para Plataformas',
    area: 'Financiamiento y Tecnología',
    descripcion: 'Convocatorias públicas, fundaciones y fondos tecnológicos para financiar infraestructura y plataformas educativas.',
    requisitos: ['Experiencia en redacción de subvenciones (Grant Writing)', 'Comprensión de presupuestos y justificación de impacto'],
  },
  {
    id: 'sitio_tarragona',
    titulo: 'Atención de Familias y Visión de Partner Presencial (Tarragona)',
    area: 'Expansión España (Cataluña)',
    descripcion: 'Atención de familias, visión de partner y desarrollo de sede o Learning Center presencial en Tarragona.',
    requisitos: ['Disponibilidad en Cataluña / Tarragona', 'Gestión de acuerdos de cesión/alquiler compartido y entidades locales'],
  },
  {
    id: 'matriz_estudiantes_florida',
    titulo: 'Matriz con Estudiantes Presenciales en Florida y Programas ESA (Karen Pujols)',
    area: 'Operaciones EE. UU. (Encargada de todos los ESA)',
    descripcion: 'Consolidación de la cartera presencial de estudiantes en Florida bajo registro FLDOE #134620 y gestión integral de becas y programas ESA en EE. UU.',
    requisitos: ['Residencia o contacto operativo en Florida / EE. UU.', 'Dominio de plataformas ESA (EMA, ClassWallet, Odyssey) y atención a familias'],
  },
  {
    id: 'lifeskills_walmart',
    titulo: 'Life Skills · Walmart Spark Gold',
    area: 'Proyecto Social y Empleabilidad',
    descripcion: 'Proyecto de habilidades para la vida y liderazgo juvenil presentado a convocatorias y fondos corporativos (Walmart Spark / Candid Gold).',
    requisitos: ['Facilitación de jóvenes (12-17 años)', 'Medición de indicadores pre/post de empleabilidad y carácter'],
  },
  {
    id: 'curriculum_propio',
    titulo: 'Diseño y Desarrollo de Currículum Físico Propio',
    area: 'Desarrollo Académico Editorial',
    descripcion: 'Creación de unidades didácticas y materiales físicos impresos con identidad pedagógica y cosmovisión propia de Chanak.',
    requisitos: ['Diseño curricular e instruccional K–12', 'Alineación de estándares y elaboración de cuadernillos/worktexts'],
  },
  {
    id: 'alianzas_espana',
    titulo: 'Establecimiento de Alianzas en España',
    area: 'Expansión Institucional',
    descripcion: 'Acuerdos de colaboración con iglesias, colegios, asociaciones de familias y entidades comunitarias en todo el territorio español.',
    requisitos: ['Capacidad de interlocución institucional', 'Residencia o red activa de contactos en España'],
  },
]

// ════════════════════════════════════════════════════════════
// REQUISITOS OBLIGATORIOS POR RAMA Y EXPEDIENTE DE PERSONAL
// ════════════════════════════════════════════════════════════
export const REQUISITOS_RAMAS = {
  comunes: {
    titulo: 'Requisitos Obligatorios del Expediente Digital Único de Personal (Employee Compliance File)',
    subtitulo: 'Obligatorio antes de iniciar cualquier función o contacto con estudiantes y familias',
    requisitos: [
      { icono: '🪪', titulo: 'Documento de Identificación Oficial', detalle: 'Copia legible del Pasaporte vigente o DNI/cédula del país de residencia.' },
      { icono: '🎓', titulo: 'Hoja de Vida y Titulación', detalle: 'CV actualizado con títulos universitarios o certificaciones profesionales traducidas/homologadas.' },
      { icono: '📞', titulo: 'Referencias Verificadas', detalle: 'Comprobación de experiencia previa y referencias personales y profesionales directas.' },
      { icono: '🛡️', titulo: 'Certificado de Antecedentes y Salvaguarda', detalle: 'Certificado negativo de delitos sexuales/penales y aprobación del módulo de Safeguarding.' },
      { icono: '📜', titulo: 'Certificado TrainUp Chanak', detalle: 'Superación del Tronco Común (60/20/20, Mastery Learning y cosmovisión bíblica).' },
    ],
  },
  mentor: {
    titulo: 'Requisitos de la Rama Mentor (Acompañamiento a Estudiantes y Familias)',
    requisitos: [
      { icono: '👪', titulo: 'Acompañamiento Integral a Familias', detalle: 'Capacidad de acogida, orientación familiar inicial, tutoría pedagógica y seguimiento continuo en Off-Campus y Dual Diploma.' },
      { icono: '📚', titulo: 'Formación Docente o Especialidad', detalle: 'Titulación en educación o dominio acreditado de la materia o nivel curricular asignado.' },
      { icono: '🗣️', titulo: 'Docentes de Inglés (Academic English)', detalle: 'Nivel certificado mínimo B2–C1 para inglés general o C1–C2 para Dual Diploma / Academic English.' },
      { icono: '🎯', titulo: 'Facilitador de Life Skills & Leadership', detalle: 'Experiencia en dinamización grupal de jóvenes (12–15 y 16–17) con enfoque bíblico y práctico.' },
      { icono: '📝', titulo: 'Evaluación Diagnóstica No Clínica', detalle: 'Formación pedagógica para aplicar screening y diagnósticos académicos, con derivación externa ante sospechas clínicas.' },
    ],
  },
  coordinator: {
    titulo: 'Requisitos de la Rama Coordinador (Supervisión y Calidad Académica)',
    requisitos: [
      { icono: '👩‍🏫', titulo: 'Formación Previa de Mentor', detalle: 'Haber completado o estar cursando la formación de Mentor (nadie supervisa lo que no sabe operar).' },
      { icono: '🖥️', titulo: 'Dominio de los 3 Sistemas Chanak', detalle: 'Manejo solvente del Student Information System (SIS), Portal Educativo y Dual Diploma Portal.' },
      { icono: '🔍', titulo: 'Supervisión de PEI y Evidencias', detalle: 'Auditoría rigurosa de Planes Educativos Individualizados y verificación del umbral de dominio (≥80%).' },
      { icono: '🏫', titulo: 'Coordinación Presencial A.C.E.', detalle: 'Para sedes con currículo A.C.E., exige por lo menos 1 semana de formación presencial oficial.' },
      { icono: '🤝', titulo: 'Directores de Institución Partner', detalle: 'Convenio institucional formal vigente firmado por Chanak Central y liderazgo de sede.' },
    ],
  },
  estrategico: {
    titulo: 'Requisitos de la Rama Estratégico (Grants, ESA y Expansión por País)',
    requisitos: [
      { icono: '💰', titulo: 'Grants y Convocatorias Filantrópicas', detalle: 'Capacidad de redacción formal de propuestas, análisis de elegibilidad y estructuración presupuestaria.' },
      { icono: '🏛️', titulo: 'ESA y Fondos Estatales de EE. UU.', detalle: 'Normativa de plataformas estatales (ClassWallet, Odyssey, EMA, etc.), postulación y catálogo autorizado.' },
      { icono: '🌍', titulo: 'Expansión Territorial y Alianzas por País', detalle: 'Presencia o red activa en el país o estado asignado (España, México, Panamá, USA) y alianzas con colegios e iglesias.' },
      { icono: '📍', titulo: 'Partner Presencial (Learning Hub / Sede Física)', detalle: 'Disponer de o gestionar un lugar físico adecuado para actividades y reuniones presenciales.' },
      { icono: '⚖️', titulo: 'Límites de Autoridad Institucional', detalle: 'Prohibición estricta de alterar precios, prometer acreditaciones o firmar convenios sin Chanak Central.' },
    ],
  },
}

export const REQUISITOS_MODALIDADES = {
  partner_presencial: {
    titulo: 'Alianza de Partner Presencial (Learning Center / Sede Física)',
    requisitos: [
      'Disponer de o gestionar un lugar físico adecuado para organizar reuniones y actividades con estudiantes y familias.',
      'Cumplir normas básicas de seguridad, protección de menores y seguros aplicables.',
      'Capacidad de coordinación operativa local y liderazgo de equipo.',
    ],
  },
  alianzas_institucionales: {
    titulo: 'Alianzas Institucionales, Colegios e Iglesias',
    requisitos: [
      'Red de contactos activa o capacidad de vinculación con colegios, iglesias y directivas.',
      'Habilidades de presentación institucional y respeto a los límites de autoridad Chanak.',
    ],
  },
  fondos_esa: {
    titulo: 'Expansión de Fondos Estatales y Becas (EE. UU.)',
    requisitos: [
      'Dominio de plataformas de fondos (ClassWallet, Odyssey, EMA) o capacidad de aprendizaje ágil.',
      'Apego estricto a servicios autorizados sin realizar promesas de cobertura no verificadas.',
    ],
  },
  grants_proyectos: {
    titulo: 'Grants, Subvenciones y Fondos Filantrópicos',
    requisitos: [
      'Capacidad de redacción formal, análisis de elegibilidad y estructuración presupuestaria.',
      'Seguimiento sistemático de plazos, evidencias e informes de impacto a fundaciones.',
    ],
  },
}

// ════════════════════════════════════════════════════════════
// REPRESENTANTES POR PAÍSES Y TERRITORIOS
// ════════════════════════════════════════════════════════════
export const REPRESENTANTES_PAISES = [
  {
    pais: 'España',
    estado: 'En Expansión',
    badgeTono: 'teal',
    codigo: 'ES',
    bandera: '🇪🇸',
    territorios: [
      {
        territorio: '1. Tarragona',
        representantes: ['Thiare Urzua', 'Sonsoles Bueno', 'Laura Pardo', 'Sergio Masía'],
        funcion: 'Atención de Familias y Visión de Partner Presencial',
      },
      {
        territorio: '2. Madrid – Valencia',
        representantes: ['Medalith Rosales', 'Jitu Dongardive', 'Juan Carlos'],
        funcion: 'Representantes JCUM España y Alianzas Institucionales',
      },
      {
        territorio: '3. Educafe',
        representantes: ['Asociación EducaFe (Inactiva)'],
        funcion: 'Inactivo hasta febrero 2027 · Programas, cuotas y convenios locales en pausa',
        inactivo: true,
      },
    ],
  },
  {
    pais: 'México',
    estado: 'En lanzamiento',
    badgeTono: 'teal',
    codigo: 'MX',
    bandera: '🇲🇽',
    territorios: [
      { territorio: 'Puebla', representantes: ['Karen Vidal'], funcion: 'Representación, Alianzas y Coordinación Local' },
      { territorio: 'El Carmen', representantes: ['M. Claudia Jimenez'], funcion: 'Representación, Alianzas y Familia' },
    ],
  },
  {
    pais: 'Panamá',
    estado: 'En proceso',
    badgeTono: 'gold',
    codigo: 'PA',
    bandera: '🇵🇦',
    territorios: [
      { territorio: 'Panamá (Nacional)', representantes: ['Mariela Andrade'], funcion: 'Dirección General / Representación Institucional' },
    ],
  },
  {
    pais: 'Estados Unidos (USA)',
    estado: 'Activo / Expansión de programas estatales',
    badgeTono: 'teal',
    codigo: 'US',
    bandera: '🇺🇸',
    territorios: [
      {
        territorio: 'Florida',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'Enlace Florida ESA · Step Up For Students / EMA (Home Education Instructional Program), FES-UA / PEP, Matriz Presencial (Aprobado)',
      },
      {
        territorio: 'Alabama',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'CHOOSE Act · ClassWallet Education Service Provider (ESP) (Aprobado)',
      },
      {
        territorio: 'Texas',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'TEFA (Texas Education Freedom Accounts) · Odyssey Vendor (Aprobado / Casi Seguro)',
      },
      {
        territorio: 'Wyoming',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'Wyoming ESA (Education Savings Accounts) · Education Service Provider (Aprobado)',
      },
      {
        territorio: 'Arizona',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'ADE ESA (Empowerment Scholarship Account) · Registro de Proveedor ADE (Aprobado)',
      },
      {
        territorio: 'Utah',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'Utah Fits All · Odyssey Provider (Aprobado; Life Skills, English, Tutoría, Diagnósticos)',
      },
      {
        territorio: 'New Hampshire',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'Education Freedom Account (EFA) · Education Service Provider (En proceso)',
      },
      {
        territorio: 'West Virginia',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'Hope Scholarship · Education Service Provider (En proceso)',
      },
      {
        territorio: 'Georgia',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'Georgia Promise Scholarship · Proveedor de Servicios Educativos (En proceso)',
      },
      {
        territorio: 'Louisiana',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'LA GATOR · Education Service Provider (En proceso)',
      },
      {
        territorio: 'South Carolina',
        representantes: ['Karen Pujols (Encargada de todos los ESA)'],
        funcion: 'Education Scholarship Trust Fund (ESTF) · Education Service Provider (En revisión)',
      },
    ],
  },
]

// ════════════════════════════════════════════════════════════
// USUARIOS (GESTIÓN DINÁMICA VÍA SUPABASE / RGPD COMPLIANT)
// ════════════════════════════════════════════════════════════
// Los correos y accesos se consultan dinámicamente desde la base de datos
// (tabla auth.users / public.perfiles) y no se almacenan en el repositorio.
export const USUARIOS_CONOCIDOS = []

export function obtenerEmailConocido(idOEmailONombre) {
  if (!idOEmailONombre) return ''
  return ''
}
