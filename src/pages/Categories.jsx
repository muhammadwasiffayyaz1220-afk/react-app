import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { categoryRoots, buildShopPath } from '../data/categoryTree'
import { getRootLineImage } from '../data/categoryVisuals'
import { countForCatMain } from '../data/products'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import { fallbackToHeroImage } from '../data/siteHero.js'

export default function Categories() {
  usePageTitle('Product Categories')

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title="All Categories"
        description="Three main lines — each opens into departments and detailed product types (polo, kits, hoodies, and more)."
      >
        <PageHeroBreadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Categories' }]} />
      </PageHero>

      <section className="border-t border-slate-100 py-16 md:py-24 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {categoryRoots.map((c) => {
              const n = countForCatMain(c.slug)
              const deptCount = c.children.length
              return (
                <Link
                  key={c.slug}
                  to={buildShopPath(c.slug)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-[#D4AF37]/40 hover:shadow-lg hover:shadow-[#D4AF37]/10 dark:border-slate-700 dark:bg-slate-900/40"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <img
                      src={getRootLineImage(c.slug)}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      loading="lazy"
                      onError={fallbackToHeroImage}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <p className="absolute left-5 top-5 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#D4AF37] shadow-sm backdrop-blur-sm dark:bg-slate-900/85">
                      Line
                    </p>
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#D4AF37] dark:text-white dark:group-hover:text-[#D4AF37]">
                      {c.name}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{c.tagline}</p>
                    <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-500">
                      {deptCount} departments · {n} catalogue styles
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {c.children.slice(0, 5).map((mid) => (
                        <span
                          key={mid.slug}
                          className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                        >
                          {mid.name}
                        </span>
                      ))}
                      {deptCount > 5 && (
                        <span className="text-xs text-slate-400 dark:text-slate-500">+{deptCount - 5} more</span>
                      )}
                    </ul>
                    <span className="mt-8 text-sm font-bold uppercase tracking-wider text-[#D4AF37]">Explore →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
