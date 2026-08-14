import type { ReactNode } from 'react'

export type NavigationUserMenuFallbackProps = {
  children: ReactNode
}

export const NavigationUserMenuFallback = ({ children }: NavigationUserMenuFallbackProps) => {
  return <>{children}</>
}
