import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navLinks = [
  { to: '/', label: 'Home', num: '01' },
  { to: '/projects', label: 'Projects', num: '02' },
  { to: '/cv', label: 'CV', num: '03' },
  { to: '/contact', label: 'Contact', num: '04' },
]

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="noise-bg grid-bg min-h-screen">
      {/* NAV */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="font-display text-accent text-sm tracking-widest">
            MH<span className="text-accent2">.</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label, num }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `group flex items-center gap-2 font-body text-sm transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-subtle hover:text-text'
                  }`
                }
              >
                <span className="font-display text-xs text-muted group-hover:text-accent transition-colors">{num}</span>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px bg-text transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-surface border-t border-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map(({ to, label, num }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 font-body text-sm ${isActive ? 'text-accent' : 'text-subtle'}`
                }
              >
                <span className="font-display text-xs text-muted">{num}</span>
                {label}
              </NavLink>
            ))}
          </div>
        )}
      </header>

      {/* CONTENT */}
      <main className="relative z-10 pt-20">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-border mt-20 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display text-xs text-muted tracking-widest">© 2026 MATTHIAS HOLZSCHNEIDERS</span>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Matthias2007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-subtle hover:text-accent transition-colors text-sm font-body"
            >
              GitHub
            </a>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-display text-xs text-muted">EPITECH · PROMO 2028</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
