import type { InputProps } from '@components/Input'
import type { NewsCardProps } from '@components/NewsCard'
import type { PropsWithChildren, ReactNode } from 'react'

export interface BlogSearchResultsListProps extends PropsWithChildren {
  className?: string
  searchResult?: ReactNode

  items: NewsCardProps[]

  // Search
  searchValue: string
  onSearchChange: (value: string) => void
  onSearchSubmit: (value: string) => void
  searchInputProps?: InputProps

  renderLink?: (
    props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }
  ) => React.ReactNode
}
