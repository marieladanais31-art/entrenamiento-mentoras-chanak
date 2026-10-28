import { MANUAL_COORDINACION as manual } from '../data/manualCoordinacion'
import CoberturaEspecialistas from './CoberturaEspecialistas'

export default function ManualCoordinacion() {
  return <section className="manual-coordinacion space-y-5" aria-label="Manual operativo de Coordinación">
    <header className="rounded-2xl bg-navy p-6 text-cream">
      <p className="text-sm font-bold text-gold">Perfil propio · Revisión {manual.version}</p>
      <h1 className="mt-2 text-2xl font-bold">{manual.titulo}</h1>
      <p className="mt-3 text-base leading-relaxed">{manual.proposito}</p>
      <a href="/manuales/manual-coordinacion-sis-2026-10.pdf" target="_blank" rel="noreferrer" className="no-print mt-4 inline-block rounded-xl bg-gold px-5 py-3 text-base font-bold text-navy">Descargar manual completo de Coordinación</a>
      <a href="https://drive.google.com/file/d/1mrK1Ll1_CY93L88uGCFoqQiiY7BNDmAU/view" target="_blank" rel="noreferrer" className="no-print ml-3 mt-4 inline-block rounded-xl border border-cream/40 px-5 py-3 text-base font-bold text-cream">Abrir en Drive</a>
    </header>
    <CoberturaEspecialistas />
    <section className="rounded-2xl bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-navy">Alcance del cargo</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">{manual.alcance.map((a) => <article key={a.titulo} className="rounded-xl border border-teal/25 p-4"><h3 className="text-lg font-bold text-teal">{a.titulo}</h3><p className="mt-2 text-base">{a.texto}</p></article>)}</div>
    </section>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="text-xl font-bold text-navy">Antes de operar en el SIS</h2><ol className="mt-4 list-decimal space-y-3 pl-6 text-base">{manual.accesos.map((s) => <li key={s}>{s}</li>)}</ol></section>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="text-xl font-bold text-navy">A quién supervisa y qué conserva cada función</h2><div className="mt-4 space-y-4">{manual.equipo.map(([rol, trabajo, supervision]) => <article key={rol} className="rounded-xl bg-cream p-4"><h3 className="text-lg font-bold">{rol}</h3><p className="mt-2 text-base">{trabajo}</p><p className="mt-2 text-base"><b>Coordinación:</b> {supervision}</p></article>)}</div></section>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="text-xl font-bold text-navy">Mi rutina de coordinación</h2><dl className="mt-4 space-y-4">{manual.rutina.map(([cuando, que]) => <div key={cuando}><dt className="text-base font-bold text-teal">{cuando}</dt><dd className="mt-1 text-base">{que}</dd></div>)}</dl></section>
    <section className="space-y-3"><h2 className="text-xl font-bold text-navy">Once pestañas del SIS · cómo trabajar en cada una</h2><p className="text-base">Abre el procedimiento que necesitas. Los casos son formativos y no modifican expedientes.</p>
      {manual.procedimientos.map((p) => <details key={p.id} className="rounded-2xl bg-white p-5 shadow-sm">
        <summary className="cursor-pointer text-lg font-bold text-teal">{p.titulo}</summary>
        <p className="mt-4 text-base"><b>Resultado esperado:</b> {p.objetivo}</p>
        <ol className="mt-4 list-decimal space-y-3 pl-6 text-base">{p.pasos.map((s) => <li key={s}>{s}</li>)}</ol>
        <p className="mt-4 rounded-xl bg-teal/10 p-4 text-base"><b>Al terminar:</b> {p.cierre}</p>
        <div className="mt-4 rounded-xl bg-cream p-4 text-base"><h3 className="font-bold">Practica la decisión</h3><p className="mt-2">{p.caso}</p><details className="mt-3"><summary className="cursor-pointer font-bold text-teal">Ver criterio de actuación</summary><p className="mt-2">{p.respuesta}</p></details></div>
      </details>)}
    </section>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="text-xl font-bold text-navy">Motivación, ChanakCoins y restauración</h2><ul className="mt-4 list-disc space-y-3 pl-6 text-base">{manual.coins.map((s) => <li key={s}>{s}</li>)}</ul></section>
    <section className="rounded-2xl bg-white p-5 shadow-sm"><h2 className="text-xl font-bold text-navy">Evidencia que deja la coordinadora</h2><ul className="mt-4 list-disc space-y-2 pl-6 text-base">{manual.registros.map((s) => <li key={s}>{s}</li>)}</ul><p className="mt-4 text-base">Cada pendiente debe indicar: estudiante y periodo, hecho verificable, apoyo o decisión, responsable, próxima revisión y estado. Usa datos ficticios para practicar.</p></section>
    <details className="rounded-2xl bg-white p-5 shadow-sm"><summary className="cursor-pointer text-base font-bold text-teal">Fuentes y límites de la revisión</summary>{manual.fuentes.map((s) => <p key={s} className="mt-3 text-sm">{s}</p>)}</details>
  </section>
}
