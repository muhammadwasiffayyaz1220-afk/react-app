import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'
import PageHero, { PageHeroBreadcrumb } from '../components/PageHero'

const steps = [
  {
    n: 1,
    title: 'Browse & select',
    body: 'Browse collections and line sheets. Shortlist styles and note MOQs, colours, and destination market.',
  },
  {
    n: 2,
    title: 'Enquiry & quote',
    body: 'Contact us with quantities and timelines. We return a structured quote covering fabric tier, sampling, and bulk.',
  },
  {
    n: 3,
    title: 'Sampling',
    body: 'Approve tech packs and fabrics. We produce samples for fit and construction sign-off before bulk.',
  },
  {
    n: 4,
    title: 'Review & confirm',
    body: 'Lock PO, payment terms, and delivery schedule. We issue a production window and inline QC plan.',
  },
  {
    n: 5,
    title: 'Bulk production',
    body: 'Cut, sew, wash, finish, and pack under agreed AQL checks. You receive milestone updates.',
  },
  {
    n: 6,
    title: 'Shipping',
    body: 'Carton marking and export docs aligned to EU/UK import needs. Tracking shared when the consignment leaves.',
  },
  {
    n: 7,
    title: 'Delivery & feedback',
    body: 'Receive and inspect. We support reorder programmes and seasonal amendments for the next drop.',
  },
]

export default function OrderProcess() {
  usePageTitle('Order Process')

  return (
    <div className="bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100">
      <PageHero
        title="Order process"
        description="How we move from first enquiry to delivered cartons — built for wholesale and OEM programmes."
      >
        <PageHeroBreadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Order process' }]} />
      </PageHero>

      <section className="border-t border-slate-100 py-12 md:py-16 dark:border-slate-800">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <ol className="space-y-10 text-left">
            {steps.map((s) => (
              <li key={s.n} className="flex gap-5 border-b border-slate-100 pb-10 last:border-0 dark:border-slate-800">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-lg font-bold text-[#0F172A] shadow-md shadow-[#D4AF37]/25">
                  {s.n}
                </span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">{s.title}</h2>
                  <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 rounded-xl border border-slate-200 bg-slate-50/80 p-8 text-left dark:border-slate-700 dark:bg-slate-900/30">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Need help?</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              Our team can walk you through MOQs, sampling costs, and lead times for your programme.
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
            <Link
              to="/contact"
              className="mt-6 inline-block text-sm font-bold uppercase tracking-wider text-[#D4AF37] hover:underline"
            >
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
