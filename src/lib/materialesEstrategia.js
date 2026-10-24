import { supabase } from './supabase'

// El servidor decide el acceso: no usar la rama elegida ni la vista de otra persona.
// Las tarifas y los PDF se leen de una tabla con RLS; no están en el bundle público.
export async function listarMaterialesEstrategia() {
  const { data: auth, error: authError } = await supabase.auth.getUser()
  if (authError || !auth.user) throw new Error('Debes iniciar sesión para consultar estos materiales.')
  const { data, error } = await supabase.from('materiales_estrategia')
    .select('id,titulo,pais,idioma,estado,resumen,contenido,nombre_archivo,actualizado_en')
    .order('pais').order('id')
  if (error) throw new Error('No se pudieron cargar los materiales internos. Inténtalo de nuevo.')
  return data
}

export async function descargarMaterialEstrategia(id) {
  const { data, error } = await supabase.from('materiales_estrategia')
    .select('archivo_base64,nombre_archivo').eq('id', id).maybeSingle()
  if (error || !data) throw new Error('No tienes acceso a este documento o tu asignación ha cambiado.')
  const bytes = Uint8Array.from(atob(data.archivo_base64), c => c.charCodeAt(0))
  const url = URL.createObjectURL(new Blob([bytes], { type: 'application/pdf' }))
  const a = document.createElement('a')
  a.href = url
  a.download = data.nombre_archivo.split('/').join('-').split('\\').join('-')
  document.body.appendChild(a)
  a.click()
  a.remove()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
