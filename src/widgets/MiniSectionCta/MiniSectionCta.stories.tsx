import type { Meta, StoryObj } from '@storybook/react-vite'

import { MiniSectionCta } from '.'

const meta: Meta<typeof MiniSectionCta> = {
  title: 'Widgets/[Module 4] miniSectionCTA',
  component: MiniSectionCta,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof MiniSectionCta>

export const Default: Story = {
  args: {
    variant: 'headerCTA',
    title: 'Heading goes here',
    subtitle: 'Description goes here',
    cta: {
      url: '#',
      label: 'Learn more',
    },
  },
}

export const BgColorBlack: Story = {
  args: {
    variant: 'BgColorBlack',
    title: 'Want to stay informed?',
    subtitle:
      'Join our talent network to know more about practice opportunities, inspiring doctor profiles and their best practices.',
    cta: {
      url: '#',
      label: 'Join our Talent Network',
    },
  },
}

export const BgColorGrey: Story = {
  args: {
    variant: 'BgColorGrey',
    title: 'Want to stay informed?',
    subtitle:
      'Join our talent network to know more about practice opportunities, inspiring doctor profiles and their best practices.',
    cta: {
      url: '#',
      label: 'Join our Talent Network',
    },
  },
}

export const InfoCallout: Story = {
  args: {
    variant: 'infoCallout',
    theme: 'gray',
    title: 'What is remote care?',
    moduleStyles: {
      backgroundColor: '#f1f1f1',
      color: '#080808',
    },

    subtitle: (
      <p>
        Contact{' '}
        <a
          href="mailto:EyeCareOps@luxotticaretail.com"
          className="article-anchor"
          target="_blank"
          rel="noreferrer"
        >
          EyeCareOps@luxotticaretail.com
        </a>{' '}
        for support.
      </p>
    ),
  },
}

export const MiniTextCenterCta: Story = {
  args: {
    variant: 'miniTextCenterCta',
    subtitle:
      'Connect with a EssilorLuxottica Eye Care team member for questions or to learn more about opportunities. Share your information and a member of our Eye Care team will be in touch shortly.',
    cta: {
      url: '#',
      label: "Let's Talk",
    },
  },
}
