export default function Chip({ children }) {
  return (
    <span className="inline-block rounded bg-chip px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
      {children}
    </span>
  )
}
