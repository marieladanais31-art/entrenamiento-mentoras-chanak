import { supabase } from './supabase'

// ════════════════════════════════════════════
// AUTENTICACIÓN
// ════════════════════════════════════════════

export async function registrar(email, password, nombre) {
  const { data, error } = await supabase.auth.signUp({
    email: email.trim().toLowerCase(),
    password,
    options: { data: { nombre: nombre.trim() } },
  })
  if (error) throw new Error(traducirError(error.message))
  return data
}

export async function entrar(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  })
  if (error) throw new Error(traducirError(error.message))
  return data
}

export async function salir() {
  await supabase.auth.signOut()
}

export async function getSesion() {
  const { data } = await supabase.auth.getSession()
  return data.session
}

export function onCambioAuth(callback) {
  const { data } = supabase.auth.onAuthStateChange((_evento, sesion) => callback(sesion))
  return () => data.subscription.unsubscribe()
}

export async function getPerfil(userId) {
  const { data, error } = await supabase
    .from('perfiles')
    .select('id, nombre, rol, estado, creado_en')
    .eq('id', userId)
    .maybeSingle()
  if (error) throw new Error(error.message)
  return data
}

// ════════════════════════════════════════════
// PERFILES (gestión de admin)
// ════════════════════════════════════════════

export async function listarPerfiles() {
  const { data, error } = await supabase
    .from('perfiles')
    .select('id, nombre, rol, estado, creado_en')
    .order('creado_en', { ascending: true })
  if (error) throw new Error(error.message)
  return data || []
}

export async function actualizarPerfil(id, cambios) {
  const { error } = await supabase.from('perfiles').update(cambios).eq('id', id)
  if (error) throw new Error(error.message)
}

// ════════════════════════════════════════════
// VÍDEOS DE LECCIONES
// ════════════════════════════════════════════

// Devuelve un mapa { '1.1:0': { url, nota } }
export async function getVideos() {
  const { data, error } = await supabase.from('videos').select('modulo_id, leccion_idx, url, nota')
  if (error) throw new Error(error.message)
  const mapa = {}
  for (const v of data || []) mapa[`${v.modulo_id}:${v.leccion_idx}`] = { url: v.url, nota: v.nota }
  return mapa
}

export async function guardarVideo(moduloId, leccionIdx, url, nota, userId) {
  const { error } = await supabase.from('videos').upsert(
    {
      modulo_id: moduloId,
      leccion_idx: leccionIdx,
      url: url.trim(),
      nota: nota?.trim() || null,
      actualizado_en: new Date().toISOString(),
      actualizado_por: userId,
    },
    { onConflict: 'modulo_id,leccion_idx' }
  )
  if (error) throw new Error(error.message)
}

export async function borrarVideo(moduloId, leccionIdx) {
  const { error } = await supabase
    .from('videos')
    .delete()
    .eq('modulo_id', moduloId)
    .eq('leccion_idx', leccionIdx)
  if (error) throw new Error(error.message)
}

// ════════════════════════════════════════════
// PROGRESO
// ════════════════════════════════════════════

// Devuelve { modulos: { '1.1': { estado, fechaInicio, fechaCompletado, notas, quiz } } }
export async function getProgreso(usuariaId) {
  const { data, error } = await supabase
    .from('progreso')
    .select('modulo_id, estado, fecha_inicio, fecha_completado, notas, quiz')
    .eq('usuaria_id', usuariaId)
  if (error) throw new Error(error.message)
  const modulos = {}
  for (const f of data || []) {
    modulos[f.modulo_id] = {
      estado: f.estado,
      fechaInicio: f.fecha_inicio,
      fechaCompletado: f.fecha_completado,
      notas: f.notas,
      quiz: f.quiz,
    }
  }
  return { modulos }
}

async function upsertProgreso(usuariaId, moduloId, campos) {
  const { error } = await supabase.from('progreso').upsert(
    {
      usuaria_id: usuariaId,
      modulo_id: moduloId,
      ...campos,
      actualizado_en: new Date().toISOString(),
    },
    { onConflict: 'usuaria_id,modulo_id' }
  )
  if (error) throw new Error(error.message)
}

const hoyISO = () => new Date().toISOString().slice(0, 10)

export async function setEstadoModulo(usuariaId, moduloId, estado, previo, fecha = null) {
  const campos = { estado }
  if (estado === 'en_curso') {
    campos.fecha_inicio = previo?.fechaInicio || fecha || hoyISO()
    campos.fecha_completado = null
  } else if (estado === 'completado') {
    campos.fecha_inicio = previo?.fechaInicio || fecha || hoyISO()
    campos.fecha_completado = fecha || hoyISO()
  } else {
    campos.fecha_completado = null
  }
  await upsertProgreso(usuariaId, moduloId, campos)
}

export async function setNotasModulo(usuariaId, moduloId, notas, previo) {
  await upsertProgreso(usuariaId, moduloId, {
    estado: previo?.estado || 'en_curso',
    fecha_inicio: previo?.fechaInicio || hoyISO(),
    notas,
  })
}

export async function setQuizModulo(usuariaId, moduloId, resultado, previo) {
  await upsertProgreso(usuariaId, moduloId, {
    // El primer intento del test abre el módulo automáticamente
    estado: !previo?.estado || previo.estado === 'pendiente' ? 'en_curso' : previo.estado,
    fecha_inicio: previo?.fechaInicio || hoyISO(),
    quiz: resultado,
  })
}

// Progreso de todas las usuarias (solo admin): { usuariaId: {modulos:{…}} }
export async function getProgresoTodas() {
  const { data, error } = await supabase
    .from('progreso')
    .select('usuaria_id, modulo_id, estado, fecha_inicio, fecha_completado, notas, quiz')
  if (error) throw new Error(error.message)
  const porUsuaria = {}
  for (const f of data || []) {
    if (!porUsuaria[f.usuaria_id]) porUsuaria[f.usuaria_id] = { modulos: {} }
    porUsuaria[f.usuaria_id].modulos[f.modulo_id] = {
      estado: f.estado,
      fechaInicio: f.fecha_inicio,
      fechaCompletado: f.fecha_completado,
      notas: f.notas,
      quiz: f.quiz,
    }
  }
  return porUsuaria
}

// ════════════════════════════════════════════
// UTILIDADES
// ════════════════════════════════════════════

function traducirError(mensaje = '') {
  const m = mensaje.toLowerCase()
  if (m.includes('invalid login credentials')) return 'Correo o contraseña incorrectos.'
  if (m.includes('user already registered') || m.includes('already been registered'))
    return 'Ya existe una cuenta con este correo. Inicia sesión.'
  if (m.includes('password should be at least'))
    return 'La contraseña debe tener al menos 6 caracteres.'
  if (m.includes('unable to validate email') || m.includes('invalid email'))
    return 'El correo no tiene un formato válido.'
  if (m.includes('email not confirmed'))
    return 'Debes confirmar tu correo antes de entrar. Revisa tu bandeja.'
  if (m.includes('rate limit') || m.includes('too many'))
    return 'Demasiados intentos. Espera un momento y vuelve a probar.'
  return mensaje
}
