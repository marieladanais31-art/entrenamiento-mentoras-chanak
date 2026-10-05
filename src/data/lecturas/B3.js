// Lecturas ampliadas · Bloque 3 · Curriculum Pathways
// Fuentes: src/data/contenido/bloques3y4.js (T3.1–T3.4); kit FINAL: d08_curriculos.js (Chanak_Curriculos_y_Vias_Academicas),
// d02_offcampus.js (Chanak_Off-Campus_Homeschool_Guiado), docs_pol.py (Curriculum Approval Policy, Credit Recognition Policy,
// Academic Certification Policy), ss_data.py / ss_intro.json (K–12 Scope & Sequence); contenido antiguo old_bloque1.js (1.2, 1.3, 1.4)
// y old_bloque4y5.js (4.1); hechos verificados del brief.

export const LECTURAS_B3 = {
  'T3.1': {
    lecciones: [
      {
        titulo: 'Qué es A.C.E. y qué lugar ocupa en Chanak',
        guion: [
          'A.C.E. (Accelerated Christian Education) es un currículo cristiano K–12 que comienza con programas de lectura para los más pequeños, ABCs with Ace and Christi, y continúa con asignaturas core y optativas. En Chanak tiene una etiqueta precisa: Reference / Preferred Curriculum Pathway, es decir, vía curricular de referencia y preferente. Es el recurso principal aprobado actualmente, pero no es la identidad de Chanak: es una herramienta que funciona dentro del Chanak Growth System, el lenguaje institucional con el que describimos el trabajo diario (Learning Units, Daily Goal Tracker, Review Station, Mastery Assessment y Apertura del Día).',
          'Conviene que tengas clara la diferencia entre currículo, plataforma y escuela, porque las familias la confunden a menudo. El currículo son los materiales y la secuencia de aprendizaje; la plataforma es una herramienta tecnológica que facilita, pero no certifica; la escuela es la institución que diagnostica, supervisa, evalúa, registra y documenta. A.C.E. es un currículo externo: no es propiedad de Chanak. Chanak es la escuela. Por eso, cuando una familia diga «estudiamos A.C.E.», tu respuesta profesional es «estudiáis en Chanak, con la vía A.C.E.».',
          '¿Por qué es la vía de referencia? Porque su lógica de unidades pequeñas, metas diarias, corrección supervisada y dominio individual coincide con el marco académico de Chanak. Cuando hables de estándares, describe A.C.E. como un currículo «benchmarked against» estándares de EE. UU., es decir, contrastado con ellos; nunca digas que está «alineado con Common Core». Y no lo presentes como superior a otros currículos: la propia política interna indica que A.C.E. no se declara superior, solo de referencia.',
          'Hay una frase que debes conocer de memoria y usar tal cual cuando hables de créditos: «La inclusión de una editorial o vía curricular no supone reconocimiento automático de todos sus cursos o créditos. Chanak evalúa versión, nivel, asignatura, secuencia, evidencia y compatibilidad con sus requisitos académicos.» Usar A.C.E. no convierte cada PACE en crédito: la Credit Recognition Policy establece que no hay conversión automática de módulos, PACEs, unidades o asignaturas en créditos.',
        ],
      },
      {
        titulo: 'La estructura de A.C.E.: niveles, PACEs y controles',
        guion: [
          'Los cursos de A.C.E. se dividen en cuadernillos llamados PACEs, comparables a una unidad de un libro de texto. El core se organiza en 12 niveles y cada nivel incluye, por lo general, 12 PACEs por asignatura, pensados para un año aproximadamente. El avance exige dominio individual: el estudiante no queda frenado por el grupo ni obligado a seguir su ritmo. Por eso dos estudiantes de la misma edad pueden estar en PACEs distintos y ambos ir bien.',
          'El recorrido empieza con el Diagnostic Test de ubicación, que se realiza online y sirve para situar al estudiante y detectar lagunas (los llamados gap PACEs, que se asignan para reforzar lo que falta). Dentro de cada PACE el estudiante fija metas diarias, trabaja el contenido y se encuentra Checkups, pequeñas pruebas intermedias. Al final viene el Self Test, que es repaso y autoevaluación previa, y después el PACE Test, que mide objetivamente el dominio del PACE. El supervisor es quien autoriza el PACE Test y mantiene los estándares de trabajo.',
          'El umbral de dominio es del 80 %. Este umbral habitual aparece en manuales de procedimiento asociados a A.C.E. y en Chanak es el mínimo para todas las vías. La política curricular y el Scope & Sequence recogen además un posible 90 % de preparación en Self Tests cuando corresponda. Un PACE Test por debajo del umbral no se «aprueba por esfuerzo»: se refuerza el contenido y se vuelve a evaluar cuando hay dominio.',
          'A.C.E. incluye también herramientas digitales opcionales de apoyo, como ePACE, Word Builder o Math Builder. Son un complemento, nunca un sustituto del protocolo: no reemplazan las metas, la corrección supervisada ni el PACE Test. Y una regla transversal que no admite excepciones: la mentora nunca copia ni distribuye material propietario de la editorial, ni promete equivalencias curriculares que no le corresponde decidir.',
        ],
      },
      {
        titulo: 'Supervisar el autoestudio: el rol de la supervisora',
        guion: [
          'El A.C.E. Supervisor Training parte de un principio sencillo: el estudiante trabaja de forma autónoma la mayor parte del tiempo. La supervisora no da clases magistrales frente a la pizarra; supervisa y atiende consultas individuales. El material está diseñado para que el alumno lea las instrucciones, vea los ejemplos y resuelva las actividades por sí mismo. Tu trabajo es proteger esa autonomía, no sustituirla. Cuando un estudiante duda, primero aprende a releer la instrucción y a buscar en la lección antes de pedir ayuda.',
          'Cuando atiendes una consulta, no das la respuesta final: respondes con preguntas de indagación. «¿Qué te pide exactamente la instrucción?», «¿Dónde aparece un ejemplo parecido en la página anterior?», «¿Qué harías primero?». Así el estudiante descubre la respuesta y, sobre todo, aprende a encontrarla la próxima vez. Resolver el ejercicio en su cuaderno ahorra un minuto hoy y crea dependencia para todo el curso.',
          'En el aula auto-instruccional se usa el protocolo de banderas. El estudiante tiene dos banderas en su mesa: la bandera americana o nacional para consultas académicas y la bandera cristiana o colegial para pedir permiso para levantarse. Al levantar la bandera académica, el estudiante no se queda parado: continúa trabajando en otra asignatura mientras espera a la supervisora. Así se mantiene el orden, se evita el tiempo muerto y cada consulta se atiende de forma individual.',
          'En Off-Campus (Homeschool Guiado) el contexto cambia, pero los principios no. El dossier de familias indica que la familia organiza el espacio y el tiempo de estudio y acompaña y supervisa el entorno de trabajo. Tu papel es orientar a la familia para que aplique la misma lógica en casa: que el estudiante intente primero por sí mismo, que el adulto pregunte en lugar de resolver y que la corrección se haga con las reglas que verás en la siguiente lección.',
        ],
      },
      {
        titulo: 'La jornada y la Review Station paso a paso',
        guion: [
          'Una jornada con la vía A.C.E. sigue un orden reconocible. Primero, la Apertura del Día (Opening Exercises). Segundo, el estudiante fija sus metas por materia en el Daily Goal Tracker; una meta bien puesta es específica y verificable, por ejemplo «páginas 12 a 15 del PACE de Math», no «avanzar en mates». Tercero, trabaja con autonomía y resuelve los Checkups. Cuarto, corrige en la Review Station. Al cierre, la supervisora revisa con él si las metas se cumplieron y, si no, por qué.',
          'La Review Station es el punto de corrección supervisada y tiene reglas estrictas. La clave de respuestas nunca está en el escritorio del estudiante ni viaja a él: permanece en la estación, bajo supervisión. El estudiante acude sin bolígrafo ni lápiz propio y usa únicamente el bolígrafo rojo provisto. La corrección se marca en rojo y la aprobación en verde. Estas reglas no son desconfianza: protegen la integridad del proceso, que es tan importante como el resultado.',
          'La regla que más se olvida es esta: corregido no es dominado. Que el estudiante haya marcado y corregido sus errores no significa que domine el contenido. Tras corregir, repasa lo que falló y se prepara para la evaluación. Por eso la secuencia es trabajo, corrección, repaso, Self Test y, solo entonces, PACE Test autorizado por la supervisora. Si alguien pide hacer el PACE Test con Checkups sin corregir o con un Self Test flojo, la respuesta es no, con calma y con el siguiente paso claro.',
          'Las metas incumplidas repetidamente son una señal para conversar, no para castigar: ¿la carga es correcta?, ¿la ubicación fue adecuada?, ¿hay algo en el entorno? El Daily Goal Tracker forma carácter al mismo tiempo que organiza: enseña planificación, honestidad y perseverancia. Si un estudiante falla dos veces la misma evaluación, el problema ya no es solo de esfuerzo: revisa comprensión, método y entorno, y consulta con coordinación.',
        ],
      },
      {
        titulo: 'Del PACE Test al SIS: registrar, vigilar y escalar',
        guion: [
          'Cada PACE Test se registra en el SIS con su fecha real y su resultado. El SIS es el registro oficial: el portal orienta el trabajo, pero calificaciones, PEI, boletines y transcripts viven en el SIS. Una materia puede acumular muchas notas en un trimestre y la nota final es el promedio de las notas aprobadas. Nunca registres una fecha distinta de la real ni completes registros a posteriori para cuadrar un periodo: la integridad académica lo prohíbe.',
          'El SIS genera alertas que funcionan como tu radar. Tres o más semanas sin calificaciones de unidades en una materia disparan una alerta; también el incumplimiento de fechas de Life Skills o de Extensión Local. Una alerta no es una acusación: puede ser el ritmo normal de un PACE largo o el primer síntoma de un bloqueo. El protocolo es revisar el Goal Tracker y el historial, hablar con el estudiante, contactar con la familia si procede, documentar y escalar a coordinación si persiste.',
          'Qué resuelves tú: la revisión diaria de metas, la atención de consultas, el cumplimiento de las reglas de la Review Station, la autorización del PACE Test cuando hay preparación y el refuerzo cuando no se alcanza el 80 %. Qué documentas en el SIS: cada PACE Test con fecha y resultado, las notas de seguimiento y cualquier ajuste de ritmo acordado. Qué escalas a Chanak Central: dos fallos en la misma evaluación sin causa clara, una alerta que persiste, cualquier duda sobre créditos, una petición de cambio de vía y cualquier sospecha sobre la integridad de la corrección.',
          'Recuerda también lo que no te corresponde. No asignas créditos, no prometes que un curso A.C.E. de High School contará automáticamente, no cambias la vía de un estudiante y no rebajas el umbral. En High School, el Scope & Sequence indica para A.C.E. un curso de High School equivalente, siempre sujeto a la frase de reconocimiento que ya conoces. Ante la duda, la instrucción es siempre la misma: documenta y escala.',
        ],
      },
      {
        titulo: 'Dónde está en Drive y errores frecuentes',
        guion: [
          'Abre CHANAK_DOCUMENTOS_2026-2027_FINAL › 03_INSTITUCIONES › Chanak_Curriculos_y_Vias_Academicas.pdf. Lee la diapositiva «Currículo, plataforma y escuela no son lo mismo», después «A.C.E. · Accelerated Christian Education», con su recuadro «Elementos de A.C.E.», y «Cómo se integra un PACE en el recorrido Chanak», que muestra la secuencia diagnóstico, PEI, metas diarias, Self Test, PACE Test y registro SIS. Termina con la tabla «Tres currículos, tres lógicas distintas», fijándote en la columna A.C.E.',
          'Después abre 08_ACADEMIC_POLICIES › Chanak_Curriculum_Approval_Policy.pdf. Lee el recuadro «Estado de adopción»: la política está marcada como INTERNAL · PROPOSED FOR FORMAL ADOPTION y, hasta su adopción, la palabra «Approved» no se usa públicamente. Localiza la tabla «Clasificación vigente para comunicación», donde A.C.E. figura como Reference / Preferred Curriculum Pathway. Por último, en 09_ACADEMIC_FRAMEWORK › Chanak_K12_Scope_and_Sequence_2026-2027.xlsx, abre la hoja «Curriculum Pathways» y revisa la columna A.C.E. para dos grados.',
          'Errores frecuentes. Primero, dar la respuesta en lugar de preguntar: crea dependencia. Segundo, dejar la clave en el escritorio o permitir que el estudiante corrija con su propio bolígrafo. Tercero, confundir corregido con dominado y autorizar el PACE Test sin Self Test sólido. Cuarto, registrar en el SIS días después y con fechas aproximadas. Quinto, decir a una familia que A.C.E. está «alineado con Common Core», que es «acreditado» o que todo lo que haga «cuenta como crédito». Sexto, presentar A.C.E. como la identidad de Chanak en lugar de como una herramienta del sistema.',
        ],
      },
      {
        titulo: 'Ejemplo trabajado: una semana con la vía A.C.E.',
        guion: [
          'Situación: un estudiante de 6.º grado trabaja con la vía A.C.E. en Off-Campus. El lunes revisas en el SIS su avance y ves que lleva dos semanas sin calificaciones en Science, aunque en Math y English avanza bien. Todavía no hay alerta automática, pero la tendencia apunta a ella. Antes de hablar con nadie, revisas su Daily Goal Tracker: en Science las metas son vagas («hacer Science») y aparecen sin marcar casi todos los días.',
          'Hablas con el estudiante y le preguntas, sin juzgar, qué le está costando. Te cuenta que en el PACE actual hay una sección con vocabulario nuevo y que, cuando no entiende, se pasa a Math. Le ayudas con preguntas de indagación a localizar en el PACE dónde se explica ese vocabulario y acordáis metas concretas para tres días. Llamas a la familia y les explicas dos ajustes: la clave se guarda fuera del escritorio y el estudiante corrige solo con el bolígrafo rojo que le dan.',
          'El jueves el estudiante termina los Checkups y la corrección. Te pide hacer ya el PACE Test. Compruebas que ha repasado lo que falló y le indicas que antes haga el Self Test. Lo supera con holgura, autorizas el PACE Test y obtiene un resultado por encima del 80 %. Lo registras en el SIS con la fecha real y añades una nota de seguimiento: «Metas de Science reformuladas; corrección supervisada en casa revisada con la familia».',
          'Qué no hiciste: no le diste las respuestas, no autorizaste el PACE Test sin Self Test, no cambiaste su vía ni prometiste nada sobre créditos. Si el resultado hubiera quedado por debajo del 80 %, habrías aplicado refuerzo y nuevo intento; y si hubiera fallado dos veces, habrías revisado comprensión, método y entorno y lo habrías consultado con coordinación. Este es el estándar que se espera de ti cada semana.',
        ],
      },
    ],
    desglose: {
      video: 0.25,
      lectura: 0.25,
      documentos: [
        { carpeta: '03_INSTITUCIONES', documento: 'Chanak_Curriculos_y_Vias_Academicas.pdf', que: 'Diapositivas «Currículo, plataforma y escuela no son lo mismo», «A.C.E. · Accelerated Christian Education», «Cómo se integra un PACE en el recorrido Chanak» y columna A.C.E. de «Tres currículos, tres lógicas distintas».', horas: 1 },
        { carpeta: '08_ACADEMIC_POLICIES', documento: 'Chanak_Curriculum_Approval_Policy.pdf', que: 'Recuadro «Estado de adopción», «Definiciones», «Criterios de revisión» y tabla «Clasificación vigente para comunicación».', horas: 0.75 },
        { carpeta: '09_ACADEMIC_FRAMEWORK', documento: 'Chanak_K12_Scope_and_Sequence_2026-2027.xlsx', que: 'Hoja «Curriculum Pathways»: columna A.C.E. para dos grados (uno de primaria y uno de High School).', horas: 0.5 },
      ],
      practica: 3,
      evidencia: 0.75,
      kc: 0.5,
    },
  },

  'T3.2': {
    lecciones: [
      {
        titulo: 'Qué son las vías alternativas revisadas',
        guion: [
          'LIFEPAC y Christian Light Education (CLE) tienen en Chanak la etiqueta Reviewed Alternative Curriculum Pathway: vías alternativas revisadas. Comparten con A.C.E. la orientación al dominio, pero no son iguales entre sí ni a A.C.E. Esta es la idea central del módulo: Chanak usa diferentes recursos curriculares dentro de un marco académico orientado al dominio; cada currículo puede utilizar una metodología distinta, y Chanak aplica estándares comunes de diagnóstico, evidencia, evaluación, seguimiento y reconocimiento académico.',
          'Por qué importa para tu trabajo: si supervisas LIFEPAC o CLE «como si fueran A.C.E.», pedirás a la familia rutinas que el material no tiene y dejarás de mirar lo que sí tiene. Lo que se mantiene igual en todas las vías es el marco Chanak: diagnóstico según la vía, PEI, umbral mínimo del 80 % en las evaluaciones de dominio de Chanak, evidencia verificable y registro en el SIS. Lo que cambia es la forma de trabajar del material y, por tanto, lo que tú supervisas en el día a día.',
          'En la Curriculum Approval Policy verás estas dos vías en la tabla «Clasificación vigente para comunicación» con la denominación abreviada «Alternative Reviewed Pathway (vía alternativa revisada)»: es la misma clasificación. Lo importante es que ninguna de las dos se presenta como «Approved» públicamente mientras la política no esté formalmente adoptada, y que la clasificación se hace por versión, nivel, asignatura y secuencia, no por editorial.',
          'Por eso la frase de reconocimiento se aplica también aquí, tal cual: «La inclusión de una editorial o vía curricular no supone reconocimiento automático de todos sus cursos o créditos. Chanak evalúa versión, nivel, asignatura, secuencia, evidencia y compatibilidad con sus requisitos académicos.» Ninguna de las dos editoriales es una escuela; Chanak es la escuela. Que una familia complete worktexts o LightUnits es una buena noticia, pero lo que sostiene un registro académico es el dominio demostrado en evaluaciones con umbral mínimo, con evidencias completas, verificables y coherentes, en la secuencia y el nivel adecuados, y registrado en el SIS.',
        ],
      },
      {
        titulo: 'LIFEPAC: estructura y supervisión paso a paso',
        guion: [
          'LIFEPAC es un currículo cristiano impreso K–12 de Alpha Omega Publications (AOP). Cada asignatura se organiza en 10 worktexts consumibles por curso. AOP lo describe como un currículo self-paced, mastery-based y dirigido por el estudiante: el alumno demuestra su comprensión con self-tests y unit tests antes de avanzar, a su propio ritmo. El core incluye Bible, Language Arts, Math, Science y History & Geography, con optativas como literatura, español o matemáticas del consumidor.',
          'Cada worktext incluye reviews, self-tests y unit tests, y la familia o el docente cuenta con Teacher\'s Guides para corrección y ampliación. Para ubicar al estudiante se usan los Assessment and Placement Tests de AOP. Un dato que debes saber explicar: la propia AOP aclara que LIFEPAC es un currículo y no una escuela, y que no está acreditado, porque la acreditación corresponde a instituciones, no a currículos. Dentro de Chanak, LIFEPAC es la herramienta y Chanak la escuela.',
          'Cómo supervisas LIFEPAC, paso a paso. Uno: confirma en el PEI los worktexts asignados por asignatura. Dos: revisa el avance por worktext según el plan semanal acordado. Tres: comprueba que los self-tests intermedios se hacen sin ayuda y que la corrección es honesta. Cuatro: verifica que el unit test se realiza en condiciones supervisadas. Cinco: registra el resultado en el SIS con fecha real; si no alcanza el 80 %, se refuerza y se vuelve a evaluar. Seis: anota cualquier ajuste de ritmo como nota de seguimiento.',
          'El rol del adulto en LIFEPAC no es el mismo que en A.C.E.: en la comparación de Chanak figura como «padre o docente con Teacher\'s Guide», mientras que en A.C.E. es un supervisor que autoriza la prueba. Esto significa que, con LIFEPAC, parte de tu trabajo es orientar a la familia en el uso de la guía del docente y en la custodia de las respuestas, para que la corrección siga siendo fiable.',
          'En tu revisión semanal de un estudiante LIFEPAC, mira tres cosas en el SIS y en las evidencias que te envía la familia: si el avance por worktext coincide con lo previsto en el PEI, si hay unit tests registrados con fecha real y si los resultados alcanzan el 80 %. Si una asignatura lleva semanas sin registros, aplica el mismo protocolo que con cualquier alerta: revisa, habla con el estudiante, contacta con la familia si procede, documenta y escala si persiste.',
        ],
      },
      {
        titulo: 'Christian Light Education: estructura y supervisión paso a paso',
        guion: [
          'CLE organiza la mayoría de sus cursos en LightUnits: cuadernos que reúnen el texto de la lección, ejercicios, quizzes y test. Muchos cursos tienen 10 LightUnits por año, aunque hay excepciones según grado y materia. Su metodología no es idéntica a la de A.C.E.: en la Sunrise Edition, los nuevos conceptos se enseñan mediante aprendizaje incremental y repaso continuo, con lecciones diarias. CLE dispone de Teacher\'s Guides, Answer Keys, Diagnostic Tests de Language Arts y Math y un Scope & Sequence publicado para K–8 y 9–12.',
          'No todos los cursos de CLE son homogéneos, y esto tiene consecuencias prácticas. La Sunrise Edition es desarrollo propio de Christian Light, mientras que la mayoría de los cursos anteriores derivan de material revisado de Alpha Omega. En High School hay cursos por LightUnits y otros basados en libro de texto. Por eso el Scope & Sequence de Chanak indica, para CLE en High School, «verificar edición (Sunrise o anterior; LightUnit o libro)». Antes de planificar, confirma qué edición tiene realmente la familia.',
          'Cómo supervisas CLE, paso a paso. Uno: confirma la edición y el formato de cada curso. Dos: revisa que el estudiante siga las lecciones diarias en orden, porque el repaso continuo forma parte del método: saltarse lecciones rompe la lógica incremental. Tres: comprueba quizzes y tests por LightUnit. Cuatro: verifica la corrección con la Answer Key bajo custodia del adulto. Cinco: registra en el SIS los resultados con fecha real y aplica el umbral del 80 % de las evaluaciones de dominio de Chanak. Seis: documenta los ajustes.',
          'Un matiz que evita conflictos: el trabajo independiente en CLE se describe como «creciente, con lecciones diarias», no como un autoestudio idéntico al de A.C.E. No exijas a una familia CLE metas diarias al estilo A.C.E. o una Review Station con banderas como condición para avanzar: exige lo que el marco Chanak exige a todas las vías, que es dominio demostrado, evidencia verificable y registro.',
        ],
      },
      {
        titulo: 'Comparar sin jerarquizar',
        guion: [
          'La tabla «Tres currículos, tres lógicas distintas» del dossier de Currículos resume las diferencias. Formato: PACEs en A.C.E., worktexts en LIFEPAC, LightUnits (y algunos libros) en CLE. Progresión: dominio individual por PACE; self-paced y mastery-based; incremental con repaso continuo. Diagnóstico: Diagnostic Test online; Assessment and Placement Tests; Diagnostic Tests de Language Arts y Math. Evaluaciones internas: Checkups, Self Test y PACE Test; self-tests y unit tests; quizzes y tests por LightUnit.',
          'La misma tabla describe la evidencia disponible en cada vía: resultados de PACE Test y registros en A.C.E.; resultados de unit tests y worktexts en LIFEPAC; quizzes, tests y LightUnits completadas en CLE. Esa fila es la que más te interesa como mentor, porque te dice qué tienes que poder ver y registrar. Si la evidencia no existe o no es verificable, no hay base para un registro de dominio, sea cual sea el material.',
          'El lema del dossier es claro: no hay un ganador. Chanak elige la ruta adecuada según el estudiante, su nivel, idioma, programa, país, evidencia y objetivo académico. Cuando una familia te pregunte «cuál es mejor», no hagas ranking de editoriales. Explica las diferencias con hechos, remite al diagnóstico y recuerda que la elección de vía se trabaja en el PEI y, si hay cambio, se escala. El módulo T3.3 profundiza en esa decisión.',
          'Un ejercicio útil para tu práctica: prepara una explicación de dos minutos de las diferencias entre LIFEPAC y CLE para una familia nueva con un hijo de 10 años. Estructúrala en cuatro frases: qué formato tiene cada material, cómo progresa el estudiante, qué evaluaciones internas incluye y qué papel tiene el adulto. Cierra siempre con lo común (diagnóstico de su vía, umbral del 80 % en las evaluaciones de dominio de Chanak, evidencia y SIS) y sin recomendar tú la decisión final, que corresponde a la familia con el diagnóstico delante.',
        ],
      },
      {
        titulo: 'Dónde está en Drive',
        guion: [
          'Abre CHANAK_DOCUMENTOS_2026-2027_FINAL › 03_INSTITUCIONES › Chanak_Curriculos_y_Vias_Academicas.pdf. Lee las diapositivas «LIFEPAC · Alpha Omega Publications» y «Christian Light Education · LightUnits», incluidos sus recuadros laterales «Elementos de LIFEPAC» y «Elementos de CLE». Después estudia la tabla «Tres currículos, tres lógicas distintas» fila por fila, comparando las tres columnas. Termina con la diapositiva de «Estados de una vía curricular». Mientras lees, anota en una hoja dos columnas, «lo que cambia» y «lo que se mantiene», y rellénalas para cada vía: te servirá como guion cuando una familia te pida explicar las diferencias.',
          'En 08_ACADEMIC_POLICIES › Chanak_Curriculum_Approval_Policy.pdf, localiza «Categorías internas» (Approved Curriculum Pathway, Conditionally Approved, Requires Individual Review) y la tabla «Clasificación vigente para comunicación». Fíjate en la columna «Uso público»: una categoría «Conditionally Approved» no se publica como «Approved» y «Requires Individual Review» no se publica como vía. Lee también el párrafo que sigue a la tabla de clasificación: la inclusión de una editorial en una lista no significa que todos sus cursos generen créditos automáticamente. Es la base de lo que contestarás cuando una familia te diga que «LIFEPAC está en la lista».',
          'Por último, en 09_ACADEMIC_FRAMEWORK › Chanak_K12_Scope_and_Sequence_2026-2027.xlsx, abre la hoja «Curriculum Pathways» y compara las columnas LIFEPAC y CLE para un grado de primaria y otro de High School; observa las anotaciones «verificar curso específico» (LIFEPAC) y «verificar edición» (CLE). En la hoja «HS Courses», la columna «Curriculum pathway» te muestra qué cursos de High School admiten estas vías. Recuerda que la nota de esa hoja la presenta como correspondencia orientativa: sirve para planificar, no para prometer equivalencias.',
        ],
      },
      {
        titulo: 'Errores frecuentes y qué escalar',
        guion: [
          'Errores frecuentes. Uno: decir que CLE o LIFEPAC «son lo mismo que A.C.E.». Dos: aplicar reglas de A.C.E. que el material no contempla e ignorar su propia estructura de pruebas. Tres: no verificar la edición de CLE ni el curso concreto de LIFEPAC en High School. Cuatro: afirmar que LIFEPAC está «acreditado» o que una editorial «da créditos». Cinco: permitir que la Answer Key o la Teacher\'s Guide esté al alcance del estudiante durante la autoevaluación. Seis: registrar avances sin evidencia verificable.',
          'Qué resuelves tú: orientar a la familia en el uso de la guía del docente, revisar el avance por worktext o LightUnit, comprobar la corrección y aplicar refuerzo cuando no se alcanza el 80 %. Qué documentas en el SIS: resultados de unit tests o tests por LightUnit con fecha real, notas de seguimiento y ajustes de ritmo. Qué escalas a Chanak Central: dudas sobre la edición o el curso concreto, cualquier pregunta sobre créditos de High School, discrepancias entre lo completado y lo demostrado, y cualquier solicitud de cambio de vía.',
          'Ten presente que la regla de no duplicación también afecta a estas vías: cada estudiante hace la prueba de ubicación de su vía, no una batería de pruebas de todas las editoriales. Si una familia llega con resultados de otra prueba, documenta lo que aporta y consulta con coordinación antes de pedir nada nuevo. Y si detectas que el estudiante está ubicado en un worktext o una LightUnit que no corresponde a su dominio real, no lo muevas por tu cuenta: anótalo y llévalo a coordinación para revisar el PEI.',
        ],
      },
      {
        titulo: 'Ejemplo trabajado: una familia CLE que pide «las reglas de A.C.E.»',
        guion: [
          'Situación: la familia de un estudiante de 4.º grado usa CLE y te escribe: «Nos han dicho que es lo mismo que A.C.E.; aplícanos sus reglas y ponle un PACE Test cada semana». Antes de responder, revisas el PEI: la vía registrada es CLE, con LightUnits de Math y Language Arts. Compruebas además qué edición usan y confirmas que es la Sunrise Edition.',
          'En la conversación explicas tres diferencias con hechos del dossier. Primero, CLE trabaja con lecciones diarias, aprendizaje incremental y repaso continuo, de modo que el orden de las lecciones importa. Segundo, sus evaluaciones son quizzes y tests por LightUnit, no PACE Tests. Tercero, el adulto usa la Teacher\'s Guide y la Answer Key, que deben guardarse fuera del alcance del estudiante. Luego explicas lo que sí es igual: el umbral del 80 % en las evaluaciones de dominio de Chanak, la evidencia y el registro en el SIS.',
          'La familia pregunta si todo lo que haga con CLE «contará como crédito». Respondes con la frase de reconocimiento tal cual y añades que Chanak evalúa por evidencia y que no hay conversión automática de unidades en créditos. Registras en el SIS una nota de seguimiento con lo acordado. No cambias la vía ni introduces pruebas ajenas al material. Si la familia insistiera en cambiar a A.C.E., documentarías la petición y la escalarías, como verás en T3.3.',
        ],
      },
    ],
    desglose: {
      video: 0.25,
      lectura: 0.25,
      documentos: [
        { carpeta: '03_INSTITUCIONES', documento: 'Chanak_Curriculos_y_Vias_Academicas.pdf', que: 'Diapositivas «LIFEPAC · Alpha Omega Publications», «Christian Light Education · LightUnits», tabla «Tres currículos, tres lógicas distintas» y «Estados de una vía curricular».', horas: 1 },
        { carpeta: '08_ACADEMIC_POLICIES', documento: 'Chanak_Curriculum_Approval_Policy.pdf', que: '«Categorías internas» (columna «Uso público») y «Clasificación vigente para comunicación».', horas: 0.5 },
        { carpeta: '09_ACADEMIC_FRAMEWORK', documento: 'Chanak_K12_Scope_and_Sequence_2026-2027.xlsx', que: 'Hoja «Curriculum Pathways» (columnas LIFEPAC y CLE) y columna «Curriculum pathway» de la hoja «HS Courses».', horas: 0.75 },
      ],
      practica: 2.25,
      evidencia: 0.5,
      kc: 0.5,
    },
  },

  'T3.3': {
    lecciones: [
      {
        titulo: 'Qué es Chanak Flex y qué no es',
        guion: [
          'Chanak Flex es una Individualized Reviewed Curriculum Pathway: una vía individualizada revisada. Permite trabajar con materiales propios o alternativos, siempre que se aprueben formalmente en el PEI del estudiante. El año se organiza en unidades de aprendizaje con metas de avance, y el estudiante demuestra dominio en evaluaciones institucionales supervisadas por Chanak. La calificación aprobada, con un mínimo del 80 %, se registra en el SIS.',
          'Flex no significa «cualquier material». Cada recurso se aprueba, se vincula a competencias del Scope & Sequence y se evalúa con evidencia. La idea que debes transmitir es la de libertad de material con validación institucional: la familia propone el camino y Chanak garantiza el dominio. El dossier de Currículos lo resume con una fórmula que conviene repetir: uso de material no equivale a reconocimiento automático de crédito.',
          'En el Scope & Sequence de Chanak, la columna Chanak Flex de la hoja «Curriculum Pathways» dice lo mismo para todos los grados y asignaturas: «Material aprobado en el PEI + evaluación supervisada Chanak (≥80 %)». Algunos cursos de High School, como Health & Physical Education, Fine / Performing Arts o Christian Worldview & Apologetics, figuran en la hoja «HS Courses» con la vía Flex. Eso no cambia la regla: material aprobado, evaluación supervisada y registro.',
          'La frase de reconocimiento también rige aquí, tal cual: «La inclusión de una editorial o vía curricular no supone reconocimiento automático de todos sus cursos o créditos. Chanak evalúa versión, nivel, asignatura, secuencia, evidencia y compatibilidad con sus requisitos académicos.» En Flex esta frase pesa todavía más, porque el material no viene de una editorial ya revisada: cada recurso entra en el plan del estudiante después de que Chanak lo apruebe en el PEI, y lo que cuenta académicamente es el dominio demostrado en las evaluaciones institucionales.',
          'Cómo es el día a día de un estudiante Flex, paso a paso. Uno: el PEI fija los materiales aprobados y las unidades de aprendizaje del año. Dos: cada unidad tiene metas de avance que el estudiante trabaja con el apoyo de la familia. Tres: tú revisas el avance y las evidencias que se generan (trabajos, muestras, pruebas del propio material). Cuatro: cuando la unidad está preparada, el estudiante realiza la evaluación institucional supervisada por Chanak. Cinco: si alcanza el 80 %, la calificación se registra en el SIS; si no, se refuerza y se vuelve a evaluar.',
        ],
      },
      {
        titulo: 'Qué debe cumplir un material',
        guion: [
          'El dossier de Currículos fija cuatro condiciones para cualquier material de Chanak Flex. Debe ser evaluable, es decir, permitir medir el dominio. Debe ser documentable, porque deja registros claros. Debe ser auditable, porque Chanak puede revisarlo. Y debe ser académicamente suficiente para el nivel y los créditos. Si falta cualquiera de las cuatro, el material puede servir como apoyo, pero no sostiene por sí solo un registro académico.',
          'Detrás de esas condiciones están los ocho criterios de revisión de la Curriculum Approval Policy, que Chanak aplica a cualquier currículo: alineación académica con el Core USA; secuencia ordenada por niveles y cursos; nivel adecuado al grado y a los créditos; método de evaluación que mida dominio; evidencia verificable del trabajo del estudiante; capacidad de auditoría por parte de Chanak; compatibilidad con el PEI; y posibilidad de registrar progreso verificable en el SIS.',
          'Tú no decides si un material cumple los criterios, pero sí preparas la información para que Chanak pueda decidir. La política enumera la documentación que se pide en una revisión: scope & sequence del material, muestras de materiales, evaluaciones internas, claves de respuesta y edición. Reunir eso de forma ordenada ahorra semanas y evita que la familia empiece a trabajar con un recurso que luego no se puede validar.',
          'El dossier de Currículos recuerda también cómo se demuestra el aprendizaje en cualquier vía: evaluaciones (pruebas de unidad del currículo y evaluaciones supervisadas por Chanak), trabajos que muestran el proceso del estudiante, portafolio organizado por asignatura y periodo, notas y registros con fechas reales, entrevista académica cuando la evidencia lo requiere y, cuando procede, pruebas estandarizadas como evidencia adicional, nunca como única fuente. Al revisar un material para Flex, pregúntate qué evidencias de esta lista podrá producir de forma natural.',
        ],
      },
      {
        titulo: 'Cómo se elige la vía curricular',
        guion: [
          'La vía se elige a partir del diagnóstico, el PEI, la edad, el idioma, las necesidades del estudiante y el contexto familiar. El dossier de Currículos añade el programa, el país, la evidencia y el objetivo académico. No hay un ganador entre A.C.E., LIFEPAC, CLE y Chanak Flex: cada vía tiene su lógica y lo que se busca es la ruta adecuada para ese estudiante concreto.',
          'Un procedimiento práctico para la conversación con la familia. Uno: escucha qué busca la familia y qué ha usado antes. Dos: explica las diferencias entre vías con hechos (formato, progresión, evaluaciones, rol del adulto, evidencia). Tres: confirma la vía antes del diagnóstico, porque el principio de no duplicación exige que el estudiante haga solo la prueba de ubicación de su vía. Cuatro: con el diagnóstico delante, preparas la propuesta de PEI. Cinco: la vía queda registrada en el SIS.',
          'Respeta la autoridad de la familia. El contenido antiguo de formación lo expresaba así: ante una familia que duda entre dos vías, explicas las diferencias sin decidir tú, porque la decisión corresponde a la familia con el diagnóstico delante. Tu papel es orientar con datos y evidencia. Y recuerda una regla institucional: los programas estatales de financiación no deciden el currículo. Que una familia acceda a un programa estatal no cambia los criterios académicos con los que Chanak revisa una vía.',
        ],
      },
      {
        titulo: 'Cambiar de vía o revisar un currículo nuevo',
        guion: [
          'Un cambio de vía es una decisión académica. El mentor documenta la petición y los motivos y la escala; Chanak la aprueba o la deniega y define cómo se reconoce lo ya realizado. Lo mismo ocurre cuando una familia o un centro propone un currículo que Chanak no ha revisado: no lo aceptas tú, lo canalizas. Nunca cambies la vía de un estudiante de palabra ni le permitas empezar con el nuevo material antes de la resolución.',
          'La Curriculum Approval Policy describe el procedimiento de revisión en seis pasos. Primero, solicitud de revisión, que puede venir de la familia, la mentora o el centro. Segundo, documentación: scope & sequence, muestras de materiales, evaluaciones internas, claves de respuesta y edición. Tercero, revisión académica con los criterios de la política. Cuarto, resolución escrita con la categoría asignada y sus condiciones. Quinto, registro de la resolución y de la versión revisada. Sexto, revisión anual de la clasificación.',
          'Las categorías internas posibles son tres: Approved Curriculum Pathway, solo tras revisión formal y adopción; Conditionally Approved, aceptada con requisitos adicionales de evidencia, secuencia o evaluación; y Requires Individual Review, que se analiza estudiante por estudiante o centro por centro. Ojo con el SIS: su módulo «Currículo y Diagnóstico» registra la vía de cada estudiante con los estados Pendiente, Enviado por la familia, En revisión, Aprobado o Requiere ajuste. Ese «Aprobado» se refiere al plan del estudiante, no a la clasificación pública de un currículo.',
          'Qué pasa con lo ya realizado cuando hay un cambio. La Credit Recognition Policy es clara: los créditos se reconocen por evidencia verificable y dominio demostrado; no hay conversión automática de módulos, PACEs, unidades o asignaturas en créditos; y cada resolución se comunica por escrito y se registra en el SIS. Por eso, al escalar un cambio, adjunta el avance y las evidencias registradas hasta la fecha: es lo que Chanak necesitará para decidir.',
          'Si trabajas con centros, la misma lógica se aplica en la certificación institucional. La Academic Certification Policy distingue la Vía A, para centros con un currículo que Chanak ha evaluado formalmente (por ejemplo A.C.E., LIFEPAC o Christian Light Education), donde normalmente no hará falta una prueba estandarizada adicional cuando las evidencias son completas, verificables y coherentes; y la Vía B, para currículo propio, mixto, local, plataforma externa o materiales no auditados, donde Chanak exige una revisión reforzada antes de reconocer créditos. Un coordinador no clasifica un centro por su cuenta: reúne la documentación y escala.',
        ],
      },
      {
        titulo: 'Dónde está en Drive',
        guion: [
          'Abre CHANAK_DOCUMENTOS_2026-2027_FINAL › 03_INSTITUCIONES › Chanak_Curriculos_y_Vias_Academicas.pdf. Lee «Chanak Flex y otros materiales» con su recuadro «Un material debe ser», «Cómo evalúa Chanak una vía curricular» (los ocho criterios), «Cómo se demuestra el aprendizaje», la comparación «Chanak reconoce créditos por evidencia y dominio demostrado», «Estados de una vía curricular» y, si trabajas con centros, «Certificación institucional: Vía A y Vía B».',
          'En 08_ACADEMIC_POLICIES › Chanak_Curriculum_Approval_Policy.pdf, lee «Procedimiento de revisión» y «Relación con los sistemas»; es la base de cualquier nota de escalado sobre vías. En 08_ACADEMIC_POLICIES › Chanak_Credit_Recognition_Policy.pdf, lee «Principios» y «Fuentes de crédito», para saber qué decir cuando una familia pregunte qué pasa con lo que ya ha hecho. Si te llega el caso de un centro con currículo propio, consulta además Chanak_Academic_Certification_Policy.pdf, apartado «Vía B · Currículo no revisado previamente».',
        ],
      },
      {
        titulo: 'Errores frecuentes y qué escalar',
        guion: [
          'Errores frecuentes. Uno: presentar Flex como «estudia con lo que quieras». Dos: dejar que el estudiante empiece con un material no aprobado en el PEI «mientras se revisa». Tres: decir que un currículo está «aprobado» cuando solo hay un plan de estudiante aprobado en el SIS. Cuatro: cambiar de vía de palabra, sin documentar motivos ni avance. Cinco: prometer que lo hecho con la vía anterior «se convalida». Seis: dejar que la existencia de un programa estatal de financiación condicione la elección de currículo.',
          'Qué resuelves tú: informar a la familia de las vías y de sus diferencias, reunir la documentación de un material propuesto y comprobar que el estudiante trabaja con lo que está aprobado en su PEI. Qué documentas en el SIS: la petición, los motivos, el avance y las evidencias hasta la fecha, y después la decisión final con su fecha. Qué escalas a Chanak Central: toda solicitud de cambio de vía, toda propuesta de material nuevo para Flex, cualquier pregunta sobre cómo se reconocerá lo ya realizado y cualquier caso de centro con currículo no revisado.',
          'Una nota de escalado útil tiene siempre la misma estructura y cabe en una página. Identificación del caso con el ID del estudiante, nunca con datos personales. Qué se pide y quién lo pide. Motivos expresados por la familia o el centro. Situación académica actual: vía, avance, resultados y evidencias registradas en el SIS. Tus observaciones y, si las hay, tus hipótesis. Documentación adjunta del material propuesto. Y una pregunta concreta para Chanak Central. Con esa estructura, la decisión se toma antes y se puede auditar después.',
        ],
      },
      {
        titulo: 'Ejemplo trabajado: una petición de cambio a Chanak Flex',
        guion: [
          'Situación: a mitad de curso, la familia de un estudiante de 8.º grado que trabaja con la vía A.C.E. pide pasar a Chanak Flex para Science, porque ha encontrado un material que le motiva más. Antes de responder revisas el SIS: el estudiante avanza con regularidad en el resto de materias, pero en Science acumula dos intentos por debajo del 80 % en el mismo PACE Test.',
          'En la conversación escuchas a la familia y explicas qué es Flex: material aprobado en el PEI, unidades con metas de avance y evaluaciones supervisadas por Chanak con mínimo del 80 %. Les explicas que el material debe ser evaluable, documentable, auditable y suficiente, y les pides lo que la política exige para revisarlo: scope & sequence, muestras, evaluaciones internas, claves de respuesta y edición. Dejas claro que, hasta la resolución, el estudiante sigue con su vía actual.',
          'Como hay dos fallos seguidos, revisas también comprensión, método y entorno: quizá el problema no sea el material. Redactas la nota de escalado con los motivos de la familia, el avance y las evidencias registradas, los dos resultados, tus hipótesis y la documentación del material. Registras la petición en el SIS. Chanak resuelve por escrito si aprueba el cambio, con qué condiciones y cómo se reconoce lo ya realizado; tú registras la decisión final y la comunicas a la familia.',
          'Fíjate en lo que no hiciste. No dijiste «sí» en la llamada para mantener contenta a la familia. No dejaste que el estudiante empezara con el material nuevo antes de la resolución. No prometiste que el trabajo hecho con A.C.E. en Science se convalidaría. No presentaste Flex como una salida fácil a un problema de rendimiento sin revisar antes las causas. Y no usaste en la nota ningún dato personal del estudiante. Así se protege a la vez la autoridad de la familia, la integridad del expediente y el estándar académico.',
        ],
      },
    ],
    desglose: {
      video: 0.25,
      lectura: 0.25,
      documentos: [
        { carpeta: '03_INSTITUCIONES', documento: 'Chanak_Curriculos_y_Vias_Academicas.pdf', que: '«Chanak Flex y otros materiales», «Cómo evalúa Chanak una vía curricular», «Cómo se demuestra el aprendizaje», comparación de reconocimiento de créditos, «Estados de una vía curricular» y «Certificación institucional: Vía A y Vía B».', horas: 1 },
        { carpeta: '08_ACADEMIC_POLICIES', documento: 'Chanak_Curriculum_Approval_Policy.pdf', que: '«Criterios de revisión», «Categorías internas», «Procedimiento de revisión» y «Relación con los sistemas».', horas: 0.75 },
        { carpeta: '08_ACADEMIC_POLICIES', documento: 'Chanak_Credit_Recognition_Policy.pdf', que: '«Principios» y «Fuentes de crédito»: qué ocurre con lo ya realizado al cambiar de vía.', horas: 0.5 },
      ],
      practica: 2,
      evidencia: 0.75,
      kc: 0.5,
    },
  },

  'T3.4': {
    lecciones: [
      {
        titulo: 'Qué es el diagnóstico y por qué importa',
        guion: [
          'El diagnóstico y el PEI son el punto de partida de todo estudiante. El diagnóstico mide el nivel real y las lagunas por materia; no es un examen de aprobado o suspenso. El dossier de Off-Campus lo dice con una frase que puedes usar con las familias: el diagnóstico no aprueba ni suspende, sirve para conocer el punto de partida y detectar lagunas. Responde a una pregunta: dónde está realmente el estudiante en cada materia, no dónde «debería» estar por edad.',
          'Un buen diagnóstico y un buen PEI evitan frustración, lagunas y cambios innecesarios. La ubicación honesta es el primer acto de justicia académica: empezar donde hay dominio real permite avanzar con seguridad. Empezar demasiado alto genera fallos repetidos en las evaluaciones de dominio; empezar demasiado bajo desmotiva. En ambos casos, el coste lo paga el estudiante durante meses. Por eso dedicar tiempo a leer bien el diagnóstico y a construir el PEI con cuidado no es burocracia: es la inversión que más trabajo te ahorra durante el resto del curso.',
          'En el recorrido de admisión que describe el dossier de Off-Campus, el diagnóstico es el segundo de seis pasos: admisión, diagnóstico, PEI, plan académico, inicio (alta en el SIS y acceso al portal de apoyo) y seguimiento. Que el diagnóstico vaya antes del PEI no es un detalle: sin datos de partida no hay plan, solo suposiciones. Y el diagnóstico tampoco se improvisa al margen del SIS: forma parte del expediente académico, el registro acumulado del recorrido del estudiante que incluye PEI, cursos, evaluaciones y evidencias.',
          'Para la familia, este punto de partida es también la base de todo lo que verá después. Según el dossier de Off-Campus, la familia sabe si su hijo avanza por las metas cumplidas, las evaluaciones de dominio registradas en el SIS y los Report Cards de cada trimestre. Si el PEI está bien construido, cada Report Card se podrá leer en relación con un plan que la familia conoce desde el principio, y las conversaciones de seguimiento serán más sencillas y más honestas.',
        ],
      },
      {
        titulo: 'Una prueba por vía: el principio de no duplicación',
        guion: [
          'En Chanak no se aplican pruebas duplicadas. Primero se confirma la vía curricular y después el estudiante realiza solo la prueba de ubicación que corresponde. Según la vía, es el A.C.E. Diagnostic Test online, los Assessment and Placement Tests de LIFEPAC, los Diagnostic Tests de Christian Light (Language Arts y Math) o una evaluación institucional de Chanak Flex. La mentora revisa los resultados con la familia.',
          'Paso a paso. Uno: confirma en el SIS que la vía está registrada. Dos: indica a la familia la prueba de ubicación de esa vía y cómo se realiza. Tres: recibe los resultados. Cuatro: revísalos tú primero, con calma, antes de hablar con la familia. Cinco: interpreta con coordinación académica cualquier resultado dudoso; la decisión final de ubicación es institucional, no unilateral. Seis: comunica el resultado a la familia y prepara la propuesta de PEI.',
          'Si una familia llega con resultados de una prueba anterior o de otra editorial, no pidas automáticamente una batería nueva. Documenta lo que aporta y consulta con coordinación qué prueba falta realmente. El objetivo es una sola ubicación fiable, no acumular exámenes. Esto también protege al estudiante: una batería de pruebas al llegar transmite la idea de que la escuela empieza examinando, cuando lo que queremos transmitir es que empieza conociéndole.',
        ],
      },
      {
        titulo: 'Leer el diagnóstico y comunicarlo',
        guion: [
          'Cuando lees un diagnóstico, busca patrones: lagunas de prerrequisitos, nivel de lectura, inglés, ritmo y autonomía. Es normal y frecuente que un estudiante quede ubicado en niveles distintos por materia, por ejemplo en un nivel en matemáticas y en otro inferior en inglés. Eso no es un error de la prueba: refleja dominio real por materia. En A.C.E., el diagnóstico detecta además lagunas concretas que se refuerzan con gap PACEs.',
          'Pregúntate tres cosas por cada materia. ¿Dónde empieza el dominio sólido? ¿Qué prerrequisito falta y bloqueará lo siguiente si no se atiende? ¿El resultado puede estar afectado por el idioma de la prueba más que por el contenido? Esta última es clave en estudiantes cuya lengua principal no es el inglés: un nivel bajo en Science puede ser, en parte, un problema de lectura en inglés. Si tienes la duda, anótala y consúltala con coordinación.',
          'La conversación con la familia es delicada. Comunica el resultado con lenguaje claro y sin etiquetas: «ubicación» no es «retraso». Explica que el plan estadounidense por dominio no funciona con cursos rígidos y que empezar donde hay dominio es la forma más rápida de avanzar de verdad. Muestra el siguiente paso: qué se va a reforzar primero y cuándo se revisará. Nunca compares al estudiante con hermanos u otros alumnos.',
        ],
      },
      {
        titulo: 'Construir el PEI',
        guion: [
          'El PEI, Plan Educativo Individualizado, convierte el diagnóstico en un plan concreto. Fija el punto de partida por materia, la vía curricular, las metas del periodo, el ritmo semanal, el equilibrio 60/20/20, las evidencias esperadas y la fecha de revisión. El dossier de Off-Campus añade las lagunas que conviene reforzar primero, los materiales del curso, las metas por trimestre, la carga de trabajo recomendada según la edad y los ajustes cuando el seguimiento lo indique.',
          'El PEI no es solo el core. Integra el 60 % Core USA (Inglés, Matemáticas, Ciencias, Estudios Sociales y Biblia con estándares estadounidenses), el 20 % Extensión Local (lengua, historia, geografía y cultura del país de residencia, además de educación física y artística) y el 20 % Life Skills & Leadership (carácter, hábitos, vocación, liderazgo y proyecto de vida con cosmovisión bíblica). El 80 % es un umbral de dominio, no una parte del currículo.',
          'Quién hace qué. La mentora prepara la propuesta con el diagnóstico; coordinación académica la valida; la familia la conoce y la firma; el SIS la registra. En el SIS, el plan pasa por los estados Pendiente, Enviado por la familia, En revisión, Aprobado o Requiere ajuste. No se inicia la rutina académica sin matrícula registrada y PEI validado, porque sin ellos no hay expediente donde volcar la evidencia del trimestre.',
          'Un PEI bien escrito se puede comprobar. Las metas son concretas y medibles; cada laguna tiene una acción y un plazo; cada materia indica qué evidencia se espera; la fecha de revisión está escrita. Para comprobar la coherencia con el nivel, consulta el Scope & Sequence: para cada grado y área indica competencias, secuencia y evidencia esperada. Si el PEI pide una evidencia que el Scope & Sequence no contempla para ese nivel, o ignora una que sí contempla, revísalo antes de enviarlo.',
          'Para el 20 % de Life Skills & Leadership, ubica al estudiante en su etapa. El dossier de Off-Campus y el resto de la documentación oficial las nombran así: Juniors (8–13 años), Seedling (14), Explorer (15), Builder (16) y Launch (17). En el PEI basta con indicar la etapa, las actividades semanales previstas y cómo se recogerán sus evidencias, que se registran junto con el resto del recorrido del estudiante. Para la Extensión Local, indica qué contenidos de lengua, historia y cultura del país de residencia se integran en la semana.',
        ],
      },
      {
        titulo: 'Paso a paso en el SIS demo',
        guion: [
          'En formación trabajas solo en el SIS demo. Usa exclusivamente las cuentas de demostración que aparecen en Recursos y nunca introduzcas datos reales de estudiantes ni de familias. Los casos de práctica están anonimizados con IDs. Si con la cuenta demo una función no está disponible, describe en tu evidencia el paso que darías y qué registrarías. La práctica en el SIS demo no es un trámite: es el lugar donde te equivocas sin consecuencias para nadie, de modo que aprovecha para probar, revisar y volver a revisar antes de trabajar con expedientes reales.',
          'Secuencia de práctica. Uno: entra en sis.chanakacademy.org con la cuenta demo. Dos: localiza el estudiante de demostración y abre su expediente. Tres: en el módulo «Currículo y Diagnóstico», comprueba qué vía tiene registrada y en qué estado está su plan (Pendiente, Enviado por la familia, En revisión, Aprobado o Requiere ajuste). Cuatro: revisa el diagnóstico registrado y anota, por materia, el punto de partida y las lagunas. Cinco: revisa el PEI y compara cada elemento con la lista de la lección anterior.',
          'Continúa. Seis: identifica qué falta o qué no es coherente con el diagnóstico, por ejemplo una laguna sin acción o una materia sin fecha de revisión. Siete: redacta tu propuesta de PEI simulado para el caso práctico del módulo, con todos sus elementos. Ocho: escribe la nota de seguimiento que acompañaría el envío a coordinación. Recuerda la regla institucional: el portal orienta el trabajo; el SIS es el canal oficial para calificaciones, PEI, boletines, transcripts y documentos.',
        ],
      },
      {
        titulo: 'Un PEI vivo: revisar, cambiar, escalar',
        guion: [
          'El PEI es un documento vivo: se revisa cuando los datos lo justifican. Son motivos de revisión las alertas del SIS, las evaluaciones falladas, los cambios familiares o una ubicación que, en las primeras semanas, resulta demasiado alta o demasiado baja. Nunca modifiques un PEI de palabra: todo cambio pasa por coordinación y queda registrado. Si una familia pide subir de nivel una materia «para no quedar atrás», el cambio solo procede con evidencia de dominio y validación de coordinación.',
          'Cuando propongas una revisión, sigue el mismo orden que al crear el plan. Reúne los datos que la justifican: resultados registrados, metas cumplidas o incumplidas, observaciones de la familia. Indica qué elemento del PEI cambiaría (punto de partida, ritmo, metas, vía) y por qué. Envíalo a coordinación como propuesta, no como decisión. Cuando se valide, registra la nueva versión en el SIS con su fecha y comunícala a la familia por escrito. Así cualquier persona que abra el expediente entiende qué cambió, cuándo y con qué evidencia.',
          'Dónde está en Drive. Abre CHANAK_DOCUMENTOS_2026-2027_FINAL › 02_FAMILIAS › Chanak_Off-Campus_Homeschool_Guiado.pdf y lee «Así comienza un estudiante», «Diagnóstico académico + PEI» con su recuadro «Qué define el PEI», «Mastery Learning + modelo 60 / 20 / 20» y «Mentoría, SIS y portal». En 03_INSTITUCIONES › Chanak_Curriculos_y_Vias_Academicas.pdf, lee la fila «Diagnóstico» de la tabla comparativa y «Dos caminos para empezar». En 09_ACADEMIC_FRAMEWORK › Chanak_K12_Scope_and_Sequence_2026-2027.pdf, localiza el grado de tu caso práctico.',
          'Errores frecuentes: tratar el diagnóstico como un examen; pedir pruebas de varias vías; ubicar por edad en lugar de por dominio; un PEI sin fecha de revisión o sin evidencias esperadas; olvidar el 20 % local y el 20 % Life Skills; usar datos reales en formación. Qué resuelves tú: la propuesta de PEI y la comunicación con la familia. Qué documentas: diagnóstico, PEI y cada revisión en el SIS. Qué escalas: resultados dudosos, ubicaciones discutidas, cambios de PEI con impacto académico y cualquier cambio de vía.',
        ],
      },
      {
        titulo: 'Ejemplo trabajado: del diagnóstico al PEI',
        guion: [
          'Situación: un estudiante de 7.º grado se incorpora a Off-Campus con la vía A.C.E. ya registrada. Realiza solo el A.C.E. Diagnostic Test. El resultado lo ubica a su nivel en English y Science, un nivel por debajo en Math, con una laguna concreta en operaciones con fracciones, y muestra que su lectura en inglés es fluida. Lo revisas primero tú y consultas con coordinación la ubicación en Math antes de hablar con la familia.',
          'En la reunión explicas que no hay suspenso ni retraso: hay un punto de partida distinto por materia. Propones el PEI: en Math, primero los gap PACEs de fracciones y después el nivel que corresponde; en English y Science, su nivel; metas semanales realistas con el Daily Goal Tracker; integración de Extensión Local y de Life Skills según su etapa; evidencias esperadas por materia; y una fecha de revisión a las pocas semanas para confirmar la ubicación de Math.',
          'Registras el diagnóstico y la propuesta de PEI en el SIS; coordinación lo valida y la familia lo conoce y lo firma. En la revisión, el estudiante ha superado los PACE Tests de fracciones por encima del 80 % y el plan sigue adelante sin cambios. Si no los hubiera superado tras refuerzo, habrías aplicado el procedimiento de intervención y lo habrías escalado. Así es como el diagnóstico se convierte en un plan que funciona.',
          'Durante esas primeras semanas, tu tarea fue confirmar que la ubicación era correcta. Revisaste cada semana el Daily Goal Tracker y los resultados registrados, comprobaste que las metas eran realistas y hablaste con el estudiante sobre cómo se sentía con el ritmo. Si las metas se hubieran incumplido de forma repetida o los resultados hubieran caído, lo habrías documentado y propuesto a coordinación una revisión del PEI con datos, no con impresiones. Ese seguimiento temprano es lo que convierte un PEI en un documento vivo.',
        ],
      },
    ],
    desglose: {
      video: 0.25,
      lectura: 0.25,
      documentos: [
        { carpeta: '02_FAMILIAS', documento: 'Chanak_Off-Campus_Homeschool_Guiado.pdf', que: '«Así comienza un estudiante», «Diagnóstico académico + PEI» (recuadro «Qué define el PEI»), «Mastery Learning + modelo 60 / 20 / 20» y «Mentoría, SIS y portal».', horas: 1 },
        { carpeta: '03_INSTITUCIONES', documento: 'Chanak_Curriculos_y_Vias_Academicas.pdf', que: 'Fila «Diagnóstico» de «Tres currículos, tres lógicas distintas» y diapositiva «Dos caminos para empezar» (estados del plan en el SIS).', horas: 0.5 },
        { carpeta: '09_ACADEMIC_FRAMEWORK', documento: 'Chanak_K12_Scope_and_Sequence_2026-2027.pdf', que: 'Competencias, secuencia y evidencia del grado del caso práctico, para comprobar la coherencia del PEI.', horas: 0.5 },
      ],
      practica: 2.25,
      evidencia: 0.75,
      kc: 0.5,
    },
  },
}
