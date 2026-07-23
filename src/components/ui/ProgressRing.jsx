export default function ProgressRing({ valor, meta, etiqueta, size = 132 }) {
  const pct = meta > 0 ? Math.min(100, Math.round((valor / meta) * 100)) : 0
  const r = size / 2 - 10
  const c = 2 * Math.PI * r
  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#0D1B2A14"
          strokeWidth="10"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={pct >= 100 ? '#C9963A' : '#2A8C74'}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * pct) / 100}
          className="transition-all duration-700"
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-2xl font-bold text-navy">{pct}%</div>
        <div className="text-[11px] font-medium text-navy/60">
          {valor}h / {meta}h
        </div>
        {etiqueta && <div className="text-[10px] text-navy/50">{etiqueta}</div>}
      </div>
    </div>
  )
}
