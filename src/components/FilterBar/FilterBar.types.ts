import type { ResourceView } from '@components/ResourceCardItem'

export type FilterOption = 'all' | 'pdf' | 'externalLink'
export type SortOption = 'latest' | 'oldest' | 'az' | 'za'

export interface FilterBarProps {
  view: ResourceView
  onViewChange: (v: ResourceView) => void
  isMobile: boolean
  filterValue: FilterOption
  onFilterChange: (v: FilterOption) => void
  sortValue: SortOption
  onSortChange: (v: SortOption) => void
  searchValue: string
  onSearchChange: (v: string) => void
}
