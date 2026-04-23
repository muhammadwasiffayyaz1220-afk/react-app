import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion as M, useReducedMotion } from 'framer-motion'
import { Link, NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import { pageTransitionProps } from '../motion/presets'
import CornerDecor from './CornerDecor'
import { categoryRoots, buildShopPath } from '../data/categoryTree'
import { countForCatMain } from '../data/products'
import {
  SITE_EMAIL,
  SITE_LOGO_IMAGE,
  SITE_NAME,
  SITE_WHATSAPP_DISPLAY,
  SITE_WHATSAPP_URL,
  SITE_WORDMARK_FIRST,
  SITE_WORDMARK_SECOND,
} from '../data/siteBrand'

export default function Layout() {
  const location = useLocation()
  const navigate = useNavigate()
  const reduceMotion = useReducedMotion()
  const pageMotion = pageTransitionProps(reduceMotion)
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
    `relative rounded-md px-1.5 py-1 text-sm font-medium transition duration-300 ease-out ${
      isActive
        ? 'text-[#0F172A] after:absolute after:inset-x-1 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-[#D4AF37]'
        : 'text-[#334155] hover:bg-slate-100 hover:text-[#D4AF37]'
    }`

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] font-sans text-slate-900 antialiased dark:!bg-[#FFFFFF] dark:text-slate-900">
      <CornerDecor />
      <ScrollToTop />

      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b border-slate-200/90 bg-white shadow-sm shadow-slate-900/[0.04]"
        onMouseLeave={() => setMegaOpen(false)}
      >
        <div className="border-b border-white/10 bg-[#0F172A]">
          <div className="mx-auto flex max-w-6xl flex-col gap-1.5 px-4 py-2.5 text-[11px] text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:text-xs md:px-6">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a
                href={SITE_WHATSAPP_URL}
                className="font-medium text-slate-200 transition duration-300 ease-out hover:text-[#D4AF37]"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {SITE_WHATSAPP_DISPLAY}
              </a>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="font-medium text-slate-200 transition duration-300 ease-out hover:text-[#D4AF37]"
              >
                {SITE_EMAIL}
              </a>
            </div>
            <p className="text-slate-400 sm:text-right">Jay Ram Pur, Opp Eid Gah, Sialkot 51310</p>
          </div>
        </div>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 md:px-6 md:py-4">
          <Link
            to="/"
            aria-label={`${SITE_NAME} — Home`}
            className="nav-brand-lockup nav-brand-lockup--light group flex shrink-0 items-center gap-3.5 rounded-xl py-0.5 pr-0.5 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-white md:gap-4"
          >
            <span className="nav-brand-mark relative isolate flex h-16 min-w-[4rem] shrink-0 items-center justify-center md:h-[4.25rem] md:min-w-[4.5rem]">
              <img
                src={SITE_LOGO_IMAGE}
                alt=""
                width={220}
                height={72}
                className="relative z-[1] h-11 w-auto max-h-[3.15rem] max-w-[min(14rem,54vw)] object-contain object-center md:h-[3.35rem] md:max-h-[3.5rem] md:max-w-[min(16rem,40vw)]"
                decoding="async"
                fetchPriority="high"
              />
            </span>
            <span className="grid w-max max-w-full min-w-0 justify-items-stretch">
              <span className="nav-brand-wordmark col-start-1 row-start-1 justify-self-start text-[1.2rem] uppercase leading-none md:text-[1.45rem]">
                <span className="nav-brand-wordmark-text">
                  {SITE_WORDMARK_FIRST}
                  {SITE_WORDMARK_SECOND}
                </span>
              </span>
              <span className="nav-brand-wordmark-line col-start-1 row-start-2 min-w-0" aria-hidden />
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
                className={`flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm font-medium transition duration-300 ease-out ${
                  megaOpen
                    ? 'border-[#D4AF37] bg-[#D4AF37]/12 text-[#0F172A]'
                    : 'border-slate-200 text-[#0F172A] hover:border-[#D4AF37]/60 hover:bg-[#D4AF37]/8 hover:text-[#0F172A]'
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
                    className="w-44 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-[#0F172A] outline-none placeholder:text-slate-400 focus:border-[#D4AF37] focus:bg-white focus:ring-1 focus:ring-[#D4AF37]/30 md:w-56"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-[#D4AF37] p-2 text-[#0F172A] shadow-sm transition duration-300 ease-out hover:bg-[#B8962E] hover:shadow-[0_0_20px_-4px_rgba(212,175,55,0.45)] active:scale-[0.97]"
                    aria-label="Search"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </form>
              ) : (
                <button
                  type="button"
                  onClick={() => setSearchOpen(true)}
                  className="rounded-full bg-[#D4AF37] p-2.5 text-[#0F172A] shadow-sm transition duration-300 ease-out hover:bg-[#B8962E] hover:shadow-[0_0_20px_-4px_rgba(212,175,55,0.45)] active:scale-[0.97]"
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
              className="rounded-lg bg-[#D4AF37] p-2 text-[#0F172A] shadow-sm transition duration-300 ease-out hover:bg-[#B8962E] hover:shadow-[0_0_20px_-4px_rgba(212,175,55,0.45)] active:scale-[0.97] lg:hidden"
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
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Catalogue</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">Shop by category</p>
                  <p className="mt-1 text-sm text-slate-500">All departments and product types — same structure as the shop.</p>
                </div>
                <div className="flex shrink-0 flex-wrap gap-3 text-sm">
                  <Link
                    to="/categories"
                    className="font-semibold text-[#D4AF37] hover:underline"
                    onClick={() => setMegaOpen(false)}
                  >
                    Category overview
                  </Link>
                  <span className="hidden text-slate-300 sm:inline">|</span>
                  <Link
                    to="/products"
                    className="font-semibold text-slate-600 hover:text-[#D4AF37]"
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
                      <span className="text-base font-bold text-slate-900 group-hover:text-[#D4AF37]">{root.name}</span>
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
                            className="text-[13px] font-bold uppercase tracking-wide text-[#0F172A] hover:text-[#D4AF37]"
                            onClick={() => setMegaOpen(false)}
                          >
                            {mid.name}
                          </Link>
                          <ul className="mt-2 space-y-0.5">
                            {mid.children.map((leaf) => (
                              <li key={leaf.slug}>
                                <Link
                                  to={buildShopPath(root.slug, mid.slug, leaf.slug)}
                                  className="block rounded-md py-0.5 pl-1 text-[13px] leading-snug text-[#334155] transition hover:bg-slate-50 hover:text-[#D4AF37]"
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
                <span className="text-[#D4AF37]">Categories</span>
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
                        className="block text-sm font-bold text-slate-900 hover:text-[#D4AF37] dark:text-white"
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
                              className="text-xs font-bold uppercase tracking-wide text-slate-800 hover:text-[#D4AF37] dark:text-white/90"
                              onClick={() => setMobileOpen(false)}
                            >
                              {mid.name}
                            </Link>
                            <ul className="mt-1 space-y-0.5 border-l border-slate-200 pl-2 dark:border-white/15">
                              {mid.children.map((leaf) => (
                                <li key={leaf.slug}>
                                  <Link
                                    to={buildShopPath(root.slug, mid.slug, leaf.slug)}
                                    className="block py-0.5 text-xs text-slate-600 hover:text-[#D4AF37] dark:text-white/65"
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
                className="mt-3 block text-sm font-semibold text-[#D4AF37]"
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

      <main className="relative z-10 min-h-[60vh] bg-[#FFFFFF] dark:!bg-[#FFFFFF]">
        <AnimatePresence mode="wait">
          <M.div
            key={`${location.pathname}${location.search}`}
            className="min-h-[60vh]"
            {...pageMotion}
          >
            <Outlet />
          </M.div>
        </AnimatePresence>
      </main>

      <footer className="footer-premium relative z-20 mt-24 overflow-hidden border-t border-white/10 bg-[#0F172A] text-slate-300">
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-[#D4AF37]/20 blur-[100px]" aria-hidden />
        <div className="pointer-events-none absolute -left-24 bottom-40 h-56 w-56 rounded-full bg-[#4a6fa5]/15 blur-[90px]" aria-hidden />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.14) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10 md:px-6">
          <div className="sm:col-span-2 lg:col-span-1 lg:max-w-sm">
            <Link
              to="/"
              aria-label={`${SITE_NAME} — Home`}
              className="nav-brand-lockup group inline-flex max-w-full items-center gap-3.5 rounded-xl py-0.5 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F172A] md:gap-4"
            >
              <span className="nav-brand-mark relative isolate flex h-16 min-w-[4rem] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/25 bg-white px-3 py-2 md:h-[4.25rem] md:px-4 md:py-2.5">
                <img
                  src={SITE_LOGO_IMAGE}
                  alt=""
                  width={220}
                  height={72}
                  className="relative z-[1] h-11 w-auto max-h-[3.15rem] max-w-[12rem] object-contain object-center md:h-[3.35rem] md:max-h-[3.5rem] md:max-w-[14rem]"
                  decoding="async"
                />
              </span>
              <span className="grid w-max max-w-full min-w-0 justify-items-stretch">
                <span className="nav-brand-wordmark col-start-1 row-start-1 justify-self-start text-xl uppercase leading-none md:text-2xl">
                  <span className="nav-brand-wordmark-text">
                    {SITE_WORDMARK_FIRST}
                    {SITE_WORDMARK_SECOND}
                  </span>
                </span>
                <span className="nav-brand-wordmark-line col-start-1 row-start-2 min-w-0" aria-hidden />
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Active wear, casual wear & sports wear — custom manufacturing and ready-to-ship streetwear for modern
              brands.
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#FFFFFF] transition duration-300 ease-out hover:text-[#D4AF37]"
            >
              <span className="h-px w-8 bg-[#D4AF37]/60" aria-hidden />
              {SITE_EMAIL}
            </a>
          </div>

          <div className="lg:border-l lg:border-white/10 lg:pl-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Shop</p>
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
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Company</p>
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
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">Legal</p>
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
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]/90">Factories</p>
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
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]/90">Production desk</p>
              <a
                href={`mailto:${SITE_EMAIL}`}
                className="mt-3 inline-block text-base font-semibold text-[#FFFFFF] underline decoration-[#D4AF37]/50 underline-offset-4 transition hover:text-white hover:decoration-[#D4AF37]"
              >
                {SITE_EMAIL}
              </a>
              <a
                href={SITE_WHATSAPP_URL}
                className="mt-3 block text-sm font-medium text-slate-400 transition hover:text-[#FFFFFF]"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp {SITE_WHATSAPP_DISPLAY}
              </a>
            </div>
            <div className="md:text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]/90">{SITE_NAME}</p>
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
