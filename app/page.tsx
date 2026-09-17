import Link from 'next/link'
import { PolicyEmail } from '@/components/PolicyContent'

const documents = [
  {
    href: '/policies/tos',
    title: 'Terms of Service',
    description: 'The binding agreement governing your access to and use of every site and application we operate.',
  },
  {
    href: '/policies/privacy',
    title: 'Privacy Policy',
    description: 'What information we collect, how we use and disclose it, and the rights available to you.',
  },
  {
    href: '/policies/cookies',
    title: 'Cookie Policy',
    description: 'The cookies and tracking technologies we deploy and how you can manage them.',
  },
  {
    href: '/other/license',
    title: 'Code Licensing',
    description: 'The restrictive license terms that apply to our software and source code.',
  },
  {
    href: '/policies/sms',
    title: 'Text Messaging Terms',
    description: 'How text messages from our messaging number are used, how to opt in, and how to opt out.',
  },
  {
    href: '/other/domains',
    title: 'Our Domains',
    description: 'Every domain owned and operated under the PrestonKwei.com suite of applications.',
  },
]

export default function Home() {
  return (
    <>
      <section className='shell pt-16 md:pt-24 pb-14 md:pb-20'>
        <p className='text-xs font-semibold uppercase tracking-[0.4em] text-accent'>PrestonKwei.com</p>
        <h1 className='mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-white'>Legal</h1>
        <p className='mt-6 max-w-2xl font-source text-base md:text-lg leading-relaxed text-zinc-400 prose-legal'>
          By accessing or using any part of PrestonKwei.com or its suite of applications, you acknowledge that you have read, understood, and agree to be bound by the documents below, collectively the &quot;Terms.&quot;
        </p>
      </section>

      <div className='border-t border-edge'>
        {documents.map((doc, index) => (
          <Link key={doc.href} href={doc.href} className='group block border-b border-edge transition-colors duration-150 hover:bg-white/[0.03]'>
            <div className='shell flex items-center justify-between gap-6 py-7 md:py-8'>
              <div className='flex items-baseline gap-4 md:gap-8 min-w-0'>
                <span className='w-5 shrink-0 select-none font-mono text-xs tabular-nums text-zinc-600'>{String(index + 1).padStart(2, '0')}</span>
                <span className='min-w-0 transition-transform duration-200 group-hover:translate-x-1.5'>
                  <span className='block text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-white'>{doc.title}</span>
                  <span className='mt-2.5 block max-w-xl font-source text-sm md:text-base leading-relaxed text-zinc-500'>{doc.description}</span>
                </span>
              </div>
              <i className='bi bi-arrow-right shrink-0 text-base md:text-lg text-zinc-600 transition-all duration-200 group-hover:text-white group-hover:translate-x-0.5' aria-hidden='true' />
            </div>
          </Link>
        ))}
      </div>

      <section className='shell py-14 md:py-20'>
        <p className='font-source text-sm md:text-base leading-relaxed text-zinc-500'>
          Questions about these Terms may be directed to <PolicyEmail address='legal@prestonkwei.com' /> or (855) 681-5573.
        </p>
      </section>
    </>
  )
}
