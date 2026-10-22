import assert from 'node:assert/strict'
import { test } from 'node:test'
import { segundosDelIntervalo, duracionActividad } from '../src/lib/actividad.js'

test('no cuenta pestañas ocultas, sin foco ni suspensión del equipo', () => {
  const base = { anterior: 10000, ahora: 15000, ultimaInteraccion: 14000, visible: true, tieneFoco: true }
  assert.equal(segundosDelIntervalo(base), 5)
  assert.equal(segundosDelIntervalo({ ...base, visible: false }), 0)
  assert.equal(segundosDelIntervalo({ ...base, tieneFoco: false }), 0)
  assert.equal(segundosDelIntervalo({ ...base, ahora: 80000 }), 0)
})
test('solo suma hasta el límite de dos minutos sin interacción', () => {
  assert.equal(segundosDelIntervalo({ anterior: 119000, ahora: 124000, ultimaInteraccion: 0, visible: true, tieneFoco: true }), 1)
  assert.equal(segundosDelIntervalo({ anterior: 121000, ahora: 126000, ultimaInteraccion: 0, visible: true, tieneFoco: true }), 0)
})
test('no convierte segundos en horas de formación ni redondea al alza', () => {
  assert.equal(duracionActividad(59), 'Menos de 1 min')
  assert.equal(duracionActividad(3601), '1 h 0 min')
})
