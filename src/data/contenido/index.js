import { BLOQUE1 } from './bloque1'
import { BLOQUE2 } from './bloque2'
import { BLOQUE3 } from './bloque3'
import { BLOQUE4, BLOQUE5 } from './bloque4y5'
import { BLOQUE6, BLOQUE7, BLOQUE8, BLOQUE9, BLOQUE10 } from './bloque6a10'
import { CONTENIDO_EN } from './en'

// Contenido pedagógico de los 38 módulos, indexado por id de módulo ('1.1', '2.3'…).
// Cada entrada: { resumen, objetivos[], lecciones[{titulo, guion[], visuales[]}], quiz[{p, opciones[], correcta, explica}] }
export const CONTENIDO = {
  ...BLOQUE1,
  ...BLOQUE2,
  ...BLOQUE3,
  ...BLOQUE4,
  ...BLOQUE5,
  ...BLOQUE6,
  ...BLOQUE7,
  ...BLOQUE8,
  ...BLOQUE9,
  ...BLOQUE10,
}

// Devuelve el contenido en el idioma pedido. Si un módulo aún no está
// traducido, entrega el español y marca `sinTraducir` para que la interfaz
// pueda avisarlo — nunca deja una lección vacía.
export function getContenido(moduloId, idioma = 'es') {
  const es = CONTENIDO[moduloId] || null
  if (idioma !== 'en') return es
  const en = CONTENIDO_EN[moduloId]
  if (en) return en
  return es ? { ...es, sinTraducir: true } : null
}

export function hayTraduccion(moduloId) {
  return Boolean(CONTENIDO_EN[moduloId])
}
