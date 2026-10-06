import { useState, useEffect } from 'react'
import { getModulo, RECURSOS_GENERALES, FUENTES, numModulo, urlCarpeta } from '../data/curriculum'
import { getContenido } from '../data/contenido'
import { getVideo, videosComplementarios } from '../data/videos'
import { formatearFecha } from '../lib/calculos'
import EstadoBadge from './ui/EstadoBadge'
import KnowledgeCheck from './KnowledgeCheck'
import VideoLeccion from './VideoLeccion'
import { useIdioma } from '../i18n/idioma'
import { traducirModulo, traducirRecursos } from '../data/curriculum.en'

// Recorrido del módulo: Vídeo → Lectura → Práctica → Knowledge Check → Evidencia → Completado
const PASOS = ['video', 'lectura', 'practica', 'quiz', 'evidencia', 'completado']

export default function ModuleView({ moduloId, progresoModulo: p, videos, esAdmin, acciones, onVolver, onVerCatalogo }) {
  const { t, idioma } = useIdioma()
  const modulo = traducirModulo(getModulo(moduloId), idioma)
  const contenido = getContenido(moduloId, idioma)
  const recursos = traducirRecursos(RECURSOS_GENERALES, idioma)
  const estado = p?.estado || 'pendiente'
  const videoDef = getVideo(modulo?.video)
  // La URL guardada por la administración (Supabase) tiene prioridad sobre videos.js
  const videoGuardado = videoDef ? videos?.[`${videoDef.id}:0`] : null
  const video = videoGuardado?.url
    ? videoGuardado
    : videoDef?.videoUrl
      ? { url: videoDef.videoUrl, subtitulos: videoDef.subtitulos, nota: '' }
      : null

  const [paso, setPaso] = useState(0)
  const [fecha, setFecha] = useState(() => new Date().toISOString().slice(0, 10))
  const [notas, setNotas] = useState(p?.notas || '')
  const [notasGuardadas, setNotasGuardadas] = useState(false)
  const [subiendoArchivo, setSubiendoArchivo] = useState(false)

  useEffect(() => {
    setNotas(p?.notas || '')
    setPaso(0)
  }, [moduloId])

  if (!modulo) return null

  const quizAprobado = Boolean(p?.quiz?.aprobado)
  const tieneQuiz = contenido?.quiz?.length > 0
  const puedeCompletar = esAdmin || !tieneQuiz || quizAprobado
  const hechos = {
    video: estado !== 'pendiente',
    lectura: estado !== 'pendiente',
    practica: Boolean(p?.notas),
    quiz: quizAprobado,
    evidencia: Boolean(p?.notas) || Boolean(p?.entregableNombre),
    completado: estado === 'completado',
  }

  async function irA(i) {
    setPaso(i)
    if (estado === 'pendiente' && i > 0) await acciones.setEstado(moduloId, 'en_curso')
    document.getElementById('pasos-modulo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  async function guardarNotas() {
    await acciones.setNotas(moduloId, notas)
    setNotasGuardadas(true)
    setTimeout(() => setNotasGuardadas(false), 2000)
  }

  async function subir(file) {
    if (!file) return
    if (file.size > 15 * 1024 * 1024) return alert(t('modulo.errorTamano'))
    setSubiendoArchivo(true)
    try {
      await acciones.subirEntregable(moduloId, file)
    } catch (err) {
      alert(t('modulo.errorSubida') + ': ' + err.message)
    }
    setSubiendoArchivo(false)
  }

  const actual = PASOS[paso]

  return (
    <div className="space-y-4">
      <button onClick={onVolver} className="text-sm font-medium text-teal hover:underline">
        {t('modulo.volverBloque')}
      </button>

      <details className="rounded-2xl bg-white p-4 shadow-sm">
        <summary className="cursor-pointer text-sm font-bold text-navy">Videos de apoyo y procedimientos · {videosComplementarios(moduloId).length}</summary>
        <p className="mt-2 text-xs text-navy/60">Resúmenes narrados y procedimientos sin avatar. Los gráficos explican el circuito; las demostraciones de sistemas se identifican por título. La lectura, práctica y evidencias completan la formación.</p>
        <div className="mt-3 space-y-4">{videosComplementarios(moduloId).map((v) => <div key={v.id}>
          <h3 className="mb-2 text-sm font-bold text-teal">{v.titulo} · {v.duracion}</h3>
          <VideoLeccion video={{ url: v.videoUrl, subtitulos: v.subtitulos }} />
        </div>)}</div>
        <button className="mt-3 inline-block text-xs font-bold text-teal underline" onClick={onVerCatalogo}>Catálogo completo · 87 videos →</button>
      </details>

      {/* ── Ficha ── */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-bold text-teal">
              {t('bloque.modulo', { id: numModulo(modulo.id) })} · {modulo.bloqueTitulo}
              {modulo.porRol && <span className="ml-1 text-gold">· {t('panel.porRol')}</span>}
            </div>
            <h2 className="mt-1 text-lg font-bold leading-snug text-navy">{modulo.titulo}</h2>
          </div>
          <EstadoBadge estado={estado} />
        </div>
        {contenido && <p className="mt-3 text-sm leading-relaxed text-navy/70">{contenido.resumen}</p>}
        {estado === 'reconocido' && (
          <p className="mt-3 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-[13px] leading-relaxed text-amber-900">
            ♻️ {t('modulo.reconocido')}
          </p>
        )}
        {contenido?.sinTraducir && (
          <p className="mt-2 rounded-lg bg-gold/10 px-3 py-2 text-[12px] text-navy/65">🌐 {t('modulo.traduccionPendiente')}</p>
        )}
        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
          <Dato etiqueta={t('modulo.horas')} valor={`${modulo.horas} h`} />
          <Dato etiqueta={t('modulo.evaluacion')} valor={modulo.evaluacion} />
          <Dato etiqueta={t('modulo.modalidad')} valor={modulo.modalidad} />
          <Dato etiqueta={t('modulo.completado')} valor={p?.fechaCompletado ? formatearFecha(p.fechaCompletado) : '—'} />
        </dl>
        {modulo.fuentes?.length > 0 && (
          <div className="mt-4">
            <div className="text-[12px] font-semibold uppercase tracking-wide text-navy/45">{t('modulo.fuentes')}</div>
            <ul className="mt-1.5 space-y-1">
              {modulo.fuentes.map((f) => {
                const nombre = FUENTES[f] || f
                return (
                  <li key={f} className="text-xs">
                    <a href={urlCarpeta(nombre.split(' · ')[0])} target="_blank" rel="noreferrer" className="text-teal hover:underline">
                      📂 {nombre}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
        {contenido?.desglose && <Desglose d={contenido.desglose} horas={modulo.horas} t={t} />}
      </div>

      {/* ── Stepper ── */}
      <nav id="pasos-modulo" className="no-print scroll-mt-20 overflow-x-auto rounded-2xl bg-white p-2 shadow-sm" aria-label={t('modulo.pasos')}>
        <ol className="flex min-w-max gap-1">
          {PASOS.map((k, i) => (
            <li key={k}>
              <button
                onClick={() => irA(i)}
                aria-current={paso === i ? 'step' : undefined}
                className={`flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition ${
                  paso === i ? 'bg-navy text-cream' : hechos[k] ? 'bg-teal/10 text-teal' : 'text-navy/55 hover:bg-cream'
                }`}
              >
                <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[11px] ${paso === i ? 'bg-gold text-navy' : hechos[k] ? 'bg-teal text-white' : 'bg-navy/10'}`}>
                  {hechos[k] ? '✓' : i + 1}
                </span>
                {t(`paso.${k}`)}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── 1 · Vídeo ── */}
      {actual === 'video' && (
        <Seccion titulo={videoDef ? `🎬 ${videoDef.id} · ${videoDef.titulo}` : t('paso.video')} sub={videoDef ? `${videoDef.bloque} · ${videoDef.duracion}` : ''}>
          {videoDef && <p className="mb-3 text-sm text-navy/70">{videoDef.descripcion}</p>}
          <VideoLeccion
            video={video}
            esAdmin={esAdmin}
            onGuardar={(url, nota) => acciones.guardarVideo(videoDef.id, 0, url, nota)}
            onBorrar={() => acciones.borrarVideo(videoDef.id, 0)}
          />
          {videoDef?.guion && (
            <div className="mt-4 rounded-xl bg-cream px-4 py-3">
              <div className="text-[12px] font-bold uppercase tracking-wide text-navy/45">{t('modulo.ideasClave')}</div>
              <ul className="mt-2 space-y-1.5">
                {videoDef.guion.map((g, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-navy/75"><span className="text-teal">▸</span>{g}</li>
                ))}
              </ul>
            </div>
          )}
          <Siguiente onClick={() => irA(1)} t={t} />
        </Seccion>
      )}

      {/* ── 2 · Lectura ── */}
      {actual === 'lectura' && contenido && (
        <Seccion titulo={`📖 ${t('paso.lectura')}`}>
          <h4 className="text-sm font-bold text-navy">{t('modulo.objetivos')}</h4>
          <ul className="mt-2 space-y-2">
            {contenido.objetivos.map((o, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-navy/75">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal/12 text-[12px] font-bold text-teal">{i + 1}</span>
                {o}
              </li>
            ))}
          </ul>
          {contenido.lecciones.map((lec, i) => (
            <div key={i} className="mt-5">
              <h4 className="text-sm font-bold text-navy">{lec.titulo}</h4>
              <div className="mt-2 space-y-2.5">
                {lec.guion.map((par, j) => (
                  <p key={j} className="text-sm leading-relaxed text-navy/80">{par}</p>
                ))}
              </div>
            </div>
          ))}
          <Siguiente onClick={() => irA(2)} t={t} />
        </Seccion>
      )}

      {/* ── 3 · Práctica ── */}
      {actual === 'practica' && contenido?.practica && (
        <Seccion titulo={`🛠 ${t('paso.practica')}`} sub={t('modulo.practicaSub')}>
          <div className="rounded-xl border-l-4 border-gold bg-gold/8 px-4 py-3 text-sm leading-relaxed text-navy">
            <b>{t('modulo.situacion')}:</b> {contenido.practica.situacion}
          </div>
          <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-navy/80">
            {contenido.practica.preguntas.map((q, i) => <li key={i}>{q}</li>)}
          </ol>
          <div className="mt-3 rounded-xl bg-navy/5 px-4 py-3 text-xs leading-relaxed text-navy/70">
            <b>{t('modulo.regla')}</b> {t('modulo.reglaTxt')}
          </div>
          {contenido.guia && (
            <div className="mt-4 rounded-xl border border-teal/25 bg-teal/5 px-4 py-3">
              <div className="text-sm font-bold text-navy">{contenido.guia.titulo}</div>
              <ol className="mt-2 space-y-2.5">
                {(contenido.guia.pasos || []).map((g, i) => (
                  <li key={i} className="text-sm leading-relaxed text-navy/80">
                    <b className="text-navy">{i + 1}. {g.titulo}.</b> {g.detalle}
                  </li>
                ))}
              </ol>
            </div>
          )}
          <label className="mt-4 block text-xs font-semibold text-navy">{t('modulo.tuRespuesta')}</label>
          <textarea
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            rows={6}
            placeholder={t('modulo.notasPh')}
            className="mt-1.5 w-full rounded-xl border border-navy/15 bg-cream/50 px-3 py-2.5 text-sm leading-relaxed placeholder:text-navy/35 focus:border-teal focus:outline-none"
          />
          <button onClick={guardarNotas} className="mt-2 rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-cream hover:bg-navy/90">
            {notasGuardadas ? t('modulo.guardado') : t('modulo.guardarNotas')}
          </button>
          <details className="mt-3 rounded-xl bg-teal/5 px-4 py-3 text-sm text-navy/75">
            <summary className="cursor-pointer font-semibold text-teal">{t('modulo.verCriterio')}</summary>
            <p className="mt-2 leading-relaxed">{contenido.practica.criterio}</p>
          </details>
          <Siguiente onClick={() => irA(3)} t={t} />
        </Seccion>
      )}

      {/* ── 4 · Knowledge Check ── */}
      {actual === 'quiz' && (
        <>
          {tieneQuiz ? (
            <KnowledgeCheck quiz={contenido.quiz} resultadoPrevio={p?.quiz} onGuardar={(res) => acciones.setQuiz(moduloId, res)} />
          ) : (
            <Seccion titulo={t('quiz.titulo')}><p className="text-sm text-navy/60">—</p></Seccion>
          )}
          <Siguiente onClick={() => irA(4)} t={t} />
        </>
      )}

      {/* ── 5 · Evidencia ── */}
      {actual === 'evidencia' && (
        <Seccion titulo={`📁 ${t('paso.evidencia')}`}>
          {contenido?.evidencia && (
            <p className="rounded-xl bg-cream px-4 py-3 text-sm leading-relaxed text-navy/80">
              <b>{t('modulo.entregaEsperada')}:</b> {contenido.evidencia}
            </p>
          )}
          <p className="mt-2 text-[12px] text-coral">⚠️ {t('modulo.sinPII')}</p>
          <label className="mt-4 block text-xs font-semibold text-navy">{t('modulo.evidenciaTexto')}</label>
          <textarea
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            rows={5}
            className="mt-1.5 w-full rounded-xl border border-navy/15 bg-cream/50 px-3 py-2.5 text-sm leading-relaxed focus:border-teal focus:outline-none"
          />
          <button onClick={guardarNotas} className="mt-2 rounded-lg bg-navy px-4 py-2 text-xs font-semibold text-cream hover:bg-navy/90">
            {notasGuardadas ? t('modulo.guardado') : t('modulo.guardarNotas')}
          </button>

          {modulo.entregable && (
            <div className="mt-5">
              <h4 className="text-sm font-bold text-navy">{t('modulo.entregable')}</h4>
              <p className="mt-1 text-xs text-navy/55">{t('modulo.entregableDesc')}</p>
              {p?.entregableNombre && (
                <div className="mt-3 flex items-center gap-3 rounded-xl border border-teal/30 bg-teal/5 px-4 py-3">
                  <span className="text-xl">📄</span>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold text-navy">{p.entregableNombre}</div>
                    <div className="text-[11px] text-navy/60">{t('modulo.entregableSubido')}</div>
                  </div>
                </div>
              )}
              <label className="mt-3 flex w-full cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-navy/15 bg-cream/30 py-5 transition hover:border-teal hover:bg-cream">
                <span className="text-2xl opacity-60">📁</span>
                <span className="mt-1 text-sm font-semibold text-navy">
                  {subiendoArchivo ? t('modulo.subiendo') : p?.entregableNombre ? t('modulo.reemplazar') : t('modulo.seleccionarArchivo')}
                </span>
                <span className="mt-1 text-[11px] text-navy/50">{t('modulo.formatosPermitidos')}</span>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" disabled={subiendoArchivo} onChange={(e) => subir(e.target.files?.[0])} />
              </label>
            </div>
          )}
          <Siguiente onClick={() => irA(5)} t={t} />
        </Seccion>
      )}

      {/* ── 6 · Completado ── */}
      {actual === 'completado' && (
        <Seccion titulo={`✅ ${t('paso.completado')}`}>
          <ul className="space-y-1.5 text-sm">
            {PASOS.slice(0, 5).map((k) => (
              <li key={k} className={hechos[k] ? 'text-teal' : 'text-navy/50'}>
                {hechos[k] ? '✓' : '○'} {t(`paso.${k}`)}
              </li>
            ))}
          </ul>
          {estado === 'completado' ? (
            <div className="mt-4 space-y-2">
              <p className="rounded-xl bg-gold/12 px-4 py-3 text-sm font-semibold text-navy">
                🎓 {t('bloque.completadoEl', { fecha: formatearFecha(p?.fechaCompletado) })}
              </p>
              <button onClick={() => acciones.setEstado(moduloId, 'en_curso')} className="w-full rounded-xl border border-coral/40 py-2.5 text-xs font-medium text-coral hover:bg-coral/5">
                {t('modulo.reabrir')}
              </button>
            </div>
          ) : (
            <div className="mt-4 rounded-xl border-2 border-teal bg-teal/5 p-4">
              {!puedeCompletar && (
                <p className="mb-3 rounded-lg bg-coral/8 px-3 py-2 text-[13px] leading-relaxed text-coral">{t('modulo.requiereQuiz')}</p>
              )}
              <label className="block text-xs font-semibold text-navy">
                {t('modulo.fechaCompletado')}{esAdmin ? t('modulo.fechaRetroactiva') : ''}
              </label>
              <input
                type="date"
                value={fecha}
                max={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setFecha(e.target.value)}
                className="mt-2 w-full rounded-lg border border-navy/20 bg-white px-3 py-2 text-sm"
              />
              <button
                disabled={!puedeCompletar}
                onClick={() => acciones.setEstado(moduloId, 'completado', fecha)}
                className="mt-3 w-full rounded-xl bg-teal py-3 text-sm font-semibold text-white transition hover:bg-teal/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {t('modulo.confirmar', { horas: modulo.horas })}
              </button>
            </div>
          )}
        </Seccion>
      )}

      {/* ── Recursos ── */}
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <h3 className="text-sm font-bold text-navy">{t('modulo.recursos')}</h3>
        <ul className="mt-3 space-y-2">
          {recursos.map((rec) => (
            <li key={rec.url}>
              <a href={rec.url} target="_blank" rel="noreferrer" className="block rounded-xl bg-cream px-4 py-3 transition hover:bg-teal/10">
                <div className="text-sm font-semibold text-teal">{rec.nombre} ↗</div>
                <div className="text-xs text-navy/60">{rec.descripcion}</div>
              </a>
              {rec.demo && (
                <div className="mt-1.5 rounded-xl border border-teal/30 bg-teal/5 px-4 py-3">
                  <div className="text-[12px] font-bold uppercase tracking-wide text-navy/55">{t('modulo.cuentasPractica')}</div>
                  <ul className="mt-1.5 space-y-1">
                    {rec.demo.cuentas.map((c) => <li key={c} className="break-all font-mono text-xs text-navy/80">{c}</li>)}
                  </ul>
                  {rec.demo.clave && <div className="mt-1.5 text-xs text-navy/70">
                    {t('modulo.contrasenaAmbas')} <span className="font-mono font-semibold text-navy">{rec.demo.clave}</span>
                  </div>}
                  <p className="mt-2 text-[12px] leading-relaxed text-coral">⚠️ {rec.demo.aviso}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Desglose({ d, horas, t }) {
  const fmt = (h) => `${Math.round(h * 60)} min`
  const filas = [
    { k: 'video', icono: '🎬', v: d.video },
    { k: 'lectura', icono: '📖', v: d.lectura, extra: t('desglose.palabras', { n: d.palabras.toLocaleString('es-ES') }) },
    { k: 'documentos', icono: '📂', v: (d.documentos || []).reduce((s, x) => s + x.horas, 0) },
    { k: 'practica', icono: '🛠', v: d.practica },
    { k: 'evidencia', icono: '📁', v: d.evidencia },
    { k: 'kc', icono: '✅', v: d.kc },
  ]
  return (
    <details className="mt-4 rounded-xl border border-navy/10 bg-cream/60 px-4 py-3" open>
      <summary className="cursor-pointer text-[12px] font-bold uppercase tracking-wide text-navy/55">
        {t('desglose.titulo', { horas })}
      </summary>
      <ul className="mt-2 space-y-1">
        {filas.map((f) => (
          <li key={f.k} className="flex items-baseline justify-between gap-3 text-xs text-navy/75">
            <span>{f.icono} {t(`desglose.${f.k}`)}{f.extra ? <span className="text-navy/45"> · {f.extra}</span> : null}</span>
            <span className="shrink-0 font-semibold text-navy">{fmt(f.v)}</span>
          </li>
        ))}
      </ul>
      {d.criterio && <p className="mt-3 text-xs leading-relaxed text-navy/60">{d.criterio}</p>}
      {d.documentos?.length > 0 && (
        <div className="mt-3 border-t border-navy/10 pt-2">
          <div className="text-[11px] font-semibold uppercase tracking-wide text-navy/45">{t('desglose.lecturaObligatoria')}</div>
          <ul className="mt-1.5 space-y-2">
            {d.documentos.map((doc, i) => (
              <li key={i} className="text-xs leading-relaxed text-navy/75">
                <a href={urlCarpeta(doc.carpeta)} target="_blank" rel="noreferrer" className="font-semibold text-teal hover:underline">
                  📂 {doc.carpeta} › {doc.documento}
                </a>{' '}
                <span className="text-navy/50">({fmt(doc.horas)})</span>
                {/^(07_|CONTRATOS)/.test(doc.carpeta) && (
                  <span className="ml-1.5 rounded bg-gold/25 px-1.5 py-0.5 text-[10px] font-bold uppercase text-navy">Uso interno · administración y coordinación</span>
                )}
                <div className="text-navy/60">{doc.que}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </details>
  )
}

function Seccion({ titulo, sub, children }) {
  return (
    <section className="rounded-2xl bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-navy">{titulo}</h3>
      {sub && <p className="mt-0.5 text-xs text-navy/55">{sub}</p>}
      <div className="mt-3">{children}</div>
    </section>
  )
}

function Siguiente({ onClick, t }) {
  return (
    <button onClick={onClick} className="mt-5 w-full rounded-xl bg-teal py-3 text-sm font-semibold text-white transition hover:bg-teal/90">
      {t('modulo.continuar')} →
    </button>
  )
}

function Dato({ etiqueta, valor }) {
  return (
    <div className="rounded-xl bg-cream px-3 py-2">
      <dt className="text-[12px] font-semibold uppercase tracking-wide text-navy/45">{etiqueta}</dt>
      <dd className="mt-0.5 text-sm font-medium text-navy">{valor}</dd>
    </div>
  )
}
