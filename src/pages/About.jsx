import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { motion as M, useReducedMotion } from 'framer-motion'
import { usePageTitle } from '../hooks/usePageTitle'
import { SITE_HERO_IMAGE, SITE_HERO_IMAGE_ALT, fallbackToHeroImage } from '../data/siteHero.js'
import aboutIntroMainImg from '../assets/about/about-intro-main.jpg'
import aboutIntroSmallImg from '../assets/about/about-intro-small.jpg'
import aboutCtaImg from '../assets/about/about-cta.jpg'

const accent = '#D4AF37'
const STAT_RING_MS = 1750
const easeOutCubic = (t) => 1 - (1 - t) ** 3

/** Framer Motion — About page */
const ABOUT_EASE = [0.22, 1, 0.36, 1]
const ABOUT_VIEWPORT = { once: true, amount: 0.2, margin: '0px 0px -80px 0px' }

function IconCheck({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-7.5 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 6.948-9.727a.75.75 0 011.052-.143z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function VisionMissionCheckIcon() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/[0.12] ring-1 ring-[#D4AF37]/25 shadow-sm shadow-[#D4AF37]/10 dark:bg-[#D4AF37]/15 dark:ring-[#D4AF37]/30"
      aria-hidden
    >
      <IconCheck className="h-4 w-4 text-[#D4AF37]" />
    </span>
  )
}

function VisionMissionSection({ vision, mission }) {
  const reduce = useReducedMotion()
  const listRow = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: ABOUT_EASE } },
  }
  const listContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.055, delayChildren: reduce ? 0 : 0.08 } },
  }
  const cardHidden = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }
  const cardTransition = { duration: reduce ? 0 : 0.58, ease: ABOUT_EASE }

  return (
    <div
      className="about-vm-board relative flex w-full flex-col gap-10 md:gap-12"
      aria-labelledby="about-vision-heading about-mission-heading"
    >
      <M.article
        className="about-vm-card flex min-h-0 w-full flex-col"
        initial={cardHidden}
        whileInView={{ opacity: 1, y: 0 }}
        transition={cardTransition}
        viewport={ABOUT_VIEWPORT}
      >
        <div className="about-vm-card-shell relative flex min-h-0 w-full flex-1 flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/[0.06] dark:border-slate-600/70 dark:bg-slate-900/90 dark:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.4)] sm:p-8 md:p-10">
          <header className="mb-6 shrink-0 border-b border-slate-200/90 pb-5 dark:border-slate-700/80">
            <h3
              id="about-vision-heading"
              className="text-xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-2xl"
            >
              Our Vision – WASITEX
            </h3>
          </header>
          <M.ul
            className="flex flex-1 flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={ABOUT_VIEWPORT}
            variants={listContainer}
          >
            {vision.map((item) => (
              <M.li key={item} variants={listRow} className="flex items-start gap-4 text-left leading-relaxed">
                <VisionMissionCheckIcon />
                <span className="pt-0.5 text-[15px] leading-[1.65] text-[#475569] dark:text-slate-300">{item}</span>
              </M.li>
            ))}
          </M.ul>
        </div>
      </M.article>

      <M.article
        className="about-vm-card flex min-h-0 w-full flex-col"
        initial={cardHidden}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ...cardTransition, delay: reduce ? 0 : 0.08 }}
        viewport={ABOUT_VIEWPORT}
      >
        <div className="about-vm-card-shell relative flex min-h-0 w-full flex-1 flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm shadow-slate-900/[0.06] dark:border-slate-600/70 dark:bg-slate-900/90 dark:shadow-[0_12px_40px_-24px_rgba(0,0,0,0.4)] sm:p-8 md:p-10">
          <header className="mb-6 shrink-0 border-b border-slate-200/90 pb-5 dark:border-slate-700/80">
            <h3
              id="about-mission-heading"
              className="text-xl font-bold tracking-tight text-[#0F172A] dark:text-white sm:text-2xl"
            >
              Our Mission – WASITEX
            </h3>
          </header>
          <M.ul
            className="flex flex-1 flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={ABOUT_VIEWPORT}
            variants={listContainer}
          >
            {mission.map((item) => (
              <M.li key={item} variants={listRow} className="flex items-start gap-4 text-left leading-relaxed">
                <VisionMissionCheckIcon />
                <span className="pt-0.5 text-[15px] leading-[1.65] text-[#475569] dark:text-slate-300">{item}</span>
              </M.li>
            ))}
          </M.ul>
        </div>
      </M.article>
    </div>
  )
}

