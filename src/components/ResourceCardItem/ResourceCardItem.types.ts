import type { ReactNode } from 'react'

export type ResourceView = 'grid' | 'list'
export type ResourceItemType = 'pdf' | 'externalLink' | 'restricted'

export interface ResourceItem {
  title: string
  bodyText?: ReactNode
  date: string
  type: ResourceItemType
  href: string
  hasNotification?: boolean
  category?: string
  id: string
}

export interface ResourceCardItemProps {
  variant?: 'global-search'
  item: ResourceItem
  view: ResourceView

  renderLink?: (
    props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }
  ) => React.ReactNode
}
