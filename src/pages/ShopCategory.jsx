import { Link, useParams } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import {
  buildShopPath,
  getRootBySlug,
  getMidBySlug,
  isValidShopPath,
} from '../data/categoryTree'
import { filterProducts } from '../data/products'
import { getShopLeafImage, getShopMidImage } from '../data/categoryVisuals'
import ProductCard from '../components/ProductCard'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import CatalogSidebar from '../components/CatalogSidebar'
import { fallbackToHeroImage } from '../data/siteHero.js'
import NotFound from './NotFound'

const deptCardClass =
  'group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37]/35 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/40 dark:hover:border-[#D4AF37]/40'

const leafCardClass =
  'group flex items-center gap-3.5 rounded-xl border border-slate-200/80 bg-white p-3 pr-4 text-left shadow-sm ring-1 ring-black/[0.02] transition hover:border-[#D4AF37]/35 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50 dark:ring-white/[0.03] dark:hover:border-[#D4AF37]/40'

export default function ShopCategory() {
  const { main, mid, leaf } = useParams()

  const valid = isValidShopPath(main, mid, leaf)
  const root = getRootBySlug(main)
  const midNode = mid ? getMidBySlug(main, mid) : null

  let title = 'Shop'
  if (root) title = root.name
  if (midNode) title = midNode.name
  if (leaf && midNode) {
    const ln = midNode.children.find((l) => l.slug === leaf)
    if (ln) title = ln.name
  }
  usePageTitle(title)

  if (!valid || !root) return <NotFound />

  const products = filterProducts({
    catMain: main,
    catMid: mid || undefined,
    catLeaf: leaf || undefined,
  })

  const leafName = leaf && midNode ? midNode.children.find((l) => l.slug === leaf)?.name ?? leaf : ''

  const breadcrumbItems = (() => {
    const items = [
      { label: 'Home', to: '/' },
      { label: 'Categories', to: '/categories' },
    ]
    if (!mid) {
      items.push({ label: root.name })
      return items
    }
    items.push({ label: root.name, to: buildShopPath(main) })
    if (!leaf && midNode) {
      items.push({ label: midNode.name })
      return items
    }
    if (midNode && leaf) {
      items.push({ label: midNode.name, to: buildShopPath(main, mid) })
      items.push({ label: leafName })
    }
    return items
  })()

  let heroDescription = root.tagline
  if (midNode && !leaf) {
    heroDescription = `Departments inside ${root.name}.`
  }
  if (leaf && midNode) {
    heroDescription = `${root.name} · ${midNode.name}`
  }

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero title={title} description={heroDescription}>
        <PageHeroBreadcrumb items={breadcrumbItems} />
      </PageHero>

      <section className="border-t border-slate-100 py-10 md:py-14 dark:border-slate-800">
        <div className="mx-auto grid w-full max-w-[1920px] gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-[minmax(0,260px)_1fr] md:gap-8 lg:gap-10">
          <CatalogSidebar
            variant="shop"
            shopMain={main}
            shopMid={mid}
            shopLeaf={leaf}
            root={root}
            midNode={midNode}
          />

          <div className="min-w-0">
            {!mid && (
              <>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-6 dark:border-slate-800 dark:bg-slate-900/35 md:px-7 md:py-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Departments</p>
                  <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Choose a category</h2>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-400">{root.tagline}</p>
                </div>
                <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {root.children.map((m) => {
                    const cover = getShopMidImage(main, m.slug)
                    return (
                      <Link key={m.slug} to={buildShopPath(main, m.slug)} className={deptCardClass}>
                        <div className="relative aspect-[16/11] overflow-hidden bg-slate-100 dark:bg-slate-800">
                          <img
                            src={cover}
                            alt=""
                            className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.05]"
                            loading="lazy"
                            onError={fallbackToHeroImage}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] shadow-sm backdrop-blur-sm dark:bg-slate-900/80">
                            Department
                          </span>
                        </div>
                        <div className="flex flex-1 flex-col p-5">
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{m.name}</h3>
                          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
                            {m.children.length} product types
                          </p>
                          <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">
                            Open
                            <span aria-hidden className="transition group-hover:translate-x-0.5">
                              →
                            </span>
                          </span>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </>
            )}

            {mid && !leaf && midNode && (
              <>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-6 dark:border-slate-800 dark:bg-slate-900/35 md:px-7 md:py-7">
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Product types</p>
                  <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{midNode.name}</h2>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                    Part of{' '}
                    <Link className="font-semibold text-[#D4AF37] hover:underline" to={buildShopPath(main)}>
                      {root.name}
                    </Link>
                  </p>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {midNode.children.map((l) => {
                    const thumb = getShopLeafImage(main, mid, l.slug)
                    return (
                      <Link key={l.slug} to={buildShopPath(main, mid, l.slug)} className={leafCardClass}>
                        <div className="relative h-[3.75rem] w-[3.75rem] shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-16 sm:w-16 dark:bg-slate-800">
                          <img
                            src={thumb}
                            alt=""
                            className="h-full w-full object-cover transition duration-300 ease-out group-hover:scale-[1.04]"
                            loading="lazy"
                            onError={fallbackToHeroImage}
                          />
                        </div>
                        <span className="min-w-0 flex-1 text-sm font-semibold leading-snug text-slate-800 dark:text-slate-100">
                          {l.name}
                        </span>
                        <span
                          className="shrink-0 text-lg leading-none text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#D4AF37] dark:text-slate-600"
                          aria-hidden
                        >
                          →
                        </span>
                      </Link>
                    )
                  })}
                </div>
                {products.length > 0 && (
                  <div className="mt-12 rounded-2xl border border-slate-100 bg-slate-50/40 p-5 dark:border-slate-800 dark:bg-slate-900/25 md:mt-14 md:p-8">
                    <div className="border-b border-slate-200/80 pb-5 dark:border-slate-700/80">
                      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Line sheet</p>
                      <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white md:text-xl">All styles in this section</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{products.length} in catalogue</p>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
                      {products.map((p) => (
                        <ProductCard key={p.slug} product={p} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}

            {mid && leaf && midNode && (
              <>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-6 dark:border-slate-800 dark:bg-slate-900/35 md:px-7 md:py-7">
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    <Link className="font-semibold text-[#D4AF37] hover:underline" to={buildShopPath(main)}>
                      {root.name}
                    </Link>
                    <span className="mx-2 text-slate-300 dark:text-slate-600">/</span>
                    <Link className="font-semibold text-[#D4AF37] hover:underline" to={buildShopPath(main, mid)}>
                      {midNode.name}
                    </Link>
                  </p>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">{leafName}</h2>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{products.length} style(s) in catalogue</p>
                </div>
                {products.length === 0 ? (
                  <p className="mt-8 rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-12 text-center text-slate-600 dark:border-slate-700 dark:bg-slate-900/30 dark:text-slate-400">
                    No demo products in this slot — browse a sister type from the left panel.
                  </p>
                ) : (
                  <div className="mt-8 rounded-2xl border border-slate-100 bg-slate-50/40 p-5 dark:border-slate-800 dark:bg-slate-900/25 md:p-8">
                    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                      {products.map((p) => (
                        <ProductCard key={p.slug} product={p} />
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
