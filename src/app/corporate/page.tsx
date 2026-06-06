'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Briefcase, ArrowRight, CheckCircle2, ShieldCheck, GlassWater } from 'lucide-react'
import { useRef } from 'react'

export default function CorporatePage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const listVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-[#0F0F0F] text-white relative overflow-hidden font-sans pt-32 pb-16">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.05] pointer-events-none z-0"
      />
      
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-[#5CB800] rounded-full blur-[120px] opacity-[0.05] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div style={{ y }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-[#7CFF01]/10 text-[#7CFF01] rounded-full px-5 py-2 mb-8 border border-[#7CFF01]/20 backdrop-blur-md"
            >
              <Briefcase className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Corporate Dining</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight"
            >
              Impress Your Clients. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CFF01] to-white">Seal the Deal.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-white/60 text-xl mb-10 leading-relaxed"
            >
              Masakali London offers the ultimate setting for business lunches and corporate dinners. With private tables, discreet service, and London's best Indian cuisine.
            </motion.p>
            
            <motion.div variants={listVariants} initial="hidden" animate="show" className="space-y-6 mb-12">
              {[
                "Dedicated Corporate Packages", 
                "Private & Semi-Private Dining Areas", 
                "Expedited Lunch Menus for Busy Schedules"
              ].map((text, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center text-white/80 group">
                  <div className="p-2 bg-[#7CFF01]/10 rounded-full mr-4 group-hover:bg-[#7CFF01]/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#7CFF01]" />
                  </div>
                  <span className="text-lg">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex gap-4">
              <Link href="/reserve?segment=corporate" className="group relative bg-[#7CFF01] text-black font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(124,255,1,0.2)] hover:shadow-[0_20px_40px_rgba(124,255,1,0.4)] transition-all">
                <span className="relative z-10 flex items-center">
                  Book Corporate Table <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black font-bold z-10">
                  Book Corporate Table <ArrowRight className="w-5 h-5 ml-2 translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[600px] w-full flex items-center justify-center group"
          >
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 50, ease: "linear" }} className="w-[90%] h-[90%] relative z-10 origin-center filter drop-shadow-[0_30px_40px_rgba(124,255,1,0.15)] group-hover:scale-105 transition-transform duration-700">
              <div className="smoke-container">
                <div className="smoke"></div>
                <div className="smoke"></div>
                <div className="smoke"></div>
                <div className="smoke"></div>
              </div>
              <Image src="/images/hero_bbq_chicken.png" alt="Signature Corporate Dish" fill className="object-contain mix-blend-screen opacity-90" priority />
            </motion.div>
            
            {/* Floating Glass Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 right-4 z-20 glass-card-dark p-6 rounded-3xl border border-[#7CFF01]/20 backdrop-blur-xl shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#7CFF01]/20 rounded-full flex items-center justify-center border border-[#7CFF01]/30 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#7CFF01]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white mb-1">Corporate Accounts</h3>
                  <p className="text-white/60 text-xs">Set up a corporate tab for seamless, monthly billing.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
