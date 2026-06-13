import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from '../data/portfolio'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setIsOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-surface-border bg-surface/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <button
          onClick={() => handleNavClick('hero')}
          className="text-lg font-bold tracking-tight text-white"
        >
          AW<span className="text-accent-light">.</span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light md:inline-block"
        >
          Get in Touch
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-b border-surface-border bg-surface/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="rounded-lg px-3 py-2 text-left text-gray-300 hover:bg-surface-raised hover:text-white"
              >
                {link.label}
              </button>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 rounded-full bg-accent px-5 py-2 text-center text-sm font-medium text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
