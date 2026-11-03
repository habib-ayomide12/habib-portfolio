

import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const moveCursor = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      })
      setVisible(true)
    }

    const hideCursor = () => setVisible(false)

    window.addEventListener('mousemove', moveCursor)
    document.addEventListener('mouseleave', hideCursor)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.removeEventListener('mouseleave', hideCursor)
    }
  }, [])

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[200] hidden h-3 w-3 rounded-full bg-white mix-blend-difference md:block transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`,
      }}
    />
  )
}
