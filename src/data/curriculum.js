import { horasModulo } from './tiempos'

// ============================================================
// CHANAK · FORMACIÓN DE MENTORES Y COORDINADORES 2026–2027
// Estructura oficial de la ruta formativa (versión de currículo: training-2026-2027)
//
// Fuente oficial: carpeta «CHANAK_DOCUMENTOS_2026-2027_FINAL»
//   01_INSTITUCIONAL · 02_FAMILIAS · 03_INSTITUCIONES · 07_US_PROGRAMS_COMPLIANCE
//   08_ACADEMIC_POLICIES · 09_ACADEMIC_FRAMEWORK (Scope & Sequence K–12)
//
// Nivel 1 → CHANAK CERTIFIED MENTOR      · Ruta completa · 180 h; módulos base: 41.5 h de referencia
// Nivel 2 → CHANAK CERTIFIED COORDINATOR · Ruta completa · 300 h acumuladas; módulos base: 52 h de referencia
// Bloque 7 (USA State Programs) es un módulo por rol: solo para quien lo necesite.
//
// Las horas son estimaciones de actividad formativa: incluyen autoestudio, vídeo, lecturas,
// práctica, SIS, observación, evaluaciones y evidencias. No son horas de vídeo.
// ============================================================

export const VERSION_CURRICULO = 'training-2026-2027'
export const FECHA_ACTUALIZACION = '2026-10-06'

export const NIVEL_1_HORAS = 180 // meta de la ruta completa, confirmada por dirección
export const HORAS_MODULOS_N1 = 41.5 // estimación de actividades de los bloques 1–6
export const NIVEL_2_HORAS = 300 // ruta completa acumulada: Mentor + especialización
export const HORAS_MODULOS_N2 = 52 // referencia de los módulos: Nivel 1 + Bloque 8

export const FUENTES = {
  master: '01_INSTITUCIONAL · Dossier Institucional Master 2026–2027',
  offcampus: '02_FAMILIAS · Off-Campus (Homeschool Guiado)',
  dual: '02_FAMILIAS · Dual Diploma Familias',
  lifeskills: '02_FAMILIAS · Life Skills & Leadership',
  dualInst: '03_INSTITUCIONES · Dual Diploma Institucional',
  alianzas: '03_INSTITUCIONES · Alianzas Institucionales',
  plc: '03_INSTITUCIONES · Partner Learning Center (Sede afiliada)',
  curriculos: '03_INSTITUCIONES · Currículos y Vías Académicas',
  contratos: 'CONTRATOS · Adenda Acuerdo Marco y Anexo de Certificación',
  ema: '07_US_PROGRAMS_COMPLIANCE · Florida EMA Approved Service Status',
  alabama: '07_US_PROGRAMS_COMPLIANCE · Alabama CHOOSE ESP Approved Status',
  certPolicy: '08_ACADEMIC_POLICIES · Academic Certification Policy',
  creditPolicy: '08_ACADEMIC_POLICIES · Credit Recognition Policy',
  currPolicy: '08_ACADEMIC_POLICIES · Curriculum Approval Policy',
  assessPolicy: '08_ACADEMIC_POLICIES · Standardized Assessment Policy',
  statePolicy: '08_ACADEMIC_POLICIES · State-Specific Standardized Assessment Requirements',
  ss: '09_ACADEMIC_FRAMEWORK · K–12 Scope & Sequence 2026–2027',
  matrix: '09_ACADEMIC_FRAMEWORK · Florida Standards Alignment Matrix',
}


