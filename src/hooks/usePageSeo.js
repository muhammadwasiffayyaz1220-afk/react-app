import { useEffect } from 'react'
import { SITE_NAME, SITE_URL } from '../data/siteBrand'

const DEFAULT_TITLE = `${SITE_NAME} — B2B apparel manufacturing`
const DEFAULT_DESCRIPTION =
  'WASITEX is a Pakistan-based textile manufacturer for streetwear, sportswear, casual wear, varsity jackets, and private label — sampling through bulk production.'

function upsertMetaName(name, content) {
  let el = document.head.querySelector(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertMetaProperty(property, content) {
  let el = document.head.querySelector(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLinkRel(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Sets document title, meta description, Open Graph / Twitter basics, and canonical.
 * Restores defaults on unmount so other routes are not stuck with stale SEO tags.
 */
export function usePageSeo({ title, description, canonicalPath, keywords }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE
    const desc = description?.trim() || DEFAULT_DESCRIPTION
    const canonical =
      canonicalPath != null
        ? `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`
        : SITE_URL

    document.title = fullTitle
    upsertMetaName('description', desc)
    upsertMetaProperty('og:title', fullTitle)
    upsertMetaProperty('og:description', desc)
    upsertMetaProperty('og:type', 'website')
    upsertMetaProperty('og:url', canonical)
    upsertMetaProperty('og:site_name', SITE_NAME)
    upsertMetaName('twitter:card', 'summary_large_image')
    upsertMetaName('twitter:title', fullTitle)
    upsertMetaName('twitter:description', desc)

    if (keywords?.trim()) {
      upsertMetaName('keywords', keywords.trim())
    }

    upsertLinkRel('canonical', canonical)

    return () => {
      document.title = DEFAULT_TITLE
      upsertMetaName('description', DEFAULT_DESCRIPTION)
      upsertMetaProperty('og:title', DEFAULT_TITLE)
      upsertMetaProperty('og:description', DEFAULT_DESCRIPTION)
      upsertMetaProperty('og:url', SITE_URL)
      upsertMetaName('twitter:title', DEFAULT_TITLE)
      upsertMetaName('twitter:description', DEFAULT_DESCRIPTION)
      upsertLinkRel('canonical', SITE_URL)
      document.head.querySelector('meta[name="keywords"]')?.remove()
    }
  }, [title, description, canonicalPath, keywords])
}
