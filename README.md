# Chanak Academy — Formación de Mentoras

Aplicación web interna de Chanak International Academy donde las mentoras completan su
formación y se registra su progreso. Sirve como evidencia del indicador **MSA T5a**
(formación del personal) para la acreditación MSA-CESS.

**Fuente de verdad del currículo:** `Chanak_Pathway_180_300h.docx` → [src/data/curriculum.js](src/data/curriculum.js)

## Niveles de certificación

| Nivel | Certificación | Horas | Bloques | Módulos |
|---|---|---|---|---|
| 1 | Chanak-Certified Mentor | 180h | 1–6 | 24 |
| 2 | Chanak-Certified Coordinator | 300h (180h + 120h) | 7–10 | 14 |

> Nota: el documento fuente menciona "18/12 módulos" en los encabezados, pero sus tablas
> contienen 24 y 14 módulos respectivamente. Las horas sí cuadran exactamente (180h/120h).
> La app carga todos los módulos de las tablas.

## Contenido pedagógico

Arquitectura al estilo Prospero Learning: **38 módulos · 101 lecciones · 169 preguntas**.

- **Portada del curso** ([src/data/curso.js](src/data/curso.js)): resumen ejecutivo, objetivos de
  aprendizaje, metodología, temario y certificaciones.
- **Lecciones** ([src/data/contenido/](src/data/contenido/)): cada una con guion desarrollado listo
  para grabar en Google Vids, notas de recursos visuales para la diapositiva y un espacio reservado
  para incrustar el vídeo.
- **Knowledge Check** por módulo: 3-5 preguntas tipo test con corrección inmediata, explicación de
  la respuesta y aprobación al **80%** (mismo estándar de Mastery Learning que aplicamos a los
  estudiantes). Reintentos ilimitados.
- **Certificado** imprimible 180h/300h con logo Chanak, marca de agua, referencia MSA T5a y espacio
  para firma de Head of LSP y Board.

Fuentes del contenido: chanakacademy.org, portal.chanakacademy.org, el Self-Study MSA NGA 2026
(Foundation Documents, Portrait of a Learner/Educator), el repositorio del SIS Chanak y los guiones
pedagógicos del portal EducaFe.

## Características

- **Login simple** por selección de mentora (sin contraseña; app interna de 4–10 usuarias).
- **Dashboard** con progreso de horas, banners de elegibilidad de certificación y grid de bloques.
- **Vista de bloque y de módulo** con horas, modalidad, evaluación, indicadores MSA, estados
  (⬜ Pendiente / 🔵 En curso / ✅ Completado con fecha) y notas de reflexión.
- **Registro de horas** cronológico con exportación a PDF/impresión (evidencia MSA con firmas).
- **Vista de administrador** (Mariela): comparativa de mentoras, registro retroactivo de módulos
  con fecha real, y alta de nuevas mentoras sin tocar código.
- El progreso se guarda en `localStorage` del dispositivo (sin backend).

## Stack

React 18 + Vite 6 + Tailwind CSS 4. Interfaz 100% en español, mobile-first.

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

## Despliegue

**Producción:** https://entrenamiento-mentoras-chanak.vercel.app

Proyecto Vercel: `entrenamiento-mentoras-chanak` (equipo mariela-andrades-projects).
Para redesplegar cambios: conectar el repo de GitHub desde el dashboard de Vercel
(recomendado, redespliega en cada push a `main`) o ejecutar `npx vercel --prod`.

---

Chanak International Academy · FLDOE #134620 · www.chanakacademy.org
