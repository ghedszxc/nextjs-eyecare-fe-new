import type { ReactNode } from 'react'
import type { InfoCardProps } from '@components/InfoCard'
import type { PictureProps } from '@components/Picture'

export interface Teaser5050With3TextProps {
  className?: string
  variant?: 'left' | 'right'
  title?: ReactNode
  cards?: InfoCardProps[]
  image?: PictureProps
  children?: ReactNode
}
