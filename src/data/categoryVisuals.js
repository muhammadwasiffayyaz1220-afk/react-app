/**
 * Shop / category imagery — every ID below is also used in products.js (verified loads).
 * Format matches products: images.unsplash.com/photo-{id}?auto=format&fit=crop&…
 */
const img = (id, sig = '') =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80${sig ? `&sig=${sig}` : ''}`

function hashKey(s) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619)
  return h >>> 0
}

/** --- IDs reused from products.js (no external / untested photos) --- */
const P = {
  activeGym: '1518611012118-696072aa579a',
  teeWhite: '1521572163474-6864f9cf17ab',
  teeGraphic: '1576566588028-4147f3842f27',
  teePrint: '1503341504253-dff4815485f1',
  tank: '1503341450652-d658bbd34c5e',
  compression: '1571019613454-1cb2f99b2d8b',
  leggingsScene: '1571902943202-b50787a0897e',
  trainingGym: '1517836357463-d25dfeac3438',
  gymInterior: '1534438327276-14e5300c3a48',
  jacket: '1591047139829-d91aecb6caea',
  tracksuit: '1441986300917-64674bd600d8',
  coords: '1515886657613-9f3515b0c78f',
  coordSet: '1434389677669-e08b4cac3105',
  casualStreet: '1523381210434-271e8be1f52b',
  jeansBlue: '1542272604-787c3835535d',
  jeansFit: '1541099649102-fbad7c341507',
  chinoKhaki: '1517438476312-10d79c077509',
  hoodie: '1556821840-3a63f95609a7',
  shirtDress: '1594938298603-c8148c4dae35',
  shirtHanger: '1603252109303-2751447d352d',
  bomber: '1551028719-00167b16eac5',
  lounge: '1515378791036-0648a3ef77b2',
  soccerField: '1574629810360-7efbbe195018',
  soccerKit: '1579952363873-27f3bade9f55',
  basket: '1521415978664-9de797bd773e',
  runSinglet: '1476480862126-209bfaa8c8c0',
  runTrack: '1506629082955-511b1aa562c8',
  sideline: '1544022613-e87ca75a784a',
  flatlay: '1553062407-98eeb64c6a62',
  cricketWhites: '1521572163474-6864f9cf17ab',
  fabric: '1558171813-2c609623f455',
}

export const rootLineImages = {
  'active-wear': img(P.activeGym),
  'casual-wear': img(P.casualStreet),
  'sports-wear': img(P.soccerField),
}

const midImages = {
  'active-wear/t-shirts': img(P.teeWhite),
  'active-wear/tops': img(P.leggingsScene),
  'active-wear/bottoms': img(P.trainingGym),
  'active-wear/outerwear': img(P.jacket),
  'active-wear/sets': img(P.coords),

  'casual-wear/t-shirts': img(P.teeWhite),
  'casual-wear/shirts': img(P.shirtDress),
  'casual-wear/bottoms': img(P.jeansBlue),
  'casual-wear/hoodies-sweats': img(P.hoodie),
  'casual-wear/outerwear': img(P.bomber),
  'casual-wear/sets': img(P.coordSet, '2'),

  'sports-wear/team-uniforms': img(P.soccerKit),
  'sports-wear/training': img(P.gymInterior),
  'sports-wear/running': img(P.runSinglet),
  'sports-wear/bottoms': img(P.runTrack),
  'sports-wear/outerwear': img(P.sideline),
  'sports-wear/accessories': img(P.flatlay),
}

const midLeafPools = {
  'active-wear/t-shirts': [img(P.teeWhite), img(P.teeGraphic), img(P.tank), img(P.compression)],
  'active-wear/tops': [img(P.leggingsScene), img(P.activeGym), img(P.tank), img(P.compression)],
  'active-wear/bottoms': [img(P.trainingGym), img(P.compression, 'b1'), img(P.leggingsScene, 'b2')],
  'active-wear/outerwear': [img(P.jacket), img(P.sideline), img(P.bomber)],
  'active-wear/sets': [img(P.coords), img(P.tracksuit), img(P.activeGym, 'set')],

  'casual-wear/t-shirts': [img(P.teeWhite), img(P.teePrint), img(P.teeGraphic)],
  'casual-wear/shirts': [img(P.shirtDress), img(P.shirtHanger), img(P.jacket, 'sh')],
  'casual-wear/bottoms': [img(P.jeansBlue), img(P.jeansFit), img(P.chinoKhaki)],
  'casual-wear/hoodies-sweats': [img(P.hoodie), img(P.teeGraphic, 'h'), img(P.teeWhite, 'h2')],
  'casual-wear/outerwear': [img(P.bomber), img(P.jacket), img(P.shirtDress, 'o')],
  'casual-wear/sets': [img(P.coordSet), img(P.lounge), img(P.coords, 'c')],

  'sports-wear/team-uniforms': [
    img(P.soccerKit),
    img(P.basket),
    img(P.soccerField),
    img('1599498894233-0ad5ebea7620'),
    img('1546519638-68e109498ffc'),
    img(P.soccerField, 'team'),
  ],
  'sports-wear/training': [img(P.trainingGym), img(P.gymInterior), img(P.compression, 'tr'), img(P.leggingsScene, 'tr2')],
  'sports-wear/running': [img(P.runSinglet), img(P.tank, 'r'), img(P.compression, 'r2')],
  'sports-wear/bottoms': [img(P.runTrack), img(P.trainingGym, 'sb'), img(P.compression, 'sb2')],
  'sports-wear/outerwear': [img(P.sideline), img(P.bomber, 'so'), img(P.jacket, 'so2')],
  'sports-wear/accessories': [img(P.flatlay), img(P.basket, 'a'), img(P.soccerField, 'a2')],
}

const leafImages = {
  'casual-wear/t-shirts/graphic-tees': img(P.teePrint),
  'casual-wear/bottoms/jeans': img(P.jeansFit),
  'active-wear/bottoms/leggings': img(P.leggingsScene, 'leg'),

  'active-wear/t-shirts/polo-shirts': img(P.teeWhite, 'polo'),
  'active-wear/t-shirts/half-sleeves': img(P.teeGraphic, 'half'),
  'active-wear/t-shirts/full-sleeves': img(P.teeWhite, 'full'),
  'active-wear/t-shirts/compression-tees': img(P.compression),
  'active-wear/t-shirts/tank-tops': img(P.tank),
  'active-wear/t-shirts/v-neck-tees': img(P.teeWhite, 'v'),
  'active-wear/t-shirts/crew-neck-tees': img(P.teeGraphic, 'crew'),

  'sports-wear/team-uniforms/soccer-kits': img(P.soccerKit),
  'sports-wear/team-uniforms/basketball-uniforms': img(P.basket),
  'sports-wear/team-uniforms/baseball-uniforms': img(P.soccerField, 'bb'),
  'sports-wear/team-uniforms/american-football-uniforms': img('1599498894233-0ad5ebea7620'),
  'sports-wear/team-uniforms/cricket-whites': img(P.cricketWhites, 'cr'),
  'sports-wear/team-uniforms/volleyball-kits': img(P.basket, 'vb'),

  'sports-wear/training/training-jerseys': img(P.trainingGym, 'jer'),
  'sports-wear/training/training-pants': img(P.runTrack, 'pant'),
  'sports-wear/training/bibs': img(P.gymInterior, 'bib'),
  'sports-wear/training/compression-base-layers': img(P.compression, 'base'),

  'sports-wear/running/running-shorts': img(P.tank, 'rs'),
  'sports-wear/running/running-tights': img(P.leggingsScene, 'rt'),
  'sports-wear/running/running-singlets': img(P.runSinglet, 'sing'),
}

const defaultFabric = img(P.fabric)

export function getRootLineImage(rootSlug) {
  return rootLineImages[rootSlug] || defaultFabric
}

export function getShopMidImage(mainSlug, midSlug) {
  const key = `${mainSlug}/${midSlug}`
  return midImages[key] || defaultFabric
}

export function getShopLeafImage(mainSlug, midSlug, leafSlug) {
  const leafKey = `${mainSlug}/${midSlug}/${leafSlug}`
  if (leafImages[leafKey]) return leafImages[leafKey]

  const poolKey = `${mainSlug}/${midSlug}`
  const pool = midLeafPools[poolKey]
  if (pool?.length) return pool[hashKey(leafKey) % pool.length]

  return getShopMidImage(mainSlug, midSlug)
}
