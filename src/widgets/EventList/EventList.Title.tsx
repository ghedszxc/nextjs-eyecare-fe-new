import type { ReactNode } from 'react'

export type EventListTitleProps = {
  children: ReactNode
}

export const EventListTitle = ({ children }: EventListTitleProps) => {
  return <>{children}</>
}
