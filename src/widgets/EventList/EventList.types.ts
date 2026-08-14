import type { IconType } from '@components/Icon'
import type { UpcomingEventCardProps } from '@components/UpcomingEventCard/UpcomingEventCard.types'
import type { ICta } from '@customTypes/ICta'
import type { PropsWithChildren, ReactNode } from 'react'

export interface EventListProps extends PropsWithChildren {
  className?: string
  title?: ReactNode
  items: UpcomingEventCardProps[]
  cta?: ICta & { icon?: IconType }
  backgroundColor?: 'light' | 'dark' | 'gray'
  variant?: 'internalEventList'
}
