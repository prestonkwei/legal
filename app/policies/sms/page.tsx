import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyQuote, PolicyEmail, PolicyLink } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Text Messaging Terms',
  description: 'How Preston Kwei uses his text messaging number, how to opt in, and how to opt out.',
}

const Sms = () => {
  return (
    <PolicyLayout title='Text Messaging Terms' lastUpdated='September 17, 2026' description='Terms for text messages sent from the personal messaging number of Preston Kwei, (510) 390-7573.'>
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
      <PolicyP>There are two ways to opt in, and no message is sent from this number until you have opted in through one of them.</PolicyP>

      <PolicyH3>Inbound Keyword</PolicyH3>
      <PolicyP>The following call to action is displayed publicly on this page, at https://legal.prestonkwei.com/policies/sms, before any message is sent:</PolicyP>
      <PolicyQuote>
        Text START to (510) 390-7573 to receive text messages from Preston Kwei. Messages are one-to-one and conversational: replies to messages you send, follow-ups after a phone call, and confirmations or changes to plans, meetings, and appointments. No marketing or promotional messages are sent. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. See the Text Messaging Terms at https://legal.prestonkwei.com/policies/sms and the Privacy Policy at https://legal.prestonkwei.com/policies/privacy.
      </PolicyQuote>

      <PolicyH3>Verbal Consent</PolicyH3>
      <PolicyP>During a phone call placed from (510) 390-7573, you are read this script verbatim:</PolicyP>
      <PolicyQuote>
        Is it okay if Preston texts you at this number about what we discussed? Message frequency varies, message and data rates may apply, you can reply STOP at any time to opt out, and reply HELP for help. Full terms are at legal.prestonkwei.com/policies/sms.
      </PolicyQuote>
      <PolicyP>A text is sent only if you answer yes. Verbal consent is logged with the date, time, and the number called.</PolicyP>

      <PolicyH3>Your First Message</PolicyH3>
      <PolicyP>In both cases, the first message sent is:</PolicyP>
      <PolicyQuote>
        Preston Kwei: you&apos;re subscribed to text messages from this number. Msg frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. Terms: legal.prestonkwei.com/policies/sms
      </PolicyQuote>
      <PolicyP>Consent to receive messages is never a condition of any purchase or service, and is never required to do anything else with Preston.</PolicyP>

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
