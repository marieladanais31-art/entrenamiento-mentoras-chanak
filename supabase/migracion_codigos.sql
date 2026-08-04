-- ============================================================
-- MIGRACIÓN: Sistema de Códigos de Acceso y Tipo de Acceso
-- Ejecutar en Supabase -> SQL Editor -> New query -> Run
-- (Este script es idempotente, se puede ejecutar múltiples veces sin error)
-- ============================================================

-- 1. Añadir la columna tipo_acceso a la tabla existente 'perfiles'
ALTER TABLE public.perfiles ADD COLUMN IF NOT EXISTS tipo_acceso text NOT NULL DEFAULT 'mentora' CHECK (tipo_acceso IN ('visionaria', 'mentora', 'coordinadora'));

-- 2. Crear la tabla de 'codigos_acceso'
CREATE TABLE IF NOT EXISTS public.codigos_acceso (
  id          bigserial primary key,
  codigo      text unique not null,
  tipo_acceso text not null CHECK (tipo_acceso IN ('visionaria', 'mentora', 'coordinadora')),
  usos_max    integer not null default 1,
  usos        integer not null default 0,
  activo      boolean not null default true,
  creado_por  uuid references auth.users on delete set null,
  creado_en   timestamptz not null default now(),
  expira_en   timestamptz
);

COMMENT ON TABLE public.codigos_acceso IS 'Códigos de acceso para registro de mentoras. Admin los crea, la usuaria los introduce al registrarse.';

-- 3. Actualizar la función trigger para incluir tipo_acceso al crear un perfil
CREATE OR REPLACE FUNCTION public.crear_perfil_nuevo_usuario()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.perfiles (id, nombre, tipo_acceso)
  VALUES (
    new.id,
    coalesce(new.raw_user_meta_data->>'nombre', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'tipo_acceso', 'mentora')
  );
  RETURN new;
END;
$$;

-- 4. Convertir a los administradores existentes al tipo de acceso 'coordinadora'
UPDATE public.perfiles SET tipo_acceso = 'coordinadora' WHERE rol = 'admin';

-- 5. Añadir políticas RLS (Seguridad de Nivel de Fila)
ALTER TABLE public.codigos_acceso ENABLE ROW LEVEL SECURITY;

-- Permitir a cualquier usuaria verificar si un código es válido (necesario durante el registro)
DROP POLICY IF EXISTS "leer codigos activos" ON public.codigos_acceso;
CREATE POLICY "leer codigos activos" ON public.codigos_acceso
  FOR SELECT USING (true);

-- Solo los administradores pueden crear o modificar códigos de acceso
DROP POLICY IF EXISTS "admin: gestionar codigos" ON public.codigos_acceso;
CREATE POLICY "admin: gestionar codigos" ON public.codigos_acceso
  FOR ALL USING (public.es_admin()) WITH CHECK (public.es_admin());

-- 6. Conceder permisos de acceso en la nueva tabla a usuarios autenticados
GRANT SELECT, INSERT, UPDATE, DELETE ON public.codigos_acceso TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
