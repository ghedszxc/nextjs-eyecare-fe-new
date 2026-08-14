import clsx from 'clsx'
import { Picture } from '@components/Picture'
import { Anchor, ConditionalWrapper } from '@components/primitives'
import { Icon } from '@components/Icon'

import styles from './PracticeCard.module.scss'
import type { PracticeCardProps } from './PracticeCard.types'

export const PracticeCard = ({ className, title, cta, image }: PracticeCardProps) => {
  const { url: href, isExternal } = cta ?? {}

  return (
    <div className={clsx(styles['practice-card'], className)}>
      <ConditionalWrapper
        className={clsx(styles.wrapper, styles['focusable-card'])}
        wrapper={Anchor}
        fallback="div"
        condition={!!href}
        tabIndex={0}
        {...((href ? { href, isExternal } : {}) as any)}
      >
        {image && <Picture className={styles.background} {...image} />}
        <div className={styles.container}>
          {title && <div className={clsx(styles.title, 'h3')}>{title}</div>}
          {href && (
            <div className={styles.cta}>
              <Icon className={styles.ctaRest} type="right" />
              <Icon className={styles.ctaHover} type="tiltedRight" />
            </div>
          )}
        </div>
      </ConditionalWrapper>
    </div>
  )
}
