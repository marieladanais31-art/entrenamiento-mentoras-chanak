import { CURSO } from '../data/curso'
import { BLOQUES, TODOS_MODULOS } from '../data/curriculum'

// Portada del curso, estilo Prospero Learning: qué es, para quién,
// qué aprenderás, cómo se estudia y qué se certifica.
export default function CourseIntro({ onEmpezar, onVolver }) {
  const totalLecciones = 101
  return (
    <div className="space-y-5">
      <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">
        ← Volver al panel
      </button>

      {/* Hero */}
      <section className="overflow-hidden rounded-2xl bg-navy text-cream shadow-sm">
        <div className="p-6 sm:p-8">
          <img src="/logo-chanak.png" alt="Chanak International Academy" className="mb-5 h-20 w-20 rounded-xl bg-white/95 p-1.5" />
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">
            Programa oficial de formación
          </div>
          <h1 className="mt-2 text-2xl font-bold leading-tight sm:text-3xl">{CURSO.titulo}</h1>
          <p className="mt-2 text-sm italic text-cream/75">{CURSO.subtitulo}</p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <Pill>🎓 {CURSO.nivel1}</Pill>
            <Pill>🏛 {CURSO.nivel2}</Pill>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-center">
            <Metric n="10" l="bloques" />
            <Metric n={TODOS_MODULOS.length} l="módulos" />
            <Metric n={totalLecciones} l="lecciones" />
          </div>
        </div>
      </section>

      {/* Resumen ejecutivo */}
      <Card titulo="Sobre este programa">
        <p className="text-sm leading-relaxed text-navy/75">{CURSO.resumen}</p>
        <div className="mt-4 rounded-xl bg-cream px-4 py-3">
          <div className="text-[10px] font-bold uppercase tracking-wide text-navy/45">
            Dirigido a
          </div>
          <p className="mt-1 text-sm text-navy/75">{CURSO.dirigidoA}</p>
        </div>
      </Card>

      {/* Objetivos */}
      <Card titulo="Objetivos de aprendizaje">
        <p className="mb-3 text-xs text-navy/55">Al terminar el programa serás capaz de:</p>
        <ul className="space-y-2.5">
          {CURSO.objetivos.map((o, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-navy/75">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/12 text-[10px] font-bold text-teal">
                {i + 1}
              </span>
              {o}
            </li>
          ))}
        </ul>
      </Card>

      {/* Metodología */}
      <Card titulo="Cómo se estudia">
        <div className="grid gap-3 sm:grid-cols-2">
          {CURSO.metodologia.map((m) => (
            <div key={m.nombre} className="flex items-start gap-3 rounded-xl bg-cream px-4 py-3">
              <span className="text-xl" aria-hidden>
                {m.icono}
              </span>
              <div>
                <div className="text-sm font-semibold text-navy">{m.nombre}</div>
                <div className="text-xs text-navy/60">{m.detalle}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 rounded-xl border-l-4 border-gold bg-gold/8 px-4 py-3 text-xs leading-relaxed text-navy/75">
          <b>Estándar de dominio:</b> cada Knowledge Check se aprueba con un{' '}
          {Math.round(CURSO.umbralAprobacion * 100)}% — el mismo criterio de Mastery Learning que
          aplicamos a nuestros estudiantes. Puedes reintentarlo tantas veces como necesites: el
          objetivo es dominar, no acertar rápido.
        </p>
      </Card>

      {/* Temario */}
      <Card titulo="Temario">
        <div className="space-y-4">
          {[1, 2].map((nivel) => (
            <div key={nivel}>
              <div className="mb-2 text-[11px] font-bold uppercase tracking-wide text-teal">
                {nivel === 1
                  ? 'Nivel 1 — Mentora Certificada (180h)'
                  : 'Nivel 2 — Coordinadora Certificada (+120h)'}
              </div>
              <ol className="space-y-1.5">
                {BLOQUES.filter((b) => b.nivel === nivel).map((b) => (
                  <li
                    key={b.id}
                    className="flex items-center gap-3 rounded-xl bg-cream px-3 py-2 text-sm"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-navy text-[11px] font-bold text-cream">
                      {b.numero}
                    </span>
                    <span className="min-w-0 flex-1 font-medium text-navy">{b.titulo}</span>
                    <span className="shrink-0 text-[11px] text-navy/55">
                      {b.modulos.length} mód · {b.horas}h
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </Card>

      {/* Certificaciones */}
      <Card titulo="Certificaciones">
        <div className="grid gap-3 sm:grid-cols-2">
          {CURSO.certificaciones.map((c) => (
            <div key={c.nombre} className="rounded-xl border-2 border-gold/35 bg-gold/8 p-4">
              <div className="text-2xl font-bold text-gold">{c.horas}h</div>
              <div className="mt-0.5 text-sm font-bold text-navy">{c.nombre}</div>
              <p className="mt-1 text-xs leading-relaxed text-navy/65">{c.detalle}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-navy/50">
          La certificación la emite la Head of LSP con visto bueno del Board y se archiva como
          evidencia MSA (indicador T5a · formación del personal).
        </p>
      </Card>

      <button
        onClick={onEmpezar}
        className="w-full rounded-2xl bg-teal py-4 text-sm font-bold text-white shadow-sm transition hover:bg-teal/90"
      >
        Comenzar el programa →
      </button>
    </div>
  )
}

function Pill({ children }) {
  return <span className="rounded-full bg-white/10 px-3 py-1.5 font-medium">{children}</span>
}

function Metric({ n, l }) {
  return (
    <div>
      <div className="text-xl font-bold text-gold">{n}</div>
      <div className="text-[10px] uppercase tracking-wide text-cream/60">{l}</div>
    </div>
  )
}

function Card({ titulo, children }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-base font-bold text-navy">{titulo}</h2>
      {children}
    </section>
  )
}
