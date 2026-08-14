import type { Meta, StoryObj } from '@storybook/react-vite'
import { LogoBar } from '@components/LogoBar'

const meta: Meta<typeof LogoBar> = {
  title: 'Components/LogoBar',
  component: LogoBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof meta>

const logoItems = [
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
]

export const Default: Story = {
  args: {
    items: logoItems,
  },
}
