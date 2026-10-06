import { useState, useEffect, useCallback, useMemo } from 'react'
import Login from './components/Login'
import PendienteAprobacion from './components/PendienteAprobacion'
import Dashboard from './components/Dashboard'
import OperativaSIS from './components/OperativaSIS'
import GuiasFamilias from './components/GuiasFamilias'
import CoordinacionSIS from './components/CoordinacionSIS'
import CatalogoVideos from './components/CatalogoVideos'
import CourseIntro from './components/CourseIntro'
import BlockView from './components/BlockView'
import ModuleView from './components/ModuleView'
import HoursLog from './components/HoursLog'
import Certificado from './components/Certificado'
import AdminView from './components/AdminView'
import Glosario from './components/Glosario'
import Organigrama from './components/Organigrama'
import MatrizProgramas from './components/MatrizProgramas'
import RolPerfil from './components/RolPerfil'
import { rolesDesdeTipoAcceso } from './data/roles'
import Header from './components/ui/Header'
import CambiarContrasena from './components/CambiarContrasena'
import * as api from './lib/backend'
import { getModulo } from './data/curriculum'
import { aplicarEquivalencias } from './lib/calculos'
import { useIdioma } from './i18n/idioma'

export default function App() {
  const { t } = useIdioma()
  const [cargando, setCargando] = useState(true)
  const [sesion, setSesion] = useState(null) // sesión de Supabase
  const [perfil, setPerfil] = useState(null) // { id, nombre, rol, estado }
  const [vista, setVista] = useState({ nombre: 'dashboard' })

  // Datos de la usuaria que se está viendo (una mentora ve solo los suyos)
  const [progreso, setProgreso] = useState({ modulos: {} })
  // Vista con el avance anterior reconocido (solo para mostrar; las escrituras usan `progreso`).
  const progresoVista = useMemo(() => aplicarEquivalencias(progreso), [progreso])
  const [videos, setVideos] = useState({})
  // Roles (ROLE ≠ PERSON) de la persona cuyo panel se muestra; null = migración pendiente (se deriva de tipo_acceso)
  const [rolesViendo, setRolesViendo] = useState(null)
  const [contactoViendo, setContactoViendo] = useState(null)
  const [tipoAccesoViendo, setTipoAccesoViendo] = useState(null)
  const [errorCarga, setErrorCarga] = useState('')

  const esAdmin = perfil?.rol === 'admin'
  const aprobada = perfil?.estado === 'aprobada'
  // El admin puede abrir el panel de otra usuaria; si no, es el suyo
  const idViendo = vista.usuariaId || perfil?.id
  const viendoOtra = esAdmin && idViendo !== perfil?.id

  // ── Sesión ──
  useEffect(() => {
    let vivo = true
    api.getSesion().then((s) => {
      if (vivo) setSesion(s)
      if (!s && vivo) setCargando(false)
    })
    return api.onCambioAuth((evento, s) => {
      setSesion(s)
      if (evento === 'PASSWORD_RECOVERY') {
        setVista({ nombre: 'cambiar-contrasena' })
      }
      if (!s) {
        setPerfil(null)
        setProgreso({ modulos: {} })
        setVista({ nombre: 'dashboard' })
        setCargando(false)
      }
    })
  }, [])

  // ── Perfil ──
  useEffect(() => {
    if (!sesion?.user) return
    let vivo = true
    api
      .getPerfil(sesion.user.id)
      .then((p) => vivo && setPerfil(p))
      .catch((e) => vivo && setErrorCarga(e.message))
      .finally(() => vivo && setCargando(false))
    return () => {
      vivo = false
    }
  }, [sesion])

  // ── Progreso y vídeos ──
  const recargarDatos = useCallback(async () => {
    if (!idViendo || !aprobada) return
    try {
      const [pr, vd] = await Promise.all([api.getProgreso(idViendo), api.getVideos()])
      setProgreso(pr)
      setVideos(vd)
    } catch (e) {
      setErrorCarga(e.message)
    }
  }, [idViendo, aprobada])

  useEffect(() => {
    recargarDatos()
  }, [recargarDatos])

  // ── Roles de la persona mostrada ──
  useEffect(() => {
    if (!idViendo || !aprobada) return
    let vivo = true
    ;(async () => {
      try {
        const [filas, p] = await Promise.all([
          api.getRolesDe(idViendo),
          idViendo === perfil?.id ? Promise.resolve(perfil) : api.getPerfil(idViendo),
        ])
        if (!vivo) return
        setRolesViendo(filas)
        setContactoViendo(p?.contacto_menores ?? null)
        setTipoAccesoViendo(p?.tipo_acceso || 'mentora')
      } catch {
        if (vivo) {
          setRolesViendo(null)
          setContactoViendo(null)
          setTipoAccesoViendo(perfil?.tipo_acceso || 'mentora')
        }
      }
    })()
    return () => {
      vivo = false
    }
  }, [idViendo, aprobada, perfil])

  // Roles efectivos: los asignados; si aún no hay ninguno, los derivados de tipo_acceso
  const rolesIds = useMemo(() => {
    const asignados = (rolesViendo || []).map((r) => r.rol)
    return asignados.length ? [...new Set(asignados)] : rolesDesdeTipoAcceso(tipoAccesoViendo || perfil?.tipo_acceso)
  }, [rolesViendo, tipoAccesoViendo, perfil])

  // ── Mutaciones (actualizan Supabase y el estado local) ──
  const mutar = useCallback(
    async (fn) => {
      try {
        await fn()
        const pr = await api.getProgreso(idViendo)
        setProgreso(pr)
      } catch (e) {
        setErrorCarga(e.message)
      }
    },
    [idViendo]
  )

  const acciones = {
    setEstado: (moduloId, estado, fecha) =>
      mutar(() =>
        api.setEstadoModulo(idViendo, moduloId, estado, progreso.modulos[moduloId], fecha)
      ),
    setNotas: (moduloId, notas) =>
      mutar(() => api.setNotasModulo(idViendo, moduloId, notas, progreso.modulos[moduloId])),
    setQuiz: (moduloId, resultado) =>
      mutar(() => api.setQuizModulo(idViendo, moduloId, resultado, progreso.modulos[moduloId])),
    subirEntregable: (moduloId, archivo) =>
      mutar(() => api.subirEntregable(idViendo, moduloId, archivo)),
    guardarVideo: async (moduloId, idx, url, nota) => {
      await api.guardarVideo(moduloId, idx, url, nota, perfil.id)
      setVideos(await api.getVideos())
    },
    borrarVideo: async (moduloId, idx) => {
      await api.borrarVideo(moduloId, idx)
      setVideos(await api.getVideos())
    },
  }

  // ── Estados de carga y acceso ──
  if (cargando) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-navy">
        <div className="text-center text-cream/70">
          <img
            src="/logo-chanak.png"
            alt="Chanak International Academy"
            className="mx-auto mb-4 h-16 w-16 animate-pulse rounded-xl bg-white/95 p-1.5"
          />
          <p className="text-sm">{t('gen.cargando')}</p>
        </div>
      </div>
    )
  }

  if (!sesion) {
    return (
      <>
        <Login />
        <Glosario />
      </>
    )
  }

  if (vista.nombre === 'cambiar-contrasena') {
    return (
      <CambiarContrasena
        onCompletado={() => {
          setVista({ nombre: 'dashboard' })
        }}
        onCancelar={() => api.salir()}
      />
    )
  }

  if (!perfil) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-navy px-4 text-center">
        <p className="max-w-sm text-sm leading-relaxed text-cream/80">
          {t('gen.errorPerfil')}
          {errorCarga && <span className="mt-2 block text-xs text-coral">{errorCarga}</span>}
          <span className="mt-2 block text-xs text-cream/50">
            {t('gen.errorEsquema')}
          </span>
        </p>
        <button
          onClick={() => api.salir()}
          className="rounded-xl border border-cream/25 px-4 py-2 text-sm text-cream/80"
        >
          {t('sesion.cerrar')}
        </button>
      </div>
    )
  }

  if (!aprobada) return <PendienteAprobacion perfil={perfil} onSalir={() => api.salir()} />

  // Usuaria mostrada en el panel (admin puede ver a otra)
  const mentoraMostrada = {
    id: idViendo,
    nombre: vista.usuariaNombre || perfil.nombre,
    idInterno: viendoOtra ? vista.usuariaIdInterno : perfil.id_interno,
  }

  return (
    <div className="min-h-screen bg-cream">
      <Header
        perfil={perfil}
        esAdmin={esAdmin}
        vista={vista}
        onNavegar={setVista}
        onSalir={() => api.salir()}
      />


      {viendoOtra && (
        <div className="no-print bg-gold/20 px-4 py-2 text-center text-xs font-medium text-navy">
          {t('gen.viendoProgreso', { nombre: mentoraMostrada.nombre })} ·{' '}
          <button
            onClick={() => setVista({ nombre: 'admin' })}
            className="underline hover:no-underline"
          >
            {t('gen.volverAdmin')}
          </button>
        </div>
      )}

      <main className="mx-auto max-w-3xl px-4 pb-16 pt-4">
        {errorCarga && (
          <p className="mb-4 rounded-xl border-l-4 border-coral bg-coral/8 px-4 py-2.5 text-xs text-coral">
            {errorCarga}
          </p>
        )}

        {vista.nombre === 'dashboard' && (
          <Dashboard
            mentora={mentoraMostrada}
            progreso={progresoVista}
            esAdmin={esAdmin}
            viendoOtra={viendoOtra}
            onAbrirBloque={(bloqueId) => setVista({ ...vista, nombre: 'bloque', bloqueId })}
            onAbrirModulo={(moduloId) =>
              setVista({ ...vista, nombre: 'modulo', moduloId, bloqueId: getModulo(moduloId)?.bloqueId })
            }
            onVerGuias={() => setVista({ ...vista, nombre: 'guias-familias' })}
            onVerCoordinacion={() => setVista({ ...vista, nombre: 'coordinacion-sis' })}
            onVerOperativa={() => setVista({ ...vista, nombre: 'operativa-sis' })}
            onVerCatalogo={() => setVista({ ...vista, nombre: 'catalogo-videos' })}
            onVerHoras={() => setVista({ ...vista, nombre: 'horas' })}
            onVerCurso={() => setVista({ ...vista, nombre: 'curso' })}
            onVerCertificado={(nivel) => setVista({ ...vista, nombre: 'certificado', nivel })}
            roles={rolesIds}
            contactoMenores={contactoViendo}
            onVerOrganigrama={() => setVista({ ...vista, nombre: 'organigrama' })}
            onVerRol={(rolId) => setVista({ ...vista, nombre: 'rol', rolId })}
            onVerMatriz={() => setVista({ ...vista, nombre: 'matriz' })}
          />
        )}
        {vista.nombre === 'catalogo-videos' && <CatalogoVideos onVolver={() => setVista({ ...vista, nombre: 'dashboard' })} />}
        {vista.nombre === 'operativa-sis' && <OperativaSIS onVolver={() => setVista({ ...vista, nombre: 'dashboard' })} />}
        {vista.nombre === 'guias-familias' && <GuiasFamilias onVolver={() => setVista({ ...vista, nombre: 'dashboard' })} />}
        {vista.nombre === 'coordinacion-sis' && <CoordinacionSIS onVolver={() => setVista({ ...vista, nombre: 'dashboard' })} />}
        {vista.nombre === 'matriz' && <MatrizProgramas onVolver={() => setVista({ ...vista, nombre: 'dashboard' })} />}
        {vista.nombre === 'organigrama' && (
          <Organigrama
            onVolver={() => setVista({ ...vista, nombre: 'dashboard' })}
            onVerRol={(rolId) => setVista({ ...vista, nombre: 'rol', rolId })}
          />
        )}
        {vista.nombre === 'rol' && (
          <RolPerfil
            rolId={vista.rolId}
            progreso={progresoVista}
            onVolver={() => setVista({ ...vista, nombre: 'organigrama' })}
            onAbrirModulo={(moduloId) => setVista({ ...vista, nombre: 'modulo', moduloId, bloqueId: getModulo(moduloId)?.bloqueId })}
          />
        )}
        {vista.nombre === 'curso' && (
          <CourseIntro
            onEmpezar={() => setVista({ ...vista, nombre: 'bloque', bloqueId: 'B1' })}
            onVolver={() => setVista({ ...vista, nombre: 'dashboard' })}
          />
        )}
        {vista.nombre === 'bloque' && (
          <BlockView
            bloqueId={vista.bloqueId}
            progreso={progresoVista}
            onAbrirModulo={(moduloId) => setVista({ ...vista, nombre: 'modulo', moduloId })}
            onVolver={() => setVista({ ...vista, nombre: 'dashboard' })}
          />
        )}
        {vista.nombre === 'modulo' && (
          <ModuleView
            moduloId={vista.moduloId}
            progresoModulo={progresoVista.modulos[vista.moduloId]}
            videos={videos}
            esAdmin={esAdmin}
            acciones={acciones}
            onVerGuias={() => setVista({ ...vista, nombre: 'guias-familias' })}
            onVerCoordinacion={() => setVista({ ...vista, nombre: 'coordinacion-sis' })}
            onVerOperativa={() => setVista({ ...vista, nombre: 'operativa-sis' })}
            onVerCatalogo={() => setVista({ ...vista, nombre: 'catalogo-videos' })}
            onVolver={() => setVista({ ...vista, nombre: 'bloque' })}
          />
        )}
        {vista.nombre === 'horas' && (
          <HoursLog
            mentora={mentoraMostrada}
            progreso={progresoVista}
            onVolver={() => setVista({ ...vista, nombre: 'dashboard' })}
          />
        )}
        {vista.nombre === 'certificado' && (
          <Certificado
            mentora={mentoraMostrada}
            progreso={progresoVista}
            nivel={vista.nivel}
            onVolver={() => setVista({ ...vista, nombre: 'dashboard' })}
          />
        )}
        {vista.nombre === 'admin' && esAdmin && (
          <AdminView
            miPerfil={perfil}
            onVerUsuaria={(usuariaId, usuariaNombre, usuariaIdInterno) =>
              setVista({ nombre: 'dashboard', usuariaId, usuariaNombre, usuariaIdInterno })
            }
            onVerCertificado={(usuariaId, usuariaNombre, nivel, usuariaIdInterno) =>
              setVista({ nombre: 'certificado', usuariaId, usuariaNombre, nivel, usuariaIdInterno })
            }
          />
        )}
      </main>
      <Glosario />
    </div>
  )
}
