import clsx from 'clsx'
import { Container } from '@components/primitives'
import { ColTextMenu } from '@components/ColTextMenu'

import styles from './TwoColTextMenu.module.scss'
import type { TwoColTextMenuProps } from './TwoColTextMenu.types'

export const TwoColTextMenu = ({
  className,
  ariaLabel = 'TwoColTextMenu',
  sections = [],
  renderLink,
}: TwoColTextMenuProps) => {
  if (sections.length === 0) return null

  return (
    <nav aria-label={ariaLabel} className={clsx(styles['two-col-text-menu'], className)}>
      <Container className={styles.container}>
        <div className={styles.grid}>
          {sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <div className={styles.heading}>
                <h2 className={clsx('h4', styles.title)}>{section.title}</h2>
              </div>
              <ul className={styles.list}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <ColTextMenu {...item} renderLink={renderLink} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </nav>
  )
}

TwoColTextMenu.displayName = 'TwoColTextMenu'
