import type { IPicture } from '@customTypes/IPicture'
import type { RefObject } from 'react'

export interface BrandCardProps {
  id?: string
  theme?: string
  title: string
  subtitle: string
  image: IPicture
  className?: string

  // animation
  animationSettings: {
    triggerRef?: RefObject<HTMLElement | null>
    to: number
    suffix?: string
    duration?: number
  }
}
