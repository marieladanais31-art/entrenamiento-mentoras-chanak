import { getMentoras, resumenMentora } from '../lib/storage'
import { ADMIN } from '../data/mentoras'

export default function Login({ onEntrar }) {
  const mentoras = getMentoras()

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-4 py-10">
      <div className="w-full max-w-sm">
        {/* Emblema */}
        <div className="mb-8 text-center text-cream">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center">
            <svg viewBox="0 0 100 100" className="h-20 w-20">
              <path
                d="M50 5 L90 20 L90 55 Q90 80 50 95 Q10 80 10 55 L10 20 Z"
                fill="none"
                stroke="#C9963A"
                strokeWidth="4"
              />
              <path d="M50 22 Q46 30 48 38 L44 70 L56 70 L52 38 Q54 30 50 22 Z" fill="#C9963A" />
              <circle cx="50" cy="20" r="6" fill="#2A8C74" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold tracking-wide">Chanak Academy</h1>
          <p className="mt-1 text-sm text-cream/70">Formación de Mentoras y Coordinadoras</p>
          <p className="mt-1 text-xs text-cream/50">180h Mentora · 300h Coordinadora · MSA-CESS</p>
        </div>

        {/* Selector de mentora */}
        <div className="space-y-3">
          {mentoras.map((m) => {
            const r = resumenMentora(m.id)
            const pct = Math.min(100, Math.round((r.horas / r.metaHoras) * 100))
            return (
              <button
                key={m.id}
                onClick={() => onEntrar({ tipo: 'mentora', mentoraId: m.id })}
                className="block w-full rounded-2xl bg-cream p-4 text-left shadow-lg transition hover:scale-[1.02] active:scale-[0.99]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-white">
                    {m.iniciales}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-navy">{m.nombre}</div>
                    <div className="text-xs text-navy/60">
                      Nivel {r.nivelActual} · {r.horas}h de {r.metaHoras}h
                    </div>
                  </div>
                  <div className="text-sm font-bold text-teal">{pct}%</div>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy/10">
                  <div
                    className={`h-full rounded-full ${pct >= 100 ? 'bg-gold' : 'bg-teal'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Acceso administrador */}
        <button
          onClick={() => onEntrar({ tipo: 'admin' })}
          className="mt-6 block w-full rounded-2xl border border-cream/25 p-3 text-center text-sm font-medium text-cream/80 transition hover:bg-white/5"
        >
          🔑 Acceso administrador · {ADMIN.nombre}
        </button>

        <p className="mt-8 text-center text-[10px] leading-relaxed text-cream/40">
          Chanak International Academy · FLDOE #134620
          <br />
          Evidencia de formación del personal · Indicador MSA T5a
        </p>
      </div>
    </div>
  )
}
