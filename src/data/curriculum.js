// ============================================================
// CHANAK INTERNATIONAL ACADEMY & PORTAL EDUCAFE
// Pathway Oficial de 3 Niveles y 3 Certificaciones en Español
// Nivel 1 → Mentora Off Campus & Dual Diploma (Autoestudio 180h) · Bloques 1-5
// Nivel 2 → Coordinadora Certificada: Dirección de Centro Chanak (300h) · Bloques 6-7
// Nivel 3 → Socia Visionaria: Proyectos & Red EducaFe (80h) · Bloque 8
// ============================================================

export const NIVEL_1_HORAS = 180
export const NIVEL_2_HORAS = 300 // acumuladas (180 + 120 adicionales)
export const NIVEL_3_HORAS = 80  // Proyectos EducaFe

// Leyenda de estándares MSA NGA (Traducidos al español)
export const MSA_LEYENDA = {
  F: 'Fundamentos (Misión, Valores y Perfil del Estudiante Chanak)',
  G: 'Gobernanza y Organización (Políticas, código de conducta y estructura)',
  W: 'Bienestar Estudiantil y Protección Infantil Institucional',
  R: 'Recursos y Tecnologías Educativas (Sistema SIS, infraestructura)',
  T: 'Enseñanza y Aprendizaje (Currículo, evaluación de dominio y práctica)',
}

export const RECURSOS_GENERALES = [
  {
    nombre: 'Entrenamiento de Supervisora A.C.E. — Sitio Oficial',
    url: 'https://sites.google.com/chanakacademy.org/entrenamientomentores/inicio?authuser=2',
    descripcion: 'Sitio oficial de entrenamiento de supervisores A.C.E. Chanak Academy.',
  },
  {
    nombre: 'SIS Chanak — Entorno de práctica académica',
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
    url: 'https://notebook.google.com/notebook/f6fb89ec-4f28-4e64-a07a-3483b49ac35c',
    descripcion: 'Cuadernos interactivos con los documentos de autoestudio institucional.',
  },
  {
    nombre: 'NotebookLM — Cuaderno Oficial de Gobernanza EducaFe',
    url: 'https://notebook.google.com/notebook/ad68652d-0ea8-402a-81db-5ae61051f125',
    descripcion: 'Cuaderno con reglamentos, actas de asamblea y gobernanza EducaFe.',
  },
  {
    nombre: 'Carpeta de Drive — Documentos de formación',
    url: 'https://drive.google.com/drive/folders/1cA12aALYfYpwp4r2zJkG4baUlSk9ZHkb',
    descripcion: 'Manual de la mentora, políticas, DPL y lecturas de autoestudio.',
  },
  {
    nombre: 'Portal Académico Chanak & Dual Diploma',
    url: 'https://portal.chanakacademy.org/',
    descripcion: 'Estructura de vías de material, Dual Diploma y recursos para familias.',
  },
  {
    nombre: 'Web institucional Chanak Academy',
    url: 'https://www.chanakacademy.org/',
    descripcion: 'Misión, visión, programas y registro escolar FLDOE #134620.',
  },
]

