// ============================================================
// CHANAK INTERNATIONAL ACADEMY & PORTAL EDUCAFE
// Pathway Oficial de 3 Niveles y 3 Certificaciones
// Nivel 1 → Mentora Off Campus & Dual Diploma (180h) · Bloques 1-5
// Nivel 2 → Coordinadora Certificada: Gestión de Centro Chanak (300h) · Bloques 6-7
// Nivel 3 → Socia Visionaria: Proyectos & Red EducaFe (80h) · Bloque 8
// ============================================================

export const NIVEL_1_HORAS = 180
export const NIVEL_2_HORAS = 300 // acumuladas (180 + 120 adicionales)
export const NIVEL_3_HORAS = 80  // Proyectos EducaFe

// Leyenda de estándares MSA NGA
export const MSA_LEYENDA = {
  F: 'Foundations (Misión, Valores, Portrait of a Learner)',
  G: 'Governance & Organization (Políticas, código de conducta, estructura)',
  W: 'Student Well-Being (Protección infantil, bienestar, ambiente seguro)',
  R: 'Resources (Tecnología, SIS, infraestructura)',
  T: 'Teaching & Learning (Currículo, evaluación, diferenciación, práctica)',
}

export const RECURSOS_GENERALES = [
  {
    nombre: 'A.C.E. Supervisor Training — Sitio Oficial',
    url: 'https://sites.google.com/chanakacademy.org/entrenamientomentores/inicio?authuser=2',
    descripcion: 'Sitio oficial de entrenamiento de supervisores A.C.E. Chanak Academy.',
  },
  {
    nombre: 'SIS Chanak — Entorno de práctica',
    url: 'https://sis.chanakacademy.org/',
    descripcion:
      'Sistema académico oficial. Practica con las cuentas de demostración, nunca con datos reales de alumnos.',
    demo: {
      cuentas: ['demopadre@asociacioneducafe.org', 'demoestudiante@asociacioneducafe.org'],
      clave: 'Chanak2026',
      aviso:
        'Cuentas compartidas solo para formación. No introduzcas datos reales de alumnos ni de familias.',
    },
  },
  {
    nombre: 'NotebookLM — Cuadernos de formación Chanak',
    url: 'https://notebooklm.google.com/',
    descripcion: 'Cuadernos con los documentos institucionales.',
  },
  {
    nombre: 'NotebookLM — Cuaderno Oficial EducaFe',
    url: 'https://notebook.google.com/notebook/ad68652d-0ea8-402a-81db-5ae61051f125',
    descripcion: 'Cuaderno con reglamentos, actas y gobernanza EducaFe.',
  },
  {
    nombre: 'Carpeta de Drive — Documentos de formación',
    url: 'https://drive.google.com/drive/folders/1cA12aALYfYpwp4r2zJkG4baUlSk9ZHkb',
    descripcion: 'Handbook, políticas, DPL y materiales de lectura.',
  },
  {
    nombre: 'Portal LMS Chanak & Dual Diploma',
    url: 'https://portal.chanakacademy.org/',
    descripcion: 'Estructura de vías de material, Dual Diploma y recursos para familias.',
  },
  {
    nombre: 'Web institucional',
    url: 'https://www.chanakacademy.org/',
    descripcion: 'Misión, visión, programas y registro FLDOE #134620.',
  },
]

