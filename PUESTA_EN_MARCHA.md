# Puesta en marcha

**App en producción:** https://entrenamiento-mentoras-chanak-two.vercel.app

Tres pasos, una sola vez. Después la app funciona sola.

## 1. Crear las tablas en Supabase

Copia el esquema al portapapeles:

```bash
cat "supabase/schema.sql" | pbcopy
```

Luego ve a [SQL Editor del proyecto](https://supabase.com/dashboard/project/wzckqudnjjudndtchglm/sql/new),
pega (⌘V) y pulsa **Run**. Crea 3 tablas (`perfiles`, `videos`, `progreso`), el trigger de
registro y las políticas RLS. Es idempotente: se puede volver a ejecutar sin romper nada.

## 1b. Migración 2026–2027 (una vez)

Ejecuta también `supabase/migracion_2026_2027.sql` (añade país, programa e ID interno a `perfiles`).

## 2. Crear tu cuenta y hacerte administradora

1. Abre la app y pulsa **Crear cuenta**. Regístrate con tu correo institucional.
2. Vuelve al SQL Editor y ejecuta esto con **tu** correo:

```sql
update public.perfiles set rol = 'admin', estado = 'aprobada'
where id = (select id from auth.users where email = 'TU_CORREO@chanakacademy.org');
```

Sin este paso nadie puede aprobar cuentas ni gestionar vídeos.

## 3. (Opcional) Quitar la confirmación de correo

Si quieres que las personas entren sin confirmar el correo:
Supabase → **Authentication → Sign In / Providers → Email** → desactiva *Confirm email*.

Con la confirmación activada, cada persona recibe un correo antes de poder entrar.

---

## Cómo funciona el acceso

| | Mentor / Coordinator | Administración |
|---|---|---|
| Ver módulos y vídeos | ✅ | ✅ |
| Knowledge Checks y progreso propio | ✅ | ✅ |
| Editar vídeos dentro del módulo | ❌ | ✅ |
| Añadir, cambiar y borrar vídeos | ❌ | ✅ |
| Aprobar, suspender y asignar rol, país y programa | ❌ | ✅ |
| Ver el progreso de todo el equipo | ❌ | ✅ |
| Registrar horas retroactivas | ❌ | ✅ |
| Emitir certificados | ❌ | ✅ |

Las cuentas nuevas quedan **pendientes** hasta que las apruebas en
**Admin → Usuarios**. Nadie entra a la formación sin tu aprobación.

## Vídeos (biblioteca de 28)

Cada módulo tiene un vídeo (V01–V28) definido en `src/data/videos.js`. Puedes:

- pegar la URL en **Admin → Vídeos** o dentro del propio módulo (se guarda en Supabase y todo el
  equipo lo ve al instante, sin desplegar), o
- escribirla en `videoUrl` de `src/data/videos.js` y desplegar.

Formatos: MP4 directo, YouTube, Vimeo, Google Drive, Google Vids o cualquier URL (se abre en pestaña nueva).
Si usas Drive o Google Vids, comparte como «Cualquier persona con el enlace».
