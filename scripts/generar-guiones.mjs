// Genera GUIONES_VIDEOS_2026-2027.md a partir de src/data/videos.js y del contenido del curso.
// Uso:  node scripts/generar-guiones.mjs
import { writeFileSync } from 'node:fs'
import { VIDEOS, CATEGORIAS_VIDEO } from '../src/data/videos.js'
import { getModulo, numModulo } from '../src/data/curriculum.js'

const L = []
L.push('# Guiones de vídeo · Chanak · Formación de Mentores y Coordinadores 2026–2027')
L.push('')
L.push('Biblioteca esencial de **28 vídeos**, uno por módulo, organizada en 8 categorías.')
L.push('Fuente oficial: carpeta `CHANAK_DOCUMENTOS_2026-2027_FINAL`. Generado desde `src/data/videos.js` — no editar a mano: edita `videos.js` y vuelve a ejecutar `node scripts/generar-guiones.mjs`.')
L.push('')
L.push('Cada vídeo es independiente: para publicarlo pega su URL (MP4, YouTube, Vimeo, Google Drive o Google Vids) en `videoUrl` o desde **Admin → Vídeos**.')
L.push('Reglas de producción: 5–9 minutos, sin datos personales de estudiantes (usar IDs), terminología oficial (MSA-CESS Candidate; Off-Campus (Homeschool Guiado); Approved Education Service Provider; servicio Matrícula aprobado).')
L.push('')
L.push('| Vídeo | Categoría | Módulo | Título | Duración |')
L.push('|---|---|---|---|---|')
for (const v of VIDEOS) L.push(`| ${v.id} | ${v.bloque} | ${numModulo(v.modulo)} | ${v.titulo} | ${v.duracion} |`)
L.push('')
for (const cat of CATEGORIAS_VIDEO) {
  L.push(`## ${cat}`)
  L.push('')
  for (const v of VIDEOS.filter((x) => x.bloque === cat)) {
    const m = getModulo(v.modulo)
    L.push(`### ${v.id} · ${v.titulo}`)
    L.push('')
    L.push(`- **Módulo:** ${numModulo(v.modulo)} · ${m?.titulo || ''}`)
    L.push(`- **Duración objetivo:** ${v.duracion}`)
    L.push(`- **Descripción:** ${v.descripcion}`)
    L.push('')
    L.push('**Guion (puntos clave, en orden):**')
    L.push('')
    v.guion.forEach((g, i) => L.push(`${i + 1}. ${g}`))
    L.push('')
    L.push('**Cierre:** invita a pasar a la Lectura y a la Práctica del módulo.')
    L.push('')
  }
}
writeFileSync(new URL('../GUIONES_VIDEOS_2026-2027.md', import.meta.url), L.join('\n'))
console.log(`OK · ${VIDEOS.length} vídeos`)
