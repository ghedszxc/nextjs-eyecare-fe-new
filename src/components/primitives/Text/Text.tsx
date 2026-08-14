import type { ElementType } from 'react'

import type { TextProps } from './Text.types'

export const Text = ({ tag = 'p', promoteToH1 = false, ref, children, ...props }: TextProps) => {
  const Component = (promoteToH1 ? 'h1' : tag) as ElementType

  return (
    <Component ref={ref} {...props}>
      {children}
    </Component>
  )
}

Text.displayName = 'Text'
