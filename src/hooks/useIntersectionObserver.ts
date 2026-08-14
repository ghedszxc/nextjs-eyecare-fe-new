import { useEffect, useState, useRef } from 'react'

type IntersectionObserverOptions = {
  threshold?: number | number[]
  rootMargin?: string
}

type UseIntersectionObserverProps = {
  animateOnce?: boolean
  options?: IntersectionObserverOptions
}

type IntersectionObserverResult<T extends Element> = {
  observeRef: React.RefObject<T | null>
  isVisible: boolean
}

export function useIntersectionObserver<T extends Element = Element>({
  animateOnce = false,
  options = {},
}: UseIntersectionObserverProps = {}): IntersectionObserverResult<T> {
  const observeRef = useRef<T | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  if (typeof IntersectionObserver === 'undefined') {
    console.warn('IntersectionObserver is not supported in this browser.')
    return { observeRef, isVisible: true }
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const currentRef = observeRef.current
    if (!currentRef) return

    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      if (!entry) return

      setIsVisible(entry.isIntersecting)

      if (entry.isIntersecting && animateOnce) {
        observer.disconnect()
      }
    }, options)

    observer.observe(currentRef)

    return () => {
      observer.disconnect()
    }
  }, [observeRef, animateOnce, options])

  return { observeRef, isVisible }
}