// Carpetas de la documentación oficial en Drive (CHANAK_DOCUMENTOS_2026-2027_FINAL).
// Sustituyen a los antiguos cuadernos de NotebookLM: cada módulo enlaza a la carpeta exacta.
const DRIVE = (id) => `https://drive.google.com/drive/folders/${id}`
export const CARPETA_FINAL_URL = DRIVE('1bPAuhY8-YhHBmUPpqUahXACC_bH_BqxT')
export const CARPETAS_DRIVE = {
  '10_PEOPLE_ROLES_TRAINING/08_OPERATIVA_ACADEMICA': DRIVE('1fSscAWCQ-FFGae-ocBrc6qxzxugoTZbD'),
  '01_INSTITUCIONAL': DRIVE('1KbhzvvpIgASo5koXhpAqPs3IsYgPoDuU'),
  '02_FAMILIAS': DRIVE('1szjqYrhvU72RZ08giDiISA88ftuo17PI'),
  '03_INSTITUCIONES': DRIVE('1rm_nWHq32FVyeub7cS9Cj3o7de8FWsxa'),
  'CONTRATOS': DRIVE('1TQXRC3epFE-As6aBSJQo43fu4J_muafD'),
  '04_PAISES': DRIVE('1KWPYNpFXzEQe-FAbLJaqTtP8jLj8-lKO'),
  '05_PRESENTACIONES_REUNIONES': DRIVE('1RCurkbptzoA7f72Xwzv_ubf3fo6CVEcb'),
  '06_CONTROL_DOCUMENTAL': DRIVE('14y6q-jR0oY5Y4S2TrMP89t_Ox6zQfPUl'),
  '07_US_PROGRAMS_COMPLIANCE': DRIVE('1tZuY_YSvpPe6tKzzspFeAs0muziOMXI8'),
  '07_US_PROGRAMS_COMPLIANCE/Alabama': DRIVE('1aSk889xW91VcLgDZmhRD566CwhCKx7vV'),
  '07_US_PROGRAMS_COMPLIANCE/Florida': DRIVE('1b1Zyp-tPM5BtHkFXQHCs-kIWer8GV_4I'),
  '08_ACADEMIC_POLICIES': DRIVE('1R9VnVnQLFIMmSgT5C4eSwRW-06cdbECs'),
  '09_ACADEMIC_FRAMEWORK': DRIVE('14XPRVMO0UuiqXoNh9AxCSP2giQoPNOOd'),
}
export function urlCarpeta(carpeta = '') {
  return CARPETAS_DRIVE[carpeta] || CARPETAS_DRIVE[carpeta.split('/')[0]] || CARPETA_FINAL_URL
}
// Biblioteca práctica: para qué usa cada carpeta el mentor y el coordinador.
export const BIBLIOTECA = [
  { carpeta: '01_INSTITUCIONAL', mentor: 'Presentar Chanak con exactitud: identidad, estatus, programas y qué emite Chanak.', coordinador: 'Referencia para reuniones institucionales y para corregir información pública.' },
  { carpeta: '02_FAMILIAS', mentor: 'Dossiers de Off-Campus, Dual Diploma y Life Skills para orientar a familias.', coordinador: 'Verificar que lo que se promete a las familias coincide con el dossier oficial.' },
  { carpeta: '03_INSTITUCIONES', mentor: 'Vías curriculares y diferencias entre programas.', coordinador: 'Partner Learning Center, alianzas, Dual Diploma institucional y contratos (carpeta CONTRATOS en la raíz de FINAL, uso interno).' },
  { carpeta: '04_PAISES', mentor: 'Programas y tarifas vigentes por país: la única fuente para responder sobre precios.', coordinador: 'Comprobar condiciones por país antes de cerrar acuerdos.' },
  { carpeta: '05_PRESENTACIONES_REUNIONES', mentor: 'Presentaciones listas para reuniones con familias.', coordinador: 'Presentaciones para colegios, alianzas y Partner Learning Centers.' },
  { carpeta: '06_CONTROL_DOCUMENTAL', mentor: 'Saber qué versión es la oficial (README y CHANGELOG).', coordinador: 'Control de versiones y fuentes antes de citar un documento.' },
  { carpeta: '07_US_PROGRAMS_COMPLIANCE', mentor: 'Uso interno de administración y coordinación (acceso restringido): Florida EMA, Alabama CHOOSE y programas en proceso. Los mentores estudian este contenido en la app (Bloque 7); no se envía a familias.', coordinador: 'Cumplimiento de programas estatales de EE. UU. (state funding ≠ curriculum).' },
  { carpeta: '08_ACADEMIC_POLICIES', mentor: 'Las cinco políticas académicas: certificación, créditos, currículo y evaluación.', coordinador: 'Base de toda decisión académica y de las auditorías de expedientes.' },
  { carpeta: '10_PEOPLE_ROLES_TRAINING', mentor: 'Perfiles, desarrollo infantil y safeguarding; plantillas y límites de acceso por rol.', coordinador: 'Organigrama, autoridad, modelos de personas, market entry y grants.' },
  { carpeta: '09_ACADEMIC_FRAMEWORK', mentor: 'Scope & Sequence K–12 y matrices de estándares y evaluación.', coordinador: 'Revisión de planes de estudio, créditos y evidencia por grado.' },
]

