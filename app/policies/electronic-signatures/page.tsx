import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyNotice, PolicyEmail, PolicyLink, PolicyDefList } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Electronic Signature Terms',
  description: 'The terms governing electronic signatures and electronic records executed, delivered, or retained through PrestonKwei.com Services, including your consent to transact electronically.',
}

const ElectronicSignatures = () => {
  return (
    <PolicyLayout title='Electronic Signature Terms' lastUpdated='November 27, 2026' description='These Electronic Signature Terms govern every electronic signature and electronic record executed, delivered, or retained through the Services and form part of the Terms of Service.'>
      <PolicyNotice>
        THESE ELECTRONIC SIGNATURE TERMS ARE INCORPORATED INTO AND FORM PART OF THE TERMS OF SERVICE, INCLUDING ITS BINDING ARBITRATION AGREEMENT, CLASS ACTION WAIVER, JURY TRIAL WAIVER, AND LIMITATIONS OF LIABILITY. AN ELECTRONIC SIGNATURE YOU APPLY THROUGH THE SERVICES IS LEGALLY BINDING AND HAS THE SAME FORCE AND EFFECT AS YOUR HANDWRITTEN SIGNATURE. BY CONSENTING TO TRANSACT ELECTRONICALLY, OR BY APPLYING, ADOPTING, OR AUTHORIZING ANY ELECTRONIC SIGNATURE THROUGH THE SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE, YOU MUST NOT SIGN ANY DOCUMENT THROUGH THE SERVICES, AND YOU MAY INSTEAD REQUEST A PAPER ALTERNATIVE IN ACCORDANCE WITH SECTION 8.
      </PolicyNotice>

      <PolicyH2>1. Incorporation, Scope, and Order of Precedence</PolicyH2>
      <PolicyP>
        These Electronic Signature Terms (&quot;Signature Terms&quot;) supplement and are incorporated by reference into the <PolicyLink href='/policies/tos'>Terms of Service</PolicyLink> and the <PolicyLink href='/policies/privacy'>Privacy Policy</PolicyLink>. They govern every Electronic Signature applied, adopted, or authorized, and every Electronic Record presented, executed, delivered, or retained, through any part of the Services that offers a Signing Feature, whether the Signing Feature is operated by us or by a Signing Provider on our behalf. Capitalized terms used but not defined in these Signature Terms have the meanings given in the Terms of Service.
      </PolicyP>
      <PolicyP>
        In the event of any conflict between these Signature Terms and the Terms of Service or Privacy Policy with respect to Electronic Signatures, Electronic Records, or Signature Data, these Signature Terms control. In all other respects, the Terms of Service and Privacy Policy remain in full force and effect. Where a Document itself contains terms governing its execution, those terms control as between the parties to that Document, but do not modify your obligations to us under these Signature Terms.
      </PolicyP>

      <PolicyH2>2. Definitions</PolicyH2>
      <PolicyDefList
        items={[
          { term: 'Electronic Signature', definition: 'An electronic sound, symbol, or process attached to or logically associated with an Electronic Record and executed or adopted by a person with the intent to sign the Electronic Record, including a typed name, a drawn or uploaded image of a signature or initials, a click on a button or checkbox indicating assent, and any signature applied through a Signing Provider.' },
          { term: 'Electronic Record', definition: 'A contract, agreement, disclosure, notice, consent, authorization, acknowledgment, or other record created, generated, sent, communicated, received, or stored by electronic means.' },
          { term: 'Document', definition: 'Any Electronic Record presented to you for review, completion, or signature through a Signing Feature, together with any attachments, exhibits, and fields completed in connection with it.' },
          { term: 'Signing Feature', definition: 'Any functionality of the Services that permits a Document to be prepared, presented, completed, signed, delivered, or retained electronically.' },
          { term: 'Signing Provider', definition: 'Any third-party electronic signature or transaction management service, such as DocuSign, through which we make a Signing Feature available.' },
          { term: 'Signer', definition: 'Any person who applies, adopts, or authorizes an Electronic Signature through a Signing Feature, including you.' },
          { term: 'Counterparty', definition: 'Any person, other than you, who is a party to, issues, or relies upon a Document, which may include us.' },
          { term: 'Audit Trail', definition: 'The record generated in connection with a Document, including any certificate of completion, reflecting the identity of each Signer as authenticated, the email addresses and other identifiers used, the IP addresses and devices from which the Document was accessed, and the date, time, and sequence of each event relating to the Document.' },
          { term: 'Signature Data', definition: 'All Documents, Electronic Signatures, Audit Trails, and other information collected, received, or generated in connection with a Signing Feature.' },
        ]}
      />

      <PolicyH2>3. Consent to Electronic Records and Electronic Signatures</PolicyH2>
      <PolicyP>
        This Section constitutes the disclosure required by, and your consent is given pursuant to, the Electronic Signatures in Global and National Commerce Act, 15 U.S.C. § 7001 et seq. (&quot;ESIGN&quot;), the Uniform Electronic Transactions Act as adopted in the applicable jurisdiction, including California Civil Code Section 1633.1 et seq. (&quot;UETA&quot;), and any other applicable law governing electronic transactions. By clicking to accept these Signature Terms, by indicating your consent in a Signing Feature or a Signing Provider&apos;s consent dialog, or by applying any Electronic Signature through the Services, you:
      </PolicyP>
      <PolicyUl>
        <li>Agree to conduct the applicable transaction by electronic means and to receive, review, and sign Documents electronically rather than on paper;</li>
        <li>Agree that we, any Counterparty, and any Signing Provider may provide to you electronically every Document, disclosure, notice, and other Electronic Record relating to the transaction that would otherwise be required to be provided to you in writing;</li>
        <li>Confirm that you have reviewed the hardware and software requirements in Section 7, that you satisfy them, and that you are able to access, view, download, print, and retain Electronic Records, which you demonstrate by accessing these Signature Terms and the Document electronically; and</li>
        <li>Acknowledge that you have been informed of your right to receive a paper copy, your right to withdraw your consent, and the procedures and consequences described in Sections 8 and 9.</li>
      </PolicyUl>
      <PolicyP>
        Unless you withdraw it, your consent applies to each Document presented to you through a Signing Feature, to every Electronic Record relating to that Document, and to all future Documents presented to you through the Services. Where a Signing Provider requires you to accept its own electronic record and signature disclosure, that disclosure applies in addition to, and not in place of, these Signature Terms.
      </PolicyP>

      <PolicyH2>4. Legal Effect of Electronic Signatures</PolicyH2>
      <PolicyP>
        Each Electronic Signature you apply, adopt, or authorize through the Services is your legally binding signature and has the same legal force and effect as your manual, handwritten signature on a paper document. Each Electronic Record you sign through the Services satisfies any requirement of law, regulation, or agreement that the record be in writing, be signed, be an original, or be delivered or retained in written or paper form, to the fullest extent permitted by ESIGN, UETA, and other applicable law.
      </PolicyP>
      <PolicyP>
        You agree that you shall not contest, and you hereby waive, any claim or defense that a Document you signed through the Services, or any agreement, obligation, or transaction evidenced by it, is invalid, unenforceable, or inadmissible because it is in electronic form, because an Electronic Signature was used in its formation, or because it was not signed or delivered on paper, including any defense under any statute of frauds. Electronic Records and Audit Trails generated through the Services shall be admissible in any judicial, arbitral, administrative, or other proceeding to the same extent and under the same conditions as business records originated and maintained in paper form.
      </PolicyP>
      <PolicyP>
        A Document may be executed in counterparts, each of which is deemed an original and all of which together constitute a single instrument. A Document bearing Electronic Signatures applied through the Services, and any printout or copy of it, is deemed an original for all purposes.
      </PolicyP>

      <PolicyH2>5. Intent, Adoption, and Attribution</PolicyH2>
      <PolicyH3>5.1 Intent to Sign</PolicyH3>
      <PolicyP>
        When you apply an Electronic Signature, you do so with the intent to sign the Document and to be bound by its terms. Your selection of any control labeled &quot;Sign,&quot; &quot;Adopt and Sign,&quot; &quot;Finish,&quot; &quot;I Agree,&quot; &quot;Accept,&quot; or a similar designation constitutes your signature on, and your acceptance of, the Document as presented to you at that time. You adopt any signature or initials image you create, draw, upload, or select in a Signing Feature as your Electronic Signature and authorize its application to each location in the Document at which you place it or direct that it be placed.
      </PolicyP>

      <PolicyH3>5.2 Attribution</PolicyH3>
      <PolicyP>
        An Electronic Signature or Electronic Record is attributable to you if it was the act of you or of any person acting on your behalf, which may be shown in any manner, including by the efficacy of any security procedure applied to determine the person to whom it is attributable. Without limiting the foregoing and in accordance with California Civil Code Section 1633.9, any Electronic Signature applied (a) through your Account, (b) using your credentials, passcode, or access code, (c) by following a signing link delivered to your email address, telephone number, or other contact information, or (d) by any person to whom you have granted access to any of the foregoing, is conclusively deemed your Electronic Signature, whether or not you personally applied it. You are solely responsible for safeguarding your Account, credentials, devices, and contact channels in accordance with Section 4 of the Terms of Service.
      </PolicyP>

      <PolicyH3>5.3 Documents Prepared by Others or by Automated Systems</PolicyH3>
      <PolicyP>
        A Document may be prepared, populated, or presented to you by a Counterparty, by us, or by an automated system, software agent, or other tool acting on behalf of any of them or of you, and signature, date, and other fields may be placed on the Document by any of them. You are solely responsible for reviewing the entire Document, including every field and attachment, before applying any Electronic Signature. Your Electronic Signature constitutes your adoption of the Document in the form in which it was presented to you at the time of signing, regardless of who or what prepared it, and you may not avoid any obligation under a Document on the ground that you did not read it, that it was prepared or populated by an automated system, or that a field was placed on it by another person.
      </PolicyP>

      <PolicyH2>6. Our Role and the Role of Signing Providers</PolicyH2>
      <PolicyP>
        Except where we are expressly identified as a party to a Document, we act solely as a provider of the technology through which a Document is presented, signed, and delivered. We are not a party to any Document between you and any Counterparty, do not review, approve, or endorse the contents of any Document, do not verify the identity, authority, or capacity of any Signer beyond the authentication methods the applicable Signing Feature employs, and are not responsible for the performance, enforceability, or legality of any Document or of any obligation arising under it. Nothing in the Services constitutes legal, tax, or financial advice, and no Signing Feature constitutes notarization, acknowledgment, witnessing, or attestation unless expressly so designated and performed in compliance with applicable law.
      </PolicyP>
      <PolicyP>
        Where a Signing Feature is provided through a Signing Provider, your use of that Signing Provider is also subject to its own terms of use, privacy policy, and electronic record and signature disclosure. The Signing Provider is not a party to these Signature Terms, has no obligation or liability to you under them, and is not responsible for the Services. We are not responsible for the acts, omissions, availability, or security of any Signing Provider, and we may change, add, or discontinue any Signing Provider at any time without notice. The Audit Trail generated by a Signing Provider shall be deemed an accurate record of the events it reflects absent clear and convincing evidence to the contrary.
      </PolicyP>

      <PolicyH2>7. Hardware and Software Requirements</PolicyH2>
      <PolicyP>To access, sign, and retain Electronic Records through the Services, you must have:</PolicyP>
      <PolicyUl>
        <li>A computer, tablet, or mobile device with a current version of a widely used operating system, such as macOS, Windows, iOS, iPadOS, or Android;</li>
        <li>A current, supported version of a widely used web browser, such as Safari, Chrome, Edge, or Firefox, with JavaScript and cookies enabled;</li>
        <li>A reliable connection to the internet;</li>
        <li>Software capable of opening and viewing Portable Document Format (PDF) files;</li>
        <li>A valid email address that you have the ability to access, and, where a Signing Feature uses it for authentication, a mobile telephone number capable of receiving text messages; and</li>
        <li>Sufficient local or cloud storage to download and retain Electronic Records, or a printer to print them.</li>
      </PolicyUl>
      <PolicyP>
        If a change in these requirements creates a material risk that you will be unable to access or retain an Electronic Record that is the subject of your consent, we will provide you with a statement of the revised requirements and the right to withdraw your consent without fee or penalty, in accordance with 15 U.S.C. § 7001(c)(1)(D).
      </PolicyP>

      <PolicyH2>8. Right to Paper Copies and Paper Alternatives</PolicyH2>
      <PolicyP>
        You may request a paper copy of any Electronic Record you signed through the Services, or of these Signature Terms, by contacting <PolicyEmail address='legal@prestonkwei.com' /> or writing to PO Box 20987, Oakland, CA 94620, identifying the Document and the email address used to sign it. We will provide one (1) paper copy of each requested Electronic Record without charge, subject to the retention periods in Section 11. Before signing any Document, you may decline to sign electronically and request a paper alternative, which may be made available in the sole discretion of the applicable Counterparty and may delay or prevent completion of the transaction. A request for a paper copy does not by itself withdraw your consent under Section 3.
      </PolicyP>

      <PolicyH2>9. Withdrawal of Consent</PolicyH2>
      <PolicyP>
        You may withdraw your consent to receive Electronic Records and to sign electronically at any time by (a) declining to sign through the Signing Feature or Signing Provider, where that option is offered, or (b) sending written notice to <PolicyEmail address='legal@prestonkwei.com' /> identifying yourself and the email address to which the withdrawal applies. No fee is charged for withdrawal. Withdrawal is effective only as to Documents and Electronic Records presented to you after we have had a reasonable period, not to exceed ten (10) business days, to process it.
      </PolicyP>
      <PolicyP>
        WITHDRAWAL OF CONSENT IS PROSPECTIVE ONLY. It does not affect the legal validity, enforceability, or admissibility of any Electronic Signature applied, or any Electronic Record provided or executed, before withdrawal takes effect. Following withdrawal, you may be unable to use any Signing Feature, transactions that require your signature may be delayed or may not be completed, and certain Services may become unavailable to you.
      </PolicyP>

      <PolicyH2>10. Updating Your Contact Information</PolicyH2>
      <PolicyP>
        You must keep the email address and other contact information associated with your Account and with each pending Document current and accurate. You may update it through your Account settings, where available, or by contacting <PolicyEmail address='legal@prestonkwei.com' />. Any Electronic Record sent to the most recent email address or other contact information you have provided is deemed delivered to and received by you when sent, whether or not you actually access it.
      </PolicyP>

      <PolicyH2>11. Records, Retention, and Access</PolicyH2>
      <PolicyP>
        You are solely responsible for downloading, printing, or otherwise retaining a copy of each Document you sign and of these Signature Terms. Subject to the Privacy Policy, we and any Signing Provider may retain copies of Documents and Audit Trails for so long as reasonably necessary to provide the Services, to evidence the execution of each Document, to comply with legal, regulatory, tax, and accounting obligations, and to establish, exercise, or defend legal claims, after which they may be deleted without notice. We do not guarantee that any Document or Audit Trail will remain available through the Services for any particular period, and we shall have no liability for the deletion of any Signature Data in accordance with this Section.
      </PolicyP>
      <PolicyP>
        Signature Data constitutes neither User Content owned solely by you nor Content owned solely by us; each party to a Document retains whatever rights it holds in that Document under the Document&apos;s own terms. You grant us and each Signing Provider a non-exclusive, royalty-free license to host, store, reproduce, transmit, and display Signature Data solely as necessary to operate the Signing Features, to deliver Documents to their Signers and Counterparties, and to comply with this Section. We will not sell Signature Data or use the contents of any Document for advertising, profiling, or to train, fine-tune, or evaluate any machine-learning or artificial-intelligence model.
      </PolicyP>

      <PolicyH2>12. Excluded Documents</PolicyH2>
      <PolicyP>
        You shall not use any Signing Feature to execute or deliver any record for which applicable law does not permit, or imposes additional requirements upon, the use of Electronic Signatures or Electronic Records, including the records excluded under 15 U.S.C. § 7003 and California Civil Code Section 1633.3, which include, without limitation:
      </PolicyP>
      <PolicyUl>
        <li>Wills, codicils, and testamentary trusts;</li>
        <li>Records governed by laws relating to adoption, divorce, or other matters of family law;</li>
        <li>Court orders, notices, and official court documents, including briefs, pleadings, and other writings required to be executed in connection with court proceedings;</li>
        <li>Notices of cancellation or termination of utility services;</li>
        <li>Notices of default, acceleration, repossession, foreclosure, or eviction, or the right to cure, under a credit agreement secured by, or a rental agreement for, a primary residence;</li>
        <li>Notices of cancellation or termination of health insurance, health benefits, or life insurance benefits, excluding annuities;</li>
        <li>Notices of recall of a product, or material failure of a product, that risks endangering health or safety;</li>
        <li>Documents required to accompany any transportation or handling of hazardous materials, pesticides, or other toxic or dangerous materials; and</li>
        <li>Any record required by law to be notarized, acknowledged, verified, or made under oath, unless performed through a Signing Feature expressly designated for that purpose and in compliance with applicable law.</li>
      </PolicyUl>
      <PolicyP>
        Any use of a Signing Feature in violation of this Section is at your sole risk, and we make no representation as to the validity or enforceability of any such record.
      </PolicyP>

      <PolicyH2>13. Your Representations, Warranties, and Obligations</PolicyH2>
      <PolicyP>Each time you apply, adopt, or authorize an Electronic Signature through the Services, you represent and warrant that:</PolicyP>
      <PolicyUl>
        <li>You are the person identified as the Signer, or are expressly authorized by that person to sign on that person&apos;s behalf;</li>
        <li>Where you sign on behalf of an entity or another person, you have full legal authority to bind that entity or person, and your signature binds them;</li>
        <li>You are of legal age and have the legal capacity to enter into the Document;</li>
        <li>You have reviewed the entire Document and intend to be bound by it; and</li>
        <li>All information you provide in completing the Document is true, accurate, and complete.</li>
      </PolicyUl>
      <PolicyP>You shall not, and shall not attempt to or assist any other person to:</PolicyP>
      <PolicyUl>
        <li>Apply the Electronic Signature of, or sign in the name of, any other person without that person&apos;s express authorization;</li>
        <li>Access or sign any Document through a signing link, access code, or Account that was not issued to you;</li>
        <li>Alter, tamper with, or falsify any Document after it has been signed, or any Audit Trail;</li>
        <li>Use any Signing Feature to execute any Document that is fraudulent, unlawful, or in furtherance of any unlawful purpose; or</li>
        <li>Circumvent, interfere with, or defeat any authentication, security, or integrity measure of any Signing Feature.</li>
      </PolicyUl>
      <PolicyP>
        Any breach of this Section is a material breach of the Terms of Service and may result, in our sole discretion and without prejudice to any other remedy, in the voiding of any affected Document to which we are a party, the suspension or termination of your Account, a permanent prohibition on use of the Services, and referral to law enforcement. Forging a signature or falsifying a record may also constitute a criminal offense under applicable law.
      </PolicyP>

      <PolicyH2>14. Security</PolicyH2>
      <PolicyP>
        We maintain, and require each Signing Provider to maintain, reasonable administrative, technical, and physical safeguards for Signature Data, including encryption in transit and access restricted to personnel and service providers with a need to know. NO METHOD OF TRANSMISSION, AUTHENTICATION, OR STORAGE IS COMPLETELY SECURE, AND WE DO NOT WARRANT OR GUARANTEE THE SECURITY OF ANY SIGNATURE DATA OR THAT ANY AUTHENTICATION METHOD WILL PREVENT EVERY UNAUTHORIZED SIGNATURE.
      </PolicyP>

      <PolicyH2>15. DISCLAIMERS AND ALLOCATION OF RISK</PolicyH2>
      <PolicyP>
        THE SIGNING FEATURES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot; TO THE FULLEST EXTENT PERMITTED BY LAW, WE DO NOT REPRESENT OR WARRANT THAT ANY DOCUMENT IS VALID, ENFORCEABLE, OR SUITABLE FOR ANY PURPOSE; THAT ELECTRONIC SIGNATURES ARE RECOGNIZED FOR ANY PARTICULAR DOCUMENT OR IN ANY PARTICULAR JURISDICTION; THAT ANY SIGNER IS WHO THAT SIGNER CLAIMS TO BE OR HAS AUTHORITY TO SIGN; OR THAT ANY SIGNING FEATURE OR SIGNING PROVIDER WILL BE AVAILABLE, TIMELY, OR ERROR-FREE. WE MAY RELY CONCLUSIVELY ON ANY ELECTRONIC SIGNATURE ATTRIBUTABLE TO YOU UNDER SECTION 5.2 AND SHALL HAVE NO LIABILITY FOR ANY ACTION TAKEN IN GOOD-FAITH RELIANCE ON IT. WE ARE NOT RESPONSIBLE FOR THE ACTS OR OMISSIONS OF ANY SIGNER, COUNTERPARTY, OR SIGNING PROVIDER, OR FOR ANY DISPUTE BETWEEN YOU AND ANY OF THEM, WHICH IS SUBJECT TO THE RELEASE IN SECTION 17 OF THE TERMS OF SERVICE.
      </PolicyP>

      <PolicyH2>16. Limitation of Liability and Indemnification</PolicyH2>
      <PolicyP>
        The Disclaimer of Warranties, Limitation of Liability, and Release provisions of the Terms of Service apply in full to the Signing Features, Documents, and Signature Data. Without limiting Section 16 of the Terms of Service, you shall indemnify, defend, and hold harmless PrestonKwei.com and its affiliates, directors, officers, employees, agents, and licensors from and against any and all claims, demands, actions, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees), including any asserted by a Counterparty, a Signing Provider, or a person whose signature was applied, arising out of or relating to (a) your breach of Section 12 or Section 13; (b) any Document you sign, send, or cause to be presented through the Services; or (c) any Electronic Signature attributable to you under Section 5.2.
      </PolicyP>

      <PolicyH2>17. Amendments</PolicyH2>
      <PolicyP>
        We may amend these Signature Terms at any time in accordance with Section 5 of the Terms of Service, subject to Section 7 of these Signature Terms. No amendment shall affect the validity, enforceability, or legal effect of any Electronic Signature applied or any Document executed before the amendment takes effect.
      </PolicyP>

      <PolicyH2>18. Dispute Resolution and Governing Law</PolicyH2>
      <PolicyP>
        Any Dispute between you and us arising out of or relating to these Signature Terms, any Signing Feature, any Electronic Signature, or any Signature Data is subject to the informal resolution, binding arbitration, class action waiver, jury trial waiver, one-year limitation, and governing law and venue provisions of Sections 18 and 19 of the Terms of Service. Any dispute between you and a Counterparty arising under a Document is governed by that Document and applicable law, and these Signature Terms create no right or obligation between you and the Counterparty other than as set forth in Sections 4 and 5.
      </PolicyP>

      <PolicyH2>19. Severability and Survival</PolicyH2>
      <PolicyP>
        If any provision of these Signature Terms is held invalid or unenforceable, it shall be enforced to the maximum extent permissible and the remaining provisions shall remain in full force and effect, and the invalidity of any provision shall not affect the validity of any Electronic Signature or Document. Sections 4, 5, 6, 9, 11, and 13 through 18 survive the completion of any Document, any withdrawal of consent, and any termination of your Account or of the Terms of Service.
      </PolicyP>

      <PolicyH2>20. Contact</PolicyH2>
      <PolicyP>
        Questions regarding these Signature Terms, requests for paper copies, and notices of withdrawal may be directed to <PolicyEmail address='legal@prestonkwei.com' /> or by mail to PO Box 20987, Oakland, CA 94620.
      </PolicyP>
    </PolicyLayout>
  )
}

export default ElectronicSignatures
