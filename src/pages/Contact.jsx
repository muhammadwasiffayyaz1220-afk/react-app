import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { SITE_HERO_IMAGE, SITE_HERO_IMAGE_ALT, fallbackToHeroImage } from '../data/siteHero.js'
import {
  SITE_DOMAIN,
  SITE_EMAIL,
  SITE_NAME,
  SITE_URL,
  SITE_WHATSAPP_DISPLAY,
  SITE_WHATSAPP_URL,
} from '../data/siteBrand.js'

const heroImageSrc = SITE_HERO_IMAGE
const heroImageAlt = SITE_HERO_IMAGE_ALT

function IconMail({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  )
}

function IconGlobe({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  )
}

function IconMap({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  )
}

function IconWhatsApp({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const inputClass =
  'contact-input w-full rounded-xl border border-slate-200/90 bg-white px-4 py-3.5 text-[15px] text-slate-800 shadow-sm placeholder:text-slate-400 outline-none focus:border-[#A36783] focus:ring-2 focus:ring-[#A36783]/20 dark:border-slate-600 dark:bg-slate-800/90 dark:text-white dark:placeholder:text-slate-500'

const infoItems = [
  { icon: IconMail, label: 'Email', value: SITE_EMAIL, href: `mailto:${SITE_EMAIL}` },
  { icon: IconGlobe, label: 'Website', value: SITE_DOMAIN, href: SITE_URL },
  { icon: IconMap, label: 'Address', value: 'Jay Ram Pur, Opp Eid Gah, Sialkot 51310', href: null },
]

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/', d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'X', href: 'https://twitter.com/', d: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { name: 'Instagram', href: 'https://www.instagram.com/', d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/', d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
]

export default function Contact() {
  usePageTitle('Contact')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Enquiry from ${form.name || 'website'}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SITE_EMAIL)}&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  const formFields = [
    { id: 'name', name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
    { id: 'email', name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@company.com', required: true },
    { id: 'subject', name: 'subject', label: 'Subject', type: 'text', placeholder: 'How can we help?', required: false },
  ]

  return (
    <div className="contact-page bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <section className="contact-hero relative flex min-h-[min(56vh,480px)] items-center justify-center overflow-hidden md:min-h-[min(52vh,520px)]">
        <img
          src={heroImageSrc}
          alt={heroImageAlt}
          width={1920}
          height={1080}
          className="contact-hero-bg absolute inset-0 z-0 !h-full !w-full !max-w-none object-cover"
          decoding="async"
          fetchPriority="high"
          onError={fallbackToHeroImage}
        />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-br from-[#0f2238]/93 via-[#0a1628]/78 to-black/65"
          aria-hidden
        />
        <div
          className="contact-hero-glow pointer-events-none absolute -left-24 top-1/3 z-[1] h-56 w-56 rounded-full bg-[#4a6fa5]/25 blur-[90px]"
          aria-hidden
        />
        <div
          className="contact-hero-glow pointer-events-none absolute -right-16 top-1/4 z-[1] h-80 w-80 rounded-full bg-[#A36783]/28 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
          aria-hidden
        />
        <div className="relative z-[2] mx-auto w-full max-w-6xl px-4 py-24 text-center md:px-6 md:text-left">
          <p className="contact-anim-fade-up text-[11px] font-bold uppercase tracking-[0.32em] text-[#e8c4d4]">{SITE_NAME}</p>
          <h1 className="contact-anim-fade-up contact-anim-delay-1 mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <div
            className="contact-hero-line mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#A36783] via-[#c9a0b5] to-[#f0d4e0] md:mx-0"
            aria-hidden
          />
          <p className="contact-anim-fade-up contact-anim-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/82 md:mx-0 md:text-lg">
            Sampling, MOQs, and production timelines — reach our desk directly. We typically reply within one business day.
          </p>
          <nav
            className="contact-anim-fade-up contact-anim-delay-3 mt-10 flex flex-wrap items-center justify-center gap-2 text-sm text-white/80 md:justify-start"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="rounded-md px-1 transition hover:bg-white/10 hover:text-white">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className="font-medium text-[#f0d4e0]">Contact</span>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 py-16 md:py-28 dark:border-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900">
        <div
          className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[#A36783]/08 blur-[100px] dark:bg-[#A36783]/12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#0f2238]/06 blur-3xl dark:bg-white/[0.03]"
          aria-hidden
        />

        <div className="relative mx-auto grid max-w-6xl gap-14 px-4 md:gap-20 md:px-6 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="contact-anim-slide-left text-[11px] font-bold uppercase tracking-[0.28em] text-[#A36783]">
              Write to us
            </p>
            <h2 className="contact-anim-slide-left contact-anim-delay-1 mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl dark:text-white">
              Get in touch
            </h2>
            <p className="contact-anim-slide-left contact-anim-delay-2 mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
              Production quotes, sampling, or bulk programmes — tell us what you need. We open a ready-to-send email to
              our desk so you can attach tech packs and send in one click.
            </p>

            <div className="contact-form-shell mt-10 rounded-2xl border border-slate-200/90 bg-white/95 p-8 shadow-[0_25px_50px_-12px_rgba(15,34,56,0.14)] backdrop-blur-md md:p-10 dark:border-slate-700/90 dark:bg-slate-900/80 dark:shadow-black/50">
              <form onSubmit={onSubmit} className="space-y-5">
                {formFields.map((field) => (
                  <div key={field.id} className="contact-field">
                    <label htmlFor={field.id} className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      {field.label}
                      {field.required && <span className="text-[#A36783]"> *</span>}
                    </label>
                    <input
                      id={field.id}
                      name={field.name}
                      type={field.type}
                      required={field.required}
                      value={form[field.name]}
                      onChange={onChange}
                      className={inputClass}
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className="contact-field">
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Message <span className="text-[#A36783]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    className={`${inputClass} min-h-[168px] resize-y`}
                    placeholder="Styles, quantities, destination market, timeline…"
                  />
                </div>
                <div className="contact-field flex flex-col sm:flex-row sm:items-center sm:gap-6">
                  <button
                    type="submit"
                    className="contact-btn-submit w-full rounded-xl bg-[#A36783] px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#A36783]/30 transition hover:bg-[#8a5570] sm:w-auto"
                  >
                    Send message
                  </button>
                  {sent && (
                    <p
                      className="contact-sent-toast mt-4 text-sm font-medium text-emerald-700 sm:mt-0 dark:text-emerald-400"
                      role="status"
                    >
                      Draft opened in Gmail — finish sending in that tab.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="contact-anim-slide-right space-y-8">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#A36783]">Direct lines</p>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Reach us</h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                Prefer chat? WhatsApp is fastest for quick questions. Email works best for specs and attachments.
              </p>
            </div>

            <a
              href={SITE_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-wa-cta group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-[#25D366]/35 bg-gradient-to-r from-[#25D366]/12 via-white to-white p-5 shadow-md transition duration-300 hover:-translate-y-0.5 hover:border-[#25D366]/55 hover:shadow-lg dark:from-[#25D366]/15 dark:via-slate-900 dark:to-slate-900"
            >
              <span
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-lg shadow-[#25D366]/35 transition duration-300 group-hover:scale-105"
                aria-hidden
              >
                <IconWhatsApp className="h-7 w-7" />
              </span>
              <span className="min-w-0 text-left">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#25D366] dark:text-[#4ade80]">
                  WhatsApp
                </span>
                <span className="mt-0.5 block text-lg font-bold text-slate-900 dark:text-white">{SITE_WHATSAPP_DISPLAY}</span>
                <span className="mt-1 block text-xs text-slate-600 dark:text-slate-400">Tap to open chat — we reply in business hours.</span>
              </span>
            </a>

            <div className="contact-info-grid grid grid-cols-1 gap-4 sm:grid-cols-2">
              {infoItems.map((item) => {
                const Icon = item.icon
                const inner = (
                  <>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#A36783]/30 bg-[#A36783]/10 text-[#A36783] transition duration-300 group-hover/info:scale-105 group-hover/info:border-[#A36783]/50 group-hover/info:bg-[#A36783]/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A36783]">{item.label}</p>
                    <p className="mt-1.5 text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100">{item.value}</p>
                  </>
                )
                return (
                  <div
                    key={item.label}
                    className="contact-info-card group/info rounded-2xl border border-slate-200/90 bg-white/90 p-5 dark:border-slate-700/90 dark:bg-slate-900/60"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="block outline-none focus-visible:ring-2 focus-visible:ring-[#A36783]/40 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </div>
                )
              })}
            </div>

            <div className="contact-map-frame overflow-hidden rounded-2xl border border-slate-200/90 shadow-[0_20px_40px_-16px_rgba(15,34,56,0.15)] ring-1 ring-slate-200/60 dark:border-slate-700 dark:shadow-black/40 dark:ring-slate-700/80">
              <iframe
                title="4tex International — Sialkot"
                className="h-[300px] w-full grayscale-[15%] contrast-[1.04] dark:grayscale-[25%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Jay+Ram+Pur+Sialkot+Pakistan&output=embed"
              />
            </div>

            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Social</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="contact-social-btn flex h-12 w-12 items-center justify-center rounded-full bg-[#A36783] text-white shadow-lg shadow-[#A36783]/28 hover:-translate-y-0.5 hover:bg-[#8a5570] hover:shadow-xl active:translate-y-0"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d={s.d} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
