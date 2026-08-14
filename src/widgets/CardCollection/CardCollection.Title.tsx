import type { ReactNode } from 'react'

export type CardCollectionTitleProps = {
  children: ReactNode
}

export const CardCollectionTitle = ({ children }: CardCollectionTitleProps) => {
  return <>{children}</>
}
