# HANDOFF · Cómo continuar la app de formación sin chocar entre IAs

App: training.chanakacademy.org · repo `marieladanais31-art/entrenamiento-mentoras-chanak` · Vite + React + Supabase · Vercel despliega `main`.
Última actualización: 11-oct-2026 (Claude).

## 1. Reparto de trabajo (para no pisarse)

| Área | Responsable | Archivos que puede tocar | NO tocar |
|---|---|---|---|
| Código de la app (estructura, pantallas, roles) | Claude o Codex/Antigravity, **uno a la vez** | `src/**`, `supabase/*.sql` (solo aditivo) | `public/videos/*` |
| Vídeos (re-narración y subida) | ChatGPT / Google Vids | `public/videos/*.vtt`, `public/videos/*.srt`, `public/videos/catalogo.json`, `src/data/videosRenderizados.js` | `src/components/**`, `src/data/roles.js` |
| Contenido de lecturas | quien edite contenido | `src/data/lecturas/*`, `src/data/contenido/*` | lógica de componentes |

Reglas comunes:
- Trabaja siempre en una rama nueva (`codex/...`, `claude/...`, `chatgpt/...`) y abre Pull Request; Vercel compila el PR antes del merge.
- `npm run lint` (0 errores) y `npm run build` deben pasar antes de pedir merge.
- No subir `.env`, contraseñas ni datos personales de estudiantes (solo IDs ficticios `ID-DEMO-xxx`).
- No cambiar Supabase ni variables de entorno sin decisión de dirección.
- Antes de empezar: `git pull origin main` y lee este archivo y `CHANGELOG_APP_2026-2027.md`.

## 2. Estructura actual (no romper)

- **Tronco común** (9 módulos) → `TRONCO_COMUN` en `src/data/roles.js`.
- **Ramas**: Mentor (acceso libre: mentor, english_teacher, lifeskills_facilitator, local_language, assessment_specialist), Coordinador (coordinator, partner_director · confirma Dirección Académica), Estratégico (strategic_general, family_enrollment, grants_projects, institutional_partnerships · confirma Dirección de Operaciones y Alianzas, Elías Vidal).
- La elección de rama se guarda en `compromisos_formacion.funciones` (objeto `{tipo:'solicitud_rama'}`) → `solicitudDe()` / `rolesEfectivos()` en `roles.js`.
- **Mi trabajo** (guía operativa por función): `src/data/funciones.js` + `src/components/MiFuncion.jsx`.
- **Vistas del sistema** (simulaciones de pantallas reales con datos ficticios): `src/data/vistasSistema.js` + `src/components/VistaSistema.jsx`; aparecen en el módulo correspondiente (`modulos: [...]`), en «Mi trabajo» y en el panel «Vistas del sistema».
- EducaFe: solo en Estratégico, marcada **inactiva hasta febrero 2027**.

## 3. Vídeos · re-narración sin repeticiones (tarea de ChatGPT / Google Vids)

Problema detectado: 35 vídeos terminaban con las mismas 8 frases y otros repetían «Compara tu respuesta con la lectura…». Ya están reescritos los guiones.

Fuente: `docs/videos/GUIONES_VIDEOS_v2.md` (y `.json`). **Las diapositivas no cambian**; solo la narración de cada diapositiva (texto «v2»). 70 vídeos a re-narrar.

Procedimiento por vídeo (Google Vids recomendado):
1. Abrir las diapositivas originales del vídeo (carpeta de Drive `11_TRAINING_VIDEOS/<bloque>`), sin modificarlas.
2. Google Vids → crear desde la presentación (Slides → Vids, español) o abrir el proyecto Vids existente.
3. En cada escena pegar la narración v2 de esa diapositiva. Voz en español, ritmo natural (≈ 130–140 palabras/min), pausas entre diapositivas. Mejor aún: grabar la voz de una persona del equipo.
4. Prohibido añadir cierres genéricos (lista al final del .md).
5. Exportar MP4. En Drive, sobre el archivo de vídeo actual: **Gestionar versiones → Subir nueva versión**. Así se conserva el mismo `drive_id` y no hay que tocar `catalogo.json`.
6. Regenerar los subtítulos con los tiempos del nuevo audio y sustituir `public/videos/<ID>.vtt` y `.srt` (mismo nombre).
7. Actualizar `duracion` y `segundos` del vídeo en `public/videos/catalogo.json` y `src/data/videosRenderizados.js`.
8. PR `chatgpt/videos-v2-lote-N` con lotes de 10 vídeos como máximo.

Prioridad de lotes: V001–V022 (tronco común y Mentor), luego V025–V037, luego el resto.

## 4. Pendiente (siguiente IA)

1. **Capturas reales** (requiere a una persona con las cuentas demo; una IA no debe iniciar sesión con contraseñas): sustituir/acompañar cada simulación de `vistasSistema.js` con captura anotada en `public/vistas/<id>.png` y añadir campo `captura` a la vista.
2. **Recorridos en vídeo** con grabación de pantalla (Google Vids → Grabar): 12 recorridos listados en `docs/videos/RECORRIDOS_PANTALLA.md`.
3. Añadir vistas del **Portal** (portal.chanakacademy.org) cuando se documenten sus pantallas.
4. Traducir al inglés `funciones.js` y `vistasSistema.js` si se activa EN.
5. Restringir la confirmación de ramas por dirección (hoy cualquier admin confirma): requiere migración en Supabase del proyecto de training (`wzckqudnjjudndtchglm`).

## 5. Prompt corto para retomar

> Lee `HANDOFF_IA.md` del repo entrenamiento-mentoras-chanak. Trabaja solo en el área que te corresponde (sección 1), en una rama nueva, con PR. Continúa por la sección 4, punto N. No cambies Supabase ni variables de entorno. Antes de pedir merge: `npm run lint` y `npm run build` sin errores.
