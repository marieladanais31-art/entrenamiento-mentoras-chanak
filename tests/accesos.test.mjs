import test from 'node:test'
import assert from 'node:assert/strict'
import { resumirAccesos } from '../src/lib/accesos.js'

test('una sesión conservada puede tener actividad posterior al inicio de sesión', () => {
  const r = resumirAccesos([{ id: 'a', nombre: 'A' }], { a: { ultimo_inicio_sesion: '2026-10-01T10:00:00Z' } }, [{ perfil_id: 'a', ultima_actividad: '2026-10-24T12:00:00Z' }], Date.parse('2026-10-24T13:00:00Z'))[0]
  assert.equal(r.inicio, Date.parse('2026-10-01T10:00:00Z'))
  assert.equal(r.ultimaSenal, Date.parse('2026-10-24T12:00:00Z'))
  assert.equal(r.sinSenalSieteDias, false)
})
test('un fallo de consulta no equivale a un usuario que no ha iniciado sesión', () => {
  const [r] = resumirAccesos([{ id: 'a', nombre: 'A' }], {}, [])
  assert.equal(r.consultado, false)
  assert.equal(r.sinInicio, false)
  assert.equal(r.sinSenalSieteDias, false)
})
test('ordena por señales válidas y distingue un registro nulo confirmado', () => {
  const perfiles = [{ id: 'a', nombre: 'A' }, { id: 'b', nombre: 'B' }]
  const r = resumirAccesos(perfiles, { a: { ultimo_inicio_sesion: null }, b: { ultimo_inicio_sesion: '2026-10-20T10:00:00Z' } }, [{ perfil_id: 'a', ultima_actividad: 'incorrecta' }])
  assert.equal(r[0].perfil.id, 'b')
  assert.equal(r[1].sinInicio, true)
  assert.equal(r[1].ultimaSenal, null)
})

test('recordatorio usa actividad reciente y excluye cuentas no activas o completas', async () => {
  const { seguimientoInactividad } = await import('../src/lib/accesos.js')
  const ahora = Date.parse('2026-11-04T12:00:00Z')
  const [fila] = resumirAccesos([{ id: 'a', nombre: 'Prueba', estado: 'aprobada', rol: 'mentora' }], { a: { ultimo_inicio_sesion: '2026-10-01T12:00:00Z' } }, [{ perfil_id: 'a', ultima_actividad: '2026-11-03T12:00:00Z' }], ahora)
  assert.equal(seguimientoInactividad(fila, { ahora }).nivel, 'reciente')
  assert.equal(seguimientoInactividad({ ...fila, ultimaSenal: ahora - 7 * 86400000 }, { ahora }).nivel, 'siete-dias')
  assert.equal(seguimientoInactividad({ ...fila, ultimaSenal: ahora - 14 * 86400000 }, { ahora }).nivel, 'catorce-dias')
  assert.equal(seguimientoInactividad(fila, { ahora, completo: true }).nivel, 'excluido')
  assert.equal(seguimientoInactividad({ ...fila, perfil: { ...fila.perfil, estado: 'suspendida' } }, { ahora }).nivel, 'excluido')
  assert.equal(seguimientoInactividad(fila, { ahora, errorActividad: true }).nivel, 'sin-datos')
  assert.equal(seguimientoInactividad({ ...fila, ultimaSenal: null }, { ahora }).nivel, 'sin-senal')
})
