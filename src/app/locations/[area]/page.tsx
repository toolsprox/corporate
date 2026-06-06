'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapPin, ArrowRight, Star, Clock, ChefHat } from 'lucide-react'
import { useParams } from 'next/navigation'
import { useRef } from 'react'

export default function LocationPage() {
  const params = useParams()
  const rawArea = params.area as string || 'London'
  const areaName = rawArea.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60 } }
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-[#FDFBF7] text-[#0F0F0F] relative overflow-hidden font-sans pt-32 pb-16">
      {/* Minimal Animated Background */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }} 
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.08] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }} 
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#5CB800] rounded-full blur-[150px] opacity-[0.05] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          style={{ y, opacity }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center mb-24 max-w-4xl mx-auto pt-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white border border-black/5 shadow-sm rounded-full px-5 py-2 mb-8 transform transition-transform hover:scale-105">
            <MapPin className="w-4 h-4 text-[#7CFF01]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#0F0F0F]">Local Dining in {areaName}</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
            The Best Indian Restaurant <br/>Near <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#5CB800] to-[#7CFF01]">
              {areaName}
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute bottom-1 left-0 h-2 bg-[#7CFF01]/30 -z-10"
              />
            </span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-xl text-black/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Looking for authentic, elevated Indian cuisine near {areaName}? Masakali London is just a stone's throw away. Whether you're planning a corporate lunch, a weekend date night, or dinner with the family.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex justify-center gap-4">
            <Link href="/reserve" className="group relative bg-[#0F0F0F] text-white font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(124,255,1,0.2)] transition-all">
              <span className="relative z-10 flex items-center">
                Book Your Table <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5CB800] to-[#7CFF01] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black font-bold z-10">
                Book Your Table <ArrowRight className="w-5 h-5 ml-2 translate-x-1" />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Tailored Segments Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-16 border-t border-black/5 mt-16 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#7CFF01] to-transparent"></div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">Perfect For Any Occasion in {areaName}</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Corporate Dining", desc: `Impress clients or host team lunches with our dedicated packages just minutes from ${areaName}.`, link: "/corporate" },
              { title: "Family & Celebrations", desc: `Large tables and sharing menus available for birthday parties and family gatherings near ${areaName}.`, link: "/celebrations" },
              { title: "Student Discounts", desc: `Studying near ${areaName}? Show your ID for exclusive 15% student pricing on premium Indian dishes.`, link: "/students" }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <Link href={card.link} className="block h-full bg-white p-10 rounded-[2rem] border border-black/5 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#7CFF01]/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#7CFF01]/10 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <h3 className="font-serif font-bold text-2xl mb-4 group-hover:text-[#5CB800] transition-colors relative z-10">{card.title}</h3>
                  <p className="text-black/60 leading-relaxed mb-8 relative z-10">{card.desc}</p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-[#0F0F0F] relative z-10">
                    Explore <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 text-[#7CFF01] transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 bg-[#0F0F0F] rounded-[3rem] p-16 text-white text-center relative overflow-hidden group"
        >
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7CFF01]/20 rounded-full blur-[100px] group-hover:bg-[#7CFF01]/30 transition-colors duration-1000"
           />
           <ChefHat className="w-16 h-16 text-[#7CFF01] mx-auto mb-8 relative z-10" />
           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 relative z-10">Experience Masakali Tonight</h2>
           <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto relative z-10 leading-relaxed">Our master chefs are preparing London's finest Indian cuisine just moments away from {areaName}.</p>
           <Link href="/menu" className="inline-flex bg-white text-[#0F0F0F] font-bold px-10 py-4 rounded-2xl hover:bg-[#7CFF01] hover:scale-105 transition-all shadow-xl relative z-10">
             View Our Tasting Menu
           </Link>
        </motion.div>
      </div>
    </main>
  )
}
