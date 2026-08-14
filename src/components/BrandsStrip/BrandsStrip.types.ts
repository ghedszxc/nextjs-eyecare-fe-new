import type { PictureProps } from '@components/Picture/Picture.types'
import type { ICta } from '@customTypes/ICta'

export interface BrandsStripProps {
  className?: string
  variant?: 'light' | 'dark'
  title?: string
  logos?: PictureProps[]
  cta?: ICta
  size?: 'small'
}
