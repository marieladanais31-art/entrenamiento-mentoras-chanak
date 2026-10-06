# Operativa SIS · Matrícula, familias y alianzas
Versión 4 · 6 octubre 2026

## Dónde está
Formulario público: https://sis.chanakacademy.org/matricula (también /enrollment).
Administración: https://sis.chanakacademy.org/admin → Matrículas.
Formación: Inicio → Operativa SIS, y módulo T10.4.

## Accesos demo recuperados
Padre: demopadre@asociacioneducafe.org
Estudiante: demoestudiante@asociacioneducafe.org
Contraseña de ambas cuentas demo: Chanak2026
Son identificadores históricos recuperados del repositorio de formación. Su dominio no cambia al cambiar la marca. Pendiente comprobar inicio de sesión y aislamiento de datos en vivo. No son cuentas administrativas. Practicar con datos ficticios y no guardar cambios sobre expedientes reales.

## Familia directa · paso a paso
1. Enrollment identifica tutor legal, estudiante, programa, territorio, ciclo y condiciones. Busca solicitud, correo y expediente existentes antes de cualquier alta.
2. Familia abre /matricula. Seis pasos: Programa, Alumno, Familia, Académico, Documentos, Confirmar. Revisar año: el código inicia en 2025–2026; para el ciclo actual seleccionar 2026–2027. El formulario ofrece Off-Campus K-12 (España), Dual Diploma, On-Campus y Homeschool Supervisado. Life Skills independiente todavía no tiene opción.
3. Enviar guarda la solicitud y devuelve folio; no crea por sí solo las cuentas de acceso. La documentación puede quedar pendiente. La pantalla ofrece un enlace de pago y aclara que la solicitud/pago no garantiza admisión.
4. Administración → Matrículas: localizar el mismo folio, revisar identidad, programa, ciclo, documentación y pendientes. No duplicar solicitudes por un fallo de correo.
5. Administración verifica contrato, autorización académica y condiciones; en Pagos revisa cargos, moneda, importe, vencimiento y comprobante conciliado. La facturación de estudiantes y familias permanece en el SIS, según Mariela. No deducir pago confirmado a partir de un enlace Stripe o del estado activo.
6. Cuando el alta esté autorizada, usar Crear usuarios una vez y revisar el resultado de cada cuenta. La acción busca perfiles existentes, crea padre/estudiante que falten e intenta sincronizar el expediente. Un aviso de éxito no sustituye la comprobación de vínculos.
7. Matricular / Sincronizar también sincroniza. Cambiar la solicitud a Aceptada o Convertida dispara la misma sincronización. No usar estos estados como etiquetas inocuas ni repetir botones sin leer el expediente.
8. Revisar en Usuarios y Directorio Estudiantil: usuario, perfil, estudiante, ciclo, programa, estado, familiar, hub y coordinación. El estudiante debe tener su identidad propia; dos hermanos no comparten usuario.
9. Coordinación revisa PEI/ruta, materias, responsables y seguimiento. Crear/verificar Google for Education y Drive por sus circuitos propios. Para Dual comprobar alta, relaciones y cursos en el LMS Dual: el SIS no demuestra que existan.
10. Enviar bienvenida es una acción manual separada. Registrar resultado y entrega; si hay fallo, revisar proveedor/aviso antes de reenviar. Tutor y estudiante comprueban primer acceso y próxima acción.

## Cuando entra un estudiante
Inicia sesión con su cuenta propia → el rol student abre su panel. Debe coincidir perfil con expediente, ciclo y programa. Confirmar materias/PEI, responsable, tareas y canal de ayuda. No asumir que el login genera matrícula, materias o créditos. Si accede pero falta información, registrar incidencia con ID y comprobar vínculos; no crear otro alumno.
Para Dual, su alta en LMS tiene aprovisionamiento separado, puede asignar cursos y vincular padre/coordinador si ya existen. Revisar advertencias, ruta individual y cursos: una asignación automática no convalida créditos.

## Cuando entra una familia
El rol parent/family abre su panel. Se cargan estudiantes vinculados directamente o mediante relaciones familiares. Comprobar que aparecen todos sus hijos y solamente sus hijos. Revisar programa, PEI, progreso, pagos y ayuda. Una familia puede conservar cuenta para varios hijos; cada estudiante necesita su cuenta propia. El acceso a SIS no prueba existencia de Google o LMS.

