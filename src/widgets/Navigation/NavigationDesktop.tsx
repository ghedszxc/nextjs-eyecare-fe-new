import clsx from 'clsx'
import { Icon } from '@components/Icon'
import { useActivePath } from '@hooks/useActivePath'
import { isPathActive } from '@utils/isPathActive'

import styles from './NavigationDesktop.module.scss'
import type { NavigationDesktopProps } from './Navigation.types'

export const NavigationDesktop = ({
  navItems,
  openIndex,
  onOpen,
  onScheduleClose,
  baseId,
}: NavigationDesktopProps) => {
  const pathname = useActivePath()

  if (!navItems?.length) return null

  const handleTriggerKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Escape') {
      onOpen(null)
    } else if ((e.key === 'Enter' || e.key === ' ') && openIndex !== index) {
      e.preventDefault()
      onOpen(index)
    } else if (e.key === 'Tab' && !e.shiftKey && openIndex === index) {
      // Move focus into the open dropdown's first link instead of skipping past it.
      const firstLink = document
        .getElementById(`${baseId}-panel-${index}`)
        ?.querySelector<HTMLElement>('a, button')
      if (firstLink) {
        e.preventDefault()
        firstLink.focus()
      }
    }
  }

  return (
    <ul className={styles.navTabs}>
      {navItems.map((item, index) => {
        const isOpen = openIndex === index

        if (item.type === 'link') {
          const isCurrent = item.isActive || isPathActive(item.cta?.url, pathname)

          return (
            <li key={index} className={styles.navTab}>
              <a
                href={item.cta?.url}
                className={clsx(styles.navTabLink, isCurrent && styles.navTabActive)}
                aria-current={isCurrent ? 'page' : undefined}
                target={item.cta?.isExternal ? '_blank' : undefined}
                rel={item.cta?.isExternal ? 'noopener noreferrer' : undefined}
                onMouseEnter={() => onOpen(null)}
                onFocus={() => onOpen(null)}
              >
                <span>{item.cta?.label}</span>
              </a>
            </li>
          )
        }

        const isCurrent =
          item.isActive ||
          item.items.some(sub => sub.type === 'link' && isPathActive(sub.cta?.url, pathname))

        return (
          <li key={index} className={styles.navTab}>
            <button
              type="button"
              id={`${baseId}-trigger-${index}`}
              className={clsx(
                styles.navTabLink,
                styles.navTabTrigger,
                (isCurrent || isOpen) && styles.navTabActive,
                isOpen && styles.navTabTriggerOpen
              )}
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls={`${baseId}-panel-${index}`}
              onMouseEnter={() => onOpen(index)}
              onMouseLeave={onScheduleClose}
              onFocus={() => onOpen(index)}
              onClick={() => onOpen(isOpen ? null : index)}
              onKeyDown={e => handleTriggerKeyDown(e, index)}
            >
              <span>{item.title}</span>
              <Icon type="downChevronBlack" size={24} aria-hidden="true" />
            </button>
          </li>
        )
      })}
    </ul>
  )
}
