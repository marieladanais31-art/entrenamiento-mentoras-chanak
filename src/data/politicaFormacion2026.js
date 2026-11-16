// Control editorial 2026-11-16. Actualizar el training desde la fuente única de verdad.
// No modifica pagos, expedientes ni progreso de los usuarios.
export const POLITICA_FORMACION = {
  version: '2026-11-16',
  estado: 'revision_institucional',
  fuente: 'https://drive.google.com/drive/folders/1bPAuhY8-YhHBmUPpqUahXACC_bH_BqxT',
  institucion: {
    nombre: 'Chanak International Academy',
    entidad: 'Chanak TrainUp Education, Inc.',
    floridaCode: '134620',
    msa: 'Aprobación comunicada; carta y normas de uso del sello pendientes de verificación documental',
    dbu: 'Miembro de Dallas Baptist University Global Community; no implica admisión ni créditos universitarios automáticos',
  },
  planes: [
    { id:'guided', nombre:'Guided Homeschool', encargado:'Familia', mentoring:'Mentoría mensual con la familia', elaLive:'No incluido en tarifa base', lifeSkills:'Recursos y seguimiento según plan', curriculos:['A.C.E.','LIFEPAC','Christian Light Education','Chanak Flex'] },
    { id:'full', nombre:'Full Enrollment – Guided Virtual School', encargado:'Escuela con participación familiar', mentoring:'Mentoría directa semanal al estudiante', elaLive:'Tres sesiones sincrónicas semanales de ELA', lifeSkills:'Life Skills sincrónico según calendario', curriculos:['A.C.E.','LIFEPAC','Christian Light Education','Chanak Flex'] },
  ],
  tarifasFull: [
    {grado:'K–5', matricula:295, mensual:275, trimestral:687.5, anualTotal:3045},
    {grado:'6–8', matricula:295, mensual:320, trimestral:800, anualTotal:3495},
    {grado:'9–12', matricula:295, mensual:365, trimestral:912.5, anualTotal:3945},
  ],
  pago: {
    matricula:'Anual por estudiante y curso académico; incluye diagnóstico académico inicial, PEI e inducción',
    politica:'La matrícula es no reembolsable salvo derechos imperativos y reglas aplicables del programa ESA',
    modalidades:['Pago privado','Pago ESA si el servicio específico y el estudiante son elegibles'],
    classWallet:'Presentar facturación trimestral cuando sea la modalidad autorizada; la matrícula va separada',
    otrosMercados:'USD como moneda base y equivalencia local comercial redondeada aprobada',
  },
  comunicacion: {
    idiomas:['Español','English'],
    aclaracion:'Atención bilingüe no significa que todas las materias se impartan en ambos idiomas',
    apostilla:'Apostillado, traducción y envío internacional se cotizan como servicios adicionales cuando proceda',
  },
  obligaciones: [
    'Distinguir matrícula escolar completa de apoyo homeschool y del servicio ESA Academic Support',
    'Mentores no asignan créditos ni modifican los transcripts por cuenta propia',
    'No afirmar que una microschool asociada está acreditada automáticamente',
    'No presentar un servicio ESA como aprobado sin verificación de producto/estado y forma de pago',
    'No ofrecer Arizona Premium online: un eventual Premium presencial se decidirá por separado',
  ],
}
