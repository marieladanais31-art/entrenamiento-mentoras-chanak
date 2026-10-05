import { useMemo, useState } from 'react'
import { MATRIZ_PROGRAMAS, ESTADOS_PROGRAMA } from '../data/programasEstado'

const TONOS = {
  ok: 'bg-teal/15 text-teal',
  pend: 'bg-gold/25 text-navy',
  plan: 'bg-navy/10 text-navy/70',
  no: 'bg-coral/15 text-coral',
}

// Matriz de servicios por programa estatal (State Program Service Matrix). Vista de consulta interna.
export default function MatrizProgramas({ onVolver }) {
  const [estado, setEstado] = useState('')
  const [texto, setTexto] = useState('')
  const [abierta, setAbierta] = useState(null)

  const estadosUnicos = useMemo(() => [...new Set(MATRIZ_PROGRAMAS.map((f) => f.state))], [])
  const [territorio, setTerritorio] = useState('')

  const filas = MATRIZ_PROGRAMAS.filter((f) => {
    if (estado && f.status !== estado) return false
    if (territorio && f.state !== territorio) return false
    if (texto) {
      const t = texto.toLowerCase()
      return [f.state, f.program, f.service].join(' ').toLowerCase().includes(t)
    }
    return true
  })

  return (
    <div className="space-y-4">
      {onVolver && <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">← Volver</button>}

      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Uso interno · coordinación y administración</div>
        <h2 className="mt-1 text-xl font-bold text-navy">State Program Service Matrix</h2>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">
          Qué servicio está aprobado, en qué programa y con qué estado. Regla: solo se dice «aprobado» lo que aquí figura como
          aprobado. Todo lo demás se comunica como «en proceso», «en revisión» o «plan». Florida EMA: solo el servicio de Matrícula está aprobado.
          Los precios figuran como «Por confirmar» hasta que la dirección los fije.
        </p>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Buscar estado, programa o servicio…" className="min-w-0 flex-1 rounded-lg bg-cream px-3 py-2 text-navy" />
          <select value={territorio} onChange={(e) => setTerritorio(e.target.value)} className="rounded-lg bg-cream px-2 py-2 text-navy">
            <option value="">Todos los territorios</option>
            {estadosUnicos.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
          <select value={estado} onChange={(e) => setEstado(e.target.value)} className="rounded-lg bg-cream px-2 py-2 text-navy">
            <option value="">Todos los estados</option>
            {Object.entries(ESTADOS_PROGRAMA).map(([k, v]) => <option key={k} value={k}>{v.etiqueta}</option>)}
          </select>
        </div>
      </section>

      <section className="overflow-x-auto rounded-2xl bg-white shadow-sm">
        <table className="w-full min-w-[920px] text-left text-xs">
          <thead className="bg-cream text-[11px] uppercase tracking-wide text-navy/60">
            <tr>
              {['State', 'Program', 'Service', 'Status', 'Approved?', 'Marketplace', 'Price', 'Student eligibility', 'Documentation', 'Last verified', 'Official source'].map((c) => (
                <th key={c} className="px-3 py-2 font-semibold">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filas.map((f) => {
              const e = ESTADOS_PROGRAMA[f.status]
              return (
                <tr key={f.id} onClick={() => setAbierta(abierta === f.id ? null : f.id)} className="cursor-pointer border-t border-navy/10 align-top hover:bg-cream/60">
                  <td className="px-3 py-2 font-medium text-navy">{f.state}</td>
                  <td className="px-3 py-2 text-navy/80">{f.program}</td>
                  <td className="px-3 py-2 text-navy/80">{f.service}</td>
                  <td className="px-3 py-2"><span className={`rounded-full px-2 py-0.5 font-semibold ${TONOS[e.tono]}`}>{e.etiqueta}</span></td>
                  <td className="px-3 py-2 font-semibold text-navy">{f.approved ? 'Sí' : 'No'}</td>
                  <td className="px-3 py-2 text-navy/70">{f.marketplace}</td>
                  <td className="px-3 py-2 text-navy/70">{f.price}</td>
                  <td className="px-3 py-2 text-navy/70">{f.eligibility}</td>
                  <td className="px-3 py-2 text-navy/70">{f.documentation}</td>
                  <td className="px-3 py-2 text-navy/70">{f.lastVerified}</td>
                  <td className="px-3 py-2 text-navy/70">{f.source}</td>
                </tr>
              )
            })}
            {filas.length === 0 && (
              <tr><td colSpan={11} className="px-3 py-6 text-center text-navy/50">Sin resultados.</td></tr>
            )}
          </tbody>
        </table>
      </section>

      {abierta && (() => {
        const f = MATRIZ_PROGRAMAS.find((x) => x.id === abierta)
        return f ? (
          <section className="rounded-2xl border border-gold/40 bg-gold/10 p-4 text-sm text-navy/80">
            <div className="font-bold text-navy">{f.state} · {f.program} · {f.service}</div>
            <p className="mt-1 leading-relaxed">{f.operativo}</p>
            {f.condiciones && f.condiciones.length > 0 && (
              <div className="mt-3">
                <div className="text-[11px] font-bold uppercase tracking-wide text-navy/60">Condiciones del programa (resumen interno)</div>
                <ul className="mt-1 list-disc space-y-1 pl-5 leading-relaxed">
                  {f.condiciones.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            )}
            {f.noVerificado && f.noVerificado.length > 0 && (
              <div className="mt-3 rounded-lg bg-white/60 p-3">
                <div className="text-[11px] font-bold uppercase tracking-wide text-coral">Por verificar antes de afirmarlo</div>
                <ul className="mt-1 list-disc space-y-1 pl-5 leading-relaxed">
                  {f.noVerificado.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            )}
            {f.fuentesOficiales && f.fuentesOficiales.length > 0 && (
              <div className="mt-3 text-[12px]">
                <span className="font-semibold">Fuentes oficiales: </span>
                {f.fuentesOficiales.map((u, i) => (
                  <a key={i} href={u} target="_blank" rel="noreferrer" className="mr-3 break-all text-teal underline">{u.replace(/^https?:\/\//, '').slice(0, 60)}</a>
                ))}
              </div>
            )}
          </section>
        ) : null
      })()}

      <p className="text-[11px] leading-relaxed text-navy/50">
        Los requisitos de cada programa cambian: la fuente vigente es siempre la web oficial del programa. La columna «Last verified»
        indica cuándo se contrastó por última vez. STATE FUNDING ≠ CURRICULUM: el currículo y la evaluación los decide Chanak.
      </p>
    </div>
  )
}
