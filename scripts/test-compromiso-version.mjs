import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('--- Iniciando prueba de versiones de compromiso de formación ---');

// 1. Leer archivos fuente
const compromisoPath = path.join(rootDir, 'src', 'components', 'CompromisoInicial.jsx');
const appPath = path.join(rootDir, 'src', 'App.jsx');

const compromisoSrc = fs.readFileSync(compromisoPath, 'utf8');
const appSrc = fs.readFileSync(appPath, 'utf8');

// 2. Extraer VERSION_COMPROMISO y VERSIONES_VALIDAS de CompromisoInicial.jsx
const versionMatch = compromisoSrc.match(/export const VERSION_COMPROMISO = '([^']+)'/);
assert.ok(versionMatch, 'CompromisoInicial.jsx debe exportar VERSION_COMPROMISO');
const VERSION_COMPROMISO = versionMatch[1];

const validasMatch = compromisoSrc.match(/export const VERSIONES_VALIDAS = (\[[^\]]+\])/);
assert.ok(validasMatch, 'CompromisoInicial.jsx debe exportar VERSIONES_VALIDAS');
const VERSIONES_VALIDAS = JSON.parse(validasMatch[1].replace(/'/g, '"'));

console.log(`✓ VERSION_COMPROMISO para firmas nuevas: '${VERSION_COMPROMISO}'`);
console.log(`✓ VERSIONES_VALIDAS reconocidas por la app:`, VERSIONES_VALIDAS);

// 3. Aserciones de las constantes requeridas
assert.equal(VERSION_COMPROMISO, '2026-10-28-trainup', 'VERSION_COMPROMISO debe ser 2026-10-28-trainup');
assert.ok(Array.isArray(VERSIONES_VALIDAS), 'VERSIONES_VALIDAS debe ser un array');
assert.ok(VERSIONES_VALIDAS.includes('2026-10-10-formacion'), 'VERSIONES_VALIDAS debe incluir la versión previa 2026-10-10-formacion');
assert.ok(VERSIONES_VALIDAS.includes('2026-10-28-trainup'), 'VERSIONES_VALIDAS debe incluir la nueva versión 2026-10-28-trainup');
assert.ok(VERSIONES_VALIDAS.includes(VERSION_COMPROMISO), 'La versión activa para nuevas firmas debe estar en VERSIONES_VALIDAS');

// 4. Verificar uso en App.jsx
assert.ok(
  appSrc.includes('VERSIONES_VALIDAS.includes(compromiso?.version)'),
  'App.jsx debe comprobar compromisoVigente usando VERSIONES_VALIDAS.includes(compromiso?.version)'
);
console.log('✓ App.jsx utiliza la validación no destructiva con VERSIONES_VALIDAS');

// 5. Simular comprobaciones de vigencia
function verificarVigencia(compromiso) {
  return VERSIONES_VALIDAS.includes(compromiso?.version);
}

// Caso 5a: Usuaria existente que ya firmó la versión anterior ('2026-10-10-formacion')
const usuariaExistente = { version: '2026-10-10-formacion', nombre_completo: 'Mentora Existente', funciones: ['mentor'] };
assert.equal(verificarVigencia(usuariaExistente), true, 'Usuaria con versión 2026-10-10-formacion debe ser vigente (no debe volver a firmar ni perder datos)');
console.log('✓ [Caso 1] Usuaria existente con 2026-10-10-formacion: VIGENTE (sin bloqueo ni pérdida de datos)');

// Caso 5b: Nueva firma con VERSION_COMPROMISO ('2026-10-28-trainup')
const nuevaFirma = { version: VERSION_COMPROMISO, nombre_completo: 'Nueva Mentora', funciones: ['mentor'] };
assert.equal(verificarVigencia(nuevaFirma), true, 'Nueva firma debe ser vigente inmediatamente');
console.log('✓ [Caso 2] Nueva firma con 2026-10-28-trainup: VIGENTE');

// Caso 5c: Sin compromiso previo (null o undefined)
assert.equal(verificarVigencia(null), false, 'Sin compromiso debe requerir firma');
assert.equal(verificarVigencia(undefined), false, 'Compromiso undefined debe requerir firma');
console.log('✓ [Caso 3] Sin compromiso: PENDIENTE DE FIRMA');

// Caso 5d: Versión antigua o no autorizada
const versionInvalida = { version: '2025-01-01', nombre_completo: 'Test' };
assert.equal(verificarVigencia(versionInvalida), false, 'Versiones no autorizadas deben requerir firma');
console.log('✓ [Caso 4] Versión inválida o desactualizada: PENDIENTE DE FIRMA');

console.log('🎉 ¡Todas las pruebas de versiones de compromiso pasaron exitosamente!');