// Estructura oficial de 8 bloques divididos en los 3 niveles
export const BLOQUES = [
  // ─────────────── NIVEL 1 — Mentora Off Campus & Dual Diploma (180h) ───────────────
  {
    id: 'B1',
    nivel: 1,
    numero: 1,
    titulo: 'Filosofía Mastery Learner (A.C.E., Lifepac, CLE)',
    horas: 50,
    modulos: [
      {
        id: '1.1',
        titulo: 'Mastery Learning: teoría y aplicación práctica (Bloom, Carroll)',
        horas: 10,
        modalidad: 'NotebookLM + taller',
        evaluacion: 'Caso práctico',
        indicadores: ['T1a', 'T1b', 'T1c', 'T3a'],
      },
      {
        id: '1.2',
        titulo: 'Entrenamiento A.C.E. Supervisor Training & Metodología Self-Instructional',
        horas: 12,
        modalidad: 'A.C.E. Training + Portal',
        evaluacion: 'Quiz + Certificación A.C.E.',
        indicadores: ['T1d', 'T1e', 'T2a'],
        recursoUrl: 'https://sites.google.com/chanakacademy.org/entrenamientomentores/inicio?authuser=2',
      },
      {
        id: '1.3',
        titulo: 'Las 4 vías de material (A.C.E., LIFEPAC, CLE, Flex): estructura y uso',
        horas: 10,
        modalidad: 'Lectura + portal',
        evaluacion: 'Quiz',
        indicadores: ['T1d', 'T1e', 'T2a', 'T2e'],
      },
      {
        id: '1.4',
        titulo: 'Daily Goal Tracker, Review Station y Mastery Assessment',
        horas: 10,
        modalidad: 'Portal + SIS demo',
        evaluacion: 'Simulación',
        indicadores: ['T2f', 'T2g', 'T3b', 'T3n'],
      },
      {
        id: '1.5',
        titulo: 'Misión, Visión y Cosmovisión Bíblica en Chanak Growth System (60/20/20)',
        horas: 8,
        modalidad: 'NotebookLM + vídeo',
        evaluacion: 'Quiz + caso',
        indicadores: ['F1a', 'F1b', 'F1e', 'F2d'],
      },
    ],
  },
  {
    id: 'B2',
    nivel: 1,
    numero: 2,
    titulo: 'Project-Based Learning, Extensión Local y Life Skills',
    horas: 30,
    modulos: [
      {
        id: '2.1',
        titulo: 'Project-Based Learning (PBL) para alineación curricular local',
        horas: 10,
        modalidad: 'Taller + diseño de proyecto',
        evaluacion: 'Proyecto PBL',
        indicadores: ['T1e', 'T1f', 'T4e'],
      },
      {
        id: '2.2',
        titulo: 'Life Skills & Leadership: Seedling → Launch y ChanakCoins',
        horas: 10,
        modalidad: 'Portal + guía',
        evaluacion: 'Proyecto LS',
        indicadores: ['T1e', 'T1f', 'T1o', 'W3'],
      },
      {
        id: '2.3',
        titulo: 'Apertura del Día: devocional, carácter y comunidad de aprendizaje',
        horas: 10,
        modalidad: 'Observación + práctica',
        evaluacion: 'Planificación',
        indicadores: ['F1e', 'W1', 'W2', 'T2h'],
      },
    ],
  },
  {
    id: 'B3',
    nivel: 1,
    numero: 3,
    titulo: 'Online Safety and Student Cybersecurity Protocols',
    horas: 30,
    modulos: [
      {
        id: '3.1',
        titulo: 'Política de Protección Infantil y Safeguarding de Chanak',
        horas: 8,
        modalidad: 'Lectura + caso',
        evaluacion: 'Quiz + protocolo',
        indicadores: ['W1', 'W2', 'G9'],
      },
      {
        id: '3.2',
        titulo: 'Curso externo certificado: Normas Mínimas de Protección Infantil',
        horas: 6,
        modalidad: 'Online externo',
        evaluacion: 'Certificado',
        indicadores: ['W1', 'W2', 'T5a'],
      },
      {
        id: '3.3',
        titulo: 'Ciberseguridad estudiantil, privacidad de datos y protección en línea',
        horas: 8,
        modalidad: 'Taller + simulación',
        evaluacion: 'Quiz de Ciberseguridad',
        indicadores: ['W1', 'W3', 'R2'],
      },
      {
        id: '3.4',
        titulo: 'Protocolo de reporte (6 pasos), rol del DSL y whistleblower',
        horas: 8,
        modalidad: 'Taller + simulación',
        evaluacion: 'Simulacro',
        indicadores: ['W1', 'W2', 'G9'],
      },
    ],
  },
  {
    id: 'B4',
    nivel: 1,
    numero: 4,
    titulo: 'Remote Leadership, Mentoring and Academic Intervention Framework',
    horas: 30,
    modulos: [
      {
        id: '4.1',
        titulo: 'Diagnóstico, ubicación y PEI (Plan Educativo Individualizado)',
        horas: 8,
        modalidad: 'Taller práctico',
        evaluacion: 'PEI simulado',
        indicadores: ['T1c', 'T1r', 'T4b', 'T4g'],
      },
      {
        id: '4.2',
        titulo: 'Diferenciación e intervención académica remota: estrategias de avance',
        horas: 8,
        modalidad: 'Caso + taller',
        evaluacion: 'Log de intervención',
        indicadores: ['T1c', 'T1s', 'T4e', 'T4h'],
      },
      {
        id: '4.3',
        titulo: 'Liderazgo remoto y comunicación eficaz con familias',
        horas: 8,
        modalidad: 'Role-play + plantillas',
        evaluacion: 'Simulación',
        indicadores: ['F2d', 'T4f', 'T4j', 'W4'],
      },
      {
        id: '4.4',
        titulo: 'SIS Chanak & Google Workspace: registro de notas, boletines y herramientas',
        horas: 6,
        modalidad: 'SIS demo práctico',
        evaluacion: 'Tarea en SIS',
        indicadores: ['R2', 'R3', 'T3m'],
      },
    ],
  },
  {
    id: 'B5',
    nivel: 1,
    numero: 5,
    titulo: 'Práctica Supervisada + Proyecto Integrador',
    horas: 40,
    modulos: [
      {
        id: '5.1',
        titulo: 'Observación de práctica: acompañar 2 semanas de aprendizaje real',
        horas: 20,
        modalidad: 'Práctica supervisada',
        evaluacion: 'Diario de observación',
        indicadores: ['T1-T5', 'W1-W4'],
      },
      {
        id: '5.2',
        titulo: 'Proyecto integrador: portafolio de evidencias de un alumno',
        horas: 15,
        modalidad: 'Proyecto individual',
        evaluacion: 'Portafolio',
        indicadores: ['T3', 'T4', 'F2d'],
      },
      {
        id: '5.3',
        titulo: 'Evaluación final y retroalimentación con Head of LSP',
        horas: 5,
        modalidad: 'Reunión + rúbrica',
        evaluacion: 'Rúbrica final',
        indicadores: ['T5a', 'T5b'],
      },
    ],
  },

  // ─────────── NIVEL 2 — Coordinadora Certificada: Centro Educativo Chanak (300h) ───────────
  {
    id: 'B6',
    nivel: 2,
    numero: 6,
    titulo: 'Psicología del Niño y del Adolescente',
    horas: 40,
    modulos: [
      {
        id: '6.1',
        titulo: 'Desarrollo cognitivo y etapas evolutivas (Piaget, Vygotsky)',
        horas: 10,
        modalidad: 'NotebookLM + caso',
        evaluacion: 'Quiz',
        indicadores: ['T1a', 'T4a'],
      },
      {
        id: '6.2',
        titulo: 'Psicología emocional y neurodiversidad en el aula',
        horas: 10,
        modalidad: 'Lectura + análisis',
        evaluacion: 'Caso práctico',
        indicadores: ['W3', 'T4b'],
      },
      {
        id: '6.3',
        titulo: 'Conducta, motivación y gestión de crisis en la adolescencia',
        horas: 10,
        modalidad: 'Taller + casos',
        evaluacion: 'Plan de intervención',
        indicadores: ['W1', 'W4'],
      },
      {
        id: '6.4',
        titulo: 'Acompañamiento psicopedagógico y relación familia-escuela',
        horas: 10,
        modalidad: 'Role-play + orientación',
        evaluacion: 'Simulación',
        indicadores: ['F2d', 'W4'],
      },
    ],
  },
  {
    id: 'B7',
    nivel: 2,
    numero: 7,
    titulo: 'Gobernanza y Operación de Centro Educativo Chanak',
    horas: 80,
    modulos: [
      {
        id: '7.1',
        titulo: 'Estructura del LSP: Oficina Central vs. Learning Implementation Site',
        horas: 20,
        modalidad: 'Lectura + manual Chanak',
        evaluacion: 'Plan operativo de Centro',
        indicadores: ['G1', 'G2', 'G14'],
      },
      {
        id: '7.2',
        titulo: 'Políticas Operativas: Admisiones, Matrícula, Contratos y SIS',
        horas: 20,
        modalidad: 'Taller + SIS Chanak',
        evaluacion: 'Simulación de admisión',
        indicadores: ['G5', 'G8', 'R1'],
      },
      {
        id: '7.3',
        titulo: 'Supervisión Académica de Mentoras y Calidad Institucional',
        horas: 20,
        modalidad: 'Taller + rúbricas',
        evaluacion: 'Observación simulada',
        indicadores: ['T5a', 'T5b', 'G15'],
      },
      {
        id: '7.4',
        titulo: 'Cumplimiento Normativo Local, Registro FLDOE y Código de Ética',
        horas: 20,
        modalidad: 'Lectura + checklist',
        evaluacion: 'Checklist normativo',
        indicadores: ['G14', 'R1j', 'G5'],
      },
    ],
  },

  // ─────────── NIVEL 3 — Socia Visionaria: Proyectos Educativos & Red EducaFe ───────────
  {
    id: 'B8',
    nivel: 3,
    numero: 8,
    titulo: 'Gestión de Proyectos Educativos y Red EducaFe',
    horas: 80,
    modulos: [
      {
        id: '8.1',
        titulo: 'Operaciones y Gobernanza de Hubs EducaFe-Chanak',
        horas: 20,
        modalidad: 'Lectura + portal EducaFe',
        evaluacion: 'Plan operativo de Hub',
        indicadores: ['G1', 'G2', 'G14'],
      },
      {
        id: '8.2',
        titulo: 'Presentación de Propuestas a Iglesias, Diaconados y Alianzas',
        horas: 20,
        modalidad: 'Presentación + plantillas',
        evaluacion: 'Propuesta a Iglesia',
        indicadores: ['G14', 'G16', 'F2d'],
      },
      {
        id: '8.3',
        titulo: 'Administración Financiera de Hub, Grants, Becas y Sostenibilidad',
        horas: 20,
        modalidad: 'Caso práctico + presupuesto',
        evaluacion: 'Presupuesto y Memoria Social',
        indicadores: ['R1', 'G8'],
      },
      {
        id: '8.4',
        titulo: 'Relaciones Institucionales, Tercer Sector y Convenios Territoriales',
        horas: 20,
        modalidad: 'Proyecto + convenio',
        evaluacion: 'Convenio demo',
        indicadores: ['G14', 'G16'],
      },
    ],
  },
]

export const TODOS_MODULOS = BLOQUES.flatMap((b) =>
  b.modulos.map((m) => ({ ...m, bloqueId: b.id, bloqueTitulo: b.titulo, nivel: b.nivel }))
)

export function getModulo(moduloId) {
  return TODOS_MODULOS.find((m) => m.id === moduloId)
}

export function getBloque(bloqueId) {
  return BLOQUES.find((b) => b.id === bloqueId)
}
