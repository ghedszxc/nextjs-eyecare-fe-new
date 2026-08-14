import { HeroBanner as Root } from './HeroBanner'
import { HeroBannerTitle } from './HeroBanner.Title'
import { HeroBannerSubtitle } from './HeroBanner.Subtitle'

export const HeroBanner = Object.assign(Root, {
  Title: HeroBannerTitle,
  Subtitle: HeroBannerSubtitle,
})

export type { HeroBannerProps } from './HeroBanner.types'
