import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact', cta: true },
]

const linkClass =
  ({ cta }) =>
  ({ isActive }) => {
    const base = 'block px-3 py-2 text-sm font-semibold uppercase tracking-wider transition-colors md:text-xs'
    if (cta) {
      return `${base} rounded-full md:px-6 md:py-2.5 ${
        isActive ? 'bg-brand-dark text-white' : 'bg-brand text-white hover:bg-brand-dark'
      }`
    }
    return `${base} border-b-2 ${
      isActive ? 'border-brand-light text-white' : 'border-transparent text-muted hover:text-white'
    }`
  }

export default function Header() {
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  // Close with the Escape key.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 rounded font-display text-lg font-bold uppercase tracking-wide text-white"
        >
          <span aria-hidden="true" className="grid size-8 place-items-center rounded-md bg-brand text-sm font-bold text-white">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
          <span className="sm:hidden">{profile.firstName}</span>
        </Link>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg text-white hover:bg-panel md:hidden"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav
          id="main-nav"
          aria-label="Main"
          className={`${open ? 'block' : 'hidden'} absolute inset-x-0 top-full border-b border-line bg-bg px-4 py-3 shadow-xl md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
        >
          <ul className="flex flex-col gap-1 md:flex-row md:items-center md:gap-5">
            {links.map(({ to, label, cta }) => (
              <li key={to} className={cta ? 'mt-2 md:mt-0' : ''}>
                <NavLink to={to} end={to === '/'} className={linkClass({ cta })} onClick={closeMenu}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
