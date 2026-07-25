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

## 2. Crear tu cuenta y hacerte administradora

1. Abre la app y pulsa **Crear cuenta**. Regístrate con tu correo institucional.
2. Vuelve al SQL Editor y ejecuta esto con **tu** correo:

```sql
update public.perfiles set rol = 'admin', estado = 'aprobada'
where id = (select id from auth.users where email = 'TU_CORREO@chanakacademy.org');
```

Sin este paso nadie puede aprobar usuarias ni gestionar vídeos.

## 3. (Opcional) Quitar la confirmación de correo

Si quieres que las mentoras entren sin confirmar el correo:
Supabase → **Authentication → Sign In / Providers → Email** → desactiva *Confirm email*.

Con la confirmación activada, cada mentora recibe un correo antes de poder entrar.

---

## Cómo funciona el acceso

| | Mentora | Administradora (tú) |
|---|---|---|
| Ver lecciones y vídeos | ✅ | ✅ |
| Knowledge Checks y progreso propio | ✅ | ✅ |
| Indicaciones de producción de cada lección | ❌ | ✅ |
| Añadir, cambiar y borrar vídeos | ❌ | ✅ |
| Aprobar, suspender y ascender usuarias | ❌ | ✅ |
| Ver el progreso de todo el equipo | ❌ | ✅ |
| Registrar horas retroactivas | ❌ | ✅ |
| Emitir certificados | ❌ | ✅ |

Las cuentas nuevas quedan **pendientes** hasta que las apruebas en
**Admin → Usuarias**. Nadie entra a la formación sin tu aprobación.

## Vídeos de las lecciones

En cualquier lección, como administradora verás **➕ Añadir vídeo de Google Vids**.
Pega el enlace y se guarda en Supabase: todas las mentoras lo ven al instante, en
cualquier dispositivo.

> Antes de pegar el enlace, en Google Vids pon **Compartir → Cualquier persona con el
> enlace**, o las mentoras no podrán reproducirlo.

Acepta enlaces de Google Vids, Google Drive y YouTube. Si el formato no se puede
incrustar, la app muestra un botón para abrirlo en una pestaña nueva.

## Seguridad

- La clave `anon` de `src/lib/supabase.js` es **pública por diseño** (va en todo frontend de
  Supabase). El acceso real lo controlan las políticas RLS del esquema.
- La clave `service_role` **nunca** debe estar en este repositorio.
- Las políticas RLS garantizan que una mentora solo lee y escribe su propio progreso, y que
  solo un admin gestiona vídeos y perfiles.
