// BLOQUE 7 — USA STATE PROGRAMS / COMPLIANCE (por rol) · BLOQUE 8 — COORDINATOR TRACK
// Fuente: 07_US_PROGRAMS_COMPLIANCE, 08_ACADEMIC_POLICIES, 03_INSTITUCIONES (PLC, Acuerdo Marco y adenda)

export const BLOQUES_7_8 = {
  'T7.1': {
    resumen:
      'Solo para quienes atienden familias de Florida con becas. Step Up For Students gestiona el Education Market Assistant (EMA). Chanak tiene aprobado un servicio concreto: Matrícula.',
    objetivos: ['Describir el estado aprobado en EMA.', 'Explicar STATE FUNDING ≠ CURRICULUM.', 'Orientar a familias sin prometer financiación.'],
    lecciones: [
      {
        titulo: 'Qué está aprobado',
        guion: [
          'Proveedor: Chanak TrainUp Education, Inc. Servicio aprobado en el Marketplace EMA: Matrícula.',
          'Cualquier servicio adicional requiere su propia revisión y aprobación por EMA. No se presenta como aprobado lo que no lo está.',
          'Los servicios disponibles y los gastos elegibles dependen de la beca del estudiante, de las reglas de EMA y de las ofertas aprobadas en el Marketplace.',
        ],
      },
      {
        titulo: 'STATE FUNDING ≠ CURRICULUM',
        guion: [
          'El programa estatal es una capa de acceso, financiación y cumplimiento; no cambia el modelo académico de Chanak ni su marco orientado al dominio.',
          'La elegibilidad la determina siempre el programa estatal. Nada de lo que diga el mentor garantiza que una beca cubra un gasto concreto.',
          'Las preguntas sobre pagos con fondos estatales se derivan a Chanak Administration.',
        ],
      },
    ],
    practica: {
      situacion: 'Una familia de Florida pregunta: «¿La beca pagará también los materiales y las clases particulares con vosotros?».',
      preguntas: ['¿Qué está aprobado y qué no?', '¿Qué respondes sin prometer?', '¿A quién derivas?'],
      criterio: 'Aprobado: servicio Matrícula. Otros servicios requieren aprobación separada; la elegibilidad la decide el programa. Derivar a Chanak Administration.',
    },
    quiz: [
      { p: '¿Qué servicio de Chanak está aprobado en EMA?', opciones: ['Todos los servicios', 'Matrícula', 'Materiales', 'Tutorías'], correcta: 1, explica: 'Solo el servicio Matrícula está aprobado.' },
      { p: '¿Qué significa STATE FUNDING ≠ CURRICULUM?', opciones: ['Que el estado decide el currículo', 'Que el programa estatal es acceso/financiación, no el modelo académico', 'Que no hay becas', 'Que el currículo cambia según la beca'], correcta: 1, explica: 'La financiación no define el currículo.' },
      { p: '¿Quién determina la elegibilidad de un gasto?', opciones: ['El mentor', 'El programa estatal', 'La familia', 'Chanak sin consultar'], correcta: 1, explica: 'Siempre el programa estatal.' },
      { p: 'Una familia quiere confirmación de que la beca cubre todo. ¿Qué haces?', opciones: ['Confirmar', 'Explicar el estado aprobado y derivar a Chanak Administration', 'Decir que no cubre nada', 'Cambiar el contrato'], correcta: 1, explica: 'Sin promesas; derivar.' },
    ],
    evidencia: 'Redacta tu respuesta a la familia del caso práctico (máx. 6 líneas).',
  },

  'T7.2': {
    resumen:
      'Solo para quienes atienden familias de Alabama o gestionan pruebas exigidas por programas estatales. Chanak es Approved Education Service Provider en Alabama CHOOSE.',
    objetivos: ['Describir el estado en Alabama CHOOSE.', 'Usar la terminología correcta.', 'Consultar requisitos de pruebas por estado.'],
    lecciones: [
      {
        titulo: 'Alabama CHOOSE',
        guion: [
          'Chanak es Approved Education Service Provider (ESP) en Alabama CHOOSE. El onboarding en ClassWallet (banco y perfil) está en curso.',
          'No se usa «Approved Virtual School» mientras ClassWallet o ALDOR no confirmen esa clasificación.',
          'Los servicios elegibles, la participación de las familias y la financiación dependen de las reglas de CHOOSE y de la elegibilidad del estudiante.',
        ],
      },
      {
        titulo: 'Pruebas estandarizadas por estado',
        guion: [
          'Algunos programas estatales exigen pruebas propias (categoría C). No son un requisito universal de Chanak: dependen del estado, la beca y el programa.',
          'Consulta la política State-Specific Standardized Assessment Requirements y la US State Assessment Compliance Matrix antes de responder.',
        ],
      },
    ],
    practica: {
      situacion: 'En un folleto local alguien escribe «Chanak, Approved Virtual School de Alabama, con examen estatal obligatorio para todos sus alumnos».',
      preguntas: ['¿Qué dos errores hay?', '¿Cómo debe decirse?', '¿Dónde lo verificas?'],
      criterio: 'Correcto: Approved Education Service Provider (ESP), ClassWallet onboarding en curso; pruebas según programa y estudiante, no universales.',
    },
    quiz: [
      { p: '¿Cuál es el estado correcto de Chanak en Alabama CHOOSE?', opciones: ['Approved Virtual School', 'Approved Education Service Provider (ESP)', 'En solicitud', 'No participa'], correcta: 1, explica: 'Approved ESP, onboarding ClassWallet en curso.' },
      { p: '¿Se puede usar «Approved Virtual School»?', opciones: ['Sí', 'No, hasta que exista confirmación de ClassWallet o ALDOR', 'Solo en folletos', 'Solo en inglés'], correcta: 1, explica: 'No hasta confirmación.' },
      { p: '¿Las pruebas estatales son obligatorias para todos los alumnos Chanak?', opciones: ['Sí', 'No: dependen del estado, la beca y el programa', 'Solo en Alabama', 'Solo en primaria'], correcta: 1, explica: 'Categoría C, no universal.' },
      { p: '¿Dónde verificas los requisitos de pruebas de un estado?', opciones: ['En redes', 'En la política State-Specific y la matriz de cumplimiento', 'En el Portal de familias', 'Preguntando a otra familia'], correcta: 1, explica: 'Documentos 08 y 09.' },
    ],
    evidencia: 'Corrige el texto del folleto del caso práctico.',
  },

  'T8.1': {
    resumen:
      'El coordinador garantiza la calidad del equipo de mentores: observa, revisa registros, da retroalimentación y sostiene planes de mejora.',
    objetivos: ['Observar con rúbrica.', 'Dar retroalimentación útil.', 'Diseñar planes de mejora.'],
    lecciones: [
      {
        titulo: 'Observar y revisar',
        guion: [
          'Rúbrica de supervisión: preparación de la semana, seguimiento y metas, calidad del registro en el SIS, evidencias, comunicación con familias, intervención y límites profesionales.',
          'Combina observación directa (sesiones), revisión de registros y muestras de evidencia.',
        ],
      },
      {
        titulo: 'Retroalimentación y mejora',
        guion: [
          'Retroalimentación concreta: qué funciona, qué falta, qué se espera y para cuándo.',
          'Plan de mejora con objetivos, apoyos y fecha de revisión cuando algo no alcanza el estándar.',
          'La supervisión también cuida al mentor: carga, formación pendiente y apoyo.',
        ],
      },
    ],
    practica: {
      situacion: 'Al revisar a una mentora ves registros semanales impecables pero tres estudiantes sin evidencias en dos semanas y una familia sin respuesta.',
      preguntas: ['¿Qué señales ves?', '¿Qué retroalimentación das?', '¿Qué plan de mejora acuerdas?'],
      criterio: 'Registro sin evidencia es una alerta de calidad; feedback concreto y plan de mejora con revisión.',
    },
    quiz: [
      { p: 'Registros completos pero sin evidencias durante semanas. ¿Qué indica?', opciones: ['Todo está bien', 'Una alerta de calidad: el registro debe apoyarse en evidencia', 'Exceso de trabajo', 'Nada'], correcta: 1, explica: 'Sin evidencia no hay dominio demostrado.' },
      { p: '¿Qué debe tener una buena retroalimentación?', opciones: ['Opiniones generales', 'Hechos, expectativa y plazo', 'Solo elogios', 'Solo críticas'], correcta: 1, explica: 'Concreta y accionable.' },
      { p: '¿Cuándo se abre un plan de mejora?', opciones: ['Nunca', 'Cuando algo no alcanza el estándar', 'Solo si hay quejas', 'Una vez al año'], correcta: 1, explica: 'Se abre ante la brecha.' },
      { p: '¿Qué combina la supervisión?', opciones: ['Solo encuestas', 'Observación, revisión de registros y muestras de evidencia', 'Solo reuniones', 'Solo el SIS'], correcta: 1, explica: 'Varias fuentes.' },
    ],
    evidencia: 'Sube una observación documentada con la rúbrica (anonimizada).',
  },

  'T8.2': {
    resumen:
      'Coordinar un Partner Learning Center exige conocer el Acuerdo Marco: qué hace la entidad local, qué hace Chanak Central y cómo se comunican.',
    objetivos: ['Distinguir responsabilidades de la entidad local y de Chanak.', 'Aplicar requisitos de personal, SIS y protección.', 'Explicar la estructura económica sin negociarla.'],
    lecciones: [
      {
        titulo: 'Responsabilidades según el Acuerdo Marco',
        guion: [
          'Chanak: marco académico y curricular, estándares, criterios de evaluación y promoción, formación y certificación, sistemas, supervisión y calidad, documentación académica, autorización de programas y uso del nombre.',
          'Entidad local: cumplimiento legal y permisos, instalaciones, selección y contratación del personal, protección de estudiantes y datos, uso obligatorio del SIS, información veraz y facilitar las revisiones de calidad.',
          'Coordinadores y mentores deben completar y mantener vigente la formación y certificación de Chanak antes de atender estudiantes.',
        ],
      },
      {
        titulo: 'Lo que el acuerdo no es y su economía',
        guion: [
          'No es una autorización gubernamental, ni una licencia educativa, ni una franquicia, ni una joint venture, ni una autorización automática para abrir varias sedes. Cada nueva sede requiere autorización expresa y escrita.',
          'Estructura económica 2026–2027 (adenda económica al Acuerdo Marco): cuota inicial US$3,500, renovación anual US$800 y US$40 por estudiante. Materiales, shipping, servicios especiales y licencias externas aparte.',
          'El coordinador informa y deriva; las condiciones las fija Chanak por escrito.',
        ],
      },
    ],
    practica: {
      situacion: 'La junta de una iglesia que opera un Partner Learning Center quiere abrir un segundo grupo en otra ciudad «con el mismo acuerdo» y contratar a una persona que aún no ha hecho la formación.',
      preguntas: ['¿Se puede abrir con el mismo acuerdo?', '¿Puede atender estudiantes esa persona?', '¿Qué comunicas a Chanak Central?'],
      criterio: 'Cada sede requiere autorización expresa; nadie atiende estudiantes sin formación/certificación; se comunica por escrito a Chanak Central.',
    },
    quiz: [
      { p: '¿El Acuerdo Marco autoriza abrir varias sedes automáticamente?', opciones: ['Sí', 'No: cada sede requiere autorización expresa y escrita', 'Solo en el mismo país', 'Solo con más alumnos'], correcta: 1, explica: 'No hay autorización automática.' },
      { p: '¿Quién contrata al personal local?', opciones: ['Chanak', 'La entidad local', 'MSA', 'El estado'], correcta: 1, explica: 'Relación laboral con la entidad local.' },
      { p: '¿Qué es obligatorio antes de atender estudiantes?', opciones: ['Nada', 'Formación y certificación Chanak vigente', 'Un título de máster', 'Un año de experiencia'], correcta: 1, explica: 'Requisito previo e indispensable.' },
      { p: '¿Cuál es la estructura económica del PLC 2026–2027?', opciones: ['US$40/mes + US$180 matrícula', 'US$3,500 + US$800 anual + US$40 por estudiante', 'US$500 + tabla', 'Gratuito'], correcta: 1, explica: 'Según la adenda económica al Acuerdo Marco.' },
    ],
    evidencia: 'Haz un mapa de responsabilidades (entidad local / Chanak Central) de tu centro o de un centro ejemplo.',
  },

  'T8.3': {
    resumen:
      'El coordinador revisa que cada expediente tenga evidencia, fechas reales y responsable, y reporta incidencias a Chanak Central con criterio y sin demora.',
    objetivos: ['Auditar un expediente.', 'Gestionar evidencia incompleta.', 'Reportar incidencias.'],
    lecciones: [
      {
        titulo: 'Revisión de evidencias',
        guion: [
          'Cada nota del SIS debe tener evidencia, fecha real y responsable. Revisa una muestra de expedientes por mentor cada periodo.',
          'Evidencia incompleta: se solicita y se completa con trabajo real; nunca se reconstruye a posteriori ni se «ajusta» una fecha.',
          'Discrepancias entre transcript y dominio se documentan y escalan a Chanak Central (posible validación).',
        ],
      },
      {
        titulo: 'Incidencias y reporting',
        guion: [
          'Incidencias graves (seguridad, conducta, quejas formales, irregularidades en registros) se reportan por escrito a Chanak Central sin demora; safeguarding va siempre primero al DSL.',
          'Reporting periódico: estudiantes en alerta, intervenciones, calidad del equipo, incidencias y necesidades del centro.',
          'Respeta la privacidad: en informes generales usa IDs.',
        ],
      },
    ],
    practica: {
      situacion: 'Al revisar expedientes encuentras cinco evaluaciones registradas el mismo día con fechas de hace dos meses y sin evidencias adjuntas.',
      preguntas: ['¿Qué indica?', '¿Qué haces con esos registros?', '¿A quién reportas?'],
      criterio: 'Posible registro reconstruido. Se documenta, se pide la evidencia original, no se validan sin evidencia y se reporta a Chanak Central.',
    },
    quiz: [
      { p: 'Un coordinador no ve estudiantes. ¿Qué verifica primero?', opciones: ['Se concede acceso de administrador', 'Su hub, ámbito y carga; informa la incidencia sin ampliar permisos por rutina', 'Crea otra cuenta', 'Crea alumnos de prueba en producción'], correcta: 1, explica: 'La lista inicial depende del hub asignado y de la carga. La formación no altera permisos.' },
      { p: 'Una evidencia está enviada. ¿Qué falta antes de validar el resultado?', opciones: ['Nada', 'Revisar identidad, contenido, acceso y criterio; registrar decisión y comprobar estado', 'Solo descargarla', 'Otorgar Coins'], correcta: 1, explica: 'Enviado y aprobado son estados distintos; la decisión debe tener sustento.' },
      { p: 'Cinco evaluaciones registradas el mismo día con fechas antiguas y sin evidencia. ¿Qué haces?', opciones: ['Validarlas', 'Documentar, pedir evidencia original y reportar a Chanak Central', 'Borrarlas', 'Cambiar las fechas'], correcta: 1, explica: 'Integridad del registro.' },
      { p: '¿Qué debe tener cada nota del SIS?', opciones: ['Solo la nota', 'Evidencia, fecha real y responsable', 'Firma de la familia', 'Nada más'], correcta: 1, explica: 'Trazabilidad.' },
      { p: 'Una posible situación de safeguarding llega al coordinador. ¿Primer paso?', opciones: ['Reporting mensual', 'Informar al DSL de inmediato', 'Esperar', 'Investigar personalmente'], correcta: 1, explica: 'Safeguarding siempre primero al DSL.' },
      { p: '¿Cómo aparecen los estudiantes en los informes generales?', opciones: ['Con nombre completo', 'Con ID', 'Con foto', 'Con dirección'], correcta: 1, explica: 'Privacidad.' },
    ],
    evidencia: 'Sube una revisión de expediente simulada con hallazgos y acciones.',
  },

  'T8.4': {
    resumen:
      'El proyecto de coordinación supervisado integra todo el Coordinator Track en una práctica real que se presenta a Chanak Central.',
    objetivos: ['Planificar un proyecto de coordinación.', 'Ejecutarlo con supervisión.', 'Documentarlo en un portafolio.'],
    lecciones: [
      {
        titulo: 'Planificar',
        guion: [
          'Elige un ámbito real: supervisión de un equipo de mentores, puesta en marcha de un grupo, revisión de expedientes, plan de Extensión Local o plan de calidad del centro.',
          'Define objetivos, acciones, responsables, indicadores, evidencias y calendario.',
        ],
      },
      {
        titulo: 'Ejecutar y presentar',
        guion: [
          'Ejecuta con supervisión de Chanak Central y registra evidencias durante el proceso.',
          'Portafolio final: plan, evidencias, resultados, aprendizajes y propuestas de mejora, sin datos personales de estudiantes.',
          'La revisión final la hace Chanak Central y forma parte de la certificación CHANAK CERTIFIED COORDINATOR.',
        ],
      },
    ],
    practica: {
      situacion: 'Tienes que elegir tu proyecto: tu centro tiene tres mentores nuevos y la Extensión Local sin plan.',
      preguntas: ['¿Qué proyecto eliges y por qué?', '¿Qué indicadores usarás?', '¿Qué evidencias entregarás?'],
      criterio: 'Proyecto con objetivos medibles, indicadores, evidencias y calendario, supervisado.',
    },
    quiz: [
      { p: '¿Quién hace la revisión final del proyecto?', opciones: ['El propio coordinador', 'Chanak Central', 'La familia', 'MSA'], correcta: 1, explica: 'Forma parte de la certificación.' },
      { p: '¿Qué no debe contener el portafolio?', opciones: ['Indicadores', 'Datos personales de estudiantes', 'Evidencias', 'Aprendizajes'], correcta: 1, explica: 'Privacidad.' },
      { p: '¿Qué define un buen plan de proyecto?', opciones: ['Solo una idea', 'Objetivos, acciones, responsables, indicadores, evidencias y calendario', 'Solo un presupuesto', 'Solo fotos'], correcta: 1, explica: 'Estructura completa.' },
      { p: '¿Con qué certificación se relaciona este proyecto?', opciones: ['Chanak Certified Mentor', 'Chanak Certified Coordinator', 'MSA', 'Ninguna'], correcta: 1, explica: 'Cierra el Nivel 2.' },
    ],
    evidencia: 'Sube tu portafolio de proyecto de coordinación.',
  },
}
