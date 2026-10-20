import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyEmail, PolicyLink, PolicyDefList } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Identity Verification Terms',
  description: 'How we verify age and identity for ticketed events, including with IDs in Apple Wallet.',
}

const IdentityVerification = () => {
  return (
    <PolicyLayout title='Identity Verification Terms' lastUpdated='October 20, 2026' description='Terms for age and identity verification on our ticketing Services, including verification with a digital ID in Apple Wallet.'>
      <PolicyH2>1. Scope and Relationship to Other Terms</PolicyH2>
      <PolicyP>
        These Identity Verification Terms supplement our <PolicyLink href='/policies/tos'>Terms of Service</PolicyLink> and <PolicyLink href='/policies/privacy'>Privacy Policy</PolicyLink> and apply whenever we ask you to verify your age or identity to buy, hold, transfer, or use a ticket to an event offered through the Services. Capitalized terms not defined here have the meanings given in the Terms of Service. Where these terms conflict with the Terms of Service or Privacy Policy with respect to Verification Data (defined below), these terms control.
      </PolicyP>

      <PolicyH2>2. Why We Verify</PolicyH2>
      <PolicyP>Some events require us to confirm that a ticket holder meets a minimum age, or that the person presenting a ticket is the person it was issued to. We use verification only to:</PolicyP>
      <PolicyUl>
        <li>Confirm that you meet an event&apos;s minimum age requirement;</li>
        <li>Confirm that the person presenting a ticket is the ticket holder, to prevent ticket fraud, scalping, and unauthorized transfer;</li>
        <li>Admit you to the event and keep the event secure.</li>
      </PolicyUl>

      <PolicyH2>3. Verifying With Apple Wallet</PolicyH2>
      <PolicyP>
        Where available, you may verify using a driver&apos;s license, state ID, or other eligible identity document you have added to Apple Wallet. When you choose to verify, your device shows you exactly which information is being requested and asks you to authorize sharing it with Face ID or Touch ID. Nothing is shared unless you approve the request. The information is sent directly from your device in a form signed by the issuing authority, which allows us to confirm that it is authentic and unaltered.
      </PolicyP>
      <PolicyH3>Information We Request</PolicyH3>
      <PolicyDefList
        items={[
          { term: 'Age over N', definition: 'A yes-or-no answer to whether you are at least the minimum age for the event, such as 18 or 21. We do not receive your date of birth.' },
          { term: 'Name', definition: 'Your name as it appears on your ID, used to confirm it matches the name on the ticket.' },
          { term: 'ID portrait', definition: 'The photo from your ID, shown to authorized event staff so they can visually confirm that the person presenting the ticket is you.' },
        ]}
      />
      <PolicyP>
        We do not request your address, date of birth, sex, document number, physical characteristics, or any other information from your ID. Together, the information above and the result of any verification are &quot;Verification Data.&quot;
      </PolicyP>
      <PolicyH3>Visual Checks</PolicyH3>
      <PolicyP>
        Visual identity checks are performed by a person. Authorized event staff compare your ID portrait with the person presenting the ticket. We do not use facial recognition, and we do not create a faceprint, facial geometry, or any other biometric identifier from your ID portrait.
      </PolicyP>

      <PolicyH2>4. How We Use and Share Verification Data</PolicyH2>
      <PolicyP>Notwithstanding anything else in the Terms of Service or Privacy Policy, Verification Data:</PolicyP>
      <PolicyUl>
        <li>Is used only for the purposes listed in Section 2;</li>
        <li>Is never sold, rented, or shared for advertising, marketing, or cross-context behavioral advertising;</li>
        <li>Is never used for profiling, analytics, or to train, fine-tune, or evaluate any machine-learning or artificial-intelligence model;</li>
        <li>Is never combined with information from data brokers or other third-party sources;</li>
        <li>Is not User Content, and the license in Section 9 of the Terms of Service does not apply to it;</li>
        <li>Is shown only to staff who need it to admit you to the event, and is disclosed to others only to hosting and infrastructure providers that process it on our behalf under confidentiality obligations, or where required by law.</li>
      </PolicyUl>

      <PolicyH2>5. Retention</PolicyH2>
      <PolicyUl>
        <li>
          <strong>ID portrait and name:</strong> Kept only as long as needed to complete your admission check, and deleted no later than 24 hours after the event ends.
        </li>
        <li>
          <strong>Verification result:</strong> A record that your ticket passed or failed verification, the age threshold checked, and the date and time, kept for up to 90 days after the event to handle disputes, refunds, and fraud, then deleted.
        </li>
      </PolicyUl>
      <PolicyP>We may keep a record longer only where required by law or to resolve a specific dispute or fraud investigation involving your ticket, and only until it is resolved.</PolicyP>

      <PolicyH2>6. If You Cannot or Do Not Want to Use Apple Wallet</PolicyH2>
      <PolicyP>
        Verifying with Apple Wallet is optional. If you do not have an eligible ID in Apple Wallet, or prefer not to use it, you may instead present a valid, unexpired, government-issued photo ID to event staff at entry. Staff will check your age and compare the photo and name with you and your ticket. We do not photograph, scan, or copy physical IDs. The same age and identity requirements apply to every ticket holder for an event, however they verify.
      </PolicyP>

      <PolicyH2>7. If Verification Fails</PolicyH2>
      <PolicyP>
        If you do not meet an event&apos;s age requirement, cannot verify your identity by either method, or the name or portrait on your ID does not match you or your ticket, you may be refused entry. Whether a refund is available in that case is governed by the event&apos;s refund policy shown at purchase and the Fees and Payment section of the Terms of Service. If you believe a verification decision was a mistake, contact us at <PolicyEmail address='legal@prestonkwei.com' /> and a person will review it.
      </PolicyP>

      <PolicyH2>8. Your Responsibilities</PolicyH2>
      <PolicyP>You agree to verify only with an ID that was lawfully issued to you, and not to use, or attempt to use, anyone else&apos;s ID, credential, or device to verify. Attempting to defeat or misuse verification is a violation of the Terms of Service and may result in cancellation of your tickets without refund.</PolicyP>

      <PolicyH2>9. Apple</PolicyH2>
      <PolicyP>
        Apple provides the Wallet technology used to share your information but is not a party to these terms and is not responsible for our events or our handling of Verification Data. Apple&apos;s handling of the IDs in your Wallet is governed by Apple&apos;s own terms and privacy policy.
      </PolicyP>

      <PolicyH2>10. Your Rights</PolicyH2>
      <PolicyP>
        You may request access to or deletion of your Verification Data at any time, subject to the retention described in Section 5. Submit requests to <PolicyEmail address='privacy@prestonkwei.com' />. Additional rights available under your jurisdiction are described in the <PolicyLink href='/policies/privacy'>Privacy Policy</PolicyLink>.
      </PolicyP>

      <PolicyH2>11. Contact</PolicyH2>
      <PolicyP>
        Questions about these terms may be directed to <PolicyEmail address='legal@prestonkwei.com' /> or by mail to PO Box 20987, Oakland, CA 94620.
      </PolicyP>
    </PolicyLayout>
  )
}

export default IdentityVerification
