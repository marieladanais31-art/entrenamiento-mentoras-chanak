// Lecturas · Bloque 10 (parte B) · T10.4 Sistemas · T10.5 Rutas de especialista
// Borrador operativo de formación. Todo contenido legal, fiscal o contractual está sujeto a revisión legal/administrativa.
// Los hechos internos proceden de la Guía Rápida del SIS, el Manual Operativo de Hubs, el Dual Diploma Portal y los materiales de
// Life Skills y Extensión Local; lo que no está confirmado se indica como «confirmar con coordinación».
// Privacidad: ningún dato personal de estudiantes; solo IDs.

export const LECTURAS_B10B = {
  // ───────────────────────────────────────────────────────────
  'T10.4': {
    lecciones: [
      {
        titulo: 'Qué es cada sistema y por qué existen tres',
        guion: [
          'Chanak trabaja con tres sistemas porque atiende a tres necesidades distintas. El SIS (Student Information System) es el registro oficial interno: guarda la matrícula, el Plan de Ruta o PEI, las evidencias, el progreso, las intervenciones y las alertas de cada estudiante. El Portal educativo es la biblioteca de trabajo: guías curriculares, recursos de Life Skills y Extensión Local, diagnósticos y manuales. El Dual Diploma Portal es la ventana del estudiante y su familia a su propio recorrido: Route Plan, materias, créditos, trabajo pendiente y evidencias.',
          'Esta separación tiene una consecuencia práctica que conviene interiorizar desde el primer día: la fuente de verdad sobre un estudiante es el SIS, no un correo, no una hoja de cálculo, no un mensaje de WhatsApp y no tu memoria. Cuando un dato aparece en dos sitios con valores distintos, manda el SIS y se investiga por qué hay una discrepancia. Quien trabaja con sistemas pronto aprende que la mayoría de los problemas con familias no nacen de decisiones malas, sino de datos desactualizados o duplicados.',
          'Este módulo está pensado para los roles que tocan los sistemas con frecuencia, en especial Academic Records, Family Enrollment y quienes validan procesos. No es un manual de pulsaciones, que cambia con cada versión, sino la comprensión de cómo está organizado el acceso, qué hace y qué no hace cada pieza, y cómo se trabaja con ellas sin poner en riesgo a ninguna familia. Por eso el módulo es de práctica y validación: se aprende haciendo, con datos ficticios, y se valida con una tarea que revisa Chanak Central.',
        ],
      },
      {
        titulo: 'Las cuatro vías de acceso: Admin, Coordinador, Familia y Estudiante',
        guion: [
          'La Guía Rápida del SIS organiza el acceso en cuatro vías: Admin, Coordinador, Familia (Parent) y Estudiante (Student). Cada vía muestra información distinta y permite acciones distintas. La lógica es la del mínimo privilegio: cada persona ve y puede cambiar lo que necesita para su función y nada más. Un coordinador ve a los estudiantes de su Hub; una familia ve únicamente a sus hijos; un estudiante ve su propio recorrido; el Admin tiene visión de conjunto y por eso sus acciones son las más delicadas.',
          'Para quien forma parte del equipo esto implica dos hábitos. El primero: entrar siempre con la vía que corresponde a la tarea y no compartir nunca una sesión ni una contraseña, ni siquiera con un compañero de confianza. Si alguien necesita acceso, se solicita; no se presta. El segundo: antes de explicarle algo a una familia, ponerse en su lugar y comprobar qué ve ella en su vía. Muchas confusiones desaparecen cuando el miembro del equipo mira la pantalla que ve la familia y no la propia.',
          'Una precaución adicional sobre los permisos: que tu vía permita ver o editar un campo no significa que debas hacerlo. Las acciones sensibles (cambiar notas, créditos, estados de matrícula, datos personales o datos de pago) solo se hacen con el permiso expreso del rol y la formación correspondiente. Si dudas de si una acción te corresponde, la respuesta es no hacerla y preguntar. En la matriz de permisos del SIS, que Chanak Central debe mantener actualizada, figura qué puede hacer cada rol; si en tu práctica descubres una diferencia entre lo que la matriz dice y lo que el sistema permite, repórtalo como incidencia.',
        ],
      },
      {
        titulo: 'La matrícula y el cobro: lo que el sistema hace y lo que no',
        guion: [
          'Una confusión frecuente es pensar que el cobro de la matrícula es automático por el hecho de que existe un sistema. En el estado actual, la integración con Stripe no cierra sola todo el ciclo: la matrícula, el pago y la activación del estudiante son pasos que deben coincidir y que una persona verifica. Por tanto, un pago recibido no activa por sí solo a un estudiante, y un estudiante visible en el SIS no significa necesariamente que su pago esté conciliado. La automatización completa del flujo de cobros es una meta del desarrollo del SIS que está en proceso, y hasta que se confirme se trabaja con verificación humana.',
          'En la práctica, esto se traduce en una secuencia ordenada. Primero, la familia completa la solicitud y se confirma que el programa elegido está disponible para su territorio. Después, se comprueba la elegibilidad según la matriz de programas estatales: un servicio que no aparece como aprobado no se ofrece como tal. A continuación, se confirma el pago por el canal correspondiente. Solo entonces se activa el expediente y se abre el Plan de Ruta. Cada paso deja un registro con fecha y responsable.',
          'Si el pago es por una beca o cuenta de educación de un programa estatal, entra otra capa: el cobro depende del mercado del programa (por ejemplo, un marketplace o plataforma de pagos del propio programa) y de que Chanak esté dado de alta como proveedor. Lo que aún está en proceso se explica a la familia con esas palabras, sin precios ni plazos inventados. Los precios, además, figuran como «por confirmar» en la matriz hasta que la dirección los fije; quien trabaja con matrícula no improvisa cifras.',
        ],
      },
      {
        titulo: 'El Plan de Ruta y el Dual Diploma Portal',
        guion: [
          'El Plan de Ruta (Route Plan) es el documento vivo que dice dónde está el estudiante, qué materias y créditos cursa y qué falta para su meta. Nace tras el diagnóstico inicial, se alimenta con evidencias y se revisa de forma periódica. En el Dual Diploma Portal el estudiante y su familia lo ven en forma de materias, créditos, trabajo pendiente y evidencias. Su valor está en que convierte una meta abstracta (un diploma) en pasos concretos y verificables.',
          'La regla de convalidación de estudios previos merece atención especial, porque es donde más fácilmente se prometen cosas que no se pueden prometer. El material del Dual Diploma contempla el reconocimiento de estudios anteriores hasta cierto porcentaje (se menciona el 75 %), siempre sujeto a la revisión del expediente académico y a las normas de la acreditación y del programa. Confirma con coordinación académica la versión vigente de la regla antes de usarla con una familia, y recuerda que quien convalida es el área académica, no quien atiende la matrícula. Decir «te reconocemos el 75 %» antes de revisar el expediente es una promesa que el sistema no respalda.',
          'Otra frontera importante: el Dual Diploma Portal muestra el recorrido, no certifica reconocimientos externos. Que un curso aparezca en el Route Plan no garantiza que una universidad, una asociación deportiva o un estado lo reconozca; esos reconocimientos dependen de terceros y de procesos que, cuando no están confirmados, se comunican como en proceso o en revisión. Explicarlo así a la familia es una forma de cuidarla.',
        ],
      },
      {
        titulo: 'Diagnóstico inicial y competencias que se validan',
        guion: [
          'El diagnóstico académico inicial (el programa ACE y las pruebas de ubicación que Chanak utilice) existe para decidir por dónde empieza el estudiante, no para etiquetarlo. Sus resultados orientan el punto de partida del Plan de Ruta y se registran en el SIS por ID. Se interpretan con prudencia: un resultado bajo en una prueba es un dato sobre un día y un contenido, no un juicio sobre la persona. Quien registra diagnósticos no los comenta con la familia como si fueran un dictamen; pide a coordinación académica que los explique.',
          'En esta formación cada sistema se aprende en tres pasos: ver una demostración, practicar en un entorno de prueba o con datos ficticios y validar con una tarea evaluada. No se considera dominado un sistema solo por haberlo leído. Competencias mínimas del SIS: localizar un expediente por ID, interpretar el estado de matrícula y el progreso, registrar una evidencia o una observación con hechos y fecha, reconocer una alerta y saber a quién escalarla. Del Portal: encontrar la guía o el recurso correcto, distinguir material interno de material de familias y usar los diagnósticos con su finalidad. Del Dual Diploma Portal: interpretar un Route Plan, créditos y trabajo pendiente, y explicar a una familia qué ve su estudiante sin prometer reconocimientos.',
          'La validación es una tarea corta y concreta: por ejemplo, partir de un expediente ficticio, identificar en qué paso del flujo está, detectar una incoherencia sembrada (un pago sin activación, un crédito sin evidencia) y redactar la nota de escalamiento correcta. Lo que se evalúa no es la velocidad, sino que no se haga nada que no corresponda al rol y que la nota sea verificable.',
        ],
      },
      {
        titulo: 'Privacidad y registros: reglas que no cambian',
        guion: [
          'Ningún dato personal de estudiantes sale de los sistemas. En conversaciones, correos, hojas de cálculo, documentos de trabajo, informes a financiadores y material de formación se usan IDs. No se comparten capturas de pantalla con nombres, fotos ni datos de contacto, ni se envían exportaciones por canales no autorizados. En el caso de estudiantes en Estados Unidos, esto se alinea con la protección de los registros educativos (FERPA) y con las expectativas de los programas estatales; en España, con la normativa de protección de datos (RGPD y su ley de desarrollo), que es especialmente exigente cuando los datos son de menores. La asesoría legal confirma los detalles aplicables a cada entidad.',
          'Cada registro debe ser verificable: fecha, hecho observado, fuente y responsable. Una nota que dice «parece desmotivado» no sirve; una que dice «no entregó las tareas 3 y 4 en las dos últimas semanas» sí sirve. Las opiniones, cuando son necesarias, se separan de los hechos y se firman. Los errores no se borran en silencio: se corrigen dejando constancia de qué se cambió, cuándo y por qué, porque un expediente que se puede reescribir sin rastro deja de ser confiable.',
          'Un último hábito: minimizar. Pide y registra solo los datos que necesitas para la tarea. Cuantos menos datos personales circulen, menos que proteger y menos que pueda salir mal. Y cuando termines una tarea que implicó descargar o ver datos, cierra la sesión y no dejes copias locales.',
        ],
      },
      {
        titulo: 'Cuando algo falla: incidencias y escalamiento',
        guion: [
          'Si un sistema falla o un dato parece incorrecto, no lo arregles por tu cuenta. Describe el problema con cuatro elementos: qué hacías, qué esperabas, qué ocurrió y a qué hora. Indica el ID afectado, sin datos personales, adjunta una captura solo si está libre de ellos y repórtalo a quien corresponda en Chanak Central, que puede ser el responsable de tecnología o administración. Esa información ahorra horas a quien debe investigar.',
          'Algunas incidencias son más graves que otras y conviene distinguirlas desde el principio. Un dato desactualizado es una incidencia normal. Una persona que ve información de un estudiante que no es suyo es una brecha de privacidad y se reporta de inmediato a administración, sin esperar al final del día, sin borrar nada y sin comentarlo con terceros. Un cobro duplicado o un pago sin activación afecta a una familia en su dinero y se trata con prioridad.',
          'Mientras se resuelve, documenta la incidencia y, si afecta a una familia, comunica con transparencia que se está revisando, sin atribuir culpas y sin dar plazos que no controlas. Una frase honesta como «lo estamos revisando y te escribiremos cuando esté confirmado» es mejor que una promesa que quizá no se cumpla.',
        ],
      },
      {
        titulo: 'Ejemplo trabajado: la familia que ve un dato distinto',
        guion: [
          'Una familia escribe porque el Dual Diploma Portal de su estudiante (ID-0452) muestra un crédito pendiente que ella cree ya completado. La Representante de Familias abre el SIS, comprueba el estado y ve que la evidencia está subida pero aún sin revisar. No cambia el crédito ni promete nada: su vía no le permite validar créditos y, aunque se lo permitiera, esa decisión es del área académica.',
          'Explica a la familia que la evidencia está en revisión, registra la consulta con fecha y la pasa al coordinador académico con el ID y los hechos: qué crédito, qué evidencia, desde cuándo está pendiente. El coordinador revisa en su plazo normal y confirma. La familia recibe una respuesta clara, sin que nadie haya prometido más de lo que podía.',
          'Lo aprendido: ver un dato no es lo mismo que poder decidirlo; la rapidez de la respuesta nunca debe construirse sobre una promesa; y una buena nota de escalamiento es la mitad de la solución. La práctica de este módulo repite ese patrón con otros casos: un pago sin activación, un expediente duplicado y una consulta de convalidación.',
        ],
      },
    ],
    desglose: { video: 0.5, lectura: 0.75, documentos: [], practica: 2, evidencia: 1, kc: 0.75 },
  },

  // ───────────────────────────────────────────────────────────
  'T10.5': {
    lecciones: [
      {
        titulo: 'Para quién es este módulo y qué tienen en común las cuatro rutas',
        guion: [
          'Este módulo reúne las rutas de los profesores especialistas que, dentro del rol Mentor, trabajan con estudiantes en áreas concretas: English Teacher, Life Skills Facilitator, instructor de lengua local (Extensión Local) y Educational Assessment Specialist. Los cuatro tienen contacto directo con menores, de modo que antes completan la formación obligatoria de desarrollo infantil, Safeguarding, Online Safety y protección de datos (Bloque 9 y las prácticas T6.1 y T6.2).',
          'Las cuatro rutas comparten un fundamento: el modelo 60/20/20 y la filosofía de Mastery Learning. Eso significa que el estudiante avanza cuando demuestra que domina un aprendizaje, no cuando pasa el calendario, y que cada especialista aporta a una parte del conjunto sin invadir las demás. El 60 % es el núcleo académico, el 20 % es Life Skills y cosmovisión bíblica, y el 20 % es Extensión Local, la lengua, historia y cultura del país donde vive el estudiante. El inglés atraviesa varias de esas partes; la evaluación atraviesa todas.',
          'También comparten un límite: ninguno de los cuatro modifica créditos, equivalencias ni registros académicos por su cuenta. Observan, enseñan, documentan y proponen; la decisión académica corresponde a coordinación. Y comparten una manera de registrar: hechos con fecha, sin etiquetas, con IDs y no con nombres en cualquier documento que salga del SIS.',
        ],
      },
      {
        titulo: 'English Teacher: nivel, progresión y práctica oral',
        guion: [
          'El profesor de inglés empieza por ubicar al estudiante. Usa el diagnóstico de inglés del programa y lo interpreta con el Marco Común Europeo de Referencia (CEFR), cuyos niveles, de A1 a C2, describen lo que una persona puede hacer con la lengua: A1 y A2 son uso básico, B1 y B2 uso independiente, C1 y C2 uso competente. Lo importante no es la etiqueta, sino la descripción: «puede mantener una conversación sencilla sobre temas familiares» es útil; «es un B1» solo lo es si sabes lo que significa. Para los grupos de Hub Virtual se recomienda un plan que mantenga las cuatro destrezas en equilibrio: comprensión oral, comprensión lectora, expresión oral y expresión escrita.',
          'El principio de Mastery Learning aplicado al inglés se traduce en objetivos pequeños y demostrables: «pide información en una tienda», «escribe un correo de cinco líneas», «resume oralmente un texto breve». Cuando el estudiante lo hace con soltura, avanza; cuando no, recibe otra vía de práctica, no una nota baja y un cambio de tema. Esto exige que el profesor tenga evidencias, no impresiones: una grabación de voz con permiso de la familia, un texto con fecha, una lista de comprobación de lo observado.',
          'Una parte esencial del trabajo es la práctica oral. En muchos estudiantes la expresión oral va por detrás de la lectura y la escritura, no por falta de capacidad sino por ansiedad al hablar en una segunda lengua, un fenómeno ampliamente estudiado en la enseñanza de idiomas. Se reduce con rutinas previsibles, parejas antes que grupos grandes, tiempo de preparación y un clima donde equivocarse no se castiga. El profesor propone la mayor cantidad posible de ocasiones breves de hablar, en lugar de pocas intervenciones largas y expuestas.',
          'En cuanto a la corrección, hay dos grandes familias de técnicas. Las reformulaciones (recasts) repiten correctamente lo que el estudiante dijo mal sin interrumpir; son discretas, pero muchas veces el estudiante no se da cuenta de que se le está corrigiendo. Las pistas o indicaciones (prompts) invitan al propio estudiante a corregirse («¿cómo se dice en pasado?»); exigen más, pero favorecen más el aprendizaje cuando hay confianza. No se trata de elegir una para siempre, sino de ajustar según el estudiante, el momento y el objetivo, y de dejar la corrección extensa para un momento de calma y no para el centro de una intervención.',
          'Por último, el profesor respeta los materiales y el calendario del programa, no cambia el nivel de un estudiante en el sistema, y si cree que debe cambiar, presenta a coordinación las evidencias que lo muestran. Las rúbricas y los niveles concretos de los programas de inglés (por ejemplo, los niveles de los programas Hub) los fija Chanak Central; si no los conoces, pregunta antes de inventar una equivalencia.',
        ],
      },
      {
        titulo: 'Life Skills Facilitator: niveles, rúbrica y seguridad',
        guion: [
          'El facilitador de Life Skills acompaña al estudiante en el 20 % de formación en habilidades para la vida con cosmovisión bíblica. Trabaja con proyectos prácticos y evidencias, organizados por niveles según la edad y el recorrido del estudiante (el programa los agrupa en rutas como Explorer, Builder y Junior, cada una con su rúbrica) y por pistas o áreas temáticas. La rúbrica vigente es la referencia: no se inventa una propia ni se evalúa con impresiones. Si no tienes a mano la rúbrica del nivel que facilitas, pídela a coordinación antes de la primera sesión.',
          'La actitud importa tanto como la técnica. La cosmovisión bíblica se presenta de forma transparente, con el propósito y el marco que las familias conocen al matricularse, y desde el acompañamiento y no el adoctrinamiento. El facilitador escucha, pregunta y propone; no presiona, no pone a un estudiante en evidencia por lo que cree o no cree y no usa la fe como herramienta de control de conducta. Cuando hay diversidad de trasfondos en un grupo, el respeto es parte del método.',
          'La seguridad se traduce en una regla fácil de recordar: toda sesión debe ser observable e interrumpible. Observable, porque hay más de un adulto presente o el espacio es visible, en persona o en línea; interrumpible, porque cualquier adulto responsable puede intervenir sin pedir permiso si algo no está bien. Esto protege a los estudiantes y también protege al facilitador. En consecuencia, no hay sesiones individuales a puerta cerrada, no hay canales privados con estudiantes menores fuera de los autorizados por el Hub y se registra la asistencia por ID.',
          'En proyectos con actividad física, cocina, herramientas o salidas, el facilitador evalúa antes el riesgo, comprueba el consentimiento de las familias y sigue las normas del espacio donde se realice, que puede ser un espacio compartido con una iglesia. Las actividades con riesgo físico significativo no se improvisan: se consultan con coordinación. Si durante una sesión un estudiante comparte algo preocupante, el facilitador aplica el protocolo de Safeguarding: escucha con calma, no promete confidencialidad absoluta, no investiga por su cuenta y comunica a la persona responsable del Hub de inmediato.',
        ],
      },
      {
        titulo: 'Instructor de lengua local: Extensión Local y lengua propia',
        guion: [
          'El instructor de lengua local desarrolla el 20 % de Extensión Local: lengua, historia y cultura del país donde vive el estudiante, según la normativa local aplicable. En España, por ejemplo, puede incluir castellano y, según el territorio, lengua cooficial; en otros países, la lengua y los contenidos que su legislación y el programa señalen. Qué contenidos y qué evidencias se exigen en cada territorio es una cuestión normativa que Chanak Central confirma y revisa; el instructor no la resuelve por su cuenta.',
          'Hay un fundamento pedagógico que ayuda a entender por qué la lengua local no compite con el inglés. La hipótesis de interdependencia lingüística, asociada al investigador Jim Cummins, sostiene que las habilidades que se desarrollan en una lengua (comprender un texto, estructurar un argumento) se transfieren a la otra. Un estudiante que lee bien en su lengua materna tiene una base sólida para aprender a leer en inglés, y viceversa. Por eso fortalecer la lengua local forma parte del plan académico y no es un añadido.',
          'En la práctica, el instructor se coordina con Chanak Central para alinear contenidos y evidencias; trabaja con materiales en el Portal cuando existen y señala las lagunas; y mantiene su práctica dentro de lo que la normativa permite en cada territorio. Si el programa de un estudiante tiene un requisito de ese país (por ejemplo, un examen o una materia concreta), el instructor lo documenta y se lo comunica a coordinación para que quede reflejado en el Plan de Ruta, sin asumir que una materia de Extensión Local equivale a la de un centro oficial.',
        ],
      },
      {
        titulo: 'Educational Assessment Specialist: evaluar para enseñar mejor y límites claros',
        guion: [
          'Este especialista aplica y analiza evaluaciones educativas (diagnósticos académicos, observaciones de aprendizaje, seguimiento del progreso) para ajustar la enseñanza. Su trabajo se apoya en la evaluación formativa: información recogida durante el aprendizaje, y no solo al final, que sirve para decidir el siguiente paso. Una buena evaluación formativa responde a tres preguntas: dónde está el estudiante, adónde debe llegar y qué le falta para llegar. Con esas respuestas se ajusta la práctica, se cambia el apoyo y se decide cuándo avanzar.',
          'Su trabajo es educativo y no clínico. No diagnostica trastornos, no emite informes psicológicos, no usa etiquetas médicas ni sustituye a un profesional con licencia. Eso no significa que ignore lo que ve: significa que describe lo observado con hechos, con fecha y con contexto, y evita interpretaciones. «En las últimas tres semanas, en las tareas de lectura de más de media página, se detiene en cada palabra desconocida y no termina el texto» es una observación; «tiene dislexia» no lo es y no corresponde a este rol.',
          'La regla que sostiene todo lo anterior es la fórmula REFER TO LICENSED PROFESSIONAL. Cuando el patrón observado excede lo educativo o sugiere una dificultad que requiere valoración profesional, el especialista informa a coordinación, comparte con la familia los hechos observados, de forma respetuosa y sin etiquetas, y le orienta a consultar con un profesional adecuado de su territorio (por ejemplo, un servicio educativo, un pediatra o un psicólogo con licencia). La decisión de consultar es de la familia; el especialista no la presiona, no insiste y no condiciona la matrícula a ello.',
          'Dos precauciones más. Primero, las adaptaciones pedagógicas razonables (más tiempo, otro formato, otro ritmo) son decisiones educativas que se acuerdan con coordinación y con la familia, y se registran; no equivalen a «adaptaciones oficiales» de un sistema escolar, que dependen de procesos que Chanak no promete. Segundo, los datos de evaluación son especialmente sensibles: se registran por ID, se comparten solo con quien los necesita y nunca se usan para comparar públicamente a unos estudiantes con otros.',
        ],
      },
      {
        titulo: 'Mastery Learning en la práctica: del dato a la decisión',
        guion: [
          'Los cuatro especialistas se encuentran en un mismo punto: la decisión de qué hacer a continuación con un estudiante concreto. El ciclo es sencillo y sirve para todos. Se observa un desempeño con una tarea o una rúbrica; se anota el hecho con fecha; se compara con el objetivo; se decide si el estudiante avanza, repite con otra vía o necesita apoyo adicional; y se comunica la decisión a la familia con claridad y sin etiquetas.',
          'Este ciclo evita dos errores opuestos. El primero es avanzar por calendario: pasar de tema porque «toca», aunque el estudiante no haya consolidado lo anterior, lo que acumula lagunas. El segundo es retener indefinidamente: no avanzar por perfeccionismo, lo que desmotiva. La regla de maestría fija un umbral claro (el que establezca la rúbrica o el programa) y ofrece varias oportunidades de demostrar el dominio, con apoyo diferenciado, sin penalizar por haber necesitado más de un intento.',
          'Un buen registro es el que permite que otra persona entienda, sin haber estado presente, qué se hizo y por qué. Si la profesora de inglés de un estudiante cambia, la nueva debe poder leer el expediente y continuar. Esa continuidad es una forma de calidad, y es también lo que respalda a Chanak ante auditorías y acreditaciones, que miran precisamente la coherencia entre lo que se promete y lo que se documenta.',
        ],
      },
      {
        titulo: 'Ejemplo trabajado: el estudiante que progresa en inglés pero no habla',
        guion: [
          'Un estudiante (ID-0517) lee y escribe bien en inglés, pero casi no habla en las sesiones. La profesora no concluye que tenga un problema: observa durante tres semanas cuándo habla más (con apoyo visual, en parejas, en temas de su interés) y cuándo se bloquea (ante correcciones inmediatas). Anota los hechos con fecha y evita adjetivos como «tímido» o «inseguro».',
          'Ajusta la práctica: empieza con respuestas escritas que el estudiante lee en voz alta, introduce parejas, ofrece tiempo de preparación y retrasa la corrección para el final, usando reformulaciones discretas en lugar de interrupciones. Comparte con la familia lo que funciona y qué se va a probar, y fija una revisión a las tres semanas con una evidencia concreta (por ejemplo, una breve intervención oral de dos minutos).',
          'Si en la revisión el patrón persistiera con mucha angustia o se extendiera a otras áreas, la profesora lo hablaría con coordinación y, con respeto, sugeriría a la familia que consultara a un profesional, describiendo lo observado y sin etiquetar. Lo aprendido: observar antes de interpretar, ajustar antes de derivar, y derivar con hechos cuando corresponde.',
        ],
      },
    ],
    desglose: { video: 0.5, lectura: 0.75, documentos: [], practica: 2.25, evidencia: 1, kc: 0.5 },
  },
}
