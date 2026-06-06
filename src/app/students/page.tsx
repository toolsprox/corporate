'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { GraduationCap, ArrowRight, MapPin, Star, Clock, Zap } from 'lucide-react'
import { useRef } from 'react'

export default function StudentsPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] text-[#0F0F0F] relative overflow-hidden font-sans pt-32 pb-16">
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.10] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <motion.div 
          style={{ y }}
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-24 max-w-4xl mx-auto"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-[#7CFF01]/10 text-[#5CB800] rounded-full px-5 py-2 mb-8 border border-[#7CFF01]/20 cursor-pointer"
          >
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Student Exclusive</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            Premium Indian Dining, <br/>
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#5CB800] to-[#7CFF01]">With 15% Off.</span>
              <motion.span initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.5, duration: 0.8 }} className="absolute bottom-2 left-0 h-4 bg-[#7CFF01]/20 -z-10" />
            </span>
          </h1>
          
          <p className="text-xl text-black/60 mb-10 leading-relaxed max-w-2xl mx-auto">
            Looking for an affordable Indian restaurant in London without compromising on quality? Show your valid student ID and unlock an exclusive 15% discount for you and your mates.
          </p>
          
          <div className="flex justify-center gap-6 mb-16">
            <Link href="/reserve?segment=student" className="group relative bg-[#0F0F0F] text-white font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(124,255,1,0.3)] transition-all">
              <span className="relative z-10 flex items-center">
                Claim 15% Off Table <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5CB800] to-[#7CFF01] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black font-bold z-10">
                Claim 15% Off Table <ArrowRight className="w-5 h-5 ml-2 translate-x-1" />
              </span>
            </Link>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image src="/images/students_dining.png" alt="Students enjoying modern Indian street food" fill className="object-cover hover:scale-105 transition-transform duration-[2s]" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent -z-10 hidden md:block"></div>
          
          {[
            { icon: Star, title: "Top Rated for Groups", desc: "Spacious tables and a vibrant atmosphere, perfect for societies and large friend groups." },
            { icon: MapPin, title: "Central Location", desc: "Located right near major university campuses in Kings Cross and Euston. Easy to get to." },
            { icon: Clock, title: "Late Night Eats", desc: "Open late Thursday through Sunday to satisfy those post-library or pre-night-out cravings." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#7CFF01]/30 border border-black/5 transition-all relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-[#7CFF01]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#7CFF01] group-hover:scale-110 transition-all duration-300 transform group-hover:rotate-6">
                <feature.icon className="w-8 h-8 text-[#5CB800] group-hover:text-black transition-colors" />
              </div>
              <h3 className="font-serif font-bold text-2xl mb-4 group-hover:text-[#5CB800] transition-colors">{feature.title}</h3>
              <p className="text-black/60 text-base leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  )
}