export const RECURSOS_GENERALES = [
  {
    nombre: 'SIS Chanak — Registro académico oficial (entorno de práctica)',
    url: 'https://sis.chanakacademy.org/',
    descripcion:
      'Registro oficial: matrículas, PEI, diagnóstico, notas de evaluación por dominio, boletines y transcripts. Practica solo con las cuentas de demostración.',
    demo: {
      cuentas: ['demopadre@asociacioneducafe.org', 'demoestudiante@asociacioneducafe.org'],
      clave: 'Chanak2026',
      aviso:
        'Cuentas de demostración: padre y estudiante. Practica solo con datos ficticios; no modifiques expedientes reales.',
    },
  },
  {
    nombre: 'Portal Chanak — Orientación y rutina',
    url: 'https://portal.chanakacademy.org/',
    descripcion:
      'Orienta a familias y mentores: rutina Core USA y Chanak Flex, Life Skills, Extensión Local, inglés, diagnóstico y manuales. El portal orienta; el SIS registra.',
  },
  {
    nombre: 'Web institucional Chanak International Academy',
    url: 'https://www.chanakacademy.org/',
    descripcion: 'Programas, tarifas por país y registro escolar FLDOE #134620.',
  },
  {
    nombre: 'Carpeta de Drive — Documentación oficial 2026–2027 (FINAL)',
    url: 'https://drive.google.com/drive/folders/1bPAuhY8-YhHBmUPpqUahXACC_bH_BqxT',
    descripcion:
      'Dossiers, políticas académicas, Scope & Sequence, compliance y contratos. Es la fuente oficial de esta formación (acceso interno).',
  },
]

