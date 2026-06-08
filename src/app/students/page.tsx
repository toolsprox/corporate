'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { GraduationCap, ArrowRight, MapPin, Star, Clock, Zap } from 'lucide-react'
import PulseCTA from '@/components/shared/PulseCTA'

export default function StudentsPage() {

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F0F0F] relative overflow-hidden font-sans pt-32 pb-16">
      <motion.div 
        animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.10] pointer-events-none z-0"
      />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center justify-between gap-6 pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, type: "spring" }}
          className="w-full md:w-[55%] flex flex-col justify-center text-left"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center space-x-2 bg-[#7CFF01]/10 text-[#5CB800] rounded-full px-5 py-2 mb-8 border border-[#7CFF01]/20 cursor-pointer self-start"
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
          
          <p className="text-xl text-black/60 mb-10 leading-relaxed max-w-lg">
            The London branch of Masakali offers a vibrant dining experience where authentic Indian flavours meet contemporary culinary creativity. Show your valid student ID and unlock an exclusive 15% discount.
          </p>
          
          <div className="flex gap-6 mt-4">
            <PulseCTA href="/reserve?segment=student" className="group relative bg-[#0F0F0F] text-white font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(124,255,1,0.3)] transition-all">
              <span className="relative z-10 flex items-center">
                Claim 15% Off Table <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5CB800] to-[#7CFF01] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black font-bold z-10">
                Claim 15% Off Table <ArrowRight className="w-5 h-5 ml-2 translate-x-1" />
              </span>
            </PulseCTA>
          </div>
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
            
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="w-[85%] h-[85%] relative z-10 origin-center filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]">
              <div className="smoke-container">
                <div className="smoke"></div>
                <div className="smoke"></div>
                <div className="smoke"></div>
                <div className="smoke"></div>
              </div>
              <Image src="/images/user_upload_1.png" alt="Signature Student Dish" fill className="object-contain" priority />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:hidden flex items-center justify-end mt-8 mb-[-2rem] text-[#7CFF01] font-bold text-xs uppercase tracking-widest animate-pulse relative z-20">
          Swipe <ArrowRight className="w-3 h-3 ml-1" />
        </div>
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 mt-16 relative overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
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
              className="snap-center shrink-0 w-[85vw] md:w-auto group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#7CFF01]/30 border border-black/5 transition-all relative overflow-hidden"
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


      {/* --- OUR STORY (Authentic Copy) --- */}
      <section className="py-24 bg-[#7CFF01]/5 relative z-10 border-y border-black/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-[#0F0F0F]">Masakali: Where Indian Flavours Soar</h2>
          <p className="text-xl text-black/70 mb-8 leading-relaxed">
            Inspired by the iconic Bollywood song Masakali, our name reflects the freedom, joy, and spirited energy we bring to every dining experience. Rooted in India’s timeless culinary traditions, our kitchen celebrates regional diversity while adding modern artistry.
          </p>
          <p className="text-lg text-black/60 font-medium">
            From fragrant biryanis and rich curries to sizzling tandoor favourites, our menu delivers the true taste of India in every bite.
          </p>
        </div>
      </section>

      {/* --- HOW IT WORKS --- */}
      <section className="py-24 bg-[#0F0F0F] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-16">How to claim your discount</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#7CFF01] text-black font-bold text-2xl flex items-center justify-center mb-6">1</div>
              <h3 className="font-bold text-xl mb-2">Book a Table</h3>
              <p className="text-white/60">Reserve your spot online using the dedicated student booking link.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#7CFF01] text-black font-bold text-2xl flex items-center justify-center mb-6">2</div>
              <h3 className="font-bold text-xl mb-2">Show Your ID</h3>
              <p className="text-white/60">Flash your valid university or college student ID card to your server.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#7CFF01] text-black font-bold text-2xl flex items-center justify-center mb-6">3</div>
              <h3 className="font-bold text-xl mb-2">Enjoy 15% Off</h3>
              <p className="text-white/60">The discount is automatically applied to your entire food bill.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#0F0F0F]">Grab a Table Tonight</h2>
        <p className="text-xl text-black/60 mb-10">Don't miss out on London's best Indian dining at student-friendly prices.</p>
        <Link href="/reserve?segment=student" className="inline-flex items-center bg-[#0F0F0F] text-white font-bold text-lg px-12 py-5 rounded-2xl hover:bg-[#7CFF01] hover:text-black transition-all shadow-xl group">
          Book Now & Save 15% <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  )
}
