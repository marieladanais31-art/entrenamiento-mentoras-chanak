create table public.materiales_estrategia (
 id text primary key,
 titulo text not null,
 pais text not null,
 idioma text not null default 'es',
 estado text not null check (estado in ('aprobado','referencia','borrador')),
 resumen text not null,
 contenido jsonb not null default '{}'::jsonb,
 archivo_base64 text not null,
 nombre_archivo text not null,
 actualizado_en timestamptz not null default now()
);
alter table public.materiales_estrategia enable row level security;
revoke all on public.materiales_estrategia from anon, authenticated;
grant select on public.materiales_estrategia to authenticated;
create policy materiales_estrategia_lectura on public.materiales_estrategia
 for select to authenticated using (
 exists (select 1 from public.perfiles p where p.id = (select auth.uid())
 and p.estado = 'aprobada'
 and (p.rol = 'admin' or exists (
 select 1 from public.perfil_roles r where r.perfil_id = p.id and r.rol = 'estrategico'
 )))
);
comment on table public.materiales_estrategia is 'Documentación interna. Lectura solo por administración aprobada o asignación estratégica formal. Sin escritura desde el cliente.';
