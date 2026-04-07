/** Re-exports + aliases for the 3-level shop tree (see categoryTree.js). */
export {
  categoryRoots,
  buildShopPath,
  getRootBySlug,
  getMidBySlug,
  getLeafMeta,
  isValidShopPath,
} from './categoryTree'

import { categoryRoots, buildShopPath } from './categoryTree'

export const mainCategories = categoryRoots

export function mainCategoryPath(mainSlug, midSlug, leafSlug) {
  return buildShopPath(mainSlug, midSlug, leafSlug)
}
