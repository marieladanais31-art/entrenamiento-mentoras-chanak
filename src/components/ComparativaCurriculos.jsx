import { useState, useMemo } from 'react'
import { useIdioma } from '../i18n/idioma'

// Datos de referencia económica y pedagógica para coordinadores Chanak 2026-2027
const CURRICULOS = [
  {
    id: 'ace',
    nombre: 'A.C.E. (Accelerated Christian Education)',
    categoria: 'Reference / Preferred Curriculum Pathway',
    insignia: 'Vía de Referencia y Preferente',
    tono: 'teal',
    formato: 'Cuadernillos físicos (PACEs consumibles)',
    estructura: '12 PACEs por materia al año (aprox. 60 PACEs en total para 5 materias core)',
    rangoCostoUSD: { min: 230, max: 320 },
    costoGuiasDocenteUSD: 95, // Scoring Keys reutilizables
    costoDiagnosticoUSD: 25, // Diagnostic Test online
    envioEstimadoUSD: { usa: 25, europa: 75, latam: 65 },
    metodologia: 'Auto-instruccional por dominio (Mastery-based, umbral ≥ 80%). Rutina estricta con Daily Goal Tracker, banderas de consulta y Review Station con custodia de claves.',
    requisitoCoordinador: 'Exige para el coordinador por lo menos 1 semana de formación presencial oficial A.C.E.',
    ventajas: [
      'Máxima autonomía del estudiante: diseñado para autoestudio individualizado sin depender de clases magistrales.',
      'Integración bíblica profunda: versículos para memorizar y rasgos de carácter piadoso en cada lección.',
      'Ideal para Learning Centers y Hubs: permite que alumnos de distintos grados trabajen en la misma sala con un solo supervisor.',
      'Control riguroso de dominio: Checkups, Self-Test y PACE Test con umbral mínimo del 80% obligatorio.',
      'Excelente programa infantil fonético: Kindergarten with Ace and Christi y ABCs with Ace and Christi.',
    ],
    desafios: [
      'Metodología estricta: requiere disciplina rigurosa con las banderas, la Review Station y el bolígrafo rojo.',
      'Exige formación presencial obligatoria de 1 semana para el coordinador del centro.',
      'Formato tradicional en papel (PACEs consumibles anuales).',
    ],
    perfilIdeal: 'Estudiantes que necesitan estructura y avanzar a su propio ritmo sin ser frenados; centros presenciales y Learning Hubs multiedad.',
  },
  {
    id: 'lifepac',
    nombre: 'LIFEPAC (Alpha Omega Publications - AOP)',
    categoria: 'Reviewed Alternative Curriculum Pathway',
    insignia: 'Vía Alternativa Revisada',
    tono: 'gold',
    formato: 'Cuadernillos a color (10 worktexts por materia)',
    estructura: '10 worktexts por materia al año (50 cuadernillos en total para 5 materias core)',
    rangoCostoUSD: { min: 260, max: 360 },
    costoGuiasDocenteUSD: 70, // Teacher\'s Guides con exámenes alternativos
    costoDiagnosticoUSD: 15,
    envioEstimadoUSD: { usa: 25, europa: 80, latam: 70 },
    metodologia: 'Auto-instruccional por unidades mensuales. Incluye Section Reviews, Self-Tests y Unit Tests sumativos al final de cada worktext.',
    requisitoCoordinador: 'Formación metodológica Chanak (sin exigencia de semana presencial externa).',
    ventajas: [
      'Diseño visual atractivo: cuadernillos a todo color con excelente diagramación para estudiantes visuales.',
      'Exámenes alternativos incluidos: la Teacher\'s Guide incluye tests de recuperación si no se alcanza el 80%.',
      'Ritmo mensual claro: cada worktext cubre unas 3 a 4 semanas de trabajo, facilitando la planificación.',
      'Menor rigidez operativa: no exige banderas ni estación de corrección fija, ideal para el hogar.',
      'Sólida base cristiana en ciencias, historia, matemáticas, lenguaje y Biblia.',
    ],
    desafios: [
      'Menos énfasis en el desglose milimétrico de metas diarias que A.C.E.',
      'Requiere mayor orientación del padre o mentor al inicio de unidades complejas.',
    ],
    perfilIdeal: 'Familias en Homeschool Guiado (Off-Campus) que prefieren cuadernillos modernos a color y un ritmo mensual previsible.',
  },
  {
    id: 'cle',
    nombre: 'Christian Light Education (CLE)',
    categoria: 'Reviewed Alternative Curriculum Pathway',
    insignia: 'Vía Alternativa Revisada',
    tono: 'navy',
    formato: 'Cuadernillos LightUnits (Sunrise Edition)',
    estructura: '10 LightUnits por materia al año con lecciones diarias numeradas',
    rangoCostoUSD: { min: 185, max: 265 },
    costoGuiasDocenteUSD: 45, // Answer Keys muy económicas y reutilizables
    costoDiagnosticoUSD: 15,
    envioEstimadoUSD: { usa: 20, europa: 65, latam: 60 },
    metodologia: 'Aprendizaje incremental continuo (Sunrise Edition) con repaso espiralado acumulativo en cada lección.',
    requisitoCoordinador: 'Formación metodológica Chanak.',
    ventajas: [
      'Sobresaliente en Matemáticas y Lengua: introduce conceptos en dosis graduales y los repasa todo el año.',
      'Excelente retención: el repaso diario acumulativo evita que el alumno olvide lo aprendido meses atrás.',
      'El costo más económico: material consumible muy accesible y Answer Keys económicas.',
      'Secuencia diaria estructurada: cada lección viene numerada y delimitada.',
      'Excelente preparación para pruebas estandarizadas por su rigor conceptual.',
    ],
    desafios: [
      'Diseño austero (blanco y negro / dos tintas, sin ilustraciones saturadas).',
      'No debe mezclarse con la rutina de A.C.E. (no usa banderas ni Review Station).',
    ],
    perfilIdeal: 'Alumnos que necesitan consolidar matemáticas y lenguaje con repaso constante; familias y centros con presupuesto ajustado que priorizan rigor sobre diseño.',
  },
  {
    id: 'flex',
    nombre: 'Chanak Flex (Vía Individualizada Revisada)',
    categoria: 'Individualized Reviewed Curriculum Pathway',
    insignia: 'Vía Individualizada',
    tono: 'coral',
    formato: 'Materiales aprobados en el PEI (libros de texto, híbridos o editoriales aprobadas)',
    estructura: 'Unidades de aprendizaje organizadas en el PEI con evidencias y evaluaciones institucionales supervisadas',
    rangoCostoUSD: { min: 150, max: 450 },
    costoGuiasDocenteUSD: 0,
    costoDiagnosticoUSD: 20,
    envioEstimadoUSD: { usa: 20, europa: 50, latam: 50 },
    metodologia: 'Libertad de material con validación institucional: propuesta de la familia aprobada en el PEI y evaluada con rúbricas y exámenes institucionales Chanak (≥80%).',
    requisitoCoordinador: 'Acreditación de Mentor / Coordinador Chanak para auditoría de evidencias.',
    ventajas: [
      'Máxima flexibilidad: permite utilizar editoriales de prestigio (Abeka, BJU, Apologia, Saxon) o libros ya adquiridos.',
      'Adaptabilidad en High School: excelente para optativas, artes, deportes, tecnología o intereses vocacionales.',
      'Respeto al perfil singular del alumno: personalización profunda según dones y ritmos de aprendizaje.',
      'Acreditación oficial por Chanak: la escuela evalúa y valida el dominio, no la editorial.',
    ],
    desafios: [
      'Mayor dedicación del mentor para auditar evidencias y planificar el PEI.',
      'No hay reconocimiento automático de crédito: cada curso requiere evaluación demostrada.',
    ],
    perfilIdeal: 'Estudiantes de secundaria alta (High School) con trayectorias vocacionales, o familias con materiales de alta calidad ya consolidados.',
  },
]

