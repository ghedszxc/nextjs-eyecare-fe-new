import type { IconType } from '@components/Icon'
import type { ICta } from '@customTypes/ICta'
import type { IPicture } from '@customTypes/IPicture'

export interface UpcomingEventCardProps {
  className?: string
  image?: IPicture
  date?: string
  title?: string
  description?: string
  location?: string
  cta?: ICta & { icon?: IconType }
  direction?: 'vertical' | 'horizontal'
  showImage?: boolean
}
