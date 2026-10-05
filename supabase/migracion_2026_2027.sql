-- ============================================================
-- CHANAK · FORMACIÓN 2026–2027 · Migración (idempotente)
-- Añade a `perfiles` los campos de administración: país, programa asignado
-- e ID interno (aparece en el certificado). Ejecutar una vez en
-- Supabase → SQL Editor → Run. No borra datos.
-- ============================================================
alter table public.perfiles add column if not exists pais text;
alter table public.perfiles add column if not exists programa text;
alter table public.perfiles add column if not exists id_interno text;

comment on column public.perfiles.pais is 'País de trabajo (España, México, Panamá, Estados Unidos, Otro)';
comment on column public.perfiles.programa is 'Programa asignado (Off-Campus, Dual Diploma, Life Skills, Partner Learning Center, Varios)';
comment on column public.perfiles.id_interno is 'ID interno de la persona; se imprime en el certificado';

-- Nota: tipo_acceso conserva sus valores ('mentora', 'coordinadora', 'visionaria').
-- En la interfaz 2026–2027 se muestran como Mentor, Coordinator y Estratégico.
-- Los vídeos de la biblioteca 2026–2027 se guardan en `videos` con modulo_id = 'V01'…'V28'
-- y leccion_idx = 0. El progreso 2026–2027 usa módulos 'T1.1'…'T8.4'; el progreso
-- anterior (módulos '1.1'…'8.4') se conserva en la tabla y no se borra.
