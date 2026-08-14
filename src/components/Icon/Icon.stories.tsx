import type { Meta, StoryObj } from '@storybook/react-vite'

import { Icon, svgs, type IconType } from '.'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: Object.keys(svgs),
    },
  },
}

export default meta
type Story = StoryObj<typeof Icon>

const IconCard = ({ type }: { type: IconType }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#d9d9d9',
    }}
  >
    <Icon type={type} />
    <span style={{ marginTop: 8, fontSize: 12 }}>{type}</span>
  </div>
)

const ICON_CATEGORIES: Record<string, IconType[]> = {
  card: [
    'ads',
    'book',
    'briefcase',
    'calendar',
    'clipboard',
    'convo',
    'eye',
    'globe',
    'hospital',
    'library',
    'location',
    'marketing',
    'money',
    'people',
    'smile',
    'tech',
    'work',
    'workhome',
  ],
  button: [
    'blankCheckbox',
    'blankCheckboxWhite',
    'checkedBox',
    'circleChevronDown',
    'circleChevronUp',
    'downBlack',
    'downWhite',
    'downChevronBlack',
    'downChevronWhite',
    'downloadBlack',
    'downloadWhite',
    'filledChevronLeft',
    'filledChevronRight',
    'filledChevronUp',
    'leftWhite',
    'mailBlack',
    'rightBlack',
    'rightWhite',
    'tiltedRightBlack',
    'tiltedRightWhite',
    'upChevronUpWhite',
    'upChevronWhite',
    'watchBlack',
    'watchWhite',
  ],
  dropdown: ['chevronDefault', 'chevronHovered', 'chevronSelected'],
  misc: ['menuBlack', 'menuWhite', 'right', 'tiltedRight', 'xBlack', 'xWhite', 'search'],
}

export const Primary: Story = {
  args: {
    type: 'menuBlack',
  },
}

export const Library: Story = {
  render: () => {
    return (
      <div style={{ padding: 32 }}>
        {Object.entries(ICON_CATEGORIES).map(([category, icons]) => (
          <div key={category} style={{ marginBottom: 32 }}>
            <h3 style={{ textTransform: 'capitalize', marginBottom: 16 }}>{category}</h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, 80px)',
                gap: 16,
              }}
            >
              {icons.map(iconName => (
                <IconCard key={iconName} type={iconName} />
              ))}
            </div>
          </div>
        ))}
      </div>
    )
  },
}
