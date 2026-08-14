import type { ReactNode } from 'react'

export type TextBodyBodyProps = {
  children: ReactNode
}

export const TextBodyBody = ({ children }: TextBodyBodyProps) => {
  return <>{children}</>
}
