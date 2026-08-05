// BLOQUE 4 — LIDERAZGO REMOTO, MENTORÍA Y MARCO DE INTERVENCIÓN ACADÉMICA (30h)
// BLOQUE 5 — PRÁCTICA SUPERVISADA + PROYECTO INTEGRADOR (40h)
// Nivel 1 · Fuentes: Portal Chanak (diagnóstico, PEI, intervención), Self-Study MSA
// (assessment y comunicación con familias), SIS Chanak. Guiones listos para grabar.

export const BLOQUE4 = {
  '4.1': {
    resumen:
      'El PEI (Plan Educativo Individualizado) convierte el diagnóstico en un plan concreto: materias, niveles, vía y calendario. Aprenderás a interpretar la ubicación, a entender la anatomía del PEI y a construir uno simulado.',
    objetivos: [
      'Interpretar los resultados del diagnóstico de ubicación de cada vía.',
      'Identificar los componentes de un PEI y quién valida cada uno.',
      'Elaborar un PEI simulado a partir de un caso.',
    ],
    lecciones: [
      {
        titulo: 'Del diagnóstico a la ubicación',
        guion: [
          'El diagnóstico responde una pregunta: ¿dónde está realmente el estudiante en cada materia? No dónde "debería" estar por edad.',
          'Es normal y frecuente que un estudiante quede ubicado en niveles distintos por materia: 6º en matemáticas y 4º en inglés, por ejemplo.',
          'La ubicación honesta es el primer acto de justicia académica: empezar donde hay dominio real evita frustración y lagunas.',
          'La conversación con la familia es delicada: "ubicación" no es "retraso". Explica que el plan americano por dominio no funciona con cursos rígidos.',
          'El diagnóstico lo interpreta la mentora CON coordinación académica; la decisión final de ubicación es institucional, no unilateral.',
        ],
        visuales: [
          'Diapositiva: perfil de diagnóstico de ejemplo con niveles distintos por materia.',
          'Diapositiva: frases para explicar la ubicación a una familia sin la palabra "retraso".',
        ],
      },
      {
        titulo: 'Anatomía del PEI',
        guion: [
          'El PEI contiene: datos del estudiante, vía de material elegida, materias con su nivel de ubicación, metas del periodo, calendario de evaluaciones y observaciones de apoyo.',
          'Quién hace qué: la mentora prepara la propuesta con el diagnóstico; coordinación académica valida; la familia lo conoce y lo firma; el SIS lo registra.',
          'El PEI es un documento vivo: se revisa cuando hay evidencia de que algo no funciona (alertas, evaluaciones falladas, cambios familiares).',
          'Nunca modifiques un PEI "de palabra": todo cambio pasa por coordinación y queda registrado.',
          'El PEI también integra el 20% local y el 20% Life Skills: es el mapa completo del estudiante, no solo el core.',
        ],
        visuales: [
          'Diapositiva: esquema del PEI con sus secciones numeradas.',
          'Diapositiva: flujo mentora propone → coordinación valida → familia firma → SIS registra.',
        ],
      },
      {
        titulo: 'Taller: tu PEI simulado',
        guion: [
          'Caso: Sara, 11 años, llega de escuela tradicional. Diagnóstico: matemáticas nivel 5, inglés nivel 4, resto nivel 6. Familia elige vía LIFEPAC.',
          'Tu tarea: construye el PEI simulado completo — ubicación por materia, metas del primer trimestre, calendario de Self Tests y Unit Tests, integración de Extensión Local y Life Skills.',
          'Incluye una nota de apoyo: ¿qué harás las primeras 2 semanas para confirmar que la ubicación es correcta?',
          'Entrega el PEI simulado a coordinación: es la evidencia de este módulo.',
        ],
        visuales: [
          'Diapositiva: datos del caso de Sara en ficha.',
          'Diapositiva: plantilla de PEI vacía para completar.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Un diagnóstico ubica a un estudiante en niveles distintos por materia. Esto es…',
        opciones: [
          'Un error del diagnóstico',
          'Normal: la ubicación refleja dominio real por materia, no la edad',
          'Motivo para repetir el diagnóstico',
          'Un problema que debe ocultarse a la familia',
        ],
        correcta: 1,
        explica: 'La ubicación honesta por materia es la base del modelo individualizado: cada materia empieza donde hay dominio.',
      },
      {
        p: '¿Quién valida el PEI?',
        opciones: ['La mentora sola', 'La familia sola', 'Coordinación académica, con propuesta de la mentora y firma de la familia', 'El estudiante'],
        correcta: 2,
        explica: 'La mentora propone con el diagnóstico, coordinación valida, la familia firma y el SIS registra.',
      },
      {
        p: 'Una familia pide subir de nivel una materia "para no quedar atrás". El PEI se cambia…',
        opciones: [
          'Inmediatamente, la familia manda',
          'Nunca: el PEI es fijo todo el año',
          'Solo con evidencia de dominio y validación de coordinación, registrado en el SIS',
          'De palabra, si la mentora está de acuerdo',
        ],
        correcta: 2,
        explica: 'El PEI es vivo pero formal: cambios con evidencia, validación y registro. Nunca de palabra.',
      },
      {
        p: 'El PEI integra…',
        opciones: [
          'Solo el 60% core americano',
          'Core, Extensión Local y Life Skills: el mapa completo del estudiante',
          'Solo las materias con problemas',
          'Solo el calendario de exámenes',
        ],
        correcta: 1,
        explica: 'El PEI es el plan integral 60/20/20 del estudiante, no solo el currículo americano.',
      },
    ],
  },

  '4.2': {
    resumen:
      'El corazón del oficio: qué hacer cuando un alumno no avanza. Aprenderás a diagnosticar la causa real, a diseñar una intervención y a documentarla en un log — sin inventar notas y sin bajar el estándar.',
    objetivos: [
      'Diagnosticar las causas posibles del estancamiento: tiempo, comprensión, hábitos, entorno o motivación.',
      'Diseñar un plan de intervención con apoyos concretos y plazos.',
      'Documentar la intervención en un log de seguimiento y saber cuándo escalar.',
    ],
    lecciones: [
      {
        titulo: 'Diagnóstico del estancamiento: las 5 causas',
        guion: [
          'Cuando un alumno no avanza, la pregunta no es "¿por qué no se esfuerza?", sino "¿qué está bloqueando el avance?"',
          'Causa 1 — Tiempo: ¿realmente dedica las horas? Revisa el Goal Tracker: metas incumplidas de forma sistemática.',
          'Causa 2 — Comprensión: trabaja pero falla las evaluaciones. Puede haber una laguna anterior — el diagnóstico de ubicación pudo quedar alto.',
          'Causa 3 — Hábitos: trabaja sin método (corrige sin repasar, se salta la Review Station, metas irreales).',
          'Causa 4 — Entorno: espacio inadecuado, interrupciones, situación familiar. A distancia, esto pesa el doble.',
          'Causa 5 — Motivación/emocional: desánimo, ansiedad académica, algo más profundo. Ojo: si sospechas riesgo, esto pasa a protocolo de protección (bloque 3).',
          'Cada causa tiene una intervención distinta: por eso adivinar es perder semanas.',
        ],
        visuales: [
          'Diapositiva: árbol de diagnóstico con las 5 causas y una pregunta clave por rama.',
          'Diapositiva: caso rápido — síntomas → ¿qué causa sospechas?',
        ],
      },
      {
        titulo: 'Diseñar la intervención',
        guion: [
          'Una intervención tiene 4 elementos: causa identificada, apoyo concreto, plazo de revisión y criterio de éxito.',
          'Ejemplos: causa comprensión → re-enseñar con otro método + práctica guiada + Mastery Assessment en 2 semanas.',
          'Causa hábitos → replantear metas con el estudiante + supervisión diaria de Review Station durante 10 días.',
          'Causa tiempo/entorno → reunión con la familia para reorganizar horario y espacio (módulo 4.3 te da las herramientas).',
          'Lo que NUNCA es intervención: bajar el estándar, inventar una nota, avanzar "para motivar" o presionar sin apoyo.',
          'Si tras dos ciclos de intervención no hay avance, se escala a coordinación académica con el log completo: puede requerir revisión del PEI.',
        ],
        visuales: [
          'Diapositiva: plantilla de intervención con los 4 elementos.',
          'Diapositiva: tabla causa → intervención tipo.',
        ],
      },
      {
        titulo: 'El log de intervención: tu evidencia',
        guion: [
          'Todo lo anterior vale poco si no queda registrado. El log de intervención es tu herramienta profesional y tu evidencia MSA.',
          'Cada entrada: fecha, hechos observados (no juicios), causa hipotética, intervención aplicada, resultado en el plazo.',
          '"Hechos, no juicios": escribe "3 semanas sin Unit Test en Math, metas cumplidas al 40%" — no "está vago".',
          'El log te protege: demuestra acompañamiento diligente. Y protege al estudiante: la siguiente mentora o coordinación puede continuar sin empezar de cero.',
          'Evaluación del módulo: completarás un log de intervención sobre un caso simulado de 4 semanas.',
        ],
        visuales: [
          'Diapositiva: log de ejemplo con 3 entradas bien redactadas.',
          'Diapositiva: contraste "hechos vs juicios" con pares de frases.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Un estudiante trabaja sus horas pero falla las evaluaciones. La causa más probable es…',
        opciones: ['Tiempo', 'Comprensión (posible laguna anterior)', 'Entorno', 'Motivación'],
        correcta: 1,
        explica: 'Trabaja pero no domina: hay que revisar comprensión y posibles lagunas de ubicación, no pedir más horas.',
      },
      {
        p: '¿Cuál de estas NO es una intervención válida?',
        opciones: [
          'Re-enseñar con otro método y evaluar en 2 semanas',
          'Avanzar de unidad "para motivar"',
          'Replantear metas y supervisar la Review Station 10 días',
          'Reunión con la familia para reorganizar el horario',
        ],
        correcta: 1,
        explica: 'Avanzar sin dominio nunca es intervención: es abandonar el estándar y acumular lagunas.',
      },
      {
        p: 'Una buena entrada de log dice…',
        opciones: [
          '"Está vago últimamente"',
          '"3 semanas sin Unit Test en Math; metas cumplidas al 40%"',
          '"La familia no colabora"',
          '"Todo va más o menos bien"',
        ],
        correcta: 1,
        explica: 'Hechos verificables con datos, no juicios sobre la persona.',
      },
      {
        p: '¿Cuándo se escala una intervención a coordinación académica?',
        opciones: [
          'Nunca: es responsabilidad de la mentora',
          'Tras dos ciclos de intervención sin avance, con el log completo',
          'El primer día del problema',
          'Solo si la familia lo exige',
        ],
        correcta: 1,
        explica: 'Dos ciclos documentados sin resultado indican que puede requerirse revisión del PEI: decisión institucional.',
      },
    ],
  },

  '4.3': {
    resumen:
      'La familia es tu aliada, no tu cliente ni tu adversaria. Este módulo entrena la comunicación profesional: reportes, reuniones y orientación bajo el principio de Family Authority — con verdad, prudencia y seguimiento en 48 horas.',
    objetivos: [
      'Preparar y conducir una reunión con familia usando datos del SIS.',
      'Redactar reportes con el patrón progreso + apoyo + siguiente paso.',
      'Aplicar los límites: qué comunica la mentora y qué corresponde a administración.',
    ],
    lecciones: [
      {
        titulo: 'Family Authority: el marco de toda comunicación',
        guion: [
          'En Chanak los padres tienen la autoridad educativa. La mentora informa, orienta y recomienda — no impone ni sentencia.',
          'Consecuencia práctica: toda comunicación respeta a los padres como decisores. "Les recomiendo X por esta evidencia" — no "tienen que hacer X".',
          'La comunicación es estructurada: conversaciones de admisión, orientación inicial, reportes de progreso, reuniones de intervención, boletines y seguimiento regular.',
          'Regla de las 48 horas: toda consulta de familia recibe respuesta o acuse en máximo 48 horas. El silencio destruye confianza.',
          'Nunca culpabilizar: el patrón es progreso real + apoyo ofrecido + siguiente paso claro.',
        ],
        visuales: [
          'Diapositiva: principio Family Authority con el flujo informar → orientar → recomendar.',
          'Diapositiva: regla de 48h destacada.',
        ],
      },
      {
        titulo: 'Reuniones que funcionan',
        guion: [
          'Antes: revisa el SIS — progreso, incidencias, acuerdos previos y preguntas pendientes. Llegar sin preparar es faltar al respeto.',
          'Durante: abre con lo positivo verificable, presenta los datos (no impresiones), escucha a la familia, acuerda 1-3 acciones concretas con responsable y fecha.',
          'Cierra siempre con resumen verbal: "quedamos en que…". La familia debe salir sabiendo exactamente qué sigue.',
          'Después: registra los acuerdos y envía un resumen breve por el canal oficial. Lo no registrado no existe.',
          'Temas sensibles (pagos, contratos, quejas formales, decisiones académicas oficiales) se derivan a administración — con calidez: "eso lo gestiona directamente la oficina central, les pongo en contacto".',
        ],
        visuales: [
          'Diapositiva: checklist antes/durante/después de la reunión.',
          'Diapositiva: guion de derivación amable a administración.',
        ],
      },
      {
        titulo: 'Role-play y plantillas',
        guion: [
          'Practicarás dos simulaciones con coordinación o una compañera.',
          'Simulación 1: reporte mensual a una familia cuyo hijo va bien — evita el "todo bien" vacío; da evidencia y siguiente reto.',
          'Simulación 2: reunión difícil — el estudiante lleva 3 semanas estancado y la familia culpa al método. Mantén verdad + calidez + límites.',
          'Usa las plantillas del Drive: reporte mensual, acta de reunión y mensaje de seguimiento 48h.',
          'La evidencia del módulo es la simulación evaluada con rúbrica: preparación, datos, escucha, acuerdos y cierre.',
        ],
        visuales: [
          'Diapositiva: escenarios de las 2 simulaciones.',
          'Diapositiva: rúbrica de evaluación de la reunión (5 criterios).',
        ],
      },
    ],
    quiz: [
      {
        p: 'El principio de Family Authority implica que la mentora…',
        opciones: [
          'Decide el plan y lo comunica',
          'Informa, orienta y recomienda; los padres deciden',
          'Evita dar recomendaciones',
          'Solo habla con el estudiante',
        ],
        correcta: 1,
        explica: 'Los padres conservan la autoridad educativa; la mentora aporta evidencia y orientación.',
      },
      {
        p: '¿Qué haces ANTES de toda reunión con una familia?',
        opciones: [
          'Nada especial: improvisar da naturalidad',
          'Revisar en el SIS progreso, incidencias, acuerdos previos y preguntas pendientes',
          'Enviar las notas por WhatsApp',
          'Preparar una lista de quejas',
        ],
        correcta: 1,
        explica: 'La preparación con datos del SIS es respeto profesional y evita improvisar respuestas.',
      },
      {
        p: 'La familia pregunta por un descuento en la mensualidad. Tu respuesta:',
        opciones: [
          'Negocio un precio razonable',
          'Prometo consultarlo y decidir yo',
          'Derivo con calidez a administración, que gestiona pagos y contratos',
          'Digo que no es posible',
        ],
        correcta: 2,
        explica: 'Pagos, contratos y decisiones oficiales corresponden a administración. La mentora deriva sin frialdad.',
      },
      {
        p: 'El patrón correcto de un reporte es…',
        opciones: [
          'Lista de errores del estudiante',
          'Progreso real + apoyo ofrecido + siguiente paso claro',
          '"Todo bien" para no preocupar',
          'Comparación con otros estudiantes',
        ],
        correcta: 1,
        explica: 'Verdad sin culpabilizar y con dirección: progreso, apoyo y siguiente paso.',
      },
    ],
  },

  '4.4': {
    resumen:
      'Cómo se registra la evaluación formativa y sumativa, qué contiene un boletín (report card) y cómo se construye el expediente en el SIS y Google Workspace. El principio rector: el SIS es el registro oficial e inmutable.',
    objetivos: [
      'Distinguir evaluación formativa de sumativa en el flujo Chanak.',
      'Interpretar un boletín (report card) y un transcript.',
      'Producir un boletín demo en el SIS de práctica.',
    ],
    lecciones: [
      {
        titulo: 'Formativa y sumativa en el día a día',
        guion: [
          'Evaluación formativa: la que informa el proceso — Self Tests, quizzes intermedios, revisión de metas, observación. Sirve para corregir el rumbo, no para calificar destino.',
          'Evaluación sumativa: la que certifica dominio — Unit Tests, Mastery Assessments, evaluaciones Chanak. Sus resultados alimentan el boletín.',
          'Regla de oro: nunca uses una herramienta formativa como sentencia, ni saltes la sumativa "porque ya se ve que domina".',
          'La mezcla correcta: mucha formativa (barata, frecuente, sin miedo) y sumativa puntual (seria, supervisada, registrada).',
        ],
        visuales: [
          'Diapositiva: dos columnas formativa/sumativa con ejemplos Chanak en cada una.',
        ],
      },
      {
        titulo: 'Boletines, transcript y expediente',
        guion: [
          'El boletín (report card) resume el trimestre: materias del PEI, promedio de notas aprobadas por materia, observaciones y estado de Life Skills y Extensión Local.',
          'Importante: en el SIS las materias salen de la matrícula del estudiante por año escolar y trimestre — nunca de listas fijas. Cada boletín es individual.',
          'El transcript es el historial académico completo: la base del diploma estadounidense. Se construye boletín a boletín — por eso la integridad de cada nota importa tanto.',
          'La familia descarga el boletín; el tutor-mentor confirma la aprobación final.',
          'Nada de esto existe si no está en el SIS: "si no está en el sistema, no es dato oficial".',
        ],
        visuales: [
          'Diapositiva: boletín de ejemplo anotado (de dónde sale cada campo).',
          'Diapositiva: pirámide notas → boletines → transcript → diploma.',
        ],
      },
      {
        titulo: 'Taller: tu boletín demo',
        guion: [
          'En el SIS de práctica (datos anonimizados) vas a generar un boletín completo.',
          'Pasos: localiza al estudiante demo → revisa sus materias del trimestre → verifica las notas registradas → genera el boletín → redacta la observación de la mentora.',
          'La observación bien escrita: concreta, esperanzadora y honesta. "Dominó 3 unidades de Math; recomendamos reforzar vocabulario de Science" — no "va bien".',
          'Exporta el boletín demo y entrégalo como evidencia del módulo.',
        ],
        visuales: [
          'Diapositiva: checklist de los 5 pasos del taller.',
          'Diapositiva: ejemplos de observaciones bien y mal redactadas.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Un Self Test intermedio de LIFEPAC es evaluación…',
        opciones: ['Sumativa', 'Formativa', 'Diagnóstica', 'Final'],
        correcta: 1,
        explica: 'Los Self Tests informan el proceso y preparan para el Unit Test (sumativo). Corrigen el rumbo, no certifican.',
      },
      {
        p: 'En el SIS, las materias de un boletín provienen de…',
        opciones: [
          'Una lista fija por grado',
          'La matrícula del estudiante por año escolar y trimestre',
          'Lo que la mentora recuerde',
          'El catálogo de la editorial',
        ],
        correcta: 1,
        explica: 'Regla crítica del SIS: materias dinámicas por estudiante/año/trimestre. Nunca listas fijas ni duplicadas.',
      },
      {
        p: 'El transcript se construye a partir de…',
        opciones: [
          'El examen final de cada año',
          'Los boletines acumulados, trimestre a trimestre',
          'Un test único de graduación',
          'La recomendación de la mentora',
        ],
        correcta: 1,
        explica: 'El historial académico se forma boletín a boletín — por eso cada nota registrada importa.',
      },
      {
        p: 'Una buena observación de mentora en el boletín es…',
        opciones: [
          '"Va bien"',
          '"Dominó 3 unidades de Math; recomendamos reforzar vocabulario de Science"',
          '"Debe esforzarse más"',
          '"Sin comentarios"',
        ],
        correcta: 1,
        explica: 'Concreta, esperanzadora y honesta: hechos + siguiente paso.',
      },
    ],
  },
}

export const BLOQUE5 = {
  '5.1': {
    resumen:
      'Llega el momento de dejar la teoría y sentarte al lado de un estudiante real durante dos semanas. Este módulo te enseña a observar como una profesional: registrando hechos, no impresiones, y convirtiendo tu diario de observación en la primera evidencia sólida de tu expediente de formación.',
    objetivos: [
      'Planificar dos semanas de práctica supervisada con objetivos de observación claros.',
      'Redactar un diario de observación basado en hechos observables y no en juicios.',
      'Distinguir cuándo observas, cuándo intervienes y cuándo consultas a tu mentora supervisora.',
    ],
    lecciones: [
      {
        titulo: 'Qué se espera de ti en estas dos semanas',
        guion: [
          'La práctica supervisada son 20 horas acompañando aprendizaje real: una rutina completa, con Opening Exercises, unidades, Life Skills y Extensión Local.',
          'No vienes a dirigir: vienes a acompañar bajo la supervisión de una mentora experimentada y de coordinación. Tu rol es aprender viendo y haciendo poco a poco.',
          'La primera semana observas y apoyas tareas concretas: revisar metas del Goal Tracker, acompañar una Review Station, preparar materiales.',
          'La segunda semana asumes responsabilidad supervisada: diriges una Apertura del Día, acompañas la corrección de una unidad y participas en una conversación con familia con la mentora presente.',
          'Todos los días cierras con quince minutos de registro. Si dejas el diario para el viernes, escribirás recuerdos, no observaciones.',
          'Recuerda la regla de dos adultos y las normas de protección: nunca a solas con un menor en un espacio sin visibilidad, ni siquiera en prácticas.',
        ],
        visuales: [
          'Diapositiva: calendario de dos semanas con lo que se observa y lo que se practica cada día.',
          'Diapositiva: pirámide observo, apoyo, dirijo con supervisión.',
          'Diapositiva: recordatorio de normas de protección aplicadas a la práctica.',
        ],
      },
      {
        titulo: 'El diario de observación: hechos, no juicios',
        guion: [
          'Cada entrada del diario tiene cinco campos: fecha, situación observada, qué hizo la mentora, qué efecto tuvo en el estudiante y qué aprendiste tú.',
          'La regla de oro es la misma del log de intervención: hechos, no juicios. Escribe lo que una cámara habría grabado.',
          'Mal ejemplo: el alumno estaba desmotivado y la mentora lo animó muy bien. Buen ejemplo: el alumno dejó la unidad de Math a los diez minutos; la mentora dividió la meta en tres partes y el alumno completó dos antes del recreo.',
          'Ningún nombre, ninguna foto, ninguna dirección. Usa iniciales o un código de estudiante. La privacidad no se relaja porque sea un trabajo de formación.',
          'Añade una pregunta al final de cada día: qué haría yo distinto mañana. Ahí es donde de verdad se forma la mentora.',
          'El diario se entrega a coordinación al terminar las dos semanas y queda como evidencia de los estándares de Teaching and Learning y Student Well-Being.',
        ],
        visuales: [
          'Diapositiva: plantilla del diario con los cinco campos rellenados en un ejemplo.',
          'Diapositiva: contraste juicio frente a hecho con tres pares de frases.',
          'Diapositiva: regla de privacidad, uso de iniciales o código en lugar de nombre.',
        ],
      },
      {
        titulo: 'Cómo se evalúa tu práctica',
        guion: [
          'La rúbrica de la práctica valora cuatro criterios con el mismo peso: puntualidad y compromiso, calidad del registro, aplicación del modelo Chanak y actitud de aprendizaje.',
          'Puntualidad y compromiso: cumpliste las horas acordadas y avisaste con antelación de cualquier cambio.',
          'Calidad del registro: entradas diarias, hechos verificables, cero datos identificables y reflexión propia en cada día.',
          'Aplicación del modelo: se ve que reconoces el sesenta veinte veinte, el dominio mínimo del ochenta por ciento, los Opening Exercises y el papel del SIS como registro oficial.',
          'Actitud de aprendizaje: pediste ayuda, aceptaste correcciones y no improvisaste respuestas fuera de tu rol.',
          'Se aprueba con dominio, igual que un estudiante: si un criterio queda por debajo del ochenta por ciento, se acuerda un plan de mejora y se repite esa parte de la práctica. No se aprueba por asistencia.',
        ],
        visuales: [
          'Diapositiva: rúbrica de la práctica con los cuatro criterios y descriptores.',
          'Diapositiva: frase destacada, se aprueba por dominio, no por asistencia.',
        ],
      },
    ],
    quiz: [
      {
        p: 'En tu diario escribes: "hoy el alumno estuvo muy vago y su madre no ayuda". ¿Qué falla?',
        opciones: [
          'Nada, es una observación honesta',
          'Son juicios sobre personas, no hechos observables',
          'Falta añadir el nombre completo del alumno',
          'Debería enviarse por WhatsApp a la familia',
        ],
        correcta: 1,
        explica: 'El diario registra hechos que una cámara habría grabado: metas cumplidas, tiempo de trabajo, evaluaciones. Los juicios no son evidencia.',
      },
      {
        p: 'Durante la práctica, la mentora supervisora sale un momento y te quedas a solas con un estudiante menor en un aula sin visibilidad. ¿Qué haces?',
        opciones: [
          'Sigo la sesión, es solo un rato',
          'Salgo con el estudiante a un espacio visible o pido que otra persona adulta esté presente',
          'Cierro la puerta para que no se distraiga',
          'Grabo la sesión para tener prueba',
        ],
        correcta: 1,
        explica: 'La regla de dos adultos y la visibilidad protegen al menor y también a ti. Se aplica igual en prácticas que en el trabajo ordinario.',
      },
      {
        p: '¿Cómo identificas al estudiante en el diario de observación?',
        opciones: [
          'Con su nombre y apellidos para que quede claro',
          'Con una foto de su cuaderno',
          'Con iniciales o un código, nunca con datos identificables',
          'Con su nombre y el curso al que asiste',
        ],
        correcta: 2,
        explica: 'Está prohibido incluir datos personales identificables en cualquier evidencia de formación. Se usan iniciales o códigos.',
      },
      {
        p: 'Terminas la práctica con tres de los cuatro criterios de la rúbrica sobre el ochenta por ciento y uno al sesenta. ¿Qué ocurre?',
        opciones: [
          'Apruebas, porque la media sale alta',
          'Se acuerda un plan de mejora y se repite esa parte de la práctica',
          'Quedas excluida del programa',
          'La nota se sube por asistencia completa',
        ],
        correcta: 1,
        explica: 'Mastery Learning también se aplica a la formación de mentoras: el dominio mínimo es del ochenta por ciento por criterio, con nueva oportunidad tras la corrección.',
      },
    ],
  },

  '5.2': {
    resumen:
      'El portafolio integrador es la prueba de que sabes hacer el trabajo completo: diagnóstico, plan, seguimiento, evidencia y reflexión sobre un mismo estudiante. Y todo ello sin un solo dato personal identificable, porque saber proteger la privacidad forma parte del oficio.',
    objetivos: [
      'Reunir las cinco piezas obligatorias del portafolio de evidencias de un estudiante.',
      'Anonimizar correctamente toda la documentación antes de entregarla.',
      'Redactar una reflexión final que conecte tu práctica con los valores y el modelo Chanak.',
    ],
    lecciones: [
      {
        titulo: 'Las cinco piezas del portafolio',
        guion: [
          'El portafolio recorre el ciclo completo del Chanak Growth System sobre un único estudiante, elegido con coordinación entre los que acompañaste en la práctica.',
          'Pieza 1, el PEI: materias, niveles, vía de material y calendario, con una explicación de por qué ese plan encaja con el perfil del estudiante.',
          'Pieza 2, boletines o extracto de calificaciones del SIS: qué unidades se han dominado, qué evaluaciones se repitieron y cómo evolucionó el promedio del trimestre.',
          'Pieza 3, log de intervención: al menos tres entradas reales con causa hipotética, apoyo aplicado, plazo y resultado.',
          'Pieza 4, muestra de trabajo del estudiante: una unidad corregida o un proyecto de Life Skills evaluado con la rúbrica de cuarenta, treinta y treinta.',
          'Pieza 5, reflexión de dos páginas: qué funcionó, qué no, qué harías distinto y qué valor de Chanak estuvo en juego en la decisión más difícil.',
        ],
        visuales: [
          'Diapositiva: las cinco piezas como pestañas de una carpeta, con el ciclo del Growth System al fondo.',
          'Diapositiva: ejemplo de índice de portafolio bien ordenado.',
          'Diapositiva: recordatorio, el SIS es la fuente de las calificaciones, no tu cuaderno.',
        ],
      },
      {
        titulo: 'Anonimizar bien: cómo se hace de verdad',
        guion: [
          'Anonimizar no es tachar el nombre de la primera página y olvidarse del resto.',
          'Revisa toda la documentación buscando datos identificables: nombre y apellidos, fecha de nacimiento, dirección, teléfono, correo, nombre de los padres, nombre de la iglesia o del centro, fotos y cualquier captura del SIS con la cabecera visible.',
          'Sustituye por un código estable, por ejemplo estudiante A, y usa el mismo código en todas las piezas para que el portafolio siga siendo coherente.',
          'En las muestras de trabajo, difumina o recorta la parte identificable antes de escanear. En las capturas del SIS, recorta la barra de identidad y los apellidos de la lista.',
          'Antes de entregar, haz una última pasada como si fueras una persona ajena: si alguien de fuera pudiera reconocer al estudiante, aún no está anonimizado.',
          'Un portafolio excelente con un dato personal visible se devuelve para corregir. La privacidad no es un detalle de forma: es un compromiso del código de conducta.',
        ],
        visuales: [
          'Diapositiva: lista de comprobación de datos a eliminar antes de entregar.',
          'Diapositiva: antes y después de una captura del SIS correctamente recortada.',
        ],
      },
      {
        titulo: 'Rúbrica del portafolio y errores frecuentes',
        guion: [
          'La rúbrica del portafolio evalúa cinco criterios: completitud de las piezas, coherencia entre plan y evidencia, calidad técnica del registro, cumplimiento de privacidad y profundidad de la reflexión.',
          'Coherencia es el criterio que más se falla: el PEI dice una cosa, el log habla de otra y la muestra de trabajo no corresponde a ninguna de las dos. Un buen portafolio se lee como una sola historia.',
          'Calidad técnica significa fechas, datos y referencias verificables, sin cifras redondeadas de memoria y sin inventar resultados que el SIS no respalda.',
          'El criterio de privacidad es eliminatorio: si aparece un dato identificable, el portafolio vuelve para corrección antes de poder ser evaluado.',
          'Profundidad de la reflexión no es hablar bonito: es reconocer al menos un error propio y explicar qué harías distinto con un paso concreto.',
          'Entrega el portafolio a coordinación en el plazo acordado, en formato único y con índice. Queda como evidencia de los estándares de Teaching and Learning y del compromiso institucional con la mejora del personal.',
        ],
        visuales: [
          'Diapositiva: rúbrica de cinco criterios con el de privacidad marcado como eliminatorio.',
          'Diapositiva: los tres errores más frecuentes y cómo evitarlos.',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Cuál de estas piezas NO forma parte del portafolio integrador?',
        opciones: [
          'El PEI del estudiante con su justificación',
          'Un log de intervención con al menos tres entradas',
          'Una fotografía del estudiante trabajando en el aula',
          'Una muestra de trabajo corregida',
        ],
        correcta: 2,
        explica: 'Las fotos son datos personales identificables y están prohibidas en cualquier evidencia de formación.',
      },
      {
        p: 'Has tachado el nombre en la portada, pero una captura del SIS muestra la lista de la clase con apellidos. ¿Está anonimizado el portafolio?',
        opciones: [
          'Sí, el nombre principal ya no aparece',
          'No, hay datos identificables en la captura y hay que recortarla',
          'Sí, si solo lo lee coordinación',
          'Sí, porque el SIS es un sistema seguro',
        ],
        correcta: 1,
        explica: 'La revisión debe cubrir todas las piezas, incluidas capturas y anexos. Si una persona ajena pudiera reconocer a alguien, no está anonimizado.',
      },
      {
        p: 'En tu log no tienes datos de dos semanas y decides estimar el porcentaje de metas cumplidas para que el portafolio quede completo. ¿Es correcto?',
        opciones: [
          'Sí, es una aproximación razonable',
          'Sí, si lo indicas en letra pequeña',
          'No, nunca se inventan cifras; se documenta el hueco y su motivo',
          'No, hay que repetir toda la práctica',
        ],
        correcta: 2,
        explica: 'La integridad académica prohíbe inventar datos. Un hueco explicado con honestidad vale más que una cifra inventada.',
      },
      {
        p: 'La reflexión final del portafolio debe incluir…',
        opciones: [
          'Solo los logros conseguidos, para transmitir confianza',
          'Una queja sobre las condiciones de la práctica',
          'Al menos un error propio reconocido y qué harías distinto de forma concreta',
          'Un resumen de la teoría del bloque 1',
        ],
        correcta: 2,
        explica: 'La profundidad de la reflexión se mide por la honestidad y la concreción, no por la lista de éxitos.',
      },
    ],
  },

  '5.3': {
    resumen:
      'Cierras el Nivel 1 sentándote con la Dirección Académica para revisar todo tu recorrido con una rúbrica final. No es un examen sorpresa: es una conversación profesional sobre evidencia, en la que sabes de antemano qué se mira y cómo se puntúa.',
    objetivos: [
      'Preparar tu expediente de formación completo para la evaluación final.',
      'Interpretar la rúbrica final de certificación de mentora y sus niveles de desempeño.',
      'Recibir y aprovechar la retroalimentación, incluyendo tu derecho a comentarla y a apelar.',
    ],
    lecciones: [
      {
        titulo: 'Cómo preparar la reunión de evaluación final',
        guion: [
          'La evaluación final son cinco horas: preparación de tu expediente, la reunión con la Dirección Académica y la redacción conjunta de tu plan de desarrollo.',
          'Llegas con tu expediente ordenado: certificados de los bloques, ensayo de identidad, código de conducta firmado, simulacro de protección, tareas del SIS, diario de práctica y portafolio integrador.',
          'Prepara también una autoevaluación de una página frente al Portrait of an Educator: mentoría, orientación con datos, alianza con las familias e integridad profesional.',
          'Trae dos preguntas propias. Una evaluación final en la que la formanda no pregunta nada suele ser una evaluación desaprovechada.',
          'La reunión no busca pillarte: busca comprobar que la evidencia existe, que sabes explicarla y que conoces tus límites de rol.',
        ],
        visuales: [
          'Diapositiva: lista del expediente completo, un elemento por bloque.',
          'Diapositiva: plantilla de autoevaluación frente a los cuatro rasgos del Portrait of an Educator.',
        ],
      },
      {
        titulo: 'La rúbrica final y la decisión de certificación',
        guion: [
          'La rúbrica final agrupa la evidencia en cinco dominios: fundamentos institucionales, modelo académico y dominio, acompañamiento de alumno y familia, protección y bienestar, y uso de sistemas y registro.',
          'Cada dominio se puntúa en cuatro niveles: no demostrado, en desarrollo, competente y ejemplar. Se certifica con competente o superior en los cinco dominios.',
          'El dominio de protección y bienestar es innegociable: sin el curso externo de normas mínimas y sin el simulacro superado, no hay certificación.',
          'La retroalimentación se entrega por escrito en un plazo de veinticuatro a cuarenta y ocho horas tras la reunión, siempre sobre conductas observables y evidencia, nunca sobre tu personalidad.',
          'Si algún dominio queda en desarrollo, se acuerda un plan de mejora con acciones, plazos y una nueva revisión. Quedar en desarrollo no es un fracaso: es un calendario.',
          'Tienes derecho a comentar tu evaluación con quien te evalúa y, si no estás de acuerdo, a apelar ante un nivel de liderazgo superior. Todo el proceso queda documentado como evidencia de formación y evaluación del personal.',
        ],
        visuales: [
          'Diapositiva: matriz de cinco dominios por cuatro niveles de desempeño.',
          'Diapositiva: flujo de la retroalimentación, reunión, informe en cuarenta y ocho horas, plan de mejora, derecho a comentar y apelar.',
          'Diapositiva: sello, se certifica con competente o superior en los cinco dominios.',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Con qué resultado se obtiene la certificación de mentora?',
        opciones: [
          'Con nivel competente o superior en los cinco dominios de la rúbrica',
          'Con la media de los dominios por encima de en desarrollo',
          'Con haber asistido a todos los módulos',
          'Con el portafolio aprobado, sin importar el resto',
        ],
        correcta: 0,
        explica: 'No se compensan dominios: se exige competente o superior en los cinco, coherente con el principio de Mastery Learning.',
      },
      {
        p: 'Recibes tu informe y no estás de acuerdo con la valoración de un dominio. ¿Qué puedes hacer?',
        opciones: [
          'Nada, la evaluación es definitiva',
          'Comentarla con quien te evalúa y, si sigue el desacuerdo, apelar a un nivel de liderazgo superior',
          'Publicar tu desacuerdo en el grupo de mentoras',
          'Pedir que la evalúe una familia',
        ],
        correcta: 1,
        explica: 'El personal tiene derecho a comentar su evaluación con el evaluador y a apelar ante un nivel superior de liderazgo.',
      },
      {
        p: 'Tienes todos los dominios en competente, pero no has completado el curso externo de normas mínimas de protección. ¿Puedes certificarte?',
        opciones: [
          'Sí, si lo haces durante el primer año de trabajo',
          'Sí, el simulacro superado ya lo cubre',
          'No, protección y bienestar es innegociable para la certificación',
          'Sí, si la familia firma un consentimiento',
        ],
        correcta: 2,
        explica: 'Sin curso externo y simulacro superado no hay certificación: la protección de menores no admite excepciones.',
      },
      {
        p: '¿En qué plazo debes recibir la retroalimentación escrita de tu evaluación final?',
        opciones: ['El mismo día, verbalmente', 'Entre veinticuatro y cuarenta y ocho horas', 'En un mes', 'Al final del curso escolar'],
        correcta: 1,
        explica: 'El estándar de retroalimentación en Chanak es de veinticuatro a cuarenta y ocho horas, para que sea útil y accionable.',
      },
    ],
  },
}
