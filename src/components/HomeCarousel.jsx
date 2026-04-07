import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { homeCarouselSlides, carouselImageUrl } from '../data/homeCarousel'
import { buildShopPath } from '../data/categoryTree'
import { fallbackToHeroImage } from '../data/siteHero.js'

const INTERVAL_MS = 6500

export default function HomeCarousel() {
  const [index, setIndex] = useState(0)

  const n = homeCarouselSlides.length
  const slide = homeCarouselSlides[index]

  const go = useCallback((dir) => {
    setIndex((i) => (i + dir + n) % n)
  }, [n])

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((i) => (i + 1) % n)
    }, INTERVAL_MS)
    return () => clearInterval(timer)
  }, [n])

  return (
    <section
      className="relative w-full overflow-hidden bg-transparent"
      aria-roledescription="carousel"
      aria-label="Featured"
    >
      <div className="relative aspect-[4/3] min-h-[340px] w-full overflow-hidden sm:aspect-[16/9] sm:min-h-[430px] lg:aspect-[21/9] lg:min-h-[500px] lg:max-h-[min(82vh,720px)]">
        {homeCarouselSlides.map((s, i) => (
          <div
            key={s.file}
            className={`absolute inset-0 overflow-hidden transition-opacity duration-700 ease-out ${
              i === index ? 'z-[1] opacity-100' : 'z-0 opacity-0'
            }`}
            aria-hidden={i !== index}
          >
            <img
              src={carouselImageUrl(s.file)}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover object-center ${i === index ? 'hero-zoom-pan' : ''}`}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'low'}
              onError={fallbackToHeroImage}
            />
            <div className="absolute inset-0 bg-[#6f9bc9]/22 mix-blend-screen" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-[#091322]/35" aria-hidden />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(163,103,131,0.2),transparent_34%)]" aria-hidden />
          </div>
        ))}

        <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col justify-end px-5 pb-20 pt-24 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="pointer-events-auto mx-auto w-full max-w-6xl">
            <div key={`${slide.file}-panel`} className="hero-content-panel hero-panel-in max-w-3xl rounded-2xl p-5 shadow-2xl shadow-black/35 sm:p-7 lg:p-9">
              <span className="hero-corner-ring" aria-hidden />
              <div className="hero-copy-brand flex items-center gap-3">
                <span className="h-[1px] w-9 bg-[#f0cadc]/70" />
                <p key={`${slide.file}-brand`} className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f0cadc]">
                  4tex International
                </p>
              </div>
              <h1 key={slide.file} className="hero-copy-title mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                {slide.title}
              </h1>
              <p key={`${slide.file}-sub`} className="hero-copy-sub mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
                {slide.subtitle}
              </p>

              <div className="hero-copy-sub mt-5 flex flex-wrap gap-2.5">
                {['Premium fabrics', 'OEM manufacturing', 'Global delivery'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="hero-copy-actions mt-7 flex flex-wrap gap-3">
                <Link
                  to={buildShopPath('casual-wear', 'hoodies-sweats', 'oversized-hoodies')}
                  className="group rounded-md bg-[#A36783] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#8a5570]"
                >
                  Explore collection
                </Link>
                <Link
                  to="/products"
                  className="rounded-md border-2 border-white/55 bg-white/12 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-white hover:bg-white/22"
                >
                  All products
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => go(-1)}
          className="absolute left-2 top-1/2 z-[3] hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/50 sm:left-4 sm:block"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="absolute right-2 top-1/2 z-[3] hidden -translate-y-1/2 rounded-full border border-white/20 bg-black/30 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/50 sm:right-4 sm:block"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-0 right-0 z-[3] flex justify-center gap-2 sm:bottom-5">
          {homeCarouselSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? 'w-8 bg-[#A36783]' : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>

      </div>

      <div className="relative z-[4] -mt-8 pb-4 sm:-mt-10 md:pb-6">
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 md:gap-6 md:px-6 lg:grid-cols-3">
          {[
            {
              title: 'Excellent Material',
              text: 'Premium yarn blends and stable GSM control for long-lasting comfort and shape.',
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l4-3 4 3 4-3 4 3v8l-4 3-4-3-4 3-4-3V8z" />
                </svg>
              ),
            },
            {
              title: 'Quality Product',
              text: 'Inline inspections and final AQL checks ensure every batch meets your approved standard.',
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
                </svg>
              ),
            },
            {
              title: 'Trusted by Clients',
              text: 'Transparent timelines and repeatable production systems trusted by global fashion teams.',
              icon: (
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 10h16M6 10V6h12v4M6 18h12M8 10v8m8-8v8" />
                </svg>
              ),
            },
          ].map((f) => (
            <article
              key={f.title}
              className="rounded-xl border border-white/10 bg-[#0f2238]/96 px-6 py-8 text-white shadow-xl shadow-black/25 backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-[#112944] md:min-h-[196px] md:px-7 md:py-9"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 text-[#c98eab] md:mt-1.5 md:scale-110">{f.icon}</span>
                <div>
                  <h3 className="text-[23px] font-bold tracking-tight text-white md:text-[24px]">{f.title}</h3>
                  <p className="mt-2.5 text-base leading-relaxed text-white/78">{f.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
