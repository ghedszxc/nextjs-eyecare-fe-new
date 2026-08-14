import type { ReactNode } from 'react'

export type TextBodyTitleProps = {
  children: ReactNode
}

export const TextBodyTitle = ({ children }: TextBodyTitleProps) => {
  return <>{children}</>
}
