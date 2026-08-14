import type { ReactNode } from 'react'
import type { PictureProps } from '@components/Picture/Picture.types'
import type { ICtaLogo } from '@customTypes/ICta'

export interface HeroBannerCarouselItem {
  title: string
  body: ReactNode
  image: PictureProps
  ctas: ICtaLogo[]
  isNewItem?: boolean
}

export interface HeroBannerCarouselProps {
  className?: string
  items?: HeroBannerCarouselItem[]
}
