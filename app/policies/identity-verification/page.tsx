import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyNotice, PolicyEmail, PolicyLink, PolicyDefList } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Identity Verification Terms',
  description: 'The terms governing age and identity verification across PrestonKwei.com Services, including digital IDs in Apple Wallet and scans of physical IDs.',
}

const IdentityVerification = () => {
  return (
    <PolicyLayout title='Identity Verification Terms' lastUpdated='October 20, 2026' description='These Identity Verification Terms govern all age and identity verification conducted in connection with the Services and form part of the Terms of Service.'>
      <PolicyNotice>
        THESE IDENTITY VERIFICATION TERMS ARE INCORPORATED INTO AND FORM PART OF THE TERMS OF SERVICE, INCLUDING ITS BINDING ARBITRATION AGREEMENT, CLASS ACTION WAIVER, JURY TRIAL WAIVER, AND LIMITATIONS OF LIABILITY. BY INITIATING, SUBMITTING TO, OR COMPLETING ANY VERIFICATION, YOU AGREE TO BE BOUND BY THESE TERMS AND AUTHORIZE THE COLLECTION AND PROCESSING OF VERIFICATION DATA AS DESCRIBED HEREIN. IF YOU DO NOT AGREE, YOU MUST NOT INITIATE OR SUBMIT TO VERIFICATION, IN WHICH CASE YOU MAY BE UNABLE TO PURCHASE, HOLD, TRANSFER, OR USE TICKETS OR ACCESS CERTAIN SERVICES.
      </PolicyNotice>

      <PolicyH2>1. Incorporation, Scope, and Order of Precedence</PolicyH2>
      <PolicyP>
        These Identity Verification Terms (&quot;Verification Terms&quot;) supplement and are incorporated by reference into the <PolicyLink href='/policies/tos'>Terms of Service</PolicyLink> and the <PolicyLink href='/policies/privacy'>Privacy Policy</PolicyLink>. They govern every Verification conducted by or on behalf of PrestonKwei.com in connection with the Services, including in connection with the purchase, holding, transfer, or use of any ticket, admission to any Event, the opening, use, or recovery of any Account, and the completion of any purchase. Capitalized terms used but not defined in these Verification Terms have the meanings given in the Terms of Service.
      </PolicyP>
      <PolicyP>
        In the event of any conflict between these Verification Terms and the Terms of Service or Privacy Policy with respect to Verification or Verification Data, these Verification Terms control. In all other respects, the Terms of Service and Privacy Policy remain in full force and effect.
      </PolicyP>

      <PolicyH2>2. Definitions</PolicyH2>
      <PolicyDefList
        items={[
          { term: 'Verification', definition: 'Any process by which we, or a person acting on our behalf, confirm your age, identity, or entitlement to a ticket, Account, purchase, or admission, by any Verification Method.' },
          { term: 'Verification Method', definition: 'Verification using a Digital ID, a scan or image of a Physical ID, in-person inspection of a Physical ID, or any other method we make available.' },
          { term: 'Digital ID', definition: 'A driver’s license, state identification card, or other identity document stored in Apple Wallet or a comparable digital credential.' },
          { term: 'Physical ID', definition: 'A valid, unexpired, government-issued photo identification document in physical form.' },
          { term: 'Verification Data', definition: 'All information collected, received, read, or generated in connection with a Verification, including information shared from a Digital ID, information read from a scan or image of a Physical ID, and any Verification Record.' },
          { term: 'Verification Record', definition: 'A record of a completed Verification retained in accordance with Section 9.' },
          { term: 'Event', definition: 'Any event, venue, or experience for which tickets or admission are offered through the Services.' },
          { term: 'Staff', definition: 'Our personnel, contractors, and agents, and the personnel of any Event organizer or venue, authorized to conduct Verification or admit attendees.' },
        ]}
      />

      <PolicyH2>3. Verification Requirements and Our Discretion</PolicyH2>
      <PolicyP>
        We may require Verification as a condition of purchasing, holding, transferring, or using any ticket, of admission to any Event, of opening, using, or recovering any Account, or of completing any purchase. We may require Verification at any time, including at the point of sale, before an Event, and at the point of entry, and may require you to verify again notwithstanding any prior Verification. We determine, in our sole discretion and subject to applicable law, the age, identity, and other requirements applicable to each Event or Service and the Verification Methods available for it.
      </PolicyP>
      <PolicyP>
        Successful completion of Verification does not entitle you to admission to any Event or to any Service, and does not limit any right we, an Event organizer, or a venue may have to refuse admission, remove any person, or cancel any ticket under the Terms of Service, the terms of the applicable Event, or applicable law.
      </PolicyP>

      <PolicyH2>4. Permitted Purposes</PolicyH2>
      <PolicyP>We collect and process Verification Data solely for the following purposes (the &quot;Permitted Purposes&quot;):</PolicyP>
      <PolicyUl>
        <li>To verify that you satisfy any minimum age requirement applicable to an Event, product, or Service;</li>
        <li>To verify the authenticity and validity of the identification document presented;</li>
        <li>To verify that the person presenting a ticket, using an Account, or completing a purchase is the person entitled to do so;</li>
        <li>To report, investigate, and prevent fraud, abuse, material misrepresentation, ticket scalping, unauthorized transfer, and account takeover;</li>
        <li>To admit attendees to Events and to maintain the safety and security of Events and the Services;</li>
        <li>To permit you to purchase tickets for, and be admitted to, future Events without repeating Verification;</li>
        <li>To comply with any legal requirement to record, retain, or transmit such information, and to establish, exercise, or defend legal claims.</li>
      </PolicyUl>

      <PolicyH2>5. Verification Methods</PolicyH2>
      <PolicyH3>5.1 Digital ID in Apple Wallet</PolicyH3>
      <PolicyP>
        Where available, you may verify using a Digital ID stored in Apple Wallet. Before any information is shared, your device will display the specific information requested and require your authorization by Face ID, Touch ID, or passcode. No information is shared without that authorization. Information shared from a Digital ID is cryptographically signed by the issuing authority, enabling us to confirm that it is authentic and unaltered. When you verify using a Digital ID, we request only the following:
      </PolicyP>
      <PolicyDefList
        items={[
          { term: 'Age over N', definition: 'Confirmation of whether you are at or above a specified age threshold, such as 18 or 21. We do not receive your date of birth from a Digital ID.' },
          { term: 'Name', definition: 'Your name as stated on the Digital ID, used to confirm that it corresponds to the applicable ticket, Account, or order.' },
          { term: 'ID portrait', definition: 'The portrait from the Digital ID, displayed to Staff for the sole purpose of visually confirming that you are the holder of the Digital ID.' },
        ]}
      />
      <PolicyP>We do not request your address, date of birth, sex, document number, physical characteristics, or any other information from a Digital ID.</PolicyP>

      <PolicyH3>5.2 Scan of a Physical ID</PolicyH3>
      <PolicyP>
        You may be required to scan a Physical ID through the Services, or Staff may scan your Physical ID at the point of entry. A scan ordinarily reads the machine-readable barcode on the Physical ID and may instead or additionally capture an image of the Physical ID. The barcode and the document contain the information printed on the Physical ID, which may include your name, date of birth, address, document number, issue and expiration dates, issuing authority, sex, height, eye color, and hair color. That information is read solely to determine whether you satisfy the applicable age requirement, whether the Physical ID is unexpired and authentic, and whether the Physical ID belongs to you, and may be processed entirely on the device used to perform the scan without transmission to or storage on our servers.
      </PolicyP>
      <PolicyP>
        Any Verification Record created from a scan of a Physical ID is limited to your name, your date of birth, whether Verification succeeded, and whether the Physical ID was determined to be authentic. We do not retain your document number, address, sex, or physical description, and we do not retain or use any information obtained from a scan of a Physical ID for any purpose other than the Permitted Purposes.
      </PolicyP>

      <PolicyH3>5.3 In-Person Inspection</PolicyH3>
      <PolicyP>At Events, Staff may instead inspect your Physical ID visually to confirm your age and compare the portrait and name on the Physical ID with you and your ticket, without scanning, copying, or photographing it.</PolicyP>

      <PolicyH3>5.4 Manual Visual Comparison; No Facial Recognition</PolicyH3>
      <PolicyP>
        Any comparison of the portrait on an identification document with the person presenting it is performed manually by Staff. We do not use facial recognition technology and do not create, collect, or retain any faceprint, scan of facial geometry, or other biometric identifier or biometric information from any identification document or from your appearance. We will not introduce any automated facial comparison without first amending these Verification Terms to describe it, obtaining your separate, express, written consent before applying it to you, and offering you an alternative Verification Method.
      </PolicyP>

      <PolicyH3>5.5 Alternative Methods</PolicyH3>
      <PolicyP>
        Verification using a Digital ID is optional. Where a Digital ID is offered, at least one alternative Verification Method using a Physical ID will also be made available. The same age, identity, and admission requirements apply to every person obtaining the same ticket, product, or Service, regardless of the Verification Method used.
      </PolicyP>

      <PolicyH2>6. Authorization and Consent</PolicyH2>
      <PolicyP>
        By initiating, submitting to, or completing any Verification, you expressly authorize us, Staff, and our service providers to collect, read, display, process, and retain Verification Data as described in these Verification Terms. You may decline Verification at any time before it is completed; however, declining or failing to complete Verification may result in the consequences described in Section 12. Your authorization with respect to a completed Verification extends to any Verification Record created from it, subject to your rights under Section 14.
      </PolicyP>

      <PolicyH2>7. Use and Disclosure Limitations</PolicyH2>
      <PolicyP>Notwithstanding any provision of the Terms of Service or the Privacy Policy to the contrary, Verification Data:</PolicyP>
      <PolicyUl>
        <li>Shall be used solely for the Permitted Purposes;</li>
        <li>Shall not be sold, rented, or exchanged for monetary or other valuable consideration, or shared for advertising, marketing, or cross-context behavioral advertising;</li>
        <li>Shall not be used for profiling, analytics, personalization, or to train, fine-tune, or evaluate any machine-learning or artificial-intelligence model;</li>
        <li>Shall not be combined with information obtained from data brokers or other third-party sources, except as necessary to confirm the authenticity of an identification document;</li>
        <li>Does not constitute User Content, and the license granted in Section 9 of the Terms of Service does not apply to it;</li>
        <li>Shall be made available only to Staff who require it to perform Verification or admit attendees;</li>
        <li>Shall be disclosed only (a) to service providers that host, store, or process it on our behalf under written obligations of confidentiality and security that prohibit any use other than the Permitted Purposes; (b) to the organizer or venue of an applicable Event, only to the extent necessary to admit you; (c) as required by law, regulation, subpoena, court order, or other legal process; or (d) as necessary to report or investigate fraud or other unlawful conduct relating to you.</li>
      </PolicyUl>
      <PolicyP>
        We collect, use, and retain information obtained from identification documents in accordance with California Civil Code Section 1798.90.1 and all other applicable laws governing the electronic reading of identification documents, and where any such law imposes a restriction more protective than these Verification Terms, that restriction controls.
      </PolicyP>

      <PolicyH2>8. Notice at Collection</PolicyH2>
      <PolicyDefList
        items={[
          { term: 'Categories', definition: 'Identifiers (name); characteristics of protected classifications (age, and sex as read from a Physical ID); government identification document information, read but not retained; ID portraits, displayed and not retained beyond the periods in Section 9; and Verification results.' },
          { term: 'Sources', definition: 'You, your Digital ID through your device, and your Physical ID.' },
          { term: 'Purposes', definition: 'The Permitted Purposes set out in Section 4 only.' },
          { term: 'Sale or sharing', definition: 'Verification Data is not sold or shared for cross-context behavioral advertising.' },
          { term: 'Retention', definition: 'As set out in Section 9.' },
        ]}
      />

      <PolicyH2>9. Retention</PolicyH2>
      <PolicyP>We retain Verification Data only for as long as reasonably necessary for the Permitted Purposes, and in many instances retain none. Subject to the foregoing:</PolicyP>
      <PolicyUl>
        <li>
          <strong>ID portraits from a Digital ID</strong> shall be deleted upon completion of Verification and in no event later than twenty-four (24) hours after the conclusion of the applicable Event or, where Verification is not associated with an Event, twenty-four (24) hours after Verification.
        </li>
        <li>
          <strong>Images of a Physical ID</strong>, if captured, shall be deleted upon completion of Verification and any related review, and in no event later than thirty (30) days after the conclusion of the applicable Event or, where Verification is not associated with an Event, thirty (30) days after Verification.
        </li>
        <li>
          <strong>Verification Records</strong>, if created, are limited to your name; your date of birth (where read from a Physical ID) or age result (where shared from a Digital ID); whether Verification succeeded; whether the identification document was determined to be authentic; the Verification Method used; and the date and time of Verification. Verification Records shall be deleted no later than two (2) years after your most recent Verification.
        </li>
      </PolicyUl>
      <PolicyP>
        Notwithstanding the foregoing, we may retain specific Verification Data for a longer period only where required by law or where reasonably necessary to report, investigate, or resolve a specific dispute, claim, or suspected fraud involving you, and only until the matter is finally resolved.
      </PolicyP>

      <PolicyH2>10. Security</PolicyH2>
      <PolicyP>
        We maintain reasonable administrative, technical, and physical safeguards appropriate to the sensitivity of Verification Data, including encryption in transit and at rest, logical separation from general account and analytics data, and access restricted to personnel and service providers with a need to know for the Permitted Purposes. NO METHOD OF TRANSMISSION OR STORAGE IS COMPLETELY SECURE, AND WE DO NOT WARRANT OR GUARANTEE THE SECURITY OF ANY VERIFICATION DATA. Our liability arising from any unauthorized access to, acquisition of, or disclosure of Verification Data is limited as set forth in the Terms of Service, to the maximum extent permitted by law.
      </PolicyP>

      <PolicyH2>11. Your Representations, Warranties, and Obligations</PolicyH2>
      <PolicyP>Each time you initiate or submit to Verification, you represent and warrant that:</PolicyP>
      <PolicyUl>
        <li>The identification document presented was lawfully issued to you by the stated issuing authority, is genuine, unexpired, and unaltered, and has not been reported lost or stolen;</li>
        <li>You are the person depicted on and identified by the identification document;</li>
        <li>Any image or scan you submit is a true, unedited, and unmanipulated reproduction of the original identification document;</li>
        <li>All information you provide in connection with Verification is true, accurate, and complete; and</li>
        <li>You are verifying on your own behalf and not on behalf of, or to obtain admission or tickets for, any other person.</li>
      </PolicyUl>
      <PolicyP>You shall not, and shall not attempt to or assist any other person to:</PolicyP>
      <PolicyUl>
        <li>Present any identification document, Digital ID, credential, or device belonging to another person;</li>
        <li>Present any forged, counterfeit, altered, or fraudulently obtained identification document, or any digitally created or manipulated image;</li>
        <li>Circumvent, interfere with, or defeat any Verification Method or any age or identity requirement; or</li>
        <li>Transfer, resell, or permit the use of any ticket to evade any age or identity requirement.</li>
      </PolicyUl>
      <PolicyP>
        Any breach of this Section is a material breach of the Terms of Service and may result, in our sole discretion and without prejudice to any other remedy, in the immediate cancellation of all affected tickets and orders without refund, refusal of admission or removal from any Event, suspension or termination of your Account, a permanent prohibition on use of the Services, and referral to law enforcement or the issuing authority. Presenting false identification may also constitute a criminal offense under applicable law.
      </PolicyP>

      <PolicyH2>12. Declined or Failed Verification</PolicyH2>
      <PolicyP>
        If you decline Verification, fail to complete Verification by any available Verification Method, do not satisfy an applicable age or identity requirement, or present information or an identification document that does not correspond to you, your ticket, your Account, or your order, we may, in our sole discretion, refuse admission, cancel the affected ticket or order, or restrict or suspend the affected Services. Any refund is governed exclusively by the refund policy disclosed at the time of purchase and Section 12 of the Terms of Service; no refund shall be due where Verification fails as a result of your breach of Section 11. You may request human review of any Verification decision by contacting <PolicyEmail address='legal@prestonkwei.com' />. Review does not suspend any cancellation or refusal of admission pending its outcome.
      </PolicyP>

      <PolicyH2>13. DISCLAIMERS AND ALLOCATION OF RISK</PolicyH2>
      <PolicyP>
        VERIFICATION IS PERFORMED SOLELY FOR OUR OWN PURPOSES AND IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE FULLEST EXTENT PERMITTED BY LAW, WE DO NOT REPRESENT OR WARRANT THAT ANY VERIFICATION METHOD WILL DETECT EVERY FORGED, ALTERED, BORROWED, OR FRAUDULENT IDENTIFICATION DOCUMENT; THAT ANY PERSON ADMITTED TO AN EVENT SATISFIES ANY AGE OR IDENTITY REQUIREMENT; OR THAT INFORMATION SUPPLIED BY ANY ISSUING AUTHORITY, DEVICE, OR THIRD-PARTY PROVIDER IS ACCURATE OR COMPLETE. WE MAY RELY CONCLUSIVELY ON INFORMATION PRESENTED IN OR READ FROM ANY IDENTIFICATION DOCUMENT AND SHALL HAVE NO LIABILITY FOR ANY ACTION TAKEN IN GOOD-FAITH RELIANCE ON IT. VERIFICATION DOES NOT CONSTITUTE A REPRESENTATION TO YOU OR ANY THIRD PARTY REGARDING ANY PERSON&apos;S AGE OR IDENTITY. WE ARE NOT RESPONSIBLE FOR THE ACTS OR OMISSIONS OF ANY ATTENDEE, EVENT ORGANIZER, VENUE, ISSUING AUTHORITY, DEVICE MANUFACTURER, OR THIRD-PARTY PROVIDER.
      </PolicyP>

      <PolicyH2>14. Your Privacy Rights</PolicyH2>
      <PolicyP>
        Subject to applicable law and the retention provisions of Section 9, you may request access to, correction of, or deletion of your Verification Data by contacting <PolicyEmail address='privacy@prestonkwei.com' />. We will verify the identity of the requester before acting on any request. If your Verification Record is deleted, you may be required to complete Verification again for future Events or Services. Additional rights available under the laws of your jurisdiction, including rights with respect to sensitive personal information, are described in the <PolicyLink href='/policies/privacy'>Privacy Policy</PolicyLink>.
      </PolicyP>

      <PolicyH2>15. Limitation of Liability and Indemnification</PolicyH2>
      <PolicyP>
        The Disclaimer of Warranties, Limitation of Liability, and Release provisions of the Terms of Service apply in full to Verification and Verification Data. Without limiting Section 16 of the Terms of Service, you shall indemnify, defend, and hold harmless PrestonKwei.com and its affiliates, directors, officers, employees, agents, and licensors from and against any and all claims, demands, actions, penalties, fines, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees), including any asserted by an Event organizer, venue, licensing authority, or governmental body, arising out of or relating to (a) your breach of Section 11; (b) your presentation of any identification document, Digital ID, or information that is not genuine, accurate, or your own; or (c) your admission to, or conduct at, any Event obtained in breach of these Verification Terms.
      </PolicyP>

      <PolicyH2>16. Apple and Third-Party Providers</PolicyH2>
      <PolicyP>
        Apple Inc. provides the Apple Wallet technology through which information may be shared from a Digital ID. Apple is not a party to these Verification Terms, has no obligation or liability to you under them, and is not responsible for the Services, any Event, or our handling of Verification Data. Your use of Apple Wallet is governed by Apple&apos;s own terms and privacy policy. Any other third-party provider that assists with Verification acts solely on our behalf and subject to the limitations of Section 7.
      </PolicyP>

      <PolicyH2>17. Amendments</PolicyH2>
      <PolicyP>
        We may amend these Verification Terms at any time in accordance with Section 5 of the Terms of Service. However, no amendment that materially expands the categories of Verification Data retained, the purposes for which it is used, the parties to whom it is disclosed, or the period for which it is retained shall apply to Verification Data collected before the amendment takes effect without your express consent.
      </PolicyP>

      <PolicyH2>18. Dispute Resolution and Governing Law</PolicyH2>
      <PolicyP>
        Any Dispute arising out of or relating to these Verification Terms, any Verification, or any Verification Data is subject to the informal resolution, binding arbitration, class action waiver, jury trial waiver, one-year limitation, and governing law and venue provisions of Sections 18 and 19 of the Terms of Service.
      </PolicyP>

      <PolicyH2>19. Severability and Survival</PolicyH2>
      <PolicyP>
        If any provision of these Verification Terms is held invalid or unenforceable, it shall be enforced to the maximum extent permissible and the remaining provisions shall remain in full force and effect. Sections 7, 9 through 13, 15, 16, and 18 survive the completion of any Verification, the conclusion of any Event, and any termination of your Account or of the Terms of Service.
      </PolicyP>

      <PolicyH2>20. Contact</PolicyH2>
      <PolicyP>
        Questions regarding these Verification Terms may be directed to <PolicyEmail address='legal@prestonkwei.com' /> or by mail to PO Box 20987, Oakland, CA 94620.
      </PolicyP>
    </PolicyLayout>
  )
}

export default IdentityVerification
