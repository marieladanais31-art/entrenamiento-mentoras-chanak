# 6-oct-2026 · Equivalencia realista de dedicación

- 37 módulos recalculados por actividad: lectura de estudio a 150 palabras/min más repaso, consulta dirigida, práctica, evidencia y evaluación. Eliminado el relleno de práctica para alcanzar metas antiguas.
- Mentor base: 41,5 h; Coordinator: 52 h acumuladas; bloque transversal de contacto con menores: 6 h adicionales según rol. Totales, rutas, progreso, textos ES/EN y certificado interno coherentes.
- Desglose mostrado en minutos. Estimaciones distintas de asistencia real; se conserva aprobación por dominio, portafolios y requisito de protección de menores. No se borra el progreso ni se modifica Supabase.

# 6 de octubre de 2026 · Operación estatal y atención de familias

- Integra la captación, facturación y responsables de la rama patch-4 tras revisión.
- EMA y CHOOSE usan fuentes oficiales 2026–2027, con reserva, factura y cobro diferenciados. Se evita prometer sincronización entre Portal, SIS y plataformas de fondos.
- Matriz enlaza guías Drive de EMA y CHOOSE; tarifa familiar y convenio permanecen separados. La aprobación institucional y la integración de cobro se identifican como etapas distintas.
- No cambia permisos, horas ni Supabase. Walmart: documentación operativa fija cuatro semanas y 3.500 USD; no anuncia concesión o envío.

## Cierre de interfaz · 5 octubre 2026

- Área colaboradora retirada del Header, Dashboard y navegación. Componentes obsoletos eliminados.
- `visionaria` conservado como valor interno, etiqueta visible Estratégico. Sin cambios de base de datos ni ejecución de migraciones.
- Referencias de lecturas, vídeos, traducciones y administración alineadas con entidades colaboradoras independientes.
- Credenciales demo retiradas de la interfaz; coordinación debe facilitar las cuentas autorizadas.
- Enlaces de Drive corregidos a partir del inventario real y People/Roles incorporado a la biblioteca con acceso desde la carpeta oficial existente.
- Manifest audiovisual derivado de módulos y series solicitadas; estados PLANNED/DRAFT distinguidos de FINAL. No se han producido ni integrado MP4 finales.
- El manifest público usa nombres y rutas documentales; los enlaces internos y editables permanecen en Drive.
- Lint incorporado. Publicación y fusión pendientes de cierre audiovisual y verificación de Vercel.

# CHANGELOG · App de formación 2026–2027

**Versión:** `training-2026-2027` · 2 de octubre de 2026
**Rama:** `training-2026-2027` (respaldo de la versión anterior: rama `archive-training-msa-2026`)
**Fuente oficial:** `CHANAK_DOCUMENTOS_2026-2027_FINAL`

## 2026-10-06 · Entrega B (rutas y contenido)

- **Bloque 10 · Growth, Markets, Partnerships & Systems** (por rol; no cuenta para las 180/300 h; 24 h; 5 módulos, 5 vídeos V33–V37, 25 preguntas):
  T10.1 Market Development & Representation y Plan de Entrada al Mercado a 30 días (incluye uso responsable de contratistas/Fiverr); T10.2 Grants & Project Development y Life Skills 4-Week Community Pilot; T10.3 Modelos de personas y alianzas (Voluntario, Contratista, Socio; W-9; 1099-NEC sin umbral fijo; advertencia contratista vs empleado; plantillas «sujetas a revisión legal/administrativa»); T10.4 Sistemas SIS, Portal y Dual Diploma Portal (demostración, práctica con datos ficticios, validación); T10.5 Rutas de especialista (English Teacher, Life Skills Facilitator, lengua local, Educational Assessment no clínico, REFER TO LICENSED PROFESSIONAL).
- **State Program Service Matrix** (vista interna desde el panel): columnas State, Program, Service, Status, Approved?, Marketplace, Price, Student eligibility, Documentation, Last verified, Official source. Florida EMA: solo Matrícula aprobada; Alabama CHOOSE: ESP aprobado (ClassWallet en curso); Texas, Arizona, Arkansas, Utah, West Virginia, NCAA, NCES y DBU: en proceso/en revisión. Precios «Por confirmar».
- Roles: se asignan los módulos del Bloque 10 a cada función y se eliminan las «rutas en preparación».
- Texas y demás estados en proceso: se prepara documentación y flujos como listos para activar, pero el estado visible y las comunicaciones a familias siguen siendo «en proceso» hasta confirmación. El plazo de NCES/Texas figura solo como información institucional.

