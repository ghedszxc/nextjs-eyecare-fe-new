import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'
import type { NewsCardProps } from '@components/NewsCard'

import { FeaturedNewsHighlights } from './FeaturedNewsHighlights'

type StoryProps = ComponentProps<typeof FeaturedNewsHighlights>

const meta: Meta<typeof FeaturedNewsHighlights> = {
  title: 'Widgets/FeaturedNewsHighlights',
  component: FeaturedNewsHighlights,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<StoryProps>

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
    cta: {
      label: 'Read more',
      url: '#',
      icon: 'tiltedRightBlack',
    },
  },
  {
    image: {
      alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
      src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1948660/data/3b12e7266e1ab1c31cc0a4b83f4b5fd7',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Get Ready for LensCrafters Black Friday/Cyber Monday Super Week',
    tag: 'feature',
    description: `During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters. Dr. Brooke Bonilla discusses her professional journey and standout experiences in the interview below:. -------. Please tell us a bit about your background!. I grew up in Seattle, Washington, where I lived for 18 years before joining the military. For optometry school, I attended Western University of Health Sciences in Pomona, California. I received my undergrad B.S. degree in science with a minor in biology from Portland State University in Portland, Oregon. I found that throughout my undergrad, I excelled at all things optometry and eye related, scoring the highest in my physics class on the optics exam. I also discovered ways to connect to the community through optometry. My physics professor encouraged me to become an optometrist because his average score on the optics test was usually a "D" so he would add bonus questions so his class wouldn't fail. However, I received a 100%, plus all the bonus questions, and no one had ever done that before. I was also excelling at ocular anatomy and physiology. I was privileged to volunteer for a women's prison in Oregon during my last year of undergrad with a program called "Gardening with Inmates." We planted seed, composted scraps, and harvested food for the cafeteria. When the inmates had too much food for the kitchen, the remaining would be donated to the local women's shelters. I was very impressed when I learned about the community involvement programs at the prison and how they were designed to reduce recidivism rates. There was also another program there where inmates refurbished donated glasses and prepared them for victims of natural disasters around the country, for example, they helped with Hurricane Katrina. An optometrist headed that program, and I thought that was so profound to help the inmates make positive choices that give back to their community, building their own self-worth, and teaching them a skill. It was then I realized the power of giving back through the profession of optometry, and I was sold. Why did you choose to affiliate with Pearle Vision and how many years have you been affiliated with the brand? What differentiates practicing at Pearle Vision from other optometrist career opportunities?. I enjoy being a sublease owner for Pearle Vision in Orange County, California. I worked as an associate for the first two years here, then as a sublease owner for the last year (three years total with the brand). I previously worked as an associate at a private practice, which I really enjoyed. Working here is very similar. Can you share an example of how the technology in your practice location has positively affected patient outcomes?. In one example, the retinal photos and the slit lamp helped me to positively identify a cataract in a young patient that had gone undetected in three previous exams elsewhere. I was able to get that patient to ophthalmology immediately for cataract surgery. She came in afterward and thanked me for changing her life, giving me a small gift as a thank you. All other optometrists in the past dismissed her concern with reduced vision in that eye, and not one of them mentioned cataracts. She is now a loyal patient at my practice because we took the time to listen and look. What is your proudest achievement as an optometrist, and can you share any standout experiences or stories?. My favorite story happened on my third day of being a licensed optometrist. I had a gentleman in his early 50's come in for a sudden loss of vision in his right eye. He had not been to an eye doctor in 30 years, never wore glasses, and his visual acuity was severely reduced in one eye. Upon examination, I was able to conclude he had an extreme hypertensive event. Basically, the back of his eye looked like a blood splattered crime scene. It was a Friday evening on Labor Day weekend (I was always told that these emergency events would always happen at 6 p.m. on the evening of a three-day weekend). I sent him immediately to the ER. He returned to my office a week later to tell me what happened. He said, according to the doctors, that decision to immediately go to the ER saved his life. His blood pressure was above stroke level, and he ended up staying at the hospital for three days while they worked to get it down. His wife and mother came with him to give me a hug and thank me with a card and a gift. I remember worrying about him throughout the whole weekend and was so relieved everything turned out well. Are there any current career milestones or celebrations you'd like to shine a spotlight on?. One year ago on July 1, 2024, I became a sublease owner. I’m very proud of my continued success within the optometry field. August is National Eye Exam Month and Children’s Eye Health and Safety Month. Could you please share a few best practices for peer doctors on each of these eye care observances?. It is important to be involved with your community. Also, reach out to local pediatricians to ensure they know what age to provide full eye exams for babies, toddlers, and children. One way is to make a goodie bag with a flyer, candies, and small gifts and drop it off at their front desk. Right now, it is especially good timing for back-to-school. Is there anything else you would like to share with the EssilorLuxottica affiliated doctor community that was not covered in the previous questions?. The most attractive personality trait you can have is authenticity, to be genuine and sincere. I think about that a lot. I always aim to be the most genuine authentic version of myself. People will notice it and appreciate it. It's the foundation in building that doctor-patient relationship. The next most important thing is to always do what is best for the patient, and you will never go wrong`,
    cta: {
      label: 'Read more',
      url: '#',
      icon: 'tiltedRightBlack',
    },
  },
  {
    image: {
      alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'Get Ready for For Eyes Black Friday/Cyber Monday Super Week',
    tag: 'feature',
    description: 'Mark your calendar for the upcoming Black Friday/Cyber Monday Super Week!',
    cta: {
      label: 'Read more',
      url: '#',
      icon: 'tiltedRightBlack',
    },
  },
  {
    image: {
      alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
      src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
    },
    date: {
      label: '5 Dec 2025',
      value: '2025-12-05',
    },
    title: 'OD Feature: Dr. Brooke Bonilla',
    tag: 'feature',
    description:
      "During the last year of her undergraduate schooling, Dr. Bonilla discovered her passion for optometry through her volunteer activities. One of these unique programs, led by an optometrist, taught inmates at a women's prison to refurbish eyeglasses for survivors of natural disasters.",
    cta: {
      label: 'Read more',
      url: '#',
      icon: 'tiltedRightBlack',
    },
  },
]

export const Default: Story = {
  args: {
    title: 'Featured News',
    cta: {
      url: '#',
      label: 'View all',
      icon: 'rightBlack',
      isExternal: true,
    },
    items,
  },
}

export const FaturedNews: Story = {
  name: 'Featured News - Home page',
  args: {
    variant: 'home',
    title: 'Featured News',
    cta: {
      url: '#',
      label: 'View all',
      icon: 'rightBlack',
      isExternal: true,
    },
    items,
  },
}
