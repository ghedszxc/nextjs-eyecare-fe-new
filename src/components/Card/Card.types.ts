import type { ReactNode, Ref } from 'react'
import type { IconType } from '@components/Icon'
import type { ICtaIcon, ICtaLogo } from '@customTypes/ICta'
import type { IPicture } from '@customTypes/IPicture'

export interface CardProps {
  className?: string
  variant?: 'light' | 'dark'
  title?: ReactNode
  subtitle?: ReactNode
  icon?: IconType
  logo?: IPicture
  cta?: ICtaLogo & ICtaIcon
  children?: ReactNode
  ref?: Ref<HTMLDivElement>
}
