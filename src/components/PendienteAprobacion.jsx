export default function PendienteAprobacion({ perfil, onSalir }) {
  const suspendida = perfil?.estado === 'suspendida'
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-4 py-10 text-center">
      <div className="w-full max-w-sm">
        <img
          src="/logo-chanak.png"
          alt="Chanak International Academy"
          className="mx-auto mb-5 h-20 w-20 rounded-2xl bg-white/95 p-2"
        />
        <div className="rounded-2xl bg-cream p-6 shadow-lg">
          <div className="text-4xl" aria-hidden>
            {suspendida ? '🔒' : '⏳'}
          </div>
          <h1 className="mt-3 text-lg font-bold text-navy">
            {suspendida ? 'Acceso suspendido' : 'Cuenta pendiente de aprobación'}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
            {suspendida ? (
              <>
                Tu acceso a la plataforma está suspendido temporalmente. Ponte en contacto con la
                coordinación de Chanak para resolverlo.
              </>
            ) : (
              <>
                Hola{perfil?.nombre ? `, ${perfil.nombre.split(' ')[0]}` : ''}. Tu cuenta se ha
                creado correctamente y está esperando la aprobación de la coordinación.
                <br />
                <br />
                Te avisaremos en cuanto esté activa para que puedas comenzar tu formación.
              </>
            )}
          </p>
        </div>
        <button
          onClick={onSalir}
          className="mt-4 w-full rounded-xl border border-cream/25 py-2.5 text-sm font-medium text-cream/80 transition hover:bg-white/5"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  )
}
