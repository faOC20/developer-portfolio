import { useEffect, useState } from 'react'

export const TypeWriter = () => {
  const words = ['Fullstack Developer.', 'System Engineer.']
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  // Configuraciones
  const typeDelay = 90
  const deleteDelay = 45
  const endPause = 4500 // ms al terminar de escribir

  useEffect(() => {
    const current = words[index]

    // Pausa al terminar de escribir
    if (!deleting && subIndex === current.length) {
      const pause = setTimeout(() => setDeleting(true), endPause)
      return () => clearTimeout(pause)
    }

    // Cambiar a siguiente palabra cuando se borró todo
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1))
    }, deleting ? deleteDelay : typeDelay)

    return () => clearTimeout(timeout)
  }, [subIndex, deleting, index])

  // Reiniciar subIndex cuando cambie de palabra
  useEffect(() => {
    if (!deleting) setSubIndex(0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  return (
    <div className="h-7 text-lg flex items-center">
      <span>{words[index].substring(0, subIndex)}</span>
      <span className="ml-1 inline-block align-baseline caret" aria-hidden="true"></span>
      <style>{`
        @keyframes blink { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        .caret { width: 1px; height: 1em; background: currentColor; animation: blink 1s step-start infinite; }
      `}</style>
    </div>
  )
}
