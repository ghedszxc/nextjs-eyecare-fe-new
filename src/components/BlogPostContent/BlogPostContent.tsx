import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import type { BlogPostContentProps } from './BlogPostContent.types'
import styles from './BlogPostContent.module.scss'
import { BlogPostContentBody } from './BlogPostContent.Body'

export const BlogPostContent = ({ className, body, children }: BlogPostContentProps) => {
  const slots = resolveCompoundSlots(children, {
    body: BlogPostContentBody,
  })

  const bodyNode = slots.body ?? body

  return (
    <div className={clsx('blog-post-content', styles['blog-post-content'], className)}>
      {bodyNode}
    </div>
  )
}
