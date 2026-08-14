import clsx from 'clsx'
import { Container } from '@components/primitives'
import { Picture } from '@components/Picture'
import { InfoCard } from '@components/InfoCard'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import styles from './Teaser5050With3Text.module.scss'
import type { Teaser5050With3TextProps } from './Teaser5050With3Text.types'
import { Teaser5050With3TextTitle } from './Teaser5050With3Text.Title'

export const Teaser5050With3Text = ({
  className,
  variant = 'left',
  title,
  cards,
  image,
  children,
}: Teaser5050With3TextProps) => {
  const slots = resolveCompoundSlots(children, {
    title: Teaser5050With3TextTitle,
  })

  const titleNode = slots.title ?? title

  return (
    <div className={clsx(styles['teaser5050-3text'], styles[variant], className)}>
      <Container className={styles.container}>
        {titleNode && <div className={clsx(styles.title, 'h3')}>{titleNode}</div>}
        <div className={styles.content}>
          <div className={styles.cards}>
            {cards?.map((card, key) => (
              <InfoCard key={key} {...card} />
            ))}
          </div>
          {image && <Picture className={styles.image} {...image} />}
        </div>
      </Container>
    </div>
  )
}
