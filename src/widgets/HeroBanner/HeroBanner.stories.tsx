import type { Meta, StoryObj } from '@storybook/react-vite'

import { HeroBanner } from './HeroBanner'

const meta: Meta<typeof HeroBanner> = {
  title: 'Widgets/[Module 1] HeroBanner',
  component: HeroBanner,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof HeroBanner>

export const PageHeroBanner: Story = {
  args: {
    variant: 'pageHeroBanner',
    promoteToH1: true,
    logo: {
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112116/data/fbb0030bb2f078d4145fd74b67f85f47/logoimage.png',
      alt: 'Onesight EssilorLuxottica Foundation',
      variant: 'titleLogo',
    },
    title: 'Where passion meets practice',
    subtitle: 'Tools and resources to help optometrists succeed',
    backgroundImage: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111770/data/d2747b163859e75a7673eb3b6b45c0cf/headerimage.jpg',
        alt: 'Eye doctor with patient',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111772/data/10c155b91ed08c55e18bbbc830fdf6b8/mobileimage.jpg',
        alt: 'Eye doctor with patient',
      },
    },
    cta: [
      {
        url: '#',
        label: 'Connect with Us',
      },
      {
        url: '#',
        label: 'See practice opportunities',
      },
    ],
    brands: {
      logos: [
        {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112856/data/fb6eea1f972c52e6ca1f8886d84e3661/1ctalogobrandstab.png',
          alt: 'LensCrafters logo',
        },
        {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112866/data/b3ac6090d78951a963c46f7b55aca7ec/2ctalogobrandstab.png',
          alt: 'For Eyes logo',
        },
        {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112878/data/d98bfae3feaf914a6c3e8ab7a9209fa1/3ctalogobrandstab.png',
          alt: 'Optical logo',
        },
        {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112890/data/1d6ee32659402e7105315f43f6b0c3ad/4ctalogobrandstab.png',
          alt: 'Pearle Vision logo',
        },
      ],
      cta: {
        url: '#',
        label: 'Meet our brands',
      },
    },
  },
}

export const MainHeroBanner: Story = {
  args: {
    variant: 'mainHeroBanner',
    promoteToH1: true,
    title: 'Where passion meets practice',
    subtitle: 'Tools and resources to help optometrists succeed',
    backgroundImage: {
      desktop: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111770/data/d2747b163859e75a7673eb3b6b45c0cf/headerimage.jpg',
        alt: 'Eye doctor with patient',
      },
      mobile: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111772/data/10c155b91ed08c55e18bbbc830fdf6b8/mobileimage.jpg',
        alt: 'Eye doctor with patient',
      },
    },
    cta: [
      {
        url: '#',
        label: 'Connect with Us',
      },
      {
        url: '#',
        label: 'See practice opportunities',
      },
    ],
    brands: {
      logos: [
        {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112856/data/fb6eea1f972c52e6ca1f8886d84e3661/1ctalogobrandstab.png',
          alt: 'LensCrafters logo',
        },
        {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112866/data/b3ac6090d78951a963c46f7b55aca7ec/2ctalogobrandstab.png',
          alt: 'For Eyes logo',
        },
        {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112878/data/d98bfae3feaf914a6c3e8ab7a9209fa1/3ctalogobrandstab.png',
          alt: 'Optical logo',
        },
        {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112890/data/1d6ee32659402e7105315f43f6b0c3ad/4ctalogobrandstab.png',
          alt: 'Pearle Vision logo',
        },
      ],
      cta: {
        url: '#',
        label: 'Meet our brands',
      },
    },
  },
}

export const BannerPodcast: Story = {
  args: {
    variant: 'bannerPodcast',
    title: 'Your Vision in Focus',
    subtitle:
      'Tune in monthly as we bring esteemed members of the eye care community, including leading optometrists and industry experts, to help you navigate early steps of your optometric career.',
    backgroundImage: {
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112680/data/335a5473318f0bd97db2621ef9f40634/headerimage.png',
      alt: 'Your Vision Podcast banner image',
    },
    logo: {
      src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112682/data/0725baa62b32761ed96160be229528f0/logo.png',
      alt: 'Your Vision Podcast logo',
    },
    ctaLogo: [
      {
        logo: {
          src: 'https://img.icons8.com/?size=100&id=11116&format=png&color=000000',
          alt: 'Spotify logo Black',
        },
        hoverLogo: {
          src: 'https://img.icons8.com/?size=100&id=11116&format=png&color=1ED760',
          alt: 'Spotify logo',
        },
        url: '#',
      },
      {
        logo: {
          src: 'https://img.icons8.com/?size=100&id=e19IaX7vpxi9&format=png&color=000000',
          alt: 'Youtube logo Black',
        },
        hoverLogo: {
          src: 'https://img.icons8.com/?size=100&id=e19IaX7vpxi9&format=png&color=FF0033',
          alt: 'Youtube logo',
        },
        url: '#',
      },
      {
        logo: {
          src: 'https://img.icons8.com/?size=100&id=xdR2e86qm3ed&format=png&color=000000',
          alt: 'Amazon logo Black',
        },
        hoverLogo: {
          src: 'https://img.icons8.com/?size=100&id=xdR2e86qm3ed&format=png&color=3CD0D9',
          alt: 'Amazon logo',
        },
        url: '#',
      },
      {
        logo: {
          src: 'https://img.icons8.com/?size=100&id=usyXfva6nCgN&format=png&color=000000',
          alt: 'SoundCloud logo Black',
        },
        hoverLogo: {
          src: 'https://img.icons8.com/?size=100&id=usyXfva6nCgN&format=png&color=ED6D34',
          alt: 'SoundCloud logo',
        },
        url: '#',
      },
      {
        logo: {
          src: 'https://img.icons8.com/?size=100&id=Bww0rIwCZEuq&format=png&color=000000',
          alt: 'Apple Podcast logo Black',
        },
        hoverLogo: {
          src: 'https://img.icons8.com/?size=100&id=Bww0rIwCZEuq&format=png&color=F452FF',
          alt: 'Apple Podcast logo',
        },
        url: '#',
      },
    ],
  },
}
