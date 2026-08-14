import type { HTMLAttributes, ReactNode, Ref } from 'react'

export type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  tag?: TextElement
  children: ReactNode
  className?: string
  promoteToH1?: boolean
  ref?: Ref<HTMLElement>
}
