import { useCallback, useRef, useState } from 'react'
import clsx from 'clsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Card } from '@components/Card'
import { Container } from '@components/primitives/Container'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Button } from '@components/Button'

import styles from './CardCollection.module.scss'
import type { CardCollectionProps } from './CardCollection.types'
import { CardCollectionTitle } from './CardCollection.Title'
import { CardCollectionSubtitle } from './CardCollection.Subtitle'

export const CardCollection = ({
  className,
  variant = 'default',
  theme = 'dark',
  title,
  subtitle,
  cards = [],
  ctaLabel,
  children,
}: CardCollectionProps) => {
  const container = useRef<HTMLDivElement>(null)
  const revealWrapper = useRef<HTMLDivElement>(null)
  const extraCard = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  const slots = resolveCompoundSlots(children, {
    title: CardCollectionTitle,
    subtitle: CardCollectionSubtitle,
  })

  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle

  const isExamCard = variant === 'examCard'
  const visibleCards = isExamCard ? cards.slice(0, 8) : cards
  const hiddenCards = isExamCard ? cards.slice(8) : []

  const { contextSafe } = useGSAP({ scope: container })

  const handleShowMore = useCallback(() => {
    contextSafe(() => {
      setIsExpanded(true)

      const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } })

      tl.to(`.${styles.cta}`, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        display: 'none',
      })
        .to(`.${styles.cardWrapper}`, { height: 'auto', duration: 0.2 }, '<')
        .to(
          revealWrapper.current,
          {
            height: 'auto',
            duration: 0.3,
          },
          '-=0.1'
        )
        .from(
          extraCard.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.3,
            clearProps: 'all',
          },
          '-=0.3'
        )
    })()
  }, [contextSafe])

  return (
    <Container
      ref={container}
      className={clsx(styles['card-collection'], styles[variant], className)}
    >
      <div className={styles.content}>
        {titleNode && <h2>{titleNode}</h2>}
        {subtitleNode && <div className="subheading">{subtitleNode}</div>}
      </div>

      <div className={styles.wrapper}>
        <div className={clsx(styles.cardWrapper, { [styles['is-expanded']]: isExpanded })}>
          {visibleCards.map((card, key) => (
            <Card key={key} className={styles.card} variant={theme} {...card} />
          ))}
          {isExamCard && hiddenCards.length > 0 && (
            <div ref={revealWrapper} className={styles['reveal-wrapper']}>
              <div className={styles['reveal-inner']}>
                {hiddenCards.map((card, key) => (
                  <Card
                    key={key}
                    ref={extraCard}
                    className={styles.card}
                    variant={theme}
                    {...card}
                  />
                ))}
              </div>
            </div>
          )}
          {isExamCard && !isExpanded && ctaLabel && (
            <Button
              variant="secondary"
              icon="downChevronBlack"
              className={styles.cta}
              onClick={handleShowMore}
            >
              {ctaLabel}
            </Button>
          )}
        </div>
      </div>
    </Container>
  )
}
