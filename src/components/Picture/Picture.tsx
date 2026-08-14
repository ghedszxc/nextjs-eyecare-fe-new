import clsx from 'clsx'

import styles from './Picture.module.scss'
import type { PictureProps } from './Picture.types'

export const Picture = ({ className, ...props }: PictureProps) => {
  if ('src' in props) {
    return <img className={className} {...props} />
  }

  const { desktop, mobile, ...rest } = props

  return (
    <>
      <img
        src={desktop.src}
        alt={desktop.alt}
        className={clsx(className, styles['image-desktop'])}
        {...rest}
      />
      <img
        src={mobile?.src ?? desktop.src}
        alt={mobile?.alt ?? desktop.alt}
        className={clsx(className, styles['image-mobile'])}
        {...rest}
      />
    </>
  )
}
