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

export const CORE = ['T1.1', 'T1.2', 'T1.3', 'T1.4']
const B2 = ['T2.1', 'T2.2', 'T2.3', 'T2.4']
const B3 = ['T3.1', 'T3.2', 'T3.3', 'T3.4']
const B4 = ['T4.1', 'T4.2', 'T4.3', 'T4.4']
const B5 = ['T5.1', 'T5.2', 'T5.3']
const B6 = ['T6.1', 'T6.2', 'T6.3']
const B7 = ['T7.1', 'T7.2']
const B8 = ['T8.1', 'T8.2', 'T8.3', 'T8.4']

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
    unidad: 'Estudiante + familia + plan académico',
    mensaje: 'El Mentor acompaña al estudiante.',
    modalidades: ['Virtual', 'Presencial', 'Híbrido'],
    modulos: [...CORE, ...B2, ...B3, ...B4, ...B5, ...B6],
    sistemas: { SIS: 'completo', PORTAL: 'completo', DUAL: 'cuando corresponda', DRIVE: 'lectura' },
    domina: ['Diagnóstico', 'PEI', 'Vía curricular', 'Scope & Sequence', 'Mastery', 'Evidencias', 'Progreso', 'Intervención', 'Comunicación', 'Life Skills', 'Extensión Local'],
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
    unidad: 'Estudiantes + mentores + calidad',
    mensaje: 'El Mentor acompaña. El Coordinador supervisa que el sistema funcione.',
    modalidades: ['Virtual Coordinator', 'On-Site Coordinator'],
    modulos: [...CORE, ...B2, ...B3, ...B4, ...B5, ...B6, ...B8],
    sistemas: { SIS: 'completo + supervisión', PORTAL: 'completo', DUAL: 'completo', DRIVE: 'lectura', ESTADO: 'según asignación' },
    domina: ['Supervisión de mentores', 'Revisión de estudiantes y SIS', 'Verificación de PEI', 'Revisión de evidencia', 'Control de intervenciones', 'Revisión de expedientes', 'Reporting', 'Reuniones', 'Escalamiento', 'Relación con Chanak Central'],
    escala: ['Incidencias y casos que afectan créditos, seguridad o cumplimiento → Chanak Central'],
    documentos: ['Academic Coordinator · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Todo lo del Mentor', 'Nivel 2 (Coordinator Track)', 'SIS, Portal y Dual Diploma Portal dominados', 'People & Partnership Models'],
    nota: 'No puede supervisar una herramienta que no sabe manejar.',
  },
  {
    id: 'english_teacher',
    area: 'academico',
    nombre: 'English Teacher / Academic English Instructor',
    nombreEs: 'Profesor de inglés / Academic English',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Estudiantes asignados',
    modalidades: [],
    modulos: [...CORE, 'T5.1', ...MODULOS_CONTACTO_DIRECTO, 'T10.5'],
    sistemas: { SIS: 'estudiantes asignados, evidencia, evaluación y progreso', PORTAL: 'completo', DUAL: 'cuando corresponda', DRIVE: 'lectura' },
    domina: ['English', 'Academic English', 'Speaking', 'Reading', 'Writing', 'Vocabulary', 'Presentations', 'Research', 'Dual Diploma cuando corresponda'],
    escala: [],
    documentos: ['English Teacher · Role Profile'],
    checklist: ['Rol asignado formalmente', 'Chanak Core', 'Child & Adolescent Development', 'Safeguarding', 'SIS', 'Portal', 'Dual Portal cuando corresponda'],
    nota: 'Puede ser también Mentor si se le asigna ese rol.',
  },
  {
    id: 'lifeskills_facilitator',
    area: 'academico',
    nombre: 'Life Skills & Leadership Facilitator',
    nombreEs: 'Facilitador de Life Skills & Leadership',
    contacto: CONTACTO.DIRECTO,
    unidad: 'Grupos de estudiantes',
    modalidades: [],
    modulos: [...CORE, 'T2.3', ...MODULOS_CONTACTO_DIRECTO, 'T10.5'],
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
    modulos: [...CORE, 'T6.3', ...MODULOS_CONTACTO_DIRECTO, 'T10.5'],
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
    modulos: [...CORE, 'T3.4', 'T4.3', ...MODULOS_CONTACTO_DIRECTO, 'T10.5'],
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
//  · Mentor      → incluye a los profesores especialistas (English, Life Skills, Local Language, Assessment)
//  · Coordinador → supervisión de mentores, hubs y calidad
//  · Estratégico → todos los demás (representación, familias, alianzas, grants y proyectos, registros)
export const GRUPOS = {
  mentor: { id: 'mentor', nombre: 'Mentor', nombreEn: 'Mentor', descripcion: 'Acompaña al estudiante y a la familia. Aquí entran también los profesores especialistas.', funcionPorDefecto: 'mentor' },
  coordinator: { id: 'coordinator', nombre: 'Coordinador', nombreEn: 'Coordinator', descripcion: 'Supervisa mentores, hubs y calidad.', funcionPorDefecto: 'coordinator' },
  estrategico: { id: 'estrategico', nombre: 'Estratégico', nombreEn: 'Strategic', descripcion: 'Representación, familias y programas estatales, alianzas, grants y proyectos, registros.', funcionPorDefecto: null },
}
const GRUPO_DE_FUNCION = {
  mentor: 'mentor', english_teacher: 'mentor', lifeskills_facilitator: 'mentor', local_language: 'mentor', assessment_specialist: 'mentor',
  coordinator: 'coordinator',
  academic_records: 'estrategico', country_rep: 'estrategico', state_rep: 'estrategico', program_rep: 'estrategico',
  family_enrollment: 'estrategico', institutional_partnerships: 'estrategico', grants_projects: 'estrategico', lifeskills_project_coord: 'estrategico',
}
ROLES.forEach((r) => { r.grupo = GRUPO_DE_FUNCION[r.id] })
export const grupoDe = (funcionId) => GRUPO_DE_FUNCION[funcionId] || null
export const funcionesDe = (grupoId) => ROLES.filter((r) => r.grupo === grupoId)

export const ROL_POR_ID = Object.fromEntries(ROLES.map((r) => [r.id, r]))

export const AREAS = {
  academico: 'ACADEMIC & STUDENT SERVICES',
  crecimiento: 'GROWTH, PARTNERSHIPS & PROJECT DEVELOPMENT',
}

// Compatibilidad con la columna antigua `tipo_acceso` de perfiles.
// Cuando una persona aún no tiene roles asignados en perfil_roles, se derivan de ahí.
export function rolesDesdeTipoAcceso(tipo) {
  if (tipo === 'coordinadora') return ['mentor', 'coordinator']
  if (tipo === 'visionaria') return [] // Estratégico: sin ruta de rol; solo Core
  return ['mentor']
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
  const set = new Set(CORE)
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
