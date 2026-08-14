import type { ReactNode } from 'react'

export type NewsCardListPaginationProps = {
  children: ReactNode
}

export const NewsCardListPagination = ({ children }: NewsCardListPaginationProps) => {
  return <>{children}</>
}
