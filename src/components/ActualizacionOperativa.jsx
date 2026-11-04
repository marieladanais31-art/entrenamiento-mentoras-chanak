import { ACTUALIZACION_OPERATIVA, GUIAS_NOVIEMBRE, REVISION_OPERATIVA } from '../data/actualizacionOperativa'

export default function ActualizacionOperativa({ funcionId, moduloId }) {
  const bloques = ACTUALIZACION_OPERATIVA.filter(b => moduloId ? b.modulos.includes(moduloId) : !funcionId || b.perfiles.includes(funcionId))
  if (!bloques.length) return null
  const perfiles = new Set(bloques.flatMap(b => b.perfiles))
  const guias = GUIAS_NOVIEMBRE.filter(g => perfiles.has(g.perfil) && (!funcionId || funcionId === g.perfil))
  return <section className="rounded-2xl border border-teal/30 bg-white p-5 space-y-4" aria-label="Actualización de procedimientos">
    <h3 className="text-xl font-bold text-navy">Procedimientos actualizados · {REVISION_OPERATIVA}</h3>
    <p className="text-base">Estas precisiones actualizan la operación sin reiniciar tu avance. Los vídeos revisados se conservan. La disponibilidad de cada acción depende del programa y los permisos asignados.</p>
    {bloques.map(b => <details key={b.id} className="rounded-xl border border-navy/15 p-4"><summary className="cursor-pointer text-lg font-bold text-teal">{b.titulo}</summary><ol className="mt-3 list-decimal pl-6 space-y-3 text-base">{b.pasos.map(p => <li key={p}>{p}</li>)}</ol></details>)}
    <div className="flex flex-wrap gap-3">{guias.map(g => <a key={g.url} href={g.url} target="_blank" rel="noreferrer" className="rounded-xl bg-teal px-4 py-3 text-base font-bold text-white">PDF · {g.titulo}</a>)}</div>
    <p className="text-sm text-navy/75">Guías operativas aportadas el 4 de noviembre. Las correcciones de esta sección prevalecen sobre las instrucciones anteriores del mismo procedimiento. Los carteles de Coins siguen pendientes de aprobación.</p>
  </section>
}
