# Revisión del ecosistema para formación de mentoras

Fecha: 23 octubre 2026. Alcance: lectura de código y documentación; no se han modificado SIS, Dual Diploma, Portal, Life Skills, Extensión Local, bases de datos ni variables de entorno. No se ha certificado el estado de las migraciones ni los permisos efectivos de cuentas reales.

## Versiones contrastadas

| Repositorio | Revisión |
| --- | --- |
| chanak-sis | 0386a1887970cbd022c449cb8964b2c93295d31a |
| chanak-dual-diploma-lms | 9ba04ef738ec826183c8f77d0dc6120b498be58c |
| chanak-lms-portal | 33b49db33e7c21c3e26b6f137ffd3d4b82853c04 |
| chanak-life-skills | fdcc29e7d1f3aef97d58fdd58b854dbe1d444f13 |
| chanak-extension-local | 06345491da4e249665b5ce0dca598ccd7ddafcc1 |
| chanak-landing, página Dual Diploma | 0d270080c659f773d2ae43cce65c7fbd285f663a |

La web pública principal tiene cambios en curso fuera de estos repositorios. La página de chanak-landing es una landing de becas; no se utiliza como fuente de tarifas ni como comprobación del contenido publicado en www.chanakacademy.org.

## Hallazgos para resolver con quienes editan las otras apps

| Prioridad | Hallazgo verificable | Acción y prueba de aceptación |
| --- | --- | --- |
| Antes de ampliar cuentas docentes | SIS TutorDashboard detecta Inglés por role y también por coincidencia de nombre/apellido/email; su consulta solicita todos los alumnos. El alcance efectivo sigue dependiendo de RLS, no probado aquí. | Sustituir excepciones personales por asignaciones explícitas y permisos del servidor. Probar dos docentes y un alumno no asignado: no debe poder consultarse ni exportarse por una cuenta sin autorización. |
| Antes de delegar aprobación PEI | TutorDashboard pasa canEdit=true a PEIFormFull; el formulario tiene transiciones hasta aprobar/publicar. No es una separación de funciones demostrada por ocultar botones. | Dirección define quién prepara, revisa, aprueba y publica. Verificar esas transiciones en servidor con cuentas de cada perfil. No enseñar aprobación autónoma a toda mentora. |
| Antes de grabar archivo familiar | El prompt propone cinco carpetas; SIS driveFolderStructure genera cuatro bloques y Portal recomienda otros cuatro con nombres y contenido diferentes. | Elegir una estructura canónica y actualizar generador, Portal y manual sin renombrar ni mover expedientes existentes automáticamente. Preparar equivalencias y probar un archivo por tipo. |
| Antes de anunciar sincronización de notas | LMS sis-export genera un archivo; SIS lmsImport valida importaciones. El webhook de matrícula SIS→LMS es otro flujo. | Explicar el circuito humano de exportación/importación y conciliación por sis_student_id. Probar duplicados, alumno sin vínculo y curso incompleto sin escribir datos ficticios en expedientes reales. |
| Antes del vídeo definitivo Flex | En la revisión del Portal, apps/chanak-flex/eval-bank.js está vacío y la interfaz busca EVAL_BANK. Su resultado automático es parcial y las rúbricas se valoran aparte. No se localizó envío directo de notas al SIS en esa interfaz. | Esperar el trabajo curricular en curso; comprobar carga de banco, curso/unidad, rúbrica, evidencia y registro oficial antes de anunciar evaluación integrada. No sobrescribir el desarrollo de otra persona. |
| Antes de usar coins como prueba | Extensión Local conserva avance local y solicita coins por token; descarga de una respuesta no es entrega. Life Skills mezcla recursos de navegador con resumen firmado SIS; muestra DEMO si falta token o falla la consulta. | Etiquetar estado de conexión, distinguir guardado local, envío y validación; verificar con cuentas de prueba que el saldo oficial coincide. No interpretar datos DEMO como progreso de un alumno. |
| Antes de certificar o comunicar acreditación | Registro Florida, acreditación MSA, autorización de un servicio y elegibilidad de una familia son estados distintos. | Usar documentación institucional vigente. Mantener validación formal y firma de Dirección; no inferir acreditación a partir de FLDOE. |

## Correcciones hechas en training

- Manual complementario en Mi función para Mentor, English Teacher y Life Skills; las otras ramas se conservan.
- Cinco unidades de lectura, un caso corregible por unidad, práctica de portafolio y evaluación final de 15 situaciones.
- Umbral 85% sin redondeo: 13/15 supera; 12/15 no supera.
- Lecturas/casos y resultado guardados en el registro complementario MENTOR_OPERATIVO_2026_10 de la tabla progreso existente. No se añaden tablas ni se cambian permisos.
- Administración muestra ese registro por separado, sin alterar porcentajes, horas, equivalencias ni módulos obligatorios anteriores.
- El resultado es formativo y editable por su titular según el modelo existente; no es una evaluación inviolable ni un certificado firmado por servidor. No habilita emisión oficial automática.
- PDF generado desde el mismo contenido que consume la interfaz para evitar divergencias.
- No se sustituyen ni se borran enlaces de YouTube aprobados; no se añaden vídeos sintéticos.

## Documentación y mantenimiento

Destino del manual: CHANAK_DOCUMENTOS_2026-2027_FINAL → 10_PEOPLE_ROLES_TRAINING → 08_OPERATIVA_ACADEMICA. Mantener los manuales de familias y coordinación existentes hasta revisar sus archivos completos; esta entrega no afirma haber auditado todo Drive.

El manual nuevo es un complemento versionado, con enlace directo. Tras las modificaciones en curso, actualizar primero la fuente src/data/manualMentoras.js, regenerar PDF y reemplazar la misma versión de Drive conservando su ID.

Enlaces directos de esta entrega:

- Manual: https://drive.google.com/file/d/1idL7FWK8mEK8SYGqT-btOvxbaV_suIeg/view
- Guiones de grabación: https://drive.google.com/file/d/1hBsv6u_Krf1mGP4y6RYnb_-w80YtMmAN/view
- Revisión y pendientes: https://drive.google.com/file/d/1gWmhTd532PUGEe1uQZ3YW_e4vt2PFylE/view

## Referencias principales

- SIS: src/pages/TutorDashboard.jsx; src/components/PEIFormFull.jsx, MentorFollowUp.jsx, GradeEntriesManager.jsx, EvidenceReviewPanel.jsx, StudentChanakWallet.jsx, ParentEvidencePanel.jsx, ParentGradeReport.jsx; src/pages/StudentDashboard.jsx; src/lib/driveFolderStructure.js, curriculumPaths.js, englishTool.js, lmsImport.js; migrations 20260511_evidence_review_workflow y 20261041_life_skills_caracter_completo.
- Dual: docs/formacion/guia-english.md, guia-life-skills.md, docs/SIS-WEBHOOK.md; src/components/workspace/TeachingWork.jsx; src/lib/learning/staff-scope.js, review-state.js; src/app/api/teaching/work/route.js, api/admin/sis-export/route.ts.
- Portal: index.html (manual familiar y Drive); apps/chanak-flex/index.html y eval-bank.js.
- Life Skills: app.js (resumen, modo DEMO, restauración y radar), agenda.js (nombres de los cuatro clústeres).
- Extensión: public/app.js (avance local, descarga de respuesta y solicitud de coins).
- FLDOE: https://www.fldoe.org/schools/school-choice/private-schools/opening-a-private-school.stml
- Step Up 2026–27: https://www.stepupforstudents.org/handbooks/ y https://www.stepupforstudents.org/handbook-web/pep-family-handbook/
