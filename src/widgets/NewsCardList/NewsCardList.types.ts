import type { InputProps } from '@components/Input'
import type { NewsCardProps } from '@components/NewsCard'
import type { CSSProperties, PropsWithChildren } from 'react'

export interface NewsCardListProps extends PropsWithChildren {
  className?: string
  items: NewsCardProps[]
  backgroundColor?: CSSProperties['backgroundColor']

  // Search
  searchValue?: string
  onSearchChange?: (value: string) => void
  onSearchSubmit?: (value: string) => void
  searchInputProps?: InputProps

  // Pagination
  currentPage?: number

  renderLink?: (
    props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }
  ) => React.ReactNode
}
