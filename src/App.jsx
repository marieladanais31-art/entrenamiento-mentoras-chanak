import { useState, useEffect, useCallback } from 'react'
import Login from './components/Login'
import PendienteAprobacion from './components/PendienteAprobacion'
import Dashboard from './components/Dashboard'
import CourseIntro from './components/CourseIntro'
import BlockView from './components/BlockView'
import ModuleView from './components/ModuleView'
import HoursLog from './components/HoursLog'
import Certificado from './components/Certificado'
import AdminView from './components/AdminView'
import EducaFeView from './components/EducaFeView'
import ModalPasswordEducaFe from './components/ModalPasswordEducaFe'
import Header from './components/ui/Header'
import CambiarContrasena from './components/CambiarContrasena'
import * as api from './lib/backend'
import { getModulo } from './data/curriculum'
import { useIdioma } from './i18n/idioma'

export default function App() {
  const { t } = useIdioma()
  const [cargando, setCargando] = useState(true)
  const [sesion, setSesion] = useState(null) // sesión de Supabase
  const [perfil, setPerfil] = useState(null) // { id, nombre, rol, estado }
  const [vista, setVista] = useState({ nombre: 'dashboard' })
  const [mostrandoModalEducaFe, setMostrandoModalEducaFe] = useState(false)

  // Datos de la usuaria que se está viendo (una mentora ve solo los suyos)
  const [progreso, setProgreso] = useState({ modulos: {} })
  const [videos, setVideos] = useState({})
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

  if (!sesion) return <Login />

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
        onAbrirEducafe={() => setMostrandoModalEducaFe(true)}
        onSalir={() => api.salir()}
      />

      {mostrandoModalEducaFe && (
        <ModalPasswordEducaFe
          emailUsuario={sesion.user?.email}
          onConfirmar={() => {
            setMostrandoModalEducaFe(false)
            setVista({ ...vista, nombre: 'educafe' })
          }}
          onCancelar={() => setMostrandoModalEducaFe(false)}
        />
      )}

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
            progreso={progreso}
            esAdmin={esAdmin}
            viendoOtra={viendoOtra}
            onAbrirBloque={(bloqueId) => setVista({ ...vista, nombre: 'bloque', bloqueId })}
            onAbrirModulo={(moduloId) =>
              setVista({ ...vista, nombre: 'modulo', moduloId, bloqueId: getModulo(moduloId)?.bloqueId })
            }
            onVerHoras={() => setVista({ ...vista, nombre: 'horas' })}
            onVerCurso={() => setVista({ ...vista, nombre: 'curso' })}
            onVerCertificado={(nivel) => setVista({ ...vista, nombre: 'certificado', nivel })}
            onVerEducafe={() => setMostrandoModalEducaFe(true)}
          />
        )}
        {vista.nombre === 'educafe' && (
          <EducaFeView onVolver={() => setVista({ ...vista, nombre: 'dashboard' })} />
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
            progreso={progreso}
            onAbrirModulo={(moduloId) => setVista({ ...vista, nombre: 'modulo', moduloId })}
            onVolver={() => setVista({ ...vista, nombre: 'dashboard' })}
          />
        )}
        {vista.nombre === 'modulo' && (
          <ModuleView
            moduloId={vista.moduloId}
            progresoModulo={progreso.modulos[vista.moduloId]}
            videos={videos}
            esAdmin={esAdmin}
            acciones={acciones}
            onVolver={() => setVista({ ...vista, nombre: 'bloque' })}
          />
        )}
        {vista.nombre === 'horas' && (
          <HoursLog
            mentora={mentoraMostrada}
            progreso={progreso}
            onVolver={() => setVista({ ...vista, nombre: 'dashboard' })}
          />
        )}
        {vista.nombre === 'certificado' && (
          <Certificado
            mentora={mentoraMostrada}
            progreso={progreso}
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
    </div>
  )
}
