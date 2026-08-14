import { PracticePathCardsFooter } from './PracticePathCards.Footer'
import { PracticePathCardsSubtitle } from './PracticePathCards.Subtitle'
import { PracticePathCardsTitle } from './PracticePathCards.Title'
import { PracticePathCards as Root } from './PracticePathCards'

export const PracticePathCards = Object.assign(Root, {
  Title: PracticePathCardsTitle,
  Subtitle: PracticePathCardsSubtitle,
  Footer: PracticePathCardsFooter,
})

export type { PracticePathCardsProps } from './PracticePathCards.types'
