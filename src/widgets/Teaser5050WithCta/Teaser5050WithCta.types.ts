import type { ReactNode } from 'react'
import type { PictureProps } from '@components/Picture'
import type { ICtaLogo } from '@customTypes/ICta'

export interface Teaser5050WithCtaProps {
  className?: string
  variant?: 'left' | 'right'
  title?: ReactNode
  subtitle?: ReactNode
  ctas: ICtaLogo[]
  image?: PictureProps
  children?: ReactNode
  moduleStyles?: {
    color?: string
    backgroundColor?: string
  }
}
