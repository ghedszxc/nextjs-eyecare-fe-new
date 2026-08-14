import type { ReactNode } from 'react'
import type { ICta } from '@customTypes/ICta'

export interface MiniSectionCtaProps {
  className?: string
  variant?: 'headerCTA' | 'BgColorBlack' | 'BgColorGrey' | 'infoCallout' | 'miniTextCenterCta'
  theme?: 'dark' | 'light' | 'gray'
  cta?: ICta
  title?: ReactNode
  subtitle?: ReactNode
  children?: ReactNode

  moduleStyles?: {
    color?: string
    backgroundColor?: string
  }
}
