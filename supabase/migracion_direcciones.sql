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
stable
as $$
  select exists (
    select 1 from auth.users u
    where u.id = auth.uid()
      and lower(u.email) in (
        'administration@chanakacademy.org',
        'marieladanais31@gmail.com'
      )
  ) or public.es_admin();
$$;

create or replace function public.es_direccion_operaciones()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from auth.users u
    where u.id = auth.uid()
      and lower(u.email) in (
        'eliasvidal@chanakacademy.org'
      )
  ) or public.es_admin();
$$;

comment on function public.es_direccion_academica is
  'Verifica si el usuario autenticado corresponde a la Dirección Académica (Mariela Andrade) o administrador central.';
comment on function public.es_direccion_operaciones is
  'Verifica si el usuario autenticado corresponde a la Dirección de Operaciones y Alianzas (Elías Vidal) o administrador central.';

-- 2. Columna aditiva en perfil_roles para trazabilidad de la dirección que confirmó la rama
alter table public.perfil_roles 
  add column if not exists confirmado_por_direccion text check (
    confirmado_por_direccion is null or 
    confirmado_por_direccion in ('direccion_academica', 'direccion_operaciones')
  );

comment on column public.perfil_roles.confirmado_por_direccion is 
  'Dirección que validó y confirmó la rama: direccion_academica (Mentor/Coordinador) o direccion_operaciones (Estratégico).';

-- 3. Políticas RLS granulares para confirmación y asignación de ramas por dirección
-- Mentor y Coordinator: solo Dirección Académica (o superadmin)
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
