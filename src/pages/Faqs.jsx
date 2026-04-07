import { useState } from 'react'
import { usePageTitle } from '../hooks/usePageTitle'
import { faqItems } from '../data/faqs'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'

export default function Faqs() {
  usePageTitle('FAQs')
  const [open, setOpen] = useState(0)

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title="Frequently asked questions"
        description="Orders, sampling, shipping, and how we work with B2B buyers — quick answers below."
      >
        <PageHeroBreadcrumb delay={2} items={[{ label: 'Home', to: '/' }, { label: 'FAQs' }]} />
      </PageHero>

      <section className="border-t border-slate-100 py-12 md:py-16 dark:border-slate-800">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="space-y-2 text-left">
            {faqItems.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900/40"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:text-white dark:hover:bg-white/5"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    {item.q}
                    <span className="shrink-0 text-lg font-bold text-[#A36783]">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-200 px-5 py-4 text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:text-slate-400">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50/80 p-8 text-left dark:border-slate-700 dark:bg-slate-900/30">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Still have questions?</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              If you couldn&apos;t find what you need, reach the production desk directly.
            </p>
            <p className="mt-4 text-sm">
              <a href="mailto:info@4texinternational.com" className="font-semibold text-[#A36783] hover:underline">
                info@4texinternational.com
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
