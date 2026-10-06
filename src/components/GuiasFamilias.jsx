import { useState } from 'react'
import manuales from '../data/manualesFamilias.json'

const archivos = { offcampus: 'MANUAL_PADRES_OFFCAMPUS_2026-2027', dual: 'MANUAL_PADRES_DUAL_DIPLOMA_2026-2027' }

export default function GuiasFamilias({ onVolver }) {
  const [programa, setPrograma] = useState('offcampus')
  const manual = manuales[programa]
  return <div className="space-y-4">
    <button onClick={onVolver} className="text-sm font-bold text-teal">← Volver a la formación</button>
    <header className="rounded-2xl bg-navy p-6 text-cream"><h1 className="text-xl font-bold">Manuales para padres</h1><p className="mt-2 text-sm">Primer acceso, rutina, evidencias, documentos y seguimiento · 2026–2027</p></header>
    <div className="flex gap-2" role="group" aria-label="Elegir programa">{Object.entries(manuales).map(([id,m]) => <button key={id} aria-pressed={id === programa} onClick={() => setPrograma(id)} className={`rounded-xl px-4 py-3 text-sm font-bold ${id === programa ? 'bg-teal text-white' : 'bg-white text-navy'}`}>{m.id === 'dual' ? 'Dual Diploma' : 'Off-Campus'}</button>)}</div>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-bold text-navy">{manual.titulo}</h2><p className="mt-2 text-sm">{manual.subtitulo}</p><div className="mt-3 flex flex-wrap gap-4 text-sm font-bold text-teal"><a href={`/formacion/${archivos[programa]}.pdf`} download className="underline">Descargar PDF para padres</a><a href={`/formacion/${archivos[programa]}.docx`} download className="underline">Descargar versión editable</a></div><p className="mt-3 text-xs text-navy/70">Revisión 6 octubre 2026. Los documentos recibidos se utilizaron como referencia; los accesos y recorridos se contrastaron con el código actual. Los controles pueden cambiar. No se han modificado cuentas, expedientes ni funciones del SIS o del LMS.</p></section>
    {manual.paginas.map(p => <details key={`${programa}:${p.titulo}`} className="rounded-2xl bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold text-teal">{p.titulo}</summary><div className="mt-3 space-y-3 text-sm leading-relaxed text-navy">{p.parrafos?.map(t => <p key={t}>{t}</p>)}{p.tabla && <div className="overflow-x-auto"><table className="w-full text-left text-xs"><thead><tr>{p.tabla[0].map(t => <th key={t} className="border-b p-2">{t}</th>)}</tr></thead><tbody>{p.tabla.slice(1).map((r,i) => <tr key={i}>{r.map((t,j) => <td key={j} className="border-b p-2 align-top">{t}</td>)}</tr>)}</tbody></table></div>}{p.lista && <ul className="list-disc space-y-2 pl-5">{p.lista.map(t => <li key={t}>{t}</li>)}</ul>}</div></details>)}
    <p className="rounded-xl bg-gold/10 p-4 text-sm">Ayuda del programa: <a href={`mailto:${manual.contacto}`} className="font-bold text-teal underline">{manual.contacto}</a>. Para cuentas, vínculos o pagos: Administración por el canal institucional recibido.</p>
  </div>
}
