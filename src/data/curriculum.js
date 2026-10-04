// ============================================================
// CHANAK · FORMACIÓN DE MENTORES Y COORDINADORES 2026–2027
// Estructura oficial de la ruta formativa (versión de currículo: training-2026-2027)
//
// Fuente oficial: carpeta «CHANAK_DOCUMENTOS_2026-2027_FINAL»
//   01_INSTITUCIONAL · 02_FAMILIAS · 03_INSTITUCIONES · 07_US_PROGRAMS_COMPLIANCE
//   08_ACADEMIC_POLICIES · 09_ACADEMIC_FRAMEWORK (Scope & Sequence K–12)
//
// Nivel 1 → CHANAK CERTIFIED MENTOR      · Bloques 1–6 · 180 h de referencia
// Nivel 2 → CHANAK CERTIFIED COORDINATOR · Nivel 1 + Bloque 8 · 300 h acumuladas
// Bloque 7 (USA State Programs) es un módulo por rol: solo para quien lo necesite.
//
// Las horas son una referencia formativa: incluyen autoestudio, vídeo, lecturas,
// práctica, SIS, observación, evaluaciones y evidencias. No son horas de vídeo.
// ============================================================

export const VERSION_CURRICULO = 'training-2026-2027'
export const FECHA_ACTUALIZACION = '2026-10-02'

export const NIVEL_1_HORAS = 180
export const NIVEL_2_HORAS = 300 // acumuladas (180 + 120)

