import type { Meta, StoryObj } from '@storybook/react-vite'

import { PracticePathCards } from '.'

const meta: Meta<typeof PracticePathCards> = {
  title: 'Widgets/[Module 6] practicePathCards',
  component: PracticePathCards,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof PracticePathCards>

export const Default: Story = {
  args: {
    title: 'Choose Your Journey',
    subtitle:
      'Practice optometry your way with EssilorLuxottica Eye Care. Learn more about the different practice paths and see what works best for you. ',
    cards: [
      {
        title: 'Be Employed',
        cta: {
          label: '',
          url: '#',
        },
        image: {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112182/data/107cd76835fec615383f6c9a3ac9eb32/headerimagedesk.jpg',
          alt: 'Background',
        },
      },
      {
        title: 'Own A Franchise*',
        cta: {
          label: '',
          url: '#',
        },
        image: {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112230/data/f748ad787ecb41fff20118a6756a6470/headerimagedesk.jpg',
          alt: 'Background',
        },
      },
      {
        title: 'Be A Remote Optometrist',
        cta: {
          label: '',
          url: '#',
        },
        image: {
          src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1112372/data/daad0ffa6201d7dd903225eb312e963d/headerimagedesk.jpg',
          alt: 'Background',
        },
      },
    ],
    footer:
      '*This is not intended as an offer to sell or the solicitation of an offer to buy a franchise. Within the U.S.A., we offer franchises solely by means of our Franchise Disclosure Document. Certain states in the  U.S.A. and certain other countries have laws governing the offer and  sale of franchises. If you are a resident of one of these states or  countries, we will not offer you a franchise unless and until we have  complied with applicable franchise investment law requirements in your jurisdiction.',
    cta: {
      url: '#',
      label: 'Learn More',
    },
  },
}
