import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@components/Button'
import { Icon } from '@components/Icon'

import { MiniBanner } from '.'

const meta: Meta<typeof MiniBanner> = {
  title: 'Widgets/[Module 2] MiniBanner',
  component: MiniBanner,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof MiniBanner>

export const Default: Story = {
  args: {
    variant: 'default',
    background: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112182/data/107cd76835fec615383f6c9a3ac9eb32/headerimagedesk.jpg',
        alt: 'Background',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112182/data/107cd76835fec615383f6c9a3ac9eb32/headerimagedesk.jpg',
        alt: 'Background',
      },
    },
    logo: {
      src: 'https://www.essilorluxottica.com/Images/EssilorLuxotticaWhite.svg',
      alt: 'EssilorLuxottica',
    },
    subtitle: (
      <>
        Financial Freedom
        <br />
        Student Loan
        <br />
        Repayment Program
        <br />
      </>
    ),
  },
}

export const NoBG: Story = {
  args: {
    variant: 'miniBannerNoBG',
    title: (
      <>
        EssilorLuxottica EyeCare Website
        <br />
        Terms of Use
      </>
    ),
    subtitle: 'Effective as of September 15, 2023',
  },
}

export const TextLeft: Story = {
  args: {
    variant: 'miniBannerTextLeft',
    pretitle: 'PRACTICE MANAGEMENT',
    title: 'Business Planning Tools',
    subtitle: (
      <>
        Ready to create your growth strategy? These tools will help you successfully navigate
        revenue management, insurance claims and more.
      </>
    ),
    background: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112182/data/107cd76835fec615383f6c9a3ac9eb32/headerimagedesk.jpg',
        alt: 'Background',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112182/data/107cd76835fec615383f6c9a3ac9eb32/headerimagedesk.jpg',
        alt: 'Background',
      },
    },
    cta: [
      {
        url: '#',
        label: 'Connect with Us',
        logo: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118642/data/c236bbd777ca90053f33b615468d9d47s',
          alt: 'icon',
        },
      },
    ],
  },
}

export const TextLeftWithBackButton: Story = {
  render: () => {
    return (
      <MiniBanner
        variant="miniBannerTextLeft"
        background={{
          desktop: {
            src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1135926/data/1ff810c06222d846212baa90026f9a70',
            alt: 'Background',
          },
          mobile: {
            src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1135926/data/1ff810c06222d846212baa90026f9a70',
            alt: 'Background',
          },
        }}
        title="News"
      >
        <MiniBanner.GoBack>
          <Button variant="nofill" onClick={() => alert('clicked')} title="go back to news page">
            <Icon type="leftWhite" />
          </Button>
        </MiniBanner.GoBack>
      </MiniBanner>
    )
  },
}
