import { getModulo } from '../data/curriculum'

// El panel usa únicamente el progreso ya guardado en Supabase. Ningún porcentaje
// representa por sí mismo una habilitación, certificación u horas acreditadas.
const INTRO = ['T1.0', 'T1.2', 'T2.1', 'T2.2', 'T2.4', 'T6.1']
const AREAS = [
  { id: 'mentor', titulo: 'Académica y Mentoría', icono: '📖', descripcion: 'Off-Campus, Dual Diploma, docencia y guías de Microschool' },
  { id: 'coordinator', titulo: 'Coordinación', icono: '🏫', descripcion: 'Calidad, supervisión y dirección de sedes Microschool' },
  { id: 'estrategico', titulo: 'Desarrollo Estratégico', icono: '🤝', descripcion: 'Microschools, alianzas, familias, ESA, marketing y grants' },
]
const terminados = (modulos, id) => ['completado', 'reconocido'].includes(modulos?.[id]?.estado)
const conteo = (ids, modulos) => [...new Set(ids)].filter((id) => terminados(modulos, id)).length
const porcentaje = (n, total) => total > 0 ? Math.round(100 * n / total) : 0

function Barra({ value }) {
  return (
    <div className="h-2.5 overflow-hidden rounded-full bg-navy/10" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={value}>
      <div className="h-full rounded-full bg-teal transition-all" style={{ width: `${value}%` }} />
    </div>
  )
}

function Tarjeta({ titulo, detalle, ids, modulos, onAbrirModulo, etiqueta }) {
  const validos = [...new Set(ids)].filter((id) => Boolean(getModulo(id)))
  const hechos = conteo(validos, modulos)
  const pct = porcentaje(hechos, validos.length)
  const siguiente = validos.find((id) => !terminados(modulos, id))
  return (
    <section className="rounded-xl border border-navy/10 bg-white p-4">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-bold text-navy">{titulo}</h3>
          <p className="mt-1 text-xs text-navy/60">{detalle}</p>
        </div>
        <span className="shrink-0 text-sm font-bold tabular-nums text-teal">{pct}%</span>
      </div>
      <div className="mt-3"><Barra value={pct} /></div>
      <div className="mt-2 flex items-center justify-between gap-2 text-xs text-navy/65">
        <span>{hechos} de {validos.length} módulos</span>
        <span>{etiqueta || (pct === 100 ? 'Completado' : hechos ? 'En progreso' : 'Por comenzar')}</span>
      </div>
      {siguiente ? (
        <button className="mt-3 w-full rounded-lg bg-teal px-3 py-2.5 text-left text-sm font-semibold text-white hover:bg-teal/90" onClick={() => onAbrirModulo(siguiente, { origen: 'ruta', listaIds: validos })}>
          Continuar: {getModulo(siguiente)?.titulo} →
        </button>
      ) : validos.length ? <p className="mt-3 text-xs font-semibold text-teal">✓ Esta etapa está completa en la plataforma.</p> : null}
    </section>
  )
}

