import type { ReactNode } from 'react'

export type TextEventRichTextProps = {
  children: ReactNode
}

export const TextEventRichText = ({ children }: TextEventRichTextProps) => {
  return <>{children}</>
}
