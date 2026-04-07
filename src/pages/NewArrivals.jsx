import { usePageTitle } from '../hooks/usePageTitle'
import { filterProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import CatalogSidebar from '../components/CatalogSidebar'

export default function NewArrivals() {
  usePageTitle('New Arrivals')
  const list = filterProducts({ newOnly: true })

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title="New arrivals"
        description="Latest styles on the line sheet — filter and search from the same panel as Products."
      >
        <PageHeroBreadcrumb delay={2} items={[{ label: 'Home', to: '/' }, { label: 'New arrivals' }]} />
      </PageHero>

      <section className="border-t border-slate-100 py-10 md:py-14 dark:border-slate-800">
        <div className="mx-auto grid w-full max-w-[1920px] gap-8 px-4 sm:px-6 lg:px-8 md:grid-cols-[minmax(0,260px)_1fr] md:gap-8 lg:gap-10">
          <CatalogSidebar variant="products" />
          <div className="min-w-0">
            <div className="border-b border-slate-100 pb-6 dark:border-slate-800">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A36783]">Fresh</p>
              <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{list.length} new styles</p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {list.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
