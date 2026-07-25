import { useState } from 'react'
import { CURSO } from '../data/curso'

// Knowledge Check estilo formación continua: una pregunta a la vez,
// corrección inmediata con explicación y aprobación al 80% (Mastery Learning).
export default function KnowledgeCheck({ moduloId, quiz, resultadoPrevio, onAprobado, onGuardar }) {
  const [iniciado, setIniciado] = useState(false)
  const [indice, setIndice] = useState(0)
  const [elegida, setElegida] = useState(null)
  const [respuestas, setRespuestas] = useState([])

  const total = quiz.length
  const minAciertos = Math.ceil(total * CURSO.umbralAprobacion)

  function empezar() {
    setIniciado(true)
    setIndice(0)
    setElegida(null)
    setRespuestas([])
  }

  function comprobar(i) {
    if (elegida !== null) return
    setElegida(i)
    setRespuestas((r) => [...r, i === quiz[indice].correcta])
  }

  function siguiente() {
    if (indice + 1 < total) {
      setIndice(indice + 1)
      setElegida(null)
    } else {
      const aciertos = respuestas.filter(Boolean).length
      const aprobado = aciertos >= minAciertos
      onGuardar({ aciertos, total, aprobado })
      if (aprobado) onAprobado?.()
      setIniciado(false)
    }
  }

  // ── Pantalla de resultado / inicio ──
  if (!iniciado) {
    const r = resultadoPrevio
    return (
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-navy">✅ Knowledge Check</h3>
            <p className="mt-1 text-xs text-navy/60">
              {total} preguntas · se aprueba con {minAciertos} de {total} (
              {Math.round(CURSO.umbralAprobacion * 100)}%)
            </p>
          </div>
          {r && (
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                r.aprobado ? 'bg-gold/15 text-gold' : 'bg-coral/12 text-coral'
              }`}
            >
              {r.aciertos}/{r.total}
            </span>
          )}
        </div>

        {r && (
          <div
            className={`mt-3 rounded-xl border-l-4 px-4 py-3 text-sm leading-relaxed ${
              r.aprobado
                ? 'border-gold bg-gold/8 text-navy'
                : 'border-coral bg-coral/6 text-navy'
            }`}
          >
            {r.aprobado ? (
              <>
                🎓 <b>Dominio demostrado</b> — {r.aciertos} de {r.total} correctas. Puedes marcar el
                módulo como completado.
              </>
            ) : (
              <>
                <b>Aún no alcanzas el dominio</b> — {r.aciertos} de {r.total}. Repasa las lecciones y
                vuelve a intentarlo: en Mastery Learning reintentar no es fracasar, es la forma de
                aprender.
              </>
            )}
          </div>
        )}

        <button
          onClick={empezar}
          className="mt-4 w-full rounded-xl bg-teal py-3 text-sm font-semibold text-white transition hover:bg-teal/90"
        >
          {r ? 'Volver a intentarlo' : 'Comenzar el test'}
        </button>
      </div>
    )
  }

  // ── Test en curso ──
  const preg = quiz[indice]
  const correcta = preg.correcta
  const respondida = elegida !== null

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between text-xs font-medium text-navy/55">
        <span>
          Pregunta {indice + 1} de {total}
        </span>
        <span>{respuestas.filter(Boolean).length} correctas</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy/10">
        <div
          className="h-full rounded-full bg-teal transition-all duration-300"
          style={{ width: `${((indice + (respondida ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <p className="mt-4 text-sm font-semibold leading-relaxed text-navy">{preg.p}</p>

      <div className="mt-3 space-y-2">
        {preg.opciones.map((op, i) => {
          const esCorrecta = i === correcta
          const esElegida = i === elegida
          let clases = 'border-navy/12 bg-cream/60 hover:border-teal hover:bg-teal/5'
          if (respondida && esCorrecta) clases = 'border-teal bg-teal/10'
          else if (respondida && esElegida) clases = 'border-coral bg-coral/8'
          else if (respondida) clases = 'border-navy/10 bg-cream/40 opacity-60'
          return (
            <button
              key={i}
              onClick={() => comprobar(i)}
              disabled={respondida}
              className={`flex w-full items-start gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm transition ${clases}`}
            >
              <span className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-navy/60">
                {respondida && esCorrecta ? '✓' : respondida && esElegida ? '✕' : 'ABCD'[i]}
              </span>
              <span className="text-navy/80">{op}</span>
            </button>
          )
        })}
      </div>

      {respondida && (
        <>
          <div className="mt-3 rounded-xl bg-navy/4 px-4 py-3 text-xs leading-relaxed text-navy/75">
            <b>{elegida === correcta ? '✓ Correcto. ' : '✕ Respuesta correcta: '}</b>
            {elegida !== correcta && (
              <span className="font-medium">{preg.opciones[correcta]}. </span>
            )}
            {preg.explica}
          </div>
          <button
            onClick={siguiente}
            className="mt-3 w-full rounded-xl bg-navy py-3 text-sm font-semibold text-cream transition hover:bg-navy/90"
          >
            {indice + 1 < total ? 'Siguiente pregunta →' : 'Ver resultado'}
          </button>
        </>
      )}
    </div>
  )
}
