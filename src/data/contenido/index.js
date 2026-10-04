import { BLOQUES_1_2 } from './bloques1y2'
import { BLOQUES_3_4 } from './bloques3y4'
import { BLOQUES_5_6 } from './bloques5y6'
import { BLOQUES_7_8 } from './bloques7y8'

// Contenido pedagógico de los 28 módulos (training-2026-2027), indexado por id ('T1.1'…).
// Cada entrada: { resumen, objetivos[], lecciones[{titulo, guion[]}], practica, quiz[], evidencia }
export const CONTENIDO = { ...BLOQUES_1_2, ...BLOQUES_3_4, ...BLOQUES_5_6, ...BLOQUES_7_8 }

// El contenido 2026–2027 está redactado en español. En inglés se muestra el
// español con el aviso `sinTraducir` (la interfaz sí está traducida).
export function getContenido(moduloId, idioma = 'es') {
  const es = CONTENIDO[moduloId] || null
  if (idioma !== 'en' || !es) return es
  return { ...es, sinTraducir: true }
}
