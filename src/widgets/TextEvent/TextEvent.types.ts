import type { ReactNode } from 'react'

type TTextEventVariants = 'table-center' | undefined | null | ''

export interface TextEventProps {
  className?: string
  title?: string
  richText?: ReactNode
  variant?: TTextEventVariants
  children?: ReactNode
}
