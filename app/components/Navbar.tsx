'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Syne } from 'next/font/google'
import { Menu, X, Search } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const syne = Syne({ subsets: ['latin'], weight: '700' })

const searchIndex = [
  { label: 'Home', description: 'Back to homepage', href: '/', page: 'Home' },
  { label: 'About', description: 'Learn about Abhinav', href: '/about', page: 'About' },
  { label: 'Frontend Developer', description: 'Building products from idea to production', href: '/about', page: 'About' },
  { label: 'Freelancing', description: 'Now freelancing and building in public', href: '/about', page: 'About' },
  { label: 'Resume', description: 'View or download resume', href: '/about', page: 'About' },
  { label: 'React', description: 'Frontend skill', href: '/about', page: 'About' },
  { label: 'Next.js', description: 'Frontend skill', href: '/about', page: 'About' },
  { label: 'TypeScript', description: 'Frontend skill', href: '/about', page: 'About' },
  { label: 'Tailwind CSS', description: 'Frontend skill', href: '/about', page: 'About' },
  { label: 'Vue.js', description: 'Frontend skill', href: '/about', page: 'About' },
  { label: 'GitHub Actions', description: 'Infra / Tools skill', href: '/about', page: 'About' },
  { label: 'Vercel', description: 'Infra / Tools skill', href: '/about', page: 'About' },
  { label: 'Cafe Order Management System', description: 'HTML, CSS, JavaScript — 2026', href: 'https://cafechiyahub.vercel.app/', page: 'Work', external: true },
  { label: 'Digital Portfolio Website', description: 'HTML, CSS — 2026', href: 'https://astryxportfolio.vercel.app/', page: 'Work', external: true },
  { label: 'Family First Health Clinic', description: 'HTML, CSS, JavaScript — 2025', href: 'https://familyfirst-homecare.vercel.app/', page: 'Work', external: true },
  { label: 'Work', description: 'View all selected projects', href: '/work', page: 'Work' },
  { label: 'Contact', description: 'Get in touch or send a project inquiry', href: '/contact', page: 'Contact' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ]

  const results = query.trim().length > 0
    ? searchIndex.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
    : []

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false)
        setQuery('')
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    if (isSearchOpen) inputRef.current?.focus()
  }, [isSearchOpen])

  function handleSelect(item: typeof searchIndex[0]) {
    setIsSearchOpen(false)
    setIsMenuOpen(false)
    setQuery('')
    if (item.external) {
      window.open(item.href, '_blank')
    } else {
      router.push(item.href)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 flex justify-between items-center px-6 md:px-16 py-5">

      <Link href="/" className={`text-2xl text-blue-300 ${syne.className}`}>
        Abhinav Tamrakar
      </Link>

      <div className="ml-auto flex items-center gap-4">

        {/* Desktop nav links */}
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

        {/* Search - desktop only */}
        <div ref={searchRef} className="relative hidden md:block">
          {isSearchOpen ? (
            <div className="flex items-center gap-2 bg-gray-900 border border-gray-700 px-3 py-1.5 rounded-md w-70">
              <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent text-white text-sm outline-none w-full placeholder:text-gray-500"
              />
              <button onClick={() => { setIsSearchOpen(false); setQuery('') }}>
                <X className="w-3.5 h-3.5 text-gray-400 hover:text-white transition" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white hover:text-blue-400 transition"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </button>
          )}

          {/* Results dropdown */}
          {isSearchOpen && results.length > 0 && (
            <div className="absolute top-full mt-2 right-0 w-70 bg-gray-900 border border-gray-700 rounded-md overflow-hidden shadow-xl z-50">
              {results.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(item)}
                  className="w-full text-left px-4 py-3 hover:bg-gray-800 transition border-b border-gray-800 last:border-b-0"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">{item.label}</span>
                    <span className="text-[10px] text-blue-400 uppercase tracking-wider">{item.page}</span>
                  </div>
                  <p className="text-gray-400 text-xs mt-0.5">{item.description}</p>
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {isSearchOpen && query.trim().length > 0 && results.length === 0 && (
            <div className="absolute top-full mt-2 right-0 w-70 bg-gray-900 border border-gray-700 rounded-md px-4 py-3 shadow-xl z-50">
              <p className="text-gray-400 text-sm">No results for "<span className="text-white">{query}</span>"</p>
            </div>
          )}
        </div>

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
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center gap-4 px-6 py-6 z-50 md:hidden">

          {/* Mobile search */}
          <div className="w-full">
            <div className="flex items-center gap-2 bg-gray-100 border border-gray-300 px-3 py-2 rounded-md w-full">
              <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent text-gray-800 text-sm outline-none w-full placeholder:text-gray-400"
              />
              {query && (
                <button onClick={() => setQuery('')}>
                  <X className="w-3.5 h-3.5 text-gray-400" />
                </button>
              )}
            </div>

            {results.length > 0 && (
              <div className="mt-2 w-full bg-white border border-gray-200 rounded-md overflow-hidden shadow-md">
                {results.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(item)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition border-b border-gray-100 last:border-b-0"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-900 text-sm font-medium">{item.label}</span>
                      <span className="text-[10px] text-blue-500 uppercase tracking-wider">{item.page}</span>
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5">{item.description}</p>
                  </button>
                ))}
              </div>
            )}

            {query.trim().length > 0 && results.length === 0 && (
              <p className="mt-2 text-sm text-gray-400 text-center">No results for "<span className="text-gray-700">{query}</span>"</p>
            )}
          </div>

          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
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
          ))}

          <a
            href="https://wa.me/9779840356245"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  )
}