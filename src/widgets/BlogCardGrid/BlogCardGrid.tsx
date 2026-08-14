import clsx from 'clsx'
import { Button } from '@components/Button'
import { Container } from '@components/primitives'
import { NewsCard } from '@components/NewsCard'
import { Grid } from '@components/Grid/Grid'
import { GridItem } from '@components/Grid/Grid.Item'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Text } from '@components/primitives/Text'

import styles from './BlogCardGrid.module.scss'
import type { BlogCardGridProps } from './BlogCardGrid.types'
import { BlogCardGridTitle } from './BlogCardGrid.Title'

export const BlogCardGrid = ({
  title,
  items,
  backgroundColor,
  cta,
  className,
  hasContainer = true,
  gridProps,
  gridItemProps,
  renderLink,
  children,
}: BlogCardGridProps) => {
  const slots = resolveCompoundSlots(children, {
    title: BlogCardGridTitle,
  })

  const titleNode = slots.title ?? title

  const content = (
    <div className={clsx('wrapper', styles['wrapper'])}>
      {title && (
        <div className={clsx('header-container', styles['header-container'])}>
          {titleNode && typeof titleNode === 'string' ? (
            <Text tag="h4" className={clsx('title', styles['title'])}>
              {titleNode}
            </Text>
          ) : (
            titleNode
          )}
          {cta && cta?.url && (
            <div className={clsx('cta-wrapper', styles['cta-wrapper'])}>
              <Button
                className={clsx('cta', styles['cta'])}
                variant="nofillblack"
                href={cta.url}
                isExternal={cta?.isExternal}
                icon={cta?.icon}
              >
                {cta?.label}
              </Button>
            </div>
          )}
        </div>
      )}

      <Grid role="list" columns={3} {...gridProps}>
        {items.map(item => {
          return (
            <GridItem
              key={`${item?.title}-${item?.id}`}
              colSpan={{ md: 3 }}
              role="listitem"
              {...gridItemProps}
            >
              <NewsCard {...item} renderLink={renderLink} />
            </GridItem>
          )
        })}
      </Grid>
    </div>
  )

  return (
    <div
      className={clsx('blog-card-grid', styles['blog-card-grid'], className)}
      style={{
        backgroundColor,
      }}
    >
      {hasContainer ? (
        <Container className={clsx('container', styles['container'])}>{content}</Container>
      ) : (
        content
      )}
    </div>
  )
}
