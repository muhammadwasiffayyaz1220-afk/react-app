import { Link, useParams } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { getProduct } from '../data/products'
import { buildShopPath, getRootBySlug, getMidBySlug } from '../data/categoryTree'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import { fallbackToHeroImage } from '../data/siteHero.js'
import NotFound from './NotFound'

function splitBlurb(text) {
  const t = text.trim()
  const m = t.match(/^(.+?[.!?])(\s+(.+))?$/s)
  if (m) return { lead: m[1].trim(), rest: (m[3] || '').trim() }
  return { lead: t, rest: '' }
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)

  usePageTitle(product?.name ?? 'Product')

  if (!product) return <NotFound />

  const root = getRootBySlug(product.catMain)
  const mid = getMidBySlug(product.catMain, product.catMid)
  const leafName = mid?.children.find((l) => l.slug === product.catLeaf)?.name ?? product.catLeaf
  const shopLeafPath = buildShopPath(product.catMain, product.catMid, product.catLeaf)
  const { lead, rest } = splitBlurb(product.blurb)

  const heroDescription = [leafName, product.moq].filter(Boolean).join(' · ')

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero title={product.name} description={heroDescription}>
        <PageHeroBreadcrumb
          delay={2}
          items={[{ label: 'Home', to: '/' }, { label: 'Products', to: '/products' }, { label: product.name }]}
        />
      </PageHero>

      <section className="product-detail-section relative overflow-hidden border-t border-slate-100 py-14 md:py-24 dark:border-slate-800">
        <div
          className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#A36783]/07 blur-[100px] dark:bg-[#A36783]/12"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#0f2238]/05 blur-3xl dark:bg-white/[0.04]"
          aria-hidden
        />

        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div className="product-detail-visual contact-anim-fade-up lg:sticky lg:top-28">
              <div className="product-detail-frame group relative">
                <div
                  className="pointer-events-none absolute inset-x-8 -top-px z-10 h-[3px] rounded-full bg-gradient-to-r from-transparent via-[#A36783] to-transparent opacity-90"
                  aria-hidden
                />
                <div className="pointer-events-none absolute -inset-1 rounded-[1.85rem] bg-gradient-to-br from-[#A36783]/20 via-transparent to-[#0f2238]/15 opacity-60 blur-sm transition duration-700 group-hover:opacity-90 dark:from-[#A36783]/25 dark:to-[#0f2238]/40" aria-hidden />
                <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-b from-slate-50 via-white to-slate-50/80 p-2.5 shadow-[0_28px_56px_-20px_rgba(15,34,56,0.2)] dark:border-slate-700/90 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 dark:shadow-black/50">
                  <div className="product-detail-shine relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800">
                    <img
                      src={product.image}
                      alt=""
                      className="aspect-square w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
                      onError={fallbackToHeroImage}
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/25 via-transparent to-transparent opacity-80"
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="product-detail-copy contact-anim-slide-right space-y-8 md:space-y-10">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-[#A36783]/35 bg-[#A36783]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A36783] dark:bg-[#A36783]/12">
                  Line sheet
                </span>
                {product.isNew && (
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white dark:bg-white dark:text-slate-900">
                    New
                  </span>
                )}
                {product.isBestseller && (
                  <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
                    Best seller
                  </span>
                )}
              </div>

              <div className="product-detail-spec-grid grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="product-detail-spec-card rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm dark:border-slate-700/90 dark:bg-slate-900/70">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Pricing (B2B)</p>
                  <p className="mt-2 text-lg font-bold tracking-tight text-[#A36783]">On quote</p>
                  <p className="mt-1 text-[11px] leading-snug text-slate-500 dark:text-slate-400">Volume, specs & destination set the tier — no list pricing.</p>
                </div>
                <div className="product-detail-spec-card rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm dark:border-slate-700/90 dark:bg-slate-900/70">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">MOQ / programme</p>
                  <p className="mt-2 text-base font-semibold leading-snug text-slate-900 dark:text-white">{product.moq}</p>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Tell us your target qty</p>
                </div>
                <div className="product-detail-spec-card rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm sm:col-span-1 dark:border-slate-700/90 dark:bg-slate-900/70">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">Category</p>
                  <p className="mt-2 text-base font-semibold leading-snug text-slate-900 dark:text-white">{leafName}</p>
                  <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">Wholesale & OEM</p>
                </div>
              </div>

              <div className="product-detail-prose relative pl-5 md:pl-6">
                <div
                  className="absolute left-0 top-1 h-[calc(100%-0.25rem)] w-1 rounded-full bg-gradient-to-b from-[#A36783] via-[#c9a0b5] to-[#A36783]/30"
                  aria-hidden
                />
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#A36783]">Description</p>
                <p className="product-detail-lead mt-4 text-xl font-medium leading-snug tracking-tight text-slate-900 md:text-2xl dark:text-white">
                  {lead}
                </p>
                {rest ? (
                  <p className="mt-5 max-w-prose text-[15px] leading-[1.75] text-slate-600 dark:text-slate-400">{rest}</p>
                ) : null}
              </div>

              {root && mid && (
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 dark:border-slate-700/80 dark:bg-slate-900/50">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Browse hierarchy</p>
                  <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                    <Link
                      className="rounded-full bg-white px-3 py-1.5 font-medium text-[#A36783] shadow-sm ring-1 ring-slate-200/80 transition hover:bg-[#A36783]/10 dark:bg-slate-800 dark:ring-slate-600"
                      to={buildShopPath(product.catMain)}
                    >
                      {root.name}
                    </Link>
                    <span className="text-slate-300 dark:text-slate-600" aria-hidden>
                      →
                    </span>
                    <Link
                      className="rounded-full bg-white px-3 py-1.5 font-medium text-[#A36783] shadow-sm ring-1 ring-slate-200/80 transition hover:bg-[#A36783]/10 dark:bg-slate-800 dark:ring-slate-600"
                      to={buildShopPath(product.catMain, product.catMid)}
                    >
                      {mid.name}
                    </Link>
                    <span className="text-slate-300 dark:text-slate-600" aria-hidden>
                      →
                    </span>
                    <Link
                      className="rounded-full bg-white px-3 py-1.5 font-medium text-[#A36783] shadow-sm ring-1 ring-slate-200/80 transition hover:bg-[#A36783]/10 dark:bg-slate-800 dark:ring-slate-600"
                      to={shopLeafPath}
                    >
                      {leafName}
                    </Link>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Link
                  to="/contact"
                  className="product-detail-cta-primary inline-flex items-center justify-center rounded-xl bg-[#A36783] px-10 py-4 text-center text-sm font-bold uppercase tracking-[0.18em] text-white shadow-lg shadow-[#A36783]/30 transition hover:bg-[#8a5570] hover:shadow-xl"
                >
                  Request a quote
                </Link>
                <Link
                  to={shopLeafPath}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-center text-sm font-bold uppercase tracking-wider text-slate-800 transition hover:border-[#A36783]/40 hover:text-[#A36783] dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-[#A36783]/50"
                >
                  More in category
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-4 py-3 text-sm font-semibold text-slate-500 underline-offset-4 transition hover:text-[#A36783] hover:underline dark:text-slate-400"
                >
                  ← Full catalogue
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