export const FUENTES = {
  master: '01_INSTITUCIONAL · Dossier Institucional Master 2026–2027',
  offcampus: '02_FAMILIAS · Off-Campus (Homeschool Guiado)',
  dual: '02_FAMILIAS · Dual Diploma Familias',
  lifeskills: '02_FAMILIAS · Life Skills & Leadership',
  dualInst: '03_INSTITUCIONES · Dual Diploma Institucional',
  alianzas: '03_INSTITUCIONES · Alianzas Institucionales',
  plc: '03_INSTITUCIONES · Partner Learning Center (Sede afiliada)',
  curriculos: '03_INSTITUCIONES · Currículos y Vías Académicas',
  contratos: '03_INSTITUCIONES/CONTRATOS · Adenda Acuerdo Marco y Anexo de Certificación',
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
        'Cuentas compartidas solo para formación. Nunca introduzcas datos reales de estudiantes ni de familias.',
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
// 8 bloques · 28 módulos · 28 vídeos (uno por módulo)
// ─────────────────────────────────────────────────────────────
export const BLOQUES = [
  {
    id: 'B1',
    nivel: 1,
    numero: 1,
    titulo: 'Identidad y modelo Chanak',
    categoria: 'Fundamentos',
    horas: 20,
    modulos: [
      { id: 'T1.1', titulo: 'Identidad, misión y estructura institucional', horas: 5, modalidad: 'Vídeo + lectura del Master', evaluacion: 'Knowledge Check', video: 'V01', fuentes: ['master'] },
      { id: 'T1.2', titulo: 'El modelo 60 / 20 / 20', horas: 5, modalidad: 'Vídeo + lectura + práctica', evaluacion: 'Knowledge Check + caso', video: 'V02', fuentes: ['master', 'ss'] },
      { id: 'T1.3', titulo: 'Marco académico orientado al dominio', horas: 5, modalidad: 'Vídeo + lectura + caso', evaluacion: 'Knowledge Check + caso', video: 'V03', fuentes: ['master', 'ss'] },
      { id: 'T1.4', titulo: 'Autoridad académica y límites del mentor', horas: 5, modalidad: 'Vídeo + casos de decisión', evaluacion: 'Knowledge Check + caso', video: 'V04', fuentes: ['master', 'certPolicy', 'creditPolicy'] },
    ],
  },
  {
    id: 'B2',
    nivel: 1,
    numero: 2,
    titulo: 'Programas Chanak',
    categoria: 'Programas',
    horas: 30,
    modulos: [
      { id: 'T2.1', titulo: 'Off-Campus (Homeschool Guiado)', horas: 8, modalidad: 'Vídeo + dossier de familias', evaluacion: 'Knowledge Check + caso', video: 'V05', fuentes: ['offcampus', 'master'] },
      { id: 'T2.2', titulo: 'Dual Diploma: rutas, créditos y homologación', horas: 8, modalidad: 'Vídeo + dossier Dual Diploma', evaluacion: 'Knowledge Check + caso', video: 'V06', fuentes: ['dual', 'dualInst', 'creditPolicy'] },
      { id: 'T2.3', titulo: 'Life Skills & Leadership', horas: 7, modalidad: 'Vídeo + dossier Life Skills', evaluacion: 'Knowledge Check + caso', video: 'V07', fuentes: ['lifeskills', 'ss'] },
      { id: 'T2.4', titulo: 'Partner Learning Center, Certificación Institucional y diferencias entre programas', horas: 7, modalidad: 'Vídeo + dossiers institucionales', evaluacion: 'Knowledge Check + caso', video: 'V08', fuentes: ['alianzas', 'plc', 'certPolicy', 'contratos'] },
    ],
  },
  {
    id: 'B3',
    nivel: 1,
    numero: 3,
    titulo: 'Curriculum Pathways',
    categoria: 'Currículos',
    horas: 25,
    modulos: [
      { id: 'T3.1', titulo: 'A.C.E. · Reference / Preferred Curriculum Pathway', horas: 7, modalidad: 'Vídeo + lectura + práctica', evaluacion: 'Knowledge Check + caso', video: 'V09', fuentes: ['curriculos', 'currPolicy'] },
      { id: 'T3.2', titulo: 'LIFEPAC y Christian Light Education · Reviewed Alternative Pathways', horas: 6, modalidad: 'Vídeo + lectura comparada', evaluacion: 'Knowledge Check + caso', video: 'V10', fuentes: ['curriculos', 'currPolicy'] },
      { id: 'T3.3', titulo: 'Chanak Flex y selección de vía curricular', horas: 6, modalidad: 'Vídeo + caso de decisión', evaluacion: 'Knowledge Check + caso', video: 'V11', fuentes: ['curriculos', 'currPolicy'] },
      { id: 'T3.4', titulo: 'Diagnóstico y PEI', horas: 6, modalidad: 'Vídeo + SIS demo', evaluacion: 'Knowledge Check + PEI simulado', video: 'V12', fuentes: ['offcampus', 'curriculos'], entregable: true },
    ],
  },
  {
    id: 'B4',
    nivel: 1,
    numero: 4,
    titulo: 'Academic Framework',
    categoria: 'Académico',
    horas: 40,
    modulos: [
      { id: 'T4.1', titulo: 'Scope & Sequence K–12: competencias y evidencia', horas: 10, modalidad: 'Vídeo + Scope & Sequence', evaluacion: 'Knowledge Check + caso', video: 'V13', fuentes: ['ss', 'matrix'] },
      { id: 'T4.2', titulo: 'Dominio, 80 % e intervención', horas: 10, modalidad: 'Vídeo + casos', evaluacion: 'Knowledge Check + plan de intervención', video: 'V14', fuentes: ['ss', 'master'], entregable: true },
      { id: 'T4.3', titulo: 'Assessment: tres categorías de evaluación', horas: 10, modalidad: 'Vídeo + políticas de evaluación', evaluacion: 'Knowledge Check + caso', video: 'V15', fuentes: ['assessPolicy', 'statePolicy'] },
      { id: 'T4.4', titulo: 'Créditos: reconocimiento y auditoría Dual Diploma', horas: 10, modalidad: 'Vídeo + Credit Recognition Policy', evaluacion: 'Knowledge Check + caso', video: 'V16', fuentes: ['creditPolicy', 'certPolicy', 'dual'] },
    ],
  },
  {
    id: 'B5',
    nivel: 1,
    numero: 5,
    titulo: 'Sistemas y operación',
    categoria: 'Sistemas',
    horas: 40,
    modulos: [
      { id: 'T5.1', titulo: 'SIS, Portal y Dual Diploma Portal', horas: 10, modalidad: 'Vídeo + práctica en SIS demo', evaluacion: 'Knowledge Check + simulación', video: 'V17', fuentes: ['master'] },
      { id: 'T5.2', titulo: 'Seguimiento semanal, reporting y documentación', horas: 10, modalidad: 'Vídeo + plantillas + casos', evaluacion: 'Knowledge Check + caso', video: 'V18', fuentes: ['master', 'ss'] },
      { id: 'T5.3', titulo: 'Comunicación con familias, escalamiento y práctica supervisada', horas: 20, modalidad: 'Vídeo + práctica supervisada (observación y acompañamiento)', evaluacion: 'Knowledge Check + portafolio de práctica', video: 'V19', fuentes: ['offcampus', 'dual', 'master'], entregable: true },
    ],
  },
  {
    id: 'B6',
    nivel: 1,
    numero: 6,
    titulo: 'Safeguarding y Extensión Local',
    categoria: 'Operación',
    horas: 25,
    modulos: [
      { id: 'T6.1', titulo: 'Safeguarding y límites profesionales', horas: 10, modalidad: 'Vídeo + protocolo + casos', evaluacion: 'Knowledge Check + caso', video: 'V20', fuentes: ['plc', 'master'] },
      { id: 'T6.2', titulo: 'Online safety y protección de datos', horas: 7, modalidad: 'Vídeo + checklist', evaluacion: 'Knowledge Check', video: 'V21', fuentes: ['master'] },
      { id: 'T6.3', titulo: 'Extensión Local, lenguas locales y coordinación especializada', horas: 8, modalidad: 'Vídeo + diseño de objetivos', evaluacion: 'Knowledge Check + plan de Extensión Local', video: 'V22', fuentes: ['master', 'ss'], entregable: true },
    ],
  },
  {
    id: 'B7',
    nivel: 1,
    numero: 7,
    titulo: 'USA State Programs / Compliance',
    categoria: 'Compliance',
    horas: 10,
    porRol: true, // solo para quien su rol lo requiera; no cuenta para las 180 h
    modulos: [
      { id: 'T7.1', titulo: 'Florida · Step Up For Students / EMA (servicio Matrícula aprobado)', horas: 5, modalidad: 'Vídeo + estado de servicio', evaluacion: 'Knowledge Check + caso', video: 'V23', fuentes: ['ema', 'statePolicy'] },
      { id: 'T7.2', titulo: 'Alabama CHOOSE (Approved ESP · ClassWallet) y pruebas por estado', horas: 5, modalidad: 'Vídeo + matriz de cumplimiento', evaluacion: 'Knowledge Check + caso', video: 'V24', fuentes: ['alabama', 'statePolicy'] },
    ],
  },
  {
    id: 'B8',
    nivel: 2,
    numero: 8,
    titulo: 'Coordinator Track',
    categoria: 'Coordinación',
    horas: 120,
    modulos: [
      { id: 'T8.1', titulo: 'Supervisión de mentores y calidad académica', horas: 30, modalidad: 'Vídeo + rúbricas + observación', evaluacion: 'Knowledge Check + observación documentada', video: 'V25', fuentes: ['plc', 'ss'], entregable: true },
      { id: 'T8.2', titulo: 'Partner Learning Centers: operación local y Chanak Central', horas: 30, modalidad: 'Vídeo + Acuerdo Marco + casos', evaluacion: 'Knowledge Check + caso', video: 'V26', fuentes: ['plc', 'alianzas', 'contratos'] },
      { id: 'T8.3', titulo: 'Revisión de evidencias, reporting e incidencias', horas: 30, modalidad: 'Vídeo + auditoría simulada', evaluacion: 'Knowledge Check + revisión de expediente', video: 'V27', fuentes: ['creditPolicy', 'certPolicy', 'ss'], entregable: true },
      { id: 'T8.4', titulo: 'Proyecto de coordinación supervisado', horas: 30, modalidad: 'Práctica supervisada + portafolio', evaluacion: 'Portafolio + revisión con Chanak Central', video: 'V28', fuentes: ['plc', 'master'], entregable: true },
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
