import { useEffect, useState } from 'react'
import { useIdioma } from '../i18n/idioma'
import { supabase } from '../lib/supabase'
import { listarMaterialesEstrategia, descargarMaterialEstrategia } from '../lib/materialesEstrategia'

export default function AfiliacionPrivada() {
  const { idioma } = useIdioma()
  const es = idioma === 'es'
  const [materiales, setMateriales] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')
  const [elegido, setElegido] = useState(null)
  const [descargando, setDescargando] = useState(false)
  const [intento, setIntento] = useState(0)

  useEffect(() => {
    let vigente = true
    setCargando(true)
    setMateriales([])
    setElegido(null)
    setError('')
    listarMaterialesEstrategia().then(data => {
      if (vigente) setMateriales(data)
    }).catch(e => { if (vigente) setError(e.message) })
      .finally(() => { if (vigente) setCargando(false) })
    const { data: listener } = supabase.auth.onAuthStateChange(evento => {
      if (evento === 'SIGNED_OUT' || evento === 'USER_DELETED') {
        vigente = false
        setMateriales([])
        setElegido(null)
        setCargando(false)
      }
    })
    return () => { vigente = false; listener.subscription.unsubscribe() }
  }, [intento])

  const actual = materiales.find(m => m.id === elegido)
  async function descargar() {
    setDescargando(true)
    setError('')
    try { await descargarMaterialEstrategia(actual.id) }
    catch (e) { setError(e.message) }
    finally { setDescargando(false) }
  }

  return <section className="rounded-3xl border border-teal/30 bg-white p-5 sm:p-6 space-y-4" aria-labelledby="afiliacion-titulo">
    <div>
      <p className="text-sm font-bold uppercase tracking-wide text-teal">{es ? 'Uso interno · Acceso restringido' : 'Internal use · Restricted access'}</p>
      <h3 id="afiliacion-titulo" className="mt-2 text-2xl font-extrabold text-navy">{es ? 'Afiliación · Estrategia y Marketing' : 'Affiliates · Strategy and Marketing'}</h3>
      <p className="mt-2 text-base leading-relaxed text-navy/75">{es ? 'Documentación comercial por país. Solo Administración y personas con asignación formal al área Estratégica pueden consultarla.' : 'Country-specific commercial documents. Only Administration and people formally assigned to the Strategic area can access them.'}</p>
    </div>
    {cargando && <p role="status">{es ? 'Comprobando acceso…' : 'Checking access…'}</p>}
    {error && <div role="alert" className="rounded-xl bg-red-50 p-4 text-red-800"><p>{error}</p><button onClick={() => setIntento(n => n + 1)} className="min-h-11 font-bold underline">{es ? 'Reintentar' : 'Try again'}</button></div>}
    {!cargando && !error && materiales.length === 0 && <p className="rounded-xl bg-navy/5 p-4 text-base">{es ? 'Acceso reservado. Elegir o solicitar una rama no concede acceso a estos documentos. Dirección debe confirmar tu asignación estratégica.' : 'Restricted access. Choosing or requesting a branch does not grant access. Administration must confirm your strategic assignment.'}</p>}
    {materiales.length > 0 && <>
      <div className="grid gap-3 sm:grid-cols-2">
        {materiales.map(m => <button key={m.id} onClick={() => { setElegido(m.id); setError('') }} aria-pressed={elegido === m.id}
          className={`rounded-2xl border-2 p-4 text-left min-h-24 ${elegido === m.id ? 'border-teal bg-teal/10' : 'border-navy/10 hover:border-teal/50'}`}>
          <span className="block font-bold text-lg text-navy">{m.titulo}</span>
          <span className="mt-2 block text-sm font-bold text-teal">{({ aprobado: es ? 'Condiciones confirmadas' : 'Confirmed terms', borrador: es ? 'Borrador · Pendiente de aprobación' : 'Draft · Approval pending', referencia: es ? 'Referencia · Revisión necesaria' : 'Reference · Review required' })[m.estado]}</span>
          <span className="mt-2 block text-base text-navy/75">{m.resumen}</span>
        </button>)}
      </div>
      {actual && <article className="space-y-5 border-t border-navy/10 pt-5" key={actual.id}>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h4 className="text-xl font-bold text-navy">{actual.titulo}</h4>
          <button onClick={descargar} disabled={descargando} className="min-h-12 rounded-xl bg-teal px-5 py-3 font-bold text-white disabled:opacity-50">{descargando ? (es ? 'Preparando…' : 'Preparing…') : (es ? 'Descargar PDF interno' : 'Download internal PDF')}</button>
        </div>
        <p className="rounded-xl border-l-4 border-gold bg-gold/10 p-4 text-base leading-relaxed">{actual.contenido?.nota}</p>
        {(actual.contenido?.secciones || []).map((s, i) => <section key={i} className="space-y-3">
          <h5 className="text-lg font-bold text-navy">{s.titulo}</h5>
          {(s.parrafos || []).map((p, j) => <p key={j} className="text-base leading-relaxed text-navy/85">{p}</p>)}
          {s.columnas?.length > 0 && <div className="overflow-x-auto rounded-xl border border-navy/10" tabIndex={0} role="region" aria-label={s.titulo}>
            <table className="w-full min-w-[480px] text-left text-base">
              <thead className="bg-navy text-white"><tr>{s.columnas.map((c, j) => <th key={j} scope="col" className="p-3">{c}</th>)}</tr></thead>
              <tbody>{(s.filas || []).map((f, j) => <tr key={j} className="border-t border-navy/10 odd:bg-teal/5">{f.map((c, k) => <td key={k} className="p-3 align-top">{c}</td>)}</tr>)}</tbody>
            </table>
          </div>}
        </section>)}
        <p className="text-sm text-navy/65">{es ? 'Documento interno. No compartir el PDF ni sus condiciones sin autorización.' : 'Internal document. Do not share this PDF or its terms without authorization.'}</p>
      </article>}
    </>}
  </section>
}
