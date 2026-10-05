-- ============================================================
-- CHANAK STAFF TRAINING & OPERATIONS SYSTEM · Migración de ROLES MÚLTIPLES (idempotente)
-- ROLE ≠ PERSON: una persona puede tener varios roles. Cada rol activa sus módulos,
-- sistemas, documentos y checklist. Esta migración es ADITIVA: no borra ni modifica
-- datos existentes. Mientras una persona no tenga filas en perfil_roles, la app deriva
-- sus roles de perfiles.tipo_acceso (mentora → Mentor; coordinadora → Mentor + Coordinator).
-- ============================================================

-- 1. Roles asignados formalmente a cada persona (con territorio/programa si aplica)
create table if not exists public.perfil_roles (
  id           bigserial primary key,
  perfil_id    uuid not null references public.perfiles(id) on delete cascade,
  rol          text not null check (rol in (
    'mentor','coordinator','english_teacher','lifeskills_facilitator','local_language',
    'assessment_specialist','academic_records','country_rep','state_rep','program_rep',
    'family_enrollment','institutional_partnerships','grants_projects','lifeskills_project_coord'
  )),
  territorio   text,   -- Country/State/Program Representative: p. ej. 'México', 'Alabama'
  programa     text,   -- Program Representative: p. ej. 'CHOOSE', 'Dual Diploma'
  asignado_por uuid references public.perfiles(id) on delete set null,
  asignado_en  timestamptz not null default now()
);

create unique index if not exists perfil_roles_unico
  on public.perfil_roles (perfil_id, rol, coalesce(territorio, ''), coalesce(programa, ''));

comment on table public.perfil_roles is 'Roles asignados formalmente a cada persona. Un rol describe una función; una persona puede tener varios.';

-- 2. Contacto directo con menores: null = se deduce de los roles; true/false = decisión del admin
alter table public.perfiles add column if not exists contacto_menores boolean;
comment on column public.perfiles.contacto_menores is 'direct_child_contact: null = deducido de los roles; true/false = fijado por administración.';

-- 3. RLS: cada persona ve sus roles; solo un admin los asigna o los cambia
alter table public.perfil_roles enable row level security;
grant select, insert, update, delete on public.perfil_roles to authenticated;
grant usage, select on all sequences in schema public to authenticated;

drop policy if exists "roles propios: leer" on public.perfil_roles;
create policy "roles propios: leer" on public.perfil_roles
  for select using (perfil_id = auth.uid());

drop policy if exists "admin: leer todos los roles" on public.perfil_roles;
create policy "admin: leer todos los roles" on public.perfil_roles
  for select using (public.es_admin());

drop policy if exists "admin: asignar roles" on public.perfil_roles;
create policy "admin: asignar roles" on public.perfil_roles
  for insert with check (public.es_admin());

drop policy if exists "admin: actualizar roles" on public.perfil_roles;
create policy "admin: actualizar roles" on public.perfil_roles
  for update using (public.es_admin()) with check (public.es_admin());

drop policy if exists "admin: quitar roles" on public.perfil_roles;
create policy "admin: quitar roles" on public.perfil_roles
  for delete using (public.es_admin());

-- 4. Una persona NO puede cambiar por sí misma su rol, su estado ni su contacto_menores
drop policy if exists "perfil propio: actualizar nombre" on public.perfiles;
create policy "perfil propio: actualizar nombre" on public.perfiles
  for update using (id = auth.uid())
  with check (
    id = auth.uid()
    and rol    = (select rol    from public.perfiles where id = auth.uid())
    and estado = (select estado from public.perfiles where id = auth.uid())
    and contacto_menores is not distinct from (select contacto_menores from public.perfiles where id = auth.uid())
  );
