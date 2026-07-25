-- ============================================================
-- CHANAK ACADEMY · Formación de Mentoras
-- Esquema de base de datos (Supabase / PostgreSQL)
--
-- Ejecutar completo en: Supabase → SQL Editor → New query → Run
-- Es idempotente: puede volverse a ejecutar sin romper nada.
-- ============================================================

-- ─────────────────────────────────────────────
-- 1. PERFILES (extiende auth.users)
-- ─────────────────────────────────────────────
create table if not exists public.perfiles (
  id          uuid primary key references auth.users on delete cascade,
  nombre      text not null,
  rol         text not null default 'mentora' check (rol in ('mentora', 'admin')),
  estado      text not null default 'pendiente' check (estado in ('pendiente', 'aprobada', 'suspendida')),
  creado_en   timestamptz not null default now()
);

comment on table public.perfiles is 'Perfil de cada usuaria. estado=pendiente hasta que un admin la aprueba.';

-- Al registrarse, se crea el perfil automáticamente en estado pendiente.
create or replace function public.crear_perfil_nuevo_usuario()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.perfiles (id, nombre)
  values (new.id, coalesce(new.raw_user_meta_data->>'nombre', split_part(new.email, '@', 1)));
  return new;
end;
$$;

drop trigger if exists al_crear_usuario on auth.users;
create trigger al_crear_usuario
  after insert on auth.users
  for each row execute function public.crear_perfil_nuevo_usuario();

-- Comprobación de rol admin. SECURITY DEFINER evita recursión infinita en las
-- políticas RLS de la propia tabla perfiles.
create or replace function public.es_admin()
returns boolean
language sql
stable
security definer set search_path = public
as $$
  select exists (
    select 1 from public.perfiles
    where id = auth.uid() and rol = 'admin' and estado = 'aprobada'
  );
$$;

-- ─────────────────────────────────────────────
-- 2. VÍDEOS DE LAS LECCIONES
-- ─────────────────────────────────────────────
create table if not exists public.videos (
  id           bigserial primary key,
  modulo_id    text not null,              -- '1.1', '2.3'…
  leccion_idx  integer not null,           -- índice de la lección dentro del módulo (0,1,2…)
  url          text not null,              -- enlace de Google Vids / YouTube / Drive
  nota         text,                       -- nota interna opcional de Mariela
  actualizado_en  timestamptz not null default now(),
  actualizado_por uuid references auth.users on delete set null,
  unique (modulo_id, leccion_idx)
);

comment on table public.videos is 'Un vídeo por lección. Solo un admin puede crear, editar o borrar.';

-- ─────────────────────────────────────────────
-- 3. PROGRESO POR USUARIA Y MÓDULO
-- ─────────────────────────────────────────────
create table if not exists public.progreso (
  id                bigserial primary key,
  usuaria_id        uuid not null references auth.users on delete cascade,
  modulo_id         text not null,
  estado            text not null default 'pendiente' check (estado in ('pendiente', 'en_curso', 'completado')),
  fecha_inicio      date,
  fecha_completado  date,
  notas             text,
  quiz              jsonb,                 -- { aciertos, total, aprobado }
  actualizado_en    timestamptz not null default now(),
  unique (usuaria_id, modulo_id)
);

comment on table public.progreso is 'Progreso de formación. La usuaria gestiona el suyo; un admin puede registrar horas retroactivas.';

create index if not exists progreso_usuaria_idx on public.progreso (usuaria_id);

-- ─────────────────────────────────────────────
-- 4. PRIVILEGIOS Y ROW LEVEL SECURITY
-- ─────────────────────────────────────────────
-- Privilegios de tabla para las usuarias con sesión iniciada. Quién ve qué fila
-- lo deciden las políticas RLS de más abajo; sin estos GRANT, PostgREST
-- responde «permission denied for table».
grant usage on schema public to anon, authenticated;
grant select, insert, update, delete
  on public.perfiles, public.videos, public.progreso
  to authenticated;
grant usage, select on all sequences in schema public to authenticated;

alter table public.perfiles enable row level security;
alter table public.videos   enable row level security;
alter table public.progreso enable row level security;

-- ── perfiles ──
drop policy if exists "perfil propio: leer" on public.perfiles;
create policy "perfil propio: leer" on public.perfiles
  for select using (id = auth.uid());

drop policy if exists "admin: leer todos los perfiles" on public.perfiles;
create policy "admin: leer todos los perfiles" on public.perfiles
  for select using (public.es_admin());

-- La usuaria puede cambiar su nombre, pero NO su rol ni su estado.
drop policy if exists "perfil propio: actualizar nombre" on public.perfiles;
create policy "perfil propio: actualizar nombre" on public.perfiles
  for update using (id = auth.uid())
  with check (
    id = auth.uid()
    and rol    = (select rol    from public.perfiles where id = auth.uid())
    and estado = (select estado from public.perfiles where id = auth.uid())
  );

drop policy if exists "admin: actualizar cualquier perfil" on public.perfiles;
create policy "admin: actualizar cualquier perfil" on public.perfiles
  for update using (public.es_admin()) with check (public.es_admin());

drop policy if exists "admin: borrar perfiles" on public.perfiles;
create policy "admin: borrar perfiles" on public.perfiles
  for delete using (public.es_admin());

-- ── videos ──
-- Cualquier usuaria aprobada puede ver los vídeos; solo un admin los gestiona.
drop policy if exists "aprobadas: ver videos" on public.videos;
create policy "aprobadas: ver videos" on public.videos
  for select using (
    exists (select 1 from public.perfiles p where p.id = auth.uid() and p.estado = 'aprobada')
  );

drop policy if exists "admin: gestionar videos" on public.videos;
create policy "admin: gestionar videos" on public.videos
  for all using (public.es_admin()) with check (public.es_admin());

-- ── progreso ──
drop policy if exists "progreso propio: leer" on public.progreso;
create policy "progreso propio: leer" on public.progreso
  for select using (usuaria_id = auth.uid());

drop policy if exists "progreso propio: escribir" on public.progreso;
create policy "progreso propio: escribir" on public.progreso
  for insert with check (
    usuaria_id = auth.uid()
    and exists (select 1 from public.perfiles p where p.id = auth.uid() and p.estado = 'aprobada')
  );

drop policy if exists "progreso propio: actualizar" on public.progreso;
create policy "progreso propio: actualizar" on public.progreso
  for update using (usuaria_id = auth.uid()) with check (usuaria_id = auth.uid());

drop policy if exists "admin: gestionar todo el progreso" on public.progreso;
create policy "admin: gestionar todo el progreso" on public.progreso
  for all using (public.es_admin()) with check (public.es_admin());

-- ============================================================
-- PASO FINAL OBLIGATORIO — convertir a Mariela en administradora
--
-- 1. Regístrate primero en la app con tu correo.
-- 2. Vuelve aquí y ejecuta esta línea con TU correo:
--
--    update public.perfiles set rol = 'admin', estado = 'aprobada'
--    where id = (select id from auth.users where email = 'TU_CORREO@chanakacademy.org');
--
-- Sin este paso nadie podrá aprobar usuarias ni gestionar vídeos.
-- ============================================================
