# Revisión operativa · 4 de noviembre de 2026

## Fuentes y alcance

Código SIS revisado en commit 64903ed4308d8ee143ceafd26b004629bd0ef5a5 y Dual Diploma LMS en 2e7a7cf597c2989c9e291692c34503320f209758. Revisión de componentes de mentor, seguimiento, alertas, Coins, solicitudes de cita y cola de revisión de Coordinación; no es una auditoría exhaustiva ni una prueba de todas las pantallas desplegadas. No se modifican esos sistemas ni sus bases.

Documentos aportados: reunión mensual del mentor general; clase grupal de Inglés; clase grupal de Life Skills; tres propuestas de cartel de reglas/Coins; manual Florida/EMA. Se preservan los originales. Los tres instructivos académicos tienen enlaces directos en el manual y módulos pertinentes. El dossier financiero no se publica en este repositorio público.

## Cambios incorporados

- Manual por función y lecturas relevantes: reunión mensual, responsabilidades de familia/especialistas/coordinación, límites del servicio contratado, evidencias, feedback y estados de revisión.
- Coins: se completa el catálogo de méritos revisado. Los carteles +20/+20/+50 continúan como propuestas; no cambian el SIS.
- Administración → Últimos accesos: se distinguen autenticación, actividad y progreso; seguimiento sugerido tras 7/14 días y borrador revisable sin envío. Se excluyen administradores, cuentas no aprobadas y rutas completadas. Datos ausentes o errores nunca se interpretan como abandono.
- No cambian identificadores de módulos, vídeos aprobados de YouTube, preguntas, umbrales ni registros de avance.

## Pendientes priorizados

1. **Florida/HEIP:** confirmar por escrito la compatibilidad de la modalidad real con Step Up. El manual oficial de proveedores indica que Home Education Instructional Programs no pueden ser online. La aprobación de un ítem no elimina esa condición. No extender a todo PEP/FES-UA afirmaciones sobre servicios concretos. Fuente: https://www.stepupforstudents.org/handbook-web/provider-handbook/
2. **Documentación financiera restringida:** revisar el dossier aportado contra la cuenta EMA. Distinguir ítems mensuales aprobados de cuota anual en revisión; conservar historial y fecha. No introducir sus tarifas en lecturas generales ni publicarlas como oferta universal.
3. **Embajadores:** falta el HTML anunciado. Al recibirlo, revisar condiciones, territorio, atribución, cobro/retrocesiones, privacidad, mensajes permitidos y diferencias con funciones académicas. Material comercial detallado solo en Estrategia/Marketing/Administración; una invitación pública no otorga acceso a estos datos.
4. **Citas:** existen componentes de solicitud/gestión en SIS; falta verificar con cuentas de prueba su conexión a las pantallas reales, permisos y recorrido completo. No afirmar que una solicitud crea automáticamente una cita de Google Calendar.
5. **Alertas automáticas de formación:** falta servicio de envío autorizado, remitente verificado y tarea de servidor. Propuesta: revisión diaria, recordatorio a 7 días, contacto a 14; detener al volver, completar o suspender; deduplicar envíos, limitar frecuencia y registrar errores. No activar con una clave en el navegador ni a partir solo de last_sign_in_at. Aún no se envían correos.
6. **Pruebas reales por rol:** contrastar las instrucciones con cuentas ficticias de mentor general, Inglés, Life Skills, familia y Coordinación en las versiones desplegadas antes de grabar vídeos. El análisis de código no sustituye esa prueba.
7. **Manuales anteriores:** las tres guías nuevas complementan el PDF de octubre; ese PDF no se ha reeditado íntegramente. La app identifica la revisión de noviembre y sus precisiones. Consolidar una edición final tras cerrar las verificaciones anteriores.

## Administración: interpretación de fechas

- Último inicio de sesión: registro de autenticación; no necesariamente la última visita.
- Última actividad: interacción medida en la app; puede ser posterior al login por sesión conservada.
- Último cambio de progreso: modificación guardada de avance; no demuestra una visita sin cambios.
- Tiempo activo: aproximación desde que existe medición; no reconstruye sesiones anteriores.
- Para el seguimiento se toma la señal más reciente entre login y actividad. Sin datos no significa que nunca haya entrado.

## Validación

Instalación completada; lint sin errores; build correcto (aviso existente de tamaño del bundle); 11 pruebas correctas, incluidas sesiones conservadas, datos ausentes, umbrales 7/14 días y exclusión de cuentas suspendidas/completadas. Publicación y validación de Vercel se documentan en el PR.
