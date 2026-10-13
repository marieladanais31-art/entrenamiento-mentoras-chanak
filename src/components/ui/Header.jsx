import { SelectorIdioma, useIdioma } from '../../i18n/idioma'

export default function Header({ perfil, esAdmin, vista, onNavegar, onSalir }) {
  const { t } = useIdioma()
  const boton = (nombre) =>
    `min-h-10 rounded-full px-4 py-2 text-sm font-semibold transition ${
      vista.nombre === nombre ? 'bg-[#4E8A2F] text-white shadow-xs' : 'bg-white/10 text-white/90 hover:bg-white/20'
    }`

  return (
    <header className="no-print sticky top-0 z-10 border-t-4 border-[#6EA236] bg-[#133854] text-white shadow-md">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-3">
        <button onClick={() => onNavegar({ nombre: 'dashboard' })} className="flex items-center gap-3 text-left group">
          <img src="/logo-chanak.png" alt="Chanak International Academy" className="h-10 w-10 rounded-xl bg-white p-1 shadow-xs transition group-hover:scale-105" />
          <span>
            <span className="block text-base font-extrabold tracking-wider leading-tight text-white">CHANAK</span>
            <span className="block text-[11px] font-bold tracking-widest uppercase text-[#88C448]">INTERNATIONAL ACADEMY</span>
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
