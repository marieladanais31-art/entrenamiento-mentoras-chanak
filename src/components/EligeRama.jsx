import { useState } from 'react'
import { GRUPOS, ESPECIALIDADES } from '../data/roles'

// Paso 2 · «Elige tu rama». Mentor (y sus especialidades) se activa al guardar: acceso libre.
// Coordinador lo confirma Dirección Académica y Estratégico la Dirección de Operaciones y Alianzas;
// hasta entonces quedan «pendientes de confirmación». El Coordinador general exige la rama Mentor.
export default function EligeRama({ actual = [], onGuardar, onCancelar }) {
  const habilitado = true
  const [sel, setSel] = useState(() => new Set(actual))
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')

  const tieneMentor = ESPECIALIDADES.mentor.some((e) => sel.has(e.id))

  function alternar(id) {
    const n = new Set(sel)
    if (n.has(id)) n.delete(id)
    else n.add(id)
    // Coordinador sin ninguna especialidad Mentor → se añade Mentor Off-Campus / Dual Diploma
    if (id === 'coordinator' && n.has('coordinator') && !ESPECIALIDADES.mentor.some((e) => n.has(e.id))) n.add('mentor')
    setSel(n)
  }

  async function guardar() {
    setError('')
    if (sel.size === 0) return setError('Elige al menos una opción.')
    if (sel.has('coordinator') && !tieneMentor) return setError('Coordinador/a Off-Campus y Dual Diploma requiere también una especialidad de Mentor.')
    setGuardando(true)
    try {
      await onGuardar([...sel])
    } catch (e) {
      setError(e.message)
    } finally {
      setGuardando(false)
    }
  }

  return (
    <section className="rounded-2xl border-2 border-teal bg-white p-5 shadow-sm">
      <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Paso 2 · Elige tu rama</div>
      <h2 className="mt-1 text-xl font-bold text-navy">¿En qué vas a trabajar con Chanak?</h2>
      <p className="mt-1 text-sm leading-relaxed text-navy/70">
        Puedes marcar más de una opción si vas a combinar funciones. La rama <b>Mentor</b> se activa en cuanto guardas.
        <b> Coordinador</b> y <b>Estratégico</b> quedan pendientes hasta que los confirme la dirección indicada.
      </p>

      <div className={`mt-4 space-y-4 ${habilitado ? '' : 'pointer-events-none opacity-50'}`}>
        {Object.values(GRUPOS).map((g) => (
          <fieldset key={g.id} className="rounded-xl bg-cream p-3">
            <legend className="px-1 text-sm font-bold text-navy">{g.icono} {g.nombre}</legend>
            <p className="mb-1 text-xs leading-relaxed text-navy/65">{g.descripcion}</p>
            <p className={`mb-2 text-[11px] font-semibold ${g.acceso === 'libre' ? 'text-teal' : 'text-gold'}`}>
              {g.acceso === 'libre' ? '✓ Acceso libre: se activa al guardar' : `⏳ Requiere confirmación de ${g.confirma}`}
            </p>
            <div className="space-y-2">
              {ESPECIALIDADES[g.id].map((e) => (
                <label key={e.id} className={`flex cursor-pointer gap-3 rounded-lg border-2 bg-white px-3 py-2.5 ${sel.has(e.id) ? 'border-teal' : 'border-transparent'}`}>
                  <input type="checkbox" className="mt-1 h-4 w-4 accent-teal" checked={sel.has(e.id)} onChange={() => alternar(e.id)} disabled={!habilitado} />
                  <span>
                    <span className="block text-sm font-semibold text-navy">{e.nombre}</span>
                    <span className="block text-xs leading-relaxed text-navy/60">{e.detalle}</span>
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        ))}
      </div>

      {error && <p className="mt-3 rounded-lg bg-coral/10 px-3 py-2 text-sm text-coral">{error}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={guardar} disabled={!habilitado || guardando} className="rounded-xl bg-teal px-5 py-2.5 text-sm font-bold text-white disabled:opacity-50">
          {guardando ? 'Guardando…' : 'Guardar mi rama'}
        </button>
        {onCancelar && (
          <button onClick={onCancelar} className="rounded-xl border border-navy/20 px-5 py-2.5 text-sm text-navy">Cancelar</button>
        )}
      </div>
    </section>
  )
}
