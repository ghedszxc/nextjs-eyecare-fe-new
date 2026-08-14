import type { ReactNode } from 'react'

export interface QuoteSectionBlockItem {
  bodyText: ReactNode
  displayPhoto: string
  displayName: string
  jobTitleLogo?: string
}

export interface QuoteSectionBlockProps {
  className?: string
  title?: string
  items?: QuoteSectionBlockItem[]
}
