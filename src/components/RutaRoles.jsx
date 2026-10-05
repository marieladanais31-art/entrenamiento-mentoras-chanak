import { ROL_POR_ID, SISTEMAS, tieneContactoDirecto, tieneContactoOcasional } from '../data/roles'
import { progresoPorRol, faltantesContactoMenores } from '../lib/calculos'
import { getModulo, numModulo } from '../data/curriculum'

// «TU RUTA» (avance por rol) y «TUS SISTEMAS». Cada rol activa sus módulos, sistemas y checklist.
export default function RutaRoles({ progreso, roles, contactoMenores, onAbrirModulo, onVerRol }) {
  const lista = roles.filter((id) => ROL_POR_ID[id])
  const directo = tieneContactoDirecto(lista, contactoMenores)
  const ocasional = !directo && tieneContactoOcasional(lista)
  const faltan = faltantesContactoMenores(progreso, lista, contactoMenores)

  // Sistemas = unión de los de sus roles, con el detalle de qué parte necesita cada uno
  const sistemas = {}
  for (const id of lista) {
    for (const [k, v] of Object.entries(ROL_POR_ID[id].sistemas || {})) {
      sistemas[k] = [...new Set([...(sistemas[k] || []), v])]
    }
  }

  const core = (() => {
    const mods = progreso?.modulos || {}
    const ids = ['T1.1', 'T1.2', 'T1.3', 'T1.4']
    const h = ids.filter((i) => ['completado', 'reconocido'].includes(mods[i]?.estado)).length
    return Math.round((h / ids.length) * 100)
  })()

  return (
    <div className="space-y-4">
      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Tu ruta</div>
        <p className="mt-1 text-xs text-navy/55">Cada rol asignado activa sus módulos obligatorios. Los permisos de cada rol no se mezclan.</p>
        <ul className="mt-3 space-y-2.5">
          <Fila etiqueta="Chanak Core" pct={core} sub="Identidad, estructura y funcionamiento" />
          {lista.map((id) => {
            const r = progresoPorRol(progreso, id, contactoMenores)
            if (!r) return null
            return (
              <Fila
                key={id}
                etiqueta={r.rol.nombre}
                pct={r.pct}
                sub={`${r.hechos}/${r.total} módulos${r.rutasPendientes.length ? ` · en preparación: ${r.rutasPendientes.join(', ')}` : ''}`}
                onClick={onVerRol ? () => onVerRol(id) : undefined}
              />
            )
          })}
          {lista.length === 0 && <li className="text-xs text-navy/55">Aún no tienes roles asignados. Tu administración los asignará.</li>}
        </ul>
        {faltan.length > 0 && (
          <div className="mt-4 rounded-xl border-l-4 border-coral bg-coral/8 px-4 py-3 text-xs leading-relaxed text-navy/80">
            <b>{directo ? 'Contacto directo con menores' : 'Safeguarding Awareness'}:</b>{' '}
            {directo
              ? 'es obligatorio completar Child & Adolescent Development, Safeguarding, Online Safety y Confidentiality/Data Protection. No se puede completar tu ruta ni emitir certificado sin ellos.'
              : 'tu función puede llevarte a eventos o contacto ocasional: completa Safeguarding Awareness.'}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {faltan.map((id) => (
                <button key={id} onClick={() => onAbrirModulo?.(id)} className="rounded-full bg-white px-2.5 py-1 font-semibold text-teal shadow-sm hover:underline">
                  {numModulo(id)} · {getModulo(id)?.titulo}
                </button>
              ))}
            </div>
          </div>
        )}
        {ocasional && faltan.length === 0 && (
          <p className="mt-3 text-[11px] text-navy/50">Safeguarding Awareness completado.</p>
        )}
      </section>

      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Tus sistemas</div>
        <p className="mt-1 text-xs text-navy/55">Según tu perfil. Usar un sistema es una competencia con práctica y validación, no solo un vídeo.</p>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {Object.entries(sistemas).map(([k, partes]) => (
            <li key={k} className="rounded-xl bg-cream px-3 py-2.5">
              <div className="text-sm font-bold text-navy">{SISTEMAS[k]?.nombre || k}</div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-teal">{partes.join(' · ')}</div>
              <div className="mt-0.5 text-xs leading-relaxed text-navy/65">{SISTEMAS[k]?.detalle}</div>
            </li>
          ))}
          {Object.keys(sistemas).length === 0 && <li className="text-xs text-navy/55">Se activarán al asignarte un rol.</li>}
        </ul>
      </section>
    </div>
  )
}

function Fila({ etiqueta, pct, sub, onClick }) {
  const Tag = onClick ? 'button' : 'div'
  return (
    <li>
      <Tag onClick={onClick} className={`block w-full text-left ${onClick ? 'hover:opacity-90' : ''}`}>
        <div className="flex items-center justify-between gap-2 text-sm">
          <span className="font-semibold text-navy">{etiqueta}</span>
          <span className="shrink-0 font-bold text-navy">{pct}%</span>
        </div>
        <div className="mt-1 h-2 overflow-hidden rounded-full bg-navy/10">
          <div className={`h-full rounded-full ${pct >= 100 ? 'bg-gold' : 'bg-teal'}`} style={{ width: `${pct}%` }} />
        </div>
        <div className="mt-0.5 text-[11px] text-navy/50">{sub}</div>
      </Tag>
    </li>
  )
}
