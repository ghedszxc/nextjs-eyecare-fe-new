import type { ReactNode } from 'react'
import type { SwiperOptions } from 'swiper/types'

export interface CarouselProps extends SwiperOptions {
  className?: string
  slides: ReactNode[]
  ariaLabel?: string
}
