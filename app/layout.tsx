import type { Metadata } from 'next'
import { Poppins, Source_Sans_3 } from 'next/font/google'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-source',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Legal - PrestonKwei.com',
    template: '%s | Legal - PrestonKwei.com',
  },
  description: 'Legal policies, terms, and notices governing PrestonKwei.com and its suite of applications.',
  robots: {
    index: false,
    follow: true,
  },
  icons: {
    icon: 'https://cdn.prestonkwei.com/personalwebsitefavicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={`${poppins.variable} ${sourceSans.variable}`}>
      <body className='min-h-screen flex flex-col bg-ink text-zinc-400 antialiased overflow-x-hidden'>
        <Nav />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
