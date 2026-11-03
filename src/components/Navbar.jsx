

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="absolute left-0 top-0 z-50 w-full px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between text-white">

        <a href="#" onClick={closeMenu} className="text-xl font-bold tracking-tight">
          HABIB<span className="text-neutral-500">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 text-sm text-neutral-300 md:flex">
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#skills" className="transition hover:text-white">Skills</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>

        <a
          href="mailto:your@email.com"
          className="hidden rounded-full border border-white/30 px-5 py-2 text-sm transition hover:bg-white hover:text-black md:block"
        >
          Let's talk ↗
        </a>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="mt-6 flex flex-col gap-6 rounded-2xl border border-white/10 bg-[#202020] p-6 text-white md:hidden">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="mailto:your@email.com" onClick={closeMenu}>
            Let's talk ↗
          </a>
        </div>
      )}
    </nav>
  )
}

