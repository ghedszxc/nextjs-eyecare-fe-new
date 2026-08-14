import type { ReactNode } from 'react'

export type HeroBannerTitleProps = {
  children: ReactNode
}

export const HeroBannerTitle = ({ children }: HeroBannerTitleProps) => {
  return <>{children}</>
}
