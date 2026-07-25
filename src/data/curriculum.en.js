// Traducción al inglés de la estructura del curso: títulos de bloque y de
// módulo, modalidades y tipos de evaluación. Las horas e indicadores MSA no se
// traducen. Se aplica sobre curriculum.js mediante traducirBloques().

export const BLOQUES_EN = {
  B1: 'Institutional Foundations',
  B2: 'Academic Supervision',
  B3: 'Supporting the Student and Family',
  B4: 'Child Protection and Well-Being',
  B5: 'Technology and Tools',
  B6: 'Supervised Practice + Final Project',
  B7: 'Governance and Site Operations',
  B8: 'Leadership and Mentor Supervision',
  B9: 'Quality and Continuous Improvement',
  B10: 'Coordination Practice + Final Project',
}

export const MODULOS_EN = {
  '1.1': 'Chanak’s Mission, Vision and Values',
  '1.2': 'Biblical worldview applied to education',
  '1.3': 'Portrait of a Learner and Portrait of an Educator',
  '1.4': 'The Chanak Growth System and the 60/20/20 framework',
  '1.5': 'Code of conduct and professional ethics',
  '2.1': 'Mastery Learning: theory and practical application (Bloom, Carroll)',
  '2.2': 'The 4 material tracks (A.C.E., LIFEPAC, CLE, Flex): structure and use',
  '2.3': 'Diagnosis, placement and the ILP (Individualized Learning Plan)',
  '2.4': 'Daily Goal Tracker, Review Station and Mastery Assessment',
  '2.5': 'Formative and summative assessment: report cards and records',
  '3.1': 'Differentiation and academic intervention: what to do when a student stalls',
  '3.2': 'Communicating with families: reports, meetings, guidance',
  '3.3': 'Opening Exercises: devotional, character and learning community',
  '3.4': 'Life Skills & Leadership: Seedling → Launch and ChanakCoins',
  '4.1': 'Chanak’s Child Protection and Safeguarding Policy',
  '4.2': 'Certified external course: Minimum Standards for Child Protection (Alliance/CPMS or equivalent)',
  '4.3': 'Reporting protocol (6 steps), the role of the DSL, whistleblowing',
  '4.4': 'Emotional well-being and a safe environment in distance education',
  '5.1': 'Chanak SIS: navigation, grade entry, ILP, report cards, contracts',
  '5.2': 'LMS Portal: structure, material tracks, family resources',
  '5.3': 'Google Workspace, NotebookLM and communication tools',
  '6.1': 'Practice observation: accompanying 2 weeks of real learning',
  '6.2': 'Integrative project: evidence portfolio for one student (anonymized)',
  '6.3': 'Final assessment and feedback with the Head of LSP',
  '7.1': 'LSP structure: central office vs. Learning Implementation Site',
  '7.2': 'Operational policies: admissions, enrollment, contracts, payments',
  '7.3': 'Local compliance: host-country regulation, insurance, occupancy',
  '7.4': 'Working with churches and partners: the Shared Rental model',
  '8.1': 'Academic supervision: how to observe, evaluate and give feedback to a mentor',
  '8.2': 'Planning and coordinating the local team',
  '8.3': 'Managing conflict, complaints and family communication',
  '8.4': 'Continuous professional development: building a culture of improvement',
  '9.1': 'Quality assurance: program review, surveys, the PDCA cycle',
  '9.2': 'Academic data analysis: interpreting SIS results to improve',
  '9.3': 'Institutional self-assessment: preparing a site mini Self-Study',
  '10.1': 'Practice: coordinating a site’s operations for 4 weeks',
  '10.2': 'Final project: Opening Plan for a Learning Implementation Site',
  '10.3': 'Final assessment and certification with the Head of LSP + Board',
}

// Modalidades y evaluaciones se repiten mucho: se traducen por diccionario.
export const MODALIDAD_EN = {
  'NotebookLM + lectura': 'NotebookLM + reading',
  'NotebookLM + reflexión': 'NotebookLM + reflection',
  'Lectura + discusión': 'Reading + discussion',
  'NotebookLM + vídeo': 'NotebookLM + video',
  'Lectura + firma': 'Reading + signature',
  'NotebookLM + taller': 'NotebookLM + workshop',
  'Lectura + portal': 'Reading + portal',
  'Taller práctico': 'Hands-on workshop',
  'Portal + SIS demo': 'Portal + SIS demo',
  'SIS demo + taller': 'SIS demo + workshop',
  'Caso + taller': 'Case study + workshop',
  'Role-play + plantillas': 'Role-play + templates',
  'Observación + práctica': 'Observation + practice',
  'Portal + guía': 'Portal + guide',
  'Lectura + caso': 'Reading + case study',
  'Online externo': 'External online course',
  'Taller + simulación': 'Workshop + simulation',
  'SIS demo práctico': 'Hands-on SIS demo',
  'Portal práctico': 'Hands-on portal',
  'Práctica supervisada': 'Supervised practice',
  'Proyecto individual': 'Individual project',
  'Reunión + rúbrica': 'Meeting + rubric',
  'Taller + SIS': 'Workshop + SIS',
  'Lectura + checklist': 'Reading + checklist',
  'Caso + plantillas': 'Case study + templates',
  'Taller + rúbrica': 'Workshop + rubric',
  'Role-play': 'Role-play',
  'Lectura + reflexión': 'Reading + reflection',
  'Lectura + taller': 'Reading + workshop',
  'SIS + taller': 'SIS + workshop',
  'Taller guiado': 'Guided workshop',
  'Presentación + rúbrica': 'Presentation + rubric',
}

