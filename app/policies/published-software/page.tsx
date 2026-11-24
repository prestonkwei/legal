import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyP, PolicyUl, PolicyNotice, PolicyEmail, PolicyLink, PolicyDefList } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Published Software Terms',
  description: 'The terms governing software, packages, icons, and other materials we publish to public registries, repositories, and content delivery networks.',
}

const PublishedSoftware = () => {
  return (
    <PolicyLayout title='Published Software Terms' lastUpdated='November 24, 2026' description='Some of our software is publicly visible, downloadable, or installable. That availability grants no right to use it.'>
      <PolicyNotice>
        PUBLIC AVAILABILITY IS NOT A LICENSE. UNLESS YOU HOLD A WRITTEN LICENSE SIGNED BY PRESTON KWEI, YOU HAVE NO RIGHT TO USE, COPY, MODIFY, DISTRIBUTE, OR INCORPORATE ANY PUBLISHED MATERIALS INTO ANY PROJECT, WHETHER PERSONAL OR COMMERCIAL, PAID OR FREE, PUBLIC OR PRIVATE. THESE TERMS ARE INCORPORATED INTO AND FORM PART OF THE TERMS OF SERVICE.
      </PolicyNotice>

      <PolicyH2>1. Scope and Order of Precedence</PolicyH2>
      <PolicyP>
        These Published Software Terms (&quot;Published Software Terms&quot;) govern all Published Materials and supplement the <PolicyLink href='/policies/tos'>Terms of Service</PolicyLink>. Capitalized terms used but not defined here have the meanings given in the Terms of Service. If a LICENSE file, notice, or other license document distributed with a specific Published Material is more restrictive than these Published Software Terms, the more restrictive provision controls. If a Published Material is expressly distributed under a recognized open-source license identified by name in its own license file, that license governs that Published Material to the extent of its terms, and these Published Software Terms govern in all other respects.
      </PolicyP>

      <PolicyH2>2. Definitions</PolicyH2>
      <PolicyDefList
        items={[
          { term: 'Published Materials', definition: 'Any software, package, library, icon, font, asset, design, source code, compiled code, documentation, or data that we make available through a Public Channel, including every version, build, and file it contains.' },
          { term: 'Public Channel', definition: 'Any public package registry, source code host, content delivery network, mirror, cache, or download location, including npm, GitHub, jsDelivr, unpkg, and any service that copies or serves their contents.' },
          { term: 'Written License', definition: 'A license agreement that expressly names you, identifies the Published Materials covered, and is signed by Preston Kwei. A package manifest, license field, README, website, email thread, or public post is not a Written License.' },
          { term: 'Use', definition: 'To install, download, copy, import, reference, link to, embed, bundle, modify, display, distribute, or otherwise exploit Published Materials in any project, product, service, or work.' },
        ]}
      />

      <PolicyH2>3. Why Materials Are Published Publicly</PolicyH2>
      <PolicyP>
        We publish certain materials through Public Channels solely for our own operational convenience, including so that our own sites, applications, and authorized licensees can install and load them with standard tooling. Many Public Channels do not offer private distribution, require public visibility as a condition of service, or make published contents permanently available through mirrors and caches outside our control. Publication through a Public Channel is a technical necessity and not an offer, dedication, waiver, or grant of any kind.
      </PolicyP>

      <PolicyH2>4. No License Without a Written License</PolicyH2>
      <PolicyP>All Published Materials are proprietary and protected by copyright and other intellectual property laws. Except under a Written License, you may not Use any Published Materials. In particular, none of the following grants any right to Use Published Materials:</PolicyP>
      <PolicyUl>
        <li>the fact that Published Materials can be viewed, searched, downloaded, or installed without a password, token, or payment;</li>
        <li>the success of any install, download, or request, or the absence of any technical measure preventing it;</li>
        <li>the inclusion of Published Materials as a direct or transitive dependency of any other package or project;</li>
        <li>any download count, star, fork, listing, badge, or other public signal of use by others;</li>
        <li>any README, usage example, code snippet, or installation instruction, which describe how authorized licensees may use Published Materials and are not an invitation to anyone else; or</li>
        <li>our failure to object to, or delay in objecting to, any Use, whether or not we are aware of it.</li>
      </PolicyUl>
      <PolicyP>
        No right, title, or interest in Published Materials is granted by implication, estoppel, exhaustion, course of dealing, or otherwise. Packages designated &quot;UNLICENSED,&quot; &quot;proprietary,&quot; or by a similar term in their manifest or license field are not licensed for Use by anyone other than us and holders of a Written License.
      </PolicyP>

      <PolicyH2>5. Rights Required by Platform Terms</PolicyH2>
      <PolicyP>
        Some Public Channels require publishers to grant limited rights to the platform or its users as a condition of publishing, such as the right to view a public repository or create a copy within that platform. To the extent such a grant is required, it is limited to the minimum the platform&apos;s terms require, is effective only within that platform, and confers no right to Use Published Materials in any project, product, or service, or anywhere outside that platform.
      </PolicyP>

      <PolicyH2>6. Prohibited Conduct</PolicyH2>
      <PolicyP>Without limiting Section 4, and without a Written License that expressly permits it, you may not:</PolicyP>
      <PolicyUl>
        <li>Use Published Materials in any website, application, design, document, presentation, or other work;</li>
        <li>republish, mirror, repackage, rename, fork for distribution, or redistribute Published Materials, including through any registry or CDN;</li>
        <li>trace, redraw, recreate, or create derivative works from Published Materials, including icons, shapes, and designs;</li>
        <li>remove, obscure, or alter any copyright notice, license file, or proprietary designation;</li>
        <li>use Published Materials to train, fine-tune, evaluate, or benchmark any machine-learning or artificial-intelligence system, or include them in any dataset; or</li>
        <li>represent that Published Materials are open source, free to use, or licensed to you.</li>
      </PolicyUl>

      <PolicyH2>7. Third-Party Marks and Materials</PolicyH2>
      <PolicyP>
        Some Published Materials depict or adapt logos, trademarks, or other materials owned by third parties. Those materials belong to their respective owners and are identified in any third-party notices distributed with the Published Materials. Nothing in these Published Software Terms or in any Written License grants any right in third-party materials, and their inclusion does not imply endorsement, sponsorship, or affiliation.
      </PolicyP>

      <PolicyH2>8. Unauthorized Use and Remedies</PolicyH2>
      <PolicyP>
        If you have Used Published Materials without a Written License, you must immediately cease all Use, remove the Published Materials from every project, product, service, and work, and destroy all copies in your possession or control. Unauthorized Use infringes our rights and breaches these Published Software Terms. We may pursue every remedy available at law or in equity, including damages, statutory damages where available, an accounting of profits, and injunctive relief without the posting of a bond, and may submit takedown notices to any Public Channel, host, or service provider. Section 18 of the Terms of Service, including its exceptions for intellectual property claims, applies to any dispute arising under these Published Software Terms.
      </PolicyP>

      <PolicyH2>9. No Warranty and No Support</PolicyH2>
      <PolicyP>
        PUBLISHED MATERIALS ARE PROVIDED &quot;AS IS&quot; AND &quot;WITH ALL FAULTS,&quot; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. We may change, deprecate, unpublish, or remove any Published Materials, or any version of them, at any time without notice. We have no obligation to provide support, maintenance, updates, or continued availability, and are not liable for any consequence of any Use, authorized or not, including any consequence of Published Materials changing or becoming unavailable.
      </PolicyP>

      <PolicyH2>10. Requesting a License</PolicyH2>
      <PolicyP>
        To request a Written License, or to report unauthorized Use of Published Materials, contact <PolicyEmail address='legal@prestonkwei.com' /> and identify the Published Materials and the intended use. We may grant or decline any request in our sole discretion. A request, a reply, or any ongoing discussion does not authorize Use until a Written License has been signed.
      </PolicyP>
    </PolicyLayout>
  )
}

export default PublishedSoftware
