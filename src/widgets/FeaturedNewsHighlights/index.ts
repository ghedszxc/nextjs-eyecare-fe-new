import { FeaturedNewsHighlights as Root } from './FeaturedNewsHighlights'
import { FeaturedNewsHighlightsTitle } from './FeaturedNewsHighlights.Title'

export const FeaturedNewsHighlights = Object.assign(Root, {
  Title: FeaturedNewsHighlightsTitle,
})

export type { FeaturedNewsHighlightsProps } from './FeaturedNewsHighlights.types'
