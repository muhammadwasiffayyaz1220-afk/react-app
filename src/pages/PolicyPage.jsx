import { usePageTitle } from '../hooks/usePageTitle'
import { policies } from '../data/policies'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'
import NotFound from './NotFound'

export default function PolicyPage({ kind }) {
  const doc = policies[kind]

  usePageTitle(doc?.title ?? 'Policy')

  if (!doc) return <NotFound />

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title={doc.title}
        description="Legal information for visitors and wholesale partners using 4tex International."
      >
        <PageHeroBreadcrumb delay={2} items={[{ label: 'Home', to: '/' }, { label: doc.title }]} />
      </PageHero>

      <section className="border-t border-slate-100 py-12 md:py-16 dark:border-slate-800">
        <div className="mx-auto max-w-3xl px-4 text-left md:px-6">
          {doc.updated && <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{doc.updated}</p>}
          <div className={`space-y-6 leading-relaxed text-slate-600 dark:text-slate-400 ${doc.updated ? 'mt-6' : ''}`}>
            {doc.blocks.map((b, i) => {
              if (b.type === 'h2')
                return (
                  <h2 key={i} className="pt-4 text-xl font-bold text-slate-900 dark:text-white">
                    {b.text}
                  </h2>
                )
              if (b.type === 'p') return <p key={i}>{b.text}</p>
              if (b.type === 'ul')
                return (
                  <ul key={i} className="list-disc space-y-2 pl-5">
                    {b.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )
              return null
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
