import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyP, PolicyUl, PolicyEmail, PolicyLink } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Text Messaging Terms',
  description: 'How Preston Kwei uses his text messaging number, how to opt in, and how to opt out.',
}

const Sms = () => {
  return (
    <PolicyLayout title='Text Messaging Terms' lastUpdated='September 16, 2026' description='Terms for text messages sent from the personal messaging number of Preston Kwei, (510) 390-7573.'>
      <PolicyH2>1. Who Sends These Messages</PolicyH2>
      <PolicyP>
        Text messages from (510) 390-7573 are sent by Preston Kwei, an individual. This is not a business, marketing, or promotional program. The number is used for one-to-one conversations with people Preston knows or is personally coordinating with. Some calls and replies from this number are handled by Preston&apos;s own automated assistant on his behalf, and Preston reviews these conversations and replies personally as well.
      </PolicyP>

      <PolicyH2>2. What Messages You Will Receive</PolicyH2>
      <PolicyUl>
        <li>Replies to messages you send to this number;</li>
        <li>Follow-ups after a phone call with Preston or his assistant;</li>
        <li>Confirmations and changes for plans, meetings, and appointments you have made with Preston.</li>
      </PolicyUl>
      <PolicyP>No marketing, promotional, affiliate, or third-party content is sent from this number.</PolicyP>

      <PolicyH2>3. How to Opt In</PolicyH2>
      <PolicyUl>
        <li>
          <strong>By text:</strong> Text START, or any message, to (510) 390-7573. You will receive a confirmation message with opt-out and help instructions.
        </li>
        <li>
          <strong>By phone:</strong> During a call with Preston or his assistant, you are asked whether it is okay to text you at your number, told that message frequency varies and message and data rates may apply, and told you can reply STOP to opt out. Texts are sent only if you say yes.
        </li>
      </PolicyUl>
      <PolicyP>Consent to receive texts is never required to do anything else with Preston.</PolicyP>

      <PolicyH2>4. Frequency and Cost</PolicyH2>
      <PolicyP>Message frequency varies based on your conversation, up to 10 messages per week. Message and data rates may apply according to your mobile plan.</PolicyP>

      <PolicyH2>5. How to Opt Out or Get Help</PolicyH2>
      <PolicyP>
        Reply STOP at any time to stop receiving messages. You will receive one final message confirming you are unsubscribed. Reply START to opt back in. Reply HELP for help, or email <PolicyEmail address='hello@prestonkwei.com' />.
      </PolicyP>

      <PolicyH2>6. Privacy</PolicyH2>
      <PolicyP>
        Your mobile number, text messages, and opt-in consent are never sold, rented, or shared with third parties or affiliates for marketing or promotional purposes. They are used only to carry on your conversation with Preston and to deliver messages through his messaging provider. See the <PolicyLink href='/policies/privacy#sms'>Privacy Policy</PolicyLink> for more.
      </PolicyP>

      <PolicyH2>7. Carriers</PolicyH2>
      <PolicyP>Wireless carriers are not liable for delayed or undelivered messages.</PolicyP>

      <PolicyH2>8. Contact</PolicyH2>
      <PolicyP>
        Preston Kwei, <PolicyEmail address='hello@prestonkwei.com' />, (510) 390-7573.
      </PolicyP>
    </PolicyLayout>
  )
}

export default Sms
