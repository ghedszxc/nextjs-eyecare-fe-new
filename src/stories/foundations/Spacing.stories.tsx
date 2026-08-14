import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'

type SpacingItemProps = {
  name: string
  variable: string
}

const SPACING_SCALE: SpacingItemProps[] = [
  { name: '8px', variable: '--spacing-sm' },
  { name: '16px', variable: '--spacing-md' },
  { name: '24px', variable: '--spacing-lg' },
  { name: '32px', variable: '--spacing-xl' },
  { name: '40px', variable: '--spacing-2xl' },
  { name: '48px', variable: '--spacing-3xl' },
  { name: '56px', variable: '--spacing-4xl' },
  { name: '64px', variable: '--spacing-5xl' },
  { name: '72px', variable: '--spacing-6xl' },
  { name: '80px', variable: '--spacing-7xl' },
]

const SpacingItem = ({ name, variable }: SpacingItemProps) => (
  <div style={{ marginBottom: '2rem' }}>
    <div
      style={{
        height: `var(${variable})`,
        width: 600,
        backgroundColor: '#d9d9d9',
        borderRadius: 8,
      }}
    />
    <div style={{ marginTop: 8 }}>
      <strong>{name}</strong>
      <div>{variable}</div>
    </div>
  </div>
)

const Section = ({
  title,
  subtitle,
  children,
}: {
  title?: string
  subtitle?: string
  children: ReactNode
}) => (
  <div style={{ marginBottom: '3rem' }}>
    {title && <h2 style={{ marginBottom: '1rem' }}>{title}</h2>}
    {subtitle && <p style={{ marginBottom: '1.5rem' }}>{subtitle}</p>}
    {children}
  </div>
)

const meta: Meta<typeof SpacingItem> = {
  title: 'Foundations/Spacing',
  component: SpacingItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variable: {
      control: { type: 'select' },
      options: SPACING_SCALE.map(s => s.variable),
    },
  },
}

export default meta
type Story = StoryObj<typeof SpacingItem>

export const Primary: Story = {
  args: {
    variable: '--spacing-md',
  },
}

export const Scale: Story = {
  render: () => (
    <div style={{ padding: '2rem', maxWidth: 700 }}>
      <Section title="Spacing" subtitle="Spacing follows an 8 point system">
        {SPACING_SCALE.map(space => (
          <SpacingItem key={space.variable} {...space} />
        ))}
      </Section>
    </div>
  ),
}
