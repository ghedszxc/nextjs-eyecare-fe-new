import type { NewsCardProps } from '@components/NewsCard'
import type { PropsWithChildren, ReactNode } from 'react'

export interface BlogPostProps
  extends PropsWithChildren, Omit<NewsCardProps, 'description' | 'cta' | 'direction'> {
  description: ReactNode
  relatedArticles?: NewsCardProps[]
}
