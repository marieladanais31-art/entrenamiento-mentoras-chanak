import { useCallback, useEffect, useState } from 'react'
import * as api from '../lib/backend'
import { getModulo } from '../data/curriculum'
import { aplicarEquivalencias, faltantesContactoMenores } from '../lib/calculos'
import { modulosObligatorios, rolesDesdeTipoAcceso } from '../data/roles'

// La aprobación solo puede realizarla Admin con RLS; el servidor aplica
// además las condiciones de horas, práctica, evaluación y safeguarding.
export default function RevisionCertificaciones({ perfiles, progresos, rolesMapa, onVerCertificado }) {
  const [filas, setFilas] = useState([])
  const [editando, setEditando] = useState({})
  const [error, setError] = useState('')
  const [ocupado, setOcupado] = useState('')
  const cargar = useCallback(() => {
    api.listarCertificacionesFormales().then(setFilas).catch((e)=>setError(e.message))
  }, [])
  useEffect(() => { cargar() }, [cargar])
  const perfilesPorId = Object.fromEntries(perfiles.map((p) => [p.id, p]))
  const solicitado = filas.filter((f) => f.estado !== 'aprobada')
  const aprobadas = filas.filter((f) => f.estado === 'aprobada')

  async function revisar(f) {
    setOcupado(f.id)
    setError('')
    try {
      const edit = editando[f.id] || {}
      const estado = edit.estado || f.estado
      if (estado === 'aprobada') {
        const p = perfilesPorId[f.perfil_id]
        const funciones = rolesMapa?.[f.perfil_id]?.map((r) => r.rol) || []
        const roles = funciones.length ? funciones : rolesDesdeTipoAcceso(p?.tipo_acceso)
        const rolObjetivo = f.nivel === 2 ? 'coordinator' : 'mentor'
        if (!roles.includes(rolObjetivo) && !(f.nivel === 1 && roles.includes('coordinator'))) {
          throw new Error('La certificación solicitada no coincide con el rol formal del participante')
        }
        const prog = aplicarEquivalencias(progresos[f.perfil_id] || { modulos: {} })
        const exigidos = [...new Set(modulosObligatorios([rolObjetivo],p?.contacto_menores ?? null))]
          .filter((id) => Boolean(getModulo(id)))
        const pendientes = exigidos.filter((id) => prog.modulos[id]?.estado !== 'completado')
        if (pendientes.length) throw new Error(`Faltan ${pendientes.length} módulos por aprobar para este nivel`)
        const faltantesMenores = faltantesContactoMenores(prog, [rolObjetivo], p?.contacto_menores ?? null)
        if (faltantesMenores.length) throw new Error('Hay formación obligatoria de protección y desarrollo infantil pendiente')
      }
      await api.revisarCertificacionFormal(f.id, {
        estado,
        horas_validadas: edit.horas_validadas ?? f.horas_validadas,
        practicas_validadas: edit.practicas_validadas ?? f.practicas_validadas,
        evaluacion_validada: edit.evaluacion_validada ?? f.evaluacion_validada,
        menores_verificado: edit.menores_verificado ?? f.menores_verificado,
        observaciones: edit.observaciones ?? f.observaciones,
      })
      await api.listarCertificacionesFormales().then(setFilas)
    } catch(e) { setError(e.message) } finally { setOcupado('') }
  }
  const ajustar = (id,campo,valor) => setEditando(old=>({...old,[id]:{...(old[id]||{}),[campo]:valor}}))
  const mostrar = (f) => {
    const p = perfilesPorId[f.perfil_id]
    const d = { ...f, ...(editando[f.id] || {}) }
    return <article key={f.id} className="rounded-xl border border-navy/10 bg-cream/40 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div><strong className="text-sm text-navy">{p?.nombre || 'Perfil sin localizar'}</strong><div className="text-xs text-navy/55">{f.nivel===1?'Certified Mentor':'Certified Coordinator'} · {f.version_curriculo}</div></div>
        <strong className="text-xs text-teal">{f.estado==='aprobada'?'Aprobada':f.estado==='rechazada'?'Requiere ajustes':f.estado==='en_revision'?'En revisión':'Solicitada'}</strong>
      </div>
      {f.estado==='aprobada' ? <div className="mt-3 text-xs text-navy/75">
        <p><b>Horas validadas:</b> {f.horas_validadas} · <b>Referencia:</b> {f.codigo_verificacion}</p>
        {onVerCertificado && <button className="mt-2 rounded-lg bg-teal px-4 py-2 font-semibold text-white" onClick={()=>onVerCertificado(f.perfil_id,p?.nombre||'Participante',f.nivel,p?.id_interno)}>Ver certificado autorizado →</button>}
      </div> : <div className="mt-3 grid gap-3">
        <label className="text-xs font-semibold text-navy">Estado
          <select className="mt-1 block w-full rounded-lg border border-navy/20 bg-white p-2" value={d.estado} onChange={e=>ajustar(f.id,'estado',e.target.value)}>
            <option value="solicitada">Solicitada</option><option value="en_revision">En revisión</option><option value="rechazada">Requiere ajustes</option><option value="aprobada">Aprobar certificado</option>
          </select>
        </label>
        <label className="text-xs font-semibold text-navy">Horas reales verificadas (bitácora)
          <input type="number" min="0" step="0.25" className="mt-1 block w-full rounded-lg border border-navy/20 bg-white p-2" value={d.horas_validadas} onChange={e=>ajustar(f.id,'horas_validadas',e.target.value)}/>
        </label>
        {[
          ['practicas_validadas','Portafolio y prácticas supervisadas revisadas'],
          ['evaluacion_validada','Evaluación de competencia validada'],
          ['menores_verificado','Formación y requisitos de protección de menores verificados']
        ].map(([field,label])=><label key={field} className="flex items-start gap-2 text-xs text-navy/80"><input type="checkbox" className="mt-0.5" checked={Boolean(d[field])} onChange={e=>ajustar(f.id,field,e.target.checked)}/>{label}</label>)}
        <label className="text-xs font-semibold text-navy">Observaciones y evidencias verificadas
          <textarea rows={3} maxLength={3000} className="mt-1 block w-full rounded-lg border border-navy/20 bg-white p-2" value={d.observaciones || ''} onChange={e=>ajustar(f.id,'observaciones',e.target.value)} placeholder="Anotar ubicación de bitácora, revisión de prácticas y evaluación institucional"/>
        </label>
        <button disabled={ocupado===f.id} onClick={()=>revisar(f)} className="rounded-lg bg-navy px-4 py-3 text-xs font-bold text-white disabled:opacity-50">{ocupado===f.id?'Guardando…':'Guardar revisión institucional'}</button>
        <p className="text-[11px] text-navy/55">Aprobar requiere mínimo {f.nivel===1?'180':'300'} h reales, prácticas, evaluación, safeguarding y revisión administrativa. El sistema impedirá aprobar si falta algún requisito.</p>
      </div>}
    </article>
  }
  return <section className="space-y-4"><div><h3 className="text-lg font-bold text-navy">Certificaciones · Validación de Dirección</h3><p className="text-xs text-navy/65">Las horas de los módulos son estimaciones: solamente se acreditan las horas reales comprobadas, competencias y prácticas revisadas. Ningún estudiante del Training puede aprobar su propio certificado.</p></div>
    {error && <p role="alert" className="rounded-lg border border-coral/40 bg-coral/10 p-3 text-sm text-coral">{error}</p>}
    <div className="grid gap-3 sm:grid-cols-2">{solicitado.map(mostrar)}</div>
    {solicitado.length===0 && <p className="rounded-xl bg-white p-4 text-sm text-navy/60">Aún no hay solicitudes pendientes. Los participantes pueden solicitarlas al completar su ruta.</p>}
    {aprobadas.length>0 && <details className="rounded-xl bg-white p-4"><summary className="cursor-pointer font-bold text-navy">Certificados aprobados ({aprobadas.length})</summary><div className="mt-3 grid gap-3 sm:grid-cols-2">{aprobadas.map(mostrar)}</div></details>}
  </section>
}