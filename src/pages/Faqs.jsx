import { useMemo, useState } from 'react'
import { usePageSeo } from '../hooks/usePageSeo'
import { faqAnswerToPlainText, faqItems, faqSeoMeta } from '../data/faqs'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'

function FaqAnswerBody({ item }) {
  return (
    <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
      {(item.paragraphs ?? []).map((p) => (
        <p key={p}>{p}</p>
      ))}
      {item.list?.length ? (
        <ul className="list-disc space-y-2 pl-5 marker:text-[#D4AF37]">
          {item.list.map((li) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      ) : null}
      {(item.trailing ?? []).map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  )
}

export default function Faqs() {
  usePageSeo({
    title: faqSeoMeta.title,
    description: faqSeoMeta.description,
    canonicalPath: '/faqs',
    keywords: faqSeoMeta.keywords,
  })

  const [open, setOpen] = useState(-1)

  const faqJsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faqAnswerToPlainText(item),
        },
      })),
    }),
    [],
  )

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <PageHero
        title="Frequently asked questions"
        description="MOQ, sampling, production, customization, QC, shipping, and payments — answers for brands sourcing apparel manufacturing with WASITEX."
      >
        <PageHeroBreadcrumb items={[{ label: 'Home', to: '/' }, { label: 'FAQs' }]} />
      </PageHero>

      <section className="border-t border-slate-100 py-12 md:py-16 dark:border-slate-800">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2
            id="faq-page-heading"
            className="mb-8 text-2xl font-bold tracking-tight text-slate-900 md:text-[1.65rem] dark:text-white"
          >
            Manufacturing, MOQ &amp; production
          </h2>
          <div className="space-y-2 text-left">
            {faqItems.map((item, i) => {
              const isOpen = open === i
              return (
                <article
                  key={item.q}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900/40"
                >
                  <h3 className="m-0 text-base font-semibold leading-snug text-slate-900 dark:text-white">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition hover:bg-slate-50 dark:hover:bg-white/5"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      id={`faq-question-${i}`}
                      aria-controls={`faq-answer-${i}`}
                    >
                      <span>{item.q}</span>
                      <span className="shrink-0 text-lg font-bold text-[#D4AF37]" aria-hidden>
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </h3>
                  {isOpen ? (
                    <div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      className="border-t border-slate-200 px-5 py-4 dark:border-slate-700"
                    >
                      <FaqAnswerBody item={item} />
                    </div>
                  ) : null}
                </article>
              )
            })}
          </div>

          <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50/80 p-8 text-left dark:border-slate-700 dark:bg-slate-900/30">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Still have questions?</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              If you couldn&apos;t find what you need, reach the production desk directly.
            </p>
            <p className="mt-4 text-sm">
              <a href="mailto:info@wasitex.com" className="font-semibold text-[#D4AF37] hover:underline">
                info@wasitex.com
              </a>
            </p>
            <p className="mt-4 text-xs leading-relaxed text-slate-500 dark:text-slate-500">
              Factory 1 — Sialkot: Jay Ram Pur, Opp Eid Gah, Sialkot 51310
              <br />
              Factory 2 — Faisalabad: Raja Ghulam Rasool Nagar, Faisalabad 38000
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
