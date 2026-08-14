import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import clsx from 'clsx'
import useViewPort from '@hooks/useViewPort'
import { Pagination } from '@components/Pagination'
import { Icon } from '@components/Icon'
import { Container } from '@components/primitives'

import type { QuoteSectionBlockProps } from './QuoteSectionBlock.types'
import styles from './QuoteSectionBlock.module.scss'

import 'swiper/css'

export const QuoteSectionBlock = ({ className, title, items = [] }: QuoteSectionBlockProps) => {
  const { is } = useViewPort()
  const isMobile = is('tablet', 'below')
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  if (!items.length) return null

  return (
    <div className={clsx(styles.quoteSectionBlock, className)}>
      <Container>
        <div className={styles.inner}>
          {title && <h2 className={styles.title}>{title}</h2>}

          <div className={styles.swiperContainer}>
            <Swiper
              slidesPerView="auto"
              spaceBetween={isMobile ? 8 : 32}
              onSwiper={setSwiperInstance}
              onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
            >
              {items.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className={styles.card}>
                    <Icon type="quote" className={styles.quoteLogo} />
                    {item?.bodyText && <p className={styles.bodyText}>{item.bodyText}</p>}

                    <div className={styles.attribution}>
                      {item?.displayPhoto && (
                        <img
                          src={item.displayPhoto}
                          alt={item.displayName}
                          className={styles.displayPhoto}
                        />
                      )}

                      <div className={styles.attributionText}>
                        {item?.displayName && (
                          <span className={styles.displayName}>{item.displayName}</span>
                        )}

                        {item?.jobTitleLogo && (
                          <img src={item.jobTitleLogo} alt="" className={styles.jobTitleLogo} />
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <Pagination
            key={activeIndex}
            className={styles.controls}
            totalPages={items.length}
            currentPage={activeIndex + 1}
            loop={true}
            onPageChange={page => swiperInstance?.slideTo(page - 1)}
          />
        </div>
      </Container>
    </div>
  )
}
