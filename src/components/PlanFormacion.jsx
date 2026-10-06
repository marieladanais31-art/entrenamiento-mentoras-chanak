import { PLAN_FORMACION } from '../data/planFormacion'

export default function PlanFormacion() {
  const csv = "ID_actividad,Persona_ID,Rol,Area,Fecha,Actividad,Fuente_y_version,Minutos_reales,Evidencia,Supervisor,Estado_revision,Fecha_validacion,Resolucion\n" + [...PLAN_FORMACION.mentor, ...PLAN_FORMACION.coordinador].map((area) => `,,,${area.id},,,,,,,programada,,`).join("\n")
  return <section className="rounded-2xl border border-gold/40 bg-white p-5 shadow-sm">
    <h2 className="text-lg font-bold text-navy">Plan completo · Mentor 180 h / Coordinator 300 h</h2>
    <p className="mt-2 text-sm leading-relaxed text-navy/75">Las horas de cada módulo son una estimación breve de sus actividades. La certificación incluye además autoestudio aplicado, currículo elegido, práctica supervisada y portafolio. Las metas son 180 y 300 h; la distribución siguiente es una programación propuesta, no horas ya realizadas ni aprobadas por MSA.</p>
    <p className="mt-2 text-xs leading-relaxed text-navy/70">El self-study consultado distingue 180 h para personal experimentado y 300 h para personal nuevo. La nueva distribución por rol requiere una actualización documental por dirección, manteniendo el historial de versiones.</p>
    {['mentor', 'coordinador'].map((rol) => <details key={rol} className="mt-4 rounded-xl bg-cream p-3">
      <summary className="cursor-pointer font-bold text-navy">{rol === 'mentor' ? 'Mentor · 180 h (incluye las 50 h de currículo y práctica)' : 'Coordinator · +120 h sobre Mentor = 300 h acumuladas'}</summary>
      <div className="mt-3 space-y-3">{PLAN_FORMACION[rol].map((area) => <div key={area.id} className="rounded-xl bg-white p-3 text-xs leading-relaxed text-navy/75">
        <h3 className="text-sm font-bold text-teal">{area.id} · {area.titulo} · {area.horas} h previstas</h3>
        <p className="mt-1">{area.actividad}</p><p className="mt-1"><b>Evidencia:</b> {area.evidencia}</p>
      </div>)}</div>
    </details>)}
    <p className="mt-4 text-xs leading-relaxed text-navy/75"><b>Cómo se acredita:</b> bitácora con fecha, actividad, fuente/versión, minutos reales, evidencia y supervisor; descontar pausas y duplicados. Dirección revisa el tiempo y la competencia demostrada. Completar módulos o alcanzar una cifra no autoriza por sí solo la certificación. Una práctica más breve no recibe horas ficticias: se programan nuevas actividades útiles.</p>
    <div className="mt-3 flex flex-wrap gap-4 text-xs font-bold text-teal"><a href="/formacion/PLAN_FORMACION_180_300.md" download className="underline">Descargar plan completo</a><a href="/formacion/FLORIDA_PRESENCIAL_Y_EVALUACIONES.md" download className="underline">Descargar guía Florida y evaluaciones</a></div>
    <a className="mt-3 inline-block text-xs font-bold text-teal underline" href="https://drive.google.com/file/d/11l7EomB_1f3qbXIfYmTwKefUgVbiGoTv/view" target="_blank" rel="noreferrer">Plan, fuentes y protocolo de validación →</a>
    <a className="ml-4 mt-3 inline-block text-xs font-bold text-teal underline" href="https://drive.google.com/file/d/1rWXD-Or5SEL1lafPY1UZd--wmx7XL6SZ/view" target="_blank" rel="noreferrer">Florida y evaluaciones →</a>
    <a className="ml-4 mt-3 inline-block text-xs font-bold text-teal underline" href={"data:text/csv;charset=utf-8," + encodeURIComponent(csv)} download="BITACORA_FORMACION.csv">Descargar bitácora →</a>
  </section>
}
