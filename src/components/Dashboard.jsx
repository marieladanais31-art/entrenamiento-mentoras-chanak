import { useState } from 'react'
import { BLOQUES, numModulo, getModulo, BIBLIOTECA, urlCarpeta, CARPETA_FINAL_URL } from '../data/curriculum'
import { GRUPOS, ROL_POR_ID, TRONCO_COMUN, MODULOS_DESARROLLO, grupoDe, modulosObligatorios, tieneContactoDirecto } from '../data/roles'
import EligeRama from './EligeRama'
import { FUNCIONES } from '../data/funciones'
import { resumenMentora, estadoBloque, horasBloqueCompletadas } from '../lib/calculos'
import ProgressRing from './ui/ProgressRing'
import EstadoBadge from './ui/EstadoBadge'
import { useIdioma } from '../i18n/idioma'
import { traducirBloques } from '../data/curriculum.en'
import RutaRoles from './RutaRoles'
import PlanFormacion from './PlanFormacion'

// Inicio → Paso 1 Tronco común → Paso 2 Elige tu rama → Paso 3 Tu ruta → Módulo
export default function Dashboard({
  mentora,
  progreso,
  esAdmin,
  viendoOtra,
  onAbrirBloque,
  onAbrirModulo,
  onVerHoras,
  onVerCatalogo,
  onVerOperativa,
  onVerGuias,
  onVerCoordinacion,
  onVerProgramas,
  onVerCurso,
  onVerCertificado,
  roles = [],
  origenRoles = 'asignados',
  rolesPendientes = [],
  rolesAsignados = [],
  solicitud = null,
  onElegirRama,
  contactoMenores = null,
  onVerOrganigrama,
  onVerRol,
  onVerMatriz,
  onVerEstrategia,
  onVerFuncion,
  onVerVistas,
}) {
  const { t, idioma } = useIdioma()
  const [cambiandoRama, setCambiandoRama] = useState(false)
  const r = resumenMentora(progreso, { roles, contactoMenores })
  const bloques = traducirBloques(BLOQUES, idioma)
  const mods = progreso?.modulos || {}
  const hecho = (id) => ['completado', 'reconocido'].includes(mods[id]?.estado)
  const existe = (id) => Boolean(getModulo(id))

  // ── Ramas activas ──
  const grupos = [...new Set(roles.map((id) => grupoDe(id)).filter(Boolean))]
  const esMentorOCoord = grupos.includes('mentor') || grupos.includes('coordinator')
  const esCoord = grupos.includes('coordinator')
  const esEstrategico = grupos.includes('estrategico')

  // ── Paso 1: tronco común (+ desarrollo infantil si hay contacto directo) ──
  const directo = tieneContactoDirecto(roles, contactoMenores)
  const troncoIds = [...TRONCO_COMUN, ...(directo ? MODULOS_DESARROLLO : [])].filter(existe)
  const troncoHechos = troncoIds.filter(hecho).length

  // ── Paso 3: módulos propios de la rama (sin repetir el tronco) ──
  const obligatorios = roles.length ? modulosObligatorios(roles, contactoMenores).filter(existe) : troncoIds
  const ramaIds = obligatorios.filter((id) => !troncoIds.includes(id))
  const ramaHechos = ramaIds.filter(hecho).length
  const ramaPorBloque = bloques
    .map((b) => ({ ...b, propios: b.modulos.filter((m) => ramaIds.includes(m.id)) }))
    .filter((b) => b.propios.length)

  // ── Contadores y horas sobre SU ruta (no sobre el catálogo completo) ──
  const todos = [...new Set([...troncoIds, ...ramaIds])]
  const completados = todos.filter(hecho).length
  const enCurso = todos.filter((id) => mods[id]?.estado === 'en_curso').length
  const horasMeta = sumaHoras(todos)
  const horasHechas = sumaHoras(todos.filter(hecho))

  const siguienteId =
    todos.find((id) => mods[id]?.estado === 'en_curso') ||
    troncoIds.find((id) => !hecho(id)) ||
    ramaIds.find((id) => !hecho(id))
  const siguiente = siguienteId ? getModulo(siguienteId) : null

  const nombreRamas = grupos.map((g) => GRUPOS[g]?.nombre).join(' + ')
  const especialidades = roles.map((id) => ROL_POR_ID[id]?.nombreEs || ROL_POR_ID[id]?.nombre).filter(Boolean)
  const mostrarSelector = !viendoOtra && onElegirRama && ((origenRoles === 'ninguno' && !rolesPendientes.length) || cambiandoRama)

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden rounded-2xl border-t-4 border-[#6EA236] bg-[#133854] p-6 text-white shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#88C448]">
              {idioma === 'es' ? 'FORMACIÓN DEL EQUIPO CHANAK' : 'CHANAK TEAM TRAINING'}
            </div>
            <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {esAdmin && !viendoOtra ? 'Administración · Vista completa' : grupos.length ? `Rama ${nombreRamas}` : 'Tronco común'}
            </h1>
          </div>
          <img
            src="/logo-chanak.png"
            alt="Chanak International Academy"
            className="hidden h-14 w-14 rounded-xl bg-white p-1.5 shadow-sm sm:block"
          />
        </div>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/85">
          Todas las personas empiezan por el tronco común y pueden participar en la rama <b>Mentor</b> (Off-Campus y Dual Diploma, inglés,
          Life Skills, Extensión Local o evaluación educativa). <b>Coordinador</b> lo confirma Dirección Académica y <b>Estratégico</b>,
          la Dirección de Operaciones y Alianzas. Tus avances guardados se conservan.
        </p>
      </section>

      {/* Cabecera de progreso de SU ruta */}
      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <ProgressRing valor={horasHechas} meta={horasMeta || 1} />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-navy">{mentora.nombre}</h2>
            <p className="text-sm text-navy/60">
              {especialidades.length ? especialidades.join(' · ') : 'Sin rama todavía'}
              {rolesPendientes.length > 0 && ` · ${rolesPendientes.length} pendiente(s) de confirmación`}
              {viendoOtra && t('panel.vistaAdmin')}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <Stat n={completados} etiqueta={t('panel.completados')} color="text-gold" />
              <Stat n={enCurso} etiqueta={t('panel.enCurso')} color="text-teal" />
              <Stat n={todos.length - completados - enCurso} etiqueta={t('panel.pendientes')} color="text-navy/50" />
            </div>
            <p className="mt-2 text-[11px] text-navy/50">{fmt(horasHechas)} h de {fmt(horasMeta)} h de referencia en módulos · {todos.length} módulos en tu ruta</p>
          </div>
        </div>
      </section>

      {siguiente && !viendoOtra && (
        <button onClick={() => onAbrirModulo(siguiente.id)} className="flex w-full items-center gap-3 rounded-2xl bg-teal px-4 py-4 text-left text-white shadow-sm transition hover:bg-teal/90">
          <span className="text-2xl" aria-hidden>▶</span>
          <span className="min-w-0 flex-1">
            <span className="block text-[12px] font-bold uppercase tracking-wide text-white/75">
              {mods[siguiente.id]?.estado === 'en_curso' ? t('panel.continuar') : t('panel.siguiente')}
            </span>
            <span className="block text-sm font-bold">{numModulo(siguiente.id)} · {siguiente.titulo}</span>
          </span>
          <span className="shrink-0">→</span>
        </button>
      )}

      {/* MI TRABAJO · guía operativa de cada función activa */}
      {roles.some((id) => FUNCIONES[id]) && onVerFuncion && (
        <section className="rounded-2xl border-2 border-gold bg-white p-5 shadow-sm">
          <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-gold">Mi trabajo</div>
          <p className="mt-1 text-sm text-navy/70">Tu rutina, qué hacer en cada caso, a quién escalar y las pantallas que usas.</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {roles.filter((id) => FUNCIONES[id]).map((id) => (
              <button key={id} onClick={() => onVerFuncion(id)} className="rounded-xl bg-cream px-4 py-3 text-left hover:bg-gold/15">
                <span className="block text-sm font-bold text-navy">{FUNCIONES[id].titulo} →</span>
                <span className="block text-xs text-navy/60">{FUNCIONES[id].rutina.length} tareas de rutina · {FUNCIONES[id].casos.length} casos</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* PASO 1 · TRONCO COMÚN */}
      <Paso numero={1} titulo="Tronco común · para todas las personas" hechos={troncoHechos} total={troncoIds.length}
        sub="Quién es Chanak, el modelo 60/20/20, Off-Campus, Dual Diploma y Life Skills, safeguarding y protección de datos.">
        <ListaModulos ids={troncoIds} mods={mods} onAbrirModulo={onAbrirModulo} />
        {directo && <p className="mt-2 text-[11px] text-navy/55">Incluye Desarrollo infantil y adolescente (Bloque 9), obligatorio por tener contacto directo con menores.</p>}
      </Paso>

      {/* PASO 2 · RAMA */}
      {mostrarSelector ? (
        <EligeRama
          actual={solicitud?.funciones || []}
          onGuardar={async (f, extra) => { await onElegirRama(f, extra); setCambiandoRama(false) }}
          onCancelar={cambiandoRama ? () => setCambiandoRama(false) : undefined}
        />
      ) : (
        <section className="rounded-2xl border border-teal/30 bg-white p-5 shadow-sm">
          <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Paso 2 · Tu rama</div>
          {grupos.length ? (
            <>
              <p className="mt-1 text-lg font-bold text-navy">{nombreRamas}</p>
              <p className="text-sm text-navy/70">{especialidades.join(' · ')}</p>
              <ul className="mt-2 space-y-1 text-xs">
                {roles.map((id) => (
                  <li key={id} className="rounded-lg bg-teal/10 px-3 py-1.5 text-navy/80">
                    ✓ {ROL_POR_ID[id]?.nombreEs || ROL_POR_ID[id]?.nombre} · {rolesAsignados.includes(id) ? 'asignada por dirección' : 'activa (acceso libre)'}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="mt-1 text-sm text-navy/70">{viendoOtra ? 'Esta persona todavía no tiene rama activa.' : 'Todavía no tienes rama activa.'}</p>
          )}
          {rolesPendientes.length > 0 && (
            <ul className="mt-2 space-y-1 text-xs">
              {rolesPendientes.map((id) => (
                <li key={id} className="rounded-lg bg-gold/15 px-3 py-1.5 text-navy">
                  ⏳ {ROL_POR_ID[id]?.nombreEs || ROL_POR_ID[id]?.nombre} · pendiente de confirmación por {GRUPOS[grupoDe(id)]?.confirma}
                </li>
              ))}
            </ul>
          )}
          {!viendoOtra && onElegirRama && (
            <button onClick={() => setCambiandoRama(true)} className="mt-2 text-xs font-bold text-teal hover:underline">{solicitud ? 'Cambiar mi elección →' : 'Elegir o ampliar mi rama →'}</button>
          )}
        </section>
      )}

      {/* PASO 3 · RUTA DE LA RAMA */}
      {ramaIds.length > 0 && (
        <Paso numero={3} titulo={`Tu ruta · ${nombreRamas}`} hechos={ramaHechos} total={ramaIds.length}
          sub={esCoord ? 'Coordinator Track se desbloquea al completar los módulos de Mentor.' : 'Módulos propios de tu rama, sin repetir el tronco común.'}>
          <div className="space-y-3">
            {ramaPorBloque.map((b) => {
              const bloqueado = b.nivel === 2 && !r.nivel1Completo && !esAdmin
              return (
                <div key={b.id} className={`rounded-xl bg-cream p-3 ${bloqueado ? 'opacity-55' : ''}`}>
                  <button onClick={bloqueado ? undefined : () => onAbrirBloque(b.id)} className="text-left text-[12px] font-bold uppercase tracking-wide text-teal hover:underline">
                    {t('panel.bloque', { n: b.numero })} · {b.titulo} {bloqueado ? '🔒' : '→'}
                  </button>
                  {!bloqueado && <ListaModulos ids={b.propios.map((m) => m.id)} mods={mods} onAbrirModulo={onAbrirModulo} />}
                </div>
              )
            })}
          </div>
        </Paso>
      )}

      {/* Herramientas de la rama */}
      <section className="space-y-3">
        <h3 className="font-bold text-navy">Herramientas de trabajo</h3>
        {esMentorOCoord && (
          <button onClick={onVerProgramas} className="w-full rounded-2xl border-2 border-teal bg-white p-5 text-left shadow-sm hover:bg-teal/5">
            <span className="block text-sm font-bold uppercase text-teal">Guía operativa · Mentor y Coordinador</span>
            <span className="mt-1 block text-xl font-bold text-navy">Atender estudiantes y acompañar familias →</span>
            <span className="mt-2 block text-sm text-navy/70">Off-Campus · Dual Diploma · Clases de inglés · Clases de Life Skills</span>
          </button>
        )}
        {esEstrategico && (
          <button onClick={onVerEstrategia} className="w-full rounded-2xl border-2 border-gold bg-white p-5 text-left shadow-sm hover:bg-gold/5">
            <span className="block text-sm font-bold uppercase text-gold">Guía operativa · Estratégico</span>
            <span className="mt-1 block text-xl font-bold text-navy">De la oportunidad al resultado documentado →</span>
            <span className="mt-2 block text-sm text-navy/70">Familias y matrícula · Google Ads · ESA y fondos estatales · Grants · Iglesias · EducaFe (inactiva hasta feb. 2027)</span>
          </button>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          {(esMentorOCoord || esEstrategico) && <Acceso icono="👪" titulo="Manuales para familias" sub="Off-Campus y Dual Diploma · PDF y editable" onClick={onVerGuias} tono="navy" />}
          {esMentorOCoord && <Acceso icono="🖥" titulo="Operativa SIS" sub="Matrícula, expediente y familias paso a paso" onClick={onVerOperativa} tono="navy" />}
          {(esCoord || esAdmin) && <Acceso icono="🧾" titulo="Coordinación SIS" sub="Ocho pantallas y práctica de revisión" onClick={onVerCoordinacion} tono="navy" />}
          {(esEstrategico || esCoord || esAdmin) && <Acceso icono="🌎" titulo="ESA y fondos estatales" sub="Matriz de programas por estado (uso interno)" onClick={onVerMatriz} tono="navy" />}
          {onVerVistas && <Acceso icono="🖥" titulo="Vistas del sistema" sub="SIS, Dual Diploma y Life Skills con datos ficticios" onClick={onVerVistas} tono="teal" />}
          <Acceso icono="🧭" titulo="Organización y perfiles" sub="Organigrama y funciones de las tres ramas" onClick={onVerOrganigrama} tono="navy" />
          <Acceso icono="▶" titulo="Vídeos oficiales" sub="Presentación y Mastery Learning" onClick={onVerCatalogo} tono="navy" />
          <Acceso icono="📘" titulo={t('panel.presentacion')} sub={t('panel.presentacionSub')} onClick={onVerCurso} tono="teal" />
          <Acceso icono="📋" titulo={t('panel.registroHoras')} sub={t('panel.registroHorasSub', { horas: r.horas })} onClick={onVerHoras} tono="teal" />
        </div>
      </section>

      {/* Avance por rol y sistemas */}
      {roles.length > 0 && (
        <RutaRoles progreso={progreso} roles={roles} contactoMenores={contactoMenores} onAbrirModulo={onAbrirModulo} onVerRol={onVerRol} />
      )}

      {r.reconocidos > 0 && (
        <p className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900">
          ♻️ {t('panel.reconocidos', { n: r.reconocidos })}
        </p>
      )}

      {/* Certificación */}
      {r.elegibleCoordinadora ? (
        <BannerCert titulo={t('panel.elegibleCoord')} detalle={t('panel.elegibleCoordSub')} onVer={() => onVerCertificado(2)} />
      ) : r.elegibleMentor ? (
        <BannerCert titulo={t('panel.elegibleMentor')} detalle={t('panel.elegibleMentorSub')} onVer={() => onVerCertificado(1)} />
      ) : null}
      {esMentorOCoord && (
        <details className="rounded-2xl bg-white p-4 shadow-sm">
          <summary className="cursor-pointer text-sm font-bold text-navy">🎓 Certificación Mentor 180 h / Coordinator 300 h</summary>
          <div className="mt-3"><PlanFormacion /></div>
        </details>
      )}

      {/* Biblioteca práctica de documentos oficiales (Drive) */}
      <details className="rounded-2xl bg-white p-4 shadow-sm">
        <summary className="cursor-pointer text-sm font-bold text-navy">📂 {t('panel.biblioteca')}</summary>
        <p className="mt-2 text-xs text-navy/60">{t('panel.bibliotecaSub')}</p>
        <ul className="mt-3 space-y-2.5">
          {BIBLIOTECA.map((b) => (
            <li key={b.carpeta} className="rounded-xl bg-cream px-3 py-2.5">
              <a href={urlCarpeta(b.carpeta)} target="_blank" rel="noreferrer" className="text-xs font-bold text-teal hover:underline">{b.carpeta} →</a>
              <div className="mt-1 text-xs leading-relaxed text-navy/70"><b>Mentor:</b> {b.mentor}</div>
              <div className="text-xs leading-relaxed text-navy/70"><b>Coordinator:</b> {b.coordinador}</div>
            </li>
          ))}
        </ul>
        <a href={CARPETA_FINAL_URL} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold text-teal hover:underline">{t('panel.bibliotecaTodo')} →</a>
      </details>

      {/* Administración: catálogo completo de bloques */}
      {esAdmin && (
        <details className="rounded-2xl bg-white p-4 shadow-sm">
          <summary className="cursor-pointer text-sm font-bold text-navy">🗂 Catálogo completo de bloques (solo administración)</summary>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {bloques.map((b) => (
              <TarjetaBloque key={b.id} esAdmin bloque={b} estado={estadoBloque(progreso, b)} horasHechas={horasBloqueCompletadas(progreso, b)} onClick={() => onAbrirBloque(b.id)} />
            ))}
          </div>
        </details>
      )}
    </div>
  )
}

function sumaHoras(ids) {
  return ids.reduce((s, id) => s + (getModulo(id)?.horas || 0), 0)
}
const fmt = (n) => (Math.round(n * 100) / 100).toLocaleString('es-ES')

function Paso({ numero, titulo, sub, hechos, total, children }) {
  const pct = total ? Math.round((hechos / total) * 100) : 0
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-teal">Paso {numero}</div>
          <h3 className="text-lg font-bold text-navy">{titulo}</h3>
          <p className="text-xs text-navy/60">{sub}</p>
        </div>
        <span className="shrink-0 text-sm font-bold text-navy">{hechos}/{total}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-navy/10">
        <div className={`h-full rounded-full ${pct >= 100 ? 'bg-gold' : 'bg-teal'}`} style={{ width: `${pct}%` }} />
      </div>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function ListaModulos({ ids, mods, onAbrirModulo }) {
  return (
    <ul className="mt-1 space-y-1.5">
      {ids.map((id) => {
        const m = getModulo(id)
        const estado = mods[id]?.estado || 'pendiente'
        return (
          <li key={id}>
            <button onClick={() => onAbrirModulo(id)} className="flex w-full items-center gap-2 rounded-lg bg-white px-3 py-2 text-left text-sm shadow-sm hover:bg-teal/5">
              <span className="w-10 shrink-0 text-xs font-bold text-teal">{numModulo(id)}</span>
              <span className="min-w-0 flex-1 text-navy">{m?.titulo}</span>
              <EstadoBadge estado={estado} />
            </button>
          </li>
        )
      })}
    </ul>
  )
}

function Acceso({ icono, titulo, sub, onClick, tono }) {
  const c = tono === 'teal' ? 'border-teal/25 bg-teal/6 hover:bg-teal/12' : 'border-navy/15 bg-white hover:bg-cream'
  return (
    <button onClick={onClick} className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition ${c}`}>
      <span className="text-xl" aria-hidden>{icono}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-bold text-navy">{titulo}</span>
        <span className="block text-sm text-navy/60">{sub}</span>
      </span>
      <span className="shrink-0 text-teal">→</span>
    </button>
  )
}

function Stat({ n, etiqueta, color }) {
  return (
    <div className="rounded-xl bg-cream px-2 py-2">
      <div className={`text-lg font-bold ${color}`}>{n}</div>
      <div className="text-[12px] font-medium text-navy/60">{etiqueta}</div>
    </div>
  )
}

function BannerCert({ titulo, detalle, onVer }) {
  const { t } = useIdioma()
  return (
    <div className="rounded-2xl border-2 border-gold bg-gold/12 px-4 py-4">
      <div className="text-sm leading-relaxed text-navy">
        🎓 <b>{titulo}</b>
        <div className="mt-0.5 text-xs text-navy/70">{detalle}</div>
      </div>
      <button onClick={onVer} className="mt-3 w-full rounded-xl bg-gold py-2.5 text-sm font-bold text-navy transition hover:bg-gold/90">
        {t('panel.verCertificado')}
      </button>
    </div>
  )
}

function TarjetaBloque({ esAdmin, bloque, estado, horasHechas, onClick }) {
  const { t } = useIdioma()
  const pct = bloque.horas > 0 ? Math.round((horasHechas / bloque.horas) * 100) : 0
  const bloqueado = estado === 'bloqueado'
  return (
    <button
      onClick={onClick}
      disabled={!onClick}
      className={`rounded-2xl bg-white p-4 text-left shadow-sm transition ${bloqueado ? 'opacity-55' : 'hover:shadow-md active:scale-[0.99]'}`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="text-[13px] font-bold uppercase tracking-wider text-teal">
          {t('panel.bloque', { n: bloque.numero })} · {bloque.categoria}
        </div>
        <EstadoBadge estado={estado} />
      </div>
      <div className="mt-1 text-sm font-semibold leading-snug text-navy">{bloque.titulo}</div>
      <div className="mt-2 flex items-center justify-between text-xs text-navy/55">
        <span>{t('panel.modulos', { n: bloque.modulos.length })}</span>
        {esAdmin && <span>{horasHechas}/{bloque.horas}h</span>}
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy/10">
        <div className={`h-full rounded-full ${pct >= 100 ? 'bg-gold' : 'bg-teal'}`} style={{ width: `${pct}%` }} />
      </div>
    </button>
  )
}
