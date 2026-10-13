import { useState } from 'react'
import { GRUPOS, ESPECIALIDADES, PROYECTOS_PRIORIDAD, REQUISITOS_MODALIDADES } from '../data/roles'

// Paso 2 · «Elige tu rama». Mentor (y sus especialidades) se activa al guardar: acceso libre.
// Coordinador lo confirma Dirección Académica y Estratégico la Dirección de Operaciones y Alianzas;
// hasta entonces quedan «pendientes de confirmación». El Coordinador general exige la rama Mentor.
export default function EligeRama({ actual = [], onGuardar, onCancelar }) {
  const habilitado = true
  const [sel, setSel] = useState(() => new Set(actual))
  const [proyectoSel, setProyectoSel] = useState('')
  const [tiempoDisp, setTiempoDisp] = useState('')
  const [alcance, setAlcance] = useState('')
  const [aporte, setAporte] = useState('')
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')

  const tieneMentor = ESPECIALIDADES.mentor.some((e) => sel.has(e.id))
  const tieneEstrategico = ESPECIALIDADES.estrategico.some((e) => sel.has(e.id))

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
    if (tieneEstrategico && !proyectoSel) {
      return setError('Por favor, selecciona en qué área o proyecto prioritario puedes involucrarte.')
    }
    setGuardando(true)
    try {
      const datosEstrategico = tieneEstrategico
        ? { proyectoSel, tiempoDisp, alcance, aporte }
        : null
      await onGuardar([...sel], datosEstrategico)
    } catch (e) {
      setError(e.message)
    } finally {
      setGuardando(false)
    }
  }

  return (
    <section className="rounded-2xl border-2 border-teal bg-white p-5 shadow-sm">
      <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Paso 2 · Elige tu rama</div>
      <h2 className="mt-1 text-xl font-bold text-navy">¿Cómo puedes participar en Chanak?</h2>
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

      {/* Formulario de Postulación y Requisitos para el Área Estratégica */}
      {tieneEstrategico && (
        <div className="mt-5 rounded-2xl border-2 border-gold/60 bg-gold/10 p-5 space-y-4">
          <div className="border-b border-gold/30 pb-3">
            <span className="inline-block rounded-full bg-gold/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy">
              Formulario Requerido · Área Estratégica
            </span>
            <h3 className="mt-2 text-base font-bold text-navy">
              📋 Requisitos Básicos y Postulación de Proyecto
            </h3>
            <p className="mt-1 text-xs text-navy/75 leading-relaxed">
              Para participar en el Área Estratégica es indispensable indicar en qué área o proyecto prioritario puedes involucrarte, revisar los requisitos básicos de tu modalidad y describir cómo puedes aportar.
            </p>
          </div>

          {/* Requisitos según especialidad seleccionada */}
          <div className="rounded-xl bg-white p-4 shadow-sm border border-gold/30 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wide text-teal">
              📌 Requisitos Básicos de tu Modalidad
            </h4>
            <div className="space-y-2 text-xs text-navy/80">
              {sel.has('partner_director') && (
                <div className="rounded-lg bg-slate-50 p-3 border-l-4 border-gold">
                  <b className="text-navy">{REQUISITOS_MODALIDADES.partner_presencial.titulo}:</b>
                  <ul className="mt-1.5 list-disc pl-4 space-y-1">
                    {REQUISITOS_MODALIDADES.partner_presencial.requisitos.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}
              {sel.has('grants_projects') && (
                <div className="rounded-lg bg-slate-50 p-3 border-l-4 border-teal">
                  <b className="text-navy">{REQUISITOS_MODALIDADES.grants_proyectos.titulo}:</b>
                  <ul className="mt-1.5 list-disc pl-4 space-y-1">
                    {REQUISITOS_MODALIDADES.grants_proyectos.requisitos.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}
              {sel.has('family_enrollment') && (
                <div className="rounded-lg bg-slate-50 p-3 border-l-4 border-teal">
                  <b className="text-navy">{REQUISITOS_MODALIDADES.fondos_esa.titulo}:</b>
                  <ul className="mt-1.5 list-disc pl-4 space-y-1">
                    {REQUISITOS_MODALIDADES.fondos_esa.requisitos.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}
              {sel.has('institutional_partnerships') && (
                <div className="rounded-lg bg-slate-50 p-3 border-l-4 border-gold">
                  <b className="text-navy">{REQUISITOS_MODALIDADES.alianzas_institucionales.titulo}:</b>
                  <ul className="mt-1.5 list-disc pl-4 space-y-1">
                    {REQUISITOS_MODALIDADES.alianzas_institucionales.requisitos.map((r, i) => <li key={i}>{r}</li>)}
                  </ul>
                </div>
              )}
              {!sel.has('partner_director') && !sel.has('grants_projects') && !sel.has('family_enrollment') && !sel.has('institutional_partnerships') && (
                <p className="text-navy/70 italic">
                  Selecciona una especialidad estratégica específica para ver sus requisitos operativos clave.
                </p>
              )}
            </div>
          </div>

          {/* Selección de Proyecto en Prioridad */}
          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wide">
              Área o Proyecto en Prioridad en el que puedes entrar:
            </label>
            <select
              value={proyectoSel}
              onChange={(e) => setProyectoSel(e.target.value)}
              className="mt-1 w-full rounded-xl border border-navy/20 bg-white px-3 py-2.5 text-xs font-medium text-navy shadow-sm"
            >
              <option value="">-- Selecciona un proyecto en prioridad --</option>
              {PROYECTOS_PRIORIDAD.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.titulo} · ({p.area})
                </option>
              ))}
            </select>
            {proyectoSel && (
              <p className="mt-1.5 text-[11px] text-navy/70 bg-white/70 p-2.5 rounded-lg border border-gold/30">
                🎯 <b>Enfoque:</b> {PROYECTOS_PRIORIDAD.find((p) => p.id === proyectoSel)?.descripcion}
              </p>
            )}
          </div>

          {/* Formulario de Aporte y Compromiso */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                Disponibilidad de Tiempo:
              </label>
              <input
                type="text"
                value={tiempoDisp}
                onChange={(e) => setTiempoDisp(e.target.value)}
                placeholder="Ej. 10 horas semanales / Tardes y fines de semana"
                className="mt-1 w-full rounded-xl border border-navy/20 bg-white px-3 py-2 text-xs text-navy"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                Alcance Geográfico / Operativo:
              </label>
              <input
                type="text"
                value={alcance}
                onChange={(e) => setAlcance(e.target.value)}
                placeholder="Ej. Tarragona (presencial) / Online España / Florida"
                className="mt-1 w-full rounded-xl border border-navy/20 bg-white px-3 py-2 text-xs text-navy"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-navy uppercase tracking-wide">
              Resumen de cómo puedes aportar en esta área:
            </label>
            <textarea
              value={aporte}
              onChange={(e) => setAporte(e.target.value)}
              rows={3}
              placeholder="Describe tu experiencia previa, contactos, lugar físico disponible (si aplica a partner presencial) y tu nivel de compromiso con este proyecto..."
              className="mt-1 w-full rounded-xl border border-navy/20 bg-white p-3 text-xs text-navy"
            />
          </div>
        </div>
      )}

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
