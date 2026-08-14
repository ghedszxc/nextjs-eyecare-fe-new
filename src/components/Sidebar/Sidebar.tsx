import clsx from 'clsx'
import { Icon } from '@components/Icon'

import styles from './Sidebar.module.scss'
import type { SidebarProps } from './Sidebar.types'

export const Sidebar = ({
  categories,
  isMobile,
  onToggle,
  selectedIndex,
  onSelect,
}: SidebarProps) => {
  if (isMobile) {
    return (
      <div className={styles.sidebarMobile}>
        <button
          type="button"
          className={styles.hamburger}
          aria-label="Open categories"
          onClick={onToggle}
        >
          <Icon type="menuBlack" size={20} aria-hidden="true" />
        </button>
      </div>
    )
  }

  return (
    <nav className={styles.sidebar} aria-label="Resource categories">
      <ul>
        {categories.map((cat, i) => (
          <li
            key={cat.label ?? i}
            className={clsx(styles.sidebarItem, i === selectedIndex && styles.active)}
            role="button"
            tabIndex={0}
            aria-pressed={i === selectedIndex}
            onClick={() => onSelect(i)}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onSelect(i)
              }
            }}
          >
            <span className={styles.label}>{cat.label}</span>
            {cat.hasNotification && <span className={styles.notificationDot} aria-label="New" />}
          </li>
        ))}
      </ul>
    </nav>
  )
}
