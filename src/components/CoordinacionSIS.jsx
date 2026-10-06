import { useState } from 'react'
import guia from '../data/coordinacionSIS.json'

export default function CoordinacionSIS({ onVolver }) {
  const [vista, setVista] = useState('notas')
  const [resultado, setResultado] = useState('')
  const pantalla = guia.pantallas.find(p => p.id === vista)
  return <div className="space-y-4">
    <button onClick={onVolver} className="text-sm font-bold text-teal">← Volver a la formación</button>
    <header className="rounded-2xl bg-navy p-6 text-cream"><h1 className="text-xl font-bold">{guia.titulo}</h1><p className="mt-2 text-sm">{guia.subtitulo}</p><a href="/formacion/GUIA_COORDINADOR_PANTALLAS_SIS_2026-2027.pdf" download className="mt-4 inline-block text-sm font-bold underline">Descargar guía de las ocho pantallas</a></header>
    <p className="rounded-xl border-l-4 border-gold bg-gold/10 p-4 text-sm leading-relaxed">{guia.intro}</p>
    <section className="overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-sm">
      <div className="bg-teal px-5 py-3 text-sm font-bold text-white">Panel del Coordinador · Esquema formativo · Hub y alumno ficticios</div>
      <nav aria-label="Pantallas del coordinador" className="flex flex-wrap gap-2 border-b p-3">{guia.pantallas.map(p => <button key={p.id} aria-pressed={p.id === vista} onClick={() => { setVista(p.id); setResultado('') }} className={`rounded-lg px-3 py-2 text-xs font-bold ${p.id === vista ? 'bg-navy text-cream' : 'bg-navy/5 text-navy'}`}>{p.titulo}</button>)}</nav>
      <div className="space-y-4 p-5"><h2 className="text-lg font-bold text-navy">{pantalla.titulo}</h2><p className="text-sm">{pantalla.objetivo}</p><div className="rounded-xl bg-navy/5 p-3 text-xs"><b>Verificar antes de operar:</b> {pantalla.verifica}</div>
        <div className="overflow-x-auto"><table className="w-full text-left text-xs"><thead><tr>{pantalla.columnas.map(t => <th key={t} className="border-b p-2">{t}</th>)}</tr></thead><tbody>{pantalla.filas.map((r,i) => <tr key={i}>{r.map((t,j) => <td key={j} className="border-b p-2">{t}</td>)}</tr>)}</tbody></table></div>
        <ol className="list-decimal space-y-2 pl-5 text-sm">{pantalla.pasos.map(t => <li key={t}>{t}</li>)}</ol><p className="text-sm"><b>Resultado de cierre:</b> {pantalla.cierre}</p><p className="rounded-xl bg-gold/10 p-3 text-sm">{pantalla.cuidado}</p>
        <div className="rounded-xl border border-teal/20 p-4"><h3 className="text-sm font-bold text-teal">Práctica de decisión</h3><p className="mt-2 text-sm">{pantalla.caso}</p><button onClick={() => setResultado(pantalla.respuesta)} className="mt-3 rounded-lg bg-teal px-4 py-2 text-xs font-bold text-white">Ver criterio de revisión</button><p role="status" className="mt-3 text-sm">{resultado}</p><p className="mt-2 text-xs text-navy/60">Esta práctica no guarda ni modifica notas o datos del SIS.</p></div>
      </div>
    </section>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-bold text-navy">{guia.dual.titulo}</h2>{guia.dual.parrafos.map(t => <p key={t} className="mt-3 text-sm leading-relaxed">{t}</p>)}</section>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-bold text-navy">Rutina y cierre de coordinación</h2><ul className="mt-3 list-disc space-y-2 pl-5 text-sm">{guia.rutina.map(t => <li key={t}>{t}</li>)}</ul></section>
    <details className="rounded-2xl bg-white p-5 shadow-sm"><summary className="cursor-pointer text-sm font-bold text-teal">Fuentes y límites</summary>{guia.fuentes.map(t => <p key={t} className="mt-2 text-xs">{t}</p>)}<p className="mt-2 text-xs">Rutas y etiquetas contrastadas en código; no se ha realizado una sesión autenticada con rol coordinador. Comprobar ámbito y permisos en la validación institucional.</p></details>
  </div>
}
