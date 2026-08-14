import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextEvent } from './TextEvent'

const meta: Meta<typeof TextEvent> = {
  title: 'Widgets/[Module 16] TextEvent',
  component: TextEvent,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof TextEvent>

export const TextEventDefault: Story = {
  args: {
    title:
      'Interested in learning more about affiliating with EssilorLuxottica and exploring the support options that come with different practice modalities?',
    richText: (
      <>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          We'd love to connect! See below to find out what{' '}
          <strong>regional and school events</strong> the EssilorLuxottica Eye Care team members
          will be visiting over the coming weeks.
        </p>
        <h3>April 2026:</h3>
        <table>
          <tbody>
            <tr>
              <td>April 1</td>
              <td>University of Alabama at Birmingham - Scholarship Dinner</td>
            </tr>
            <tr>
              <td>April 10</td>
              <td>Illinois College of Optometry – Symposium</td>
            </tr>
            <tr>
              <td>April 10</td>
              <td>The Ohio State University – Eyeball</td>
            </tr>
            <tr>
              <td>April 10</td>
              <td>University of Alabama at Birmingham – Eyeball</td>
            </tr>
            <tr>
              <td>April 10-12</td>
              <td>Inter American University of Puerto Rico - Eyeland Of Enchantment</td>
            </tr>
            <tr>
              <td>April 14 </td>
              <td>Western University of Health Sciences - 3rd Year Pizza Party</td>
            </tr>
            <tr>
              <td>April 17</td>
              <td>Southern College of Optometry - Coffee Breakfast Networking Breakfast</td>
            </tr>
            <tr>
              <td>April 18</td>
              <td>Southern College of Optometry - 3rd Year Send Off</td>
            </tr>
            <tr>
              <td>April 19</td>
              <td>State University of New York - Career Symposium</td>
            </tr>
            <tr>
              <td>April 22</td>
              <td>New Hampshire Optometric Association (NHOA) - Spring in New Hampshire</td>
            </tr>
            <tr>
              <td>April 29</td>
              <td>Massachusetts College of Pharmacy and Health Sciences - 3rd Year Send Off</td>
            </tr>
          </tbody>
        </table>
        <p> </p>
        <p>May 2026:</p>
        <p> </p>
        <table>
          <tbody>
            <tr>
              <td>May 4 </td>
              <td>Southern College of Optometry – Capstone</td>
            </tr>
            <tr>
              <td>May 7</td>
              <td> Indiana University – Capstone</td>
            </tr>
            <tr>
              <td>May 7</td>
              <td> University of Alabama at Birmingham – Capstone</td>
            </tr>
            <tr>
              <td>May 14</td>
              <td>Illinois College of Optometry – Capstone</td>
            </tr>
            <tr>
              <td>May 15-17</td>
              <td>Virginia Optometric Association (VOA) - Spring Conference</td>
            </tr>
          </tbody>
        </table>
        <p> </p>
        <h3>June 2026:</h3>
        <p> </p>
        <table>
          <tbody>
            <tr>
              <td>June 4-6</td>
              <td>Pennsylvania Optometric Association POA - Spring Congress</td>
            </tr>
          </tbody>
        </table>
        <p> </p>
        <h2>Past Events</h2>
        <h3>January 2026:</h3>
        <p> </p>
        <table>
          <tbody>
            <tr>
              <td>January 9-11</td>
              <td>Arizona Optometric Association Vision - Bronstein Seminar</td>
            </tr>
            <tr>
              <td>January 16</td>
              <td>Illinois College of Optometry, New Years</td>
            </tr>
            <tr>
              <td>January 16-23</td>
              <td>Island Eyes</td>
            </tr>
            <tr>
              <td>January 20</td>
              <td>Indiana University School of Optometry, Food Festival</td>
            </tr>
            <tr>
              <td>January 25</td>
              <td>New England College of Optometry - Get Fit 360</td>
            </tr>
            <tr>
              <td>January 25</td>
              <td>SUNY College of Optometry - Get Fit 360</td>
            </tr>
            <tr>
              <td>January 26</td>
              <td>
                California Optometric Association - Orange County Sponsorship Appreciation Dinner
              </td>
            </tr>
            <tr>
              <td>April 18</td>
              <td>Southern College of Optometry - 3rd Year Send Off</td>
            </tr>
            <tr>
              <td>TBD</td>
              <td>Inter American University of Puerto Rico, School of Optometry – Board Prep</td>
            </tr>
            <tr>
              <td>TBD</td>
              <td>WesternU College of Optometry - Spring Semester Kick off Social</td>
            </tr>
            <tr>
              <td>TBD</td>
              <td>University of Houston College of Optometry - PP Club</td>
            </tr>
          </tbody>
        </table>
        <p> </p>
        <h3>February 2026:</h3>
        <p> </p>
        <table>
          <tbody>
            <tr>
              <td>February 1</td>
              <td>New England College of Optometry - Get Fit 360</td>
            </tr>
            <tr>
              <td>February 1</td>
              <td>SUNY College of Optometry - Get Fit 360</td>
            </tr>
            <tr>
              <td>February 6-8</td>
              <td>Optometry Association of Louisiana - Mid Winter Meeting</td>
            </tr>
            <tr>
              <td>February 12-15</td>
              <td>Texas Optometric Association – TOA Summit</td>
            </tr>
            <tr>
              <td>February 20-21</td>
              <td> California Optometric Association - House of Delegates</td>
            </tr>
            <tr>
              <td>February 20-22</td>
              <td>University of Missouri-St. Louis - Heart of America Association Meeting</td>
            </tr>
            <tr>
              <td>February 23-24</td>
              <td>The Association of Armed Forces and Federal Optometric Services</td>
            </tr>
            <tr>
              <td>February 25 - March 1</td>
              <td>SECO 2026</td>
            </tr>
            <tr>
              <td>February 26-28</td>
              <td>Montana Optometric Association - Winter Conference</td>
            </tr>
            <tr>
              <td>February 26-28</td>
              <td>Nebraska Spring Conference</td>
            </tr>
            <tr>
              <td>TBD</td>
              <td>UC Berkeley School of Optometry - Board Bags</td>
            </tr>
            <tr>
              <td>TBD</td>
              <td>Western University College of Optometry - Lunch and Learn</td>
            </tr>
            <tr>
              <td>TBD</td>
              <td>Western University College of Optometry – Networking Dining w/ a Doc</td>
            </tr>
          </tbody>
        </table>
        <p> </p>
        <h3>March 2026:</h3>
        <p> </p>
        <table>
          <tbody>
            <tr>
              <td>March 11-14</td>
              <td>Vision Expo East</td>
            </tr>
            <tr>
              <td>March 22</td>
              <td>Puerto Rico Colegio &amp; IAUPR Student Body Optometry Week</td>
            </tr>
            <tr>
              <td>March 22</td>
              <td>OptiFair Trade Show</td>
            </tr>
            <tr>
              <td>March 26</td>
              <td>Indiana University School of Optometry - Low Vision Clinic</td>
            </tr>
            <tr>
              <td>March 26-28</td>
              <td>Oklahoma Association of Optometric Physician - Vision Summit</td>
            </tr>
            <tr>
              <td>March 27</td>
              <td>Indiana University School of Optometry - Boards Over Event</td>
            </tr>
            <tr>
              <td>March 27-29</td>
              <td>The Ontario Association of Optometrists - Symposium</td>
            </tr>
            <tr>
              <td>March 29-30</td>
              <td>The Academy of Ophthalmic Education - OptiFair and Trade Show</td>
            </tr>
          </tbody>
        </table>
      </>
    ),
  },
}

export const TextEventCentered: Story = {
  args: {
    variant: 'table-center',
    title: 'Help Bring Everyone the Joy of Good Vision',
    richText: (
      <>
        <p>
          Over the last seven years, optometry students have partnered with EssilorLuxottica
          affiliated doctors and volunteered at{' '}
          <a data-href="coremedia:///eyx-ww/onesight/">OneSight EssilorLuxottica Foundation</a>{' '}
          vision clinics to assist those most in need.
        </p>
        <p> </p>
        <p>
          Open to third- and fourth-year optometry students. See below for upcoming 2025 clinic
          locations:
        </p>
        <p> </p>
        <p> </p>
        <table>
          <tbody>
            <tr>
              <td>Los Angeles, California</td>
              <td>May 19-23</td>
            </tr>
            <tr>
              <td>Detroit, MI</td>
              <td>June 26-28</td>
            </tr>
            <tr>
              <td>Fort Dodge, IA</td>
              <td>June 19-20</td>
            </tr>
            <tr>
              <td>Fishkill, NY</td>
              <td>July 14-17, July 28-28, or Aug 11-13</td>
            </tr>
            <tr>
              <td>Fort Worth, TX</td>
              <td>July 15-17</td>
            </tr>
            <tr>
              <td>Charlotte, NC</td>
              <td>Aug 12-14</td>
            </tr>
            <tr>
              <td>Newark, NJ</td>
              <td>Sept 22-26</td>
            </tr>
            <tr>
              <td>Dallas, TX</td>
              <td>Oct 7-9</td>
            </tr>
          </tbody>
        </table>

        <p>
          If you are interested in participating, please reach out to{' '}
          <strong>Tami Wittenauer</strong> at{' '}
          <a href="mailto:twittena@onesight.org">twittena@onesight.org</a>.
        </p>
      </>
    ),
  },
}
