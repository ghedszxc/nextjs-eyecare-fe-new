import { CardTitle } from './Card.Title'
import { CardSubtitle } from './Card.Subtitle'
import { Card as Root } from './Card'

export const Card = Object.assign(Root, {
  Title: CardTitle,
  Subtitle: CardSubtitle,
})

export type { CardProps } from './Card.types'
