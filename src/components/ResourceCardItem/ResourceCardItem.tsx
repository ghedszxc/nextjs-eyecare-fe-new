import { ConditionalWrapper } from '@components/primitives/ConditionalWrapper'
import { Icon } from '@components/Icon'
import clsx from 'clsx'

import styles from './ResourceCardItem.module.scss'
import type { ResourceCardItemProps } from './ResourceCardItem.types'

export const ResourceCardItem = ({ item, view, variant, renderLink }: ResourceCardItemProps) => {
  const hasHref = Boolean(item.href)
  const isGlobalSearchVariant = variant === 'global-search'

  const isRestricted = item?.type === 'restricted'

  const linkProps = hasHref
    ? {
        href: item.href,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': item.title,
        'aria-disabled': isRestricted,
      }
    : null

  const cardLink =
    linkProps && isGlobalSearchVariant ? (
      renderLink ? (
        renderLink({
          ...linkProps,
          className: clsx(styles.cardLink, isGlobalSearchVariant && styles[variant]),
          children: null,
        })
      ) : (
        <a
          {...linkProps}
          className={clsx(styles.cardLink, isGlobalSearchVariant && styles[variant])}
        />
      )
    ) : null

  const linkWrapper = ({ children }: { children: React.ReactNode }) => (
    <a {...linkProps} tabIndex={isGlobalSearchVariant ? -1 : 0} className={clsx(styles.cardLink)}>
      {children}
    </a>
  )

  function getIcon() {
    switch (item.type) {
      case 'pdf':
        return 'pdf'
      case 'externalLink':
        return 'externalLink'
      case 'restricted':
        return 'lock'
      default:
        return 'externalLink'
    }
  }

  if (view === 'grid') {
    return (
      <article
        className={clsx(
          styles.cardGrid,
          isGlobalSearchVariant && styles[variant],
          isGlobalSearchVariant && isRestricted ? styles['restricted'] : null
        )}
        aria-labelledby={`title-${item.id}`}
        aria-describedby={isRestricted ? `restricted-${item.id}` : undefined}
      >
        {cardLink}
        <div className={styles.cardBody}>
          <div>
            <ConditionalWrapper condition={hasHref} wrapper={linkWrapper}>
              <div className={styles.cardIconTitle}>
                <Icon type={getIcon()} size={item.type === 'pdf' ? 37 : 33} />
                <span className={styles.cardTitle} id={`title-${item.id}`}>
                  {item.title}
                </span>
              </div>
            </ConditionalWrapper>
            {item.bodyText && (
              <div className={styles.cardBodyTextGrid}>
                <span className={styles.cardBodyText}>{item.bodyText}</span>
                {isRestricted && (
                  <p id={`restricted-${item.id}`} className="sr-only">
                    This resource is restricted. You do not have permission to access it.
                  </p>
                )}
              </div>
            )}
          </div>
          <div className={styles.cardMeta}>
            <span className={styles.cardDate}>{item.date}</span>
            {item.hasNotification && <span className={styles.notificationDot} aria-label="New" />}
          </div>
        </div>
      </article>
    )
  }

  // list view
  return (
    <article className={styles.cardList}>
      <div className={styles.cardListLeft}>
        {item.hasNotification && <span className={styles.notificationDot} aria-label="New" />}
        <span className={styles.cardDate}>{item.date}</span>
      </div>
      <div className={styles.cardListHeader}>
        <ConditionalWrapper condition={hasHref} wrapper={linkWrapper}>
          <div className={styles.cardListRight}>
            <Icon
              type={item.type === 'pdf' ? 'pdf' : 'externalLink'}
              size={item.type === 'pdf' ? 37 : 33}
            />
            <span className={styles.cardTitle}>{item.title}</span>
          </div>
        </ConditionalWrapper>

        {item.bodyText && (
          <div className={styles.cardBodyTextList}>
            <span className={styles.cardBodyText}>{item.bodyText}</span>
          </div>
        )}
      </div>
    </article>
  )
}
