import type { ReactNode } from 'react'
import type { ICta } from '@customTypes/ICta'
import type { IPicture } from '@customTypes/IPicture'

export interface ContactModuleProps {
  className?: string
  children?: ReactNode
  image?: IPicture
  title?: ReactNode
  subtitle?: ReactNode
  ctas?: ICta[]
  blurred?: boolean
  animateBlur?: boolean
}
