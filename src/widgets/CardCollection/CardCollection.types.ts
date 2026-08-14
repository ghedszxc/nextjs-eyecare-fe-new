import type { ReactNode } from 'react'
import type { CardProps } from '@components/Card'

export interface CardCollectionProps {
  className?: string
  variant?: 'default' | 'threeCols' | 'fourCols' | 'examCard' | 'cardCarousel'
  title?: ReactNode
  subtitle?: ReactNode
  cards?: CardProps[]
  children?: ReactNode
  ctaLabel?: string
  theme?: 'dark' | 'light'
}
