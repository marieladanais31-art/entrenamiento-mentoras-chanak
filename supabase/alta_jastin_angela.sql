-- ============================================================
-- CHANAK ACADEMY · ALTA Y ACTIVACIÓN DIRECTA EN SUPABASE
-- Usuarias: jastin@ywamct.com y angela@ywamct.com (YWAM)
--
-- Ejecutar en:
-- Supabase Dashboard -> SQL Editor -> New Query -> Pegar y dar clic en "Run"
--
-- Contraseña asignada: Chanak2026*
-- ============================================================

DO $$
DECLARE
  v_pass text := crypt('Chanak2026*', gen_salt('bf'));
  v_users text[] := ARRAY['jastin@ywamct.com', 'angela@ywamct.com'];
  v_email text;
  v_id uuid;
  v_nombre text;
BEGIN
  -- Limpiar el dominio anterior erróneo si existiera
  DELETE FROM public.perfiles WHERE id IN (SELECT id FROM auth.users WHERE lower(email) IN ('jastin@wamct.com', 'angela@wamct.com'));
  DELETE FROM auth.users WHERE lower(email) IN ('jastin@wamct.com', 'angela@wamct.com');

  FOREACH v_email IN ARRAY v_users
  LOOP
    SELECT id INTO v_id FROM auth.users WHERE lower(email) = lower(v_email);
    v_nombre := initcap(split_part(v_email, '@', 1));
    
    IF v_id IS NULL THEN
      v_id := gen_random_uuid();
      INSERT INTO auth.users (
        id,
        instance_id,
        aud,
        role,
        email,
        encrypted_password,
        email_confirmed_at,
        raw_app_meta_data,
        raw_user_meta_data,
        created_at,
        updated_at,
        confirmation_token,
        recovery_token,
        email_change,
        email_change_token_new,
        email_change_token_current
      ) VALUES (
        v_id,
        '00000000-0000-0000-0000-000000000000',
        'authenticated',
        'authenticated',
        lower(v_email),
        v_pass,
        now(),
        '{"provider":"email","providers":["email"]}'::jsonb,
        jsonb_build_object('nombre', v_nombre, 'tipo_acceso', 'mentora'),
        now(),
        now(),
        '',
        '',
        '',
        '',
        ''
      );
    ELSE
      UPDATE auth.users
      SET encrypted_password = v_pass,
          email_confirmed_at = coalesce(email_confirmed_at, now()),
          updated_at = now()
      WHERE id = v_id;
    END IF;

    -- Asegurar perfil en public.perfiles
    INSERT INTO public.perfiles (id, nombre, rol, estado, tipo_acceso, debe_cambiar_password)
    VALUES (v_id, v_nombre, 'mentora', 'aprobada', 'mentora', false)
    ON CONFLICT (id) DO UPDATE SET
      nombre = EXCLUDED.nombre,
      estado = 'aprobada',
      tipo_acceso = 'mentora';

    -- Sincronizar columna email si existe
    IF EXISTS (
      SELECT 1 FROM information_schema.columns 
      WHERE table_schema = 'public' AND table_name = 'perfiles' AND column_name = 'email'
    ) THEN
      UPDATE public.perfiles SET email = lower(v_email) WHERE id = v_id;
    END IF;
  END LOOP;
END $$;
