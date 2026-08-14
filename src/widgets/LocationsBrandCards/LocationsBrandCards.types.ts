import type { BrandCardProps } from '@components/BrandCard'
import type { IPicture } from '@customTypes/IPicture'
import type { PropsWithChildren, ReactNode } from 'react'

export interface LocationsBrandCardsProps extends PropsWithChildren {
  className?: string
  title: string
  subtitle?: string | ReactNode
  image: IPicture
  cards: BrandCardProps[]
}
