import type { Meta, StoryObj } from '@storybook/react-vite'

import { InternalBrandsTab } from '.'

const meta: Meta<typeof InternalBrandsTab> = {
  title: 'Widgets/[Module 11] InternalBrandsTab',
  component: InternalBrandsTab,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof InternalBrandsTab>

export const Default: Story = {
  args: {
    title: 'Eye Care Marketing Built For Your Practice',
    subTitle: (
      <p>
        Strategically designed to appeal to a local patient, OD marketing activities reach people in
        your local network to increase consideration and action when booking their next eye exam.
      </p>
    ),
    tabs: [
      {
        tabTitle: 'Ratings & Reviews',
        topContent: {
          title: '',
          longText: (
            <p>
              Since a new patient&apos;s first impression of a doctor often starts online, your
              reputation can be heavily influenced by the ratings and reviews people leave for your
              practice. To easily view, manage, and respond to reviews left for your practice, you
              have access to Yext*, an online ratings &amp; reviews management system.
              <br />
              <br />
              *Please ensure you are opted in to both pages &amp; listings and ratings &amp; reviews
              in TAB to benefit from this program.
            </p>
          ),
          cta: {
            label: 'Access Your Yext Portal',
            url: 'https://www.yext.com/users/login',
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118858/data/980349afa59ed048972af69019e1d5c8/arrow-right-white.svg',
              alt: 'arrow right white',
            },
          },
        },
        bottomContent: {
          title: 'AT A GLANCE',
          icon: {
            src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118860/data/cbd2bce2565c8b9048d9cc4bb8b6e3bd/quote-icon.svg',
          },

          textList: (
            <ol>
              <li>
                TAB “Thank You” email sends a review prompt to the patient, requesting feedback
                about their eye exam experience
              </li>
              <li>Yext powers and syndicates reviews into one single location, on one platform</li>
              <li>
                Allows for your practice to respond to reviews in one place, versus having to
                respond all different websites (ODLP first party reviews, Google, etc)
              </li>
            </ol>
          ),

          quote: (
            <>
              <p>
                “Ratings &amp; Reviews have a large impact on my practice. Patients like to share
                their experience with their friends, the public and our office.”
              </p>
              <br />
              <p>- Dr. Judi Schaffer, Fort Lauderdale, FL</p>
            </>
          ),
        },
      },
      {
        tabTitle: 'Pages & Listings',
        topContent: {
          title: 'Your OD Landing Page and Google My Business',
          longText: (
            <p>
              Online search is one of the most important ways to promote your practice with
              prospective patients. Because of this, it is important that you make sure your online
              pages are accurate and complete to increase visibility among top search engines (i.e.,
              Google), and also present a positive image for your practice.
            </p>
          ),
          cta: {
            label: 'Learn More',
            url: 'https://www.odmarketinghub.com/Catalog/tabid/14580/Default.aspx?CatalogPk=b0202988-ae10-4c4d-ad17-3c4adea2339e',
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118858/data/980349afa59ed048972af69019e1d5c8/arrow-right-white.svg',
              alt: 'arrow right white',
            },
          },
        },
        bottomContent: {
          title: 'AT A GLANCE',
          icon: {
            src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118860/data/cbd2bce2565c8b9048d9cc4bb8b6e3bd/quote-icon.svg',
          },

          textList: (
            <ol>
              <li>
                Make sure your TAB profile is complete and accurate—information from TAB is
                automatically syndicated with your OD Landing Page and Google My Business Page
              </li>
              <li>
                Online exam schedule populates with your appointment availability for easy patient
                experience
              </li>
              <li>
                Photos and reviews help increase search rankings so your practice appears when
                patients search for an OD
              </li>
            </ol>
          ),

          quote: (
            <>
              <p>
                “Optimize your Google My Business Page by adding hours of operation, correct contact
                details, and other important practice information to consistently appear toward the
                top of search queries in your local area.”
              </p>
              <br />
              <p>- The OD Marketing Team</p>
            </>
          ),
        },
      },
      {
        tabTitle: 'OD Marketing Hub',
        topContent: {
          title: '',
          longText: (
            <p>
              The OD Marketing Hub is the best first step for your practice to get more marketing
              information and find marketing materials to help grow your practice. The OD Marketing
              Hub is updated on a regular basis with digital and social assets. You can also find
              the sign-up forms for additional marketing programs and opportunities.
            </p>
          ),
          rightSideText: (
            <>
              <p>Credentials:</p>
              <p>
                <br />
                Username: Your TAB admin username
                <br />
                Password: 10-digit office phone with no space or special characters (ex: 1234567890)
              </p>
              <br />
              <p>If you are having trouble logging in, email: odmarketing@luxotticaretail.com.</p>
            </>
          ),
          cta: {
            label: 'Access the OD Marketing Hub',
            url: 'https://www.odmarketinghub.com/',
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118858/data/980349afa59ed048972af69019e1d5c8/arrow-right-white.svg',
              alt: 'arrow right white',
            },
          },
        },
        bottomContent: {
          title: 'AT A GLANCE',
          icon: {
            src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118860/data/cbd2bce2565c8b9048d9cc4bb8b6e3bd/quote-icon.svg',
          },

          textList: (
            <ol>
              <li>
                Customizable print and digital materials
                <br />
                including business cards, exam postcards, health fair posters and more
              </li>
              <li>Marketing quick start guides and best practices led by your peers</li>
              <li>
                Digital and social media toolkits with approved images and copy that are ready to
                share to help grow your online presence
              </li>
              <li>Sign-up forms for the Hyper Local Program and the Target Social Program</li>
              <li>Quick link to order RX forms for your practice</li>
              <li>Brand image library</li>
            </ol>
          ),

          quote: (
            <>
              <p>
                “I log in to the OD Marketing Hub to utilize the current promotions for my email
                blasts and website material. The imagery and branding help us for email content
                creation and social posts!”
              </p>
              <br />
              <p>- Dr. Fallon Patel, Ontario, Canada</p>
            </>
          ),
        },
      },
      {
        tabTitle: 'Hyper Local Media Program',
        topContent: {
          title: '',
          longText: (
            <p>
              The “Hyper Local Media Program” is a great way to maintain a digital media presence
              and drive incremental eye exams to the your practice through an array of digital media
              tactics including: search, display, social, and email acquisition. The program is
              designed to be turnkey for you, with a dedicated media agency on-call to manage,
              optimize and report on the program.
            </p>
          ),
          cta: {
            label: 'Sign Up Today',
            url: 'https://www.odmarketinghub.com/DigitalMarketingProgramSignUp/LensCraftersLocalMediaSignUp/tabid/15260/Default.aspx',
            logo: {
              src: 'https://preview-stageuatelec.luxgroup.nethttps://preview-stageuatelec.luxgroup.net/caas/v1/media/1118858/data/980349afa59ed048972af69019e1d5c8/arrow-right-white.svg',
              alt: 'arrow right white',
            },
          },
        },
        bottomContent: {
          title: 'AT A GLANCE',
          icon: {
            src: 'https://preview-stageuatelec.luxgroup.net/caas/v1/media/1118860/data/cbd2bce2565c8b9048d9cc4bb8b6e3bd/quote-icon.svg',
          },

          textList: (
            <ol>
              <li>
                Each campaign will run in 12 week increments providing valuable exposure for your
                practice
              </li>
              <li>
                EssilorLuxottica offsets 50% of the cost, allowing you to take advantage of more for
                less
              </li>
              <li>Proven to drive incremental eye exams throughout the campaign</li>
            </ol>
          ),

          quote: (
            <>
              <p>
                “This program was AWESOME! It really helped us have not only conversions directly,
                but share our name with the larger community. It has driven great awareness which
                has brought people in!”
              </p>
              <br />
              <p>- Dr. Kate Hamm, Topeka, KS</p>
            </>
          ),
        },
      },
    ],
  },
}
