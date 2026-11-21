import ContactForm from '../components/ContactForm'
import PageHeading from '../components/PageHeading'
import usePageTitle from '../hooks/usePageTitle'
import { profile } from '../data/profile'

function ContactLink({ label, href, children, external }) {
  return (
    <li>
      <a
        href={href}
        {...(external && { target: '_blank', rel: 'noreferrer' })}
        className="flex flex-col rounded-xl border border-line bg-panel p-5 transition hover:-translate-y-0.5 hover:border-brand-light"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">{label}</span>
        <span className="mt-1 break-all font-medium text-white">{children}</span>
        {external && <span className="sr-only">(opens in a new tab)</span>}
      </a>
    </li>
  )
}

export default function Contact() {
  usePageTitle('Contact')

  return (
    <div className="bg-bg">
      <PageHeading eyebrow="Contact" title="Let's get in touch">
        Have a question or want to work together? Send me a message or reach me through any of these.
      </PageHeading>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-20 pt-6 sm:px-6 lg:grid-cols-2">
        <ul className="content-start space-y-4">
          <ContactLink label="Email" href={`mailto:${profile.email}`}>{profile.email}</ContactLink>
          <ContactLink label="GitHub" href={profile.github} external>github.com/{profile.githubHandle}</ContactLink>
        </ul>
        <ContactForm />
      </div>
    </div>
  )
}
