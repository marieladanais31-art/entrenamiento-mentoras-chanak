# Actividad y pendientes

Administración → Actividad y pendientes muestra por persona el tiempo activo aproximado, última actividad medida, último cambio de progreso, porcentaje de la ruta y módulos iniciados para revisar. El detalle distingue secciones abiertas, evaluación aprobada o sin entregar, evidencia guardada y cierre del módulo.

## Alcance de la medición

El tiempo comienza con la publicación de esta versión. La app anterior no almacenaba tiempo de uso. No se reconstruye a partir de las horas curriculares, fechas de matrícula o fechas de inicio.

Cuenta intervalos con la pestaña visible, foco y una interacción en los últimos dos minutos. Pausa al ocultar, perder foco o suspender el equipo. Coordina pestañas del mismo navegador mediante Web Locks y, como alternativa, una concesión breve en localStorage. No deduplica dispositivos diferentes. El guardado ocurre cada treinta segundos y al cambiar de contexto o abandonar la página, sin garantía de conservar el último intervalo si se cierra el navegador o falla la red. La reproducción pasiva de un vídeo puede quedar fuera después del límite de inactividad.

La medición sirve para seguimiento orientativo. No acredita aprendizaje ni horas de certificación. Abrir la pantalla de cierre no completa el módulo. El avance anterior reconocido se conserva y aparece con una nota cuando no hay detalles históricos de evaluación o evidencia. Las notas compartidas de práctica/evidencia solo permiten indicar que existe texto, no demostrar dos entregas distintas.

No se guarda el contenido de teclas o movimientos. El registro contiene usuario autenticado, sesión, pantalla, módulo, sección, segundos aproximados y fecha. Cuando Administración abre el panel de otra persona, se suspende la medición para no atribuirle la observación administrativa.

## Datos y permisos

`supabase/actividad_formacion.sql` documenta la migración aditiva `actividad_formacion`, aplicada al proyecto de entrenamiento. No afecta SIS ni Dual Diploma. RLS permite a cada persona insertar y actualizar sus propias filas y a Administración consultar el conjunto. El visitante anónimo carece de acceso. No cambia progreso, certificados, roles ni elecciones de rama.

Las pruebas de acceso se ejecutaron en transacción revertida: lectura y actualización propia permitidas, escritura y lectura ajena bloqueadas, lectura administrativa permitida, acceso anónimo bloqueado. No se dejaron datos ficticios.

## Publicación

Construir `main` con `npm ci`, `npm run lint` y `npm run build`. Publicar ese commit en el proyecto Vercel que sirve `training.chanakacademy.org`. Si Vercel no tiene integración Git activa, crear un despliegue nuevo desde `main`; reconstruir un despliegue antiguo no incorpora estos cambios.
