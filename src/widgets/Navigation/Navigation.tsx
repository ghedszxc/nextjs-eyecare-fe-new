import { useState, useEffect, useRef, useId, cloneElement } from 'react'
import clsx from 'clsx'
import { Icon } from '@components/Icon'
import { Picture } from '@components/Picture'
import { Search } from '@components/Search'
import { UserMenu } from '@components/UserMenu'
import type { ButtonProps } from '@components/Button'
import { Button } from '@components/Button'
import { useIsAtTop } from '@hooks/useIsAtTop'
import useViewPort from '@hooks/useViewPort'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import { NavigationLogo } from './NavigationLogo'
import { NavigationCtas } from './NavigationCtas'
import { NavigationBrandBars } from './NavigationBrandBars'
import { NavigationDesktop } from './NavigationDesktop'
import { NavigationDropdown } from './NavigationDropdown'
import { NavigationMobile } from './NavigationMobile'
import styles from './Navigation.module.scss'
import type { NavigationProps } from './Navigation.types'
import { NavigationUserMenuFallback } from './Navigation.UserMenuFallback'

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'

const getFocusable = (root: HTMLElement): HTMLElement[] =>
  Array.from(root.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    el => el.tabIndex !== -1 && el.offsetParent !== null
  )

export const Navigation = (props: NavigationProps) => {
  const {
    className,
    variant,
    transparent,
    mainLogo,
    logoAlt = 'EssilorLuxottica Eye Care',
    homeCta,
    loginCta,
    rightButton,
    navigationItems,
    user,
    searchPlaceholder = 'Search resources',
    searchCta,
    onSearch,
    brandBars,
  } = props

  const isExternal = variant !== 'internal'

  const slots = resolveCompoundSlots(props.children, {
    userMenuFallback: NavigationUserMenuFallback,
  })

  const userMenuFallbackNode = slots.userMenuFallback

  // * States * //
  const [isHovered, setIsHovered] = useState(false) // external transparent treatment
  const [openIndex, setOpenIndex] = useState<number | null>(null) // desktop dropdown
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // shared

  // * Refs (internal) * //
  const navRef = useRef<HTMLElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // * Custom Hooks * //
  const isAtTop = useIsAtTop()
  const { is } = useViewPort()
  const mobileMenuId = useId()
  const baseId = useId()

  // * Conditions * //
  const isTabletBelow = is('tablet', 'below')
  const dropdownOpen = openIndex !== null && !isTabletBelow
  const isTransparent = !!transparent && isAtTop && !isHovered && !dropdownOpen
  const openItem = openIndex !== null ? navigationItems?.items?.[openIndex] : undefined

  // * Handlers (internal) * //
  const openDropdown = (index: number | null) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpenIndex(index)
  }

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setOpenIndex(null), 120)
  }

  const handleNavKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key !== 'Tab' || openIndex === null || !navRef.current) return

    const nav = navRef.current
    const panelId = `${baseId}-panel-${openIndex}`
    const panel = nav.querySelector<HTMLElement>(`#${CSS.escape(panelId)}`)
    const trigger = nav.querySelector<HTMLElement>(`[aria-controls="${panelId}"]`)
    if (!panel || !trigger) return

    const panelItems = getFocusable(panel)
    if (!panelItems.length) return

    const first = panelItems[0]
    const last = panelItems[panelItems.length - 1]
    const active = document.activeElement

    // Tab from the trigger → into the panel.
    if (!e.shiftKey && active === trigger) {
      e.preventDefault()
      first.focus()
      return
    }

    // Shift+Tab from the first panel item → back to the trigger.
    if (e.shiftKey && active === first) {
      e.preventDefault()
      trigger.focus()
      return
    }

    // Tab from the last panel item → the next nav item, closing the dropdown.
    if (!e.shiftKey && active === last) {
      const navItems = getFocusable(nav).filter(el => !panel.contains(el))
      const idx = navItems.indexOf(trigger)
      const next = idx !== -1 ? navItems[idx + 1] : undefined
      if (next) {
        e.preventDefault()
        next.focus()
        setOpenIndex(null)
      }
    }
  }

  // * Effects * //
  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Close the desktop dropdown on Escape or interaction outside the nav.
  useEffect(() => {
    if (!dropdownOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenIndex(null)
    }
    const handleOutside = (e: Event) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null)
      }
    }

    document.addEventListener('keydown', handleKey)
    document.addEventListener('pointerdown', handleOutside)
    document.addEventListener('focusin', handleOutside)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('pointerdown', handleOutside)
      document.removeEventListener('focusin', handleOutside)
    }
  }, [dropdownOpen])

  const logo = mainLogo ? (
    <Picture
      className={clsx(styles.logo, isTabletBelow && styles.logoMobile)}
      src={mainLogo}
      alt={logoAlt}
    />
  ) : null

  return (
    <>
      <nav
        ref={navRef}
        className={clsx(
          styles.navigation,
          dropdownOpen && styles.dropdownOpen,
          // External-only transparent / hover treatment.
          isExternal && transparent && styles.variantTransparent,
          isExternal && isTransparent && styles.transparent,
          className
        )}
        aria-label="Main"
        onKeyDown={handleNavKeyDown}
        onMouseEnter={isExternal && !isTabletBelow ? () => setIsHovered(true) : undefined}
        onMouseLeave={
          isExternal ? (!isTabletBelow ? () => setIsHovered(false) : undefined) : scheduleClose
        }
      >
        <div className={styles.mainBar}>
          <div className={styles.inner}>
            {/* Top row: logo + user / ctas / hamburger */}
            <div className={styles.topRow}>
              {homeCta && logo ? (
                <NavigationLogo
                  mainLogo={mainLogo}
                  homeCta={homeCta}
                  className={clsx(styles.logo, isTabletBelow && styles.logoMobile)}
                />
              ) : (
                logo
              )}

              {isTabletBelow ? (
                <Button
                  variant="nofill"
                  type="button"
                  className={isExternal ? styles.hamburgerButton : styles.hamburger}
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open navigation menu"
                  aria-haspopup="dialog"
                  aria-expanded={isMobileMenuOpen}
                  aria-controls={mobileMenuId}
                >
                  <Icon
                    type={isExternal && isTransparent ? 'menuWhite' : 'menuBlack'}
                    size={24}
                    aria-hidden="true"
                  />
                </Button>
              ) : isExternal ? (
                <NavigationCtas
                  className={styles.upperRight}
                  loginCta={loginCta}
                  rightButton={rightButton}
                  loginVariant={isTransparent ? 'ghost' : 'nofillblack'}
                />
              ) : user ? (
                <UserMenu user={user} />
              ) : userMenuFallbackNode ? (
                cloneElement(userMenuFallbackNode as React.ReactElement<ButtonProps>, {
                  className: clsx('userMenuFallback', styles['userMenuFallback']),
                })
              ) : null}
            </div>

            {/* Bottom row: nav tabs + search (desktop only) */}
            {!isTabletBelow && (
              <div className={styles.bottomRow}>
                <NavigationDesktop
                  navItems={navigationItems?.items}
                  openIndex={openIndex}
                  onOpen={openDropdown}
                  onScheduleClose={scheduleClose}
                  baseId={baseId}
                />
                {/* Search — internal only */}
                {!isExternal && (
                  <Search
                    placeholder={searchPlaceholder}
                    searchCta={searchCta}
                    onSearch={onSearch}
                  />
                )}
              </div>
            )}
          </div>
        </div>

        {!isExternal && <NavigationBrandBars brandBars={brandBars} />}

        {/* Desktop dropdown sub-menu */}
        {dropdownOpen && openItem?.type === 'dropdown' && (
          <NavigationDropdown
            item={openItem}
            panelId={`${baseId}-panel-${openIndex}`}
            baseId={baseId}
            activeIndex={openIndex}
            onClose={() => setOpenIndex(null)}
            onMouseEnter={() => openDropdown(openIndex)}
            onMouseLeave={scheduleClose}
          />
        )}
      </nav>

      {/* Dropdown overlay */}
      {dropdownOpen && <div className={styles.overlay} aria-hidden="true" />}

      {/* Mobile menu */}
      {isTabletBelow && (
        <NavigationMobile
          id={mobileMenuId}
          navItems={navigationItems?.items}
          mainLogo={mainLogo}
          logoAlt={logoAlt}
          homeCta={homeCta}
          user={user}
          searchPlaceholder={searchPlaceholder}
          searchCta={searchCta}
          onSearch={onSearch}
          brandBars={brandBars}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          isExternal={isExternal}
          loginCta={loginCta}
          rightButton={rightButton}
        />
      )}
    </>
  )
}
