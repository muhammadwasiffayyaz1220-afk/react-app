import { Link, useSearchParams } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { filterProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import CatalogSidebar from '../components/CatalogSidebar'

export default function Products() {
  const [params] = useSearchParams()
  const filter = params.get('filter')
  const sortAz = params.get('sort') === 'az'
  const q = params.get('q') || ''
  const bestseller = filter === 'bestseller'
  const newOnly = filter === 'new'

  let heroTitle = 'All Products'
  let heroDesc = 'Browse the full line sheet — use the panel on the left to search, filter, or jump to a product line.'
  if (bestseller) {
    heroTitle = 'Best selling'
    heroDesc = 'Top-moving silhouettes for repeat B2B programmes.'
  }
  if (newOnly) {
    heroTitle = 'New in'
    heroDesc = 'Latest additions to the catalogue.'
  }
  if (q.trim()) {
    heroTitle = 'Search results'
    heroDesc = `Matching “${q.trim()}”.`
  }

  usePageTitle(q.trim() ? `Search: ${q}` : bestseller ? 'Best selling' : newOnly ? 'New in' : 'All Products')

  const rawList = filter ? filterProducts({ bestseller, newOnly, search: q }) : filterProducts({ search: q })
  const list = sortAz ? [...rawList].sort((a, b) => a.name.localeCompare(b.name)) : rawList

  const crumbCurrent = bestseller ? 'Best selling' : newOnly ? 'New in' : q.trim() ? 'Search' : null
  const breadcrumbItems =
    crumbCurrent != null
      ? [
          { label: 'Home', to: '/' },
          { label: 'All products', to: '/products' },
          { label: crumbCurrent },
        ]
      : [
          { label: 'Home', to: '/' },
          { label: 'All products' },
        ]

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero title={heroTitle} description={heroDesc}>
        <PageHeroBreadcrumb delay={2} items={breadcrumbItems} />
      </PageHero>

      <section className="border-t border-slate-100 py-10 md:py-14 dark:border-slate-800">
        <div className="mx-auto grid w-full max-w-[1920px] gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-[minmax(0,260px)_1fr] md:gap-8 lg:gap-10">
          <CatalogSidebar variant="products" />

          <div className="min-w-0">
            <div className="flex flex-col gap-2 border-b border-slate-100 pb-6 sm:flex-row sm:items-end sm:justify-between dark:border-slate-800">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A36783]">Catalogue</p>
                <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{list.length} styles</p>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">Wholesale · MOQs on each product</p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {list.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>

            {list.length === 0 && (
              <div className="mt-12 rounded-2xl border border-dashed border-slate-200 bg-slate-50/80 px-6 py-14 text-center dark:border-slate-700 dark:bg-slate-900/30">
                <p className="text-slate-600 dark:text-slate-400">No matches — try another search or filter.</p>
                <Link
                  to="/products"
                  className="mt-4 inline-block text-sm font-bold uppercase tracking-wider text-[#A36783] hover:underline"
                >
                  Reset catalogue
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
