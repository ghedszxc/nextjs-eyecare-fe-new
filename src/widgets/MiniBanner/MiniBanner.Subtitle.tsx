import type { ReactNode } from 'react'

export type MiniBannerSubtitleProps = {
  children: ReactNode
}

export const MiniBannerSubtitle = ({ children }: MiniBannerSubtitleProps) => {
  return <>{children}</>
}
