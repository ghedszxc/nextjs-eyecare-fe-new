import clsx from 'clsx'
import { Icon } from '@components/Icon'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import type { InfoCardProps } from './InfoCard.types'
import styles from './InfoCard.module.scss'
import { InfoCardTitle } from './InfoCard.Title'
import { InfoCardSubtitle } from './InfoCard.Subtitle'

export const InfoCard = ({ className, title, subtitle, icon, badge, children }: InfoCardProps) => {
  const slots = resolveCompoundSlots(children, {
    title: InfoCardTitle,
    subtitle: InfoCardSubtitle,
  })

  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle

  return (
    <div className={clsx(styles['info-card'], { [styles.hasIcon]: !!icon }, className)}>
      <div className={styles.header}>
        {icon ? (
          <Icon type={icon} />
        ) : badge ? (
          <div className={clsx(styles.badge, 'h4')}>{badge}</div>
        ) : null}
        {titleNode && <div className="h4">{titleNode}</div>}
      </div>
      {subtitleNode && <div className="body">{subtitleNode}</div>}
    </div>
  )
}
