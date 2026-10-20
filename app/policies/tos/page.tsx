import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyOl, PolicyNotice, PolicyEmail, PolicyLink, PolicyDefList } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The binding Terms of Service governing all PrestonKwei.com sites and services.',
}

const TermsOfService = () => {
  return (
    <PolicyLayout title='Terms of Service' lastUpdated='October 20, 2026' description='This is a binding legal agreement. Read it in full before accessing or using any of our Services.'>
      <PolicyNotice>
        THESE TERMS CONTAIN A BINDING ARBITRATION AGREEMENT, A CLASS ACTION WAIVER, A JURY TRIAL WAIVER, A RELEASE OF CLAIMS, A ONE-YEAR LIMITATION ON BRINGING CLAIMS, AND SIGNIFICANT LIMITATIONS ON OUR LIABILITY. THEY MATERIALLY AFFECT YOUR LEGAL RIGHTS. BY ACCESSING OR USING THE SERVICES IN ANY MANNER, YOU AGREE TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY. IF YOU DO NOT AGREE, YOUR SOLE REMEDY IS TO IMMEDIATELY CEASE ALL USE OF THE SERVICES.
      </PolicyNotice>

      <PolicyH2>1. Acceptance of These Terms</PolicyH2>
      <PolicyP>These Terms of Service (&quot;Terms&quot;) are a legally binding contract between you and PrestonKwei.com governing your access to and use of all websites, applications, APIs, content, software, and services within the PrestonKwei.com suite (collectively, the &quot;Services&quot;). Your acceptance is not conditioned on registration, signature, or any other formality: any access to or use of the Services, however minimal or incidental, constitutes your unconditional acceptance of these Terms. You further represent that you have the legal capacity and authority to enter into this agreement, and if you use the Services on behalf of an entity, you bind that entity to these Terms.</PolicyP>
      <PolicyP>
        We do not negotiate these Terms with individual users. If any portion of these Terms is unacceptable to you, you must not access the Services. Continued access after any modification to these Terms constitutes acceptance of the modification. Questions may be directed to <PolicyEmail address='tos@prestonkwei.com' />, but a pending question does not suspend, qualify, or delay your obligations under these Terms.
      </PolicyP>

      <PolicyH2>2. Definitions</PolicyH2>
      <PolicyDefList
        items={[
          { term: 'Services', definition: 'All websites, applications, APIs, software, features, content, and functionality offered by PrestonKwei.com, including all domains listed on our Domains page.' },
          { term: 'We, us, our', definition: 'PrestonKwei.com, together with its affiliates, successors, and assigns.' },
          { term: 'You, your', definition: 'The individual or entity accessing or using the Services, together with anyone acting on that person\u2019s or entity\u2019s behalf.' },
          { term: 'Content', definition: 'Any text, images, video, audio, software, data, or other materials available on or through the Services.' },
          { term: 'User Content', definition: 'Content that you submit, upload, post, transmit, or otherwise make available through the Services.' },
          { term: 'Account', definition: 'Any registration, credential, or profile you create to access any part of the Services.' },
        ]}
      />

      <PolicyH2>3. Eligibility</PolicyH2>
      <PolicyP>You must be at least 18 years of age to use the Services. Individuals between 13 and 18 years of age may use the Services only with the verifiable consent of a parent or legal guardian who agrees to be bound by these Terms and to accept full responsibility for the minor&apos;s use. The Services are not directed to, and may not be used by, anyone under 13 under any circumstances. By using the Services, you represent and warrant that you satisfy these requirements, that all information you provide is accurate and current, and that you have not previously been suspended or removed from the Services. We reserve the right to demand proof of eligibility at any time and to suspend or terminate any account, without notice or refund, where eligibility cannot be established to our satisfaction.</PolicyP>
      <PolicyP>
        Certain Services, including event ticketing, may require you to verify your age or identity, including with a digital ID in Apple Wallet or a photo of a government-issued ID. Verification is governed by our <PolicyLink href='/policies/identity-verification'>Identity Verification Terms</PolicyLink>, which are incorporated into these Terms and control over them with respect to the information collected for verification.
      </PolicyP>

      <PolicyH2>4. Accounts and Security</PolicyH2>
      <PolicyP>You are solely and fully responsible for all activity occurring under your account, whether or not authorized by you. You must safeguard your credentials, and you assume all risk arising from any failure to do so. You must notify us immediately of any unauthorized use, but such notice does not relieve you of responsibility for activity occurring before we are able to act on it. We bear no liability whatsoever for any loss or damage arising from unauthorized use of your account. We may refuse registration, reclaim usernames, and suspend, restrict, or terminate accounts at any time, for any reason or no reason, in our sole and absolute discretion.</PolicyP>

      <PolicyH2>5. Changes to the Terms and the Services</PolicyH2>
      <PolicyP>We may revise these Terms at any time, in our sole discretion, by posting the revised Terms on this site. Revisions are effective immediately upon posting unless otherwise stated. It is your obligation, and yours alone, to review these Terms regularly; we have no duty to provide individualized notice of changes except where applicable law strictly requires it. Your continued use of the Services after any revision constitutes binding acceptance of the revised Terms.</PolicyP>
      <PolicyP>We may likewise modify, suspend, degrade, discontinue, or impose limits on any part of the Services at any time, with or without notice, and without liability to you or any third party. We make no commitment that any feature, content, or service will remain available in any form.</PolicyP>

      <PolicyH2>6. Acceptable Use</PolicyH2>
      <PolicyP>Your license to use the Services is expressly conditioned on your compliance with these Terms. You shall not, and shall not permit or assist any third party to:</PolicyP>
      <PolicyUl>
        <li>Breach or circumvent any security, rate-limiting, authentication, or access-control measure of the Services;</li>
        <li>Upload, transmit, or store content that is unlawful, defamatory, obscene, harassing, discriminatory, infringing, or that we deem objectionable in our sole discretion;</li>
        <li>Interfere with or disrupt the Services or any server or network connected to them, including through denial-of-service attacks, malware, or excessive load;</li>
        <li>Access any non-public area of the Services or any system or data belonging to us or any other user;</li>
        <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity;</li>
        <li>Use the Services for any commercial purpose not expressly authorized by us in writing, including advertising, spam, or resale;</li>
        <li>Scrape, crawl, harvest, or extract data from the Services by automated means, or use any Content to train, fine-tune, or evaluate any machine-learning or artificial-intelligence model, without our prior written consent;</li>
        <li>Collect personal information of other users without their consent;</li>
        <li>Reverse engineer, decompile, disassemble, or attempt to derive the source code of any part of the Services except to the limited extent a statutory right to do so cannot be waived;</li>
        <li>Remove, alter, or obscure any proprietary notice appearing on the Services.</li>
      </PolicyUl>
      <PolicyP>We reserve the right to investigate any suspected violation, to preserve and disclose relevant information to law enforcement or other authorities, and to pursue every remedy available at law or in equity. Violation of this section may result in immediate termination without notice and may expose you to civil and criminal liability. You acknowledge that any breach of this section causes us irreparable harm for which monetary damages are inadequate, entitling us to injunctive relief without the posting of a bond.</PolicyP>

      <PolicyH2>7. Monitoring and Enforcement</PolicyH2>
      <PolicyP>We have the right, but not the obligation, to monitor any activity and User Content on the Services at any time. We may remove, edit, block, or disable access to any User Content at any time, with or without notice, for any reason or no reason. We may disclose your identity and any information about you to any third party who claims that your conduct or content violates their rights, and to any authority when we believe in good faith that disclosure is appropriate. Our decision not to act in one instance does not waive our right to act in any other.</PolicyP>

      <PolicyH2>8. Our Intellectual Property</PolicyH2>
      <PolicyP>The Services and all Content (other than User Content), including design, structure, layout, text, graphics, logos, icons, images, audio, video, and software, are owned by us or our licensors and are protected by copyright, trademark, trade dress, and other laws. We grant you only a limited, revocable, non-exclusive, non-transferable, non-sublicensable license to access the Services for your personal, non-commercial use, strictly in accordance with these Terms. We may revoke this license at any time, for any reason, without notice. No other right, title, or interest is granted, whether by implication, estoppel, or otherwise. All rights not expressly granted are reserved.</PolicyP>

      <PolicyH2>9. User Content and License Grant</PolicyH2>
      <PolicyP>You retain ownership of your User Content. However, by submitting, uploading, or creating User Content on or through the Services, you grant us a worldwide, perpetual, irrevocable, non-exclusive, royalty-free, fully paid, transferable, and sublicensable (through multiple tiers) license to use, host, store, cache, reproduce, modify, adapt, translate, create derivative works from, communicate, publish, publicly perform, publicly display, and distribute your User Content, in any media or format now known or later developed, for any purpose, including operating, promoting, and improving the Services and developing new products and services. This license survives termination of your account and your cessation of use of the Services.</PolicyP>
      <PolicyP>To the maximum extent permitted by law, you irrevocably waive, and cause to be waived, any moral rights and rights of attribution or integrity in your User Content as against us and our licensees. You represent and warrant that you own or control all rights in your User Content, that it does not infringe or misappropriate the rights of any third party, and that it complies with these Terms and all applicable laws. We have no obligation to store, retain, return, or provide you copies of any User Content, and we may delete User Content at any time without liability.</PolicyP>

      <PolicyH2>10. Feedback</PolicyH2>
      <PolicyP>
        If you submit feedback, suggestions, or ideas regarding the Services to <PolicyEmail address='feedback@prestonkwei.com' /> or through any other channel (&quot;Feedback&quot;), you assign no obligation to us of any kind. We may use, disclose, reproduce, and exploit Feedback for any purpose, commercial or otherwise, without restriction, attribution, or compensation to you, and you irrevocably waive any claim to the contrary.
      </PolicyP>

      <PolicyH2>11. Copyright and DMCA</PolicyH2>
      <PolicyP>
        If you believe content on the Services infringes your copyright, submit a notice compliant with the Digital Millennium Copyright Act to <PolicyEmail address='legal@prestonkwei.com' /> including: (1) identification of the copyrighted work; (2) identification and location of the allegedly infringing material; (3) your contact information; (4) a good-faith statement that the use is unauthorized; (5) a statement, under penalty of perjury, that the notice is accurate and you are authorized to act; and (6) your physical or electronic signature. We will terminate the accounts of repeat infringers and may terminate any account upon a single instance of infringement in our discretion. Knowingly submitting a false notice may expose you to liability, including our costs and attorneys&apos; fees.
      </PolicyP>

      <PolicyH2>12. Fees and Payment</PolicyH2>
      <PolicyP>You agree to pay all fees applicable to any paid feature of the Services at the rates in effect when the charges are incurred, plus all applicable taxes. ALL FEES ARE NON-REFUNDABLE AND ALL SALES ARE FINAL, except where a refund is expressly required by applicable law or expressly stated by us in writing at the time of purchase. We may change our fees at any time; fee changes are effective upon posting unless otherwise stated. Recurring subscriptions renew automatically at the then-current rate until cancelled in accordance with the applicable cancellation procedure. Failure to pay any amount when due may result in immediate suspension or termination of the applicable features without notice and without refund of amounts already paid. You are responsible for all costs we incur collecting overdue amounts, including collection-agency fees and reasonable attorneys&apos; fees.</PolicyP>

      <PolicyH2>13. Termination</PolicyH2>
      <PolicyP>We may suspend or terminate your access to any or all of the Services at any time, for any reason or no reason, with or without notice, and without liability of any kind. Upon termination, all licenses granted to you end immediately, you must cease all use of the Services, and no fees will be refunded. Termination does not relieve you of any obligation incurred before termination, including payment and indemnification obligations. All provisions that by their nature should survive termination survive, including Sections 8 through 12 and 14 through 20. You may stop using the Services at any time; doing so is your sole right and remedy with respect to any dissatisfaction with the Services or these Terms.</PolicyP>

      <PolicyH2>14. DISCLAIMER OF WARRANTIES</PolicyH2>
      <PolicyP>THE SERVICES AND ALL CONTENT ARE PROVIDED &quot;AS IS,&quot; &quot;AS AVAILABLE,&quot; AND &quot;WITH ALL FAULTS,&quot; WITHOUT WARRANTY OF ANY KIND WHATSOEVER. TO THE FULLEST EXTENT PERMITTED BY LAW, WE EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ALL WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, QUIET ENJOYMENT, AND ANY WARRANTY ARISING FROM COURSE OF DEALING OR USAGE OF TRADE. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, ERROR-FREE, OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT ANY DEFECT WILL BE CORRECTED. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM US OR THROUGH THE SERVICES, CREATES ANY WARRANTY NOT EXPRESSLY MADE HEREIN. YOUR USE OF THE SERVICES IS AT YOUR SOLE RISK.</PolicyP>

      <PolicyH2>15. LIMITATION OF LIABILITY</PolicyH2>
      <PolicyP>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL PRESTONKWEI.COM OR ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUES, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES, REGARDLESS OF THE THEORY OF LIABILITY AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES SHALL NOT EXCEED THE LESSER OF (A) THE AMOUNTS YOU ACTUALLY PAID US IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) FIFTY U.S. DOLLARS ($50). THE EXISTENCE OF MULTIPLE CLAIMS WILL NOT ENLARGE THIS LIMIT. YOU ACKNOWLEDGE THAT THESE LIMITATIONS ARE A FUNDAMENTAL BASIS OF THE BARGAIN AND THAT WE WOULD NOT PROVIDE THE SERVICES WITHOUT THEM. WHERE A JURISDICTION DOES NOT PERMIT A PARTICULAR EXCLUSION OR LIMITATION, OUR LIABILITY IS LIMITED TO THE MAXIMUM EXTENT THAT JURISDICTION PERMITS.</PolicyP>

      <PolicyH2>16. Indemnification</PolicyH2>
      <PolicyP>You agree to indemnify, defend, and hold harmless PrestonKwei.com and its affiliates, directors, officers, employees, agents, and licensors from and against any and all claims, demands, actions, liabilities, damages, losses, costs, and expenses (including reasonable attorneys&apos; fees and costs of investigation) arising out of or relating to: (a) your use or misuse of the Services; (b) your User Content; (c) your violation of these Terms or of any law or regulation; or (d) your violation of any right of any third party. We reserve the right, at your expense, to assume the exclusive defense and control of any matter subject to indemnification by you, in which case you agree to cooperate fully. You may not settle any such matter without our prior written consent. This obligation survives termination of these Terms.</PolicyP>

      <PolicyH2>17. Release</PolicyH2>
      <PolicyP>To the fullest extent permitted by law, you release PrestonKwei.com and its affiliates, directors, officers, employees, and agents from all claims, demands, and damages of every kind, known or unknown, suspected or unsuspected, arising out of or relating to disputes between you and any other user or any third party in connection with the Services. If you are a California resident, you expressly waive California Civil Code Section 1542, which provides: &quot;A general release does not extend to claims that the creditor or releasing party does not know or suspect to exist in his or her favor at the time of executing the release and that, if known by him or her, would have materially affected his or her settlement with the debtor or released party.&quot;</PolicyP>

      <PolicyH2>18. Dispute Resolution, Arbitration, and Class Action Waiver</PolicyH2>
      <PolicyH3>Informal Resolution First</PolicyH3>
      <PolicyP>
        Before initiating any proceeding, you must first send a written description of your dispute to <PolicyEmail address='legal@prestonkwei.com' /> and negotiate in good faith for at least sixty (60) days. Any arbitration or permitted court proceeding commenced without completing this step shall be stayed pending compliance.
      </PolicyP>
      <PolicyH3>Binding Arbitration</PolicyH3>
      <PolicyP>Any dispute, claim, or controversy arising out of or relating to these Terms or the Services, including their formation, interpretation, breach, or termination, and including any non-contractual claim (&quot;Dispute&quot;), shall be resolved exclusively by final and binding arbitration before a single neutral arbitrator, rather than in court. This arbitration agreement is governed by the Federal Arbitration Act and shall be interpreted as broadly as the law allows. YOU AND PRESTONKWEI.COM EACH WAIVE THE RIGHT TO A TRIAL BY JUDGE OR JURY. Arbitration provides more limited discovery and appellate review than court proceedings.</PolicyP>
      <PolicyH3>Class Action Waiver</PolicyH3>
      <PolicyP>ALL DISPUTES MUST BE BROUGHT IN THE PARTIES&apos; INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS, CONSOLIDATED, OR REPRESENTATIVE PROCEEDING, INCLUDING ANY PRIVATE ATTORNEY GENERAL ACTION. The arbitrator may not consolidate claims or preside over any form of representative proceeding, and may award relief only in favor of the individual party seeking relief and only to the extent necessary to resolve that party&apos;s individual claim.</PolicyP>
      <PolicyH3>Procedure</PolicyH3>
      <PolicyP>The arbitration shall be conducted in English, in Alameda County, California, or another location we agree to in writing, applying the substantive law of the State of California and the Federal Arbitration Act. The arbitrator&apos;s award shall be final and binding, and judgment may be entered in any court of competent jurisdiction. Each party bears its own attorneys&apos; fees and costs, except that if you assert a claim the arbitrator finds frivolous or brought for an improper purpose, you shall reimburse us for all fees and costs we incur.</PolicyP>
      <PolicyH3>Exceptions</PolicyH3>
      <PolicyOl>
        <li>Either party may bring an individual claim in small claims court, provided the matter remains in that court on a strictly individual basis.</li>
        <li>We may seek injunctive or other equitable relief in any court of competent jurisdiction to protect our intellectual property rights or the security of the Services, without first arbitrating and without posting a bond.</li>
      </PolicyOl>
      <PolicyH3>One-Year Limitation on Claims</PolicyH3>
      <PolicyP>TO THE EXTENT PERMITTED BY LAW, ANY CLAIM ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES MUST BE FILED WITHIN ONE (1) YEAR AFTER THE CLAIM ACCRUES, OR IT IS PERMANENTLY BARRED.</PolicyP>
      <PolicyH3>Opt-Out</PolicyH3>
      <PolicyP>You may opt out of this arbitration agreement by mailing a written notice to PO Box 20987, Oakland, CA 94620 within thirty (30) days of first becoming subject to it. The notice must include your name, address, and an unambiguous statement that you opt out of arbitration. Opting out of arbitration does not affect any other provision of these Terms, including the class action waiver to the extent enforceable independently.</PolicyP>
      <PolicyH3>Survival</PolicyH3>
      <PolicyP>This Section 18 survives termination of these Terms and your use of the Services.</PolicyP>

      <PolicyH2>19. Governing Law and Venue</PolicyH2>
      <PolicyP>These Terms and any Dispute are governed by the laws of the State of California and the United States, without regard to conflict-of-law principles. For any proceeding not subject to arbitration, you irrevocably consent to the exclusive personal jurisdiction and venue of the state and federal courts located in Alameda County, California, and waive any objection based on inconvenient forum. The United Nations Convention on Contracts for the International Sale of Goods does not apply.</PolicyP>

      <PolicyH2>20. General Provisions</PolicyH2>
      <PolicyH3>Force Majeure</PolicyH3>
      <PolicyP>We are not liable for any failure or delay resulting from circumstances beyond our reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, labor disputes, pandemics, government action, power or telecommunications failures, or failures of third-party providers.</PolicyP>
      <PolicyH3>Export and Sanctions Compliance</PolicyH3>
      <PolicyP>You may not use, export, re-export, or transfer the Services in violation of applicable export-control and sanctions laws, including those of the United States. You represent that you are not located in an embargoed jurisdiction and are not on any government list of prohibited or restricted parties.</PolicyP>
      <PolicyH3>U.S. Government Rights</PolicyH3>
      <PolicyP>The Services are &quot;Commercial Items&quot; as defined in 48 C.F.R. § 2.101, licensed to U.S. government end users only as Commercial Items with only those rights granted to all other end users under these Terms.</PolicyP>
      <PolicyH3>Assignment</PolicyH3>
      <PolicyP>You may not assign or transfer these Terms or any rights hereunder without our prior written consent; any attempt is void. We may assign these Terms freely, including in connection with a merger, acquisition, reorganization, or sale of assets.</PolicyP>
      <PolicyH3>Severability; No Waiver; Entire Agreement</PolicyH3>
      <PolicyP>If any provision of these Terms is held invalid or unenforceable, it shall be enforced to the maximum extent permissible and the remaining provisions remain in full force. Our failure to enforce any provision is not a waiver of our right to do so later. These Terms, together with the Privacy Policy and any other policies posted on this site (each incorporated by reference), constitute the entire agreement between you and us and supersede all prior agreements and understandings.</PolicyP>
      <PolicyH3>Language and Interpretation</PolicyH3>
      <PolicyP>These Terms are drafted in English; any translation is provided for convenience only and the English version controls. Headings are for convenience and do not affect interpretation. &quot;Including&quot; means &quot;including without limitation,&quot; and &quot;days&quot; means calendar days.</PolicyP>

      <PolicyH2>21. Contact</PolicyH2>
      <PolicyP>
        Questions about these Terms may be directed to <PolicyEmail address='legal@prestonkwei.com' /> or by mail to PO Box 20987, Oakland, CA 94620. We respond to legitimate inquiries within a reasonable time as required by applicable law.
      </PolicyP>
    </PolicyLayout>
  )
}

export default TermsOfService
