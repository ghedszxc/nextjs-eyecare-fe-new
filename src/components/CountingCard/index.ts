import { CountingCardTitle } from './CountingCard.Title'
import { CountingCard as Root } from './CountingCard'

export const CountingCard = Object.assign(Root, {
  Title: CountingCardTitle,
})

export type { CountingCardProps } from './CountingCard.types'
