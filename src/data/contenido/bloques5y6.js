// BLOQUE 5 — SISTEMAS Y OPERACIÓN · BLOQUE 6 — SAFEGUARDING Y EXTENSIÓN LOCAL
// Fuente: 01_INSTITUCIONAL (Master), 02_FAMILIAS, 03_INSTITUCIONES (PLC · Acuerdo Marco, cláusula de protección)

export const BLOQUES_5_6 = {
  'T5.1': {
    resumen:
      'Chanak usa tres entornos con funciones distintas. Confundirlos genera errores de registro: la información académica oficial vive siempre en el SIS.',
    objetivos: ['Distinguir SIS, Portal y Dual Diploma Portal.', 'Registrar correctamente en el SIS.', 'Practicar en el entorno demo sin datos reales.'],
    lecciones: [
      {
        titulo: 'Tres entornos',
        guion: [
          'SIS (sis.chanakacademy.org): registro oficial. Matrículas, PEI, currículo y diagnóstico por vía, notas de evaluación por dominio, boletines, expediente y transcripts.',
          'Portal (portal.chanakacademy.org): orientación y rutina para familias y mentores: Core USA y Chanak Flex, Life Skills, Extensión Local, inglés, diagnóstico y manuales.',
          'Dual Diploma Portal: entorno de aprendizaje del Dual Diploma para estudiantes y coordinadores, con base de datos independiente del SIS. Lo que cuenta para el expediente se registra en el SIS.',
          'Regla: el portal orienta; el SIS registra.',
        ],
      },
      {
        titulo: 'Práctica en el SIS demo',
        guion: [
          'Usa solo las cuentas de demostración que aparecen en Recursos. Nunca introduzcas datos reales de estudiantes ni de familias en formación.',
          'Ejercicio: localiza un estudiante demo, revisa su PEI, registra una evaluación de dominio y una nota de seguimiento semanal.',
        ],
      },
    ],
    practica: {
      situacion: 'Un mentor anota las notas de sus estudiantes en el Portal y en una hoja de cálculo personal, «y al final del trimestre lo pasa al SIS».',
      preguntas: ['¿Qué riesgos tiene esta práctica?', '¿Qué debe cambiar?', '¿Qué dice la regla portal/SIS?'],
      criterio: 'Riesgo de pérdida, errores y datos personales fuera de sistemas institucionales. Se registra en el SIS en el momento; el Portal solo orienta.',
    },
    quiz: [
      { p: '¿Dónde vive la información académica oficial?', opciones: ['En el Portal', 'En el SIS', 'En el Dual Diploma Portal', 'En el correo'], correcta: 1, explica: 'El SIS es el registro oficial.' },
      { p: '¿Para qué sirve el Portal?', opciones: ['Emitir transcripts', 'Orientar y organizar la rutina de familias y mentores', 'Guardar notas oficiales', 'Facturar'], correcta: 1, explica: 'El portal orienta; el SIS registra.' },
      { p: '¿El Dual Diploma Portal comparte base de datos con el SIS?', opciones: ['Sí', 'No: es independiente; lo que cuenta para el expediente se registra en el SIS', 'Solo en Florida', 'Depende del curso'], correcta: 1, explica: 'Son entornos separados.' },
      { p: '¿Qué datos usas para practicar en el SIS?', opciones: ['Los de tus estudiantes reales', 'Solo cuentas y datos de demostración', 'Los de tu familia', 'Ninguno'], correcta: 1, explica: 'Nunca datos reales en formación.' },
    ],
    evidencia: 'Describe en 4 pasos cómo registraste una evaluación en el SIS demo.',
  },

  'T5.2': {
    resumen:
      'La calidad de Chanak se sostiene en la semana del mentor: revisión, registro, reporting y documentación que resisten una auditoría.',
    objetivos: ['Organizar la revisión semanal.', 'Redactar registros de hechos.', 'Preparar el reporting para coordinación.'],
    lecciones: [
      {
        titulo: 'La revisión semanal',
        guion: [
          'Cada semana: revisar metas y evidencias, registrar evaluaciones en el SIS, anotar alertas (retraso, < 80 %, ausencia de evidencias), comunicar a la familia y fijar metas de la semana siguiente.',
          'Un registro hecho a tiempo vale más que uno reconstruido después.',
        ],
      },
      {
        titulo: 'Documentar bien',
        guion: [
          'Escribe hechos, fechas y acuerdos; evita juicios, diagnósticos o etiquetas («vago», «tiene TDAH»).',
          'Ejemplo correcto: «03/10: metas de Matemáticas no cumplidas por segunda semana (2/5). Acordado con la familia: 30 min diarios. Revisión: 17/10».',
          'Reporting a coordinación: estudiantes en alerta, intervenciones abiertas, incidencias y necesidades.',
        ],
      },
    ],
    practica: {
      situacion: 'Te piden el informe semanal y tienes: un estudiante retrasado, uno por debajo del 80 % y una familia que no responde desde hace 10 días.',
      preguntas: ['¿Cómo registras cada caso?', '¿Qué va al reporting de coordinación?', '¿Qué acción programas para cada uno?'],
      criterio: 'Registros de hechos con fecha, plan para cada caso y reporting con los tres casos en alerta.',
    },
    quiz: [
      { p: '¿Cuál es un registro correcto?', opciones: ['«El estudiante es vago»', '«03/10: 2 de 5 metas cumplidas; acordado plan de 30 min diarios; revisión 17/10»', '«Va mal»', '«Creo que tiene un trastorno»'], correcta: 1, explica: 'Hechos, fechas y acuerdos.' },
      { p: '¿Cuándo se registra una evaluación en el SIS?', opciones: ['Al final del curso', 'En el momento o en la revisión de esa semana', 'Solo si aprueba', 'Cuando lo pida la familia'], correcta: 1, explica: 'Registro a tiempo.' },
      { p: '¿Qué incluye el reporting a coordinación?', opciones: ['Solo los estudiantes que van bien', 'Estudiantes en alerta, intervenciones, incidencias y necesidades', 'Nada', 'Opiniones personales'], correcta: 1, explica: 'Información útil para supervisar.' },
      { p: 'Detectas que olvidaste registrar una evaluación de hace un mes. ¿Qué haces?', opciones: ['Ponerle la fecha de hoy y otra nota', 'Registrarla con su fecha real y una nota aclaratoria', 'No registrarla', 'Inventar otra'], correcta: 1, explica: 'Fecha real y transparencia.' },
    ],
    evidencia: 'Redacta tres registros de hechos para el caso práctico.',
  },

  'T5.3': {
    resumen:
      'La relación con las familias y el criterio para escalar son el núcleo del trabajo diario. Este módulo incluye tu práctica supervisada: acompañar un periodo real de aprendizaje y documentarlo.',
    objetivos: ['Comunicar con familias con claridad y límites.', 'Decidir cuándo resolver, documentar o escalar.', 'Completar y documentar la práctica supervisada.'],
    lecciones: [
      {
        titulo: 'Comunicación con familias',
        guion: [
          'Clara, respetuosa, por canales institucionales y por escrito cuando hay acuerdos.',
          'Familia que no responde: segundo mensaje a los 3–5 días, intento por otro canal institucional, registro de cada intento; si no hay respuesta en dos semanas o hay riesgo para el estudiante, se escala.',
          'Preguntas sobre homologación, créditos, precios o fondos estatales: respuesta oficial y derivación, sin promesas.',
        ],
      },
      {
        titulo: 'Cuándo escalar y práctica supervisada',
        guion: [
          'Escala a coordinación o Chanak Central: créditos, cambios de vía, discrepancias de expediente, conducta grave, safeguarding (siempre e inmediatamente al DSL), quejas formales, asuntos económicos o contractuales.',
          'Práctica supervisada: acompaña al menos dos semanas reales de aprendizaje (o el periodo que fije tu coordinación), registra observaciones semanales, una intervención y una comunicación con familia.',
          'Tu portafolio no debe contener datos personales de estudiantes: usa IDs.',
        ],
      },
    ],
    practica: {
      situacion: 'La familia del Estudiante ID-0390 no responde desde hace 12 días y el estudiante no se conecta. Además, la última vez preguntó si el programa estatal «pagará todo el año».',
      preguntas: ['¿Qué pasos das y en qué orden?', '¿Qué respondes sobre el programa estatal cuando contacten?', '¿Qué escalas y cuándo?'],
      criterio: 'Intentos documentados por canales institucionales, escalado por falta de contacto prolongada; sobre fondos estatales: la elegibilidad la determina el programa, sin promesas.',
    },
    quiz: [
      { p: 'Una familia no responde en 12 días y el estudiante no se conecta. ¿Qué haces?', opciones: ['Nada', 'Documentar intentos por canales institucionales y escalar a coordinación', 'Dar de baja al estudiante', 'Escribir por redes personales'], correcta: 1, explica: 'Documentar y escalar.' },
      { p: 'Una familia pregunta si el diploma quedará homologado. ¿Qué haces?', opciones: ['Prometer que sí', 'Dar la respuesta oficial sobre reconocimiento y derivar si necesita más detalle', 'Decir que no sirve', 'Ignorar la pregunta'], correcta: 1, explica: 'Respuesta oficial, sin promesas.' },
      { p: '¿Qué debes escalar siempre e inmediatamente?', opciones: ['Un cambio de horario', 'Una posible situación de safeguarding', 'Una duda de gramática', 'Un retraso de un día'], correcta: 1, explica: 'Safeguarding va al DSL sin demora.' },
      { p: '¿Qué no debe aparecer en tu portafolio de práctica?', opciones: ['Observaciones', 'Datos personales de estudiantes', 'Fechas', 'Reflexiones'], correcta: 1, explica: 'Se usan IDs.' },
    ],
    evidencia: 'Sube tu portafolio de práctica supervisada (observaciones semanales, una intervención y una comunicación con familia, anonimizados).',
  },

  'T6.1': {
    resumen:
      'La seguridad y el bienestar de los estudiantes son una obligación esencial. Saber reconocer señales, responder bien y mantener límites profesionales protege al estudiante, a la familia y a ti.',
    objetivos: ['Reconocer señales de posible riesgo.', 'Aplicar la respuesta inmediata correcta.', 'Mantener límites profesionales.'],
    lecciones: [
      {
        titulo: 'Responder bien',
        guion: [
          'Si un estudiante está en peligro inmediato, contacta con los servicios de emergencia.',
          'Ante una revelación o una sospecha: escucha con calma, no investigues, no hagas preguntas sugestivas, no prometas confidencialidad.',
          'Registra hechos, fecha, hora y palabras textuales, e informa el mismo día a la persona designada de protección (DSL) o, si no está disponible, al suplente (Deputy DSL). No compartas el caso con nadie más.',
        ],
      },
      {
        titulo: 'Límites profesionales',
        guion: [
          'Comunícate con estudiantes solo por canales institucionales y en los horarios del programa; nunca por redes personales.',
          'Las videollamadas individuales siguen el protocolo de supervisión del programa.',
          'No aceptes regalos significativos ni establezcas relaciones fuera del rol. Ante la duda, consulta a coordinación.',
        ],
      },
    ],
    practica: {
      situacion: 'Durante una videollamada, un estudiante comenta algo que te hace sospechar que puede estar sufriendo daño en casa y te pide que «no se lo digas a nadie».',
      preguntas: ['¿Qué le dices en ese momento?', '¿Qué registras y cuándo?', '¿A quién informas y a quién no?'],
      criterio: 'No prometer secreto; escuchar sin investigar; registrar textual; informar el mismo día al DSL; no comentarlo con otros. Peligro inmediato → emergencias.',
    },
    quiz: [
      { p: 'Un estudiante te pide guardar un secreto que sugiere riesgo. ¿Qué haces?', opciones: ['Prometerle que no dirás nada', 'Explicar con calma que debes pedir ayuda a quien puede protegerle e informar al DSL', 'Investigar por tu cuenta', 'Hablar con sus vecinos'], correcta: 1, explica: 'Nunca se promete confidencialidad.' },
      { p: '¿Cuándo informas al DSL de una sospecha?', opciones: ['A final de mes', 'El mismo día', 'Solo si tienes pruebas', 'Nunca'], correcta: 1, explica: 'Sin demora.' },
      { p: '¿Qué registras?', opciones: ['Tu interpretación', 'Hechos, fecha, hora y palabras textuales', 'Nada, para proteger la privacidad', 'Un diagnóstico'], correcta: 1, explica: 'Registro objetivo.' },
      { p: '¿Qué canal es adecuado para comunicarte con un estudiante?', opciones: ['Tu Instagram personal', 'Los canales institucionales del programa', 'Tu WhatsApp personal', 'Cualquiera'], correcta: 1, explica: 'Límites profesionales.' },
    ],
    evidencia: 'Escribe, paso a paso, tu respuesta al caso práctico (sin datos reales).',
  },

  'T6.2': {
    resumen:
      'La formación y el acompañamiento en línea exigen proteger la seguridad digital y los datos personales de estudiantes y familias.',
    objetivos: ['Aplicar reglas de videollamada segura.', 'Proteger datos personales.', 'Detectar riesgos digitales en estudiantes.'],
    lecciones: [
      {
        titulo: 'Seguridad en línea',
        guion: [
          'Usa solo cuentas y plataformas institucionales; enlaces protegidos para videollamadas; nada de grabaciones sin autorización.',
          'Contraseñas propias y seguras; no compartas cuentas (las cuentas demo son solo para formación).',
          'Enseña ciudadanía digital: privacidad, huella digital, ciberacoso y uso responsable (también es un área de Life Skills).',
        ],
      },
      {
        titulo: 'Datos personales',
        guion: [
          'Ningún dato de estudiantes en dispositivos, chats o correos personales.',
          'En formación, informes de práctica y comunicaciones internas usa IDs o datos anonimizados.',
          'Si detectas una fuga de datos o un acceso indebido, informa de inmediato a coordinación.',
        ],
      },
    ],
    practica: {
      situacion: 'Un compañero comparte en un grupo de WhatsApp de mentores una captura del SIS con el nombre, la nota y el diagnóstico de un estudiante para «pedir consejo».',
      preguntas: ['¿Qué problemas tiene?', '¿Qué haces tú?', '¿Cómo se debió pedir el consejo?'],
      criterio: 'Exposición de datos personales fuera de canales institucionales. Pedir que se elimine e informar a coordinación. Consulta con ID y sin datos identificativos.',
    },
    quiz: [
      { p: '¿Cómo se pide consejo sobre un estudiante en un grupo interno?', opciones: ['Con captura del SIS', 'Con un ID y sin datos identificativos, por canal institucional', 'Con nombre completo', 'Por redes sociales'], correcta: 1, explica: 'Anonimizar siempre.' },
      { p: '¿Se puede grabar una videollamada con un estudiante?', opciones: ['Siempre', 'Solo con autorización según el protocolo', 'Nunca hace falta permiso', 'Solo si es corta'], correcta: 1, explica: 'Requiere autorización.' },
      { p: 'Detectas un acceso indebido a datos. ¿Qué haces?', opciones: ['Nada', 'Informar de inmediato a coordinación', 'Borrar todo', 'Esperar'], correcta: 1, explica: 'Respuesta inmediata.' },
      { p: '¿Ciudadanía digital forma parte de Life Skills?', opciones: ['No', 'Sí', 'Solo en Launch', 'Solo en EE. UU.'], correcta: 1, explica: 'Es un área del programa.' },
    ],
    evidencia: 'Completa tu checklist personal de seguridad digital (5 puntos).',
  },

  'T6.3': {
    resumen:
      'La Extensión Local es el 20 % que conecta al estudiante con su país de residencia. Necesita objetivos, actividades y evidencia, y en algunos centros una coordinación especializada.',
    objetivos: ['Diseñar objetivos de Extensión Local.', 'Definir evidencias válidas.', 'Comprender el rol de coordinación especializada.'],
    lecciones: [
      {
        titulo: 'Qué contiene',
        guion: [
          'Dentro del modelo 60 % Core USA · 20 % Extensión Local · 20 % Life Skills, la Extensión Local puede contener lengua, historia, geografía, cultura y necesidades académicas locales.',
          'Puede incluir lenguas oficiales o cooficiales del territorio (por ejemplo, castellano y lengua cooficial en España) según el contexto.',
          'Debe tener objetivos, actividades y evidencia, igual que el Core.',
        ],
      },
      {
        titulo: 'Coordinación especializada',
        guion: [
          'Ejemplo de rol: LOCAL LANGUAGE EXTENSION & ENGLISH COORDINATOR. Coordina la Extensión Local y el apoyo de inglés de un centro o grupo.',
          'Funciones: planificar objetivos por nivel, orientar a mentores, revisar evidencias, coordinar con Chanak Central y garantizar continuidad con el entorno local.',
          'Es un rol de coordinación especializada dentro de la estructura Chanak, no una autoridad sobre créditos o graduación.',
        ],
      },
    ],
    practica: {
      situacion: 'En un centro, la Extensión Local se reduce a «ver películas en español los viernes» sin objetivos ni registro.',
      preguntas: ['¿Qué falta?', 'Propón dos objetivos y sus evidencias.', '¿Quién debería coordinarlo?'],
      criterio: 'Faltan objetivos, actividades planificadas y evidencia. Objetivos concretos (lengua, historia o cultura) con evidencias, coordinados por la figura especializada.',
    },
    quiz: [
      { p: '¿Qué porcentaje del modelo es la Extensión Local?', opciones: ['60 %', '20 %', '10 %', '40 %'], correcta: 1, explica: '60/20/20.' },
      { p: '¿Qué puede contener la Extensión Local?', opciones: ['Solo deporte', 'Lengua, historia, geografía, cultura y necesidades académicas locales', 'Solo inglés', 'Pruebas estandarizadas'], correcta: 1, explica: 'Continuidad con el entorno local.' },
      { p: '¿Qué necesita la Extensión Local, igual que el Core?', opciones: ['Nada', 'Objetivos, actividades y evidencia', 'Solo asistencia', 'Un examen estatal'], correcta: 1, explica: 'Tiene el mismo rigor.' },
      { p: '¿Qué hace un Local Language Extension & English Coordinator?', opciones: ['Asigna créditos', 'Coordina objetivos, mentores y evidencias de Extensión Local e inglés', 'Emite diplomas', 'Firma contratos'], correcta: 1, explica: 'Coordinación especializada, sin autoridad sobre créditos.' },
    ],
    evidencia: 'Sube un plan de Extensión Local de un trimestre para un nivel (objetivos, actividades, evidencias).',
  },
}
