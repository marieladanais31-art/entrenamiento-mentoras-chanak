// Genera GUIONES_VIDEOS.md a partir del contenido real del curso.
// Uso:  node scripts/generar-guiones.mjs
import { writeFileSync } from 'node:fs'
import { BLOQUES } from '../src/data/curriculum.js'
import { getContenido } from '../src/data/contenido/index.js'

const L = []
let totalVideos = 0
let totalMin = 0

// Duración estimada: ~40 s por párrafo de guion, redondeado a medio minuto.
const estimarMin = (guion) => Math.max(2, Math.round((guion.length * 40) / 30) / 2)

L.push('# Guiones de vídeo · Formación de Mentoras Chanak')
L.push('')
L.push(
  'Listado completo de los vídeos por grabar en Google Vids, con su guion y sus indicaciones visuales.'
)
L.push('Generado automáticamente desde el contenido de la app — no editar a mano.')
L.push('')
L.push('> **Cómo usarlo:** copia el bloque de PROMPT de cada lección y pásalo a tu IA de vídeo,')
L.push('> o léelo tal cual como locución. Al terminar, sube el enlace desde la propia app:')
L.push('> abre la lección como administradora y pulsa «➕ Añadir vídeo de Google Vids».')
L.push('')

// Índice
L.push('## Índice')
L.push('')
for (const b of BLOQUES) {
  const n = b.modulos.reduce((s, m) => s + (getContenido(m.id)?.lecciones.length || 0), 0)
  L.push(`- **Bloque ${b.numero} — ${b.titulo}** · Nivel ${b.nivel} · ${n} vídeos`)
}
L.push('')
L.push('---')
L.push('')

for (const b of BLOQUES) {
  L.push(`## Bloque ${b.numero} — ${b.titulo}`)
  L.push('')
  L.push(`*Nivel ${b.nivel} · ${b.horas} horas · ${b.modulos.length} módulos*`)
  L.push('')

  for (const mod of b.modulos) {
    const c = getContenido(mod.id)
    if (!c) {
      L.push(`### Módulo ${mod.id} — ${mod.titulo}`)
      L.push('')
      L.push('> ⚠️ Sin contenido desarrollado todavía.')
      L.push('')
      continue
    }

    L.push(`### Módulo ${mod.id} — ${mod.titulo}`)
    L.push('')
    L.push(`${mod.horas} h · ${mod.modalidad} · Evaluación: ${mod.evaluacion}`)
    L.push('')
    L.push(`**Indicadores MSA:** ${mod.indicadores.join(', ')}`)
    L.push('')
    L.push(`**Resumen del módulo:** ${c.resumen}`)
    L.push('')

    c.lecciones.forEach((lec, i) => {
      totalVideos++
      const min = estimarMin(lec.guion)
      totalMin += min
      L.push(`#### 🎬 Vídeo ${mod.id}.${i + 1} — ${lec.titulo}`)
      L.push('')
      L.push(`*Duración estimada: ~${min} min · ${lec.guion.length} bloques de guion*`)
      L.push('')
      L.push('**Guion (locución):**')
      L.push('')
      lec.guion.forEach((p, j) => L.push(`${j + 1}. ${p}`))
      L.push('')
      L.push('**Indicaciones visuales:**')
      L.push('')
      lec.visuales.forEach((v) => L.push(`- ${v}`))
      L.push('')
      L.push('<details><summary>PROMPT listo para copiar</summary>')
      L.push('')
      L.push('```text')
      L.push(
        `Crea un vídeo formativo corto (~${min} minutos) en español para Chanak International Academy,`
      )
      L.push(
        'una escuela cristiana a distancia registrada en Florida (FLDOE #134620), candidata a la'
      )
      L.push('acreditación MSA-CESS. El público son mentoras en formación.')
      L.push('')
      L.push(`TÍTULO: ${lec.titulo}`)
      L.push(`CONTEXTO DEL MÓDULO: ${mod.titulo} (Bloque ${b.numero} — ${b.titulo})`)
      L.push('')
      L.push('TONO: profesional, cálido y claro. Cosmovisión cristiana, sin sermonear.')
      L.push('Español neutro. Frases cortas. Trata a la mentora de tú.')
      L.push('')
      L.push('GUION (respeta el orden y el contenido):')
      lec.guion.forEach((p, j) => L.push(`${j + 1}. ${p}`))
      L.push('')
      L.push('DIAPOSITIVAS / APOYO VISUAL:')
      lec.visuales.forEach((v) => L.push(`- ${v}`))
      L.push('')
      L.push('MARCA: navy #0D1B2A, teal #2A8C74, dorado #C9963A, crema #F5F0E8.')
      L.push('Cierra con el logo de Chanak International Academy.')
      L.push('```')
      L.push('')
      L.push('</details>')
      L.push('')
    })
  }
  L.push('---')
  L.push('')
}

L.splice(
  4,
  0,
  `**${totalVideos} vídeos** · duración total estimada: **~${Math.round(totalMin / 60)} h ${Math.round(totalMin % 60)} min**`,
  ''
)

writeFileSync(process.cwd() + '/GUIONES_VIDEOS.md', L.join('\n'))
console.log(`✅ GUIONES_VIDEOS.md · ${totalVideos} vídeos · ~${Math.round(totalMin)} min en total`)
