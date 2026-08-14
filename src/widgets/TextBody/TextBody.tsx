import { Text } from '@components/primitives/Text'
import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Container } from '@components/primitives'

import type { TextBodyProps } from './TextBody.types'
import styles from './TextBody.module.scss'
import { TextBodyTitle } from './TextBody.Title'
import { TextBodyBody } from './TextBody.Body'

export const TextBody = (props: TextBodyProps) => {
  const { className, variant, body, title, titleAlign = 'text-left', children } = props

  // * Utils * //
  const slots = resolveCompoundSlots(children, {
    title: TextBodyTitle,
    body: TextBodyBody,
  })

  // * Nodes * //
  const titleNode = slots.title ?? title
  const bodyNode = slots.body ?? body
  const isTableCenter = variant === 'table-center'
  const isArticleBigPadding = variant === 'ArticleBigPadding'

  return (
    <Container
      className={clsx(styles.textBody, isArticleBigPadding && styles.articleBigPadding, className)}
    >
      {titleNode && (
        <Text
          tag={isTableCenter ? 'h4' : 'h3'}
          className={clsx(styles.title, isTableCenter ? 'text-center' : titleAlign)}
        >
          {titleNode}
        </Text>
      )}
      <div className={styles.body}>{bodyNode}</div>
    </Container>
  )
}
