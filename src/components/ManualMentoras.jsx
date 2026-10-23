import { useState } from 'react'
import CoberturaEspecialistas from './CoberturaEspecialistas'
import { ALCANCE_PERFILES, PROCEDIMIENTOS_MENTORAS, MERITOS_COINS, EVALUACION_MENTORAS, FUENTES_MANUAL, MANUAL_VERSION, PERFILES_OPERATIVOS, UNIDADES_MENTORAS, evaluarManual, leerRegistroManual } from '../data/manualMentoras'

export default function ManualMentoras({ funcionId, progreso, onGuardar, soloLectura = false }) {
  const registro = leerRegistroManual(progreso)
  const [unidadId, setUnidadId] = useState('M1')
  const [eleccion, setEleccion] = useState({})
  const [respuestas, setRespuestas] = useState({})
  const [resultado, setResultado] = useState(null)
  const [guardando, setGuardando] = useState(false)
  const [aviso, setAviso] = useState('')
  const [error, setError] = useState('')
  const unidad = UNIDADES_MENTORAS.find((u) => u.id === unidadId)
  const perfil = PERFILES_OPERATIVOS.find((p) => p.id === funcionId) || PERFILES_OPERATIVOS[0]
  const quizGuardado = progreso?.quiz?.version === MANUAL_VERSION ? progreso.quiz : null
  const casoElegido = unidad ? eleccion[unidad.id] ?? registro.casos[unidad.id] : null

  async function guardar(cambios, quiz) {
    setGuardando(true); setError(''); setAviso('')
    try {
      await onGuardar({ version: MANUAL_VERSION, ...registro, ...cambios }, quiz)
      setAviso('Avance guardado. Administración puede consultarlo en Actividad y pendientes.')
    } catch (e) { setError(`No se guardó el avance: ${e.message}. Puedes reintentarlo sin salir de esta pantalla.`) }
    finally { setGuardando(false) }
  }
  async function evaluar(e) {
    e.preventDefault()
    const r = evaluarManual(respuestas)
    setResultado(r)
    if (!r.completas) return
    await guardar({}, { ...r, respuestas, fecha: new Date().toISOString() })
  }

  return <section className="manual-mentoras space-y-5" aria-label="Manual operativo de mentoras">
    <header className="rounded-2xl border border-teal/30 bg-teal/5 p-5">
      <p className="text-sm font-bold text-teal">Actualización operativa · {MANUAL_VERSION}</p>
      <h2 className="mt-1 text-2xl font-bold text-navy">Tres perfiles: Mentor general, Inglés y Life Skills</h2>
      <p className="mt-3 text-base font-bold">Son funciones distintas. Una persona puede tener varias asignadas, pero ninguna incluye automáticamente las otras dos.</p>
      <p className="mt-3 text-base">Cinco unidades complementarias a tu ruta. Conservan tus módulos y vídeos anteriores. Revisadas contra el código del SIS y Dual Diploma; la disponibilidad de cada función depende del acceso y la configuración vigente.</p>
      <div className="no-print mt-4 flex flex-wrap gap-3">
        <a href="/manuales/manual-mentoras-2026-10.pdf" target="_blank" rel="noreferrer" className="rounded-xl bg-navy px-4 py-3 text-sm font-bold text-white">Descargar manual PDF</a>
        <a href="https://drive.google.com/file/d/1idL7FWK8mEK8SYGqT-btOvxbaV_suIeg/view" target="_blank" rel="noreferrer" className="rounded-xl border border-teal/30 bg-white px-4 py-3 text-sm font-bold text-teal">Ver documento en Drive</a>
        <button onClick={() => window.print()} className="rounded-xl border border-teal/30 bg-white px-4 py-3 text-sm font-bold text-teal">Imprimir esta unidad</button>
      </div>
      <p className="mt-3 text-sm">Lecturas confirmadas: {registro.lecturas.length}/5 · Evaluación guardada: {quizGuardado ? `${quizGuardado.aciertos}/${quizGuardado.total} · ${quizGuardado.aprobado ? 'superada' : 'pendiente de superar'}` : 'sin intento registrado'}.</p>
      {soloLectura && <p className="mt-2 text-sm font-semibold">Vista de consulta. El avance de otra persona no se modifica desde aquí.</p>}
    </header>

    <CoberturaEspecialistas />
    <section className="rounded-2xl bg-white p-5 shadow-sm" aria-label="Alcance de los tres perfiles">
      <h3 className="text-xl font-bold text-navy">Qué corresponde a cada perfil</h3>
      <p className="mt-3 text-base">Esta comparación explica el alcance de las funciones; no concede permisos. Cada persona trabaja con los estudiantes, materias y responsabilidades que tenga asignados.</p>
      <div className="mt-4 space-y-4">{ALCANCE_PERFILES.map((p) => <article key={p.id} className={`rounded-xl border p-4 ${p.id === funcionId ? 'border-teal bg-teal/5' : 'border-navy/15'}`}>
        <h4 className="text-lg font-bold">{p.nombre}{p.id === funcionId ? ' · Función que estás consultando' : ''}</h4>
        <dl className="mt-3 space-y-3 text-base">{[['A quién acompaña', p.acompana], ['Notas y evaluación', p.notas], ['Motivación con coins', p.coins], ['Alertas y comunicación', p.alertas], ['Límite', p.limite]].map(([nombre, texto]) => <div key={nombre}><dt className="font-bold text-teal">{nombre}</dt><dd>{texto}</dd></div>)}</dl>
      </article>)}</div>
      <p className="mt-4 text-base"><b>Ejemplo:</b> un mismo alumno puede tener mentor general, profesora de Inglés y mentora de Life Skills. Los especialistas evalúan su área y comunican avances; el mentor general acompaña el conjunto con la familia. Coordinación supervisa y resuelve las decisiones que requieran su autorización.</p>
    </section>
    <details className="rounded-2xl bg-white p-5 shadow-sm" open>
      <summary className="cursor-pointer text-lg font-bold text-navy">Mi rutina · {perfil.titulo}</summary>
      <p className="mt-3 text-base font-semibold">{perfil.resultado}</p>
      <ol className="mt-3 list-decimal space-y-3 pl-6 text-base">{perfil.pasos.map((p) => <li key={p}>{p}</li>)}</ol>
      <p className="mt-4 rounded-xl bg-gold/15 p-3 text-sm"><b>Límites:</b> {perfil.limites}</p>
    </details>

    <section className="space-y-4" aria-label="Procedimientos paso a paso">
      <h3 className="text-xl font-bold text-navy">Cómo hacerlo · {perfil.titulo}</h3>
      {PROCEDIMIENTOS_MENTORAS.map((p) => <details key={p.id} className="rounded-2xl bg-white p-5 shadow-sm" open>
        <summary className="cursor-pointer text-lg font-bold text-teal">{p.titulo}</summary>
        <p className="mt-3 text-base"><b>Tu alcance:</b> {p.alcance[funcionId] || p.alcance.mentor}</p>
        <p className="mt-3 rounded-xl bg-cream p-3 text-base"><b>Dónde:</b> {p.donde}</p>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-base">{p.pasos.map((paso) => <li key={paso}>{paso}</li>)}</ol>
        {p.id === 'coins' && <div className="mt-4 overflow-x-auto"><table className="w-full text-left text-base"><caption className="mb-2 text-left font-bold">Méritos propuestos por el formulario SIS revisado · comprobar catálogo vigente</caption><thead><tr><th className="p-2">Acción comprobada</th><th className="p-2">Coins</th></tr></thead><tbody>{MERITOS_COINS.map(([accion, coins]) => <tr key={accion} className="border-t border-navy/15"><td className="p-2">{accion}</td><td className="p-2 font-bold">+{coins}</td></tr>)}</tbody></table></div>}
        <h4 className="mt-4 text-base font-bold">Ejemplos para las tres funciones</h4>
        <ul className="mt-2 list-disc space-y-2 pl-6 text-base">{p.ejemplos.map((e) => <li key={e}>{e}</li>)}</ul>
        <p className="mt-4 text-base"><b>Comprueba al terminar:</b> {p.verificar}</p>
        <p className="mt-4 rounded-xl bg-gold/15 p-3 text-base"><b>Permisos y límites:</b> {p.limites}</p>
      </details>)}
    </section>

    <nav aria-label="Unidades del manual" className="no-print grid gap-2 sm:grid-cols-2">
      {UNIDADES_MENTORAS.map((u, i) => <button key={u.id} aria-current={unidadId === u.id ? 'step' : undefined} onClick={() => { setUnidadId(u.id); setAviso(''); setError('') }} className={`rounded-xl border p-4 text-left text-sm font-bold ${unidadId === u.id ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white text-navy'}`}>{i + 1}. {u.titulo}{registro.lecturas.includes(u.id) ? ' · Lectura confirmada' : ''}</button>)}
      <button onClick={() => setUnidadId('final')} aria-current={unidadId === 'final' ? 'step' : undefined} className={`rounded-xl border p-4 text-left text-sm font-bold ${unidadId === 'final' ? 'bg-navy text-white' : 'bg-white text-navy'}`}>Evaluación · 15 decisiones prácticas</button>
    </nav>

    {unidad ? <article className="rounded-2xl bg-white p-5 shadow-sm sm:p-7">
      <p className="text-sm font-bold text-teal">Unidad {unidad.id.slice(1)} de 5</p>
      <h3 className="mt-1 text-xl font-bold text-navy">{unidad.titulo}</h3>
      <p className="mt-3 text-base"><b>Al terminar:</b> {unidad.objetivo}</p>
      {unidad.secciones.map((s) => <section key={s.titulo} className="mt-6 border-t border-navy/10 pt-5">
        <h4 className="text-lg font-bold text-navy">{s.titulo}</h4>
        <p className="mt-3 text-base leading-relaxed">{s.texto}</p>
        <ol className="mt-3 list-decimal space-y-2 pl-6 text-base">{s.pasos.map((p) => <li key={p}>{p}</li>)}</ol>
      </section>)}
      <fieldset className="no-print mt-6 rounded-xl border border-teal/30 bg-teal/5 p-4">
        <legend className="px-2 text-base font-bold text-navy">Practica una decisión</legend>
        <p className="text-base">{unidad.caso.pregunta}</p>
        <div className="mt-3 space-y-2">{unidad.caso.opciones.map((o, i) => <label key={o} className="flex cursor-pointer items-start gap-3 rounded-lg bg-white p-3 text-base"><input className="mt-1.5" type="radio" name={`caso-${unidad.id}`} checked={casoElegido === i} disabled={soloLectura || guardando} onChange={() => setEleccion({ ...eleccion, [unidad.id]: i })} />{o}</label>)}</div>
        {Number.isInteger(casoElegido) && <p role="status" className="mt-3 text-base"><b>{casoElegido === unidad.caso.correcta ? 'Decisión correcta. ' : 'Revisa tu decisión. '}</b>{unidad.caso.explicacion}</p>}
      </fieldset>
      <section className="no-print mt-5 rounded-xl bg-cream p-4 text-base"><h4 className="font-bold">Práctica para tu portafolio</h4><p className="mt-2">{unidad.evidencia}</p><p className="mt-2 text-sm">Usa datos ficticios. Presenta la práctica mediante el entregable del módulo correspondiente de tu ruta; confirmar esta lectura no valida una práctica supervisada.</p></section>
      <p className="mt-4 text-sm">Conecta con los módulos: {unidad.mapa.join(' · ')}. Se conserva su avance y su evaluación.</p>
      {!soloLectura && <button disabled={guardando || casoElegido !== unidad.caso.correcta} onClick={() => guardar({ lecturas: [...new Set([...registro.lecturas, unidad.id])], casos: { ...registro.casos, [unidad.id]: casoElegido } })} className="no-print mt-5 rounded-xl bg-teal px-5 py-3 text-base font-bold text-white disabled:opacity-50">{guardando ? 'Guardando…' : 'Confirmar lectura y caso resuelto'}</button>}
    </article> : <section className="no-print rounded-2xl bg-white p-5 shadow-sm sm:p-7">
      <h3 className="text-xl font-bold text-navy">Evaluación del manual operativo</h3>
      <p className="mt-3 text-base">15 preguntas situacionales. Umbral: 85 %; necesitas al menos 13 respuestas correctas de 15 (86,7 %). Primero confirma las cinco lecturas y sus casos. Puedes volver a estudiar y repetir.</p>
      {registro.lecturas.length < 5 && <p className="mt-3 rounded-xl bg-gold/15 p-3 text-base">Te faltan {5 - registro.lecturas.length} lecturas con su caso resuelto antes de entregar la evaluación.</p>}
      <form onSubmit={evaluar} className="mt-5 space-y-5">
        {EVALUACION_MENTORAS.map((q, idx) => <fieldset key={q.id} className="rounded-xl border border-navy/15 p-4">
          <legend className="px-2 text-base font-bold">{idx + 1}. {q.pregunta}</legend>
          <div className="space-y-2">{q.opciones.map((o, i) => <label key={o} className="flex cursor-pointer items-start gap-3 rounded-lg bg-cream p-3 text-base"><input className="mt-1.5" type="radio" name={q.id} required checked={respuestas[q.id] === i} disabled={soloLectura || guardando} onChange={() => { setRespuestas({ ...respuestas, [q.id]: i }); setResultado(null) }} />{o}</label>)}</div>
          {resultado?.completas && <p className="mt-3 text-base"><b>{respuestas[q.id] === q.correcta ? 'Correcta. ' : 'Para repasar. '}</b>{q.explicacion} <button type="button" onClick={() => setUnidadId(q.unidad)} className="no-print font-bold text-teal underline">Volver a {q.unidad}</button></p>}
        </fieldset>)}
        {!soloLectura && <button type="submit" disabled={guardando || registro.lecturas.length < 5} className="no-print rounded-xl bg-teal px-5 py-3 text-base font-bold text-white disabled:opacity-50">{guardando ? 'Guardando…' : 'Evaluar y guardar resultado'}</button>}
      </form>
      {resultado && <p role="status" className="mt-4 rounded-xl bg-gold/15 p-4 text-lg font-bold">{resultado.completas ? `${resultado.aciertos}/15 · ${resultado.porcentaje.toFixed(1)} % · ${resultado.aprobado ? 'Evaluación superada' : 'Repasa las unidades indicadas y vuelve a intentarlo'}` : 'Responde a las 15 preguntas antes de entregar.'}</p>}
      <p className="mt-4 text-base">El resultado queda en tu avance y en la vista de Administración. El certificado oficial mantiene el protocolo institucional de práctica, validación y firma; esta evaluación no sustituye esos requisitos.</p>
    </section>}
    {aviso && <p role="status" className="no-print rounded-xl bg-teal/10 p-4 text-base">{aviso}</p>}
    {error && <p role="alert" className="no-print rounded-xl bg-coral/10 p-4 text-base">{error}</p>}
    <details className="rounded-2xl bg-white p-5 text-sm shadow-sm"><summary className="cursor-pointer font-bold text-teal">Fuentes y alcance de la revisión</summary><p className="mt-3">Revisión del código al 23/10/2026. No es una certificación de despliegue, permisos efectivos ni migraciones en producción. Los nuevos cambios de SIS, Portal, Flex y Life Skills deben contrastarse antes de grabar sus recorridos definitivos.</p><ul className="mt-3 space-y-3">{FUENTES_MANUAL.map((f) => <li key={f.url}><a href={f.url} target="_blank" rel="noreferrer" className="font-bold text-teal underline">{f.nombre}</a><p>{f.detalle}</p></li>)}</ul></details>
  </section>
}
