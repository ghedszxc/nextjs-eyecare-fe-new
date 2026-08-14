import type { AnchorProps } from '@components/primitives'
import type { ICta } from '@customTypes/ICta'

export type IColTextMenuItem = ICta

export interface ColTextMenuProps extends IColTextMenuItem {
  className?: string
  renderLink?: AnchorProps['renderLink']
}
