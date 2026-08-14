import type { ICtaIcon } from '@customTypes/ICta'
import type { IPicture } from '@customTypes/IPicture'

export interface NewsCardProps {
  type?: 'restricted'
  className?: string
  id?: string | number
  image?: IPicture
  tag: string
  date: {
    label: string
    value: string
  }
  title: string
  description: string
  cta?: ICtaIcon
  direction?: 'horizontal' | 'vertical'

  renderLink?: (
    props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children: React.ReactNode }
  ) => React.ReactNode
}
