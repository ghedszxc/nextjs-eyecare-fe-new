import { Picture } from '@components/Picture'
import clsx from 'clsx'
import { Button } from '@components/Button'
import { Badge } from '@components/Badge'
import { useId } from 'react'

import styles from './NewsCard.module.scss'
import type { NewsCardProps } from './NewsCard.types'

export const NewsCard = ({
  type,
  className,
  image,
  date,
  description,
  tag,
  title,
  cta,
  direction = 'vertical',
  renderLink,
}: NewsCardProps) => {
  const id = useId()
  const isRestricted = type === 'restricted'

  const linkProps =
    cta && cta.url
      ? {
          href: cta.url,
          target: cta.isExternal ? '_blank' : undefined,
          rel: cta.isExternal ? 'noopener noreferrer' : undefined,
          className: clsx('news-card-link', styles['news-card-link']),
          'aria-label': `${title}${cta.label ? ` — ${cta.label}` : ''}`,
          ...(isRestricted && {
            'aria-disabled': true,
          }),
          tabIndex: isRestricted ? -1 : 0,
        }
      : null

  const cardLink = linkProps ? (
    renderLink ? (
      renderLink({ ...linkProps, children: null })
    ) : (
      <a {...linkProps} />
    )
  ) : null

  return (
    <article
      className={clsx(
        'news-card',
        styles['news-card'],
        type && styles[type],
        styles[`news-card--${direction}`],
        className
      )}
      aria-labelledby={`title-${id}`}
      aria-describedby={isRestricted ? `restricted-${id}` : undefined}
    >
      {cardLink}

      {image && (
        <Picture {...image} className={clsx('news-card-image', styles['news-card-image'])} />
      )}
      <div
        className={clsx('news-card-content', styles['news-card-content'])}
        style={
          {
            '--no-image-padding': image && image.src ? 0 : '1rem',
          } as React.CSSProperties
        }
      >
        <div className={clsx('news-card-top-content', styles['news-card-top-content'])}>
          <Badge className={clsx('news-card-badge', styles['news-card-badge'])}>{tag}</Badge>
          <time dateTime={date.value} className={clsx('news-card-date', styles['news-card-date'])}>
            {date.label}
          </time>
        </div>
        <div className={clsx('news-card-main-content', styles['news-card-main-content'])}>
          <h3 id={`title-${id}`} className={clsx('news-card-title', styles['news-card-title'])}>
            {title}
          </h3>
          {typeof description === 'string' ? (
            <p className={clsx('news-card-description', styles['news-card-description'])}>
              {description}
            </p>
          ) : (
            description
          )}
          {isRestricted && (
            <p id={`restricted-${id}`} className="sr-only">
              This resource is restricted. You do not have permission to access it.
            </p>
          )}
        </div>
        {cta && cta.url && (
          <div className={clsx('news-card-cta-wrapper', styles['news-card-cta-wrapper'])}>
            <Button
              variant="secondary"
              className={clsx('news-card-cta', styles['news-card-cta'])}
              icon={cta.icon}
              // Hidden from a11y tree — the card link above is the real action
              aria-hidden="true"
              tabIndex={-1}
              renderLink={renderLink ? props => renderLink({ ...props, tabIndex: -1 }) : undefined}
            >
              {cta.label}
            </Button>
          </div>
        )}
      </div>
    </article>
  )
}
