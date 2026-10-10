-- Formulario inicial de confidencialidad y compromiso + funciones nuevas.
-- Migración aditiva: conserva perfiles, progreso, vídeos y roles existentes.

create table if not exists public.compromisos_formacion (
  perfil_id                   uuid primary key references public.perfiles(id) on delete cascade,
  version                     text not null,
  nombre_completo             text not null check (length(trim(nombre_completo)) >= 3),
  territorio                  text not null check (length(trim(territorio)) >= 2),
  funciones                   jsonb not null default '[]'::jsonb,
  confidencialidad            boolean not null check (confidencialidad),
  funciones_y_limites         boolean not null check (funciones_y_limites),
  proteccion_menores          boolean not null check (proteccion_menores),
  evidencias_y_compromiso     boolean not null check (evidencias_y_compromiso),
  autorizacion_institucional  boolean not null check (autorizacion_institucional),
  aceptado_en                 timestamptz not null default now(),
  actualizado_en              timestamptz not null default now()
);

comment on table public.compromisos_formacion is
  'Aceptación versionada de confidencialidad, funciones, safeguarding y compromiso antes de iniciar la formación.';

alter table public.compromisos_formacion enable row level security;
grant select, insert, update on table public.compromisos_formacion to authenticated;
revoke delete on table public.compromisos_formacion from anon, authenticated;

drop policy if exists "compromiso propio: leer" on public.compromisos_formacion;
create policy "compromiso propio: leer"
  on public.compromisos_formacion for select to authenticated
  using ((select auth.uid()) = perfil_id);

drop policy if exists "compromiso propio: aceptar" on public.compromisos_formacion;
create policy "compromiso propio: aceptar"
  on public.compromisos_formacion for insert to authenticated
  with check ((select auth.uid()) = perfil_id);

drop policy if exists "compromiso propio: actualizar" on public.compromisos_formacion;
create policy "compromiso propio: actualizar"
  on public.compromisos_formacion for update to authenticated
  using ((select auth.uid()) = perfil_id)
  with check ((select auth.uid()) = perfil_id);

drop policy if exists "admin: leer compromisos" on public.compromisos_formacion;
create policy "admin: leer compromisos"
  on public.compromisos_formacion for select to authenticated
  using ((select public.es_admin()));

alter table public.perfil_roles drop constraint if exists perfil_roles_funcion_check;
alter table public.perfil_roles add constraint perfil_roles_funcion_check check (
  funcion is null or funcion in (
    'mentor', 'coordinator', 'partner_director', 'english_teacher', 'academic_tutor',
    'lifeskills_facilitator', 'local_language', 'assessment_specialist',
    'strategic_general', 'academic_records', 'country_rep', 'state_rep',
    'program_rep', 'family_enrollment', 'institutional_partnerships',
    'grants_projects', 'lifeskills_project_coord'
  )
);

notify pgrst, 'reload schema';
