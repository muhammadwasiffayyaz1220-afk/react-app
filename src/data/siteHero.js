/**
 * Shared hero — Unsplash “design studio / tailor workspace” image
 * (https://unsplash.com/photos/...-0Gq_rv1iGdk), bundled as `/public/hero-design-studio.jpg`.
 */
const base = import.meta.env.BASE_URL ?? '/'
const normalizedBase = base.endsWith('/') ? base : `${base}/`

export const SITE_HERO_IMAGE = `${normalizedBase}hero-design-studio.jpg`

export const SITE_HERO_IMAGE_ALT =
  'Fashion design workspace with fabric, tools, and mannequin — tailor and textile studio'

/** Use on <img onError={...}> when remote product/category photos fail */
export function fallbackToHeroImage(ev) {
  const el = ev.currentTarget
  if (el.dataset.fallback === '1') return
  el.dataset.fallback = '1'
  el.src = SITE_HERO_IMAGE
}
