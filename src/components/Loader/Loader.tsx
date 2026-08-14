import clsx from 'clsx'

import styles from './Loader.module.scss'
import type { LoaderProps } from './Loader.types'

export const Loader = ({ className }: LoaderProps) => {
  return <div className={clsx('loader', styles['loader'], className)} />
}

Loader.displayName = 'Loader'
