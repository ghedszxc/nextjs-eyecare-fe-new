import type { ICtaLogo, IPicture } from '../..'

export interface InternalBrandsTabProps {
  title?: string
  className?: string
  subTitle?: React.ReactNode
  tabs?: {
    tabTitle?: string
    topContent?: {
      title?: string
      longText: React.ReactNode
      cta?: ICtaLogo
      rightSideText?: React.ReactNode
    }
    bottomContent?: {
      title?: string
      icon?: IPicture
      textList: React.ReactNode
      quote?: React.ReactNode
    }
  }[]
}
