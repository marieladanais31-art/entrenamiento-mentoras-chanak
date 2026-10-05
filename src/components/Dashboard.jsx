import { BLOQUES, TODOS_MODULOS, NIVEL_1_HORAS, NIVEL_2_HORAS, numModulo, BIBLIOTECA, urlCarpeta, CARPETA_FINAL_URL } from '../data/curriculum'
import { resumenMentora, estadoBloque, horasBloqueCompletadas } from '../lib/calculos'
import ProgressRing from './ui/ProgressRing'
import EstadoBadge from './ui/EstadoBadge'
import { useIdioma } from '../i18n/idioma'
import { traducirBloques } from '../data/curriculum.en'

// Inicio → Mi ruta → Bloque → Módulo
export default function Dashboard({
  mentora,
  progreso,
  esAdmin,
  viendoOtra,
  onAbrirBloque,
  onAbrirModulo,
  onVerHoras,
  onVerCurso,
  onVerCertificado,
  onVerEducafe,
}) {
  const { t, idioma } = useIdioma()
  const r = resumenMentora(progreso)
  const bloques = traducirBloques(BLOQUES, idioma)
  const mentorBloques = bloques.filter((b) => b.nivel === 1 && !b.porRol)
  const rolBloques = bloques.filter((b) => b.porRol)
  const coordBloques = bloques.filter((b) => b.nivel === 2)
  const nivel2Desbloqueado = r.nivel1Completo
  const mods = progreso?.modulos || {}

  // Siguiente paso: primer módulo en curso o, si no hay, el primero pendiente de la ruta
  const ruta = TODOS_MODULOS.filter((m) => !m.porRol && (m.nivel === 1 || nivel2Desbloqueado))
  const siguiente =
    ruta.find((m) => mods[m.id]?.estado === 'en_curso') ||
    ruta.find((m) => mods[m.id]?.estado !== 'completado')
  const pct = Math.round((r.horas / NIVEL_2_HORAS) * 100)

  return (
    <div className="space-y-6">
      {/* Cabecera */}
      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <ProgressRing valor={r.horas} meta={r.metaHoras} />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-navy">{mentora.nombre}</h2>
            <p className="text-sm text-navy/60">
              {r.nivelActual === 2 ? t('panel.nivel2') : t('panel.nivel1')}
              {viendoOtra && t('panel.vistaAdmin')}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <Stat n={r.completados} etiqueta={t('panel.completados')} color="text-gold" />
              <Stat n={r.enCurso} etiqueta={t('panel.enCurso')} color="text-teal" />
              <Stat n={r.pendientes} etiqueta={t('panel.pendientes')} color="text-navy/50" />
            </div>
          </div>
        </div>
        {/* Barra de ruta Mentor (180) → Coordinator (300) */}
        <div className="mt-5">
          <div className="flex justify-between text-[12px] font-semibold text-navy/55">
            <span>{t('panel.ruta')}</span>
            <span>{r.horas}h / {NIVEL_2_HORAS}h</span>
          </div>
          <div className="relative mt-1.5 h-2.5 overflow-hidden rounded-full bg-navy/10">
            <div className="h-full rounded-full bg-teal transition-all" style={{ width: `${Math.min(100, pct)}%` }} />
            <div className="absolute top-0 h-full w-0.5 bg-gold" style={{ left: `${(NIVEL_1_HORAS / NIVEL_2_HORAS) * 100}%` }} />
          </div>
          <div className="mt-1 flex justify-between text-[11px] text-navy/50">
            <span>0</span>
            <span>Mentor · {NIVEL_1_HORAS}h</span>
            <span>Coordinator · {NIVEL_2_HORAS}h</span>
          </div>
        </div>
      </section>

      {/* Siguiente paso */}
      {siguiente && !viendoOtra && (
        <button
          onClick={() => onAbrirModulo(siguiente.id)}
          className="flex w-full items-center gap-3 rounded-2xl bg-teal px-4 py-4 text-left text-white shadow-sm transition hover:bg-teal/90"
        >
          <span className="text-2xl" aria-hidden>▶</span>
          <span className="min-w-0 flex-1">
            <span className="block text-[12px] font-bold uppercase tracking-wide text-white/75">
              {mods[siguiente.id]?.estado === 'en_curso' ? t('panel.continuar') : t('panel.siguiente')}
            </span>
            <span className="block text-sm font-bold">
              {numModulo(siguiente.id)} · {siguiente.titulo}
            </span>
          </span>
          <span className="shrink-0">→</span>
        </button>
      )}

      {/* Accesos */}
      <div className="grid gap-3 sm:grid-cols-2">
        <Acceso icono="📘" titulo={t('panel.presentacion')} sub={t('panel.presentacionSub')} onClick={onVerCurso} tono="teal" />
        <Acceso icono="📋" titulo={t('panel.registroHoras')} sub={t('panel.registroHorasSub', { horas: r.horas })} onClick={onVerHoras} tono="navy" />
      </div>

      {/* Avance reconocido de la formación anterior */}
      {r.reconocidos > 0 && (
        <p className="rounded-2xl border border-amber-300 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900">
          ♻️ {t('panel.reconocidos', { n: r.reconocidos })}
        </p>
      )}

      {/* Biblioteca práctica de documentos oficiales (Drive) */}
      <details className="rounded-2xl bg-white p-4 shadow-sm">
        <summary className="cursor-pointer text-sm font-bold text-navy">📂 {t('panel.biblioteca')}</summary>
        <p className="mt-2 text-xs text-navy/60">{t('panel.bibliotecaSub')}</p>
        <ul className="mt-3 space-y-2.5">
          {BIBLIOTECA.map((b) => (
            <li key={b.carpeta} className="rounded-xl bg-cream px-3 py-2.5">
              <a href={urlCarpeta(b.carpeta)} target="_blank" rel="noreferrer" className="text-xs font-bold text-teal hover:underline">
                {b.carpeta} →
              </a>
              <div className="mt-1 text-xs leading-relaxed text-navy/70"><b>Mentor:</b> {b.mentor}</div>
              <div className="text-xs leading-relaxed text-navy/70"><b>Coordinator:</b> {b.coordinador}</div>
            </li>
          ))}
        </ul>
        <a href={CARPETA_FINAL_URL} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold text-teal hover:underline">
          {t('panel.bibliotecaTodo')} →
        </a>
      </details>

      {/* Certificación */}
      {r.elegibleCoordinadora ? (
        <BannerCert titulo={t('panel.elegibleCoord')} detalle={t('panel.elegibleCoordSub')} onVer={() => onVerCertificado(2)} />
      ) : r.elegibleMentor ? (
        <BannerCert titulo={t('panel.elegibleMentor')} detalle={t('panel.elegibleMentorSub')} onVer={() => onVerCertificado(1)} />
      ) : null}

      {/* Nivel 1 */}
      <section>
        <TituloSeccion
          titulo={t('panel.tituloN1')}
          subtitulo={t('panel.subN1', { bloques: mentorBloques.length, modulos: mentorBloques.reduce((s, b) => s + b.modulos.length, 0) })}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {mentorBloques.map((b) => (
            <TarjetaBloque key={b.id} bloque={b} estado={estadoBloque(progreso, b)} horasHechas={horasBloqueCompletadas(progreso, b)} onClick={() => onAbrirBloque(b.id)} />
          ))}
        </div>
      </section>

      {/* Por rol */}
      <section>
        <TituloSeccion titulo={t('panel.tituloRol')} subtitulo={t('panel.porRolTxt')} />
        <div className="grid gap-3 sm:grid-cols-2">
          {rolBloques.map((b) => (
            <TarjetaBloque key={b.id} bloque={b} estado={estadoBloque(progreso, b)} horasHechas={horasBloqueCompletadas(progreso, b)} onClick={() => onAbrirBloque(b.id)} />
          ))}
        </div>
      </section>

      {/* Nivel 2 */}
      <section>
        <TituloSeccion
          titulo={t('panel.tituloN2')}
          subtitulo={t('panel.subN2', { bloques: coordBloques.length, modulos: coordBloques.reduce((s, b) => s + b.modulos.length, 0) })}
        />
        {!nivel2Desbloqueado && (
          <p className="mb-3 rounded-xl bg-navy/5 px-4 py-2.5 text-xs text-navy/60">{t('panel.bloqueoN2')}</p>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          {coordBloques.map((b) => (
            <TarjetaBloque
              key={b.id}
              bloque={b}
              estado={nivel2Desbloqueado ? estadoBloque(progreso, b) : 'bloqueado'}
              horasHechas={horasBloqueCompletadas(progreso, b)}
              onClick={nivel2Desbloqueado || esAdmin ? () => onAbrirBloque(b.id) : undefined}
            />
          ))}
        </div>
      </section>

      {/* Formación complementaria de entidades colaboradoras (separada de la ruta Chanak) */}
      <section className="rounded-2xl border border-amber-600/25 bg-amber-50 p-4">
        <div className="text-[12px] font-bold uppercase tracking-wide text-amber-800">{t('panel.partnerTitulo')}</div>
        <p className="mt-1 text-xs leading-relaxed text-navy/65">{t('panel.partnerTxt')}</p>
        <button onClick={onVerEducafe} className="mt-3 rounded-xl bg-amber-600 px-4 py-2 text-xs font-bold text-white hover:bg-amber-700">
          {t('panel.partnerBoton')} →
        </button>
      </section>
    </div>
  )
}

function Acceso({ icono, titulo, sub, onClick, tono }) {
  const c = tono === 'teal' ? 'border-teal/25 bg-teal/6 hover:bg-teal/12' : 'border-navy/15 bg-white hover:bg-cream'
  return (
    <button onClick={onClick} className={`flex w-full items-center gap-3 rounded-2xl border-2 px-4 py-3.5 text-left transition ${c}`}>
      <span className="text-xl" aria-hidden>{icono}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-bold text-navy">{titulo}</span>
        <span className="block text-xs text-navy/60">{sub}</span>
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

function TituloSeccion({ titulo, subtitulo }) {
  return (
    <div className="mb-3">
      <h3 className="font-bold text-navy">{titulo}</h3>
      <p className="text-xs text-navy/55">{subtitulo}</p>
    </div>
  )
}

function TarjetaBloque({ bloque, estado, horasHechas, onClick }) {
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
        <span>{horasHechas}/{bloque.horas}h</span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy/10">
        <div className={`h-full rounded-full ${pct >= 100 ? 'bg-gold' : 'bg-teal'}`} style={{ width: `${pct}%` }} />
      </div>
    </button>
  )
}
