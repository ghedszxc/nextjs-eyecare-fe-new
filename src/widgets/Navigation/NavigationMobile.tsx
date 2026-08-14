import { useState, useId } from 'react'
import clsx from 'clsx'
import { Icon } from '@components/Icon'
import { Picture } from '@components/Picture'
import { Search } from '@components/Search'
import { UserMenu } from '@components/UserMenu'
import { Button } from '@components/Button'

import { NavigationLogo } from './NavigationLogo'
import { NavigationCtas } from './NavigationCtas'
import { NavigationBrandBars } from './NavigationBrandBars'
import styles from './NavigationMobile.module.scss'
import type { NavigationMobileProps } from './Navigation.types'

export const NavigationMobile = ({
  id,
  navItems,
  mainLogo,
  logoAlt = 'EssilorLuxottica Eye Care',
  homeCta,
  user,
  searchPlaceholder,
  searchCta,
  onSearch,
  brandBars,
  isOpen,
  onClose,
  isExternal = false,
  loginCta,
  rightButton,
}: NavigationMobileProps) => {
  const [expanded, setExpanded] = useState<number | null>(null)
  const [supportsHover] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches
  )
  const baseId = useId()

  const toggleExpanded = (index: number) => {
    setExpanded(prev => (prev === index ? null : index))
  }

  const expandItem = (index: number) => {
    setExpanded(index)
  }

  const collapseItem = (index: number) => {
    setExpanded(prev => (prev === index ? null : prev))
  }

  const hoverFocusProps = (index: number) =>
    !supportsHover
      ? {}
      : {
          onMouseEnter: () => expandItem(index),
          onMouseLeave: () => collapseItem(index),
          onFocus: () => expandItem(index),
          onBlur: (e: React.FocusEvent<HTMLLIElement>) => {
            if (!e.currentTarget.contains(e.relatedTarget)) collapseItem(index)
          },
        }

  const logo = mainLogo ? (
    <Picture className={styles.logoMobile} src={mainLogo} alt={logoAlt} />
  ) : null

  /* ── External variant — login/right-button CTAs, no brand bars/search ─────── */
  if (isExternal) {
    return (
      <div
        id={id}
        className={clsx(styles.mobileMenu, isOpen && styles.mobileMenuOpen)}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        aria-hidden={!isOpen}
      >
        <div className={styles.mobileMenuHeader}>
          <NavigationLogo
            mainLogo={mainLogo}
            homeCta={homeCta}
            className={styles.mainLogoMobile}
            onClick={onClose}
          />
          <Button
            type="button"
            variant="nofill"
            className={styles.hamburgerButton}
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <Icon type="xBlack" size={24} aria-hidden="true" />
          </Button>
        </div>

        <ul className={styles.mobileMenuItems}>
          {navItems?.map((item, index) => {
            const subMenuId = `${baseId}-submenu-${index}`
            const isExpanded = expanded === index

            return item.type === 'dropdown' ? (
              <li key={index} className={styles.mobileItem} {...hoverFocusProps(index)}>
                <button
                  type="button"
                  className={styles.mobileItemTrigger}
                  onClick={() => toggleExpanded(index)}
                  aria-expanded={isExpanded}
                  aria-controls={subMenuId}
                >
                  {item.title}
                  <span
                    className={clsx(
                      styles.mobileItemChevron,
                      isExpanded && styles.mobileItemChevronOpen
                    )}
                    aria-hidden="true"
                  >
                    <Icon type="downChevronBlack" size={24} />
                  </span>
                </button>
                <div
                  id={subMenuId}
                  className={clsx(styles.mobileSubItems, isExpanded && styles.mobileSubItemsOpen)}
                >
                  <ul className={styles.mobileSubItemsInner}>
                    {item.items.map((subItem, i) =>
                      subItem.type === 'link' ? (
                        <li key={i}>
                          <a
                            href={subItem.cta?.url}
                            className={clsx(
                              styles.mobileSubLink,
                              subItem.isActive && styles.mobileSubLinkActive
                            )}
                            onClick={onClose}
                          >
                            {subItem.cta?.label}
                          </a>
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={index}>
                <a href={item.cta?.url} className={styles.mobileItemLink} onClick={onClose}>
                  {item.cta?.label}
                </a>
              </li>
            )
          })}
        </ul>

        <NavigationCtas
          className={styles.mobileMenuCtas}
          loginCta={loginCta}
          rightButton={rightButton}
          loginVariant="nofillblack"
        />
      </div>
    )
  }

  return (
    <div
      id={id}
      className={clsx(styles.internalMobileMenu, isOpen && styles.internalMobileMenuOpen)}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      aria-hidden={!isOpen}
    >
      <div className={styles.mobileHeader}>
        {homeCta && logo ? (
          <a href={homeCta} className={styles.logoLink} aria-label={logoAlt} onClick={onClose}>
            {logo}
          </a>
        ) : (
          logo
        )}
        <Button
          variant="ghost"
          type="button"
          className={styles.mobileClose}
          onClick={onClose}
          aria-label="Close navigation menu"
        >
          <Icon type="xBlack" size={24} aria-hidden="true" />
        </Button>
      </div>

      <NavigationBrandBars brandBars={brandBars} className={styles.mobileBrandBars} />

      <ul className={styles.mobileItems}>
        {navItems?.map((item, index) => {
          const subMenuId = `${baseId}-submenu-${index}`
          const isExpanded = expanded === index

          if (item.type === 'link') {
            return (
              <li key={index} className={styles.internalMobileItem}>
                <a
                  href={item.cta?.url}
                  className={styles.internalMobileItemLink}
                  target={item.cta?.isExternal ? '_blank' : undefined}
                  rel={item.cta?.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={onClose}
                >
                  {item.cta?.label}
                </a>
              </li>
            )
          }

          return (
            <li key={index} className={styles.internalMobileItem} {...hoverFocusProps(index)}>
              <button
                type="button"
                className={styles.internalMobileItemTrigger}
                onClick={() => toggleExpanded(index)}
                aria-expanded={isExpanded}
                aria-controls={subMenuId}
              >
                {item.title}
                <span
                  className={clsx(
                    styles.internalMobileItemChevron,
                    isExpanded && styles.internalMobileItemChevronOpen
                  )}
                  aria-hidden="true"
                >
                  <Icon type="downChevronBlack" size={24} />
                </span>
              </button>
              <div
                id={subMenuId}
                className={clsx(
                  styles.internalMobileSubItems,
                  isExpanded && styles.internalMobileSubItemsOpen
                )}
              >
                <ul className={styles.internalMobileSubItemsInner}>
                  {item.items.map((sub, i) =>
                    sub.type === 'link' ? (
                      <li key={i}>
                        <a
                          href={sub.cta?.url}
                          className={clsx(
                            styles.internalMobileSubLink,
                            sub.isActive && styles.internalMobileSubLinkActive
                          )}
                          target={sub.cta?.isExternal ? '_blank' : undefined}
                          rel={sub.cta?.isExternal ? 'noopener noreferrer' : undefined}
                          onClick={onClose}
                        >
                          {sub.cta?.label}
                        </a>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>
            </li>
          )
        })}
      </ul>

      <div className={styles.mobileFooter}>
        <Search
          variant="pill"
          placeholder={searchPlaceholder}
          searchCta={searchCta}
          onSearch={onSearch}
        />
        {user && <UserMenu user={user} dropUp fullWidth />}
      </div>
    </div>
  )
}
