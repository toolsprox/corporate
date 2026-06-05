'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#7CFF01] shadow-[0_0_10px_#7CFF01] animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-white/80 font-bold">A Michelin-Level Experience</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 leading-[1.1]"
          >
            A Symphony of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CFF01] to-[#5CB800] italic">Indian Flavors.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Immerse yourself in a culinary journey through the royal kitchens of India. Located in the heart of London.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="/reserve" className="px-8 py-4 rounded-full bg-[#7CFF01] text-[#0A1128] font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(124,255,1,0.3)] flex items-center justify-center gap-2 group">
              Reserve a Table <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/menu" className="px-8 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-wider hover:bg-white/5 transition-all flex items-center justify-center">
              Explore the Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Dish Section */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-[#080d1f]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden glass-card flex items-center justify-center">
            {/* Placeholder for Dish Image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7CFF01]/10 to-transparent"></div>
            <div className="w-64 h-64 rounded-full bg-white/5 animate-pulse flex items-center justify-center">
               <span className="text-white/20 text-sm tracking-widest uppercase">Signature Dish</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              The Legend of <br/>
              <span className="text-[#7CFF01] italic">Nalli Nihari.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 text-lg">
              Slow-cooked for exactly 24 hours, our signature Nalli Nihari is a testament to patience and tradition. Rich, aromatic, and melting off the bone, it is an experience that commands the table.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 text-[#7CFF01]">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-bold text-white">Chef's Special</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ambiance/Location Banner */}
      <section className="py-24 relative overflow-hidden bg-[#0A1128]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#7CFF01]/10 text-[#7CFF01] mb-6">
            <MapPin className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            A Modern Sanctuary.
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg">
            Nestled in the vibrant streets of Camden, Masakali provides a breathtaking escape. Step inside and let our luxurious ambiance transport you.
          </p>
          <Link href="/about" className="inline-flex items-center gap-2 text-[#7CFF01] font-bold tracking-widest uppercase hover:text-white transition-colors">
            Discover Our Story <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
