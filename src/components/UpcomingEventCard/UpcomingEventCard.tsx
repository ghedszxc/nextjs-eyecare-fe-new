import { Picture } from '@components/Picture'
import clsx from 'clsx'
import { Button } from '@components/Button'
import useViewPort from '@hooks/useViewPort'

import type { UpcomingEventCardProps } from './UpcomingEventCard.types'
import styles from './UpcomingEventCard.module.scss'

export const UpcomingEventCard = ({
  className,
  image,
  date,
  title,
  location,
  description,
  cta,
  direction = 'horizontal',
  showImage = true,
}: UpcomingEventCardProps) => {
  const { is } = useViewPort()

  const hasCtaWithoutImage = cta && cta.url && !image
  const hasCTAandImage = Boolean(cta && cta.url && image)

  const hasImage = Boolean(image)

  const isBelowMobile = is('mobile-l', 'below')

  return (
    <article
      className={clsx(
        'card',
        styles['event-card'],
        styles[direction],
        hasCtaWithoutImage && styles['cta-without-image'],
        className
      )}
    >
      <div className={clsx('card-content', styles['event-card-content'])}>
        {showImage && image && (
          <Picture {...image} className={clsx('card-image', styles['event-card-image'])} />
        )}
        <div
          className={clsx(
            'card-text-content',
            styles['event-card-text-content'],
            (!showImage || !hasImage) && styles['event-card-show-image']
          )}
        >
          <span className={styles.date}>{date}</span>
          {title && <h3 className={clsx('card-text-title')}>{title}</h3>}
          {location && <span className={styles.location}>{location}</span>}
          {description && (
            <div className={clsx('card-text-description', styles.description)}>{description}</div>
          )}
          {cta && cta.url && (
            <div className={clsx('card-cta-wrapper', styles['event-card-cta-wrapper'])}>
              <Button
                variant="secondary"
                className={clsx(
                  'card-cta',
                  styles['event-card-cta'],
                  !hasCTAandImage && styles.hidden
                )}
                fullWidth={isBelowMobile}
                href={cta.url}
                icon={cta.icon}
                isExternal={cta?.isExternal}
              >
                {cta.label}
              </Button>
            </div>
          )}
        </div>
      </div>

      {cta && cta.url && (
        <div
          className={clsx('card-footer', styles['event-card-footer'], hasImage && styles.hidden)}
        >
          <Button
            variant="secondary"
            className={clsx('card-cta', styles['event-card-cta'])}
            fullWidth={isBelowMobile}
            href={cta.url}
            icon={cta.icon}
            isExternal={cta?.isExternal}
          >
            {cta.label}
          </Button>
        </div>
      )}
    </article>
  )
}