// ─────────────────────────────────────────────────────────────
// Bloques y módulos vigentes; biblioteca audiovisual derivada del manifest.
// ─────────────────────────────────────────────────────────────
export const BLOQUES = [
  {
    id: 'B1',
    nivel: 1,
    numero: 1,
    titulo: 'CHANAK CORE · Identidad, estructura y funcionamiento',
    categoria: 'Fundamentos',
    horas: 6.5,
    modulos: [
      { id: 'T1.1', titulo: 'Identidad, misión y estructura institucional', horas: horasModulo('T1.1'), modalidad: 'Vídeo + lectura del Master', evaluacion: 'Knowledge Check', video: 'V01', fuentes: ['master'] },
      { id: 'T1.2', titulo: 'El modelo 60 / 20 / 20', horas: horasModulo('T1.2'), modalidad: 'Vídeo + lectura + práctica', evaluacion: 'Knowledge Check + caso', video: 'V02', fuentes: ['master', 'ss'] },
      { id: 'T1.3', titulo: 'Marco académico orientado al dominio', horas: horasModulo('T1.3'), modalidad: 'Vídeo + lectura + caso', evaluacion: 'Knowledge Check + caso', video: 'V03', fuentes: ['master', 'ss'] },
      { id: 'T1.4', titulo: 'Autoridad académica y límites del mentor', horas: horasModulo('T1.4'), modalidad: 'Vídeo + casos de decisión', evaluacion: 'Knowledge Check + caso', video: 'V04', fuentes: ['master', 'certPolicy', 'creditPolicy'] },
    ],
  },
  {
    id: 'B2',
    nivel: 1,
    numero: 2,
    titulo: 'Programas Chanak',
    categoria: 'Programas',
    horas: 7,
    modulos: [
      { id: 'T2.1', titulo: 'Off-Campus (Homeschool Guiado)', horas: horasModulo('T2.1'), modalidad: 'Vídeo + dossier de familias', evaluacion: 'Knowledge Check + caso', video: 'V05', fuentes: ['offcampus', 'master'] },
      { id: 'T2.2', titulo: 'Dual Diploma: rutas, créditos y homologación', horas: horasModulo('T2.2'), modalidad: 'Vídeo + dossier Dual Diploma', evaluacion: 'Knowledge Check + caso', video: 'V06', fuentes: ['dual', 'dualInst', 'creditPolicy'] },
      { id: 'T2.3', titulo: 'Life Skills & Leadership', horas: horasModulo('T2.3'), modalidad: 'Vídeo + dossier Life Skills', evaluacion: 'Knowledge Check + caso', video: 'V07', fuentes: ['lifeskills', 'ss'] },
      { id: 'T2.4', titulo: 'Partner Learning Center, Certificación Institucional y diferencias entre programas', horas: horasModulo('T2.4'), modalidad: 'Vídeo + dossiers institucionales', evaluacion: 'Knowledge Check + caso', video: 'V08', fuentes: ['alianzas', 'plc', 'certPolicy', 'contratos'] },
    ],
  },
  {
    id: 'B3',
    nivel: 1,
    numero: 3,
    titulo: 'Curriculum Pathways',
    categoria: 'Currículos',
    horas: 6.75,
    modulos: [
      { id: 'T3.1', titulo: 'A.C.E. · Reference / Preferred Curriculum Pathway', horas: horasModulo('T3.1'), modalidad: 'Vídeo + lectura + práctica', evaluacion: 'Knowledge Check + caso', video: 'V09', fuentes: ['curriculos', 'currPolicy'] },
      { id: 'T3.2', titulo: 'LIFEPAC y Christian Light Education · Reviewed Alternative Pathways', horas: horasModulo('T3.2'), modalidad: 'Vídeo + lectura comparada', evaluacion: 'Knowledge Check + caso', video: 'V10', fuentes: ['curriculos', 'currPolicy'] },
      { id: 'T3.3', titulo: 'Chanak Flex y selección de vía curricular', horas: horasModulo('T3.3'), modalidad: 'Vídeo + caso de decisión', evaluacion: 'Knowledge Check + caso', video: 'V11', fuentes: ['curriculos', 'currPolicy'] },
      { id: 'T3.4', titulo: 'Diagnóstico y PEI', horas: horasModulo('T3.4'), modalidad: 'Vídeo + SIS demo', evaluacion: 'Knowledge Check + PEI simulado', video: 'V12', fuentes: ['offcampus', 'curriculos'], entregable: true },
    ],
  },
  {
    id: 'B4',
    nivel: 1,
    numero: 4,
    titulo: 'Academic Framework',
    categoria: 'Académico',
    horas: 8,
    modulos: [
      { id: 'T4.1', titulo: 'Scope & Sequence K–12: competencias y evidencia', horas: horasModulo('T4.1'), modalidad: 'Vídeo + Scope & Sequence', evaluacion: 'Knowledge Check + caso', video: 'V13', fuentes: ['ss', 'matrix'] },
      { id: 'T4.2', titulo: 'Dominio, 80 % e intervención', horas: horasModulo('T4.2'), modalidad: 'Vídeo + casos', evaluacion: 'Knowledge Check + plan de intervención', video: 'V14', fuentes: ['ss', 'master'], entregable: true },
      { id: 'T4.3', titulo: 'Assessment: tres categorías de evaluación', horas: horasModulo('T4.3'), modalidad: 'Vídeo + políticas de evaluación', evaluacion: 'Knowledge Check + caso', video: 'V15', fuentes: ['assessPolicy', 'statePolicy'] },
      { id: 'T4.4', titulo: 'Créditos: reconocimiento y auditoría Dual Diploma', horas: horasModulo('T4.4'), modalidad: 'Vídeo + Credit Recognition Policy', evaluacion: 'Knowledge Check + caso', video: 'V16', fuentes: ['creditPolicy', 'certPolicy', 'dual'] },
    ],
  },
  {
    id: 'B5',
    nivel: 1,
    numero: 5,
    titulo: 'Sistemas y operación',
    categoria: 'Sistemas',
    horas: 7.75,
    modulos: [
      { id: 'T5.1', titulo: 'SIS, Portal y Dual Diploma Portal', horas: horasModulo('T5.1'), modalidad: 'Vídeo + práctica en SIS demo', evaluacion: 'Knowledge Check + simulación', video: 'V17', fuentes: ['master'] },
      { id: 'T5.2', titulo: 'Seguimiento semanal, reporting y documentación', horas: horasModulo('T5.2'), modalidad: 'Vídeo + plantillas + casos', evaluacion: 'Knowledge Check + caso', video: 'V18', fuentes: ['master', 'ss'] },
      { id: 'T5.3', titulo: 'Comunicación con familias, escalamiento y práctica supervisada', horas: horasModulo('T5.3'), modalidad: 'Vídeo + práctica supervisada (observación y acompañamiento)', evaluacion: 'Knowledge Check + portafolio de práctica', video: 'V19', fuentes: ['offcampus', 'dual', 'master'], entregable: true },
    ],
  },
  {
    id: 'B6',
    nivel: 1,
    numero: 6,
    titulo: 'Safeguarding y Extensión Local',
    categoria: 'Operación',
    horas: 5.5,
    modulos: [
      { id: 'T6.1', titulo: 'Safeguarding y límites profesionales', horas: horasModulo('T6.1'), modalidad: 'Vídeo + protocolo + casos', evaluacion: 'Knowledge Check + caso', video: 'V20', fuentes: ['plc', 'master'] },
      { id: 'T6.2', titulo: 'Online safety y protección de datos', horas: horasModulo('T6.2'), modalidad: 'Vídeo + checklist', evaluacion: 'Knowledge Check', video: 'V21', fuentes: ['master'] },
      { id: 'T6.3', titulo: 'Extensión Local, lenguas locales y coordinación especializada', horas: horasModulo('T6.3'), modalidad: 'Vídeo + diseño de objetivos', evaluacion: 'Knowledge Check + plan de Extensión Local', video: 'V22', fuentes: ['master', 'ss'], entregable: true },
    ],
  },
  {
    id: 'B7',
    nivel: 1,
    numero: 7,
    titulo: 'USA State Programs / Compliance',
    categoria: 'Compliance',
    horas: 3.75,
    porRol: true, // solo para quien su rol lo requiera; no cuenta para las horas de la ruta base
    modulos: [
      { id: 'T7.1', titulo: 'Florida · Step Up For Students / EMA (servicio Matrícula aprobado)', horas: horasModulo('T7.1'), modalidad: 'Vídeo + estado de servicio', evaluacion: 'Knowledge Check + caso', video: 'V23', fuentes: ['ema', 'statePolicy'] },
      { id: 'T7.2', titulo: 'Alabama CHOOSE (Approved ESP · ClassWallet) y pruebas por estado', horas: horasModulo('T7.2'), modalidad: 'Vídeo + matriz de cumplimiento', evaluacion: 'Knowledge Check + caso', video: 'V24', fuentes: ['alabama', 'statePolicy'] },
    ],
  },
  {
    id: 'B8',
    nivel: 2,
    numero: 8,
    titulo: 'Coordinator Track',
    categoria: 'Coordinación',
    horas: 10.5,
    modulos: [
      { id: 'T8.1', titulo: 'Supervisión de mentores y calidad académica', horas: horasModulo('T8.1'), modalidad: 'Vídeo + rúbricas + observación', evaluacion: 'Knowledge Check + observación documentada', video: 'V25', fuentes: ['plc', 'ss'], entregable: true },
      { id: 'T8.2', titulo: 'Partner Learning Centers: operación local y Chanak Central', horas: horasModulo('T8.2'), modalidad: 'Vídeo + Acuerdo Marco + casos', evaluacion: 'Knowledge Check + caso', video: 'V26', fuentes: ['plc', 'alianzas', 'contratos'] },
      { id: 'T8.3', titulo: 'Revisión de evidencias, reporting e incidencias', horas: horasModulo('T8.3'), modalidad: 'Vídeo + auditoría simulada', evaluacion: 'Knowledge Check + revisión de expediente', video: 'V27', fuentes: ['creditPolicy', 'certPolicy', 'ss'], entregable: true },
      { id: 'T8.4', titulo: 'Proyecto de coordinación supervisado', horas: horasModulo('T8.4'), modalidad: 'Práctica supervisada + portafolio', evaluacion: 'Portafolio + revisión con Chanak Central', video: 'V28', fuentes: ['plc', 'master'], entregable: true },
    ],
  },
  {
    id: 'B9',
    nivel: 1,
    numero: 9,
    titulo: 'Child & Adolescent Development, Psychology & Educational Accompaniment',
    categoria: 'Desarrollo y acompañamiento',
    horas: 6,
    transversal: true,
    modulos: [
      { id: 'T9.1', titulo: 'Desarrollo infantil: mente, emociones y relaciones', horas: horasModulo('T9.1'), modalidad: 'Vídeo + lectura + casos + observación guiada', evaluacion: 'Knowledge Check + caso', video: 'V29', fuentes: [] },
      { id: 'T9.2', titulo: 'Adolescencia: identidad, pertenencia, autonomía y proyecto de vida', horas: horasModulo('T9.2'), modalidad: 'Vídeo + lectura + casos + observación guiada', evaluacion: 'Knowledge Check + caso', video: 'V30', fuentes: [] },
      { id: 'T9.3', titulo: 'Diferencias individuales y neurodiversidad: observar sin diagnosticar', horas: horasModulo('T9.3'), modalidad: 'Vídeo + lectura + casos + observación guiada', evaluacion: 'Knowledge Check + caso', video: 'V31', fuentes: [] },
      { id: 'T9.4', titulo: 'Acompañamiento educativo: observar, documentar, apoyar, comunicar, escalar', horas: horasModulo('T9.4'), modalidad: 'Vídeo + lectura + 8 casos prácticos + portafolio', evaluacion: 'Knowledge Check + caso completo', video: 'V32', fuentes: [], entregable: true },
    ],
  },
  {
    id: 'B10',
    nivel: 1,
    numero: 10,
    titulo: 'Growth, Markets, Partnerships & Systems',
    categoria: 'Crecimiento y sistemas',
    horas: 8.75,
    porRol: true, // rol Estratégico y especialistas; no cuenta para las horas de la ruta base
    modulos: [
      { id: 'T10.1', titulo: 'Market Development & Representation y Plan de Entrada al Mercado a 30 días', horas: horasModulo('T10.1'), modalidad: 'Vídeo + lectura + plan escrito', evaluacion: 'Knowledge Check + plan a 30 días', video: 'V33', fuentes: [], entregable: true },
      { id: 'T10.2', titulo: 'Grants & Project Development y Life Skills 4-Week Community Pilot', horas: horasModulo('T10.2'), modalidad: 'Vídeo + lectura + caso', evaluacion: 'Knowledge Check + diseño de piloto', video: 'V34', fuentes: [], entregable: true },
      { id: 'T10.3', titulo: 'Modelos de personas y alianzas: Voluntario, Contratista y Socio', horas: horasModulo('T10.3'), modalidad: 'Vídeo + lectura + plantillas (sujetas a revisión)', evaluacion: 'Knowledge Check + caso', video: 'V35', fuentes: [] },
      { id: 'T10.4', titulo: 'Sistemas: SIS, Portal y Dual Diploma Portal (práctica y validación)', horas: horasModulo('T10.4'), modalidad: 'Vídeo + práctica con datos ficticios + validación', evaluacion: 'Knowledge Check + validación con Chanak Central', video: 'V36', fuentes: [] },
      { id: 'T10.5', titulo: 'Rutas de especialista: English, Life Skills, lengua local y evaluación educativa', horas: horasModulo('T10.5'), modalidad: 'Vídeo + lectura + caso', evaluacion: 'Knowledge Check + caso', video: 'V37', fuentes: [] },
    ],
  },
]

export const TODOS_MODULOS = BLOQUES.flatMap((b) =>
  b.modulos.map((m) => ({
    ...m,
    bloqueId: b.id,
    bloqueTitulo: b.titulo,
    nivel: b.nivel,
    porRol: Boolean(b.porRol),
    transversal: Boolean(b.transversal),
  }))
)

export function getModulo(moduloId) {
  return TODOS_MODULOS.find((m) => m.id === moduloId)
}

export function getBloque(bloqueId) {
  return BLOQUES.find((b) => b.id === bloqueId)
}

// Número visible del módulo (T1.1 → 1.1)
export const numModulo = (id = '') => id.replace(/^T/, '')
