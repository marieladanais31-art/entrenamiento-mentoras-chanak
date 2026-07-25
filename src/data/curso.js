// ============================================================
// Información general del curso (portada estilo Prospero Learning)
// ============================================================

export const CURSO = {
  titulo: 'Certificación de Mentoras Chanak',
  subtitulo: 'Acompañar con excelencia, proteger con criterio, servir con propósito',
  nivel1: 'Chanak-Certified Mentor · 180 horas',
  nivel2: 'Chanak-Certified Coordinator · 300 horas',
  resumen:
    'Programa oficial de formación de Chanak International Academy (FLDOE #134620, candidata a acreditación MSA-CESS) para mentoras y coordinadoras de sus Learning Implementation Sites. A través de 10 bloques temáticos aprenderás a acompañar estudiantes bajo el modelo 60/20/20 y la metodología de Mastery Learning, a proteger a los menores con protocolos verificables, a dominar el SIS y el Portal Chanak, y a comunicarte con familias con verdad y prudencia. Cada módulo combina lecciones en vídeo, lectura guiada y práctica real, y se valida con un Knowledge Check al 80% — el mismo estándar de dominio que aplicamos a nuestros estudiantes.',
  dirigidoA:
    'Mentoras en formación de Chanak International Academy, coordinadoras de sede en preparación y personal educativo autorizado por la oficina central.',
  objetivos: [
    'Explicar la misión, visión y valores de Chanak (el Shemá, Proverbios 22:6) y aplicar su cosmovisión bíblica al acompañamiento diario.',
    'Aplicar la metodología de Mastery Learning: dominio mínimo del 80%, corrección formativa y avance con evidencia, nunca por calendario.',
    'Supervisar el trabajo del estudiante en las 4 vías de material (A.C.E., LIFEPAC, CLE y Chanak Flex) con sus protocolos específicos.',
    'Elaborar y dar seguimiento al PEI (Plan Educativo Individualizado) a partir del diagnóstico de ubicación.',
    'Ejecutar el protocolo de protección infantil de 6 pasos, conocer el rol del DSL y mantener conducta segura en todo momento.',
    'Registrar el progreso académico en el SIS Chanak y orientar a las familias en el Portal LMS sin exponer datos sensibles.',
    'Comunicar con familias reportes, reuniones y orientación respetando la autoridad familiar (Family Authority).',
    'Nivel 2: dirigir un Learning Implementation Site — gobernanza, supervisión de mentoras, calidad, datos y plan de apertura de sede.',
  ],
  metodologia: [
    { icono: '🎬', nombre: 'Vídeo-lección', detalle: 'Guion desarrollado listo para Google Vids' },
    { icono: '📖', nombre: 'Lectura guiada', detalle: 'Documentos del Drive y NotebookLM' },
    { icono: '🛠', nombre: 'Práctica real', detalle: 'Talleres, simulaciones y SIS demo' },
    { icono: '✅', nombre: 'Knowledge Check', detalle: 'Test de dominio al 80% por módulo' },
  ],
  certificaciones: [
    {
      nombre: 'Chanak-Certified Mentor',
      horas: 180,
      detalle: 'Bloques 1–6 · Capacita para acompañar alumnos bajo supervisión de la oficina central.',
    },
    {
      nombre: 'Chanak-Certified Coordinator',
      horas: 300,
      detalle: 'Bloques 1–10 · Capacita para dirigir un Learning Implementation Site y supervisar mentoras.',
    },
  ],
  // Umbral de dominio para aprobar cada Knowledge Check (coherente con Mastery Learning)
  umbralAprobacion: 0.8,
}
