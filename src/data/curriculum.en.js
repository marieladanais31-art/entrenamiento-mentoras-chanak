// English titles for the 2026–2027 training structure (content stays in Spanish).
export const BLOQUES_EN = {
  B1: 'Chanak identity and model',
  B2: 'Chanak programs',
  B3: 'Curriculum Pathways',
  B4: 'Academic Framework',
  B5: 'Systems and operations',
  B6: 'Safeguarding and Local Extension',
  B7: 'USA State Programs / Compliance',
  B8: 'Coordinator Track',
}

export const MODULOS_EN = {
  'T1.1': 'Identity, mission and institutional structure',
  'T1.2': 'The 60 / 20 / 20 model',
  'T1.3': 'A mastery-oriented academic framework',
  'T1.4': 'Academic authority and the limits of the mentor role',
  'T2.1': 'Off-Campus (Guided Homeschool)',
  'T2.2': 'Dual Diploma: routes, credits and recognition',
  'T2.3': 'Life Skills & Leadership',
  'T2.4': 'Partner Learning Center, Institutional Certification and program differences',
  'T3.1': 'A.C.E. · Reference / Preferred Curriculum Pathway',
  'T3.2': 'LIFEPAC and Christian Light Education · Reviewed Alternative Pathways',
  'T3.3': 'Chanak Flex and choosing a curriculum pathway',
  'T3.4': 'Diagnostic and ILP',
  'T4.1': 'K–12 Scope & Sequence: competencies and evidence',
  'T4.2': 'Mastery, 80% and intervention',
  'T4.3': 'Assessment: three categories',
  'T4.4': 'Credits: recognition and Dual Diploma audit',
  'T5.1': 'SIS, Portal and Dual Diploma Portal',
  'T5.2': 'Weekly follow-up, reporting and documentation',
  'T5.3': 'Family communication, escalation and supervised practice',
  'T6.1': 'Safeguarding and professional boundaries',
  'T6.2': 'Online safety and data protection',
  'T6.3': 'Local Extension, local languages and specialized coordination',
  'T7.1': 'Florida · Step Up For Students / EMA (approved Enrollment service)',
  'T7.2': 'Alabama CHOOSE (Approved ESP · ClassWallet) and state testing',
  'T8.1': 'Mentor supervision and academic quality',
  'T8.2': 'Partner Learning Centers: local operation and Chanak Central',
  'T8.3': 'Evidence review, reporting and incidents',
  'T8.4': 'Supervised coordination project',
}

export function traducirBloques(bloques, idioma) {
  if (idioma !== 'en') return bloques
  return bloques.map((b) => ({
    ...b,
    titulo: BLOQUES_EN[b.id] || b.titulo,
    modulos: b.modulos.map((m) => ({ ...m, titulo: MODULOS_EN[m.id] || m.titulo })),
  }))
}

export function traducirModulo(modulo, idioma) {
  if (idioma !== 'en' || !modulo) return modulo
  return {
    ...modulo,
    titulo: MODULOS_EN[modulo.id] || modulo.titulo,
    bloqueTitulo: BLOQUES_EN[modulo.bloqueId] || modulo.bloqueTitulo,
  }
}

export function traducirRecursos(recursos) {
  return recursos
}
