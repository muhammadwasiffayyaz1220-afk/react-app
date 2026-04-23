import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scrolls window to top on every navigation (fixes mid-page / footer link opens). */
export default function ScrollToTop() {
  const { pathname, search } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [pathname, search])

  return null
}
