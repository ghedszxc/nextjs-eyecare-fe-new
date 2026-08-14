import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Container } from '@components/primitives'
import { Picture } from '@components/Picture'
import { Text } from '@components/primitives/Text'
import { Badge } from '@components/Badge'
import { BlogCardGrid } from '@widgets/BlogCardGrid'
import { BlogPostContent } from '@components/BlogPostContent'

import styles from './BlogPost.module.scss'
import type { BlogPostProps } from './BlogPost.types'
import { BlogPostTitle } from './BlogPost.Title'
import { BlogPostBody } from './BlogPost.Body'

export const BlogPost = ({
  title,
  description: body,
  image,
  date,
  tag,
  relatedArticles,
  className,
  children,
}: BlogPostProps) => {
  const slots = resolveCompoundSlots(children, {
    title: BlogPostTitle,
    body: BlogPostBody,
  })
  const titleNode = slots.title ?? title
  const bodyNode = slots.body ?? body

  return (
    <div className={clsx('blog-post', styles['blog-post'], className)}>
      <Container className={clsx('container', styles['container'])}>
        <div className={clsx('header', styles['header'])}>
          {titleNode && typeof titleNode === 'string' ? (
            <Text tag="h1">{titleNode}</Text>
          ) : (
            titleNode
          )}
          {image && <Picture {...image} className={clsx('image', styles['image'])} />}
        </div>
        <div className={clsx('content', styles['content'])}>
          <div className={clsx('content-top', styles['content-top'])}>
            <Badge size="sm">{tag}</Badge>
            <span className={clsx('content-date', styles['content-date'])}>
              Published <time dateTime={date.value}>{date.label}</time>
            </span>
          </div>

          <BlogPostContent>
            <BlogPostContent.Body>{bodyNode}</BlogPostContent.Body>
          </BlogPostContent>
        </div>

        {relatedArticles && relatedArticles.length > 0 && (
          <BlogCardGrid
            title="More News"
            items={relatedArticles}
            hasContainer={false}
            className={clsx('related-articles', styles['related-articles'])}
          />
        )}
      </Container>
    </div>
  )
}
