import { useState, useEffect } from 'react'

const getPathname = () => (typeof window === 'undefined' ? '' : window.location.pathname)

/** Tracks the current browser path, updating on back/forward navigation. */
export const useActivePath = () => {
  const [pathname, setPathname] = useState(getPathname)

  useEffect(() => {
    const handlePopState = () => setPathname(getPathname())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  return pathname
}
