import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyQuote, PolicyEmail, PolicyLink } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Text Messaging Terms',
  description: 'Terms governing text messages sent by Preston Kwei, including how to opt in and how to opt out.',
}

const Sms = () => {
  return (
    <PolicyLayout title='Text Messaging Terms' lastUpdated='November 5, 2026' description="Terms governing text messages sent from Preston Kwei's registered phone numbers.">
      <PolicyH2>1. Applicability and Sender</PolicyH2>
      <PolicyP>
        These Text Messaging Terms (the &quot;Terms&quot;) govern text messages sent by Preston Kwei, an individual (&quot;Preston&quot;), from any phone number registered to Preston for text messaging (each, a &quot;Registered Number&quot;). The messaging program described in these Terms is not a marketing, advertising, or promotional program. Certain calls and messages may be placed, sent, or answered by an automated assistant acting on Preston&apos;s behalf, and all such communications are subject to Preston&apos;s review.
      </PolicyP>

      <PolicyH2>2. Nature of Messages</PolicyH2>
      <PolicyP>Messages sent under these Terms are limited to:</PolicyP>
      <PolicyUl>
        <li>Replies to messages you send to a Registered Number;</li>
        <li>Follow-ups regarding a phone call between you and Preston or an assistant acting on Preston&apos;s behalf; and</li>
        <li>Confirmations of, and changes to, plans, meetings, and appointments arranged with Preston.</li>
      </PolicyUl>
      <PolicyP>No marketing, advertising, promotional, affiliate, or third-party content will be sent under these Terms.</PolicyP>

      <PolicyH2>3. Consent and Opt-In</PolicyH2>
      <PolicyP>You may consent to receive messages by either of the methods described below. No message will be sent to you under these Terms unless and until you have given consent through one of these methods.</PolicyP>

      <PolicyH3>Inbound Keyword</PolicyH3>
      <PolicyP>The following call to action is displayed publicly on this page, at https://legal.prestonkwei.com/policies/sms, before any message is sent:</PolicyP>
      <PolicyQuote>
        Text START to (phone number) to receive text messages from Preston Kwei, including replies to messages you send, follow-ups after a phone call, and confirmations or changes to plans, meetings, and appointments. No marketing or promotional messages are sent. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. See the Text Messaging Terms at https://legal.prestonkwei.com/policies/sms and the Privacy Policy at https://legal.prestonkwei.com/policies/privacy.
      </PolicyQuote>

      <PolicyH3>Verbal Consent</PolicyH3>
      <PolicyP>During a phone call placed from one of Preston&apos;s Registered Numbers, the following script is read to you verbatim:</PolicyP>
      <PolicyQuote>
        Is it okay if Preston texts you at this number about what we discussed? Message frequency varies, message and data rates may apply, you can reply STOP at any time to opt out, and reply HELP for help. Full terms are at legal.prestonkwei.com/policies/sms.
      </PolicyQuote>
      <PolicyP>A message will be sent only if you affirmatively consent. Each verbal consent is recorded with the date and time of the call and the phone number called.</PolicyP>

      <PolicyH3>Confirmation Message</PolicyH3>
      <PolicyP>Upon opt-in by either method, the first message sent to you will read:</PolicyP>
      <PolicyQuote>
        Preston Kwei: you&apos;re subscribed to text messages from this number. Msg frequency varies. Msg &amp; data rates may apply. Reply STOP to opt out, HELP for help. Terms: legal.prestonkwei.com/policies/sms
      </PolicyQuote>
      <PolicyP>Consent to receive text messages is not a condition of any purchase or service, and is not required for any other dealings with Preston.</PolicyP>

      <PolicyH2>4. Message Frequency and Charges</PolicyH2>
      <PolicyP>Message frequency varies and will not exceed ten (10) messages per week. Message and data rates may apply in accordance with your wireless plan.</PolicyP>

      <PolicyH2>5. Opt-Out and Assistance</PolicyH2>
      <PolicyP>
        You may revoke your consent at any time by replying STOP to any message. Upon receipt of your request, one final message will be sent confirming that you have been unsubscribed, and no further messages will be sent unless you opt in again by replying START. For assistance, reply HELP or email <PolicyEmail address='hello@prestonkwei.com' />.
      </PolicyP>

      <PolicyH2>6. Privacy</PolicyH2>
      <PolicyP>
        Your mobile number, message content, and opt-in consent records will not be sold, rented, or shared with third parties or affiliates for marketing or promotional purposes. This information is used solely to communicate with you and to deliver messages through Preston&apos;s messaging service provider. See the <PolicyLink href='/policies/privacy#sms'>Privacy Policy</PolicyLink> for more information.
      </PolicyP>

      <PolicyH2>7. Carrier Disclaimer</PolicyH2>
      <PolicyP>Wireless carriers are not liable for delayed or undelivered messages.</PolicyP>

      <PolicyH2>8. Changes to These Terms</PolicyH2>
      <PolicyP>Preston may update these Terms from time to time, including by adding, changing, or retiring Registered Numbers. The current version will be posted on this page with a revised &quot;Last Updated&quot; date.</PolicyP>

      <PolicyH2>9. Contact</PolicyH2>
      <PolicyP>
        Questions about these Terms may be directed to Preston Kwei at <PolicyEmail address='hello@prestonkwei.com' />.
      </PolicyP>
    </PolicyLayout>
  )
}

export default Sms
