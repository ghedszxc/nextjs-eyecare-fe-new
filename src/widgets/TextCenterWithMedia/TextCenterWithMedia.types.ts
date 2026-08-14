import type { ReactNode } from 'react'

export interface TextCenterWithMediaProps {
  className?: string
  title?: ReactNode
  thumbnail?: string
  videoUrl?: string
  loop?: boolean
  mute?: boolean
  hideControl?: boolean
  autoPlay?: boolean
  children?: ReactNode
}
