import type { Meta, StoryObj } from '@storybook/react-vite'

import { BlogPostContent } from './index'

const meta: Meta<typeof BlogPostContent> = {
  title: 'Components/BlogPostContent',
  component: BlogPostContent,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof BlogPostContent>

export const Default: Story = {
  render: () => {
    return (
      <BlogPostContent>
        <BlogPostContent.Body>
          <>
            <p>
              This month, Dr. Mandy Bains brings a thoughtful perspective to Women&apos;s Health and
              Safety Month, one rooted in mentorship, empowerment, and patient-centered care. After
              discovering her passion for optometry through an unexpected opportunity early in her
              career, she built a path that blends high-quality clinical care with entrepreneurship,
              now leading two practices next to LensCrafters. Her story reflects the impact women
              have in shaping both the future of eye care and their communities.
            </p>
            <p>
              Dr. Bains shares her perspective on the importance of prioritizing women&aposs health,
              creating safe spaces for care, and empowering patients through education and support
              below.
            </p>
            <h5>
              <strong>Women&apos;s Eye Health and Safety Month </strong>
            </h5>
            <p>
              Are women at higher risk for certain eye diseases and vision problems, and if so, why?
            </p>
            <blockquote>
              <p>
                Absolutely! Women are especially prone to certain eye diseases and vision problems,
                so it&apos;s great that we&apos;re shining a light on women&apos;s eye health this
                April. Did you know that, according to the National Eye Institute, about two-thirds
                of people who are affected by blindness or vision issues are women? Raising
                awareness is so important and can truly help make a difference.
              </p>
              <p>
                There are a few key reasons why women are more likely than men to face eye diseases
                and vision problems. First, biology plays a big part. Many eye conditions become
                more common as we age, and since women generally live longer than men, they&apos;re
                more likely to experience issues like macular degeneration, glaucoma, cataracts, and
                dry eye. Hormonal changes also have an impact: shifts in estrogen and
                progesterone—especially after menopause—can make dry eye more frequent. During
                pregnancy, hormone surges and fluid retention can change vision, too. On top of
                that, autoimmune diseases like thyroid eye disease, lupus, rheumatoid arthritis, and
                Sjogren&apos;s syndrome are more common in women, and these can lead to chronic eye
                inflammation and dry eye.
              </p>
              <p>
                Lifestyle and social factors also play a role. Women are more likely to take
                medications such as birth control or hormone replacement therapy, which can affect
                vision. They often use cosmetics, increasing the risk of eye infections. And,
                unfortunately, women around the world tend to have less access to healthcare, so eye
                conditions sometimes go untreated. All these factors add up to make protecting
                women&apos;s eye health a priority.
              </p>
            </blockquote>
            <p> </p>
            <p>What eye conditions should women be most aware of as they age? </p>
            <blockquote>
              <p>
                As women get older, there are a few important eye conditions to keep an eye on. Dry
                eye syndrome is quite common—thanks to changing hormones and a higher risk of
                autoimmune diseases in women, it can become especially bothersome. Another condition
                to be aware of is Fuch&apos;s dystrophy, which affects the cornea and can lead to
                blurry vision; this too is more often seen in women. Narrow angle glaucoma is
                another concern, as women tend to have shorter eyes or shallower anterior chambers,
                making them more susceptible. And of course, it&apos;s essential to have regular
                check-ups for age-related macular degeneration as we age.
              </p>
            </blockquote>
            <p>&nbsp;</p>
            <p>What simple steps can women take to protect their vision and eye health? </p>
            <blockquote>
              <p>
                One of the best—and easiest—ways for women to look after their vision is to book
                regular, comprehensive eye exams. Since many eye conditions don&apos;t cause obvious
                symptoms, making annual check-ups a priority can really help catch issues early.
                It&apos;s also a good idea to share your family health history with your
                optometrist, so they know what to watch for and can keep an eye on any risks. Beyond
                that, maintaining a healthy lifestyle with nutritious meals and regular exercise can
                do wonders for your eyes. And finally, remember to practice safe and clean habits
                when using makeup, to help keep your eyes healthy and protected.
              </p>
            </blockquote>
          </>
        </BlogPostContent.Body>
      </BlogPostContent>
    )
  },
}
