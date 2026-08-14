import type { ICtaLogo, IPicture } from '../..'

export interface BrandTab {
  trigger: {
    default: string | { src: string; alt: string }
    active: string | { src: string; alt: string }
  }
  content?: {
    title?: string
    description: React.ReactNode | string
    logo?: IPicture
    textColor?: string
  }[]
  image?: IPicture
  cta?: ICtaLogo
  theme: string
}

export interface BrandsTabProps {
  title?: string
  className?: string
  subtitle?: React.ReactNode
  tabs?: BrandTab[]
}
