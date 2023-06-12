import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { twMerge } from 'tailwind-merge'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'superunion',
  description: 'the official website of superunion',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, 'flex flex-col')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
