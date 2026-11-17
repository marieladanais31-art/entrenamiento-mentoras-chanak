// BLOQUE 1 — IDENTIDAD Y MODELO CHANAK · BLOQUE 2 — PROGRAMAS CHANAK
// Fuente: CHANAK_DOCUMENTOS_2026-2027_FINAL (01_INSTITUCIONAL, 02_FAMILIAS, 03_INSTITUCIONES, 08_ACADEMIC_POLICIES)
// Formato de cada módulo:
//   { resumen, objetivos[], lecciones[{titulo, guion[]}], practica{situacion, preguntas[], criterio}, quiz[{p, opciones[], correcta, explica}], evidencia }

export const BLOQUES_1_2 = {
  'T1.0': {
    resumen:
      'Introducción institucional y visión global de Chanak International Academy: propósito formativo, cosmovisión y recorrido general por las tres grandes áreas de involucramiento (Académica y Mentoría, Coordinación, y Desarrollo Estratégico).',
    objetivos: [
      'Comprender la visión global, la identidad y el propósito formativo de Chanak International Academy.',
      'Identificar las tres áreas de involucramiento institucional: Académica y Mentoría, Coordinación, y Desarrollo Estratégico.',
      'Entender la estructura del Tronco Común formativo y cómo se articulan los diferentes roles para servir a las familias.',
    ],
    lecciones: [
      {
        titulo: 'Visión, propósito y comunidad Chanak',
        guion: [
          'Bienvenida oficial a Chanak International Academy: escuela privada cristiana estadounidense K–12 registrada en Florida (FLDOE #134620).',
          'Nuestra misión: brindar una educación integral cristiana de excelencia internacional que forme el carácter, fortalezca la fe y desarrolle el pensamiento crítico para servir con propósito.',
          'La alianza con el hogar: en Chanak creemos firmemente que los padres son los primeros y principales educadores de sus hijos; la escuela es su colaboradora estratégica y respaldo académico oficial.',
        ],
      },
      {
        titulo: 'Las tres áreas de involucramiento',
        guion: [
          '1. Área Académica y de Mentoría: acompañamiento integral y cercano a familias y estudiantes (Off-Campus y Dual Diploma) desde el ingreso y durante todo su recorrido formativo, acogida, tutoría pedagógica, enseñanza de inglés académico, facilitación de Life Skills, Extensión Local y evaluación diagnóstica educativa.',
          '2. Área de Coordinación Académica: supervisión del equipo docente y de mentores, control de calidad del proceso pedagógico, verificación de planes PEI y evidencias en el SIS, gestión de incidencias y enlace con instituciones aliadas.',
          '3. Área de Desarrollo Estratégico y Crecimiento: gestión de subvenciones y fondos filantrópicos (Grants), administración de programas de becas y fondos estatales de EE. UU. (ESA: Florida EMA, Alabama CHOOSE, Utah Fits All, Texas TEFA, Wyoming ESA, Arizona ESA), y expansión territorial, alianzas institucionales y representación oficial por País (España, México, Panamá, USA).',
        ],
      },
      {
        titulo: 'El Tronco Común formativo',
        guion: [
          'Principio institucional: Role ≠ Person. Cada rol describe funciones y responsabilidades específicas con límites de autoridad claros; una persona puede asumir funciones compatibles, pero sus permisos y responsabilidades nunca se mezclan.',
          'Todas las personas, antes de profundizar en su especialización, completan el Tronco Común: identidad Chanak (Bloque 1), programas (Bloque 2), y salvaguarda y protección de datos (Bloque 6).',
          'Esta base compartida garantiza que todo el equipo hable el mismo lenguaje, proteja la misión de la escuela y brinde una experiencia armónica y profesional a familias y centros colaboradores.',
        ],
      },
    ],
    practica: {
      situacion:
        'Una nueva familia interesada en Chanak y un colegio o iglesia que desea establecer una alianza institucional en un nuevo país o estado contactan simultáneamente a la escuela para solicitar información y comenzar a participar con nosotros.',
      preguntas: [
        '¿Qué área institucional interviene para gestionar convocatorias de subvenciones (Grants), fondos estatales de becas (ESA) o expansión territorial por país?',
        '¿Qué área se encarga del acompañamiento integral a las familias, acogida, estructuración del plan académico, diagnóstico y tutoría continua del estudiante?',
        '¿Qué papel cumple la coordinación académica para supervisar que ambos procesos se desarrollen con calidad y rigor pedagógico en el SIS?',
      ],
      criterio:
        'Identificación precisa de las 3 áreas: Desarrollo Estratégico (Grants, fondos estatales ESA, alianzas y representación por país), Académica y Mentoría (acompañamiento integral a familias, tutoría, planes PEI y clases) y Coordinación (supervisión docente, calidad y gestión en el SIS).',
    },
    quiz: [
      { p: '¿Cuál es el propósito central de Chanak International Academy?', opciones: ['Vender libros de texto', 'Brindar educación integral cristiana de excelencia internacional que forme carácter, fe y pensamiento crítico', 'Sustituir a los padres en el hogar', 'Ser una plataforma de vídeos'], correcta: 1, explica: 'La misión oficial es la educación integral con propósito.' },
      { p: '¿Cuáles son las tres grandes áreas de involucramiento en Chanak?', opciones: ['Contabilidad, Mantenimiento y Cocina', 'Académica y Mentoría, Coordinación Académica, y Desarrollo Estratégico y Crecimiento', 'Sólo profesores de aula tradicional', 'Venta minorista, publicidad y logística'], correcta: 1, explica: 'Las tres áreas organizan la operación académica, la supervisión de calidad y la expansión estratégica.' },
      { p: '¿Cuál es la función del Tronco Común formativo?', opciones: ['Un examen eliminatorio', 'Una base compartida de identidad, programas y protección que realizan todos antes de su especialización', 'Un trámite burocrático opcional', 'Un curso sólo para personal administrativo'], correcta: 1, explica: 'El Tronco Común asegura identidad, comprensión de programas y salvaguarda transversal.' },
      { p: '¿Qué principio rige la asignación de responsabilidades en Chanak?', opciones: ['Cualquiera puede prometer créditos y cambiar notas', 'Role ≠ Person: los roles describen funciones con límites de autoridad y permisos claros', 'No existen roles definidos', 'Los roles dependen de la edad'], correcta: 1, explica: 'Role ≠ Person: funciones formalmente asignadas con límites de autoridad protegidos.' },
    ],
    evidencia: 'Identifica en cuál de las tres áreas te involucrarás principalmente (Académica, Coordinación o Estratégico) y explica brevemente (4–6 líneas) cómo tu función colabora con las otras dos áreas para servir a las familias.',
  },

  'T1.1': {
    resumen:
      'Antes de acompañar a nadie necesitas describir Chanak con exactitud: quién es la entidad titular, qué registros y estatus tiene y cuáles no, y cómo se relaciona con otras organizaciones.',
    objetivos: [
      'Describir la identidad, la misión y la entidad titular de Chanak.',
      'Usar correctamente los cuatro respaldos institucionales y sus límites.',
      'Distinguir a Chanak de las entidades colaboradoras independientes.',
    ],
    lecciones: [
      {
        titulo: 'Quiénes somos',
        guion: [
          'Chanak International Academy es una escuela privada cristiana K–12 registrada en Florida (FLDOE #134620). La entidad titular es Chanak TrainUp Education, Inc., Florida Non-Profit Corporation con sede en St. Petersburg (Florida), reconocida por el IRS como organización 501(c)(3) (EIN 36-5154011).',
          'El nombre viene del hebreo chanak: dedicar, consagrar, instruir. La misión es una educación integral cristiana de excelencia internacional que forme el carácter, fortalezca la fe y desarrolle el pensamiento crítico para que cada estudiante sirva con propósito.',
          'El perfil de egreso tiene cinco pilares: aprendiz autorregulado, pensador crítico con cosmovisión bíblica, líder servidor, competencia académica global y ciudadano con propósito.',
        ],
      },
      {
        titulo: 'Cuatro respaldos que no se deben confundir',
        guion: [
          'Florida DOE #134620: registro estatal como escuela privada. Es un registro, no una acreditación.',
          'MSA-CESS: la dirección ha comunicado la aprobación de la acreditación por votación de la Comisión en noviembre de 2026. La carta formal, el alcance definitivo y las normas de uso de marca están pendientes de cotejo. No crear ni utilizar un sello acreditado sin autorización.',
          'Nonprofit 501(c)(3): estatus fiscal federal de la entidad titular. Candid Gold 2026: sello de transparencia institucional, no una acreditación educativa.',
          'Organizaciones como la entidad colaboradora independiente en España son entidades colaboradoras con personalidad jurídica propia. No son departamentos de Chanak ni forman parte de su jerarquía académica.',
        ],
      },
    ],
    practica: {
      situacion:
        'Una familia te escribe: «En la web de otro colegio dicen que Chanak está acreditada por MSA y que entidad colaboradora independiente es su sede en España. ¿Es así?».',
      preguntas: [
        '¿Qué le respondes sobre MSA, con qué palabras exactas?',
        '¿Cómo explicas la relación con entidad colaboradora independiente sin presentarla como sede ni departamento?',
        '¿A quién avisas de que hay información pública incorrecta?',
      ],
      criterio:
        'Respuesta correcta: «Chanak ha recibido comunicación de aprobación de acreditación MSA-CESS; carta formal y autorización de marca pendientes». Una entidad colaboradora conserva su personalidad jurídica. La información pública errónea se comunica a Chanak Central.',
    },
    quiz: [
      { p: '¿Qué comunica Chanak sobre MSA-CESS mientras espera la carta formal?', opciones: ['Los socios quedan acreditados automáticamente', 'Se comunicó aprobación; carta formal y autorización de marca pendientes', 'La candidatura sigue sin decisión', 'Podemos fabricar un sello provisional'], correcta: 1, explica: 'La aprobación fue comunicada a Dirección; debe cotejarse la carta y no usar sello no autorizado.' },
      { p: 'Un colegio pregunta si el registro FLDOE #134620 es una acreditación. ¿Qué respondes?', opciones: ['Sí, es la acreditación estatal', 'No: es el registro de Chanak como escuela privada en Florida', 'Sí, equivale a MSA', 'Es un número fiscal'], correcta: 1, explica: 'El FLDOE #134620 es un registro estatal, no una acreditación.' },
      { p: 'En una presentación alguien llama a entidad colaboradora independiente «el departamento de Chanak en España». ¿Qué corriges?', opciones: ['Nada, es correcto', 'Que entidad colaboradora independiente es una entidad colaboradora independiente', 'Que entidad colaboradora independiente es el campus de Chanak', 'Que entidad colaboradora independiente emite los diplomas'], correcta: 1, explica: 'entidad colaboradora independiente tiene personalidad jurídica propia; no es un departamento ni un nivel jerárquico de Chanak.' },
      { p: '¿Qué es Candid Gold 2026?', opciones: ['Una acreditación educativa', 'Un sello de transparencia institucional', 'Una licencia del Ministerio', 'Un premio académico'], correcta: 1, explica: 'Candid Gold es transparencia institucional, no acreditación.' },
    ],
    evidencia: 'Escribe en 4–5 líneas cómo presentarías Chanak a una familia nueva, usando los estatus correctos.',
  },

  'T1.2': {
    resumen:
      'El modelo 60/20/20 organiza toda la experiencia Chanak: una misma estructura para todos los programas, adaptada a la edad, al país y a la modalidad de cada estudiante.',
    objetivos: [
      'Explicar el contenido de cada parte del 60/20/20.',
      'Reconocer evidencias válidas para Core USA, Extensión Local y Life Skills.',
      'Detectar cuándo un plan de estudiante desequilibra el modelo.',
    ],
    lecciones: [
      {
        titulo: 'Las tres partes',
        guion: [
          '60 % Core USA: inglés, matemáticas, ciencias y estudios sociales con estándares estadounidenses, evaluación por dominio y créditos para el High School Diploma.',
          '20 % Extensión Local: lengua, historia, geografía y cultura del país de residencia, y necesidades académicas locales. Da continuidad con el entorno del estudiante.',
          '20 % Life Skills & Leadership: carácter, vocación, liderazgo, finanzas personales y proyecto de vida con cosmovisión bíblica.',
        ],
      },
      {
        titulo: 'Equilibrio y evidencia',
        guion: [
          'Las tres partes tienen objetivos, actividades y evidencia. La Extensión Local y Life Skills no son tiempo libre ni actividades sin registro.',
          'El equilibrio se mira en el PEI y en el seguimiento semanal: si un estudiante solo avanza en Core durante semanas, hay que ajustar el plan.',
          'La cosmovisión bíblica atraviesa las tres partes: no es una asignatura aislada, orienta cómo se enseña y qué persona queremos formar.',
        ],
      },
    ],
    practica: {
      situacion:
        'En la revisión semanal ves que el Estudiante ID-0412 lleva cinco semanas con todo su tiempo en Matemáticas e Inglés (Core) y ninguna evidencia de Extensión Local ni de Life Skills.',
      preguntas: ['¿Qué riesgo hay para el estudiante y para su expediente?', '¿Qué ajuste propones y a quién se lo comunicas?', '¿Qué registras en el SIS?'],
      criterio: 'Se reequilibra el plan con objetivos concretos de Extensión Local y Life Skills, se comunica a la familia y se registra la decisión. Si el PEI necesita cambiarse, se consulta a coordinación.',
    },
    quiz: [
      { p: '¿Qué contiene el 20 % de Extensión Local?', opciones: ['Repaso de matemáticas', 'Lengua, historia, geografía, cultura y necesidades académicas locales', 'Tiempo libre', 'Preparación para pruebas estandarizadas'], correcta: 1, explica: 'La Extensión Local da continuidad con el país de residencia y sus necesidades académicas.' },
      { p: 'Una familia quiere eliminar Life Skills «para centrarse en lo importante». ¿Qué explicas?', opciones: ['Que es opcional', 'Que forma parte del modelo 60/20/20 y del perfil de egreso, con objetivos y evidencia', 'Que solo es para menores de 13', 'Que se puede sustituir por deporte'], correcta: 1, explica: 'Life Skills & Leadership es el 20 % formativo del modelo.' },
      { p: '¿Qué indica que el modelo está desequilibrado en un estudiante?', opciones: ['Que tiene buenas notas', 'Que varias semanas no hay evidencia de alguna de las tres partes', 'Que hace videollamadas', 'Que usa A.C.E.'], correcta: 1, explica: 'Las tres partes deben tener evidencia regular.' },
      { p: '¿Dónde se refleja el equilibrio 60/20/20 de cada estudiante?', opciones: ['Solo en conversaciones con la familia', 'En el PEI y en el seguimiento registrado en el SIS', 'En redes sociales', 'En el contrato'], correcta: 1, explica: 'El PEI planifica y el SIS registra.' },
    ],
    evidencia: 'Propón una semana tipo 60/20/20 para un estudiante de Middle School (sin datos personales).',
  },

  'T1.3': {
    resumen:
      'Chanak opera bajo un marco académico orientado al dominio: el estudiante avanza cuando demuestra lo aprendido, con un umbral mínimo del 80 % en las evaluaciones de dominio.',
    objetivos: [
      'Explicar el principio de dominio antes que calendario.',
      'Aplicar el umbral del 80 % y la corrección formativa.',
      'Comunicar el dominio a familias sin humillar ni bajar el estándar.',
    ],
    lecciones: [
      {
        titulo: 'Dominio antes que calendario',
        guion: [
          'En Chanak el aprendizaje es la constante y el tiempo la variable. Dos estudiantes del mismo grado pueden estar en unidades distintas y ambos ir bien.',
          'En las evaluaciones de dominio se trabaja con un umbral mínimo del 80 %. Si no se alcanza, se refuerza y se vuelve a evaluar. Según la vía curricular puede existir un umbral propio más exigente para determinados controles.',
          'Avanzar con lagunas parece amable, pero abandona al estudiante: cada laguna hace más difícil lo que viene después.',
        ],
      },
      {
        titulo: 'Corrección formativa',
        guion: [
          'Cuatro pasos: identificar el error concreto, re-enseñar de otra forma, practicar de nuevo y volver a evaluar.',
          'Corregir sin humillar: en privado, con hechos y mostrando el siguiente paso. El error es información, no identidad.',
          'Todo resultado se registra en el SIS con fecha real. El registro del intento fallido también es evidencia del proceso.',
        ],
      },
    ],
    practica: {
      situacion: 'Un estudiante obtiene 74 % en una evaluación de unidad y la familia pide que avance «porque ya casi llega».',
      preguntas: ['¿Qué respondes a la familia?', '¿Qué plan concreto propones al estudiante?', '¿Qué no puedes ceder?'],
      criterio: 'No se avanza por debajo del 80 %. Se explica el porqué, se propone refuerzo con fecha de nueva evaluación y se registra en el SIS.',
    },
    quiz: [
      { p: 'Un estudiante saca 78 % en una evaluación de dominio. ¿Qué haces?', opciones: ['Lo apruebas porque está cerca', 'Refuerzo específico y nueva evaluación antes de avanzar', 'Lo pasas al siguiente curso', 'Le bajas el nivel sin avisar'], correcta: 1, explica: 'El umbral mínimo es 80 %; se refuerza y se vuelve a evaluar.' },
      { p: '¿Cuál es la premisa del marco orientado al dominio?', opciones: ['El tiempo es fijo y el aprendizaje variable', 'El aprendizaje es la constante y el tiempo la variable', 'Todos avanzan al mismo ritmo', 'No hay evaluaciones'], correcta: 1, explica: 'Se avanza cuando se demuestra dominio.' },
      { p: '¿Cómo se comunica a un estudiante que debe repetir una unidad?', opciones: ['Delante del grupo para motivar', 'En privado, con hechos y el siguiente paso claro', 'Por mensaje sin explicación', 'No se le dice'], correcta: 1, explica: 'Corregir sin humillar.' },
      { p: '¿Se registra en el SIS un intento por debajo del 80 %?', opciones: ['No, solo los aprobados', 'Sí, con fecha real: es parte de la evidencia del proceso', 'Solo si la familia lo pide', 'Se borra al aprobar'], correcta: 1, explica: 'El SIS refleja el proceso real.' },
    ],
    evidencia: 'Redacta el mensaje (5 líneas) a la familia del caso del 74 %.',
  },

  'T1.4': {
    resumen:
      'El mentor tiene un rol pedagógico esencial y también límites claros de autoridad. Saber qué decide el mentor, qué decide la coordinación y qué decide Chanak Central evita errores graves con familias y expedientes.',
    objetivos: [
      'Comprender la identidad, la función y la regla de oro de la mentoría en Chanak.',
      'Distinguir las decisiones del mentor de las de la coordinación y de Chanak Central.',
      'Aplicar la regla resolver · documentar · escalar.',
      'Evitar promesas fuera de la autoridad del rol.',
    ],
    lecciones: [
      {
        titulo: 'El rol y la función de la mentora Chanak',
        guion: [
          'La mentora no es una profesora tradicional que imparte conferencias magistrales ni una vigilante de aula: acompaña de cerca el dominio individual y la autorregulación.',
          'Regla de oro de la mentoría: nunca resuelvas por el estudiante lo que él puede descubrir por sí mismo. El objetivo es formar aprendices autorregulados capaces de pensar críticamente y perseverar.',
          'Tu labor consiste en observar con agudeza pedagógica, formular preguntas de indagación, supervisar que los controles se cumplan con honestidad y sostener altas expectativas con profunda empatía.',
        ],
      },
      {
        titulo: 'Quién decide qué',
        guion: [
          'El mentor acompaña, organiza la semana, revisa evidencias, aplica la evaluación según la vía, registra en el SIS y comunica a la familia.',
          'La coordinación supervisa a los mentores, revisa la calidad y autoriza ajustes operativos dentro del PEI.',
          'Chanak Central decide el reconocimiento de créditos, la promoción, la graduación, los cambios de vía curricular, la emisión de documentos oficiales (Report Cards, transcript, diploma) y cualquier excepción a las políticas.',
        ],
      },
      {
        titulo: 'Resolver · documentar · escalar',
        guion: [
          'Resuelve lo operativo de tu semana: horarios, dudas de contenido, organización, recordatorios.',
          'Documenta todo lo relevante: avances, retrasos, acuerdos con la familia, incidencias y decisiones, con fecha y hechos.',
          'Escala sin demora lo que afecta a créditos, cambios de vía, seguridad del estudiante, conducta grave, quejas formales, asuntos económicos o contractuales y cualquier promesa que no puedas cumplir.',
          'El mentor nunca promete créditos, homologaciones, fechas de graduación ni financiación estatal.',
        ],
      },
    ],
    practica: {
      situacion: 'Una familia Dual Diploma te pide confirmar por escrito que su hija tendrá 18 créditos reconocidos y se graduará en junio.',
      preguntas: ['¿Puedes confirmarlo? ¿Por qué?', '¿Qué respondes hoy a la familia?', '¿A quién escalas y qué documentas?'],
      criterio: 'No: los créditos se deciden en la auditoría y la resolución escrita de Chanak. Se responde que el proceso lo determina Chanak, se escala la consulta y se documenta.',
    },
    quiz: [
      { p: '¿Quién decide el reconocimiento de créditos de un estudiante?', opciones: ['El mentor', 'La familia', 'Chanak Central, tras auditoría y por escrito', 'El colegio local'], correcta: 2, explica: 'Es una decisión académica de Chanak Central.' },
      { p: 'Un estudiante cambia su horario de estudio esta semana. ¿Qué haces?', opciones: ['Escalar a Chanak Central', 'Resolverlo y anotarlo', 'Pedir un cambio de PEI', 'Nada'], correcta: 1, explica: 'Es operativo: se resuelve y se documenta.' },
      { p: 'Una familia pide cambiar de A.C.E. a Chanak Flex. ¿Qué haces?', opciones: ['Lo cambias tú', 'Documentas la petición y la escalas: el cambio de vía lo aprueba Chanak', 'Le dices que no es posible nunca', 'Esperas a fin de curso sin decir nada'], correcta: 1, explica: 'Los cambios de vía requieren aprobación.' },
      { p: '¿Cuál de estas promesas puede hacer un mentor?', opciones: ['«Tu diploma estará homologado»', '«La beca estatal cubrirá todo»', '«Te acompañaré cada semana y registraremos tu avance»', '«Te reconocerán todos los créditos»'], correcta: 2, explica: 'Solo se promete lo que depende del rol.' },
    ],
    evidencia: 'Haz una tabla con 3 situaciones que resolverías, 3 que documentarías y 3 que escalarías.',
  },

  'T2.1': {
    resumen:
      'Off-Campus (Homeschool Guiado) es el programa escolar completo de Chanak desde casa, de Kindergarten a Grade 12, con estructura, mentoría y registro oficial.',
    objetivos: [
      'Describir el recorrido completo de un estudiante Off-Campus.',
      'Explicar qué documentos emite Chanak y cuándo.',
      'Orientar a familias sobre su papel y sus responsabilidades.',
    ],
    lecciones: [
      {
        titulo: 'Qué es y para quién',
        guion: [
          'Off-Campus (Homeschool Guiado) es la escuela estadounidense de Chanak desde casa: el estudiante cursa su escolaridad completa con Chanak como escuela.',
          'Está pensado para familias que educan en casa y buscan estructura, acompañamiento real y documentación académica.',
          'La familia conserva las responsabilidades legales educativas que le correspondan en su país de residencia.',
        ],
      },
      {
        titulo: 'Del diagnóstico al documento académico',
        guion: [
          'Diagnóstico → PEI → unidades y evidencias → evaluación de dominio (80 %) → registro en el SIS → documentación.',
          'Chanak emite Report Cards por periodo, mantiene el expediente y emite el Official Transcript y el High School Diploma cuando se cumplen los requisitos.',
          'El mentor asignado hace el seguimiento semanal; la familia acompaña la rutina diaria.',
          'Los precios y condiciones se consultan siempre en el documento de Programas y Tarifas del país correspondiente.',
        ],
      },
    ],
    practica: {
      situacion: 'Una familia nueva pregunta si con Off-Campus «ya no tiene que hacer nada» porque Chanak se encarga de todo.',
      preguntas: ['¿Qué hace Chanak, qué hace el mentor y qué hace la familia?', '¿Qué responsabilidad legal mantiene la familia?', '¿Dónde consultas las condiciones del país?'],
      criterio: 'Chanak es la escuela; el mentor acompaña semanalmente; la familia sostiene la rutina y conserva sus obligaciones legales locales. Condiciones: documento de país.',
    },
    quiz: [
      { p: '¿Qué es Off-Campus (Homeschool Guiado)?', opciones: ['Un curso de inglés', 'El programa escolar completo K–12 de Chanak desde casa', 'Un programa solo de High School', 'Una biblioteca digital'], correcta: 1, explica: 'Es la escuela completa desde casa, K–12.' },
      { p: '¿Cuál es el primer paso del recorrido?', opciones: ['Emitir el transcript', 'El diagnóstico', 'La graduación', 'Elegir optativas'], correcta: 1, explica: 'Todo empieza por el diagnóstico.' },
      { p: 'Una familia pregunta el precio en México. ¿Dónde lo consultas?', opciones: ['En el Master institucional', 'En el documento de Programas y Tarifas de México', 'Lo calculas convirtiendo desde euros', 'En el dossier de España'], correcta: 1, explica: 'Los precios pertenecen a cada país; no se convierten divisas.' },
      { p: '¿Quién emite el Official Transcript?', opciones: ['El mentor', 'Chanak', 'La familia', 'El ministerio local'], correcta: 1, explica: 'Chanak custodia el expediente y emite la documentación.' },
    ],
    evidencia: 'Dibuja (o describe) el recorrido Off-Campus en 6 pasos con lo que registra el mentor en cada uno.',
  },

  'T2.2': {
    resumen:
      'El Dual Diploma permite al estudiante de grados 9–12 seguir en su colegio y añadir una ruta académica estadounidense con Chanak. Tiene identidad propia: auditoría, Plan de Ruta y materias con valor real.',
    objetivos: [
      'Explicar la auditoría del expediente y el Plan de Ruta.',
      'Presentar el valor de cada materia Chanak.',
      'Responder correctamente sobre homologación y sobre rutas de 2, 3 o 4 años.',
      'Distinguir SIS institucional del portal de aprendizaje Dual Diploma y los puntos de conciliación.',
    ],
    lecciones: [
      {
        titulo: 'La ruta comercial y operativa de Dual Diploma en ocho etapas',
        guion: [
          'Dual Diploma es uno de los tres productos estratégicos de Chanak, junto con Off-Campus y Microschool. El estudiante sigue en su colegio local, recibe auditoría de créditos y estudia una ruta estadounidense de Grades 9–12. No sustituye el diploma del país.',
          'Flujo de trabajo: (1) consulta; (2) expediente y evaluación inicial; (3) auditoría y resolución escrita de créditos; (4) Plan de Ruta y matrícula; (5) acceso SIS y Portal Dual; (6) inducción; (7) seguimiento académico; (8) transcript y diploma tras validar requisitos.',
          'El SIS custodia el expediente institucional y el Portal Dual Diploma gestiona actividades y entregas. Son dos sistemas distintos: el mentor no presume sincronización automática, comprueba el estudiante asignado y deriva discrepancias a coordinación.',
          'La pertenencia de Chanak a DBU Global Community no asegura ingreso en DBU, becas o créditos universitarios. Los Honors, si se ofrecen, deben ser asignaturas aprobadas dentro de una ruta formal. Apostilla, traducción y envío internacional se cotizan aparte cuando proceda.',
        ],
      },
      {
        titulo: 'Auditoría, créditos y Plan de Ruta',
        guion: [
          'El colegio o la familia entrega el expediente oficial. Chanak revisa asignaturas, niveles y evidencias y comunica por escrito los créditos reconocidos y pendientes.',
          'En determinados perfiles pueden reconocerse hasta aproximadamente 18 de los 24 créditos requeridos; la cantidad definitiva depende siempre de la auditoría individual.',
          'Después de revisar el expediente académico, el nivel de inglés y los créditos reconocibles, Chanak prepara un Plan de Ruta individual. La duración final (4 años, 3 años, 2 años o ruta acelerada) depende del punto de entrada, los créditos pendientes y la viabilidad académica de la carga propuesta.',
        ],
      },
      {
        titulo: 'Materias Chanak y homologación',
        guion: [
          'Academic English (leer, escribir y argumentar en inglés académico), American History, U.S. Civics & Economics, Bible / Christian Worldview y Life Skills & Leadership (CV, entrevista, empleabilidad y proyecto de vida).',
          'Homologación: el estudiante continúa cursando su educación local. El diploma estadounidense constituye una credencial académica adicional. Los procesos de reconocimiento, homologación o revalidación solo son necesarios cuando una autoridad concreta los requiera para un uso específico.',
          'La homologación no es un paso normal del Dual Diploma y la decisión corresponde siempre a la autoridad competente.',
        ],
      },
    ],
    practica: {
      situacion: 'El Estudiante Dual ID-0907 no ha completado American History en el plazo del Plan de Ruta y la familia pregunta si «hay que homologar el diploma para que valga».',
      preguntas: ['¿Qué haces con la materia pendiente?', '¿Qué respondes sobre homologación?', '¿Qué documentas y qué escalas?'],
      criterio: 'Plan de recuperación con fechas, registro en el SIS y aviso a coordinación si afecta al Plan de Ruta. Homologación: explicación aprobada, sin presentarla como requisito.',
    },
    quiz: [
      { p: '¿Dónde se mantiene el expediente académico institucional de un alumno Dual Diploma?', opciones: ['Solo en el email de la familia', 'En el SIS oficial de Chanak, con seguimiento pedagógico en el Portal Dual', 'Únicamente en el Portal Dual Diploma', 'En la cuenta DBU'], correcta: 1, explica: 'SIS y Portal Dual tienen propósitos distintos y se deben conciliar.' },
      { p: '¿Qué significa la pertenencia a DBU Global Community?', opciones: ['Admisión automática', 'Relación institucional; las oportunidades concretas requieren sus propios requisitos y acuerdos', 'Créditos universitarios automáticos', 'Homologación garantizada'], correcta: 1, explica: 'La membresía no sustituye procesos académicos ni acuerdos universitarios.' },
      { p: 'Una familia pregunta: «¿Cómo se determina si la ruta es de 2, 3 o 4 años?». ¿Qué respondes?', opciones: ['La elige la familia', 'Chanak prepara un Plan de Ruta individual tras revisar expediente, inglés y créditos reconocibles', 'Siempre son 4 años', 'Depende solo de la edad'], correcta: 1, explica: 'La duración depende del punto de entrada, créditos pendientes y viabilidad de la carga.' },
      { p: '¿Hay que homologar el diploma para participar en el Dual Diploma?', opciones: ['Sí, siempre', 'No; solo si una autoridad concreta lo requiere para un uso específico', 'Sí, antes de graduarse', 'Lo hace el mentor'], correcta: 1, explica: 'La homologación no es un requisito normal del programa.' },
      { p: '¿El reconocimiento de créditos es automático?', opciones: ['Sí, se convierten las notas', 'No: se decide en la auditoría individual y se comunica por escrito', 'Sí, 18 créditos para todos', 'Depende del mentor'], correcta: 1, explica: 'Siempre por auditoría y evidencia.' },
      { p: 'Un estudiante Dual no completa una materia en plazo. ¿Primer paso?', opciones: ['Darla por aprobada', 'Plan de recuperación con fechas, registro en el SIS y aviso a coordinación si afecta a la ruta', 'Darle de baja', 'Esperar a final de curso'], correcta: 1, explica: 'Documentar y planificar; escalar si cambia la ruta.' },
      { p: '¿Qué aporta Academic English?', opciones: ['Solo gramática', 'Lectura, escritura y argumentación académica en inglés', 'Conversación informal', 'Preparación turística'], correcta: 1, explica: 'Es inglés para pensar, escribir y estudiar.' },
    ],
    evidencia: 'Escribe tu respuesta (máx. 6 líneas) a una familia que pregunta por homologación y por la duración de la ruta.',
  },

  'T2.3': {
    resumen:
      'Life Skills & Leadership es el programa de Chanak que prepara a niños y adolescentes para la vida, el estudio y el trabajo, con cosmovisión bíblica, en cinco niveles curriculares.',
    objetivos: [
      'Identificar los cinco niveles y sus edades.',
      'Relacionar cada área con evidencias concretas.',
      'Acompañar un proyecto de Life Skills con criterio.',
    ],
    lecciones: [
      {
        titulo: 'Niveles y áreas',
        guion: [
          'Niveles curriculares: Juniors (8–13 años), Seedling (14), Explorer (15), Builder (16) y Launch (17). Los grupos operativos de videollamada pueden combinar edades y no equivalen a los niveles.',
          'Áreas: identidad, fortalezas, comunicación, liderazgo, trabajo en equipo, toma de decisiones, hábitos, gestión del tiempo, finanzas personales, empleabilidad, CV, entrevista, emprendimiento, ciudadanía digital, vocación y proyecto de vida.',
          'Life Skills & Leadership es el 20 % formativo del modelo y, en el Dual Diploma, aporta un crédito con contenidos intensivos de empleabilidad (CV, entrevista simulada, orientación profesional).',
        ],
      },
      {
        titulo: 'Cómo se trabaja',
        guion: [
          'Retos, proyectos, mentoría y reflexión, con evidencias en el portafolio del estudiante.',
          'El mentor no «da charlas»: acompaña el reto, pregunta, ayuda a reflexionar y revisa la evidencia.',
          'Ejemplos de evidencia: un presupuesto personal, un CV, una entrevista simulada grabada, un plan de proyecto de servicio, un diario de hábitos.',
        ],
      },
    ],
    practica: {
      situacion: 'Un estudiante de 16 años (Builder) entrega como evidencia de «empleabilidad» un párrafo copiado de internet.',
      preguntas: ['¿Es una evidencia válida? ¿Por qué?', '¿Qué reto concreto propones en su lugar?', '¿Cómo lo registras?'],
      criterio: 'No es válida: no demuestra aprendizaje propio. Se propone una evidencia auténtica (CV propio + entrevista simulada) y se registra el reintento.',
    },
    quiz: [
      { p: '¿Qué nivel corresponde a un estudiante de 15 años?', opciones: ['Juniors', 'Seedling', 'Explorer', 'Launch'], correcta: 2, explica: 'Explorer = 15 años.' },
      { p: '¿Qué edades cubre Juniors?', opciones: ['6–8', '8–13', '12–15', '14–17'], correcta: 1, explica: 'Juniors abarca de 8 a 13 años.' },
      { p: '¿Cuál es una evidencia válida de finanzas personales?', opciones: ['Ver un vídeo', 'Un presupuesto personal elaborado y explicado por el estudiante', 'Firmar asistencia', 'Un resumen copiado'], correcta: 1, explica: 'La evidencia debe mostrar aprendizaje propio.' },
      { p: 'Un grupo de videollamada reúne estudiantes de 14 y 16 años. ¿Están en el mismo nivel curricular?', opciones: ['Sí', 'No: los grupos son operativos y no equivalen a los niveles', 'Sí, pasan a Explorer', 'Depende del mentor'], correcta: 1, explica: 'Cada estudiante mantiene su nivel.' },
    ],
    evidencia: 'Diseña un reto de Life Skills para el nivel Launch con su evidencia esperada.',
  },

  'T2.4': {
    resumen:
      'Microschool & Academic Partnerships es una de las tres rutas estratégicas activas de Chanak. El mentor distingue el modelo presencial, la institución colaboradora, la matrícula de cada estudiante y la acreditación propia de Chanak.',
    objetivos: [
      'Presentar Microschool como oferta comercial prioritaria junto a Off-Campus y Dual Diploma.',
      'Distinguir una Chanak-Operated Microschool de un Partner Learning Center.',
      'Orientar un interesado al proceso de precalificación, viabilidad, acuerdos, formación y autorización.',
      'Comunicar correctamente los límites de acreditación MSA-CESS, permisos locales y financiación ESA.',
    ],
    lecciones: [
      {
        titulo: 'Microschool: producto activo para comunidades y organizaciones',
        guion: [
          'Chanak promociona ahora tres rutas principales: Off-Campus, Dual Diploma y Microschool & Academic Partnerships. Microschool permite organizar grupos pequeños presenciales con aprendizaje individualizado, Mastery Learning, marco 60/20/20, coordinador formado y seguimiento institucional.',
          'Se ofrece a iglesias, colegios, asociaciones, cooperativas y comunidades organizadas, normalmente con una comunidad de unas diez familias o más. Una comunidad de 5 a 30 estudiantes es un rango orientativo de aula, no una autorización ni garantía de viabilidad.',
          'Microschool no sustituye el programa académico individual: cada alumno puede tener una modalidad autorizada y un contrato específico; un centro de apoyo presencial no implica por sí mismo diploma ni créditos.',
        ],
      },
      {
        titulo: 'Dos modelos de operación y la ruta del socio',
        guion: [
          'Chanak-Operated Microschool: Chanak opera directamente la sede cuando ha confirmado las condiciones aplicables. Partner Learning Center: otra entidad legalmente constituida opera el local y el personal mediante un acuerdo que define el programa autorizado y las obligaciones locales.',
          'La ruta es: registro del interesado → precalificación del representante y comunidad → reunión institucional → viabilidad y presupuesto → revisión legal y acuerdo → formación y configuración del SIS → autorización escrita y apertura supervisada.',
          'El responsable de captación documenta país, figura jurídica, comunidad, espacio, personal, protección de menores y siguiente paso. Solo Dirección de Alianzas y Dirección Académica pueden confirmar alcance, tarifas y autorización.',
        ],
      },
      {
        titulo: 'Acreditación, ESA y condiciones económicas: decir lo verificable',
        guion: [
          'La acreditación MSA-CESS corresponde a Chanak dentro de su alcance acreditado: un Partner Learning Center no obtiene automáticamente una acreditación independiente, ni puede presentarse como campus acreditado sin autorización expresa y cobertura comprobada.',
          'En Estados Unidos, los fondos ESA dependen de la elegibilidad de familia y servicio y del sistema de cada estado. No prometer que todas las plataformas autorizan cobro centralizado o pagos a operadores locales; ClassWallet, Odyssey y Step Up mantienen procesos distintos.',
          'Las tarifas de asociación se comunican en propuesta institucional escrita, después de estudiar el proyecto. Los importes de dossiers antiguos no son una tabla universal aprobada; un mentor nunca negocia cuotas ni promete rentabilidad.',
        ],
      },
    ],
    practica: {
      situacion: 'Una iglesia con 12 familias y un local en España quiere abrir una Microschool con el nombre Chanak el mes próximo; pregunta si la acreditación de Chanak reemplaza los permisos y si puede cobrar fondos ESA.',
      preguntas: [
        '¿Cómo clasificas el interés y qué datos debes registrar?',
        '¿Qué pasos deben completarse antes de anunciar una apertura?',
        '¿Cómo diferencias MSA-CESS, la licencia local y los fondos ESA?',
        '¿A quién remites permisos, costes y condiciones del acuerdo?',
      ],
      criterio: 'La alianza se puede evaluar ahora, pero ni la marca ni la apertura ni el uso de ESA están autorizados automáticamente. Se registra el lead y se deriva a Dirección de Alianzas y coordinación académica.',
    },
    quiz: [
      { p: '¿Qué posición comercial tiene Microschool en Chanak?', opciones: ['Proyecto inactivo para 2027', 'Una de las tres rutas estratégicas activas', 'Solo un servicio de familias individuales', 'Un descuento de Off-Campus'], correcta: 1, explica: 'Microschool está al mismo nivel comercial que Off-Campus y Dual Diploma.' },
      { p: '¿Qué entidad opera un Partner Learning Center?', opciones: ['Siempre el estado de Florida', 'La entidad local autorizada, con su propia personalidad jurídica', 'Automáticamente DBU', 'Cada familia individual sin acuerdos'], correcta: 1, explica: 'El operador local asume sus obligaciones contractuales y regulatorias.' },
      { p: '¿Una alianza acredita automáticamente el local por MSA-CESS?', opciones: ['Sí, sin trámites', 'No: debe verificarse el alcance y la autorización institucional correspondiente', 'Solo en España', 'Solo si tiene 10 familias'], correcta: 1, explica: 'La acreditación de Chanak no concede automáticamente acreditación independiente a sus socios.' },
      { p: '¿Quién aprueba las tarifas y la apertura del socio?', opciones: ['El mentor', 'La dirección competente de Chanak mediante propuesta y autorización escrita', 'La familia más antigua', 'El coordinador sin revisión'], correcta: 1, explica: 'Condiciones y autorización se documentan por escrito.' },
      { p: '¿Puede el mentor garantizar cobro centralizado con todos los ESA?', opciones: ['Sí', 'No: depende del estado, servicio y mecanismo de pago autorizado', 'Siempre que exista una iglesia', 'Solo con el logo MSA'], correcta: 1, explica: 'Cada administrador ESA tiene reglas propias.' },
    ],
    evidencia: 'Prepara una ficha de precalificación de Microschool y una respuesta por escrito a una iglesia interesada, sin inventar permisos ni tarifas.',
  },
}
