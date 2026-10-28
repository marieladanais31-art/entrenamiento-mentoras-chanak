import { useState, useEffect, useCallback } from 'react'
import { BLOQUES, VERSION_CURRICULO, FECHA_ACTUALIZACION, numModulo } from '../data/curriculum'
import { VIDEOS, CATEGORIAS_VIDEO } from '../data/videos'
import VideoLeccion from './VideoLeccion'
import * as api from '../lib/backend'
import { resumenMentora, formatearFecha, iniciales, aplicarEquivalencias, calcularUltimaActividad, formatearUltimaActividad } from '../lib/calculos'
import GestionUsuarias from './GestionUsuarias'
import GestionCodigos from './GestionCodigos'
import ActividadAdmin from './ActividadAdmin'
import AccesosAdmin from './AccesosAdmin'
import { useIdioma } from '../i18n/idioma'
import { traducirBloques } from '../data/curriculum.en'
import { ROL_POR_ID, rolesDesdeTipoAcceso, obtenerEmailConocido, solicitudDe } from '../data/roles'
import ModalRespuestasUsuaria from './ModalRespuestasUsuaria'

export default function AdminView({ miPerfil, onVerUsuaria, onVerCertificado }) {
  const { t, idioma } = useIdioma()
  const [pestana, setPestana] = useState('usuarias') // 'usuarias' | 'codigos' | 'progreso' | 'retroactivo'
  const [perfiles, setPerfiles] = useState([])
  const [progresos, setProgresos] = useState({})
  const [rolesMapa, setRolesMapa] = useState(undefined) // null = migración de roles pendiente
  const [compromisosMapa, setCompromisosMapa] = useState(undefined)
  const [modalRespuestas, setModalRespuestas] = useState(null)
  const [actividad, setActividad] = useState([])
  const [errorActividad, setErrorActividad] = useState('')
  const [accesosMapa, setAccesosMapa] = useState({})
  const [errorAccesos, setErrorAccesos] = useState('')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  const cargar = useCallback(async () => {
    setError('')
    try {
      const [ps, prs, rm, cm, act, acc] = await Promise.all([api.listarPerfiles(), api.getProgresoTodas(), api.listarRoles().catch(() => null), api.listarCompromisos().catch(() => null), api.listarActividadFormacion().then((filas) => ({ filas })).catch((e) => ({ filas: [], error: e.message })), api.listarUltimosAccesos().then(mapa => ({ mapa })).catch(e => ({ mapa: {}, error: e.message }))])
      setAccesosMapa(acc.mapa)
      setErrorAccesos(acc.error || '')
      setActividad(act.filas)
      setErrorActividad(act.error || '')
      setPerfiles(ps)
      setProgresos(prs)
      setRolesMapa(rm)
      setCompromisosMapa(cm)
    } catch (e) {
      setError(e.message)
    } finally {
      setCargando(false)
    }
  }, [])

  useEffect(() => {
    cargar()
  }, [cargar])

  const activas = perfiles.filter((p) => p.estado === 'aprobada')
  const pendientes = perfiles.filter((p) => p.estado === 'pendiente').length

  return (
    <div className="space-y-5">
      <div className="rounded-2xl bg-navy p-5 text-cream shadow-sm">
        <h2 className="text-2xl font-bold">{t('admin.titulo')}</h2>
        <p className="mt-1 text-xs text-cream/70">
          {t('admin.sub', { nombre: miPerfil.nombre })}
        </p>
        <p className="mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] text-cream/80">
          {t('admin.version', { version: VERSION_CURRICULO, fecha: formatearFecha(FECHA_ACTUALIZACION) })}
        </p>
        <button onClick={() => setPestana('accesos')} className="mt-4 block min-h-12 rounded-xl bg-gold px-5 py-3 text-base font-bold text-navy">Ver últimos accesos de usuarios →</button>
      </div>

      {/* Pestañas */}
      <div className="flex gap-1 overflow-x-auto rounded-xl bg-white p-1 shadow-sm">
        {[
          ['usuarias', `${t('admin.tabUsuarias')}${pendientes ? ` (${pendientes})` : ''}`],
          ['accesos', 'Últimos accesos'],
          ['codigos', t('admin.tabCodigos')],
          ['progreso', t('admin.tabProgreso')],
          ['actividad', 'Actividad y pendientes'],
          ['videos', t('admin.tabVideos')],
          ['retroactivo', t('admin.tabRetroactivo')],
        ].map(([id, texto]) => (
          <button
            key={id}
            onClick={() => setPestana(id)}
            className={`min-w-max flex-1 rounded-lg px-4 py-3 text-base font-semibold transition ${
              pestana === id ? 'bg-navy text-cream' : 'text-navy/60 hover:bg-cream'
            }`}
          >
            {texto}
          </button>
        ))}
      </div>

      {error && (
        <p className="rounded-xl border-l-4 border-coral bg-coral/8 px-4 py-2.5 text-xs text-coral">
          {error}
        </p>
      )}

      {cargando ? (
        <p className="rounded-2xl bg-white px-4 py-8 text-center text-sm text-navy/50 shadow-sm">
          {t('admin.cargando')}
        </p>
      ) : (
        <>
          {pestana === 'usuarias' && (
            <GestionUsuarias
              perfiles={perfiles}
              miId={miPerfil.id}
              onRecargar={cargar}
              rolesMapa={rolesMapa}
              compromisosMapa={compromisosMapa}
              progresos={progresos}
              onVerUsuaria={onVerUsuaria}
              accesosMapa={accesosMapa}
              errorAccesos={errorAccesos}
            />
          )}

          {pestana === 'actividad' && <ActividadAdmin perfiles={perfiles} progresos={progresos} rolesMapa={rolesMapa} compromisosMapa={compromisosMapa} actividad={actividad} errorActividad={errorActividad} onActualizar={cargar} onVerUsuaria={onVerUsuaria} />}
          {pestana === 'accesos' && <AccesosAdmin perfiles={perfiles} accesosMapa={accesosMapa} errorAccesos={errorAccesos} actividad={actividad} errorActividad={errorActividad} progresos={progresos} rolesMapa={rolesMapa} compromisosMapa={compromisosMapa} onActualizar={cargar} onVerUsuaria={onVerUsuaria} />}

          {pestana === 'codigos' && (
            <GestionCodigos miId={miPerfil.id} />
          )}

          {pestana === 'progreso' && (
            <section>
              <h3 className="mb-1 font-bold text-navy">{t('admin.progresoTitulo')}</h3>
              <p className="mb-3 text-xs text-navy/55">
                {t('admin.progresoSub')}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {activas.map((p) => {
                  const asignados = (rolesMapa?.[p.id] || []).map((x) => x.rol)
                  const rolesP = asignados.length ? [...new Set(asignados)] : rolesDesdeTipoAcceso(p.tipo_acceso)
                  const r = resumenMentora(aplicarEquivalencias(progresos[p.id] || { modulos: {} }), { roles: rolesP, contactoMenores: p.contacto_menores ?? null })
                  const pct = Math.min(100, Math.round((r.horas / r.metaHorasModulos) * 100))
                  const correo = p.email || obtenerEmailConocido(p.id) || obtenerEmailConocido(p.nombre)
                  const ultActIso = calcularUltimaActividad(p, progresos[p.id], compromisosMapa?.[p.id])
                  const sol = solicitudDe(compromisosMapa?.[p.id]?.funciones)
                  const pMods = progresos[p.id]?.modulos || {}
                  const nNotas = Object.values(pMods).filter((m) => m && m.notas?.trim()).length
                  const nRespuestas = Object.values(pMods).filter((m) => m && (m.notas?.trim() || m.quiz || m.entregableUrl)).length

                  return (
                    <div key={p.id} className="rounded-2xl bg-white p-4 shadow-sm border border-navy/5 space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal text-xs font-bold text-white shrink-0">
                          {iniciales(p.nombre)}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-semibold text-navy">
                            {p.nombre}
                            {p.rol === 'admin' && (
                              <span className="ml-1 text-[12px] text-gold">🔑</span>
                            )}
                          </div>
                          <div className="text-xs font-medium text-teal">
                            📧 {correo || 'Sin email registrado'}
                          </div>
                          <div className="text-[12px] text-navy/45 mt-0.5">
                            {rolesP.length ? rolesP.map((id) => ROL_POR_ID[id]?.nombre || id).join(' + ') : 'Estratégico'}
                            {p.pais ? ` · ${p.pais}` : ''}
                            {p.programa ? ` · ${p.programa}` : ''}
                            {p.id_interno ? ` · ID ${p.id_interno}` : ''}
                          </div>
                        </div>
                        <div className="text-sm font-bold text-teal">{pct}%</div>
                      </div>

                      {/* Última actividad / conexión */}
                      <div className="text-[11px] text-navy/60 flex items-center gap-1.5" title={ultActIso ? new Date(ultActIso).toLocaleString('es-ES') : ''}>
                        <span>🕐</span>
                        <span>Última actividad:</span>
                        <b className="text-navy">{formatearUltimaActividad(ultActIso)}</b>
                      </div>

                      {/* Rama elegida tras Tronco Común */}
                      {sol ? (
                        <div className="text-[11px] font-semibold text-teal bg-teal/5 p-2 rounded-xl border border-teal/20">
                          <span className="block text-[10px] uppercase font-bold text-navy/60">🎯 Rama elegida tras Tronco Común</span>
                          <span className="text-navy font-bold">
                            {(sol.funciones || []).map((f) => ROL_POR_ID[f]?.nombreEs || ROL_POR_ID[f]?.nombre || f).join(' + ') || 'Rama registrada'}
                          </span>
                          {sol.fecha && <span className="text-[10px] text-navy/55 ml-1">({formatearFecha(sol.fecha.slice(0, 10))})</span>}
                        </div>
                      ) : (
                        <div className="text-[11px] text-navy/50 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200">
                          <span>⏳ Tronco Común en curso · Pendiente de elegir rama</span>
                        </div>
                      )}

                      <div className="text-[13px] text-navy/55 pt-1">
                        {t('admin.nivelResumen', {
                          nivel: r.nivelActual,
                          horas: r.horas,
                          meta: r.metaHoras,
                          n: r.completados,
                          palabra: r.completados === 1 ? t('admin.modulo') : t('admin.modulos'),
                        })}
                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-navy/10">
                        <div
                          className={`h-full rounded-full ${pct >= 100 ? 'bg-gold' : 'bg-teal'}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>

                      {/* Botón para ver respuestas escritas */}
                      <button
                        type="button"
                        onClick={() => setModalRespuestas({ perfil: p, correo, compromiso: compromisosMapa?.[p.id], progreso: progresos[p.id] })}
                        className={`w-full rounded-lg py-2 text-xs font-bold transition shadow-xs flex items-center justify-center gap-1.5 ${
                          nNotas > 0
                            ? 'bg-teal text-white hover:bg-teal/90'
                            : 'bg-navy/5 text-navy hover:bg-navy/10 border border-navy/10'
                        }`}
                        title="Ver y auditar respuestas escritas y reflexiones de esta usuaria"
                      >
                        <span>📝</span>
                        {nNotas > 0 ? `Ver Respuestas y Notas (${nNotas})` : `Expediente de Respuestas (${nRespuestas})`}
                      </button>

                      {(r.elegibleMentor || r.elegibleCoordinadora) && (
                        <button
                          onClick={() =>
                            onVerCertificado(p.id, p.nombre, r.elegibleCoordinadora ? 2 : 1, p.id_interno)
                          }
                          className="w-full rounded-lg bg-gold/15 py-2 text-[13px] font-bold text-gold transition hover:bg-gold/25"
                        >
                          {t('admin.emitirCert', {
                            tipo: r.elegibleCoordinadora ? 'Coordinator' : 'Mentor',
                          })}
                        </button>
                      )}
                      <button
                        onClick={() => onVerUsuaria(p.id, p.nombre, p.id_interno)}
                        className="w-full rounded-lg bg-navy/5 py-2 text-xs font-semibold text-navy transition hover:bg-navy/10"
                      >
                        {t('admin.abrirPanel')}
                      </button>
                    </div>
                  )
                })}
                {activas.length === 0 && (
                  <p className="rounded-2xl bg-white px-4 py-6 text-center text-xs text-navy/50 shadow-sm">
                    {t('admin.sinAprobadas')}
                  </p>
                )}
              </div>
            </section>
          )}

          {pestana === 'videos' && <GestionVideos />}

          {pestana === 'retroactivo' && (
            <section>
              <h3 className="mb-1 font-bold text-navy">{t('admin.retroTitulo')}</h3>
              <p className="mb-3 text-xs text-navy/55">
                {t('admin.retroSub')}
              </p>
              <div className="space-y-3">
                {activas.map((p) => (
                  <TablaRetroactiva
                    key={p.id}
                    perfil={p}
                    progreso={progresos[p.id] || { modulos: {} }}
                    onCambio={cargar}
                    idioma={idioma}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {modalRespuestas && (
        <ModalRespuestasUsuaria
          perfil={modalRespuestas.perfil}
          correo={modalRespuestas.correo}
          progreso={modalRespuestas.progreso || progresos[modalRespuestas.perfil?.id]}
          compromiso={modalRespuestas.compromiso || compromisosMapa?.[modalRespuestas.perfil?.id]}
          onCerrar={() => setModalRespuestas(null)}
        />
      )}
    </div>
  )
}

function TablaRetroactiva({ perfil, progreso, onCambio, idioma }) {
  const { t } = useIdioma()
  const bloques = traducirBloques(BLOQUES, idioma)
  const [abierto, setAbierto] = useState(false)
  const [marcando, setMarcando] = useState(null)
  const [fecha, setFecha] = useState(() => new Date().toISOString().slice(0, 10))
  const [ocupado, setOcupado] = useState(false)
  const mods = progreso.modulos || {}

  async function accion(fn) {
    setOcupado(true)
    try {
      await fn()
      await onCambio()
      setMarcando(null)
    } finally {
      setOcupado(false)
    }
  }

  return (
    <div className="rounded-2xl bg-white shadow-sm">
      <button
        onClick={() => setAbierto(!abierto)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-semibold text-navy">{perfil.nombre}</span>
        <span className="text-xs text-navy/50">{abierto ? t('admin.cerrar') : t('admin.abrirModulos')}</span>
      </button>
      {abierto && (
        <div className="border-t border-navy/5 px-4 pb-4">
          {bloques.map((b) => (
            <div key={b.id} className="mt-3">
              <div className="text-[13px] font-bold uppercase tracking-wide text-teal">
                {t('panel.bloque', { n: b.numero })} — {b.titulo}
              </div>
              <ul className="mt-1.5 space-y-1">
                {b.modulos.map((mod) => {
                  const p = mods[mod.id]
                  const completado = p?.estado === 'completado'
                  const esEste = marcando === mod.id
                  return (
                    <li
                      key={mod.id}
                      className="flex flex-wrap items-center gap-2 rounded-lg bg-cream/60 px-3 py-2 text-xs"
                    >
                      <span className="font-semibold text-navy">{numModulo(mod.id)}</span>
                      <span className="min-w-0 flex-1 truncate text-navy/70">{mod.titulo}</span>
                      <span className="text-navy/50">{mod.horas}h</span>
                      {completado ? (
                        <span className="flex items-center gap-2">
                          <span className="font-medium text-gold">
                            ✅ {formatearFecha(p.fechaCompletado)}
                          </span>
                          <button
                            disabled={ocupado}
                            onClick={() =>
                              accion(() =>
                                api.setEstadoModulo(perfil.id, mod.id, 'pendiente', p)
                              )
                            }
                            className="text-coral hover:underline disabled:opacity-50"
                          >
                            {t('admin.deshacer')}
                          </button>
                        </span>
                      ) : esEste ? (
                        <span className="flex items-center gap-1.5">
                          <input
                            type="date"
                            value={fecha}
                            max={new Date().toISOString().slice(0, 10)}
                            onChange={(e) => setFecha(e.target.value)}
                            className="rounded border border-navy/20 bg-white px-1.5 py-1 text-[13px]"
                          />
                          <button
                            disabled={ocupado}
                            onClick={() =>
                              accion(() =>
                                api.setEstadoModulo(perfil.id, mod.id, 'completado', p, fecha)
                              )
                            }
                            className="rounded bg-teal px-2 py-1 font-semibold text-white disabled:opacity-50"
                          >
                            {ocupado ? '…' : 'OK'}
                          </button>
                          <button
                            onClick={() => setMarcando(null)}
                            className="text-navy/50 hover:underline"
                          >
                            ✕
                          </button>
                        </span>
                      ) : (
                        <button
                          onClick={() => setMarcando(mod.id)}
                          className="rounded bg-navy/10 px-2 py-1 font-semibold text-navy hover:bg-navy/15"
                        >
                          {t('admin.marcar')}
                        </button>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// Biblioteca de vídeos: estado de cada uno de los 32 vídeos y edición de su URL.
// La URL guardada aquí (Supabase · tabla videos, modulo_id = id del vídeo) tiene
// prioridad sobre la `videoUrl` de src/data/videos.js.
function GestionVideos() {
  const { t } = useIdioma()
  const [guardados, setGuardados] = useState({})
  const [abierto, setAbierto] = useState(null)
  const cargar = useCallback(async () => setGuardados(await api.getVideos()), [])
  useEffect(() => {
    cargar()
  }, [cargar])
  const conUrl = VIDEOS.filter((v) => guardados[`${v.id}:0`]?.url || v.videoUrl).length
  return (
    <section>
      <h3 className="mb-1 font-bold text-navy">{t('admin.videosTitulo')}</h3>
      <p className="mb-3 text-xs text-navy/55">{t('admin.videosSub', { n: conUrl, total: VIDEOS.length })}</p>
      {CATEGORIAS_VIDEO.map((cat) => (
        <div key={cat} className="mb-4">
          <div className="mb-1.5 text-[13px] font-bold uppercase tracking-wide text-teal">{cat}</div>
          <ul className="space-y-1.5">
            {VIDEOS.filter((v) => v.bloque === cat).map((v) => {
              const g = guardados[`${v.id}:0`]
              const url = g?.url || v.videoUrl
              return (
                <li key={v.id} className="rounded-xl bg-white p-3 shadow-sm border border-navy/5">
                  <button onClick={() => setAbierto(abierto === v.id ? null : v.id)} className="flex w-full items-center gap-2 text-left text-xs">
                    <span className="font-mono font-bold text-navy shrink-0">{v.id}</span>
                    <span className="min-w-0 flex-1 font-medium text-navy/85">{v.titulo}</span>
                    <span className="text-navy/45 shrink-0">{numModulo(v.modulo)} · {v.duracion}</span>
                    <span className={url ? 'text-teal font-bold' : 'text-coral'}>{url ? '●' : '○'}</span>
                  </button>

                  <div className="mt-2 flex flex-wrap items-center justify-between gap-1.5 pt-1.5 border-t border-navy/5">
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${url ? 'bg-teal/10 text-teal' : 'bg-gold/20 text-navy'}`}>
                      {url ? '✓ Vídeo activo' : '➕ Sin vídeo · Haz clic para añadir enlace de YouTube'}
                    </span>
                    <button
                      onClick={() => setAbierto(abierto === v.id ? null : v.id)}
                      className="text-[11px] font-bold text-teal hover:underline"
                    >
                      {abierto === v.id ? 'Cerrar edición ▲' : 'Gestionar enlace ▼'}
                    </button>
                  </div>

                  {abierto === v.id && (
                    <div className="mt-3 pt-2 border-t border-navy/10">
                      {v.id.startsWith('V09') && (
                        <div className="mb-3 rounded-lg border border-gold/40 bg-gold/10 p-2.5 text-xs text-navy/85 font-medium">
                          ⚠️ <b>REQUISITO OBLIGATORIO:</b> La elección de A.C.E. requiere para coordinadores por lo menos una formación presencial de una semana.
                        </div>
                      )}
                      <p className="mb-2 text-xs text-navy/70">{v.descripcion}</p>
                      <VideoLeccion
                        video={url ? { url, nota: g?.nota || '' } : null}
                        esAdmin
                        onGuardar={async (u, n) => {
                          await api.guardarVideo(v.id, 0, u, n)
                          await cargar()
                        }}
                        onBorrar={async () => {
                          await api.borrarVideo(v.id, 0)
                          await cargar()
                        }}
                      />
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </section>
  )
}
