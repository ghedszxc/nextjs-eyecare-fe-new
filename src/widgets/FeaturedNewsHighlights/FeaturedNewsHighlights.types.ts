import type { NewsCardProps } from '@components/NewsCard'
import type { ICtaIcon } from '@customTypes/ICta'
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react'

export interface FeaturedNewsHighlightsProps extends PropsWithChildren {
  variant?: 'home'
  className?: string
  title?: ReactNode
  items: NewsCardProps[]
  cta?: ICtaIcon
  backgroundColor?: CSSProperties['backgroundColor']
  hasContainer?: boolean
  renderLink?: (
    props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }
  ) => React.ReactNode
}
