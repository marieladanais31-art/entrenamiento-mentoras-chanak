// ============================================================
// CHANAK INTERNATIONAL ACADEMY
// Pathway de Formación de Mentoras y Coordinadoras
// Fuente de verdad: Chanak_Pathway_180_300h.docx
// 180h → Chanak-Certified Mentor · 300h → Chanak-Certified Coordinator
// Alineado con los 5 Estándares MSA NGA y el Chanak Growth System
// ============================================================

export const NIVEL_1_HORAS = 180
export const NIVEL_2_HORAS = 300 // acumuladas (180 + 120 adicionales)

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
    nombre: 'NotebookLM — Cuadernos de formación Chanak',
    url: 'https://notebooklm.google.com/',
    descripcion: 'Cuadernos con los documentos institucionales (cubren parte de los Bloques 1 y 2).',
  },
  {
    nombre: 'Carpeta de Drive — Documentos de formación',
    url: 'https://drive.google.com/drive/folders/1cA12aALYfYpwp4r2zJkG4baUlSk9ZHkb',
    descripcion: 'Handbook, políticas, DPL y materiales de lectura.',
  },
  {
    nombre: 'Portal LMS Chanak',
    url: 'https://portal.chanakacademy.org/',
    descripcion: 'Estructura de vías de material y recursos para familias.',
  },
  {
    nombre: 'Web institucional',
    url: 'https://www.chanakacademy.org/',
    descripcion: 'Misión, visión, programas y registro FLDOE #134620.',
  },
]

