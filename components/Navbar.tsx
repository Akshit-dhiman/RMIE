'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-[var(--primary)] tracking-tighter">
              TCH<span className="text-[var(--accent)]">.</span>ENTERPRISES
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-[var(--primary)] hover:text-[var(--accent)] font-medium text-sm transition-colors tracking-wide">
              HOME
            </Link>
            <Link href="/about" className="text-[var(--primary)] hover:text-[var(--accent)] font-medium text-sm transition-colors tracking-wide">
              COMPANY
            </Link>
            <Link href="/products" className="text-[var(--primary)] hover:text-[var(--accent)] font-medium text-sm transition-colors tracking-wide">
              PRODUCTS
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="bg-[var(--accent)] text-white px-6 py-2.5 rounded-[4px] font-bold text-sm tracking-wide hover:bg-[#B91C22] transition-colors"
            >
              REQUEST QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--primary)]"
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200 bg-white absolute top-20 left-0 w-full shadow-lg z-50">
            <Link
              href="/"
              className="block px-6 py-3 text-[var(--primary)] hover:bg-gray-50 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="block px-6 py-3 text-[var(--primary)] hover:bg-gray-50 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              COMPANY
            </Link>
            <Link
              href="/products"
              className="block px-6 py-3 text-[var(--primary)] hover:bg-gray-50 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              PRODUCTS
            </Link>
            <Link
              href="/contact"
              className="block px-6 py-3 text-[var(--accent)] font-bold"
              onClick={() => setMobileMenuOpen(false)}
            >
              REQUEST QUOTE
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
