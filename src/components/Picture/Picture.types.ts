import type { IPicture } from '@customTypes/IPicture'
import type { ImgHTMLAttributes } from 'react'

type SrcOnly = {
  src: string
  desktop?: never
  mobile?: never
}

type ResponsiveSources = {
  src?: never
  desktop: IPicture
  mobile?: IPicture
}

export type PictureProps = ImgHTMLAttributes<HTMLImageElement> & (SrcOnly | ResponsiveSources)
