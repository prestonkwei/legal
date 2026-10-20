import Link from 'next/link'

const links = [
  { href: '/policies/tos', label: 'Terms' },
  { href: '/policies/privacy', label: 'Privacy' },
]

const Nav = () => {
  return (
    <header className='sticky top-0 z-40 border-b border-edge bg-ink/80 backdrop-blur-md'>
      <div className='shell flex items-center justify-between gap-6 h-14 md:h-16'>
        <Link href='/' className='shrink-0 text-sm font-bold uppercase tracking-tight text-white'>
          PrestonKwei
          <span className='font-medium text-zinc-600'> / Legal</span>
        </Link>

        <nav className='flex items-center gap-5 md:gap-7 text-xs md:text-sm'>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className='hidden sm:block text-zinc-500 hover:text-white transition-colors duration-150'>
              {link.label}
            </Link>
          ))}
          <a href='https://prestonkwei.com' className='group flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors duration-150'>
            prestonkwei.com
            <i className='bi bi-arrow-up-right text-zinc-600 transition-all duration-200 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5' aria-hidden='true' />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Nav
