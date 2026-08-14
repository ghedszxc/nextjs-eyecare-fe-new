import { Text } from '@components/primitives/Text'
import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Container } from '@components/primitives'

import type { TextEventProps } from './TextEvent.types'
import styles from './TextEvent.module.scss'
import { TextEventTitle } from './TextEvent.Title'
import { TextEventRichText } from './TextEvent.RichText'

export const TextEvent = (props: TextEventProps) => {
  const { className, richText, title, variant, children } = props

  // * Utils * //
  const slots = resolveCompoundSlots(children, {
    title: TextEventTitle,
    richText: TextEventRichText,
  })

  // * Nodes * //
  const titleNode = slots.title ?? title
  const richTextNode = slots.richText ?? richText

  return (
    <Container className={clsx(styles.textEvent, className)}>
      <Text tag="h2" className={styles.title}>
        {titleNode}
      </Text>
      <div className={clsx(styles.richText, styles[variant ?? ''])}>{richTextNode}</div>
    </Container>
  )
}
