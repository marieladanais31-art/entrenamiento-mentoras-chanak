// BLOQUE 3 — SEGURIDAD EN LÍNEA Y PROTOCOLOS DE CIBERSEGURIDAD ESTUDIANTIL (30h)
// Nivel 1 · Alineado con los estándares de Protección Infantil (Safeguarding),
// el código de conducta Chanak y la ciberseguridad estudiantil (COPPA/GDPR).

export const BLOQUE3 = {
  '3.1': {
    resumen:
      'Política de Protección Infantil y Salvaguarda Institucional de Chanak. Principios de protección de menores en entornos remotos y presenciales, código de conducta y los límites del rol de la mentora: qué decides, qué consultas y qué escalas.',
    objetivos: [
      'Explicar los principios de la Política de Protección Infantil de Chanak.',
      'Aplicar el código de conducta segura (regla de dos adultos, comunicación trazable).',
      'Distinguir qué puede decidir la mentora, qué debe consultar y qué debe escalar.',
    ],
    lecciones: [
      {
        titulo: 'Política de Protección Infantil y Salvaguarda Institucional',
        guion: [
          'La seguridad y bienestar de los menores es el compromiso prioritario e innegociable de Chanak.',
          'Principios de Salvaguarda: interés superior del menor, cero tolerancia al abuso o negligencia, confidencialidad protegida y deber de reporte inmediato.',
          'Conducta segura: regla de dos adultos en actividades con menores, comunicación trazable y nunca reuniones privadas a solas con un menor.',
          'Límites profesionales: las mentoras nunca realizan videollamadas a solas con menores fuera de horario, ni mantienen comunicación por redes sociales privadas sin copia a los padres.',
          'Confidencialidad: los datos de estudiantes y familias no circulan fuera de los sistemas autorizados. WhatsApp no es expediente.',
        ],
        visuales: [
          'Diapositiva: Decálogo de Salvaguarda y Protección Infantil de Chanak.',
          'Diapositiva: Matriz de límites en la comunicación mentora-estudiante.',
        ],
      },
      {
        titulo: 'Los límites del rol: decidir, consultar, escalar',
        guion: [
          'Una mentora ACOMPAÑA: rutina, metas, revisión, ánimo, comunicación cotidiana con la familia.',
          'Una mentora NO: firma convenios, valida notas oficiales por su cuenta, promete admisiones, homologaciones, precios o aperturas de sede.',
          'Regla de tres niveles: PUEDO DECIDIR (mi acompañamiento diario) · DEBO CONSULTAR (situaciones académicas atípicas) · DEBO ESCALAR (protección, datos, decisiones oficiales, quejas formales).',
          'Escalar no es debilidad: es protección para el estudiante, para la familia y para ti.',
          'Conflictos de interés: si una situación personal (familiar, económica, de iglesia) puede influir en tu criterio, se declara a coordinación.',
        ],
        visuales: [
          'Diapositiva: semáforo verde/ámbar/rojo con "decido / consulto / escalo" y 2 ejemplos por color.',
          'Diapositiva: los 5 compromisos del código con iconos (candado, dos adultos, balanza, marca, transparencia).',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Cuál es el principio rector de la Política de Protección Infantil de Chanak?',
        opciones: [
          'La prioridad es la velocidad de avance académico',
          'El interés superior del menor y la cero tolerancia ante cualquier indicio de abuso o vulneración',
          'Evitar reuniones con los padres',
          'Permitir que los estudiantes compartan sus contraseñas',
        ],
        correcta: 1,
        explica: 'El interés superior del menor y la cero tolerancia al abuso guían todas las políticas de Chanak.',
      },
      {
        p: 'La regla de dos adultos significa que…',
        opciones: [
          'Siempre hay al menos dos adultos en actividades con menores',
          'Solo pueden enseñar personas mayores de 30 años',
          'Los padres deben estar presentes en cada clase',
          'Dos mentoras deben firmar cada boletín',
        ],
        correcta: 0,
        explica: 'Nunca un adulto a solas con un menor en espacios sin visibilidad: protege al menor y también al adulto.',
      },
      {
        p: 'Una iglesia te pregunta si Chanak puede abrir una sede en su local el próximo mes. Tu respuesta correcta es…',
        opciones: [
          'Confirmar la apertura para no perder la oportunidad',
          'Explicar el interés, no comprometer nada y escalar a la oficina central',
          'Negociar el alquiler directamente',
          'Prometer que sí si consiguen 10 alumnos',
        ],
        correcta: 1,
        explica: 'Las aperturas y convenios son decisiones oficiales: se escalan. Prometer sin autoridad daña a todos.',
      },
    ],
  },

  '3.2': {
    resumen:
      'Curso externo certificado: Normas Mínimas de Protección Infantil en entornos educativos. Estándares internacionales de prevención, detección temprana y respuesta, y cómo reconocer los indicadores de riesgo.',
    objetivos: [
      'Completar la formación en Normas Mínimas de Protección Infantil.',
      'Reconocer señales físicas, emocionales, conductuales y digitales de riesgo o negligencia.',
      'Obtener la certificación externa de Salvaguarda exigida por el marco institucional.',
    ],
    lecciones: [
      {
        titulo: 'Normas Mínimas de Protección Infantil',
        guion: [
          'Estándares internacionales de protección de menores en programas educativos globales.',
          'La formación externa acredita que todo el equipo comparte un mismo estándar de prevención y respuesta.',
          'Validación mediante la obtención del certificado externo de protección infantil, que se registra en tu expediente de formación.',
          'La certificación no sustituye el protocolo interno: lo complementa. Conocer la norma y saber a quién reportar van juntos.',
        ],
        visuales: [
          'Diapositiva: marco de las Normas Mínimas y su relación con el protocolo Chanak.',
        ],
      },
      {
        titulo: 'Reconocer los indicadores de riesgo',
        guion: [
          'Indicadores físicos: lesiones sin explicación coherente, señales de negligencia o desnutrición, higiene descuidada de forma persistente.',
          'Indicadores emocionales/conductuales: cambios drásticos de conducta, retraimiento extremo, miedo a personas concretas, regresiones.',
          'Indicadores digitales: contacto con adultos desconocidos, secretismo súbito con dispositivos, contenido inapropiado, señales de grooming.',
          'Un indicador aislado no es prueba: es una señal para observar, documentar con hechos y consultar — nunca para acusar por tu cuenta.',
          'Ante duda seria, mejor reportar y equivocarse que callar: el protocolo (módulo 3.4) existe precisamente para eso.',
        ],
        visuales: [
          'Diapositiva: cuadro de indicadores físicos / emocionales / conductuales / digitales.',
          'Diapositiva: "un indicador observa; el patrón alerta; el protocolo protege".',
        ],
      },
    ],
    quiz: [
      {
        p: '¿Por qué se exige una certificación externa en Normas Mínimas de Protección Infantil?',
        opciones: [
          'Es solo un trámite opcional',
          'Garantiza que todo el equipo educativo cuente con formación acreditada internacionalmente en prevención y detección de riesgos',
          'Para reemplazar las tutorías de matemáticas',
          'No tiene relación con el rol de la mentora',
        ],
        correcta: 1,
        explica: 'La certificación externa acredita el cumplimiento de estándares internacionales de salvaguarda educativa.',
      },
      {
        p: 'Observas un indicador aislado de posible riesgo en un estudiante. ¿Qué haces?',
        opciones: [
          'Acusar de inmediato a la familia',
          'Ignorarlo si es solo uno',
          'Observar, documentar con hechos y consultar según el protocolo',
          'Comentarlo con otras familias para contrastar',
        ],
        correcta: 2,
        explica: 'Un indicador aislado se observa y documenta; no se acusa por cuenta propia ni se comparte con terceros.',
      },
    ],
  },

  '3.3': {
    resumen:
      'Ciberseguridad estudiantil, privacidad de datos y protección en línea. Normativa GDPR/COPPA, gestión segura de contraseñas, identidad digital, detección de phishing y grooming, y navegación protegida.',
    objetivos: [
      'Aplicar la normativa de privacidad de datos de menores (COPPA/GDPR).',
      'Enseñar a los alumnos hábitos de higiene digital y navegación segura.',
      'Configurar las cuentas institucionales con doble factor de autenticación (2FA).',
    ],
    lecciones: [
      {
        titulo: 'Privacidad de datos y protección de la imagen del menor',
        guion: [
          'Protección de datos personales de menores: nunca publicar fotos, nombres completos o datos de ubicación en redes públicas sin consentimiento formal expreso.',
          'GDPR (Europa) y COPPA (EE. UU.) exigen minimización de datos: se recoge y comparte solo lo necesario, por canales autorizados.',
          'Los datos académicos viven en el SIS, no en chats personales. "Si no está en el sistema, no es dato oficial".',
          'Nunca introduzcas datos personales de alumnos en herramientas no autorizadas; para incidencias del SIS usa identificadores, no nombres.',
        ],
        visuales: [
          'Diapositiva: qué se puede y qué no se puede publicar de un menor.',
          'Diapositiva: principio de minimización de datos.',
        ],
      },
      {
        titulo: 'Higiene digital: contraseñas, phishing, grooming y 2FA',
        guion: [
          'Contraseñas seguras y únicas por servicio; uso exclusivo de correos institucionales @chanakacademy.org / @asociacioneducafe.org.',
          'Phishing: desconfía de enlaces y adjuntos inesperados; verifica el remitente antes de hacer clic o introducir credenciales.',
          'Grooming: enseña a los estudiantes a no aceptar contactos desconocidos y a avisar siempre a un adulto de confianza.',
          'Activa el doble factor de autenticación (2FA) en las cuentas institucionales: una capa extra que frena la mayoría de accesos indebidos.',
          'Modela higiene digital: los estudiantes aprenden más de lo que ven hacer que de lo que se les dice.',
        ],
        visuales: [
          'Diapositiva: checklist de higiene digital de la mentora.',
          'Diapositiva: cómo se ve un intento de phishing (ejemplo anotado).',
        ],
      },
    ],
    quiz: [
      {
        p: 'Según la normativa de privacidad de datos de menores (COPPA/GDPR), ¿qué está estrictamente prohibido?',
        opciones: [
          'Usar el sistema SIS con contraseña privada',
          'Publicar fotos de estudiantes o datos personales en redes públicas sin consentimiento formal expreso',
          'Enviar calificaciones por el boletín oficial',
          'Usar cuentas de correo institucionales',
        ],
        correcta: 1,
        explica: 'La privacidad del menor exige consentimiento previo y explícito antes de cualquier difusión pública de su imagen o datos.',
      },
      {
        p: '¿Qué es el doble factor de autenticación (2FA)?',
        opciones: [
          'Usar dos contraseñas iguales',
          'Una capa de seguridad adicional a la contraseña que dificulta el acceso indebido',
          'Compartir la cuenta entre dos mentoras',
          'Un antivirus',
        ],
        correcta: 1,
        explica: 'El 2FA añade una verificación extra (código, app) que frena la mayoría de accesos no autorizados.',
      },
    ],
  },

  '3.4': {
    resumen:
      'Protocolo de reporte institucional en 6 pasos, rol del Oficial de Protección (DSL - Designated Safeguarding Lead) y canal de Denuncia Segura (Whistleblower). Qué hacer, qué no hacer y cómo proteger la confidencialidad del caso.',
    objetivos: [
      'Ejecutar el protocolo de reporte en 6 pasos ante cualquier sospecha o revelación.',
      'Coordinar con el Oficial de Protección (DSL) de Chanak.',
      'Garantizar la confidencialidad y el seguimiento del caso sin entorpecer investigaciones oficiales.',
    ],
    lecciones: [
      {
        titulo: 'Protocolo de Reporte en 6 Pasos y Rol del DSL',
        guion: [
          'Paso 1: Escuchar al menor con empatía, sin juzgar ni prometer guardar secretos.',
          'Paso 2: Registrar de forma textual y objetiva lo declarado (fecha, hora, palabras exactas).',
          'Paso 3: Notificar de inmediato al Oficial de Protección (DSL) de Chanak.',
          'Paso 4: Evaluación de riesgo por el comité de salvaguarda.',
          'Paso 5: Derivación a organismos o autoridades de protección competentes.',
          'Paso 6: Seguimiento confidencial y apoyo al estudiante.',
        ],
        visuales: [
          'Diapositiva: Diagrama de los 6 pasos del Protocolo de Reporte e intervención del DSL.',
        ],
      },
      {
        titulo: 'Qué NO hacer y la Denuncia Segura',
        guion: [
          'NO investigues por tu cuenta ni confrontes a presuntos implicados: puedes invalidar una investigación oficial y poner en riesgo al menor.',
          'NO prometas secretos ("esto queda entre nosotros"): tu deber de reporte está por encima.',
          'NO comentes el caso con otras familias, compañeras no implicadas ni en canales informales: la confidencialidad protege a la víctima.',
          'Denuncia Segura (Whistleblower): canal confidencial —incluso anónimo— para reportar cualquier incumplimiento ético o de salvaguarda dentro de la institución.',
          'Cuidarte también importa: reportar situaciones difíciles pesa; pide apoyo a coordinación si lo necesitas.',
        ],
        visuales: [
          'Diapositiva: lista de "qué NO hacer" ante una revelación.',
          'Diapositiva: cómo y cuándo usar el canal Whistleblower.',
        ],
      },
    ],
    quiz: [
      {
        p: 'Al recibir una revelación o sospecha de vulneración de un alumno, ¿cuál es la acción correcta de la mentora?',
        opciones: [
          'Prometerle al alumno que guardará el secreto y no dirá nada a nadie',
          'Registrar objetivamente los datos textuales y reportar de inmediato al Oficial de Protección (DSL)',
          'Investigar por su propia cuenta confrontando a los presuntos implicados',
          'Esperar a ver si la situación mejora el mes siguiente',
        ],
        correcta: 1,
        explica: 'La mentora no es investigadora ni debe guardar secretos de riesgo; documenta objetivamente y notifica al DSL.',
      },
      {
        p: '¿Qué es el canal de Denuncia Segura (Whistleblower)?',
        opciones: [
          'Una prueba de matemáticas',
          'Un canal confidencial (incluso anónimo) para notificar infracciones de salvaguarda o ética',
          'Un grupo de chat para eventos sociales',
          'Un formulario de inscripción de alumnos',
        ],
        correcta: 1,
        explica: 'El canal Whistleblower protege la integridad institucional permitiendo reportes confidenciales o anónimos.',
      },
      {
        p: '¿Cuál de estas acciones NUNCA debe hacer la mentora ante un caso?',
        opciones: [
          'Documentar los hechos con objetividad',
          'Notificar al DSL',
          'Investigar por su cuenta y confrontar a los presuntos implicados',
          'Mantener la confidencialidad del caso',
        ],
        correcta: 2,
        explica: 'Investigar o confrontar puede invalidar la investigación oficial y poner en riesgo al menor.',
      },
    ],
  },
}
