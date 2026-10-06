// BLOQUE 9 — CHILD & ADOLESCENT DEVELOPMENT, PSYCHOLOGY & EDUCATIONAL ACCOMPANIMENT (transversal)
// Obligatorio para todo rol con DIRECT CHILD CONTACT. Fuera de las horas de la ruta base.
// Formato: { resumen, objetivos[], lecciones[] (las sustituye la lectura ampliada), practica, quiz[], evidencia }

export const BLOQUE_9 = {
  'T9.1': {
    resumen:
      'Cómo se desarrollan la mente, las emociones y las relaciones de un niño, y qué implica para acompañar sus estudios: tarea adecuada a su etapa, seguridad emocional, hábitos y comunicación. Sin diagnosticar.',
    objetivos: [
      'Explicar cómo piensa un niño según su etapa y ajustar la tarea y el apoyo (andamiaje).',
      'Reconocer la importancia de la seguridad emocional, la corregulación y los límites cálidos.',
      'Describir conductas con hechos, sin etiquetas ni interpretaciones de intención.',
    ],
    lecciones: [],
    practica: {
      situacion:
        'Estudiante ID-0231 (tercer grado) llora cuando llega la actividad de redacción, dice «no sé» y cierra el cuaderno. En matemáticas y lectura trabaja bien. La familia dice que antes disfrutaba contando historias oralmente.',
      preguntas: [
        '¿Qué observarías y cómo lo registrarías durante dos semanas (sin etiquetar)?',
        '¿Qué ajustes harías dentro de tu rol?',
        '¿Qué dirías a la familia y qué no dirías?',
      ],
      criterio:
        'Registro con hechos (cuándo, ante qué, qué ayuda, qué empeora); ajustes: tarea reducida, dictado oral previo, separar crear de corregir, rutina breve acordada con la familia; comunicación sin etiquetas; si persiste, coordinar y sugerir consulta con un profesional adecuado. No diagnosticar ni prometer.',
    },
    quiz: [
      { p: 'Un niño de ocho años no entiende una definición abstracta. ¿Qué haces primero?', opciones: ['Repetir la definición más alto', 'Revisar si la tarea es adecuada a su etapa y usar ejemplos concretos', 'Concluir que no presta atención', 'Bajar el estándar de dominio'], correcta: 1, explica: 'Antes de interpretar la conducta, ajusta el nivel de abstracción y el apoyo.' },
      { p: '¿Qué es el andamiaje?', opciones: ['Hacerle la tarea al estudiante', 'Dar el apoyo justo y retirarlo poco a poco', 'Evaluar sin apoyo', 'Repetir la misma explicación'], correcta: 1, explica: 'Es dar la ayuda justa dentro de la zona de desarrollo próximo y retirarla al aparecer el dominio.' },
      { p: 'Un niño estalla ante un ejercicio difícil. ¿Qué respuesta es más eficaz?', opciones: ['Subir el tono para marcar límite', 'Bajar el tono, nombrar la emoción, reducir la exigencia un momento y retomar en un paso menor', 'Ignorarlo', 'Quitarle la tarea definitivamente'], correcta: 1, explica: 'Corregulación: calma del adulto, validar la emoción y mantener la expectativa en pasos menores.' },
      { p: '¿Cuál es una nota de observación correcta?', opciones: ['«Estuvo insoportable»', '«Lo hace para fastidiarme»', '«Gritó dos veces y salió de cámara 5 minutos durante la tarea de escritura»', '«Parece que tiene un problema»'], correcta: 2, explica: 'Hechos, fecha y contexto; sin adjetivos ni intenciones.' },
      { p: 'Tras dos intentos fallidos en una evaluación de dominio, ¿qué corresponde?', opciones: ['Repetir lo mismo una tercera vez', 'Revisar cómo se enseña y qué le falta al estudiante', 'Aprobarlo', 'Culpar a la familia'], correcta: 1, explica: 'Cambiar la enseñanza, no repetir idéntico.' },
    ],
    evidencia:
      'Describe un caso (con ID, sin datos personales) en el que ajustarías la tarea según la etapa del estudiante: qué observas, qué ajustas y cómo lo registras. Máx. 10 líneas.',
  },

  'T9.2': {
    resumen:
      'La adolescencia como etapa de identidad, pertenencia y autonomía: cómo acompañar con expectativas altas y apoyo cálido, cómo reconocer cuándo algo excede lo evolutivo y cómo conectar el estudio con el proyecto de vida.',
    objetivos: [
      'Distinguir lo evolutivo de lo problemático en la conducta adolescente.',
      'Acompañar identidad, pertenencia, autoestima y autonomía respetando límites profesionales.',
      'Aplicar la secuencia ante un adolescente que deja de entregar, escalando por Safeguarding cuando hay riesgo.',
    ],
    lecciones: [],
    practica: {
      situacion:
        'Estudiante ID-0388 (décimo grado) lleva tres semanas sin entregar, llega tarde a las sesiones y responde con monosílabos. La familia dice que «está en una etapa». No hay indicios de riesgo hasta ahora.',
      preguntas: ['¿Qué haces en las primeras 48 horas?', '¿Qué plan de apoyo propones?', '¿Qué señales te harían escalar de inmediato por Safeguarding?'],
      criterio:
        'Revisar hechos en el SIS; conversación breve y a solas en canal institucional; plan reducido y revisable con metas propuestas por el estudiante; comunicar a la familia con hechos; informar a coordinación. Escalar de inmediato ante desesperanza, ideas de hacerse daño, maltrato o cualquier riesgo; sin prometer confidencialidad ni investigar.',
    },
    quiz: [
      { p: 'Un adolescente cuestiona normas y se vuelve más reservado. ¿Cómo lo interpretas?', opciones: ['Siempre es un problema grave', 'Puede ser parte normal de la construcción de identidad; observas y documentas patrones', 'Es falta de fe', 'Es mala educación familiar'], correcta: 1, explica: 'Lo evolutivo no se confunde con lo problemático; un patrón sí se documenta.' },
      { p: 'Un estudiante te cuenta que sufre acoso en un grupo de mensajería. ¿Qué haces?', opciones: ['Investigas por tu cuenta quién fue', 'Prometes guardar el secreto', 'Escuchas, no prometes secreto, activas Safeguarding/online safety y avisas a coordinación', 'Lo ignoras'], correcta: 2, explica: 'No se investiga personalmente; se escala por el protocolo.' },
      { p: '¿Qué fortalece más la autoestima de un adolescente?', opciones: ['Elogios generales', 'Competencia real, evidencia de progreso y confianza de los adultos', 'Evitar toda exigencia', 'Compararlo con compañeros'], correcta: 1, explica: 'Se apoya en logros reales y en relaciones de aceptación.' },
      { p: 'Un conflicto entre un estudiante y sus padres afecta a su estudio. ¿Qué haces?', opciones: ['Tomas partido por el estudiante', 'Medias en el conflicto familiar', 'Devuelves la conversación al plan académico, documentas el impacto y consultas con coordinación', 'Das consejos de pareja a los padres'], correcta: 2, explica: 'No tomas partido ni medias en asuntos íntimos; documentas y consultas.' },
      { p: 'Ofrecer elección dentro de un marco firme con un adolescente es…', opciones: ['Perder autoridad', 'Una herramienta eficaz de autonomía con límites', 'Evitar normas', 'Solo para menores'], correcta: 1, explica: 'Autonomía negociada con límites claros en lo esencial.' },
    ],
    evidencia:
      'Aplica la secuencia observar → documentar → apoyar → comunicar → escalar/derivar a un caso adolescente ficticio (con ID, sin datos personales). Máx. 12 líneas.',
  },

  'T9.3': {
    resumen:
      'Diferencias individuales y conciencia de neurodiversidad sin diagnosticar: observar patrones, adaptar el acompañamiento dentro del rol, comunicar sin etiquetas y derivar a un profesional con licencia cuando corresponda.',
    objetivos: [
      'Describir conductas observables sin etiquetas clínicas.',
      'Aplicar ajustes educativos sencillos y saber cuándo se convierten en cuestión de política.',
      'Comunicar con la familia y derivar (REFER TO LICENSED PROFESSIONAL) sin cruzar el límite del rol.',
    ],
    lecciones: [],
    practica: {
      situacion:
        'Estudiante ID-0517 (quinto grado) se levanta con frecuencia, no termina tareas largas y olvida consignas; con tareas cortas rinde bien. La madre pregunta: «¿Tendrá algo?».',
      preguntas: ['¿Qué registrarías durante tres semanas?', '¿Qué ajustes aplicarías?', '¿Qué responderías a la madre?'],
      criterio:
        'Registro de cuándo, durante cuánto, qué ayuda y qué empeora; descartar sueño, desayuno, entorno; bloques cortos con pausas, lista visual, repetir la consigna. A la madre: no puedo decir si «tiene algo» ni es mi función; esto es lo que veo y lo que le ayuda; si le preocupa, puede consultar con su pediatra. Sin etiquetas ni medicación; informar a coordinación.',
    },
    quiz: [
      { p: 'La madre pregunta si su hijo «tiene TDAH». ¿Qué respondes?', opciones: ['Sí, parece TDAH', 'No es mi función diagnosticar; te cuento lo que observo y lo que le ayuda, y puedes consultar con un profesional', 'No tiene nada', 'Que le den medicación'], correcta: 1, explica: 'El mentor no diagnostica ni opina sobre tratamientos.' },
      { p: '¿Cuál es una nota correcta?', opciones: ['«Parece disléxico»', '«Durante la lectura en voz alta, en 3 de 5 sesiones, se detuvo ante palabras largas y pidió que se las leyera»', '«Es lento»', '«Tiene problemas»'], correcta: 1, explica: 'Describe conducta observable y repetida.' },
      { p: 'Un ajuste cambia lo que se evalúa o cómo se certifica el dominio. ¿Qué haces?', opciones: ['Lo aplicas por tu cuenta', 'Lo prometes a la familia', 'Lo consultas con coordinación: es una cuestión de política', 'Lo ignoras'], correcta: 2, explica: 'No prometes adaptaciones oficiales ni condiciones especiales sin aprobación.' },
      { p: 'Cuando se necesita una evaluación clínica, la respuesta es…', opciones: ['Hacerla internamente', 'REFER TO LICENSED PROFESSIONAL', 'Esperar un año', 'Pedir a otro mentor'], correcta: 1, explica: 'Los servicios educativos de Chanak no se presentan como diagnóstico clínico.' },
      { p: 'Un patrón es significativo cuando…', opciones: ['Ocurrió una vez', 'Es frecuente, dura semanas, aparece en más de una situación y afecta al aprendizaje o bienestar', 'Lo dice un compañero', 'La familia lo niega'], correcta: 1, explica: 'Frecuencia, duración, contextos e impacto.' },
    ],
    evidencia:
      'Redacta dos notas de observación sobre un estudiante ficticio (con ID): una incorrecta y una corregida con hechos. Explica qué cambiaste. Máx. 10 líneas.',
  },

  'T9.4': {
    resumen:
      'La secuencia OBSERVAR → DOCUMENTAR → APOYAR → COMUNICAR → ESCALAR/DERIVAR aplicada a ocho casos reales, con los límites del rol (no es psicólogo clínico) y su relación con Safeguarding.',
    objetivos: [
      'Aplicar la secuencia completa y saber en qué paso estás y por qué.',
      'Redactar notas, comunicaciones a familia y escalamientos con calidad.',
      'Distinguir acompañamiento (este bloque) de protección (Safeguarding) y actuar en consecuencia.',
    ],
    lecciones: [],
    practica: {
      situacion:
        'Un estudiante ID-0602 (octavo grado) cambia de pronto: deja de conectarse con cámara, evita las sesiones grupales y escribe «no importa nada» en un ejercicio. Hasta hoy era participativo.',
      preguntas: ['¿Qué paso de la secuencia te corresponde ahora y por qué?', '¿Qué escribirías en el SIS?', '¿A quién avisas y cuándo?'],
      criterio:
        'Una frase como «no importa nada» junto con un cambio brusco es una señal que no se gestiona sola: documentar con exactitud (sus palabras, fecha, contexto), no investigar, no prometer confidencialidad, activar el protocolo de Safeguarding y avisar de inmediato a coordinación; informar a la familia según el procedimiento. Después, seguimiento con acompañamiento educativo.',
    },
    quiz: [
      { p: '¿Cuál es la secuencia de acompañamiento educativo?', opciones: ['Observar, juzgar, castigar, informar', 'Observar, documentar, apoyar, comunicar, escalar/derivar', 'Diagnosticar, tratar, informar', 'Esperar, ignorar, derivar'], correcta: 1, explica: 'Es el hilo de todo el bloque.' },
      { p: 'Un estudiante muestra señales de posible riesgo para su seguridad. ¿Qué haces?', opciones: ['Pruebas apoyos durante semanas', 'Investigas', 'Escalas de inmediato por Safeguarding, sin prometer confidencialidad', 'Esperas a estar seguro'], correcta: 2, explica: 'El riesgo se escala ya; no se investiga.' },
      { p: '¿Qué NO se escribe en el SIS?', opciones: ['Hechos con fecha', 'Diagnósticos, suposiciones y datos sanitarios innecesarios', 'Acuerdos con la familia', 'Fecha de revisión'], correcta: 1, explica: 'Solo lo pertinente al acompañamiento educativo.' },
      { p: '¿Cuál es la diferencia entre este bloque y Safeguarding?', opciones: ['Ninguna', 'Este bloque comprende y acompaña el desarrollo; Safeguarding protege al menor y actúa ante riesgos', 'Este bloque es opcional', 'Safeguarding es solo para coordinadores'], correcta: 1, explica: 'Son módulos distintos y ambos obligatorios.' },
      { p: 'Un conflicto familiar afecta al estudio de una estudiante. ¿Qué haces?', opciones: ['Medias entre los padres', 'Tomas partido', 'Devuelves la conversación al plan académico, documentas el impacto y consultas con coordinación', 'Cierras el caso'], correcta: 2, explica: 'No eres mediador familiar.' },
    ],
    evidencia:
      'Elige uno de los ocho casos del módulo y desarrolla la secuencia completa con tus palabras (ID, sin datos personales): qué observas, qué documentas, qué apoyas, qué comunicas y qué escalas o derivas. Máx. 15 líneas.',
  },
}
