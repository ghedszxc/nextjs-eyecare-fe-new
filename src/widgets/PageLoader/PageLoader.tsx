import { Loader } from '@components/Loader'
import { Container } from '@components/primitives'
import clsx from 'clsx'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import React from 'react'

import styles from './PageLoader.module.scss'
import type { PageLoaderProps } from './PageLoader.types'
import { PageLoaderLogo } from './PageLoader.Logo'

export const PageLoader = ({ className, children }: PageLoaderProps) => {
  const slots = resolveCompoundSlots(children, {
    logo: PageLoaderLogo,
  })

  const logoNode = slots.logo

  return (
    <Container className={clsx(styles['container'], className)}>
      <div className={clsx('wrapper', styles['wrapper'])}>
        {logoNode
          ? React.cloneElement(logoNode as React.ReactElement<any>, {
              className: clsx('image-logo', styles['image-logo']),
            })
          : null}

        <div className={clsx('loader-wrapper', styles['loader-wrapper'])}>
          <Loader />
        </div>
        <span className={clsx('loader-text', styles['loader-text'])}>Loading...</span>
      </div>
    </Container>
  )
}
