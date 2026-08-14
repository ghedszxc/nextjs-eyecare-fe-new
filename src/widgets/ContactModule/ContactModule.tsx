import { useRef } from 'react'
import clsx from 'clsx'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'
import { Container } from '@components/primitives'
import { Button } from '@components/Button'
import { Picture } from '@components/Picture'

import styles from './ContactModule.module.scss'
import type { ContactModuleProps } from './ContactModule.types'
import { ContactModuleTitle } from './ContactModule.Title'
import { ContactModuleSubtitle } from './ContactModule.Subtitle'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export const ContactModule = ({
  className,
  children,
  title,
  subtitle,
  ctas,
  image,
  blurred = true,
  animateBlur = true,
}: ContactModuleProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const blurRef = useRef<HTMLDivElement>(null)

  const slots = resolveCompoundSlots(children, {
    title: ContactModuleTitle,
    subtitle: ContactModuleSubtitle,
  })

  const titleNode = slots.title ?? title
  const subtitleNode = slots.subtitle ?? subtitle

  useGSAP(
    () => {
      if (!blurred || !animateBlur) return

      const revealProxy = { percentage: 0 }

      gsap.to(revealProxy, {
        percentage: 150,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top+=90% bottom',
          once: true,
        },
        duration: 2,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (blurRef.current) {
            const mask = `radial-gradient(circle at center, transparent ${revealProxy.percentage - 30}%, black ${revealProxy.percentage}%)`
            blurRef.current.style.maskImage = mask
            blurRef.current.style.webkitMaskImage = mask
          }
        },
        onComplete: () => {
          if (blurRef.current) blurRef.current.style.display = 'none'
        },
      })
    },
    { scope: containerRef, dependencies: [blurred, animateBlur] }
  )

  return (
    <div ref={containerRef} className={clsx(styles['contact-module'], className)}>
      {blurred && (
        <div
          ref={blurRef}
          className={styles.blur}
          style={{
            maskImage: 'radial-gradient(circle at center, transparent -30%, black 0%)',
            WebkitMaskImage: 'radial-gradient(circle at center, transparent -30%, black 0%)',
          }}
        ></div>
      )}
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            {titleNode && <div className={clsx(styles.title, 'h1')}>{titleNode}</div>}
            {subtitleNode && (
              <div className={clsx(styles.subtitle, 'subheading')}>{subtitleNode}</div>
            )}
          </div>
          <div className={styles['cta-wrapper']}>
            {ctas?.map((cta, key) => (
              <Button
                key={key}
                className={styles.cta}
                href={cta.url}
                isExternal={cta.isExternal}
                variant={ctas.length === 1 || key % 2 === 1 ? 'primary' : 'secondary'}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
        {image && <Picture className={styles.image} {...image} />}
      </Container>
    </div>
  )
}
