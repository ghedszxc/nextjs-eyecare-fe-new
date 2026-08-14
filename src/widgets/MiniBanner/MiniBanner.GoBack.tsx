import type { ReactNode } from 'react'

export type MiniBannerGoBackProps = {
  children: ReactNode
}

export const MiniBannerGoBack = ({ children }: MiniBannerGoBackProps) => {
  return <>{children}</>
}
