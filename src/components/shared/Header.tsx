'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'Reservations', path: '/reservations' },
  { name: 'Loyaltable', path: '/loyaltable' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="bg-[#7CFF01] text-[#0F0F0F] text-xs font-bold uppercase tracking-widest py-2 px-4 text-center z-[60] fixed top-0 w-full flex items-center justify-center gap-4 h-[36px]">
        <span>✨ Experience our new Summer Tasting Menu</span>
        <Link href="/menu" className="underline hover:no-underline font-black">View Menu</Link>
      </div>
      <header 
        className={`fixed top-[36px] left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-8 py-4 ${
          isScrolled ? 'py-2' : 'py-6'
        }`}
      >
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-300 ${isScrolled ? 'glass-floating' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <Link href="/" className="flex flex-col z-50">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-widest text-foreground uppercase">
              Masakali
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] text-[#7CFF01] uppercase font-bold italic -mt-1">London.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.path}
                className="text-sm font-bold tracking-wider uppercase text-[#0F0F0F]/80 hover:text-[#0F0F0F] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7CFF01] transition-all group-hover:w-full"></span>
              </Link>
            ))}
            <Link 
              href="/reservations"
              className="px-6 py-2.5 rounded-full bg-[#0F0F0F] text-white text-sm font-bold uppercase tracking-widest hover:bg-[#7CFF01] hover:text-[#0F0F0F] transition-all shadow-[0_4px_14px_rgba(6,78,59,0.3)] hover:shadow-[0_4px_20px_rgba(124,255,1,0.4)]"
            >
              Book Table
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-10 text-[#0F0F0F] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-4 right-4 mt-2 p-6 glass-floating rounded-2xl flex flex-col gap-6 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl font-serif font-bold text-[#0F0F0F]"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/reservations"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center py-4 rounded-xl bg-[#0F0F0F] text-white font-bold uppercase tracking-widest mt-4"
          >
            Book a Table
          </Link>
        </motion.div>
      )}
    </header>
    </>
  )
}
