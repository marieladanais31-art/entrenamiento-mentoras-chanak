import test from 'node:test'
import assert from 'node:assert/strict'
import { EVALUACION_MENTORAS, UNIDADES_MENTORAS, MANUAL_VERSION, evaluarManual, leerRegistroManual } from '../src/data/manualMentoras.js'

const respuestas = Object.fromEntries(EVALUACION_MENTORAS.map((q) => [q.id, q.correcta]))
test('85% de 15 exige 13 aciertos: no redondear 12/15 a aprobado', () => {
  assert.equal(EVALUACION_MENTORAS.length, 15)
  for (const aciertos of [0, 12, 13, 15]) {
    const r = { ...respuestas }
    EVALUACION_MENTORAS.slice(aciertos).forEach((q) => { r[q.id] = (q.correcta + 1) % q.opciones.length })
    assert.equal(evaluarManual(r).aprobado, aciertos >= 13)
    assert.equal(evaluarManual(r).aciertos, aciertos)
  }
})
test('una entrega incompleta o inválida no aprueba', () => {
  assert.equal(evaluarManual({}).aprobado, false)
  assert.equal(evaluarManual({ ...respuestas, q15: '1' }).completas, false)
  assert.equal(evaluarManual({ ...respuestas, q15: 90 }).completas, false)
})
test('el complemento no interpreta notas previas o de otra versión como lecturas', () => {
  for (const notas of ['texto antiguo', 'null', '[]', '{"version":"anterior","lecturas":["M1"]}']) {
    assert.deepEqual(leerRegistroManual({ notas }).lecturas, [])
  }
  const r = leerRegistroManual({ notas: JSON.stringify({ version: MANUAL_VERSION, lecturas: ['M1', 'otra'], casos: {} }) })
  assert.deepEqual(r.lecturas, ['M1'])
})
test('cada caso y pregunta tiene decisión válida y explicación; cinco unidades completas', () => {
  assert.equal(UNIDADES_MENTORAS.length, 5)
  for (const q of [...EVALUACION_MENTORAS, ...UNIDADES_MENTORAS.map((u) => u.caso)]) {
    assert.ok(q.opciones[q.correcta])
    assert.ok(q.explicacion.length > 30)
  }
})
