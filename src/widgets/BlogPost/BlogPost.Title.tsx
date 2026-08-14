import type { ReactNode } from 'react'

export type BlogPostTitleProps = {
  children: ReactNode
}

export const BlogPostTitle = ({ children }: BlogPostTitleProps) => {
  return <>{children}</>
}
