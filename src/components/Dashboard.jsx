import { BLOQUES, TODOS_MODULOS } from '../data/curriculum'
import { resumenMentora, estadoBloque, horasBloqueCompletadas } from '../lib/calculos'
import ProgressRing from './ui/ProgressRing'
import EstadoBadge from './ui/EstadoBadge'
import { useIdioma } from '../i18n/idioma'
import { traducirBloques } from '../data/curriculum.en'

export default function Dashboard({
  mentora,
  progreso,
  esAdmin,
  viendoOtra,
  onAbrirBloque,
  onVerHoras,
  onVerCurso,
  onVerCertificado,
  onVerEducafe,
}) {
  const { t, idioma } = useIdioma()
  const r = resumenMentora(progreso)
  const bloques = traducirBloques(BLOQUES, idioma)
  const bloquesNivel1 = bloques.filter((b) => b.nivel === 1)
  const bloquesNivel2 = bloques.filter((b) => b.nivel === 2)
  const bloquesNivel3 = bloques.filter((b) => b.nivel === 3)
  const nivel2Desbloqueado = r.nivel1Completo

  return (
    <div className="space-y-6">
      {/* Cabecera de mentora */}
      <section className="rounded-2xl bg-white p-5 shadow-sm">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <ProgressRing valor={r.horas} meta={r.metaHoras} />
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold text-navy">{mentora.nombre}</h2>
            <p className="text-sm text-navy/60">
              {r.nivelActual === 3
                ? t('panel.nivel3')
                : r.nivelActual === 2
                ? t('panel.nivel2')
                : t('panel.nivel1')}
              {viendoOtra && t('panel.vistaAdmin')}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <Stat n={r.completados} etiqueta={t('panel.completados')} color="text-gold" />
              <Stat n={r.enCurso} etiqueta={t('panel.enCurso')} color="text-teal" />
              <Stat n={r.pendientes} etiqueta={t('panel.pendientes')} color="text-navy/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Botones de navegación rápida */}
      <div className="grid gap-3 sm:grid-cols-2">
        <button
          onClick={onVerCurso}
          className="flex w-full items-center gap-3 rounded-2xl border-2 border-teal/25 bg-teal/6 px-4 py-3.5 text-left transition hover:bg-teal/12"
        >
          <span className="text-xl" aria-hidden>
            📘
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-bold text-navy">
              {t('panel.presentacion')}
            </span>
            <span className="block text-xs text-navy/60">
              {t('panel.presentacionSub')}
            </span>
          </span>
          <span className="shrink-0 text-teal">→</span>
        </button>

        <button
          onClick={onVerEducafe}
          className="flex w-full items-center gap-3 rounded-2xl border-2 border-amber-600/25 bg-amber-50 px-4 py-3.5 text-left transition hover:bg-amber-100/60"
        >
          <span className="text-xl" aria-hidden>
            ☕️
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-sm font-bold text-navy">
              Miembros de EducaFe
            </span>
            <span className="block text-xs text-navy/60">
              Cuaderno NotebookLM, Hubs y Socias Visionarias
            </span>
          </span>
          <span className="shrink-0 text-amber-700">→</span>
        </button>
      </div>

      {/* Banners de certificación */}
      {r.elegibleCoordinadora ? (
        <BannerCert
          titulo={t('panel.elegibleCoord')}
          detalle={t('panel.elegibleCoordSub')}
          onVer={() => onVerCertificado(2)}
        />
      ) : r.elegibleMentor ? (
        <BannerCert
          titulo={t('panel.elegibleMentor')}
          detalle={t('panel.elegibleMentorSub')}
          onVer={() => onVerCertificado(1)}
        />
      ) : null}

      {/* Bloques Nivel 1 */}
      <section>
        <TituloSeccion
          titulo={t('panel.tituloN1')}
          subtitulo={t('panel.subN1', {
            bloques: bloquesNivel1.length,
            modulos: bloquesNivel1.reduce((s, b) => s + b.modulos.length, 0),
          })}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {bloquesNivel1.map((b) => (
            <TarjetaBloque
              key={b.id}
              bloque={b}
              estado={estadoBloque(progreso, b)}
              horasHechas={horasBloqueCompletadas(progreso, b)}
              onClick={() => onAbrirBloque(b.id)}
            />
          ))}
        </div>
      </section>

      {/* Bloques Nivel 2 */}
      <section>
        <TituloSeccion
          titulo={t('panel.tituloN2')}
          subtitulo={t('panel.subN2', {
            bloques: bloquesNivel2.length,
            modulos: bloquesNivel2.reduce((s, b) => s + b.modulos.length, 0),
          })}
        />
        {!nivel2Desbloqueado && (
          <p className="mb-3 rounded-xl bg-navy/5 px-4 py-2.5 text-xs text-navy/60">
            {t('panel.bloqueoN2')}
          </p>
        )}
        <div className="grid gap-3 sm:grid-cols-2">
          {bloquesNivel2.map((b) => (
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

      {/* Bloques Nivel 3 */}
      <section>
        <TituloSeccion
          titulo={t('panel.tituloN3')}
          subtitulo={t('panel.subN3')}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {bloquesNivel3.map((b) => (
            <TarjetaBloque
              key={b.id}
              bloque={b}
              estado={estadoBloque(progreso, b)}
              horasHechas={horasBloqueCompletadas(progreso, b)}
              onClick={() => onAbrirBloque(b.id)}
            />
          ))}
        </div>
      </section>

      <button
        onClick={onVerHoras}
        className="w-full rounded-2xl bg-navy py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-navy/90"
      >
        {t('panel.verHoras', {
          horas: r.horas,
          total: TODOS_MODULOS.reduce((s, m) => s + m.horas, 0),
        })}
      </button>
    </div>
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
      <button
        onClick={onVer}
        className="mt-3 w-full rounded-xl bg-gold py-2.5 text-sm font-bold text-navy transition hover:bg-gold/90"
      >
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
      className={`rounded-2xl bg-white p-4 text-left shadow-sm transition ${
        bloqueado ? 'opacity-55' : 'hover:shadow-md active:scale-[0.99]'
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="text-[13px] font-bold uppercase tracking-wider text-teal">
          {t('panel.bloque', { n: bloque.numero })}
        </div>
        <EstadoBadge estado={estado} />
      </div>
      <div className="mt-1 text-sm font-semibold leading-snug text-navy">{bloque.titulo}</div>
      <div className="mt-2 flex items-center justify-between text-xs text-navy/55">
        <span>{t('panel.modulos', { n: bloque.modulos.length })}</span>
        <span>
          {bloque.horas > 0 ? `${horasHechas}/${bloque.horas}h` : 'Autoestudio Libre'}
        </span>
      </div>
      {bloque.horas > 0 && (
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy/10">
          <div
            className={`h-full rounded-full ${pct >= 100 ? 'bg-gold' : 'bg-teal'}`}
            style={{ width: `${pct}%` }}
          />
        </div>
      )}
    </button>
  )
}
