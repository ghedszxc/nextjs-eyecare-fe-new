import { BlogSearchResultsList as Root } from './BlogSearchResultsList'
import { BlogSearchResultsListPagination } from './BlogSearchResultsList.Pagination'
import { BlogSearchResultsListSearch } from './BlogSearchResultsList.Search'

export const BlogSearchResultsList = Object.assign(Root, {
  Search: BlogSearchResultsListSearch,
  Pagination: BlogSearchResultsListPagination,
})

export type { BlogSearchResultsListProps } from './BlogSearchResultsList.types'
