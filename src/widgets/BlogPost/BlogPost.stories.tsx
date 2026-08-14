import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { BlogPost } from './BlogPost'

type StoryProps = ComponentProps<typeof BlogPost>

const meta: Meta<typeof BlogPost> = {
  title: 'Widgets/BlogPost',
  component: BlogPost,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<StoryProps>

const item: StoryProps = {
  // image: {
  //   alt: 'Dr. Britney Caruso (right) volunteered at a recent OneSight EssilorLuxottica Foundation clinic alongside Target Optical Senior Regional Manager, Val Reyes (left).',
  //   src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
  // },
  date: {
    label: '5 Dec 2025',
    value: '2025-12-05',
  },
  title: 'lorem',
  tag: 'feature',
  description: (
    <>
      <p>
        This month, Dr. Mandy Bains brings a thoughtful perspective to Women&apos;s Health and
        Safety Month, one rooted in mentorship, empowerment, and patient-centered care. After
        discovering her passion for optometry through an unexpected opportunity early in her career,
        she built a path that blends high-quality clinical care with entrepreneurship, now leading
        two practices next to LensCrafters. Her story reflects the impact women have in shaping both
        the future of eye care and their communities.
      </p>
      <p>
        Dr. Bains shares her perspective on the importance of prioritizing women&aposs health,
        creating safe spaces for care, and empowering patients through education and support below.
      </p>
      <h5>
        <strong>Women&apos;s Eye Health and Safety Month </strong>
      </h5>
      <p>Are women at higher risk for certain eye diseases and vision problems, and if so, why?</p>
      <blockquote>
        <p>
          Absolutely! Women are especially prone to certain eye diseases and vision problems, so
          it&apos;s great that we&apos;re shining a light on women&apos;s eye health this April. Did
          you know that, according to the National Eye Institute, about two-thirds of people who are
          affected by blindness or vision issues are women? Raising awareness is so important and
          can truly help make a difference.
        </p>
        <p>
          There are a few key reasons why women are more likely than men to face eye diseases and
          vision problems. First, biology plays a big part. Many eye conditions become more common
          as we age, and since women generally live longer than men, they&apos;re more likely to
          experience issues like macular degeneration, glaucoma, cataracts, and dry eye. Hormonal
          changes also have an impact: shifts in estrogen and progesterone—especially after
          menopause—can make dry eye more frequent. During pregnancy, hormone surges and fluid
          retention can change vision, too. On top of that, autoimmune diseases like thyroid eye
          disease, lupus, rheumatoid arthritis, and Sjogren&apos;s syndrome are more common in
          women, and these can lead to chronic eye inflammation and dry eye.
        </p>
        <p>
          Lifestyle and social factors also play a role. Women are more likely to take medications
          such as birth control or hormone replacement therapy, which can affect vision. They often
          use cosmetics, increasing the risk of eye infections. And, unfortunately, women around the
          world tend to have less access to healthcare, so eye conditions sometimes go untreated.
          All these factors add up to make protecting women&apos;s eye health a priority.
        </p>
      </blockquote>
      <p> </p>
      <p>What eye conditions should women be most aware of as they age? </p>
      <blockquote>
        <p>
          As women get older, there are a few important eye conditions to keep an eye on. Dry eye
          syndrome is quite common—thanks to changing hormones and a higher risk of autoimmune
          diseases in women, it can become especially bothersome. Another condition to be aware of
          is Fuch&apos;s dystrophy, which affects the cornea and can lead to blurry vision; this too
          is more often seen in women. Narrow angle glaucoma is another concern, as women tend to
          have shorter eyes or shallower anterior chambers, making them more susceptible. And of
          course, it&apos;s essential to have regular check-ups for age-related macular degeneration
          as we age.
        </p>
      </blockquote>
      <p> </p>
      <p>What simple steps can women take to protect their vision and eye health? </p>
      <blockquote>
        <p>
          One of the best—and easiest—ways for women to look after their vision is to book regular,
          comprehensive eye exams. Since many eye conditions don&apos;t cause obvious symptoms,
          making annual check-ups a priority can really help catch issues early. It&apos;s also a
          good idea to share your family health history with your optometrist, so they know what to
          watch for and can keep an eye on any risks. Beyond that, maintaining a healthy lifestyle
          with nutritious meals and regular exercise can do wonders for your eyes. And finally,
          remember to practice safe and clean habits when using makeup, to help keep your eyes
          healthy and protected.
        </p>
      </blockquote>
    </>
  ),
  relatedArticles: [
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
        src: 'https://luxotticaeyecare.luxottica.com/resource/image/50542/landscape_ratio10x5/1236/648/5edf3d72fe58ae22ca4b21b209a0ae38/fz/dr-mandy-bains-women-s-health.png',
      },
      date: {
        label: '5 Dec 2025',
        value: '2025-12-05',
      },
      title: 'Get Ready for LensCrafters Black Friday/Cyber Monday Super Week',
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
  ],
}

export const Default: Story = {
  args: {
    title: item.title,
    image: item.image,
    description: item.description,
    date: item.date,
    tag: item.tag,
    relatedArticles: item.relatedArticles,
  },
}
