-- ============================================================
-- CHANAK STAFF TRAINING & OPERATIONS SYSTEM · Migración de Confirmación de Ramas por Dirección
--
-- REGLA OPERATIVA DE CONFIRMACIÓN DE RAMAS:
--   1. Rama Mentor y Rama Coordinador: los valida y confirma Dirección Académica (Mariela Andrade).
--   2. Rama Estratégico: la valida y confirma Dirección de Operaciones y Alianzas (Elías Vidal).
--
-- Esta migración es estrictamente ADITIVA e IDEMPOTENTE.
-- NOTA: NO ejecutar automáticamente en producción. Queda registrada para revisión y aplicación manual.
-- ============================================================

-- 1. Helper functions para verificar el rol directivo específico por identidad/email
create or replace function public.es_direccion_academica()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  select exists (
    select 1 from auth.users u
    where u.id = auth.uid()
      and lower(u.email) in (
        'administration@chanakacademy.org',
        'marieladanais31@gmail.com'
      )
  );
$$;

create or replace function public.es_direccion_operaciones()
returns boolean
language sql
security definer
set search_path = public
stable
as $$
  -- Sustituir por el correo exacto de auth.users antes de ejecutar
  select exists (
    select 1 from auth.users u
    where u.id = auth.uid()
      and lower(u.email) in (
        '<CORREO_LOGIN_ELIAS>'
      )
  );
$$;

comment on function public.es_direccion_academica is
  'Verifica si el usuario autenticado corresponde a la Dirección Académica (Mariela Andrade).';
comment on function public.es_direccion_operaciones is
  'Verifica si el usuario autenticado corresponde a la Dirección de Operaciones y Alianzas (Elías Vidal).';

-- 2. Columna aditiva en perfil_roles para trazabilidad de la dirección que confirmó la rama
alter table public.perfil_roles 
  add column if not exists confirmado_por_direccion text check (
    confirmado_por_direccion is null or 
    confirmado_por_direccion in ('direccion_academica', 'direccion_operaciones')
  );

comment on column public.perfil_roles.confirmado_por_direccion is 
  'Dirección que validó y confirmó la rama: direccion_academica (Mentor/Coordinador) o direccion_operaciones (Estratégico).';

-- 3. Políticas RLS granulares para confirmación y asignación de ramas por dirección
-- Eliminar las políticas de admin generales originales antes de crear las granulares
drop policy if exists "admin: asignar roles" on public.perfil_roles;
drop policy if exists "admin: actualizar roles" on public.perfil_roles;
drop policy if exists "admin: quitar roles" on public.perfil_roles;

-- Mentor y Coordinator: solo Dirección Académica
-- Estratégico: solo Dirección de Operaciones
drop policy if exists "direccion_academica: asignar mentor y coordinator" on public.perfil_roles;
create policy "direccion_academica: asignar mentor y coordinator" on public.perfil_roles
  for insert
  with check (
    (rol in ('mentor', 'coordinator') and public.es_direccion_academica())
    or (rol = 'estrategico' and public.es_direccion_operaciones())
  );

drop policy if exists "direcciones: actualizar ramas asignadas" on public.perfil_roles;
create policy "direcciones: actualizar ramas asignadas" on public.perfil_roles
  for update
  using (
    (rol in ('mentor', 'coordinator') and public.es_direccion_academica())
    or (rol = 'estrategico' and public.es_direccion_operaciones())
  )
  with check (
    (rol in ('mentor', 'coordinator') and public.es_direccion_academica())
    or (rol = 'estrategico' and public.es_direccion_operaciones())
  );

drop policy if exists "direcciones: revocar ramas asignadas" on public.perfil_roles;
create policy "direcciones: revocar ramas asignadas" on public.perfil_roles
  for delete
  using (
    (rol in ('mentor', 'coordinator') and public.es_direccion_academica())
    or (rol = 'estrategico' and public.es_direccion_operaciones())
  );

-- 4. Notificar recarga de esquema a PostgREST
notify pgrst, 'reload schema';

/*
============================================================
CONSULTAS DE COMPROBACIÓN (ejecutar tras aplicar la migración):
============================================================

-- 1. Verificar existencia, search_path y definición de las funciones:
select proname, prosecdef, proconfig
from pg_proc
where proname in ('es_direccion_academica', 'es_direccion_operaciones');

-- 2. Verificar que la columna de trazabilidad existe en perfil_roles:
select column_name, data_type, is_nullable
from information_schema.columns
where table_schema = 'public'
  and table_name = 'perfil_roles'
  and column_name = 'confirmado_por_direccion';

-- 3. Verificar políticas RLS activas en perfil_roles:
select polname, polcmd
from pg_policy
where polrelid = 'public.perfil_roles'::regclass;

-- 4. Probar la evaluación de funciones con la sesión actual:
select
  auth.uid() as mi_uid,
  public.es_direccion_academica() as soy_direccion_academica,
  public.es_direccion_operaciones() as soy_direccion_operaciones;

============================================================
BLOQUE DE REVERSIÓN (ROLLBACK):
Recrea las 3 políticas admin originales de migracion_roles.sql
y elimina las políticas granulares de dirección.
============================================================

-- 1. Eliminar políticas granulares de dirección:
drop policy if exists "direccion_academica: asignar mentor y coordinator" on public.perfil_roles;
drop policy if exists "direcciones: actualizar ramas asignadas" on public.perfil_roles;
drop policy if exists "direcciones: revocar ramas asignadas" on public.perfil_roles;

-- 2. Recrear las 3 políticas admin originales de migracion_roles.sql:
create policy "admin: asignar roles" on public.perfil_roles
  for insert with check (public.es_admin());

create policy "admin: actualizar roles" on public.perfil_roles
  for update using (public.es_admin()) with check (public.es_admin());

create policy "admin: quitar roles" on public.perfil_roles
  for delete using (public.es_admin());

-- 3. (Opcional) Eliminar funciones de dirección y columna de trazabilidad si se desea reversión completa:
-- drop function if exists public.es_direccion_academica();
-- drop function if exists public.es_direccion_operaciones();
-- alter table public.perfil_roles drop column if exists confirmado_por_direccion;

notify pgrst, 'reload schema';
*/
