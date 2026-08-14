import clsx from 'clsx'

import styles from './NavigationDropdown.module.scss'
import type { NavigationDropdownProps } from './Navigation.types'

export const NavigationDropdown = ({
  item,
  panelId,
  baseId,
  activeIndex,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: NavigationDropdownProps) => {
  if (item.type !== 'dropdown') return null

  const { title, description, items } = item
  const links = items.filter(sub => sub.type === 'link')

  // Keep Tab flow contained: after the last link move on to whatever follows the
  // trigger in the nav (next tab, then search) and close the panel; Shift+Tab on
  // the first link returns to the trigger.
  const handleLinkKeyDown = (e: React.KeyboardEvent, isFirst: boolean, isLast: boolean) => {
    if (e.key !== 'Tab') return

    const trigger = document.getElementById(`${baseId}-trigger-${activeIndex}`)

    if (e.shiftKey && isFirst) {
      e.preventDefault()
      trigger?.focus()
    } else if (!e.shiftKey && isLast) {
      // The panel is rendered after the search in the DOM, so a plain Tab would
      // skip search. Walk the nav's focusables (excluding the panel itself) to
      // find the element that visually follows the trigger.
      const nav = trigger?.closest('nav')
      const panel = document.getElementById(panelId)
      const focusables = nav
        ? Array.from(
            nav.querySelectorAll<HTMLElement>(
              'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
            )
          ).filter(el => !panel?.contains(el))
        : []
      const next = trigger ? focusables[focusables.indexOf(trigger) + 1] : undefined
      onClose()
      if (next) {
        e.preventDefault()
        next.focus()
      }
    }
  }

  return (
    <div
      id={panelId}
      className={clsx(styles.dropdownPanel, styles.dropdownPanelOpen)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={styles.dropdownInner}>
        <ul className={styles.dropdownLinks}>
          {links.map((sub, i) => (
            <li
              key={i}
              className={clsx(styles.dropdownLinkItem, {
                [styles.dropdownLinkSpacer]: sub.variant === 'subMenuSpacer',
              })}
            >
              <a
                href={sub.cta?.url}
                className={styles.dropdownLink}
                target={sub.cta?.isExternal ? '_blank' : undefined}
                rel={sub.cta?.isExternal ? 'noopener noreferrer' : undefined}
                onKeyDown={e => handleLinkKeyDown(e, i === 0, i === links.length - 1)}
              >
                {sub.cta?.label}
              </a>
            </li>
          ))}
        </ul>
        <span className={styles.dropdownDivider} aria-hidden="true" />
        <div className={styles.dropdownInfo}>
          <h2 className={styles.dropdownTitle}>{title}</h2>
          {description && <div className={styles.dropdownDescription}>{description}</div>}
        </div>
      </div>
    </div>
  )
}