export default function RutaClara({ progreso, troncoIds, ramaIds, roles, grupos, onAbrirModulo, onVerProgramas, onVerEstrategia, viendoOtra }) {
  const modulos = progreso?.modulos || {}
  const inicioIds = INTRO.filter((id) => Boolean(getModulo(id)))
  const introCompletada = conteo(inicioIds, modulos) === inicioIds.length
  const totalIds = [...new Set([...troncoIds, ...ramaIds])]
  const hechos = conteo(totalIds, modulos)
  const sigue = totalIds.find((id) => modulos[id]?.estado === 'en_curso' && !terminados(modulos, id))
    || inicioIds.find((id) => !terminados(modulos, id))
    || totalIds.find((id) => !terminados(modulos, id))
  const areasActivas = AREAS.filter((a) => grupos.includes(a.id))
  return (
    <section className="space-y-4 rounded-2xl border border-teal/20 bg-cream/70 p-4 shadow-sm sm:p-5" aria-label="Tu ruta y tu avance">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-teal">Mi ruta de formación</div>
          <h2 className="mt-1 text-xl font-bold text-navy">Aprende por etapas, sin empezar de cero</h2>
          <p className="mt-1 text-sm text-navy/70">Tu avance real se conserva. Completa lo necesario para tu función y continúa la certificación a tu ritmo.</p>
        </div>
        <div className="rounded-xl bg-white px-4 py-3 text-center shadow-sm">
          <div className="text-2xl font-extrabold tabular-nums text-navy">{porcentaje(hechos, totalIds.length)}%</div>
          <div className="text-[11px] text-navy/60">Ruta asignada · {hechos}/{totalIds.length}</div>
        </div>
      </div>
      <Barra value={porcentaje(hechos, totalIds.length)} />
      {sigue && (
        <button className="w-full rounded-xl bg-navy px-4 py-3 text-left text-white hover:bg-navy/90" onClick={() => onAbrirModulo(sigue, { origen: 'ruta', listaIds: totalIds })}>
          <span className="block text-[11px] uppercase tracking-wider text-white/60">Retomar mi siguiente actividad</span>
          <span className="mt-1 block text-sm font-bold">{getModulo(sigue)?.titulo} →</span>
        </button>
      )}
      <div className="grid gap-3 lg:grid-cols-3">
        <Tarjeta titulo="1 · Inicio esencial" detalle="Guía breve por módulos existentes. No sustituye safeguarding ni certificación." ids={inicioIds} modulos={modulos} onAbrirModulo={onAbrirModulo} etiqueta={introCompletada ? 'Orientación esencial revisada' : 'Primeros pasos'} />
        <Tarjeta titulo="2 · Tronco común" detalle="Identidad, tres productos, 60/20/20, seguridad y formación transversal." ids={troncoIds} modulos={modulos} onAbrirModulo={onAbrirModulo} />
        <Tarjeta titulo="3 · Mi especialización" detalle="Módulos de los roles asignados, sin repetir lo ya aprobado." ids={ramaIds} modulos={modulos} onAbrirModulo={onAbrirModulo} etiqueta={!roles.length ? 'Elige tu rama' : undefined} />
      </div>
      <div className="rounded-xl bg-white p-4">
        <h3 className="font-bold text-navy">Mis tres áreas institucionales</h3>
        <p className="mt-1 text-xs text-navy/60">Una persona puede ejercer varias funciones; los permisos y las certificaciones se validan por separado.</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-3">
          {AREAS.map((a) => (
            <div key={a.id} className={`rounded-lg border p-3 ${grupos.includes(a.id) ? 'border-teal bg-teal/5' : 'border-navy/10 bg-cream/60'}`}>
              <div className="text-lg" aria-hidden="true">{a.icono}</div>
              <p className="text-sm font-bold text-navy">{a.titulo}</p>
              <p className="mt-1 text-xs text-navy/60">{a.descripcion}</p>
              <p className="mt-2 text-xs font-semibold text-teal">{grupos.includes(a.id) ? 'Asignada / solicitada según permisos' : 'No asignada'}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-2 sm:grid-cols-2">
        {onVerProgramas && <button onClick={onVerProgramas} className="rounded-lg border border-teal bg-white px-3 py-3 text-left text-sm font-bold text-teal hover:bg-teal/5">📚 Guías prácticas de Off-Campus, Dual Diploma y Microschools →</button>}
        {onVerEstrategia && <button onClick={onVerEstrategia} disabled={!grupos.includes('estrategico') && !viendoOtra} className="rounded-lg border border-gold bg-white px-3 py-3 text-left text-sm font-bold text-navy hover:bg-gold/10 disabled:opacity-50">🤝 Captación, alianzas, ESA y grants →</button>}
      </div>
      <p className="text-[11px] leading-relaxed text-navy/60">Progreso = módulos completados o reconocidos en la plataforma. No equivale a horas de práctica validadas, certificación o autorización para atender menores. Chanak Foundation se documentará en su propia área de acción social, sin confundirla con admisiones y tarifas de Academy.</p>
    </section>
  )
}
