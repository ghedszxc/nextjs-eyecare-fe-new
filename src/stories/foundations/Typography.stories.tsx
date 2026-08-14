import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta = {
  title: 'Foundations/Typography',
}

export default meta

type Story = StoryObj

export const Scale: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <p className="subheading">Subheading</p>
      <p>Body</p>
      <small>Small</small>
      <br />
      <small className="smallest">Smallest</small>
    </div>
  ),
}
