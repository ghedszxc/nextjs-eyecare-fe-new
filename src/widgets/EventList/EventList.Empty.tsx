import type { ReactNode } from 'react'

export type EventListEmptyProps = {
  children: ReactNode
}

export const EventListEmpty = ({ children }: EventListEmptyProps) => {
  return <>{children}</>
}
