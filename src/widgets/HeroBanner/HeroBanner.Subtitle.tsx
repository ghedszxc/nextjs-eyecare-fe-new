import type { ReactNode } from 'react'

export type HeroBannerSubtitleProps = {
  children: ReactNode
}

export const HeroBannerSubtitle = ({ children }: HeroBannerSubtitleProps) => {
  return <>{children}</>
}
