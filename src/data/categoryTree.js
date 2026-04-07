/**
 * 3-level category system: Main → Mid → Leaf
 * Main: Active Wear | Casual Wear | Sports Wear
 */
export const categoryRoots = [
  {
    slug: 'active-wear',
    name: 'Active Wear',
    tagline: 'Performance fabrics, training & gym',
    children: [
      {
        slug: 't-shirts',
        name: 'T-Shirts',
        children: [
          { slug: 'polo-shirts', name: 'Polo Shirts' },
          { slug: 'half-sleeves', name: 'Half Sleeves' },
          { slug: 'full-sleeves', name: 'Full Sleeves' },
          { slug: 'compression-tees', name: 'Compression Tees' },
          { slug: 'tank-tops', name: 'Tank Tops' },
          { slug: 'v-neck-tees', name: 'V-Neck Tees' },
          { slug: 'crew-neck-tees', name: 'Crew Neck Tees' },
        ],
      },
      {
        slug: 'tops',
        name: 'Tops',
        children: [
          { slug: 'sports-bras', name: 'Sports Bras' },
          { slug: 'crop-tops', name: 'Crop Tops' },
          { slug: 'long-sleeve-tops', name: 'Long Sleeve Tops' },
          { slug: 'performance-hoodies', name: 'Performance Hoodies' },
          { slug: 'zip-training-jackets', name: 'Zip Training Jackets' },
        ],
      },
      {
        slug: 'bottoms',
        name: 'Bottoms',
        children: [
          { slug: 'athletic-shorts', name: 'Athletic Shorts' },
          { slug: 'leggings', name: 'Leggings' },
          { slug: 'training-joggers', name: 'Training Joggers' },
          { slug: 'track-pants', name: 'Track Pants' },
          { slug: 'sweatpants', name: 'Sweatpants' },
          { slug: 'capris', name: 'Capris' },
        ],
      },
      {
        slug: 'outerwear',
        name: 'Outerwear',
        children: [
          { slug: 'windbreakers', name: 'Windbreakers' },
          { slug: 'light-jackets', name: 'Light Jackets' },
          { slug: 'training-vests', name: 'Training Vests' },
        ],
      },
      {
        slug: 'sets',
        name: 'Sets',
        children: [
          { slug: 'tracksuits', name: 'Tracksuits' },
          { slug: 'active-co-ords', name: 'Active Co-ord Sets' },
        ],
      },
    ],
  },
  {
    slug: 'casual-wear',
    name: 'Casual Wear',
    tagline: 'Everyday street & loungewear',
    children: [
      {
        slug: 't-shirts',
        name: 'T-Shirts',
        children: [
          { slug: 'polo-shirts', name: 'Polo Shirts' },
          { slug: 'half-sleeve-tees', name: 'Half Sleeve Tees' },
          { slug: 'full-sleeve-tees', name: 'Full Sleeve Tees' },
          { slug: 'graphic-tees', name: 'Graphic Tees' },
          { slug: 'plain-tees', name: 'Plain Tees' },
          { slug: 'oversized-tees', name: 'Oversized Tees' },
          { slug: 'henleys', name: 'Henleys' },
        ],
      },
      {
        slug: 'shirts',
        name: 'Shirts',
        children: [
          { slug: 'casual-shirts', name: 'Casual Shirts' },
          { slug: 'flannel-shirts', name: 'Flannel Shirts' },
          { slug: 'denim-shirts', name: 'Denim Shirts' },
          { slug: 'linen-shirts', name: 'Linen Shirts' },
        ],
      },
      {
        slug: 'bottoms',
        name: 'Bottoms',
        children: [
          { slug: 'jeans', name: 'Jeans' },
          { slug: 'chinos', name: 'Chinos' },
          { slug: 'cargo-pants', name: 'Cargo Pants' },
          { slug: 'casual-trousers', name: 'Casual Trousers' },
          { slug: 'casual-shorts', name: 'Casual Shorts' },
          { slug: 'casual-joggers', name: 'Casual Joggers' },
        ],
      },
      {
        slug: 'hoodies-sweats',
        name: 'Hoodies & Sweatshirts',
        children: [
          { slug: 'pullover-hoodies', name: 'Pullover Hoodies' },
          { slug: 'zip-hoodies', name: 'Zip Hoodies' },
          { slug: 'oversized-hoodies', name: 'Oversized Hoodies' },
          { slug: 'crewneck-sweatshirts', name: 'Crewneck Sweatshirts' },
          { slug: 'graphic-sweatshirts', name: 'Graphic Sweatshirts' },
        ],
      },
      {
        slug: 'outerwear',
        name: 'Outerwear',
        children: [
          { slug: 'bomber-jackets', name: 'Bomber Jackets' },
          { slug: 'varsity-jackets', name: 'Varsity Jackets' },
          { slug: 'denim-jackets', name: 'Denim Jackets' },
          { slug: 'cardigans', name: 'Cardigans' },
        ],
      },
      {
        slug: 'sets',
        name: 'Sets',
        children: [
          { slug: 'co-ord-sets', name: 'Co-ord Sets' },
          { slug: 'loungewear-sets', name: 'Loungewear Sets' },
        ],
      },
    ],
  },
  {
    slug: 'sports-wear',
    name: 'Sports Wear',
    tagline: 'Team kits & field wear',
    children: [
      {
        slug: 'team-uniforms',
        name: 'Team Uniforms',
        children: [
          { slug: 'soccer-kits', name: 'Soccer / Football Kits' },
          { slug: 'basketball-uniforms', name: 'Basketball Uniforms' },
          { slug: 'baseball-uniforms', name: 'Baseball Uniforms' },
          { slug: 'american-football-uniforms', name: 'American Football Uniforms' },
          { slug: 'cricket-whites', name: 'Cricket Whites' },
          { slug: 'volleyball-kits', name: 'Volleyball Kits' },
        ],
      },
      {
        slug: 'training',
        name: 'Training',
        children: [
          { slug: 'training-jerseys', name: 'Training Jerseys' },
          { slug: 'training-pants', name: 'Training Pants' },
          { slug: 'bibs', name: 'Training Bibs' },
          { slug: 'compression-base-layers', name: 'Compression Base Layers' },
        ],
      },
      {
        slug: 'running',
        name: 'Running',
        children: [
          { slug: 'running-shorts', name: 'Running Shorts' },
          { slug: 'running-tights', name: 'Running Tights' },
          { slug: 'running-singlets', name: 'Running Singlets' },
        ],
      },
      {
        slug: 'bottoms',
        name: 'Bottoms',
        children: [
          { slug: 'athletic-shorts', name: 'Athletic Shorts' },
          { slug: 'warm-up-pants', name: 'Warm-up Pants' },
        ],
      },
      {
        slug: 'outerwear',
        name: 'Outerwear',
        children: [
          { slug: 'sideline-jackets', name: 'Sideline Jackets' },
          { slug: 'bench-coats', name: 'Bench Coats' },
        ],
      },
      {
        slug: 'accessories',
        name: 'Accessories',
        children: [
          { slug: 'athletic-caps', name: 'Athletic Caps' },
          { slug: 'athletic-socks', name: 'Athletic Socks' },
          { slug: 'gym-bags', name: 'Gym Bags' },
          { slug: 'team-scarves', name: 'Team Scarves' },
        ],
      },
    ],
  },
]

export function buildShopPath(main, mid, leaf) {
  if (!main) return '/shop'
  let p = `/shop/${main}`
  if (mid) p += `/${mid}`
  if (leaf) p += `/${leaf}`
  return p
}

export function getRootBySlug(slug) {
  return categoryRoots.find((r) => r.slug === slug)
}

export function getMidBySlug(mainSlug, midSlug) {
  const root = getRootBySlug(mainSlug)
  return root?.children.find((c) => c.slug === midSlug)
}

export function getLeafMeta(mainSlug, midSlug, leafSlug) {
  const mid = getMidBySlug(mainSlug, midSlug)
  const leaf = mid?.children.find((l) => l.slug === leafSlug)
  return leaf ? { leaf, mid, root: getRootBySlug(mainSlug) } : null
}

/** Validate route segments exist in tree */
export function isValidShopPath(mainSlug, midSlug, leafSlug) {
  const root = getRootBySlug(mainSlug)
  if (!root) return false
  if (!midSlug) return true
  const mid = getMidBySlug(mainSlug, midSlug)
  if (!mid) return false
  if (!leafSlug) return true
  return mid.children.some((l) => l.slug === leafSlug)
}
