import { useState } from 'react'
import { profile } from '../data/profile'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate({ name, email, message }) {
  const errors = {}
  if (!name.trim()) errors.name = 'Please enter your name.'
  if (!email.trim()) errors.email = 'Please enter your email address.'
  else if (!emailPattern.test(email)) errors.email = 'Please enter a valid email address.'
  if (message.trim().length < 10) errors.message = 'Your message should be at least 10 characters.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold uppercase tracking-wider text-white">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-300">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass =
  'mt-1.5 w-full rounded-lg border border-line bg-band px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-brand-light'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    setSent(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const subject = encodeURIComponent(`Portfolio message from ${values.name}`)
    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    setValues({ name: '', email: '', message: '' })
  }

  const describe = (id) => (errors[id] ? `${id}-error` : undefined)

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 rounded-2xl border border-line bg-panel p-5 shadow-xl shadow-black/30 sm:p-8">
      <Field id="name" label="Your name" error={errors.name}>
        <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={handleChange}
          aria-invalid={!!errors.name} aria-describedby={describe('name')} className={inputClass} placeholder="Enter your full name" />
      </Field>
      <Field id="email" label="Your email" error={errors.email}>
        <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange}
          aria-invalid={!!errors.email} aria-describedby={describe('email')} className={inputClass} placeholder="Enter your email address" />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={handleChange}
          aria-invalid={!!errors.message} aria-describedby={describe('message')} className={inputClass} placeholder="How can I help you?" />
      </Field>

      <button type="submit" className="w-full rounded-full bg-brand px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-brand-dark sm:w-auto">
        Send message
      </button>

      <div role="status" aria-live="polite">
        {sent && (
          <p className="rounded-lg bg-emerald-500/15 px-4 py-3 text-sm font-medium text-emerald-200">
            Thank you! Your email app should open with your message ready to send. If it doesn't, email me directly at {profile.email}.
          </p>
        )}
      </div>
    </form>
  )
}
