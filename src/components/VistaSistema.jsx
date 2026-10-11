import { useState } from 'react'
import { SISTEMAS_VISTA } from '../data/vistasSistema'

// Simulación formativa de una pantalla real (SIS, Dual Diploma Portal, Life Skills):
// ventana con la ruta, pestañas reales, contenido con datos ficticios y marcas numeradas (①②③)
// que se explican debajo, más una práctica de decisión con corrección inmediata.
export default function VistaSistema({ vista, compacta = false }) {
  const [elegida, setElegida] = useState(null)
  const sis = SISTEMAS_VISTA[vista.sistema]
  const marcaDe = (clave) => vista.marcas?.[clave]

  return (
    <article className="overflow-hidden rounded-2xl border border-navy/15 bg-white shadow-sm">
      {/* Barra de ventana */}
      <div className={`flex items-center gap-2 px-4 py-2 text-xs text-white ${sis.color}`}>
        <span className="flex gap-1" aria-hidden><i className="h-2.5 w-2.5 rounded-full bg-white/50" /><i className="h-2.5 w-2.5 rounded-full bg-white/50" /><i className="h-2.5 w-2.5 rounded-full bg-white/50" /></span>
        <span className="min-w-0 flex-1 truncate rounded bg-white/15 px-2 py-0.5 font-mono">{sis.url.replace('https://', '')}{vista.ruta.startsWith('/') ? vista.ruta.split(' ')[0] : ''}</span>
        <span className="font-bold">{sis.nombre}</span>
      </div>

      <div className="border-b border-navy/10 bg-cream/60 px-4 py-2">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-navy/50">{vista.ruta}</div>
        <h3 className="text-base font-bold text-navy">{vista.titulo}</h3>
      </div>

      {/* Pestañas reales */}
      <nav className="flex gap-1 overflow-x-auto border-b border-navy/10 px-3 py-2" aria-label="Pestañas de la pantalla">
        {vista.pestanas.map((p) => (
          <span key={p} className={`shrink-0 rounded-lg px-2.5 py-1 text-[11px] font-bold ${p === vista.activa ? 'bg-navy text-cream' : 'bg-navy/5 text-navy/60'}`}>{p}</span>
        ))}
      </nav>

      <div className="space-y-3 p-4">
        {vista.filtros && (
          <div className="flex flex-wrap gap-1">
            {vista.filtros.map((f, i) => <span key={f} className={`rounded-full border px-2 py-0.5 text-[11px] ${i === 0 ? 'border-teal bg-teal/10 font-bold text-teal' : 'border-navy/15 text-navy/60'}`}>{f}</span>)}
          </div>
        )}
        {vista.aviso && <p className="rounded-lg border-l-4 border-coral bg-coral/8 px-3 py-1.5 text-xs text-coral">⚠ {vista.aviso}</p>}

        {vista.tipo === 'tabla' && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead><tr>{vista.columnas.map((c) => <th key={c} className="border-b border-navy/15 p-2 font-bold text-navy/70">{c}</th>)}</tr></thead>
              <tbody>
                {vista.filas.map((f) => (
                  <tr key={f.join('|')} className={marcaDe(f[0]) ? 'bg-gold/10' : ''}>
                    {f.map((c, j) => (
                      <td key={j} className="border-b border-navy/10 p-2 text-navy">
                        {j === 0 && marcaDe(f[0]) && <Marca n={marcaDe(f[0])} />}
                        <Estado texto={c} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {vista.tipo === 'tarjetas' && (
          <div className="grid gap-2 sm:grid-cols-2">
            {vista.tarjetas.map((t) => (
              <div key={t.titulo} className={`rounded-xl border p-3 ${t.marca ? 'border-gold bg-gold/10' : 'border-navy/10 bg-cream/50'}`}>
                <div className="text-sm font-bold text-navy">{t.marca && <Marca n={t.marca} />}{t.titulo}</div>
                {t.lineas.map((l) => <div key={l} className="text-xs text-navy/65"><Estado texto={l} /></div>)}
              </div>
            ))}
          </div>
        )}

        {vista.tipo === 'ficha' && (
          <dl className="divide-y divide-navy/10 rounded-xl border border-navy/10">
            {vista.secciones.map(([t, v, m]) => (
              <div key={t} className={`grid gap-1 px-3 py-2 sm:grid-cols-3 ${m ? 'bg-gold/10' : ''}`}>
                <dt className="text-xs font-bold text-navy">{m && <Marca n={m} />}{t}</dt>
                <dd className="text-xs text-navy/70 sm:col-span-2">{v}</dd>
              </div>
            ))}
          </dl>
        )}

        <p className="text-[10px] text-navy/40">Simulación formativa con datos ficticios. Pestañas y estados tomados del sistema real.</p>

        {/* Explicación de las marcas */}
        <ol className="space-y-2">
          {vista.puntos.map((p) => (
            <li key={p.n} className="flex gap-2 text-sm leading-relaxed text-navy/85"><Marca n={p.n} /><span>{p.texto}</span></li>
          ))}
        </ol>

        {!compacta && vista.practica && (
          <div className="rounded-xl border border-teal/30 bg-teal/5 p-3">
            <div className="text-xs font-bold uppercase tracking-wide text-teal">Practica la decisión</div>
            <p className="mt-1 text-sm font-semibold text-navy">{vista.practica.pregunta}</p>
            <div className="mt-2 space-y-1.5">
              {vista.practica.opciones.map((o, i) => {
                const marcada = elegida === i
                const ok = i === vista.practica.correcta
                const tono = elegida === null ? 'border-navy/15 bg-white hover:border-teal' : ok ? 'border-teal bg-teal/10' : marcada ? 'border-coral bg-coral/10' : 'border-navy/10 bg-white opacity-60'
                return (
                  <button key={o} onClick={() => setElegida(i)} disabled={elegida !== null} className={`block w-full rounded-lg border-2 px-3 py-2 text-left text-sm text-navy ${tono}`}>
                    {elegida !== null && ok ? '✓ ' : elegida !== null && marcada ? '✗ ' : ''}{o}
                  </button>
                )
              })}
            </div>
            {elegida !== null && (
              <p role="status" className="mt-2 text-sm text-navy/85">
                <b>{elegida === vista.practica.correcta ? 'Correcto.' : 'Revisa el criterio.'}</b> {vista.practica.explicacion}
                <button onClick={() => setElegida(null)} className="ml-2 text-xs font-bold text-teal underline">Repetir</button>
              </p>
            )}
          </div>
        )}
        <a href={sis.url} target="_blank" rel="noreferrer" className="inline-block text-xs font-bold text-teal hover:underline">Abrir {sis.nombre} real (solo con cuentas demo para practicar) →</a>
      </div>
    </article>
  )
}

function Marca({ n }) {
  return <span className="mr-1.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold text-[11px] font-bold text-navy">{n}</span>
}

const ESTADOS = {
  Aprobado: 'bg-emerald-100 text-emerald-800', Aprobada: 'bg-emerald-100 text-emerald-800', Evaluado: 'bg-emerald-100 text-emerald-800', 'Al día': 'bg-emerald-100 text-emerald-800',
  'En revisión': 'bg-amber-100 text-amber-800', 'Pendiente de revisión': 'bg-amber-100 text-amber-800', Entregado: 'bg-amber-100 text-amber-800', Media: 'bg-amber-100 text-amber-800',
  Borrador: 'bg-slate-100 text-slate-700', Pendiente: 'bg-slate-100 text-slate-700',
  'Corrección solicitada': 'bg-orange-100 text-orange-800', Atrasado: 'bg-red-100 text-red-800', Alta: 'bg-red-100 text-red-800', Rechazado: 'bg-red-100 text-red-800',
}
function Estado({ texto }) {
  const c = ESTADOS[texto]
  return c ? <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${c}`}>{texto}</span> : <>{texto}</>
}
