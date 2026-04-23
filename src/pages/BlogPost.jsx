import { Link, useParams } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import { getPostBySlug } from '../data/blogPosts'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import { fallbackToHeroImage } from '../data/siteHero.js'
import NotFound from './NotFound'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)

  usePageTitle(post?.title ?? 'Blog')

  if (!post) return <NotFound />

  const extra = [
    post.excerpt,
    'Our teams work with mills and sewing floors that are audited against agreed social and quality benchmarks. That consistency is what lets European brands plan launches with confidence.',
    'If you are comparing manufacturers, ask about inline QC, AQL levels, and how revisions are handled after a sample round — those details usually predict how smooth bulk will go.',
    'For bespoke programs, we recommend locking fabric approvals before grading all sizes, so bulk dye lots stay uniform across the full size curve.',
  ]

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero title={post.title} description={`${post.publishedAt} · ${post.author}`}>
        <PageHeroBreadcrumb
          items={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }, { label: 'Article' }]}
        />
      </PageHero>

      <article className="border-t border-slate-100 py-12 md:py-16 dark:border-slate-800">
        <div className="mx-auto max-w-3xl px-4 text-left md:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{post.category}</p>
          <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 shadow-sm dark:border-slate-700">
            <img
              src={post.image}
              alt=""
              className="aspect-video w-full object-cover"
              onError={fallbackToHeroImage}
            />
          </div>
          <div className="mt-10 space-y-5 leading-relaxed text-slate-600 dark:text-slate-400">
            {extra.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300"
              >
                #{t}
              </span>
            ))}
          </div>
          <Link
            to="/blog"
            className="mt-12 inline-flex items-center text-sm font-bold uppercase tracking-wider text-[#D4AF37] hover:underline"
          >
            ← Back to blog
          </Link>
        </div>
      </article>
    </div>
  )
}
