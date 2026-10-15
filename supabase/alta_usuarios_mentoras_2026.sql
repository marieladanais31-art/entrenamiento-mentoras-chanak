-- ============================================================
-- CHANAK ACADEMY · ALTA Y ACTIVACIÓN DE 14 USUARIAS (2026-2027)
--
-- Ejecutar en:
-- Supabase Dashboard -> SQL Editor -> New Query -> Pegar y dar clic en "Run"
--
-- Efecto:
-- 1. Crea o actualiza las 14 cuentas en auth.users con contraseña temporal:
--    Chanak2026*
-- 2. Confirma sus correos automáticamente (email_confirmed_at = now()).
-- 3. Activa sus perfiles en public.perfiles (estado = 'aprobada').
-- 4. Marca debe_cambiar_password = true para solicitarles cambio de contraseña al entrar.
-- 5. Asigna sus roles correspondientes en public.perfil_roles.
-- 6. Es 100% idempotente: se puede ejecutar múltiples veces sin duplicar ni romper nada.
-- ============================================================

-- 0. Asegurar columna de cambio obligatorio de contraseña en perfiles
ALTER TABLE public.perfiles ADD COLUMN IF NOT EXISTS debe_cambiar_password boolean DEFAULT false;

-- Si algún registro tenía phone vacío, devolver a NULL para respetar la restricción única
UPDATE auth.users SET phone = NULL WHERE phone = '';

-- Reparar tokens de GoTrue para evitar error 500 al iniciar sesión
UPDATE auth.users
SET
  confirmation_token = coalesce(confirmation_token, ''),
  recovery_token = coalesce(recovery_token, ''),
  email_change = coalesce(email_change, ''),
  email_change_token_new = coalesce(email_change_token_new, ''),
  email_change_token_current = coalesce(email_change_token_current, '');

DO $$
DECLARE
  v_user_id uuid;
  v_pass_hash text;
  r RECORD;
  v_usuarios jsonb := '[
    {
      "email": "mentora1@chanakacademy.org",
      "nombre": "Mentora Ejemplo 1",
      "tipo_acceso": "mentora",
      "roles": [
        {"rol": "mentor", "funcion": "mentor"}
      ]
    },
    {
      "email": "coordinadora1@chanakacademy.org",
      "nombre": "Coordinadora Ejemplo 1",
      "tipo_acceso": "coordinadora",
      "roles": [
        {"rol": "coordinator", "funcion": "coordinator"},
        {"rol": "mentor", "funcion": "mentor"}
      ]
    }
  ]'::jsonb;
  v_u jsonb;
  v_r jsonb;
BEGIN
  -- Contraseña temporal (definir contraseña segura):
  v_pass_hash := crypt(coalesce(current_setting('app.settings.default_pass', true), '<CONTRASENA_TEMPORAL>'), gen_salt('bf'));

  FOR v_u IN SELECT * FROM jsonb_array_elements(v_usuarios)
  LOOP
    -- 1. Buscar si ya existe en auth.users
    SELECT id INTO v_user_id
    FROM auth.users
    WHERE lower(email) = lower(v_u->>'email');

    IF v_user_id IS NULL THEN
      -- Crear usuario en auth.users
      v_user_id := gen_random_uuid();
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
        v_user_id,
        '00000000-0000-0000-0000-000000000000',
        'authenticated',
        'authenticated',
        lower(v_u->>'email'),
        v_pass_hash,
        now(),
        '{"provider":"email","providers":["email"]}'::jsonb,
        jsonb_build_object(
          'nombre', v_u->>'nombre',
          'tipo_acceso', v_u->>'tipo_acceso',
          'debe_cambiar_password', true
        ),
        now(),
        now(),
        '',
        '',
        '',
        '',
        ''
      );
    ELSE
      -- Si ya existía, actualizar a contraseña Chanak2026*, confirmar correo y marcar cambio obligatorio
      UPDATE auth.users
      SET
        encrypted_password = v_pass_hash,
        email_confirmed_at = coalesce(email_confirmed_at, now()),
        raw_user_meta_data = jsonb_build_object(
          'nombre', v_u->>'nombre',
          'tipo_acceso', v_u->>'tipo_acceso',
          'debe_cambiar_password', true
        ),
        confirmation_token = coalesce(confirmation_token, ''),
        recovery_token = coalesce(recovery_token, ''),
        email_change = coalesce(email_change, ''),
        email_change_token_new = coalesce(email_change_token_new, ''),
        email_change_token_current = coalesce(email_change_token_current, ''),
        updated_at = now()
      WHERE id = v_user_id;
    END IF;

    -- 2. Asegurar registro aprobado en public.perfiles con debe_cambiar_password = true
    INSERT INTO public.perfiles (id, nombre, rol, estado, tipo_acceso, debe_cambiar_password)
    VALUES (
      v_user_id,
      v_u->>'nombre',
      'mentora',
      'aprobada',
      v_u->>'tipo_acceso',
      true
    )
    ON CONFLICT (id) DO UPDATE SET
      nombre = EXCLUDED.nombre,
      estado = 'aprobada',
      tipo_acceso = EXCLUDED.tipo_acceso,
      debe_cambiar_password = true;

    -- 3. Asignar roles en public.perfil_roles (si la tabla existe)
    IF EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = 'perfil_roles') THEN
      FOR v_r IN SELECT * FROM jsonb_array_elements(v_u->'roles')
      LOOP
        INSERT INTO public.perfil_roles (perfil_id, rol, funcion, asignado_en)
        VALUES (
          v_user_id,
          v_r->>'rol',
          v_r->>'funcion',
          now()
        )
        ON CONFLICT DO NOTHING;
      END LOOP;
    END IF;

  END LOOP;
END $$;

-- 4. Códigos de acceso alternativos de respaldo
INSERT INTO public.codigos_acceso (codigo, tipo_acceso, usos_max, usos, activo)
VALUES
  ('ESTRATEGIA2026', 'visionaria', 100, 0, true),
  ('COORDINADORA2026', 'coordinadora', 100, 0, true),
  ('MENTORA2026', 'mentora', 100, 0, true)
ON CONFLICT (codigo) DO UPDATE SET activo = true;
