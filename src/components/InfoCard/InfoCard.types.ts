import type { ReactNode } from 'react'
import type { IconType } from '@components/Icon'

export interface InfoCardProps {
  className?: string
  icon?: IconType
  badge?: string
  title?: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}
