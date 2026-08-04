import { iniciales } from '../../lib/calculos'
import { SelectorIdioma, useIdioma } from '../../i18n/idioma'

export default function Header({ perfil, esAdmin, vista, onNavegar, onAbrirEducafe, onSalir }) {
  const { t } = useIdioma()
  const boton = (nombre) =>
    `rounded-full px-3 py-1.5 font-medium transition ${
      vista.nombre === nombre ? 'bg-teal text-white' : 'bg-white/10 hover:bg-white/20'
    }`

  return (
    <header className="no-print sticky top-0 z-10 bg-navy text-cream shadow-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-3">
        <button onClick={() => onNavegar({ nombre: 'dashboard' })} className="flex items-center gap-2 text-left">
          <img src="/logo-chanak.png" alt="Chanak Academy" className="h-8 w-8 rounded-lg bg-white/95 p-0.5" />
          <span>
            <span className="block text-sm font-bold leading-tight tracking-wide">
              CHANAK ACADEMY
            </span>
            <span className="block text-[13px] text-cream/60">{t('nav.formacion')}</span>
          </span>
        </button>

        <nav className="flex items-center gap-1.5 text-xs">
          <SelectorIdioma />

          {/* Botón pequeño de EducaFe con icono/logo */}
          <button
            onClick={onAbrirEducafe}
            title="Área de Gobernanza EducaFe (Requiere contraseña)"
            className={`rounded-lg px-2.5 py-1 text-[12px] font-bold transition flex items-center gap-1 shadow-sm ${
              vista.nombre === 'educafe'
                ? 'bg-amber-600 text-white'
                : 'bg-amber-500/20 text-amber-300 hover:bg-amber-500/35 border border-amber-400/40'
            }`}
          >
            <span>☕️</span>
            <span>EducaFe</span>
          </button>

          {esAdmin && (
            <button
              onClick={() => onNavegar({ nombre: 'admin' })}
              className={`rounded-full px-3 py-1.5 font-medium transition ${
                vista.nombre === 'admin'
                  ? 'bg-gold text-navy'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              🔑 {t('nav.admin')}
            </button>
          )}
          <button onClick={() => onNavegar({ nombre: 'dashboard' })} className={boton('dashboard')}>
            {t('nav.panel')}
          </button>
          <button onClick={() => onNavegar({ nombre: 'horas' })} className={boton('horas')}>
            {t('nav.horas')}
          </button>
          <button
            onClick={onSalir}
            title={t('nav.cerrarSesionDe', { nombre: perfil?.nombre || '' })}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[12px] font-bold transition hover:bg-coral"
          >
            {iniciales(perfil?.nombre)}
          </button>
        </nav>
      </div>
    </header>
  )
}
