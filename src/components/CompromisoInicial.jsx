import { useMemo, useState } from 'react'
import { ROL_POR_ID } from '../data/roles'
import { SelectorIdioma, useIdioma } from '../i18n/idioma'

export const VERSION_COMPROMISO = '2026-10-10-formacion'

const COPIA = {
  es: {
    eyebrow: 'Paso obligatorio antes de comenzar',
    title: 'Acuerdo de participación en la formación',
    intro: 'Chanak TrainUp Education, Inc. es la entidad titular que formaliza acuerdos, certificaciones y programas, contando con Chanak Foundation como su rama no lucrativa. Esta formación interna prepara para una posible función operativa o de voluntariado. Dirección conserva la versión y la fecha aceptadas.',
    scope: 'La formación no constituye por sí sola una contratación ni una relación laboral, y no autoriza a representar legalmente a la entidad, acceder a datos reservados ni prestar servicios no asignados. Cualquier colaboración posterior requiere definir funciones y formalizar el acuerdo correspondiente con la entidad donde la persona trabaje (Chanak TrainUp Education, Inc. para programas internacionales/EE. UU., o Asociación EducaFe para proyectos territoriales en España).',
    pathways: ['Tronco común: todas las personas inician por la misma formación institucional, modelo pedagógico y protección de menores.', 'Mentor: acompañamiento a estudiantes y familias (Off-Campus y Dual Diploma), clases de inglés, Life Skills, Extensión Local y evaluación educativa. Lo confirma Dirección Académica (Mariela Andrade).', 'Coordinador: supervisión de mentores y especialistas; incluye directores de centros partner. Lo confirma Dirección Académica (Mariela Andrade).', 'Estratégico: familias y matrícula, marketing, fondos estatales (ESA), alianzas y proyectos comunitarios (incluyendo alianzas y proyectos territoriales desde EducaFe). Lo confirma Dirección de Operaciones (Elías Vidal).'],
    role: 'Tu ruta de formación',
    noRole: 'Empezarás por el tronco común y podrás elegir tu rama desde el panel.',
    name: 'Nombre completo',
    territory: 'País de residencia',
    signature: 'Escribe nuevamente tu nombre como firma',
    checks: [
      'Comprendo que mi perfil de formación no equivale a una función operativa asignada.',
      'Mantendré confidencial la información interna y cualquier dato personal al que pudiera tener acceso.',
      'Utilizaré los materiales para mi formación y respetaré las condiciones de uso de Chanak y la privacidad de otras personas.',
      'Participaré con respeto y presentaré mis propias actividades y evidencias con información veraz.',
      'Comprendo que cualquier colaboración posterior requiere definir funciones y alcance, formalizar el acuerdo correspondiente y obtener autorización específica.',
    ],
    confirm: 'Confirmo que la información indicada es correcta y acepto estos compromisos.',
    button: 'Acepto y comienzo mi formación',
    saving: 'Guardando…',
    mismatch: 'La firma debe coincidir con el nombre indicado.',
    required: 'Completa los campos y marca todos los compromisos.',
    signout: 'Cerrar sesión',
  },
  en: {
    eyebrow: 'Required step before starting',
    title: 'Training participation agreement',
    intro: 'Chanak TrainUp Education, Inc. is the governing entity that signs agreements, issues certificates, and operates programs, with Chanak Foundation as its non-profit branch. This training prepares you for a potential operational or volunteer role. Administration retains the accepted version and date.',
    scope: 'Training does not by itself constitute an employment or formal engagement contract, nor does it authorize representing the entity, accessing student records, or delivering unauthorized services. Any subsequent collaboration requires executing a formal agreement with the specific entity where the person will serve (Chanak TrainUp Education, Inc. or Asociación EducaFe depending on the territorial scope).',
    pathways: ['Common core: everyone begins with institutional fundamentals, pedagogical model, and child protection.', 'Mentor: supporting Off-Campus and Dual Diploma students and families, English and Life Skills, Local Extension, and educational assessment. Confirmed by Academic Direction (Mariela Andrade).', 'Coordinator: supervising mentors and specialists; includes partner institution directors. Confirmed by Academic Direction (Mariela Andrade).', 'Strategic: families and enrollment, marketing, state funding (ESA), partnerships, and community projects (including territorial partnerships and projects via EducaFe). Confirmed by Operations Direction (Elías Vidal).'],
    role: 'Your training pathway',
    noRole: 'You will start with the common core and can choose your branch from the dashboard.',
    name: 'Full name',
    territory: 'Country of residence',
    signature: 'Type your full name again as your signature',
    checks: [
      'I understand that my training profile is not an assigned operational function.',
      'I will keep internal information and any personal data I may access confidential.',
      'I will use the materials for my training and respect Chanak usage conditions and other people’s privacy.',
      'I will participate respectfully and submit my own activities and evidence accurately.',
      'I understand that any later collaboration requires defined duties and scope, a formal agreement and specific authorization.',
    ],
    confirm: 'I confirm that the information above is correct and accept these commitments.',
    button: 'Accept and enter my training',
    saving: 'Saving…',
    mismatch: 'The signature must match the name entered above.',
    required: 'Complete every field and select every commitment.',
    signout: 'Sign out',
  },
}

