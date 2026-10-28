import { useState } from 'react'
import { FUNCIONES } from '../data/funciones'
import { VISTA_POR_ID } from '../data/vistasSistema'
import { ROL_POR_ID, GRUPOS, grupoDe } from '../data/roles'
import VistaSistema from './VistaSistema'
import ManualMentoras from './ManualMentoras'
import { MANUAL_PERFILES } from '../data/manualMentoras'

// «Mi función»: la guía de trabajo de una especialidad. Qué resultado se espera, la rutina
// (cuándo / qué / dónde), qué hacer en los casos frecuentes y a quién escalar, límites y evidencia,
// y las vistas del sistema que esa función usa.
export default function MiFuncion({ funcionId, roles = [], onCambiar, onVolver, manualProgreso, onGuardarManual, soloLectura, onVerCoordinacion }) {
  const f = FUNCIONES[funcionId]
  const [vistaAbierta, setVistaAbierta] = useState(f?.vistas?.[0] || null)
  if (!f) return null
  const otras = roles.filter((r) => r !== funcionId && FUNCIONES[r])
  const grupo = GRUPOS[grupoDe(funcionId)]

  return (
    <div className="mi-funcion space-y-5">
      <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">← Volver al panel</button>

      <header className="rounded-2xl bg-navy p-6 text-cream shadow-sm">
        <div className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Mi función · {grupo?.nombre}</div>
        <h1 className="mt-1 text-2xl font-bold">{f.titulo}</h1>
        <p className="mt-3 text-base leading-relaxed text-cream/85"><b className="text-gold">Resultado:</b> {f.resultado}</p>
        {f.requisito && <p className="mt-2 text-sm text-cream/70">{f.requisito}</p>}
        {otras.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {otras.map((r) => (
              <button key={r} onClick={() => onCambiar(r)} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold hover:bg-white/20">Ver también: {FUNCIONES[r].titulo}</button>
            ))}
          </div>
        )}
      </header>

      {['coordinator', 'partner_director'].includes(funcionId) && onVerCoordinacion && <section className="rounded-2xl border-2 border-teal/30 bg-white p-5 shadow-sm"><h2 className="text-xl font-bold text-navy">Manual de Coordinación y perfil SIS</h2><p className="mt-3 text-base">Alcance del centro o alianza, supervisión de las tres funciones docentes y once procedimientos: asignaciones, notas, evidencias, PEI, boletines, Dual Diploma, pagos y alertas.</p><button onClick={onVerCoordinacion} className="mt-4 rounded-xl bg-teal px-5 py-3 text-base font-bold text-white">Abrir el manual completo de Coordinación</button></section>}

      {MANUAL_PERFILES.includes(funcionId) && <ManualMentoras key={funcionId} funcionId={funcionId} progreso={manualProgreso} onGuardar={onGuardarManual} soloLectura={soloLectura} />}

      {!MANUAL_PERFILES.includes(funcionId) && <><section className="rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wide text-teal">Mi rutina</h2>
        <ol className="mt-3 space-y-2">
          {f.rutina.map((r) => (
            <li key={r.cuando + r.que} className="grid gap-1 rounded-xl bg-cream px-3 py-2.5 sm:grid-cols-[120px_1fr]">
              <span className="text-xs font-bold text-navy">{r.cuando}</span>
              <span className="text-sm text-navy/85">{r.que}<span className="mt-0.5 block text-[11px] font-semibold text-teal">{r.donde}</span></span>
            </li>
          ))}
        </ol>
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="text-sm font-bold uppercase tracking-wide text-teal">Si pasa esto…</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead><tr className="text-xs text-navy/60"><th className="p-2">Situación</th><th className="p-2">Qué haces</th><th className="p-2">A quién escalas</th></tr></thead>
            <tbody>
              {f.casos.map((c) => (
                <tr key={c.si} className="border-t border-navy/10 align-top">
                  <td className="p-2 font-semibold text-navy">{c.si}</td>
                  <td className="p-2 text-navy/80">{c.haz}</td>
                  <td className="p-2 text-navy/80">{c.escala}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-2xl border border-coral/30 bg-coral/5 p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-coral">No te corresponde</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-navy/85">{f.noHaces.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
        <section className="rounded-2xl border border-teal/30 bg-teal/5 p-5">
          <h2 className="text-sm font-bold uppercase tracking-wide text-teal">Evidencia que dejas</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-navy/85">{f.evidencia.map((x) => <li key={x}>{x}</li>)}</ul>
        </section>
      </div>

      </>}
      {f.vistas.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wide text-teal">Prácticas con pantallas simuladas</h2>
          <p className="text-sm text-navy/70">Datos ficticios. Para el procedimiento vigente consulta el manual; los sistemas reales pueden haber cambiado de aspecto.</p>
          <div className="flex flex-wrap gap-2">
            {f.vistas.map((id) => (
              <button key={id} onClick={() => setVistaAbierta(id)} className={`rounded-full px-3 py-1.5 text-xs font-bold ${vistaAbierta === id ? 'bg-navy text-cream' : 'bg-white text-navy shadow-sm'}`}>{VISTA_POR_ID[id]?.titulo}</button>
            ))}
          </div>
          {vistaAbierta && VISTA_POR_ID[vistaAbierta] && <VistaSistema key={vistaAbierta} vista={VISTA_POR_ID[vistaAbierta]} />}
        </section>
      )}
      <p className="text-[11px] text-navy/45">Función: {ROL_POR_ID[funcionId]?.nombre}. Esta guía resume la operación; los módulos de formación explican el porqué.</p>
    </div>
  )
}
