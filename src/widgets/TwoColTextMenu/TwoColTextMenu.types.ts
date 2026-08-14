import type { AnchorProps } from '@components/primitives'
import type { IColTextMenuItem } from '@components/ColTextMenu'

export interface ITwoColTextMenuSection {
  title: string
  items: IColTextMenuItem[]
}

export interface TwoColTextMenuProps {
  className?: string
  /** Accessible label for the navigation landmark. */
  ariaLabel?: string
  sections: ITwoColTextMenuSection[]
  renderLink?: AnchorProps['renderLink']
}
