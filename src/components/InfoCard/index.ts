import { InfoCardTitle } from './InfoCard.Title'
import { InfoCardSubtitle } from './InfoCard.Subtitle'
import { InfoCard as Root } from './InfoCard'

export const InfoCard = Object.assign(Root, {
  Title: InfoCardTitle,
  Subtitle: InfoCardSubtitle,
})

export type { InfoCardProps } from './InfoCard.types'
