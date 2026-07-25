import { createClient } from '@supabase/supabase-js'

// Proyecto Supabase «Chanak entrenamiento».
// La clave anon es PÚBLICA por diseño (va siempre en el frontend) y el acceso
// real está protegido por las políticas RLS de supabase/schema.sql.
// La clave service_role NUNCA debe aparecer aquí.
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://wzckqudnjjudndtchglm.supabase.co'
const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6Y2txdWRuamp1ZG5kdGNoZ2xtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5ODE4ODksImV4cCI6MjEwMDU1Nzg4OX0.lEd_G8LxcvJp3Qnw4NAPuvr_1TsqKRNfFqJlQeqmXRw'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true },
})
