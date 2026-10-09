import { SelectorIdioma, useIdioma } from '../../i18n/idioma'

export default function Header({ perfil, esAdmin, vista, onNavegar, onSalir }) {
  const { t } = useIdioma()
  const boton = (nombre) =>
    `min-h-11 rounded-full px-4 py-2 font-medium transition ${
      vista.nombre === nombre ? 'bg-teal text-white' : 'bg-white/10 hover:bg-white/20'
    }`

  return (
    <header className="no-print sticky top-0 z-10 bg-navy text-cream shadow-md">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <button onClick={() => onNavegar({ nombre: 'dashboard' })} className="flex items-center gap-2 text-left">
          <img src="/logo-chanak.png" alt="Chanak Academy" className="h-8 w-8 rounded-lg bg-white/95 p-0.5" />
          <span>
            <span className="block text-sm font-bold leading-tight tracking-wide">CHANAK</span>
            <span className="hidden text-sm leading-tight text-cream/60 sm:block">{t('nav.formacion')}</span>
          </span>
        </button>

        <nav aria-label={t('nav.formacion')} className="flex flex-wrap items-center gap-2 text-sm">
          <SelectorIdioma />


          {esAdmin && (
            <button
              onClick={() => onNavegar({ nombre: 'admin' })}
              className={`min-h-11 rounded-full px-4 py-2 font-medium transition ${
                vista.nombre === 'admin'
                  ? 'bg-gold text-navy'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              🔑 {t('nav.admin')}
            </button>
          )}
          <button onClick={() => onNavegar({ nombre: 'dashboard' })} className={`${boton('dashboard')}`}>
            {t('nav.panel')}
          </button>
          <button onClick={() => onNavegar({ nombre: 'horas' })} className={`${boton('horas')}`}>
            {t('nav.horas')}
          </button>
          <button
            onClick={onSalir}
            title={t('nav.cerrarSesionDe', { nombre: perfil?.nombre || '' })}
            className="min-h-11 rounded-full bg-white/10 px-4 py-2 font-medium transition hover:bg-coral"
          >
            {t('sesion.cerrar')}
          </button>
        </nav>
      </div>
    </header>
  )
}
