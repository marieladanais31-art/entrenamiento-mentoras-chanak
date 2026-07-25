import { BLOQUES, TODOS_MODULOS } from '../data/curriculum'
import { resumenMentora, estadoBloque, horasBloqueCompletadas } from '../lib/calculos'
import ProgressRing from './ui/ProgressRing'
import EstadoBadge from './ui/EstadoBadge'

export default function Dashboard({
  mentora,
  progreso,
  esAdmin,
  viendoOtra,
  onAbrirBloque,
  onVerHoras,
  onVerCurso,
  onVerCertificado,
}) {
  const r = resumenMentora(progreso)
  const bloquesNivel1 = BLOQUES.filter((b) => b.nivel === 1)
  const bloquesNivel2 = BLOQUES.filter((b) => b.nivel === 2)
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
              {r.nivelActual === 2
                ? 'Nivel 2 — Ruta de Coordinadora Certificada'
                : 'Nivel 1 — Ruta de Mentora Certificada'}
              {viendoOtra && ' · (vista de administración)'}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center">
              <Stat n={r.completados} etiqueta="Completados" color="text-gold" />
              <Stat n={r.enCurso} etiqueta="En curso" color="text-teal" />
              <Stat n={r.pendientes} etiqueta="Pendientes" color="text-navy/50" />
            </div>
          </div>
        </div>
      </section>

      {/* Presentación del curso */}
      <button
        onClick={onVerCurso}
        className="flex w-full items-center gap-3 rounded-2xl border-2 border-teal/25 bg-teal/6 px-4 py-3.5 text-left transition hover:bg-teal/12"
      >
        <span className="text-xl" aria-hidden>
          📘
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-bold text-navy">
            Presentación del programa
          </span>
          <span className="block text-xs text-navy/60">
            Objetivos, metodología, temario y certificaciones
          </span>
        </span>
        <span className="shrink-0 text-teal">→</span>
      </button>

      {/* Banners de certificación */}
      {r.elegibleCoordinadora ? (
        <BannerCert
          titulo="Elegible para Certificación Chanak-Certified Coordinator"
          detalle="300h completadas. La certificación la emite la Head of LSP con visto bueno del Board."
          onVer={() => onVerCertificado(2)}
        />
      ) : r.elegibleMentor ? (
        <BannerCert
          titulo="Elegible para Certificación Chanak-Certified Mentor"
          detalle="180h completadas. Certificado archivado en 05_PRACTICES y registrado en el SIS."
          onVer={() => onVerCertificado(1)}
        />
      ) : null}

      {/* Bloques Nivel 1 */}
      <section>
        <TituloSeccion
          titulo="Nivel 1 — Mentora Certificada"
          subtitulo={`${bloquesNivel1.length} bloques · ${bloquesNivel1.reduce(
            (s, b) => s + b.modulos.length,
            0
          )} módulos · 180 horas`}
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
          titulo="Nivel 2 — Coordinadora Certificada"
          subtitulo={`${bloquesNivel2.length} bloques · ${bloquesNivel2.reduce(
            (s, b) => s + b.modulos.length,
            0
          )} módulos · +120 horas (300h acumuladas)`}
        />
        {!nivel2Desbloqueado && (
          <p className="mb-3 rounded-xl bg-navy/5 px-4 py-2.5 text-xs text-navy/60">
            🔒 Se desbloquea al completar todos los módulos del Nivel 1 (180h).
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

      <button
        onClick={onVerHoras}
        className="w-full rounded-2xl bg-navy py-3.5 text-sm font-semibold text-cream shadow-sm transition hover:bg-navy/90"
      >
        📋 Ver registro de horas ({r.horas}h de {TODOS_MODULOS.reduce((s, m) => s + m.horas, 0)}h
        posibles)
      </button>
    </div>
  )
}

function Stat({ n, etiqueta, color }) {
  return (
    <div className="rounded-xl bg-cream px-2 py-2">
      <div className={`text-lg font-bold ${color}`}>{n}</div>
      <div className="text-[10px] font-medium text-navy/60">{etiqueta}</div>
    </div>
  )
}

function BannerCert({ titulo, detalle, onVer }) {
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
        📜 Ver e imprimir certificado
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
  const pct = Math.round((horasHechas / bloque.horas) * 100)
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
        <div className="text-[11px] font-bold uppercase tracking-wider text-teal">
          Bloque {bloque.numero}
        </div>
        <EstadoBadge estado={estado} />
      </div>
      <div className="mt-1 text-sm font-semibold leading-snug text-navy">{bloque.titulo}</div>
      <div className="mt-2 flex items-center justify-between text-xs text-navy/55">
        <span>{bloque.modulos.length} módulos</span>
        <span>
          {horasHechas}/{bloque.horas}h
        </span>
      </div>
      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy/10">
        <div
          className={`h-full rounded-full ${pct >= 100 ? 'bg-gold' : 'bg-teal'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </button>
  )
}
