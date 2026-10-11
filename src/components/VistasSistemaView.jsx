import { useState } from 'react'
import { VISTAS, SISTEMAS_VISTA, vistasDeRoles } from '../data/vistasSistema'
import VistaSistema from './VistaSistema'

// Todas las pantallas simuladas, filtradas por las funciones de la persona (o todas, para admin).
export default function VistasSistemaView({ roles = [], esAdmin, onVolver }) {
  const lista = esAdmin || roles.length === 0 ? VISTAS : vistasDeRoles(roles)
  const [sistema, setSistema] = useState('todos')
  const filtradas = lista.filter((v) => sistema === 'todos' || v.sistema === sistema)
  const [abierta, setAbierta] = useState(filtradas[0]?.id)
  const actual = filtradas.find((v) => v.id === abierta) || filtradas[0]
  return (
    <div className="space-y-4">
      <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">← Volver al panel</button>
      <header className="rounded-2xl bg-navy p-6 text-cream">
        <h1 className="text-xl font-bold">Vistas del sistema</h1>
        <p className="mt-2 text-sm text-cream/80">Recorre las pantallas reales del SIS, del Dual Diploma Portal y de Life Skills con datos ficticios. Cada pantalla explica qué mirar y termina con una decisión práctica.</p>
      </header>
      <div className="flex flex-wrap gap-2">
        {['todos', ...Object.keys(SISTEMAS_VISTA)].map((s) => (
          <button key={s} onClick={() => setSistema(s)} className={`rounded-full px-3 py-1.5 text-xs font-bold ${sistema === s ? 'bg-teal text-white' : 'bg-white text-navy shadow-sm'}`}>{s === 'todos' ? 'Todos' : SISTEMAS_VISTA[s].nombre}</button>
        ))}
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {filtradas.map((v) => (
          <button key={v.id} onClick={() => setAbierta(v.id)} className={`rounded-xl px-3 py-2 text-left text-sm ${actual?.id === v.id ? 'bg-navy text-cream' : 'bg-white text-navy shadow-sm'}`}>
            <span className="block text-[11px] font-bold uppercase opacity-70">{SISTEMAS_VISTA[v.sistema].nombre}</span>{v.titulo}
          </button>
        ))}
      </div>
      {actual && <VistaSistema key={actual.id} vista={actual} />}
    </div>
  )
}
