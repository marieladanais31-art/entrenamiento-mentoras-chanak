create schema formacion_interna authorization postgres;
revoke all on schema formacion_interna from public, anon;
grant usage on schema formacion_interna to authenticated;
create function formacion_interna.leer_ultimos_accesos()
returns table(perfil_id uuid, ultimo_inicio_sesion timestamptz)
language plpgsql stable security definer set search_path = ''
as $$
begin
 if auth.uid() is null or not exists (
  select 1 from public.perfiles p where p.id=auth.uid() and p.rol='admin' and p.estado='aprobada'
 ) then raise exception 'Solo Administración aprobada puede consultar los accesos.' using errcode='42501'; end if;
 return query select p.id,u.last_sign_in_at from public.perfiles p join auth.users u on u.id=p.id;
end;
$$;
revoke all on function formacion_interna.leer_ultimos_accesos() from public,anon,authenticated;
grant execute on function formacion_interna.leer_ultimos_accesos() to authenticated;
create function public.admin_ultimos_accesos_formacion()
returns table(perfil_id uuid, ultimo_inicio_sesion timestamptz)
language sql stable security invoker set search_path = ''
as $$ select * from formacion_interna.leer_ultimos_accesos(); $$;
revoke all on function public.admin_ultimos_accesos_formacion() from public,anon,authenticated;
grant execute on function public.admin_ultimos_accesos_formacion() to authenticated;
comment on function public.admin_ultimos_accesos_formacion() is 'Solo admin aprobado. Fecha de autenticación; no equivale a última visita con sesión conservada ni a tiempo activo. Sin contraseñas, tokens o metadatos.';

