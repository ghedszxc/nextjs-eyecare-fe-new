import type { ReactNode } from 'react'

export type InfoCardSubtitleProps = {
  children: ReactNode
}

export const InfoCardSubtitle = ({ children }: InfoCardSubtitleProps) => {
  return <>{children}</>
}
