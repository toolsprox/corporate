'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarHeart, ArrowRight, Users, Sparkles, Cake } from 'lucide-react'

export default function CelebrationsPage() {

  return (
    <main className="min-h-screen bg-[#F5F3EC] text-[#0F0F0F] relative overflow-hidden font-sans pt-32 pb-16">
      
      {/* Decorative floating elements */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[10%] w-6 h-6 rounded-full bg-[#7CFF01]/30 blur-sm pointer-events-none" />
      <motion.div animate={{ y: [0, 30, 0], scale: [1, 1.5, 1] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[40%] right-[15%] w-12 h-12 rounded-full bg-[#5CB800]/20 blur-md pointer-events-none" />
      <motion.div animate={{ y: [0, -40, 0], x: [0, 20, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] left-[20%] w-32 h-32 rounded-full bg-orange-400/10 blur-xl pointer-events-none" />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-6 pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring" }}
          className="w-full md:w-[55%] flex flex-col justify-center text-left"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-white text-[#0F0F0F] rounded-full px-5 py-2 mb-8 shadow-sm border border-black/5 cursor-pointer self-start"
          >
            <Cake className="w-4 h-4 text-[#5CB800]" />
            <span className="text-xs font-bold uppercase tracking-widest">Family & Celebrations</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 text-[#0F0F0F] leading-tight tracking-tight">
            Make Every Moment <br/>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CB800] to-[#7CFF01] relative z-10">Unforgettable.</span>
              <motion.span initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 1 }} className="absolute bottom-2 left-0 right-0 h-4 bg-[#7CFF01]/20 -z-10 origin-left" />
            </span>
          </h1>
          
          <p className="text-xl text-black/60 mb-12 max-w-lg leading-relaxed">
            Whether it's a family reunion, a milestone birthday, or a weekend gathering, Masakali London is the perfect venue for large groups seeking the best Indian food in the city.
          </p>
        </motion.div>

        {/* Right Column: Spinning Food */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-[45%] relative flex justify-center items-center mt-12 md:mt-0"
        >
          <div className="w-full max-w-[500px] aspect-square relative flex items-center justify-center">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-[#7CFF01] rounded-full blur-[100px] opacity-10 pointer-events-none scale-110"></div>
            
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 45, ease: "linear" }} className="w-[85%] h-[85%] relative z-10 origin-center filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]">
              <div className="smoke-container">
                <div className="smoke"></div>
                <div className="smoke"></div>
                <div className="smoke"></div>
                <div className="smoke"></div>
              </div>
              <Image src="/images/user_upload_1.png" alt="Signature Sharing Platter" fill className="object-contain" priority />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-left relative">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-black/5 relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-[#F5F3EC] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#7CFF01]/20 transition-all duration-300">
              <Users className="w-8 h-8 text-[#5CB800]" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 group-hover:text-[#5CB800] transition-colors">Spacious Group Seating</h3>
            <p className="text-black/60 text-base leading-relaxed">Comfortably accommodating large families and parties. Reserve large tables in advance so everyone can sit together.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-black/5 relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-[#F5F3EC] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#7CFF01]/20 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-[#5CB800]" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-4 group-hover:text-[#5CB800] transition-colors">Custom Set Menus</h3>
            <p className="text-black/60 text-base leading-relaxed">Take the stress out of ordering for a large group with our curated family-style sharing menus.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="group bg-[#0F0F0F] text-white p-12 rounded-[3rem] shadow-xl hover:shadow-[0_20px_40px_rgba(124,255,1,0.2)] transition-all relative overflow-hidden flex flex-col justify-between"
          >
            <motion.div 
              animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-64 h-64 bg-[#7CFF01] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity duration-500" 
            />
            
            <div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <CalendarHeart className="w-8 h-8 text-[#7CFF01]" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-4 relative z-10">Book Your Event</h3>
              <p className="text-white/60 text-base mb-10 relative z-10">Weekends fill up fast. Secure your large group booking today.</p>
            </div>
            
            <Link href="/reserve?segment=celebrations" className="inline-flex items-center justify-center font-bold bg-[#7CFF01] text-black px-8 py-4 rounded-2xl hover:bg-white transition-colors relative z-10 overflow-hidden w-full group/btn">
              <span className="relative z-10 flex items-center">Check Availability <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" /></span>
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
