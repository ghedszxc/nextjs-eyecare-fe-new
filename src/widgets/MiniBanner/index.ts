import { MiniBannerTitle } from './MiniBanner.Title'
import { MiniBannerSubtitle } from './MiniBanner.Subtitle'
import { MiniBanner as Root } from './MiniBanner'
import { MiniBannerGoBack } from './MiniBanner.GoBack'

export const MiniBanner = Object.assign(Root, {
  Title: MiniBannerTitle,
  Subtitle: MiniBannerSubtitle,
  GoBack: MiniBannerGoBack,
})

export type { MiniBannerProps } from './MiniBanner.types'