## Familia por convenio
Aplicar el circuito de familia directa, añadiendo antes del pago: identificador del convenio, entidad responsable, autorización, tarifa/moneda, quién paga, alcance, responsables y vencimiento. El campo referencia del formulario es texto libre: no asigna automáticamente un hub ni aplica descuento. No enviar un enlace genérico de pago si no corresponde al convenio. Verificar manualmente hub/coordinación y condiciones en el expediente. La facturación de estudiantes y familias se gestiona en SIS; evitar cobrar dos veces al mismo estudiante.

## Alianza o cliente institucional
Primero definir si es una entidad referidora, una entidad pagadora o un hub educativo con alumnos/coordinación. La alianza no es una matrícula ni un usuario familiar.
1. Dirección aprueba acuerdo, alcance, territorio, protección de datos, responsables y condiciones económicas.
2. Si opera como hub, Administración → Hubs permite crear/editar una organización y asignar coordinación. No crear un hub para toda entidad referidora por rutina.
3. Dar acceso por rol autorizado a personas concretas. No existe en el código revisado un rol genérico “cliente” o “alianza”. Verificar que coordinación ve solamente los alumnos de su ámbito.
4. Matricular cada alumno por su solicitud y mantener sus familiares. Registrar el convenio y verificar la asignación: no se resuelve automáticamente desde referencia.
5. Mantener trazabilidad de acuerdo, alumno, facturación y próximo seguimiento. Mariela aún no ha decidido el sistema para facturación/seguimiento de alianzas; no presentar AdminPro ni otro sistema como integración aprobada.
6. No entregar acceso amplio de administración para compensar una función comercial ausente.

## Automatizaciones verificadas en código
| Disparador | Resultado previsto | Control posterior |
|---|---|---|
| Enviar formulario | Guarda solicitud/folio y enlace de pago; contacto y correos Brevo si está configurado | Solicitud existente; estado y avisos de correo |
| Crear usuarios | Busca perfiles, crea cuentas faltantes e intenta sincronizar | Cada cuenta, expediente y vínculo familiar |
| Aceptada / Convertida | Sincroniza estudiante, vínculo y registro de matrícula | Identidad, ciclo, hub, coordinación, estado de pago |
| Matricular / Sincronizar | Misma sincronización | Buscar expediente antes de repetir |
| Enviar bienvenida | Solicita correo a Brevo | Resultado y entrega; no se envía por aceptar |
| Aprovisionar usuario Dual | Alta/reutilización en LMS, cursos y relaciones con posibles advertencias | Perfil, alumno, cursos, padre/coordinador |
| Pago / Google / Drive / convenio | No se ha demostrado automatización integral con las acciones anteriores | Validación propia; no declarar completado |

## Incidencias que impiden certificar el circuito completo
- El formulario inicia con el ciclo anterior y no ofrece Life Skills independiente.
- La sincronización puede seleccionar la primera organización y coordinación disponibles, sin resolver la referencia de convenio. Comprobar y corregir asignación antes de entregar acceso.
- La creación de usuario puede elegir correo con sufijo por coincidencias, pero sincronización vuelve a buscar el correo base o nombres. Verificar identidad exacta, especialmente homónimos.
- Algunos errores de sincronización se capturan sin impedir mensajes de éxito: comprobar que expediente, relación familiar y matrícula existen.
- La sincronización activa el expediente y puede usar paid cuando el estado económico falta. Un estado no constituye conciliación.
- No se ha probado el circuito autenticado completo, aislamiento de familias/hubs, entrega de correo ni conciliación Stripe en producción.
Estas incidencias están identificadas; esta actualización de formación no las corrige en el SIS.

## Práctica y validación
Con cuentas demo, revisar las vistas sin modificar datos reales. En entorno de prueba autorizado, coordinación valida: familia directa, dos hermanos, convenio, homónimo, alta parcial y estudiante Dual. Para cada caso anotar ID, acción, resultado esperado/observado, vínculos, pendientes y responsable. No adjuntar contraseñas reales. No cambiar Aceptada, crear usuarios o enviar bienvenida para una mera demostración.

## Fuentes y alcance
Inspección de rutas activas en marieladanais31-art/chanak-sis: src/App.jsx; src/pages/EnrollmentForm.jsx; api/enrollment.js; src/components/AdminEnrollmentRecords.jsx; src/lib/enrollmentSync.js; src/pages/AdminPanel.jsx; src/pages/ParentDashboard.jsx; src/pages/AdminHubs.jsx; src/components/AdminPayments.jsx; supabase/functions/admin-create-user/index.ts.
LMS: marieladanais31-art/chanak-dual-diploma-lms, src/utils/admin/provision-user.ts.
Se excluyeron EnrollmentWizard y componentes/páginas antiguas que no están montados en las rutas activas. Código consultado el 6 octubre 2026; describe implementación, no prueba de operaciones en vivo.

