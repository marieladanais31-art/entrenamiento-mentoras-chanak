import { useState } from 'react'
import { GRUPOS, funcionesDe, ROL_POR_ID, rolesEfectivos, solicitudDe, grupoDe, accesoLibre, tieneContactoDirecto, modulosObligatorios, PROYECTOS_PRIORIDAD } from '../data/roles'
import { asignarRol, quitarRol, actualizarPerfil } from '../lib/backend'

// Asignación formal de roles (ROLE ≠ PERSON). Cada rol activa módulos, sistemas, documentos,
// evaluaciones y permissions checklist. Los roles de representación exigen territorio (y programa).
export default function AsignarRoles({ perfil, filas, miId, onRecargar, migrado, funcionesCompromiso, perfiles = [] }) {
  const [abierto, setAbierto] = useState(false)
  const [grupo, setGrupo] = useState('')
  const [nuevo, setNuevo] = useState('')
  const [territorio, setTerritorio] = useState('')
  const [programa, setPrograma] = useState('')
  const [ocupado, setOcupado] = useState(false)
  const [error, setError] = useState('')

  const asignados = filas || []
  const solicitud = solicitudDe(funcionesCompromiso)
  const { roles: efectivos, origen, pendientes } = rolesEfectivos(asignados.map((r) => r.rol), solicitud)
  const derivados = origen === 'solicitud'
  // Mentor elegido por la persona: ya activo (acceso libre); se puede formalizar.
  const libresSinAsignar = (solicitud?.funciones || []).filter((f) => accesoLibre(f) && !asignados.some((a) => a.rol === f))
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
      setGrupo('')
      setTerritorio('')
      setPrograma('')
    })
  }

  return (
    <div className="w-full pl-11">
      <section aria-label="Elección y asignaciones de rama" className="my-3 space-y-3 rounded-xl border border-navy/15 bg-white p-4 text-sm text-navy">
        <h4 className="font-bold">Elección de la persona y roles asignados</h4>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h5 className="font-semibold text-teal">Elección de la persona</h5>
            {funcionesCompromiso === undefined ? <p>Información de elección no disponible.</p> : solicitud ? (
              <>
                <p className="mt-1">{solicitud.funciones.map((f) => ROL_POR_ID[f]?.nombre || f).join(' · ')}</p>
                <p className="mt-1 text-navy/65">Última elección guardada: {fechaRegistro(solicitud.fecha)}</p>
                <ul className="mt-2 space-y-1">
                  {solicitud.funciones.map((f) => <li key={f}>
                    {ROL_POR_ID[f]?.nombre || f}: <b>{asignados.some((r) => r.rol === f) ? 'Elegida y asignada' : accesoLibre(f) ? 'Activa por acceso libre' : 'Pendiente de confirmación'}</b>
                  </li>)}
                </ul>
              </>
            ) : <p className="mt-1">Sin elección registrada en «Elige tu rama».</p>}
          </div>
          <div>
            <h5 className="font-semibold text-teal">Roles asignados por Administración</h5>
            {!migrado ? <p>Información de asignaciones no disponible.</p> : asignados.length ? (
              <ul className="mt-1 space-y-3">
                {asignados.map((r) => {
                  const autor = perfiles.find((p) => p.id === r.asignado_por)
                  return <li key={r.id}>
                    <div className="font-semibold">{ROL_POR_ID[r.rol]?.nombre || r.rol}</div>
                    <div>{r.asignado_por ? `Asignado por: ${autor?.nombre || 'Administrador no disponible'}` : 'Asignación anterior · autor no registrado'}</div>
                    <div className="text-navy/65">Fecha de asignación: {fechaRegistro(r.asignado_en)}</div>
                    <div className="text-navy/65">{solicitud?.funciones.includes(r.rol) ? 'Coincide con la elección registrada.' : 'Sin elección de esta función registrada.'}</div>
                  </li>
                })}
              </ul>
            ) : <p className="mt-1">Sin roles asignados formalmente.</p>}
          </div>
        </div>
        <p className="border-t border-navy/10 pt-2 text-navy/65">La elección y la asignación son registros diferentes. Coincidir no demuestra si la asignación fue una confirmación o un alta directa. Se muestra la última elección guardada, no un historial completo.</p>
        {solicitud?.datosEstrategico && (
          <details className="rounded-lg bg-cream p-3">
            <summary className="cursor-pointer font-semibold">Ver postulación estratégica guardada</summary>
            <dl className="mt-2 space-y-1">
              <div><dt className="font-semibold">Proyecto</dt><dd>{PROYECTOS_PRIORIDAD.find((p) => p.id === solicitud.datosEstrategico.proyectoSel)?.titulo || solicitud.datosEstrategico.proyectoSel || 'No indicado'}</dd></div>
              <div><dt className="font-semibold">Disponibilidad</dt><dd>{solicitud.datosEstrategico.tiempoDisp || 'No indicada'}</dd></div>
              <div><dt className="font-semibold">Alcance</dt><dd>{solicitud.datosEstrategico.alcance || 'No indicado'}</dd></div>
              <div><dt className="font-semibold">Aporte</dt><dd className="whitespace-pre-wrap">{solicitud.datosEstrategico.aporte || 'No indicado'}</dd></div>
            </dl>
          </details>
        )}
      </section>
      <button onClick={() => setAbierto(!abierto)} className="text-xs font-semibold text-teal hover:underline">
        {abierto ? '▾' : '▸'} Roles ({efectivos.length}){derivados ? ' · Mentor por acceso libre' : origen === 'ninguno' ? ' · sin rama activa' : ''}{pendientes.length ? ` · ${pendientes.length} por confirmar` : ''}
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
                  {GRUPOS[r.grupo]?.nombre || r.grupo} · {ROL_POR_ID[r.rol]?.nombre || r.rol}
                  {(r.territorio || r.programa) && <span className="text-navy/55"> · {[r.territorio, r.programa].filter(Boolean).join(' · ')}</span>}
                </span>
                <button onClick={() => ejecutar(() => quitarRol(r.id))} disabled={ocupado} className="text-coral hover:underline disabled:opacity-50">Quitar</button>
              </li>
            ))}
            {asignados.length === 0 && (
              <li className="rounded-lg bg-cream px-3 py-1.5 text-navy/60">
                Sin roles asignados formalmente. {solicitud ? 'Su ruta provisional es la rama que eligió.' : 'Solo ve el tronco común hasta elegir rama.'}
              </li>
            )}
          </ul>

          {pendientes.length > 0 && migrado && (
            <div className="space-y-2 rounded-lg border border-gold/60 bg-gold/10 px-3 py-2">
              <div className="font-semibold text-navy">Solicitudes por confirmar{solicitud?.fecha ? ` (${solicitud.fecha.slice(0, 10)})` : ''}:</div>
              {pendientes.map((f) => (
                <div key={f} className="flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white px-3 py-1.5">
                  <span className="text-navy/80">
                    {GRUPOS[grupoDe(f)]?.nombre} · {ROL_POR_ID[f]?.nombre}
                    <span className="block text-[11px] text-navy/55">Confirma: {GRUPOS[grupoDe(f)]?.confirma}</span>
                  </span>
                  <button onClick={() => ejecutar(() => asignarRol(perfil.id, f, miId))} disabled={ocupado} className="rounded-lg bg-teal px-3 py-1 font-bold text-white disabled:opacity-50">
                    ✓ Confirmar
                  </button>
                </div>
              ))}

              {solicitud?.datosEstrategico && (
                <div className="mt-2 rounded-lg border border-gold/40 bg-white p-2.5 text-[11px] text-navy/85 space-y-1">
                  <div className="font-bold text-navy text-xs">📋 Formulario Estratégico Presentado:</div>
                  <div><b>Proyecto:</b> {PROYECTOS_PRIORIDAD.find((p) => p.id === solicitud.datosEstrategico.proyectoSel)?.titulo || solicitud.datosEstrategico.proyectoSel}</div>
                  {solicitud.datosEstrategico.tiempoDisp && <div><b>Disponibilidad:</b> {solicitud.datosEstrategico.tiempoDisp}</div>}
                  {solicitud.datosEstrategico.alcance && <div><b>Alcance:</b> {solicitud.datosEstrategico.alcance}</div>}
                  {solicitud.datosEstrategico.aporte && <div><b>Aporte:</b> {solicitud.datosEstrategico.aporte}</div>}
                </div>
              )}
            </div>
          )}
          {libresSinAsignar.length > 0 && migrado && (
            <div className="rounded-lg bg-teal/8 px-3 py-2 text-navy/75">
              Activas por acceso libre (Mentor): {libresSinAsignar.map((f) => ROL_POR_ID[f]?.nombre).join(' + ')}.
              <button onClick={() => ejecutar(async () => { for (const f of libresSinAsignar) await asignarRol(perfil.id, f, miId) })} disabled={ocupado} className="ml-2 font-bold text-teal hover:underline disabled:opacity-50">
                Formalizar asignación
              </button>
            </div>
          )}

          {migrado && (
            <div className="space-y-2 border-t border-navy/10 pt-3">
              <select value={grupo} onChange={(e) => { const g = e.target.value; setGrupo(g); setNuevo(GRUPOS[g]?.funcionPorDefecto || '') }} className="w-full rounded-lg bg-cream px-2 py-1.5 text-navy">
                <option value="">Añadir rol…</option>
                {Object.values(GRUPOS).map((g) => (
                  <option key={g.id} value={g.id}>{g.nombre}</option>
                ))}
              </select>
              {grupo && (
                <>
                  <p className="text-navy/60">{GRUPOS[grupo].descripcion}</p>
                  <select value={nuevo} onChange={(e) => setNuevo(e.target.value)} className="w-full rounded-lg bg-cream px-2 py-1.5 text-navy">
                    {!GRUPOS[grupo].funcionPorDefecto && <option value="">Elige la función…</option>}
                    {funcionesDe(grupo).map((r) => (
                      <option key={r.id} value={r.id}>{r.nombre}{r.id === GRUPOS[grupo].funcionPorDefecto ? ' (general)' : ''}</option>
                    ))}
                  </select>
                </>
              )}
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

function fechaRegistro(valor) {
  if (!valor) return 'No registrada'
  const fecha = new Date(valor)
  if (Number.isNaN(fecha.getTime())) return 'No registrada'
  return new Intl.DateTimeFormat('es-ES', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Madrid' }).format(fecha) + ' (España)'
}
