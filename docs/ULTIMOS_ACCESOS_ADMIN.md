# Últimos accesos de usuarios

Ruta: Administración → Últimos accesos. También hay un botón grande al comienzo de Administración y la fecha de último inicio junto a cada cuenta en Personas.

- Último inicio de sesión: `auth.users.last_sign_in_at`, leído mediante una consulta estrictamente limitada a Administración aprobada.
- Última actividad: eventos de `actividad_formacion`; no equivale a autenticación ni acredita que se haya leído un contenido.
- Una sesión conservada puede registrar actividad posterior a la última autenticación. Se muestran ambas fechas, en horario de España.
- Un error de consulta no se presenta como ausencia de acceso. Los valores nulos se describen como “sin inicio registrado”, sin afirmar que la persona nunca entró.
- No se reconstruye el tiempo histórico que no se midió. El avance guardado y el reconocido se conservan.

## Seguridad

La función privilegiada está en `formacion_interna`, fuera de la API pública. La RPC pública es SECURITY INVOKER y solo recibe permiso de ejecución para `authenticated`. La función interna vuelve a comprobar `auth.uid()` y el rol/estado reales del perfil; no confía en metadatos editables. Solo devuelve identificador de perfil y fecha, sin contraseñas, tokens ni otros datos de Auth. Anónimo, mentor y estratégico no pueden consultar el informe. No se modifican usuarios, sesiones ni progreso.

Verificación: consulta administrativa de 24 cuentas, 20 con fecha; denegación de mentor y estratégico; anónimo sin permisos; sin nuevos avisos de seguridad relativos a estas funciones. Pruebas de fechas nulas, errores y actividad posterior al inicio, además de los controles existentes.

## Documentación en Drive

Operativa académica contiene guía de incorporación y hoja de voluntariado sin firmar. El manual administrativo completo está separado en una carpeta privada de Dirección. No subir certificados, CV ni hojas firmadas a la carpeta del material formativo. La recepción privada de expedientes y la firma digital no están implementadas por este cambio.
