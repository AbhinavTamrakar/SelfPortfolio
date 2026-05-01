'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Syne } from 'next/font/google'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

const syne = Syne({ subsets: ['latin'], weight: '700' })

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 flex justify-between items-center px-6 md:px-16 py-5">

      <Link href="/" className={`text-2xl text-blue-300 ${syne.className}`}>
        Abhinav Tamrakar
      </Link>

      <div className="ml-auto flex items-center gap-4">
        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 text-sm">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`transition font-medium ${
                  pathname === href
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                    : 'text-white hover:text-blue-400'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger - mobile only */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <ul className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center gap-4 px-6 py-6 z-50 md:hidden">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`transition font-medium ${
                  pathname === href
                    ? 'text-blue-500 font-bold'
                    : 'text-gray-800 hover:text-blue-500'
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a href="https://wa.me/9779840356245" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              WhatsApp
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}