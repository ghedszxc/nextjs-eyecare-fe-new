import type { Meta, StoryObj } from '@storybook/react-vite'

import type { IFooterSupportGroup } from './Footer.types'

import { Footer } from '.'

const meta: Meta<typeof Footer> = {
  title: 'Widgets/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Footer>

const supporters = [
  {
    image: {
      src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1136224/data/9b33354f0286900f9048b6042471708f',
      alt: 'Proud Support',
    },
    href: '',
  },
  {
    image: {
      src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1136226/data/86e9d395f5dcafbc5d33395b23fe8d48',
      alt: 'Vision Health',
    },
    href: '#',
  },
  {
    image: {
      src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1136228/data/03c2e99fd8a1276e758c96008eea9efd',
      alt: 'One Sight',
    },
    href: '#',
  },
  {
    image: {
      src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1136230/data/bf08276db0c83cc13eeb5842fdf52d19',
      alt: 'Health Care',
    },
    href: '#',
  },
]

const navigationLinks = [
  { label: 'Who We Are', href: '#' },
  { label: 'See Opportunities', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'News & Events', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Cookie Policy', href: '#' },
  { label: 'Accessibility', href: '#' },
]

const supportContacts: IFooterSupportGroup[] = [
  {
    title: 'OD Marketing',
    subtitle:
      '<p><a href="mailto:ODMarketing@luxotticaretail.com">ODMarketing@luxotticaretail.com</a></p>',
  },
  {
    title: 'Equipment Issues',
    subtitle: '<p><a href="tel:(833) 467-4244">(833) 467-4244</a></p>',
  },
  {
    title: 'OD Communications',
    subtitle:
      '<p><a href="mailto:LuxotticaEyeCare@luxottica.com">LuxotticaEyeCare@luxottica.com</a></p>',
  },
  {
    title: 'Operations',
    subtitle:
      '<p><a href="mailto:EyeCareOps@luxotticaretail.com">EyeCareOps@luxotticaretail.com</a></p>',
  },
  {
    title: 'The Appointment Book (TAB) Support Center',
    subtitle:
      '<table><tbody><tr><td>Phone</td><td><a href="tel:(877) 720-9119">(877) 720-9119</a></td></tr><tr><td>Fax</td><td><a href="tel:(513) 492-6990">(513) 492-6990</a></td></tr><tr><td><a href="mailto:theapptbook@luxotticaretail.com">theapptbook@luxotticaretail.com</a></td></tr></tbody></table>',
  },
]

export const Default: Story = {
  args: {
    supporters,
    navigationLinks,
    disclaimer:
      'This website is not intended to offer services to data subjects who are in the European Union. All the Job Postings are related to jobs on the US and Canada soil.',
    copyright: 'COPYRIGHT ©2026 EssilorLuxottica GROUP P.IVA 10182640150/ ALL RIGHTS RESERVED',
    supportContacts,
  },
}

export const FooterWithoutSupport: Story = {
  args: {
    supporters,
    navigationLinks,
    disclaimer:
      'This website is not intended to offer services to data subjects who are in the European Union. All the Job Postings are related to jobs on the US and Canada soil.',
    copyright: 'COPYRIGHT ©2026 EssilorLuxottica GROUP P.IVA 10182640150/ ALL RIGHTS RESERVED',
    supportContacts,
  },
}
