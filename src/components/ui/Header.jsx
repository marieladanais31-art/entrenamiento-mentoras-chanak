export default function Header({ sesion, mentora, vista, onNavegar, onSalir }) {
  const esAdmin = sesion.tipo === 'admin'
  return (
    <header className="no-print sticky top-0 z-10 bg-navy text-cream shadow-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-2 px-4 py-3">
        <button
          onClick={() =>
            onNavegar(
              esAdmin && !vista.mentoraId
                ? { nombre: 'admin' }
                : { nombre: 'dashboard', mentoraId: mentora?.id }
            )
          }
          className="text-left"
        >
          <div className="text-sm font-bold tracking-wide">CHANAK ACADEMY</div>
          <div className="text-xs text-cream/70">Formación de Mentoras</div>
        </button>
        <nav className="flex items-center gap-1 text-xs">
          {esAdmin && (
            <button
              onClick={() => onNavegar({ nombre: 'admin' })}
              className={`rounded-full px-3 py-1.5 font-medium ${
                vista.nombre === 'admin' ? 'bg-gold text-navy' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              Admin
            </button>
          )}
          {mentora && (
            <>
              <button
                onClick={() => onNavegar({ nombre: 'dashboard', mentoraId: mentora.id })}
                className={`rounded-full px-3 py-1.5 font-medium ${
                  vista.nombre === 'dashboard' ? 'bg-teal' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                Panel
              </button>
              <button
                onClick={() => onNavegar({ nombre: 'horas', mentoraId: mentora.id })}
                className={`rounded-full px-3 py-1.5 font-medium ${
                  vista.nombre === 'horas' ? 'bg-teal' : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                Horas
              </button>
            </>
          )}
          <button
            onClick={onSalir}
            className="rounded-full bg-white/10 px-3 py-1.5 font-medium hover:bg-coral"
            title="Cambiar de usuaria"
          >
            Salir
          </button>
        </nav>
      </div>
    </header>
  )
}
