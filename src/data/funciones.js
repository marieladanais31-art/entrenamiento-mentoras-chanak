// ============================================================
// MI FUNCIÓN · guía de trabajo por especialidad (qué hago, cuándo, dónde y qué escalo)
//
// Una ficha por función de la formación 2026–2027. Es la parte OPERATIVA de la app: lo que cada
// persona consulta para trabajar. La formación (módulos) explica el porqué; esta ficha, el qué y
// el cuándo. Las `vistas` apuntan a src/data/vistasSistema.js.
// Regla de redacción: frases de acción, sin repetir fórmulas genéricas entre fichas.
// ============================================================

export const FUNCIONES = {
  mentor: {
    titulo: 'Mentor Off-Campus / Dual Diploma',
    resultado: 'Cada estudiante asignado avanza por dominio (≥ 80 %) según su PEI, con evidencias al día y su familia informada.',
    rutina: [
      { cuando: 'Lunes', que: 'Revisa Alertas y la Carga Eval. M.L. de tus estudiantes: quién va atrasado respecto al PEI.', donde: 'SIS · Alertas / Carga Eval. M.L.' },
      { cuando: 'Cada semana', que: 'Revisa las evidencias pendientes y registra notas parciales reales (Borrador → En revisión).', donde: 'SIS · Evidencias / Mis Estudiantes' },
      { cuando: 'Cada semana', que: 'Si una nota queda < 80: registra la intervención (refuerzo + nueva evaluación) y su fecha.', donde: 'SIS · Notas' },
      { cuando: 'Mensual', que: 'Mentoría con la familia: avances observables, una dificultad, un acuerdo con responsable y fecha.', donde: 'Videollamada + registro en SIS' },
      { cuando: 'Fin de trimestre', que: 'Comprueba que todas las notas están enviadas para que coordinación pueda emitir el boletín.', donde: 'SIS · Mis Estudiantes (Q1–Q4)' },
    ],
    casos: [
      { si: 'Un alumno no aparece en tu lista', haz: 'No pidas otro usuario ni cargues datos fuera del SIS.', escala: 'Coordinación (asignación)' },
      { si: 'La familia pide cambiar de vía curricular', haz: 'Recoge la petición y las evidencias en el PEI como propuesta.', escala: 'Coordinación / dirección académica' },
      { si: 'Dos semanas sin evidencias', haz: 'Crea alerta Media, contacta a la familia y acuerda fecha.', escala: 'Coordinación si no hay respuesta en 7 días' },
      { si: 'Preocupación por la seguridad de un menor', haz: 'No investigues ni prometas confidencialidad.', escala: 'DSL de inmediato (protocolo 6.1)' },
      { si: 'Preguntas sobre pagos, precios o créditos convalidados', haz: 'No respondas cifras ni promesas.', escala: 'Administración (pagos) / coordinación (créditos)' },
    ],
    noHaces: ['Cambiar la vía curricular o el PEI aprobado', 'Subir una nota sin evidencia', 'Hablar de precios o descuentos', 'Diagnosticar (solo observas y documentas)'],
    evidencia: ['Notas y evidencias en el SIS', 'Registro de intervenciones', 'Acta breve de cada mentoría familiar'],
    vistas: ['sis-tutor-estudiantes', 'sis-notas', 'sis-carga-ml', 'sis-evidencias', 'sis-pei', 'sis-alertas', 'sis-familia', 'dual-estudiante'],
  },
  english_teacher: {
    titulo: 'Profesor/a de inglés',
    resultado: 'Cada alumno de inglés progresa en su nivel autorizado (Foundations, I–IV) con entregas evaluadas y feedback útil.',
    rutina: [
      { cuando: 'Antes de cada clase', que: 'Confirma grupo y nivel (Foundations, I, II, III o IV) según el plan; prepara objetivo, ejemplo y criterio.', donde: 'Dual Diploma Portal · curso' },
      { cuando: 'Después de clase', que: 'Abre las entregas del estudiante correcto: recepción no es evaluación.', donde: 'Dual Diploma Portal / SIS · Evidencias' },
      { cuando: 'En 72 h', que: 'Feedback con estructura fija: 1 fortaleza, 1 mejora, cómo revisarlo y fecha. Registra la nota con rúbrica.', donde: 'SIS · Notas / Portal' },
      { cuando: 'Mensual', que: 'Informa a coordinación de dificultades reiteradas o falta de entregas.', donde: 'Mensaje a coordinación' },
    ],
    casos: [
      { si: 'El alumno escribe muy por debajo de su nivel', haz: 'Apoya dentro del plan y documenta ejemplos.', escala: 'Coordinación decide un cambio de nivel' },
      { si: 'Falta un archivo o no se entiende la consigna', haz: 'Pide una corrección concreta (qué y cómo).', escala: '—' },
      { si: 'Problemas de acceso a la plataforma', haz: 'Anota usuario-ID y pantalla del error.', escala: 'Coordinación / soporte' },
    ],
    noHaces: ['Cambiar de curso o nivel por tu cuenta', 'Aprobar una entrega sin rúbrica', 'Comentar notas finales a la familia antes de su aprobación'],
    requisito: 'Nivel mínimo: B2–C1 para inglés general; C1–C2 para Dual Diploma.',
    evidencia: ['Rúbrica aplicada', 'Feedback escrito', 'Registro de entregas por unidad'],
    vistas: ['dual-curso', 'sis-notas', 'sis-evidencias', 'dual-estudiante', 'sis-familia'],
  },
  lifeskills_facilitator: {
    titulo: 'Facilitador/a de Life Skills',
    resultado: 'Sesiones semanales seguras y participativas, con una producción evaluada por alumno y trimestre.',
    rutina: [
      { cuando: 'Antes de la sesión', que: 'Confirma grupo de edad (12–15 Seedling+Explorer · 16–17 Builder+Launch), objetivo observable y material.', donde: 'Portal · guías Life Skills' },
      { cuando: 'En la sesión (1 h)', que: 'Normas de respeto, ejemplo ficticio, reflexión, producción. Nadie está obligado a compartir algo personal.', donde: 'Videollamada' },
      { cuando: 'Después', que: 'Registra asistencia aparte y evalúa la producción con la rúbrica (decisión, plan, reflexión o proyecto).', donde: 'SIS · Notas / Life Skills app' },
      { cuando: 'Fin de trimestre', que: 'Cierra el eje del trimestre y propone ChanakCoins con motivo.', donde: 'Life Skills app · Coins (coordinación)' },
    ],
    casos: [
      { si: 'Un alumno comparte algo muy personal', haz: 'Agradece, no lo expongas, reconduce la sesión.', escala: 'DSL si hay riesgo' },
      { si: 'Alumno financiado por un programa estatal', haz: 'Registra la evidencia exigida por ese servicio.', escala: 'Coordinación confirma el servicio aprobado' },
    ],
    noHaces: ['Forzar testimonios', 'Diagnosticar a partir del test vocacional', 'Contar la asistencia como aprendizaje'],
    evidencia: ['Lista de asistencia', 'Producción del alumno', 'Rúbrica y feedback'],
    vistas: ['lifeskills-app', 'sis-evidencias', 'sis-alertas', 'sis-familia'],
  },
  local_language: {
    titulo: 'Extensión Local',
    resultado: 'El 20 % local (Lengua Castellana, Historia y Geografía) definido en el PEI, impartido y evaluado con competencias LOMLOE.',
    rutina: [
      { cuando: 'Al inicio', que: 'Revisa en el PEI la sección «Extensión Local Obligatoria» y el grado del alumno.', donde: 'SIS · PEI' },
      { cuando: 'Cada semana', que: 'Imparte según la guía de grado (P1–P6, ESO1–4, Bach1–2); competencias LOMLOE escritas con su nombre completo.', donde: 'Portal · guías Extensión Local' },
      { cuando: 'Cada evaluación', que: 'Registra nota y evidencia en la materia local correspondiente.', donde: 'SIS · Notas / Evidencias' },
    ],
    casos: [
      { si: 'El alumno vive fuera de España', haz: 'Aplica la Extensión Local de su país según la guía.', escala: 'Coordinación si no hay guía para ese país' },
      { si: 'Modalidad presencial', haz: 'Registra asistencia del aula y evidencias igual que en virtual.', escala: '—' },
    ],
    noHaces: ['Abreviar las competencias LOMLOE', 'Añadir materias fuera de Lengua, Historia y Geografía sin autorización'],
    evidencia: ['Notas por materia local', 'Trabajos del alumno', 'Competencias trabajadas'],
    vistas: ['sis-pei', 'sis-notas', 'sis-evidencias'],
  },
  assessment_specialist: {
    titulo: 'Especialista en evaluación educativa',
    resultado: 'Diagnósticos académicos fiables que alimentan el PEI, sin cruzar a lo clínico.',
    rutina: [
      { cuando: 'Al recibir un alumno nuevo', que: 'Aplica la prueba diagnóstica autorizada por materia y nivel.', donde: 'Portal · diagnósticos' },
      { cuando: 'En 5 días', que: 'Registra resultados y nivel de entrada en «Diagnóstico Inicial» del PEI.', donde: 'SIS · PEI' },
      { cuando: 'Si hay señales', que: 'Screening educativo/socioemocional dentro de límites educativos; recomendación escrita.', donde: 'SIS · PEI (adaptaciones)' },
    ],
    casos: [
      { si: 'Sospecha de una condición clínica', haz: 'No diagnostiques ni nombres condiciones.', escala: 'REFER TO LICENSED PROFESSIONAL vía coordinación' },
      { si: 'La familia pide repetir la prueba', haz: 'Documenta el motivo.', escala: 'Coordinación autoriza' },
    ],
    noHaces: ['Emitir diagnósticos clínicos', 'Llamarte «psicólogo» si no lo eres', 'Fijar la vía curricular (la propone el PEI y decide coordinación)'],
    evidencia: ['Resultados del diagnóstico', 'Recomendaciones al PEI', 'Derivaciones documentadas'],
    vistas: ['sis-pei', 'sis-carga-ml'],
  },
  coordinator: {
    titulo: 'Coordinador/a Off-Campus y Dual Diploma',
    resultado: 'El sistema funciona: notas revisadas, PEI vigentes, boletines a tiempo y mentores acompañados.',
    rutina: [
      { cuando: 'Lunes', que: 'Revisa Alertas Altas y el Seguimiento: estudiantes atrasados respecto al PEI.', donde: 'SIS coordinador · Alertas / Seguimiento' },
      { cuando: 'Martes y jueves', que: 'Revisar Notas y Evidencias: aprueba o solicita corrección con comentario.', donde: 'SIS coordinador · Revisar Notas / Evidencias' },
      { cuando: 'Cada semana', que: 'Cola de revisión, feedback y convalidaciones del Dual Diploma.', donde: 'Dual Diploma Portal · /es/coordinador' },
      { cuando: 'Mensual', que: 'Reunión breve con cada mentor/profesor: casos, calidad del feedback, carga de trabajo.', donde: 'Videollamada + acta' },
      { cuando: 'Fin de trimestre', que: 'Prepara el boletín con respaldo de notas y evidencias; tramita aprobación y publicación según la delegación de Dirección.', donde: 'SIS coordinador · Boletines' },
    ],
    casos: [
      { si: 'Nota alta sin evidencia', haz: 'Solicita corrección pidiendo la evidencia.', escala: '—' },
      { si: 'Pago pendiente', haz: 'No retengas lo académico.', escala: 'Administración' },
      { si: 'Petición de cambio de vía o de nivel', haz: 'Revisa evidencias y propone.', escala: 'Dirección académica aprueba; nueva versión del PEI' },
      { si: 'Incidencia de safeguarding', haz: 'Asegura que el DSL está informado.', escala: 'DSL / dirección' },
    ],
    noHaces: ['Reescribir notas de otros', 'Negociar precios', 'Prometer convalidaciones sin transcript', 'Supervisar una herramienta que no sabes usar'],
    evidencia: ['Revisiones con comentario', 'Actas con mentores', 'Boletines emitidos', 'Informe trimestral'],
    vistas: ['sis-coord-revision', 'sis-coord-seguimiento', 'sis-evidencias', 'sis-pei', 'dual-coordinador', 'sis-alertas'],
  },
  partner_director: {
    titulo: 'Director/a de institución partner',
    resultado: 'Su institución opera los programas contratados según el convenio, con su equipo formado y sus informes al día.',
    rutina: [
      { cuando: 'Al inicio del curso', que: 'Confirma programas contratados, equipo asignado y estudiantes incorporados.', donde: 'SIS (según el ámbito y los permisos asignados a su institución)' },
      { cuando: 'Mensual', que: 'Revisa indicadores e incidencias con su coordinador.', donde: 'SIS · Seguimiento / Dual Diploma Portal' },
      { cuando: 'Trimestral', que: 'Informe a Chanak Central y plan de mejora.', donde: 'Drive · informes autorizados' },
    ],
    casos: [
      { si: 'Quiere ofrecer un programa nuevo', haz: 'Presenta la propuesta.', escala: 'Chanak Central (convenio)' },
      { si: 'Transcript o créditos finales', haz: 'Reúne la documentación.', escala: 'Chanak Central emite' },
    ],
    noHaces: ['Ver otras instituciones', 'Modificar precios o convenio', 'Emitir créditos o transcripts finales'],
    evidencia: ['Convenio vigente', 'Informes trimestrales', 'Registro de incidencias'],
    vistas: ['sis-coord-seguimiento', 'sis-coord-revision', 'dual-coordinador'],
  },
  strategic_general: {
    titulo: 'Estratégico general',
    resultado: 'Oportunidades convertidas en resultados documentados (familias, alianzas, fondos) dentro de lo autorizado por dirección.',
    rutina: [
      { cuando: 'Cada semana', que: 'Registra cada contacto: fuente, responsable, siguiente acción y fecha.', donde: 'Registro de contactos' },
      { cuando: 'Antes de publicar', que: 'Usa solo materiales y precios vigentes; pide permiso para grupos de Facebook y aprobación para anuncios.', donde: 'Guía Estratégico · Google Ads' },
      { cuando: 'Mensual', que: 'Reporta contactos, reuniones, propuestas y matrículas.', donde: 'Informe a Dirección de Operaciones' },
    ],
    casos: [
      { si: 'Te piden un descuento', haz: 'No lo concedas: la tarifa directa es la de la web.', escala: 'Dirección (convenios y afiliaciones)' },
      { si: 'Interés en programas EducaFe', haz: 'Registra el contacto: EducaFe está inactiva hasta febrero 2027.', escala: 'Dirección' },
    ],
    noHaces: ['Firmar o prometer en nombre de Chanak', 'Afirmar aprobaciones no documentadas', 'Mezclar narrativa Chanak (EE. UU.) y EducaFe (España)'],
    evidencia: ['Registro de contactos', 'Materiales aprobados', 'Informe mensual'],
    vistas: ['sis-familia', 'dual-estudiante'],
  },
  family_enrollment: {
    titulo: 'Familias, matrícula y ESA',
    resultado: 'Familias bien orientadas y matrículas completas, incluidas las financiadas con fondos estatales, sin errores de cobro.',
    rutina: [
      { cuando: 'Cada lead', que: 'Responde en 24 h, orienta con la oferta vigente y agenda reunión.', donde: 'Registro de contactos' },
      { cuando: 'Matrícula', que: 'Guía el formulario y la documentación; la recepción no es matrícula aprobada.', donde: 'SIS · formulario /matricula' },
      { cuando: 'Familias ESA', que: 'Comprueba en la matriz el estado del programa (Approved / Pending / Planned) antes de prometer nada.', donde: 'Matriz de programas estatales' },
      { cuando: 'Tras el servicio', que: 'Pasa a administración la evidencia para facturar y conciliar.', donde: 'Administración' },
    ],
    casos: [
      { si: 'Programa estatal en «Pending»', haz: 'Dilo así: «en proceso». No prometas cobertura.', escala: '—' },
      { si: 'La familia ofrece sus claves del portal estatal', haz: 'Nunca las aceptes.', escala: 'Administración' },
    ],
    noHaces: ['Pedir contraseñas de familias', 'Controlar fondos familiares', 'Prometer convalidaciones'],
    evidencia: ['Expediente de matrícula completo', 'Consentimientos', 'Conciliación con administración'],
    vistas: ['sis-familia', 'dual-estudiante'],
  },
  grants_projects: {
    titulo: 'Grants y proyectos',
    resultado: 'Solicitudes de financiación elegibles, presentadas a tiempo y con su ejecución documentada.',
    rutina: [
      { cuando: 'Cada oportunidad', que: 'Ficha de decisión: elegibilidad, plazo, importe, gastos y obligaciones → encaja / no / consultar.', donde: 'Tracker de grants' },
      { cuando: 'Si encaja', que: 'Objetivos, actividades, indicadores y presupuesto; documentos institucionales revisados por dirección.', donde: 'Drive · grants' },
      { cuando: 'Si se aprueba', que: 'Abre expediente de ejecución, gastos, evidencias e informes.', donde: 'Drive · grants' },
    ],
    casos: [
      { si: 'Convocatoria española o europea', haz: 'Lenguaje de impacto social y competencias.', escala: 'Dirección decide la entidad que presenta' },
      { si: 'Financiador de EE. UU.', haz: 'Usa la Foundation 501(c)(3) y su documentación.', escala: 'Dirección' },
    ],
    noHaces: ['Presentar sin revisión de dirección', 'Usar EducaFe (inactiva hasta febrero 2027)'],
    evidencia: ['Ficha de oportunidad', 'Propuesta y presupuesto', 'Acuse e informes'],
    vistas: [],
  },
  institutional_partnerships: {
    titulo: 'Alianzas institucionales e iglesias',
    resultado: 'Alianzas con colegios, iglesias y organizaciones que pasan de conversación a piloto evaluado y acuerdo escrito.',
    rutina: [
      { cuando: 'Primer contacto', que: 'Presentación breve y escucha: necesidad, espacio, población, objetivos.', donde: 'Reunión' },
      { cuando: 'Propuesta', que: 'Elige una colaboración posible (difusión, becas, sede de actividad, proyecto) y envíala por escrito.', donde: 'Plantilla de propuesta' },
      { cuando: 'Piloto', que: 'Ejecuta con asistencia, evidencias y evaluación; decide continuidad con acuerdo escrito.', donde: 'Drive · alianzas' },
    ],
    casos: [
      { si: 'Una iglesia quiere ser «sede Chanak»', haz: 'Explica que una alianza no crea una sede.', escala: 'Chanak Central' },
      { si: 'Piden precios especiales', haz: 'Precio directo = web; convenios aparte.', escala: 'Dirección' },
    ],
    noHaces: ['Alterar precios', 'Firmar por Chanak', 'Prometer acreditación o autorización de sede'],
    evidencia: ['Minuta', 'Propuesta', 'Acuerdo autorizado', 'Informe del piloto'],
    vistas: ['dual-estudiante'],
  },
}
