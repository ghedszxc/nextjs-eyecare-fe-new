import clsx from 'clsx'
import { Picture } from '@components/Picture'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

import styles from './BrandCard.module.scss'
import type { BrandCardProps } from './BrandCard.types'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export const BrandCard = ({
  theme = 'dark',
  title,
  subtitle,
  image,
  animationSettings,
  className,
}: BrandCardProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    const obj = { val: 0 }

    gsap.to(obj, {
      val: animationSettings.to || 0,
      duration: animationSettings.duration || 1.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: animationSettings?.triggerRef?.current ?? containerRef.current,
        start: 'top 80%',
        once: true,
      },
      onUpdate: () => {
        if (textRef.current) {
          textRef.current.textContent = `${Math.round(obj.val).toLocaleString()}${animationSettings.suffix ?? ''}`
        }
      },
    })
  })

  return (
    <div
      ref={containerRef}
      className={clsx('brand-card', styles['brand-card'], styles[theme], className)}
    >
      <div className={clsx('content-wrapper', styles['content-wrapper'])}>
        <h3 className={clsx('content-title', 'body', styles['content-title'])}>{title}</h3>
        <p ref={textRef} className={clsx('content-subtitle', 'h1', styles['content-subtitle'])}>
          {subtitle}
        </p>
      </div>
      {image?.src && <Picture className={clsx('brand-image', styles['brand-image'])} {...image} />}
    </div>
  )
}
