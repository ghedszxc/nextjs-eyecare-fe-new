import type { AnchorHTMLAttributes, ReactNode } from 'react'

export interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isExternal?: boolean
  renderLink?: (
    props: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }
  ) => ReactNode
}