// Los 10 bloques con sus 30 módulos.
// horas de bloque = suma exacta de las horas de sus módulos.
export const BLOQUES = [
  // ─────────────── NIVEL 1 — Mentora Certificada (180h) ───────────────
  {
    id: 'B1',
    nivel: 1,
    numero: 1,
    titulo: 'Fundamentos Institucionales',
    horas: 30,
    modulos: [
      {
        id: '1.1',
        titulo: 'Misión, Visión y Valores de Chanak',
        horas: 6,
        modalidad: 'NotebookLM + lectura',
        evaluacion: 'Quiz',
        indicadores: ['F1a', 'F1b', 'F1c', 'F1d'],
      },
      {
        id: '1.2',
        titulo: 'Cosmovisión bíblica aplicada a la educación',
        horas: 6,
        modalidad: 'NotebookLM + reflexión',
        evaluacion: 'Ensayo',
        indicadores: ['F1e', 'F1f', 'F2a'],
      },
      {
        id: '1.3',
        titulo: 'Portrait of a Learner y Portrait of an Educator',
        horas: 6,
        modalidad: 'Lectura + discusión',
        evaluacion: 'Quiz',
        indicadores: ['F1g', 'F1h', 'F2b', 'F2c'],
      },
      {
        id: '1.4',
        titulo: 'El modelo Chanak Growth System y el marco 60/20/20',
        horas: 8,
        modalidad: 'NotebookLM + vídeo',
        evaluacion: 'Quiz + caso',
        indicadores: ['T1a', 'T1b', 'T1k', 'F2d'],
      },
      {
        id: '1.5',
        titulo: 'Código de conducta y ética profesional',
        horas: 4,
        modalidad: 'Lectura + firma',
        evaluacion: 'Firma',
        indicadores: ['G5', 'G7', 'W1'],
      },
    ],
  },
  {
    id: 'B2',
    nivel: 1,
    numero: 2,
    titulo: 'Supervisión Académica',
    horas: 35,
    modulos: [
      {
        id: '2.1',
        titulo: 'Mastery Learning: teoría y aplicación práctica (Bloom, Carroll)',
        horas: 8,
        modalidad: 'NotebookLM + taller',
        evaluacion: 'Caso práctico',
        indicadores: ['T1a', 'T1b', 'T1c', 'T3a'],
      },
      {
        id: '2.2',
        titulo: 'Las 4 vías de material (A.C.E., LIFEPAC, CLE, Flex): estructura y uso',
        horas: 8,
        modalidad: 'Lectura + portal',
        evaluacion: 'Quiz',
        indicadores: ['T1d', 'T1e', 'T2a', 'T2e'],
      },
      {
        id: '2.3',
        titulo: 'Diagnóstico, ubicación y PEI (Plan Educativo Individualizado)',
        horas: 8,
        modalidad: 'Taller práctico',
        evaluacion: 'PEI simulado',
        indicadores: ['T1c', 'T1r', 'T4b', 'T4g'],
      },
      {
        id: '2.4',
        titulo: 'Daily Goal Tracker, Review Station y Mastery Assessment',
        horas: 6,
        modalidad: 'Portal + SIS demo',
        evaluacion: 'Simulación',
        indicadores: ['T2f', 'T2g', 'T3b', 'T3n'],
      },
      {
        id: '2.5',
        titulo: 'Evaluación formativa y sumativa: boletines y registros',
        horas: 5,
        modalidad: 'SIS demo + taller',
        evaluacion: 'Boletín demo',
        indicadores: ['T3c', 'T3d', 'T3m', 'T3o'],
      },
    ],
  },
  {
    id: 'B3',
    nivel: 1,
    numero: 3,
    titulo: 'Acompañamiento al Alumno y Familia',
    horas: 30,
    modulos: [
      {
        id: '3.1',
        titulo: 'Diferenciación e intervención académica: qué hacer cuando un alumno no avanza',
        horas: 10,
        modalidad: 'Caso + taller',
        evaluacion: 'Log de intervención',
        indicadores: ['T1c', 'T1s', 'T4e', 'T4h'],
      },
      {
        id: '3.2',
        titulo: 'Comunicación con familias: reportes, reuniones, orientación',
        horas: 8,
        modalidad: 'Role-play + plantillas',
        evaluacion: 'Simulación',
        indicadores: ['F2d', 'T4f', 'T4j', 'W4'],
      },
      {
        id: '3.3',
        titulo: 'Apertura del Día: devocional, carácter y comunidad de aprendizaje',
        horas: 6,
        modalidad: 'Observación + práctica',
        evaluacion: 'Planificación',
        indicadores: ['F1e', 'W1', 'W2', 'T2h'],
      },
      {
        id: '3.4',
        titulo: 'Life Skills & Leadership: Seedling → Launch y ChanakCoins',
        horas: 6,
        modalidad: 'Portal + guía',
        evaluacion: 'Proyecto LS',
        indicadores: ['T1e', 'T1f', 'T1o', 'W3'],
      },
    ],
  },
  {
    id: 'B4',
    nivel: 1,
    numero: 4,
    titulo: 'Protección Infantil y Bienestar',
    horas: 25,
    modulos: [
      {
        id: '4.1',
        titulo: 'Política de Protección Infantil y Safeguarding de Chanak',
        horas: 8,
        modalidad: 'Lectura + caso',
        evaluacion: 'Quiz + protocolo',
        indicadores: ['W1', 'W2', 'G9'],
      },
      {
        id: '4.2',
        titulo: 'Curso externo certificado: Normas Mínimas de Protección (Alliance/CPMS u otro)',
        horas: 5,
        modalidad: 'Online externo',
        evaluacion: 'Certificado',
        indicadores: ['W1', 'W2', 'T5a'],
      },
      {
        id: '4.3',
        titulo: 'Protocolo de reporte (6 pasos), rol del DSL, whistleblower',
        horas: 6,
        modalidad: 'Taller + simulación',
        evaluacion: 'Simulacro',
        indicadores: ['W1', 'W2', 'G9'],
      },
      {
        id: '4.4',
        titulo: 'Bienestar emocional y ambiente seguro en educación a distancia',
        horas: 6,
        modalidad: 'Lectura + discusión',
        evaluacion: 'Reflexión',
        indicadores: ['W3', 'W4', 'T4a', 'T4c'],
      },
    ],
  },
  {
    id: 'B5',
    nivel: 1,
    numero: 5,
    titulo: 'Tecnología y Herramientas',
    horas: 20,
    modulos: [
      {
        id: '5.1',
        titulo: 'SIS Chanak: navegación, registro de notas, PEI, boletines, contratos',
        horas: 8,
        modalidad: 'SIS demo práctico',
        evaluacion: 'Tarea en SIS',
        indicadores: ['R2', 'R3', 'T3m', 'T3o'],
      },
      {
        id: '5.2',
        titulo: 'Portal LMS: estructura, vías de material, recursos para familias',
        horas: 6,
        modalidad: 'Portal práctico',
        evaluacion: 'Navegación guiada',
        indicadores: ['R2', 'R3', 'T2e'],
      },
      {
        id: '5.3',
        titulo: 'Google Workspace, NotebookLM y herramientas de comunicación',
        horas: 6,
        modalidad: 'Taller práctico',
        evaluacion: 'Tarea',
        indicadores: ['R2', 'R4'],
      },
    ],
  },
  {
    id: 'B6',
    nivel: 1,
    numero: 6,
    titulo: 'Práctica Supervisada + Proyecto Final',
    horas: 40,
    modulos: [
      {
        id: '6.1',
        titulo: 'Observación de práctica: acompañar 2 semanas de aprendizaje real',
        horas: 20,
        modalidad: 'Práctica supervisada',
        evaluacion: 'Diario de observación',
        indicadores: ['T1-T5', 'W1-W4'],
      },
      {
        id: '6.2',
        titulo: 'Proyecto integrador: portafolio de evidencias de un alumno (anonimizado)',
        horas: 15,
        modalidad: 'Proyecto individual',
        evaluacion: 'Portafolio',
        indicadores: ['T3', 'T4', 'F2d'],
      },
      {
        id: '6.3',
        titulo: 'Evaluación final y retroalimentación con Head of LSP',
        horas: 5,
        modalidad: 'Reunión + rúbrica',
        evaluacion: 'Rúbrica final',
        indicadores: ['T5a', 'T5b'],
      },
    ],
  },

  // ─────────── NIVEL 2 — Coordinadora Certificada (+120h) ───────────
  {
    id: 'B7',
    nivel: 2,
    numero: 7,
    titulo: 'Gobernanza y Operación de Sede',
    horas: 30,
    modulos: [
      {
        id: '7.1',
        titulo: 'Estructura del LSP: oficina central vs. Learning Implementation Site',
        horas: 8,
        modalidad: 'Lectura + caso',
        evaluacion: 'Quiz',
        indicadores: ['G1', 'G2', 'G14'],
      },
      {
        id: '7.2',
        titulo: 'Políticas operativas: admisiones, matrícula, contratos, pagos',
        horas: 8,
        modalidad: 'Taller + SIS',
        evaluacion: 'Simulación',
        indicadores: ['G5', 'G8', 'R1'],
      },
      {
        id: '7.3',
        titulo: 'Cumplimiento local: regulación del país anfitrión, seguro, ocupación',
        horas: 8,
        modalidad: 'Lectura + checklist',
        evaluacion: 'Checklist',
        indicadores: ['G14', 'R1j', 'Infrastructure'],
      },
      {
        id: '7.4',
        titulo: 'Relación con iglesias y socios: modelo de Alquiler Compartido',
        horas: 6,
        modalidad: 'Caso + plantillas',
        evaluacion: 'Plan de sede',
        indicadores: ['G14', 'G16', 'R1'],
      },
    ],
  },
  {
    id: 'B8',
    nivel: 2,
    numero: 8,
    titulo: 'Liderazgo y Supervisión de Mentoras',
    horas: 30,
    modulos: [
      {
        id: '8.1',
        titulo: 'Supervisión académica: cómo observar, evaluar y retroalimentar a una mentora',
        horas: 10,
        modalidad: 'Taller + rúbrica',
        evaluacion: 'Observación simulada',
        indicadores: ['T5a', 'T5b', 'T5e', 'T5f'],
      },
      {
        id: '8.2',
        titulo: 'Planificación y coordinación del equipo local',
        horas: 8,
        modalidad: 'Caso + plantillas',
        evaluacion: 'Plan semanal',
        indicadores: ['G3', 'T5c', 'T5d'],
      },
      {
        id: '8.3',
        titulo: 'Gestión de conflictos, quejas y comunicación con familias',
        horas: 6,
        modalidad: 'Role-play',
        evaluacion: 'Simulación',
        indicadores: ['G12', 'W4', 'F2d'],
      },
      {
        id: '8.4',
        titulo: 'Desarrollo profesional continuo: cómo crear cultura de mejora',
        horas: 6,
        modalidad: 'Lectura + reflexión',
        evaluacion: 'Plan de DPC',
        indicadores: ['T5g', 'T5h'],
      },
    ],
  },
  {
    id: 'B9',
    nivel: 2,
    numero: 9,
    titulo: 'Calidad y Mejora Continua',
    horas: 25,
    modulos: [
      {
        id: '9.1',
        titulo: 'Aseguramiento de calidad: revisión de programas, encuestas, ciclo PDCA',
        horas: 8,
        modalidad: 'Lectura + taller',
        evaluacion: 'Plan QA',
        indicadores: ['G15', 'G16', 'T1a'],
      },
      {
        id: '9.2',
        titulo: 'Análisis de datos académicos: interpretar resultados del SIS para mejorar',
        horas: 8,
        modalidad: 'SIS + taller',
        evaluacion: 'Informe',
        indicadores: ['T3a', 'T3c', 'T3i'],
      },
      {
        id: '9.3',
        titulo: 'Autoevaluación institucional: cómo preparar un mini Self-Study de sede',
        horas: 9,
        modalidad: 'Taller guiado',
        evaluacion: 'Borrador',
        indicadores: ['G3', 'F2d', 'All'],
      },
    ],
  },
  {
    id: 'B10',
    nivel: 2,
    numero: 10,
    titulo: 'Práctica de Coordinación + Proyecto Final',
    horas: 35,
    modulos: [
      {
        id: '10.1',
        titulo: 'Práctica: coordinar la operación de una sede durante 4 semanas',
        horas: 20,
        modalidad: 'Práctica supervisada',
        evaluacion: 'Diario + informe',
        indicadores: ['T1-T5', 'W1-W4', 'G', 'R'],
      },
      {
        id: '10.2',
        titulo: 'Proyecto final: Plan de Apertura de un Learning Implementation Site',
        horas: 10,
        modalidad: 'Proyecto individual',
        evaluacion: 'Plan completo',
        indicadores: ['G14', 'R1', 'Infrastructure'],
      },
      {
        id: '10.3',
        titulo: 'Evaluación final y certificación con Head of LSP + Board',
        horas: 5,
        modalidad: 'Presentación + rúbrica',
        evaluacion: 'Rúbrica',
        indicadores: ['T5a', 'G3'],
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