function StatRing({ percent, label, delayMs = 0 }) {
  const size = 120
  const stroke = 6
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const targetOffset = c - (percent / 100) * c

  const rootRef = useRef(null)
  const [inView, setInView] = useState(false)
  const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [dashOffset, setDashOffset] = useState(() => (reducedMotion ? targetOffset : c))
  const [displayN, setDisplayN] = useState(() => (reducedMotion ? percent : 0))
  const [phase, setPhase] = useState(() => (reducedMotion ? 'done' : 'idle'))

  useEffect(() => {
    const el = rootRef.current
    if (!el) return undefined
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.22, rootMargin: '0px 0px -8% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!inView) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    const rafRef = { id: 0 }
    const delayTimer = window.setTimeout(() => {
      setPhase('running')
      const start = performance.now()

      const tick = (now) => {
        const raw = (now - start) / STAT_RING_MS
        const t = raw >= 1 ? 1 : raw
        const e = easeOutCubic(t)
        setDashOffset(c + (targetOffset - c) * e)
        setDisplayN(Math.round(percent * e))
        if (t < 1) {
          rafRef.id = requestAnimationFrame(tick)
        } else {
          setDashOffset(targetOffset)
          setDisplayN(percent)
          setPhase('done')
        }
      }
      rafRef.id = requestAnimationFrame(tick)
    }, delayMs)

    return () => {
      clearTimeout(delayTimer)
      cancelAnimationFrame(rafRef.id)
    }
  }, [inView, delayMs, c, targetOffset, percent])

  const ringHostClass =
    phase === 'done'
      ? 'stat-ring-breathe'
      : ''

  return (
    <div
      ref={rootRef}
      className="about-stat-enter flex flex-col items-center gap-3 text-center"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div
        className="stat-ring-interactive relative rounded-full shadow-lg shadow-[#D4AF37]/10 ring-4 ring-[#D4AF37]/[0.08] transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:scale-105 hover:shadow-[0_0_28px_-6px_rgba(212,175,55,0.35)] dark:shadow-black/30 dark:ring-white/5 dark:hover:shadow-[0_0_32px_-4px_rgba(212,175,55,0.25)]"
        style={{ width: size, height: size }}
      >
        <div className={`stat-ring-svg-host pointer-events-none absolute inset-0 ${ringHostClass}`} aria-hidden>
          <svg width={size} height={size} className="-rotate-90">
            <circle
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              className="stroke-slate-200 dark:stroke-slate-600"
              strokeWidth={stroke}
            />
            <circle
              className={`stat-ring-progress ${phase === 'running' ? 'stat-ring-progress-glow' : ''}`}
              cx={size / 2}
              cy={size / 2}
              r={r}
              fill="none"
              stroke={accent}
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={c}
              strokeDashoffset={dashOffset}
            />
          </svg>
        </div>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {displayN}%
        </span>
      </div>
      <p className="max-w-[8.5rem] text-[13px] font-medium leading-snug text-slate-600 dark:text-slate-400">{label}</p>
    </div>
  )
}

const visionItems = [
  'To become a trusted global partner in textile manufacturing known for consistency and reliability.',
  'To deliver high-quality apparel that meets international standards in every order.',
  'To build long-term relationships with brands through transparency and performance.',
  'To continuously improve production processes for better efficiency and scalability.',
  'To position WASITEX as a dependable sourcing hub for modern apparel manufacturing.',
]

const missionItems = [
  'To provide end-to-end clothing manufacturing solutions from sampling to bulk production.',
  'To maintain strict quality control at every stage of the production process.',
  'To ensure timely delivery without compromising product standards.',
  'To support brands with flexible production and customization options.',
  'To deliver products that match approved samples in design, fit, and finish.',
]

const partnerLabels = ['NORD', 'STUDIO', 'LABEL', 'URBAN', 'THREAD', 'EXPORT']

const whatWeDoCategories = ['Casual Wear', 'Streetwear', 'Sportswear', 'Varsity Jackets', 'Custom Apparel']

const approachPoints = [
  'Strict quality control at every stage',
  'Close coordination with clients during development',
  'Flexible production based on design and quantity',
  'Focus on finishing, fit, and durability',
]

