import Chip from './Chip'

export default function PageHeading({ eyebrow, title, children }) {
  return (
    <div className="reveal mx-auto max-w-6xl px-4 pb-4 pt-12 sm:px-6 sm:pt-16">
      <Chip>{eyebrow}</Chip>
      <h1 className="mt-4 text-4xl font-bold sm:text-5xl">{title}</h1>
      {children && <p className="mt-4 max-w-2xl text-lg text-muted">{children}</p>}
    </div>
  )
}
