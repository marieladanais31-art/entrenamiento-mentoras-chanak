import { ROL_POR_ID, SISTEMAS, CONTACTO, MODULOS_CONTACTO_DIRECTO, MODULOS_SAFEGUARDING_AWARENESS, AREAS } from '../data/roles'
import { getModulo, numModulo } from '../data/curriculum'

const ETIQUETA_CONTACTO = {
  [CONTACTO.DIRECTO]: 'Contacto directo con menores · Child & Adolescent Development, Safeguarding, Online Safety y protección de datos son obligatorios',
  [CONTACTO.OCASIONAL]: 'Contacto ocasional posible (eventos, reuniones) · Safeguarding Awareness',
  [CONTACTO.NINGUNO]: 'Sin contacto con menores en su función (documentación administrativa). Si su función cambia, el administrador puede marcar contacto directo.',
}

// Perfil de un rol: función, unidad, sistemas, módulos, límites y checklist de permisos.
export default function RolPerfil({ rolId, progreso, onVolver, onAbrirModulo }) {
  const rol = ROL_POR_ID[rolId]
  if (!rol) return null
  const mods = progreso?.modulos || {}
  const requeridos = [...new Set([...rol.modulos, ...(rol.contacto === CONTACTO.DIRECTO ? MODULOS_CONTACTO_DIRECTO : rol.contacto === CONTACTO.OCASIONAL ? MODULOS_SAFEGUARDING_AWARENESS : [])])]
  const existentes = requeridos.filter((id) => getModulo(id))
  const estado = (id) => mods[id]?.estado

  return (
    <div className="space-y-4">
      <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">← Volver</button>

      <section className="rounded-2xl bg-navy p-6 text-cream shadow-sm">
        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-gold">{AREAS[rol.area]}</div>
        <h2 className="mt-1 text-xl font-bold leading-tight">{rol.nombre}</h2>
        <div className="text-sm text-cream/70">{rol.nombreEs}</div>
        <p className="mt-3 text-sm text-cream/85"><b>Unidad principal:</b> {rol.unidad}</p>
        {rol.modalidades?.length > 0 && <p className="mt-1 text-xs text-cream/65">Modalidades: {rol.modalidades.join(' · ')}</p>}
        {rol.mensaje && <p className="mt-3 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold">{rol.mensaje}</p>}
      </section>

      <Caja titulo="Contacto con menores">
        <p className="text-xs leading-relaxed text-navy/75">{ETIQUETA_CONTACTO[rol.contacto]}</p>
      </Caja>

      {rol.domina?.length > 0 && (
        <Caja titulo="Debe dominar">
          <Chips items={rol.domina} />
        </Caja>
      )}

      <Caja titulo="Sistemas">
        <ul className="grid gap-2 sm:grid-cols-2">
          {Object.entries(rol.sistemas).map(([k, v]) => (
            <li key={k} className="rounded-xl bg-cream px-3 py-2">
              <div className="text-sm font-bold text-navy">{SISTEMAS[k]?.nombre || k}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-teal">{v}</div>
            </li>
          ))}
        </ul>
      </Caja>

      <Caja titulo={`Módulos obligatorios (${existentes.length})`}>
        <ul className="space-y-1.5">
          {existentes.map((id) => {
            const m = getModulo(id)
            const e = estado(id)
            return (
              <li key={id}>
                <button onClick={() => onAbrirModulo?.(id)} className="flex w-full items-center gap-2 rounded-lg bg-cream px-3 py-2 text-left text-xs hover:bg-navy/5">
                  <span className="shrink-0">{e === 'completado' ? '✅' : e === 'reconocido' ? '♻️' : e === 'en_curso' ? '🔵' : '⚪'}</span>
                  <span className="min-w-0 flex-1 font-medium text-navy">{numModulo(id)} · {m.titulo}</span>
                </button>
              </li>
            )
          })}
        </ul>
        {rol.rutasPendientes?.length > 0 && (
          <p className="mt-3 rounded-xl bg-gold/15 px-3 py-2 text-xs leading-relaxed text-navy/80">
            <b>En preparación:</b> {rol.rutasPendientes.join(' · ')}. Hasta que se incorporen a la app, tu ruta de este rol no se considera completa.
          </p>
        )}
      </Caja>

      {(rol.escala?.length > 0 || rol.noPuede?.length > 0) && (
        <Caja titulo="Autoridad y escalamiento">
          {rol.noPuede?.length > 0 && (
            <div className="mb-2">
              <div className="text-[11px] font-bold uppercase text-coral">No puede</div>
              <Chips items={rol.noPuede} tono="coral" />
            </div>
          )}
          {rol.escala?.length > 0 && (
            <div>
              <div className="text-[11px] font-bold uppercase text-teal">Escala</div>
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-xs text-navy/75">{rol.escala.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          )}
        </Caja>
      )}

      <Caja titulo="Permissions checklist">
        <ul className="space-y-1 text-xs text-navy/75">
          {rol.checklist.map((c) => <li key={c}>☐ {c}</li>)}
        </ul>
        <p className="mt-2 text-[11px] text-navy/50">Antes de ejercer el rol: asignación formal, formación completada y límites de autoridad entendidos.</p>
      </Caja>

      {rol.nota && <p className="rounded-xl border border-gold/50 bg-gold/10 px-4 py-3 text-xs leading-relaxed text-navy/80">{rol.nota}</p>}

      <Caja titulo="Documentos en Drive">
        <ul className="list-disc space-y-0.5 pl-5 text-xs text-navy/75">{rol.documentos.map((d) => <li key={d}>{d}</li>)}</ul>
        <p className="mt-2 text-[11px] text-navy/50">Carpeta: 10_PEOPLE_ROLES_TRAINING (fuente operativa de este perfil).</p>
      </Caja>
    </div>
  )
}

function Caja({ titulo, children }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="text-sm font-bold text-navy">{titulo}</h3>
      <div className="mt-2">{children}</div>
    </section>
  )
}
function Chips({ items, tono }) {
  return (
    <div className="mt-1 flex flex-wrap gap-1.5">
      {items.map((x) => (
        <span key={x} className={`rounded-full px-3 py-1 text-[12px] font-medium ${tono === 'coral' ? 'bg-coral/12 text-coral' : 'bg-teal/10 text-navy'}`}>{x}</span>
      ))}
    </div>
  )
}
