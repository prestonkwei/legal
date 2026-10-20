import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyEmail, PolicyLink, PolicyDefList } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Identity Verification Terms',
  description: 'How we verify age and identity, including with IDs in Apple Wallet and photos of IDs.',
}

const IdentityVerification = () => {
  return (
    <PolicyLayout title='Identity Verification Terms' lastUpdated='October 20, 2026' description='Terms for age and identity verification across our Services, including verification with a digital ID in Apple Wallet and with a photo of a physical ID.'>
      <PolicyH2>1. Scope and Relationship to Other Terms</PolicyH2>
      <PolicyP>
        These Identity Verification Terms supplement our <PolicyLink href='/policies/tos'>Terms of Service</PolicyLink> and <PolicyLink href='/policies/privacy'>Privacy Policy</PolicyLink> and apply whenever we ask you to verify your age or identity in connection with the Services, including to buy, hold, transfer, or use a ticket to an event, to open or recover an account, or to complete a purchase. Capitalized terms not defined here have the meanings given in the Terms of Service. Where these terms conflict with the Terms of Service or Privacy Policy with respect to Verification Data (defined in Section 4), these terms control.
      </PolicyP>

      <PolicyH2>2. Why We Verify</PolicyH2>
      <PolicyP>We use verification only to:</PolicyP>
      <PolicyUl>
        <li>Confirm that you meet a minimum age requirement, such as for an event or a product;</li>
        <li>Confirm that the person presenting a ticket, using an account, or making a purchase is the person entitled to do so;</li>
        <li>Prevent and investigate fraud, ticket scalping, unauthorized transfers, and account takeover;</li>
        <li>Admit you to events and keep events and the Services secure;</li>
        <li>Comply with legal obligations that require us to verify age or identity.</li>
      </PolicyUl>

      <PolicyH2>3. How You Can Verify</PolicyH2>
      <PolicyP>Depending on the Service and the event, we may offer one or more of the methods below. We will tell you which methods are available before you verify.</PolicyP>

      <PolicyH3>Digital ID in Apple Wallet</PolicyH3>
      <PolicyP>
        Where available, you may verify using a driver&apos;s license, state ID, or other eligible identity document you have added to Apple Wallet. Your device shows you exactly which information is being requested and asks you to authorize sharing it with Face ID or Touch ID. Nothing is shared unless you approve the request. The information is sent directly from your device in a form signed by the issuing authority, which allows us to confirm that it is authentic and unaltered. When you verify with Apple Wallet, we request only:
      </PolicyP>
      <PolicyDefList
        items={[
          { term: 'Age over N', definition: 'A yes-or-no answer to whether you are at least the required age, such as 18 or 21. We do not receive your date of birth.' },
          { term: 'Name', definition: 'Your name as it appears on your ID, used to confirm it matches the name on your ticket, account, or order.' },
          { term: 'ID portrait', definition: 'The photo from your ID, shown to authorized staff so they can visually confirm that you are the person verifying.' },
        ]}
      />
      <PolicyP>We do not request your address, date of birth, sex, document number, physical characteristics, or any other information from an ID in Apple Wallet.</PolicyP>

      <PolicyH3>Photo of a Physical ID</PolicyH3>
      <PolicyP>
        You may be asked to upload or capture a photo of a valid, government-issued photo ID through the Services, or authorized staff may photograph your ID at an event entrance with your permission. A photo of an ID captures everything printed on it, which may include your name, portrait, date of birth, address, document number, issue and expiration dates, issuing authority, sex, and physical description. We use only the information needed for the purposes in Section 2, and we may check the photo for signs that the ID is expired, altered, or not genuine, either ourselves or through a service provider acting on our behalf.
      </PolicyP>

      <PolicyH3>In-Person Inspection</PolicyH3>
      <PolicyP>At events, you may instead show a valid, government-issued photo ID to staff, who will check your age and compare the photo and name with you and your ticket without copying or photographing it.</PolicyP>

      <PolicyH3>Visual Checks and Facial Recognition</PolicyH3>
      <PolicyP>
        Visual identity checks are performed by a person, who compares the portrait on your ID with you. We do not currently use facial recognition, and we do not create a faceprint, facial geometry, or any other biometric identifier from your ID or your appearance. If we ever introduce automated face matching, we will describe it in these terms and obtain your separate, express consent before using it, and you will be able to choose another verification method instead.
      </PolicyP>

      <PolicyH2>4. How We Use and Share Verification Data</PolicyH2>
      <PolicyP>
        &quot;Verification Data&quot; means any information you provide or we collect to verify your age or identity, including information received from Apple Wallet, photos of IDs and the information they show, and the result of any verification. By choosing to verify, you authorize us to collect and use Verification Data as described in these terms. Notwithstanding anything else in the Terms of Service or Privacy Policy, Verification Data:
      </PolicyP>
      <PolicyUl>
        <li>Is used only for the purposes listed in Section 2;</li>
        <li>Is never sold, rented, or shared for advertising, marketing, or cross-context behavioral advertising;</li>
        <li>Is never used for profiling, analytics, or to train, fine-tune, or evaluate any machine-learning or artificial-intelligence model;</li>
        <li>Is never combined with information from data brokers or other third-party sources for any purpose other than confirming that an ID is genuine;</li>
        <li>Is not User Content, and the license in Section 9 of the Terms of Service does not apply to it;</li>
        <li>Is shown only to staff who need it to verify you or admit you to an event;</li>
        <li>Is disclosed only to service providers that host, store, or help us check it on our behalf under written confidentiality and security obligations and are prohibited from using it for any other purpose, to an event organizer only to the extent needed to admit you, or where required by law.</li>
      </PolicyUl>

      <PolicyH2>5. Retention</PolicyH2>
      <PolicyUl>
        <li>
          <strong>Apple Wallet portrait and name:</strong> Kept only as long as needed to complete the check, and deleted no later than 24 hours after the related event ends or, if not tied to an event, 24 hours after verification.
        </li>
        <li>
          <strong>Photos of IDs:</strong> Deleted no later than 30 days after the related event ends or, if not tied to an event, 30 days after verification is completed.
        </li>
        <li>
          <strong>Verification result:</strong> A record of whether verification passed or failed, the method used, the age threshold checked, and the date and time, kept for up to 90 days after the related event or verification to handle disputes, refunds, and fraud, then deleted.
        </li>
      </PolicyUl>
      <PolicyP>We may keep Verification Data longer only where required by law or to resolve a specific dispute or fraud investigation involving you, and only until it is resolved.</PolicyP>

      <PolicyH2>6. Security</PolicyH2>
      <PolicyP>Verification Data is encrypted in transit and at rest, stored separately from general account and analytics data, and accessible only to personnel and service providers who need it for the purposes in Section 2. Our liability in connection with any security incident remains limited as set forth in the Terms of Service.</PolicyP>

      <PolicyH2>7. Choosing a Method</PolicyH2>
      <PolicyP>
        Verifying with Apple Wallet is always optional. If you do not have an eligible ID in Apple Wallet, or prefer not to use it, you may verify with a photo of a physical ID or, at events, by in-person inspection where offered. The same age and identity requirements apply to everyone obtaining the same ticket, product, or service, however they verify.
      </PolicyP>

      <PolicyH2>8. If Verification Fails</PolicyH2>
      <PolicyP>
        If you do not meet an age requirement, cannot verify your identity by any available method, or the information or portrait on your ID does not match you, your ticket, your account, or your order, we may refuse entry, cancel the ticket or order, or restrict the affected Service. Whether a refund is available is governed by the refund policy shown at purchase and the Fees and Payment section of the Terms of Service. If you believe a verification decision was a mistake, contact us at <PolicyEmail address='legal@prestonkwei.com' /> and a person will review it.
      </PolicyP>

      <PolicyH2>9. Your Responsibilities</PolicyH2>
      <PolicyP>You agree to verify only with a valid ID that was lawfully issued to you, and not to use, or attempt to use, anyone else&apos;s ID, credential, or device, or an altered, forged, or digitally manipulated ID or image. Attempting to defeat or misuse verification is a violation of the Terms of Service and may result in cancellation of your tickets or orders without refund, termination of your account, and referral to law enforcement.</PolicyP>

      <PolicyH2>10. Apple</PolicyH2>
      <PolicyP>
        Apple provides the Wallet technology used to share information from a digital ID but is not a party to these terms and is not responsible for our Services, our events, or our handling of Verification Data. Apple&apos;s handling of the IDs in your Wallet is governed by Apple&apos;s own terms and privacy policy.
      </PolicyP>

      <PolicyH2>11. Your Rights</PolicyH2>
      <PolicyP>
        You may request access to or deletion of your Verification Data at any time, subject to the retention described in Section 5. Submit requests to <PolicyEmail address='privacy@prestonkwei.com' />. Additional rights available under your jurisdiction, including rights relating to sensitive personal information, are described in the <PolicyLink href='/policies/privacy'>Privacy Policy</PolicyLink>.
      </PolicyP>

      <PolicyH2>12. Contact</PolicyH2>
      <PolicyP>
        Questions about these terms may be directed to <PolicyEmail address='legal@prestonkwei.com' /> or by mail to PO Box 20987, Oakland, CA 94620.
      </PolicyP>
    </PolicyLayout>
  )
}

export default IdentityVerification
