// BLOQUE 10 — GROWTH, MARKETS, PARTNERSHIPS & SYSTEMS (por rol: Estratégico y especialistas)
// No cuenta para las horas de la ruta base. Contenido de formación en borrador operativo; plantillas legales sujetas a revisión.
// Formato: { resumen, objetivos[], lecciones[] (las sustituye la lectura ampliada), practica, quiz[], evidencia }

export const BLOQUE_10 = {
  'T10.1': {
    resumen:
      'Cómo abrir un territorio o un programa con orden: tres fases, autorización por territorio y programa, mensajes autorizados frente a prohibidos, uso responsable de contratistas y plataformas, y el Plan de Entrada al Mercado a 30 días.',
    objetivos: [
      'Describir las tres fases de desarrollo de mercado y la revisión con Chanak Central al final de cada una.',
      'Distinguir lo que un Representante puede y no puede decir o firmar.',
      'Elaborar un Plan de Entrada al Mercado a 30 días sin prometer resultados.',
    ],
    lecciones: [],
    practica: {
      situacion:
        'Eres Representante de programa en un territorio nuevo. Una asociación local te pide por escrito que confirmes que Chanak «ya está oficialmente acreditado» y que les rebajes el precio a cambio de traer diez familias.',
      preguntas: [
        '¿Qué respondes sobre la acreditación y con qué documentos?',
        '¿Qué haces con la petición de rebaja de precio?',
        '¿Qué registras y a quién escalas?',
      ],
      criterio:
        'Explica el estado real (en proceso/en revisión) con la documentación vigente, sin garantizar; aclara que no puedes modificar precios y traslada la petición a Chanak Central; registra el contacto con fecha y siguiente paso.',
    },
    quiz: [
      { p: '¿Quién puede modificar un precio durante una conversación con una familia?', opciones: ['La Representante, si lo ve razonable', 'Nadie en terreno; se traslada a Chanak Central', 'El contratista', 'La iglesia colaboradora'], correcta: 1, explica: 'Los precios los decide la dirección; un Representante no puede modificarlos.' },
      { p: 'Un trámite está «en revisión». ¿Cómo lo comunicas?', opciones: ['Como aprobado, para ganar tiempo', 'Como «en revisión», sin garantizar resultado', 'No lo mencionas nunca', 'Como acreditado'], correcta: 1, explica: 'Lo no confirmado se dice en proceso o en revisión, nunca como aprobado.' },
      { p: '¿Qué puede recibir un contratista contratado en una plataforma como Fiverr?', opciones: ['Acceso al SIS para ver expedientes', 'Datos de familias para personalizar anuncios', 'Un encargo escrito con alcance, plazo y entregables, y ningún dato de estudiantes', 'Las claves del correo institucional'], correcta: 2, explica: 'El contratista trabaja con encargo escrito y sin accesos ni datos personales.' },
      { p: '¿Cómo debe aparecer el programa en los materiales comerciales de España?', opciones: ['Off-Campus', 'Off-Campus (Homeschool Guiado)', 'Escuela acreditada', 'Cualquiera de las anteriores'], correcta: 1, explica: 'La regla es usar siempre «Off-Campus (Homeschool Guiado)» y los precios en euros.' },
      { p: 'En la semana 4 del plan de 30 días, ¿qué se hace?', opciones: ['Prometer matrículas a la dirección', 'Revisar resultados con Chanak Central y decidir si se continúa, ajusta o pausa', 'Firmar acuerdos locales', 'Cerrar sin registrar'], correcta: 1, explica: 'La semana 4 es de revisión, corrección y decisión, con constancia escrita.' },
    ],
    evidencia:
      'Redacta tu Plan de Entrada al Mercado a 30 días (semana por semana) para un territorio y programa que definas. Incluye 3 indicadores de proceso y 3 cosas que NO prometerás. Máx. 15 líneas.',
  },

  'T10.2': {
    resumen:
      'Rol de Grants & Project Development: separación de entidades (Chanak y entidad colaboradora independiente), del proyecto a la solicitud, narrativa transparente, y el Life Skills 4-Week Community Pilot como proyecto piloto controlado.',
    objetivos: [
      'Explicar qué entidad solicita, cuál ejecuta y cómo se relacionan en una solicitud.',
      'Preparar el esquema de una solicitud con datos respaldados y estados honestos.',
      'Diseñar las cuatro semanas del Life Skills Community Pilot con sus condiciones de seguridad.',
    ],
    lecciones: [],
    practica: {
      situacion:
        'Tras un piloto de Life Skills con un grupo de familias, un financiador pide un resumen de impacto «con resultados concretos». Tienes asistencia por ID, evidencias de proyectos y opiniones de las familias, pero no datos de años anteriores.',
      preguntas: [
        '¿Qué datos usas y cómo los etiquetas?',
        '¿Qué dejas fuera o presentas como objetivo?',
        '¿Quién aprueba el envío y a qué entidad corresponde?',
      ],
      criterio:
        'Usa solo datos respaldados y los etiqueta como resultado de un piloto; lo no probado se deja fuera o se presenta como objetivo; la dirección aprueba y decide la entidad solicitante.',
    },
    quiz: [
      { p: '¿Qué entidad usa el estatus 501(c)(3) para subvenciones de Estados Unidos?', opciones: ['entidad colaboradora independiente', 'Chanak (entidad de Estados Unidos)', 'Cualquiera', 'Ninguna'], correcta: 1, explica: 'El estatus 501(c)(3) corresponde a la entidad de Estados Unidos; entidad colaboradora independiente es la entidad en España.' },
      { p: '¿Para qué deben usarse principalmente las subvenciones según el protocolo financiero?', opciones: ['Cubrir gastos corrientes de forma indefinida', 'Financiar la expansión estratégica; las cuotas sostienen la operación diaria', 'Pagar sueldos sin presupuesto', 'Sustituir las matrículas'], correcta: 1, explica: 'Las subvenciones financian expansión; la operación diaria se sostiene con ingresos propios.' },
      { p: 'Un dato de impacto no tiene documento que lo respalde. ¿Qué haces?', opciones: ['Lo incluyes redondeado', 'Lo omites o lo presentas como objetivo', 'Lo inventas con una estimación optimista', 'Se lo pides a una familia sin más'], correcta: 1, explica: 'Nunca se afirma un dato que no se pueda probar.' },
      { p: '¿Qué condición es obligatoria para los facilitadores del piloto de Life Skills?', opciones: ['Haber completado la formación de contacto con menores', 'Tener estudios universitarios', 'Ser voluntarios', 'No necesitan formación'], correcta: 0, explica: 'Todo facilitador con contacto directo con menores completa antes la formación obligatoria.' },
      { p: '¿El Life Skills Community Pilot es un programa acreditado que otorga crédito?', opciones: ['Sí', 'No: es una prueba controlada y no se vende como acreditada ni como crédito', 'Solo en España', 'Solo si hay financiador'], correcta: 1, explica: 'Es un piloto controlado; no se presenta como crédito ni acreditación.' },
    ],
    evidencia:
      'Describe en 10–12 líneas el calendario de cuatro semanas de un Life Skills Community Pilot para un grupo que elijas, con las condiciones de seguridad y 3 evidencias que recogerías (con IDs, sin datos personales).',
  },

  'T10.3': {
    resumen:
      'Voluntario, Contratista independiente y Socio: qué es cada modelo, qué plantillas existen y su estado, W-9 y 1099-NEC sin umbrales fijos, la advertencia contratista vs empleado, y los límites de autoridad en cualquier modelo.',
    objetivos: [
      'Diferenciar los tres modelos de colaboración y su documento básico.',
      'Reconocer cuándo una relación puede dejar de ser voluntariado o contratista y consultar a administración.',
      'Aplicar los límites de autoridad y de formación sea cual sea el modelo.',
    ],
    lecciones: [],
    practica: {
      situacion:
        'Una persona colabora desde hace seis meses como voluntaria. Ahora cubre un horario fijo cada semana, coordina a otras dos voluntarias y recibe pequeñas cantidades «para gastos» sin justificante.',
      preguntas: ['¿Qué señales indican que la relación ha cambiado?', '¿Qué no haces por tu cuenta?', '¿A quién lo comunicas y qué se revisa?'],
      criterio:
        'Detecta horario fijo, coordinación estable y pagos sin justificar; no regulariza nada por su cuenta; lo comunica a administración y asesoría para revisar la modalidad y corregir el acuerdo.',
    },
    quiz: [
      { p: '¿Qué significa que una plantilla está «sujeta a revisión legal / administrativa»?', opciones: ['Que ya es definitiva', 'Que es un borrador de trabajo hasta que la validen', 'Que no sirve', 'Que solo vale en España'], correcta: 1, explica: 'No se firma ni se entrega como definitiva hasta su validación.' },
      { p: '¿Qué formulario se solicita normalmente a un contratista independiente en Estados Unidos?', opciones: ['W-9', 'DS-160', 'Modelo 303', 'I-9'], correcta: 0, explica: 'El W-9 recoge los datos fiscales del contratista; la formación no fija umbrales para el 1099-NEC.' },
      { p: '¿Dónde se confirma el umbral de informe del 1099-NEC?', opciones: ['Está fijado en este curso', 'Cada año con el contable y la fuente oficial del IRS', 'Lo decide el contratista', 'No existe'], correcta: 1, explica: 'No se fija una cifra en la formación: se confirma con el contable y el IRS.' },
      { p: 'Una persona llamada «contratista» trabaja en horario fijo, con herramientas de Chanak y bajo dirección constante. ¿Qué haces?', opciones: ['Nada, el nombre manda', 'Consultas con administración y asesoría: podría ser un empleado', 'La despides', 'La conviertes en socia'], correcta: 1, explica: 'La ley mira la realidad de la relación, no la etiqueta.' },
      { p: '¿Quién puede firmar en nombre de Chanak, sea cual sea el modelo de colaboración?', opciones: ['Cualquier socio', 'Cualquier contratista', 'Nadie por su cuenta: solo quien tenga autoridad formal', 'El voluntario más antiguo'], correcta: 2, explica: 'Ningún colaborador firma en nombre de Chanak sin autoridad formal.' },
    ],
    evidencia:
      'Elige un caso real o ficticio de colaboración y explica en 8–10 líneas qué modelo corresponde (voluntario, contratista o socio), qué documento usarías (plantilla sujeta a revisión) y qué límites de autoridad pondrías por escrito.',
  },

  'T10.4': {
    resumen:
      'SIS, Portal y Dual Diploma Portal: para qué sirve cada uno, competencias mínimas con práctica y validación, reglas de privacidad con IDs, y cómo reportar una incidencia sin «arreglarla» por tu cuenta.',
    objetivos: [
      'Describir el propósito de cada sistema y los límites de tu rol en él.',
      'Demostrar las competencias mínimas con datos ficticios y validar con Chanak Central.',
      'Registrar y reportar con hechos, fecha e ID, sin datos personales.',
    ],
    lecciones: [
      { titulo: 'Matrícula real y automatizaciones', guion: ['Abrir Operativa SIS desde Inicio o este módulo. Formulario público: /matricula. Administración: Matrículas. Enviar la solicitud guarda un folio; no crea cuentas. Crear usuarios intenta también sincronizar. Aceptada y Convertida disparan sincronización; comprobar identidad, vínculo familiar, ciclo y responsables antes de repetir. La bienvenida se envía con una acción manual separada.'] },
      { titulo: 'Familias, estudiantes y convenios', guion: ['Estudiante entra con cuenta propia; familia debe ver solamente sus hijos. El convenio necesita condiciones y asignación verificadas: referencia no asigna hub ni descuento. La facturación de familias y estudiantes permanece en SIS; el sistema comercial de alianzas está pendiente de decisión. Dual y Google requieren comprobación de accesos por separado.'] },
    ],
    practica: {
      situacion:
        'Una familia dice que el Portal de su estudiante (ID-0452) muestra un crédito pendiente que ya creen completado. En el SIS ves que la evidencia está subida pero sin revisar.',
      preguntas: ['¿Qué compruebas y qué no tocas?', '¿Qué respondes a la familia?', '¿Qué registras y a quién lo pasas?'],
      criterio:
        'Comprueba estado y evidencia sin modificar el crédito; informa de que está en revisión sin prometer resultado; registra la consulta con ID y hechos y la pasa a coordinación.',
    },
    quiz: [
      { p: '¿Qué ocurre al cambiar una solicitud a Aceptada?', opciones: ['Solo cambia una etiqueta', 'Se dispara sincronización del expediente y deben comprobarse sus vínculos', 'Se concilia automáticamente Stripe', 'Se crea Google'], correcta: 1, explica: 'Aceptada y Convertida activan la sincronización; bienvenida y verificación económica son controles separados.' },
      { p: '¿Cómo se aplica un convenio desde referencia?', opciones: ['Descuento automático', 'El campo no resuelve hub ni condiciones: hay que verificarlos', 'Siempre el primer hub', 'No hay que comprobar nada'], correcta: 1, explica: 'Referencia es texto libre; la asignación y el acuerdo requieren control.' },
      { p: '¿Qué guarda el SIS?', opciones: ['Solo noticias', 'Expediente, PEI o Plan de Ruta, evidencias, progreso, intervenciones y alertas', 'Solo pagos', 'Solo anuncios'], correcta: 1, explica: 'El SIS es el expediente del estudiante.' },
      { p: '¿Cómo se identifica a un estudiante en correos y documentos de trabajo?', opciones: ['Con nombre completo', 'Con su ID', 'Con una foto', 'Con su teléfono'], correcta: 1, explica: 'Se usan IDs; ningún dato personal sale de los sistemas.' },
      { p: 'Un dato del Portal parece incorrecto. ¿Qué haces?', opciones: ['Lo corriges tú', 'Describes el problema con ID y hechos y lo reportas a Chanak Central', 'Lo ignoras', 'Se lo cuentas a otra familia'], correcta: 1, explica: 'No se arregla por cuenta propia: se documenta y se reporta.' },
      { p: '¿Cuál es una nota de registro correcta?', opciones: ['«Parece desmotivado»', '«No entregó las tareas 3 y 4 en las dos últimas semanas»', '«Es vago»', '«Seguro que no estudia»'], correcta: 1, explica: 'Los registros se basan en hechos verificables con fecha.' },
      { p: '¿Cuándo se considera dominado un sistema en esta formación?', opciones: ['Al leer el manual', 'Tras demostración, práctica con datos ficticios y validación con Chanak Central', 'Al abrir la cuenta', 'Nunca'], correcta: 1, explica: 'Se aprende en tres pasos: demostración, práctica y validación.' },
    ],
    evidencia:
      'Describe en 8–10 líneas cómo resolverías la consulta de una familia sobre un dato del Portal, qué registrarías en el SIS (con ID) y a quién escalarías. Sin datos personales.',
  },

  'T10.5': {
    resumen:
      'Rutas de los profesores especialistas dentro del rol Mentor: English Teacher, Life Skills Facilitator, instructor de lengua local y Educational Assessment Specialist (no clínico; REFER TO LICENSED PROFESSIONAL).',
    objetivos: [
      'Explicar qué hace cada especialista y qué no puede hacer.',
      'Aplicar progresión por dominio y registro de evidencias en su materia.',
      'Aplicar la fórmula REFER TO LICENSED PROFESSIONAL cuando lo observado excede lo educativo.',
    ],
    lecciones: [],
    practica: {
      situacion:
        'Un estudiante (ID-0517) lee y escribe bien en inglés pero casi no habla en las sesiones. Se bloquea cuando lo corriges al momento.',
      preguntas: ['¿Qué observas durante tres semanas?', '¿Qué ajustes harías?', '¿Cuándo y cómo sugerirías una consulta profesional?'],
      criterio:
        'Observa cuándo habla y cuándo se bloquea; ajusta con respuesta escrita leída en voz alta, parejas y corrección diferida; si el patrón persiste con mucha angustia, lo trata con coordinación y sugiere consultar con un profesional sin etiquetar.',
    },
    quiz: [
      { p: '¿Cuándo avanza un estudiante de inglés según el modelo Chanak?', opciones: ['Cuando pasa el calendario', 'Cuando demuestra dominio', 'Cuando la familia lo pide', 'Nunca'], correcta: 1, explica: 'La progresión es por dominio (Mastery Learning).' },
      { p: '¿Puede un Educational Assessment Specialist diagnosticar un trastorno?', opciones: ['Sí, si tiene experiencia', 'No: su trabajo es educativo y no clínico', 'Solo en España', 'Solo con permiso de la familia'], correcta: 1, explica: 'No diagnostica; deriva a un profesional con licencia.' },
      { p: '¿Qué significa REFER TO LICENSED PROFESSIONAL?', opciones: ['Ignorar el caso', 'Describir lo observado, informar a coordinación y orientar a la familia a consultar con un profesional', 'Hacer un informe psicológico', 'Cambiar de materia al estudiante'], correcta: 1, explica: 'Se describe, se informa y se orienta; la decisión de consultar es de la familia.' },
      { p: 'En una sesión grupal de Life Skills, ¿qué medida de seguridad se aplica?', opciones: ['Un solo adulto sin registro', 'Más de un adulto o espacio visible y asistencia registrada por ID', 'Sesiones privadas sin aviso', 'Grabarlas sin consentimiento'], correcta: 1, explica: 'Se aplican reglas de seguridad y comunicación transparente con familias.' },
      { p: '¿Qué hace un facilitador si un estudiante comparte algo preocupante?', opciones: ['Investiga por su cuenta', 'Aplica el protocolo de Safeguarding', 'Lo comenta con otras familias', 'Lo ignora'], correcta: 1, explica: 'Se aplica Safeguarding sin investigar por cuenta propia.' },
    ],
    evidencia:
      'Elige una de las cuatro rutas de especialista y describe en 8–10 líneas un caso con ID (sin datos personales): qué observas, qué ajustas y cuándo derivarías.',
  },
}
