import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import clsx from 'clsx'
import { Icon } from '@components/Icon'

import type { AccordionProps, AccordionItemProps } from './Accordion.types'
import styles from './Accordion.module.scss'

const AccordionItem = ({
  id,
  title,
  children,
  isOpen = false,
  onToggle,
  renderItemHeader,
  className,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const contentInnerRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const [contentHeight, setContentHeight] = useState<number>(0)

  useEffect(() => {
    if (contentInnerRef.current) {
      setContentHeight(contentInnerRef.current.scrollHeight)
    }
  }, [children])

  useEffect(() => {
    if (contentRef.current && contentHeight > 0) {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }

      const tl = gsap.timeline({
        defaults: { duration: 0.25, ease: 'power2.inOut' },
      })

      if (isOpen) {
        tl.to(contentRef.current, {
          height: contentHeight,
          duration: 0.25,
          ease: 'power2.inOut',
          clearProps: 'height',
        })
      } else {
        tl.to(contentRef.current, {
          height: 0,
          duration: 0.25,
          ease: 'power2.inOut',
        })
      }

      timelineRef.current = tl
    }
  }, [isOpen, contentHeight])

  const handleToggle = () => {
    onToggle?.(id)
  }

  return (
    <div
      className={clsx(
        styles.accordionItem,
        {
          [styles.accordionItemOpen]: isOpen,
        },
        className
      )}
    >
      {renderItemHeader ? (
        renderItemHeader({
          isOpen,
          toggle: handleToggle,
        })
      ) : (
        <button
          className={clsx(styles.accordionHeader, {
            [styles.accordionHeaderOpen]: isOpen,
          })}
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-label={`Toggle ${title}`}
        >
          <div className={styles.accordionHeaderLeft}>
            <span className={clsx('body', styles.accordionTitle)}>{title}</span>
          </div>
          <span
            className={clsx(styles.accordionChevron, {
              [styles.accordionChevronOpen]: isOpen,
            })}
          >
            {isOpen ? (
              <Icon type="filledChevronUpBlack" size={40} />
            ) : (
              <Icon type="circleChevronDown" size={40} />
            )}
          </span>
        </button>
      )}

      <div
        ref={contentRef}
        className={clsx('accordionContent', styles.accordionContent)}
        style={{
          overflow: 'hidden',
          height: 0,
        }}
        inert={!isOpen}
      >
        <div
          ref={contentInnerRef}
          className={clsx('accordionContentInner', styles.accordionContentInner)}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export const Accordion = ({
  className,
  items = [],
  defaultOpenIds = [],
  allowMultiple = false,
  onItemToggle,
}: AccordionProps) => {
  const [openIds, setOpenIds] = useState<(string | number)[]>(defaultOpenIds)

  const handleToggle = (id: string | number) => {
    setOpenIds(prev => {
      let newOpenIds: (string | number)[]

      if (prev.includes(id)) {
        newOpenIds = prev.filter(itemId => itemId !== id)
      } else {
        if (allowMultiple) {
          newOpenIds = [...prev, id]
        } else {
          newOpenIds = [id]
        }
      }

      onItemToggle?.(id, !prev.includes(id))
      return newOpenIds
    })
  }

  if (items.length === 0) {
    return null
  }

  return (
    <div className={clsx(styles.accordion, className)}>
      {items.map(item => {
        return (
          <AccordionItem
            key={item.id}
            id={item.id}
            title={item.title}
            isOpen={openIds.includes(item.id)}
            onToggle={handleToggle}
            renderItemHeader={item.renderItemHeader}
          >
            {item.content}
          </AccordionItem>
        )
      })}
    </div>
  )
}
