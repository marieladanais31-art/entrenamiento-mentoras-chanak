import { useState, useCallback } from 'react'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import BlockView from './components/BlockView'
import ModuleView from './components/ModuleView'
import HoursLog from './components/HoursLog'
import AdminView from './components/AdminView'
import Header from './components/ui/Header'
import { getMentoras } from './lib/storage'

// Navegación por estados (app interna ligera, sin router):
// vista: 'login' | 'dashboard' | 'bloque' | 'modulo' | 'horas' | 'admin'
export default function App() {
  const [sesion, setSesion] = useState(null) // { tipo: 'mentora'|'admin', mentoraId? }
  const [vista, setVista] = useState({ nombre: 'login' })
  const [, setTick] = useState(0)
  const refrescar = useCallback(() => setTick((t) => t + 1), [])

  const mentoras = getMentoras()

  function entrar(seleccion) {
    setSesion(seleccion)
    setVista(seleccion.tipo === 'admin' ? { nombre: 'admin' } : { nombre: 'dashboard' })
  }

  function salir() {
    setSesion(null)
    setVista({ nombre: 'login' })
  }

  if (!sesion) return <Login onEntrar={entrar} />

  // La mentora que se está visualizando (el admin puede impersonar desde su vista)
  const mentoraActiva = mentoras.find((m) => m.id === (vista.mentoraId || sesion.mentoraId))

  return (
    <div className="min-h-screen bg-cream">
      <Header
        sesion={sesion}
        mentora={mentoraActiva}
        vista={vista}
        onNavegar={setVista}
        onSalir={salir}
      />
      <main className="mx-auto max-w-3xl px-4 pb-16 pt-4">
        {vista.nombre === 'dashboard' && (
          <Dashboard
            mentora={mentoraActiva}
            esAdmin={sesion.tipo === 'admin'}
            onAbrirBloque={(bloqueId) =>
              setVista({ nombre: 'bloque', bloqueId, mentoraId: mentoraActiva.id })
            }
            onVerHoras={() => setVista({ nombre: 'horas', mentoraId: mentoraActiva.id })}
          />
        )}
        {vista.nombre === 'bloque' && (
          <BlockView
            mentora={mentoraActiva}
            bloqueId={vista.bloqueId}
            onAbrirModulo={(moduloId) =>
              setVista({
                nombre: 'modulo',
                moduloId,
                bloqueId: vista.bloqueId,
                mentoraId: mentoraActiva.id,
              })
            }
            onVolver={() => setVista({ nombre: 'dashboard', mentoraId: mentoraActiva.id })}
          />
        )}
        {vista.nombre === 'modulo' && (
          <ModuleView
            mentora={mentoraActiva}
            moduloId={vista.moduloId}
            esAdmin={sesion.tipo === 'admin'}
            onCambio={refrescar}
            onVolver={() =>
              setVista({ nombre: 'bloque', bloqueId: vista.bloqueId, mentoraId: mentoraActiva.id })
            }
          />
        )}
        {vista.nombre === 'horas' && (
          <HoursLog
            mentora={mentoraActiva}
            onVolver={() => setVista({ nombre: 'dashboard', mentoraId: mentoraActiva.id })}
          />
        )}
        {vista.nombre === 'admin' && sesion.tipo === 'admin' && (
          <AdminView
            onVerMentora={(mentoraId) => setVista({ nombre: 'dashboard', mentoraId })}
            onCambio={refrescar}
          />
        )}
      </main>
    </div>
  )
}
