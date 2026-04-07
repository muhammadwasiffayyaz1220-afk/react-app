import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'

export default function NotFound() {
  usePageTitle('404')

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero title="Page not found" description="The link may be broken or the page was removed.">
        <PageHeroBreadcrumb delay={2} items={[{ label: 'Home', to: '/' }, { label: '404' }]} />
      </PageHero>

      <section className="border-t border-slate-100 py-16 text-center dark:border-slate-800">
        <div className="mx-auto max-w-lg px-4 md:px-6">
          <p className="text-5xl font-black text-[#A36783]/90">404</p>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Try the menu above or return to the homepage to keep browsing.
          </p>
          <Link
            to="/"
            className="mt-10 inline-block rounded-md bg-[#A36783] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-md shadow-[#A36783]/20 transition hover:bg-[#8a5570]"
          >
            Back to home
          </Link>
        </div>
      </section>
    </div>
  )
}
