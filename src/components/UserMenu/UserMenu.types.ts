import type { IPicture } from '@customTypes/IPicture'

export interface UserMenuItem {
  label: string
  /** Renders the item as a link. */
  url?: string
  isExternal?: boolean
  /** Called when the item is activated. */
  onClick?: () => void
  /** `danger` renders the item in the notification-red treatment (e.g. Log out). */
  variant?: 'default' | 'danger'
}

export interface UserMenuUser {
  /** Display name shown next to the avatar. */
  label: string
  /** Optional link the button navigates to (used when `menuItems` is empty). */
  url?: string
  isExternal?: boolean
  /** Optional avatar image; falls back to a default user icon. */
  avatar?: IPicture
  /** Items shown in the dropdown menu opened by the button. */
  menuItems?: UserMenuItem[]
}

export interface UserMenuProps {
  user: UserMenuUser
  className?: string
  /** Opens the menu above the button instead of below (e.g. in a footer). */
  dropUp?: boolean
  /** Stretches the button to fill the width of its container. */
  fullWidth?: boolean
}
