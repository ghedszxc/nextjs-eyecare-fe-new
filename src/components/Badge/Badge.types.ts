import type { IconProps } from '@components/Icon/Icon'
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react'

type BadgeBaseProps = {
  children?: ReactNode
  variant?: 'default'
  size?: 'sm' | 'md'
  icon?: IconProps
  iconOnly?: boolean
  live?: 'polite' | 'assertive' | 'off'
}

type NonClickableBadgeProps = BadgeBaseProps &
  HTMLAttributes<HTMLSpanElement> & {
    clickable?: false
  }

type ClickableBadgeProps = BadgeBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    clickable: true
  }
export type BadgeProps = NonClickableBadgeProps | ClickableBadgeProps