export default function CompromisoInicial({ perfil, roles = [], onAceptar, onSalir }) {
  const { idioma } = useIdioma()
  const c = COPIA[idioma] || COPIA.es
  const [nombre, setNombre] = useState(perfil?.nombre || '')
  const [territorio, setTerritorio] = useState(perfil?.pais || '')
  const [firma, setFirma] = useState('')
  const [marcas, setMarcas] = useState(() => c.checks.map(() => false))
  const [confirmado, setConfirmado] = useState(false)
  const [ocupado, setOcupado] = useState(false)
  const [error, setError] = useState('')

  const funciones = useMemo(
    () => roles.map((id) => ROL_POR_ID[id]?.[idioma === 'es' ? 'nombreEs' : 'nombre'] || id),
    [roles, idioma]
  )

  async function enviar(e) {
    e.preventDefault()
    setError('')
    if (!nombre.trim() || !territorio.trim() || !confirmado || !marcas.every(Boolean)) {
      setError(c.required)
      return
    }
    if (firma.trim().toLocaleLowerCase() !== nombre.trim().toLocaleLowerCase()) {
      setError(c.mismatch)
      return
    }
    setOcupado(true)
    try {
      await onAceptar({
        version: VERSION_COMPROMISO,
        nombre_completo: nombre.trim(),
        territorio: territorio.trim(),
        funciones: funciones,
      })
    } catch (err) {
      setError(err.message)
    } finally {
      setOcupado(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream px-4 py-6 text-navy">
      <div className="mx-auto max-w-2xl">
        <div className="mb-4 flex items-center justify-between gap-3">
          <img src="/logo-chanak.png" alt="Chanak International Academy" className="h-14 w-14 rounded-xl bg-white p-1 shadow-sm" />
          <SelectorIdioma variante="claro" />
        </div>
        <form onSubmit={enviar} className="space-y-5 rounded-3xl bg-white p-5 shadow-sm sm:p-8">
          <div>
            <div className="text-sm font-bold uppercase tracking-wide text-teal">{c.eyebrow}</div>
            <h1 className="mt-2 text-2xl font-extrabold">{c.title}</h1>
            <p className="mt-3 text-base leading-relaxed text-navy/70">{c.intro}</p>
          </div>

          <section className="rounded-2xl border border-teal/20 p-4 text-base leading-relaxed">
            <ul className="space-y-3">{c.pathways.map((text) => <li key={text}>{text}</li>)}</ul>
            <p className="mt-4 rounded-xl bg-gold/15 p-4 font-semibold">{c.scope}</p>
          </section>

          <section className="rounded-2xl bg-cream p-4">
            <div className="font-bold">{c.role}</div>
            <p className="mt-1 text-sm text-navy/70">{funciones.length ? funciones.join(' · ') : c.noRole}</p>
          </section>

          <div className="grid gap-4 sm:grid-cols-2">
            <Campo label={c.name} value={nombre} onChange={setNombre} />
            <Campo label={c.territory} value={territorio} onChange={setTerritorio} />
          </div>

          <fieldset className="space-y-3">
            {c.checks.map((texto, i) => (
              <label key={texto} className="flex cursor-pointer gap-3 rounded-2xl border border-navy/10 p-4 text-base leading-relaxed hover:bg-cream/70">
                <input
                  type="checkbox"
                  checked={marcas[i]}
                  onChange={(e) => setMarcas((prev) => prev.map((v, idx) => idx === i ? e.target.checked : v))}
                  className="mt-1 h-6 w-6 shrink-0 accent-teal"
                />
                <span>{texto}</span>
              </label>
            ))}
          </fieldset>

          <Campo label={c.signature} value={firma} onChange={setFirma} />

          <label className="flex cursor-pointer gap-3 rounded-2xl bg-gold/15 p-4 font-semibold">
            <input type="checkbox" checked={confirmado} onChange={(e) => setConfirmado(e.target.checked)} className="mt-1 h-6 w-6 shrink-0 accent-teal" />
            <span>{c.confirm}</span>
          </label>

          {error && <p role="alert" className="rounded-xl border-l-4 border-coral bg-coral/10 px-4 py-3 text-sm text-coral">{error}</p>}

          <button disabled={ocupado} className="min-h-12 w-full rounded-xl bg-teal px-5 py-3 font-bold text-white disabled:opacity-50">
            {ocupado ? c.saving : c.button}
          </button>
          <button type="button" onClick={onSalir} className="min-h-11 w-full rounded-xl text-sm font-semibold text-navy/60 hover:bg-cream">{c.signout}</button>
          <p className="text-center text-xs text-navy/45">Version {VERSION_COMPROMISO}</p>
        </form>
      </div>
    </div>
  )
}

function Campo({ label, value, onChange }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input value={value} onChange={(e) => onChange(e.target.value)} className="mt-2 min-h-12 w-full rounded-xl border border-navy/20 bg-cream px-4 py-3 font-normal text-navy" required />
    </label>
  )
}
