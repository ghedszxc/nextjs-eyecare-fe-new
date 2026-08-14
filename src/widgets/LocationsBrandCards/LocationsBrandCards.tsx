import clsx from 'clsx'
import { Container } from '@components/primitives'
import { Picture } from '@components/Picture'
import { Grid } from '@components/Grid/Grid'
import { GridItem } from '@components/Grid/Grid.Item'
import { BrandCard } from '@components/BrandCard'
import { cloneElement, isValidElement, useRef } from 'react'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import type { LocationsBrandCardsProps } from './LocationsBrandCards.types'
import styles from './LocationsBrandCards.module.scss'
import { LocationsBrandCardsText } from './LocationsBrandCards.Text'

export const LocationsBrandCards = ({
  className,
  title,
  subtitle,
  image,
  cards,
  children,
}: LocationsBrandCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const slots = resolveCompoundSlots(children, {
    text: LocationsBrandCardsText,
  })

  const textNode = slots?.text ?? subtitle

  return (
    <div className={clsx('locations-brand-cards', styles['locations-brand-cards'], className)}>
      <Container className={clsx(styles.container)}>
        <div className={clsx('heading-wrapper', styles['heading-wrapper'])} ref={containerRef}>
          <h2 className={clsx('locations-brand-title', 'h2', styles['locations-brand-title'])}>
            {title}
          </h2>

          {textNode && isValidElement(textNode) ? (
            cloneElement(textNode as React.ReactElement<any>, {
              className: clsx(
                'locations-brand-subtitle',
                'subheading',
                styles['locations-brand-subtitle']
              ),
            })
          ) : (
            <p
              className={clsx(
                'locations-brand-subtitle',
                'subheading',
                styles['locations-brand-subtitle']
              )}
            >
              {textNode}
            </p>
          )}
        </div>

        <div className={clsx('content-wrapper', styles['content-wrapper'])}>
          <Picture {...image} className={clsx('locations-image', styles['locations-image'])} />

          <Grid columns={2} className={clsx('card-wrapper', styles['card-wrapper'])} gap={8}>
            {cards.map(card => {
              return (
                <GridItem
                  key={card.id ?? card.title}
                  className={clsx('card-item', styles['card-item'])}
                  colSpan={{ md: 1 }}
                >
                  <BrandCard
                    {...card}
                    animationSettings={{ ...card.animationSettings, triggerRef: containerRef }}
                    className={clsx('card', styles['card'])}
                  />
                </GridItem>
              )
            })}
          </Grid>
        </div>
      </Container>
    </div>
  )
}
