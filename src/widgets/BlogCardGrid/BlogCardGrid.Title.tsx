import type { ReactNode } from 'react'

export type BlogCardGridTitleProps = {
  children: ReactNode
}

export const BlogCardGridTitle = ({ children }: BlogCardGridTitleProps) => {
  return <>{children}</>
}
