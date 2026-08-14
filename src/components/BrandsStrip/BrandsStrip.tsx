import clsx from 'clsx'
import { Picture } from '@components/Picture'
import { Button } from '@components/Button'
import { useState, useRef, useMemo } from 'react'
import useViewPort from '@hooks/useViewPort'

// GSAP Imports
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import type { BrandsStripProps } from './BrandsStrip.types'
import styles from './BrandsStrip.module.scss'

export const BrandsStrip = ({
  className,
  variant = 'light',
  title,
  logos = [],
  cta,
  size,
}: BrandsStripProps) => {
  const [show, setShow] = useState<boolean>(false)
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const { is } = useViewPort()
  const isTabletBelow = is('tablet', 'below')

  const containerRef = useRef<HTMLDivElement>(null)
  const marqueeRef = useRef<HTMLDivElement>(null)
  const timeline = useRef<gsap.core.Timeline | null>(null)

  const horizontalLoop = (items: HTMLElement[], config: any) => {
    const itemsArray = gsap.utils.toArray(items) as HTMLElement[]
    const cfg = config || {}

    const tl = gsap.timeline({
      repeat: cfg.repeat,
      paused: cfg.paused,
      defaults: { ease: 'none' },
      onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    })

    const length = itemsArray.length
    const startX = itemsArray[0].offsetLeft
    const times: number[] = []
    const widths: number[] = []
    const xPercents: number[] = []
    const pixelsPerSecond = (cfg.speed || 1) * 100
    const snap = cfg.snap === false ? (v: any) => v : gsap.utils.snap(cfg.snap || 1)

    gsap.set(itemsArray, {
      xPercent: (i, target) => {
        const w = (widths[i] = parseFloat(gsap.getProperty(target, 'width', 'px') as string))
        xPercents[i] = snap(
          (parseFloat(gsap.getProperty(target, 'x', 'px') as string) / w) * 100 +
            (gsap.getProperty(target, 'xPercent') as number)
        )
        return xPercents[i]
      },
    })

    gsap.set(itemsArray, { x: 0 })

    const totalWidth =
      itemsArray[length - 1].offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      itemsArray[length - 1].offsetWidth *
        (gsap.getProperty(itemsArray[length - 1], 'scaleX') as number) +
      (parseFloat(cfg.paddingRight) || 0)

    for (let i = 0; i < length; i++) {
      const item = itemsArray[i]
      const curX = (xPercents[i] / 100) * widths[i]
      const distanceToStart = item.offsetLeft - startX
      const distanceToLoop =
        distanceToStart + widths[i] * (gsap.getProperty(item, 'scaleX') as number)

      tl.to(
        item,
        {
          xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
        },
        0
      )
        .fromTo(
          item,
          { xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
          {
            xPercent: xPercents[i],
            duration: (totalWidth - distanceToLoop) / pixelsPerSecond,
            immediateRender: false,
          },
          distanceToLoop / pixelsPerSecond
        )
        .add('label' + i, distanceToStart / pixelsPerSecond)

      times[i] = distanceToStart / pixelsPerSecond
    }

    return tl
  }

  useGSAP(
    () => {
      const refreshCalculations = () => {
        if (!marqueeRef.current || !containerRef.current || logos.length === 0) return

        const items = gsap.utils.toArray<HTMLElement>(marqueeRef.current.children)

        if (items.length === 0) return

        const itemWidth = items[0].clientWidth
        const calculatedTotalWidth = shouldAnimate
          ? itemWidth * items.length + (120 * (items.length - 1)) / 2
          : itemWidth * items.length + 120 * (items.length - 1)
        const containerWidth = containerRef.current.clientWidth
        if (containerWidth === 0) {
          requestAnimationFrame(refreshCalculations)
          return
        }
        if (containerWidth < calculatedTotalWidth) {
          setShouldAnimate(true)

          const ctx = gsap.context(() => {
            const loop = horizontalLoop(items, {
              repeat: -1,
              speed: 1,
              paddingRight: 120,
            })
            timeline.current = loop
          }, containerRef)

          return () => ctx.revert()
        }
      }
      refreshCalculations()
    },
    { scope: containerRef, dependencies: [logos] }
  )

  const handleMouseEnter = () => {
    setShow(true)
    if (timeline.current) {
      timeline.current.pause()
    }
  }

  const handleMouseLeave = () => {
    setShow(false)
    if (timeline.current) {
      timeline.current.play()
    }
  }

  const duplicatedLogos = useMemo(() => {
    if (logos.length === 0) return []
    if (!shouldAnimate) return [...logos]
    return [...logos, ...logos]
  }, [logos])

  return (
    <div
      ref={containerRef}
      className={clsx(
        styles.brandsStrip,
        styles[variant],
        { [styles.small]: size === 'small' },
        className
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={clsx(styles.container, { [styles.blurred]: show && logos.length > 1 })}>
        {title && logos.length === 1 && <h2 className={clsx('body', styles.title)}>{title}</h2>}

        {logos.length > 0 && (
          <div
            ref={marqueeRef}
            className={clsx(styles.logos, { [styles.marqueeGSAP]: shouldAnimate })}
          >
            {duplicatedLogos.map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className={styles.logoWrapper}>
                <Picture className={styles.logo} {...logo} />
              </div>
            ))}
          </div>
        )}
      </div>

      {cta && show && logos.length > 1 && (
        <Button
          className={styles.cta}
          variant="secondary"
          href={cta.url}
          isExternal={cta.isExternal}
          icon="tiltedRightBlack"
          fullWidth={isTabletBelow}
        >
          {cta?.label}
        </Button>
      )}
    </div>
  )
}
