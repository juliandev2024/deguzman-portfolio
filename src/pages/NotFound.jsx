import { Link } from 'react-router-dom'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('Page not found')

  return (
    <section className="reveal mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-display text-7xl font-bold text-brand-light sm:text-8xl">404</p>
      <h1 className="mt-4 text-3xl font-bold">Page not found</h1>
      <p className="mt-3 text-lg text-muted">
        Sorry, the page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark"
      >
        Back to home
      </Link>
    </section>
  )
}
