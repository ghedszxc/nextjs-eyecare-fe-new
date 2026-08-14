import type { ReactNode } from 'react'

export type BlogPostBodyProps = {
  children: ReactNode
}

export const BlogPostBody = ({ children }: BlogPostBodyProps) => {
  return <>{children}</>
}
