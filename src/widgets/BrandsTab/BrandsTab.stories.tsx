import type { Meta, StoryObj } from '@storybook/react-vite'

import { BrandsTab } from '.'

const meta: Meta<typeof BrandsTab> = {
  title: 'Widgets/[Module 8] BrandsTab',
  component: BrandsTab,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof BrandsTab>

export const Default: Story = {
  args: {
    title: 'Our Retail Brands',
    subtitle: (
      <p>
        EssilorLuxottica Branded Practices are typically located in highly visible, established
        locations, which helps immediately drive patients into a practice, and helps ensure a steady
        flow of traffic into offices.
      </p>
    ),
    tabs: [
      {
        trigger: {
          default: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1116702/data/64f6b6333e33cdadccedf9ee59b0ef13',
            alt: 'lenscrafters-logo-dark',
          },
          active: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1115144/data/e2d735339f8e4bd3b596a7c709f28f44',
            alt: 'for-eyes-logo',
          },
        },
        image: {
          src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1116766/data/ac64c47ce20864b90b34b3aead2d0460',
          alt: 'location-brand-icon',
        },
        content: [
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983618/data/7cf61c5deee5f2252624ac73de167e1e',
              alt: 'info-icon',
            },
            title: 'World-class',
            description: <p>EssilorLuxottica&apos;s flagship brand</p>,
            textColor: '--color-lenscrafter-blue',
          },
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983620/data/f58b299e3c2e8e78ea6e101e6e03dbc9',
              alt: 'calendar-icon',
            },
            title: '40 years',
            description: <p>A pioneer and industry leader in advancing eye care</p>,
            textColor: '--color-lenscrafter-blue',
          },
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983622/data/206f2ce5cefdd00154c9eaa9f54839bb',
              alt: 'location-chip-icon',
            },
            title: '1,000 locations',
            description: <p>Located across Canada, Puerto Rico and the U.S.</p>,
            textColor: '--color-lenscrafter-blue',
          },
        ],
        cta: {
          label: 'Follow LensCrafters on LinkedIn',
          url: '#',
          logo: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1115326/data/f737d07537493f76e8fe3f643977bf9b/arrow-right-alt-dark-icon.svg',
            alt: 'arrow right alt dark icon',
          },
        },
        theme: '--color-lenscrafter-blue',
      },
      {
        trigger: {
          default: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1116704/data/3c2ed58afc1c256eb1573bd33ff44a37',
            alt: 'for-eyes-logo-dark',
          },
          active: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1115146/data/f8b2e0c061ceb03db220bb2779825b24',
            alt: 'for-eyes-logo',
          },
        },
        image: {
          src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1116814/data/117ccbdc5f4c75f554522a52e1d414a2',
          alt: 'location-brand-icon',
        },
        content: [
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983624/data/b28bc921383dc886b6a51d0a35966edb',
              alt: 'info-icon',
            },
            title: 'State-of-the-art',
            description: <p>Digital technology that provides comprehensive eye exams</p>,
            textColor: '--color-foreyes-icontext',
          },
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983626/data/e016589e23114442ddad6e1bd9e83866',
              alt: 'calendar-icon',
            },
            title: '45 years',
            description: <p>Providing quality eyecare in local community</p>,
            textColor: '--color-foreyes-icontext',
          },
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983628/data/c42b28d889d74995b097ef7abee69426',
              alt: 'location-chip-icon',
            },
            title: '1,000 locations',
            description: <p>Located across the U.S. and Puerto Rico</p>,
            textColor: '--color-foreyes-icontext',
          },
        ],
        cta: {
          label: 'Follow For Eyes on LinkedIn',
          url: '#',
          logo: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1115326/data/f737d07537493f76e8fe3f643977bf9b/arrow-right-alt-dark-icon.svg',
            alt: 'arrow right alt dark icon',
          },
        },
        theme: '--color-foreyes-brown',
      },
      {
        trigger: {
          default: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1116706/data/ee5601b8ea771376e2ff17a53d9cb8bd',
            alt: 'optical-logo-dark',
          },
          active: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1115148/data/54efa8b55d263a92e6f7c9fca8bcc2f1',
            alt: 'optical-logo',
          },
        },
        image: {
          src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1116838/data/9f0ed08a4a518fed7e13a6185d1ca02c',
          alt: 'location-brand-icon',
        },
        content: [
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983630/data/f0d16771390eaacc19068020a20663cc',
              alt: 'info-icon',
            },
            title: 'On the Rise',
            description: <p>One of our fastest growing brands</p>,
            textColor: '--color-targetoptical-icontext',
          },
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983630/data/f0d16771390eaacc19068020a20663cc',
              alt: 'calendar-icon',
            },
            title: 'Fresh & Fun',
            description: <p>Appeal to a younger demographic and families</p>,
            textColor: '--color-targetoptical-icontext',
          },
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983632/data/bf761d1fde39b38ccda23df2ce0353ea',
              alt: 'location-chip-icon',
            },
            title: '550 locations',
            description: <p>Over 550 locations with built-in loyal shoppers</p>,
            textColor: '--color-targetoptical-icontext',
          },
        ],
        cta: {
          label: 'Follow Target Optical on LinkedIn',
          url: '#',
          logo: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1115326/data/f737d07537493f76e8fe3f643977bf9b/arrow-right-alt-dark-icon.svg',
            alt: 'arrow right alt dark icon',
          },
        },
        theme: '--color-targetoptical-red',
      },
      {
        trigger: {
          default: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1116708/data/d4a9051683d7799c009e0b3d57acfcf1',
            alt: 'pearle-vision-logo-dark',
          },
          active: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1115150/data/8ed9f476289e996ba9a23f5e8febbeac',
            alt: 'pearle-vision-logo',
          },
        },
        image: {
          src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1116850/data/3e7cc82ae0bb1830645f9e32feb2589a',
          alt: 'location-brand-icon',
        },
        content: [
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983634/data/1f74a1e2c0bac3aa170f9b26c69bcabb',
              alt: 'info-icon',
            },
            title: 'Local & Trusted',
            description: <p>The neighborhood eyecare practice of choice</p>,
            textColor: '--color-pearlevision-icontext',
          },
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983636/data/dc8462bf71cf53110640d1d989e6448e',
              alt: 'calendar-icon',
            },
            title: '550 locations',
            description: <p>Locations in Canada, Puerto Rico and the U.S.</p>,
            textColor: '--color-pearlevision-icontext',
          },
          {
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1983638/data/8c707b651d995527d2aa4a66bce27362',
              alt: 'location-chip-icon',
            },
            title: '#1 Optical Franchise',
            description: <p>Ranked by Entrepreneur in 2023 for the fifth consecutive year</p>,
            textColor: '--color-pearlevision-icontext',
          },
        ],
        cta: {
          label: 'Follow Pearle Vision on LinkedIn',
          url: '#',
          logo: {
            src: 'https://preview-stageuatelec.luxgroup.net/lx/caas/v1/media/1115326/data/f737d07537493f76e8fe3f643977bf9b/arrow-right-alt-dark-icon.svg',
            alt: 'arrow right alt dark icon',
          },
        },
        theme: '--color-pearlevision-green',
      },
    ],
  },
}
