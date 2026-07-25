import { useIdioma } from '../i18n/idioma'
export default function PendienteAprobacion({ perfil, onSalir }) {
  const { t } = useIdioma()
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
            {suspendida ? t('suspendida.titulo') : t('pendiente.titulo')}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-navy/70">
{suspendida
              ? t('suspendida.texto')
              : `${perfil?.nombre ? perfil.nombre.split(' ')[0] + ': ' : ''}${t('pendiente.texto')}`}
          </p>
        </div>
        <button
          onClick={onSalir}
          className="mt-4 w-full rounded-xl border border-cream/25 py-2.5 text-sm font-medium text-cream/80 transition hover:bg-white/5"
        >
          {t('sesion.cerrar')}
        </button>
      </div>
    </div>
  )
}
