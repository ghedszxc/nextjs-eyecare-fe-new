import type { GridItemProps, GridProps } from '@components/Grid'
import type { NewsCardProps } from '@components/NewsCard'
import type { ICtaIcon } from '@customTypes/ICta'
import type { CSSProperties, PropsWithChildren, ReactNode } from 'react'

export interface BlogCardGridProps extends PropsWithChildren {
  className?: string
  title?: ReactNode
  items: NewsCardProps[]
  cta?: ICtaIcon
  backgroundColor?: CSSProperties['backgroundColor']
  hasContainer?: boolean

  gridProps?: GridProps
  gridItemProps?: GridItemProps

  renderLink?: (
    props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }
  ) => React.ReactNode
}
