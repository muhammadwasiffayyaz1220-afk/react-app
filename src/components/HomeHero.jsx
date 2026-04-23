import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { homeCarouselSlides, carouselImageUrl } from '../data/homeCarousel'
import { fallbackToHeroImage } from '../data/siteHero'

const AUTO_MS = 6500

function ChevronLeft({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
    </svg>
  )
}

/**
 * Ethletia-style hero: full-bleed slides auto-advance with horizontal track motion
 * (not opacity crossfade). Same `/public/carousel/*` images.
 */
export default function HomeHero() {
  const total = homeCarouselSlides.length
  const [index, setIndex] = useState(0)
  const [reduceMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const slide = homeCarouselSlides[index]
  const slidePct = 100 / total

  useEffect(() => {
    if (typeof window === 'undefined') return undefined
    if (reduceMotion) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, AUTO_MS)
    return () => window.clearInterval(id)
  }, [index, total, reduceMotion])

  const go = (dir) => {
    setIndex((i) => (i + dir + total) % total)
  }

  return (
    <section className="relative min-h-[min(78vh,720px)] w-full overflow-hidden border-b border-slate-900/20 bg-slate-950 md:min-h-[min(82vh,800px)]">
      {/* Sliding image track */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className={`flex h-full ease-out will-change-transform ${
            reduceMotion ? '' : 'transition-transform duration-[850ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]'
          }`}
          style={{
            width: `${total * 100}%`,
            transform: `translate3d(-${index * slidePct}%, 0, 0)`,
          }}
        >
          {homeCarouselSlides.map((s, i) => (
            <div
              key={s.file}
              className="relative h-full shrink-0 overflow-hidden"
              style={{ width: `${slidePct}%` }}
            >
              <img
                src={carouselImageUrl(s.file)}
                alt=""
                decoding={i === 0 ? 'sync' : 'async'}
                fetchPriority={i === 0 ? 'high' : 'low'}
                onError={fallbackToHeroImage}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] bg-slate-950/55" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-slate-950/20 md:from-slate-950/85 md:via-slate-950/35"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30 md:to-transparent"
          aria-hidden
        />
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-white shadow-lg backdrop-blur-sm transition duration-300 hover:border-white/30 hover:bg-slate-950/90 md:left-6 md:h-12 md:w-12"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-white shadow-lg backdrop-blur-sm transition duration-300 hover:border-white/30 hover:bg-slate-950/90 md:right-6 md:h-12 md:w-12"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      <div className="relative z-20 mx-auto flex min-h-[min(78vh,720px)] max-w-6xl flex-col justify-end px-5 pb-16 pt-24 md:min-h-[min(82vh,800px)] md:justify-center md:px-8 md:pb-20 md:pt-28">
        <div key={slide.file} className="max-w-xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37] md:text-xs">{slide.eyebrow}</p>
          <h1 className="mt-3 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            {slide.headline}
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-white/88 md:text-lg">{slide.subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3 md:mt-10 md:gap-4">
            <Link
              to="/categories"
              className="inline-flex min-h-[46px] items-center justify-center rounded-md bg-white px-7 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-slate-900 shadow-md transition duration-300 hover:bg-slate-100 md:px-8"
            >
              Discover now
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-white/80 bg-transparent px-7 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:bg-white/10 md:px-8"
            >
              Contact us
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 gap-2 md:bottom-8" role="tablist" aria-label="Hero slides">
          {homeCarouselSlides.map((s, i) => (
            <button
              key={s.file}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-white/35 hover:bg-white/55'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
