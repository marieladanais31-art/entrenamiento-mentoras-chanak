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
        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Uso interno · Estratégico, coordinación y administración</div>
        <h2 className="mt-1 text-xl font-bold text-navy">Estados y programas · Servicios de Chanak</h2>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">
          Qué servicio está aprobado, en qué programa y con qué estado. Regla: solo se dice «aprobado» lo que aquí figura como
          aprobado. Todo lo demás se comunica como «en proceso», «en revisión» o «plan». Florida EMA: solo el servicio de Matrícula está aprobado.
          Los precios figuran como «Por confirmar» hasta que la dirección los fije.
        </p>

        <div className="mt-4 flex flex-wrap gap-3 text-base">
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

      <div className="grid gap-4 sm:grid-cols-2">
        {filas.map((f) => {
          const e = ESTADOS_PROGRAMA[f.status]
          return <article key={f.id} className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-bold text-navy">{f.state}</h3>
              <span className={`rounded-full px-3 py-1 text-sm font-semibold ${TONOS[e.tono]}`}>{e.etiqueta}</span>
            </div>
            <p className="mt-2 font-semibold text-teal">{f.program}</p>
            <p className="mt-3 text-base text-navy">{f.service}</p>
            <dl className="mt-4 space-y-3 text-base leading-relaxed text-navy/75">
              <div><dt className="font-bold text-navy">Cómo se gestiona</dt><dd>{f.marketplace}</dd></div>
              <div><dt className="font-bold text-navy">Quién puede solicitarlo</dt><dd>{f.eligibility}</dd></div>
              <div><dt className="font-bold text-navy">Documentación</dt><dd>{f.documentation}</dd></div>
            </dl>
            <button aria-expanded={abierta === f.id} onClick={() => setAbierta(abierta === f.id ? null : f.id)} className="mt-5 min-h-12 w-full rounded-xl bg-teal px-4 py-3 font-bold text-white">{abierta === f.id ? 'Cerrar detalle' : 'Ver pasos, requisitos y fuentes oficiales'}</button>
            {abierta === f.id && <p className="mt-3 text-sm text-teal">El detalle se muestra debajo de las tarjetas.</p>}
          </article>
        })}
        {!filas.length && <p className="rounded-2xl bg-white p-5">Sin resultados. Cambia los filtros.</p>}
      </div>

      {abierta && (() => {
        const f = MATRIZ_PROGRAMAS.find((x) => x.id === abierta)
        return f ? (
          <section className="rounded-2xl border border-gold/40 bg-gold/10 p-5 text-base text-navy/80">
            <div className="font-bold text-navy">{f.state} · {f.program} · {f.service}</div>
            <p className="mt-1 leading-relaxed">{f.operativo}</p>
            {f.condiciones && f.condiciones.length > 0 && (
              <div className="mt-3">
                <div className="text-sm font-bold uppercase tracking-wide text-navy/60">Condiciones del programa (resumen interno)</div>
                <ul className="mt-1 list-disc space-y-1 pl-5 leading-relaxed">
                  {f.condiciones.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            )}
            {f.captacion && f.captacion.length > 0 && (
              <div className="mt-3">
                <div className="text-sm font-bold uppercase tracking-wide text-navy/60">Cómo captar familias</div>
                <ul className="mt-1 list-disc space-y-1 pl-5 leading-relaxed">
                  {f.captacion.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            )}
            {f.facturacion && f.facturacion.length > 0 && (
              <div className="mt-3">
                <div className="text-sm font-bold uppercase tracking-wide text-navy/60">Cómo se factura y se cobra</div>
                <ul className="mt-1 list-disc space-y-1 pl-5 leading-relaxed">
                  {f.facturacion.map((c, i) => <li key={i}>{c}</li>)}
                </ul>
              </div>
            )}
            {f.responsableComercial && (
              <p className="mt-2 text-[12px] text-navy/60"><span className="font-semibold">Responsables: </span>{f.responsableComercial}</p>
            )}
            {f.guias?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {f.guias.map((g) => <a key={g.url} href={g.url} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-teal underline">{g.titulo}</a>)}
              </div>
            )}
            {f.noVerificado && f.noVerificado.length > 0 && (
              <div className="mt-3 rounded-lg bg-white/60 p-3">
                <div className="text-sm font-bold uppercase tracking-wide text-coral">Por verificar antes de afirmarlo</div>
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

      <p className="text-sm leading-relaxed text-navy/50">
        Los requisitos de cada programa cambian: la fuente vigente es siempre la web oficial del programa. La columna «Last verified»
        indica cuándo se contrastó por última vez. STATE FUNDING ≠ CURRICULUM: el currículo y la evaluación los decide Chanak.
      </p>
    </div>
  )
}
