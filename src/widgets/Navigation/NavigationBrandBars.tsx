import clsx from 'clsx'

import styles from './NavigationBrandBars.module.scss'
import type { NavigationBrandBarsProps } from './Navigation.types'

export const NavigationBrandBars = ({ brandBars, className }: NavigationBrandBarsProps) => {
  if (brandBars?.length === 0) return

  return (
    <div className={clsx(styles.brandBars, className)} aria-hidden="true">
      {brandBars &&
        brandBars.map((bar, index) => (
          <span
            key={`${bar.backgroundColor}-${index}`}
            className={styles.brandBar}
            style={{ backgroundColor: bar.backgroundColor }}
          />
        ))}
    </div>
  )
}
