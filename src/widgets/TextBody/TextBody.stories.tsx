import type { Meta, StoryObj } from '@storybook/react-vite'

import { TextBody } from './TextBody'

const meta: Meta<typeof TextBody> = {
  title: 'Widgets/[Module 22] TextBody',
  component: TextBody,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof TextBody>

export const WithTitleAndBody: Story = {
  args: {
    title: 'Terms of Use',
    body: (
      <>
        <p>
          Welcome to the EssilorLuxottica Eye Care website. By accessing and using this website, you
          agree to be bound by the following terms and conditions. Please read them carefully before
          using this site.
        </p>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing this website, you acknowledge that you have read, understood, and agree to be
          bound by these Terms of Use and all applicable laws and regulations. If you do not agree
          with any of these terms, you are prohibited from using or accessing this site.
        </p>
        <h2>2. Use of Website</h2>
        <p>
          You may use this website for <strong>lawful purposes only</strong>. You agree not to use
          the site in any way that could damage, disable, overburden, or impair the site or
          interfere with any other party&apos;s use of the site.
        </p>
        <h3>Permitted Uses:</h3>
        <ol>
          <li>Browsing information about EssilorLuxottica Eye Care services and programs</li>
          <li>Accessing educational content and resources provided on the site</li>
          <li>
            Submitting inquiries through designated contact forms
            <ol>
              <li>General inquiries</li>
              <li>Practice affiliation requests</li>
              <li>Event registration</li>
            </ol>
          </li>
          <li>Downloading publicly available materials and documents</li>
        </ol>
        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website, including but not limited to text, graphics, logos, images,
          and software, is the property of EssilorLuxottica and is protected by{' '}
          <strong>international copyright laws</strong>. You may not reproduce, distribute, or
          transmit any content without prior written consent.
        </p>
        <p>
          For more information about our intellectual property policies, please contact our{' '}
          <a href="mailto:legal@essilorluxottica.com">legal department</a>.
        </p>
      </>
    ),
  },
}

export const WithBlockquote: Story = {
  args: {
    title: '',
    body: (
      <>
        <h2>[Module 22] TextBody - default</h2>
        <p>
          This message is intended for all EssilorLuxottica affiliated ODs utilizing the CONNECT
          application.
        </p>
        <p>
          <strong>Wednesday, December 3 </strong>
        </p>
        <p>
          <strong>14 PM EST / 1 PM PDT</strong>
        </p>
        <p> </p>
        <blockquote>
          <p>
            This message is to inform you of active platform issues affecting CONNECT, which may
            impact some remote doctors’ ability to begin exams. Additionally, some ODs and
            technicians may be experiencing slower application response times.
          </p>
          <p>
            <strong>
              <u>Recommendations: </u>
            </strong>
            <br />
            <strong>
              <u>
                - If error messages are displayed in the application, it is recommended that users
                reload pages to restore functionality.
              </u>
            </strong>
            <br />
            <br />
            The IT team is aware and actively working on a resolution.
            <br />
            <br />
            Thank you for your patience.
          </p>
        </blockquote>
        <p> </p>
      </>
    ),
  },
}

export const BodyWithTable: Story = {
  args: {
    variant: 'table-center',
    titleAlign: 'text-center',
    body: (
      <>
        <h4 className="align--center">
          <strong>[Module 22] TextBody - default</strong>
        </h4>
        <p className="align--center">
          As a proactive leader in the industry, EssilorLuxottica is always evaluating how new
          technologies can enhance both the patient and doctor experience. Remote optometry is
          expected to expand as the landscape of optometry continues to evolve. The technologies
          available today for optometrists, permitting a synchronous and comprehensive exam with
          full equipment, has the potential to{' '}
          <strong>
            increase patient access to eye care and help qualified doctors engage with patients
            remotely, while improving doctor work-life balance.
          </strong>
        </p>
        <table>
          <tbody>
            <tr>
              <td>
                <p className="align--center">
                  <strong>Date/Registration URL</strong>
                </p>
              </td>
              <td>
                <p className="align--center">
                  <strong>CE Topic/URL</strong>
                </p>
              </td>
              <td>
                <p className="align--center">
                  <strong>Non-CE URL</strong>
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="align--center">April 8, 2025</p>
              </td>
              <td>
                <p className="align--center">Getting Started with OCT</p>
              </td>
              <td>
                <p className="align--center">Ask the Experts: Getting the Most Out of Your OCT</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="align--center">May 13, 2025</p>
              </td>
              <td>
                <p className="align--center">Glaucoma: a Practical Approach</p>
              </td>
              <td>
                <p className="align--center">Ask the Experts: Glaucoma</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="align--center">June 17, 2025</p>
              </td>
              <td>
                <p className="align--center">Untreated Dual SensORY Loss: Update 2025</p>
              </td>
              <td>
                <p className="align--center">
                  Ask the Experts: Talking to your patients about Dual SensORY Loss
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="align--center">July 22, 2025</p>
              </td>
              <td>
                <p className="align--center">
                  Diabetes: More Than Meets the Eyes - An OD’s Perspective
                </p>
              </td>
              <td>
                <p className="align--center">Ask the Experts: Diabetes</p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="align--center">September 23, 2025</p>
              </td>
              <td>
                <p className="align--center">
                  Mastering Multifocals: How to Utilize the Latest Contact Lens Technologies to
                  Serve Your Presbyopic Population
                </p>
              </td>
              <td>
                <p className="align--center">
                  ACUVUE OASYS MAX 1-Day Family Featuring 2 new products and 4 Powerful Technologies
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="align--center">October 14, 2025</p>
              </td>
              <td>
                <p className="align--center">Medical Billing 201 </p>
              </td>
              <td>
                <p className="align--center">Ask the Experts: Medical Billing 201 </p>
              </td>
            </tr>
            <tr>
              <td>
                <p className="align--center">November 4, 2025</p>
              </td>
              <td>
                <p className="align--center">Myopia Management - 2025</p>
              </td>
              <td>
                <p className="align--center">
                  {' '}
                  Ask the Experts: Implementing Myopia Management into Your Practice{' '}
                </p>
              </td>
            </tr>
          </tbody>
        </table>
        <p> </p>
        <p> </p>
      </>
    ),
  },
}

export const ArticleBigPadding: Story = {
  args: {
    title: 'Digital Patient Suite',
    variant: 'ArticleBigPadding',
    titleAlign: 'text-center',
    body: (
      <>
        <p className="align--center">
          Over the last year, the EssilorLuxottica Eye Care team has been working closely with the
          LensCrafters and Target Optical teams to develop the Digital Patient Suite, a set of tools
          intended to improve the experience for doctors, staff, and patients as well as store
          leaders, associates, and customers.
        </p>
        <p className="align--center">
          Available through The Appointment Book (TAB), the Digital Patient Suite consists of three
          components: <strong>Digital Intake Form, Conversational Messaging, and Digital Rx</strong>
          .
        </p>
      </>
    ),
  },
}
