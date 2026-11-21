import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

const footerLink = 'rounded text-muted underline-offset-4 hover:text-white hover:underline'

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-band">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium uppercase tracking-wider">
          <li>
            <Link to="/projects" className={footerLink}>Projects</Link>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noreferrer" className={footerLink}>
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          <li>
            <a href={`mailto:${profile.email}`} className={footerLink}>Email</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
