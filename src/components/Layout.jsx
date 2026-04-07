import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import CornerDecor from './CornerDecor'
import { categoryRoots, buildShopPath } from '../data/categoryTree'
import { countForCatMain } from '../data/products'
import {
  SITE_EMAIL,
  SITE_LOGO_LETTER,
  SITE_NAME,
  SITE_WHATSAPP_DISPLAY,
  SITE_WHATSAPP_URL,
  SITE_WORDMARK_FIRST,
  SITE_WORDMARK_SECOND,
} from '../data/siteBrand'

export default function Layout() {
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [megaOpen, setMegaOpen] = useState(false)
  const [searchQ, setSearchQ] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const headerRef = useRef(null)
  const [mobileCatsOpen, setMobileCatsOpen] = useState(false)

  useEffect(() => {
    const onDoc = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) setMegaOpen(false)
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  const submitSearch = (e) => {
    e.preventDefault()
    const q = searchQ.trim()
    navigate(q ? `/products?q=${encodeURIComponent(q)}` : '/products')
    setSearchOpen(false)
    setSearchQ('')
  }

  const navClass = ({ isActive }) =>
    `relative rounded-md px-1.5 py-1 text-sm font-medium transition ${
      isActive
        ? 'text-[#f0d4e0] after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[#A36783]'
        : 'text-white/85 hover:bg-white/[0.06] hover:text-white'
    }`

  return (
    <div className="relative min-h-screen bg-white font-sans text-slate-900 antialiased dark:!bg-white dark:text-slate-900">
      <CornerDecor />

      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b border-slate-800/90 bg-[#0f2238]/98 shadow-lg shadow-black/20 backdrop-blur-md backdrop-saturate-150 supports-[backdrop-filter]:bg-[#0f2238]/92"
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="border-b border-white/10 bg-[#112a45]">
          <div className="mx-auto hidden max-w-6xl items-center justify-between px-4 py-2 text-xs text-white/75 md:flex md:px-6">
            <div className="flex items-center gap-6">
              <a href={SITE_WHATSAPP_URL} className="transition hover:text-white" target="_blank" rel="noopener noreferrer">
                WhatsApp {SITE_WHATSAPP_DISPLAY}
              </a>
              <a href={`mailto:${SITE_EMAIL}`} className="transition hover:text-white">
                {SITE_EMAIL}
              </a>
            </div>
            <p>Jay Ram Pur, Opp Eid Gah, Sialkot 51310</p>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A36783]/50 bg-[#132a43] text-lg font-black text-[#cf9bb4]">
              {SITE_LOGO_LETTER}
            </span>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#cf9bb4]">{SITE_WORDMARK_FIRST}</span>
              <span className="text-white">{SITE_WORDMARK_SECOND}</span>
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-8 lg:flex">
            <NavLink to="/" className={navClass} onMouseEnter={() => setMegaOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={navClass} onMouseEnter={() => setMegaOpen(false)}>
              About Us
            </NavLink>

            <div className="relative" onMouseEnter={() => setMegaOpen(true)}>
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium ${
                  megaOpen ? 'text-[#A36783]' : 'text-white/85 hover:text-white'
                }`}
                aria-expanded={megaOpen}
                aria-haspopup="true"
                onClick={() => setMegaOpen((v) => !v)}
              >
                Categories
                <svg className={`h-4 w-4 transition ${megaOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <NavLink to="/faqs" className={navClass} onMouseEnter={() => setMegaOpen(false)}>
              FAQs
            </NavLink>
            <NavLink to="/contact" className={navClass} onMouseEnter={() => setMegaOpen(false)}>
              Contact Us
            </NavLink>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              {searchOpen ? (
                <form onSubmit={submitSearch} className="flex items-center gap-1">
                  <input
                    autoFocus
                    value={searchQ}
                    onChange={(e) => setSearchQ(e.target.value)}
                    placeholder="Search products…"
                    className="w-44 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-900 outline-none focus:border-[#A36783]/50 md:w-56 dark:border-white/15 dark:bg-[#1c2129] dark:text-white"
                  />
                  <button type="submit" className="rounded-full p-2 text-[#c99cb2] hover:bg-white/10" aria-label="Search">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="rounded-full p-2.5 text-white/75 hover:bg-white/10 hover:text-[#cf9bb4]"
                  aria-label="Open search"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              )}
            </div>
            <button
              type="button"
              className="rounded-lg border border-white/20 p-2 text-white lg:hidden"
              aria-label="Menu"
              onClick={() => setMobileOpen(true)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {megaOpen && (
          <div
            className="absolute inset-x-0 top-full z-50 hidden max-h-[min(78vh,calc(100dvh-5rem))] overflow-y-auto border-t border-slate-200/90 bg-white shadow-[0_24px_60px_-12px_rgba(15,23,42,0.25)] lg:block dark:border-slate-200 dark:bg-white"
            onMouseEnter={() => setMegaOpen(true)}
          >
            <div className="mx-auto max-w-7xl px-6 py-8">
              <div className="flex flex-col gap-4 border-b border-slate-200/80 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A36783]">Catalogue</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">Shop by category</p>
                  <p className="mt-1 text-sm text-slate-500">All departments and product types — same structure as the shop.</p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3 text-sm">
                  <Link
                    to="/categories"
                    className="font-semibold text-[#A36783] hover:underline"
                    onClick={() => setMegaOpen(false)}
                  >
                    Category overview
                  </Link>
                  <span className="hidden text-slate-300 sm:inline">|</span>
                  <Link
                    to="/products"
                    className="font-semibold text-slate-600 hover:text-[#A36783]"
                    onClick={() => setMegaOpen(false)}
                  >
                    All products
                  </Link>
                </div>
              </div>
              <div className="mt-8 grid gap-10 lg:grid-cols-3 lg:gap-8">
                {categoryRoots.map((root) => (
                  <div
                    key={root.slug}
                    className="min-w-0 border-t border-slate-100 pt-6 first:border-t-0 first:pt-0 lg:border-t-0 lg:border-l lg:border-slate-100 lg:pt-0 lg:pl-8 first:lg:border-l-0 first:lg:pl-0"
                  >
                    <Link
                      to={buildShopPath(root.slug)}
                      className="group block"
                      onClick={() => setMegaOpen(false)}
                    >
                      <span className="text-base font-bold text-slate-900 group-hover:text-[#A36783]">{root.name}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{root.tagline}</span>
                      <span className="mt-1 inline-block text-xs font-semibold tabular-nums text-slate-400">
                        {countForCatMain(root.slug)} styles
                      </span>
                    </Link>
                    <div className="mt-5 space-y-5">
                      {root.children.map((mid) => (
                        <div key={mid.slug}>
                          <Link
                            to={buildShopPath(root.slug, mid.slug)}
                            className="text-[13px] font-bold uppercase tracking-wide text-slate-800 hover:text-[#A36783]"
                            onClick={() => setMegaOpen(false)}
                          >
                            {mid.name}
                          </Link>
                          <ul className="mt-2 space-y-0.5">
                            {mid.children.map((leaf) => (
                              <li key={leaf.slug}>
                                <Link
                                  to={buildShopPath(root.slug, mid.slug, leaf.slug)}
                                  className="block rounded-md py-0.5 pl-1 text-[13px] leading-snug text-slate-600 transition hover:bg-slate-50 hover:text-[#A36783]"
                                  onClick={() => setMegaOpen(false)}
                                >
                                  {leaf.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button type="button" className="absolute inset-0 bg-black/70" aria-label="Close" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 flex h-full w-[min(100%,24rem)] flex-col border-l border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#1c2129]">
            <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-white/10">
              <span className="font-bold text-slate-900 dark:text-white">Menu</span>
              <button
                type="button"
                className="rounded-full p-2 text-slate-800 hover:bg-slate-100 dark:text-white dark:hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <NavLink to="/" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-800 dark:text-white">
                Home
              </NavLink>
              <NavLink to="/about" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-slate-800 dark:text-white">
                About Us
              </NavLink>
              <button
                type="button"
                className="mt-4 flex w-full items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5 text-left text-sm font-bold text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white"
                onClick={() => setMobileCatsOpen((v) => !v)}
                aria-expanded={mobileCatsOpen}
              >
                <span className="text-[#A36783]">Categories</span>
                <svg
                  className={`h-4 w-4 shrink-0 transition ${mobileCatsOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileCatsOpen && (
                <div className="mt-2 max-h-[55vh] space-y-4 overflow-y-auto rounded-xl border border-slate-100 bg-slate-50/90 p-3 dark:border-white/10 dark:bg-white/5">
                  {categoryRoots.map((root) => (
                    <div key={root.slug} className="border-b border-slate-200/80 pb-3 last:border-0 last:pb-0 dark:border-white/10">
                      <Link
                        to={buildShopPath(root.slug)}
                        className="block text-sm font-bold text-slate-900 hover:text-[#A36783] dark:text-white"
                        onClick={() => setMobileOpen(false)}
                      >
                        {root.name}
                      </Link>
                      <p className="mt-0.5 text-[11px] text-slate-500 dark:text-white/50">{root.tagline}</p>
                      <div className="mt-2 space-y-3 pl-2">
                        {root.children.map((mid) => (
                          <div key={mid.slug}>
                            <Link
                              to={buildShopPath(root.slug, mid.slug)}
                              className="text-xs font-bold uppercase tracking-wide text-slate-800 hover:text-[#A36783] dark:text-white/90"
                              onClick={() => setMobileOpen(false)}
                            >
                              {mid.name}
                            </Link>
                            <ul className="mt-1 space-y-0.5 border-l border-slate-200 pl-2 dark:border-white/15">
                              {mid.children.map((leaf) => (
                                <li key={leaf.slug}>
                                  <Link
                                    to={buildShopPath(root.slug, mid.slug, leaf.slug)}
                                    className="block py-0.5 text-xs text-slate-600 hover:text-[#A36783] dark:text-white/65"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {leaf.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              <Link
                to="/categories"
                className="mt-3 block text-sm font-semibold text-[#A36783]"
                onClick={() => setMobileOpen(false)}
              >
                Category overview →
              </Link>
              <Link
                to="/products"
                className="mt-1 block text-sm text-slate-600 dark:text-white/70"
                onClick={() => setMobileOpen(false)}
              >
                Full catalogue
              </Link>
              <NavLink to="/faqs" onClick={() => setMobileOpen(false)} className="mt-4 block py-2 text-sm text-slate-800 dark:text-white">
                FAQs
              </NavLink>
              <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-slate-800 dark:text-white">
                Contact Us
              </NavLink>
              <div className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-500 dark:border-white/10 dark:text-white/50">
                <NavLink to="/blog" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-800 dark:text-white">
                  Blog
                </NavLink>
                <NavLink to="/order-process" onClick={() => setMobileOpen(false)} className="block py-1 text-slate-800 dark:text-white">
                  Order Process
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="relative z-10 min-h-[60vh] bg-white dark:!bg-white">
        <Outlet />
      </main>

      <footer className="footer-premium relative z-20 mt-24 overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#0f2238] via-[#0c1b2e] to-[#081420] text-slate-300">
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#A36783]/20 blur-[100px]" aria-hidden />
        <div className="pointer-events-none absolute -left-24 bottom-40 h-56 w-56 rounded-full bg-[#4a6fa5]/15 blur-[90px]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#A36783]/70 to-transparent" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 md:px-6">
          <div className="sm:col-span-2 lg:col-span-1 lg:max-w-sm">
            <Link to="/" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#A36783]/45 bg-[#132a43] text-xl font-black text-[#cf9bb4] shadow-lg shadow-black/20 transition group-hover:border-[#A36783]/70 group-hover:text-[#f0d4e0]">
                {SITE_LOGO_LETTER}
              </span>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-[#cf9bb4]">{SITE_WORDMARK_FIRST}</span>
                <span className="text-white">{SITE_WORDMARK_SECOND}</span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Active wear, casual wear & sports wear — custom manufacturing and ready-to-ship streetwear for modern
              brands.
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#e8c4d4] transition hover:text-white"
            >
              <span className="h-px w-8 bg-[#A36783]/60" aria-hidden />
              {SITE_EMAIL}
            </a>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a0b5]">Shop</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link className="footer-premium-link text-slate-300" to="/products">
                  All Products
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/categories">
                  Categories
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/shop/active-wear">
                  Active Wear
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/shop/casual-wear">
                  Casual Wear
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/shop/sports-wear">
                  Sports Wear
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a0b5]">Company</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link className="footer-premium-link text-slate-300" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/order-process">
                  Order Process
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/faqs">
                  FAQs
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#c9a0b5]">Legal</p>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <Link className="footer-premium-link text-slate-300" to="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/terms-of-service">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link className="footer-premium-link text-slate-300" to="/shipping-policy">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-black/25 px-4 py-10 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3 md:gap-10 md:items-start">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A36783]/90">Factories</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                <span className="font-semibold text-slate-300">Sialkot</span>
                <br />
                Jay Ram Pur, Opp Eid Gah, Sialkot 51310
              </p>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                <span className="font-semibold text-slate-300">Faisalabad</span>
                <br />
                Raja Ghulam Rasool Nagar, Faisalabad 38000
              </p>
            </div>
            <div className="md:text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A36783]/90">Production desk</p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-3 inline-block text-base font-semibold text-[#f0d4e0] underline decoration-[#A36783]/50 underline-offset-4 transition hover:text-white hover:decoration-[#A36783]"
              >
                {SITE_EMAIL}
              </a>
              <a
                href={SITE_WHATSAPP_URL}
                className="mt-3 block text-sm font-medium text-slate-400 transition hover:text-[#f0d4e0]"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {SITE_WHATSAPP_DISPLAY}
              </a>
            </div>
            <div className="md:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A36783]/90">{SITE_NAME}</p>
              <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.25em] text-slate-500">
                © {new Date().getFullYear()} All rights reserved
              </p>
              <p className="mt-2 text-xs text-slate-500">Built for B2B apparel programmes.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
