import type { ResourceItem } from '@components/ResourceCardItem'
import type { PropsWithChildren, ReactNode } from 'react'

export interface GlobalSearchResultsListProps extends PropsWithChildren {
  className?: string
  searchResult?: ReactNode
  items: ResourceItem[]
  renderLink?: (
    props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }
  ) => React.ReactNode
}
