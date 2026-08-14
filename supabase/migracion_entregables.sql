-- ============================================================
-- MIGRACIÓN: Sistema de subida de entregables (trabajos)
-- ============================================================

-- 1. Añadir columnas a la tabla progreso para guardar la referencia del archivo
ALTER TABLE public.progreso 
ADD COLUMN IF NOT EXISTS entregable_url text,
ADD COLUMN IF NOT EXISTS entregable_nombre text;

-- 2. Crear el Bucket de almacenamiento "entregables"
INSERT INTO storage.buckets (id, name, public) 
VALUES ('entregables', 'entregables', false)
ON CONFLICT (id) DO NOTHING;

-- 3. Habilitar RLS en la tabla de objetos de Storage
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- 4. Políticas de Seguridad (RLS) para el bucket "entregables"

-- A. Las usuarias autenticadas pueden ver sus propios archivos
DROP POLICY IF EXISTS "Usuarias pueden ver sus propios archivos" ON storage.objects;
CREATE POLICY "Usuarias pueden ver sus propios archivos"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'entregables' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- B. Las administradoras pueden ver todos los archivos
DROP POLICY IF EXISTS "Admins pueden ver todos los archivos" ON storage.objects;
CREATE POLICY "Admins pueden ver todos los archivos"
ON storage.objects FOR SELECT
USING (
  bucket_id = 'entregables' AND
  EXISTS (
    SELECT 1 FROM public.perfiles 
    WHERE id = auth.uid() AND rol = 'admin' AND estado = 'aprobada'
  )
);

-- C. Las usuarias autenticadas y aprobadas pueden subir/actualizar archivos a su propia carpeta
DROP POLICY IF EXISTS "Usuarias pueden subir archivos a su carpeta" ON storage.objects;
CREATE POLICY "Usuarias pueden subir archivos a su carpeta"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'entregables' AND
  auth.uid()::text = (storage.foldername(name))[1] AND
  EXISTS (
    SELECT 1 FROM public.perfiles 
    WHERE id = auth.uid() AND estado = 'aprobada'
  )
);

DROP POLICY IF EXISTS "Usuarias pueden actualizar sus archivos" ON storage.objects;
CREATE POLICY "Usuarias pueden actualizar sus archivos"
ON storage.objects FOR UPDATE
USING (
  bucket_id = 'entregables' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

DROP POLICY IF EXISTS "Usuarias pueden borrar sus archivos" ON storage.objects;
CREATE POLICY "Usuarias pueden borrar sus archivos"
ON storage.objects FOR DELETE
USING (
  bucket_id = 'entregables' AND
  auth.uid()::text = (storage.foldername(name))[1]
);
