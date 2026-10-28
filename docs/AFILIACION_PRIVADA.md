# Afiliación · Estrategia y Marketing

La sección se abre dentro de Estrategia operativa. Los materiales, importes y PDF se almacenan exclusivamente en `public.materiales_estrategia` de la base de formación. No incluirlos en este repositorio público, `src/data`, `public` ni enlaces públicos de Drive.

## Autorización

- Perfil aprobado con `perfiles.rol = admin`, o perfil aprobado con una asignación real `perfil_roles.rol = estrategico`.
- La rama solicitada/elegida en `compromisos_formacion` no concede acceso.
- Marketing utiliza la asignación estratégica existente; no se crean permisos por autoselección.
- La autorización corresponde a la sesión real, no a la persona que Administración esté visualizando.
- RLS protege tanto el contenido como el PDF. `anon` carece de SELECT; `authenticated` solo tiene SELECT y la política anterior. No hay escrituras desde el cliente.

## Documentos y mantenimiento

Los estados son `aprobado` (condiciones confirmadas por Dirección), `borrador` (pendiente) y `referencia` (fuente aportada por revisar). La pantalla no publica automáticamente los documentos de ninguno de estos estados.

`supabase/materiales_estrategia.sql` conserva únicamente el esquema. La migración `materiales_estrategia_restringidos` se aplicó a la base de formación. Las cargas y actualizaciones de contenido deben ejecutarse desde un canal administrativo autorizado, fuera de Git. `archivo_base64` contiene los bytes originales del PDF; la lista no solicita ese campo. La descarga consulta de nuevo la tabla y queda sujeta a RLS.

No se modifican SIS, Dual Diploma, sus bases, credenciales, vídeos ni el progreso de formación. Este módulo documenta afiliación: no crea códigos, pagos automáticos ni seguimiento de referidos en la web o el SIS. Esas integraciones requieren una prueba completa antes de afirmarlas como operativas.

## Verificación realizada

- Sin sesión: sin permiso de lectura.
- Mentor sin asignación estratégica: cero documentos.
- Estratégico aprobado y Administración: cuatro documentos.
- Sin permisos de INSERT, UPDATE o DELETE para clientes autenticados.
- Comparación de huellas de los cuatro PDF almacenados con los archivos de origen: idénticas.
- Lint, compilación y pruebas existentes de formación.

Una descarga autorizada puede conservarse localmente. La revocación de la asignación impide nuevas lecturas y descargas, pero no retira una copia que una persona ya haya recibido legítimamente.