const whyChoosePoints = [
  'Direct access to a wide network of specialized factories',
  'Experience in handling different product categories',
  'Fast sampling and efficient production timelines',
  'Clear communication and transparency throughout the process',
]

export default function About() {
  usePageTitle('About Us – WASITEX')
  const reduce = useReducedMotion()

  const heroContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: reduce ? 0 : 0.05 },
    },
  }
  const heroItem = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.52, ease: ABOUT_EASE } },
  }
  const fadeUpSlow = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.62, ease: ABOUT_EASE } },
  }
  const staggerWrap = {
    hidden: {},
    visible: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: reduce ? 0 : 0.04 } },
  }
  const staggerItem = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.44, ease: ABOUT_EASE } },
  }

  return (
    <div className="overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 text-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
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
        <div className="absolute inset-0 z-[1] bg-black/60" aria-hidden />
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#0F172A]/40"
          aria-hidden
        />
        <M.div
          className="relative z-[2] mx-auto w-full max-w-6xl px-4 py-20 text-center md:px-6 md:text-left"
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <M.p variants={heroItem} className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#FFFFFF]">
            About us
          </M.p>
          <M.h1
            variants={heroItem}
            className="mt-3 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            About Us – WASITEX
          </M.h1>
          <M.nav
            variants={heroItem}
            className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-white/85 md:justify-start"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-white/50">/</span>
            <span className="font-medium text-[#FFFFFF]">About Us</span>
          </M.nav>
        </M.div>
      </section>

      <section className="relative border-b border-slate-200/70 py-16 md:py-28 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent dark:via-[#D4AF37]/45" aria-hidden />
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 md:gap-16 md:px-6 lg:grid-cols-2 lg:gap-20">
          <M.div
            className="relative mx-auto w-full max-w-lg self-start lg:mx-0 lg:max-w-none"
            initial={reduce ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ABOUT_VIEWPORT}
            transition={{ duration: 0.62, ease: ABOUT_EASE }}
          >
            <M.div
              className="relative z-10 ml-auto w-[88%] overflow-hidden rounded-2xl shadow-xl shadow-slate-300/50 ring-1 ring-slate-200/80 transition duration-700 ease-out hover:shadow-2xl hover:ring-[#D4AF37]/20 dark:shadow-black/40 dark:ring-slate-700/80"
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={ABOUT_VIEWPORT}
              transition={{ duration: 0.58, ease: ABOUT_EASE }}
            >
              <img
                src={aboutIntroMainImg}
                alt=""
                width={720}
                height={960}
                className="aspect-[3/4] h-auto w-full object-cover transition duration-700 ease-out hover:scale-[1.02] motion-reduce:hover:scale-100"
                loading="lazy"
                decoding="async"
                onError={fallbackToHeroImage}
              />
            </M.div>
            <M.div
              className="absolute -bottom-6 left-0 z-20 w-[58%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl shadow-slate-400/45 ring-1 ring-slate-200/60 transition duration-500 hover:-translate-y-1 dark:border-slate-900 dark:shadow-black/50 dark:ring-slate-700"
              initial={reduce ? false : { opacity: 0, x: -16, y: 12 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={ABOUT_VIEWPORT}
              transition={{ duration: 0.55, ease: ABOUT_EASE, delay: reduce ? 0 : 0.14 }}
            >
              <img
                src={aboutIntroSmallImg}
                alt=""
                width={480}
                height={360}
                className="aspect-[4/3] h-auto w-full object-cover transition duration-700 hover:scale-[1.03] motion-reduce:hover:scale-100"
                loading="lazy"
                decoding="async"
                onError={fallbackToHeroImage}
              />
            </M.div>
          </M.div>

          <M.div
            className="lg:pl-2"
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={ABOUT_VIEWPORT}
          >
            <M.div variants={staggerItem} className="mx-auto mb-2 flex justify-center lg:justify-start">
              <span className="h-px w-10 bg-[#D4AF37]/55" aria-hidden />
            </M.div>
            <M.p
              variants={staggerItem}
              className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4AF37] lg:text-left"
            >
              Who we are
            </M.p>
            <M.h2
              variants={staggerItem}
              className="mt-3 text-center text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-left dark:text-white"
            >
              Who We Are – WASITEX
            </M.h2>
            <M.div
              variants={staggerItem}
              className="mt-5 space-y-5 text-center leading-relaxed text-slate-600 lg:text-left dark:text-slate-400"
            >
              <p>
                WASITEX is a Pakistan-based textile manufacturing company specializing in high-quality apparel production
                for global brands, startups, and private label businesses. We provide end-to-end clothing manufacturing
                solutions — from fabric sourcing and sampling to bulk production and final finishing — with a strong
                focus on consistency, quality control, and timely delivery.
              </p>
              <p>
                We manufacture a wide range of products, including casual wear, streetwear, sportswear, varsity jackets,
                and custom apparel. Our process is built to ensure that every product meets international standards in
                terms of fit, durability, and overall finish.
              </p>
              <p>
                At WASITEX, we work closely with our clients to turn their designs into market-ready products. By
                following strict quality control at every stage — from fabric inspection to final shipment — we ensure
                that bulk production matches the approved samples without compromise.
              </p>
              <p>
                With access to a strong network of specialized factories and production units, we are able to handle
                different product categories efficiently while maintaining consistent quality. Our goal is to be a
                reliable manufacturing partner for brands looking for flexible production, clear communication, and
                dependable results.
              </p>
            </M.div>
          </M.div>
        </div>

        <div className="mx-auto mt-16 max-w-6xl space-y-16 px-4 md:mt-20 md:space-y-20 md:px-6">
          <M.section
            className="border-t border-slate-200/80 pt-16 dark:border-slate-700/80"
            aria-labelledby="about-what-heading"
            variants={fadeUpSlow}
            initial="hidden"
            whileInView="visible"
            viewport={ABOUT_VIEWPORT}
          >
            <div className="mx-auto mb-2 flex justify-center lg:justify-start">
              <span className="h-px w-10 bg-[#D4AF37]/55" aria-hidden />
            </div>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4AF37] lg:text-left">
              What we do
            </p>
            <h2
              id="about-what-heading"
              className="mt-3 text-center text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-left dark:text-white"
            >
              What We Do
            </h2>
            <p className="mt-5 text-center text-lg leading-relaxed text-slate-600 lg:text-left dark:text-slate-400">
              We manufacture a wide range of apparel categories, including:
            </p>
            <M.ul
              className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-3.5 lg:justify-start"
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={ABOUT_VIEWPORT}
            >
              {whatWeDoCategories.map((label) => (
                <M.li key={label} variants={staggerItem}>
                  <span className="inline-flex rounded-full border border-slate-200/90 bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm ring-1 ring-slate-900/[0.03] dark:border-slate-600/80 dark:bg-slate-900/90 dark:text-slate-100 dark:ring-white/[0.04]">
                    {label}
                  </span>
                </M.li>
              ))}
            </M.ul>
            <p className="mt-10 text-center leading-relaxed text-slate-600 lg:text-left dark:text-slate-400">
              Whether it&apos;s small custom runs or bulk production, we adapt to the specific needs of each client and
              project.
            </p>
          </M.section>

          <M.section
            aria-labelledby="about-approach-heading"
            variants={fadeUpSlow}
            initial="hidden"
            whileInView="visible"
            viewport={ABOUT_VIEWPORT}
          >
            <div className="mx-auto mb-2 flex justify-center lg:justify-start">
              <span className="h-px w-10 bg-[#D4AF37]/55" aria-hidden />
            </div>
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4AF37] lg:text-left">
              Our approach
            </p>
            <h2
              id="about-approach-heading"
              className="mt-3 text-center text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-left dark:text-white"
            >
              Our Approach
            </h2>
            <p className="mt-5 text-center leading-relaxed text-slate-600 lg:text-left dark:text-slate-400">
              At WASITEX, we don&apos;t just produce garments — we build reliable production processes.
            </p>
            <M.ul
              className="mx-auto mt-8 max-w-3xl space-y-4 lg:mx-0 lg:max-w-none"
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={ABOUT_VIEWPORT}
            >
              {approachPoints.map((item) => (
                <M.li key={item} variants={staggerItem} className="flex items-start gap-4 text-left leading-relaxed">
                  <VisionMissionCheckIcon />
                  <span className="pt-0.5 text-[15px] text-[#475569] dark:text-slate-300">{item}</span>
                </M.li>
              ))}
            </M.ul>
            <p className="mt-10 text-center text-base font-medium text-[#0F172A] lg:text-left dark:text-slate-200">
              We ensure that what gets approved is exactly what gets delivered.
            </p>
          </M.section>
        </div>

        <div className="mx-auto mt-16 max-w-6xl border-t border-slate-200/80 px-4 pt-16 md:mt-24 md:px-6 md:pt-20 dark:border-slate-700/80">
          <VisionMissionSection vision={visionItems} mission={missionItems} />
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a2744] to-[#0f1929] py-12 md:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
          <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#D4AF37]/25 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        </div>
        <M.div
          className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-6 px-4 md:justify-between md:gap-x-6 md:px-6 lg:flex-nowrap"
          variants={staggerWrap}
          initial="hidden"
          whileInView="visible"
          viewport={ABOUT_VIEWPORT}
        >
          {partnerLabels.map((name) => (
            <M.div
              key={name}
              variants={staggerItem}
              className="about-partner-chip flex h-12 min-w-[5.5rem] items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-4 text-[11px] font-bold uppercase tracking-[0.35em] text-white/90"
            >
              {name}
            </M.div>
          ))}
        </M.div>
      </section>

      <section className="border-b border-slate-200/70 bg-gradient-to-b from-slate-50/90 to-white py-16 md:py-28 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 md:gap-20 md:px-6 lg:grid-cols-2">
          <M.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={ABOUT_VIEWPORT}
          >
            <M.div variants={staggerItem} className="mx-auto mb-2 flex justify-center lg:justify-start">
              <span className="h-px w-10 bg-[#D4AF37]/55" aria-hidden />
            </M.div>
            <M.p
              variants={staggerItem}
              className="text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4AF37] lg:text-left"
            >
              Why us
            </M.p>
            <M.h2
              variants={staggerItem}
              className="mt-3 text-center text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-left dark:text-white"
            >
              Why Choose WASITEX
            </M.h2>
            <ul className="mt-8 space-y-4 text-left">
              {whyChoosePoints.map((item) => (
                <li key={item} className="flex items-start gap-4 leading-relaxed">
                  <VisionMissionCheckIcon />
                  <span className="pt-0.5 text-[15px] text-slate-600 dark:text-slate-400">{item}</span>
                </li>
              ))}
            </ul>
          </M.div>

          <M.div
            className="grid grid-cols-2 gap-10 sm:gap-12 md:justify-items-center lg:max-w-md lg:justify-self-end"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={ABOUT_VIEWPORT}
            transition={{ duration: 0.58, ease: ABOUT_EASE, delay: reduce ? 0 : 0.1 }}
          >
            <StatRing percent={80} label="Factory Provision" delayMs={0} />
            <StatRing percent={70} label="Best in Material" delayMs={90} />
            <StatRing percent={80} label="Worker Skills" delayMs={180} />
            <StatRing percent={60} label="Machinery & Equipment" delayMs={270} />
          </M.div>
        </div>
      </section>

      <section className="relative flex min-h-[380px] items-center justify-center overflow-hidden py-20 md:min-h-[440px] md:py-28">
        <img
          src={aboutCtaImg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 z-0 !h-full !w-full !max-w-none min-h-[380px] scale-105 object-cover md:min-h-[440px]"
          decoding="async"
          loading="lazy"
          onError={fallbackToHeroImage}
        />
        <div className="absolute inset-0 z-[1] bg-black/60" aria-hidden />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/50 via-black/45 to-black/65" aria-hidden />
        <div className="absolute inset-0 z-[1] bg-[#D4AF37]/[0.12]" aria-hidden />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15),transparent_55%)]" aria-hidden />
        <M.div
          className="relative z-[2] mx-auto max-w-3xl px-4 text-center md:px-6"
          variants={heroContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <M.h2
            variants={heroItem}
            className="text-2xl font-bold leading-tight text-white md:text-4xl md:leading-snug"
          >
            Consult With Us The Suitable Material for Your Project
          </M.h2>
          <M.p
            variants={heroItem}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg"
          >
            From fabric selection to MOQ and lead times, our team helps you align materials with your brand standards
            and delivery goals.
          </M.p>
          <M.div variants={heroItem} className="mt-10">
            <Link
              to="/contact"
              className="contact-btn-submit inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0F172A] shadow-xl shadow-black/25 ring-4 ring-white/10 transition duration-300 ease-out hover:bg-[#B8962E] hover:shadow-[0_0_32px_-4px_rgba(212,175,55,0.5)] hover:ring-white/20"
            >
              Contact us
            </Link>
          </M.div>
        </M.div>
      </section>
    </div>
  )
}
