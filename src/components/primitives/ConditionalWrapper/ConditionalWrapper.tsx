import type { PropsWithChildren } from 'react'

import type { ConditionalWrapperProps } from './ConditionalWrapper.types'

export const ConditionalWrapper: React.FC<PropsWithChildren<ConditionalWrapperProps>> = ({
  condition,
  children,
  wrapper: Wrapper,
  fallback: Fallback,
  ...rest
}) => {
  return condition && Wrapper ? (
    <Wrapper {...rest}>{children}</Wrapper>
  ) : Fallback ? (
    <Fallback {...rest}>{children}</Fallback>
  ) : (
    <>{children}</>
  )
}
