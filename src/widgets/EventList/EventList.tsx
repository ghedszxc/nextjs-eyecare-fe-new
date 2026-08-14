import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { UpcomingEventCard } from '@components/UpcomingEventCard/UpcomingEventCard'
import { Button } from '@components/Button'
import { Carousel } from '@components/Carousel'
import useViewPort from '@hooks/useViewPort'
import { Container } from '@components/primitives'
import React from 'react'

import styles from './EventList.module.scss'
import type { EventListProps } from './EventList.types'
import { EventListTitle } from './EventList.Title'
import { EventListEmpty } from './EventList.Empty'

export const EventList = ({
  className,
  title,
  items,
  cta,
  backgroundColor,
  variant,
  children,
}: EventListProps) => {
  const { is } = useViewPort()

  const slots = resolveCompoundSlots(children, {
    title: EventListTitle,
    empty: EventListEmpty,
  })

  const titleNode = slots.title ?? title
  const emptyNode = slots?.empty

  const isBelowTablet = is('tablet', 'below')

  const cardDirection = isBelowTablet ? 'vertical' : 'horizontal'

  const isInternalEventList = variant === 'internalEventList'
  const listDirection = isInternalEventList ? 'horizontal' : 'vertical'

  const isNotEmpty = Boolean(items) && items.length > 0

  return (
    <div
      className={clsx(
        'event-list-module',
        styles['event-list-module'],
        backgroundColor && styles[backgroundColor],
        className
      )}
    >
      <Container className={clsx(styles['event-list-container'])}>
        <div className={styles['event-list-header-container']}>
          {titleNode && <h2 className={clsx(styles['event-list-title'])}>{titleNode}</h2>}
          {cta && cta.url && (
            <Button
              className={styles.cta}
              variant="nofillblack"
              href={cta.url}
              icon={cta.icon}
              isExternal={cta?.isExternal}
            >
              {cta.label}
            </Button>
          )}
        </div>

        {isNotEmpty && (
          <>
            {/* Carousel Card and variant = internalEventList */}
            {isInternalEventList && isBelowTablet && (
              <Carousel
                aria-label="Upcoming events"
                wrapperClass={clsx(styles['carousel-wrapper'], styles[variant])}
                slideClass={styles['carousel-list-item']}
                spaceBetween={16}
                slides={items.map(item => (
                  <UpcomingEventCard
                    key={item.title ?? item.date ?? item.location}
                    className={clsx(styles['event-card'])}
                    direction="vertical"
                    showImage={false}
                    {...item}
                  />
                ))}
              />
            )}

            {/* Horizontal Card and variant = internalEventList */}
            {isInternalEventList && !isBelowTablet && (
              <ul
                aria-label="Upcoming events"
                className={clsx(
                  styles['event-list-wrapper'],
                  styles['horizontal'],
                  styles[variant]
                )}
              >
                {items?.map((item, index) => (
                  <li
                    key={item.title ?? item.date ?? item.location ?? index}
                    className={clsx(styles['card-list-item'])}
                  >
                    <UpcomingEventCard
                      {...item}
                      className={clsx(styles['card-item'])}
                      showImage={false}
                      direction="vertical"
                    />
                  </li>
                ))}
              </ul>
            )}

            {/* Dynamic direction based on screen size and no variant */}
            {!isInternalEventList && (
              <ul
                aria-label="Upcoming events"
                className={clsx(styles['event-list-wrapper'], styles[listDirection])}
              >
                {items?.map((item, index) => (
                  <li key={item.title ?? item.date ?? item.location ?? index}>
                    <UpcomingEventCard {...item} direction={cardDirection} />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        {!isNotEmpty && emptyNode
          ? React.cloneElement(emptyNode as React.ReactElement<any>, {
              className: clsx('empty-search-result', styles['empty-search-result']),
            })
          : null}
      </Container>
    </div>
  )
}
