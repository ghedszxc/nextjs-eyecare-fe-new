import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactNode } from 'react'

type ColorSwatchProps = {
  name?: string
  variable: string
}

const MAIN_COLORS: ColorSwatchProps[] = [
  { name: 'White', variable: '--color-white' },
  { name: 'Black', variable: '--color-black' },
  { name: 'Gray', variable: '--color-gray' },
  { name: 'Light Gray', variable: '--color-light-gray' },
  { name: 'Link', variable: '--color-link' },
  { name: 'Darkened Background', variable: '--color-darkerbg' },
]

const GRADIENT_COLORS: ColorSwatchProps[] = [
  { name: 'Black', variable: '--color-gradient-black' },
  { name: 'Gray to White', variable: '--color-gradient-graytowhite' },
  { name: 'White', variable: '--color-gradient-white' },
]

const BRAND_COLORS: ColorSwatchProps[] = [
  { name: 'LensCrafters Blue', variable: '--color-lenscrafter-blue' },
  { name: 'LensCrafters DescText', variable: '--color-lenscrafter-desctext' },
  { name: 'For Eyes Brown', variable: '--color-foreyes-brown' },
  { name: 'For Eyes Icon Text', variable: '--color-foreyes-icontext' },
  { name: 'For Eyes Desc Text', variable: '--color-foreyes-desctext' },
  { name: 'Target Optical Red', variable: '--color-targetoptical-red' },
  { name: 'Target Optical Icon Text', variable: '--color-targetoptical-icontext' },
  { name: 'Target Optical Desc Text', variable: '--color-targetoptical-desctext' },
  { name: 'Pearle Vision Green', variable: '--color-pearlevision-green' },
  { name: 'Pearle Vision Icon Text', variable: '--color-pearlevision-icontext' },
  { name: 'Pearle Vision Desc Text', variable: '--color-pearlevision-desctext' },
]

const ALL_COLORS = [...MAIN_COLORS, ...BRAND_COLORS]

const ColorSwatch = ({ name, variable }: ColorSwatchProps) => (
  <div>
    <div
      style={{
        width: 120,
        height: 80,
        background: `var(${variable})`,
        borderRadius: 8,
        border: '1px solid #ddd',
      }}
    />
    <div style={{ marginTop: 8 }}>
      <strong>{name}</strong>
      <div>{variable}</div>
    </div>
  </div>
)

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <div style={{ marginBottom: '3rem' }}>
    <h2 style={{ marginBottom: '1.5rem' }}>{title}</h2>
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>{children}</div>
  </div>
)

const meta: Meta<typeof ColorSwatch> = {
  title: 'Foundations/Colors',
  component: ColorSwatch,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variable: {
      control: { type: 'select' },
      options: ALL_COLORS.map(c => c.variable),
    },
  },
}

export default meta
type Story = StoryObj<typeof ColorSwatch>

export const Primary: Story = {
  args: {
    variable: '--color-black',
  },
}

export const Palette: Story = {
  render: () => (
    <div style={{ padding: '2rem' }}>
      <Section title="Main Colors">
        {MAIN_COLORS.map(color => (
          <ColorSwatch key={color.variable} {...color} />
        ))}
      </Section>

      <Section title="Gradient Colors">
        {GRADIENT_COLORS.map(color => (
          <ColorSwatch key={color.variable} {...color} />
        ))}
      </Section>

      <Section title="Brand Colors">
        {BRAND_COLORS.map(color => (
          <ColorSwatch key={color.variable} {...color} />
        ))}
      </Section>
    </div>
  ),
}
