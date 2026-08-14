import type { IconType } from '@components/Icon'
import type { IPicture } from '@customTypes/IPicture'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

export const ButtonVariantReadOnly = [
  'primary',
  'secondary',
  'ghost',
  'nofill',
  'grey',
  'nofillblack',
  'shiny',
  'tabbutton',
  'navnofillblack',
  'textmenu',
] as const

export const ButtonVariants: string[] = [...ButtonVariantReadOnly]

export type TButtonVariant = (typeof ButtonVariantReadOnly)[number]

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant
  fullWidth?: boolean
  href?: string
  isExternal?: boolean
  icon?: IconType
  logo?: IPicture
  isActive?: boolean
  renderLink?: (
    props: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }
  ) => ReactNode
}
