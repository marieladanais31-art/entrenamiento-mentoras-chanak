import { useState } from 'react'
import manuales from '../data/manualesFamilias.json'

const dossiers = {
  offcampus: {
    es: 'https://drive.google.com/file/d/1v2I1MIHqZSqToofcTdoTnsx5i3H2XfLn/view',
    en: 'https://drive.google.com/file/d/1Hy2z93TBsKJ-h3PLQ8wA2WrhPrGbJkn5/view',
  },
  dual: {
    es: 'https://drive.google.com/file/d/1gzyYL1Eflu4mrgAlfAzUXmXvFRBfbonc/view',
    en: 'https://drive.google.com/file/d/1Q7QucYO9qq5UccXtQ-SpgzDfxKw10dVI/view',
  },
}

export default function GuiasFamilias({ onVolver }) {
  const [programa, setPrograma] = useState('offcampus')
  const manual = manuales[programa]
  return <div className="space-y-4">
    <button onClick={onVolver} className="text-sm font-bold text-teal">← Volver a la formación</button>
    <header className="rounded-2xl bg-navy p-6 text-cream"><h1 className="text-xl font-bold">Manuales para padres</h1><p className="mt-2 text-sm">Primer acceso, rutina, evidencias, documentos y seguimiento · 2026–2027</p></header>
    <div className="flex gap-2" role="group" aria-label="Elegir programa">{Object.entries(manuales).map(([id,m]) => <button key={id} aria-pressed={id === programa} onClick={() => setPrograma(id)} className={`rounded-xl px-4 py-3 text-sm font-bold ${id === programa ? 'bg-teal text-white' : 'bg-white text-navy'}`}>{m.id === 'dual' ? 'Dual Diploma' : 'Off-Campus'}</button>)}</div>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="font-bold text-navy">{manual.titulo}</h2><p className="mt-2 text-sm">{manual.subtitulo}</p><p className="mt-2 text-sm text-navy/70">Consulta aquí los procedimientos de acceso y seguimiento. Si una familia necesita conocer el programa, comparte su dossier oficial.</p><a href={dossiers[programa].es} target="_blank" rel="noreferrer" className="mt-3 inline-block font-bold text-teal underline">Dossier para familias · ES ↗</a><a href={dossiers[programa].en} target="_blank" rel="noreferrer" className="ml-4 mt-3 inline-block font-bold text-teal underline">Family guide · EN ↗</a><a href="https://www.chanakacademy.org/tarifas/" target="_blank" rel="noreferrer" className="ml-4 mt-3 inline-block font-bold text-teal underline">Tarifas vigentes ↗</a></section>
    {manual.paginas.map(p => <details key={`${programa}:${p.titulo}`} className="rounded-2xl bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold text-teal">{p.titulo}</summary><div className="mt-3 space-y-3 text-sm leading-relaxed text-navy">{p.parrafos?.map(t => <p key={t}>{t}</p>)}{p.tabla && <div className="overflow-x-auto"><table className="w-full text-left text-xs"><thead><tr>{p.tabla[0].map(t => <th key={t} className="border-b p-2">{t}</th>)}</tr></thead><tbody>{p.tabla.slice(1).map((r,i) => <tr key={i}>{r.map((t,j) => <td key={j} className="border-b p-2 align-top">{t}</td>)}</tr>)}</tbody></table></div>}{p.lista && <ul className="list-disc space-y-2 pl-5">{p.lista.map(t => <li key={t}>{t}</li>)}</ul>}</div></details>)}
    <p className="rounded-xl bg-gold/10 p-4 text-sm">Ayuda del programa: <a href={`mailto:${manual.contacto}`} className="font-bold text-teal underline">{manual.contacto}</a>. Para cuentas, vínculos o pagos: Administración por el canal institucional recibido.</p>
  </div>
}