export const EVALUACION_EN = {
  Quiz: 'Quiz',
  Ensayo: 'Essay',
  'Quiz + caso': 'Quiz + case study',
  Firma: 'Signature',
  'Caso práctico': 'Case study',
  'PEI simulado': 'Simulated ILP',
  Simulación: 'Simulation',
  'Boletín demo': 'Demo report card',
  'Log de intervención': 'Intervention log',
  Planificación: 'Lesson plan',
  'Proyecto LS': 'Life Skills project',
  'Quiz + protocolo': 'Quiz + protocol',
  Certificado: 'Certificate',
  Simulacro: 'Drill',
  Reflexión: 'Reflection',
  'Tarea en SIS': 'SIS assignment',
  'Navegación guiada': 'Guided navigation',
  Tarea: 'Assignment',
  'Diario de observación': 'Observation journal',
  Portafolio: 'Portfolio',
  'Rúbrica final': 'Final rubric',
  'Plan de sede': 'Site plan',
  Checklist: 'Checklist',
  'Observación simulada': 'Simulated observation',
  'Plan semanal': 'Weekly plan',
  'Plan de DPC': 'CPD plan',
  'Plan QA': 'QA plan',
  Informe: 'Report',
  Borrador: 'Draft',
  'Diario + informe': 'Journal + report',
  'Plan completo': 'Full plan',
  Rúbrica: 'Rubric',
}

// Devuelve los bloques con los textos traducidos si idioma === 'en'.
export function traducirBloques(bloques, idioma) {
  if (idioma !== 'en') return bloques
  return bloques.map((b) => ({
    ...b,
    titulo: BLOQUES_EN[b.id] || b.titulo,
    modulos: b.modulos.map((m) => ({
      ...m,
      titulo: MODULOS_EN[m.id] || m.titulo,
      modalidad: MODALIDAD_EN[m.modalidad] || m.modalidad,
      evaluacion: EVALUACION_EN[m.evaluacion] || m.evaluacion,
    })),
  }))
}

export function traducirModulo(modulo, idioma) {
  if (idioma !== 'en' || !modulo) return modulo
  return {
    ...modulo,
    titulo: MODULOS_EN[modulo.id] || modulo.titulo,
    modalidad: MODALIDAD_EN[modulo.modalidad] || modulo.modalidad,
    evaluacion: EVALUACION_EN[modulo.evaluacion] || modulo.evaluacion,
    bloqueTitulo: BLOQUES_EN[modulo.bloqueId] || modulo.bloqueTitulo,
  }
}

export const RECURSOS_EN = {
  'SIS Chanak — Entorno de práctica': {
    nombre: 'Chanak SIS — Practice environment',
    descripcion:
      'Official academic system. Practice with the demo accounts, never with real student data.',
    aviso:
      'Shared accounts for training only. Do not enter real student or family data.',
  },
  'NotebookLM — Cuadernos de formación Chanak': {
    nombre: 'NotebookLM — Chanak training notebooks',
    descripcion: 'Notebooks with the institutional documents (cover part of Units 1 and 2).',
  },
  'Carpeta de Drive — Documentos de formación': {
    nombre: 'Drive folder — Training documents',
    descripcion: 'Handbook, policies, DPL and reading materials.',
  },
  'Portal LMS Chanak': {
    nombre: 'Chanak LMS Portal',
    descripcion: 'Material track structure and resources for families.',
  },
  'Web institucional': {
    nombre: 'Institutional website',
    descripcion: 'Mission, vision, programs and FLDOE registration #134620.',
  },
}

export function traducirRecursos(recursos, idioma) {
  if (idioma !== 'en') return recursos
  return recursos.map((r) => {
    const tr = RECURSOS_EN[r.nombre]
    if (!tr) return r
    return {
      ...r,
      nombre: tr.nombre,
      descripcion: tr.descripcion,
      demo: r.demo ? { ...r.demo, aviso: tr.aviso || r.demo.aviso } : undefined,
    }
  })
}
