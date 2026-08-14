import type { BrandsStripProps } from '@components/BrandsStrip/BrandsStrip.types'
import type { PictureProps } from '@components/Picture/Picture.types'
import type { ICtaHoverLogo, ICtaLogo } from '@customTypes/ICta'
import type { ReactNode } from 'react'

export interface HeroBannerProps {
  className?: string
  variant?: 'pageHeroBanner' | 'bannerPodcast' | 'mainHeroBanner'
  title?: ReactNode
  subtitle?: ReactNode
  backgroundImage?: PictureProps
  logo?: PictureProps & { variant?: string }
  cta?: ICtaLogo[]
  ctaLogo?: ICtaHoverLogo[]
  brands?: BrandsStripProps
  promoteToH1?: boolean
  children?: ReactNode
  type?: 'internal' | 'external'
}
