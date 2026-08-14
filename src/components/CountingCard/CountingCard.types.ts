import type { ReactNode } from 'react'
import type { IPicture } from '@customTypes/IPicture'

export interface CountingCardProps {
  className?: string
  count?: number
  title?: ReactNode
  image?: IPicture
  children?: ReactNode
}
