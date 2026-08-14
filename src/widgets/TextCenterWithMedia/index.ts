import { TextCenterWithMedia as Root } from './TextCenterWithMedia'
import { TextCenterWithMediaTitle } from './TextCenterWithMedia.Title'

export const TextCenterWithMedia = Object.assign(Root, {
  Title: TextCenterWithMediaTitle,
})

export type { TextCenterWithMediaProps } from './TextCenterWithMedia.types'
