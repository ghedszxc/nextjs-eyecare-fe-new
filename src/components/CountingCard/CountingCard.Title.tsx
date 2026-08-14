import type { ReactNode } from 'react'

export type CountingCardTitleProps = {
  children: ReactNode
}

export const CountingCardTitle = ({ children }: CountingCardTitleProps) => {
  return <>{children}</>
}
