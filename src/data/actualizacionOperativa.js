// Revisión de contenido; no cambia las claves de progreso ni la versión del examen.
export const REVISION_OPERATIVA = '2026-11-04'
export const GUIAS_NOVIEMBRE = [
  { perfil: 'mentor', titulo: 'Reunión mensual del mentor general', url: '/manuales/reunion-mensual-mentor-general.pdf' },
  { perfil: 'english_teacher', titulo: 'Clase grupal de Inglés', url: '/manuales/clase-grupal-ingles.pdf' },
  { perfil: 'lifeskills_facilitator', titulo: 'Clase grupal de Life Skills', url: '/manuales/clase-grupal-life-skills.pdf' },
]
export const ACTUALIZACION_OPERATIVA = [
  { id: 'mensual', perfiles: ['mentor'], modulos: ['T2.1', 'T3.4', 'T4.2'], titulo: 'Mentor general: reunión mensual y seguimiento acordado', pasos: [
    'Antes de la reunión mensual, abre el estudiante asignado en SIS y confirma programa, grado, año y trimestre. Revisa diagnóstico, PEI vigente, evidencias, notas, Extensión Local y Life Skills. Anota preguntas y pendientes verificables.',
    'Escucha a la familia y al estudiante, reconoce un avance concreto y revisa el ritmo. Acuerda el plan del siguiente mes: objetivo, acción, responsable y fecha. Si hace falta modificar el PEI, propón el ajuste a Coordinación para su aprobación.',
    'Después registra un resumen objetivo en el SIS, los acuerdos y las derivaciones. Comprueba las alertas abiertas y el siguiente punto de revisión. No registres diagnósticos clínicos ni información sensible innecesaria.',
    'La reunión mensual no incluye automáticamente seguimiento semanal ni tutoría individual adicional. La familia supervisa la rutina diaria. Si un servicio o paquete contempla seguimiento adicional, aplica únicamente lo contratado y asignado; documenta su alcance.'
  ] },
  { id: 'ingles', perfiles: ['english_teacher'], modulos: ['T2.2', 'T2.4'], titulo: 'Inglés: preparar, enseñar, evaluar y comunicar', pasos: [
    'Confirma grupo, nivel y estudiantes asignados. Foundation, Practice y English Tonic no equivalen por sí mismos a English I–IV con crédito. Inglés y Life Skills son opcionales en Off-Campus, incluidos en Dual Diploma según su programa, o servicios independientes contratados.',
    'Prepara un objetivo de la secuencia, un modelo, práctica guiada y producción del estudiante. Abre con bienvenida y asistencia; distribuye turnos y comprueba que todos puedan participar.',
    'Cierra con una fortaleza, una mejora, cómo revisarla y fecha de entrega. Registra asistencia, participación, tarea y evaluación como conceptos separados. Los comentarios privados del docente no sustituyen un mensaje visible para la familia.',
    'SIS → Clases y Life Skills → Inglés · clases en vivo: registra la participación y usa el aviso institucional con los destinatarios correctos. Si necesitas una alerta formal y tu cuenta no ofrece esa acción, deriva al mentor general o a Coordinación.',
    'En Dual Diploma revisa y evalúa solo tu área en su LMS. Una revisión formativa no aprueba automáticamente el trimestre ni concede créditos. SIS y Dual Diploma mantienen cuentas, permisos y bases separadas; Coordinación concilia el expediente.'
  ] },
  { id: 'lifeskills', perfiles: ['lifeskills_facilitator'], modulos: ['T2.3'], titulo: 'Life Skills: clase grupal, evidencia y protección', pasos: [
    'La referencia del instructivo es cuatro clases de 60 minutos al mes, hasta siete estudiantes, con grupos operativos 12–15 y 16–17. Confirma la asignación, el programa y la edad: estas agrupaciones no sustituyen los niveles curriculares ni la alternativa Junior.',
    'Define habilidad → actividad observable → evidencia → criterio. Secuencia orientativa de la clase: 5 minutos bienvenida, 5 objetivo, 10 modelo, 20 trabajo grupal, 12 proyecto, 5 reflexión y 3 cierre.',
    'Permite ejemplos ficticios y la opción de pasar. No obligues a revelar situaciones personales ni permitas capturas o difusión de la clase. Ante una preocupación de protección, sigue el protocolo institucional y escala sin investigarla en grupo.',
    'Registra por separado asistencia, participación, evidencia y estado del proyecto. La rúbrica 40/30/30 y el umbral de 80 corresponden al proyecto oficial del LMS, no a toda cápsula, asistencia o actividad del SIS. Informa al mentor general de apoyos y pendientes.',
    'La clase grupal no sustituye la reunión mensual con la familia ni una tutoría individual. Antes de reconocer un logro con Coins, comprueba si la actividad ya lo generó automáticamente.'
  ] },
  { id: 'sis', perfiles: ['mentor', 'english_teacher', 'lifeskills_facilitator'], modulos: ['T3.4', 'T4.2'], titulo: 'SIS actual: expediente, estados y permisos', pasos: [
    'La vista del mentor revisada contiene Mis Estudiantes, Evidencias, PEI / Eval. M.L., Clases y Life Skills, Diagnósticos y Alertas. Usa solo los estudiantes y funciones asignados. No busques la antigua pestaña Carga Eval. M.L. como un paso obligatorio del mentor.',
    'Antes de evaluar, comprueba alumno, materia, periodo, archivo y autoría. Distingue Borrador, En revisión, Aprobado y Rechazado; una nota visible no demuestra aprobación oficial. Pide correcciones precisas y evita duplicar una evaluación vinculada a una evidencia.',
    'Preparar un PEI, consultar notas o revisar una entrega no concede la facultad de aprobar el PEI, publicar boletines o convalidar créditos. Si falta una función, solicita revisión de tu asignación; no utilices otra cuenta.',
    'El código contiene solicitudes de cita con estados Pendiente, Programada, Realizada y Cancelada. Una solicitud no confirma la cita: hay que acordar horario y zona horaria. Antes de enseñar esta función a familias, confirma su disponibilidad en la pantalla de su cuenta; la presencia de un componente no demuestra que esté desplegado.'
  ] },
  { id: 'coins', perfiles: ['mentor', 'english_teacher', 'lifeskills_facilitator'], modulos: ['T2.3', 'T4.2'], titulo: 'Coins: catálogo vigente y carteles todavía propuestos', pasos: [
    'Motiva con un objetivo alcanzable y evidencia concreta. Comprueba el historial, el mérito y el alumno antes de otorgar Coins. No dupliques un mérito automático ni uses descuentos como castigo improvisado.',
    'El catálogo revisado del SIS contempla 50 por participación Life Skills, 30 por cápsula/reto, 100 por proyecto y 20 por hábito devocional semanal. Comprueba siempre la acción y cantidad que propone el sistema vigente; estos méritos no sustituyen una calificación.',
    'Los tres carteles entregados en español, catalán e inglés son PROPUESTAS. Sus importes +20 participación, +20 respeto y +50 tarea están pendientes de validación y no sustituyen el catálogo del SIS. No los publiques como política aprobada.'
  ] },
  { id: 'esa', perfiles: ['mentor'], modulos: ['T2.1'], titulo: 'Florida: respaldo académico y financiación son verificaciones distintas', pasos: [
    'Confirma el programa real del estudiante y el servicio autorizado. Un apoyo Home Education Instructional Program no equivale automáticamente a matrícula escolar completa, diploma, transcript ni créditos.',
    'No prometas cobertura de un servicio remoto por el hecho de que un ítem esté aprobado: el manual oficial de proveedores limita la modalidad online de HEIP. La compatibilidad del servicio concreto debe confirmarse por escrito con Step Up antes de ofrecerlo o facturarlo.',
    'El informe mensual de Chanak no sustituye la evaluación anual exigida al estudiante. Home Education de distrito y PEP tienen obligaciones diferentes. Deriva dudas de elegibilidad, cobro y documentación anual a la persona autorizada.',
    'Las tarifas, ítems, estado de aprobación y procedimientos de pago se consultan solo en la documentación restringida de Estrategia y Administración. Nunca pidas credenciales EMA a una familia ni prometas reservar su saldo.'
  ] },
]
