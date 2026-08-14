import type { ReactNode } from 'react'
import type { PictureProps } from '@components/Picture'
import type { IPicture } from '@customTypes/IPicture'
import type { ICtaLogo } from '@customTypes/ICta'

export interface MiniBannerProps {
  className?: string
  variant?: 'default' | 'miniBannerNoBG' | 'miniBannerTextLeft'
  logo?: IPicture
  background?: PictureProps
  pretitle?: ReactNode
  title?: ReactNode
  subtitle?: ReactNode
  cta?: ICtaLogo[]
  goBackProps?: {
    icon?: {
      src: string
      alt: string
    }
    link?: {
      isExternal?: boolean
      href: string
      title?: string
    }
  }
  promoteToH1?: boolean
  children?: ReactNode
}
