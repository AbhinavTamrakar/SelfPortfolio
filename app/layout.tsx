import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Syne } from 'next/font/google'
import ScrollToTop from './components/ScrollTop'

const syne = Syne({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
  title: 'Abhinav Tamrakar - Frontend Developer',
  description: 'I design and build clean, performant digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${syne.className}`}>
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}