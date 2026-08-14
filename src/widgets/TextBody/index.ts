import { TextBody as Root } from './TextBody'
import { TextBodyBody } from './TextBody.Body'
import { TextBodyTitle } from './TextBody.Title'

export const TextBody = Object.assign(Root, {
  Title: TextBodyTitle,
  Body: TextBodyBody,
})

export type { TextBodyProps } from './TextBody.types'
