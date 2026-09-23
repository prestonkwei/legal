import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyH3, PolicyP, PolicyUl, PolicyNotice, PolicyEmail } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How PrestonKwei.com collects, uses, discloses, and retains personal information.',
}

const Privacy = () => {
  return (
    <PolicyLayout title='Privacy Policy' lastUpdated='September 23, 2026' description='This policy describes, comprehensively and without qualification, how we collect, use, disclose, and retain information about you across every property we operate.'>
      <PolicyNotice>BY ACCESSING OR USING ANY OF OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTOOD THIS PRIVACY POLICY AND CONSENT TO THE COLLECTION, USE, DISCLOSURE, AND RETENTION OF YOUR INFORMATION AS DESCRIBED HEREIN. IF YOU DO NOT CONSENT, YOU MUST IMMEDIATELY DISCONTINUE ALL USE OF THE SERVICES.</PolicyNotice>

      <div id='sms' className='scroll-mt-8' />
      <PolicyH2>Text Messaging (SMS)</PolicyH2>
      <PolicyP>
        Notwithstanding anything else in this Privacy Policy, mobile phone numbers, text message content, and SMS opt-in consent collected through Preston Kwei&apos;s text messaging number are never sold, rented, or shared with third parties or affiliates for marketing or promotional purposes. This information is used only to carry on conversations you have opted into and is disclosed only to the messaging provider needed to deliver those messages. Reply STOP to opt out at any time. See the <a href='/policies/sms' className='text-white underline decoration-zinc-700 underline-offset-4'>Text Messaging Terms</a>.
      </PolicyP>

      <div id='communications' className='scroll-mt-8' />
      <PolicyH2>Communications With Preston</PolicyH2>
      <PolicyP>
        Preston uses personal AI assistant tools that read and act on his communications. If you communicate with him through any channel, including text messages and iMessage to his personal number, email, Slack, phone calls, and recorded conversations and meetings, the content of those communications and details such as your name, phone number, email address, and when you wrote may be stored and processed by those tools. This includes group conversations in which you and Preston both take part.
      </PolicyP>
      <PolicyP>These tools use this information to:</PolicyP>
      <PolicyUl>
        <li>Classify and summarize incoming messages, and suggest or draft replies;</li>
        <li>Keep notes about the people Preston talks with, such as shared plans, open conversations, and notable things you have told him, so he can remember context and follow up;</li>
        <li>Track commitments and follow-ups, and keep a personal journal;</li>
        <li>Transcribe and summarize calls and recorded conversations;</li>
        <li>Send some messages and emails on Preston&apos;s behalf.</li>
      </PolicyUl>
      <PolicyP>
        These tools run on third-party service providers that process the information on Preston&apos;s behalf, including AI model providers (such as OpenAI and Anthropic), communications and workspace providers (such as Telnyx and Slack), and hosting, database, and code-storage providers (such as Cloudflare, Neon, and GitHub). Your communications are never sold, and are never used for marketing or advertising.
      </PolicyP>
      <PolicyP>
        You may ask Preston to delete your communications and the notes about you at any time by emailing <PolicyEmail address='privacy@prestonkwei.com' /> from the address or account you used, or by asking him directly. He will make reasonable efforts to remove or de-identify your communications, and the notes, summaries, and memories derived from them, in his assistant tools within 30 days, and will confirm when he is done. Deletion does not reach copies held by you or other participants, records kept by the underlying platforms (such as your carrier, email provider, or Slack workspace), or backups and version history that are overwritten or pruned on their normal schedule.
      </PolicyP>

      <PolicyH2>1. Introduction and Scope</PolicyH2>
      <PolicyP>
        This Privacy Policy governs the collection, use, disclosure, and retention of information by PrestonKwei.com and its affiliates (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;) across all of our websites, subdomains, mobile applications, APIs, and other digital properties (collectively, the &quot;Services&quot;), including every domain identified on our Domains page. It applies to all visitors, users, and customers, regardless of geographic location, and to information collected online, offline, and from third-party sources. We act as the data controller for personal information collected through the Services. Questions may be directed to <PolicyEmail address='privacy@prestonkwei.com' />.
      </PolicyP>
      <PolicyP>&quot;Personal information&quot; means any information relating to an identified or identifiable natural person. &quot;Processing&quot; means any operation performed on personal information, including collection, recording, organization, storage, adaptation, retrieval, use, disclosure, combination, restriction, and deletion.</PolicyP>

      <PolicyH2>2. Information We Collect</PolicyH2>
      <PolicyP>We collect information broadly and continuously whenever you interact with the Services. The categories below are illustrative, not exhaustive.</PolicyP>
      <PolicyH3>Information You Provide</PolicyH3>
      <PolicyUl>
        <li>
          <strong>Identifiers:</strong> Name, alias, email address, username, phone number, postal address, date of birth, gender, government-issued identifiers where required, and IP address.
        </li>
        <li>
          <strong>Account and Commercial Data:</strong> Passwords and security credentials, purchase and transaction history, billing and shipping information, payment method details, customer service interactions, preferences, settings, and loyalty data. This information may also be collected if you authorize our applications to access your Google Account.
        </li>
        <li>
          <strong>User-Generated Content:</strong> Photos, videos, reviews, comments, posts, voice recordings, survey responses, and documents you create or upload.
        </li>
        <li>
          <strong>Social Media Data:</strong> If you connect a social account, your profile picture, handle, connections, follower counts, engagement metrics, posts, and other information available through that platform.
        </li>
        <li>
          <strong>Biometric Data:</strong> With your consent where required, facial geometry, fingerprints, voiceprints, and behavioral biometrics used for authentication and security.
        </li>
        <li>
          <strong>Employment and Health Data:</strong> Job title, employer, and professional details you provide; and, with consent where required, fitness, wellness, and related data from connected devices.
        </li>
      </PolicyUl>
      <PolicyH3>Information Collected Automatically</PolicyH3>
      <PolicyUl>
        <li>
          <strong>Device Data:</strong> Device model, operating system, browser type and version, screen resolution, unique device identifiers, advertising identifiers, MAC address, mobile network and carrier information, language settings, battery status, and performance metrics.
        </li>
        <li>
          <strong>Activity Data:</strong> Pages visited, timestamps, dwell time, clicks, taps, scrolls, features used, search queries, content interactions, downloads, crash and error logs, referral sources, and session identifiers.
        </li>
        <li>
          <strong>Location Data:</strong> Precise or approximate geolocation derived from GPS, IP address, Wi-Fi access points, and cell towers, subject to your device settings.
        </li>
        <li>
          <strong>Cross-Device and Cross-Context Data:</strong> We may link your activity across devices, browsers, platforms, and contexts to build a unified profile of your behavior and preferences.
        </li>
      </PolicyUl>
      <PolicyH3>Inferred and Derived Data</PolicyH3>
      <PolicyP>We analyze the information above to draw inferences about your interests, preferences, habits, characteristics, behavior, and likely demographics, and to create profiles used for personalization, advertising, analytics, and product development. Inferred data is treated as our proprietary work product to the fullest extent permitted by law.</PolicyP>
      <PolicyH3>Information From Third Parties</PolicyH3>
      <PolicyUl>
        <li>
          <strong>Public Sources:</strong> Public records, directories, and other openly available sources.
        </li>
        <li>
          <strong>Partners and Providers:</strong> Payment processors, analytics providers, advertising networks, data brokers, authentication providers, and social media platforms.
        </li>
        <li>
          <strong>Combined Data:</strong> We may combine information from any source with information we hold to enrich our records and improve our Services.
        </li>
      </PolicyUl>

      <PolicyH2>3. How We Use Information</PolicyH2>
      <PolicyP>We use the information we collect for any purpose consistent with a legitimate business interest, including to:</PolicyP>
      <PolicyUl>
        <li>Provide, operate, maintain, and secure the Services, including authentication, account management, and access control;</li>
        <li>Process transactions, billing, and collections, and enforce our contractual rights;</li>
        <li>Personalize content, recommendations, features, and advertising across devices and contexts;</li>
        <li>Conduct analytics, research, testing, and internal reporting, in identified, aggregated, or de-identified form;</li>
        <li>Develop, train, and improve our products, services, algorithms, and models;</li>
        <li>Send transactional, service, and account communications, which you may not opt out of while you maintain an account;</li>
        <li>Send marketing, promotional, and other commercial communications, subject to the opt-out rights described below;</li>
        <li>Detect, investigate, and prevent fraud, abuse, security incidents, and violations of our Terms of Service, and cooperate with law enforcement;</li>
        <li>Comply with legal obligations, respond to legal process and lawful requests from authorities, and establish, exercise, or defend legal claims;</li>
        <li>Effectuate any merger, acquisition, financing, reorganization, bankruptcy, or sale of assets;</li>
        <li>Fulfill any other purpose disclosed to you at the time of collection or to which you consent.</li>
      </PolicyUl>

      <PolicyH2>4. Cookies and Tracking Technologies</PolicyH2>
      <PolicyP>We and our partners use cookies, web beacons, pixels, tags, scripts, local storage, software development kits, server logs, and device fingerprinting to collect information automatically, recognize you across sessions and devices, measure performance, and deliver and measure advertising. Session cookies expire when you close your browser; persistent cookies remain until they expire or are deleted. We may engage in cross-context behavioral advertising; where applicable law requires, we provide the choices described in Section 8. Blocking cookies may degrade or disable portions of the Services, and we make no commitment that the Services will function without them. See our Cookie Policy for additional detail.</PolicyP>

      <PolicyH2>5. How We Disclose Information</PolicyH2>
      <PolicyP>We disclose information in the following circumstances, and you consent to each of them:</PolicyP>
      <PolicyUl>
        <li>
          <strong>Service Providers and Contractors:</strong> Hosting and infrastructure providers, payment processors, communication services, analytics and measurement providers, customer support tools, advertising and marketing platforms, fraud and security services, and professional advisors, in each case under contractual confidentiality and security obligations.
        </li>
        <li>
          <strong>Affiliates:</strong> Current and future affiliates, parents, and subsidiaries for the purposes described in this policy.
        </li>
        <li>
          <strong>Advertising and Analytics Partners:</strong> Partners who assist us in delivering, targeting, and measuring content and advertising, including through identifiers, hashed data, and audience segments.
        </li>
        <li>
          <strong>Legal and Safety:</strong> Any disclosure we believe in good faith is necessary to comply with law or legal process, respond to governmental requests, enforce our Terms of Service, protect our rights, property, or safety or those of our users or the public, or detect and prevent fraud or security issues.
        </li>
        <li>
          <strong>Business Transfers:</strong> In connection with any merger, acquisition, financing, reorganization, bankruptcy, receivership, or sale or transfer of some or all of our assets, in which case your information may be transferred as a business asset without further notice to you except as required by law.
        </li>
        <li>
          <strong>With Your Direction or Consent:</strong> Any other disclosure you direct or to which you consent.
        </li>
        <li>
          <strong>Aggregated and De-Identified Data:</strong> We may disclose aggregated or de-identified information to any party, for any purpose, without restriction.
        </li>
      </PolicyUl>

      <PolicyH2>6. Data Retention</PolicyH2>
      <PolicyP>We retain information for as long as necessary or useful to fulfill the purposes described in this policy, and thereafter for as long as retention serves a legitimate business, legal, security, or operational purpose. Retention periods vary by data type and context. Account data may be retained for the life of your account plus a reasonable period thereafter. Content you delete may persist in backups, logs, caches, and archives, and in copies retained by other users or third parties, and may remain in our systems after it ceases to be accessible to you. Where litigation, disputes, investigations, or legal obligations exist or are reasonably anticipated, we retain relevant data until the matter is fully resolved. We may retain aggregated and de-identified data indefinitely.</PolicyP>

      <PolicyH2>7. Security</PolicyH2>
      <PolicyP>We employ administrative, technical, and physical safeguards appropriate to the nature of the information we process, including transport-layer encryption, access controls with role-based permissions, secure hosting environments, monitoring and audit logging, vulnerability management, incident-response procedures, and personnel training. NOTWITHSTANDING THE FOREGOING, NO METHOD OF TRANSMISSION OR STORAGE IS COMPLETELY SECURE, AND WE DO NOT AND CANNOT WARRANT OR GUARANTEE THE SECURITY OF ANY INFORMATION. TO THE FULLEST EXTENT PERMITTED BY LAW, YOU TRANSMIT INFORMATION TO US AT YOUR OWN RISK, AND OUR LIABILITY ARISING FROM ANY UNAUTHORIZED ACCESS, ACQUISITION, OR DISCLOSURE IS LIMITED AS SET FORTH IN OUR TERMS OF SERVICE.</PolicyP>

      <PolicyH2>8. Your Choices and Rights</PolicyH2>
      <PolicyP>
        You may access, update, or delete certain account information through your account settings where available. You may opt out of marketing emails via the unsubscribe link in each message; transactional and service communications will continue. You may manage cookies through your browser, subject to the functionality limits described above. Depending on your jurisdiction, you may have the right to know, access, correct, delete, port, restrict, or object to certain processing, to opt out of targeted advertising or sales or sharing of personal information, and to withdraw consent where processing is based on consent. Submit requests to <PolicyEmail address='privacy@prestonkwei.com' />. We will verify your identity before acting on a request, may deny requests as permitted by law, and will respond within the time periods required by applicable law. We will not discriminate against you for exercising a legal right, but certain features may be unavailable if you restrict processing necessary to provide them.
      </PolicyP>

      <PolicyH2>9. California Privacy Rights (CCPA/CPRA)</PolicyH2>
      <PolicyH3>Categories Collected</PolicyH3>
      <PolicyP>In the preceding 12 months, we may have collected the following categories of personal information about California consumers: identifiers; customer records information; characteristics of protected classifications; commercial information; biometric information; internet or other electronic network activity; geolocation data; audio, electronic, visual, or similar information; professional or employment-related information; and inferences drawn from any of the foregoing to create a profile reflecting your preferences, characteristics, behavior, and attitudes.</PolicyP>
      <PolicyH3>Your Rights</PolicyH3>
      <PolicyUl>
        <li>
          <strong>Right to Know and Access:</strong> The categories and specific pieces of personal information we collect, the sources, the purposes, and the categories of recipients.
        </li>
        <li>
          <strong>Right to Delete:</strong> Deletion of personal information, subject to the statutory exceptions, which we invoke to the fullest extent available.
        </li>
        <li>
          <strong>Right to Correct:</strong> Correction of inaccurate personal information.
        </li>
        <li>
          <strong>Right to Opt Out of Sale/Sharing:</strong> We do not currently sell personal information for money. Certain disclosures to advertising partners may constitute &quot;sharing&quot; for cross-context behavioral advertising under the CPRA; you may opt out of such sharing by contacting us.
        </li>
        <li>
          <strong>Right to Limit Sensitive Personal Information:</strong> Limitation of our use of sensitive personal information to permitted purposes.
        </li>
        <li>
          <strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising these rights.
        </li>
      </PolicyUl>
      <PolicyP>
        Submit requests to <PolicyEmail address='legal@prestonkwei.com' />. We will respond within 45 days, extendable by an additional 45 days where reasonably necessary. You may designate an authorized agent with written permission; we may verify your identity directly and deny requests from agents who cannot demonstrate authority.
      </PolicyP>

      <PolicyH2>10. Other U.S. State Privacy Rights</PolicyH2>
      <PolicyP>
        Residents of Virginia, Colorado, Connecticut, Utah, Texas, Oregon, Montana, and other states with comprehensive privacy laws may have rights to confirm processing, access, correct, delete, and obtain a portable copy of their personal data, and to opt out of targeted advertising, sales, and certain profiling. Nevada residents may opt out of the sale of covered information; we do not currently sell covered information as defined under Nevada law. Exercise any of these rights by contacting <PolicyEmail address='privacy@prestonkwei.com' />. Where a state provides an appeal process, you may appeal a denial by replying to our decision, and we will respond as required by the applicable statute.
      </PolicyP>

      <PolicyH2>11. European and UK Data Protection (GDPR)</PolicyH2>
      <PolicyH3>Legal Bases</PolicyH3>
      <PolicyUl>
        <li>Performance of a contract with you, or steps taken at your request before entering a contract;</li>
        <li>Your consent, which you may withdraw at any time without affecting prior processing;</li>
        <li>Our legitimate interests, including operating and securing the Services, preventing fraud, improving our offerings, and marketing, except where overridden by your fundamental rights;</li>
        <li>Compliance with legal obligations, including record retention and responses to lawful requests.</li>
      </PolicyUl>
      <PolicyH3>Your Rights</PolicyH3>
      <PolicyP>
        If you are in the European Economic Area or United Kingdom, you may request access to, rectification or erasure of, restriction of, or objection to our processing of your personal data, and data portability in a structured, commonly used, machine-readable format. We may require identity verification before acting. You may lodge a complaint with your supervisory authority. Contact our data protection contact at <PolicyEmail address='privacy@prestonkwei.com' /> for these requests or for information about any EU or UK representative we may be required to designate.
      </PolicyP>

      <PolicyH2>12. International Transfers</PolicyH2>
      <PolicyP>
        We are headquartered in the United States, and your information will be transferred to, stored in, and processed in the United States and other jurisdictions whose data protection laws may differ from, and be less protective than, those of your jurisdiction. By using the Services, you acknowledge and, where consent is a valid basis, consent to such transfers. For transfers from the EEA, UK, or Switzerland, we rely on appropriate safeguards such as Standard Contractual Clauses or other mechanisms permitted by applicable law. You may request a copy of the relevant safeguards at <PolicyEmail address='privacy@prestonkwei.com' />.
      </PolicyP>

      <PolicyH2>13. Automated Decision-Making and Profiling</PolicyH2>
      <PolicyP>We use automated processing, including profiling, to personalize content and advertising, detect fraud and abuse, secure the Services, and improve our products. Where automated processing produces legal or similarly significant effects on you and applicable law grants you rights in connection with it, we will provide the required safeguards, including the ability to request human review, express your point of view, and contest the decision. Absent such a legal requirement, our automated systems and their outputs are proprietary and we are not obligated to explain or alter them.</PolicyP>

      <PolicyH2>14. Do Not Track</PolicyH2>
      <PolicyP>There is no accepted standard for &quot;Do Not Track&quot; browser signals, and our Services do not respond to them. Where applicable law requires us to honor opt-out preference signals such as the Global Privacy Control, we will do so to the extent required for users in the relevant jurisdiction.</PolicyP>

      <PolicyH2>15. Children&apos;s Privacy</PolicyH2>
      <PolicyP>The Services are not directed to children under 13, and we do not knowingly collect personal information from them. If we learn that a child under 13 has provided personal information, we will delete it. In jurisdictions with a higher age of digital consent, we will obtain parental or guardian consent where required before collecting personal information from minors below that age. Parents and guardians may contact us to review, correct, or delete information collected from their children.</PolicyP>

      <PolicyH2>16. Data Breach Notification</PolicyH2>
      <PolicyP>If a breach of security involving your personal information occurs, we will assess its scope and nature and notify affected individuals and regulators as and when required by applicable law, using email, telephone, prominent notice on our websites, or other lawful means. Notifications will describe the incident, the categories of data involved, the measures taken, and steps you can take to protect yourself. We will cooperate with relevant authorities. Our provision of notice is not an admission of fault or liability, and our liability for any incident remains limited as set forth in our Terms of Service.</PolicyP>

      <PolicyH2>17. Changes to This Policy</PolicyH2>
      <PolicyP>We may revise this Privacy Policy at any time, in our sole discretion. Revisions are effective upon posting unless otherwise stated. For material changes, we will provide notice as required by applicable law, such as email notice or a prominent statement on our websites. Your continued use of the Services after a revision becomes effective constitutes acceptance of the revised policy. If you do not accept it, you must discontinue use of the Services and may request deletion of your information as described in Section 8.</PolicyP>

      <PolicyH2>18. Contact</PolicyH2>
      <PolicyP>
        Direct privacy inquiries and requests to <PolicyEmail address='privacy@prestonkwei.com' /> or by mail to PO Box 20987, Oakland, CA 94620.
      </PolicyP>
    </PolicyLayout>
  )
}

export default Privacy
