import { Link } from 'react-router-dom'
import ArrowIcon from '../components/ArrowIcon'
import Chip from '../components/Chip'
import ProjectCard from '../components/ProjectCard'
import SkillBadge from '../components/SkillBadge'
import usePageTitle from '../hooks/usePageTitle'
import portrait from '../assets/julian.webp'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { skills } from '../data/skills'

const primaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark'
const secondaryBtn =
  'inline-flex items-center justify-center gap-2 rounded-full border border-line px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-brand-light hover:text-brand-light'

export default function Home() {
  usePageTitle()

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-bg via-bg to-band">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_1fr] md:py-20">
          <div className="reveal order-2 md:order-1">
            <Chip>{profile.school} · BSIT</Chip>
            <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-brand-light">{profile.firstName}</span>.
            </h1>
            <p className="mt-3 font-display text-xl font-semibold uppercase tracking-wide text-brand-light sm:text-2xl">
              {profile.role}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.intro} Here you can explore my background, skills, and projects.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/projects" className={primaryBtn}>View my projects <ArrowIcon /></Link>
              <Link to="/contact" className={secondaryBtn}>Contact me</Link>
            </div>
          </div>

          <div className="reveal order-1 mx-auto w-60 sm:w-72 md:order-2 md:w-full md:max-w-sm" style={{ animationDelay: '0.15s' }}>
            <div className="relative">
              <div aria-hidden="true" className="deco-lines absolute -right-6 -top-8 size-[110%] opacity-70 md:-right-10" />
              <div aria-hidden="true" className="deco-sphere absolute -left-5 top-6 size-10 rounded-full" />
              <div aria-hidden="true" className="deco-sphere absolute -bottom-4 -right-4 size-14 rounded-full" />
              <img
                src={portrait}
                alt={`Portrait of ${profile.name}`}
                width="373"
                height="374"
                className="relative aspect-square w-full rounded-3xl border border-line object-cover shadow-2xl shadow-black/50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-band">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-3xl font-bold">
              Featured <span className="text-brand-light">projects</span>
            </h2>
            <Link to="/projects" className="rounded text-sm font-semibold uppercase tracking-wider text-brand-light underline-offset-4 hover:underline">
              See all projects →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line/60 bg-bg">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold">
            What I <span className="text-brand-light">work with</span>
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <SkillBadge key={skill.name} name={skill.name} />
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
