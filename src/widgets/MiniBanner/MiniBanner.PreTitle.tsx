import type { ReactNode } from 'react'

export type MiniBannerPreTitleProps = {
  children: ReactNode
}

export const MiniBannerPreTitle = ({ children }: MiniBannerPreTitleProps) => {
  return <>{children}</>
}
