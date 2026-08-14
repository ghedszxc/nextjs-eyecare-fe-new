import type { ReactNode, FC } from 'react'

export type ConditionalWrapperProps = {
  condition: boolean
  wrapper?: FC<{ children: ReactNode } & Record<string, unknown>>
  fallback?: FC<{ children: ReactNode } & Record<string, unknown>>
} & Record<string, unknown>
