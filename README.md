# Chanak · Formación de Mentores y Coordinadores 2026–2027

> Comprender el modelo. Acompañar con criterio. Documentar con excelencia.

Aplicación web interna de **Chanak International Academy** (Chanak TrainUp Education, Inc. ·
escuela privada registrada en Florida, FLDOE #134620 · MSA-CESS Candidate) para formar a
mentores y coordinadores y registrar su progreso. Enseña cómo funciona y se opera Chanak:
no es un curso para preparar una visita de acreditación.

**Producción:** https://entrenamiento-mentoras-chanak-two.vercel.app
**Versión de currículo:** `training-2026-2027` (actualizado el 2 de octubre de 2026)
**Fuente oficial del contenido:** carpeta `CHANAK_DOCUMENTOS_2026-2027_FINAL`
(01_INSTITUCIONAL, 02_FAMILIAS, 03_INSTITUCIONES, 07_US_PROGRAMS_COMPLIANCE,
08_ACADEMIC_POLICIES, 09_ACADEMIC_FRAMEWORK · K–12 Scope & Sequence).

## Ruta de certificación

| Nivel | Certificación | Bloques | Módulos | Horas de referencia |
|---|---|---|---|---|
| 1 | CHANAK CERTIFIED MENTOR | 1–6 | 22 | 180 h |
| 2 | CHANAK CERTIFIED COORDINATOR | Nivel 1 + 8 | 22 + 4 | 300 h acumuladas |
| Por rol | USA State Programs / Compliance | 7 | 2 | 10 h (no suma a la certificación) |

Las horas son una referencia formativa (autoestudio, vídeos, lecturas, actividades, práctica,
SIS, observación, evaluaciones y evidencias), no horas de vídeo.

## Bloques

1. Identidad y modelo Chanak (Fundamentos)
2. Programas Chanak (Off-Campus (Homeschool Guiado), Dual Diploma, Life Skills, PLC y Certificación)
3. Curriculum Pathways (A.C.E., LIFEPAC, Christian Light Education, Chanak Flex, diagnóstico y PEI)
4. Academic Framework (Scope & Sequence, dominio y 80 %, assessment A/B/C, créditos)
5. Sistemas y operación (SIS, Portal, Dual Diploma Portal, seguimiento, familias, escalamiento, práctica)
6. Safeguarding y Extensión Local
7. USA State Programs / Compliance (por rol: Florida EMA · Matrícula; Alabama CHOOSE · Approved ESP)
8. Coordinator Track (supervisión, Partner Learning Centers, evidencias, proyecto)

**8 bloques · 28 módulos · 28 vídeos · 113 preguntas de Knowledge Check.**

## Experiencia (mobile-first)

Inicio → Mi ruta → Bloque → Módulo → **Vídeo → Lectura → Práctica → Knowledge Check → Evidencia → Completado**.
El panel muestra el progreso real (Mentor 180 h → Coordinator 300 h) y el siguiente módulo.
Un módulo se completa tras aprobar su Knowledge Check (80 %, reintentos ilimitados).

## Dónde se edita cada cosa

| Qué | Archivo |
|---|---|
| Estructura de bloques y módulos | `src/data/curriculum.js` |
| Portada y certificaciones | `src/data/curso.js` |
| Contenido de cada módulo (lectura, práctica, quiz, evidencia) | `src/data/contenido/*.js` |
| Biblioteca de vídeos (id, título, bloque, descripción, videoUrl, duración, orden) | `src/data/videos.js` |
| Guiones de vídeo | `GUIONES_VIDEOS_2026-2027.md` (se genera con `node scripts/generar-guiones.mjs`) |
| Textos de la interfaz ES/EN | `src/i18n/textos.js` |

**Vídeos:** cada vídeo es independiente. Pega su URL (MP4, YouTube, Vimeo, Google Drive,
Google Vids o cualquier URL) en `videoUrl` de `src/data/videos.js`, o desde **Admin → Vídeos**
(la URL guardada en Supabase tiene prioridad y no requiere desplegar).

## Separación Chanak / EducaFe

La ruta oficial (Mentor → Coordinator) es **Chanak Training**. El área **EducaFe / Partner
Training** es formación complementaria de una entidad colaboradora independiente; no es un nivel
de certificación de Chanak ni un departamento de Chanak.

## Administración

Usuarios y aprobación · códigos de registro · progreso del equipo (rol, país, programa, ID
interno) · registro de horas retroactivo · biblioteca de vídeos · certificados.
Para país, programa e ID interno ejecuta una vez `supabase/migracion_2026_2027.sql`.

## Desarrollo

```bash
npm install
npm run dev
npm run build
```

Stack: React 18 + Vite 6 + Tailwind 4 + Supabase (auth, tablas `perfiles`, `progreso`, `videos`, `codigos`, Storage de entregables).

## Archivo histórico

La versión anterior (orientada a evidencia MSA, 101 lecciones, 3 niveles) está en la rama
`archive-training-msa-2026` (código y contenido completos) y los guiones antiguos en
`archive/GUIONES_VIDEOS_MSA_2026.md`. No se importa en la app.
