import { ROLES_VIGENTES as ROLES, AREAS, PROYECTOS_PRIORIDAD, REPRESENTANTES_PAISES } from '../data/roles'

// Organigrama Funcional Chanak (cargos; con representantes territoriales y proyectos prioritarios).
export default function Organigrama({ onVolver, onVerRol }) {
  const porArea = (a) => ROLES.filter((r) => r.area === a)
  const academico = porArea('academico')
  const crecimiento = porArea('crecimiento')

  return (
    <div className="space-y-5">
      {onVolver && (
        <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">← Volver</button>
      )}
      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Chanak Core · 1.2</div>
        <h2 className="mt-1 text-xl font-bold text-navy">Organigrama Funcional Chanak</h2>
        <p className="mt-2 text-sm leading-relaxed text-navy/70">
          Describe funciones, no personas. Un rol puede asumirlo una misma persona junto con otros roles compatibles mientras la
          operación es pequeña; a medida que crece, las funciones se separan progresivamente.
        </p>

        <div className="mt-5 flex flex-col items-center gap-0 text-center text-xs">
          <Caja tono="navy" titulo="CHANAK TRAINUP EDUCATION, INC." sub="BOARD OF DIRECTORS" />
          <Linea />
          <div className="grid w-full max-w-xl gap-3 sm:grid-cols-2">
            <Caja tono="teal" titulo="SCHOOL DIRECTOR / HEAD OF SCHOOL" sub="Mariela Andrade" />
            <Caja tono="gold" titulo="DIRECTOR OF OPERATIONS & STRATEGIC PARTNERSHIPS" sub="Elías Vidal" />
          </div>
          <Linea />
          <div className="grid w-full gap-4 lg:grid-cols-2">
            <Columna titulo={AREAS.academico} dirige="Head of School" roles={academico} tono="teal" onVerRol={onVerRol} />
            <Columna titulo={AREAS.crecimiento} dirige="Director of Operations & Strategic Partnerships" roles={crecimiento} tono="gold" onVerRol={onVerRol} />
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-gold/40 bg-gold/10 p-5">
        <div className="text-sm font-bold text-navy">Rol ≠ Persona</div>
        <p className="mt-2 text-sm leading-relaxed text-navy/80">
          En Chanak un rol describe una función y un conjunto de responsabilidades. No significa necesariamente una persona
          diferente. En las etapas iniciales de apertura de un país, un estado, un programa, una pequeña cartera de alumnos o un
          proyecto, una misma persona puede asumir varios roles compatibles.
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-navy/80">
          <li><b>Grupo pequeño:</b> Mentor + Coordinator, si el número de estudiantes no justifica separar ambas funciones.</li>
          <li><b>Apertura de país:</b> Country Representative + Family Enrollment + Institutional Representative.</li>
          <li><b>Florida:</b> State/Program Representative + Family Enrollment + Grants Support.</li>
          <li><b>Programa Life Skills:</b> Mentor + Life Skills Facilitator.</li>
          <li><b>Clases de inglés:</b> Mentor + English Teacher.</li>
        </ul>
        <p className="mt-3 rounded-xl bg-white px-4 py-3 text-xs leading-relaxed text-navy/80">
          Esto <b>no</b> significa que los permisos se mezclen. Cada persona debe: (1) tener formalmente asignado cada rol;
          (2) haber completado la formación correspondiente; (3) respetar los límites de autoridad de cada función.
        </p>
      </section>

      {/* PROYECTOS EN PRIORIDAD (ÁREA ESTRATÉGICA · STANDALONE) */}
      <section className="rounded-2xl border-2 border-gold/50 bg-gold/10 p-5 shadow-sm space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-navy">Dirección de Operaciones y Alianzas (Elías Vidal)</span>
          <h3 className="mt-1 text-lg font-bold text-navy">🚀 Proyectos en Prioridad · Área Estratégica</h3>
          <p className="text-xs text-navy/75 leading-relaxed">
            Cartera de iniciativas prioritarias de Chanak que requieren coordinación, interlocución institucional, gestión de fondos o montaje de sedes.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {PROYECTOS_PRIORIDAD.map((pr) => (
            <div key={pr.id} className="rounded-xl bg-white p-4 shadow-xs border border-gold/30 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal bg-teal/10 px-2 py-0.5 rounded">
                  {pr.area}
                </span>
                <h4 className="mt-2 text-sm font-bold text-navy">{pr.titulo}</h4>
                <p className="mt-1 text-xs text-navy/70 leading-relaxed">{pr.descripcion}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-navy/10 text-[11px] text-navy/80">
                <span className="font-bold text-navy">Requisitos clave:</span>
                <ul className="mt-1 list-disc pl-4 space-y-0.5 text-navy/65">
                  {pr.requisitos.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REPRESENTANTES POR PAÍSES Y TERRITORIOS (ABAJO) */}
      <section className="rounded-2xl border-2 border-teal/40 bg-white p-5 shadow-sm space-y-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-teal">Estructura Territorial Oficial</span>
          <h3 className="mt-1 text-lg font-bold text-navy">🌍 Estructura por Países y Territorios</h3>
          <p className="text-xs text-navy/70 leading-relaxed">
            EducaFe (España) inactivo hasta febrero 2027 · México en lanzamiento · Panamá en proceso · Estados Unidos (todos los estados con cobertura y fondos).
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {REPRESENTANTES_PAISES.map((p) => {
            const badgeClase =
              p.badgeTono === 'coral'
                ? 'bg-coral/15 text-coral border-coral/30'
                : p.badgeTono === 'gold'
                ? 'bg-gold/25 text-navy border-gold/40'
                : 'bg-teal/15 text-teal border-teal/30'
            return (
              <div key={p.codigo} className="rounded-xl border border-navy/10 bg-cream/50 p-4 space-y-2">
                <div className="flex items-center justify-between border-b border-navy/10 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{p.bandera}</span>
                    <span className="font-bold text-navy text-sm">{p.pais}</span>
                  </div>
                  {p.estado && (
                    <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold border ${badgeClase}`}>
                      {p.estado}
                    </span>
                  )}
                </div>
                <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                  {p.territorios.map((t, idx) => (
                    <div key={idx} className="rounded-lg bg-white p-2.5 shadow-xs border border-navy/5">
                      <div className="flex items-start justify-between gap-1 text-xs">
                        <span className="font-bold text-teal shrink-0">{t.territorio}</span>
                        <span className="text-[11px] font-medium text-navy/60 text-right">{t.funcion}</span>
                      </div>
                      <div className="mt-1 text-xs font-semibold text-navy">
                        👤 {t.representantes.join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

function Caja({ titulo, sub, tono }) {
  const c = tono === 'navy' ? 'bg-navy text-cream' : tono === 'teal' ? 'bg-teal text-white' : 'bg-gold text-navy'
  return (
    <div className={`w-full rounded-xl px-4 py-3 shadow-sm ${c}`}>
      <div className="text-[11px] font-bold uppercase tracking-wide opacity-80">{sub}</div>
      <div className="mt-0.5 text-[13px] font-bold leading-snug">{titulo}</div>
    </div>
  )
}
const Linea = () => <div className="h-4 w-px bg-navy/30" aria-hidden />

function Columna({ titulo, dirige, roles, tono, nombreArea, onVerRol }) {
  const borde = tono === 'teal' ? 'border-teal/50' : 'border-gold/70'
  return (
    <div className={`rounded-xl border-2 ${borde} bg-cream p-3 text-left`}>
      <div className="text-[12px] font-bold uppercase tracking-wide text-navy">{nombreArea || titulo}</div>
      <div className="text-[11px] text-navy/55">Bajo: {dirige}</div>
      <ul className="mt-2 space-y-1.5">
        {roles.map((r) => (
          <li key={r.id}>
            <button onClick={() => onVerRol?.(r.id)} className="w-full rounded-lg bg-white px-3 py-1.5 text-left text-[12px] font-semibold text-navy shadow-sm hover:bg-teal/10">
              {r.nombre}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
