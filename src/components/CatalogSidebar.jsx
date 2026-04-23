import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { categoryRoots, buildShopPath } from '../data/categoryTree'
import { countForCatMain, filterProducts } from '../data/products'

const panelClass =
  'rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900/50'

const linkBase = 'block rounded-lg px-3 py-2.5 text-sm transition dark:text-slate-200'
const linkIdle = `${linkBase} text-[#0F172A] hover:bg-slate-50 hover:text-[#D4AF37] dark:text-slate-200 dark:hover:bg-white/5`
const linkActive = `${linkBase} bg-[#D4AF37]/12 font-semibold text-[#D4AF37]`

const sectionLabel = 'text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500'

function CatalogSidebarSearch({ initialQ, isProductsPage, navigate, params, setParams }) {
  const [searchDraft, setSearchDraft] = useState(initialQ)

  const setProductsSearch = useCallback(
    (val) => {
      const next = new URLSearchParams(params)
      if (val.trim()) next.set('q', val.trim())
      else next.delete('q')
      setParams(next)
    },
    [params, setParams],
  )

  const onSearchSubmit = (e) => {
    e.preventDefault()
    if (isProductsPage) {
      setProductsSearch(searchDraft)
    } else {
      navigate(searchDraft.trim() ? `/products?q=${encodeURIComponent(searchDraft.trim())}` : '/products')
    }
  }

  return (
    <form onSubmit={onSearchSubmit} className="mt-4">
      <label htmlFor="catalog-sidebar-search" className="sr-only">
        Search products
      </label>
      <input
        id="catalog-sidebar-search"
        type="search"
        value={searchDraft}
        onChange={(e) => setSearchDraft(e.target.value)}
        placeholder="Search styles…"
        className="w-full rounded-lg border border-slate-200 bg-slate-50/80 px-3 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37]/25 dark:border-slate-600 dark:bg-slate-800/80 dark:text-white dark:placeholder:text-slate-500"
      />
      <button
        type="submit"
        className="mt-2 w-full rounded-lg bg-slate-900 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-slate-800 dark:bg-slate-700 dark:hover:bg-slate-600"
      >
        Search
      </button>
    </form>
  )
}

/**
 * Consistent order: Search → Quick filters → Shop by line → (shop) Departments / Styles.
 */
export default function CatalogSidebar({
  variant = 'products',
  shopMain,
  shopMid,
  shopLeaf,
  root,
  midNode,
}) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const isProductsPage = pathname === '/products'

  const filter = params.get('filter')
  const sortAz = params.get('sort') === 'az'
  const qParam = params.get('q') || ''
  const bestseller = filter === 'bestseller'
  const newOnly = filter === 'new'
  const totalCount = filterProducts({}).length

  return (
    <aside className={`${panelClass} lg:sticky lg:top-24 lg:self-start`}>
      <p className={sectionLabel}>Browse catalogue</p>

      <CatalogSidebarSearch
        key={isProductsPage ? `products:${qParam}` : pathname}
        initialQ={isProductsPage ? qParam : ''}
        isProductsPage={isProductsPage}
        navigate={navigate}
        params={params}
        setParams={setParams}
      />

      <div className="my-6 border-t border-slate-100 dark:border-slate-700" />

      <p className={sectionLabel}>Quick filters</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Link
          to="/products"
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
            isProductsPage && !filter && !qParam
              ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
              : 'border-slate-200 text-slate-600 hover:border-[#D4AF37]/40 dark:border-slate-600 dark:text-slate-300'
          }`}
        >
          All ({totalCount})
        </Link>
        <Link
          to="/products?filter=new"
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
            isProductsPage && newOnly
              ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
              : 'border-slate-200 text-slate-600 hover:border-[#D4AF37]/40 dark:border-slate-600 dark:text-slate-300'
          }`}
        >
          New
        </Link>
        <Link
          to="/products?filter=bestseller"
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
            isProductsPage && bestseller
              ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
              : 'border-slate-200 text-slate-600 hover:border-[#D4AF37]/40 dark:border-slate-600 dark:text-slate-300'
          }`}
        >
          Best sellers
        </Link>
        <Link
          to="/products?sort=az"
          className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
            isProductsPage && sortAz && !filter
              ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
              : 'border-slate-200 text-slate-600 hover:border-[#D4AF37]/40 dark:border-slate-600 dark:text-slate-300'
          }`}
        >
          A–Z
        </Link>
      </div>

      <div className="my-6 border-t border-slate-100 dark:border-slate-700" />

      <p className={sectionLabel}>Shop by line</p>
      <ul className="mt-3 space-y-0.5">
        {categoryRoots.map((c) => {
          const n = countForCatMain(c.slug)
          const activeLine = variant === 'shop' && shopMain === c.slug
          return (
            <li key={c.slug}>
              <Link to={buildShopPath(c.slug)} className={activeLine ? linkActive : linkIdle}>
                {c.name}
                <span className="float-right tabular-nums text-slate-400 dark:text-slate-500">{n}</span>
              </Link>
            </li>
          )
        })}
      </ul>

      {variant === 'shop' && root && !shopMid && (
        <>
          <div className="my-6 border-t border-slate-100 dark:border-slate-700" />
          <p className={sectionLabel}>Departments</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{root.name}</p>
          <ul className="mt-3 max-h-[min(50vh,320px)] space-y-0.5 overflow-y-auto pr-1">
            {root.children.map((m) => (
              <li key={m.slug}>
                <Link to={buildShopPath(shopMain, m.slug)} className={linkIdle}>
                  {m.name}
                  <span className="text-slate-400 dark:text-slate-500"> · {m.children.length}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {variant === 'shop' && root && midNode && !shopLeaf && (
        <>
          <div className="my-6 border-t border-slate-100 dark:border-slate-700" />
          <p className={sectionLabel}>Product types</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{midNode.name}</p>
          <ul className="mt-3 max-h-[min(50vh,360px)] space-y-0.5 overflow-y-auto pr-1">
            {midNode.children.map((l) => (
              <li key={l.slug}>
                <Link to={buildShopPath(shopMain, shopMid, l.slug)} className={linkIdle}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      {variant === 'shop' && root && midNode && shopLeaf && (
        <>
          <div className="my-6 border-t border-slate-100 dark:border-slate-700" />
          <p className={sectionLabel}>More in {midNode.name}</p>
          <ul className="mt-3 space-y-0.5">
            {midNode.children.map((l) => (
              <li key={l.slug}>
                <Link to={buildShopPath(shopMain, shopMid, l.slug)} className={shopLeaf === l.slug ? linkActive : linkIdle}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-700">
        <Link to="/categories" className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:underline">
          Category overview →
        </Link>
      </div>
    </aside>
  )
}
