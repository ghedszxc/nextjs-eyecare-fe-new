import type { Meta, StoryObj } from '@storybook/react-vite'

import { HeroBannerCarousel } from './HeroBannerCarousel'

const meta: Meta<typeof HeroBannerCarousel> = {
  title: 'Widgets/HeroBannerCarousel',
  component: HeroBannerCarousel,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof HeroBannerCarousel>

export const Default: Story = {
  args: {
    navPrevIcon:
      'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118678/data/69c083910396a4b39ed15187fc614645/chevronleftbuttondark-icon.svg',
    navNextIcon:
      'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118676/data/7840f6a37785b7bf33c49413b6e3c5ee/chevronrightbuttondark-icon.svg',
    items: [
      {
        title: 'Where passion meets practice',
        body: 'Tools and resources to help optometrists succeed in their career journey.',
        image: {
          desktop: {
            src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111770/data/d2747b163859e75a7673eb3b6b45c0cf/headerimage.jpg',
            alt: 'Eye doctor with patient',
          },
          mobile: {
            src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111772/data/10c155b91ed08c55e18bbbc830fdf6b8/mobileimage.jpg',
            alt: 'Eye doctor with patient',
          },
        },
        ctas: [
          { url: '#', label: 'Connect with Us' },
          { url: '#', label: 'Learn More' },
        ],
      },
      {
        title: 'Your Vision in Focus',
        body: 'Tune in monthly as we bring esteemed members of the eye care community to help navigate your career.',
        image: {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112680/data/335a5473318f0bd97db2621ef9f40634/headerimage.png',
          alt: 'Your Vision Podcast banner',
        },
        ctas: [{ url: '#', label: 'Listen Now' }],
        isNewItem: true,
      },
      {
        title: 'Practice Opportunities',
        body: 'Discover practice ownership and partnership opportunities across our family of brands.',
        image: {
          desktop: {
            src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111770/data/d2747b163859e75a7673eb3b6b45c0cf/headerimage.jpg',
            alt: 'Practice opportunities',
          },
          mobile: {
            src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111772/data/10c155b91ed08c55e18bbbc830fdf6b8/mobileimage.jpg',
            alt: 'Practice opportunities',
          },
        },
        ctas: [
          { url: '#', label: 'See Opportunities' },
          { url: '#', label: 'Meet Our Brands' },
        ],
        isNewItem: true,
      },
    ],
  },
}
