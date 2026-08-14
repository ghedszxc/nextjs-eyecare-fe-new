import { NavigationUserMenuFallback } from './Navigation.UserMenuFallback'
import { Navigation as Root } from './Navigation'

export const Navigation = Object.assign(Root, {
  UserMenuFallback: NavigationUserMenuFallback,
})

export type {
  NavigationProps,
  NavItem,
  InternalNavMenuItem,
  NavigationUser,
  NavigationBrandBar,
} from './Navigation.types'
