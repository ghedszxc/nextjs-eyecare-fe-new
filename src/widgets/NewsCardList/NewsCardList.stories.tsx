import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState, type ComponentProps } from 'react'
import type { NewsCardProps } from '@components/NewsCard'
import type { IconProps } from '@components/Icon/Icon'
import { Pagination } from '@components/Pagination'

import { NewsCardList } from './index'

type StoryProps = ComponentProps<typeof NewsCardList>

const meta: Meta<typeof NewsCardList> = {
  title: 'Widgets/NewsCardList',
  component: NewsCardList,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<StoryProps>

// const items: NewsCardProps[] = [
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'Target Optical December Offers',
//     tag: 'feature',
//     description:
//       'The below offers will be present to support Target Optical locations through the end of the year!',
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'Get Ready for LensCrafters Black Friday/Cyber Monday Super Week',
//     tag: 'feature',
//     description: 'Mark your calendar for the upcoming Black Friday/Cyber Monday Super Week!',
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'Get Ready for For Eyes Black Friday/Cyber Monday Super Week',
//     tag: 'feature',
//     description: 'Mark your calendar for the upcoming Black Friday/Cyber Monday Super Week!',
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
//   {
//     image: {
//       alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
//       src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
//     },
//     date: '5 Dec 2025',
//     title: 'OD Feature: Dr. Brooke Bonilla',
//     tag: 'feature',
//     description:
//       "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
//     cta: {
//       label: 'Read more',
//       url: '#',
//       icon: 'tiltedRightBlack',
//     },
//   },
// ]

const items: NewsCardProps[] = [
  {
    image: {
      alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Target Optical December Offers',
    tag: 'feature',
    description:
      'The below offers will be present to support Target Optical locations through the end of the year!',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Vision Care Awareness Week',
    tag: 'news',
    description:
      'Join us as we promote eye health and preventive care across participating locations.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Holiday Eyewear Collection Launch',
    tag: 'feature',
    description:
      'Discover the latest frames and styles arriving just in time for the holiday season.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Employee Spotlight: Regional Excellence',
    tag: 'people',
    description: 'Meet team members making a positive impact across our retail network.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'New Store Opening Celebration',
    tag: 'event',
    description: 'Celebrate the grand opening of our newest location with special promotions.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Digital Tools Training Available',
    tag: 'training',
    description: 'New learning resources are now available to support digital platform adoption.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Customer Experience Success Story',
    tag: 'feature',
    description: 'Learn how one team improved customer satisfaction through service innovation.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Back-to-School Eye Exam Campaign',
    tag: 'campaign',
    description: 'Supporting families with accessible eye care services and educational materials.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Frame Styling Tips for Winter',
    tag: 'lifestyle',
    description: 'Explore expert recommendations for selecting eyewear this season.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },
  {
    image: {
      alt: 'Same image',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Community Outreach Highlights',
    tag: 'community',
    description: 'See how local teams are giving back through vision care initiatives.',
    cta: { label: 'Read more', url: '#', icon: 'tiltedRightBlack' },
  },

  // 11–50
  ...Array.from({ length: 40 }, (_, i) => ({
    image: {
      alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: `News Update ${i + 11}`,
    tag: ['news', 'feature', 'event', 'community', 'training', 'people', 'campaign', 'lifestyle'][
      i % 8
    ],
    description: `This is sample content for article ${i + 11}, highlighting recent updates, initiatives, and opportunities across the organization.`,
    cta: {
      label: 'Read more',
      url: '#',
      icon: 'tiltedRightBlack' as IconProps['type'],
    },
  })),
]

export const Default: Story = {
  render: () => {
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)

    function getTotalPages(totalItems: number) {
      if (totalItems <= 10) return 1

      return 1 + Math.ceil((totalItems - 10) / 9)
    }

    function getPageRange(page: number) {
      if (page === 1) {
        return { start: 0, end: 10 }
      }

      const start = 10 + (page - 2) * 9
      const end = start + 9

      return { start, end }
    }

    const { start, end } = getPageRange(page)
    const pageItems = items.slice(start, end)

    return (
      <NewsCardList
        items={pageItems}
        searchValue={search}
        onSearchChange={setSearch}
        currentPage={page}
        onSearchSubmit={search => {
          alert(`search value: ${search}`)
          setSearch('')
        }}
      >
        <NewsCardList.Pagination>
          <Pagination
            hasNumber
            currentPage={page}
            totalPages={getTotalPages(items.length)}
            onPageChange={setPage}
          />
        </NewsCardList.Pagination>
      </NewsCardList>
    )
  },
  args: {
    // title: 'Featured News',
    // cta: {
    //   url: '#',
    //   label: 'View all',
    //   icon: 'rightBlack',
    //   isExternal: true,
    // },
    items,
  },
}
