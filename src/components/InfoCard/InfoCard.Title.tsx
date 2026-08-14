import type { ReactNode } from 'react'

export type InfoCardTitleProps = {
  children: ReactNode
}

export const InfoCardTitle = ({ children }: InfoCardTitleProps) => {
  return <>{children}</>
}
