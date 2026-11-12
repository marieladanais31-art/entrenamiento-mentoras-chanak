import { useState, useEffect } from 'react'
import { useIdioma } from '../i18n/idioma'

const CALENDAR_URL = 'https://calendar.app.google/zptU5ASmjjhy6Qqi7'

export default function CitaAdminModal({ abierto, onClose, esAdmin }) {
  const { idioma } = useIdioma()
  const [ahora, setAhora] = useState(new Date())

  useEffect(() => {
    if (!abierto) return
    const timer = setInterval(() => setAhora(new Date()), 1000)
    return () => clearInterval(timer)
  }, [abierto])

  if (!abierto) return null

  function formatoZona(tz) {
    try {
      const horaStr = new Intl.DateTimeFormat(idioma === 'es' ? 'es-ES' : 'en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }).format(ahora)

      const fechaStr = new Intl.DateTimeFormat(idioma === 'es' ? 'es-ES' : 'en-US', {
        timeZone: tz,
        weekday: 'short',
        day: 'numeric',
        month: 'short',
      }).format(ahora)

      return { hora: horaStr, fecha: fechaStr }
    } catch {
      return { hora: '--:--', fecha: '' }
    }
  }

  const madrid = formatoZona('Europe/Madrid')
  const ny = formatoZona('America/New_York')
  const chicago = formatoZona('America/Chicago')

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4 backdrop-blur-xs animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl border border-navy/10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 rounded-full p-2 text-navy/50 hover:bg-navy/10 hover:text-navy transition"
        >
          ✕
        </button>

        <div className="flex items-center gap-3 border-b border-navy/10 pb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-2xl">
            📅
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy">
              {idioma === 'es' ? 'Agendar cita con Administración' : 'Schedule Appointment with Administration'}
            </h3>
            <p className="text-xs text-navy/60">
              {idioma === 'es'
                ? 'Sesión oficial con Dirección y Administración · Chanak Academy'
                : 'Official session with Chanak Academy Leadership & Administration'}
            </p>
          </div>
        </div>

        {/* Relojes multizona horaria */}
        <div className="my-5 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-navy/50">
            {idioma === 'es' ? '🕒 Horas actuales de referencia:' : '🕒 Current reference times:'}
          </div>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl border border-navy/10 bg-cream/40 p-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-teal">
                🇪🇸 Madrid
              </div>
              <div className="mt-1 text-base font-extrabold text-navy font-mono">
                {madrid.hora}
              </div>
              <div className="text-[10px] text-navy/55">{madrid.fecha} (CET)</div>
            </div>

            <div className="rounded-xl border border-teal/20 bg-teal/5 p-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-teal">
                🇺🇸 Miami / NY
              </div>
              <div className="mt-1 text-base font-extrabold text-navy font-mono">
                {ny.hora}
              </div>
              <div className="text-[10px] text-navy/55">{ny.fecha} (EDT)</div>
            </div>

            <div className="rounded-xl border border-navy/10 bg-cream/40 p-2.5">
              <div className="text-[10px] font-bold uppercase tracking-wider text-teal">
                🇺🇸 Chicago / TX
              </div>
              <div className="mt-1 text-base font-extrabold text-navy font-mono">
                {chicago.hora}
              </div>
              <div className="text-[10px] text-navy/55">{chicago.fecha} (CDT)</div>
            </div>
          </div>
        </div>

        <p className="text-xs text-navy/70 leading-relaxed">
          {idioma === 'es'
            ? 'Al pulsar en el botón abrirás la página oficial de Google Calendar de Chanak Academy. Podrás elegir el día y hueco disponible. El sistema ajustará automáticamente los horarios a tu zona horaria local.'
            : 'Click the button below to open Chanak Academy’s official Google Calendar booking page. Choose an available slot; Google will automatically adapt the times to your device’s local timezone.'}
        </p>

        {esAdmin && (
          <div className="mt-4 rounded-xl border border-amber-300 bg-amber-50/80 p-3 text-xs leading-relaxed text-amber-900">
            <span className="font-bold">⚠️ Nota para Administración:</span> Los huecos y la disponibilidad mostrada a los usuarios se gestionan desde la configuración de citas de Google Calendar asociada a <code>administration@chanakacademy.org</code>. Configura allí los tramos horarios que desees ofrecer.
          </div>
        )}

        <div className="mt-6 flex flex-wrap items-center justify-end gap-3 pt-3 border-t border-navy/10">
          <button
            onClick={onClose}
            className="rounded-xl bg-navy/10 px-4 py-2.5 text-xs font-semibold text-navy hover:bg-navy/20 transition"
          >
            {idioma === 'es' ? 'Cerrar' : 'Close'}
          </button>
          <a
            href={CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-teal/90 transition"
          >
            <span>📅 {idioma === 'es' ? 'Abrir Google Calendar' : 'Open Google Calendar'}</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  )
}
