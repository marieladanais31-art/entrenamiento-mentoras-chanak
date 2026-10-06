# Revisión de referencias · Manuales familiares y coordinación

Fecha: 6 octubre 2026. Alcance autorizado: ampliar formación y manuales conservando el sistema actual. No se modificaron SIS, LMS, Portal, Supabase, usuarios, notas, permisos ni automatizaciones.

## Fuentes recibidas y duplicados
- GuiaFamilias_OffCampus_Accesos.pdf y su copia (1): mismo texto extraído, seis páginas. Usadas una sola vez como referencia.
- Instructivo_Matricula_Chanak.pdf e Instructivo_Matricula_ChanakAcademy.pdf: mismo texto extraído, seis páginas. Usados una sola vez como referencia.
- Guía de Acceso e Incorporación para Familias · Chanak Dual Diploma & SIS.pdf: tres páginas.
- 23_SIS_Progress_Screenshots_Manual.docx: manual por rol con 39 imágenes. Las capturas se conservan en el documento original; no se publicaron imágenes con datos personales.

## Ajustes necesarios frente a las referencias
| Referencia anterior | Tratamiento en los manuales nuevos |
|---|---|
| Todo el alta es manual | Se conserva la operativa SIS ya documentada: Crear usuarios, Aceptada/Convertida y Sincronizar pueden desencadenar sincronización. No enseñar creación duplicada del expediente. |
| Google es llave automática del campus Dual | El login revisado del LMS usa correo y contraseña. Separar SIS, Google y LMS y utilizar las credenciales autorizadas. |
| Contraseña inicial común y cambio obligatorio garantizado | No publicar contraseñas reales ni recomendar reutilización. Seguir el cambio si lo solicita cada sistema. |
| Metas vacías significan exclusivamente PEI no publicado | Revisar publicación, asignación, ciclo, vínculos y errores de carga. |
| Mismas pantallas, metas y cadencias Off-Campus/Dual | Manuales separados. El StudentDashboard del SIS condiciona varias secciones académicas a que el programa no sea Dual. |
| Horarios fijos de martes/jueves para todos | Consultar convocatoria y zona horaria vigentes de cada grupo. |
| Capturas creadas para alcance Florida/MSA | Usar el manual por rol para enseñar funciones actuales; no convertir antiguas exclusiones de capturas en política global del sistema. |
| Enviar/progresar es equivalente a aprobación/crédito | Separar envío, revisión, corrección, aprobación y documento oficial. |

## Pantallas de coordinación
Se documentan las ocho pestañas declaradas en CoordinatorDashboard.jsx: Notas, Carga Eval. M.L., Revisar Notas, Evidencias, PEI / Eval. M.L., Boletines, Seguimiento y Alertas. Se añade panorama del coordinador LMS Dual, que es un entorno separado. La formación utiliza esquemas y ejercicios con ID-DEMO-001, sin conexión de escritura al SIS.

La lista inicial del coordinador se filtra por su hub; sin hub queda vacía. Esto describe el código de carga, no certifica todos los permisos o políticas de seguridad de todos los componentes. No se cambió de rol a ningún usuario ni se realizó una sesión autenticada de coordinador.

## Código contrastado
SIS: src/pages/CoordinatorDashboard.jsx (8a422a581099dfe5ffeff29ca6f6f64d600376e4), ParentDashboard.jsx, StudentDashboard.jsx (3c0d75c4442c7e767d1a301a9e919b01ce505748), App.jsx.
LMS Dual: src/app/es/login/page.jsx, familia/page.jsx, estudiante/page.jsx (8ac37ee1d5362e5eb442440eddf00356633da0cb) y coordinador/page.jsx.
Portal: index.html; entrada con código y separación entre orientación y expediente.

## Resultado y límites
Dos manuales familiares nuevos en PDF y DOCX, guía de ocho pantallas en PDF, lecturas dentro de la formación y ejercicios de revisión. No se sustituyeron los archivos originales aportados como referencia. Las horas se registran por trabajo real; los documentos y ejercicios no añaden acreditación automática. Los cambios visuales futuros deben contrastarse antes de actualizar capturas o instrucciones.
