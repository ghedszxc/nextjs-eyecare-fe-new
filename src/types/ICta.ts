import type { IconType } from '@components/Icon'

import type { IPicture } from './IPicture'

export interface ICta {
  label?: string
  url: string
  isExternal?: boolean
}

export interface ICtaLogo extends ICta {
  logo?: IPicture
}

export interface ICtaIcon extends ICta {
  icon?: IconType
}

export interface ICtaHoverLogo extends ICtaLogo {
  hoverLogo?: IPicture
}
