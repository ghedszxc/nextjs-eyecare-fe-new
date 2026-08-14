import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import ReactPlayer from 'react-player'
import { Container } from '@components/primitives/Container'
import { Picture } from '@components/Picture'
import { Icon } from '@components/Icon/Icon'
import { resolveCompoundSlots } from '@utils/resolveCompoundSlots'

import styles from './TextCenterWithMedia.module.scss'
import type { TextCenterWithMediaProps } from './TextCenterWithMedia.types'
import { TextCenterWithMediaTitle } from './TextCenterWithMedia.Title'

export const TextCenterWithMedia = ({
  className,
  title,
  thumbnail,
  videoUrl,
  loop = false,
  mute = false,
  hideControl = false,
  autoPlay = false,
  children,
}: TextCenterWithMediaProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal()
    } else {
      dialogRef.current?.close()
    }
  }, [isOpen])

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
    setIsOpen(false)
  }

  const slots = resolveCompoundSlots(children, { title: TextCenterWithMediaTitle })
  const titleNode = slots.title ?? title

  return (
    <section className={clsx(styles.textCenterWithMedia, className)}>
      <Container>
        {titleNode && <h2 className="h2">{titleNode}</h2>}
        <div className={styles.thumbnailWrapper}>
          {thumbnail && (
            <>
              <Picture src={thumbnail} alt="Video thumbnail" className={styles.thumbnail} />
              <button
                className={styles.playButton}
                onClick={() => setIsOpen(true)}
                aria-label="Play video"
              >
                <Icon type="play" size={90} />
              </button>
            </>
          )}
        </div>
      </Container>

      <dialog ref={dialogRef} className={styles.modal} onClose={handleClose}>
        <div className={styles.modalInner}>
          <div className={styles.modalHeader}>
            <button className={styles.closeButton} onClick={handleClose} aria-label="Close video">
              <Icon type="xBlack" size={30} />
            </button>
          </div>
          {videoUrl && isOpen && (
            <ReactPlayer
              ref={videoRef}
              src={videoUrl}
              playing={autoPlay}
              loop={loop}
              muted={mute}
              controls={!hideControl}
              className={styles.video}
              width="100%"
              height="100%"
            />
          )}
        </div>
      </dialog>
    </section>
  )
}
