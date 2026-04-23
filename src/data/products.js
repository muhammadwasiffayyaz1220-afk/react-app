const imageModules = import.meta.glob('../assets/imagesss/**/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

const folderMeta = {
  'american football': {
    catMain: 'sports-wear',
    catMid: 'team-uniforms',
    catLeaf: 'american-football-uniforms',
    title: 'American Football Uniform',
    description: 'Game-day fit with strong paneling and team-ready detailing for custom club programs.',
    color: '#B45309',
  },
  'base football': {
    catMain: 'sports-wear',
    catMid: 'team-uniforms',
    catLeaf: 'baseball-uniforms',
    title: 'Baseball Uniform',
    description: 'Breathable baseball silhouettes built for training, matches, and private-label production.',
    color: '#1D4ED8',
  },
  'basket football': {
    catMain: 'sports-wear',
    catMid: 'team-uniforms',
    catLeaf: 'basketball-uniforms',
    title: 'Basketball Uniform',
    description: 'Lightweight basketball kit options with motion-friendly cuts and sublimation readiness.',
    color: '#EA580C',
  },
  bras: {
    catMain: 'active-wear',
    catMid: 'tops',
    catLeaf: 'sports-bras',
    title: 'Sports Bra',
    description: 'Support-focused active tops designed for comfort, movement, and repeated training use.',
    color: '#BE185D',
  },
  cricket: {
    catMain: 'sports-wear',
    catMid: 'team-uniforms',
    catLeaf: 'cricket-whites',
    title: 'Cricket Uniform',
    description: 'Performance cricketwear with clean finishing, match comfort, and team branding support.',
    color: '#0F766E',
  },
  cycling: {
    catMain: 'sports-wear',
    catMid: 'running',
    catLeaf: 'running-singlets',
    title: 'Cycling Jersey',
    description: 'Athletic cycling-inspired tops with technical cuts for endurance and training blocks.',
    color: '#334155',
  },
  golf: {
    catMain: 'active-wear',
    catMid: 't-shirts',
    catLeaf: 'polo-shirts',
    title: 'Golf Polo',
    description: 'Smart golf silhouettes balancing breathable performance with premium presentation.',
    color: '#166534',
  },
  hoodies: {
    catMain: 'casual-wear',
    catMid: 'hoodies-sweats',
    catLeaf: 'oversized-hoodies',
    title: 'Oversized Hoodie',
    description: 'Streetwear-driven hoodie profiles with relaxed fits for custom brand programs.',
    color: '#4F46E5',
  },
  'ice hockey': {
    catMain: 'sports-wear',
    catMid: 'outerwear',
    catLeaf: 'sideline-jackets',
    title: 'Ice Hockey Jacket',
    description: 'Cold-condition outerwear styles made for team travel, bench use, and sideline identity.',
    color: '#0369A1',
  },
  jackets: {
    catMain: 'casual-wear',
    catMid: 'outerwear',
    catLeaf: 'bomber-jackets',
    title: 'Bomber Jacket',
    description: 'Outerwear staples with structured fits, layering comfort, and versatile branding options.',
    color: '#7C3AED',
  },
  'jogger and pants': {
    catMain: 'casual-wear',
    catMid: 'bottoms',
    catLeaf: 'casual-joggers',
    title: 'Jogger and Pants',
    description: 'Everyday bottoms with flexible comfort, clean finishing, and scalable B2B production.',
    color: '#475569',
  },
  legging: {
    catMain: 'active-wear',
    catMid: 'bottoms',
    catLeaf: 'leggings',
    title: 'Training Legging',
    description: 'Stretch-focused leggings built for mobility, gym performance, and all-day support.',
    color: '#9333EA',
  },
  rugby: {
    catMain: 'sports-wear',
    catMid: 'training',
    catLeaf: 'training-jerseys',
    title: 'Rugby Jersey',
    description: 'Durable rugby-inspired tops built for training intensity and team customization.',
    color: '#B91C1C',
  },
  shorts: {
    catMain: 'sports-wear',
    catMid: 'bottoms',
    catLeaf: 'athletic-shorts',
    title: 'Athletic Short',
    description: 'Movement-first shorts with breathable builds for sports programs and active ranges.',
    color: '#0E7490',
  },
  soccer: {
    catMain: 'sports-wear',
    catMid: 'team-uniforms',
    catLeaf: 'soccer-kits',
    title: 'Soccer Kit',
    description: 'Match-ready soccer sets designed for teams, academies, and wholesale club collections.',
    color: '#15803D',
  },
  sweatshirt: {
    catMain: 'casual-wear',
    catMid: 'hoodies-sweats',
    catLeaf: 'graphic-sweatshirts',
    title: 'Sweatshirt',
    description: 'Modern sweats with balanced structure and comfort for premium casual collections.',
    color: '#7C2D12',
  },
  't-shirt': {
    catMain: 'casual-wear',
    catMid: 't-shirts',
    catLeaf: 'graphic-tees',
    title: 'Graphic T-Shirt',
    description: 'Daily-wear tee options for private labels with print-ready surfaces and clean drape.',
    color: '#2563EB',
  },
  'tank tops': {
    catMain: 'active-wear',
    catMid: 't-shirts',
    catLeaf: 'tank-tops',
    title: 'Tank Top',
    description: 'Lightweight sleeveless styles optimized for fitness, training, and active layering.',
    color: '#DB2777',
  },
  tennis: {
    catMain: 'sports-wear',
    catMid: 'training',
    catLeaf: 'training-jerseys',
    title: 'Tennis Jersey',
    description: 'Court-focused apparel with lightweight construction and clean athletic aesthetics.',
    color: '#CA8A04',
  },
  'varsity jackets': {
    catMain: 'casual-wear',
    catMid: 'outerwear',
    catLeaf: 'varsity-jackets',
    title: 'Varsity Jacket',
    description: 'Classic varsity silhouettes upgraded for modern branding and wholesale runs.',
    color: '#1E3A8A',
  },
}

const defaultMeta = {
  catMain: 'casual-wear',
  catMid: 't-shirts',
  catLeaf: 'graphic-tees',
  title: 'Custom Apparel',
  description: 'Private-label apparel styles for sampling, merchandising, and bulk production.',
  color: '#D4AF37',
}

function toSlug(value) {
  return value
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

function toTitle(value) {
  return value
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase())
}

function getFolderName(filePath) {
  const normalized = filePath.replaceAll('\\', '/')
  const parts = normalized.split('/')
  return parts[parts.length - 2] || ''
}

function getFileStem(filePath) {
  const normalized = filePath.replaceAll('\\', '/')
  const fileName = normalized.split('/').pop() || ''
  return fileName.replace(/\.[^.]+$/, '')
}

function normalizeFolderKey(folder) {
  return folder.trim().toLowerCase().replace(/\s+/g, ' ')
}

function getCategoryMeta(folderName) {
  const normalized = normalizeFolderKey(folderName)
  if (normalized === 'sweatshirt' || normalized === 'sweatshirts' || normalized === 'sweat shirt') {
    return folderMeta.sweatshirt
  }
  return folderMeta[normalized] || defaultMeta
}

const groupedImages = Object.entries(imageModules).reduce((acc, [filePath, imageSrc]) => {
  const folder = getFolderName(filePath)
  if (!folder) return acc
  if (!acc[folder]) acc[folder] = []
  acc[folder].push({ filePath, imageSrc })
  return acc
}, {})

const sortedFolderNames = Object.keys(groupedImages).sort((a, b) => a.localeCompare(b))

export const productCollections = sortedFolderNames.map((folderName) => {
  const meta = getCategoryMeta(folderName)
  const folderSlug = toSlug(folderName)
  const items = [...groupedImages[folderName]]
    .sort((a, b) => a.filePath.localeCompare(b.filePath, undefined, { numeric: true }))
    .map((item, index) => {
      const seq = index + 1
      const imageLabel = toTitle(getFileStem(item.filePath))
      const productTitle = `${meta.title} - ${imageLabel}`
      const productBlurb = `${meta.description} Design reference: ${imageLabel}.`
      return {
        slug: `${folderSlug}-${seq}`,
        name: productTitle.toUpperCase(),
        displayName: productTitle,
        blurb: productBlurb,
        catMain: meta.catMain,
        catMid: meta.catMid,
        catLeaf: meta.catLeaf,
        isNew: seq <= 2,
        isBestseller: seq === 1,
        image: item.imageSrc,
        moq: 'B2B program',
        folderName,
        altText: `${productTitle} from ${toTitle(folderName)} collection`,
        seoTitle: `${productTitle} | ${toTitle(folderName)} Collection`,
        seoDescription: `${productBlurb} Explore ${toTitle(folderName)} style ${seq} for private label and wholesale orders.`,
      }
    })
  return {
    key: folderSlug,
    folderName,
    title: toTitle(folderName),
    description: meta.description,
    color: meta.color,
    catMain: meta.catMain,
    catMid: meta.catMid,
    catLeaf: meta.catLeaf,
    items,
  }
})

export const products = productCollections.flatMap((collection) => collection.items)

export function getProduct(slug) {
  return products.find((p) => p.slug === slug)
}

export function filterProducts({ catMain, catMid, catLeaf, bestseller, newOnly, search } = {}) {
  return products.filter((p) => {
    if (catMain && p.catMain !== catMain) return false
    if (catMid && p.catMid !== catMid) return false
    if (catLeaf && p.catLeaf !== catLeaf) return false
    if (bestseller && !p.isBestseller) return false
    if (newOnly && !p.isNew) return false
    if (search) {
      const q = search.toLowerCase().trim()
      if (!q) return true
      if (!p.name.toLowerCase().includes(q) && !p.blurb.toLowerCase().includes(q)) return false
    }
    return true
  })
}

export function countForCatMain(mainSlug) {
  return products.filter((p) => p.catMain === mainSlug).length
}

export function countForShopFilter(mainSlug, midSlug, leafSlug) {
  return filterProducts({ catMain: mainSlug, catMid: midSlug, catLeaf: leafSlug }).length
}
