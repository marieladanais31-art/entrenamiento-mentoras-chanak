import { COBERTURA_ESPECIALISTAS } from './modalidadesEspecialistas.js'

export const MANUAL_COORDINACION = {
  cobertura: COBERTURA_ESPECIALISTAS,
  version: '2026-10-23',
  titulo: 'Coordinación académica · Perfil y manual operativo del SIS',
  proposito: 'Que cada estudiante del ámbito asignado tenga un plan vigente, acompañamiento definido, evidencias revisadas y un expediente coherente. La coordinadora supervisa el trabajo académico; no es una administradora global por el nombre de su cargo.',
  alcance: [
    { titulo: 'Centro o hub físico', texto: 'Supervisa estudiantes y equipo del centro asignado. La presencia física no concede acceso a otros hubs ni sustituye los requisitos locales del establecimiento.' },
    { titulo: 'Centro o grupo virtual / Off-Campus', texto: 'Coordina el seguimiento a distancia, los responsables de cada alumno, las entregas y la comunicación con familias. No reemplaza la supervisión cotidiana de los padres.' },
    { titulo: 'Colegio o institución aliada', texto: 'Actúa en los programas, estudiantes y responsabilidades del convenio. Un director partner puede asumir coordinación si se le asigna; no recibe por ello privilegios generales de Administración.' },
    { titulo: 'Dual Diploma', texto: 'Supervisa la parte Chanak del programa y los documentos del centro de origen dentro de su asignación. El SIS y el LMS Dual tienen cuentas, permisos y bases separados.' },
  ],
  equipo: [
    ['Mentor general', 'Acompaña al alumno y la familia, custodia el ritmo y detecta brechas del conjunto del plan.', 'La coordinadora comprueba calidad del seguimiento, prioridades y escalamiento; no confunde seguimiento con docencia de todas las áreas.'],
    ['Profesor de Inglés', 'Enseña y evalúa Inglés de sus estudiantes y grupos asignados; registra participación y devuelve feedback.', 'La coordinadora comprueba asignación, nivel, entregas pendientes y oportunidad de la revisión; no da por evaluado Inglés por una conexión.'],
    ['Profesor / mentor de Life Skills', 'Acompaña habilidades, proyectos, rasgos y restauración en su área.', 'La coordinadora distingue cápsula, evidencia, proyecto aprobado y coins. Revisa que la rúbrica corresponda al programa.'],
    ['Dirección / Administración', 'Define autorizaciones institucionales, cuentas, convenios, tarifas y decisiones oficiales de su competencia.', 'La coordinadora presenta evidencia y propone; no negocia becas, cambia precios ni concede acreditación o permisos globales.'],
  ],
  accesos: [
    'Inicia con tu cuenta en SIS → /coordinator. Comprueba nombre, rol, hub y estudiantes antes de tocar un registro.',
    'Si aparece Coordinador sin hub asignado, solicita la asignación a Administración. Si ves alumnos ajenos o un alcance inesperado, no operes esos expedientes y comunica la incidencia.',
    'El código muestra un aviso sin hub, pero algunas consultas solo añaden el filtro cuando existe hub_id. No se ha comprobado el aislamiento efectivo de las cuentas en producción; no se enseña ese aviso como garantía de bloqueo.',
    'Confirma aparte tu acceso y estudiantes en Dual Diploma. Tener el mismo correo no significa compartir permisos o sincronizar contraseñas.',
  ],
  procedimientos: [
    {
      id: 'estudiantes', titulo: '1. Estudiantes & Asignaciones', objetivo: 'Que ningún alumno quede sin responsable y que las especialidades no se confundan.',
      pasos: [
        'Abre Estudiantes & Asignaciones. Filtra y localiza al alumno por su identidad y programa; comprueba que pertenece a tu centro o ámbito autorizado.',
        'Revisa el Profesor/tutor asignado. El selector del panel modifica el tutor principal del estudiante: cambiarlo puede sustituir a quien acompaña el plan general.',
        'Antes de cambiar, acuerda quién asume el seguimiento y desde cuándo. Revisa pendientes y deja una entrega de información entre responsables.',
        'Para añadir Inglés o Life Skills sin reemplazar al mentor general, solicita o utiliza la herramienta institucional de asignaciones por especialidad, si tienes acceso. El SIS mantiene una asignación separada por tipo de mentor; no conviertas el selector del tutor principal en una lista de especialistas.',
        'Comprueba la confirmación del cambio y vuelve a consultar el alumno. Verifica con el docente que puede ver únicamente el ámbito que le corresponde.',
        'Imprime o exporta solo los estudiantes autorizados. Guarda el reporte en el canal institucional; no envíes listados completos a grupos abiertos.'
      ], cierre: 'Alumno con mentor general definido y especialistas identificados, sin perder al responsable anterior por error.',
      caso: 'Necesitas asignar Inglés y el alumno ya tiene mentora general. ¿Cambias el tutor principal por la profesora de Inglés?', respuesta: 'No por rutina. Conserva el responsable general y tramita la asignación especializada de Inglés. Si procede una sustitución real, documenta el traspaso.'
    },
    {
      id: 'notas', titulo: '2. Notas', objetivo: 'Consultar y gestionar el registro del alumno, asignatura y periodo correctos.',
      pasos: [
        'Selecciona alumno, año y trimestre antes de abrir la materia. Comprueba la vía y el programa; no copies una estructura Off-Campus a Dual por tener el mismo nombre de asignatura.',
        'Abre las entradas de evaluación. Contrasta nota, fecha y referencia con su evidencia. Detecta duplicados, notas sin archivo y pendientes.',
        'Comprueba la media de las entradas de esa asignatura: 80 y 100 dan 90. Distingue ese cálculo del promedio global por bloques 60/20/20 del SIS, que renormaliza los bloques con nota.',
        'Una cifra visible no prueba aprobación: consulta el estado. Un bloque sin nota tampoco equivale automáticamente a cero o a un bloque completado.',
        'Corrige solo un error demostrado y dentro de tu autorización, dejando el motivo. Si el registro está enviado o aprobado, utiliza su circuito de revisión o devolución; no borres el historial para editar libremente.',
        'Guarda y comprueba el resultado. Si hay una discrepancia entre archivo, entrada y promedio, resuélvela antes de trasladar el dato al boletín.'
      ], cierre: 'Notas verificables y pendientes identificados por alumno, materia y trimestre.',
      caso: 'El promedio es alto pero falta la evidencia de una evaluación. ¿Das por terminado el trimestre?', respuesta: 'No. Comprueba qué nota carece de respaldo, solicita la evidencia o corrección y conserva el pendiente hasta resolverlo.'
    },
    {
      id: 'revision', titulo: '3. Revisar Notas', objetivo: 'Resolver formalmente las propuestas de notas enviadas por familias o tutores.',
      pasos: [
        'Abre Revisar Notas y selecciona año y estado. Empieza por los envíos pendientes de tu ámbito.',
        'Comprueba alumno, asignatura, trimestre, quién envió y las entradas. Abre las evidencias necesarias; no valides solo el promedio.',
        'Escribe una observación útil con el hecho y el siguiente paso. Aunque la interfaz pueda aceptar un comentario vacío, una devolución necesita explicar qué corregir.',
        'Elige Aprobar si el envío cumple, Solicitar corrección si necesita subsanación o Rechazar cuando corresponda con justificación.',
        'Confirma el mensaje y el nuevo estado. En la devolución, comunica a la familia o al mentor qué registro debe corregir y cuándo se revisará de nuevo.',
        'Regresar a borrador es una acción explícita para reabrir correcciones; no es una forma de ocultar una aprobación anterior. Utilízala solo con motivo y permiso.'
      ], cierre: 'Decisión registrada y responsable informado; no quedan devoluciones sin instrucciones.',
      caso: 'El tutor envió una nota en el trimestre equivocado. ¿Apruebas y ajustas después el boletín?', respuesta: 'Solicita la corrección del periodo por el flujo de revisión, explica el error y vuelve a revisar el envío corregido antes del cierre.'
    },
    {
      id: 'evidencias', titulo: '4. Evidencias', objetivo: 'Comprobar el trabajo del alumno y su vínculo con la nota.',
      pasos: [
        'Abre Evidencias y filtra los pendientes del ámbito correspondiente. Comprueba alumno, asignatura, año, trimestre y tipo de evidencia.',
        'Abre el archivo. Verifica autoría, consigna, páginas completas y legibilidad. Un enlace a una carpeta o un archivo que no puedes abrir no demuestra dominio.',
        'Comprueba la puntuación y el criterio del programa. El flujo revisado de PACE Test exige al menos 80; no apliques una regla de un tipo de evaluación a cualquier actividad.',
        'Aprueba solo cuando corresponda o solicita una corrección concreta; por ejemplo, volver a escanear la segunda página. Deja feedback respetuoso.',
        'Al aprobar, revisa la entrada de nota vinculada: el flujo puede crearla o actualizarla. No vuelvas a registrar el mismo examen manualmente.',
        'Si notas y evidencias tienen estados distintos, concilia ambos antes de declarar cerrado el expediente.'
      ], cierre: 'Archivo revisado, decisión trazable y nota vinculada sin duplicados.',
      caso: 'Apruebas una evidencia y aparece una nueva entrada de nota. ¿La añades también en Notas?', respuesta: 'No. Comprueba el vínculo ya creado, la nota y el periodo; solo corrige una discrepancia real por el procedimiento autorizado.'
    },
    {
      id: 'pei', titulo: '5. PEI / Eval. M.L.', objetivo: 'Mantener una planificación individual justificada y vigente.',
      pasos: [
        'Abre PEI / Eval. M.L. y el alumno correcto. Comprueba año, trimestre, estado y diagnóstico antes de pulsar Ver / Editar PEI y Eval. M.L. o Crear PEI.',
        'Revisa nivel real, vía curricular, objetivos, materiales, apoyos, secuencia y proyección de evaluaciones. No asignes un nivel solo por edad o por terminar un cuaderno.',
        'Contrasta la propuesta con el mentor general y, cuando corresponda, con Inglés y Life Skills. Comprueba que la carga sea posible para la familia.',
        'El formulario distingue Borrador, En revisión, Aprobado y Publicado. Preparar, aprobar y publicar son decisiones diferentes; ejecuta solo la que te haya delegado Dirección.',
        'Antes de publicar, comprueba los datos y la comunicación con la familia. Si se requiere cambio de vía o una adaptación relevante, tramita la validación académica y conserva el motivo.',
        'Después de guardar o cambiar un estado, vuelve a consultar el plan. El botón disponible no sustituye una autorización institucional.'
      ], cierre: 'Plan coherente con el diagnóstico y el programa, con estado y responsables claros.',
      caso: 'El formulario deja publicar, pero Dirección todavía no ha validado el cambio de vía. ¿Publicas?', respuesta: 'No. La disponibilidad técnica no equivale a delegación. Conserva la propuesta, documenta el motivo y solicita la validación correspondiente.'
    },
    {
      id: 'carga-masiva', titulo: '6. Carga Eval. M.L.', objetivo: 'Registrar evaluaciones realizadas sin convertir proyecciones en resultados.',
      pasos: [
        'Selecciona estudiante, ciclo y trimestre. Revisa el PEI y las evaluaciones que se proyectaron.',
        'Usa la carga de evaluaciones proyectadas solo para preparar las filas correspondientes; una evaluación prevista no es una evaluación realizada.',
        'Contrasta cada referencia, fecha y puntuación con su evidencia. No rellenes una nota para eliminar un hueco.',
        'Comprueba si el examen ya existe o si una aprobación de evidencia lo registró. No dupliques por usar además la carga masiva.',
        'Guarda por el flujo disponible y comprueba el resumen y los errores. Solicita revisión cuando el resultado siga pendiente.'
      ], cierre: 'Evaluaciones reales registradas una sola vez en el periodo correcto.',
      caso: 'La proyección tiene cuatro evaluaciones y solo se realizaron dos. ¿Qué registras?', respuesta: 'Las dos realizadas y respaldadas. Las otras conservan su condición de pendientes o se replantean en el PEI con autorización.'
    },
    {
      id: 'seguimiento', titulo: '7. Seguimiento', objetivo: 'Detectar atrasos y organizar apoyos con el equipo.',
      pasos: [
        'Abre Seguimiento y verifica año, trimestre y ámbito. Contrasta las evaluaciones previstas con las entregadas y revisadas.',
        'Distingue falta de trabajo, falta de envío y revisión pendiente. Antes de reclamar una entrega busca si ya existe en Evidencias.',
        'Identifica al responsable: mentor general para el plan global; docente de Inglés o Life Skills para su área. Reúne información sin duplicar mensajes contradictorios.',
        'Acuerda una acción pequeña, un responsable y una fecha de revisión. Comprueba condiciones familiares, acceso y necesidades de apoyo antes de atribuir el atraso a desinterés.',
        'Descarga la hoja o el reporte disponible cuando necesites dejar una referencia institucional, sin distribuir datos de otros alumnos.',
        'En la revisión siguiente comprueba el resultado y escala los bloqueos persistentes o necesidades especializadas. Protección del menor se atiende de inmediato por su protocolo.'
      ], cierre: 'Cada pendiente tiene causa revisada, apoyo, responsable y próxima comprobación.',
      caso: 'La familia entregó hace una semana y sigue apareciendo atraso. ¿Qué haces?', respuesta: 'Localiza el archivo, revisa el estado y quién debe evaluarlo. Si el retraso es de revisión, organiza esa revisión en lugar de pedir otra entrega a la familia.'
    },
    {
      id: 'boletines', titulo: '8. Boletines', objetivo: 'Preparar un reporte de periodo fiel al expediente y publicarlo con autorización.',
      pasos: [
        'Abre Boletines → Crear boletín o Ver / Editar. Confirma estudiante, año y trimestre: un boletín de periodo no es automáticamente el transcript final.',
        'Contrasta las materias con el PEI y las notas aprobadas. El generador permite traer entradas aprobadas y también conservar contenido manual; revisa cada fila y su respaldo.',
        'Revisa evaluaciones y evidencias pendientes. No marques como aprobada una materia solo porque el documento permite escribir una nota.',
        'Comprueba nombres de cursos, nota final, estado, créditos si aplican y comentarios. Un alumno de primaria no recibe créditos de High School por sumar actividades.',
        'Sigue Borrador → En revisión → Aprobado → Publicado únicamente según la delegación institucional. Guardar un borrador no significa que la familia vea una publicación oficial.',
        'Revisa el PDF antes de entregarlo y confirma acceso de la familia por el canal autorizado. Si encuentras un error publicado, tramita una corrección trazable; no sustituyas silenciosamente un documento oficial.'
      ], cierre: 'Boletín coherente, revisado y publicado o entregado con la autorización correspondiente.',
      caso: 'Un curso aparece escrito en el boletín, pero su nota no está aprobada en el expediente. ¿Lo publicas?', respuesta: 'No por esa fila escrita. Resuelve la revisión y verifica el respaldo antes de publicar por el circuito institucional.'
    },
    {
      id: 'dual-diploma', titulo: '9. Dual Diploma (Descarga & Créditos)', objetivo: 'Supervisar la información del Dual sin confundir SIS, LMS y documentos del centro de origen.',
      pasos: [
        'En la pestaña Dual Diploma (Descarga & Créditos) comprueba alumnos del hub y sus datos de programa, centro de origen y créditos registrados.',
        'Utiliza búsquedas, impresión y exportación para revisar lo que existe; un reporte de créditos no aprueba por sí solo una convalidación.',
        'En el LMS, con tu cuenta y asignación propias, revisa pendientes, unidades y evidencias. Distingue actividad completada, unidad aprobada, curso completado y crédito reconocido.',
        'Para convalidar solicita el documento académico de origen, verifica periodo, materia y equivalencia y conserva la decisión del responsable autorizado. No prometas créditos a partir de un nombre parecido de curso.',
        'La exportación LMS → SIS produce un archivo para importación y conciliación por identificador SIS. No es una réplica automática de todas las notas.',
        'Si no coincide un crédito, comunica la referencia a secretaría/Administración para revisar el cruce y el historial. No crees otra fila manual para hacer cuadrar el total.'
      ], cierre: 'Créditos y pendientes conciliados por el circuito autorizado, sin duplicados ni promesas de convalidación.',
      caso: 'El LMS tiene un curso aprobado y el SIS todavía no muestra su crédito. ¿Lo añades manualmente?', respuesta: 'Primero comprueba si corresponde crédito y solicita revisar exportación/importación e identificador. Una copia manual puede duplicar el resultado después.'
    },
    {
      id: 'pagos', titulo: '10. Estatus Pagos', objetivo: 'Consultar la formalización y derivar incidencias económicas sin invadir Administración.',
      pasos: [
        'Abre Estatus Pagos y revisa el alumno, estado y periodo. Los filtros incluyen Todos, Pagados / Al día, Pendientes y Beca 100%.',
        'Distingue lo que muestra el sistema de un pago verificado o de una beca formalmente autorizada. Si la familia aporta un justificante, remítelo por el canal administrativo.',
        'Coordina con Administración las acciones sobre materiales o accesos que estén expresamente autorizadas. No negocies precios, concedas becas ni cambies importes desde la función académica.',
        'Mantén la comunicación respetuosa y privada. No expongas deudas ante docentes o alumnos que no necesitan conocerlas.',
        'Registra a quién se derivó y cuándo se comprobará la respuesta. No alteres notas, coins o resultados para presionar el pago.'
      ], cierre: 'Discrepancia remitida al responsable económico y seguimiento definido.',
      caso: 'La familia muestra un justificante, pero el estado sigue Pendiente. ¿Cambias la nota o bloqueas por tu cuenta?', respuesta: 'No. Remite el justificante a Administración y aplica solo las instrucciones institucionales autorizadas, sin manipular el expediente académico.'
    },
    {
      id: 'alertas', titulo: '11. Alertas', objetivo: 'Registrar una incidencia académica útil y comprobar que se atiende.',
      pasos: [
        'Abre Alertas. Revisa las activas y sus prioridades antes de crear otra sobre el mismo hecho.',
        'En Crear alerta académica selecciona estudiante, comentario/motivo, prioridad Baja, Media o Alta y destinatario Padre, Estudiante, Mentor, Coordinador o Admin.',
        'Escribe el hecho y periodo, la acción solicitada y una fecha de seguimiento. Ejemplo: “Q1: falta la segunda página de Science; subir el archivo completo antes del jueves; revisamos el viernes”.',
        'Pulsa Crear y Actualizar. Comprueba el registro y su destinatario: pulsar un botón no prueba guardado ni lectura, y no significa que se haya enviado un correo.',
        'Distingue esta alerta del aviso de la próxima clase de Inglés, que se envía desde el seguimiento de esa clase a los alumnos seleccionados.',
        'Verifica después la entrega, corrección o contacto. Si afecta a seguridad o protección, sigue el protocolo específico inmediatamente; no utilices una alerta académica como única respuesta.'
      ], cierre: 'Alerta concreta registrada, con responsable y comprobación posterior.',
      caso: 'Ya mandaste un aviso, pero no hay respuesta. ¿Consideras cerrado el caso?', respuesta: 'No. Comprueba registro, canal y situación real; contacta por el procedimiento institucional y escala cuando corresponda.'
    },
  ],
  coins: [
    'La coordinadora supervisa que cada mérito tenga un hecho verificable, alumno correcto y reconocimiento no duplicado. El mentor general y los especialistas motivan desde su ámbito; los coins no sustituyen la nota.',
    'En el panel CoordinatorDashboard revisado no se localizó un botón propio Otorgar Coins ni una pestaña ChanakCoins. No se enseña una ruta inexistente: el otorgamiento se hace desde una herramienta autorizada por asignación o se deriva al responsable.',
    'Si tienes asignada además una función con Otorgar Coins, comprueba acción, cantidad del catálogo, motivo, referencia del examen y movimiento existente antes de confirmar. No uses otra cuenta para obtener el botón.',
    'El ajuste y la restauración deben ser proporcionales y seguir la política vigente. No descontar por una duda, una dificultad de aprendizaje o un pago pendiente; no valorar la identidad del alumno por un radar.',
  ],
  rutina: [
    ['Al comenzar', 'Revisa ámbito, Alertas y envíos pendientes; prioriza protección y bloqueos de acceso.'],
    ['En cada revisión', 'Alumno, programa, periodo, evidencia, criterio, decisión, comentario y estado guardado.'],
    ['Con el equipo', 'Comprueba responsables, pendientes de Inglés/Life Skills, calidad del feedback y carga de trabajo. Acuerda acciones y fechas.'],
    ['Con la familia', 'Ofrece un próximo paso comprensible y un canal concreto. Evita tres mensajes contradictorios de tres responsables.'],
    ['Antes del cierre', 'Concilia PEI, notas aprobadas, evidencias, créditos cuando apliquen y boletín. Separa incidencias académicas y económicas.'],
    ['Al terminar', 'Deja responsable y fecha para cada pendiente; comunica a Dirección los bloqueos que requieren decisión.'],
  ],
  registros: ['Listado de responsables por alumno y especialidad.', 'Revisión de notas y evidencias con comentario y estado.', 'Plan y cambios de vía con su validación.', 'Registro de incidencias, apoyos y fecha de seguimiento.', 'Informe de cierre y boletín revisado.', 'Referencias de convalidaciones y conciliaciones autorizadas cuando apliquen.'],
  fuentes: [
    'SIS 0386a1887970cbd022c449cb8964b2c93295d31a: App.jsx confirma CoordinatorDashboard en /coordinator; se revisaron sus once pestañas.',
    'CoordinatorDashboard, GradeReviewPanel, EvidenceReviewPanel, PEIFormFull, TranscriptGenerator, EvaluationTrackingReport, HubDualDiploma y AdminStudentMentors.',
    'SIS: SisAlertsDashboard, AwardCoinsButton y academicUtils; Dual Diploma: sis-export, staff-scope y guías docentes revisados en la documentación del manual de mentoras.',
    'La revisión es de código, no de una sesión real ni de permisos efectivos en producción. Algunas transiciones, filtros y asignaciones necesitan comprobación institucional antes de ampliar cuentas.',
  ],
}
