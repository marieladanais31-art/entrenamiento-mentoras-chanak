import { useState } from 'react'
import { ROLES, AREAS, ROL_POR_ID, rolesDesdeTipoAcceso, tieneContactoDirecto, modulosObligatorios } from '../data/roles'
import { asignarRol, quitarRol, actualizarPerfil } from '../lib/backend'

// Asignación formal de roles (ROLE ≠ PERSON). Cada rol activa módulos, sistemas, documentos,
// evaluaciones y permissions checklist. Los roles de representación exigen territorio (y programa).
export default function AsignarRoles({ perfil, filas, miId, onRecargar, migrado }) {
  const [abierto, setAbierto] = useState(false)
  const [nuevo, setNuevo] = useState('')
  const [territorio, setTerritorio] = useState('')
  const [programa, setPrograma] = useState('')
  const [ocupado, setOcupado] = useState(false)
  const [error, setError] = useState('')

  const asignados = filas || []
  const efectivos = asignados.length ? asignados.map((r) => r.rol) : rolesDesdeTipoAcceso(perfil.tipo_acceso)
  const derivados = asignados.length === 0
  const directo = tieneContactoDirecto(efectivos, perfil.contacto_menores ?? null)
  const def = ROL_POR_ID[nuevo]
  const pideTerritorio = def?.requiereAlcance?.includes('territorio')
  const pidePrograma = def?.requiereAlcance?.includes('programa')

  async function ejecutar(fn) {
    setError('')
    setOcupado(true)
    try {
      await fn()
      await onRecargar()
    } catch (e) {
      setError(e.message)
    } finally {
      setOcupado(false)
    }
  }

  async function agregar() {
    if (!nuevo) return
    if (pideTerritorio && !territorio.trim()) return setError('Indica el territorio de la autorización (p. ej., México o Alabama).')
    if (pidePrograma && !programa.trim()) return setError('Indica el programa de la autorización (p. ej., CHOOSE).')
    await ejecutar(async () => {
      await asignarRol(perfil.id, nuevo, miId, territorio.trim(), programa.trim())
      setNuevo('')
      setTerritorio('')
      setPrograma('')
    })
  }

  return (
    <div className="w-full pl-11">
      <button onClick={() => setAbierto(!abierto)} className="text-xs font-semibold text-teal hover:underline">
        {abierto ? '▾' : '▸'} Roles asignados ({efectivos.length}){derivados ? ' · derivados de tipo de acceso' : ''}
        {directo ? ' · contacto directo con menores' : ''}
      </button>

      {abierto && (
        <div className="mt-2 space-y-3 rounded-xl bg-white p-3 text-xs">
          {!migrado && (
            <p className="rounded-lg bg-amber-50 px-3 py-2 text-amber-900">
              Para asignar varios roles hay que ejecutar una vez <code>supabase/migracion_roles.sql</code> en Supabase. Mientras tanto, los roles se derivan del tipo de acceso.
            </p>
          )}
          {error && <p className="rounded-lg bg-coral/10 px-3 py-2 text-coral">{error}</p>}

          <ul className="space-y-1.5">
            {asignados.map((r) => (
              <li key={r.id} className="flex items-center justify-between gap-2 rounded-lg bg-cream px-3 py-1.5">
                <span className="font-medium text-navy">
                  {ROL_POR_ID[r.rol]?.nombre || r.rol}
                  {(r.territorio || r.programa) && <span className="text-navy/55"> · {[r.territorio, r.programa].filter(Boolean).join(' · ')}</span>}
                </span>
                <button onClick={() => ejecutar(() => quitarRol(r.id))} disabled={ocupado} className="text-coral hover:underline disabled:opacity-50">Quitar</button>
              </li>
            ))}
            {asignados.length === 0 && (
              <li className="rounded-lg bg-cream px-3 py-1.5 text-navy/60">
                Sin roles asignados formalmente. Se aplican los derivados: {efectivos.map((id) => ROL_POR_ID[id]?.nombre).join(' + ') || 'ninguno'}.
              </li>
            )}
          </ul>

          {migrado && (
            <div className="space-y-2 border-t border-navy/10 pt-3">
              <select value={nuevo} onChange={(e) => setNuevo(e.target.value)} className="w-full rounded-lg bg-cream px-2 py-1.5 text-navy">
                <option value="">Añadir rol…</option>
                {Object.entries(AREAS).map(([area, nombreArea]) => (
                  <optgroup key={area} label={nombreArea}>
                    {ROLES.filter((r) => r.area === area).map((r) => (
                      <option key={r.id} value={r.id}>{r.nombre}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
              {(pideTerritorio || pidePrograma) && (
                <div className="flex flex-wrap gap-2">
                  {pideTerritorio && (
                    <input value={territorio} onChange={(e) => setTerritorio(e.target.value)} placeholder="Territorio (país o estado)" className="min-w-0 flex-1 rounded-lg bg-cream px-2 py-1.5 text-navy" />
                  )}
                  {pidePrograma && (
                    <input value={programa} onChange={(e) => setPrograma(e.target.value)} placeholder="Programa" className="min-w-0 flex-1 rounded-lg bg-cream px-2 py-1.5 text-navy" />
                  )}
                </div>
              )}
              {def && (
                <p className="rounded-lg bg-teal/8 px-3 py-2 text-navy/70">
                  Este rol activa {modulosObligatorios([nuevo]).length} módulos obligatorios, sistemas ({Object.keys(def.sistemas).join(', ')}) y su permissions checklist. Rol asignado ≠ permisos mezclados: cada rol mantiene sus límites.
                </p>
              )}
              <button onClick={agregar} disabled={!nuevo || ocupado} className="rounded-lg bg-teal px-3 py-1.5 font-bold text-white disabled:opacity-50">Asignar rol</button>
            </div>
          )}

          <div className="border-t border-navy/10 pt-3">
            <label className="block text-navy/70">
              <span className="font-semibold">direct_child_contact</span>{' '}
              <select
                value={perfil.contacto_menores === true ? 'si' : perfil.contacto_menores === false ? 'no' : 'auto'}
                onChange={async (e) => {
                  const v = e.target.value === 'si' ? true : e.target.value === 'no' ? false : null
                  await ejecutar(() => actualizarPerfil(perfil.id, { contacto_menores: v }))
                }}
                disabled={ocupado}
                className="ml-1 rounded-lg bg-cream px-2 py-1 text-navy"
              >
                <option value="auto">Según sus roles</option>
                <option value="si">Sí (obligatorio: Desarrollo, Safeguarding, Online Safety, datos)</option>
                <option value="no">No</option>
              </select>
            </label>
            <p className="mt-1 text-[11px] text-navy/50">Si es «Sí», no podrá completar su ruta sin Child &amp; Adolescent Development, Safeguarding, Online Safety y Confidentiality/Data Protection.</p>
          </div>
        </div>
      )}
    </div>
  )
}
