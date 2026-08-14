import type { ReactNode } from 'react'
import type { ICtaLogo } from '@customTypes/ICta'

export interface TextCenterCtaInBottomProps {
  className?: string
  title?: ReactNode
  subtitle?: ReactNode
  ctas?: ICtaLogo[]
  children?: ReactNode
}
