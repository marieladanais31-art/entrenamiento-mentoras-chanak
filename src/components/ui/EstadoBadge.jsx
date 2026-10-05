import { useIdioma } from '../../i18n/idioma'

export const ESTADO_INFO = {
  pendiente: { icono: '⬜', clases: 'bg-navy/5 text-navy/60' },
  en_curso: { icono: '🔵', clases: 'bg-teal/10 text-teal' },
  completado: { icono: '✅', clases: 'bg-gold/15 text-gold' },
  reconocido: { icono: '♻️', clases: 'bg-amber-100 text-amber-800' },
  bloqueado: { icono: '🔒', clases: 'bg-navy/5 text-navy/40' },
}

export default function EstadoBadge({ estado }) {
  const { t } = useIdioma()
  const info = ESTADO_INFO[estado] || ESTADO_INFO.pendiente
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[13px] font-semibold ${info.clases}`}
    >
      <span aria-hidden>{info.icono}</span> {t(`estado.${estado}`)}
    </span>
  )
}
