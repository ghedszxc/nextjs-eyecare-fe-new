import { TextEvent as Root } from './TextEvent'
import { TextEventRichText } from './TextEvent.RichText'
import { TextEventTitle } from './TextEvent.Title'

export const TextEvent = Object.assign(Root, {
  Title: TextEventTitle,
  RichText: TextEventRichText,
})

export type { TextEventProps } from './TextEvent.types'
