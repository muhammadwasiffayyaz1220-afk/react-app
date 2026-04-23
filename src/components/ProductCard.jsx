import { Link } from 'react-router-dom'
import { fallbackToHeroImage } from '../data/siteHero.js'
import { SITE_LOGO_IMAGE } from '../data/siteBrand.js'
import { buildShopPath, getLeafMeta } from '../data/categoryTree.js'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950'

/** Header-style logo mark — corner watermark; non-interactive. */
function CardBrandWatermark() {
  return (
    <span
      className="pointer-events-none absolute left-2.5 top-2.5 z-[5] flex h-8 w-10 select-none items-center justify-center overflow-hidden bg-transparent sm:h-9 sm:w-11"
      aria-hidden
    >
      <img src={SITE_LOGO_IMAGE} alt="" className="h-full w-full object-contain" />
    </span>
  )
}

function ArrowIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden className={className}>
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function ProductCard({ product, showMoq = false }) {
  const imageBg = '#F5F5F6'
  const contentBg = 'linear-gradient(180deg, rgba(245,245,246,0.95) 0%, rgba(245,245,246,0.85) 58%, rgba(245,245,246,0.78) 100%)'

  const meta =
    product.catMain && product.catMid && product.catLeaf
      ? getLeafMeta(product.catMain, product.catMid, product.catLeaf)
      : null
  const categoryLabel = meta?.leaf?.name
  const shopPath = meta ? buildShopPath(product.catMain, product.catMid, product.catLeaf) : null

  return (
    <article
      className={`product-card-dashing group relative isolate flex h-full min-h-0 flex-col overflow-hidden rounded-[1.65rem] border border-slate-200/60 bg-[#F5F5F6] shadow-[0_8px_40px_-12px_rgba(15,23,42,0.12)] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:border-[#D4AF37]/40 hover:shadow-[0_24px_48px_-18px_rgba(15,23,42,0.14),0_0_0_1px_rgba(212,175,55,0.22),0_0_40px_-12px_rgba(212,175,55,0.18)] focus-within:-translate-y-[5px] focus-within:border-[#D4AF37]/40 focus-within:shadow-[0_24px_48px_-18px_rgba(15,23,42,0.14),0_0_0_1px_rgba(212,175,55,0.22),0_0_40px_-12px_rgba(212,175,55,0.18)] dark:border-slate-600/70 dark:bg-[#F5F5F6] dark:shadow-[0_10px_48px_-14px_rgba(0,0,0,0.55)] dark:hover:border-[#D4AF37]/40 dark:hover:shadow-[0_28px_56px_-20px_rgba(0,0,0,0.65),0_0_0_1px_rgba(212,175,55,0.2),0_0_48px_-10px_rgba(212,175,55,0.18)] dark:focus-within:border-[#D4AF37]/40`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-0 transition duration-300 ease-out group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#D4AF37]/14 blur-3xl transition duration-700 group-hover:bg-[#D4AF37]/22 group-hover:scale-110"
        aria-hidden
      />

      <Link
        to={`/product/${product.slug}`}
        aria-label={`View ${product.name}`}
        className={`product-image-marble-bg relative overflow-hidden ${focusRing}`}
        style={{ backgroundColor: imageBg }}
      >
        <img
          src={product.image}
          alt={product.altText || `${product.name} product image`}
          title={product.displayName || product.name}
          className="relative z-[1] h-auto w-full object-contain object-center transition duration-300 ease-out will-change-transform group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
          loading="lazy"
          onError={fallbackToHeroImage}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-slate-950/35 via-transparent to-slate-950/[0.06] opacity-80 transition duration-500 group-hover:from-slate-950/45 group-hover:opacity-100"
          aria-hidden
        />
        <div className="product-card-shine" aria-hidden />
        <CardBrandWatermark />

        {/* Editorial strip — appears on hover / focus-within */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] translate-y-3 opacity-0 transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100"
          aria-hidden
        >
          <div className="bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent px-4 pb-3.5 pt-14">
            <div className="flex items-end justify-between gap-3 border-t border-white/20 pt-3">
              <p className="max-w-[70%] text-[9px] font-bold uppercase leading-relaxed tracking-[0.28em] text-white/85">
                Open look
              </p>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm transition duration-300 group-hover:bg-white/25">
                <ArrowIcon className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </div>
      </Link>

      <div
        className="relative z-10 flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-6 sm:pb-6 sm:pt-6"
        style={{ backgroundImage: contentBg }}
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent dark:via-[#D4AF37]/35"
          aria-hidden
        />

        {categoryLabel && shopPath ? (
          <Link
            to={shopPath}
            onClick={(e) => e.stopPropagation()}
            className={`relative z-10 mt-0.5 w-fit rounded-full border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/[0.08] to-transparent px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#0F172A] shadow-sm shadow-[#D4AF37]/10 transition duration-300 ease-out hover:border-[#D4AF37]/35 hover:from-[#D4AF37]/12 hover:text-[#D4AF37] dark:border-[#D4AF37]/30 dark:from-[#D4AF37]/14 ${focusRing}`}
          >
            {categoryLabel}
          </Link>
        ) : null}

        <Link
          to={`/product/${product.slug}`}
          className={`relative z-10 mt-3 line-clamp-2 text-balance text-[0.9rem] font-extrabold uppercase leading-[1.25] tracking-[0.06em] text-[#0F172A] transition-colors duration-300 ease-out hover:text-[#D4AF37] ${focusRing} rounded-sm`}
        >
          {product.name}
        </Link>

        <p className="relative z-10 mt-3 line-clamp-2 text-[13px] leading-[1.65] text-[#334155] dark:text-[#334155]">
          {product.blurb}
        </p>

        {showMoq ? (
          <p className="relative z-10 mt-3 text-xs font-medium text-slate-400 dark:text-slate-500">{product.moq}</p>
        ) : null}

        <div className="relative z-10 mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-5 dark:border-slate-700/50">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="block h-2 w-2 rounded-full bg-[#D4AF37] opacity-50 shadow-[0_0_14px_rgba(212,175,55,0.45)] transition duration-500 group-hover:scale-125 group-hover:opacity-100 group-hover:shadow-[0_0_18px_rgba(212,175,55,0.75)] motion-reduce:group-hover:scale-100" />
            </span>
            <div className="h-px min-w-[2rem] flex-1 bg-gradient-to-r from-[#D4AF37]/45 via-slate-200/90 to-transparent dark:from-[#D4AF37]/45 dark:via-slate-600/80" />
          </div>
          <Link
            to={`/product/${product.slug}`}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0F172A] shadow-[0_10px_28px_-8px_rgba(15,23,42,0.35),0_0_20px_-8px_rgba(212,175,55,0.25)] transition-all duration-300 ease-out hover:bg-[#B8962E] hover:shadow-[0_14px_36px_-10px_rgba(15,23,42,0.25),0_0_28px_-6px_rgba(212,175,55,0.45)] active:scale-[0.97] motion-reduce:active:scale-100 dark:bg-[#D4AF37] dark:text-[#0F172A] dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.45),0_0_20px_-8px_rgba(212,175,55,0.2)] dark:hover:bg-[#B8962E] ${focusRing}`}
          >
            View
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
