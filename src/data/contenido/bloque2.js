// BLOQUE 2 — SUPERVISIÓN ACADÉMICA (35h)
// Fuentes: Portal Chanak (protocolos por vía, diagnóstico, PEI),
// Self-Study MSA (assessment approach), pedagogía Carroll/Bloom.

export const BLOQUE2 = {
  '2.1': {
    resumen:
      'Mastery Learning es el corazón metodológico de Chanak. Conocerás su historia (Carroll y Bloom), su lógica — dominio antes que velocidad — y cómo aplicarla sin humillar y sin bajar el estándar.',
    objetivos: [
      'Explicar el origen del Mastery Learning y los aportes de John B. Carroll y Benjamin Bloom.',
      'Defender el dominio mínimo del 80% como forma de justicia académica.',
      'Aplicar la corrección formativa en un caso práctico real.',
    ],
    lecciones: [
      {
        titulo: 'Historia: por qué nació el Mastery Learning',
        guion: [
          'Durante el siglo XX la escuela tradicional avanzaba por calendario: el grupo pasaba de tema aunque muchos no hubieran dominado los prerrequisitos. Los vacíos se acumulaban.',
          'John B. Carroll propuso una idea revolucionaria: el aprendizaje no depende de la "inteligencia fija", sino del tiempo y la oportunidad — tiempo dedicado, perseverancia, calidad de la instrucción y aptitud como ritmo, no como techo.',
          'Benjamin Bloom desarrolló el "aprendizaje para el dominio": objetivos claros, evaluación formativa, corrección específica y nuevas oportunidades hasta dominar.',
          'Los currículos cristianos de instrucción individualizada aplicaron esta lógica con metas diarias, unidades pequeñas, corrección supervisada y dominio mínimo — exactamente el modelo de nuestras vías.',
          'Conclusión: en Chanak el alumno avanza con evidencia, no por presión del calendario ni comparación con otros.',
        ],
        visuales: [
          'Diapositiva: línea de tiempo — escuela por calendario → Carroll (1963) → Bloom (1968) → instrucción individualizada → Chanak.',
          'Diapositiva: fórmula de Carroll simplificada: aprendizaje = tiempo empleado / tiempo necesario.',
        ],
      },
      {
        titulo: 'Dominio como justicia académica',
        guion: [
          'Avanzar sin dominio parece amable, pero abandona al estudiante: cada laguna hace más difícil lo que viene después.',
          'El dominio mínimo del 80% no es castigo ni lentitud: es la garantía de que nadie queda atrás con vacíos invisibles.',
          'Repetir una unidad no es fracasar: es recibir la oportunidad que la escuela tradicional negaba.',
          'El ritmo es personal: dos estudiantes del mismo grado pueden estar en unidades distintas y ambos ir "bien".',
          'Tu tarea como mentora: proteger el estándar Y proteger la dignidad. Ninguno de los dos se negocia.',
        ],
        visuales: [
          'Diapositiva: muro de ladrillos con huecos vs muro sólido — metáfora de las lagunas.',
          'Diapositiva: "Dominio ≥80% = justicia académica" en tipografía grande.',
        ],
      },
      {
        titulo: 'Corrección formativa: el caso práctico',
        guion: [
          'La corrección formativa tiene 4 pasos: identificar el error específico, explicar o re-enseñar de otra forma, practicar de nuevo, evaluar otra vez.',
          'Corregir sin humillar: en privado, con hechos, mostrando el siguiente paso. El error es información, no identidad.',
          'Señal de alerta: si un estudiante falla dos veces la misma evaluación, el problema ya no es de esfuerzo — revisa comprensión, método o entorno, y consulta con coordinación.',
          'Caso práctico del módulo: un estudiante quiere avanzar de unidad con 72% "porque ya casi llega". Redacta tu respuesta pedagógica a él y a su familia: qué dices, qué plan propones, qué NO cedes.',
          'Recuerda la frase guía: no se trata de presionar más, sino de acompañar mejor sin bajar el estándar.',
        ],
        visuales: [
          'Diapositiva: los 4 pasos de la corrección formativa en círculo.',
          'Diapositiva: enunciado del caso práctico del 72%.',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Cuál fue el aporte central de John B. Carroll?',
        opciones: [
          'El aprendizaje depende del tiempo y la oportunidad, no de una inteligencia fija',
          'Los exámenes estandarizados',
          'La educación a distancia',
          'La enseñanza por proyectos',
        ],
        correcta: 0,
        explica: 'Carroll redefinió la aptitud como ritmo de aprendizaje: con tiempo y oportunidad adecuados, casi todos pueden dominar.',
      },
      {
        p: 'El modelo de Bloom añade a la idea de Carroll…',
        opciones: [
          'Competición entre estudiantes',
          'Objetivos claros, evaluación formativa, corrección y nuevas oportunidades',
          'Eliminación de las evaluaciones',
          'Agrupación por edades',
        ],
        correcta: 1,
        explica: 'Bloom convirtió la idea en método: aprendizaje para el dominio con ciclo de evaluación-corrección-reintento.',
      },
      {
        p: '¿Por qué el 80% de dominio es "justicia académica"?',
        opciones: [
          'Porque castiga a los estudiantes lentos',
          'Porque evita que el estudiante acumule lagunas invisibles que le harán fracasar después',
          'Porque facilita la corrección a la mentora',
          'Porque lo exige la ley de Florida',
        ],
        correcta: 1,
        explica: 'Avanzar sin dominio abandona al estudiante. El estándar garantiza que nadie arrastra vacíos.',
      },
      {
        p: 'Un estudiante falla dos veces la misma evaluación. ¿Qué corresponde?',
        opciones: [
          'Dejarlo pasar con nota mínima',
          'Repetir exactamente la misma explicación una tercera vez',
          'Revisar comprensión, método y entorno, y consultar con coordinación',
          'Cambiarlo de vía de material inmediatamente',
        ],
        correcta: 2,
        explica: 'Dos fallos señalan un problema de fondo: se analiza la causa y se consulta, no se insiste con lo mismo ni se regala la nota.',
      },
    ],
  },

  '2.2': {
    resumen:
      'Chanak es independiente de las editoriales y ofrece cuatro vías de material. Cada vía tiene su estructura, su protocolo de trabajo y su diagnóstico propio. Tu trabajo: conocerlas todas para supervisar a cualquier estudiante.',
    objetivos: [
      'Describir la estructura y el protocolo de cada vía: A.C.E., LIFEPAC, CLE y Chanak Flex.',
      'Identificar el diagnóstico de ubicación correcto para cada vía (principio de no duplicación).',
      'Localizar los recursos de cada vía en el Portal Chanak.',
    ],
    lecciones: [
      {
        titulo: 'Vía A.C.E. y vía LIFEPAC',
        guion: [
          'Vía A.C.E.: módulos individualizados por materia (PACEs físicos). Protocolo diario: Opening Exercises → trabajo con metas diarias → corrección en rojo → aprobación en verde. Dominio mínimo: 80%.',
          'A.C.E. incluye herramientas digitales opcionales de apoyo: ePACE, Word Builder, Math Builder. Son complemento, no sustituto del protocolo.',
          'Su diagnóstico de ubicación: A.C.E. Diagnostic Test Online.',
          'Vía LIFEPAC: 10 cuadernos consumibles por año y materia, con Self Tests intermedios y Unit Test final supervisado.',
          'La progresión LIFEPAC va por unidades según el PEI validado. Su diagnóstico: Assessment and Placement Tests (AOP).',
          'En ambas vías la mentora supervisa el scoring y verifica que la corrección se haga con honestidad — la integridad del proceso es tan importante como el resultado.',
        ],
        visuales: [
          'Diapositiva: foto de un PACE y de un cuaderno LIFEPAC lado a lado con sus protocolos en columnas.',
          'Diapositiva: flujo A.C.E.: metas → trabajo → corrección en rojo → aprobación en verde.',
        ],
      },
      {
        titulo: 'Vía CLE y vía Chanak Flex',
        guion: [
          'Vía CLE (Christian Light Education): avance por LightUnits con quizzes intermedios y tests por unidad bajo supervisión. Estructura similar a LIFEPAC con énfasis en el repaso continuo.',
          'Su diagnóstico: Diagnostic Tests de Christian Light.',
          'Vía Chanak Flex: la familia propone material y Chanak lo aprueba en el PEI. El dominio se valida con evaluaciones Chanak según calendario.',
          'Flex es máxima flexibilidad CON validación institucional: la familia elige el camino, Chanak garantiza el dominio.',
          'Principio de no duplicación: cada estudiante hace UNA sola evaluación diagnóstica — la de su vía. No se acumulan pruebas redundantes.',
          'Regla transversal: la mentora nunca copia ni distribuye material propietario de las editoriales, ni promete equivalencias curriculares.',
        ],
        visuales: [
          'Diapositiva: tabla comparativa de las 4 vías (estructura / evaluación interna / diagnóstico / supervisión).',
          'Diapositiva: principio de no duplicación con el diagnóstico correcto por vía.',
        ],
      },
      {
        titulo: 'Práctica en el Portal',
        guion: [
          'Entra al Portal Chanak → sección de vías de material.',
          'Localiza para cada vía: el protocolo diario, el recurso de diagnóstico y el material de apoyo para familias.',
          'Ejercicio: una familia nueva duda entre LIFEPAC y CLE para un hijo de 10 años. Prepara una explicación de 2 minutos de las diferencias — sin recomendar tú la decisión final, que corresponde a la familia con el diagnóstico delante.',
          'Guarda tu explicación como evidencia del módulo.',
        ],
        visuales: [
          'Diapositiva: captura del Portal con la sección de vías señalada.',
          'Diapositiva: guion de 2 minutos — plantilla con 4 frases clave.',
        ],
      },
    ],
    quiz: [
      {
        p: 'En la vía A.C.E., el protocolo de corrección es…',
        opciones: [
          'Corrección en rojo y aprobación en verde, con supervisión',
          'Autocorrección sin supervisión',
          'Corrección solo por la oficina central',
          'Sin corrección: se avanza por fechas',
        ],
        correcta: 0,
        explica: 'El protocolo A.C.E.: metas diarias, corrección en rojo, aprobación en verde — siempre supervisado.',
      },
      {
        p: '¿Cuántos cuadernos por año y materia tiene LIFEPAC?',
        opciones: ['5', '10', '12', '20'],
        correcta: 1,
        explica: 'LIFEPAC organiza cada materia en 10 cuadernos anuales con Self Tests y Unit Test supervisado.',
      },
      {
        p: 'El principio de no duplicación establece que…',
        opciones: [
          'No se repite ninguna unidad',
          'Cada estudiante hace una sola evaluación diagnóstica: la de su vía',
          'No puede haber dos estudiantes en la misma vía',
          'Cada materia se evalúa una sola vez al año',
        ],
        correcta: 1,
        explica: 'Una sola prueba de ubicación según la vía elegida; los resultados alimentan el PEI sin pruebas redundantes.',
      },
      {
        p: 'En la vía Chanak Flex, ¿quién valida el dominio?',
        opciones: [
          'La familia con su propio criterio',
          'Chanak, mediante evaluaciones según calendario',
          'No se valida: es libre',
          'La editorial del material',
        ],
        correcta: 1,
        explica: 'Flex = libertad de material aprobado en el PEI + validación institucional de dominio por Chanak.',
      },
    ],
  },

  '2.3': {
    resumen:
      'El PEI (Plan Educativo Individualizado) es el documento que convierte el diagnóstico en un plan concreto: materias, niveles, vía y calendario. Aprenderás a interpretarlo, a darle seguimiento y a construir uno simulado.',
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

  '2.4': {
    resumen:
      'Las tres herramientas del seguimiento diario: el Daily Goal Tracker (metas), la Review Station (corrección supervisada) y el Mastery Assessment (validación de dominio). Con ellas, más las alertas del SIS, tendrás el pulso del estudiante semana a semana.',
    objetivos: [
      'Usar el Daily Goal Tracker para entrenar la autorregulación del estudiante.',
      'Supervisar la Review Station con integridad de corrección.',
      'Aplicar el Mastery Assessment y reaccionar a las alertas del SIS.',
    ],
    lecciones: [
      {
        titulo: 'Daily Goal Tracker: metas que forman carácter',
        guion: [
          'Cada mañana, tras los Opening Exercises, el estudiante fija sus metas del día por materia en su Goal Tracker.',
          'La meta bien puesta es específica y alcanzable: "páginas 12-15 del PACE de Math", no "avanzar en mates".',
          'La mentora revisa las metas al inicio (¿son realistas?) y al cierre (¿se cumplieron? ¿por qué no?).',
          'El Goal Tracker es formación de carácter disfrazada de logística: enseña planificación, honestidad y perseverancia.',
          'Metas incumplidas repetidamente = señal para conversar, no para castigar: ¿la carga es correcta? ¿hay algo detrás?',
        ],
        visuales: [
          'Diapositiva: Goal Tracker de ejemplo con metas bien y mal escritas.',
          'Diapositiva: rutina mañana/cierre de la mentora con el tracker.',
        ],
      },
      {
        titulo: 'Review Station y Mastery Assessment',
        guion: [
          'La Review Station es el punto de corrección supervisada: el estudiante corrige con la clave, en el lugar designado, bajo supervisión — corrección en rojo, aprobación en verde (vía A.C.E.).',
          'La supervisión protege la integridad: la clave nunca viaja al escritorio del estudiante.',
          'Corregido no es dominado: tras corregir, el estudiante repasa lo fallado y se prepara para la evaluación.',
          'El Mastery Assessment (Self Test / Unit Test / evaluación Chanak según la vía) valida el dominio: ≥80% para avanzar.',
          'El resultado va SIEMPRE al SIS: una materia puede tener muchas notas por trimestre y la nota final es el promedio de las notas aprobadas.',
        ],
        visuales: [
          'Diapositiva: foto/esquema de una Review Station con sus reglas.',
          'Diapositiva: flujo trabajo → corrección → repaso → Mastery Assessment → SIS.',
        ],
      },
      {
        titulo: 'Alertas del SIS: tu radar',
        guion: [
          'El SIS genera alertas automáticas: 3 o más semanas sin calificaciones de unidades en una materia = alerta.',
          'También alerta el incumplimiento de fechas de Life Skills o Extensión Local.',
          'Una alerta no es una acusación: es una invitación a mirar. Puede ser ritmo normal de una unidad larga — o el primer síntoma de un bloqueo.',
          'Protocolo ante alerta: revisa el Goal Tracker y el historial, habla con el estudiante, contacta a la familia si procede, documenta y escala a coordinación si persiste.',
          'Simulación del módulo: recibirás 3 alertas ficticias y decidirás la acción correcta para cada una.',
        ],
        visuales: [
          'Diapositiva: ejemplo de alerta del SIS y los 5 pasos del protocolo.',
          'Diapositiva: las 3 alertas de la simulación.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Una meta diaria bien formulada es…',
        opciones: ['"Avanzar en matemáticas"', '"Páginas 12-15 del PACE de Math"', '"Estudiar mucho"', '"Terminar pronto"'],
        correcta: 1,
        explica: 'Específica y alcanzable: se puede verificar al cierre del día si se cumplió.',
      },
      {
        p: 'En la Review Station, la clave de corrección…',
        opciones: [
          'Se presta al estudiante para su escritorio',
          'Permanece en la estación, bajo supervisión',
          'Se fotocopia para casa',
          'No existe: corrige la mentora',
        ],
        correcta: 1,
        explica: 'La clave nunca viaja: la corrección supervisada en el punto designado protege la integridad del proceso.',
      },
      {
        p: '¿Cuándo genera el SIS una alerta académica automática?',
        opciones: [
          'Cada semana sin excepción',
          'A las 3+ semanas sin calificaciones de unidades en una materia',
          'Solo al final del trimestre',
          'Cuando la familia lo solicita',
        ],
        correcta: 1,
        explica: 'Tres semanas sin registro de unidades (o fechas incumplidas de Life Skills/Extensión Local) disparan la alerta.',
      },
      {
        p: 'La nota final de una materia en el trimestre es…',
        opciones: [
          'La última nota obtenida',
          'La nota más alta',
          'El promedio de todas las notas aprobadas de esa materia',
          'La que decida la mentora',
        ],
        correcta: 2,
        explica: 'Una materia acumula múltiples evaluaciones; el SIS calcula el promedio de las notas aprobadas.',
      },
    ],
  },

  '2.5': {
    resumen:
      'Cierre del bloque académico: cómo se registra la evaluación formativa y sumativa, qué contiene un boletín (report card) y cómo se construye el expediente oficial. El principio rector: el SIS es el registro oficial e inmutable.',
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
