'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, A11y } from 'swiper/modules'
import clsx from 'clsx'

import type { CarouselProps } from './Carousel.types'
import styles from './Carousel.module.scss'

import 'swiper/css'

export const Carousel = ({
  slides,
  className,
  ariaLabel = 'Carousel',
  ...props
}: CarouselProps) => {
  return (
    <Swiper
      a11y={{
        enabled: true,
        containerMessage: ariaLabel,
        containerRoleDescriptionMessage: 'carousel',
      }}
      role="region"
      aria-label={ariaLabel}
      className={clsx(styles.carousel, className)}
      spaceBetween={0}
      slidesPerView="auto"
      modules={[FreeMode, A11y]}
      freeMode={{ enabled: true, sticky: false, momentum: true }}
      // wrapperTag="ul"
      loop={false}
      {...props}
      // resistanceRatio={0}
    >
      {slides.map((slide, index) => (
        <SwiperSlide
          key={index}
          // tag="li"
          className={clsx(styles['carousel-item'], props.slideClass)}
        >
          {slide}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
