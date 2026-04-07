/**
 * Home page carousel — images in /public/carousel/ (Unsplash: textile, sewing, apparel, production, studio).
 */
export const homeCarouselSlides = [
  {
    file: 'slide-1-fabric.jpg',
    title: 'Where premium textiles become iconic labels',
    subtitle: 'From yarn selection to final finish, we craft collections that feel luxury and perform at scale.',
  },
  {
    file: 'slide-2-sewing.jpg',
    title: 'Precision stitching, runway-level finishing',
    subtitle: 'Every seam is engineered for comfort, durability, and that elevated retail-first look.',
  },
  {
    file: 'slide-3-apparel.jpg',
    title: 'Silhouettes your customers instantly remember',
    subtitle: 'Trend-smart fits across hoodies, tees, and outerwear with clear MOQs and predictable lead times.',
  },
  {
    file: 'slide-4-production.jpg',
    title: 'Built to scale, designed to stay consistent',
    subtitle: 'Approved samples translate into bulk production with fit, color, and construction integrity intact.',
  },
  {
    file: 'slide-5-studio.jpg',
    title: 'One partner from concept to global delivery',
    subtitle: 'Tech packs, grading, quality control, and dispatch handled as one seamless production system.',
  },
  {
    file: 'slide-6-showroom.png',
    title: 'Showroom-ready looks, factory-backed execution',
    subtitle: 'From curated racks to bulk dispatch, we deliver collections that look premium and ship reliably.',
  },
]

export function carouselImageUrl(file) {
  const b = import.meta.env.BASE_URL ?? '/'
  const prefix = b.endsWith('/') ? b : `${b}/`
  return `${prefix}carousel/${file}`
}
