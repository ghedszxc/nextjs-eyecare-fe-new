import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import clsx from 'clsx'
import { Button } from '@components/Button'
import { Picture } from '@components/Picture'
import { Icon } from '@components/Icon'
import useViewPort from '@hooks/useViewPort'

import type { HeroBannerCarouselProps } from './HeroBannerCarousel.types'
import styles from './HeroBannerCarousel.module.scss'

import 'swiper/css'

export const HeroBannerCarousel = ({ className, items = [] }: HeroBannerCarouselProps) => {
  const { is } = useViewPort()
  const isMobile = is('tablet', 'below')
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  if (!items.length) return null

  return (
    <div className={clsx(styles.heroBannerCarousel, className)}>
      <div className={styles.inner}>
        <div className={styles.swiperContainer}>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView="auto"
            spaceBetween={isMobile ? 8 : 32}
            onSwiper={setSwiperInstance}
            onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
          >
            {items.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <div className={styles.card}>
                  {item.isNewItem && (
                    <div className={styles.cardCorner}>
                      {isMobile ? (
                        <span className={styles.cardCornerDot} />
                      ) : (
                        <Icon type="newIcon" className={styles.cardCornerImage} />
                      )}
                    </div>
                  )}
                  <div className={styles.cardContent}>
                    <h2 className={clsx(styles.cardTitle, 'h3')}>{item.title}</h2>
                    <div className={styles.cardBottom}>
                      <div className={styles.cardBody}>{item.body}</div>
                      {item.ctas.length > 0 && (
                        <div className={styles.cardCtaContainer}>
                          {item.ctas.map((cta: any, ctaIndex: number) => (
                            <Button
                              key={ctaIndex}
                              href={cta.url}
                              isExternal={cta.isExternal}
                              variant="primary"
                              fullWidth={isMobile}
                              logo={cta.logo}
                            >
                              {cta.label}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.cardImageWrapper}>
                    <Picture className={styles.cardImage} {...item.image} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.controls}>
          <button
            className={styles.navButton}
            onClick={() => swiperInstance?.slidePrev()}
            disabled={activeIndex === 0}
            aria-label="Previous slide"
          >
            <Icon type="chevronLeftBlack" className={styles.navIcon} />
          </button>

          <div className={styles.pagination}>
            {items.map((_, index) => (
              <button
                key={index}
                className={clsx(styles.dot, index === activeIndex && styles.dotActive)}
                onClick={() => swiperInstance?.slideTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.navButton}
            onClick={() => swiperInstance?.slideNext()}
            disabled={activeIndex === items.length - 1}
            aria-label="Next slide"
          >
            <Icon type="chevronRightBlack" className={styles.navIcon} />
          </button>
        </div>
      </div>
    </div>
  )
}
