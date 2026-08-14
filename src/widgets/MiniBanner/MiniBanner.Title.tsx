import type { ReactNode } from 'react'

export type MiniBannerTitleProps = {
  children: ReactNode
}

export const MiniBannerTitle = ({ children }: MiniBannerTitleProps) => {
  return <>{children}</>
}
