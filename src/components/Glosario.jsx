import { useMemo, useState, useEffect } from 'react'
import { GLOSARIO, CATEGORIAS_GLOSARIO } from '../data/glosario'

// Botón flotante + panel de consulta del Chanak Operational Glossary.
// Se monta una sola vez en App: está disponible desde cualquier pantalla.
export default function Glosario() {
  const [abierto, setAbierto] = useState(false)
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('todas')

  useEffect(() => {
    if (!abierto) return
    const esc = (e) => e.key === 'Escape' && setAbierto(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [abierto])

  const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  const lista = useMemo(() => {
    const n = norm(q.trim())
    return GLOSARIO.filter(
      (g) => (cat === 'todas' || g.c === cat) && (!n || norm(g.t).includes(n) || norm(g.d).includes(n))
    ).sort((a, b) => a.t.localeCompare(b.t, 'es'))
  }, [q, cat])

  return (
    <>
      <button
        onClick={() => setAbierto(true)}
        aria-label="Abrir Chanak Operational Glossary"
        className="no-print fixed bottom-4 right-4 z-20 flex items-center gap-1.5 rounded-full bg-gold px-4 py-2.5 text-xs font-bold text-navy shadow-lg transition hover:brightness-95"
      >
        <span aria-hidden>📖</span> Glosario
      </button>

      {abierto && (
        <div className="no-print fixed inset-0 z-30 flex items-end justify-center bg-navy/60 p-0 sm:items-center sm:p-4" onClick={() => setAbierto(false)}>
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Chanak Operational Glossary"
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-cream shadow-2xl sm:rounded-2xl"
          >
            <div className="flex items-start justify-between gap-3 bg-navy px-5 py-4 text-cream">
              <div>
                <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-gold">Chanak Operational Glossary</div>
                <div className="text-sm text-cream/75">{GLOSARIO.length} términos · definiciones sencillas</div>
              </div>
              <button onClick={() => setAbierto(false)} aria-label="Cerrar" className="rounded-full bg-white/10 px-3 py-1 text-sm hover:bg-white/20">✕</button>
            </div>
            <div className="space-y-2 border-b border-navy/10 bg-white px-4 py-3">
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar un término…"
                className="w-full rounded-xl border border-navy/15 bg-slate-50 px-3 py-2 text-sm text-navy"
              />
              <div className="flex flex-wrap gap-1.5">
                {[['todas', 'Todas'], ...Object.entries(CATEGORIAS_GLOSARIO)].map(([k, v]) => (
                  <button
                    key={k}
                    onClick={() => setCat(k)}
                    className={`rounded-full px-3 py-1 text-[12px] font-semibold transition ${cat === k ? 'bg-teal text-white' : 'bg-navy/8 text-navy/70 hover:bg-navy/15'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
            <ul className="flex-1 space-y-2.5 overflow-y-auto px-4 py-3">
              {lista.length === 0 && <li className="py-6 text-center text-sm text-navy/55">Sin resultados.</li>}
              {lista.map((g) => (
                <li key={g.t} className="rounded-xl bg-white px-4 py-3 shadow-sm">
                  <div className="text-sm font-bold text-navy">{g.t}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-teal">{CATEGORIAS_GLOSARIO[g.c]}</div>
                  <p className="mt-1 text-xs leading-relaxed text-navy/75">{g.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
