import { Fragment } from 'react'
import clsx from 'clsx'
import { Container } from '@components/primitives'
import { Picture } from '@components/Picture'
import { Grid } from '@components/Grid/Grid'
import { GridItem } from '@components/Grid/Grid.Item'

import type { TimelineCard, TimelineCardsProps } from './TimelineCards.types'
import styles from './TimelineCards.module.scss'

const TimelineCard = ({ text, logo }: TimelineCard) => {
  return (
    <div className={clsx(styles['card'])}>
      {logo && <Picture className={styles['card-logo']} {...logo} />}
      <span className={clsx(styles['card-text'])}>{text}</span>
    </div>
  )
}

const TimelineSteps = ({ length }: { length: number }) => {
  if (length === 0) return null

  return (
    <ol className={clsx(styles['timeline-steps'])}>
      {Array.from({ length }).map((_, index) => {
        return (
          <Fragment key={index}>
            <li className={clsx(styles['step-container'])}>
              <span className={clsx(styles['step-content'])} aria-hidden="true">
                {index + 1}
              </span>
              <span className="sr-only">
                Step {index + 1} of {length}
              </span>
            </li>

            {index < length - 1 ? (
              <li className={clsx(styles['step-divider'])} role="presentation"></li>
            ) : null}
          </Fragment>
        )
      })}
    </ol>
  )
}

export const TimelineCards = ({ captionText, cards, className }: TimelineCardsProps) => {
  const slicedCards = cards?.slice(0, 3)
  return (
    <div className={clsx(styles['timeline-cards'], className)}>
      <Container className={clsx(styles['container'])}>
        <div className={clsx(styles['wrapper'])}>
          <TimelineSteps length={slicedCards?.length || 0} />
          <Grid columns={3} gap={16} className={clsx(styles['timeline-cards-container'])}>
            {slicedCards?.map((card, index) => (
              <GridItem
                key={index}
                colSpan={{ md: 3 }}
                className={clsx(styles['timeline-card-item'])}
              >
                <TimelineCard {...card} />
              </GridItem>
            ))}
          </Grid>
        </div>
        {captionText && <p className={clsx(styles['timeline-cards-text'])}>{captionText}</p>}
      </Container>
    </div>
  )
}
