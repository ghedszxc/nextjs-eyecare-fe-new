import { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Icon } from '@components/Icon'
import { Picture } from '@components/Picture'
import { Button } from '@components/Button'

import styles from './UserMenu.module.scss'
import type { UserMenuProps } from './UserMenu.types'

/**
 * Reusable user / account button.
 *
 * - With `menuItems`, renders a button that toggles a dropdown menu (closes on
 *   Escape or outside interaction).
 * - Without `menuItems`, renders a plain link (when `url` is set) or button.
 */
export const UserMenu = ({ user, className, dropUp, fullWidth }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const hasMenu = !!user.menuItems?.length

  // Open immediately, cancelling any pending close (mirrors NavigationInternalDesktop).
  const openMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setIsOpen(true)
  }

  // Delay the close so the pointer can travel from the button into the menu.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setIsOpen(false), 120)
  }

  const handlePointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') openMenu()
  }
  const handlePointerLeave = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') scheduleClose()
  }

  // Close once keyboard focus leaves the button + menu entirely (Tab out).
  const handleBlur = (e: React.FocusEvent) => {
    if (!wrapperRef.current?.contains(e.relatedTarget as Node)) {
      setIsOpen(false)
    }
  }

  // Clear any pending close timer on unmount.
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  // Close the menu on Escape or interaction outside.
  useEffect(() => {
    if (!isOpen) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    const handleOutside = (e: Event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKey)
    document.addEventListener('pointerdown', handleOutside)
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.removeEventListener('pointerdown', handleOutside)
    }
  }, [isOpen])

  const avatar = user.avatar ? (
    <Picture className={styles.userAvatar} src={user.avatar.src} alt={user.avatar.alt ?? ''} />
  ) : (
    <Icon type="user" size={24} className={styles.userAvatar} aria-hidden="true" />
  )

  // No menu: fall back to a plain link/button.
  if (!hasMenu) {
    const content = (
      <>
        {avatar}
        <span className={styles.userInner}>
          <span className={styles.userLabel}>{user.label}</span>
          <Icon type="downChevronBlack" size={13} aria-hidden="true" />
        </span>
      </>
    )
    const rootClass = clsx(styles.userButton, fullWidth && styles.fullWidth, className)
    return user.url ? (
      <a
        href={user.url}
        className={rootClass}
        target={user.isExternal ? '_blank' : undefined}
        rel={user.isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    ) : (
      <button type="button" className={rootClass}>
        {content}
      </button>
    )
  }

  return (
    <div
      className={clsx(styles.userMenuWrapper, fullWidth && styles.fullWidth, className)}
      ref={wrapperRef}
      onPointerLeave={handlePointerLeave}
      onBlur={handleBlur}
    >
      <Button
        variant="secondary"
        type="button"
        className={styles.userButton}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onPointerEnter={handlePointerEnter}
        onClick={() => setIsOpen(prev => !prev)}
      >
        {avatar}
        <span className={styles.userInner}>
          <span className={styles.userLabel}>{user.label}</span>
          <span
            className={clsx(
              styles.userChevron,
              dropUp && styles.userChevronUp,
              isOpen && styles.userChevronOpen
            )}
          >
            <Icon type="downChevronBlack" size={13} aria-hidden="true" />
          </span>
        </span>
      </Button>

      {isOpen && (
        <div
          className={clsx(styles.userMenu, dropUp && styles.userMenuUp)}
          role="menu"
          onPointerEnter={handlePointerEnter}
          onPointerLeave={handlePointerLeave}
        >
          {user.menuItems?.map((item, i) => {
            const itemClass = clsx(
              styles.userMenuItem,
              item.variant === 'danger' && styles.userMenuItemDanger
            )
            const handleClick = () => {
              item.onClick?.()
              setIsOpen(false)
            }

            return item.url ? (
              <a
                key={i}
                href={item.url}
                role="menuitem"
                className={itemClass}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                onClick={handleClick}
              >
                {item.label}
              </a>
            ) : (
              <button
                key={i}
                type="button"
                role="menuitem"
                className={itemClass}
                onClick={handleClick}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
