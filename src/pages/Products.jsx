import { useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import { productCollections } from '../data/products'
import { usePageSeo } from '../hooks/usePageSeo'

export default function Products() {
  const totalStyles = useMemo(() => productCollections.reduce((sum, section) => sum + section.items.length, 0), [])

  usePageSeo({
    title: 'Product Collections',
    description:
      'Browse folder-wise product collections from our latest apparel catalog with complete images, category titles, and wholesale-ready product descriptions.',
    canonicalPath: '/products',
    keywords:
      'apparel product catalog, wholesale clothing images, sportswear collection, casual wear listing, private label products',
  })

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title="All Product Collections"
        description="Folder-wise catalogue listing with complete product images, titles, descriptions, and SEO-ready metadata."
      >
        <PageHeroBreadcrumb items={[{ label: 'Home', to: '/' }, { label: 'All products' }]} />
      </PageHero>

      <section className="border-t border-slate-100 py-10 md:py-14 dark:border-slate-800">
        <div className="mx-auto w-full max-w-[1920px] space-y-10 px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200/80 bg-slate-50/70 px-5 py-4 dark:border-slate-700/70 dark:bg-slate-900/40">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Catalogue Overview</p>
            <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white">
              {productCollections.length} folders · {totalStyles} styles
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Previous manual listing removed. Current listing is generated from `assets/imagesss` folders.
            </p>
          </div>

          {productCollections.map((section) => (
            <div key={section.key} className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 sm:p-6 dark:border-slate-700/70 dark:bg-slate-900/55">
              <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-slate-100 pb-5 dark:border-slate-800">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                    {section.title}
                  </p>
                  <p className="mt-1 text-lg font-bold text-slate-900 dark:text-white">{section.items.length} styles</p>
                  <p className="mt-1 max-w-3xl text-sm text-slate-600 dark:text-slate-400">{section.description}</p>
                </div>
                <span
                  className="rounded-full border border-[#D4AF37]/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]"
                >
                  {section.folderName}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
                {section.items.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
