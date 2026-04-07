import { Link } from 'react-router-dom'
import { fallbackToHeroImage } from '../data/siteHero.js'
import { SITE_LOGO_LETTER } from '../data/siteBrand.js'
import { buildShopPath, getLeafMeta } from '../data/categoryTree.js'

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A36783] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950'

/** Header-style logo mark — corner watermark; non-interactive. */
function CardBrandWatermark() {
  return (
    <span
      className="pointer-events-none absolute left-2.5 top-2.5 z-[5] flex h-8 w-8 select-none items-center justify-center rounded-full border border-[#A36783]/50 bg-[#132a43] text-xs font-black leading-none text-[#cf9bb4] shadow-md shadow-black/[0.12] ring-2 ring-white/80 backdrop-blur-[2px] dark:ring-slate-900/80 sm:h-9 sm:w-9 sm:text-sm"
      aria-hidden
    >
      {SITE_LOGO_LETTER}
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
  const meta =
    product.catMain && product.catMid && product.catLeaf
      ? getLeafMeta(product.catMain, product.catMid, product.catLeaf)
      : null
  const categoryLabel = meta?.leaf?.name
  const shopPath = meta ? buildShopPath(product.catMain, product.catMid, product.catLeaf) : null

  return (
    <article
      className={`product-card-dashing group relative isolate flex h-full min-h-0 flex-col overflow-hidden rounded-[1.65rem] border border-slate-200/60 bg-white shadow-[0_8px_40px_-12px_rgba(15,23,42,0.1)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[10px] hover:border-[#A36783]/35 hover:shadow-[0_36px_72px_-20px_rgba(15,23,42,0.18),0_0_0_1px_rgba(163,103,131,0.1),0_0_60px_-14px_rgba(163,103,131,0.16)] focus-within:-translate-y-[10px] focus-within:border-[#A36783]/35 focus-within:shadow-[0_36px_72px_-20px_rgba(15,23,42,0.18),0_0_0_1px_rgba(163,103,131,0.1),0_0_60px_-14px_rgba(163,103,131,0.16)] dark:border-slate-600/70 dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 dark:shadow-[0_10px_48px_-14px_rgba(0,0,0,0.55)] dark:hover:border-[#A36783]/40 dark:hover:shadow-[0_40px_80px_-22px_rgba(0,0,0,0.7),0_0_0_1px_rgba(163,103,131,0.18),0_0_64px_-10px_rgba(163,103,131,0.2)] dark:focus-within:border-[#A36783]/40`}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[3px] bg-gradient-to-r from-transparent via-[#A36783] to-transparent opacity-0 transition duration-500 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#A36783]/12 blur-3xl transition duration-700 group-hover:bg-[#A36783]/22 group-hover:scale-110"
        aria-hidden
      />

      <Link
        to={`/product/${product.slug}`}
        aria-label={`View ${product.name}`}
        className={`relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 ${focusRing}`}
      >
        <img
          src={product.image}
          alt=""
          className="relative z-0 h-full w-full object-cover object-center transition duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.08] motion-reduce:group-hover:scale-100 group-hover:brightness-[1.04]"
          loading="lazy"
          onError={fallbackToHeroImage}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/45 via-slate-950/5 to-transparent opacity-75 transition duration-500 group-hover:from-slate-950/55 group-hover:via-[#1a0a12]/20 group-hover:opacity-100"
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

      <div className="relative z-10 flex flex-1 flex-col bg-gradient-to-b from-white via-white to-slate-50/95 px-5 pb-5 pt-5 dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 sm:px-6 sm:pb-6 sm:pt-6">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#A36783]/25 to-transparent dark:via-[#A36783]/35"
          aria-hidden
        />

        {categoryLabel && shopPath ? (
          <Link
            to={shopPath}
            onClick={(e) => e.stopPropagation()}
            className={`relative z-10 mt-0.5 w-fit rounded-full border border-[#A36783]/15 bg-gradient-to-br from-[#A36783]/[0.06] to-transparent px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.22em] text-[#7d4d63] shadow-sm shadow-[#A36783]/5 transition hover:border-[#A36783]/35 hover:from-[#A36783]/10 hover:text-[#A36783] dark:border-[#A36783]/25 dark:from-[#A36783]/12 dark:text-[#e8c4d4] dark:hover:from-[#A36783]/22 dark:hover:text-white ${focusRing}`}
          >
            {categoryLabel}
          </Link>
        ) : null}

        <Link
          to={`/product/${product.slug}`}
          className={`relative z-10 mt-3 line-clamp-2 text-balance text-[0.9rem] font-extrabold uppercase leading-[1.25] tracking-[0.06em] text-slate-900 transition-colors duration-300 group-hover:text-[#A36783] dark:text-white dark:group-hover:text-[#f5e0ea] ${focusRing} rounded-sm`}
        >
          {product.name}
        </Link>

        <p className="relative z-10 mt-3 line-clamp-2 text-[13px] leading-[1.65] text-slate-600 dark:text-slate-400">
          {product.blurb}
        </p>

        {showMoq ? (
          <p className="relative z-10 mt-3 text-xs font-medium text-slate-400 dark:text-slate-500">{product.moq}</p>
        ) : null}

        <div className="relative z-10 mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 pt-5 dark:border-slate-700/50">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="block h-2 w-2 rounded-full bg-[#A36783] opacity-50 shadow-[0_0_14px_rgba(163,103,131,0.45)] transition duration-500 group-hover:scale-125 group-hover:opacity-100 group-hover:shadow-[0_0_18px_rgba(163,103,131,0.75)] motion-reduce:group-hover:scale-100" />
            </span>
            <div className="h-px min-w-[2rem] flex-1 bg-gradient-to-r from-[#A36783]/40 via-slate-200/90 to-transparent dark:from-[#A36783]/45 dark:via-slate-600/80" />
          </div>
          <Link
            to={`/product/${product.slug}`}
            className={`inline-flex shrink-0 items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_-8px_rgba(15,23,42,0.5)] transition-all duration-300 hover:shadow-[0_14px_32px_-10px_rgba(163,103,131,0.45)] active:scale-[0.97] motion-reduce:active:scale-100 group-hover:bg-[#A36783] group-hover:px-6 group-hover:shadow-[0_14px_36px_-10px_rgba(163,103,131,0.5)] dark:bg-white dark:text-slate-900 dark:shadow-[0_10px_28px_-8px_rgba(0,0,0,0.45)] dark:group-hover:bg-[#A36783] dark:group-hover:text-white ${focusRing}`}
          >
            View
            <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
