import { Link } from 'react-router-dom'
import { SITE_HERO_IMAGE, SITE_HERO_IMAGE_ALT, fallbackToHeroImage } from '../data/siteHero.js'

/**
 * Same garment-manufacturing hero photo on every page (see `siteHero.js`).
 * `image` / `imageAlt` are ignored so headers stay visually consistent.
 */
export default function PageHero({ title, description, children }) {
  return (
    <section className="relative flex min-h-[min(52vh,420px)] items-center justify-center overflow-hidden md:min-h-[460px]">
      <img
        src={SITE_HERO_IMAGE}
        alt={SITE_HERO_IMAGE_ALT}
        width={1920}
        height={1080}
        className="absolute inset-0 z-0 !h-full !w-full !max-w-none scale-105 object-cover"
        decoding="async"
        fetchPriority="high"
        onError={fallbackToHeroImage}
      />
      <div className="absolute inset-0 z-[1] bg-black/58" aria-hidden />
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-tr from-[#A36783]/18 via-transparent to-[#0f2238]/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.08),transparent_50%)]"
        aria-hidden
      />
      <div className="relative z-[2] mx-auto w-full max-w-6xl px-4 py-20 text-center md:px-6 md:text-left">
        <div className="mx-auto mb-3 h-px w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent md:mx-0 md:from-white/40 md:via-white/70 md:to-transparent" />
        <h1 className="contact-anim-fade-up max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="contact-anim-fade-up contact-anim-delay-1 mt-5 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  )
}

const delayClass = { 1: 'contact-anim-delay-1', 2: 'contact-anim-delay-2', 3: 'contact-anim-delay-3', 4: 'contact-anim-delay-4' }

/** Same classes as Contact.jsx breadcrumb row. Use delay={2} when `description` is set on PageHero. */
export function PageHeroBreadcrumb({ items, delay = 1 }) {
  if (!items?.length) return null
  const d = delayClass[delay] ?? delayClass[1]
  return (
    <nav
      className={`contact-anim-fade-up ${d} mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-white/85 md:justify-start`}
      aria-label="Breadcrumb"
    >
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="inline-flex items-center gap-2">
          {i > 0 ? <span className="text-white/50">/</span> : null}
          {item.to ? (
            <Link to={item.to} className="transition hover:text-white">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-[#f0d4e0]">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