// Estructura oficial de 8 bloques traducidos al español y divididos en los 3 niveles
export const BLOQUES = [
  // ─────────────── NIVEL 1 — Mentora Off Campus & Dual Diploma (Autoestudio 180h) ───────────────
  {
    id: 'B1',
    nivel: 1,
    numero: 1,
    titulo: 'Filosofía Mastery Learner y Autoestudio (A.C.E., Lifepac, CLE)',
    horas: 50,
    modulos: [
      {
        id: '1.1',
        titulo: 'Aprendizaje por Dominio: teoría y aplicación práctica (Bloom, Carroll)',
        horas: 10,
        modalidad: 'NotebookLM + taller práctico',
        evaluacion: 'Caso práctico',
        indicadores: ['T1a', 'T1b', 'T1c', 'T3a'],
      },
      {
        id: '1.2',
        titulo: 'Formación de Supervisora A.C.E. y Metodología de Autoestudio',
        horas: 12,
        modalidad: 'Entrenamiento A.C.E. + Portal',
        evaluacion: 'Cuestionario + Certificación A.C.E.',
        indicadores: ['T1d', 'T1e', 'T2a'],
        recursoUrl: 'https://sites.google.com/chanakacademy.org/entrenamientomentores/inicio?authuser=2',
      },
      {
        id: '1.3',
        titulo: 'Las 4 Vías de Material Curricular (A.C.E., LIFEPAC, CLE, Flex): estructura y uso',
        horas: 10,
        modalidad: 'Lectura + exploración de portal',
        evaluacion: 'Cuestionario',
        indicadores: ['T1d', 'T1e', 'T2a', 'T2e'],
      },
      {
        id: '1.4',
        titulo: 'Seguimiento Diario de Metas, Estación de Revisión y Evaluación de Dominio',
        horas: 10,
        modalidad: 'Portal + demostración SIS',
        evaluacion: 'Simulación de flujo',
        indicadores: ['T2f', 'T2g', 'T3b', 'T3n'],
      },
      {
        id: '1.5',
        titulo: 'Misión, Visión y Cosmovisión Bíblica en el Sistema Chanak (60/20/20) y Perfil del Estudiante',
        horas: 8,
        modalidad: 'NotebookLM + estudio institucional',
        evaluacion: 'Cuestionario + caso',
        indicadores: ['F1a', 'F1b', 'F1e', 'F2d'],
      },
    ],
  },
  {
    id: 'B2',
    nivel: 1,
    numero: 2,
    titulo: 'Aprendizaje Basado en Proyectos, Extensión Local y Habilidades para la Vida',
    horas: 30,
    modulos: [
      {
        id: '2.1',
        titulo: 'Aprendizaje Basado en Proyectos (PBL) para alineación curricular local',
        horas: 10,
        modalidad: 'Taller + diseño de proyecto',
        evaluacion: 'Proyecto PBL',
        indicadores: ['T1e', 'T1f', 'T4e'],
      },
      {
        id: '2.2',
        titulo: 'Habilidades para la Vida y Liderazgo (Semilla a Lanzamiento y ChanakCoins)',
        horas: 10,
        modalidad: 'Portal + guía metodológica',
        evaluacion: 'Proyecto de Habilidades',
        indicadores: ['T1e', 'T1f', 'T1o', 'W3'],
      },
      {
        id: '2.3',
        titulo: 'Apertura del Día: devocional, carácter y comunidad de aprendizaje',
        horas: 10,
        modalidad: 'Observación + práctica en aula',
        evaluacion: 'Planificación de apertura',
        indicadores: ['F1e', 'W1', 'W2', 'T2h'],
      },
    ],
  },
  {
    id: 'B3',
    nivel: 1,
    numero: 3,
    titulo: 'Seguridad en Línea y Protocolos de Ciberseguridad Estudiantil',
    horas: 30,
    modulos: [
      {
        id: '3.1',
        titulo: 'Política de Protección Infantil y Salvaguarda Institucional de Chanak',
        horas: 8,
        modalidad: 'Lectura + análisis de caso',
        evaluacion: 'Cuestionario + protocolo',
        indicadores: ['W1', 'W2', 'G9'],
      },
      {
        id: '3.2',
        titulo: 'Curso externo certificado: Normas Mínimas de Protección Infantil',
        horas: 6,
        modalidad: 'Plataforma externa certificada',
        evaluacion: 'Certificado de superación',
        indicadores: ['W1', 'W2', 'T5a'],
      },
      {
        id: '3.3',
        titulo: 'Ciberseguridad estudiantil, privacidad de datos y protección en línea',
        horas: 8,
        modalidad: 'Taller + simulación',
        evaluacion: 'Evaluación de Ciberseguridad',
        indicadores: ['W1', 'W3', 'R2'],
      },
      {
        id: '3.4',
        titulo: 'Protocolo de reporte en 6 pasos, rol del Oficial de Protección y Denuncia Segura',
        horas: 8,
        modalidad: 'Taller + simulación de caso',
        evaluacion: 'Simulacro de reporte',
        indicadores: ['W1', 'W2', 'G9'],
      },
    ],
  },
  {
    id: 'B4',
    nivel: 1,
    numero: 4,
    titulo: 'Liderazgo Remoto, Mentoría y Marco de Intervención Académica',
    horas: 30,
    modulos: [
      {
        id: '4.1',
        titulo: 'Diagnóstico, ubicación y Plan Educativo Individualizado (PEI)',
        horas: 8,
        modalidad: 'Taller práctico de diseño',
        evaluacion: 'PEI simulado',
        indicadores: ['T1c', 'T1r', 'T4b', 'T4g'],
      },
      {
        id: '4.2',
        titulo: 'Diferenciación e intervención académica remota: estrategias de avance',
        horas: 8,
        modalidad: 'Caso + taller',
        evaluacion: 'Registro de intervención',
        indicadores: ['T1c', 'T1s', 'T4e', 'T4h'],
      },
      {
        id: '4.3',
        titulo: 'Liderazgo remoto y comunicación eficaz con familias',
        horas: 8,
        modalidad: 'Simulación + uso de plantillas',
        evaluacion: 'Simulación de entrevista',
        indicadores: ['F2d', 'T4f', 'T4j', 'W4'],
      },
      {
        id: '4.4',
        titulo: 'Sistema de Información Académica (SIS) & Google Workspace: boletines y notas',
        horas: 6,
        modalidad: 'Demostración práctica en SIS',
        evaluacion: 'Registro simulado en SIS',
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
        evaluacion: 'Portafolio de evidencias',
        indicadores: ['T3', 'T4', 'F2d'],
      },
      {
        id: '5.3',
        titulo: 'Evaluación final y retroalimentación con la Dirección Académica',
        horas: 5,
        modalidad: 'Reunión + aplicación de rúbrica',
        evaluacion: 'Rúbrica final de certificación',
        indicadores: ['T5a', 'T5b'],
      },
    ],
  },

  // ─────────── NIVEL 2 — Coordinadora Certificada: Dirección de Centro Chanak (300h) ───────────
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
        modalidad: 'NotebookLM + estudio de caso',
        evaluacion: 'Cuestionario',
        indicadores: ['T1a', 'T4a'],
      },
      {
        id: '6.2',
        titulo: 'Psicología emocional y neurodiversidad en el aula',
        horas: 10,
        modalidad: 'Lectura + análisis práctico',
        evaluacion: 'Caso práctico',
        indicadores: ['W3', 'T4b'],
      },
      {
        id: '6.3',
        titulo: 'Conducta, motivación y gestión de crisis en la adolescencia',
        horas: 10,
        modalidad: 'Taller + resolución de casos',
        evaluacion: 'Plan de intervención',
        indicadores: ['W1', 'W4'],
      },
      {
        id: '6.4',
        titulo: 'Acompañamiento psicopedagógico y relación familia-escuela',
        horas: 10,
        modalidad: 'Simulación de orientación familiar',
        evaluacion: 'Entrevista simulada',
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
        titulo: 'Estructura Institucional: Oficina Central vs. Centro de Aprendizaje Local',
        horas: 20,
        modalidad: 'Lectura + manual operativo Chanak',
        evaluacion: 'Plan operativo de Sede',
        indicadores: ['G1', 'G2', 'G14'],
      },
      {
        id: '7.2',
        titulo: 'Políticas Operativas: Admisiones, Matrícula, Contratos y Sistema SIS',
        horas: 20,
        modalidad: 'Taller + práctica en SIS Chanak',
        evaluacion: 'Simulación de admisión',
        indicadores: ['G5', 'G8', 'R1'],
      },
      {
        id: '7.3',
        titulo: 'Supervisión Académica de Mentoras y Calidad Institucional',
        horas: 20,
        modalidad: 'Taller + aplicación de rúbricas',
        evaluacion: 'Observación de clase simulada',
        indicadores: ['T5a', 'T5b', 'G15'],
      },
      {
        id: '7.4',
        titulo: 'Cumplimiento Normativo Local, Registro FLDOE y Código de Ética',
        horas: 20,
        modalidad: 'Lectura + lista de verificación',
        evaluacion: 'Verificación normativa',
        indicadores: ['G14', 'R1j', 'G5'],
      },
    ],
  },

  // ─────────── NIVEL 3 — Socia Visionaria: Proyectos Educativos & Red EducaFe (Autoestudio Libre) ───────────
  {
    id: 'B8',
    nivel: 3,
    numero: 8,
    titulo: 'Gestión de Proyectos Educativos y Red EducaFe',
    horas: 0,
    modoHoras: 'Autoestudio de Gobernanza',
    modulos: [
      {
        id: '8.1',
        titulo: 'Operaciones y Gobernanza de Hubs EducaFe-Chanak (Modalidades A y B)',
        horas: 0,
        modalidad: 'Autoestudio + cuaderno EducaFe',
        evaluacion: 'Plan operativo de Hub',
        indicadores: ['G1', 'G2', 'G14'],
      },
      {
        id: '8.2',
        titulo: 'Presentación de Propuestas a Consejos de Iglesias y Diaconados',
        horas: 0,
        modalidad: 'Autoestudio + plantillas institucionales',
        evaluacion: 'Propuesta formal a Iglesia',
        indicadores: ['G14', 'G16', 'F2d'],
      },
      {
        id: '8.3',
        titulo: 'Administración Financiera de Hub, Subvenciones (Grants), Becas y Sostenibilidad',
        horas: 0,
        modalidad: 'Caso práctico + presupuesto de Hub',
        evaluacion: 'Presupuesto y Memoria Social',
        indicadores: ['R1', 'G8'],
      },
      {
        id: '8.4',
        titulo: 'Relaciones Institucionales, Tercer Sector y Convenios Territoriales',
        horas: 0,
        modalidad: 'Proyecto + borrador de convenio',
        evaluacion: 'Convenio marco de colaboración',
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
