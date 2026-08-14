import type { Meta, StoryObj } from '@storybook/react-vite'
import { HeroBannerCarousel } from '@widgets/HeroBannerCarousel'
import { CardCollection } from '@widgets/CardCollection'
import { EventList } from '@widgets/EventList'
import { Teaser5050WithCta } from '@widgets/Teaser5050WithCta'
import { MiniSectionCta } from '@widgets/MiniSectionCta'
import { Footer } from '@widgets/Footer'

const meta: Meta = {
  title: 'Pages/Home Page',
  parameters: { layout: 'fullscreen' },
}

export default meta
type Story = StoryObj

const heroBannerCarouselArgs = {
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
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118654/data/808ff707c29a8a3f2a0bf70ec1bb3356',
          alt: 'Eye doctor with patient',
        },
        mobile: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118816/data/37c29c2c9d5f595f60e015db0e2e3653',
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
        alt: 'Your Vision Podcast banner',
        desktop: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118658/data/7748a5cc9d90ea978677dc7e6c46f181',
          alt: 'Eye doctor with patient',
        },
        mobile: {
          src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118812/data/7511a249ea6bf8e594a9a086e4d6ad00',
          alt: 'Eye doctor with patient',
        },
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
}

const fourColumnsArgs = {
  variant: 'fourCols' as const,
  title: 'Quick Access',
  cards: [
    {
      icon: 'calendar',
      title: 'The Appointment Book',
      subtitle: 'Learn about the basic functionality of TAB and its benefits.',
      cta: { url: '#' },
    },
    {
      icon: 'eye',
      title: 'Myopia Management',
      subtitle: 'Resources and guides for myopia management.',
      cta: { url: '#' },
    },
    {
      icon: 'book',
      title: 'Education',
      subtitle: 'Explore educational opportunities tailored to your needs.',
      cta: { url: '#' },
    },
    {
      icon: 'marketing',
      title: 'OD Marketing 101',
      subtitle: 'Learn our Eye Care marketing built for your practice.',
      cta: { url: '#' },
    },
  ],
}

const internalEventListArgs = {
  variant: 'internalEventList' as const,
  backgroundColor: '#F3F3F3',
  title: 'Upcoming Events',
  items: [
    {
      image: {
        alt: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
      },
      date: 'WED ⋅ June 17, 2026 ⋅ 8:00 PM',
      title: 'Academy 2024 Indianapolis',
      location: 'Phoenix, Arizona',
      description:
        'Academy offers a wide selection of clinically relevant CE courses and progressive research in the clinical and vision sciences.',
      cta: {
        label: 'Register',
        url: '#',
      },
    },
    {
      image: {
        alt: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
      },
      date: 'WED ⋅ October 24, 2026 ⋅ 9:00 AM',
      title: 'LIVE Connect to Grow',
      location: 'Washington, DC',
      description: 'Chicago, Illinois',
      cta: {
        label: 'Register',
        url: '#',
      },
    },
    {
      image: {
        alt: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111736/data/03c79cfaa641cd771877fdbcb8b3b358/5050leftimage.jpg',
      },
      date: 'FRI ⋅ December 3, 2026 ⋅ 9:00 to 10:00 PM EST',
      title: 'Medical Billing: Credentialing is Complete Now What',
      location: 'Los Angeles, California',
      description:
        'This course will teach doctors and staff how to benefit from correct billing and coding with medical and vision plans.',
      cta: {
        label: 'Register',
        url: '#',
      },
    },
  ],
  cta: {
    label: 'View all',
    url: '#',
    icon: 'rightBlack',
  },
}

const multipleCTAsArgs = {
  className: '!bg-red-500',
  variant: 'right' as const,
  title: 'Meet Our Teams',
  subtitle:
    'Our teams are organized into two pillars: MCEE (Marketing, Communications, Events & Engagement) and Recruitment.',
  ctas: [
    {
      url: '#',
      label: 'MCEE Team',
    },
    {
      url: '#',
      label: 'Recruitment Team',
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
}

const bgColorBlackArgs = {
  variant: 'BgColorBlack' as const,
  title: 'Want to stay informed?',
  subtitle:
    'Join our talent network to know more about practice opportunities, inspiring doctor profiles and their best practices.',
  cta: {
    url: '#',
    label: 'Join our Talent Network',
  },
}

const footerDefaultArgs = {
  supporters: [
    {
      image: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111700/data/b64e7b077a57bbbf6124d8d48ef3c8e8/footerlogo1.png',
        alt: 'Proud Support',
      },
      href: '',
    },
    {
      image: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111704/data/2203c2f6ca543771c6924937418b69e6/footerlogo2.png',
        alt: 'Vision Health',
      },
      href: '#',
    },
    {
      image: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111708/data/b2556916c65762c22649b74054d6445d/footerlogo3.png',
        alt: 'One Sight',
      },
      href: '#',
    },
    {
      image: {
        src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111712/data/28758eb6961c13231d74591f76c484cf/footerlogo4.png',
        alt: 'Health Care',
      },
      href: '#',
    },
  ],
  navigationLinks: [
    { label: 'Who We Are', href: '#' },
    { label: 'See Opportunities', href: '#' },
    { label: 'FAQs', href: '#' },
    { label: 'Contact Us', href: '#' },
    { label: 'News & Events', href: '#' },
    { label: 'Terms of Use', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Accessibility', href: '#' },
  ],
  disclaimer:
    'This website is not intended to offer services to data subjects who are in the European Union. All the Job Postings are related to jobs on the US and Canada soil.',
  copyright: 'COPYRIGHT ©2026 EssilorLuxottica GROUP P.IVA 10182640150/ ALL RIGHTS RESERVED',
  showSupport: true,
  supportContacts: [
    {
      title: 'OD Marketing',
      contacts: [
        {
          value: 'ODMarketing@luxotticaretail.com',
          href: 'mailto:ODMarketing@luxotticaretail.com',
        },
      ],
    },
    {
      title: 'Equipment Issues',
      contacts: [{ value: '(833) 467-4244', href: 'tel:8334674244' }],
    },
    {
      title: 'OD Communications',
      contacts: [
        { value: 'LuxotticaEyeCare@luxottica.com', href: 'mailto:LuxotticaEyeCare@luxottica.com' },
      ],
    },
    {
      title: 'Operations',
      contacts: [
        { value: 'EyeCareOps@luxotticaretail.com', href: 'mailto:EyeCareOps@luxotticaretail.com' },
      ],
    },
    {
      title: 'The Appointment Book (TAB) Support Center',
      contacts: [
        { label: 'Phone', value: '(877) 720-9119', href: 'tel:8777209119' },
        { label: 'Fax', value: '(513) 492-6990' },
        {
          value: 'theapptbook@luxotticaretail.com',
          href: 'mailto:theapptbook@luxotticaretail.com',
        },
      ],
    },
  ],
}

export const Default: Story = {
  render: () => (
    <>
      <HeroBannerCarousel {...heroBannerCarouselArgs} />
      <CardCollection {...fourColumnsArgs} />
      <EventList {...internalEventListArgs} />
      <EventList {...internalEventListArgs} />
      <Teaser5050WithCta {...multipleCTAsArgs} />
      <MiniSectionCta {...bgColorBlackArgs} />
      <Footer {...footerDefaultArgs} />
    </>
  ),
}
