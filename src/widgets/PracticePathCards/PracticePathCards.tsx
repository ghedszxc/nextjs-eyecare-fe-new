import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Container } from '@components/primitives'
import { Button } from '@components/Button'
import { PracticeCard } from '@components/PracticeCard'

import styles from './PracticePathCards.module.scss'
import type { PracticePathCardsProps } from './PracticePathCards.types'
import { PracticePathCardsTitle } from './PracticePathCards.Title'
import { PracticePathCardsSubtitle } from './PracticePathCards.Subtitle'
import { PracticePathCardsFooter } from './PracticePathCards.Footer'

export const PracticePathCards = ({
  className,
  children,
  cards,
  title,
  subtitle,
  footer,
  cta,
}: PracticePathCardsProps) => {
  const slots = resolveCompoundSlots(children, {
    title: PracticePathCardsTitle,
    subtitle: PracticePathCardsSubtitle,
    footer: PracticePathCardsFooter,
  })

  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle
  const footerNode = slots.footer ?? footer

  return (
    <div className={clsx(styles['practice-path-cards'], className)}>
      <Container className={styles.container}>
        {(titleNode || subtitleNode || cta?.url) && (
          <div className={styles.wrapper}>
            {(titleNode || subtitleNode) && (
              <div className={styles.content}>
                {titleNode && <h2>{titleNode}</h2>}
                {subtitleNode && <div className="subheading">{subtitleNode}</div>}
              </div>
            )}
            {cta?.url && (
              <div className={styles.ctaWrapper}>
                <Button
                  className={styles.cta}
                  variant="secondary"
                  href={cta.url}
                  isExternal={cta?.isExternal}
                >
                  {cta?.label}
                </Button>
              </div>
            )}
          </div>
        )}
        {cards?.length !== 0 && (
          <div className={styles.cards}>
            {cards?.map((card, key) => (
              <PracticeCard className={styles.card} key={key} {...card} />
            ))}
          </div>
        )}
        {footerNode && <div className="smallest">{footerNode}</div>}
      </Container>
    </div>
  )
}
