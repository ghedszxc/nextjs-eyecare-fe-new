import { CardCollectionTitle } from './CardCollection.Title'
import { CardCollectionSubtitle } from './CardCollection.Subtitle'
import { CardCollection as Root } from './CardCollection'

export const CardCollection = Object.assign(Root, {
  Title: CardCollectionTitle,
  Subtitle: CardCollectionSubtitle,
})

export type { CardCollectionProps } from './CardCollection.types'
