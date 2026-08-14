import type { Meta, StoryObj } from '@storybook/react-vite'

import { CardCollection } from '.'

const meta: Meta<typeof CardCollection> = {
  title: 'Widgets/[Module 10] CardCollection',
  component: CardCollection,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof CardCollection>

export const Default: Story = {
  args: {
    variant: 'default',
    title: 'Setting You Up For Success',
    subtitle:
      "With EssilorLuxottica, you'll have the tools you need in order to help you succeed - right from the start.",
    cards: [
      {
        icon: 'location',
        title: 'Modern Locations',
        subtitle:
          'EssilorLuxottica Branded Practices are typically located in established, highly visible locations, which helps ensure a steady flow of patients.',
      },
      {
        icon: 'hospital',
        title: 'Quality Patient Experience',
        subtitle:
          'With EssilorLuxottica’s support, you can be confident about delivering quality end-to-end vision solutions, from the exam to glasses and lenses.',
      },
      {
        icon: 'eye',
        title: 'Cutting-Edge Technology',
        subtitle:
          'As an affiliated optometrist, you’ll have access to advanced digital eye care technology that empowers you to make your maximum impact on your patients’ overall health and well-being.',
      },
      {
        icon: 'calendar',
        title: 'Automated Appointment Management',
        subtitle:
          'EssilorLuxottica’s automated online appointment system makes it easy for your patients to schedule care. And, the patient recall system is designed to keep them coming back.',
      },
    ],
  },
}

export const ThreeColumns: Story = {
  args: {
    variant: 'threeCols',
    title: 'Benefits',
    subtitle:
      'Comprehensive coverage and perks designed to support your financial and personal well-being.',
    cards: [
      {
        icon: 'money',
        title: 'Compensation & Stability',
        subtitle:
          'Secure your financial future with competitive wages, a 401k match, and comprehensive medical benefits.',
      },
      {
        icon: 'hospital',
        title: 'Lifestyle & Perks',
        subtitle:
          'Enjoy a balanced life with paid time off, complimentary eyewear certificates, and invitations to friends and family events.',
      },
      {
        icon: 'location',
        title: 'Nationwide Mobility',
        subtitle:
          'Take advantage of opportunities across the country, allowing you to find a role close to home or seamlessly relocate without losing your career momentum.',
      },
      {
        icon: 'book',
        title: 'Professional Mentorship',
        subtitle:
          'Gain confidence and clinical experience with dedicated support from mentors who help guide your professional growth.',
      },
      {
        icon: 'library',
        title: 'Modern Resources',
        subtitle:
          'Deliver better patient outcomes using current exam technology and practice management tools like online scheduling and patient outreach systems.',
      },
      {
        icon: 'briefcase',
        title: 'Career Advancement',
        subtitle:
          'Build a strong foundation in business operations and explore internal pathways to advance your career as your professional goals evolve.',
      },
    ],
  },
}

export const FourColumns: Story = {
  args: {
    variant: 'fourCols',
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
  },
}

export const ExamCard: Story = {
  args: {
    variant: 'examCard',
    title: 'Available Remote Exams',
    cards: [
      { title: 'Lensometry (if available from patient)' },
      { title: 'Visual acuity' },
      { title: 'Color Vision / Stereopsis' },
      { title: 'Blood Pressure' },
      { title: 'Autorefraction / Keratometry / Aberrometry' },
      { title: 'Non-Contact Tonometry' },
      { title: 'Video Split lamp evaluation' },
      { title: 'Lens retro-illumination' },
      { title: 'Visual fields (Automated Perimetry' },
      { title: 'Fundus/Photography Retinal Image (OPTOS)' },
      { title: 'Refraction (remotely controlled)' },
    ],
    ctaLabel: 'See more',
  },
}
