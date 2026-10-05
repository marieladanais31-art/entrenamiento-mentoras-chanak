# CHANGELOG · App de formación 2026–2027

**Versión:** `training-2026-2027` · 2 de octubre de 2026
**Rama:** `training-2026-2027` (respaldo de la versión anterior: rama `archive-training-msa-2026`)
**Fuente oficial:** `CHANAK_DOCUMENTOS_2026-2027_FINAL`

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
- Roles visibles como Mentor / Coordinator / Partner (EducaFe); país, programa asignado e ID interno (requiere `supabase/migracion_2026_2027.sql`).
- Eliminado del panel el bloque de «relleno rápido» que incluía correos y una contraseña compartida en el código cliente.

## EducaFe
- Área separada **EducaFe / Partner Training** (formación complementaria); EducaFe se presenta como entidad colaboradora independiente, no como departamento ni nivel de Chanak.

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
- Sustituido por enlaces directos a las carpetas de `CHANAK_DOCUMENTOS_2026-2027_FINAL` en cada módulo y una «Biblioteca de documentos oficiales (Drive)» en el panel, con el uso de cada carpeta para mentor y coordinador. También retirado del área EducaFe / Partner Training.