## 2026-10-05 · Entrega A · CHANAK STAFF TRAINING & OPERATIONS SYSTEM (base)
**Principio ROLE ≠ PERSON.** Un rol describe una función; una persona puede tener varios roles compatibles. Cada rol debe estar asignado formalmente, con su formación completada y respetando los límites de autoridad (los permisos no se mezclan).
- **Roles múltiples:** nueva tabla `perfil_roles` (migración aditiva `supabase/migracion_roles.sql`, pendiente de ejecutar) y panel Admin → Usuarias con «Roles asignados» (**3 roles de formación: Mentor —incluye profesores especialistas—, Coordinador y Estratégico —los demás—**, cada uno con sus funciones; territorio y programa para Representantes) y `direct_child_contact` (automático por roles o fijado por administración). Sin migración, la app deriva los roles de `tipo_acceso` y no se rompe nada.
- **Catálogo de roles** (`src/data/roles.js`): Academic Mentor, Academic Coordinator, English Teacher, Life Skills & Leadership Facilitator, Local Language Extension & English Coordinator, Educational Assessment Specialist, Academic Records/SIS, Country/State/Program Representative, Family Enrollment & State Programs Advisor, Institutional Partnerships Representative, Grants & Project Development, Life Skills Project Coordinator. Cada rol: unidad, sistemas, módulos, límites, escalamiento y permissions checklist. Perfil consultable en la app (Organigrama → rol).
- **Chanak Core (Bloque 1):** retitulado «CHANAK CORE · Identidad, estructura y funcionamiento»; T1.1 incorpora «Rol ≠ Persona» y «Organigrama funcional». **Organigrama funcional** gráfico. +2 preguntas de Knowledge Check.
- **Chanak Operational Glossary:** 52 términos, buscable y disponible desde cualquier pantalla (botón «Glosario»).
- **Bloque 9 · Child & Adolescent Development, Psychology & Educational Accompaniment** (transversal; 4 módulos T9.1–T9.4; **18 h** recalculadas a partir del contenido real (las 50 h de la formación original estaban sobreestimadas): 5/4/4/5 h; **fuera de las 180/300 h**; 4 vídeos V29–V32; 20 preguntas). Secuencia OBSERVAR → DOCUMENTAR → APOYAR → COMUNICAR → ESCALAR/DERIVAR; sin diagnóstico clínico; separado de Safeguarding.
- **Gating de contacto con menores:** si `direct_child_contact` = sí, es obligatorio completar Child & Adolescent Development, Safeguarding (6.1), Online Safety y protección de datos (6.2); sin ellos no se completa la ruta ni se emite certificado. Contacto ocasional → Safeguarding Awareness (6.1).
- **Panel:** «Tu ruta» (avance por rol; las rutas que aún no están en la app se muestran como «en preparación», nunca como 100 %) y «Tus sistemas».
- **Documentos de uso interno:** los de `07_US_PROGRAMS_COMPLIANCE` y `CONTRATOS` se marcan «Uso interno · administración y coordinación»; la ruta CONTRATOS ahora está en la raíz de FINAL; la presentación institucional pasa a `Chanak_Institucional_6_Slides.pptx`.
- Integra los cambios del PR #3 (programas y vinculaciones en proceso en EE. UU.).
- **Decisiones pendientes de Chanak Central:** ver el informe de la entrega.

## Identidad
- Nuevo título: **CHANAK · FORMACIÓN DE MENTORES Y COORDINADORES** · «Comprender el modelo. Acompañar con criterio. Documentar con excelencia.»
- Eliminadas las afirmaciones incorrectas: «acreditada MSA-CESS» → **MSA-CESS Candidate**; la formación ya no se presenta como evidencia MSA T5a.
- Eliminadas las referencias a Self-Study como propósito, a «18/12 módulos» y al Nivel 3 «Socia Visionaria».

## Estructura
- 2 niveles: **CHANAK CERTIFIED MENTOR** (Bloques 1–6 · 22 módulos · 180 h de referencia) y **CHANAK CERTIFIED COORDINATOR** (+ Bloque 8 · 4 módulos · 300 h acumuladas).
- Bloque 7 **USA State Programs / Compliance** por rol (no suma a la certificación). STATE FUNDING ≠ CURRICULUM.
- 8 bloques · 28 módulos · 28 vídeos · 113 preguntas de Knowledge Check basadas en decisiones y situaciones reales.
- Contenido nuevo alineado con la documentación final: 60/20/20, marco orientado al dominio (80 %), programas, Curriculum Pathways (A.C.E. Reference/Preferred; LIFEPAC y CLE Reviewed Alternative; Chanak Flex Individualized Reviewed), Scope & Sequence, assessment A/B/C, créditos, SIS/Portal/Dual Diploma Portal, safeguarding, Extensión Local (rol Local Language Extension & English Coordinator), Florida EMA (servicio Matrícula aprobado), Alabama CHOOSE (Approved ESP).

