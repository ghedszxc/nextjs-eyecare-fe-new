import type { ICta } from '@customTypes/ICta'
import type { TButtonVariant } from '@components/Button'
import type { UserMenuUser } from '@components/UserMenu'
import type { PropsWithChildren } from 'react'

/**
 * Re-exported from the reusable UserMenu component so existing consumers of
 * the Navigation types keep working.
 */
export type {
  UserMenuUser as NavigationUser,
  UserMenuItem as InternalNavMenuItem,
} from '@components/UserMenu'

/* ------------------------------------------------------------------ */
/* Navigation item model                                              */
/* ------------------------------------------------------------------ */

interface BaseNavItem {
  title: string
  description: string
}

interface NavLink {
  type: 'link'
  cta?: ICta
  /** Marks the item as the current page (adds the active treatment). */
  isActive?: boolean
  variant?: 'subMenuSpacer'
}

interface NavDropdown extends BaseNavItem {
  type: 'dropdown'
  items: NavItem[]
  cta?: ICta
  /** Marks the item as the current page (adds the active treatment). */
  isActive?: boolean
}

/** A single top-level navigation entry, shared by the external and internal navigation. */
export type NavItem = NavLink | NavDropdown

/**
 * Brand bar colors shown in the top strip of the navigation.
 */
export interface NavigationBrandBar {
  backgroundColor: string
}

/* ------------------------------------------------------------------ */
/* Unified navigation props (NavigationExternal as base)              */
/* ------------------------------------------------------------------ */

export interface NavigationProps extends PropsWithChildren {
  className?: string
  variant?: 'external' | 'internal' | '' | null
  transparent?: boolean
  mainLogo?: string
  logoAlt?: string
  homeCta?: string
  loginCta?: ICta
  rightButton?: ICta
  navigationItems?: {
    items: NavItem[]
  }

  /* Internal add-ons (accepted for API compatibility). */
  user?: UserMenuUser
  searchPlaceholder?: string
  searchCta?: ICta
  onSearch?: (query: string) => void
  brandBars?: NavigationBrandBar[]
}

/* ------------------------------------------------------------------ */
/* Sub-component props                                                */
/* ------------------------------------------------------------------ */

export interface NavigationLogoProps {
  mainLogo?: string
  homeCta?: string
  className?: string
  onClick?: () => void
  logoAlt?: string
}

export interface NavigationCtasProps {
  loginCta?: ICta
  rightButton?: ICta
  loginVariant: TButtonVariant
  className?: string
}

export interface NavigationDesktopProps {
  navItems?: NavItem[]
  /** Index of the currently open dropdown, or null. */
  openIndex: number | null
  /** Open the dropdown at `index`, or close all with `null`. */
  onOpen: (index: number | null) => void
  /** Schedule a debounced close (used on mouse leave). */
  onScheduleClose: () => void
  baseId: string
}

export interface NavigationDropdownProps {
  item: NavItem
  panelId: string
  /** Shared id prefix used to locate the owning trigger for keyboard focus flow. */
  baseId: string
  /** Index of the trigger that owns this panel. */
  activeIndex: number
  /** Close the dropdown (used when Tab exits the last link). */
  onClose: () => void
  onMouseEnter: () => void
  onMouseLeave: () => void
}

export interface NavigationMobileProps {
  id?: string
  navItems?: NavItem[]
  mainLogo?: string
  logoAlt?: string
  homeCta?: string
  user?: UserMenuUser
  searchPlaceholder?: string
  searchCta?: ICta
  onSearch?: (query: string) => void
  brandBars?: NavigationBrandBar[]
  isOpen: boolean
  onClose: () => void
  /* External variant — renders login/right-button CTAs instead of search + user menu. */
  isExternal?: boolean
  loginCta?: ICta
  rightButton?: ICta
}

export interface NavigationBrandBarsProps {
  brandBars?: NavigationBrandBar[]
  className?: string
}
