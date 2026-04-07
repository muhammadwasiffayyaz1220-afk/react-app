import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { blogPosts } from '../data/blogPosts'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import { fallbackToHeroImage } from '../data/siteHero.js'

export default function Blog() {
  usePageTitle('Blog')

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title="Blog"
        description="Manufacturing, quality, and operations — insights for brands sourcing from Pakistan."
      >
        <PageHeroBreadcrumb delay={2} items={[{ label: 'Home', to: '/' }, { label: 'Blog' }]} />
      </PageHero>

      <section className="border-t border-slate-100 py-16 md:py-24 dark:border-slate-800">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:border-[#A36783]/40 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/40"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      onError={fallbackToHeroImage}
                    />
                  </div>
                  <div className="p-5 text-left">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#A36783]">{post.category}</p>
                    <h2 className="mt-2 font-bold text-slate-900 group-hover:text-[#A36783] dark:text-white dark:group-hover:text-[#c9a0b5]">
                      {post.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                      {post.excerpt}
                    </p>
                    <p className="mt-3 text-xs text-slate-400 dark:text-slate-500">{post.publishedAt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
