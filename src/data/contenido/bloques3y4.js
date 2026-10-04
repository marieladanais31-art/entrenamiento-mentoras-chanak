// BLOQUE 3 — CURRICULUM PATHWAYS · BLOQUE 4 — ACADEMIC FRAMEWORK
// Fuente: 03_INSTITUCIONES (Currículos y Vías Académicas), 08_ACADEMIC_POLICIES, 09_ACADEMIC_FRAMEWORK

const AVISO_VIAS =
  'La inclusión de una editorial o vía curricular no supone reconocimiento automático de todos sus cursos o créditos. Chanak evalúa versión, nivel, asignatura, secuencia, evidencia y compatibilidad con sus requisitos académicos.'

export const BLOQUES_3_4 = {
  'T3.1': {
    resumen:
      'A.C.E. es la vía curricular de referencia y preferente de Chanak (Reference / Preferred Curriculum Pathway). Conocer su estructura permite supervisarla con rigor.',
    objetivos: ['Describir la estructura de PACEs y sus controles.', 'Supervisar metas diarias y Self Tests.', 'Registrar resultados A.C.E. en el SIS.'],
    lecciones: [
      {
        titulo: 'Estructura de la vía A.C.E.',
        guion: [
          'Diagnostic Test para ubicar al estudiante; PACEs por asignatura con progresión individual; metas diarias; Checkups; Self Test y PACE Test al final de cada PACE.',
          'Es la vía de referencia de Chanak porque su lógica de unidades pequeñas, corrección supervisada y dominio coincide con el marco académico de Chanak.',
          AVISO_VIAS,
        ],
      },
      {
        titulo: 'Qué supervisa el mentor',
        guion: [
          'Que las metas diarias sean realistas y se cumplan; que la corrección se haga según el procedimiento; que el Self Test se haga sin ayuda; que el PACE Test cumpla el umbral de dominio.',
          'Registra cada PACE Test con fecha y resultado en el SIS. Un PACE no superado se refuerza antes de repetir.',
        ],
      },
    ],
    practica: {
      situacion: 'Un estudiante quiere hacer tres PACE Tests en un día para «adelantar».',
      preguntas: ['¿Qué riesgos ves?', '¿Qué compruebas antes de permitirlo?', '¿Qué registras?'],
      criterio: 'Se comprueba que las metas, Checkups y Self Tests están completos y con dominio; se evita la prisa sin evidencia; todo se registra con fecha real.',
    },
    quiz: [
      { p: '¿Qué etiqueta tiene A.C.E. en Chanak?', opciones: ['Reviewed Alternative', 'Reference / Preferred Curriculum Pathway', 'Individualized', 'No aprobada'], correcta: 1, explica: 'A.C.E. es la vía de referencia / preferente.' },
      { p: '¿Qué viene al final de cada PACE?', opciones: ['Solo un resumen', 'Self Test y PACE Test', 'Un examen estatal', 'Nada'], correcta: 1, explica: 'Self Test y PACE Test cierran el PACE.' },
      { p: '¿Usar A.C.E. garantiza que se reconozcan todos sus cursos como créditos?', opciones: ['Sí', 'No: la inclusión de una vía no supone reconocimiento automático', 'Solo en High School', 'Solo con apostilla'], correcta: 1, explica: AVISO_VIAS },
      { p: 'Un estudiante suspende un PACE Test. ¿Qué haces?', opciones: ['Pasa al siguiente PACE', 'Refuerzo y nuevo intento cuando haya dominio', 'Lo apruebas por esfuerzo', 'Cambias de vía'], correcta: 1, explica: 'Se refuerza antes de repetir.' },
    ],
    evidencia: 'Describe cómo revisarías una semana de metas A.C.E. de un estudiante.',
  },

  'T3.2': {
    resumen:
      'LIFEPAC y Christian Light Education son vías alternativas revisadas por Chanak. Comparten la orientación al dominio con A.C.E., pero no son iguales entre sí ni a A.C.E.',
    objetivos: ['Describir LIFEPAC y CLE.', 'Explicar en qué se diferencian de A.C.E.', 'Aplicar el aviso sobre reconocimiento de créditos.'],
    lecciones: [
      {
        titulo: 'LIFEPAC',
        guion: [
          'LIFEPAC (Alpha Omega Publications) es una Reviewed Alternative Curriculum Pathway: worktexts K–12 autodirigidos y orientados al dominio, con evaluaciones por unidad.',
          'El mentor supervisa el avance por worktext, las autoevaluaciones y las pruebas de unidad, y registra resultados en el SIS.',
        ],
      },
      {
        titulo: 'Christian Light Education',
        guion: [
          'Christian Light Education es también una Reviewed Alternative Curriculum Pathway: LightUnits con aprendizaje incremental y repaso continuo.',
          'Su metodología no es idéntica a la de A.C.E.: en la Sunrise Edition, los nuevos conceptos se trabajan con lecciones diarias y repaso continuo. No se supervisa como si fuera A.C.E.',
          AVISO_VIAS,
        ],
      },
    ],
    practica: {
      situacion: 'Una familia que usa CLE te pide que apliques «las mismas reglas de A.C.E.» porque «es lo mismo».',
      preguntas: ['¿Es lo mismo? ¿Qué diferencias explicas?', '¿Qué parte del marco sí se mantiene igual?', '¿Qué dices sobre créditos?'],
      criterio: 'CLE no es idéntica a A.C.E.; se respeta su estructura. Se mantienen el dominio, la evidencia y el registro. Los créditos no son automáticos.',
    },
    quiz: [
      { p: '¿Qué etiqueta tienen LIFEPAC y CLE?', opciones: ['Reference / Preferred', 'Reviewed Alternative Curriculum Pathway', 'No revisadas', 'Individualized'], correcta: 1, explica: 'Ambas son vías alternativas revisadas.' },
      { p: '¿Es la metodología de CLE idéntica a la de A.C.E.?', opciones: ['Sí', 'No: trabaja con aprendizaje incremental y repaso continuo', 'Sí, solo cambia el idioma', 'Depende del grado'], correcta: 1, explica: 'CLE tiene su propia metodología.' },
      { p: '¿Qué editorial publica LIFEPAC?', opciones: ['Christian Light', 'Alpha Omega Publications', 'A.C.E.', 'Chanak'], correcta: 1, explica: 'LIFEPAC es de Alpha Omega Publications.' },
      { p: 'Una familia afirma que todo lo que haga con LIFEPAC «cuenta como crédito». ¿Qué respondes?', opciones: ['Correcto', 'La inclusión de una vía no supone reconocimiento automático: Chanak evalúa evidencia y compatibilidad', 'Solo cuenta lo de Matemáticas', 'Nada cuenta'], correcta: 1, explica: AVISO_VIAS },
    ],
    evidencia: 'Escribe tres diferencias prácticas de supervisión entre A.C.E. y CLE.',
  },

  'T3.3': {
    resumen:
      'Chanak Flex es la vía individualizada revisada: materiales aprobados en el PEI y evaluaciones supervisadas por Chanak. Aquí aprendes también cómo se elige o se cambia una vía.',
    objetivos: ['Describir Chanak Flex.', 'Aplicar criterios para elegir vía curricular.', 'Gestionar una solicitud de cambio de currículo.'],
    lecciones: [
      {
        titulo: 'Chanak Flex',
        guion: [
          'Chanak Flex es una Individualized Reviewed Curriculum Pathway: el estudiante usa materiales propios o alternativos aprobados en su PEI, con evaluaciones supervisadas por Chanak.',
          'No significa «cualquier material»: cada recurso se aprueba, se vincula a competencias del Scope & Sequence y se evalúa con evidencia.',
        ],
      },
      {
        titulo: 'Elegir y cambiar de vía',
        guion: [
          'La vía se elige a partir del diagnóstico, el PEI, la edad, el idioma, las necesidades del estudiante y el contexto familiar.',
          'Un cambio de vía es una decisión académica: el mentor documenta la petición y los motivos y la escala; Chanak la aprueba o la deniega y define cómo se reconoce lo ya realizado.',
          AVISO_VIAS,
        ],
      },
    ],
    practica: {
      situacion: 'A mitad de curso, la familia del Estudiante ID-0233 pide pasar de A.C.E. a Chanak Flex «porque los PACEs le aburren».',
      preguntas: ['¿Qué información reúnes antes de escalar?', '¿Qué no puedes hacer por tu cuenta?', '¿Qué registras?'],
      criterio: 'Se documentan motivos, avance y evidencias; se escala a Chanak; no se cambia la vía sin aprobación; se registra la decisión final.',
    },
    quiz: [
      { p: '¿Qué es Chanak Flex?', opciones: ['Cualquier material sin control', 'Una vía individualizada revisada con materiales aprobados en el PEI y evaluaciones supervisadas', 'Un curso de verano', 'Una plataforma de vídeos'], correcta: 1, explica: 'Flex = Individualized Reviewed Curriculum Pathway.' },
      { p: 'Una familia solicita cambio de currículo. ¿Quién aprueba?', opciones: ['El mentor', 'La familia', 'Chanak, tras revisar la documentación', 'Nadie'], correcta: 2, explica: 'Es una decisión académica de Chanak.' },
      { p: '¿Qué debes documentar ante una solicitud de cambio de vía?', opciones: ['Nada', 'Motivos, avance, evidencias y la decisión final', 'Solo la fecha', 'Solo la opinión del estudiante'], correcta: 1, explica: 'Se documenta todo el proceso.' },
      { p: '¿Con qué se vincula cada material de Chanak Flex?', opciones: ['Con el precio', 'Con competencias del Scope & Sequence y su evaluación', 'Con la editorial', 'Con nada'], correcta: 1, explica: 'Flex se ancla al Scope & Sequence.' },
    ],
    evidencia: 'Redacta la nota interna con la que escalarías la solicitud de cambio del caso práctico.',
  },

  'T3.4': {
    resumen:
      'El diagnóstico y el PEI son el punto de partida de todo estudiante. Un buen PEI evita frustración, lagunas y cambios innecesarios.',
    objetivos: ['Interpretar un diagnóstico.', 'Construir un PEI completo.', 'Registrar el PEI en el SIS.'],
    lecciones: [
      {
        titulo: 'Leer el diagnóstico',
        guion: [
          'El diagnóstico mide el nivel real y las lagunas por materia; no es un examen de aprobado o suspenso.',
          'Busca patrones: lagunas de prerrequisitos, nivel de lectura, inglés, ritmo y autonomía.',
          'Comunica el resultado a la familia con lenguaje claro y sin etiquetas.',
        ],
      },
      {
        titulo: 'Construir el PEI',
        guion: [
          'El PEI fija: punto de partida por materia, vía curricular, metas del periodo, ritmo semanal, equilibrio 60/20/20, evidencias esperadas y fecha de revisión.',
          'Se registra en el SIS y se revisa cuando los datos lo justifican.',
          'En formación usa siempre casos anonimizados (IDs).',
        ],
      },
    ],
    practica: {
      situacion: 'Diagnóstico simulado: Estudiante ID-0518, 11 años, lectura en español sólida, inglés A2, matemáticas con laguna en fracciones.',
      preguntas: ['¿Qué punto de partida propones en cada materia?', '¿Qué vía y qué ritmo?', '¿Qué evidencias y cuándo revisas?'],
      criterio: 'PEI coherente con el diagnóstico, con laguna de fracciones atendida antes de avanzar, inglés con apoyo y fecha de revisión.',
    },
    quiz: [
      { p: '¿Para qué sirve el diagnóstico?', opciones: ['Para aprobar o suspender', 'Para conocer el nivel real y las lagunas y ubicar al estudiante', 'Para fijar el precio', 'Para emitir el transcript'], correcta: 1, explica: 'Es la base del PEI.' },
      { p: '¿Qué debe incluir el PEI?', opciones: ['Solo la vía curricular', 'Punto de partida, vía, metas, ritmo, equilibrio 60/20/20, evidencias y revisión', 'Solo el horario', 'Solo notas previas'], correcta: 1, explica: 'El PEI es el plan completo.' },
      { p: '¿Dónde queda registrado el PEI?', opciones: ['En un chat', 'En el SIS', 'En una libreta del mentor', 'En el Portal'], correcta: 1, explica: 'El SIS es el registro oficial.' },
      { p: 'El diagnóstico muestra una laguna en fracciones. ¿Qué haces?', opciones: ['Avanzar igual', 'Atender el prerrequisito antes de avanzar', 'Saltar a álgebra', 'Ignorarla'], correcta: 1, explica: 'Las lagunas se atienden primero.' },
    ],
    evidencia: 'Sube (o redacta) el PEI simulado del caso práctico, anonimizado.',
  },

  'T4.1': {
    resumen:
      'El K–12 Scope & Sequence 2026–2027 es la referencia académica de esta formación: qué debe saber y ser capaz de hacer un estudiante Chanak en cada etapa, con secuencia y evidencia.',
    objetivos: ['Leer el Scope & Sequence por grado y área.', 'Vincular evidencias a competencias.', 'Explicar correctamente la alineación con Florida.'],
    lecciones: [
      {
        titulo: 'Estructura del documento',
        guion: [
          'Para cada grado y área: curso o nivel, competencias, secuencia, evidencia, Florida Alignment y Biblical Worldview.',
          'Incluye el High School Credit Framework, el Dual Diploma dentro del Scope & Sequence, los Curriculum Pathways y Life Skills & Leadership.',
          'Se usa para planificar el PEI, decidir qué evidencia pedir y revisar si un estudiante cumple las competencias del nivel.',
        ],
      },
      {
        titulo: 'Alineación con Florida (terminología correcta)',
        guion: [
          'B.E.S.T. se usa solo para ELA y Matemáticas. Para Ciencias, Estudios Sociales, Salud, Educación Física, Artes y Computer Science se usan los Florida State Academic Standards, accedidos y mapeados mediante CPALMS. CPALMS es la plataforma de referencia, no el nombre de un estándar.',
          'Los requisitos de graduación de Chanak son requisitos de escuela privada establecidos por Chanak International Academy. Los estándares, estructuras de curso y marcos de graduación de las escuelas públicas de Florida se usan como referencia de alineación cuando es pertinente.',
          'Chanak no emite el Florida Standard Diploma: emite su propio High School Diploma como escuela privada.',
        ],
      },
    ],
    practica: {
      situacion: 'Un coordinador escribe en un informe: «El estudiante cumple el estándar CPALMS de ciencias y obtendrá el Florida Standard Diploma».',
      preguntas: ['¿Qué dos errores contiene la frase?', '¿Cómo la reescribirías?', '¿Dónde compruebas la competencia del nivel?'],
      criterio: 'CPALMS no es un estándar y Chanak no emite el Florida Standard Diploma. Reescritura con «Florida State Academic Standards (consultados mediante CPALMS)» y «High School Diploma de Chanak».',
    },
    quiz: [
      { p: '¿Para qué áreas se usa B.E.S.T.?', opciones: ['Todas', 'Solo ELA y Matemáticas', 'Solo Ciencias', 'Ninguna'], correcta: 1, explica: 'B.E.S.T. cubre ELA y Matemáticas.' },
      { p: '¿Qué es CPALMS?', opciones: ['Un estándar estatal', 'La plataforma de referencia para acceder a los Florida State Academic Standards', 'Una editorial', 'Un examen'], correcta: 1, explica: 'CPALMS es un repositorio/plataforma, no un estándar.' },
      { p: '¿Qué diploma emite Chanak?', opciones: ['El Florida Standard Diploma', 'Su propio High School Diploma como escuela privada', 'Un diploma de MSA', 'El título nacional del país'], correcta: 1, explica: 'Los requisitos de graduación son de escuela privada.' },
      { p: '¿Qué columnas tiene el Scope & Sequence por grado?', opciones: ['Solo competencias', 'Área, curso/nivel, competencias, secuencia, evidencia, Florida Alignment y Biblical Worldview', 'Solo precios', 'Solo créditos'], correcta: 1, explica: 'Es la estructura del documento.' },
    ],
    evidencia: 'Elige un grado y un área del Scope & Sequence y propone dos evidencias válidas para una competencia.',
  },

  'T4.2': {
    resumen:
      'Qué hacer cuando un estudiante se retrasa o no alcanza el 80 %. La intervención temprana y documentada es una de las responsabilidades más importantes del mentor.',
    objetivos: ['Detectar señales de alerta.', 'Diseñar un plan de intervención.', 'Documentar y escalar a tiempo.'],
    lecciones: [
      {
        titulo: 'Señales de alerta',
        guion: [
          'Dos intentos seguidos por debajo del 80 % en la misma evaluación; metas semanales incumplidas durante dos semanas; ausencia de evidencias; desánimo o evitación.',
          'Cuando aparece una señal, el problema ya no es solo de esfuerzo: revisa comprensión, método, nivel de ubicación, entorno y carga.',
        ],
      },
      {
        titulo: 'Plan de intervención',
        guion: [
          'Objetivo concreto, acciones (re-enseñanza, práctica guiada, ajuste de metas), responsables (estudiante, familia, mentor), plazos y fecha de revisión.',
          'Se registra en el SIS y se comunica a la familia por escrito.',
          'Si tras la revisión no hay mejora, o el retraso compromete el PEI o el Plan de Ruta, se escala a coordinación.',
        ],
      },
    ],
    practica: {
      situacion: 'El Estudiante ID-0761 lleva tres semanas sin cumplir metas y ha obtenido 72 % y 75 % en dos intentos de la misma evaluación.',
      preguntas: ['¿Qué hipótesis revisas?', 'Redacta un plan de intervención de dos semanas.', '¿Cuándo escalarías?'],
      criterio: 'Plan con objetivo, acciones, responsables, plazo y revisión; registro en el SIS; comunicación escrita; escalado si no mejora o afecta al plan.',
    },
    quiz: [
      { p: 'Un estudiante falla dos veces la misma evaluación (72 % y 75 %). ¿Qué haces?', opciones: ['Lo apruebas al tercer intento sin más', 'Revisas causas, diseñas un plan de intervención y lo registras', 'Bajas el umbral', 'Lo cambias de curso'], correcta: 1, explica: 'Dos fallos son una señal de alerta.' },
      { p: '¿Qué elementos debe tener un plan de intervención?', opciones: ['Solo una fecha', 'Objetivo, acciones, responsables, plazos y revisión', 'Solo la nota', 'Solo la opinión del mentor'], correcta: 1, explica: 'Estructura mínima del plan.' },
      { p: 'Un estudiante está retrasado tres semanas. ¿Qué haces primero?', opciones: ['Esperar al final del trimestre', 'Revisar causas con estudiante y familia y ajustar metas con un plan documentado', 'Darle de baja', 'Avanzar de unidad'], correcta: 1, explica: 'Intervención temprana.' },
      { p: '¿Cuándo escalas a coordinación?', opciones: ['Nunca', 'Si no hay mejora tras la revisión o el retraso compromete el PEI/Plan de Ruta', 'Siempre el primer día', 'Solo si la familia lo pide'], correcta: 1, explica: 'Escalar cuando el problema excede tu ámbito.' },
    ],
    evidencia: 'Sube tu plan de intervención del caso práctico (anonimizado).',
  },

  'T4.3': {
    resumen:
      'Chanak distingue tres categorías de evaluación. Saber a cuál pertenece cada prueba evita dos errores: presentar las pruebas estandarizadas como obligatorias para todos o ignorarlas cuando una norma las exige.',
    objetivos: ['Clasificar evaluaciones en las tres categorías.', 'Explicar cuándo se requiere validación externa.', 'Responder sobre pruebas estatales sin errores.'],
    lecciones: [
      {
        titulo: 'Las tres categorías',
        guion: [
          'A · Internal Mastery Assessment: diagnóstica, formativa, readiness, sumativa y evidencia de dominio. Es la base del día a día.',
          'B · External / Standardized Validation: cuando Chanak requiere evidencia adicional, por ejemplo en revisiones reforzadas, reconocimientos de créditos dudosos o la Vía B de certificación.',
          'C · State / Program-Mandated Assessment: cuando una norma o un programa externo (por ejemplo, un programa estatal de EE. UU.) la exige.',
        ],
      },
      {
        titulo: 'Lo que no se debe decir',
        guion: [
          'Las pruebas estandarizadas no son un requisito universal de Chanak.',
          'Cuando un programa estatal exige pruebas, la obligación depende del estado, del programa y de la beca: se consulta la política State-Specific Standardized Assessment Requirements y la matriz de cumplimiento.',
          'Clasificación de pruebas externas: Achievement, Aptitude, College Readiness.',
        ],
      },
    ],
    practica: {
      situacion: 'Una familia de España pregunta si su hijo «tiene que hacer obligatoriamente un examen estandarizado americano cada año».',
      preguntas: ['¿Qué respondes?', '¿En qué casos sí podría requerirse?', '¿Dónde lo verificas?'],
      criterio: 'No es universal. Puede requerirse si Chanak necesita validación adicional (B) o si un programa/norma lo exige (C). Verificación en las políticas.',
    },
    quiz: [
      { p: '¿Las pruebas estandarizadas son obligatorias para todos los estudiantes Chanak?', opciones: ['Sí', 'No: dependen de la categoría B o C', 'Solo en primaria', 'Solo en España'], correcta: 1, explica: 'No hay pruebas estandarizadas universales.' },
      { p: 'Un PACE Test pertenece a la categoría…', opciones: ['A · Internal Mastery', 'B · External Validation', 'C · State-Mandated', 'Ninguna'], correcta: 0, explica: 'Es evaluación interna de dominio.' },
      { p: 'Un programa estatal exige una prueba anual a sus becados. ¿Categoría?', opciones: ['A', 'B', 'C · State / Program-Mandated', 'No aplica'], correcta: 2, explica: 'La exige un programa externo.' },
      { p: 'Chanak pide una prueba adicional para validar créditos de un expediente dudoso. ¿Categoría?', opciones: ['A', 'B · External / Standardized Validation', 'C', 'Ninguna'], correcta: 1, explica: 'Validación adicional requerida por Chanak.' },
    ],
    evidencia: 'Clasifica cinco evaluaciones de tu experiencia en las categorías A, B o C.',
  },

  'T4.4': {
    resumen:
      'Los créditos se reconocen por asignatura y por evidencia, nunca por conversión automática. Aquí aprendes la lógica de la Credit Recognition Policy y de la auditoría Dual Diploma.',
    objetivos: ['Aplicar el principio evidencia antes que conversión.', 'Gestionar una discrepancia entre transcript y dominio.', 'Explicar la auditoría Dual Diploma.'],
    lecciones: [
      {
        titulo: 'Cómo se reconocen créditos',
        guion: [
          'Chanak reconoce créditos únicamente sobre evidencias verificables de aprendizaje y dominio: historiales oficiales, calificaciones con fechas reales, programas, muestras de trabajo.',
          'La auditoría termina en una resolución escrita con créditos reconocidos y pendientes.',
          'No se aceptan registros ni calificaciones elaborados con posterioridad para completar requisitos.',
        ],
      },
      {
        titulo: 'Discrepancias',
        guion: [
          'Si un transcript dice «aprobado» pero el estudiante no demuestra dominio en el diagnóstico, se documenta la discrepancia y se escala: Chanak puede pedir evaluación supervisada, muestras o una prueba de validación (categoría B).',
          'El mentor nunca «corrige» un expediente ni asigna créditos.',
          'En el Dual Diploma, hasta aproximadamente 18 de 24 créditos pueden reconocerse en determinados perfiles, siempre tras auditoría individual.',
        ],
      },
    ],
    practica: {
      situacion: 'El transcript local del Estudiante ID-0844 muestra Álgebra I aprobada con notable, pero en el diagnóstico Chanak no demuestra dominio de ecuaciones lineales. Además falta una página del historial.',
      preguntas: ['¿Qué documentas?', '¿Qué evidencia falta y cómo se pide?', '¿Qué decide Chanak y qué no decides tú?'],
      criterio: 'Se documenta la discrepancia y la evidencia incompleta, se solicita la página oficial, se escala; Chanak decide (posible validación). El mentor no asigna créditos.',
    },
    quiz: [
      { p: '¿Cómo se reconocen los créditos en Chanak?', opciones: ['Por conversión automática de notas', 'Por asignatura y por evidencia verificable, con resolución escrita', 'Por años cursados', 'Por decisión del mentor'], correcta: 1, explica: 'Evidencia antes que conversión.' },
      { p: 'El transcript dice aprobado pero el diagnóstico no muestra dominio. ¿Qué haces?', opciones: ['Ignorar el diagnóstico', 'Documentar la discrepancia y escalar', 'Cambiar la nota del transcript', 'Asignar el crédito igualmente'], correcta: 1, explica: 'Chanak decide, puede pedir validación.' },
      { p: 'Falta parte de la evidencia de un expediente. ¿Qué es aceptable?', opciones: ['Elaborar la nota ahora', 'Solicitar el documento oficial original', 'Inventar la fecha', 'Dejarlo pasar'], correcta: 1, explica: 'Nunca se reconstruyen registros a posteriori.' },
      { p: '¿Cuántos créditos pueden reconocerse en el Dual Diploma?', opciones: ['Siempre 24', 'Hasta aproximadamente 18 de 24 en determinados perfiles, según auditoría', 'Ninguno', 'Siempre 18'], correcta: 1, explica: 'Depende de la auditoría individual.' },
    ],
    evidencia: 'Redacta la nota de escalado del caso práctico.',
  },
}
