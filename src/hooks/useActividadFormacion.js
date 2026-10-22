import { useEffect, useRef } from 'react'
import { registrarActividad } from '../lib/backend'
import { segundosDelIntervalo } from '../lib/actividad'

// El usuario observado por Administración nunca recibe el tiempo de quien lo observa.
export default function useActividadFormacion(perfilId, habilitado, contexto) {
  const contextoRef = useRef(contexto)
  contextoRef.current = contexto
  useEffect(() => {
    if (!perfilId || !habilitado) return
    const sesionId = crypto.randomUUID()
    const clave = `chanak-actividad-${perfilId}`
    let segmento = null
    let anterior = Date.now()
    let ultimaInteraccion = anterior
    let detenido = false
    let ultimoGuardado = 0
    let guardando = false
    let lider = false
    let liberarLock = null
    let pidiendoLock = false
    let avisoMostrado = false

    async function guardar(fila = segmento) {
      if (!fila) return
      const datos = { ...fila, segundos_activos: Math.floor(fila.segundos_activos) }
      try { await registrarActividad(datos) } catch (e) {
        if (!avisoMostrado) { console.warn('No se pudo guardar actividad de formación:', e.message); avisoMostrado = true }
      }
    }
    function liberar() {
      lider = false
      if (liberarLock) { liberarLock(); liberarLock = null }
      try { const lease = JSON.parse(localStorage.getItem(clave) || 'null'); if (lease?.id === sesionId) localStorage.removeItem(clave) } catch { /* Almacenamiento deshabilitado. */ }
    }
    function reclamar(ahora) {
      if (navigator.locks) {
        if (!lider && !pidiendoLock) {
          pidiendoLock = true
          navigator.locks.request(clave, { ifAvailable: true }, async (lock) => {
            pidiendoLock = false
            if (!lock || detenido || document.hidden) return
            lider = true
            await new Promise((resolve) => { liberarLock = resolve })
            lider = false
          }).catch(() => { pidiendoLock = false })
        }
        return lider
      }
      // Alternativa para navegadores sin Web Locks. No mide si no puede coordinar pestañas.
      try {
        const lease = JSON.parse(localStorage.getItem(clave) || 'null')
        if (lease && lease.id !== sesionId && lease.expira > ahora) return false
        localStorage.setItem(clave, JSON.stringify({ id: sesionId, expira: ahora + 15000 }))
        return true
      } catch { return false }
    }
    function tick() {
      const ahora = Date.now()
      const visible = !document.hidden
      const foco = document.hasFocus()
      if (!visible || !foco) liberar()
      const puedeMedir = visible && foco && reclamar(ahora)
      const ctx = contextoRef.current
      const claveContexto = JSON.stringify([ctx.vista, ctx.moduloId, ctx.paso])
      if (puedeMedir && segmento?._contexto !== claveContexto) {
        if (segmento) void guardar(segmento)
        segmento = { id: crypto.randomUUID(), perfil_id: perfilId, sesion_id: sesionId,
          vista: ctx.vista, modulo_id: ctx.moduloId || null, paso: ctx.paso || null,
          segundos_activos: 0, ultima_actividad: new Date(ahora).toISOString(), _contexto: claveContexto }
        // Entrada observada, separada de cualquier aprobación.
        void guardar(segmento)
        anterior = ahora
      }
      if (puedeMedir && segmento) {
        const segundos = segundosDelIntervalo({ anterior, ahora, ultimaInteraccion, visible, tieneFoco: foco })
        segmento.segundos_activos += segundos
        if (segundos > 0) segmento.ultima_actividad = new Date(ahora).toISOString()
      }
      anterior = ahora
      if (segmento && !guardando && ahora - ultimoGuardado >= 30000) {
        guardando = true
        ultimoGuardado = ahora
        void guardar().finally(() => { guardando = false })
      }
    }
    function interactuar() { ultimaInteraccion = Date.now() }
    function visibilidad() { tick(); if (document.hidden) void guardar() }
    function cerrar() { tick(); void guardar(); liberar() }
    const eventos = ['pointerdown', 'keydown', 'scroll', 'touchstart', 'mousemove']
    for (const e of eventos) window.addEventListener(e, interactuar, { passive: true })
    document.addEventListener('visibilitychange', visibilidad)
    window.addEventListener('pagehide', cerrar)
    window.addEventListener('blur', visibilidad)
    const timer = setInterval(tick, 5000)
    tick()
    return () => {
      tick(); detenido = true; void guardar(); liberar(); clearInterval(timer)
      for (const e of eventos) window.removeEventListener(e, interactuar)
      document.removeEventListener('visibilitychange', visibilidad)
      window.removeEventListener('pagehide', cerrar)
      window.removeEventListener('blur', visibilidad)
    }
  }, [perfilId, habilitado])
}
