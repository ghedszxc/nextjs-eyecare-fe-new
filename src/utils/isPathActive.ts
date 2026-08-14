const normalize = (path: string) => path.replace(/\/+$/, '') || '/'

/** Compares a nav link's target URL against the current browser path, ignoring query/hash and trailing slashes. */
export const isPathActive = (url: string | undefined, pathname: string): boolean => {
  if (!url || !pathname) return false

  let targetPath: string
  try {
    targetPath = new URL(url, 'http://localhost').pathname
  } catch {
    return false
  }

  return normalize(targetPath) === normalize(pathname)
}
