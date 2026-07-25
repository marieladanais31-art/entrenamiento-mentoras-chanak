// BLOQUE 6 — PRÁCTICA SUPERVISADA + PROYECTO FINAL (40h, Nivel 1)
// BLOQUES 7-10 — NIVEL 2, COORDINADORA CERTIFICADA (120h)
// Fuentes: Self-Study MSA NGA 2026 (Governance, Resources, Teaching & Learning),
// políticas operativas Chanak-EducaFe, Expansion Blueprint y SIS Chanak.
// Guiones listos para grabar en Google Vids.

export const BLOQUE6 = {
  '6.1': {
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

  '6.2': {
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
        p: '¿Qué significa el criterio de coherencia en la rúbrica del portafolio?',
        opciones: [
          'Que la letra y el formato sean uniformes',
          'Que el PEI, el seguimiento y las evidencias cuenten la misma historia del mismo estudiante',
          'Que todas las notas superen el ochenta por ciento',
          'Que el portafolio tenga el mismo número de páginas que el de tus compañeras',
        ],
        correcta: 1,
        explica: 'Un portafolio coherente demuestra que sabes conectar diagnóstico, plan, intervención y evidencia en un proceso único.',
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

  '6.3': {
    resumen:
      'Cierras el Nivel 1 sentándote con la Head of LSP para revisar todo tu recorrido con una rúbrica final. No es un examen sorpresa: es una conversación profesional sobre evidencia, en la que sabes de antemano qué se mira y cómo se puntúa.',
    objetivos: [
      'Preparar tu expediente de formación completo para la evaluación final.',
      'Interpretar la rúbrica final de certificación de mentora y sus niveles de desempeño.',
      'Recibir y aprovechar la retroalimentación, incluyendo tu derecho a comentarla y a apelar.',
    ],
    lecciones: [
      {
        titulo: 'Cómo preparar la reunión de evaluación final',
        guion: [
          'La evaluación final son cinco horas: preparación de tu expediente, la reunión con la Head of LSP y la redacción conjunta de tu plan de desarrollo.',
          'Llegas con tu expediente ordenado: certificados de los bloques, ensayo del módulo uno punto dos, código de conducta firmado, simulacro de protección, tareas del SIS, diario de práctica y portafolio integrador.',
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
        explica: 'El personal tiene derecho a comentar su evaluación con el evaluador y a apelar ante un nivel superior de liderazgo. Es una garantía institucional documentada.',
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
        explica: 'Sin curso externo y simulacro superado no hay certificación: la protección de menores no admite excepciones ni plazos de gracia.',
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

export const BLOQUE7 = {
  '7.1': {
    resumen:
      'A partir de aquí cambias de silla: dejas de acompañar a un estudiante para dirigir una operación. Y lo primero es entender qué es exactamente Chanak en el lenguaje de la acreditación: un Learning Service Provider con sedes de implementación, no un colegio con campus.',
    objetivos: [
      'Explicar la diferencia entre LSP, oficina central y Learning Implementation Site.',
      'Situar tu autoridad como coordinadora dentro de la cadena de gobernanza.',
      'Identificar qué decisiones son locales y cuáles corresponden a la oficina central y al Board.',
    ],
    lecciones: [
      {
        titulo: 'LSP, LIS y por qué la palabra importa',
        guion: [
          'Chanak es un Learning Service Provider, un LSP: presta servicio educativo a familias en distintos países, no gestiona un colegio con campus único.',
          'La sede local se llama Learning Implementation Site, LIS, y en el lenguaje cotidiano la llamamos hub. Es donde el modelo se implementa con estudiantes reales.',
          'La oficina central define el modelo académico, las políticas, los contratos, el marco jurídico y los sistemas. El LIS los implementa con fidelidad.',
          'La Head of LSP es el cargo directivo del proveedor y el Board da el visto bueno a las certificaciones y a las decisiones institucionales de fondo.',
          'Esta distinción no es burocracia: es lo que permite abrir sedes sin fragmentar el estándar académico ni la protección de los estudiantes.',
          'Como coordinadora, tú eres la responsable identificada del LIS. Diriges la operación local; no reescribes el modelo.',
        ],
        visuales: [
          'Diapositiva: organigrama, Board, Head of LSP, oficina central, varios LIS.',
          'Diapositiva: tabla, decide la oficina central frente a implementa el LIS.',
          'Diapositiva: glosario, LSP, LIS, hub, Head of LSP, Board.',
        ],
      },
      {
        titulo: 'Tu autoridad y tus límites como coordinadora',
        guion: [
          'Lo que decides tú: la organización semanal del equipo local, la asignación de mentoras a estudiantes, los horarios de la sede, la logística del espacio y el clima de trabajo.',
          'Lo que consultas: cambios de PEI con impacto académico, casos de estudiantes estancados tras dos ciclos de intervención, situaciones de familia complejas y cualquier duda de encaje del modelo.',
          'Lo que escalas siempre: protección de menores, protección de datos, quejas formales, convenios, precios, admisiones excepcionales y cualquier pregunta sobre marco jurídico u homologación.',
          'Nunca firmas un convenio con una iglesia o un propietario. Nunca prometes una admisión, un precio, una homologación ni una titulación garantizada. Nunca autorizas el uso de la marca.',
          'Decir con calidez que eso lo decide la oficina central transmite más seriedad que improvisar un sí. La claridad de rol es parte del servicio.',
          'La evaluación de este módulo es un caso: recibirás cinco situaciones de sede y deberás clasificar cada una en decido, consulto o escalo, justificando por qué.',
        ],
        visuales: [
          'Diapositiva: semáforo decido, consulto, escalo con dos ejemplos de sede por color.',
          'Diapositiva: lista de los cuatro nunca de la coordinadora.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Una familia nueva pregunta si el diploma de Chanak está homologado en España y quiere una respuesta hoy. Eres la coordinadora. ¿Qué haces?',
        opciones: [
          'Le confirmo que sí, para no perder la matrícula',
          'Le explico el modelo con precisión y derivo la cuestión jurídica a la oficina central',
          'Le digo que no lo sé y cierro la conversación',
          'Firmo un documento provisional de compromiso',
        ],
        correcta: 1,
        explica: 'El marco jurídico y la homologación los valida la oficina central con asesoría. La coordinadora informa con precisión y escala; no promete.',
      },
      {
        p: 'En terminología MSA, la sede local donde se implementa el modelo se llama…',
        opciones: ['Campus regional', 'Learning Implementation Site', 'Learning Service Provider', 'Delegación acreditada'],
        correcta: 1,
        explica: 'El LIS es la sede de implementación, también llamada hub. El LSP es el proveedor de servicio educativo, que es Chanak en su conjunto.',
      },
      {
        p: '¿Cuál de estas decisiones SÍ corresponde a la coordinadora del LIS?',
        opciones: [
          'Firmar el convenio de cesión del local con la iglesia',
          'Fijar una tarifa especial para una familia',
          'Asignar mentoras a estudiantes y organizar el horario semanal de la sede',
          'Aprobar una excepción al dominio mínimo del ochenta por ciento',
        ],
        correcta: 2,
        explica: 'La organización del equipo y del horario es operación local. Convenios, precios y estándares académicos no son competencia de la sede.',
      },
      {
        p: '¿Quién da el visto bueno final a las certificaciones del programa?',
        opciones: ['La coordinadora del hub', 'La mentora supervisora', 'El Board, junto con la Head of LSP', 'La familia del estudiante'],
        correcta: 2,
        explica: 'La Head of LSP conduce la evaluación y el Board da el visto bueno institucional a la certificación.',
      },
    ],
  },

  '7.2': {
    resumen:
      'Admisiones, matrícula, contratos y pagos son el punto donde una sede gana o pierde la confianza de las familias. Aquí aprendes a operar el proceso con orden y trazabilidad, sabiendo exactamente dónde termina tu firma y dónde empieza la de la oficina central.',
    objetivos: [
      'Describir el flujo completo desde el primer contacto hasta la matrícula registrada en el SIS.',
      'Aplicar las políticas de contratos y pagos sin asumir competencias de la oficina central.',
      'Detectar los errores operativos que generan problemas académicos y legales meses después.',
    ],
    lecciones: [
      {
        titulo: 'El flujo de admisión y matrícula, paso a paso',
        guion: [
          'Paso uno, primer contacto: escuchas a la familia, explicas el modelo sesenta veinte veinte, la vía de material y el dominio mínimo del ochenta por ciento. Sin promesas de homologación ni de resultados.',
          'Paso dos, entrevista de idoneidad: se comprueba que la familia entiende y acepta el modelo, incluido su papel, porque en Chanak los padres conservan la autoridad educativa.',
          'Paso tres, diagnóstico de ubicación: una sola evaluación según la vía, por el principio de no duplicación.',
          'Paso cuatro, contrato y matrícula: el contrato lo emite y valida la oficina central; tú acompañas a la familia en el proceso y verificas que la documentación esté completa.',
          'Paso cinco, registro en el SIS: matrícula por año escolar y trimestre, con las materias que corresponden a ese estudiante. Las materias son dinámicas desde la matrícula, nunca una lista fija copiada de otro alumno.',
          'Paso seis, PEI y arranque de rutina. Si un estudiante empieza a trabajar sin matrícula registrada y sin PEI validado, la sede está generando un problema que aparecerá en el boletín del trimestre.',
        ],
        visuales: [
          'Diapositiva: flujo de seis pasos con el responsable de cada uno.',
          'Diapositiva: pantalla de matrícula del SIS con las materias dinámicas por año y trimestre.',
          'Diapositiva: frase destacada, sin matrícula registrada no hay expediente.',
        ],
      },
      {
        titulo: 'Contratos, pagos y trazabilidad',
        guion: [
          'El contrato es un documento institucional: lo emite y lo firma quien tiene autoridad para hacerlo, y queda archivado en el SIS como parte del expediente.',
          'Los importes, descuentos, calendarios de pago y condiciones de baja los define la oficina central. La coordinadora no negocia condiciones económicas con las familias.',
          'Tu responsabilidad operativa es que nada quede en un chat: cada acuerdo relevante se registra en el sistema y cada documento firmado se archiva donde corresponde.',
          'En el ecosistema conviven entidades distintas con funciones distintas: la fundación estadounidense capta financiación internacional y la asociación en España gestiona cuotas y donaciones locales. Nunca mezcles los mensajes ni los canales de cobro.',
          'Cuando una familia pregunta por dinero, la respuesta correcta es cálida y clara: eso lo gestiona directamente la oficina central, te pongo en contacto ahora mismo.',
          'La evaluación es una simulación completa: procesas una admisión ficticia de principio a fin, dejando registro de cada paso y derivando correctamente lo que no te corresponde.',
        ],
        visuales: [
          'Diapositiva: qué archiva la sede frente a qué emite la oficina central.',
          'Diapositiva: mapa de entidades y su función, financiación internacional frente a operación local.',
          'Diapositiva: guion de derivación amable para temas económicos.',
        ],
      },
      {
        titulo: 'Los cinco errores operativos que más caros salen',
        guion: [
          'Error uno, empezar clases sin matrícula registrada. Al llegar el boletín no hay materias ni trimestre donde volcar las notas.',
          'Error dos, copiar la lista de materias de otro estudiante. Las materias se asignan desde la matrícula según el año y el trimestre de ese alumno concreto.',
          'Error tres, aceptar documentación incompleta con la promesa de traerla después. Después casi nunca llega.',
          'Error cuatro, prometer algo por mensajería que el contrato no dice. Lo prometido crea expectativa aunque no tenga validez.',
          'Error cinco, dejar acuerdos económicos sin registro. Tres meses más tarde nadie recuerda lo mismo y la sede pierde credibilidad.',
          'Regla de coordinadora que resume todo: si no está en el sistema, no ha pasado. El portal orienta, el SIS registra.',
        ],
        visuales: [
          'Diapositiva: los cinco errores con su consecuencia a tres meses.',
          'Diapositiva: frase destacada, si no está en el sistema no ha pasado.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Una familia quiere empezar el lunes y falta un documento de la matrícula. Prometen traerlo en dos semanas. ¿Qué haces como coordinadora?',
        opciones: [
          'Empiezan el lunes y se confía en la promesa',
          'No se inicia la rutina hasta completar la matrícula y el PEI validado',
          'Empiezan el lunes y registro las notas en un cuaderno aparte',
          'Firmo yo un contrato provisional',
        ],
        correcta: 1,
        explica: 'Sin matrícula registrada y PEI validado no hay expediente donde volcar la evidencia académica del trimestre. La prisa de hoy es el problema del boletín.',
      },
      {
        p: 'Al matricular a un estudiante nuevo, las materias se asignan…',
        opciones: [
          'Copiando la lista de un compañero del mismo curso',
          'Desde una lista fija institucional igual para todos',
          'De forma dinámica desde la matrícula, según su año escolar y trimestre',
          'Al final del trimestre, cuando ya se sabe qué hizo',
        ],
        correcta: 2,
        explica: 'En el SIS las materias son dinámicas por año escolar y trimestre para cada estudiante; nunca listas fijas ni copiadas.',
      },
      {
        p: 'Una madre te pide por teléfono un descuento porque su hija va a traer a dos amigas. ¿Cuál es tu respuesta correcta?',
        opciones: [
          'Le concedo el descuento y lo comunico luego',
          'Le digo que no existe esa posibilidad en ningún caso',
          'Agradezco el interés y derivo la cuestión económica a la oficina central',
          'Le pido que lo pregunte en la iglesia colaboradora',
        ],
        correcta: 2,
        explica: 'Los importes y condiciones los define la oficina central. La coordinadora deriva con calidez, sin negar ni prometer.',
      },
      {
        p: 'Acordáis verbalmente con una familia un calendario de pagos distinto. ¿Qué falta?',
        opciones: [
          'Nada, la palabra basta entre personas de confianza',
          'Que quede registrado en el sistema y validado por quien tiene autoridad para acordarlo',
          'Enviar un audio de confirmación por mensajería',
          'Anotarlo en la agenda de la sede',
        ],
        correcta: 1,
        explica: 'Los acuerdos económicos los valida la oficina central y deben quedar registrados. Si no está en el sistema, no ha pasado.',
      },
      {
        p: '¿Cuál es la función de la asociación en España dentro del ecosistema?',
        opciones: [
          'Captar grants internacionales en Estados Unidos',
          'Emitir los diplomas estadounidenses',
          'Gestionar cuotas, colaboraciones y donaciones locales que sostienen la operación diaria',
          'Acreditar la sede ante MSA',
        ],
        correcta: 2,
        explica: 'La entidad española sostiene la operación local con cuotas y donaciones; la fundación estadounidense capta financiación internacional. Son funciones distintas y no se mezclan.',
      },
    ],
  },

  '7.3': {
    resumen:
      'Abrir una sede en un país no es solo encontrar un local bonito. Este módulo te da la lista de comprobación real de cumplimiento local en España y, sobre todo, la disciplina de no decidir por tu cuenta el marco jurídico de la actividad.',
    objetivos: [
      'Enumerar los requisitos de cumplimiento local aplicables a un hub en España.',
      'Verificar seguro, certificados del personal, protección de datos y condiciones del espacio.',
      'Reconocer qué cuestiones jurídicas debe validar obligatoriamente la oficina central.',
    ],
    lecciones: [
      {
        titulo: 'El encuadre correcto de la actividad',
        guion: [
          'En España, un hub de Chanak opera como actividad educativa no reglada de apoyo o enriquecimiento, encuadrada en el epígrafe de otra educación, el CNAE ocho cinco cinco nueve.',
          'Esto tiene una consecuencia que debes saber decir en voz alta: la sede no es un centro reglado y no expide titulación oficial española. Confundir esto en una conversación con una familia es un problema grave.',
          'El Real Decreto ochocientos seis de mil novecientos noventa y tres regula los centros extranjeros en España. Cualquier encaje formal en ese marco lo estudia y lo valida la oficina central con asesoría jurídica.',
          'La coordinadora no decide el marco jurídico por su cuenta, ni siquiera con buena información. Recoge datos locales, documenta y consulta.',
          'Frente a las familias, la coordinadora explica el modelo real: diploma estadounidense, registro en Florida y candidatura MSA. Nunca centro reglado, nunca homologación garantizada.',
        ],
        visuales: [
          'Diapositiva: qué es y qué no es un hub Chanak en España.',
          'Diapositiva: aviso, el marco jurídico lo valida la oficina central con asesoría.',
        ],
      },
      {
        titulo: 'La lista de comprobación de cumplimiento',
        guion: [
          'Uno, comunicación previa municipal de la actividad en el local, con las condiciones de uso que el ayuntamiento exija.',
          'Dos, seguro de responsabilidad civil vigente y adecuado a la actividad con menores. Sin seguro no se abre, sin excepciones.',
          'Tres, certificados negativos del Registro Central de delincuentes sexuales para todas las personas que trabajen o colaboren con menores, incluidos voluntarios de la iglesia.',
          'Cuatro, cumplimiento de la LOPIVI: persona responsable de protección, protocolo escrito, formación del personal y canal de comunicación de situaciones de riesgo.',
          'Cinco, protección de datos según el RGPD y la ley española: base legal, información a las familias, consentimientos, y datos de menores solo en los sistemas autorizados.',
          'Seis, condiciones del espacio: aforo y ocupación adecuados, salidas de evacuación libres, botiquín, higiene y control documentado de entradas y salidas de los estudiantes.',
          'La evaluación del módulo es precisamente esta lista aplicada a un local real o simulado, con evidencia adjunta de cada punto y las carencias señaladas sin maquillar.',
        ],
        visuales: [
          'Diapositiva: checklist de seis bloques con casilla y evidencia requerida.',
          'Diapositiva: los certificados del personal como requisito previo, no posterior.',
          'Diapositiva: plano tipo con salidas de evacuación y zonas de trabajo.',
        ],
      },
      {
        titulo: 'El semáforo de apertura',
        guion: [
          'El semáforo traduce la lista en una decisión: verde abrir, ámbar esperar y corregir, rojo no abrir.',
          'Bloquean la apertura, y por tanto son rojo: falta de seguro, falta de certificados del personal, ausencia de responsable identificado, espacio inadecuado, ausencia de convenio firmado y falta de sostenibilidad económica demostrada.',
          'Ámbar es una situación honesta y frecuente: hay base, faltan piezas, se fija plazo y responsable para cada una y se vuelve a evaluar.',
          'La frase que debes tener grabada como coordinadora es esta: nunca se abre por entusiasmo. El entusiasmo es combustible, no es criterio.',
          'Cerrar una sede mal abierta cuesta mucho más que esperar tres meses. Y el coste lo pagan las familias que confiaron.',
          'Tu informe de cumplimiento va a la oficina central con el color propuesto y la evidencia. La decisión final de apertura no es tuya, pero tu informe es la base de esa decisión.',
        ],
        visuales: [
          'Diapositiva: semáforo con los seis bloqueantes en rojo.',
          'Diapositiva: frase destacada, nunca se abre por entusiasmo.',
        ],
      },
    ],
    quiz: [
      {
        p: 'El local es perfecto, la iglesia está entusiasmada y hay ocho familias interesadas, pero el seguro de responsabilidad civil aún no está contratado. ¿Qué color propones?',
        opciones: [
          'Verde, el seguro se contrata la primera semana',
          'Ámbar, se abre con grupos reducidos',
          'Rojo, la falta de seguro bloquea la apertura',
          'Verde, si la iglesia tiene su propio seguro general',
        ],
        correcta: 2,
        explica: 'La falta de seguro es un bloqueante absoluto del semáforo de apertura. No se abre sin cobertura para la actividad con menores.',
      },
      {
        p: 'Un voluntario de la iglesia va a ayudar dos tardes por semana con los estudiantes. ¿Qué necesitas de él?',
        opciones: [
          'Nada, es voluntario y no personal contratado',
          'Solo una carta de recomendación del pastor',
          'El certificado negativo del Registro Central de delincuentes sexuales, como al resto del personal',
          'Un curso de primeros auxilios',
        ],
        correcta: 2,
        explica: 'El requisito se aplica a toda persona que trabaje o colabore con menores, incluidos voluntarios. Es previo al contacto con estudiantes.',
      },
      {
        p: 'Un ayuntamiento os pide aclarar el tipo de actividad. ¿Cómo se describe correctamente un hub en España?',
        opciones: [
          'Centro educativo reglado con currículo propio',
          'Actividad educativa no reglada de apoyo o enriquecimiento, epígrafe CNAE ocho cinco cinco nueve',
          'Academia de idiomas',
          'Centro extranjero ya autorizado por el Estado',
        ],
        correcta: 1,
        explica: 'Ese es el encuadre correcto. Cualquier otro encaje formal, incluido el del Real Decreto ochocientos seis de mil novecientos noventa y tres, lo valida la oficina central con asesoría.',
      },
      {
        p: 'Descubres que el local tiene una salida de evacuación bloqueada por material almacenado. ¿Qué haces?',
        opciones: [
          'Lo anoto para el próximo trimestre',
          'Lo corrijo de inmediato y lo documento; mientras no esté libre, el espacio es inadecuado',
          'Aviso a la iglesia y sigo con las clases',
          'Reduzco el número de estudiantes por sala',
        ],
        correcta: 1,
        explica: 'Las condiciones de evacuación son parte de la idoneidad del espacio y no admiten aplazamiento. Se corrige y se deja evidencia.',
      },
    ],
  },

  '7.4': {
    resumen:
      'El modelo de Alquiler Compartido es la manera en que Chanak y EducaFe trabajan con iglesias: espacio compartido y colaboración concreta a cambio de estructura, formación y seguridad jurídica. Aquí aprendes a plantear esa conversación con honestidad y sin prometer lo que no puedes.',
    objetivos: [
      'Explicar el modelo de Alquiler Compartido y lo que aporta cada parte.',
      'Conducir una conversación con una iglesia socia pidiendo colaboración concreta.',
      'Identificar las promesas prohibidas y el papel del convenio escrito.',
    ],
    lecciones: [
      {
        titulo: 'Qué aporta cada parte',
        guion: [
          'El modelo de Alquiler Compartido parte de un hecho sencillo: muchas iglesias tienen espacio infrautilizado de lunes a viernes y muchas familias necesitan un lugar donde aprender.',
          'La iglesia cede o comparte espacio y colabora financieramente en la operación. A cambio recibe seguridad jurídica, un convenio escrito y un proyecto educativo serio en su casa.',
          'Chanak y EducaFe aportan estructura, formación del personal, protocolos de protección, seguimiento académico y visión educativa. No aportamos solo alumnos: aportamos marco.',
          'La colaboración que se pide es concreta, nunca genérica: espacio en horario definido, voluntariado con certificados, difusión en la comunidad, becas para familias con dificultad y acompañamiento pastoral.',
          'Pedir colaboración concreta no es incomodar: es respetar. Una petición vaga produce compromisos vagos, y los compromisos vagos se rompen en el segundo trimestre.',
          'Antes de la reunión, prepara qué necesitas exactamente y qué puedes ofrecer con verdad. Después de la reunión, resume por escrito lo hablado.',
        ],
        visuales: [
          'Diapositiva: balanza, qué aporta la iglesia frente a qué aporta Chanak y EducaFe.',
          'Diapositiva: las cinco formas de colaboración concreta con iconos.',
          'Diapositiva: guion de apertura de la conversación con una iglesia.',
        ],
      },
      {
        titulo: 'Las promesas prohibidas y el convenio',
        guion: [
          'Hay cuatro cosas que nunca se prometen a una iglesia socia: que su local será un centro reglado, que habrá homologación, que la titulación está garantizada y que puede usar libremente la marca Chanak.',
          'Prometerlas cierra un acuerdo hoy y rompe la relación en un año, además de exponer legalmente a las dos partes.',
          'La formalización es siempre por convenio escrito, redactado y firmado por quien tiene autoridad. La coordinadora prepara la información y acompaña la conversación; no firma.',
          'El convenio recoge lo esencial: espacio y horarios, responsable identificado de cada parte, condiciones económicas, seguro, protección de menores, uso de imagen y marca, duración y forma de terminar el acuerdo.',
          'Sigue el cronograma de expansión en su orden: primero fase pastoral, después grupo familiar y solo entonces academia. Saltarse fases produce sedes frágiles.',
          'La evaluación del módulo es un plan de sede: perfil de la iglesia socia, colaboración concreta solicitada, aportación de Chanak, semáforo de cumplimiento y borrador de puntos para el convenio, sin firmar nada.',
        ],
        visuales: [
          'Diapositiva: las cuatro promesas prohibidas tachadas en rojo.',
          'Diapositiva: los ocho puntos que debe contener un convenio.',
          'Diapositiva: cronograma de expansión, fase pastoral, grupo familiar, academia.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Un pastor te dice que firmará hoy mismo si le confirmas que su local pasará a ser un centro homologado. ¿Qué respondes?',
        opciones: [
          'Se lo confirmo, total es una cuestión de tiempo',
          'Le explico con claridad que no se promete homologación ni centro reglado y le presento el modelo real',
          'Le digo que lo consulte con su abogado',
          'Firmo un preacuerdo verbal',
        ],
        correcta: 1,
        explica: 'Es una de las cuatro promesas prohibidas. La honestidad protege a la iglesia, a las familias y a la institución.',
      },
      {
        p: 'En el modelo de Alquiler Compartido, ¿qué recibe la iglesia?',
        opciones: [
          'Un alquiler en metálico por encima del mercado',
          'La gestión académica de sus propios cursos',
          'Seguridad jurídica, convenio escrito, estructura, formación y un proyecto educativo serio',
          'El derecho a usar la marca Chanak como quiera',
        ],
        correcta: 2,
        explica: 'La contrapartida no es sobre todo económica: es marco, protección y estructura educativa, formalizados en un convenio escrito.',
      },
      {
        p: 'La iglesia pregunta cómo puede ayudar. ¿Cuál es la mejor petición?',
        opciones: [
          'Lo que ustedes puedan, cualquier ayuda vale',
          'Dos aulas los martes y jueves de nueve a dos, dos voluntarios con certificados y difusión en el boletín dominical',
          'Una aportación económica sin concretar cuantía ni destino',
          'Que recen por el proyecto',
        ],
        correcta: 1,
        explica: 'La colaboración se pide concreta: espacio con horario, voluntariado con certificados, difusión, becas o acompañamiento. Lo vago no se cumple.',
      },
      {
        p: 'Una iglesia entusiasta quiere abrir la academia el mes que viene, sin haber pasado por fase pastoral ni grupo familiar. ¿Qué recomiendas?',
        opciones: [
          'Aprovechar el impulso y abrir ya',
          'Seguir el cronograma de expansión: fase pastoral, grupo familiar y después academia',
          'Abrir solo con estudiantes de la propia iglesia',
          'Abrir sin convenio y regularizar después',
        ],
        correcta: 1,
        explica: 'El Expansion Blueprint tiene ese orden por una razón: saltarse fases produce sedes frágiles que acaban perjudicando a las familias.',
      },
      {
        p: '¿Quién firma el convenio con la iglesia?',
        opciones: [
          'La coordinadora del hub',
          'El pastor y la mentora responsable del grupo',
          'Quien tiene autoridad institucional para firmarlo, no la coordinadora',
          'Nadie, basta un acuerdo de palabra entre hermanos',
        ],
        correcta: 2,
        explica: 'La coordinadora prepara información y acompaña la conversación, pero la firma de convenios corresponde a la oficina central.',
      },
    ],
  },
}

export const BLOQUE8 = {
  '8.1': {
    resumen:
      'Supervisar a una mentora no es vigilarla: es mirar su trabajo con una rúbrica, decírselo a tiempo y acompañarla a mejorar. Este módulo te entrena en el ciclo completo de observación, retroalimentación y plan de mejora, con las garantías que la propia institución debe a su personal.',
    objetivos: [
      'Observar una sesión de mentoría con rúbrica y registrar conductas observables.',
      'Dar retroalimentación en un plazo de veinticuatro a cuarenta y ocho horas centrada en el hecho y no en la persona.',
      'Elaborar un plan de mejora con acciones, plazos y evidencia, respetando el derecho a comentar y apelar.',
    ],
    lecciones: [
      {
        titulo: 'Observar con rúbrica, no con impresiones',
        guion: [
          'Una observación sin rúbrica es una opinión. Con rúbrica es evidencia, y la evidencia se puede discutir, mejorar y documentar.',
          'La rúbrica de observación de mentora mira cinco cosas: Apertura del Día y clima, gestión de la rutina y las metas, aplicación del dominio mínimo del ochenta por ciento, calidad de la retroalimentación al estudiante y registro en el SIS.',
          'Antes de observar, avisa: día, duración y qué vas a mirar. La observación sorpresa genera defensa, y la defensa no enseña nada.',
          'Durante la sesión, tu trabajo es registrar hechos: qué se dijo, cuánto duró, cuántos estudiantes participaron, qué pasó cuando uno falló una evaluación. No corriges en directo salvo riesgo para un menor.',
          'Registra también lo que funciona. Una observación que solo recoge fallos no es rigurosa: es incompleta.',
          'Al terminar, escribe tus notas el mismo día. La memoria de una observación se degrada muy rápido y con ella la justicia de la valoración.',
        ],
        visuales: [
          'Diapositiva: rúbrica de observación con los cinco criterios y descriptores por nivel.',
          'Diapositiva: ejemplo de notas de observación, hechos frente a impresiones.',
          'Diapositiva: aviso previo, qué se comunica a la mentora antes de observarla.',
        ],
      },
      {
        titulo: 'La conversación de retroalimentación',
        guion: [
          'La retroalimentación se da entre veinticuatro y cuarenta y ocho horas después. Más tarde ya no es útil; en caliente, no es prudente.',
          'Estructura de la conversación: qué observé, qué funcionó con ejemplo concreto, qué conviene ajustar con ejemplo concreto, qué propones tú y qué acordamos.',
          'Habla de conductas observables, nunca de la persona. No digas que le falta autoridad; di que tres estudiantes empezaron sin fijar metas y nadie lo corrigió hasta media hora después.',
          'Deja que hable ella primero sobre cómo vio la sesión. Muchas veces detecta el ajuste antes que tú, y entonces el plan es suyo, no impuesto.',
          'Cierra con uno o dos ajustes, no con doce. Una mentora que sale con doce tareas no cambia nada; con dos, cambia dos cosas.',
          'Todo queda por escrito: informe breve de observación, acuerdos y fecha de la siguiente revisión. Es evidencia del compromiso institucional con la formación y evaluación del personal.',
        ],
        visuales: [
          'Diapositiva: guion de la conversación en cinco pasos.',
          'Diapositiva: pares de frases, juicio sobre la persona frente a conducta observable.',
        ],
      },
      {
        titulo: 'Plan de mejora, evaluación anual y garantías del personal',
        guion: [
          'Cuando un criterio queda por debajo del nivel esperado, se abre un plan de mejora: qué se va a cambiar, cómo, con qué apoyo, en qué plazo y con qué evidencia se comprobará.',
          'El apoyo es parte del plan. Pedir un cambio sin dar formación, materiales o acompañamiento es pedir un milagro.',
          'Además de las observaciones a lo largo del año, existe una evaluación formal anual que integra observaciones, evidencia del SIS, cumplimiento de protección y desarrollo profesional.',
          'Garantía institucional que debes conocer y comunicar: la persona evaluada puede comentar su evaluación con quien la evalúa y, si mantiene el desacuerdo, apelar a un nivel de liderazgo superior.',
          'Ese derecho no debilita tu autoridad: la legitima. Un sistema que admite discusión es un sistema en el que la gente confía.',
          'La evaluación de este módulo es una observación simulada completa: rúbrica cumplimentada, informe escrito, conversación de retroalimentación grabada o presenciada y plan de mejora acordado.',
        ],
        visuales: [
          'Diapositiva: plantilla de plan de mejora con acción, apoyo, plazo y evidencia.',
          'Diapositiva: ciclo anual, observaciones, evaluación formal, plan de desarrollo.',
          'Diapositiva: derecho a comentar y apelar destacado como garantía del personal.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Observas a una mentora y concluyes que le falta carácter para llevar el grupo. ¿Cómo lo formulas en el informe?',
        opciones: [
          'Le falta carácter y autoridad natural',
          'Tres estudiantes iniciaron la sesión sin fijar metas y la corrección llegó treinta minutos después',
          'El grupo estaba descontrolado',
          'Necesita más experiencia vital',
        ],
        correcta: 1,
        explica: 'La retroalimentación se apoya en conductas observables y datos, nunca en rasgos de la persona. Solo lo observable se puede mejorar.',
      },
      {
        p: 'Una mentora no está de acuerdo con su evaluación anual y te lo dice. ¿Qué corresponde hacer?',
        opciones: [
          'Recordarle que la decisión es tuya y cerrar el tema',
          'Escuchar sus comentarios y, si mantiene el desacuerdo, informarle de que puede apelar a un nivel de liderazgo superior',
          'Repetir la evaluación desde cero',
          'Derivarla directamente a la familia afectada',
        ],
        correcta: 1,
        explica: 'El personal tiene derecho a comentar su evaluación con el evaluador y a apelar ante un nivel superior. Es una garantía documentada del sistema.',
      },
      {
        p: 'Tras una observación con varios puntos débiles, ¿cuántos ajustes acuerdas?',
        opciones: [
          'Todos los detectados, para no dejar nada suelto',
          'Ninguno, mejor esperar la evaluación anual',
          'Uno o dos ajustes concretos, con apoyo y plazo',
          'Los que la mentora quiera, sin plazo',
        ],
        correcta: 2,
        explica: 'Una lista larga no se cumple. Dos ajustes con apoyo y plazo producen cambio real y verificable.',
      },
      {
        p: '¿Cuándo se avisa a la mentora de que vas a observar su sesión?',
        opciones: [
          'Nunca, la observación debe ser sorpresa para ser real',
          'Antes, indicando día, duración y qué criterios vas a mirar',
          'Justo al entrar en el aula',
          'Después, al entregarle el informe',
        ],
        correcta: 1,
        explica: 'La observación anunciada reduce la actitud defensiva y permite que la mentora prepare su mejor versión, que es lo que se quiere consolidar.',
      },
      {
        p: 'Un plan de mejora está bien hecho cuando incluye…',
        opciones: [
          'Acción, apoyo ofrecido, plazo y evidencia con la que se comprobará',
          'Una advertencia escrita firmada',
          'La lista de todos los errores del trimestre',
          'Un objetivo general de mejorar la actitud',
        ],
        correcta: 0,
        explica: 'Sin apoyo, plazo y evidencia no hay plan: hay reproche. El plan de mejora es una herramienta de desarrollo, no una sanción.',
      },
    ],
  },

  '8.2': {
    resumen:
      'Coordinar un equipo local es convertir el modelo Chanak en un horario que funciona el lunes por la mañana. Aquí trabajas la planificación semanal, la asignación de mentoras y las reuniones breves que evitan que la sede improvise.',
    objetivos: [
      'Elaborar el plan semanal de una sede cubriendo core, Extensión Local y Life Skills.',
      'Asignar mentoras y estudiantes con criterios explicables y sostenibles.',
      'Conducir reuniones de equipo cortas, con acuerdos registrados y seguimiento.',
    ],
    lecciones: [
      {
        titulo: 'El plan semanal de la sede',
        guion: [
          'Un plan semanal de sede tiene que responder a cuatro preguntas: quién está, dónde, con quién y haciendo qué.',
          'Empieza por lo fijo: Opening Exercises cada mañana, bloques de unidades con revisión supervisada, la sesión semanal de Life Skills y la de Extensión Local según el calendario del PEI de cada estudiante.',
          'Reserva tiempo protegido para lo que siempre se come la semana: corrección, registro en el SIS y contacto con familias. Si no está en el horario, no ocurre.',
          'Deja un hueco de holgura. Una sede sin holgura se rompe el primer día que falta alguien, y siempre falta alguien.',
          'Publica el plan al equipo antes del lunes y no lo cambies a mitad de semana salvo causa real. La estabilidad del horario es parte del clima de aprendizaje.',
          'Revisa cada viernes qué se cumplió y qué no. Ese repaso de veinte minutos es la base del plan de la semana siguiente.',
        ],
        visuales: [
          'Diapositiva: plantilla de plan semanal de sede en cuadrícula de lunes a viernes.',
          'Diapositiva: bloques protegidos para corrección, registro y familias.',
          'Diapositiva: revisión de viernes en cinco preguntas.',
        ],
      },
      {
        titulo: 'Asignar mentoras y sostener al equipo',
        guion: [
          'Los criterios de asignación son cuatro: perfil del estudiante y su vía de material, experiencia de la mentora, continuidad de la relación y carga total de trabajo.',
          'La continuidad vale mucho: cambiar de mentora a mitad de trimestre cuesta semanas de confianza. Solo se cambia con motivo y avisando a la familia.',
          'La carga se mide de verdad, contando estudiantes, correcciones, reuniones con familias y registros. Una mentora sobrecargada baja la calidad de todo el equipo sin quejarse.',
          'Cuando alguien falta, ten un plan B escrito. Improvisar sustituciones delante de los estudiantes se nota y desordena la rutina.',
          'Reunión de equipo semanal de treinta minutos, con este orden: alertas del SIS, estudiantes en seguimiento, avisos operativos y un punto de formación breve.',
          'Cada reunión termina con acuerdos anotados, con responsable y fecha. La evaluación del módulo es exactamente esto: un plan semanal completo más el acta de una reunión de equipo.',
        ],
        visuales: [
          'Diapositiva: los cuatro criterios de asignación de mentoras.',
          'Diapositiva: orden del día de la reunión semanal de treinta minutos.',
          'Diapositiva: plantilla de acta con acuerdos, responsable y fecha.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Una mentora lleva ocho estudiantes, tres reuniones semanales con familias y toda la corrección de Life Skills de la sede. Pide ayuda. ¿Qué haces?',
        opciones: [
          'Le recuerdo que el compromiso es vocacional',
          'Reviso la carga real del equipo y redistribuyo tareas antes de que caiga la calidad',
          'Le quito los estudiantes más difíciles sin avisar a las familias',
          'Espero a la evaluación anual para tratarlo',
        ],
        correcta: 1,
        explica: 'La carga se mide y se gestiona. Una mentora sobrecargada arrastra la calidad de toda la sede, y eso lo paga el estudiante.',
      },
      {
        p: 'A mitad de trimestre quieres cambiar de mentora a un estudiante porque cuadra mejor el horario. ¿Es buena idea?',
        opciones: [
          'Sí, el horario es lo primero',
          'Sí, si el estudiante no se queja',
          'Solo con motivo real, avisando a la familia y documentándolo; la continuidad tiene valor',
          'No, un estudiante nunca puede cambiar de mentora',
        ],
        correcta: 2,
        explica: 'La continuidad de la relación cuesta semanas de construir. Se cambia con motivo, con aviso a la familia y con registro, no por comodidad de cuadrante.',
      },
      {
        p: '¿Qué debe tener tiempo protegido en el plan semanal de la sede?',
        opciones: [
          'Solo los bloques de clase con estudiantes',
          'Corrección, registro en el SIS y contacto con familias',
          'Las reuniones con la iglesia socia',
          'La formación externa de la coordinadora',
        ],
        correcta: 1,
        explica: 'Corregir, registrar y comunicar son trabajo, no huecos. Si no están en el horario, se hacen mal o no se hacen.',
      },
      {
        p: 'El orden del día correcto de la reunión semanal de equipo empieza por…',
        opciones: [
          'Los avisos administrativos',
          'Las alertas del SIS y los estudiantes en seguimiento',
          'El punto de formación',
          'Las quejas del equipo',
        ],
        correcta: 1,
        explica: 'Primero lo que afecta a estudiantes: alertas y seguimiento. Después operación y formación. Así la reunión sirve al aprendizaje.',
      },
    ],
  },

  '8.3': {
    resumen:
      'Un conflicto mal gestionado cuesta más matrículas que cualquier campaña. Este módulo te entrena para recibir una queja sin ponerte a la defensiva, distinguir lo que resuelves de lo que se escala, y cerrar con acuerdos que se cumplen.',
    objetivos: [
      'Aplicar un protocolo de cuatro pasos para recibir y tramitar una queja.',
      'Diferenciar queja operativa, desacuerdo académico y situación de protección.',
      'Comunicar decisiones difíciles a familias y a mentoras manteniendo verdad, calidez y límites.',
    ],
    lecciones: [
      {
        titulo: 'Recibir una queja sin perder el marco',
        guion: [
          'Paso uno, escuchar completo. No interrumpas para defender la sede. Quien se siente escuchado baja el tono; quien se siente contestado sube.',
          'Paso dos, resumir lo que has entendido y confirmarlo. Esa frase de resumen resuelve una parte importante de los conflictos por sí sola.',
          'Paso tres, clasificar. Si es operativa, la resuelves tú. Si es un desacuerdo académico, consultas con coordinación académica. Si toca protección de menores, protección de datos, dinero o marco legal, se escala de inmediato.',
          'Paso cuatro, comprometer un plazo concreto. Nunca digas que ya lo mirarás; di cuándo respondes, y responde en ese plazo. La regla de cuarenta y ocho horas para acuse de recibo también rige aquí.',
          'No prometas el resultado, promete el proceso. Puedes garantizar que se revisará con seriedad; no puedes garantizar que la conclusión será la que la familia desea.',
          'Registra la queja y su tramitación. Una queja no registrada vuelve más grande unas semanas después.',
        ],
        visuales: [
          'Diapositiva: protocolo de cuatro pasos, escuchar, resumir, clasificar, comprometer plazo.',
          'Diapositiva: árbol de clasificación, operativa, académica, escalable.',
          'Diapositiva: frases útiles para el paso de resumen.',
        ],
      },
      {
        titulo: 'Conversaciones difíciles con familias y con el equipo',
        guion: [
          'Con familias, el patrón sigue siendo el mismo del acompañamiento: progreso real, apoyo ofrecido y siguiente paso claro. Añade una cosa más como coordinadora: quién es responsable de cada acción y para cuándo.',
          'Cuando una familia culpa a una mentora, no la defiendas en abstracto ni la sacrifiques para calmar la reunión. Di que lo vas a revisar con datos y hazlo.',
          'Cuando el conflicto es entre dos personas del equipo, habla con cada una por separado, busca los hechos y reúnelas solo con un objetivo claro. Nunca se resuelve un conflicto de equipo delante de estudiantes o familias.',
          'Hay decisiones que no son negociables y conviene decirlo pronto y sin dureza: el dominio mínimo del ochenta por ciento, los protocolos de protección y la privacidad de los datos.',
          'Cuida el lenguaje de la autoridad familiar: los padres deciden sobre la educación de su hijo, y tú aportas evidencia y recomendación, incluso cuando estás en desacuerdo.',
          'La evaluación es un role play doble: una queja de familia sobre una mentora y un conflicto entre dos miembros del equipo, evaluado con rúbrica de escucha, clasificación, límites y cierre con acuerdos.',
        ],
        visuales: [
          'Diapositiva: los dos escenarios del role play.',
          'Diapositiva: qué es negociable y qué no en una conversación difícil.',
          'Diapositiva: rúbrica de la simulación con cuatro criterios.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Una familia entra muy alterada diciendo que la mentora ha humillado a su hijo delante del grupo. ¿Cuál es tu primer movimiento?',
        opciones: [
          'Defender a la mentora, que es de tu equipo',
          'Escuchar completo, resumir lo entendido y comprometer un plazo de respuesta',
          'Pedir a la familia que lo escriba antes de hablar',
          'Llamar a la mentora para que se explique en ese momento',
        ],
        correcta: 1,
        explica: 'Escuchar y resumir baja la tensión y te da los hechos. Después clasificas y comprometes plazo, sin prometer el resultado.',
      },
      {
        p: 'Durante la conversación, la familia menciona un comentario que sugiere posible riesgo para la seguridad del menor. ¿Qué hace la clasificación?',
        opciones: [
          'Sigue siendo una queja operativa de aula',
          'Pasa inmediatamente al protocolo de protección y se escala sin demora',
          'Se anota para tratarlo en la reunión semanal',
          'Se deriva a la iglesia socia',
        ],
        correcta: 1,
        explica: 'Cualquier indicio de riesgo para un menor sale del circuito de quejas y entra en el protocolo de protección, con escalado inmediato.',
      },
      {
        p: 'Una familia pide que su hijo pase de unidad aunque no llegó al ochenta por ciento, para no desmotivarlo. Como coordinadora…',
        opciones: [
          'Autorizo la excepción, la motivación es importante',
          'Explico con calidez que el dominio mínimo no es negociable y propongo un plan de apoyo',
          'Derivo la decisión a la mentora',
          'Dejo que decida el estudiante',
        ],
        correcta: 1,
        explica: 'El estándar académico es innegociable. La respuesta correcta une límite firme y apoyo concreto, no dureza ni excepción.',
      },
      {
        p: 'Dos mentoras de tu equipo están en conflicto abierto. ¿Cómo lo abordas?',
        opciones: [
          'Reunión conjunta inmediata delante del resto del equipo',
          'Hablo con cada una por separado, reúno hechos y las convoco con un objetivo claro, nunca ante estudiantes o familias',
          'Espero a que se resuelva solo',
          'Cambio a una de sede sin explicación',
        ],
        correcta: 1,
        explica: 'Primero los hechos por separado, después una reunión con objetivo. Los conflictos de equipo nunca se resuelven en público.',
      },
      {
        p: 'Al cerrar la tramitación de una queja, ¿qué es imprescindible?',
        opciones: [
          'Que la familia quede satisfecha con el resultado',
          'Que quede registrada la queja, la revisión hecha, los acuerdos y el plazo cumplido',
          'Que la mentora firme una disculpa',
          'Que no vuelva a hablarse del asunto',
        ],
        correcta: 1,
        explica: 'No siempre podrás dar el resultado deseado, pero siempre debes poder demostrar un proceso serio y registrado.',
      },
    ],
  },

  '8.4': {
    resumen:
      'Una sede mejora cuando aprender forma parte del trabajo, no cuando alguien encuentra un hueco. Aquí diseñas el desarrollo profesional continuo de tu equipo: qué se forma, cuándo, con qué evidencia y cómo se nota en los estudiantes.',
    objetivos: [
      'Detectar necesidades formativas del equipo a partir de observaciones y datos del SIS.',
      'Diseñar un plan anual de desarrollo profesional continuo con evidencia verificable.',
      'Crear rutinas de aprendizaje compartido sostenibles en una sede pequeña.',
    ],
    lecciones: [
      {
        titulo: 'De la observación al plan de formación',
        guion: [
          'Las necesidades formativas no se adivinan: se leen. Están en las rúbricas de observación, en las alertas del SIS, en las quejas recurrentes y en lo que el propio equipo pide.',
          'Agrupa lo que ves. Si tres mentoras fallan en el mismo criterio, no necesitas tres planes individuales: necesitas una sesión de formación de sede.',
          'Distingue tres tipos de necesidad: obligatoria, como protección de menores y protección de datos; técnica, como uso del SIS o rúbricas de Life Skills; y pedagógica, como intervención con estudiantes estancados.',
          'La formación obligatoria no compite con nada: se calendariza primero y se documenta con certificado.',
          'Para cada necesidad define objetivo observable, formato, duración, responsable y cómo se comprobará el cambio en la práctica.',
          'Formación sin comprobación posterior es entretenimiento. La comprobación se hace con una nueva observación o con datos del SIS, no con una encuesta de satisfacción.',
        ],
        visuales: [
          'Diapositiva: cuatro fuentes de necesidades formativas.',
          'Diapositiva: tabla de los tres tipos de necesidad con ejemplos.',
          'Diapositiva: plantilla de acción formativa con objetivo y comprobación.',
        ],
      },
      {
        titulo: 'Cultura de mejora en una sede pequeña',
        guion: [
          'En una sede pequeña no hay presupuesto para grandes formaciones, pero sí hay tres recursos gratuitos y potentes.',
          'Uno, la observación entre pares: dos mentoras se observan mutuamente con la rúbrica y comparten un ajuste cada una. Sin nota, sin jerarquía.',
          'Dos, el punto de formación de diez minutos en la reunión semanal, rotando quién lo prepara. Doce semanas son doce microformaciones.',
          'Tres, el banco de casos de la sede: casos reales anonimizados que se discuten en equipo, con lo que se decidió y qué resultado tuvo.',
          'Modela lo que pides. Si la coordinadora nunca se deja observar ni comparte un error propio, la cultura de mejora no arranca. El liderazgo de siervo se ve en la fidelidad en lo pequeño.',
          'La evaluación del módulo es un plan de desarrollo profesional continuo anual para tu sede: necesidades detectadas con su fuente, acciones calendarizadas, formación obligatoria incluida y método de comprobación de cada una.',
        ],
        visuales: [
          'Diapositiva: los tres recursos gratuitos de la sede pequeña.',
          'Diapositiva: calendario anual de DPC con la formación obligatoria marcada.',
          'Diapositiva: banco de casos, ficha tipo anonimizada.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Tres mentoras distintas registran tarde las calificaciones y el SIS lanza alertas repetidas. ¿Qué indica esto?',
        opciones: [
          'Un problema de actitud individual de cada una',
          'Una necesidad formativa común de la sede, que pide una acción de equipo',
          'Que hay que desactivar las alertas',
          'Que el SIS está mal configurado',
        ],
        correcta: 1,
        explica: 'Cuando el mismo criterio falla en varias personas, la causa suele ser de sistema o de formación, no de carácter. Se aborda en grupo.',
      },
      {
        p: '¿Cómo se comprueba que una acción formativa ha funcionado?',
        opciones: [
          'Con una encuesta de satisfacción al final de la sesión',
          'Con la firma de asistencia',
          'Con una nueva observación o con datos del SIS que muestren el cambio en la práctica',
          'Preguntando a las familias si notan algo',
        ],
        correcta: 2,
        explica: 'La satisfacción no es aprendizaje. El cambio se comprueba en la práctica observable y en los datos.',
      },
      {
        p: 'Al planificar el año, ¿qué se calendariza primero?',
        opciones: [
          'La formación pedagógica, que es la más interesante',
          'La formación obligatoria de protección de menores y protección de datos, con certificado',
          'La formación técnica del SIS',
          'Lo que pida el equipo por votación',
        ],
        correcta: 1,
        explica: 'La formación obligatoria no compite con el resto: se programa primero y se documenta, porque condiciona la operación y la certificación.',
      },
      {
        p: 'La observación entre pares funciona mejor cuando…',
        opciones: [
          'Genera una nota que va al expediente',
          'La hace siempre la coordinadora',
          'Es mutua, con rúbrica, sin nota y con un ajuste compartido por cada parte',
          'Se hace por sorpresa',
        ],
        correcta: 2,
        explica: 'Entre pares el objetivo es aprender, no evaluar. Sin nota y con reciprocidad, la gente se abre y el aprendizaje ocurre.',
      },
    ],
  },
}

export const BLOQUE9 = {
  '9.1': {
    resumen:
      'Calidad no es que todo salga bien: es tener un método para descubrir qué no está saliendo bien y corregirlo. En este módulo montas el sistema de aseguramiento de calidad de tu sede con el ciclo PDCA, encuestas honestas y revisión periódica de programas.',
    objetivos: [
      'Aplicar el ciclo PDCA a un problema real de la sede.',
      'Diseñar encuestas a familias y personal que produzcan información utilizable.',
      'Programar la revisión periódica de programas con evidencia y responsables.',
    ],
    lecciones: [
      {
        titulo: 'El ciclo PDCA aplicado a una sede',
        guion: [
          'PDCA son cuatro pasos: planificar, hacer, verificar y actuar. Parece obvio y casi nadie lo cierra.',
          'Planificar: define el problema con datos, no con sensaciones. Por ejemplo, la mitad de los estudiantes de una materia necesita dos intentos para superar la unidad.',
          'Hacer: aplica un cambio pequeño y acotado, en un grupo y durante un tiempo definido. Los cambios grandes y simultáneos no permiten saber qué funcionó.',
          'Verificar: compara con el dato de partida. Sin dato de partida no hay verificación posible, solo opiniones sobre el pasado.',
          'Actuar: si funcionó, se estandariza y se escribe en el modo de trabajo de la sede. Si no funcionó, se documenta y se prueba otra hipótesis.',
          'La mayoría de las sedes se quedan en hacer. Verificar y actuar son los pasos que convierten esfuerzo en mejora.',
        ],
        visuales: [
          'Diapositiva: rueda PDCA con un ejemplo real de sede en cada cuadrante.',
          'Diapositiva: ejemplo de dato de partida y dato de verificación.',
          'Diapositiva: aviso, sin dato inicial no hay mejora demostrable.',
        ],
      },
      {
        titulo: 'Encuestas y revisión de programas',
        guion: [
          'Una encuesta útil es corta, anónima y hace preguntas que pueden dar malas noticias. Si tu encuesta solo puede salir bien, no sirve.',
          'A familias, pregunta por lo concreto: claridad de la información recibida, tiempos de respuesta, utilidad de los boletines, percepción del progreso de su hijo y trato recibido.',
          'Al personal, pregunta por carga de trabajo, claridad de expectativas, apoyo recibido y qué cambiarían del funcionamiento de la sede.',
          'Cierra el círculo: publica al equipo y a las familias un resumen de resultados y qué se va a hacer con ellos. Una encuesta sin devolución mata la participación de la siguiente.',
          'La revisión de programas es distinta de la encuesta: se mira si el sesenta veinte veinte se está cumpliendo de verdad, si el material de cada vía funciona y si Life Skills y Extensión Local se están ejecutando o quedando siempre para el final.',
          'La evaluación del módulo es un plan de aseguramiento de calidad para tu sede: dos ciclos PDCA definidos, calendario de encuestas, calendario de revisión de programas y responsables.',
        ],
        visuales: [
          'Diapositiva: ejemplo de encuesta breve a familias y a personal.',
          'Diapositiva: calendario anual de calidad, encuestas, revisión de programas, informes.',
          'Diapositiva: circuito de devolución de resultados.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Detectas que muchos estudiantes de una materia repiten evaluación. Cambias a la vez el material, el horario y la mentora. Al mes ha mejorado. ¿Qué has aprendido?',
        opciones: [
          'Que los tres cambios eran necesarios',
          'Poco: al cambiar todo a la vez no puedes saber qué produjo la mejora',
          'Que la mentora anterior era el problema',
          'Que el material nuevo es mejor',
        ],
        correcta: 1,
        explica: 'En PDCA los cambios se hacen acotados para poder verificar la causa. Cambiar todo a la vez impide aprender del resultado.',
      },
      {
        p: '¿Qué caracteriza a una encuesta de calidad útil?',
        opciones: [
          'Que sea larga y exhaustiva',
          'Que sea corta, anónima y con preguntas que puedan dar malas noticias',
          'Que la firmen las familias para poder hacer seguimiento',
          'Que solo se envíe a las familias satisfechas',
        ],
        correcta: 1,
        explica: 'Si el diseño impide malas respuestas, la encuesta no aporta información. El anonimato y la brevedad aumentan la sinceridad y la participación.',
      },
      {
        p: 'Pasáis la encuesta a familias, obtenéis resultados y no comunicáis nada. ¿Cuál es la consecuencia más probable?',
        opciones: [
          'Ninguna, los datos ya están recogidos',
          'La participación caerá en la siguiente encuesta y se perderá confianza',
          'Las familias asumirán que todo está bien',
          'Mejorará la percepción de discreción de la sede',
        ],
        correcta: 1,
        explica: 'Sin devolución de resultados y de acciones, la encuesta se percibe como un trámite y la gente deja de responder.',
      },
      {
        p: 'En la revisión de programas de tu sede compruebas que Life Skills y Extensión Local se aplazan casi siempre. ¿Qué significa?',
        opciones: [
          'Que son partes accesorias del modelo',
          'Que el modelo sesenta veinte veinte no se está cumpliendo y hay que corregir la planificación',
          'Que las familias no las valoran',
          'Que conviene eliminarlas del horario',
        ],
        correcta: 1,
        explica: 'Los dos veintes no son extras: quitarlos desequilibra el modelo. Si se aplazan sistemáticamente, el problema es de planificación y hay que actuar.',
      },
    ],
  },

  '9.2': {
    resumen:
      'El SIS no es solo un archivo: leído bien, te dice dónde está atascado el aprendizaje de tu sede antes de que llegue el boletín. Aquí aprendes a interpretar sus datos para apoyar a las mentoras, nunca para señalarlas.',
    objetivos: [
      'Interpretar los indicadores clave del SIS a nivel de sede.',
      'Convertir un patrón de datos en una acción de apoyo concreta.',
      'Compartir información académica de forma anonimizada y sin usarla como castigo.',
    ],
    lecciones: [
      {
        titulo: 'Los indicadores que miras cada mes',
        guion: [
          'Indicador uno, tasa de dominio por unidad: qué porcentaje de estudiantes alcanza el ochenta por ciento en el primer intento. Es el termómetro más honesto de la sede.',
          'Indicador dos, tiempo medio por unidad: si una unidad tarda el doble que las demás, ahí hay algo que revisar, en el material o en la enseñanza.',
          'Indicador tres, materias con más reintentos: señalan lagunas previas o ubicaciones demasiado altas en el diagnóstico.',
          'Indicador cuatro, alertas por estudiante y por mentora: recuerda que el sistema avisa cuando pasan tres semanas o más sin calificaciones de unidades, o cuando se incumplen fechas de Life Skills o de Extensión Local.',
          'Indicador cinco, cumplimiento de Life Skills y Extensión Local: es el que mejor revela si el veinte y el veinte se están respetando.',
          'Recuerda de dónde vienen los datos: la nota final de cada materia es el promedio de las notas aprobadas del trimestre, y todo se apoya en la matrícula de ese estudiante por año y trimestre.',
        ],
        visuales: [
          'Diapositiva: panel con los cinco indicadores de sede y su lectura.',
          'Diapositiva: las dos alertas automáticas del SIS explicadas.',
          'Diapositiva: recordatorio del cálculo de la nota final por materia.',
        ],
      },
      {
        titulo: 'De los datos a la acción de apoyo',
        guion: [
          'Un dato no es una conclusión: es una pregunta mejor formulada. Antes de actuar, plantea al menos dos explicaciones posibles.',
          'Ejemplo: la tasa de dominio en primer intento cae en una materia. Puede ser el material, la ubicación inicial, el tiempo de trabajo o la enseñanza. Se comprueba, no se supone.',
          'Ejemplo: una mentora acumula alertas de registro. Antes de suponer descuido, pregunta por su carga, su acceso al sistema y su formación. Muchas veces el problema es de horario, no de voluntad.',
          'Regla ética fundamental de este módulo: los datos se usan para APOYAR a la mentora, no para castigarla. Si el equipo percibe que los indicadores sirven para señalar, empezará a maquillarlos y perderás la información.',
          'Al compartir datos, anonimiza: agregados de sede, códigos en lugar de nombres, y nunca datos identificables de estudiantes en presentaciones o grupos.',
          'La evaluación del módulo es un informe mensual de sede: cinco indicadores, dos hallazgos, dos hipótesis por hallazgo y una acción de apoyo con responsable y plazo.',
        ],
        visuales: [
          'Diapositiva: dato, hipótesis, comprobación, acción, en un ejemplo real anonimizado.',
          'Diapositiva: frase destacada, los datos apoyan, no castigan.',
          'Diapositiva: estructura del informe mensual de sede.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Una mentora acumula alertas por falta de calificaciones registradas. ¿Cuál es tu primer paso como coordinadora?',
        opciones: [
          'Abrirle un plan de mejora por descuido',
          'Comentarlo en la reunión de equipo con su nombre',
          'Hablar con ella y comprobar carga, acceso al sistema y formación antes de concluir',
          'Registrar yo misma las notas que faltan',
        ],
        correcta: 2,
        explica: 'Los datos abren preguntas, no sentencias. Y se usan para apoyar a la mentora: casi siempre hay una causa de sistema detrás.',
      },
      {
        p: '¿Cuándo lanza el SIS una alerta automática relacionada con unidades?',
        opciones: [
          'Cuando el estudiante suspende una evaluación',
          'Cuando pasan tres semanas o más sin calificaciones de unidades',
          'Cuando la familia no responde a un mensaje',
          'Cuando el promedio baja del ochenta por ciento',
        ],
        correcta: 1,
        explica: 'Las alertas automáticas se disparan por tres o más semanas sin calificaciones de unidades y por incumplimiento de fechas de Life Skills o Extensión Local.',
      },
      {
        p: 'Quieres compartir con el equipo los resultados de la sede. ¿Cómo lo haces correctamente?',
        opciones: [
          'Con la lista completa de estudiantes y sus notas, para que todos vean',
          'Con datos agregados y códigos, sin información identificable de estudiantes',
          'Enviando capturas del SIS al grupo de mensajería',
          'Solo verbalmente, sin dejar nada escrito',
        ],
        correcta: 1,
        explica: 'La información se comparte agregada y anonimizada. Los datos identificables de estudiantes no salen de los sistemas autorizados.',
      },
      {
        p: 'La nota final de una materia en el trimestre se calcula…',
        opciones: [
          'Con la última evaluación realizada',
          'Como promedio de las notas aprobadas del trimestre',
          'Con la media de todos los intentos, aprobados y no aprobados',
          'Según el criterio de cada mentora',
        ],
        correcta: 1,
        explica: 'El SIS calcula la nota final como promedio de las notas aprobadas del trimestre, coherente con el principio de dominio.',
      },
      {
        p: 'Una unidad concreta tarda el doble de tiempo medio que el resto en tu sede. ¿Qué haces?',
        opciones: [
          'Nada, cada unidad tiene su dificultad',
          'Reduzco el estándar de dominio para esa unidad',
          'Investigo material, ubicación inicial y enseñanza antes de decidir una acción',
          'Cambio de vía de material a todos los estudiantes',
        ],
        correcta: 2,
        explica: 'El tiempo medio por unidad es una señal de investigación, no una conclusión. Se comprueban hipótesis antes de actuar, y nunca se baja el estándar.',
      },
    ],
  },

  '9.3': {
    resumen:
      'Un mini Self-Study de sede es mirarse al espejo con orden: cinco estándares, evidencia real y áreas de desarrollo dichas en voz alta. Al terminar este módulo tendrás el borrador que convierte a tu hub en una sede que se puede acreditar.',
    objetivos: [
      'Estructurar un mini Self-Study de sede según los cinco estándares MSA.',
      'Reunir y ordenar evidencia real para cada estándar, señalando los huecos.',
      'Redactar áreas de desarrollo con acciones, responsables y plazos.',
    ],
    lecciones: [
      {
        titulo: 'Los cinco estándares y qué evidencia pide cada uno',
        guion: [
          'El Self-Study se organiza en cinco estándares: Foundations, Governance and Organization, Student Well-Being, Resources y Teaching and Learning.',
          'Foundations: misión, visión, valores y los retratos de estudiante y educadora, con prueba de que se usan en la práctica y no solo en la web.',
          'Governance and Organization: estructura del LSP y del LIS, responsable identificado, políticas escritas, convenio con la iglesia socia y actas de decisiones.',
          'Student Well-Being: protocolos de protección, certificados del personal, formación en protección, control de entradas y salidas, canal de comunicación de situaciones de riesgo y bienestar emocional.',
          'Resources: espacio y sus condiciones, seguro, materiales de las cuatro vías, sistemas SIS y portal, personal suficiente y sostenibilidad económica demostrada.',
          'Teaching and Learning: PEI, dominio mínimo del ochenta por ciento, boletines, evidencia de Life Skills y Extensión Local, y formación y evaluación del personal.',
        ],
        visuales: [
          'Diapositiva: los cinco estándares con sus letras F, G, W, R y T.',
          'Diapositiva: tabla estándar por evidencia típica de sede.',
          'Diapositiva: ejemplo de índice de un mini Self-Study.',
        ],
      },
      {
        titulo: 'Cómo se ordena la evidencia sin inventar nada',
        guion: [
          'Para cada estándar haces tres columnas: qué exige, qué evidencia tenemos y dónde está guardada.',
          'La cuarta columna es la más valiosa: qué evidencia nos falta. Un Self-Study honesto se reconoce por esa columna.',
          'Nunca se inventan cifras, acuerdos ni resultados. Si un documento no existe, se escribe pendiente con fecha objetivo y responsable, no se describe como si existiera.',
          'La evidencia debe ser localizable: si no puedes decir dónde está un documento en menos de un minuto, para el evaluador es como si no existiera.',
          'Toda evidencia con datos de estudiantes se presenta anonimizada o mediante agregados. La privacidad rige también en el Self-Study.',
          'El Self-Study no es una lista decorativa: ordena evidencia real y detecta áreas de desarrollo. Su valor está en lo que descubres, no en lo bien que suena.',
        ],
        visuales: [
          'Diapositiva: tabla de cuatro columnas, exigencia, evidencia, ubicación, hueco.',
          'Diapositiva: ejemplo de hueco bien redactado con responsable y fecha.',
          'Diapositiva: aviso, nunca se inventan cifras, acuerdos ni resultados.',
        ],
      },
      {
        titulo: 'De las áreas de desarrollo al plan de mejora',
        guion: [
          'Un área de desarrollo bien escrita tiene cuatro partes: qué falta, por qué importa para los estudiantes, qué acción concreta se hará y quién y para cuándo.',
          'Prioriza. Si tienes catorce áreas de desarrollo, elige tres para este curso y sé sincera sobre el resto. Un plan imposible no se ejecuta.',
          'Conecta cada área con el ciclo PDCA del módulo anterior: el Self-Study detecta y el PDCA corrige. Son la misma máquina.',
          'Comparte el borrador con tu equipo antes de enviarlo. Las mentoras suelen ver huecos que la coordinadora ya no ve por costumbre.',
          'El borrador se remite a la oficina central, que lo integra en el trabajo institucional de acreditación. La sede aporta la realidad; la central da el encaje.',
          'La evaluación del módulo es precisamente ese borrador: los cinco estándares, la tabla de evidencia con sus huecos y tres áreas de desarrollo priorizadas con responsable y plazo.',
        ],
        visuales: [
          'Diapositiva: anatomía de un área de desarrollo en cuatro partes.',
          'Diapositiva: conexión Self-Study y PDCA como un solo circuito.',
          'Diapositiva: ejemplo de tres áreas priorizadas para un curso.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Al preparar el Self-Study te falta el certificado de un voluntario. ¿Cómo lo reflejas?',
        opciones: [
          'Lo doy por hecho, seguro que llega antes de la visita',
          'Lo escribo como pendiente, con responsable y fecha objetivo',
          'Lo omito para no debilitar el informe',
          'Escribo que está en trámite sin más detalle',
        ],
        correcta: 1,
        explica: 'La honestidad es el valor central del Self-Study. Un hueco documentado con responsable y plazo es evidencia de buena gestión; ocultarlo es lo contrario.',
      },
      {
        p: 'El protocolo de protección de menores, los certificados del personal y el control de entradas y salidas pertenecen al estándar…',
        opciones: ['Foundations', 'Resources', 'Student Well-Being', 'Teaching and Learning'],
        correcta: 2,
        explica: 'Student Well-Being agrupa la protección y el bienestar de los estudiantes, incluidos protocolos, certificados y control de accesos.',
      },
      {
        p: 'Tienes catorce áreas de desarrollo detectadas. ¿Qué haces en el plan?',
        opciones: [
          'Las incluyo todas con la misma prioridad para este curso',
          'Elijo tres prioritarias para este curso y explico con sinceridad el tratamiento del resto',
          'Reduzco la lista eliminando las incómodas',
          'Espero a que la oficina central priorice sin mi criterio',
        ],
        correcta: 1,
        explica: 'Un plan con catorce prioridades no se ejecuta. Priorizar tres con responsable y plazo es más creíble y más útil.',
      },
      {
        p: 'La sostenibilidad económica demostrada de la sede es evidencia del estándar…',
        opciones: ['Resources', 'Governance and Organization', 'Foundations', 'Student Well-Being'],
        correcta: 0,
        explica: 'Resources cubre espacio, seguro, materiales, sistemas, personal y sostenibilidad económica: los recursos que hacen viable la operación.',
      },
      {
        p: 'Un evaluador pide ver el convenio con la iglesia socia y nadie sabe dónde está guardado. ¿Qué problema hay?',
        opciones: [
          'Ninguno, el documento existe',
          'Que la evidencia no localizable equivale a evidencia inexistente',
          'Que hace falta un convenio nuevo',
          'Que el evaluador excede sus competencias',
        ],
        correcta: 1,
        explica: 'La evidencia debe ser localizable de inmediato. Si no se puede mostrar, para efectos de acreditación es como si no existiera.',
      },
    ],
  },
}

export const BLOQUE10 = {
  '10.1': {
    resumen:
      'Cuatro semanas dirigiendo una sede de verdad, con su equipo, su horario, sus familias y sus imprevistos. Este módulo te dice exactamente qué se espera de ti cada semana, cómo documentarlo y con qué rúbrica se evaluará tu manera de coordinar.',
    objetivos: [
      'Planificar y ejecutar cuatro semanas de coordinación supervisada de una sede.',
      'Documentar la práctica con diario de coordinación e informe final.',
      'Aplicar los límites de rol y los protocolos institucionales bajo presión real.',
    ],
    lecciones: [
      {
        titulo: 'Qué se espera de ti semana a semana',
        guion: [
          'Semana uno, diagnóstico y toma de contacto: conoces al equipo, revisas horarios, matrículas, PEI, alertas del SIS y el estado del cumplimiento local. Escuchas antes de cambiar nada.',
          'Semana dos, operación: publicas el plan semanal, conduces la reunión de equipo, haces al menos una observación de mentora con rúbrica y atiendes la comunicación con familias.',
          'Semana tres, calidad: lanzas un ciclo PDCA pequeño con dato de partida, revisas indicadores del SIS y produces un informe mensual de sede.',
          'Semana cuatro, consolidación y traspaso: cierras acuerdos, entregas retroalimentación a las mentoras observadas y dejas la sede en orden documental para quien continúe.',
          'Durante las cuatro semanas trabajas con una persona supervisora asignada, con una reunión semanal fija de seguimiento.',
          'Si aparece una situación de protección, de datos, de dinero o de marco legal, se escala igual que siempre. Estar en prácticas de coordinación no amplía tus competencias.',
        ],
        visuales: [
          'Diapositiva: las cuatro semanas con su foco y sus entregables.',
          'Diapositiva: calendario con la reunión semanal de supervisión.',
          'Diapositiva: recordatorio de escalado, protección, datos, dinero, marco legal.',
        ],
      },
      {
        titulo: 'Cómo documentar la práctica',
        guion: [
          'Documentas dos cosas: un diario de coordinación diario y un informe final de las cuatro semanas.',
          'Cada entrada del diario tiene cinco campos: fecha, decisiones tomadas, decisiones consultadas o escaladas, incidencias y aprendizaje del día.',
          'El campo de decisiones escaladas es el que más dice de una coordinadora en formación. Escalar bien es competencia, no inseguridad.',
          'El informe final reúne el plan semanal ejecutado, el acta de las reuniones de equipo, las observaciones de mentoras con su retroalimentación, el informe de indicadores del SIS y el resultado del ciclo PDCA.',
          'Nada de datos identificables de estudiantes ni de personal en la documentación: códigos e iniciales, y agregados cuando hables de resultados.',
          'Igual que en la práctica del Nivel 1, escribe cada día. Un diario reconstruido el último viernes se nota y vale mucho menos.',
        ],
        visuales: [
          'Diapositiva: plantilla del diario de coordinación con los cinco campos.',
          'Diapositiva: índice del informe final de cuatro semanas.',
          'Diapositiva: recordatorio de anonimización aplicado a documentación de sede.',
        ],
      },
      {
        titulo: 'Rúbrica de la práctica de coordinación',
        guion: [
          'La rúbrica valora seis criterios: organización de la operación, liderazgo del equipo, comunicación con familias, uso de datos, cumplimiento y protección, y calidad de la documentación.',
          'Organización: el plan semanal existía, se publicó a tiempo y se cumplió, con los bloques protegidos de corrección, registro y familias.',
          'Liderazgo del equipo: reuniones conducidas con acuerdos registrados, al menos una observación con retroalimentación en veinticuatro a cuarenta y ocho horas y un plan de mejora bien construido si hacía falta.',
          'Uso de datos: indicadores leídos, hipótesis planteadas y una acción de apoyo derivada de ellos, nunca datos usados como reproche.',
          'Cumplimiento y protección: checklist de cumplimiento revisado, incidencias escaladas correctamente y cero promesas fuera de tu rol.',
          'Se aprueba con nivel competente o superior en los seis criterios. Si alguno queda en desarrollo, se acuerda plan de mejora y nueva evidencia, con el mismo criterio de dominio que aplicamos a los estudiantes.',
        ],
        visuales: [
          'Diapositiva: rúbrica de seis criterios con descriptores por nivel.',
          'Diapositiva: frase destacada, competente o superior en los seis criterios.',
        ],
      },
    ],
    quiz: [
      {
        p: 'En tu segunda semana de práctica, una familia te pide autorización para retirar a su hija con un adulto que no figura en el expediente. ¿Qué haces?',
        opciones: [
          'Lo autorizo, la madre lo ha pedido por teléfono',
          'Aplico el control de entradas y salidas, no autorizo sin la documentación y consulto de inmediato',
          'Lo autorizo y lo anoto después',
          'Pido al adulto que firme un papel improvisado',
        ],
        correcta: 1,
        explica: 'El control documentado de entradas y salidas es una medida de protección. Estar en prácticas no amplía competencias ni permite excepciones.',
      },
      {
        p: '¿Cuál es el foco correcto de tu primera semana de coordinación?',
        opciones: [
          'Reorganizar el horario de la sede desde el primer día',
          'Diagnóstico y toma de contacto: escuchar, revisar matrículas, PEI, alertas y cumplimiento',
          'Observar a todas las mentoras con rúbrica',
          'Presentar el informe de indicadores',
        ],
        correcta: 1,
        explica: 'Se escucha y se diagnostica antes de cambiar. Cambiar en la semana uno sin conocer la sede suele deshacer cosas que funcionaban.',
      },
      {
        p: 'En el diario de coordinación, el campo de decisiones escaladas sirve para…',
        opciones: [
          'Justificar lo que no supiste resolver',
          'Demostrar que reconoces los límites de tu rol y usas los canales correctos',
          'Rellenar espacio cuando el día ha sido tranquilo',
          'Documentar quejas sobre la oficina central',
        ],
        correcta: 1,
        explica: 'Escalar bien es una competencia evaluada. Muestra criterio y protege a estudiantes, familias y a ti misma.',
      },
      {
        p: 'Al final de las cuatro semanas tienes cinco criterios en competente y uno en desarrollo. ¿Qué ocurre?',
        opciones: [
          'Apruebas, porque la mayoría está bien',
          'Se acuerda un plan de mejora con nueva evidencia para ese criterio',
          'Repites las cuatro semanas completas',
          'Se elimina ese criterio de la rúbrica',
        ],
        correcta: 1,
        explica: 'Se exige competente o superior en los seis criterios, con plan de mejora y nueva evidencia cuando falta uno. Es el mismo principio de dominio del modelo.',
      },
    ],
  },

  '10.2': {
    resumen:
      'Tu proyecto final es el documento que una iglesia, una familia y la oficina central podrían leer para entender si una sede debe abrirse: el Plan de Apertura de un Learning Implementation Site. Con datos reales, con semáforo honesto y sin una sola promesa que no puedas sostener.',
    objetivos: [
      'Estructurar un Plan de Apertura completo de un Learning Implementation Site.',
      'Justificar la viabilidad con cumplimiento, sostenibilidad y equipo disponible.',
      'Emitir un semáforo razonado, incluida la recomendación de no abrir cuando corresponda.',
    ],
    lecciones: [
      {
        titulo: 'Las ocho secciones del Plan de Apertura',
        guion: [
          'Sección uno, contexto y necesidad: qué familias hay, qué demanda real existe y por qué esta población necesita el modelo Chanak. Sin inflar cifras.',
          'Sección dos, socio y espacio: perfil de la iglesia o entidad, espacio disponible con horarios, condiciones de ocupación y evacuación, y colaboración concreta acordada bajo el modelo de Alquiler Compartido.',
          'Sección tres, cumplimiento local: la checklist completa con evidencia, incluidos comunicación previa municipal, seguro, certificados del personal, LOPIVI y protección de datos.',
          'Sección cuatro, equipo: quién es la responsable identificada, qué mentoras hay, su formación y qué necesidades de contratación o formación quedan abiertas.',
          'Sección cinco, modelo académico en esta sede: vías de material previstas, organización del sesenta veinte veinte, cómo se cubrirá la Extensión Local y cómo se ejecutará Life Skills.',
          'Sección seis, sistemas: matrícula y expedientes en el SIS desde el primer día, uso del portal y quién tiene qué rol de acceso.',
          'Sección siete, sostenibilidad: fuentes de sostenimiento local y aportación del socio, sin cifras inventadas; lo que no esté confirmado se marca como hipótesis.',
          'Sección ocho, cronograma y semáforo: fases pastoral, grupo familiar y academia, con hitos, y el color propuesto con su justificación.',
        ],
        visuales: [
          'Diapositiva: las ocho secciones como índice del plan.',
          'Diapositiva: ejemplo de cronograma por fases con hitos.',
          'Diapositiva: aviso, lo no confirmado se marca como hipótesis.',
        ],
      },
      {
        titulo: 'Cómo se evalúa y qué invalida un plan',
        guion: [
          'La rúbrica del proyecto evalúa realismo, cumplimiento, coherencia con el modelo, sostenibilidad, claridad para un lector externo y honestidad del semáforo.',
          'Realismo es el criterio más exigente: un plan que promete veinte estudiantes en tres meses sin base pierde credibilidad entera, aunque el resto esté impecable.',
          'Honestidad del semáforo significa que un plan que concluye ámbar o rojo bien argumentado puede obtener una calificación excelente. No se premia el optimismo, se premia el criterio.',
          'Invalidan el plan tres cosas: prometer centro reglado, homologación, titulación garantizada o uso libre de la marca; incluir datos personales identificables; y presentar cifras o acuerdos inventados.',
          'Recuerda quién decide: tú elaboras y recomiendas; la apertura, el convenio y el marco jurídico los aprueban la oficina central y el Board.',
          'Escribe el plan pensando en un lector externo que no conoce Chanak. Si un evaluador de acreditación puede entenderlo sin llamarte, el documento está bien hecho.',
        ],
        visuales: [
          'Diapositiva: rúbrica de seis criterios del proyecto final.',
          'Diapositiva: las tres causas de invalidación del plan.',
          'Diapositiva: frase destacada, un rojo bien argumentado es un excelente trabajo profesional.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Tu plan concluye que la sede no debe abrirse todavía porque falta el convenio firmado y no hay sostenibilidad demostrada. ¿Cómo afecta a tu calificación?',
        opciones: [
          'Suspende, el proyecto pedía un plan de apertura',
          'Puede ser excelente: se evalúa el criterio y la honestidad del semáforo, no el optimismo',
          'Se aprueba con la nota mínima',
          'Hay que cambiar la conclusión a ámbar',
        ],
        correcta: 1,
        explica: 'La rúbrica valora la honestidad del semáforo. Recomendar no abrir con argumentos y evidencia es exactamente el criterio que se busca en una coordinadora.',
      },
      {
        p: 'No tienes confirmada la aportación económica del socio, pero la das por segura en la sección de sostenibilidad. ¿Qué ocurre?',
        opciones: [
          'Nada, es una previsión razonable',
          'Es una cifra no confirmada presentada como cierta: hay que marcarla como hipótesis',
          'Mejora la viabilidad del plan',
          'Se puede omitir la sección entera',
        ],
        correcta: 1,
        explica: 'Nunca se presentan como hechos datos o acuerdos no confirmados. Lo no confirmado se marca como hipótesis con su condición de verificación.',
      },
      {
        p: '¿Qué sección debe incluir la comunicación previa municipal, el seguro y los certificados del personal?',
        opciones: ['Contexto y necesidad', 'Cumplimiento local', 'Sistemas', 'Cronograma'],
        correcta: 1,
        explica: 'La sección de cumplimiento local reúne la checklist con evidencia: municipal, seguro, certificados, LOPIVI y protección de datos.',
      },
      {
        p: 'El plan describe el orden de puesta en marcha. ¿Cuál es el correcto?',
        opciones: [
          'Academia, grupo familiar, fase pastoral',
          'Fase pastoral, grupo familiar, academia',
          'Grupo familiar, academia, fase pastoral',
          'Academia desde el primer mes, el resto en paralelo',
        ],
        correcta: 1,
        explica: 'El Expansion Blueprint establece ese orden: primero la relación pastoral, luego el grupo familiar y finalmente la academia.',
      },
      {
        p: 'En tu plan escribes que las familias obtendrán titulación oficial española al terminar. ¿Qué consecuencia tiene?',
        opciones: [
          'Refuerza el atractivo del proyecto',
          'Es una promesa prohibida e invalida el plan',
          'Se corrige con una nota al pie',
          'Depende del ayuntamiento',
        ],
        correcta: 1,
        explica: 'Nunca se promete centro reglado, homologación ni titulación garantizada. Es una causa directa de invalidación del proyecto.',
      },
    ],
  },

  '10.3': {
    resumen:
      'La última cita del recorrido: presentas tu trabajo ante la Head of LSP y el Board, y se decide tu certificación como coordinadora. Aquí sabes qué presentar, cómo se puntúa y qué compromisos asumes al recibir el título.',
    objetivos: [
      'Preparar y defender una presentación final de veinte minutos con evidencia.',
      'Comprender la rúbrica de certificación de coordinadora y la decisión del Board.',
      'Asumir los compromisos posteriores a la certificación y tu propio plan de desarrollo.',
    ],
    lecciones: [
      {
        titulo: 'La presentación final: qué llevas y cómo la estructuras',
        guion: [
          'Son cinco horas en total: preparación, presentación de veinte minutos, preguntas del panel y devolución con acuerdos.',
          'Llevas cuatro piezas: el informe de tu práctica de coordinación, el Plan de Apertura, el borrador de mini Self-Study de sede y tu plan de desarrollo profesional continuo.',
          'Estructura de los veinte minutos: dos minutos de contexto, seis de resultados de la práctica con datos, seis del Plan de Apertura con su semáforo, tres de áreas de desarrollo de la sede y tres de tu propio plan de crecimiento.',
          'Presenta datos anonimizados y agregados. Una presentación con un dato identificable se interrumpe, sin importar lo buena que sea.',
          'El panel preguntará por límites de rol y por escalado. Ten claros tus ejemplos: qué decidiste, qué consultaste, qué escalaste y por qué.',
          'Habla de lo que no funcionó. Un panel confía más en quien reconoce dos errores con su corrección que en quien presenta cuatro semanas perfectas.',
        ],
        visuales: [
          'Diapositiva: las cuatro piezas del expediente de coordinadora.',
          'Diapositiva: reparto de los veinte minutos de presentación.',
          'Diapositiva: preguntas frecuentes del panel sobre límites de rol.',
        ],
      },
      {
        titulo: 'Decisión de certificación y compromisos posteriores',
        guion: [
          'La rúbrica final agrupa la evidencia en cinco dominios: gobernanza y cumplimiento, liderazgo de equipo, calidad y uso de datos, protección y bienestar, y comunicación institucional.',
          'Cada dominio se puntúa en cuatro niveles y se certifica con competente o superior en los cinco. La Head of LSP conduce la evaluación y el Board da el visto bueno a la certificación.',
          'Protección y bienestar sigue siendo innegociable: sin formación en protección vigente y sin cumplimiento demostrado, no hay certificación de coordinadora.',
          'La retroalimentación llega por escrito en veinticuatro a cuarenta y ocho horas, sobre conductas y evidencia. Puedes comentarla con quien te evalúa y apelar a un nivel de liderazgo superior si no estás de acuerdo.',
          'La certificación trae compromisos: mantener la formación obligatoria al día, someterte a evaluación anual, sostener la calidad con ciclos PDCA y respetar los límites de rol también cuando ya nadie te supervise de cerca.',
          'Y trae una manera de entender el cargo: el liderazgo de siervo se mide por servicio, dominio propio y fidelidad en lo pequeño. Coordinar una sede Chanak es cuidar el aprendizaje de familias que confiaron en nosotros.',
        ],
        visuales: [
          'Diapositiva: matriz de cinco dominios por cuatro niveles.',
          'Diapositiva: flujo de decisión, Head of LSP evalúa, Board da el visto bueno.',
          'Diapositiva: compromisos posteriores a la certificación en cinco puntos.',
        ],
      },
    ],
    quiz: [
      {
        p: 'En tu presentación quieres mostrar el progreso de un caso concreto muy ilustrativo. ¿Cómo lo haces?',
        opciones: [
          'Con el nombre del estudiante, para dar credibilidad',
          'Con datos anonimizados o agregados, usando un código',
          'Con una foto del alumno trabajando',
          'Compartiendo la pantalla del SIS con su expediente',
        ],
        correcta: 1,
        explica: 'Los datos identificables están prohibidos en cualquier evidencia o presentación. Se usan códigos y agregados.',
      },
      {
        p: '¿Quién conduce la evaluación final y quién da el visto bueno a la certificación?',
        opciones: [
          'La coordinadora saliente y la mentora supervisora',
          'La Head of LSP conduce y el Board da el visto bueno',
          'El Board conduce y la iglesia socia confirma',
          'La oficina central y la familia del estudiante',
        ],
        correcta: 1,
        explica: 'La Head of LSP dirige la evaluación con la rúbrica y el Board otorga el visto bueno institucional a la certificación.',
      },
      {
        p: 'Tienes los cinco dominios en competente, pero tu formación en protección de menores caducó hace dos meses. ¿Te certificas?',
        opciones: [
          'Sí, la renuevo en los próximos meses',
          'Sí, si firmo un compromiso de renovación',
          'No, protección y bienestar es innegociable para la certificación',
          'Sí, porque los cinco dominios están en competente',
        ],
        correcta: 2,
        explica: 'La formación en protección vigente es requisito previo. No existen periodos de gracia en materia de protección de menores.',
      },
      {
        p: '¿Cuál de estos NO es un compromiso posterior a la certificación de coordinadora?',
        opciones: [
          'Mantener la formación obligatoria al día',
          'Someterse a la evaluación anual',
          'Firmar convenios con iglesias sin consultar a la oficina central',
          'Sostener la calidad con ciclos PDCA',
        ],
        correcta: 2,
        explica: 'La certificación nunca amplía competencias jurídicas: los convenios y el marco legal siguen correspondiendo a la oficina central y al Board.',
      },
      {
        p: 'En la presentación decides contar dos decisiones que salieron mal y cómo las corregiste. ¿Es acertado?',
        opciones: [
          'No, debilita tu candidatura',
          'Sí, reconocer errores con su corrección demuestra criterio profesional y honestidad',
          'Solo si el panel lo pregunta',
          'Es indiferente para la rúbrica',
        ],
        correcta: 1,
        explica: 'La honestidad y la capacidad de aprender del error son parte del perfil que se certifica. Cuatro semanas perfectas no son creíbles.',
      },
    ],
  },
}
