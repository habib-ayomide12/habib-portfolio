
import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-black text-xl text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-700 ${
        showButton
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-5 opacity-0'
      }`}
      aria-label="Back to top"
    >
      ↑
    </button>
  )
}
