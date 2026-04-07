import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    const base = '4tex International'
    document.title = title ? `${title} | ${base}` : `${base} — B2B Streetwear & OEM`
  }, [title])
}
