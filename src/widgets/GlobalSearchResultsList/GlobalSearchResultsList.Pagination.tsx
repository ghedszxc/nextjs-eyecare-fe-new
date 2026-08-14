import type { ReactNode } from 'react'

export type GlobalSearchResultsListPaginationProps = {
  children: ReactNode
}

export const GlobalSearchResultsListPagination = ({
  children,
}: GlobalSearchResultsListPaginationProps) => {
  return <>{children}</>
}
