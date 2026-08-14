import type { ReactNode } from 'react'

export interface TextBodyProps {
  className?: string
  variant?: 'table-center' | 'ArticleBigPadding'
  title?: string
  titleAlign?: string
  body?: ReactNode
  children?: ReactNode
}
