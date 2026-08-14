import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination } from '.'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Pagination>

export const PaginationDotsWithArrows: Story = {
  args: {
    totalPages: 4,
  },
}

export const PaginationDots: Story = {
  args: {
    totalPages: 4,
    disableArrows: true,
  },
}

export const PaginationDotNumber: Story = {
  args: {
    totalPages: 4,
    disableArrows: true,
    hasNumber: true,
  },
}

export const PaginationWithEllipsis: Story = {
  args: {
    totalPages: 200,
    disableArrows: false,
    hasNumber: true,
    showEllipsis: true,
    hidePagesBorder: true,
  },
}
