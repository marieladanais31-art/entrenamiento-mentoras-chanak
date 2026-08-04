// Traducción al inglés de la estructura del curso
export const BLOQUES_EN = {
  B1: 'Mastery Learner Philosophy (A.C.E., Lifepac, CLE)',
  B2: 'Project-Based Learning, Life Skills and Early Childhood Education',
  B3: 'Online Safety and Student Cybersecurity Protocols',
  B4: 'Remote Leadership, Mentoring, Dual Diploma and LMS',
  B5: 'Supervised Practice + Integrative Project',
  B6: 'Child and Adolescent Psychology',
  B7: 'Educational Project Management, EducaFe Hubs and Partnerships',
}

export const MODULOS_EN = {
  '1.1': 'Mastery Learning: theory and practical application (Bloom, Carroll)',
  '1.2': 'A.C.E. Supervisor Training & Self-Instructional Methodology',
  '1.3': 'The 4 material tracks (A.C.E., LIFEPAC, CLE, Flex): structure and use',
  '1.4': 'Daily Goal Tracker, Review Station and Mastery Assessment',
  '1.5': 'Mission, Vision and Biblical Worldview in Chanak Growth System (60/20/20)',
  '2.1': 'Project-Based Learning (PBL) for local curriculum alignment',
  '2.2': 'Life Skills & Leadership: Seedling → Launch and ChanakCoins',
  '2.3': 'Early Childhood Education and English Learners (English App, ABC Learners)',
  '3.1': 'Chanak’s Child Protection and Safeguarding Policy',
  '3.2': 'Certified external course: Minimum Standards for Child Protection',
  '3.3': 'Student cybersecurity, data privacy and online protection',
  '3.4': 'Reporting protocol (6 steps), DSL role and whistleblowing',
  '4.1': 'Diagnosis, placement and ILP (Individualized Learning Plan)',
  '4.2': 'Dual Diploma Program: structure, Family LMS and academic tracking',
  '4.3': 'Differentiation and remote academic intervention: progress strategies',
  '4.4': 'Remote leadership, Chanak SIS and effective communication with families',
  '5.1': 'Practice observation: accompanying 2 weeks of real learning',
  '5.2': 'Integrative project: evidence portfolio for one student (anonymized)',
  '5.3': 'Final assessment and feedback with Head of LSP',
  '6.1': 'Cognitive development and developmental stages (Piaget, Vygotsky)',
  '6.2': 'Emotional psychology and neurodiversity in the classroom',
  '6.3': 'Behavior, motivation and crisis management in adolescence',
  '6.4': 'Psychopedagogical guidance and family-school relationship',
  '7.1': 'Requirements and preparation for launching an EducaFe-Chanak Hub',
  '7.2': 'How to present proposals to Churches, Deacons and Regional Partners',
  '7.3': 'How to start and manage a Hub study group (Track A and Track B)',
  '7.4': 'Mentor Supervision, Financial Administration, Grants and Sustainability',
}

export const MODALIDAD_EN = {
  'NotebookLM + lectura': 'NotebookLM + reading',
  'NotebookLM + reflexión': 'NotebookLM + reflection',
  'Lectura + discusión': 'Reading + discussion',
  'NotebookLM + vídeo': 'NotebookLM + video',
  'A.C.E. Training + Portal': 'A.C.E. Training + Portal',
  'Lectura + portal': 'Reading + portal',
  'Portal + SIS demo': 'Portal + SIS demo',
  'Taller + diseño de proyecto': 'Workshop + project design',
  'Portal + guía': 'Portal + guide',
  'Taller + App de Inglés': 'Workshop + English App',
  'Online externo': 'External online course',
  'Taller + simulación': 'Workshop + simulation',
  'Taller práctico': 'Hands-on workshop',
  'Portal Dual Diploma + taller': 'Dual Diploma Portal + workshop',
  'Caso + taller': 'Case study + workshop',
  'SIS demo + plantillas': 'SIS demo + templates',
  'Práctica supervisada': 'Supervised practice',
  'Proyecto individual': 'Individual project',
  'Reunión + rúbrica': 'Meeting + rubric',
  'NotebookLM + caso': 'NotebookLM + case study',
  'Lectura + análisis': 'Reading + analysis',
  'Taller + casos': 'Workshop + case studies',
  'Role-play + orientación': 'Role-play + guidance',
  'Lectura + portal EducaFe': 'Reading + EducaFe portal',
  'Presentación + plantillas': 'Presentation + templates',
  'Taller práctico de Hubs': 'Hands-on Hubs workshop',
  'Caso práctico + presupuesto': 'Case study + budget',
}

export const EVALUACION_EN = {
  Quiz: 'Quiz',
  'Caso práctico': 'Case study',
  'Quiz + Certificación A.C.E.': 'Quiz + A.C.E. Certification',
  Simulación: 'Simulation',
  'Quiz + caso': 'Quiz + case study',
  'Proyecto PBL': 'PBL Project',
  'Proyecto LS': 'Life Skills project',
  'Simulación de clase': 'Class simulation',
  'Quiz + protocolo': 'Quiz + protocol',
  Certificado: 'Certificate',
  'Quiz de Ciberseguridad': 'Cybersecurity Quiz',
  Simulacro: 'Drill',
  'PEI simulado': 'Simulated ILP',
  'Caso Dual Diploma': 'Dual Diploma case study',
  'Log de intervención': 'Intervention log',
  'Diario de observación': 'Observation journal',
  Portafolio: 'Portfolio',
  'Rúbrica final': 'Final rubric',
  'Checklist de Apertura de Hub': 'Hub Opening Checklist',
  'Propuesta a Iglesia': 'Church Proposal',
  'Plan de Grupo Hub A/B': 'Hub Group Plan A/B',
  'Presupuesto y Memoria Social': 'Budget and Social Report',
}

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

export const RECURSOS_EN = {}

export function traducirRecursos(recursos, idioma) {
  return recursos
}
