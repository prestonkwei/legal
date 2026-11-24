import type { Metadata } from 'next'
import PolicyLayout from '@/components/PolicyLayout'
import { PolicyH2, PolicyP, PolicyUl, PolicyNotice, PolicyEmail, PolicyLink, PolicyDefList } from '@/components/PolicyContent'

export const metadata: Metadata = {
  title: 'Proprietary Software Terms',
  description: 'The terms governing proprietary software, packages, icons, and other materials made available through public registries, repositories, and content delivery networks.',
}

const ProprietarySoftware = () => {
  return (
    <PolicyLayout title='Proprietary Software Terms' lastUpdated='November 24, 2026' description='These Proprietary Software Terms govern all Proprietary Materials, wherever and however obtained, and form part of the Terms of Service.'>
      <PolicyNotice>
        PUBLIC AVAILABILITY DOES NOT CONSTITUTE A LICENSE. ALL PROPRIETARY MATERIALS ARE LICENSED, NOT SOLD, AND ONLY TO HOLDERS OF AN EXECUTED WRITTEN LICENSE. ABSENT AN EXECUTED WRITTEN LICENSE, NO PERSON OR ENTITY HAS ANY RIGHT TO USE ANY PROPRIETARY MATERIALS FOR ANY PURPOSE, AND ANY SUCH USE CONSTITUTES INFRINGEMENT AND A MATERIAL BREACH OF THESE TERMS. THESE TERMS ARE INCORPORATED INTO AND FORM PART OF THE TERMS OF SERVICE, INCLUDING ITS BINDING ARBITRATION AGREEMENT, CLASS ACTION WAIVER, JURY TRIAL WAIVER, AND LIMITATIONS OF LIABILITY. BY ACCESSING, DOWNLOADING, INSTALLING, OR USING ANY PROPRIETARY MATERIALS IN ANY MANNER, YOU AGREE TO BE BOUND BY THESE TERMS IN THEIR ENTIRETY.
      </PolicyNotice>

      <PolicyH2>1. Incorporation, Scope, and Order of Precedence</PolicyH2>
      <PolicyP>
        These Proprietary Software Terms (&quot;Software Terms&quot;) supplement and are incorporated by reference into the <PolicyLink href='/policies/tos'>Terms of Service</PolicyLink>. They govern all Proprietary Materials, regardless of the Distribution Channel through which they are made available or obtained, and regardless of whether they are obtained directly from us or from any third party, mirror, cache, archive, or derivative distribution. Capitalized terms used but not defined in these Software Terms have the meanings given in the Terms of Service.
      </PolicyP>
      <PolicyP>
        In the event of any conflict between these Software Terms and the Terms of Service with respect to Proprietary Materials, these Software Terms control. In the event of any conflict between these Software Terms and a license file, notice, or other license document distributed with specific Proprietary Materials, the provision more protective of our rights controls. In the event of any conflict between these Software Terms and an executed Written License, the Written License controls solely with respect to the licensee named therein and solely to the extent of its express terms.
      </PolicyP>

      <PolicyH2>2. Definitions</PolicyH2>
      <PolicyDefList
        items={[
          { term: 'Proprietary Materials', definition: 'All software, packages, libraries, modules, components, icons, glyphs, fonts, graphics, designs, assets, source code, object code, compiled or minified code, stylesheets, sprites, data files, documentation, and other materials authored, owned, or controlled by us and made available through any Distribution Channel, together with all versions, releases, builds, updates, modifications, and portions thereof.' },
          { term: 'Distribution Channel', definition: 'Any package registry, source code hosting service, content delivery network, mirror, cache, archive, download location, or other means by which Proprietary Materials are made accessible, including without limitation npm, GitHub, jsDelivr, unpkg, and any service that indexes, replicates, or serves their contents.' },
          { term: 'Written License', definition: 'A written agreement, executed by Preston Kwei, that expressly names the licensee, identifies the Proprietary Materials licensed, and sets forth the scope of the rights granted. No package manifest, license field, README, documentation, website, correspondence, invoice, purchase order, public statement, or course of conduct constitutes a Written License.' },
          { term: 'Licensee', definition: 'A person or entity named as licensee in an executed Written License that remains in effect.' },
          { term: 'Use', definition: 'To access, download, install, copy, reproduce, import, reference, link to, embed, bundle, compile, execute, display, perform, modify, adapt, translate, distribute, transmit, sublicense, or otherwise exploit, in whole or in part, by any means or in any medium now known or later developed.' },
          { term: 'Unauthorized Use', definition: 'Any Use of Proprietary Materials not expressly authorized by an executed Written License, and any Use by a Licensee outside the scope of, or after the termination of, its Written License.' },
        ]}
      />

      <PolicyH2>3. Ownership and Reservation of Rights</PolicyH2>
      <PolicyP>
        The Proprietary Materials are and shall remain the sole and exclusive property of Preston Kwei and his licensors, and are protected by the copyright, trademark, trade dress, trade secret, and other intellectual property laws of the United States and other jurisdictions, and by international treaties. The Proprietary Materials are licensed, not sold. All right, title, and interest in and to the Proprietary Materials, including all intellectual property rights therein and all copies, modifications, and derivative works thereof by whomever made, are expressly reserved. No right, title, license, or interest is granted or conveyed, whether by implication, estoppel, exhaustion, first sale, course of dealing, course of performance, usage of trade, or otherwise, except as expressly set forth in an executed Written License.
      </PolicyP>

      <PolicyH2>4. Public Availability Does Not Constitute a License</PolicyH2>
      <PolicyP>
        Proprietary Materials are made available through Distribution Channels solely for our own operational purposes, including to enable our own sites and applications and our Licensees to obtain them using standard tooling. Certain Distribution Channels do not offer private distribution, condition their services on public visibility, or replicate published contents to mirrors and caches beyond our control. Such availability is a technical incident of distribution and does not constitute an offer, dedication to the public, abandonment, waiver, or grant of any right. Without limiting the foregoing, none of the following confers, evidences, or implies any right to Use any Proprietary Materials:
      </PolicyP>
      <PolicyUl>
        <li>the ability to view, search, download, install, or access Proprietary Materials without authentication, credentials, or payment;</li>
        <li>the completion of any download, installation, or request, or the absence of any technical measure preventing it;</li>
        <li>the inclusion of Proprietary Materials as a direct or transitive dependency of any other package, project, or product;</li>
        <li>any README, documentation, usage example, code sample, or installation instruction, each of which is directed solely to Licensees;</li>
        <li>any download count, listing, rating, fork, star, or other indication of Use by others; or</li>
        <li>any failure or delay on our part to object to, or take action against, any Use, whether or not known to us.</li>
      </PolicyUl>
      <PolicyP>
        Proprietary Materials designated &quot;UNLICENSED,&quot; &quot;proprietary,&quot; &quot;all rights reserved,&quot; or by any similar designation in any manifest, license field, or notice are not licensed to any person or entity other than Licensees.
      </PolicyP>

      <PolicyH2>5. Rights Required by Distribution Channel Terms</PolicyH2>
      <PolicyP>
        Where the terms of a Distribution Channel require, as a condition of publication, that we grant limited rights to the operator of that Distribution Channel or to its users, any such grant is made solely to the extent so required, is limited to the minimum scope necessary to satisfy that requirement, is effective solely within and for the purposes of that Distribution Channel, and confers no right to Use Proprietary Materials in or in connection with any project, product, service, or work, or in any location or medium outside that Distribution Channel. All rights not so required to be granted are reserved.
      </PolicyP>

      <PolicyH2>6. Restrictions</PolicyH2>
      <PolicyP>Except as expressly permitted by an executed Written License, you shall not, and shall not permit, authorize, or assist any third party to:</PolicyP>
      <PolicyUl>
        <li>Use any Proprietary Materials in or in connection with any website, application, software, product, service, design, document, presentation, publication, or other work, whether personal or commercial, paid or free, public or private;</li>
        <li>copy, reproduce, republish, mirror, repackage, rename, fork for distribution, sell, resell, lease, lend, sublicense, or otherwise distribute or make available any Proprietary Materials, including through any Distribution Channel;</li>
        <li>modify, adapt, translate, trace, redraw, recreate, or create derivative works based on any Proprietary Materials, including any icon, shape, design, or visual element thereof;</li>
        <li>decompile, disassemble, deobfuscate, reverse engineer, or otherwise attempt to derive the source code, structure, design, or methodology of any Proprietary Materials, except to the limited extent applicable law expressly permits such activity notwithstanding this restriction;</li>
        <li>remove, obscure, or alter any copyright notice, license file, trademark, attribution, or other proprietary designation, or any copyright management information within the meaning of 17 U.S.C. § 1202;</li>
        <li>use any Proprietary Materials, in whole or in part, to train, fine-tune, evaluate, benchmark, or otherwise develop any machine-learning or artificial-intelligence model or system, or include any Proprietary Materials in any dataset or corpus;</li>
        <li>use any Proprietary Materials to create, or in connection with, any product or service that competes with, substitutes for, or replicates any Proprietary Materials; or</li>
        <li>represent, expressly or by implication, that any Proprietary Materials are open source, in the public domain, free to use, or licensed to you or to any third party.</li>
      </PolicyUl>

      <PolicyH2>7. Third-Party Marks and Materials</PolicyH2>
      <PolicyP>
        Certain Proprietary Materials depict, reference, or adapt logos, trademarks, service marks, or other materials owned by third parties. All such materials are the property of their respective owners and are identified in any third-party notices distributed with the Proprietary Materials. Nothing in these Software Terms or in any Written License grants any right or license in or to any third-party materials, and their inclusion does not imply any endorsement, sponsorship, or affiliation. You are solely responsible for obtaining any rights required from third parties.
      </PolicyP>

      <PolicyH2>8. Enforcement Rights</PolicyH2>
      <PolicyP>We reserve the right, but assume no obligation, to monitor, investigate, and enforce compliance with these Software Terms and every Written License, by any lawful means, in our sole discretion. Without limitation, we may at any time and without notice:</PolicyP>
      <PolicyUl>
        <li>investigate any actual or suspected Unauthorized Use, including by examining publicly accessible websites, applications, repositories, packages, dependency manifests, and network requests;</li>
        <li>submit notices of infringement, takedown requests, or other demands under the Digital Millennium Copyright Act, 17 U.S.C. § 512, or any comparable law, to any Distribution Channel, hosting provider, service provider, app marketplace, registrar, or other intermediary;</li>
        <li>demand that any person or entity cease Unauthorized Use and certify in writing the removal and destruction of all Proprietary Materials;</li>
        <li>revoke, suspend, restrict, or rotate access to any Proprietary Materials, credentials, tokens, or Distribution Channels, or alter, deprecate, unpublish, or withdraw any Proprietary Materials or any version thereof;</li>
        <li>require any Licensee to provide reasonable written certification of compliance and, upon reasonable notice, reasonable records sufficient to verify that Licensee&apos;s Use complies with its Written License;</li>
        <li>terminate any Written License in accordance with its terms, or immediately upon any material breach of these Software Terms; and</li>
        <li>commence any action or proceeding, and seek any remedy available under Section 9, in any court of competent jurisdiction.</li>
      </PolicyUl>
      <PolicyP>
        We may exercise our enforcement rights selectively, at times of our choosing, and against any one or more persons or entities without proceeding against others. Our decision to enforce, or not to enforce, these Software Terms against any person or entity, in any instance, shall not constitute a waiver of any right, an election of remedies, or a basis for any defense of laches, acquiescence, estoppel, implied license, or selective enforcement. No waiver shall be effective unless in a writing executed by Preston Kwei, and no waiver of any breach shall constitute a waiver of any other or subsequent breach.
      </PolicyP>

      <PolicyH2>9. Remedies</PolicyH2>
      <PolicyP>
        Any Unauthorized Use constitutes infringement of our intellectual property rights and a material breach of these Software Terms. Upon becoming aware of any Unauthorized Use, you shall immediately cease all Use, remove the Proprietary Materials from every project, product, service, and work, permanently destroy all copies in your possession, custody, or control, and, upon our request, certify such removal and destruction in writing. You acknowledge that Unauthorized Use would cause us irreparable harm for which monetary damages would be an inadequate remedy, and that we shall be entitled to temporary, preliminary, and permanent injunctive relief and specific performance, without the necessity of proving actual damages and without the posting of any bond or other security, in addition to every other remedy available at law or in equity.
      </PolicyP>
      <PolicyP>
        Such remedies include, without limitation, actual damages, disgorgement of profits, an accounting, statutory damages to the extent available under 17 U.S.C. § 504(c) or any other applicable law, damages for removal or alteration of copyright management information under 17 U.S.C. § 1203, and recovery of our costs and reasonable attorneys&apos; fees to the fullest extent permitted by law. You shall be liable for any Unauthorized Use by any person or entity acting on your behalf or obtaining Proprietary Materials through you. All remedies are cumulative and not exclusive. Claims arising under these Software Terms fall within the exceptions to arbitration set forth in Section 18 of the Terms of Service for the protection of our intellectual property rights.
      </PolicyP>

      <PolicyH2>10. Indemnification</PolicyH2>
      <PolicyP>
        You shall indemnify, defend, and hold harmless Preston Kwei, PrestonKwei.com, and their respective affiliates, licensors, successors, and assigns from and against any and all claims, demands, actions, losses, liabilities, damages, judgments, settlements, penalties, costs, and expenses, including reasonable attorneys&apos; fees and costs of investigation, arising out of or relating to any Unauthorized Use by you or any person or entity acting on your behalf or obtaining Proprietary Materials through you, or any breach of these Software Terms.
      </PolicyP>

      <PolicyH2>11. Disclaimer of Warranties and Limitation of Liability</PolicyH2>
      <PolicyP>
        THE PROPRIETARY MATERIALS ARE PROVIDED &quot;AS IS,&quot; &quot;AS AVAILABLE,&quot; AND &quot;WITH ALL FAULTS,&quot; WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AVAILABILITY, OR COMPATIBILITY, ALL OF WHICH ARE EXPRESSLY DISCLAIMED TO THE FULLEST EXTENT PERMITTED BY LAW. WE HAVE NO OBLIGATION TO PROVIDE SUPPORT, MAINTENANCE, UPDATES, OR CONTINUED AVAILABILITY OF ANY PROPRIETARY MATERIALS, AND MAY CHANGE, DEPRECATE, UNPUBLISH, OR REMOVE ANY PROPRIETARY MATERIALS OR ANY VERSION THEREOF AT ANY TIME WITHOUT NOTICE. THE LIMITATIONS OF LIABILITY SET FORTH IN SECTION 15 OF THE TERMS OF SERVICE APPLY TO ALL PROPRIETARY MATERIALS AND TO ANY USE THEREOF, AUTHORIZED OR NOT.
      </PolicyP>

      <PolicyH2>12. Modifications</PolicyH2>
      <PolicyP>
        We may amend these Software Terms at any time by posting the amended terms on this page and updating the date above. Amendments are effective upon posting and apply to all Proprietary Materials, including Proprietary Materials obtained before the amendment. Your continued possession or Use of any Proprietary Materials after posting constitutes acceptance of the amended terms. No amendment shall diminish the rights expressly granted to a Licensee in an executed Written License during its term.
      </PolicyP>

      <PolicyH2>13. Survival and Severability</PolicyH2>
      <PolicyP>
        These Software Terms apply to every copy of the Proprietary Materials for so long as that copy exists, and survive any termination of a Written License, any termination of your access to the Services, and any cessation of Use. If any provision of these Software Terms is held invalid, illegal, or unenforceable, that provision shall be enforced to the maximum extent permissible and modified to the minimum extent necessary to render it enforceable, and the remaining provisions shall continue in full force and effect.
      </PolicyP>

      <PolicyH2>14. Licensing Inquiries and Notices</PolicyH2>
      <PolicyP>
        Requests for a Written License, and reports of suspected Unauthorized Use, may be directed to <PolicyEmail address='legal@prestonkwei.com' />, identifying the Proprietary Materials concerned and the intended or observed use. We may grant, condition, or decline any request in our sole and absolute discretion. No request, response, negotiation, or other communication authorizes any Use unless and until a Written License has been executed by Preston Kwei.
      </PolicyP>
    </PolicyLayout>
  )
}

export default ProprietarySoftware
