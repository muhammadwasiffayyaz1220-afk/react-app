import { motion as M, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SITE_HERO_IMAGE, SITE_HERO_IMAGE_ALT, fallbackToHeroImage } from '../data/siteHero.js'
import { EASE } from '../motion/presets'

const heroStagger = (reduce) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: reduce ? 0 : 0.11, delayChildren: reduce ? 0 : 0.06 },
  },
})

const heroChild = (reduce) => ({
  hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
})

/**
 * Same garment-manufacturing hero photo on every page (see `siteHero.js`).
 * `image` / `imageAlt` are ignored so headers stay visually consistent.
 */
export default function PageHero({ title, description, children }) {
  const reduce = useReducedMotion()
  const h = heroStagger(reduce)
  const c = heroChild(reduce)

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
        className="absolute inset-0 z-[1] bg-gradient-to-tr from-[#D4AF37]/18 via-transparent to-[#0F172A]/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_70%_20%,rgba(255,255,255,0.08),transparent_50%)]"
        aria-hidden
      />
      <M.div
        className="relative z-[2] mx-auto w-full max-w-6xl px-4 py-20 text-center md:px-6 md:text-left"
        variants={h}
        initial="hidden"
        animate="visible"
      >
        <M.div
          variants={c}
          className="mx-auto mb-3 h-px w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent md:mx-0 md:from-white/40 md:via-white/70 md:to-transparent"
        />
        <M.h1
          variants={c}
          className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl"
        >
          {title}
        </M.h1>
        {description ? (
          <M.p
            variants={c}
            className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg"
          >
            {description}
          </M.p>
        ) : null}
        {children}
      </M.div>
    </section>
  )
}

/** Same classes as Contact.jsx breadcrumb row. */
export function PageHeroBreadcrumb({ items }) {
  const reduce = useReducedMotion()
  if (!items?.length) return null
  const c = heroChild(reduce)
  return (
    <M.nav
      variants={c}
      className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm text-white/85 md:justify-start"
      aria-label="Breadcrumb"
    >
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`} className="inline-flex items-center gap-2">
          {i > 0 ? <span className="text-white/50">/</span> : null}
          {item.to ? (
            <Link to={item.to} className="transition duration-300 ease-out hover:text-[#D4AF37]">
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-[#FFFFFF]">{item.label}</span>
          )}
        </span>
      ))}
    </M.nav>
  )
}
