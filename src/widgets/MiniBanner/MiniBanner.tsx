import clsx from 'clsx'
import { Picture } from '@components/Picture'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Button } from '@components/Button'
import useViewPort from '@hooks/useViewPort'
import React from 'react'
import { Container } from '@components/primitives'
import { Text } from '@components/primitives/Text'

import styles from './MiniBanner.module.scss'
import type { MiniBannerProps } from './MiniBanner.types'
import { MiniBannerTitle } from './MiniBanner.Title'
import { MiniBannerSubtitle } from './MiniBanner.Subtitle'
import { MiniBannerPreTitle } from './MiniBanner.PreTitle'
import { MiniBannerGoBack } from './MiniBanner.GoBack'

export const MiniBanner = ({
  className,
  variant = 'default',
  pretitle,
  title,
  subtitle,
  logo,
  background,
  cta,
  promoteToH1 = false,
  children,
}: MiniBannerProps) => {
  const slots = resolveCompoundSlots(children, {
    pretitle: MiniBannerPreTitle,
    title: MiniBannerTitle,
    subtitle: MiniBannerSubtitle,
    goBack: MiniBannerGoBack,
  })

  const { is } = useViewPort()
  const isTabletBelow = is('tablet', 'below')
  const isMiniBannerNoBG = variant === 'miniBannerNoBG'
  const isMiniBannerTextLeft = variant === 'miniBannerTextLeft'

  const pretitleNode = slots.pretitle ?? pretitle
  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle
  const goBackNode = slots?.goBack

  return (
    <div className={clsx(styles.minibanner, styles[variant], className)}>
      {(background?.src || background?.desktop?.src || background?.mobile?.src) && (
        <Picture className={styles.background} {...background} />
      )}

      <Container className={clsx(styles.container)}>
        <div className={styles.wrapper}>
          <div className={styles.textContainer}>
            {logo?.src && <Picture className={styles.logo} {...logo} />}
            {pretitleNode && <div className={clsx(styles.pretitle, 'small')}>{pretitleNode}</div>}

            {(titleNode || goBackNode) && (
              <div className={styles.headingWrapper}>
                {goBackNode
                  ? React.cloneElement(goBackNode as React.ReactElement<any>, {
                      className: clsx('back-button', styles['back-button']),
                    })
                  : null}
                {titleNode && (
                  <Text
                    tag="div"
                    promoteToH1={promoteToH1}
                    className={clsx(styles.title, isMiniBannerTextLeft ? 'h1' : 'h4')}
                  >
                    {titleNode}
                  </Text>
                )}
              </div>
            )}

            {subtitleNode && (
              <div
                className={clsx(styles.title, styles.subtitle, {
                  subheading: isMiniBannerNoBG,
                  h1: !isMiniBannerNoBG && !isMiniBannerTextLeft,
                  h4: isMiniBannerTextLeft,
                })}
              >
                {subtitleNode}
              </div>
            )}
          </div>
          {cta && cta.length > 0 && (
            <div className={styles.ctaContainer}>
              {cta.slice(0, 2).map((cta, key) => {
                return (
                  <Button
                    key={key}
                    href={cta.url}
                    isExternal={cta.isExternal}
                    variant={'secondary'}
                    fullWidth={isTabletBelow}
                    logo={cta.logo}
                  >
                    {cta.label}
                  </Button>
                )
              })}
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
