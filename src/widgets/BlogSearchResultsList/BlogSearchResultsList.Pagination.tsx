import type { ReactNode } from 'react'

export type BlogSearchResultsListPaginationProps = {
  children: ReactNode
}

export const BlogSearchResultsListPagination = ({
  children,
}: BlogSearchResultsListPaginationProps) => {
  return <>{children}</>
}
