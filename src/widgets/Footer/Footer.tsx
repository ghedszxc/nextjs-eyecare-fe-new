import clsx from 'clsx'
import { Picture } from '@components/Picture'
import { Container } from '@components/primitives'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import { FooterDisclaimer } from './Footer.Disclaimer'
import styles from './Footer.module.scss'
import type { FooterProps } from './Footer.types'

export const Footer = ({
  className,
  supporters = [],
  navigationLinks = [],
  disclaimer,
  copyright,
  children,
  supportContacts = [],
}: FooterProps) => {
  const supportColumns: (typeof supportContacts)[] = []
  for (let i = 0; i < supportContacts.length; i += 2) {
    supportColumns.push(supportContacts.slice(i, i + 2))
  }

  const slots = resolveCompoundSlots(children, {
    disclaimer: FooterDisclaimer,
  })

  const titleNode = slots.disclaimer ?? disclaimer

  return (
    <footer className={clsx(styles.footer, className)}>
      <Container className={styles.container}>
        {supportContacts.length > 0 && (
          <div className={styles['support-section']}>
            <p className={styles['support-heading']}>SUPPORT</p>
            <div className={styles.support}>
              {supportColumns.map((column, colIdx) => (
                <div key={colIdx} className={styles['support-column']}>
                  {column.map((group, i) => (
                    <div key={i} className={styles['support-group']}>
                      <p className={styles['support-title']}>{group.title}</p>
                      <div
                        className={styles['support-subtitle']}
                        dangerouslySetInnerHTML={{ __html: group.subtitle }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        <div className={styles.bottom}>
          <div className={styles['bottom-left']}>
            {supporters.length > 0 && (
              <div className={styles.supporters}>
                <div className={styles['supporters-logos']}>
                  {supporters.map((supporter, index) =>
                    supporter.href ? (
                      <a
                        key={index}
                        href={supporter.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles['supporter-link']}
                      >
                        <Picture {...supporter.image} />
                      </a>
                    ) : (
                      <div key={index} className={styles['supporter-link-primary']}>
                        <Picture {...supporter.image} />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {titleNode && <div className={clsx(styles.disclaimer, 'p')}>{titleNode}</div>}
            {copyright && <p className={styles.copyright}>{copyright}</p>}
          </div>

          {navigationLinks.length > 0 && (
            <nav className={styles['bottom-right']}>
              <ul className={styles['nav-list']}>
                {navigationLinks.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={styles['nav-link']}
                      {...(link.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>

        {children}
      </Container>
    </footer>
  )
}
