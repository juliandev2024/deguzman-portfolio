import Chip from '../components/Chip'
import SkillBadge from '../components/SkillBadge'
import usePageTitle from '../hooks/usePageTitle'
import portrait from '../assets/julian.webp'
import { profile } from '../data/profile'
import { skills } from '../data/skills'

const groups = [
  { id: 'Web', title: 'Web development' },
  { id: 'Design', title: 'Design and drafting' },
]

export default function About() {
  usePageTitle('About')

  return (
    <div className="bg-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="reveal relative mx-auto w-full max-w-sm">
          <div aria-hidden="true" className="deco-ring absolute -bottom-10 -left-10 size-44 sm:-left-14 sm:size-56" />
          <img
            src={portrait}
            alt={`Portrait of ${profile.name}`}
            width="373"
            height="374"
            className="relative aspect-[4/5] w-full rounded-3xl border border-line bg-panel object-cover shadow-2xl shadow-black/50"
          />
        </div>

        <div className="reveal" style={{ animationDelay: '0.12s' }}>
          <Chip>About</Chip>
          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            About <span className="text-brand-light">me</span>
          </h1>

          <section className="mt-8" aria-labelledby="background-heading">
            <h2 id="background-heading" className="text-xl font-semibold">My background</h2>
            <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">{profile.about}</p>
            <dl className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-line bg-panel p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">Course</dt>
                <dd className="mt-1 font-medium">Bachelor of Science in Information Technology</dd>
              </div>
              <div className="rounded-lg border border-line bg-panel p-4">
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">School</dt>
                <dd className="mt-1 font-medium">{profile.school}, 3rd year</dd>
              </div>
            </dl>
          </section>

          <section className="mt-8" aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-xl font-semibold">Skills</h2>
            <div className="mt-4 space-y-5">
              {groups.map(({ id, title }) => (
                <div key={id}>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">{title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-3">
                    {skills.filter((s) => s.group === id).map((s) => (
                      <SkillBadge key={s.name} name={s.name} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
