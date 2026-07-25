// BLOQUE 3 — ACOMPAÑAMIENTO AL ALUMNO Y FAMILIA (30h)
// Fuentes: Portal Chanak (Life Skills, ChanakCoins, rutina), Self-Study MSA
// (comunicación con familias), guiones pedagógicos EducaFe-Chanak.

export const BLOQUE3 = {
  '3.1': {
    resumen:
      'El módulo más largo del bloque, porque es el corazón del oficio: qué hacer cuando un alumno no avanza. Aprenderás a diagnosticar la causa real, a diseñar una intervención y a documentarla en un log — sin inventar notas y sin bajar el estándar.',
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
          'Causa 5 — Motivación/emocional: desánimo, ansiedad académica, algo más profundo. Ojo: si sospechas riesgo, esto pasa a protocolo de protección (bloque 4).',
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
          'Causa tiempo/entorno → reunión con la familia para reorganizar horario y espacio (módulo 3.2 te da las herramientas).',
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

  '3.2': {
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

  '3.3': {
    resumen:
      'La Apertura del Día es el momento que define el clima: Biblia, oración, pasaje del mes y rasgo de carácter. Aprenderás a planificarla y dirigirla para que forme comunidad — presencial o a distancia.',
    objetivos: [
      'Explicar el propósito formativo de cada componente de la Apertura del Día.',
      'Planificar una semana de aperturas con pasaje y rasgo de carácter del mes.',
      'Adaptar la apertura al formato a distancia sin perder calidez.',
    ],
    lecciones: [
      {
        titulo: 'Anatomía de la Apertura del Día',
        guion: [
          'La Apertura del Día son los Opening Exercises: el primer bloque de la rutina diaria, antes de cualquier meta académica.',
          'Componente 1 — Lectura bíblica y oración: centra el día en Dios, no en el rendimiento.',
          'Componente 2 — Pasaje del mes: un texto que se memoriza progresivamente. Recitarlo la primera semana otorga 100 ChanakCoins.',
          'Componente 3 — Rasgo de carácter: cada mes se trabaja un rasgo (gratitud, diligencia, honestidad…) con ejemplos concretos y observación semanal.',
          'Componente 4 — Comunidad: saludo personal, revisión breve del ánimo del grupo, celebración de logros del día anterior.',
          'No es un trámite de 3 minutos: es el momento donde el estudiante se siente visto antes de ser evaluado.',
        ],
        visuales: [
          'Diapositiva: los 4 componentes con tiempos sugeridos (total 15-20 min).',
          'Diapositiva: calendario mensual con pasaje y rasgo del mes.',
        ],
      },
      {
        titulo: 'Planificar y dirigir — también a distancia',
        guion: [
          'Planificación semanal: lunes presenta el rasgo, martes-jueves ejemplos y aplicación, viernes testimonios y celebración.',
          'A distancia (videollamada): cámara encendida como norma de comunidad, participación rotativa (hoy lee X, mañana ora Y), y el chat para respuestas rápidas de todos.',
          'La agenda familiar Chanak trae los pasajes mensuales y rasgos semanales: apóyate en ella para alinear casa y mentoría.',
          'Errores comunes: monólogo de la mentora (deben participar ellos), moralismo ("pórtense bien") en lugar de formación, y saltarla "porque vamos apurados".',
          'Evaluación del módulo: planifica y presenta una semana completa de aperturas (5 días) con pasaje, rasgo y dinámica de comunidad.',
        ],
        visuales: [
          'Diapositiva: semana tipo de aperturas en tabla lunes-viernes.',
          'Diapositiva: adaptaciones para formato a distancia.',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Cuándo ocurre la Apertura del Día?',
        opciones: [
          'Al final de la jornada',
          'Antes de cualquier trabajo académico, como primer bloque',
          'Solo los lunes',
          'Durante el almuerzo',
        ],
        correcta: 1,
        explica: 'Los Opening Exercises abren la rutina diaria: primero el corazón, después el cuaderno.',
      },
      {
        p: 'Recitar el pasaje del mes en la primera semana otorga…',
        opciones: ['20 ChanakCoins', '50 ChanakCoins', '100 ChanakCoins', 'Un diploma'],
        correcta: 2,
        explica: 'El pasaje del mes recitado en la primera semana vale 100 coins — incentiva la memorización temprana.',
      },
      {
        p: 'Un error común al dirigir la apertura es…',
        opciones: [
          'Dejar que los estudiantes participen',
          'Convertirla en monólogo moralista de la mentora',
          'Usar la agenda familiar',
          'Celebrar logros del día anterior',
        ],
        correcta: 1,
        explica: 'La apertura forma comunidad con participación; el monólogo y el moralismo la vacían.',
      },
    ],
  },

  '3.4': {
    resumen:
      'Life Skills es el 20% que forma al líder: niveles Seedling → Launch, proyectos reales con rúbrica de 100 puntos, y el sistema ChanakCoins de reconocimiento y restauración. Saldrás sabiendo evaluar un proyecto y administrar las coins con justicia.',
    objetivos: [
      'Describir los niveles de Life Skills por edad y sus objetivos.',
      'Evaluar un proyecto con la rúbrica 40/30/30.',
      'Administrar ChanakCoins: otorgar, pausar y restaurar según el protocolo.',
    ],
    lecciones: [
      {
        titulo: 'Los niveles: de Seedling a Launch',
        guion: [
          'Life Skills estructura la formación de carácter y liderazgo por edades, dentro del 20% del modelo.',
          'Seedling (14 años): identidad y propósito — quién soy y para qué estoy aquí.',
          'Explorer (15): exploración de caminos — descubrir dones, intereses y vocación.',
          'Builder (16): construcción del proyecto de vida — responsabilidad y decisiones.',
          'Launch (17): preparación para college y vida adulta — servicio y liderazgo.',
          'Para los de 8 a 13 existe el complemento Juniors: mini proyectos prácticos que siembran los mismos hábitos.',
          'El liderazgo que buscamos es de siervo: se mide por servicio, dominio propio y fidelidad en lo pequeño.',
        ],
        visuales: [
          'Diapositiva: escalera Seedling → Explorer → Builder → Launch con edad y pregunta clave de cada nivel.',
          'Diapositiva: Juniors (8-13) como base de la escalera.',
        ],
      },
      {
        titulo: 'Proyectos y rúbrica 40/30/30',
        guion: [
          'Cada nivel produce proyectos reales con evidencia observable — no fichas teóricas.',
          'La rúbrica de Life Skills suma 100 puntos: Evidencia visual (40) + Referencia externa (30) + Reflexión/ensayo (30).',
          'Evidencia visual: vídeo, fotos, producto terminado — algo que se puede ver y verificar.',
          'Referencia externa: una persona ajena a la familia valida el trabajo (líder de iglesia, vecino servido, profesional consultado).',
          'Reflexión: el estudiante escribe qué aprendió, qué falló y qué haría distinto. En Launch, la reflexión se trabaja en inglés.',
          'El portal tiene un Calculador de Life Skills que genera feedback orientativo — pero la aprobación final es siempre del tutor-mentor. La IA sugiere; tú validas; el SIS registra.',
        ],
        visuales: [
          'Diapositiva: rúbrica 40/30/30 en gráfico de barras.',
          'Diapositiva: ejemplo de proyecto evaluado con las tres puntuaciones.',
        ],
      },
      {
        titulo: 'ChanakCoins: reconocer y restaurar',
        guion: [
          'Las ChanakCoins reconocen lo que valoramos: dominio excelente de unidad (100), dominio validado (50), pasaje del mes en primera semana (100), rasgo de carácter demostrado (100), acto de servicio documentado (20).',
          'Las coins se PAUSAN (no se quitan como multa) por: falta de metas, entregas incompletas, espacio desordenado, incumplimiento de protocolo o actitud irrespetuosa.',
          'La restauración es formativa, no punitiva: reflexión guiada, conversación restaurativa, ensayo de responsabilidad o plan de mejora semanal.',
          'Los niveles de privilegios crecen con las coins: Sembrador → Mayordomo → Embajador.',
          'Advertencia de mentora: las coins son medio, no fin. Si un estudiante trabaja "solo por coins", vuelve al rasgo de carácter del mes — la motivación también se educa.',
          'Evaluación del módulo: diseña un mini proyecto de Life Skills para un nivel concreto, con rúbrica aplicada y plan de coins.',
        ],
        visuales: [
          'Diapositiva: tabla de coins otorgadas con montos.',
          'Diapositiva: ciclo pausa → restauración → nivel de privilegios.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Un estudiante de 16 años está en el nivel…',
        opciones: ['Seedling', 'Explorer', 'Builder', 'Launch'],
        correcta: 2,
        explica: 'Builder (16): construcción del proyecto de vida. Seedling 14, Explorer 15, Launch 17.',
      },
      {
        p: 'La rúbrica de Life Skills distribuye 100 puntos así:',
        opciones: [
          'Evidencia 40 + Referencia externa 30 + Reflexión 30',
          'Examen 50 + Tarea 50',
          'Evidencia 60 + Reflexión 40',
          'Asistencia 100',
        ],
        correcta: 0,
        explica: 'Evidencia visual (40), referencia externa (30) y reflexión/ensayo (30): trabajo real, validado y pensado.',
      },
      {
        p: 'Cuando un estudiante incumple el protocolo, sus ChanakCoins…',
        opciones: [
          'Se eliminan definitivamente',
          'Se pausan, con camino de restauración formativa',
          'Se transfieren a otro estudiante',
          'Se duplican como advertencia',
        ],
        correcta: 1,
        explica: 'El sistema es de reconocimiento y restauración: pausa + reflexión/conversación/plan de mejora, no multa.',
      },
      {
        p: 'El Calculador de Life Skills del portal…',
        opciones: [
          'Aprueba automáticamente los proyectos',
          'Genera feedback orientativo; la aprobación final es del tutor-mentor',
          'Sustituye la rúbrica',
          'Solo lo usa la oficina central',
        ],
        correcta: 1,
        explica: '"La IA sugiere. El tutor-mentor valida. El SIS registra." La herramienta orienta; tú decides.',
      },
      {
        p: 'Los niveles de privilegios por coins son…',
        opciones: [
          'Bronce → Plata → Oro',
          'Sembrador → Mayordomo → Embajador',
          'Seedling → Builder → Launch',
          'Aprendiz → Maestro',
        ],
        correcta: 1,
        explica: 'Sembrador, Mayordomo y Embajador — nombres que reflejan la visión de mayordomía y servicio.',
      },
    ],
  },
}
