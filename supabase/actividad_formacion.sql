-- Registro nuevo de actividad aproximada. No reconstruye tiempo histórico.
create table public.actividad_formacion (
  id uuid primary key,
  perfil_id uuid not null references public.perfiles(id) on delete cascade,
  sesion_id uuid not null,
  vista text not null check (length(vista) between 1 and 80),
  modulo_id text check (length(modulo_id) <= 80),
  paso text check (paso in ('video','lectura','practica','quiz','evidencia','completado')),
  segundos_activos integer not null default 0 check (segundos_activos between 0 and 86400),
  creado_en timestamptz not null default now(),
  ultima_actividad timestamptz not null default now()
);
create index actividad_formacion_perfil_fecha on public.actividad_formacion(perfil_id, ultima_actividad desc);
alter table public.actividad_formacion enable row level security;
revoke all on public.actividad_formacion from anon, authenticated;
grant select, insert, update on public.actividad_formacion to authenticated;
create policy actividad_lectura on public.actividad_formacion for select to authenticated
  using (perfil_id = (select auth.uid()) or (select public.es_admin()));
create policy actividad_alta_propia on public.actividad_formacion for insert to authenticated
  with check (perfil_id = (select auth.uid()) and exists (select 1 from public.perfiles where id = (select auth.uid()) and estado = 'aprobada'));
create policy actividad_actualizacion_propia on public.actividad_formacion for update to authenticated
  using (perfil_id = (select auth.uid()))
  with check (perfil_id = (select auth.uid()) and exists (select 1 from public.perfiles where id = (select auth.uid()) and estado = 'aprobada'));
comment on table public.actividad_formacion is 'Tiempo aproximado visible con interacción en los últimos 120 segundos. Visitar una sección no acredita completarla. Registro desde publicación; no hay tiempo histórico reconstruido.';
