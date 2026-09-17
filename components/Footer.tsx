import Link from 'next/link'

const links = [
  { href: '/policies/tos', label: 'Terms of Service' },
  { href: '/policies/privacy', label: 'Privacy Policy' },
  { href: '/policies/cookies', label: 'Cookie Policy' },
  { href: '/other/license', label: 'Code Licensing' },
  { href: '/policies/sms', label: 'Text Messaging Terms' },
  { href: '/other/domains', label: 'Our Domains' },
]

const Footer = () => {
  return (
    <footer className='mt-24 border-t border-edge'>
      <div className='shell py-12 md:py-16'>
        <div className='flex flex-col gap-10 md:flex-row md:items-start md:justify-between'>
          <div>
            <p className='text-lg md:text-xl font-bold uppercase tracking-tight text-white'>PrestonKwei.com</p>
            <p className='mt-2 font-source text-sm leading-6 text-zinc-500'>
              <a href='mailto:legal@prestonkwei.com' className='hover:text-white transition-colors duration-150'>
                legal@prestonkwei.com
              </a>
              <br />
              (855) 681-5573
              <br />
              PO Box 20987, Oakland, CA 94620
            </p>
          </div>

          <nav className='flex flex-col gap-2.5 text-sm'>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className='text-zinc-500 hover:text-white transition-colors duration-150'>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className='mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-edge/60 pt-6'>
          <p className='font-mono text-[0.7rem] uppercase tracking-widest text-zinc-700'>&copy; {new Date().getFullYear()} PrestonKwei.com</p>
          <a href='https://prestonkwei.com' className='group flex items-center gap-1.5 text-xs text-zinc-600 hover:text-white transition-colors duration-150'>
            Back to prestonkwei.com
            <i className='bi bi-arrow-up-right transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5' aria-hidden='true' />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
