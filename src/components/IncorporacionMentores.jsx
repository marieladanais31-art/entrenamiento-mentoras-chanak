import { useState } from 'react'

const PASOS = [
  { titulo: '1. Mi función y modalidad', texto: 'Mentor general, Inglés y Life Skills son funciones diferentes. La colaboración puede ser voluntaria, remunerada o mediante una alianza; Dirección debe confirmar el alcance y la entidad responsable.' },
  { titulo: '2. Mis documentos', texto: 'Prepara hoja de vida, competencias y títulos pertinentes, referencias, identidad, confidencialidad y código de conducta. Los controles de protección de menores dependen del país y la actividad: consulta el procedimiento del manual.' },
  { titulo: '3. Acuerdo y revisión', texto: 'Si colaboras como voluntario, completa con Administración la hoja de voluntariado. Debe concretar programa, tareas, dedicación, supervisión, seguro y gastos. Descargarla o firmar el compromiso de formación no autoriza a atender menores.' },
  { titulo: '4. Asignación y trabajo en el SIS', texto: 'Tras la revisión, Dirección confirma tu habilitación, estudiantes y permisos. Sigue el plan Chanak y el PEI. El SIS es la referencia institucional de comunicación, notas, evidencias y alertas; no abras canales personales paralelos.' },
]

export default function IncorporacionMentores() {
  const [abierto, setAbierto] = useState(false)
  return <section className="rounded-2xl border-2 border-teal/30 bg-white p-5 space-y-4" aria-labelledby="incorporacion-mentores">
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-teal">Antes de atender estudiantes</p>
      <h2 id="incorporacion-mentores" className="mt-2 text-2xl font-bold text-navy">Mi incorporación al equipo de Mentores</h2>
      <p className="mt-3 text-base leading-relaxed">Primero conoce tu función y formaliza tu colaboración. Después consulta tu rutina y continúa la formación y las prácticas de abajo. Tus avances anteriores se conservan.</p>
    </div>
    <ol className="grid gap-3 sm:grid-cols-2">{PASOS.map(p => <li key={p.titulo} className="rounded-xl bg-teal/5 p-4"><h3 className="text-lg font-bold text-navy">{p.titulo}</h3><p className="mt-2 text-base leading-relaxed">{p.texto}</p></li>)}</ol>
    <div className="no-print flex flex-wrap gap-3">
      <a href="/manuales/guia-incorporacion-mentores-2026-10.pdf" target="_blank" rel="noreferrer" className="min-h-12 rounded-xl bg-navy px-5 py-3 text-base font-bold text-white">Guía de incorporación y trabajo</a>
      <a href="/manuales/hoja-voluntariado-chanak-2026-10.pdf" target="_blank" rel="noreferrer" className="min-h-12 rounded-xl bg-teal px-5 py-3 text-base font-bold text-white">Hoja de voluntariado</a>
    </div>
    <div className="rounded-xl border-l-4 border-gold bg-gold/10 p-4 text-base leading-relaxed"><b>Entrega privada:</b> Administración te indicará el canal autorizado para CV, certificados y documentos firmados. No los subas a una práctica del entrenamiento ni a las evidencias de un alumno. Esta pantalla no recoge documentos, no registra firmas y no concede permisos.</div>
    <button onClick={() => setAbierto(v => !v)} aria-expanded={abierto} aria-controls="modalidad-voluntariado" className="no-print min-h-12 text-left text-base font-bold text-teal underline">{abierto ? 'Ocultar' : 'Ver'} qué debe quedar acordado en voluntariado</button>
    {abierto && <div id="modalidad-voluntariado" className="space-y-3 text-base leading-relaxed">
      <p>Entidad responsable y programa, tareas y límites, dedicación, formación y supervisor, cobertura de seguro, gastos autorizados, privacidad, duración, salida y firmas de ambas partes.</p>
      <p>El voluntariado no se liquida con la tabla de pagos por clase. Los servicios remunerados requieren su acuerdo propio. Las posibles becas se valoran por separado y no se garantizan por participar.</p>
      <p>La entidad y Administración completan el modelo según el territorio antes de firmarlo. La hoja en blanco no acredita un seguro ni una habilitación ya concedida.</p>
    </div>}
  </section>
}
