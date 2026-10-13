import { useState } from 'react'
import { GRUPOS, ESPECIALIDADES, PROYECTOS_PRIORIDAD, REQUISITOS_MODALIDADES } from '../data/roles'

// Paso 2 · «Elige tu rama». Mentor (y sus especialidades) se activa al guardar: acceso libre.
// Coordinador lo confirma Dirección Académica y Estratégico la Dirección de Operaciones y Alianzas;
// hasta entonces quedan «pendientes de confirmación». El Coordinador general exige la rama Mentor.
export default function EligeRama({ actual = [], datosPrevios = null, onGuardar, onCancelar }) {
  const habilitado = true
  const [sel, setSel] = useState(() => new Set(actual))
  const [proyectoSel, setProyectoSel] = useState(datosPrevios?.proyectoSel || '')
  const [tiempoDisp, setTiempoDisp] = useState(datosPrevios?.tiempoDisp || '')
  const [alcance, setAlcance] = useState(datosPrevios?.alcance || '')
  const [aporte, setAporte] = useState(datosPrevios?.aporte || '')
  const [formEstrategicoAbierto, setFormEstrategicoAbierto] = useState(
    () => Boolean(datosPrevios?.proyectoSel || ESPECIALIDADES.estrategico.some((e) => actual.includes(e.id)))
  )
  const [guardando, setGuardando] = useState(false)
  const [error, setError] = useState('')

  const tieneMentor = ESPECIALIDADES.mentor.some((e) => sel.has(e.id))
  const tieneEstrategico = ESPECIALIDADES.estrategico.some((e) => sel.has(e.id))

  function alternar(id) {
    const n = new Set(sel)
    if (n.has(id)) {
      n.delete(id)
    } else {
      n.add(id)
      // Si marca algo estratégico, abrir automáticamente el formulario
      if (ESPECIALIDADES.estrategico.some((e) => e.id === id)) {
        setFormEstrategicoAbierto(true)
      }
    }
    // Coordinador sin ninguna especialidad Mentor → se añade Mentor Off-Campus / Dual Diploma
    if (id === 'coordinator' && n.has('coordinator') && !ESPECIALIDADES.mentor.some((e) => n.has(e.id))) {
      n.add('mentor')
    }
    setSel(n)
  }

  async function guardar() {
    setError('')
    if (sel.size === 0) return setError('Elige al menos una opción.')
    if (sel.has('coordinator') && !tieneMentor) {
      return setError('Coordinador/a Off-Campus y Dual Diploma requiere también una especialidad de Mentor.')
    }
    if (tieneEstrategico && !proyectoSel) {
      return setError('Por favor, selecciona en el formulario de Estratégico en qué área o proyecto prioritario puedes involucrarte.')
    }
    setGuardando(true)
    try {
      const datosEstrategico = tieneEstrategico || proyectoSel
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
    <section className="rounded-2xl border-2 border-teal bg-white p-5 shadow-sm space-y-4">
      <div className="border-b border-navy/10 pb-3">
        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Paso 2 · Elige tu rama</div>
        <h2 className="mt-1 text-xl font-bold text-navy">¿Cómo puedes participar en Chanak?</h2>
        <p className="mt-1 text-sm leading-relaxed text-navy/70">
          Puedes marcar más de una opción si vas a combinar funciones. La rama <b>Mentor</b> se activa en cuanto guardas.
          <b> Coordinador</b> y <b>Estratégico</b> quedan pendientes hasta que los confirme la dirección indicada.
        </p>
      </div>

      <div className={`space-y-4 ${habilitado ? '' : 'pointer-events-none opacity-50'}`}>
        {Object.values(GRUPOS).map((g) => {
          const esEstrategico = g.id === 'estrategico'
          return (
            <fieldset
              key={g.id}
              className={`rounded-2xl p-4 border-2 transition ${
                esEstrategico ? 'bg-gold/10 border-gold/60' : 'bg-cream border-navy/10'
              }`}
            >
              <legend className="px-2 text-sm font-bold text-navy flex items-center gap-1.5">
                <span>{g.icono}</span>
                <span>{g.nombre}</span>
              </legend>
              <p className="mb-1 text-xs leading-relaxed text-navy/70">{g.descripcion}</p>
              <p className={`mb-3 text-[11px] font-semibold ${g.acceso === 'libre' ? 'text-teal' : 'text-navy/80'}`}>
                {g.acceso === 'libre' ? '✓ Acceso libre: se activa al guardar' : `⏳ Requiere confirmación de: ${g.confirma}`}
              </p>

              {/* Lista de especialidades del grupo */}
              <div className="space-y-2">
                {ESPECIALIDADES[g.id].map((e) => (
                  <label
                    key={e.id}
                    className={`flex cursor-pointer gap-3 rounded-xl border-2 bg-white px-3.5 py-2.5 transition ${
                      sel.has(e.id) ? (esEstrategico ? 'border-gold shadow-xs' : 'border-teal shadow-xs') : 'border-transparent hover:border-navy/20'
                    }`}
                  >
                    <input
                      type="checkbox"
                      className={`mt-1 h-4 w-4 ${esEstrategico ? 'accent-gold' : 'accent-teal'}`}
                      checked={sel.has(e.id)}
                      onChange={() => alternar(e.id)}
                      disabled={!habilitado}
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-navy">{e.nombre}</span>
                      <span className="block text-xs leading-relaxed text-navy/60">{e.detalle}</span>
                    </span>
                  </label>
                ))}
              </div>

              {/* SECCIÓN INLINE DEL FORMULARIO Y REQUISITOS ESTRATÉGICOS */}
              {esEstrategico && (
                <div className="mt-4 pt-3 border-t border-gold/40 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-navy flex items-center gap-1.5">
                      <span>📋</span> Formulario de Postulación y Requisitos Básicos
                    </span>
                    <button
                      type="button"
                      onClick={() => setFormEstrategicoAbierto(!formEstrategicoAbierto)}
                      className="rounded-lg bg-gold/30 px-3 py-1 text-xs font-bold text-navy hover:bg-gold/50 transition border border-gold/40"
                    >
                      {formEstrategicoAbierto ? 'Ocultar formulario ▲' : 'Completar / Ver formulario ▼'}
                    </button>
                  </div>

                  {(formEstrategicoAbierto || tieneEstrategico) && (
                    <div className="rounded-xl bg-white p-4 shadow-sm border border-gold/40 space-y-4">
                      {/* Cuadro de Requisitos Básicos por Modalidad */}
                      <div className="rounded-lg bg-cream/70 p-3 border border-navy/10 space-y-2">
                        <div className="text-xs font-bold text-navy uppercase tracking-wide flex items-center gap-1">
                          <span>📌</span> Requisitos Básicos para Colaborar en Estratégico:
                        </div>
                        <div className="grid gap-2 text-xs text-navy/85 sm:grid-cols-2">
                          <div className="rounded-lg bg-white p-2.5 border border-gold/50 shadow-xs">
                            <b className="text-navy block">📍 Partner Presencial (Learning Center / Sede):</b>
                            <span className="text-[11px] text-navy/75 block mt-0.5">
                              <b>Requisito indispensable:</b> Disponer de o gestionar un <b>lugar físico</b> para organizar reuniones presenciales y actividades con estudiantes y familias.
                            </span>
                          </div>
                          <div className="rounded-lg bg-white p-2.5 border border-teal/40 shadow-xs">
                            <b className="text-navy block">🤝 Alianzas Institucionales e Iglesias:</b>
                            <span className="text-[11px] text-navy/75 block mt-0.5">
                              Red de contactos activa con colegios, iglesias o comunidades, y respeto a los límites de autoridad Chanak.
                            </span>
                          </div>
                          <div className="rounded-lg bg-white p-2.5 border border-teal/40 shadow-xs">
                            <b className="text-navy block">💰 Grants y Proyectos (Walmart Spark / Plataformas):</b>
                            <span className="text-[11px] text-navy/75 block mt-0.5">
                              Capacidad de redacción formal de propuestas, justificación presupuestaria y medición de impacto social.
                            </span>
                          </div>
                          <div className="rounded-lg bg-white p-2.5 border border-teal/40 shadow-xs">
                            <b className="text-navy block">🏛️ Familias, Matrícula y Fondos Estatales (ESA):</b>
                            <span className="text-[11px] text-navy/75 block mt-0.5">
                              Manejo de plataformas (ClassWallet, Odyssey, EMA) y orientación familiar sin promesas de cobertura no verificadas.
                            </span>
                          </div>
                          <div className="rounded-lg bg-white p-2.5 border border-gold/40 shadow-xs sm:col-span-2">
                            <b className="text-navy block">📚 Diseño y Desarrollo de Currículum Físico Propio:</b>
                            <span className="text-[11px] text-navy/75 block mt-0.5">
                              Formación pedagógica K–12, diseño de unidades didácticas y alineación con cosmovisión bíblica y dominio.
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Selector de Proyecto en Prioridad */}
                      <div>
                        <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                          1. Área o Proyecto en Prioridad en el que puedes entrar: <span className="text-coral">*</span>
                        </label>
                        <select
                          value={proyectoSel}
                          onChange={(e) => setProyectoSel(e.target.value)}
                          className="mt-1 w-full rounded-xl border border-navy/20 bg-white px-3 py-2.5 text-xs font-semibold text-navy shadow-xs focus:border-teal focus:outline-none"
                        >
                          <option value="">-- Selecciona el proyecto prioritario --</option>
                          {PROYECTOS_PRIORIDAD.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.titulo} ({p.area})
                            </option>
                          ))}
                        </select>
                        {proyectoSel && (
                          <div className="mt-2 rounded-lg bg-gold/15 p-2.5 text-[11px] text-navy/85 border border-gold/30">
                            🎯 <b>Objetivo del proyecto:</b> {PROYECTOS_PRIORIDAD.find((p) => p.id === proyectoSel)?.descripcion}
                          </div>
                        )}
                      </div>

                      {/* Campos de Disponibilidad y Alcance */}
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div>
                          <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                            2. Disponibilidad de Tiempo:
                          </label>
                          <input
                            type="text"
                            value={tiempoDisp}
                            onChange={(e) => setTiempoDisp(e.target.value)}
                            placeholder="Ej. 10 horas semanales / Tardes y fines de semana"
                            className="mt-1 w-full rounded-xl border border-navy/20 bg-white px-3 py-2 text-xs text-navy focus:border-teal focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                            3. Alcance y Compromiso Territorial:
                          </label>
                          <input
                            type="text"
                            value={alcance}
                            onChange={(e) => setAlcance(e.target.value)}
                            placeholder="Ej. Tarragona (presencial) / Online España / Florida / México"
                            className="mt-1 w-full rounded-xl border border-navy/20 bg-white px-3 py-2 text-xs text-navy focus:border-teal focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Resumen de Aporte y Lugar Físico */}
                      <div>
                        <label className="block text-xs font-bold text-navy uppercase tracking-wide">
                          4. Resumen de cómo puedes aportar en esta área:
                        </label>
                        <textarea
                          value={aporte}
                          onChange={(e) => setAporte(e.target.value)}
                          rows={3}
                          placeholder="Describe tu experiencia previa, contactos, lugar físico disponible (si aplica a partner presencial) y tu nivel de compromiso con este proyecto..."
                          className="mt-1 w-full rounded-xl border border-navy/20 bg-white p-3 text-xs text-navy focus:border-teal focus:outline-none"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
            </fieldset>
          )
        })}
      </div>

      {error && (
        <p className="rounded-xl border-l-4 border-coral bg-coral/10 px-4 py-2.5 text-xs font-semibold text-coral">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-navy/10">
        <button
          onClick={guardar}
          disabled={!habilitado || guardando}
          className="rounded-xl bg-teal px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-teal/90 disabled:opacity-50"
        >
          {guardando ? 'Guardando…' : 'Guardar mi elección de rama'}
        </button>
        {onCancelar && (
          <button
            onClick={onCancelar}
            className="rounded-xl border border-navy/20 px-5 py-2.5 text-sm font-medium text-navy hover:bg-cream"
          >
            Cancelar
          </button>
        )}
      </div>
    </section>
  )
}
