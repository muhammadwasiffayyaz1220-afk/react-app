import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { SITE_HERO_IMAGE, SITE_HERO_IMAGE_ALT, fallbackToHeroImage } from '../data/siteHero.js'
import aboutIntroMainImg from '../assets/about/about-intro-main.jpg'
import aboutIntroSmallImg from '../assets/about/about-intro-small.jpg'
import aboutCtaImg from '../assets/about/about-cta.jpg'

const accent = '#A36783'

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

function StatRing({ percent, label, delayMs = 0 }) {
  const size = 120
  const stroke = 5
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const offset = c - (percent / 100) * c

  return (
    <div
      className="about-stat-enter flex flex-col items-center gap-3 text-center"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="relative rounded-full shadow-lg shadow-[#A36783]/10 ring-4 ring-[#A36783]/[0.08] dark:shadow-black/30 dark:ring-white/5" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90" aria-hidden>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            className="stroke-slate-200 dark:stroke-slate-600"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={accent}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold tracking-tight text-slate-900 dark:text-white">
          {percent}%
        </span>
      </div>
      <p className="max-w-[8.5rem] text-[13px] font-medium leading-snug text-slate-600 dark:text-slate-400">{label}</p>
    </div>
  )
}

const visionItems = [
  'Scale OEM & private-label programmes for EU and UK brands.',
  'Invest in skilled pattern makers, QC, and sustainable fabric options.',
  'Keep lead times predictable with transparent production milestones.',
  'Partner long-term — from sampling through repeat bulk seasons.',
  'Deliver streetwear, activewear, and casual lines with consistent fit.',
]

const missionItems = [
  'Quote clearly: MOQs, timelines, and finishing options upfront.',
  'Source fabrics trims aligned to your brand standards and budget.',
  'Run inline QC at cut, sew, wash, and pack-out stages.',
  'Support tech packs, size grading, and bulk amendments.',
  'Ship ready-to-retail cartons with documentation you need for import.',
]

const partnerLabels = ['NORD', 'STUDIO', 'LABEL', 'URBAN', 'THREAD', 'EXPORT']

