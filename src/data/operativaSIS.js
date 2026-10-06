export const seccionesSIS = [
  {
    "id": 0,
    "title": "Dónde está",
    "text": "Formulario público: https://sis.chanakacademy.org/matricula (también /enrollment).\nAdministración: https://sis.chanakacademy.org/admin → Matrículas.\nFormación: Inicio → Operativa SIS, y módulo T10.4."
  },
  {
    "id": 1,
    "title": "Accesos demo recuperados",
    "text": "Padre: demopadre@asociacioneducafe.org\nEstudiante: demoestudiante@asociacioneducafe.org\nContraseña de ambas cuentas demo: Chanak2026\nSon identificadores históricos recuperados del repositorio de formación. Su dominio no cambia al cambiar la marca. Pendiente comprobar inicio de sesión y aislamiento de datos en vivo. No son cuentas administrativas. Practicar con datos ficticios y no guardar cambios sobre expedientes reales."
  },
  {
    "id": 2,
    "title": "Familia directa · paso a paso",
    "text": "1. Enrollment identifica tutor legal, estudiante, programa, territorio, ciclo y condiciones. Busca solicitud, correo y expediente existentes antes de cualquier alta.\n2. Familia abre /matricula. Seis pasos: Programa, Alumno, Familia, Académico, Documentos, Confirmar. Revisar año: el código inicia en 2025–2026; para el ciclo actual seleccionar 2026–2027. El formulario ofrece Off-Campus K-12 (España), Dual Diploma, On-Campus y Homeschool Supervisado. Life Skills independiente todavía no tiene opción.\n3. Enviar guarda la solicitud y devuelve folio; no crea por sí solo las cuentas de acceso. La documentación puede quedar pendiente. La pantalla ofrece un enlace de pago y aclara que la solicitud/pago no garantiza admisión.\n4. Administración → Matrículas: localizar el mismo folio, revisar identidad, programa, ciclo, documentación y pendientes. No duplicar solicitudes por un fallo de correo.\n5. Administración verifica contrato, autorización académica y condiciones; en Pagos revisa cargos, moneda, importe, vencimiento y comprobante conciliado. La facturación de estudiantes y familias permanece en el SIS, según Mariela. No deducir pago confirmado a partir de un enlace Stripe o del estado activo.\n6. Cuando el alta esté autorizada, usar Crear usuarios una vez y revisar el resultado de cada cuenta. La acción busca perfiles existentes, crea padre/estudiante que falten e intenta sincronizar el expediente. Un aviso de éxito no sustituye la comprobación de vínculos.\n7. Matricular / Sincronizar también sincroniza. Cambiar la solicitud a Aceptada o Convertida dispara la misma sincronización. No usar estos estados como etiquetas inocuas ni repetir botones sin leer el expediente.\n8. Revisar en Usuarios y Directorio Estudiantil: usuario, perfil, estudiante, ciclo, programa, estado, familiar, hub y coordinación. El estudiante debe tener su identidad propia; dos hermanos no comparten usuario.\n9. Coordinación revisa PEI/ruta, materias, responsables y seguimiento. Crear/verificar Google for Education y Drive por sus circuitos propios. Para Dual comprobar alta, relaciones y cursos en el LMS Dual: el SIS no demuestra que existan.\n10. Enviar bienvenida es una acción manual separada. Registrar resultado y entrega; si hay fallo, revisar proveedor/aviso antes de reenviar. Tutor y estudiante comprueban primer acceso y próxima acción."
  },
  {
    "id": 3,
    "title": "Cuando entra un estudiante",
    "text": "Inicia sesión con su cuenta propia → el rol student abre su panel. Debe coincidir perfil con expediente, ciclo y programa. Confirmar materias/PEI, responsable, tareas y canal de ayuda. No asumir que el login genera matrícula, materias o créditos. Si accede pero falta información, registrar incidencia con ID y comprobar vínculos; no crear otro alumno.\nPara Dual, su alta en LMS tiene aprovisionamiento separado, puede asignar cursos y vincular padre/coordinador si ya existen. Revisar advertencias, ruta individual y cursos: una asignación automática no convalida créditos."
  },
  {
    "id": 4,
    "title": "Cuando entra una familia",
    "text": "El rol parent/family abre su panel. Se cargan estudiantes vinculados directamente o mediante relaciones familiares. Comprobar que aparecen todos sus hijos y solamente sus hijos. Revisar programa, PEI, progreso, pagos y ayuda. Una familia puede conservar cuenta para varios hijos; cada estudiante necesita su cuenta propia. El acceso a SIS no prueba existencia de Google o LMS."
  },
  {
    "id": 5,
    "title": "Familia por convenio",
    "text": "Aplicar el circuito de familia directa, añadiendo antes del pago: identificador del convenio, entidad responsable, autorización, tarifa/moneda, quién paga, alcance, responsables y vencimiento. El campo referencia del formulario es texto libre: no asigna automáticamente un hub ni aplica descuento. No enviar un enlace genérico de pago si no corresponde al convenio. Verificar manualmente hub/coordinación y condiciones en el expediente. La facturación de estudiantes y familias se gestiona en SIS; evitar cobrar dos veces al mismo estudiante."
  },
  {
    "id": 6,
    "title": "Alianza o cliente institucional",
    "text": "Primero definir si es una entidad referidora, una entidad pagadora o un hub educativo con alumnos/coordinación. La alianza no es una matrícula ni un usuario familiar.\n1. Dirección aprueba acuerdo, alcance, territorio, protección de datos, responsables y condiciones económicas.\n2. Si opera como hub, Administración → Hubs permite crear/editar una organización y asignar coordinación. No crear un hub para toda entidad referidora por rutina.\n3. Dar acceso por rol autorizado a personas concretas. No existe en el código revisado un rol genérico “cliente” o “alianza”. Verificar que coordinación ve solamente los alumnos de su ámbito.\n4. Matricular cada alumno por su solicitud y mantener sus familiares. Registrar el convenio y verificar la asignación: no se resuelve automáticamente desde referencia.\n5. Mantener trazabilidad de acuerdo, alumno, facturación y próximo seguimiento. Mariela aún no ha decidido el sistema para facturación/seguimiento de alianzas; no presentar AdminPro ni otro sistema como integración aprobada.\n6. No entregar acceso amplio de administración para compensar una función comercial ausente."
  },
  {
    "id": 7,
    "title": "Automatizaciones verificadas en código",
    "text": "| Disparador | Resultado previsto | Control posterior |\n|---|---|---|\n| Enviar formulario | Guarda solicitud/folio y enlace de pago; contacto y correos Brevo si está configurado | Solicitud existente; estado y avisos de correo |\n| Crear usuarios | Busca perfiles, crea cuentas faltantes e intenta sincronizar | Cada cuenta, expediente y vínculo familiar |\n| Aceptada / Convertida | Sincroniza estudiante, vínculo y registro de matrícula | Identidad, ciclo, hub, coordinación, estado de pago |\n| Matricular / Sincronizar | Misma sincronización | Buscar expediente antes de repetir |\n| Enviar bienvenida | Solicita correo a Brevo | Resultado y entrega; no se envía por aceptar |\n| Aprovisionar usuario Dual | Alta/reutilización en LMS, cursos y relaciones con posibles advertencias | Perfil, alumno, cursos, padre/coordinador |\n| Pago / Google / Drive / convenio | No se ha demostrado automatización integral con las acciones anteriores | Validación propia; no declarar completado |"
  },
  {
    "id": 8,
    "title": "Incidencias que impiden certificar el circuito completo",
    "text": "- El formulario inicia con el ciclo anterior y no ofrece Life Skills independiente.\n- La sincronización puede seleccionar la primera organización y coordinación disponibles, sin resolver la referencia de convenio. Comprobar y corregir asignación antes de entregar acceso.\n- La creación de usuario puede elegir correo con sufijo por coincidencias, pero sincronización vuelve a buscar el correo base o nombres. Verificar identidad exacta, especialmente homónimos.\n- Algunos errores de sincronización se capturan sin impedir mensajes de éxito: comprobar que expediente, relación familiar y matrícula existen.\n- La sincronización activa el expediente y puede usar paid cuando el estado económico falta. Un estado no constituye conciliación.\n- No se ha probado el circuito autenticado completo, aislamiento de familias/hubs, entrega de correo ni conciliación Stripe en producción.\nEstas incidencias están identificadas; esta actualización de formación no las corrige en el SIS."
  },
  {
    "id": 9,
    "title": "Práctica y validación",
    "text": "Con cuentas demo, revisar las vistas sin modificar datos reales. En entorno de prueba autorizado, coordinación valida: familia directa, dos hermanos, convenio, homónimo, alta parcial y estudiante Dual. Para cada caso anotar ID, acción, resultado esperado/observado, vínculos, pendientes y responsable. No adjuntar contraseñas reales. No cambiar Aceptada, crear usuarios o enviar bienvenida para una mera demostración."
  },
  {
    "id": 10,
    "title": "Fuentes y alcance",
    "text": "Inspección de rutas activas en marieladanais31-art/chanak-sis: src/App.jsx; src/pages/EnrollmentForm.jsx; api/enrollment.js; src/components/AdminEnrollmentRecords.jsx; src/lib/enrollmentSync.js; src/pages/AdminPanel.jsx; src/pages/ParentDashboard.jsx; src/pages/AdminHubs.jsx; src/components/AdminPayments.jsx; supabase/functions/admin-create-user/index.ts.\nLMS: marieladanais31-art/chanak-dual-diploma-lms, src/utils/admin/provision-user.ts.\nSe excluyeron EnrollmentWizard y componentes/páginas antiguas que no están montados en las rutas activas. Código consultado el 6 octubre 2026; describe implementación, no prueba de operaciones en vivo."
  }
]
