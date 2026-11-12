import { useState } from 'react'
import { getModulo, numModulo } from '../data/curriculum'
import { ROL_POR_ID, solicitudDe, PROYECTOS_PRIORIDAD } from '../data/roles'
import { formatearFecha, formatearUltimaActividad, calcularUltimaActividad } from '../lib/calculos'

export default function ModalRespuestasUsuaria({
  perfil,
  correo,
  progreso,
  compromiso,
  onCerrar,
}) {
  const [copiado, setCopiado] = useState(false)
  const [copiadoId, setCopiadoId] = useState(null)
  const [filtro, setFiltro] = useState('todas') // 'todas' | 'notas' | 'quiz'

  const mods = progreso?.modulos || {}
  const solicitud = solicitudDe(compromiso?.funciones)
  const ultimaActividadIso = calcularUltimaActividad(perfil, progreso, compromiso)

  // Recopilar módulos con alguna respuesta, nota, quiz o entregable
  const listaModulosConContenido = Object.entries(mods)
    .filter(([, m]) => m && (m.notas?.trim() || m.quiz || m.entregableUrl))
    .map(([id, m]) => {
      const def = getModulo(id)
      return {
        id,
        num: numModulo(id),
        titulo: def?.titulo || id,
        horas: def?.horas || 0,
        estado: m.estado,
        fechaInicio: m.fechaInicio,
        fechaCompletado: m.fechaCompletado,
        actualizadoEn: m.actualizadoEn,
        notas: m.notas || '',
        quiz: m.quiz || null,
        entregableUrl: m.entregableUrl || null,
        entregableNombre: m.entregableNombre || null,
        criterio: def?.criterio || def?.practica?.criterio || null,
      }
    })
    .sort((a, b) => {
      const tA = a.actualizadoEn || a.fechaCompletado || a.fechaInicio || ''
      const tB = b.actualizadoEn || b.fechaCompletado || b.fechaInicio || ''
      return tB.localeCompare(tA)
    })

  const conNotas = listaModulosConContenido.filter((x) => x.notas.trim().length > 0)
  const conQuiz = listaModulosConContenido.filter((x) => Boolean(x.quiz))

  const listaFiltrada =
    filtro === 'notas'
      ? conNotas
      : filtro === 'quiz'
      ? conQuiz
      : listaModulosConContenido

  // Genera reporte de texto completo para copiar al portapapeles
  function generarTextoCompleto() {
    let t = `EXPEDIENTE DE FORMACIÓN Y RESPUESTAS ESCRITAS\n`
    t += `Usuaria: ${perfil?.nombre || 'Mentora'}\n`
    t += `Correo oficial: ${correo || 'No registrado'}\n`
    t += `Última actividad: ${formatearUltimaActividad(ultimaActividadIso)}\n`
    if (solicitud) {
      const rolesTxt = (solicitud.funciones || [])
        .map((f) => ROL_POR_ID[f]?.nombreEs || ROL_POR_ID[f]?.nombre || f)
        .join(', ')
      t += `Rama solicitada: ${rolesTxt} (Fecha: ${solicitud.fecha ? solicitud.fecha.slice(0, 10) : '—'})\n`
    }
    t += `Total módulos con respuestas: ${conNotas.length}\n`
    t += `Total evaluaciones / quizzes: ${conQuiz.length}\n`
    t += `Almacenamiento: Base de datos Supabase · Tabla progreso (notas, quiz)\n`
    t += `═══════════════════════════════════════════════════════════\n\n`

    listaModulosConContenido.forEach((m, idx) => {
      t += `[${idx + 1}] MÓDULO ${m.num} · ${m.titulo}\n`
      t += `Estado: ${m.estado === 'completado' ? 'Completado ✓' : 'En curso ⏳'}`
      if (m.actualizadoEn) t += ` · Actualizado: ${new Date(m.actualizadoEn).toLocaleString('es-ES')}`
      t += `\n`

      if (m.quiz) {
        const pct = m.quiz.total ? Math.round((m.quiz.aciertos / m.quiz.total) * 100) : 0
        t += `Evaluación: ${m.quiz.aciertos}/${m.quiz.total} aciertos (${pct}%) · ${m.quiz.aprobado ? 'Aprobado ✓' : 'Pendiente'}\n`
      }

      if (m.notas.trim()) {
        t += `Respuesta / Reflexión escrita:\n`
        t += `"${m.notas.trim()}"\n`
      }

      if (m.entregableUrl) {
        t += `Entregable adjunto: ${m.entregableNombre || 'Archivo'} (${m.entregableUrl})\n`
      }
      t += `───────────────────────────────────────────────────────────\n\n`
    })

    return t
  }

  function copiarTodo() {
    navigator.clipboard.writeText(generarTextoCompleto())
    setCopiado(true)
    setTimeout(() => setCopiado(false), 3000)
  }

  function copiarRespuestaIndividual(id, texto) {
    navigator.clipboard.writeText(texto)
    setCopiadoId(id)
    setTimeout(() => setCopiadoId(null), 3000)
  }

  function imprimirExpediente() {
    window.print()
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl bg-white shadow-2xl border border-navy/10 overflow-hidden animate-fade-in my-auto">
        {/* Cabecera */}
        <div className="bg-navy px-5 py-4 text-cream flex items-start justify-between gap-3 border-b border-navy/30">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-teal/20 px-2.5 py-0.5 text-[11px] font-bold text-teal tracking-wide uppercase">
                Expediente de Respuestas y Evidencias
              </span>
              <span className="text-xs text-cream/60">
                Almacenado en BD Supabase
              </span>
            </div>
            <h3 className="mt-1 text-xl font-bold text-white flex items-center gap-2">
              <span>📝</span> {perfil?.nombre || 'Mentora'}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-cream/80">
              <span className="font-semibold text-teal bg-white/10 px-2.5 py-0.5 rounded-md">
                📧 {correo || 'Sin correo registrado'}
              </span>
              <span>
                🕐 Última actividad: <b>{formatearUltimaActividad(ultimaActividadIso)}</b>
              </span>
            </div>
          </div>
          <button
            onClick={onCerrar}
            className="rounded-xl bg-white/10 p-2 text-cream hover:bg-white/20 transition text-sm font-bold"
            title="Cerrar ventana"
          >
            ✕
          </button>
        </div>

        {/* Banner explicativo de almacenamiento seguro en Supabase */}
        <div className="bg-teal/8 border-b border-teal/20 px-5 py-3">
          <div className="flex items-start gap-2.5 text-xs text-navy/85">
            <span className="text-base leading-none">ℹ️</span>
            <div>
              <p className="font-bold text-teal">
                ¿Dónde se guardan las respuestas y textos que escriben las usuarias?
              </p>
              <p className="mt-0.5 text-navy/70 leading-relaxed">
                Cada análisis de caso, reflexión práctica o respuesta a ejercicios que se escribe en la plataforma se guarda <b>en tiempo real y de forma permanente en la base de datos Supabase</b>, dentro de la tabla <code className="bg-white px-1.5 py-0.5 rounded border border-teal/30 font-mono text-[11px] text-teal font-bold">progreso</code> (columna <code className="bg-white px-1.5 py-0.5 rounded border border-teal/30 font-mono text-[11px] text-teal font-bold">notas</code>). No se envían a servicios externos ni se extravían: quedan vinculadas de inmediato a la cuenta de la usuaria.
              </p>
            </div>
          </div>
        </div>

        {/* Información de Rama Seleccionada */}
        {solicitud && (
          <div className="bg-gold/10 border-b border-gold/25 px-5 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-navy/60 block">
                  🎯 Rama elegida tras Tronco Común
                </span>
                <p className="text-xs font-bold text-navy">
                  {(solicitud.funciones || [])
                    .map((f) => ROL_POR_ID[f]?.nombreEs || ROL_POR_ID[f]?.nombre || f)
                    .join(' + ') || 'Rama seleccionada'}
                  {solicitud.fecha && (
                    <span className="font-normal text-navy/60 ml-2">
                      (Registrada el {formatearFecha(solicitud.fecha.slice(0, 10))})
                    </span>
                  )}
                </p>
                {solicitud.datosEstrategico && (
                  <p className="text-[11px] text-navy/70 mt-0.5">
                    {solicitud.datosEstrategico.proyectoSel && (
                      <span>Proyecto: <b>{PROYECTOS_PRIORIDAD.find((p) => p.id === solicitud.datosEstrategico.proyectoSel)?.titulo || solicitud.datosEstrategico.proyectoSel}</b> · </span>
                    )}
                    {solicitud.datosEstrategico.alcance && <span>Alcance: <b>{solicitud.datosEstrategico.alcance}</b> · </span>}
                    {solicitud.datosEstrategico.tiempoDisp && <span>Disponibilidad: <b>{solicitud.datosEstrategico.tiempoDisp}</b></span>}
                  </p>
                )}
              </div>
              <span className="shrink-0 rounded-full bg-teal px-3 py-1 text-[11px] font-bold text-white shadow-xs self-start sm:self-center">
                ✓ Solicitud Registrada
              </span>
            </div>
          </div>
        )}

        {/* Barra de Filtros y Estadísticas */}
        <div className="px-5 py-3 border-b border-slate-100 flex flex-wrap items-center justify-between gap-3 bg-slate-50">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setFiltro('todas')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                filtro === 'todas'
                  ? 'bg-navy text-white shadow-xs'
                  : 'bg-white text-navy/70 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              Todas las entregas ({listaModulosConContenido.length})
            </button>
            <button
              onClick={() => setFiltro('notas')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                filtro === 'notas'
                  ? 'bg-navy text-white shadow-xs'
                  : 'bg-white text-navy/70 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              📝 Respuestas escritas ({conNotas.length})
            </button>
            <button
              onClick={() => setFiltro('quiz')}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                filtro === 'quiz'
                  ? 'bg-navy text-white shadow-xs'
                  : 'bg-white text-navy/70 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              📊 Tests / Quizzes ({conQuiz.length})
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copiarTodo}
              className="rounded-xl border border-teal/40 bg-white px-3 py-1.5 text-xs font-bold text-teal hover:bg-teal hover:text-white transition shadow-xs inline-flex items-center gap-1.5"
              title="Copiar todas las respuestas a texto plano para informes o correo"
            >
              {copiado ? '✓ ¡Expediente Copiado!' : '📋 Copiar Todas las Respuestas'}
            </button>
            <button
              onClick={imprimirExpediente}
              className="rounded-xl bg-teal px-3 py-1.5 text-xs font-bold text-white hover:bg-teal/90 transition shadow-xs inline-flex items-center gap-1.5"
              title="Imprimir o exportar como PDF para auditoría"
            >
              🖨️ Imprimir / Guardar PDF
            </button>
          </div>
        </div>

        {/* Contenido desplazable */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {listaFiltrada.length === 0 ? (
            <div className="text-center py-12 px-4 rounded-2xl bg-cream/30 border-2 border-dashed border-navy/15">
              <span className="text-3xl block mb-2">📭</span>
              <p className="text-sm font-bold text-navy">
                No hay respuestas registradas bajo este filtro.
              </p>
              <p className="text-xs text-navy/60 mt-1 max-w-md mx-auto">
                La usuaria aún no ha completado reflexiones escritas o evaluaciones en este apartado. En cuanto escriba y guarde en cualquier módulo, aparecerá aquí inmediatamente.
              </p>
            </div>
          ) : (
            listaFiltrada.map((m) => {
              const tieneTexto = m.notas.trim().length > 0
              return (
                <div
                  key={m.id}
                  className="rounded-2xl border border-navy/10 bg-white p-4 shadow-xs hover:border-teal/40 transition space-y-3"
                >
                  {/* Encabezado del módulo */}
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-teal bg-teal/10 px-2 py-0.5 rounded-md">
                          {m.num}
                        </span>
                        <h4 className="font-bold text-navy text-sm">{m.titulo}</h4>
                      </div>
                      <div className="text-[11px] text-navy/55 mt-0.5 flex flex-wrap items-center gap-2">
                        <span>
                          Estado: <b className={m.estado === 'completado' ? 'text-teal' : 'text-gold'}>
                            {m.estado === 'completado' ? 'Completado ✓' : 'En curso ⏳'}
                          </b>
                        </span>
                        {m.actualizadoEn && (
                          <span>
                            · Actualizado: {new Date(m.actualizadoEn).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' })}
                          </span>
                        )}
                        {m.fechaCompletado && (
                          <span>· Finalizado: {formatearFecha(m.fechaCompletado)}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {tieneTexto && (
                        <button
                          onClick={() => copiarRespuestaIndividual(m.id, m.notas)}
                          className="rounded-lg bg-navy/5 px-2.5 py-1 text-[11px] font-semibold text-navy hover:bg-navy/10 transition inline-flex items-center gap-1"
                          title="Copiar texto de esta respuesta"
                        >
                          {copiadoId === m.id ? '✓ ¡Copiado!' : '📋 Copiar'}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Texto de la respuesta / reflexión escrita */}
                  {tieneTexto && (
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-teal flex items-center gap-1">
                          <span>📝</span> Respuesta y Análisis Escrito
                        </span>
                        <span className="text-[10px] text-navy/45">
                          {m.notas.trim().length} caracteres
                        </span>
                      </div>
                      <div className="rounded-xl border border-teal/20 bg-teal/5 p-3.5 text-xs text-navy font-sans leading-relaxed whitespace-pre-wrap select-text">
                        {m.notas}
                      </div>
                    </div>
                  )}

                  {/* Resultado de Evaluación / Quiz si existe */}
                  {m.quiz && (
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-base">📊</span>
                        <div>
                          <span className="text-xs font-bold text-navy block">
                            Evaluación de Conocimientos (Knowledge Check)
                          </span>
                          <span className="text-[11px] text-navy/60">
                            Aciertos: <b>{m.quiz.aciertos}</b> de <b>{m.quiz.total}</b> ({m.quiz.total ? Math.round((m.quiz.aciertos / m.quiz.total) * 100) : 0}%)
                          </span>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                          m.quiz.aprobado
                            ? 'bg-teal/15 text-teal'
                            : 'bg-gold/20 text-gold'
                        }`}
                      >
                        {m.quiz.aprobado ? '✓ Aprobado' : '⏳ Pendiente'}
                      </span>
                    </div>
                  )}

                  {/* Entregable si existe */}
                  {m.entregableUrl && (
                    <div className="rounded-xl bg-gold/10 border border-gold/30 p-3 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-base">📎</span>
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-navy block truncate">
                            {m.entregableNombre || 'Documento entregable'}
                          </span>
                          <span className="text-[10px] text-navy/60 font-mono truncate block">
                            {m.entregableUrl}
                          </span>
                        </div>
                      </div>
                      <a
                        href={m.entregableUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg bg-teal px-2.5 py-1 text-xs font-bold text-white hover:bg-teal/90 transition shadow-xs"
                      >
                        Ver Documento
                      </a>
                    </div>
                  )}
                </div>
              )
            })
          )}
        </div>

        {/* Pie del modal */}
        <div className="bg-slate-50 px-5 py-3 border-t border-slate-200 flex items-center justify-between gap-3">
          <span className="text-xs text-navy/60">
            Total entregas registradas: <b>{listaModulosConContenido.length}</b> módulos con interacción
          </span>
          <button
            onClick={onCerrar}
            className="rounded-xl bg-navy px-4 py-2 text-xs font-bold text-white hover:bg-navy/90 transition shadow-xs"
          >
            Cerrar Expediente
          </button>
        </div>
      </div>
    </div>
  )
}
