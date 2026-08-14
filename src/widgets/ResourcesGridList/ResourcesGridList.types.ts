import type { ReactNode } from 'react'
import type { ResourceItem, ResourceView } from '@components/ResourceCardItem'
import type { FilterOption, SortOption } from '@components/FilterBar'
import type { SidebarCategory } from '@components/Sidebar'

export interface ResourcesGridListProps {
  className?: string
  items?: ResourceItem[]
  categories?: SidebarCategory[]
  defaultView?: ResourceView
  defaultFilter?: FilterOption
  defaultSort?: SortOption
  children?: ReactNode
}