export default function ComparativaCurriculos({ onVolver, onVerCoordinacion }) {
  const { idioma } = useIdioma()
  const [numAlumnos, setNumAlumnos] = useState(1)
  const [region, setRegion] = useState('europa') // 'usa', 'europa', 'latam'
  const [etapa, setEtapa] = useState('primaria') // 'infantil', 'primaria', 'secundaria', 'highschool'
  const [curriculoSel, setCurriculoSel] = useState('ace')
  const [copiado, setCopiado] = useState(false)

  // Factores multiplicadores según etapa
  const factorEtapa = useMemo(() => {
    switch (etapa) {
      case 'infantil': return 0.85
      case 'primaria': return 1.0
      case 'secundaria': return 1.15
      case 'highschool': return 1.25
      default: return 1.0
    }
  }, [etapa])

  // Cálculos por currículo
  const calculos = useMemo(() => {
    return CURRICULOS.map((c) => {
      const costoMaterialBase = Math.round(((c.rangoCostoUSD.min + c.rangoCostoUSD.max) / 2) * factorEtapa)
      const envioPorAlumno = Math.round(c.envioEstimadoUSD[region] / (numAlumnos > 3 ? 1.8 : 1))
      const diagnostico = c.costoDiagnosticoUSD
      const guiasProrrateadas = Math.round(c.costoGuiasDocenteUSD / Math.max(1, numAlumnos))

      const totalPorAlumnoAnual = costoMaterialBase + envioPorAlumno + diagnostico + guiasProrrateadas
      const cuotaMensualSugerida = Math.round(totalPorAlumnoAnual / 10) // 10 meses escolares
      const inversionTotalSede = totalPorAlumnoAnual * numAlumnos

      return {
        ...c,
        costoMaterialBase,
        envioPorAlumno,
        diagnostico,
        guiasProrrateadas,
        totalPorAlumnoAnual,
        cuotaMensualSugerida,
        inversionTotalSede,
      }
    })
  }, [numAlumnos, region, factorEtapa])

  const curriculoActivo = calculos.find((c) => c.id === curriculoSel) || calculos[0]

  function copiarResumen() {
    const texto = `INFORME COMPARATIVO DE CURRÍCULOS · CHANAK INTERNATIONAL ACADEMY
Escenario: ${numAlumnos} alumno(s) | Región: ${region.toUpperCase()} | Etapa: ${etapa.toUpperCase()}

1. A.C.E. (Vía de Referencia y Preferente)
- Costo estimado anual por alumno: ~$${calculos.find(c => c.id === 'ace').totalPorAlumnoAnual} USD (~$${calculos.find(c => c.id === 'ace').cuotaMensualSugerida} USD/mes)
- Ventaja clave: Máxima autonomía, versículos bíblicos y carácter en cada PACE, ideal para Learning Centers multiedad.
- Requisito: 1 semana presencial obligatoria para coordinadores.

2. LIFEPAC (Vía Alternativa Revisada)
- Costo estimado anual por alumno: ~$${calculos.find(c => c.id === 'lifepac').totalPorAlumnoAnual} USD (~$${calculos.find(c => c.id === 'lifepac').cuotaMensualSugerida} USD/mes)
- Ventaja clave: Cuadernillos modernos a todo color, exámenes alternativos de recuperación, excelente para Off-Campus.

3. CHRISTIAN LIGHT EDUCATION (CLE) (Vía Alternativa Revisada)
- Costo estimado anual por alumno: ~$${calculos.find(c => c.id === 'cle').totalPorAlumnoAnual} USD (~$${calculos.find(c => c.id === 'cle').cuotaMensualSugerida} USD/mes)
- Ventaja clave: Repaso continuo espiralado, sobresaliente en matemáticas y lengua, costo altamente accesible.

4. CHANAK FLEX (Vía Individualizada)
- Costo estimado anual por alumno: ~$${calculos.find(c => c.id === 'flex').totalPorAlumnoAnual} USD (variable según editorial)
- Ventaja clave: Máxima adaptabilidad pedagógica y vocacional, validado por PEI y evaluaciones Chanak.

Regla Institucional Chanak:
«El currículo es el material; Chanak es la escuela que diagnostica, supervisa, evalúa y certifica. El dominio mínimo exigido es del 80%.»`

    navigator.clipboard.writeText(texto)
    setCopiado(true)
    setTimeout(() => setCopiado(false), 3000)
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Botón Volver */}
      <div className="flex items-center justify-between">
        <button onClick={onVolver} className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:underline">
          <span>←</span>
          <span>{idioma === 'es' ? 'Volver al panel' : 'Back to Dashboard'}</span>
        </button>
        {onVerCoordinacion && (
          <button onClick={onVerCoordinacion} className="text-xs font-bold text-navy/70 hover:text-teal underline">
            Ir a Coordinación SIS →
          </button>
        )}
      </div>

      {/* Cabecera Principal */}
      <section className="relative overflow-hidden rounded-3xl border-t-4 border-gold bg-[#133854] p-6 sm:p-8 text-white shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold border border-gold/30">
              Herramienta de Rama Estratégica y Dirección
            </span>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Evaluador de Costos y Ventajas Curriculares
            </h1>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm text-white/80 leading-relaxed">
              Compara costos de adquisición, logística, ventajas pedagógicas y requisitos operativos para orientar
              a familias de Homeschool (Off-Campus) o presupuestar sedes presenciales (Partner Learning Centers).
            </p>
          </div>
          <button
            onClick={copiarResumen}
            className="self-start sm:self-center shrink-0 rounded-2xl bg-gold px-4 py-2.5 text-xs font-bold text-navy hover:bg-gold/90 transition shadow-sm"
          >
            {copiado ? '✓ Resumen copiado' : '📋 Copiar propuesta para familia/sede'}
          </button>
        </div>

        {/* Regla de oro Chanak */}
        <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-3.5 text-xs text-white/90">
          <p>
            💡 <b>Regla institucional Chanak:</b> <i>«El currículo es el material didáctico; Chanak es la escuela que diagnostica,
            supervisa, audita y certifica. Ningún currículo acredita por sí solo ni garantiza créditos automáticos:
            se exige evaluación demostrada con dominio ≥ 80%.»</i>
          </p>
        </div>
      </section>

      {/* SIMULADOR INTERACTIVO DE COSTOS */}
      <section className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm space-y-5">
        <div className="flex items-center justify-between border-b border-navy/10 pb-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">Paso 1 · Configurar el escenario</span>
            <h2 className="text-lg font-bold text-navy">Simulador de Costes de Adquisición y Logística</h2>
          </div>
          <span className="text-xs text-navy/50">Cifras estimadas de referencia anual</span>
        </div>

        {/* Controles de Simulación */}
        <div className="grid gap-4 sm:grid-cols-3">
          {/* Número de Alumnos */}
          <div className="rounded-2xl bg-cream/50 p-4 border border-navy/10 space-y-2">
            <label className="block text-xs font-bold text-navy uppercase tracking-wider">
              👥 Número de Alumnos: <span className="text-teal font-extrabold text-sm">{numAlumnos}</span>
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={numAlumnos}
              onChange={(e) => setNumAlumnos(Number(e.target.value))}
              className="w-full accent-teal"
            />
            <div className="flex gap-1.5">
              {[1, 5, 10, 20, 30].map((n) => (
                <button
                  key={n}
                  onClick={() => setNumAlumnos(n)}
                  className={`flex-1 rounded-lg py-1 text-[11px] font-bold border transition ${
                    numAlumnos === n ? 'bg-teal text-white border-teal' : 'bg-white text-navy/70 border-navy/15 hover:bg-cream'
                  }`}
                >
                  {n === 1 ? '1 (Familia)' : `${n}`}
                </button>
              ))}
            </div>
          </div>

          {/* Etapa Académica */}
          <div className="rounded-2xl bg-cream/50 p-4 border border-navy/10 space-y-2">
            <label className="block text-xs font-bold text-navy uppercase tracking-wider">
              🎓 Etapa Académica
            </label>
            <select
              value={etapa}
              onChange={(e) => setEtapa(e.target.value)}
              className="w-full rounded-xl border border-navy/20 bg-white p-2.5 text-xs font-semibold text-navy focus:border-teal focus:outline-none"
            >
              <option value="infantil">Pre-K / Kindergarten (3 a 5 años)</option>
              <option value="primaria">Elementary / Primaria (Grados 1 a 6)</option>
              <option value="secundaria">Middle School / Secundaria (Grados 7 y 8)</option>
              <option value="highschool">High School / Bachillerato (Grados 9 a 12)</option>
            </select>
            <p className="text-[10px] text-navy/55">
              {etapa === 'infantil' && 'Enfocado en fonética ABCs y destrezas motrices.'}
              {etapa === 'primaria' && '5 materias core con cuadernillos anuales.'}
              {etapa === 'secundaria' && 'Mayor profundidad y preparación a High School.'}
              {etapa === 'highschool' && 'Asignaturas orientadas a créditos para el diploma USA.'}
            </p>
          </div>

          {/* Región y Envíos */}
          <div className="rounded-2xl bg-cream/50 p-4 border border-navy/10 space-y-2">
            <label className="block text-xs font-bold text-navy uppercase tracking-wider">
              🌎 Destino / Logística
            </label>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full rounded-xl border border-navy/20 bg-white p-2.5 text-xs font-semibold text-navy focus:border-teal focus:outline-none"
            >
              <option value="usa">Estados Unidos (Tarifa doméstica)</option>
              <option value="europa">España / Europa (Envío internacional + aduana)</option>
              <option value="latam">Latinoamérica (Importación / Flete aéreo)</option>
            </select>
            <p className="text-[10px] text-navy/55">
              Calcula el impacto del flete e importación en el coste final por alumno.
            </p>
          </div>
        </div>

        {/* Tarjetas Comparativas de Costos */}
        <div className="grid gap-3 sm:grid-cols-4 pt-2">
          {calculos.map((c) => {
            const activo = c.id === curriculoSel
            return (
              <button
                key={c.id}
                onClick={() => setCurriculoSel(c.id)}
                className={`rounded-2xl p-4 text-left border-2 transition relative flex flex-col justify-between ${
                  activo
                    ? 'border-teal bg-teal/5 shadow-md scale-[1.01]'
                    : 'border-navy/10 bg-white hover:border-navy/25 hover:shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal line-clamp-1">{c.insignia}</span>
                    {activo && <span className="h-2 w-2 rounded-full bg-teal shrink-0" />}
                  </div>
                  <h3 className="text-sm font-bold text-navy leading-snug">{c.nombre}</h3>
                  <div className="mt-3">
                    <div className="text-2xl font-black text-navy">${c.totalPorAlumnoAnual} <span className="text-xs font-normal text-navy/60">USD/año</span></div>
                    <div className="text-xs font-semibold text-teal mt-0.5">~${c.cuotaMensualSugerida} USD / mes (10 meses)</div>
                  </div>
                </div>

                <div className="mt-4 border-t border-navy/10 pt-2 text-[11px] space-y-1 text-navy/70">
                  <div className="flex justify-between">
                    <span>Material:</span>
                    <span className="font-semibold text-navy">${c.costoMaterialBase}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Envío:</span>
                    <span className="font-semibold text-navy">${c.envioPorAlumno}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diagnóstico/Guías:</span>
                    <span className="font-semibold text-navy">${c.diagnostico + c.guiasProrrateadas}</span>
                  </div>
                  {numAlumnos > 1 && (
                    <div className="flex justify-between border-t border-navy/10 pt-1 font-bold text-navy">
                      <span>Total sede ({numAlumnos}):</span>
                      <span className="text-teal">${c.inversionTotalSede}</span>
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </section>

      {/* DETALLE PEDAGÓGICO Y VENTAJAS DEL CURRÍCULO SELECCIONADO */}
      <section className="rounded-3xl border-2 border-teal bg-white p-6 shadow-sm space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-navy/10 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-teal">Paso 2 · Análisis cualitativo</span>
            <h2 className="text-xl font-bold text-navy">{curriculoActivo.nombre}</h2>
            <p className="text-xs text-navy/60 font-medium">{curriculoActivo.categoria}</p>
          </div>
          <div className="rounded-xl bg-cream px-3 py-1.5 text-xs text-navy">
            <b>Formato:</b> {curriculoActivo.formato}
          </div>
        </div>

        {/* Metodología y Requisitos */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-cream/40 p-4 border border-navy/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy">📖 Metodología Operativa</h4>
            <p className="mt-1.5 text-xs text-navy/80 leading-relaxed">{curriculoActivo.metodologia}</p>
            <p className="mt-2 text-[11px] font-semibold text-navy/60"><b>Estructura:</b> {curriculoActivo.estructura}</p>
          </div>

          <div className="rounded-2xl bg-gold/10 p-4 border border-gold/30">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy">🏛 Requisito para el Coordinador</h4>
            <p className="mt-1.5 text-xs text-navy/85 leading-relaxed font-medium">{curriculoActivo.requisitoCoordinador}</p>
            <div className="mt-2 text-[11px] text-navy/70">
              <b>Perfil recomendado:</b> {curriculoActivo.perfilIdeal}
            </div>
          </div>
        </div>

        {/* Ventajas vs Desafíos */}
        <div className="grid gap-4 sm:grid-cols-2 pt-1">
          {/* Ventajas */}
          <div className="rounded-2xl border border-teal/30 bg-teal/5 p-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal flex items-center gap-1.5">
              <span>✅</span> Ventajas Pedagógicas y Operativas
            </h4>
            <ul className="space-y-1.5 text-xs text-navy/85">
              {curriculoActivo.ventajas.map((v, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-teal font-bold shrink-0">•</span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Desafíos */}
          <div className="rounded-2xl border border-coral/30 bg-coral/5 p-4 space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-coral flex items-center gap-1.5">
              <span>⚠️</span> Aspectos a Considerar y Límites
            </h4>
            <ul className="space-y-1.5 text-xs text-navy/85">
              {curriculoActivo.desafios.map((d, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-coral font-bold shrink-0">•</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MATRIZ DE DECISIÓN RÁPIDA PARA COORDINADORES */}
      <section className="rounded-3xl border border-navy/10 bg-white p-6 shadow-sm space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-teal">Guía de Asesoramiento</span>
          <h3 className="text-lg font-bold text-navy">🎯 Matriz de Decisión: ¿Qué vía recomendar en cada caso?</h3>
          <p className="text-xs text-navy/60">Usa estas pautas cuando una familia o un director de centro consulte qué opción elegir:</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-cream/40 p-4 border border-navy/10">
            <div className="text-xs font-bold text-teal">Situación 1 · Sede Presencial o Learning Hub Multiedad</div>
            <p className="mt-1 text-xs text-navy/80 leading-relaxed">
              <b>Recomendación: A.C.E. (con coordinador capacitado).</b> Su sistema de autoestudio individualizado,
              Review Station y metas diarias permite gestionar eficientemente alumnos de múltiples edades en una misma sala.
            </p>
          </div>

          <div className="rounded-2xl bg-cream/40 p-4 border border-navy/10">
            <div className="text-xs font-bold text-teal">Situación 2 · Alumno con lagunas en Matemáticas o Lenguaje</div>
            <p className="mt-1 text-xs text-navy/80 leading-relaxed">
              <b>Recomendación: Christian Light Education (CLE).</b> Su método incremental espiralado (Sunrise Edition)
              revisa diariamente los conceptos y garantiza una comprensión profunda y duradera.
            </p>
          </div>

          <div className="rounded-2xl bg-cream/40 p-4 border border-navy/10">
            <div className="text-xs font-bold text-teal">Situación 3 · Homeschool Guiado con deseo de autonomía visual</div>
            <p className="mt-1 text-xs text-navy/80 leading-relaxed">
              <b>Recomendación: LIFEPAC.</b> Sus cuadernillos a color y ritmo mensual por worktexts son muy apreciados
              por familias que desean un programa completo sin la rigidez de banderas de A.C.E.
            </p>
          </div>

          <div className="rounded-2xl bg-cream/40 p-4 border border-navy/10">
            <div className="text-xs font-bold text-teal">Situación 4 · High School con materias optativas específicas</div>
            <p className="mt-1 text-xs text-navy/80 leading-relaxed">
              <b>Recomendación: Chanak Flex / Dual Diploma.</b> Permite aprobar en el PEI materias como Apologética,
              ciencias avanzadas (Apologia), idiomas o artes, validadas con exámenes y evidencias supervisadas por Chanak.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
