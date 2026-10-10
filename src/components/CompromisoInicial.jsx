import { useMemo, useState } from 'react'
import { ROL_POR_ID } from '../data/roles'
import { SelectorIdioma, useIdioma } from '../i18n/idioma'

export const VERSION_COMPROMISO = '2026-10-10-formacion'

const COPIA = {
  es: {
    eyebrow: 'Paso obligatorio antes de comenzar',
    title: 'Acuerdo de participación en la formación',
    intro: 'Chanak desarrolla sus programas mediante su equipo y alianzas específicas con colegios, centros de aprendizaje y organizaciones. Esta formación te prepara para una posible función. Dirección conserva la versión y la fecha aceptadas.',
    scope: 'La formación no constituye un contrato de colaboración ni una contratación, y no autoriza a representar a Chanak, acceder a datos de estudiantes o prestar servicios. Cualquier colaboración posterior requiere su propio acuerdo, asignación y requisitos aplicables.',
    pathways: ['Mentoría: acompañamiento del aprendizaje virtual o presencial; inglés, Life Skills y tutorías según asignación posterior.', 'Coordinación: organización de hubs, centros y alianzas con colegios; equipos, familias y procesos. Incluye directores de colegios aliados dentro de su institución.', 'Estratégico: alianzas, apertura de mercados y países, captación y financiación de proyectos. Chanak asigna este perfil.'],
    role: 'Tu ruta de formación',
    noRole: 'Dirección todavía debe asignar tu ruta de formación.',
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
    intro: 'Chanak works through its team and specific partnerships with schools, learning centers and organizations. This training prepares you for a possible future function. Administration retains the accepted version and date.',
    scope: 'Training is not a collaboration or employment agreement and does not authorize you to represent Chanak, access student data or provide services. Any later collaboration requires a separate agreement, assignment and applicable requirements.',
    pathways: ['Mentoring: supporting virtual or in-person learning; English, Life Skills and tutoring subject to later assignment.', 'Coordination: organizing hubs, centers and school partnerships; teams, families and processes. Includes partner school directors within their institution.', 'Strategic: partnerships, market and country development, recruitment and project funding. Chanak assigns this profile.'],
    role: 'Your training pathway',
    noRole: 'Administration still needs to assign your training pathway.',
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
