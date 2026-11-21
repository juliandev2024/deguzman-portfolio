function ExternalLink({ href, children, primary }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
        primary
          ? 'bg-brand text-white hover:bg-brand-dark'
          : 'border border-line text-white hover:border-brand-light hover:text-brand-light'
      }`}
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  )
}

export default function ProjectCard({ project }) {
  const { title, description, image, alt, tags, liveUrl, repoUrl } = project

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-panel text-white shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-brand-light hover:shadow-2xl hover:shadow-brand/20">
      <div className="m-2 aspect-[16/10] overflow-hidden rounded-lg bg-bg">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6 sm:pb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 flex-1 text-muted">{description}</p>
        {tags?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {tags.map((tag) => (
              <li key={tag} className="rounded-md bg-chip px-2.5 py-1 text-xs font-semibold text-brand-light">
                {tag}
              </li>
            ))}
          </ul>
        )}
        {(liveUrl || repoUrl) && (
          <div className="mt-5 flex flex-wrap gap-3">
            {liveUrl && <ExternalLink href={liveUrl} primary>Live demo</ExternalLink>}
            {repoUrl && <ExternalLink href={repoUrl}>Source code</ExternalLink>}
          </div>
        )}
      </div>
    </article>
  )
}
