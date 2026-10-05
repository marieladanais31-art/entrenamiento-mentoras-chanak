import { BLOQUES_1_2 } from './bloques1y2'
import { BLOQUES_3_4 } from './bloques3y4'
import { BLOQUES_5_6 } from './bloques5y6'
import { BLOQUES_7_8 } from './bloques7y8'
import { LECTURAS_B1 } from '../lecturas/B1'
import { LECTURAS_B2 } from '../lecturas/B2'
import { LECTURAS_B3 } from '../lecturas/B3'
import { LECTURAS_B4 } from '../lecturas/B4'
import { LECTURAS_B5 } from '../lecturas/B5'
import { LECTURAS_B6 } from '../lecturas/B6'
import { LECTURAS_B7 } from '../lecturas/B7'
import { LECTURAS_B8 } from '../lecturas/B8'
import { getModulo } from '../curriculum'
import { QUIZ_EXTRA } from '../lecturas/quiz_extra'

// Contenido pedagógico de los 28 módulos (training-2026-2027), indexado por id ('T1.1'…).
// Base: { resumen, objetivos[], lecciones[], practica, quiz[], evidencia }
// Lecturas ampliadas (src/data/lecturas): sustituyen `lecciones` y añaden `desglose` y `guia`.
const BASE = { ...BLOQUES_1_2, ...BLOQUES_3_4, ...BLOQUES_5_6, ...BLOQUES_7_8 }
const LECTURAS = {
  ...LECTURAS_B1, ...LECTURAS_B2, ...LECTURAS_B3, ...LECTURAS_B4,
  ...LECTURAS_B5, ...LECTURAS_B6, ...LECTURAS_B7, ...LECTURAS_B8,
}

// Ritmo de lectura de estudio (leer, subrayar, tomar notas y releer): 60 palabras/min.
export const PALABRAS_POR_MINUTO = 60
const q = (h) => Math.round(h * 4) / 4

export function palabrasLectura(lecciones = []) {
  return lecciones.flatMap((l) => l.guion || []).join(' ').split(/\s+/).filter(Boolean).length
}

// Normaliza el desglose para que todos los módulos usen el mismo criterio y la suma
// sea exactamente igual a las horas del módulo (el ajuste se aplica a la práctica).
function normalizarDesglose(id, d, lecciones) {
  const modulo = getModulo(id)
  if (!d || !modulo) return d
  const palabras = palabrasLectura(lecciones)
  const lectura = Math.max(0.25, q(palabras / PALABRAS_POR_MINUTO / 60))
  const docs = (d.documentos || []).reduce((s, x) => s + (x.horas || 0), 0)
  const fijo = (d.video || 0) + lectura + docs + (d.evidencia || 0) + (d.kc || 0)
  const practica = q(modulo.horas - fijo)
  return { ...d, lectura, practica, palabras, total: modulo.horas }
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
