import type { IPicture } from '../..'

export interface TimelineCard {
  logo?: IPicture
  text: string
}

export interface TimelineCardsProps {
  className?: string
  captionText?: string
  cards?: TimelineCard[]
}
