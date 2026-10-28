import assert from 'node:assert/strict';
import {
  VIDEOS_ADMINISTRATIVOS_RESTRINGIDOS,
  VIDEOS_OFICIALES,
  filtrarVideosCatalogo
} from '../src/data/catalogoVideosData.js';

console.log('--- Iniciando prueba de restricción de vídeos a mentores ---');

// 1. Verificar IDs restringidos esperados
assert.ok(VIDEOS_ADMINISTRATIVOS_RESTRINGIDOS.has('GOOGLE_EDUCATION'), 'GOOGLE_EDUCATION debe estar en la lista de restringidos');
assert.ok(VIDEOS_ADMINISTRATIVOS_RESTRINGIDOS.has('ADMINISTRADOR_OPERATIVO'), 'ADMINISTRADOR_OPERATIVO debe estar en la lista de restringidos');
assert.equal(VIDEOS_ADMINISTRATIVOS_RESTRINGIDOS.size, 2, 'Deben ser exactamente 2 vídeos restringidos');
console.log('✓ [Paso 1] IDs restringidos confirmados: GOOGLE_EDUCATION y ADMINISTRADOR_OPERATIVO');

// 2. Verificar que para un mentor (esAdmin = false), ambos vídeos SE OCULTAN por completo
const videosMentor = filtrarVideosCatalogo(false);
const idsMentor = new Set(videosMentor.map(v => v.id));

assert.ok(!idsMentor.has('GOOGLE_EDUCATION'), 'ERROR: GOOGLE_EDUCATION NO debe ser visible para un mentor');
assert.ok(!idsMentor.has('ADMINISTRADOR_OPERATIVO'), 'ERROR: ADMINISTRADOR_OPERATIVO NO debe ser visible para un mentor');
console.log(`✓ [Paso 2] Para un mentor (esAdmin = false), se ocultan ambos vídeos restringidos. Total vídeos accesibles: ${videosMentor.length}`);

// 3. Verificar que los vídeos pedagógicos, de programas y de sistemas SÍ son visibles para el mentor
assert.ok(idsMentor.has('V00'), 'Presentación General debe ser visible para el mentor');
assert.ok(idsMentor.has('V001'), 'Historia del Mastery Learning debe ser visible para el mentor');
assert.ok(idsMentor.has('SIS_PADRES'), 'SIS Padres debe ser visible para el mentor');
assert.ok(idsMentor.has('DUAL_DIPLOMA'), 'Dual Diploma debe ser visible para el mentor');
console.log('✓ [Paso 3] Los vídeos pedagógicos, de programas y de sistemas son visibles para el mentor.');

// 4. Verificar que para un administrador (esAdmin = true), ambos vídeos SÍ aparecen
const videosAdmin = filtrarVideosCatalogo(true);
const idsAdmin = new Set(videosAdmin.map(v => v.id));

assert.ok(idsAdmin.has('GOOGLE_EDUCATION'), 'GOOGLE_EDUCATION debe ser visible para un admin');
assert.ok(idsAdmin.has('ADMINISTRADOR_OPERATIVO'), 'ADMINISTRADOR_OPERATIVO debe ser visible para un admin');
assert.equal(videosAdmin.length, videosMentor.length + 2, 'La vista de admin debe tener exactamente los 2 vídeos adicionales restringidos');
console.log(`✓ [Paso 4] Para un admin (esAdmin = true), se muestran todos los vídeos incluidos los restringidos. Total: ${videosAdmin.length}`);

console.log('🎉 ¡Todas las pruebas de restricción de vídeos pasaron exitosamente!');
