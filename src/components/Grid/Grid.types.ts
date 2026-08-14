import type { PropsWithChildren, JSX } from 'react'

interface ResponsiveSpan {
  xl?: number
  lg?: number
  md?: number
  ml?: number
  mm?: number
  xs?: number
}

export interface GridProps extends PropsWithChildren {
  columns?: number
  gap?: number | string
  className?: string

  as?: keyof JSX.IntrinsicElements
  role?: React.AriaRole
  ariaLabel?: string
  ariaLabelledBy?: string
}

export interface GridItemProps extends PropsWithChildren {
  colSpan?: ResponsiveSpan
  rowSpan?: ResponsiveSpan
  className?: string

  as?: keyof JSX.IntrinsicElements
  role?: React.AriaRole
  ariaLabel?: string
  ariaLabelledBy?: string
}
