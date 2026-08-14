import type { ReactNode } from 'react'

export type CardSubtitleProps = {
  children: ReactNode
}

export const CardSubtitle = ({ children }: CardSubtitleProps) => {
  return <>{children}</>
}
