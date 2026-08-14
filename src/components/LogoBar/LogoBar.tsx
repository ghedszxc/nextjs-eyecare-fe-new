import clsx from 'clsx'
import { Picture } from '@components/Picture'
import { Anchor } from '@components/primitives'

import type { LogoBarProps } from './LogoBar.types'
import styles from './LogoBar.module.scss'

export const LogoBar = ({ className, items }: LogoBarProps) => {
  if (!items || items.length === 0) return null

  return (
    <div className={clsx(styles.logoBar, className)}>
      {items.map((item, key) => {
        return (
          <Anchor key={key} href={item.url} isExternal={item.isExternal}>
            <div className={styles.logoWrapper}>
              {item.logo && <Picture className={styles.logo} {...item.logo} />}
              {item.hoverLogo && <Picture className={styles.logoHover} {...item.hoverLogo} />}
            </div>
          </Anchor>
        )
      })}
    </div>
  )
}
