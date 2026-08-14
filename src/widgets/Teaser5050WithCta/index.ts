import { Teaser5050WithCtaTitle } from './Teaser5050WithCta.Title'
import { Teaser5050WithCtaSubtitle } from './Teaser5050WithCta.Subtitle'
import { Teaser5050WithCta as Root } from './Teaser5050WithCta'

export const Teaser5050WithCta = Object.assign(Root, {
  Title: Teaser5050WithCtaTitle,
  Subtitle: Teaser5050WithCtaSubtitle,
})

export type { Teaser5050WithCtaProps } from './Teaser5050WithCta.types'
