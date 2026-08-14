import { GlobalSearchResultsList as Root } from './GlobalSearchResultsList'
import { GlobalSearchResultsListPagination } from './GlobalSearchResultsList.Pagination'
import { GlobalSearchResultsListSearch } from './GlobalSearchResultsList.Search'

export const GlobalSearchResultsList = Object.assign(Root, {
  Search: GlobalSearchResultsListSearch,
  Pagination: GlobalSearchResultsListPagination,
})

export type { GlobalSearchResultsListProps } from './GlobalSearchResultsList.types'
