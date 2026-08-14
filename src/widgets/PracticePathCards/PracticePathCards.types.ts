import type { ReactNode } from 'react'
import type { ICta } from '@customTypes/ICta'
import type { PracticeCardProps } from '@components/PracticeCard'

export interface PracticePathCardsProps {
  className?: string
  children?: ReactNode
  cards?: PracticeCardProps[]
  title?: ReactNode
  subtitle?: ReactNode
  footer?: ReactNode
  cta?: ICta
}
