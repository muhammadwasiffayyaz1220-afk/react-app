import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { filterProducts } from '../data/products'
import { buildShopPath } from '../data/categoryTree'
import { carouselImageUrl } from '../data/homeCarousel'
import { fallbackToHeroImage } from '../data/siteHero'
import ProductCard from '../components/ProductCard'
import HomeCarousel from '../components/HomeCarousel'

function IconPlayReel({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  )
}

export default function Home() {
  usePageTitle('Custom Clothing Manufacturing & Streetwear')
  const newIn = filterProducts({ newOnly: true }).slice(0, 8)
  const best = filterProducts({ bestseller: true }).slice(0, 8)
  const process = [
    {
      k: '01',
      t: 'Sampling & tech pack',
      d: 'Fabric options, trims, and fit comments finalized before bulk approval.',
    },
    {
      k: '02',
      t: 'Inline quality control',
      d: 'AQL checkpoints and measurement audits at every production stage.',
    },
    {
      k: '03',
      t: 'Packing & dispatch',
      d: 'Retail-safe folding, labeling, and carton specs aligned to your market.',
    },
  ]
  const reels = [
    { src: carouselImageUrl('slide-2-sewing.jpg'), label: 'Pattern to stitch' },
    { src: carouselImageUrl('slide-4-production.jpg'), label: 'Line production' },
    { src: carouselImageUrl('slide-5-studio.jpg'), label: 'Studio approvals' },
  ]
  const projects = [
    { src: carouselImageUrl('slide-1-fabric.jpg'), title: 'Cotton Fabric' },
    { src: carouselImageUrl('slide-2-sewing.jpg'), title: 'Wool Fabric' },
    { src: carouselImageUrl('slide-5-studio.jpg'), title: 'Linen Fabric' },
    { src: carouselImageUrl('slide-3-apparel.jpg'), title: 'Georgette Fabric' },
    { src: carouselImageUrl('slide-6-showroom.png'), title: 'Denim Fabric' },
    { src: carouselImageUrl('slide-4-production.jpg'), title: 'Leather Fabric' },
  ]
  const services = [
    {
      t: 'Fabric Dyeing',
      d: 'Reactive and pigment dyeing programs with stable shades and controlled shrinkage.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 4h12v16H6V4zm0 4h12M6 12h12M6 16h12" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 2v2m6-2v2" />
        </svg>
      ),
    },
    {
      t: 'Satin Weaving',
      d: 'Smooth woven constructions optimized for drape, touch, and premium finishing quality.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="8" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 12h12M12 6v12M8 8l8 8M16 8l-8 8" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 12h2m12 0h2" />
        </svg>
      ),
    },
    {
      t: 'Fabric Printing',
      d: 'Screen, digital, and transfer print workflows with clear color matching and repeatability.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <rect x="5" y="5" width="14" height="14" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 9h14M9 5v14M7 7l2 2m8-2-2 2m-8 8 2-2m8 2-2-2" />
        </svg>
      ),
    },
    {
      t: 'Garment Stitching',
      d: 'Multi-category stitching lines with trained operators and in-line workmanship control.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 7h14v10H5zM8 7V5h8v2M9 12h6M9 15h6" />
          <circle cx="7" cy="11" r="1" strokeWidth={1.8} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 8l2-2m-1 4 2-2" />
        </svg>
      ),
    },
    {
      t: 'Linen Weaving',
      d: 'Breathable woven linen programs with premium hand-feel and consistent construction stability.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 8h16M4 12h16M4 16h16M8 4v16M12 4v16M16 4v16" />
        </svg>
      ),
    },
    {
      t: 'Custom Apparel',
      d: 'Complete OEM apparel development from pattern to packed carton, tailored to your brand.',
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M8 5l4 2 4-2 3 3-2 3v8H7v-8L5 8l3-3z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-slate-50/40 text-slate-800 dark:from-slate-950 dark:via-slate-950 dark:to-slate-900 dark:text-slate-100">
      <HomeCarousel />

      <section className="relative z-10 border-b border-slate-200/70 bg-gradient-to-b from-white/90 to-slate-100/90 py-12 md:py-16 dark:border-slate-800 dark:from-slate-950/95 dark:to-slate-900/95">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A36783]/35 to-transparent dark:via-[#A36783]/45" aria-hidden />
        <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-6">
          {[
            { n: '12+', t: 'Years textile experience' },
            { n: '400k+', t: 'Units monthly capacity' },
            { n: '96%', t: 'On-time dispatch rate' },
            { n: '24/7', t: 'Production communication' },
          ].map((s, i) => (
            <div
              key={s.t}
              className="home-glass-card home-stagger rounded-2xl border border-slate-200/70 bg-white/90 p-6 text-center shadow-sm shadow-slate-200/30 ring-1 ring-white/80 dark:border-slate-700/80 dark:bg-slate-900/55 dark:shadow-none dark:ring-white/5"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <p className="text-[1.65rem] font-extrabold tracking-tight text-[#A36783] md:text-[1.85rem]">{s.n}</p>
              <p className="mt-2 text-[11px] font-semibold uppercase leading-snug tracking-[0.16em] text-slate-500 dark:text-slate-400">
                {s.t}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-200/70 py-16 md:py-24 dark:border-slate-800">
        <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-slate-200/80 pb-8 sm:flex-row sm:items-end sm:justify-between dark:border-slate-700/80">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A36783]">New in</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-[2rem] dark:text-white">
                Latest arrivals
              </h2>
            </div>
            <Link
              to="/new-arrivals"
              className="inline-flex w-fit items-center gap-1 rounded-full border border-[#A36783]/35 bg-white px-5 py-2.5 text-sm font-semibold text-[#A36783] shadow-sm transition hover:border-[#A36783] hover:bg-[#A36783]/[0.07] dark:bg-slate-900/70 dark:hover:bg-[#A36783]/15"
            >
              See all <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 md:mt-12 lg:grid-cols-4">
            {newIn.map((p, i) => (
              <div key={p.slug} className="home-stagger flex h-full min-h-0" style={{ animationDelay: `${i * 70}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-gradient-to-b from-slate-100/40 to-white py-16 md:py-24 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto w-full max-w-[1920px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-slate-200/80 pb-8 sm:flex-row sm:items-end sm:justify-between dark:border-slate-700/80">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A36783]">Top picks</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-[2rem] dark:text-white">
                Best sellers
              </h2>
            </div>
            <Link
              to="/best-sellers"
              className="inline-flex w-fit items-center gap-1 rounded-full border border-[#A36783]/35 bg-white px-5 py-2.5 text-sm font-semibold text-[#A36783] shadow-sm transition hover:border-[#A36783] hover:bg-[#A36783]/[0.07] dark:bg-slate-900/70 dark:hover:bg-[#A36783]/15"
            >
              See all <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 md:mt-12 lg:grid-cols-4">
            {best.map((p, i) => (
              <div key={p.slug} className="home-stagger flex h-full min-h-0" style={{ animationDelay: `${i * 70}ms` }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center md:mt-14">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full bg-[#A36783] px-12 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#A36783]/25 ring-4 ring-[#A36783]/10 transition hover:bg-[#8a5570] hover:shadow-xl hover:ring-[#A36783]/20"
            >
              Shop all products
            </Link>
          </div>
        </div>
      </section>

      <section className="service-pattern relative border-b border-slate-200/70 py-20 md:py-28 dark:border-slate-800">
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute -left-10 top-6 h-44 w-44 rounded-full border border-slate-200/70 dark:border-slate-700/50" />
          <div className="absolute right-8 top-12 h-24 w-24 rounded-full border border-slate-200/70 dark:border-slate-700/50" />
          <div className="absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#A36783]/[0.06] blur-3xl dark:bg-[#A36783]/10" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto mb-2 flex justify-center">
            <span className="h-px w-12 bg-[#A36783]/50" aria-hidden />
          </div>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-[#A36783]">Our Service</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-center text-3xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-[1.1] dark:text-white">
            Textile is What We Do
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400">
            End-to-end textile and apparel services designed for brands that need quality, consistency, and reliable scale.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.t}
                className={`group relative overflow-hidden rounded-3xl border bg-white px-7 py-8 shadow-sm shadow-slate-200/40 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl dark:bg-slate-900/40 dark:shadow-none ${
                  i === 0
                    ? 'border-[#1e3248]/80 hover:border-[#1e3248]'
                    : 'border-[#d7a4bb]/80 hover:border-[#c77f9e]'
                }`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#c77f9e]/8 blur-2xl transition group-hover:bg-[#c77f9e]/15" />
                <span className="service-icon inline-flex rounded-xl border border-[#e5bfd0] bg-[#fff7fb] p-3 text-[#c77f9e] shadow-sm shadow-[#c77f9e]/10 dark:border-[#a36783]/50 dark:bg-[#2a2330]">
                  {s.icon}
                </span>
                <h3 className="mt-5 text-[30px] font-semibold tracking-tight text-slate-900 dark:text-white">{s.t}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">{s.d}</p>
                <Link
                  to="/order-process"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#A36783] transition hover:gap-3 hover:text-[#8a5570]"
                >
                  Read more <span aria-hidden>→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-white py-16 md:py-24 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto mb-2 flex justify-center">
            <span className="h-px w-12 bg-[#A36783]/50" aria-hidden />
          </div>
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.28em] text-[#A36783]">Our Project</p>
          <h2 className="mx-auto mt-3 max-w-4xl text-center text-3xl font-bold tracking-tight text-slate-900 md:text-5xl md:leading-[1.1] dark:text-white">
            Some of Our Project
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-400">
            Selected textile developments crafted for private labels, merchandising teams, and fashion houses.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group relative pb-12"
              >
                <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200/80 dark:ring-slate-700/80">
                  <img
                    src={p.src}
                    alt=""
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                    onError={fallbackToHeroImage}
                  />
                </div>
                <div className="absolute inset-x-4 -bottom-0 rounded-2xl bg-[#0f2238] px-4 py-5 text-center shadow-2xl shadow-black/35 ring-1 ring-white/10 transition duration-300 group-hover:-translate-y-1 md:inset-x-6">
                  <p className="text-[clamp(1.5rem,4vw,2.25rem)] font-semibold leading-tight tracking-tight text-white">
                    {p.title}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-white/85 md:text-base">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                  </p>
                  <Link
                    to="/order-process"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-[#c77f9e] transition hover:gap-2"
                  >
                    Read more <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/70 bg-gradient-to-b from-slate-50/90 to-white py-16 md:py-24 dark:border-slate-800 dark:from-slate-900/40 dark:to-slate-950">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-6 border-b border-slate-200/80 pb-8 sm:flex-row sm:items-end sm:justify-between dark:border-slate-700/80">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#A36783]">Workflow</p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-[2rem] dark:text-white">
                How production moves
              </h2>
            </div>
            <Link
              to={buildShopPath('casual-wear', 'hoodies-sweats', 'oversized-hoodies')}
              className="inline-flex w-fit items-center gap-1 rounded-full border border-[#A36783]/35 bg-white px-5 py-2.5 text-sm font-semibold text-[#A36783] shadow-sm transition hover:border-[#A36783] hover:bg-[#A36783]/[0.07] dark:bg-slate-900/70 dark:hover:bg-[#A36783]/15"
            >
              Start with a sample <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-3">
            {process.map((x, i) => (
              <article
                key={x.t}
                className="home-process-card home-stagger rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm shadow-slate-200/30 dark:border-slate-700 dark:bg-slate-900/60 dark:shadow-none"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-xs font-bold tracking-[0.28em] text-[#A36783]">{x.k}</p>
                <h3 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{x.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{x.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-slate-800/80 py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#111a24] to-slate-950" aria-hidden />
        <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#A36783]/25 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#4a6fa5]/20 blur-3xl" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.06) 1px, transparent 0)`,
            backgroundSize: '28px 28px',
          }}
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-8 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-10 bg-[#A36783]" aria-hidden />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#f0d4e0]">Social</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.35rem] lg:leading-tight">
                Our reels
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/65 md:text-lg">
                Behind the scenes from the floor and finishing room — short clips from sampling, sewing lines, and QC.
              </p>
            </div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 backdrop-blur-sm transition hover:border-[#A36783]/50 hover:bg-[#A36783]/20 hover:text-white"
            >
              Follow on Instagram
              <span className="text-white/50" aria-hidden>
                ↗
              </span>
            </a>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {reels.map((reel, i) => (
              <a
                key={reel.label}
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${reel.label} — opens Instagram`}
                className="group home-stagger relative mx-auto flex w-full max-w-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50 shadow-2xl shadow-black/40 ring-1 ring-white/5 transition duration-500 hover:-translate-y-1 hover:border-[#A36783]/40 hover:ring-[#A36783]/25 sm:max-w-none motion-reduce:transition-colors motion-reduce:hover:translate-y-0"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[9/16] max-h-[min(72vw,380px)] w-full overflow-hidden sm:max-h-[420px]">
                  <img
                    src={reel.src}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06] motion-reduce:group-hover:scale-100"
                    loading="lazy"
                    onError={fallbackToHeroImage}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent opacity-90 transition duration-500 group-hover:opacity-95" />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#A36783]/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute right-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/95 ring-1 ring-white/15 backdrop-blur-md">
                    Reel
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 motion-reduce:opacity-100 motion-reduce:group-hover:opacity-100">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl shadow-black/30 ring-4 ring-white/20 transition duration-300 group-hover:scale-105 motion-reduce:scale-100">
                      <IconPlayReel className="ml-1 h-7 w-7" />
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 pt-12">
                    <p className="text-sm font-bold leading-snug tracking-wide text-white drop-shadow-md md:text-base">
                      {reel.label}
                    </p>
                    <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">Tap to watch</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/80 py-14 md:py-16 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900/90">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3 md:gap-8 md:px-6">
          {[
            { t: 'Premium quality', d: 'Inline QC and audited partners for consistent bulk output.' },
            { t: 'Clear ordering', d: 'Quotes, MOQs, and timelines spelled out before you commit.' },
            { t: 'Reliable delivery', d: 'Carton-ready packing aligned with EU import expectations.' },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 text-center shadow-sm shadow-slate-200/25 md:text-left dark:border-slate-700/80 dark:bg-slate-900/50 dark:shadow-none"
            >
              <span className="mx-auto mb-3 block h-1 w-10 rounded-full bg-[#A36783]/70 md:mx-0" aria-hidden />
              <h3 className="text-lg font-bold text-[#A36783]">{x.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{x.d}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
