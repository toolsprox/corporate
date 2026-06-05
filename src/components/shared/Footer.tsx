import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A1128] border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="text-3xl font-bold font-serif tracking-wide text-white mb-4 block">
            MASAKALI<span className="text-[#7CFF01]">.</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6">
            Elevated Indian cuisine serving the vibrant flavors of the subcontinent in the heart of London.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-[#7CFF01] hover:text-black transition-colors">
              <span className="text-xs font-bold">IG</span>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/80 hover:bg-[#7CFF01] hover:text-black transition-colors">
              <span className="text-xs font-bold">FB</span>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Explore</h4>
          <ul className="space-y-3">
            {['Home', 'Menu', 'Private Dining', 'About Us', 'Reserve a Table'].map(link => (
              <li key={link}>
                <Link href={link === 'Home' ? '/' : `/${link.toLowerCase().replace(/ /g, '-')}`} className="text-white/60 hover:text-[#7CFF01] transition-colors text-sm">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin className="w-5 h-5 text-[#7CFF01] shrink-0" />
              <span>48 Stanhope St<br/>London, NW1 3EX<br/>United Kingdom</span>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Phone className="w-4 h-4 text-[#7CFF01] shrink-0" />
              <span>+44 207 419 9999</span>
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Mail className="w-4 h-4 text-[#7CFF01] shrink-0" />
              <span>reservations@masakali.co.uk</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-sm">Hours</h4>
          <ul className="space-y-3 text-white/60 text-sm">
            <li className="flex justify-between">
              <span>Mon - Thu</span>
              <span className="text-white">5:00 PM - 10:30 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Fri - Sun</span>
              <span className="text-white">12:00 PM - 11:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/40 text-xs text-center md:text-left">
          &copy; {new Date().getFullYear()} Masakali London. All rights reserved.
        </p>
        <div className="flex gap-4 text-xs text-white/40">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