## Experiencia
- Recorrido de módulo: Vídeo → Lectura → Práctica → Knowledge Check → Evidencia → Completado (stepper mobile-first).
- Panel «Mi ruta» con barra Mentor 180 h → Coordinator 300 h y acceso directo al siguiente módulo.
- Un módulo solo se completa con el Knowledge Check aprobado (80 %), con reintentos ilimitados (la administración puede registrar horas retroactivas).
- Fuentes documentales visibles en cada módulo.

## Vídeos
- Nueva configuración central `src/data/videos.js` (id, titulo, bloque, descripcion, videoUrl, duracion, orden, modulo, guion).
- Reproductor compatible con MP4 directo, YouTube, Vimeo, Google Drive, Google Vids y URL genérica.
- Nueva pestaña **Admin → Vídeos** para configurar cada vídeo sin desplegar.
- `GUIONES_VIDEOS.md` (101 vídeos MSA) archivado en `archive/GUIONES_VIDEOS_MSA_2026.md`; nuevo `GUIONES_VIDEOS_2026-2027.md` generado por `scripts/generar-guiones.mjs`.

## Certificados
- CHANAK CERTIFIED MENTOR y CHANAK CERTIFIED COORDINATOR con nombre, horas/pathway, fecha, ID interno, firma autorizada y Chanak International Academy. Sin referencia MSA T5a.

## Administración
- Banner con versión de currículo y fecha de actualización.
- Roles visibles como Mentor / Coordinator / Estratégico; país, programa asignado e ID interno (requiere `supabase/migracion_2026_2027.sql`).
- Eliminado del panel el bloque de «relleno rápido» que incluía correos y una contraseña compartida en el código cliente.

## entidad colaboradora independiente
- Área separada **entidad colaboradora independiente / Partner Training** (formación complementaria); entidad colaboradora independiente se presenta como entidad colaboradora independiente, no como departamento ni nivel de Chanak.

## Datos
- Los módulos nuevos usan ids `T1.1`…`T8.4`; el progreso anterior (`1.1`…`8.4`) se conserva en Supabase y no se borra. El avance anterior se reconoce automáticamente mediante `src/data/equivalencias.js` (ver actualización del 2026-10-04).

---

## Actualización 2026-10-04 · Lecturas ampliadas, desglose de horas, avance reconocido, NCAA y MSA-CESS

**Lecturas coherentes con las horas**
- Lectura ampliada en los 28 módulos (`src/data/lecturas/B1.js` … `B8.js`): de ~12.000 a ~70.000 palabras (2.000–3.400 por módulo), escritas solo con la documentación FINAL 2026–2027 y fuentes oficiales.
- Cada módulo muestra «Cómo se reparten las X h»: vídeo, lectura en la app (60 palabras/min de estudio), lectura obligatoria de documentos oficiales con enlace a su carpeta de Drive y qué leer, práctica, evidencia y Knowledge Check. La suma es exactamente la carga del módulo (`scripts/validar-desglose.mjs`).
- Coordinator Track: guía de práctica supervisada paso a paso dentro del paso «Práctica».

**Historia y manejo del Mastery Learning (recuperados)**
- T1.3: historia (Carroll 1963, Bloom 1968, instrucción individualizada → Chanak) y Chanak Growth System.
- T3.1: supervisión del autoestudio (A.C.E. Supervisor Training, banderas, Review Station).
- T4.2: Daily Goal Tracker, Review Station, Mastery Assessment, corrección formativa en 4 pasos, regla de los dos fallos y alertas del SIS.

**NCAA y MSA-CESS**
- MSA-CESS: estatus Candidate (carta 17-abr-2026), frase oficial exigida por la política «Representation of Accreditation Status», lenguaje prohibido y lo que aporta la acreditación (msa-cess.org/benefits). Módulos T1.1, T5.2, T8.1, T8.3.
- NCAA Eligibility Center: Chanak en revisión; proceso de revisión de escuela (High School Portal), Division I (16 core courses, regla 10/7, GPA 2.3) y Division II (16 core courses, GPA 2.2), roles de mentor y coordinador. Módulos T1.1, T2.2, T4.4, T8.3.
- 13 preguntas nuevas de Knowledge Check (`src/data/lecturas/quiz_extra.js`).

