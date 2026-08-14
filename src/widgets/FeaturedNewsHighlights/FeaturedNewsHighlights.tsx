import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Button } from '@components/Button'
import { Container } from '@components/primitives'
import { NewsCard } from '@components/NewsCard'
import { Text } from '@components/primitives/Text'
import useViewPort from '@hooks/useViewPort'
import { Carousel } from '@components/Carousel'

import styles from './FeaturedNewsHighlights.module.scss'
import type { FeaturedNewsHighlightsProps } from './FeaturedNewsHighlights.types'
import { FeaturedNewsHighlightsTitle } from './FeaturedNewsHighlights.Title'

export const FeaturedNewsHighlights = ({
  variant,
  title,
  items,
  backgroundColor,
  cta,
  className,
  hasContainer = true,
  renderLink,
  children,
}: FeaturedNewsHighlightsProps) => {
  const { is } = useViewPort()

  const slots = resolveCompoundSlots(children, {
    title: FeaturedNewsHighlightsTitle,
  })

  const titleNode = slots.title ?? title

  const featuredCard = items.at(0)
  const sideCards = items.slice(1)

  const isVariantHome = variant === 'home'
  const isBelowTablet = is('tablet', 'below')

  const content = (
    <div className={clsx('wrapper', styles['wrapper'])}>
      {title && cta && (
        <div className={clsx('header-container', styles['header-container'])}>
          {titleNode && typeof titleNode === 'string' ? (
            <Text tag="h2">{titleNode}</Text>
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

      {/* Carousel */}
      {isVariantHome && isBelowTablet && (
        <Carousel
          className={clsx('carousel', styles['carousel'])}
          aria-label="featured news"
          wrapperClass={clsx(styles['carousel-wrapper'])}
          slideClass={styles['carousel-list-item']}
          spaceBetween={16}
          slides={items.map(item => (
            <NewsCard
              key={`${item?.title}-${item?.id}`}
              {...item}
              direction="vertical"
              className={clsx('carousel-news-card', styles['carousel-news-card'])}
            />
          ))}
        />
      )}

      {/* No variant */}
      {(!isVariantHome || (isVariantHome && !isBelowTablet)) && (
        <div className={clsx('content-wrapper', styles['content-wrapper'])}>
          {featuredCard && (
            <NewsCard
              {...featuredCard}
              className={clsx('featured-card', styles['featured-card'])}
              renderLink={renderLink}
            />
          )}
          {sideCards && sideCards.length > 0 && (
            <div className={clsx('side-content', styles['side-content'])}>
              {sideCards.map(card => (
                <NewsCard
                  key={`${card?.title}-${card?.id}`}
                  {...card}
                  className={clsx('side-cards', styles['side-cards'])}
                  direction="horizontal"
                  renderLink={renderLink}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )

  return (
    <div
      className={clsx('featured-news-higlights', styles['featured-news-higlights'], className)}
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
