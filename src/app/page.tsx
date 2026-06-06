'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Star, Clock, MapPin, ChefHat, Sparkles } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-20 px-4 sm:px-8 overflow-hidden">
        
        {/* Floating Abstract Shapes for Glassmorphism depth */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#7CFF01] rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-[#064E3B] rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel w-fit">
              <Sparkles className="w-4 h-4 text-[#064E3B]" />
              <span className="text-xs font-bold tracking-widest uppercase text-[#064E3B]">Experience Masakali</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-bold text-[#064E3B] leading-[1.1] tracking-tight">
              Indian<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#064E3B] to-[#7CFF01]">Elegance.</span>
            </h1>
            
            <p className="text-lg text-[#064E3B]/70 max-w-lg leading-relaxed">
              A modern interpretation of pan-Indian cuisine, serving authentic flavors with contemporary elegance in the heart of London.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link 
                href="/reservations"
                className="px-8 py-4 rounded-full bg-[#064E3B] text-white font-bold uppercase tracking-widest hover:bg-[#7CFF01] hover:text-[#064E3B] hover:-translate-y-1 transition-all shadow-[0_10px_30px_rgba(6,78,59,0.3)] hover:shadow-[0_10px_40px_rgba(124,255,1,0.4)] flex items-center gap-2"
              >
                Book a Table <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/menu"
                className="px-8 py-4 rounded-full glass-panel text-[#064E3B] font-bold uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2"
              >
                View Menu
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-[#064E3B]/10">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-[#064E3B]/10 flex items-center justify-center text-[#064E3B] font-bold text-xs">
                    VIP
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#064E3B]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-[#064E3B]/60 mt-1 font-medium">Join 500+ members on Loyaltable</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full rounded-[2rem] overflow-hidden glass-panel p-4 hidden lg:block"
          >
            <div className="absolute inset-0 bg-[#064E3B]/5 mix-blend-overlay z-10"></div>
            {/* Placeholder for dynamic food image */}
            <div className="w-full h-full bg-gradient-to-br from-[#064E3B]/20 to-[#7CFF01]/20 rounded-[1.5rem] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
            </div>
            
            {/* Floating Info Card */}
            <div className="absolute bottom-10 -left-10 z-20 glass-panel p-6 rounded-2xl max-w-xs shadow-2xl animate-float">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#064E3B] text-white">
                  <ChefHat className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#064E3B] text-lg">Chef's Special</h3>
                  <p className="text-sm text-[#064E3B]/70 mt-1">Tandoori Lamb Chops with mint reduction</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 px-4 sm:px-8 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Opening Hours",
              desc: "Open Daily from 12pm to 11pm. Late night dining available on weekends."
            },
            {
              icon: <MapPin className="w-8 h-8" />,
              title: "Location",
              desc: "15 Berkeley Square, Mayfair, London W1J 6EG."
            },
            {
              icon: <Star className="w-8 h-8" />,
              title: "Loyaltable",
              desc: "Join our exclusive rewards program for priority booking and secret menus."
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel p-10 rounded-[2rem] flex flex-col items-center text-center group hover:bg-white/60 transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#064E3B]/5 flex items-center justify-center text-[#064E3B] mb-6 group-hover:bg-[#7CFF01] group-hover:text-[#064E3B] transition-colors group-hover:scale-110 duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-[#064E3B] mb-3">{item.title}</h3>
              <p className="text-[#064E3B]/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  )
}
