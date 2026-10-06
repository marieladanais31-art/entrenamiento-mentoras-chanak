import { useState } from 'react'
import { seccionesSIS } from '../data/operativaSIS'
import { RECURSOS_GENERALES } from '../data/curriculum'

export default function OperativaSIS({ onVolver }) {
  const [busqueda, setBusqueda] = useState('')
  const demo = RECURSOS_GENERALES[0].demo
  const visibles = seccionesSIS.filter(s => `${s.title} ${s.text}`.toLocaleLowerCase('es').includes(busqueda.toLocaleLowerCase('es')))
  return <div className="space-y-4">
    <button onClick={onVolver} className="text-sm font-bold text-teal">← Volver a la formación</button>
    <section className="rounded-2xl bg-navy p-6 text-cream">
      <h1 className="text-xl font-bold">Operativa SIS · Matrícula, familias y alianzas</h1>
      <p className="mt-2 text-sm">Recorrido de Administración y Enrollment · Complemento del módulo T10.4 · Revisado el 6 octubre 2026</p>
      <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold underline">
        <a href="https://sis.chanakacademy.org/login" target="_blank" rel="noreferrer">Entrar al SIS</a>
        <a href="https://sis.chanakacademy.org/matricula" target="_blank" rel="noreferrer">Formulario de matrícula</a>
        <a href="/formacion/OPERATIVA_SIS_MATRICULA_FAMILIAS_ALIANZAS.md" download>Descargar paso a paso</a>
      </div>
    </section>
    <section className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="font-bold text-navy">Usuarios demo · Padre y estudiante</h2>
      {demo.cuentas.map((cuenta, i) => <p key={cuenta} className="mt-2 break-all text-sm"><b>{i === 0 ? 'Padre' : 'Estudiante'}:</b> {cuenta}</p>)}
      <p className="mt-2 text-sm"><b>Contraseña demo:</b> <code>{demo.clave}</code></p>
      <p className="mt-3 text-xs text-navy/70">{demo.aviso} Accesos históricos recuperados; inicio de sesión pendiente de verificación. Estas cuentas no permiten demostrar el panel administrativo.</p>
    </section>
    <p className="rounded-xl border-l-4 border-gold bg-gold/10 p-4 text-sm text-navy">En el SIS: Administración → Matrículas. Aceptar una solicitud dispara sincronización; enviar bienvenida es una acción manual. Esta guía verifica el código. Las incidencias indicadas requieren corrección y prueba del SIS antes de certificar el circuito completo.</p>
    <label className="block text-sm font-bold text-navy">Buscar paso, rol o automatización
      <input value={busqueda} onChange={e => setBusqueda(e.target.value)} type="search" className="mt-2 w-full rounded-xl border border-navy/20 bg-white p-3 font-normal" placeholder="Familia, convenio, estudiante, pago…" />
    </label>
    {visibles.map(s => <details key={s.id} open={busqueda ? true : undefined} className="rounded-2xl bg-white p-5 shadow-sm">
      <summary className="cursor-pointer font-bold text-teal">{s.title}</summary>
      <Contenido text={s.text} />
    </details>)}
    {!visibles.length && <p className="text-sm">No hay resultados. Prueba otro término.</p>}
  </div>
}

function Contenido({ text }) {
  const lineas = text.split('\n')
  const tabla = lineas.filter(l => l.startsWith('|')).filter(l => !/^\|[-| ]+\|$/.test(l)).map(l => l.split('|').slice(1,-1).map(c => c.trim()))
  return <div className="mt-4 space-y-3 text-sm leading-relaxed text-navy">
    {lineas.filter(l => l && !l.startsWith('|')).map((l,i) => <p key={i}>{l}</p>)}
    {tabla.length > 0 && <div className="overflow-x-auto"><table className="w-full text-left text-xs"><thead><tr>{tabla[0].map(c => <th key={c} className="border-b p-2">{c}</th>)}</tr></thead><tbody>{tabla.slice(1).map((fila,i) => <tr key={i}>{fila.map((c,j) => <td key={j} className="border-b p-2 align-top">{c}</td>)}</tr>)}</tbody></table></div>}
  </div>
}
