import clsx from 'clsx'
import { Picture } from '@components/Picture'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import styles from './CountingCard.module.scss'
import type { CountingCardProps } from './CountingCard.types'
import { CountingCardTitle } from './CountingCard.Title'

export const CountingCard = ({ className, title, count, image, children }: CountingCardProps) => {
  const slots = resolveCompoundSlots(children, {
    title: CountingCardTitle,
  })
  const titleNode = slots.title ?? title
  return (
    <div className={clsx(styles['counting-card'], className)}>
      <div className={styles.content}>
        {titleNode && <div className="body">{titleNode}</div>}
        {count && <div className={clsx(styles.count, 'h1')}>{count}</div>}
      </div>
      {image && <Picture className={styles.logo} {...image} />}
    </div>
  )
}
