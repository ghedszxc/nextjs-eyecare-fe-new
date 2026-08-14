import { PageLoader as Root } from './PageLoader'
import { PageLoaderLogo } from './PageLoader.Logo'

export const PageLoader = Object.assign(Root, {
  Logo: PageLoaderLogo,
})

export type { PageLoaderProps } from './PageLoader.types'
