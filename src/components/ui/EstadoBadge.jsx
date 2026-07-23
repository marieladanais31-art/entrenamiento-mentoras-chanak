export const ESTADO_INFO = {
  pendiente: { icono: '⬜', texto: 'Pendiente', clases: 'bg-navy/5 text-navy/60' },
  en_curso: { icono: '🔵', texto: 'En curso', clases: 'bg-teal/10 text-teal' },
  completado: { icono: '✅', texto: 'Completado', clases: 'bg-gold/15 text-gold' },
  bloqueado: { icono: '🔒', texto: 'Bloqueado', clases: 'bg-navy/5 text-navy/40' },
}

export default function EstadoBadge({ estado }) {
  const info = ESTADO_INFO[estado] || ESTADO_INFO.pendiente
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${info.clases}`}
    >
      <span aria-hidden>{info.icono}</span> {info.texto}
    </span>
  )
}
