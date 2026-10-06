import { desgloseRealista } from '../tiempos'
export { PALABRAS_POR_MINUTO } from '../tiempos'
import { BLOQUES_1_2 } from './bloques1y2'
import { BLOQUES_3_4 } from './bloques3y4'
import { BLOQUES_5_6 } from './bloques5y6'
import { BLOQUES_7_8 } from './bloques7y8'
import { BLOQUE_9 } from './bloque9'
import { BLOQUE_10 } from './bloque10'
import { LECTURAS_B10 } from '../lecturas/B10'
import { LECTURAS_B9 } from '../lecturas/B9'
import { LECTURAS_B1 } from '../lecturas/B1'
import { LECTURAS_B2 } from '../lecturas/B2'
import { LECTURAS_B3 } from '../lecturas/B3'
import { LECTURAS_B4 } from '../lecturas/B4'
import { LECTURAS_B5 } from '../lecturas/B5'
import { LECTURAS_B6 } from '../lecturas/B6'
import { LECTURAS_B7 } from '../lecturas/B7'
import { LECTURAS_B8 } from '../lecturas/B8'
import { QUIZ_EXTRA } from '../lecturas/quiz_extra'

// Contenido pedagógico de los 28 módulos (training-2026-2027), indexado por id ('T1.1'…).
// Base: { resumen, objetivos[], lecciones[], practica, quiz[], evidencia }
// Lecturas ampliadas (src/data/lecturas): sustituyen `lecciones` y añaden `desglose` y `guia`.
const BASE = { ...BLOQUES_1_2, ...BLOQUES_3_4, ...BLOQUES_5_6, ...BLOQUES_7_8, ...BLOQUE_9, ...BLOQUE_10 }
const LECTURAS = {
  ...LECTURAS_B1, ...LECTURAS_B2, ...LECTURAS_B3, ...LECTURAS_B4,
  ...LECTURAS_B5, ...LECTURAS_B6, ...LECTURAS_B7, ...LECTURAS_B8, ...LECTURAS_B9, ...LECTURAS_B10,
}

export function palabrasLectura(lecciones = []) {
  return lecciones.flatMap((l) => l.guion || []).join(' ').split(/\s+/).filter(Boolean).length
}

// El tiempo de práctica responde a tareas; nunca rellena una meta fija de horas.
function normalizarDesglose(id, d) {
  return desgloseRealista(id, d?.documentos || [])
}

export const CONTENIDO = Object.fromEntries(
  Object.entries(BASE).map(([id, base]) => {
    const l = LECTURAS[id]
    const quiz = [...(base.quiz || []), ...(QUIZ_EXTRA[id] || [])]
    if (!l) return [id, { ...base, quiz }]
    return [id, { ...base, quiz, lecciones: l.lecciones, guia: l.guia || null, desglose: normalizarDesglose(id, l.desglose, l.lecciones) }]
  })
)

// El contenido 2026–2027 está redactado en español. En inglés se muestra el
// español con el aviso `sinTraducir` (la interfaz sí está traducida).
export function getContenido(moduloId, idioma = 'es') {
  const es = CONTENIDO[moduloId] || null
  if (idioma !== 'en' || !es) return es
  return { ...es, sinTraducir: true }
}
