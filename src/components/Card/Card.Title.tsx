import type { ReactNode } from 'react'

export type CardTitleProps = {
  children: ReactNode
}

export const CardTitle = ({ children }: CardTitleProps) => {
  return <>{children}</>
}
