import type { Meta, StoryObj } from '@storybook/react-vite'

import { QuoteSectionBlock } from './QuoteSectionBlock'

const meta: Meta<typeof QuoteSectionBlock> = {
  title: 'Widgets/QuoteSectionBlock',
  component: QuoteSectionBlock,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof QuoteSectionBlock>

export const Default: Story = {
  args: {
    title: 'What Doctors Are Saying',
    items: [
      {
        bodyText:
          '"Joining LensCrafters has been the best decision of my career. The support and resources provided have allowed me to focus on what matters most — my patients. Joining LensCrafters has been the best decision of my career. The support and resources provided have allowed me to focus on what matters most — my patients. Joining LensCrafters has been the best decision of my career. The support and resources provided have allowed me to focus on what matters most — my patients. Joining LensCrafters has been the best decision of my career. The support and resources provided have allowed me to focus on what matters most — my patients. Joining LensCrafters has been the best decision of my career. The support and resources provided have allowed me to focus on what matters most — my patients. Joining LensCrafters has been the best decision of my career. The support and resources provided have allowed me to focus on what matters most — my patients. Joining LensCrafters has been the best decision of my career. The support and resources provided have allowed me to focus on what matters most — my patients."',
        displayPhoto:
          'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1949306/data/d10107380aa8edca8b11f60964618781',
        displayName: 'Dr. Dana Nakagawa, OD',
        // jobTitleLogo:
        //   'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1949320/data/64f6b6333e33cdadccedf9ee59b0ef13',
      },
      {
        bodyText:
          '"The partnership model gave me the independence I wanted while still having the backing of a world-class organization. I couldn\'t imagine practicing any other way."',
        displayPhoto:
          'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1949324/data/f27b872bfb6b9ce3f1dc093a73014418',
        displayName: 'Dr. Marcus Webb, OD',
        jobTitleLogo:
          'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1949320/data/64f6b6333e33cdadccedf9ee59b0ef13',
      },
      {
        bodyText:
          '"From day one, I felt like part of a community. The continuing education opportunities and peer network have truly elevated my practice."',
        displayPhoto:
          'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1949330/data/c1e21889a7b1df346cf1bd965be7d468',
        displayName: 'Dr. Sofia Reyes, OD',
        jobTitleLogo:
          'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1949320/data/64f6b6333e33cdadccedf9ee59b0ef13',
      },
    ],
  },
}
