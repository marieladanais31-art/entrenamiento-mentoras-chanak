import { createContext, useContext, useState, useCallback } from 'react'
import { TEXTOS } from './textos'

const KEY = 'chanak_idioma'
const IdiomaContext = createContext(null)

function idiomaInicial() {
  const guardado = localStorage.getItem(KEY)
  if (guardado === 'es' || guardado === 'en') return guardado
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'es'
}

export function ProveedorIdioma({ children }) {
  const [idioma, setIdiomaEstado] = useState(idiomaInicial)

  const setIdioma = useCallback((nuevo) => {
    localStorage.setItem(KEY, nuevo)
    setIdiomaEstado(nuevo)
    document.documentElement.lang = nuevo
  }, [])

  // t('clave') → texto; t('clave', {n: 3}) sustituye {n}
  const t = useCallback(
    (clave, vars) => {
      let s = TEXTOS[idioma]?.[clave] ?? TEXTOS.es[clave] ?? clave
      if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, v)
      return s
    },
    [idioma]
  )

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma, t, es: idioma === 'es' }}>
      {children}
    </IdiomaContext.Provider>
  )
}

export function useIdioma() {
  const ctx = useContext(IdiomaContext)
  if (!ctx) throw new Error('useIdioma debe usarse dentro de ProveedorIdioma')
  return ctx
}

// Selector ES | EN reutilizable
export function SelectorIdioma({ variante = 'oscuro' }) {
  const { idioma, setIdioma } = useIdioma()
  const oscuro = variante === 'oscuro'
  return (
    <div
      className={`flex overflow-hidden rounded-full text-[12px] font-bold ${
        oscuro ? 'bg-white/10' : 'bg-navy/10'
      }`}
      role="group"
      aria-label="Idioma / Language"
    >
      {['es', 'en'].map((id) => (
        <button
          key={id}
          onClick={() => setIdioma(id)}
          aria-pressed={idioma === id}
          className={`px-2.5 py-1.5 uppercase transition ${
            idioma === id
              ? oscuro
                ? 'bg-gold text-navy'
                : 'bg-navy text-cream'
              : oscuro
                ? 'text-cream/60 hover:text-cream'
                : 'text-navy/50 hover:text-navy'
          }`}
        >
          {id}
        </button>
      ))}
    </div>
  )
}
