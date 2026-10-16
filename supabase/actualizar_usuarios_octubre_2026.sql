-- ============================================================
-- CHANAK ACADEMY · ACTIVACIÓN Y RESETEO DE USUARIAS (OCTUBRE 2026)
--
-- Ejecutar en:
-- Supabase Dashboard -> SQL Editor -> New Query -> Pegar y dar clic en "Run"
--
-- Resumen de acciones:
-- 1. Cele Chanquia (celechanquia2016@gmail.com)    -> Clave: Chanak2026* | Correo Confirmado | Aprobada
-- 2. A. Medina (amedina6003@gmail.com)            -> Clave: Chanak2026* | Correo Confirmado | Aprobada
-- 3. M. Claudia Jimenez (net.amyclau@gmail.com)   -> Clave: Chanak2026  | Correo Confirmado | Aprobada
-- ============================================================

-- 1. Actualizar contraseñas y confirmar correos en auth.users
UPDATE auth.users
SET 
  email_confirmed_at = coalesce(email_confirmed_at, now()),
  encrypted_password = crypt('Chanak2026*', gen_salt('bf')),
  updated_at = now()
WHERE lower(email) IN ('celechanquia2016@gmail.com', 'amedina6003@gmail.com');

UPDATE auth.users
SET 
  email_confirmed_at = coalesce(email_confirmed_at, now()),
  encrypted_password = crypt('Chanak2026', gen_salt('bf')),
  updated_at = now()
WHERE lower(email) = 'net.amyclau@gmail.com';

-- 2. Asegurar que las 3 usuarias tengan perfil activo y aprobado en public.perfiles
INSERT INTO public.perfiles (id, nombre, rol, estado, tipo_acceso, debe_cambiar_password)
SELECT 
  id,
  CASE 
    WHEN lower(email) = 'celechanquia2016@gmail.com' THEN 'Cele Chanquia'
    WHEN lower(email) = 'amedina6003@gmail.com' THEN 'A. Medina'
    WHEN lower(email) = 'net.amyclau@gmail.com' THEN 'M. Claudia Jimenez'
    ELSE 'Mentora'
  END,
  'mentora',
  'aprobada',
  'mentora',
  false
FROM auth.users
WHERE lower(email) IN ('celechanquia2016@gmail.com', 'amedina6003@gmail.com', 'net.amyclau@gmail.com')
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
    WHERE p.id = u.id AND lower(u.email) IN ('celechanquia2016@gmail.com', 'amedina6003@gmail.com', 'net.amyclau@gmail.com');
  END IF;
END $$;
