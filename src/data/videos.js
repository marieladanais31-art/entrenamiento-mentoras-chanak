// ============================================================
// BIBLIOTECA ESENCIAL DE VÍDEOS · 2026–2027 (28 vídeos)
//
// Configuración central: cada vídeo es independiente y puede sustituirse sin
// reconstruir el curso. Para publicar o cambiar un vídeo:
//   1) pega aquí su `videoUrl` (MP4 directo, YouTube, Vimeo, Google Drive,
//      Google Vids o cualquier URL), o
//   2) usa el botón de administración dentro del módulo: la URL guardada en
//      Supabase (tabla `videos`, modulo_id = id del vídeo) tiene prioridad.
//
// Campos: id · titulo · bloque · descripcion · videoUrl · duracion · orden
//         modulo (módulo donde aparece) · guion (puntos clave del guion)
// Los guiones completos están en GUIONES_VIDEOS_2026-2027.md
// ============================================================

export const CATEGORIAS_VIDEO = [
  'Fundamentos',
  'Programas',
  'Currículos',
  'Académico',
  'Sistemas',
  'Operación',
  'Compliance',
  'Coordinación',
]

export const VIDEOS = [
  // ── Fundamentos ──
  {
    id: 'V01', orden: 1, bloque: 'Fundamentos', modulo: 'T1.1', duracion: '7 min', videoUrl: '',
    titulo: 'Quién es Chanak',
    descripcion: 'Identidad, misión, entidad titular, registros y estatus reales de Chanak International Academy.',
    guion: [
      'Chanak International Academy es una escuela privada cristiana K–12 registrada en Florida (FLDOE #134620), operada por Chanak TrainUp Education, Inc., organización sin fines de lucro 501(c)(3).',
      'El nombre viene del hebreo chanak: dedicar, consagrar, instruir. La misión es una educación integral cristiana de excelencia internacional.',
      'Estatus correctos: MSA-CESS Candidate (no acreditada; decisión de la Comisión prevista para noviembre de 2026). Candid Gold es un sello de transparencia, no una acreditación.',
      'Chanak Central fija el marco académico; los centros y entidades colaboradoras lo implementan.',
      'EducaFe y otras entidades son organizaciones colaboradoras independientes, no departamentos de Chanak.',
    ],
  },
  {
    id: 'V02', orden: 2, bloque: 'Fundamentos', modulo: 'T1.2', duracion: '6 min', videoUrl: '',
    titulo: 'El modelo 60 / 20 / 20',
    descripcion: 'Core USA, Extensión Local y Life Skills & Leadership: qué es cada parte y cómo se evidencia.',
    guion: [
      '60 % Core USA: inglés, matemáticas, ciencias y estudios sociales con estándares estadounidenses y créditos para el High School Diploma.',
      '20 % Extensión Local: lengua, historia, geografía y cultura del país de residencia y necesidades académicas locales.',
      '20 % Life Skills & Leadership: carácter, vocación, liderazgo y proyecto de vida con cosmovisión bíblica.',
      'Las tres partes tienen objetivos y evidencia; ninguna es "relleno".',
    ],
  },
  {
    id: 'V03', orden: 3, bloque: 'Fundamentos', modulo: 'T1.3', duracion: '7 min', videoUrl: '',
    titulo: 'Un marco académico orientado al dominio',
    descripcion: 'Avanzar cuando se demuestra dominio: el umbral del 80 % y por qué protege al estudiante.',
    guion: [
      'El estudiante avanza cuando demuestra dominio, no cuando lo marca el calendario.',
      'En las evaluaciones de dominio Chanak trabaja con un umbral mínimo del 80 %; si no se alcanza, se refuerza y se vuelve a evaluar.',
      'El dominio protege la dignidad y el estándar a la vez: repetir no es fracasar.',
      'Cada avance se registra en el SIS con evidencia.',
    ],
  },
  {
    id: 'V04', orden: 4, bloque: 'Fundamentos', modulo: 'T1.4', duracion: '7 min', videoUrl: '',
    titulo: 'Qué decide el mentor y qué decide Chanak',
    descripcion: 'Autoridad académica, límites del mentor y la regla resolver · documentar · escalar.',
    guion: [
      'El mentor acompaña, revisa, registra y comunica. Chanak Central decide créditos, promoción, graduación, cambios de vía y documentos oficiales.',
      'Regla práctica: resuelve lo operativo, documenta todo lo relevante y escala lo que afecta a créditos, seguridad, conducta grave o compromisos con la familia.',
      'El mentor nunca promete créditos, homologaciones, fechas de graduación ni financiación estatal.',
    ],
  },
  // ── Programas ──
  {
    id: 'V05', orden: 5, bloque: 'Programas', modulo: 'T2.1', duracion: '8 min', videoUrl: '',
    titulo: 'Off-Campus (Homeschool Guiado)',
    descripcion: 'El programa K–12 completo desde casa: diagnóstico, PEI, mentoría y registro oficial.',
    guion: [
      'Off-Campus (Homeschool Guiado) es el programa escolar completo de Chanak desde casa, de Kindergarten a Grade 12.',
      'Recorrido: diagnóstico → PEI → unidades y evidencias → evaluación de dominio → registro en el SIS → documentación (Report Cards, expediente, transcript y diploma cuando corresponde).',
      'La familia conserva las responsabilidades legales que le correspondan en su país.',
    ],
  },
  {
    id: 'V06', orden: 6, bloque: 'Programas', modulo: 'T2.2', duracion: '9 min', videoUrl: '',
    titulo: 'Dual Diploma: rutas, créditos y homologación',
    descripcion: 'Doble titulación en grados 9–12 sin cambiar de colegio: auditoría, Plan de Ruta y materias Chanak.',
    guion: [
      'El estudiante sigue en su colegio y añade una ruta académica estadounidense con Chanak.',
      'Auditoría del expediente → créditos reconocidos y pendientes por escrito → Plan de Ruta de 4, 3, 2 años o acelerada.',
      'Materias Chanak: Academic English, American History, U.S. Civics & Economics, Bible / Christian Worldview y Life Skills & Leadership.',
      'Homologación: el estudiante continúa su educación local; el diploma estadounidense es una credencial adicional; el reconocimiento solo es necesario cuando una autoridad concreta lo requiere.',
    ],
  },
  {
    id: 'V07', orden: 7, bloque: 'Programas', modulo: 'T2.3', duracion: '7 min', videoUrl: '',
    titulo: 'Life Skills & Leadership',
    descripcion: 'Niveles Juniors, Seedling, Explorer, Builder y Launch y las áreas del programa.',
    guion: [
      'Niveles: Juniors (8–13), Seedling (14), Explorer (15), Builder (16), Launch (17).',
      'Áreas: identidad, fortalezas, comunicación, liderazgo, trabajo en equipo, decisiones, hábitos, tiempo, finanzas personales, empleabilidad, CV, entrevista, emprendimiento, ciudadanía digital, vocación y proyecto de vida.',
      'Se trabaja con retos, proyectos y evidencias; los grupos de videollamada son operativos y no equivalen a los niveles curriculares.',
    ],
  },
  {
    id: 'V08', orden: 8, bloque: 'Programas', modulo: 'T2.4', duracion: '8 min', videoUrl: '',
    titulo: 'Partner Learning Center y Certificación Institucional',
    descripcion: 'Dos relaciones institucionales distintas y cómo no confundirlas con los programas familiares.',
    guion: [
      'Partner Learning Center (Sede afiliada): una entidad local implementa un centro presencial Chanak bajo el Acuerdo Marco y la supervisión de Chanak Central.',
      'Certificación Institucional: evaluación, auditoría, registro y documentación del programa de otro centro, con evidencia verificable. Nunca es compra de diploma ni de créditos.',
      'Instrumentos: Convenio de Colaboración Académica (el centro mantiene su identidad) y Acuerdo Marco (Partner Learning Center).',
    ],
  },
  // ── Currículos ──
  {
    id: 'V09', orden: 9, bloque: 'Currículos', modulo: 'T3.1', duracion: '8 min', videoUrl: '',
    titulo: 'A.C.E. · vía de referencia',
    descripcion: 'PACEs, metas, Checkups, Self Tests y PACE Tests: cómo se supervisa la vía preferente.',
    guion: [
      'A.C.E. es la Reference / Preferred Curriculum Pathway de Chanak.',
      'Estructura: Diagnostic Test, PACEs, metas diarias, Checkups, Self Test y PACE Test, con progresión individual.',
      'El mentor supervisa metas, corrección, Self Tests y evidencias, y registra resultados en el SIS.',
    ],
  },
  {
    id: 'V10', orden: 10, bloque: 'Currículos', modulo: 'T3.2', duracion: '7 min', videoUrl: '',
    titulo: 'LIFEPAC y Christian Light Education',
    descripcion: 'Dos vías alternativas revisadas: qué tienen en común con A.C.E. y en qué se diferencian.',
    guion: [
      'LIFEPAC (Alpha Omega Publications): Reviewed Alternative Curriculum Pathway con worktexts K–12, autodirigidos y orientados al dominio.',
      'Christian Light Education: Reviewed Alternative Curriculum Pathway con LightUnits, aprendizaje incremental y repaso continuo. Su metodología no es idéntica a la de A.C.E.',
      'La inclusión de una editorial o vía curricular no supone reconocimiento automático de todos sus cursos o créditos.',
    ],
  },
  {
    id: 'V11', orden: 11, bloque: 'Currículos', modulo: 'T3.3', duracion: '7 min', videoUrl: '',
    titulo: 'Chanak Flex y la elección de vía',
    descripcion: 'La vía individualizada revisada y cómo se decide (o cambia) la vía curricular.',
    guion: [
      'Chanak Flex: Individualized Reviewed Curriculum Pathway con materiales aprobados en el PEI y evaluaciones supervisadas por Chanak.',
      'La vía se elige desde el diagnóstico, el PEI y las necesidades del estudiante; un cambio de vía lo aprueba Chanak, no el mentor ni la familia por su cuenta.',
      'Siempre se documenta la razón del cambio y la equivalencia de lo ya realizado.',
    ],
  },
  {
    id: 'V12', orden: 12, bloque: 'Currículos', modulo: 'T3.4', duracion: '8 min', videoUrl: '',
    titulo: 'Del diagnóstico al PEI',
    descripcion: 'Cómo se lee un diagnóstico y se construye un Plan Educativo Individualizado.',
    guion: [
      'El diagnóstico mide el nivel real y las lagunas por materia; no es un examen de aprobado o suspenso.',
      'El PEI fija punto de partida, vía curricular, metas, ritmo y evidencias, y se registra en el SIS.',
      'El PEI se revisa cuando los datos lo justifican, no por presión externa.',
    ],
  },
  // ── Académico ──
  {
    id: 'V13', orden: 13, bloque: 'Académico', modulo: 'T4.1', duracion: '9 min', videoUrl: '',
    titulo: 'Cómo leer el Scope & Sequence K–12',
    descripcion: 'Competencias, secuencia, evidencia, alineación con Florida y cosmovisión bíblica por grado y área.',
    guion: [
      'El Scope & Sequence K–12 define qué debe saber y ser capaz de hacer un estudiante Chanak en cada etapa.',
      'Columnas: área, curso/nivel, competencias, secuencia, evidencia, Florida Alignment y Biblical Worldview.',
      'Alineación: B.E.S.T. para ELA y Matemáticas; Florida State Academic Standards, accedidos y mapeados mediante CPALMS. Los requisitos de graduación son requisitos de escuela privada establecidos por Chanak.',
    ],
  },
  {
    id: 'V14', orden: 14, bloque: 'Académico', modulo: 'T4.2', duracion: '8 min', videoUrl: '',
    titulo: 'Por debajo del 80 %: intervención',
    descripcion: 'Qué hacer cuando un estudiante no alcanza el dominio o se retrasa.',
    guion: [
      'Por debajo del 80 %: no se avanza; se identifica el error, se re-enseña, se practica y se vuelve a evaluar.',
      'Dos intentos fallidos seguidos son una señal: revisa comprensión, método, nivel o entorno y documenta.',
      'Plan de intervención: objetivo, acciones, plazos, responsables y fecha de revisión, registrado en el SIS.',
    ],
  },
  {
    id: 'V15', orden: 15, bloque: 'Académico', modulo: 'T4.3', duracion: '8 min', videoUrl: '',
    titulo: 'Tres categorías de evaluación',
    descripcion: 'Internal Mastery, External / Standardized Validation y State / Program-Mandated.',
    guion: [
      'A · Internal Mastery Assessment: diagnóstica, formativa, readiness, sumativa y evidencia de dominio.',
      'B · External / Standardized Validation: cuando Chanak requiere evidencia adicional.',
      'C · State / Program-Mandated: cuando una norma o un programa externo la exige.',
      'Las pruebas estandarizadas no son un requisito universal de Chanak.',
    ],
  },
  {
    id: 'V16', orden: 16, bloque: 'Académico', modulo: 'T4.4', duracion: '8 min', videoUrl: '',
    titulo: 'Créditos: evidencia antes que conversión',
    descripcion: 'Reconocimiento de créditos, auditoría del Dual Diploma y discrepancias entre transcript y dominio.',
    guion: [
      'Los créditos se reconocen por asignatura y por evidencia verificable; nunca por conversión automática.',
      'Dual Diploma: hasta aproximadamente 18 de 24 créditos en determinados perfiles, siempre según auditoría individual y resolución escrita.',
      'No se aceptan registros ni calificaciones elaborados con posterioridad para completar requisitos.',
    ],
  },
  // ── Sistemas ──
  {
    id: 'V17', orden: 17, bloque: 'Sistemas', modulo: 'T5.1', duracion: '9 min', videoUrl: '',
    titulo: 'SIS, Portal y Dual Diploma Portal',
    descripcion: 'Tres entornos con funciones distintas. La información oficial vive siempre en el SIS.',
    guion: [
      'SIS: registro oficial (matrículas, PEI, diagnóstico, notas de dominio, boletines, expediente y transcripts).',
      'Portal: orientación y rutina para familias y mentores (Core USA, Chanak Flex, Life Skills, Extensión Local, guías).',
      'Dual Diploma Portal: entorno de aprendizaje del Dual Diploma, con base de datos independiente del SIS.',
      'El portal orienta; el SIS registra.',
    ],
  },
  {
    id: 'V18', orden: 18, bloque: 'Sistemas', modulo: 'T5.2', duracion: '8 min', videoUrl: '',
    titulo: 'La semana del mentor',
    descripcion: 'Revisión semanal, registro, reporting y documentación que se sostiene en una auditoría.',
    guion: [
      'Cada semana: revisar metas y evidencias, registrar en el SIS, anotar alertas y comunicar a la familia.',
      'Documenta hechos, fechas y acuerdos; evita opiniones y diagnósticos.',
      'Un registro hecho a tiempo vale más que uno reconstruido después.',
    ],
  },
  {
    id: 'V19', orden: 19, bloque: 'Sistemas', modulo: 'T5.3', duracion: '9 min', videoUrl: '',
    titulo: 'Familias, escalamiento y práctica supervisada',
    descripcion: 'Comunicación con familias, cuándo escalar y cómo documentar tu práctica supervisada.',
    guion: [
      'Comunicación: clara, escrita cuando hay acuerdos, respetuosa y sin promesas fuera de tu autoridad.',
      'Escalar a Chanak Central: créditos, cambios de vía, conducta grave, safeguarding, quejas formales y asuntos económicos o contractuales.',
      'Práctica supervisada: acompaña un periodo real de aprendizaje, registra observaciones y entrega tu portafolio sin datos personales de estudiantes.',
    ],
  },
  // ── Operación ──
  {
    id: 'V20', orden: 20, bloque: 'Operación', modulo: 'T6.1', duracion: '9 min', videoUrl: '',
    titulo: 'Safeguarding: proteger primero',
    descripcion: 'Señales, respuesta inmediata, registro y comunicación con la persona designada de protección.',
    guion: [
      'Si un estudiante está en peligro inmediato, contacta con los servicios de emergencia.',
      'Escucha sin investigar, no prometas confidencialidad, registra hechos y palabras textuales e informa el mismo día a la persona designada de protección (DSL).',
      'Límites profesionales: comunicación por canales institucionales, nunca a solas sin supervisión ni por redes personales.',
    ],
  },
  {
    id: 'V21', orden: 21, bloque: 'Operación', modulo: 'T6.2', duracion: '6 min', videoUrl: '',
    titulo: 'Online safety y datos',
    descripcion: 'Videollamadas seguras, contraseñas, privacidad y uso de datos de estudiantes.',
    guion: [
      'Usa solo cuentas y plataformas institucionales; nada de datos de estudiantes en dispositivos o chats personales.',
      'Videollamadas con enlace protegido y presencia de la familia o del grupo según el protocolo.',
      'En formación y prácticas usa siempre IDs o datos anonimizados.',
    ],
  },
  {
    id: 'V22', orden: 22, bloque: 'Operación', modulo: 'T6.3', duracion: '7 min', videoUrl: '',
    titulo: 'La Extensión Local',
    descripcion: 'El 20 % local: objetivos, evidencia y la coordinación especializada de lenguas e inglés.',
    guion: [
      'La Extensión Local puede contener lengua, historia, geografía, cultura y necesidades académicas locales.',
      'Debe tener objetivos, actividades y evidencia, igual que el Core.',
      'Ejemplo de rol especializado: Local Language Extension & English Coordinator.',
    ],
  },
  // ── Compliance ──
  {
    id: 'V23', orden: 23, bloque: 'Compliance', modulo: 'T7.1', duracion: '7 min', videoUrl: '',
    titulo: 'Florida · Step Up For Students / EMA',
    descripcion: 'Qué está aprobado (servicio Matrícula) y cómo orientar a una familia sin prometer financiación.',
    guion: [
      'Proveedor: Chanak TrainUp Education, Inc. Servicio aprobado en el Marketplace EMA: Matrícula.',
      'Cualquier otro servicio requiere su propia aprobación.',
      'STATE FUNDING ≠ CURRICULUM: el programa estatal es una capa de acceso o financiación, no el modelo académico.',
      'La elegibilidad la determina siempre el programa estatal.',
    ],
  },
  {
    id: 'V24', orden: 24, bloque: 'Compliance', modulo: 'T7.2', duracion: '7 min', videoUrl: '',
    titulo: 'Alabama CHOOSE y pruebas por estado',
    descripcion: 'Approved Education Service Provider, onboarding en ClassWallet y pruebas exigidas por programa.',
    guion: [
      'Alabama CHOOSE: Chanak es Approved Education Service Provider (ESP); el onboarding en ClassWallet está en curso.',
      'No se usa «Approved Virtual School» mientras no exista confirmación.',
      'Las pruebas estandarizadas dependen del estado, del programa y de la beca: consulta la matriz de cumplimiento.',
    ],
  },
  // ── Coordinación ──
  {
    id: 'V25', orden: 25, bloque: 'Coordinación', modulo: 'T8.1', duracion: '9 min', videoUrl: '',
    titulo: 'Supervisar mentores',
    descripcion: 'Observación, rúbricas, retroalimentación y planes de mejora para el equipo de mentores.',
    guion: [
      'El coordinador observa, revisa registros y evidencias y da retroalimentación concreta.',
      'Rúbrica: preparación, seguimiento semanal, calidad de registro, comunicación con familias y límites profesionales.',
      'Plan de mejora con objetivos y fechas cuando algo no alcanza el estándar.',
    ],
  },
  {
    id: 'V26', orden: 26, bloque: 'Coordinación', modulo: 'T8.2', duracion: '9 min', videoUrl: '',
    titulo: 'Operar un Partner Learning Center',
    descripcion: 'Responsabilidades de la entidad local y de Chanak Central según el Acuerdo Marco.',
    guion: [
      'La entidad local mantiene su personalidad jurídica, cumple la ley local, contrata al personal y garantiza la seguridad.',
      'Chanak Central define el marco académico, supervisa la calidad, emite la documentación académica y autoriza los programas.',
      'Coordinadores y mentores deben completar la formación y certificación Chanak antes de atender estudiantes; el SIS es obligatorio.',
    ],
  },
  {
    id: 'V27', orden: 27, bloque: 'Coordinación', modulo: 'T8.3', duracion: '8 min', videoUrl: '',
    titulo: 'Revisar evidencias y reportar',
    descripcion: 'Revisión de expedientes, evidencia incompleta, incidencias y reporte a Chanak Central.',
    guion: [
      'Revisa que cada nota del SIS tenga evidencia, fecha real y responsable.',
      'Evidencia incompleta: se pide y se completa con trabajo real; nunca se reconstruye a posteriori.',
      'Incidencias graves se reportan a Chanak Central por escrito y sin demora.',
    ],
  },
  {
    id: 'V28', orden: 28, bloque: 'Coordinación', modulo: 'T8.4', duracion: '7 min', videoUrl: '',
    titulo: 'Tu proyecto de coordinación',
    descripcion: 'Cómo planificar, ejecutar y documentar tu práctica supervisada de coordinación.',
    guion: [
      'Elige un ámbito real: supervisión de un equipo, apertura de un grupo, revisión de expedientes o plan de calidad.',
      'Define objetivos, acciones, indicadores y evidencias; ejecuta con supervisión.',
      'Presenta tu portafolio a Chanak Central para la revisión final.',
    ],
  },
]

export function getVideo(id) {
  return VIDEOS.find((v) => v.id === id) || null
}
