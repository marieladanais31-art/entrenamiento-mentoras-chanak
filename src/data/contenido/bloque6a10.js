// BLOQUE 6 — PSICOLOGÍA DEL NIÑO Y DEL ADOLESCENTE (Nivel 2 · Universitario · 40h)
// BLOQUE 7 — GOBERNANZA Y OPERACIÓN DE CENTRO EDUCATIVO CHANAK (Nivel 2 · 80h)
// BLOQUE 8 — GESTIÓN DE PROYECTOS EDUCATIVOS Y RED EDUCAFE (Nivel 3 · Socia Visionaria)
// Fuentes: teoría del desarrollo (Piaget, Vygotsky, Erikson, Bronfenbrenner, Deci & Ryan),
// políticas operativas Chanak-EducaFe, Expansion Blueprint, RD 806/1993 y LOPIVI.

export const BLOQUE6 = {
  '6.1': {
    resumen:
      'Desarrollo cognitivo y etapas evolutivas según Jean Piaget, Lev Vygotsky y Erik Erikson. Del pensamiento operacional concreto al formal, la Zona de Desarrollo Próximo (ZDP) y las crisis psicosociales que atraviesa el estudiante.',
    objetivos: [
      'Analizar las etapas del desarrollo cognitivo de Piaget y su aplicación en la instrucción individualizada.',
      'Aplicar el concepto de Zona de Desarrollo Próximo (ZDP) y andamiaje (Vygotsky).',
      'Evaluar las crisis psicosociales de Erikson en la infancia y adolescencia.',
    ],
    lecciones: [
      {
        titulo: 'Piaget y Vygotsky: cómo se construye el pensamiento',
        guion: [
          'Piaget describe estadios: sensoriomotor (0-2), preoperacional (2-7), operaciones concretas (7-11) y operaciones formales (12+).',
          'En operaciones concretas el niño razona sobre lo tangible; en operaciones formales aparece el pensamiento hipotético-deductivo y abstracto.',
          'Consecuencia práctica en Chanak: no exijas abstracción a quien aún razona en concreto; usa material manipulable y ejemplos antes de la regla general.',
          'Vygotsky añade lo social: la Zona de Desarrollo Próximo (ZDP) es la distancia entre lo que el estudiante hace solo y lo que logra con guía.',
          'El andamiaje (scaffolding) es el apoyo temporal que la mentora da y retira gradualmente a medida que el alumno adquiere dominio: exactamente la lógica del autoestudio supervisado.',
        ],
        visuales: [
          'Diapositiva: los 4 estadios de Piaget con una conducta observable en cada uno.',
          'Diapositiva: diagrama de la ZDP y estrategias de andamiaje que se retiran.',
        ],
      },
      {
        titulo: 'Erikson: las crisis psicosociales del estudiante',
        guion: [
          'Erikson describe el desarrollo como una serie de crisis que, resueltas bien, construyen una virtud.',
          'Infancia escolar (6-12): Laboriosidad vs Inferioridad. El niño necesita experiencias de competencia real — aquí el dominio del 80% construye laboriosidad, no ansiedad.',
          'Adolescencia (12-18): Identidad vs Confusión de Rol. El joven busca quién es; el acompañamiento y el liderazgo de servicio le dan marcos sanos.',
          'La mentora no diagnostica clínicamente: reconoce la etapa, ajusta el acompañamiento y deriva cuando algo excede su rol.',
          'Vincular Erikson con Chanak: cada etapa tiene una necesidad, y el modelo (metas, carácter del mes, proyectos) responde a esa necesidad.',
        ],
        visuales: [
          'Diapositiva: las etapas de Erikson relevantes (6-18) con su virtud asociada.',
          'Diapositiva: qué necesita cada etapa y cómo lo cubre el modelo Chanak.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Según Lev Vygotsky, ¿qué representa la Zona de Desarrollo Próximo (ZDP)?',
        opciones: [
          'El nivel de conocimiento que el alumno ya domina sin ninguna ayuda',
          'La distancia entre el nivel de desarrollo real (autónomo) y el nivel potencial alcanzado con guía',
          'El límite biológico insuperable de inteligencia del individuo',
          'La nota final obtenida en un examen estándar',
        ],
        correcta: 1,
        explica: 'La ZDP define el espacio óptimo de aprendizaje donde la mediación y el andamiaje permiten al estudiante alcanzar la maestría.',
      },
      {
        p: 'En la teoría de Erik Erikson, ¿cuál es la crisis psicosocial central durante la adolescencia?',
        opciones: [
          'Confianza vs Desconfianza',
          'Iniciativa vs Culpa',
          'Identidad vs Confusión de Rol',
          'Generatividad vs Estancamiento',
        ],
        correcta: 2,
        explica: 'Durante la adolescencia, el individuo atraviesa la búsqueda de su identidad personal frente a la confusión de rol.',
      },
      {
        p: 'Un estudiante de 8 años razona bien con material concreto pero se pierde con reglas abstractas. Según Piaget, esto es…',
        opciones: [
          'Un problema de motivación',
          'Normal: está en operaciones concretas; conviene usar material manipulable',
          'Señal de necesitar evaluación clínica',
          'Falta de esfuerzo',
        ],
        correcta: 1,
        explica: 'En el estadio de operaciones concretas el pensamiento abstracto aún se está formando; se enseña de lo concreto a lo general.',
      },
    ],
  },

  '6.2': {
    resumen:
      'Psicología emocional, funciones ejecutivas y neurodiversidad en el aprendizaje. Abordaje del TDAH, el Espectro Autista (TEA) y las dificultades específicas del aprendizaje, con el Diseño Universal de Aprendizaje (DUA) como marco.',
    objetivos: [
      'Comprender las funciones ejecutivas (memoria de trabajo, inhibición, flexibilidad cognitiva).',
      'Diseñar adaptaciones accesibles para estudiantes neurodivergentes.',
      'Distinguir adaptación de acceso de modificación curricular.',
    ],
    lecciones: [
      {
        titulo: 'Funciones ejecutivas: el director de orquesta del cerebro',
        guion: [
          'Las funciones ejecutivas viven en la corteza prefrontal y gestionan el aprendizaje autorregulado.',
          'Tres componentes centrales: memoria de trabajo (retener y usar información), control inhibitorio (frenar impulsos y distracciones) y flexibilidad cognitiva (cambiar de estrategia).',
          'En el autoestudio, estas funciones son el motor de las metas diarias: fijar, sostener y ajustar el trabajo.',
          'Cuando fallan, no es "vagancia": es una habilidad que hay que andamiar con rutinas, listas visuales y bloques de tiempo cortos.',
          'La mentora entrena funciones ejecutivas con herramientas concretas: el Goal Tracker, la Review Station y los temporizadores.',
        ],
        visuales: [
          'Diapositiva: los 3 componentes de las funciones ejecutivas con un ejemplo de aula.',
          'Diapositiva: herramientas Chanak que entrenan cada componente.',
        ],
      },
      {
        titulo: 'Neurodiversidad y adaptaciones (TDAH, TEA, dislexia)',
        guion: [
          'Neurodiversidad significa que hay distintas formas válidas de procesar: TDAH, TEA, dislexia y otras.',
          'TDAH: apoyar con estructura, metas fragmentadas, pausas activas y refuerzo del inicio de tarea (lo más difícil).',
          'TEA: previsibilidad, apoyos visuales, anticipación de cambios y respeto a la sensorialidad.',
          'Dislexia y dificultades específicas: dar más tiempo, permitir apoyos de lectura y evaluar el dominio del concepto, no la velocidad lectora.',
          'Distinción clave: la adaptación de acceso (más tiempo, formato, apoyos) NO baja el estándar; la modificación curricular sí cambia los objetivos y requiere validación institucional.',
          'El Diseño Universal de Aprendizaje (DUA) propone ofrecer múltiples formas de representación, acción y motivación para todos, no solo para quien tiene diagnóstico.',
        ],
        visuales: [
          'Diapositiva: tabla adaptación de acceso vs modificación curricular.',
          'Diapositiva: los 3 principios del DUA con ejemplos.',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Cuáles son los tres componentes centrales de las Funciones Ejecutivas?',
        opciones: [
          'Lectura, escritura y cálculo',
          'Memoria de trabajo, control inhibitorio y flexibilidad cognitiva',
          'Premios, castigos y exámenes',
          'Atención, visión y audición',
        ],
        correcta: 1,
        explica: 'Las funciones ejecutivas se componen de memoria de trabajo, inhibición de respuesta y flexibilidad cognitiva.',
      },
      {
        p: 'Dar más tiempo y apoyos de lectura a un estudiante con dislexia, sin cambiar los objetivos, es…',
        opciones: [
          'Una modificación curricular',
          'Una adaptación de acceso que no baja el estándar',
          'Bajar el nivel de exigencia',
          'Una excepción no permitida',
        ],
        correcta: 1,
        explica: 'La adaptación de acceso ajusta el cómo (tiempo, formato, apoyos) manteniendo el qué; la modificación curricular cambia los objetivos.',
      },
      {
        p: 'Un estudiante con TEA se altera ante cambios imprevistos de rutina. La mejor estrategia es…',
        opciones: [
          'Cambiar la rutina a menudo para que se acostumbre',
          'Anticipar los cambios con apoyos visuales y previsibilidad',
          'Evitar que trabaje con los demás',
          'Reducir sus objetivos académicos',
        ],
        correcta: 1,
        explica: 'La previsibilidad y la anticipación reducen la ansiedad y permiten que el estudiante rinda según su capacidad real.',
      },
    ],
  },

  '6.3': {
    resumen:
      'Conducta, motivación y gestión de crisis en la adolescencia. Neurobiología del desarrollo cerebral, la Teoría de la Autodeterminación (Deci & Ryan) y protocolos de desescalada verbal.',
    objetivos: [
      'Explicar el desarrollo neurobiológico adolescente y la maduración de la corteza prefrontal.',
      'Aplicar la Teoría de la Autodeterminación (autonomía, competencia, vinculación).',
      'Ejecutar protocolos de desescalada verbal ante crisis conductual.',
    ],
    lecciones: [
      {
        titulo: 'El cerebro adolescente y la motivación intrínseca',
        guion: [
          'Desincronización madurativa: el sistema límbico (emoción, recompensa) madura antes que la corteza prefrontal (control, planificación).',
          'Esto explica la impulsividad y la búsqueda de recompensa inmediata: no es "maldad", es biología del desarrollo.',
          'Teoría de la Autodeterminación (Deci & Ryan): la motivación intrínseca florece cuando se nutren tres necesidades — autonomía, competencia y vinculación afectiva.',
          'Autonomía: dar voz y elección (voz del estudiante en el PBL, metas propias). Competencia: dominio real y visible (el 80%). Vinculación: relación segura con la mentora y el grupo.',
          'Las ChanakCoins motivan, pero el fin es la motivación intrínseca: si el estudiante trabaja "solo por coins", se vuelve al rasgo de carácter.',
        ],
        visuales: [
          'Diapositiva: modelo del cerebro adolescente (límbico vs prefrontal).',
          'Diapositiva: las 3 necesidades de la autodeterminación y cómo las cubre Chanak.',
        ],
      },
      {
        titulo: 'Protocolo de desescalada verbal',
        guion: [
          'Ante una crisis conductual, la meta no es "ganar": es bajar la activación para poder resolver.',
          'Fase 1 — Calma vocal: baja el tono y el ritmo; tu regulación regula al otro.',
          'Fase 2 — Espacio físico: respeta la distancia; no arrincones ni impongas contacto.',
          'Fase 3 — Escucha activa sin confrontar: valida la emoción ("veo que estás muy frustrado") sin ceder en el límite.',
          'Fase 4 — Acuerdo diferido: cuando baja la activación, se retoma el tema y se acuerda el siguiente paso.',
          'Después de la crisis: registra los hechos, cuida el vínculo y, si hay señales de riesgo, activa el protocolo de protección.',
        ],
        visuales: [
          'Diapositiva: las 4 fases de la desescalada con una frase modelo por fase.',
          'Diapositiva: qué NO hacer en una crisis (arrinconar, gritar, humillar).',
        ],
      },
    ],
    quiz: [
      {
        p: 'Según la Teoría de la Autodeterminación de Deci y Ryan, ¿cuáles son las 3 necesidades psicológicas básicas para la motivación intrínseca?',
        opciones: [
          'Dinero, fama y notas',
          'Autonomía, Competencia y Relación/Vinculación afectiva',
          'Castigo, obediencia y rutina',
          'Competición, velocidad y victoria',
        ],
        correcta: 1,
        explica: 'La motivación intrínseca surge al nutrir la autonomía personal, el sentido de competencia y las relaciones seguras.',
      },
      {
        p: '¿Por qué el adolescente tiende a la impulsividad?',
        opciones: [
          'Por falta de valores',
          'Porque el sistema límbico madura antes que la corteza prefrontal',
          'Por exceso de sueño',
          'Porque no le interesa aprender',
        ],
        correcta: 1,
        explica: 'La desincronización madurativa entre el sistema límbico y la corteza prefrontal explica la búsqueda de recompensa inmediata.',
      },
      {
        p: 'En la desescalada verbal, tras calmar el tono, el siguiente paso es…',
        opciones: [
          'Exigir una disculpa inmediata',
          'Dar espacio físico y escuchar sin confrontar',
          'Aumentar la consecuencia',
          'Llamar a la familia delante del grupo',
        ],
        correcta: 1,
        explica: 'Calma vocal, espacio físico, escucha activa y acuerdo diferido: primero se baja la activación, después se resuelve.',
      },
    ],
  },

  '6.4': {
    resumen:
      'Acompañamiento psicopedagógico y relación familia-escuela. El Modelo Ecológico de Bronfenbrenner, la teoría de los sistemas familiares y la consulta triádica orientada a la salud del estudiante.',
    objetivos: [
      'Analizar la dinámica educativa con el Modelo Ecológico de Bronfenbrenner.',
      'Conducir consultas psicopedagógicas triádicas (familia-escuela-especialista).',
      'Establecer acuerdos de corresponsabilidad orientados al bienestar del alumno.',
    ],
    lecciones: [
      {
        titulo: 'El Modelo Ecológico de Bronfenbrenner',
        guion: [
          'Bronfenbrenner explica que el estudiante se desarrolla dentro de sistemas anidados.',
          'Microsistema: los entornos inmediatos (familia, mentora, grupo de aprendizaje).',
          'Mesosistema: las relaciones ENTRE esos entornos — la calidad de la relación familia-escuela pesa enormemente.',
          'Exosistema y macrosistema: lo que afecta al estudiante sin que él participe directamente (trabajo de los padres, cultura, leyes).',
          'Consecuencia para la mentora: cuidar el mesosistema (una buena alianza con la familia) es una de las intervenciones más potentes que existen.',
        ],
        visuales: [
          'Diapositiva: los círculos anidados del modelo ecológico.',
          'Diapositiva: el mesosistema familia-escuela como palanca de cambio.',
        ],
      },
      {
        titulo: 'Consulta triádica y corresponsabilidad',
        guion: [
          'La consulta triádica conecta a tres partes: la familia, la mentora/centro y el profesional externo (psicólogo, logopeda, médico) cuando existe.',
          'La mentora no sustituye al especialista: coordina, comparte observaciones con permiso y aplica en el aula las pautas acordadas.',
          'Respeto a la Family Authority: la familia decide sobre derivaciones y tratamientos; el centro informa y acompaña.',
          'Acuerdos de corresponsabilidad: qué hace cada parte, con qué frecuencia se revisa y cómo se comunica el progreso — siempre por canales autorizados y con datos protegidos.',
          'Nunca se comparte información clínica de un estudiante fuera del círculo autorizado ni se etiqueta al alumno.',
        ],
        visuales: [
          'Diapositiva: triángulo familia-centro-especialista con el flujo de información.',
          'Diapositiva: plantilla de acuerdo de corresponsabilidad.',
        ],
      },
    ],
    quiz: [
      {
        p: 'En el Modelo Ecológico de Bronfenbrenner, ¿qué representa el Mesosistema?',
        opciones: [
          'La persona aislada sin contexto',
          'Las interacciones entre los entornos inmediatos del alumno (ej. la relación Familia-Escuela)',
          'Las leyes globales del país',
          'Las redes sociales exclusivamente',
        ],
        correcta: 1,
        explica: 'El mesosistema abarca las conexiones entre los microsistemas primarios como la familia y la escuela.',
      },
      {
        p: 'En una consulta triádica, el papel de la mentora ante el especialista externo es…',
        opciones: [
          'Sustituir su diagnóstico',
          'Coordinar, compartir observaciones con permiso y aplicar las pautas en el aula',
          'Decidir el tratamiento',
          'Guardar la información sin comunicarla a la familia',
        ],
        correcta: 1,
        explica: 'La mentora coordina y acompaña; el diagnóstico y el tratamiento corresponden al profesional y la decisión a la familia.',
      },
    ],
  },
}

export const BLOQUE7 = {
  '7.1': {
    resumen:
      'A partir de aquí cambias de silla: dejas de acompañar a un estudiante para dirigir una operación. Lo primero es entender qué es exactamente Chanak en el lenguaje de la acreditación: un Learning Service Provider con sedes de implementación, no un colegio con campus.',
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
          'En el ecosistema conviven entidades distintas con funciones distintas: la fundación estadounidense capta financiación internacional y la asociación EducaFe en España gestiona cuotas y donaciones locales. Nunca mezcles los mensajes ni los canales de cobro.',
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
        p: '¿Cuál es la función de la asociación EducaFe en España dentro del ecosistema?',
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
      'Supervisar a una mentora no es vigilarla: es mirar su trabajo con una rúbrica, decírselo a tiempo y acompañarla a mejorar. Este módulo te entrena en el ciclo completo de observación, retroalimentación y plan de mejora, con las garantías que la institución debe a su personal.',
    objetivos: [
      'Observar una sesión de mentoría con rúbrica y registrar conductas observables.',
      'Dar retroalimentación en 24-48 horas centrada en el hecho y no en la persona.',
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
          'La evaluación de este módulo es una observación simulada completa: rúbrica cumplimentada, informe escrito, conversación de retroalimentación y plan de mejora acordado.',
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

  '7.4': {
    resumen:
      'Cumplimiento normativo local y código de ética directiva. Abrir y operar una sede en España exige una lista de comprobación real (seguro, certificados, LOPIVI, RGPD, espacio) y la disciplina de no decidir por tu cuenta el marco jurídico. En paralelo, el registro FLDOE #134620 sostiene la identidad estadounidense.',
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
          'Esto tiene una consecuencia que debes saber decir en voz alta: la sede no es un centro reglado y no expide titulación oficial española. Confundir esto con una familia es un problema grave.',
          'El Real Decreto 806/1993 regula los centros extranjeros en España. Cualquier encaje formal en ese marco lo estudia y lo valida la oficina central con asesoría jurídica.',
          'La coordinadora no decide el marco jurídico por su cuenta, ni siquiera con buena información. Recoge datos locales, documenta y consulta.',
          'Frente a las familias, la coordinadora explica el modelo real: diploma estadounidense, registro en Florida (FLDOE #134620) y candidatura MSA. Nunca centro reglado, nunca homologación garantizada.',
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
        ],
        visuales: [
          'Diapositiva: checklist de seis bloques con casilla y evidencia requerida.',
          'Diapositiva: los certificados del personal como requisito previo, no posterior.',
        ],
      },
      {
        titulo: 'El semáforo de apertura y la ética directiva',
        guion: [
          'El semáforo traduce la lista en una decisión: verde abrir, ámbar esperar y corregir, rojo no abrir.',
          'Bloquean la apertura, y por tanto son rojo: falta de seguro, falta de certificados del personal, ausencia de responsable identificado, espacio inadecuado, ausencia de convenio firmado y falta de sostenibilidad económica demostrada.',
          'Ámbar es una situación honesta y frecuente: hay base, faltan piezas, se fija plazo y responsable para cada una y se vuelve a evaluar.',
          'La frase que debes tener grabada como coordinadora es esta: nunca se abre por entusiasmo. El entusiasmo es combustible, no es criterio.',
          'Ética directiva: transparencia con las familias, veracidad en lo que se promete, protección por encima de todo y trazabilidad de cada decisión.',
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
        p: 'El local es perfecto y hay ocho familias interesadas, pero el seguro de responsabilidad civil aún no está contratado. ¿Qué color propones?',
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
        p: 'Un ayuntamiento pide aclarar el tipo de actividad. ¿Cómo se describe correctamente un hub en España?',
        opciones: [
          'Centro educativo reglado con currículo propio',
          'Actividad educativa no reglada de apoyo o enriquecimiento (epígrafe CNAE 8559)',
          'Academia de idiomas',
          'Centro extranjero ya autorizado por el Estado',
        ],
        correcta: 1,
        explica: 'Ese es el encuadre correcto. Cualquier otro encaje formal, incluido el del RD 806/1993, lo valida la oficina central con asesoría.',
      },
      {
        p: '¿Qué código acredita la condición de escuela privada de Chanak en Florida?',
        opciones: ['FLDOE #134620', 'ISO 9001', 'UNESCO #001', 'No tiene registro'],
        correcta: 0,
        explica: 'Chanak International Academy está registrada en el Departamento de Educación de Florida bajo el número FLDOE #134620.',
      },
    ],
  },
}

export const BLOQUE8 = {
  '8.1': {
    resumen:
      'Operaciones y gobernanza de Hubs EducaFe-Chanak (Modalidades A y B). Configuración de espacios comunitarios de aprendizaje sin fines de lucro, reglamentos de hub y junta territorial, y coordinación semanal de la sede.',
    objetivos: [
      'Diferenciar las Modalidades A (micro-escuela comunitaria) y B (hub de acompañamiento).',
      'Constituir la junta local de gobernanza del Hub EducaFe.',
      'Elaborar el plan semanal de la sede y asignar mentoras con criterios sostenibles.',
    ],
    lecciones: [
      {
        titulo: 'Gobernanza de Hubs EducaFe (Modalidades A y B)',
        guion: [
          'Modalidad A: Hub con espacio propio y horario regular para pequeños grupos de estudiantes.',
          'Modalidad B: Hub de acompañamiento comunitario en sedes aliadas o iglesias.',
          'La Socia Visionaria promueve la visión, coordina la apertura y vela por la gobernanza, sin asumir el cobro de tutorías académicas directas.',
          'La junta local de gobernanza da estructura: responsable identificado, acuerdos registrados y rendición de cuentas.',
          'EducaFe opera bajo el RD 806/1993 y el marco de asociación en España: la actividad es no reglada y se sostiene con cuotas y donaciones locales.',
        ],
        visuales: [
          'Diapositiva Visionaria: estructura comparativa de Hubs EducaFe Modalidad A vs B.',
          'Diapositiva: composición de la junta local de gobernanza.',
        ],
      },
      {
        titulo: 'El plan semanal de la sede',
        guion: [
          'Coordinar un equipo local es convertir el modelo Chanak en un horario que funciona el lunes por la mañana.',
          'El plan semanal cubre las tres franjas: 60% core, 20% Extensión Local y 20% Life Skills, con la Apertura del Día abriendo cada jornada.',
          'La asignación de mentoras a estudiantes se hace con criterios explicables y sostenibles: carga equilibrada, continuidad y perfil.',
          'Reuniones de equipo cortas, con acuerdos registrados y seguimiento: evitan que la sede improvise.',
          'Todo acuerdo se registra: si no está en el sistema, no ha pasado.',
        ],
        visuales: [
          'Diapositiva: plantilla de plan semanal de sede con las tres franjas.',
          'Diapositiva: criterios de asignación de mentoras.',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Cuál es el rol de la Socia Visionaria en un Hub EducaFe?',
        opciones: [
          'Cobrar clases de tutoría individual en la puerta del centro',
          'Impulsar la apertura del Hub, la gobernanza territorial, las alianzas comunitarias y la supervisión del propósito institucional',
          'Impartir clases de matemáticas de 8 horas diarias',
          'Vender materiales escolares sin registro',
        ],
        correcta: 1,
        explica: 'La Socia Visionaria lidera el desarrollo territorial, las alianzas estratégicas y la sostenibilidad institucional del Hub.',
      },
      {
        p: 'La diferencia entre Modalidad A y Modalidad B de un Hub es…',
        opciones: [
          'A es online y B es presencial',
          'A tiene espacio propio y horario regular; B es acompañamiento comunitario en sedes aliadas',
          'A es gratuita y B es de pago',
          'No hay diferencia real',
        ],
        correcta: 1,
        explica: 'Modalidad A opera con espacio propio y horario regular; Modalidad B acompaña en sedes aliadas o iglesias.',
      },
    ],
  },

  '8.2': {
    resumen:
      'Presentación de propuestas a consejos de iglesias y diaconados bajo el modelo de Alquiler Compartido: espacio compartido y colaboración concreta a cambio de estructura, formación y seguridad jurídica. Aprenderás a plantear esa conversación con honestidad y sin prometer lo que no puedes.',
    objetivos: [
      'Explicar el modelo de Alquiler Compartido y lo que aporta cada parte.',
      'Conducir una conversación con una iglesia socia pidiendo colaboración concreta.',
      'Identificar las promesas prohibidas y el papel del convenio escrito.',
    ],
    lecciones: [
      {
        titulo: 'Qué aporta cada parte (Alquiler Compartido)',
        guion: [
          'El modelo de Alquiler Compartido parte de un hecho sencillo: muchas iglesias tienen espacio infrautilizado de lunes a viernes y muchas familias necesitan un lugar donde aprender.',
          'La iglesia cede o comparte espacio y colabora financieramente en la operación. A cambio recibe seguridad jurídica, un convenio escrito y un proyecto educativo serio en su casa.',
          'Chanak y EducaFe aportan estructura, formación del personal, protocolos de protección, seguimiento académico y visión educativa. No aportamos solo alumnos: aportamos marco.',
          'La colaboración que se pide es concreta, nunca genérica: espacio en horario definido, voluntariado con certificados, difusión en la comunidad, becas para familias con dificultad y acompañamiento pastoral.',
          'Pedir colaboración concreta no es incomodar: es respetar. Una petición vaga produce compromisos vagos, y los compromisos vagos se rompen en el segundo trimestre.',
          'El Hub no compite con la iglesia: revitaliza sus instalaciones entre semana y sirve a las familias de la comunidad.',
        ],
        visuales: [
          'Diapositiva Visionaria: balanza, qué aporta la iglesia frente a qué aporta Chanak y EducaFe.',
          'Diapositiva: las cinco formas de colaboración concreta con iconos.',
        ],
      },
      {
        titulo: 'Las promesas prohibidas y el convenio',
        guion: [
          'Hay cuatro cosas que nunca se prometen a una iglesia socia: que su local será un centro reglado, que habrá homologación, que la titulación está garantizada y que puede usar libremente la marca Chanak.',
          'Prometerlas cierra un acuerdo hoy y rompe la relación en un año, además de exponer legalmente a las dos partes.',
          'La formalización es siempre por convenio escrito, redactado y firmado por quien tiene autoridad. La Socia Visionaria prepara la información y acompaña la conversación; no firma.',
          'El convenio recoge lo esencial: espacio y horarios, responsable identificado de cada parte, condiciones económicas, seguro, protección de menores, uso de imagen y marca, duración y forma de terminar el acuerdo.',
          'Sigue el cronograma del Expansion Blueprint en su orden: primero fase pastoral, después grupo familiar y solo entonces academia. Saltarse fases produce sedes frágiles.',
        ],
        visuales: [
          'Diapositiva: las cuatro promesas prohibidas tachadas en rojo.',
          'Diapositiva: cronograma de expansión, fase pastoral, grupo familiar, academia.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Un pastor firmará hoy si le confirmas que su local pasará a ser un centro homologado. ¿Qué respondes?',
        opciones: [
          'Se lo confirmo, total es cuestión de tiempo',
          'Le explico con claridad que no se promete homologación ni centro reglado, y le presento el modelo real',
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
        p: 'Una iglesia entusiasta quiere abrir la academia el mes que viene, sin fase pastoral ni grupo familiar. ¿Qué recomiendas?',
        opciones: [
          'Aprovechar el impulso y abrir ya',
          'Seguir el cronograma: fase pastoral, grupo familiar y después academia',
          'Abrir solo con estudiantes de la propia iglesia',
          'Abrir sin convenio y regularizar después',
        ],
        correcta: 1,
        explica: 'El Expansion Blueprint tiene ese orden por una razón: saltarse fases produce sedes frágiles que acaban perjudicando a las familias.',
      },
    ],
  },

  '8.3': {
    resumen:
      'Administración financiera de Hub, subvenciones (Grants), becas y sostenibilidad. Presupuestos comunitarios austeros, transparencia, rendición de cuentas y la Memoria Social como garantía ante donantes.',
    objetivos: [
      'Diseñar el presupuesto operativo anual de un Hub EducaFe.',
      'Postular a fondos de subvención (Grants) y programas de becas para familias vulnerables.',
      'Elaborar la Memoria Social y Financiera anual para la comunidad y donantes.',
    ],
    lecciones: [
      {
        titulo: 'Presupuesto, becas y financiación híbrida',
        guion: [
          'La sostenibilidad de un Hub EducaFe se basa en presupuestos austeros, fondos de becas comunitarias y postulaciones a subvenciones (Grants) del tercer sector.',
          'Protocolo financiero híbrido: la fundación estadounidense capta Grants internacionales para la expansión estratégica; la asociación EducaFe en España sostiene la operación diaria con cuotas y donaciones locales.',
          'Nunca se mezclan los canales: cada entidad tiene su función y su contabilidad.',
          'Las becas se otorgan con criterios claros y documentados, priorizando familias con dificultad real.',
          'Un presupuesto equilibrado prevé ingresos conservadores y gastos reales: la austeridad protege el proyecto.',
        ],
        visuales: [
          'Diapositiva Visionaria: modelo de presupuesto equilibrado y esquema de becas EducaFe.',
          'Diapositiva: protocolo híbrido, Grants internacionales vs operación local.',
        ],
      },
      {
        titulo: 'Transparencia y Memoria Social',
        guion: [
          'Transparencia total: la Memoria Social y Financiera rinde cuentas públicas de cada donación o fondo recibido.',
          'La memoria conecta el dinero con el impacto: cuántas familias, cuántos estudiantes, qué resultados y qué becas se concedieron.',
          'La rendición de cuentas no es un trámite: es lo que hace posible pedir el siguiente Grant y sostener la confianza de la comunidad.',
          'Los Grants se redactan con enfoque en el impacto social y la cosmovisión que sostiene el proyecto, con datos verificables.',
          'La evaluación del módulo es un presupuesto de Hub con su Memoria Social asociada.',
        ],
        visuales: [
          'Diapositiva: estructura de la Memoria Social y Rendición de Cuentas.',
          'Diapositiva: del euro recibido al impacto medible.',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Qué documento garantiza la transparencia financiera y de impacto de un Hub EducaFe ante la comunidad y los donantes?',
        opciones: [
          'Una nota mental',
          'La Memoria Social y Rendición de Cuentas Financiera Anual',
          'Un anuncio publicitario',
          'Un recibo borrador sin firma',
        ],
        correcta: 1,
        explica: 'La Memoria Social y Rendición de Cuentas avala el destino transparente de los fondos y becas recibidas.',
      },
      {
        p: 'En el protocolo financiero híbrido, ¿de dónde provienen principalmente los Grants internacionales?',
        opciones: [
          'De las cuotas de socios en España',
          'De la fundación estadounidense 501(c)(3)',
          'De la venta de material escolar',
          'De préstamos bancarios',
        ],
        correcta: 1,
        explica: 'La fundación estadounidense capta financiación internacional (Grants); la asociación española sostiene la operación diaria con cuotas y donaciones.',
      },
    ],
  },

  '8.4': {
    resumen:
      'Relaciones institucionales, tercer sector y convenios territoriales. Alianzas con fundaciones, ayuntamientos y ONG, y articulación de la Red EducaFe para ampliar la cobertura de atención a la infancia.',
    objetivos: [
      'Mapear aliados del tercer sector e instituciones locales.',
      'Formalizar convenios marco de colaboración territorial.',
      'Consolidar la representación institucional de la Red EducaFe.',
    ],
    lecciones: [
      {
        titulo: 'Alianzas estratégicas y red territorial',
        guion: [
          'Articulación con fundaciones, asociaciones locales y entidades del tercer sector para ampliar la cobertura de atención a la infancia.',
          'Un mapa de aliados identifica quién aporta espacio, financiación, difusión o servicios complementarios.',
          'Los convenios marco formalizan la colaboración: objeto, aportaciones, responsables, duración y protección de datos.',
          'La Red EducaFe da representación conjunta: un territorio articulado negocia y sostiene mejor que sedes aisladas.',
          'Como en todo el ecosistema, la firma de convenios corresponde a quien tiene autoridad institucional; la Socia Visionaria prepara y acompaña.',
        ],
        visuales: [
          'Diapositiva Visionaria: mapa de alianzas del tercer sector y estructura de convenio marco.',
          'Diapositiva: la Red EducaFe como articulación territorial.',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Cuál es el propósito del trabajo en red con el Tercer Sector y entidades locales en el Nivel 3?',
        opciones: [
          'Aislar al Hub de la comunidad',
          'Establecer convenios y alianzas para fortalecer el apoyo a familias y la sostenibilidad del proyecto',
          'Crear competencia con otras organizaciones',
          'Evitar el contacto con instituciones locales',
        ],
        correcta: 1,
        explica: 'Las alianzas con el tercer sector enriquecen los recursos, apoyos y la cobertura comunitaria de los Hubs EducaFe.',
      },
      {
        p: '¿Quién firma un convenio marco de colaboración territorial?',
        opciones: [
          'La Socia Visionaria por su cuenta',
          'Quien tiene autoridad institucional para firmarlo; la Socia Visionaria prepara y acompaña',
          'Cualquier mentora del Hub',
          'La familia de un estudiante',
        ],
        correcta: 1,
        explica: 'La firma de convenios corresponde a la autoridad institucional; la Socia Visionaria elabora la propuesta y acompaña la negociación.',
      },
    ],
  },
}
