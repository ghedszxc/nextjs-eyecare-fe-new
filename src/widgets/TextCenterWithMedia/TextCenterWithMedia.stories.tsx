import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextCenterWithMedia } from '.'

const meta: Meta<typeof TextCenterWithMedia> = {
  title: 'Widgets/[Module 12] TextCenterWithMedia',
  component: TextCenterWithMedia,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TextCenterWithMedia>

export const Default: Story = {
  args: {
    title: 'Heading goes here',
    thumbnail:
      'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1949292/data/1a428e07fee1bc6008dab7d24a7edb68/video-thumbnail.png',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    loop: false,
    mute: false,
    hideControl: false,
    autoPlay: true,
  },
}

export const ExternalVideoLink: Story = {
  render: args => (
    <TextCenterWithMedia {...args}>
      <TextCenterWithMedia.Title>Compound title goes here</TextCenterWithMedia.Title>
    </TextCenterWithMedia>
  ),
  args: {
    thumbnail:
      'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1949292/data/1a428e07fee1bc6008dab7d24a7edb68/video-thumbnail.png',
    videoUrl: 'https://www.youtube.com/watch?v=MXPTSgeb5X4&list=RDMXPTSgeb5X4&start_radio=1',
    loop: false,
    mute: true,
    hideControl: false,
    autoPlay: true,
  },
}
