import type { Meta, StoryObj } from '@storybook/react-vite'

import { Teaser5050WithCta } from '.'

const meta: Meta<typeof Teaser5050WithCta> = {
  title: 'Widgets/[Module 3] teaser5050WithCta',
  component: Teaser5050WithCta,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Teaser5050WithCta>

export const LeftSideText: Story = {
  args: {
    variant: 'left',
    title: 'Header',
    subtitle: 'Description',
    ctas: [
      {
        url: '#',
        label: 'Button',
      },
    ],
    image: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
    },
  },
}

export const RightSideText: Story = {
  args: {
    variant: 'right',
    title: 'Header',
    subtitle: 'Description',
    ctas: [
      {
        url: '#',
        label: 'Button',
      },
    ],
    image: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
    },
  },
}

export const MultipleCtas: Story = {
  args: {
    className: '!bg-red-500',
    variant: 'right',
    title: 'Header',
    subtitle: 'Description',
    ctas: [
      {
        url: '#',
        label: 'Button',
      },
      {
        url: '#',
        label: 'Another Button',
      },
    ],
    image: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
    },
  },
}

export const WithBgColor: Story = {
  args: {
    variant: 'left',
    title: 'Header',
    subtitle: 'Description',
    bgColor: '#f5f5f5',
    ctas: [
      {
        url: '#',
        label: 'Button',
      },
    ],
    image: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
    },
  },
}

export const CtaWithIcon: Story = {
  args: {
    variant: 'right',
    title: 'Header',
    subtitle: 'Description',
    bgColor: '#f5f5f5',
    ctas: [
      {
        url: '#',
        label: 'Button',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118832/data/245d3378a07597e7d0a047a866fa2d40/arrow-right-alt-dark-icon.svg',
          alt: 'icon',
        },
      },
    ],
    image: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112912/data/54f4a6cefa9833de607237f5bbed367b/picture1.jpg',
        alt: 'Eye doctor with patient',
      },
    },
  },
}
