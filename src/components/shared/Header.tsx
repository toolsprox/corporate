'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Private Dining', path: '/private-dining' },
  { name: 'About Us', path: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A1128]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold font-serif tracking-wide text-white">
          MASAKALI<span className="text-[#7CFF01]">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} className="text-sm font-semibold text-white/80 hover:text-[#7CFF01] transition-colors uppercase tracking-wider">
              {link.name}
            </Link>
          ))}
          <Link href="/reserve" className="px-6 py-2.5 rounded-full bg-[#7CFF01] text-[#0A1128] font-bold text-sm uppercase tracking-wider hover:bg-white transition-colors shadow-[0_0_15px_rgba(124,255,1,0.3)]">
            Book a Table
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-[#0A1128] border-t border-white/10 p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path} onClick={() => setMobileMenuOpen(false)} className="text-lg font-semibold text-white hover:text-[#7CFF01] uppercase tracking-wider">
              {link.name}
            </Link>
          ))}
          <Link href="/reserve" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-3 rounded-full bg-[#7CFF01] text-[#0A1128] font-bold uppercase tracking-wider">
            Book a Table
          </Link>
        </motion.div>
      )}
    </header>
  )
}