export default function About() {
  usePageTitle('About Us')

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
          className="absolute inset-0 z-[1] bg-gradient-to-tr from-[#A36783]/20 via-transparent to-[#0f2238]/40"
          aria-hidden
        />
        <div className="relative z-[2] mx-auto w-full max-w-6xl px-4 py-20 text-center md:px-6 md:text-left">
          <p className="contact-anim-fade-up text-[11px] font-bold uppercase tracking-[0.28em] text-[#f0d4e0]">Our story</p>
          <h1 className="contact-anim-fade-up contact-anim-delay-1 mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            About 4tex International
          </h1>
          <nav
            className="contact-anim-fade-up contact-anim-delay-2 mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-white/85 md:justify-start"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-white/50">/</span>
            <span className="font-medium text-[#e8c4d4]">About Us</span>
          </nav>
        </div>
      </section>

      <section className="relative border-b border-slate-200/70 py-16 md:py-28 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A36783]/30 to-transparent dark:via-[#A36783]/45" aria-hidden />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:gap-16 md:px-6 lg:grid-cols-2 lg:gap-20">
          <div
            className="home-stagger relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
            style={{ animationDelay: '0ms' }}
          >
            <div className="relative z-10 ml-auto w-[88%] overflow-hidden rounded-2xl shadow-xl shadow-slate-300/50 ring-1 ring-slate-200/80 transition duration-700 ease-out hover:shadow-2xl hover:ring-[#A36783]/20 dark:shadow-black/40 dark:ring-slate-700/80">
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
            </div>
            <div
              className="home-stagger absolute -bottom-6 left-0 z-20 w-[58%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl shadow-slate-400/45 ring-1 ring-slate-200/60 transition duration-500 hover:-translate-y-1 dark:border-slate-900 dark:shadow-black/50 dark:ring-slate-700"
              style={{ animationDelay: '120ms' }}
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
            </div>
          </div>

          <div className="lg:pl-2">
            <div className="mx-auto mb-2 flex justify-center lg:justify-start">
              <span className="h-px w-10 bg-[#A36783]/55" aria-hidden />
            </div>
            <p className="contact-anim-slide-right text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#A36783] lg:text-left">
              About 4tex International
            </p>
            <h2 className="contact-anim-slide-right contact-anim-delay-1 mt-3 text-center text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-left dark:text-white">
              You Can Find All Kinds of Fabric &amp; Styles Here
            </h2>
            <p className="contact-anim-slide-right contact-anim-delay-2 mt-5 text-center leading-relaxed text-slate-600 lg:text-left dark:text-slate-400">
              4tex International is a Sialkot-based manufacturing partner for streetwear, activewear, and casual programmes.
              We combine fabric sourcing, cutting, sewing, and finishing under one roof so your team can move from
              concept to bulk with fewer hand-offs and clearer timelines.
            </p>
            <p className="contact-anim-slide-right contact-anim-delay-3 mt-4 text-center leading-relaxed text-slate-600 lg:text-left dark:text-slate-400">
              Whether you need sampling for a new silhouette or repeat orders for retail doors, we align materials,
              construction, and QC checkpoints with how your brand sells in Europe and beyond.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="contact-anim-slide-right contact-anim-delay-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/40">
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">Our Vision</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  {visionItems.map((item, i) => (
                    <li
                      key={item}
                      className="home-stagger flex gap-2.5"
                      style={{ animationDelay: `${280 + i * 45}ms` }}
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#A36783]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="contact-anim-slide-right rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-900/40"
                style={{ animationDelay: '0.35s' }}
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-slate-900 dark:text-white">Our Mission</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                  {missionItems.map((item, i) => (
                    <li
                      key={item}
                      className="home-stagger flex gap-2.5"
                      style={{ animationDelay: `${320 + i * 45}ms` }}
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#A36783]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="contact-anim-fade-up mt-10 flex justify-center lg:justify-start" style={{ animationDelay: '0.45s' }}>
              <Link
                to="/products"
                className="inline-flex items-center justify-center rounded-full bg-[#A36783] px-10 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#A36783]/30 ring-4 ring-[#A36783]/10 transition hover:bg-[#8a5570] hover:shadow-xl motion-reduce:transition-colors"
              >
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#1a2744] to-[#0f1929] py-12 md:py-14">
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
          <div className="absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#A36783]/25 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-6 px-4 md:justify-between md:gap-x-6 md:px-6 lg:flex-nowrap">
          {partnerLabels.map((name, i) => (
            <div
              key={name}
              className="about-partner-chip home-stagger flex h-12 min-w-[5.5rem] items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-4 text-[11px] font-bold uppercase tracking-[0.35em] text-white/90"
              style={{ animationDelay: `${i * 75}ms` }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-gradient-to-b from-slate-50/90 to-white py-16 md:py-28 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 md:gap-20 md:px-6 lg:grid-cols-2">
          <div>
            <div className="mx-auto mb-2 flex justify-center lg:justify-start">
              <span className="h-px w-10 bg-[#A36783]/55" aria-hidden />
            </div>
            <p className="contact-anim-slide-left text-center text-[11px] font-bold uppercase tracking-[0.22em] text-[#A36783] lg:text-left">
              Why Choose 4tex International
            </p>
            <h2 className="contact-anim-slide-left contact-anim-delay-1 mt-3 text-center text-3xl font-bold leading-[1.15] tracking-tight text-slate-900 md:text-4xl lg:text-left dark:text-white">
              Competitive Pricing, Quality Never Compromised
            </h2>
            <p className="contact-anim-slide-left contact-anim-delay-2 mt-5 text-center leading-relaxed text-slate-600 lg:text-left dark:text-slate-400">
              We structure quotes around your MOQ, fabric tier, and finishing so you can plan margins before you commit
              to bulk. Our teams in Sialkot and Faisalabad focus on repeatable construction and documented QC — not
              one-off hero samples that disappear in production.
            </p>
            <p className="contact-anim-slide-left contact-anim-delay-3 mt-4 text-center leading-relaxed text-slate-600 lg:text-left dark:text-slate-400">
              From greige and knits to trims and packaging, we help you lock specs early so every delivery matches what
              your buyers expect on the shop floor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-12 md:justify-items-center lg:max-w-md lg:justify-self-end">
            <StatRing percent={80} label="Factory Provision" delayMs={0} />
            <StatRing percent={70} label="Best in Material" delayMs={90} />
            <StatRing percent={80} label="Worker Skills" delayMs={180} />
            <StatRing percent={60} label="Machinery & Equipment" delayMs={270} />
          </div>
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
        <div className="absolute inset-0 z-[1] bg-[#A36783]/[0.12]" aria-hidden />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(163,103,131,0.15),transparent_55%)]" aria-hidden />
        <div className="relative z-[2] mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="contact-anim-fade-up text-2xl font-bold leading-tight text-white md:text-4xl md:leading-snug">
            Consult With Us The Suitable Material for Your Project
          </h2>
          <p className="contact-anim-fade-up contact-anim-delay-1 mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            From fabric selection to MOQ and lead times, our team helps you align materials with your brand standards
            and delivery goals.
          </p>
          <div className="contact-anim-fade-up contact-anim-delay-2 mt-10">
            <Link
              to="/contact"
              className="contact-btn-submit inline-flex items-center justify-center rounded-full bg-[#A36783] px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-black/25 ring-4 ring-white/10 transition hover:bg-[#8a5570] hover:ring-white/20"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
