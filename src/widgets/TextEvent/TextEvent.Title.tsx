import type { ReactNode } from 'react'

export type TextEventTitleProps = {
  children: ReactNode
}

export const TextEventTitle = ({ children }: TextEventTitleProps) => {
  return <>{children}</>
}