**Avance anterior reconocido (horas + Knowledge Check)**
- `src/data/equivalencias.js`: módulos 1.1–8.4 → T1.1–T8.4. Si se completó un equivalente, el módulo nuevo aparece como «Reconocido»: sus horas cuentan y pasa a «Completado» al aprobar el nuevo Knowledge Check (80 %). El progreso antiguo no se borra; el cálculo es solo de visualización.

**NotebookLM eliminado**
- Sustituido por enlaces directos a las carpetas de `CHANAK_DOCUMENTOS_2026-2027_FINAL` en cada módulo y una «Biblioteca de documentos oficiales (Drive)» en el panel, con el uso de cada carpeta para mentor y coordinador. También retirado del área entidad colaboradora independiente / Partner Training.

## 2026-10-05 · Programas y vinculaciones en proceso en EE. UU.
- T4.4: nueva lección «Deporte universitario y vinculaciones con universidades de EE. UU. (en proceso)»: NCAA como opción para estudiantes-deportistas que aspiran a becas, registro NCES, solicitud de convenio con Dallas Baptist University (DBU) y plan de convenios con otras universidades tras la decisión de MSA-CESS (nov-2026). Todo redactado como «en proceso»/«plan», sin promesas.
- T7.2: nueva lección «Otros estados en proceso: Texas (TEFA), Arizona (ESA), Arkansas (EFA), Utah (Fits All) y West Virginia (Hope)»: solicitudes como proveedor de servicios, todas en proceso, con directrices generales de las webs oficiales (consultadas el 5-oct-2026).
- T4.4: NCES (mayor visibilidad estatal; número estimado en 3–4 semanas) y DBU (solicitud enviada, reuniones para conocer propuestas).
- T8.3: nueva lección de control de comunicación para coordinadores sobre los cuatro frentes.
- Knowledge Check: 5 preguntas nuevas (T4.4 ×2, T7.2 ×2, T8.3 ×1).

### Entrega B (ampliación, 2026-10-05): lecturas del Bloque 10 a la profundidad de los demás módulos
- T10.1–T10.5 pasan de ~500–850 palabras a ~1.900–2.400 palabras cada una (lecciones ampliadas, ejemplos trabajados).
- Las lecturas se dividen en `B10a.js` (T10.1–T10.3) y `B10b.js` (T10.4–T10.5); `B10.js` las combina.
- Todo hecho no confirmado se redacta como «en proceso / confirmar con coordinación»; contenido legal sujeto a revisión.

## 6 octubre · Operativa académica y tutoriales

- PEI: finalidad, campos de propuesta, elaboración, responsables, registro y revisión.
- Portal: Core, Helping inicial con guías diarias para padres, English Tonic y pasajes/rasgos de carácter.
- Extensión Local por países, electiva en Estados Unidos según estudiante y PEI.
- IA de apoyo de Dual Diploma con revisión humana; no aprueba notas o créditos.
- Se conservan horas de módulos y permisos existentes; sin cambios en Supabase.
# 6 de octubre de 2026 · Rutas completas y horas de módulos

- Metas confirmadas por dirección: Mentor 180 h; Coordinator 300 h acumuladas. Se conservan las estimaciones breves por módulo (41,5/52 h de referencia base; protección de menores 6 h) sin convertirlas en certificación.
- Plan propuesto 180 + 120 h con autoestudio aplicado, casos operativos, 50 h de currículo/práctica, portafolio, bitácora y validación de dirección. El reparto no se presenta como requisito numérico ni aprobación de MSA.
- Diferencia documentada con el self-study: 180/300 h por experiencia frente a la distribución por rol ahora indicada. Se prepara una propuesta de actualización; no se altera el expediente MSA original.
- El registro del app muestra estimaciones; completar módulos no acredita automáticamente horas reales ni permite imprimir un certificado como si existiera validación formal. La revisión y resolución requieren bitácora y evidencias.
- Guía Florida: distingue antecedentes/huellas, certificación profesional/FTCE y evaluaciones del estudiante; incluye home education, PEP, requisitos externos y matriz estatal con fuentes oficiales comprobadas.
- Ampliación de administración: matrícula Off-Campus/Dual/Life Skills, cuentas SIS, Google for Education y circuito de cierre. Youth Readiness se mantiene como propuesta provisional de 4 semanas/3.500 USD.
