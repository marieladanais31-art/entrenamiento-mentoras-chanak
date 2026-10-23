import { COBERTURA_ESPECIALISTAS as cobertura } from '../data/modalidadesEspecialistas'

export default function CoberturaEspecialistas() {
  return <section className="rounded-2xl border border-teal/25 bg-white p-5 shadow-sm" aria-label="Cobertura de especialistas por programa">
    <h2 className="text-xl font-bold text-navy">{cobertura.titulo}</h2>
    <p className="mt-3 text-base">{cobertura.texto}</p>
    <div className="mt-4 space-y-3">{cobertura.programas.map(([programa, estado, detalle]) => <article key={programa} className="rounded-xl bg-cream p-4"><h3 className="text-lg font-bold text-teal">{programa} · {estado}</h3><p className="mt-2 text-base">{detalle}</p></article>)}</div>
    <p className="mt-4 text-base">{cobertura.aclaracion}</p>
  </section>
}
