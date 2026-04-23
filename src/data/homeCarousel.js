/**
 * Home hero slides — images in /public/carousel/ (same assets as before).
 * `eyebrow` + `headline` mirror Ethletia-style hero hierarchy; `subtitle` is supporting copy.
 */
export const homeCarouselSlides = [
  {
    file: 'slide-1-fabric.jpg',
    eyebrow: 'Source with confidence',
    headline: 'Premium fabrics & knits',
    subtitle:
      'From yarn selection to final finish, we craft collections that feel luxury and perform at scale.',
  },
  {
    file: 'slide-2-sewing.jpg',
    eyebrow: 'Line-ready construction',
    headline: 'Precision stitching',
    subtitle:
      'Every seam is engineered for comfort, durability, and that elevated retail-first look.',
  },
  {
    file: 'slide-3-apparel.jpg',
    eyebrow: 'Street & active programs',
    headline: 'Silhouettes they remember',
    subtitle:
      'Trend-smart fits across hoodies, tees, and outerwear with clear MOQs and predictable lead times.',
  },
  {
    file: 'slide-4-production.jpg',
    eyebrow: 'Scale without surprises',
    headline: 'Built for bulk consistency',
    subtitle:
      'Approved samples translate into bulk production with fit, color, and construction integrity intact.',
  },
  {
    file: 'slide-5-studio.jpg',
    eyebrow: 'One partner end-to-end',
    headline: 'Concept to global delivery',
    subtitle:
      'Tech packs, grading, quality control, and dispatch handled as one seamless production system.',
  },
  {
    file: 'slide-6-showroom.png',
    eyebrow: 'Retail-ready execution',
    headline: 'Showroom-grade finishing',
    subtitle:
      'From curated racks to bulk dispatch, we deliver collections that look premium and ship reliably.',
  },
]

export function carouselImageUrl(file) {
  const b = import.meta.env.BASE_URL ?? '/'
  const prefix = b.endsWith('/') ? b : `${b}/`
  return `${prefix}carousel/${file}`
}
