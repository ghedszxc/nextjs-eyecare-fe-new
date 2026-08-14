import type { ReactNode } from 'react'

export type BlogPostContentBodyProps = {
  children: ReactNode
}

export const BlogPostContentBody = ({ children }: BlogPostContentBodyProps) => {
  return <>{children}</>
}
