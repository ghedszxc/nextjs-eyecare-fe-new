import { MiniSectionCtaTitle } from './MiniSectionCta.Title'
import { MiniSectionCtaSubtitle } from './MiniSectionCta.Subtitle'
import { MiniSectionCta as Root } from './MiniSectionCta'

export const MiniSectionCta = Object.assign(Root, {
  Title: MiniSectionCtaTitle,
  Subtitle: MiniSectionCtaSubtitle,
})

export type { MiniSectionCtaProps } from './MiniSectionCta.types'
