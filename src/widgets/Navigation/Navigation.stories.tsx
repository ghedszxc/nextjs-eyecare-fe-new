import type { Meta, StoryObj } from '@storybook/react-vite'
import { MiniSectionCta } from '@widgets/MiniSectionCta'
import { HeroBanner } from '@widgets/HeroBanner'

import type { NavigationProps } from './Navigation.types'

import { Navigation } from '.'

const meta: Meta<typeof Navigation> = {
  title: 'Widgets/Navigation',
  component: Navigation,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof Navigation>

const defaultArgs: Story['args'] = {
  variant: 'external',
  mainLogo: 'src/assets/logo/EL-EyeCare-Logo.png',
  loginCta: {
    label: 'Login',
    url: 'https://preview-uat-internal-eyecare.luxgroup.net/login/',
    isExternal: true,
  },
  rightButton: {
    label: 'Connect With Us',
    url: 'https://www.essilorluxotticaeyecare.com/connect-with-us/',
    isExternal: false,
  },
  homeCta: '/',
  navigationItems: {
    items: [
      { type: 'link', cta: { label: 'Home', url: '/' } },
      {
        type: 'dropdown',
        title: 'Practice Paths',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        items: [
          { type: 'link', cta: { label: 'Explore All Paths', url: '/' }, variant: 'subMenuSpacer' },
          { type: 'link', cta: { label: 'Be Employed', url: '' } },
          { type: 'link', cta: { label: 'Practice Independently', url: '' } },
          { type: 'link', cta: { label: 'Own A Franchise', url: '' } },
          { type: 'link', cta: { label: 'Remote Optometrist', url: '' } },
        ],
      },
      {
        type: 'dropdown',
        title: 'Podcast',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        items: [
          { type: 'link', cta: { label: 'Student Education', url: '/' } },
          { type: 'link', cta: { label: 'Student Events', url: '/' } },
          { type: 'link', cta: { label: 'Student Clinics', url: '/' } },
          {
            type: 'link',
            cta: { label: 'Financial Freedom Employer Sponsored Loan Program', url: '/' },
          },
        ],
      },
      { type: 'link', cta: { label: 'OneSight', url: '/', isExternal: false } },
      { type: 'link', cta: { label: 'Who We Are', url: '/' } },
      { type: 'link', cta: { label: 'See Opportunities', url: '/' } },
    ],
  },
}

export const Default: Story = {
  args: defaultArgs,
}

export const Transparent: Story = {
  args: { ...defaultArgs, transparent: true },
  render: args => (
    <div>
      <Navigation {...args} />
      <HeroBanner
        variant="mainHeroBanner"
        promoteToH1
        title="Where passion meets practice"
        subtitle="Tools and resources to help optometrists thrive and grow their career."
        backgroundImage={{
          desktop: {
            src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111770/data/d2747b163859e75a7673eb3b6b45c0cf/headerimage.jpg',
            alt: 'Eye doctor with patient',
          },
          mobile: {
            src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111772/data/10c155b91ed08c55e18bbbc830fdf6b8/mobileimage.jpg',
            alt: 'Eye doctor with patient',
          },
        }}
        cta={[
          { url: '#', label: 'Connect with Us' },
          { url: '#', label: 'See Practice Opportunities' },
        ]}
      />
      <MiniSectionCta
        variant="headerCTA"
        title="Where passion meets practice"
        subtitle="Tools and resources to help optometrists thrive and grow their career."
        cta={{ url: '#', label: 'See Practice Opportunities' }}
      />
      <MiniSectionCta
        variant="BgColorBlack"
        title="Want to stay informed?"
        subtitle="Join our talent network to know more about practice opportunities, inspiring doctor profiles and their best practices."
        cta={{ url: '#', label: 'Join our Talent Network' }}
      />
      <MiniSectionCta
        variant="BgColorBlack"
        title="Want to stay informed?"
        subtitle="Join our talent network to know more about practice opportunities, inspiring doctor profiles and their best practices."
        cta={{ url: '#', label: 'Join our Talent Network' }}
      />
    </div>
  ),
}

export const DefaultWithPageContent: Story = {
  args: defaultArgs,
  render: args => (
    <div>
      <Navigation {...args} />
      <HeroBanner
        variant="mainHeroBanner"
        promoteToH1
        title="Where passion meets practice"
        subtitle="Tools and resources to help optometrists thrive and grow their career."
        backgroundImage={{
          desktop: {
            src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111770/data/d2747b163859e75a7673eb3b6b45c0cf/headerimage.jpg',
            alt: 'Eye doctor with patient',
          },
          mobile: {
            src: 'https://media.essilorluxotticaeyecare.com/cms/caas/v1/media/1111772/data/10c155b91ed08c55e18bbbc830fdf6b8/mobileimage.jpg',
            alt: 'Eye doctor with patient',
          },
        }}
        cta={[
          { url: '#', label: 'Connect with Us' },
          { url: '#', label: 'See Practice Opportunities' },
        ]}
      />
      <MiniSectionCta
        variant="headerCTA"
        title="Where passion meets practice"
        subtitle="Tools and resources to help optometrists thrive and grow their career."
        cta={{ url: '#', label: 'See Practice Opportunities' }}
      />
      <MiniSectionCta
        variant="BgColorBlack"
        title="Want to stay informed?"
        subtitle="Join our talent network to know more about practice opportunities, inspiring doctor profiles and their best practices."
        cta={{ url: '#', label: 'Join our Talent Network' }}
      />
      <MiniSectionCta
        variant="BgColorBlack"
        title="Want to stay informed?"
        subtitle="Join our talent network to know more about practice opportunities, inspiring doctor profiles and their best practices."
        cta={{ url: '#', label: 'Join our Talent Network' }}
      />
    </div>
  ),
}

/* ============================================================================ */
/* Internal navigation (variant="internal")                                    */
/* ============================================================================ */

const internalNavItems: NavigationProps['navigationItems'] = {
  items: [
    { type: 'link', cta: { label: 'Home', url: '/' } },
    {
      type: 'dropdown',
      title: 'Practice Management',
      description:
        'Tools and guidance to run a thriving practice — from staffing and finances to patient experience.',
      items: [
        { type: 'link', cta: { label: 'Staffing', url: '#' } },
        { type: 'link', cta: { label: 'Finances', url: '#' } },
        { type: 'link', cta: { label: 'Patient Experience', url: '#' } },
        { type: 'link', cta: { label: 'Operations', url: '#' } },
      ],
    },
    {
      type: 'dropdown',
      title: 'Clinical Resources',
      description:
        'Evidence-based clinical references, protocols, and continuing education to support patient care.',
      items: [
        { type: 'link', cta: { label: 'Protocols', url: '#' } },
        { type: 'link', cta: { label: 'Continuing Education', url: '#' } },
        { type: 'link', cta: { label: 'Research', url: '#' } },
      ],
    },
    { type: 'link', cta: { label: 'OD Marketing Hub', url: '#' } },
    {
      type: 'dropdown',
      title: 'Newsroom',
      description:
        'Stay informed with the latest news and events. These resources will keep you updated on industry trends, upcoming conferences, and important announcements.',
      items: [
        { type: 'link', cta: { label: 'News', url: '#' } },
        { type: 'link', cta: { label: 'Events', url: '#' } },
      ],
    },
    {
      type: 'dropdown',
      title: 'Resources',
      description: 'Downloadable assets, guides, and templates to support your practice.',
      items: [
        { type: 'link', cta: { label: 'Guides', url: '#' } },
        { type: 'link', cta: { label: 'Templates', url: '#' } },
        { type: 'link', cta: { label: 'Downloads', url: '#' } },
      ],
    },
  ],
}

const internalBrandBars: NavigationProps['brandBars'] = [
  { backgroundColor: '#192c50' },
  { backgroundColor: '#FE5000' },
  { backgroundColor: '#d71b32' },
  { backgroundColor: '#5c9541' },
]

const internalArgs: Story['args'] = {
  variant: 'internal',
  mainLogo: 'src/assets/logo/EL-EyeCare-Logo.png',
  logoAlt: 'EssilorLuxottica Eye Care',
  homeCta: '/',
  user: {
    label: 'Username',
    menuItems: [
      {
        label: 'Visit external site',
        url: 'https://www.essilorluxotticaeyecare.com/',
        isExternal: true,
      },
      { label: 'Log out', variant: 'danger', onClick: () => alert('Log out') },
    ],
  },
  navigationItems: internalNavItems,
  searchPlaceholder: 'Search resources',
  searchCta: { label: 'Search', url: '/search' },
}

export const Internal: Story = {
  args: {
    ...internalArgs,
    brandBars: internalBrandBars,
  },
  render: args => (
    <div style={{ minHeight: '200vh' }}>
      <Navigation {...args} />
      <p style={{ padding: '2rem 5rem' }}>Scroll down to fold the brand bars into thin strips.</p>
    </div>
  ),
}
