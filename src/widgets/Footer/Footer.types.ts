import type { ReactNode } from 'react'
import type { IPicture } from '@customTypes/IPicture'

export interface IFooterLink {
  label: string
  href: string
  isExternal?: boolean
}

export interface IFooterSupporter {
  image: IPicture
  href?: string
}

export interface IFooterSupportGroup {
  title: string
  subtitle: string
}

export interface FooterProps {
  className?: string
  supporters?: IFooterSupporter[]
  navigationLinks?: IFooterLink[]
  disclaimer?: ReactNode
  copyright?: ReactNode
  children?: ReactNode
  supportContacts?: IFooterSupportGroup[]
}
