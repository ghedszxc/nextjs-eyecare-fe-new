import type { ReactNode } from 'react'

export type PageLoaderLogoProps = {
  children: ReactNode
}

export const PageLoaderLogo = ({ children }: PageLoaderLogoProps) => {
  return <>{children}</>
}
