-- ============================================================
-- CHANAK ACADEMY · ACTIVACIÓN Y RESETEO DE USUARIAS (OCTUBRE 2026)
--
-- Plantilla de reseteo para ejecución manual en:
-- Supabase Dashboard -> SQL Editor -> New Query -> Pegar y dar clic en "Run"
--
-- NOTA DE PRIVACIDAD: Sustituir los marcadores <CORREO_USUARIA_...> antes de ejecutar.
-- ============================================================

-- 1. Actualizar contraseñas y confirmar correos en auth.users
UPDATE auth.users
SET 
  email_confirmed_at = coalesce(email_confirmed_at, now()),
  encrypted_password = crypt('Chanak2026*', gen_salt('bf')),
  updated_at = now()
WHERE lower(email) IN ('<CORREO_USUARIA_1>', '<CORREO_USUARIA_2>');

UPDATE auth.users
SET 
  email_confirmed_at = coalesce(email_confirmed_at, now()),
  encrypted_password = crypt('Chanak2026*', gen_salt('bf')),
  updated_at = now()
WHERE lower(email) = '<CORREO_USUARIA_3>';

-- 2. Asegurar que las usuarias tengan perfil activo y aprobado en public.perfiles
INSERT INTO public.perfiles (id, nombre, rol, estado, tipo_acceso, debe_cambiar_password)
SELECT 
  id,
  CASE 
    WHEN lower(email) = '<CORREO_USUARIA_1>' THEN '<NOMBRE_USUARIA_1>'
    WHEN lower(email) = '<CORREO_USUARIA_2>' THEN '<NOMBRE_USUARIA_2>'
    WHEN lower(email) = '<CORREO_USUARIA_3>' THEN '<NOMBRE_USUARIA_3>'
    ELSE 'Mentora'
  END,
  'mentora',
  'aprobada',
  'mentora',
  false
FROM auth.users
WHERE lower(email) IN ('<CORREO_USUARIA_1>', '<CORREO_USUARIA_2>', '<CORREO_USUARIA_3>')
ON CONFLICT (id) DO UPDATE SET
  nombre = EXCLUDED.nombre,
  estado = 'aprobada',
  tipo_acceso = 'mentora';

-- 3. Si la columna email existe en public.perfiles, sincronizarla
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_schema = 'public' AND table_name = 'perfiles' AND column_name = 'email'
  ) THEN
    UPDATE public.perfiles p
    SET email = u.email
    FROM auth.users u
    WHERE p.id = u.id AND lower(u.email) IN ('<CORREO_USUARIA_1>', '<CORREO_USUARIA_2>', '<CORREO_USUARIA_3>');
  END IF;
END $$;
