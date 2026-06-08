'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarHeart, ArrowRight, Users, Sparkles, Cake, CheckCircle2, Star } from 'lucide-react'
import PulseCTA from '@/components/shared/PulseCTA'

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
            The London branch of Masakali offers a vibrant dining experience where authentic Indian flavours meet contemporary culinary creativity. The perfect venue for large groups seeking the best Indian food in the city.
          </p>

          <div className="flex gap-6 mt-4">
            <PulseCTA href="/reserve?segment=celebrations" className="group relative bg-[#0F0F0F] text-white font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(124,255,1,0.3)] transition-all">
              <span className="relative z-10 flex items-center">
                Check Availability <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#5CB800] to-[#7CFF01] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black font-bold z-10">
                Check Availability <ArrowRight className="w-5 h-5 ml-2 translate-x-1" />
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
        <div className="md:hidden flex items-center justify-end mt-8 mb-[-2rem] text-[#7CFF01] font-bold text-xs uppercase tracking-widest animate-pulse relative z-20">
          Swipe <ArrowRight className="w-3 h-3 ml-1" />
        </div>
        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 mt-16 text-left relative overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="snap-center shrink-0 w-[85vw] md:w-auto group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-black/5 relative overflow-hidden"
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
            className="snap-center shrink-0 w-[85vw] md:w-auto group bg-white p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all border border-black/5 relative overflow-hidden"
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
            className="snap-center shrink-0 w-[85vw] md:w-auto group bg-[#0F0F0F] text-white p-12 rounded-[3rem] shadow-xl hover:shadow-[0_20px_40px_rgba(124,255,1,0.2)] transition-all relative overflow-hidden flex flex-col justify-between"
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
              <div className="flex gap-6 mt-4">
                <PulseCTA href="/reserve?segment=celebrations" className="group relative bg-[#0F0F0F] text-white font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(124,255,1,0.3)] transition-all">
                  <span className="relative z-10 flex items-center">
                    Check Availability <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#5CB800] to-[#7CFF01] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black font-bold z-10">
                    Check Availability <ArrowRight className="w-5 h-5 ml-2 translate-x-1" />
                  </span>
                </PulseCTA>
              </div>
            </div>
          </motion.div>
        </div>
      </div>




      {/* --- SOCIAL PROOF --- */}
      <section className="py-20 bg-white relative z-10 border-y border-black/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#5CB800] text-[#5CB800]" />)}
          </div>
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">"The absolute best place in London to celebrate!"</h3>
          <p className="text-black/60 italic text-lg mb-4">"We booked a table for 15 for my husband's 40th birthday. The staff were incredibly accommodating, the food came out hot and all at once, and the atmosphere was electric. Highly recommend!"</p>
          <p className="font-bold text-sm uppercase tracking-widest text-black/40">— Sarah Jenkins, Google Reviews</p>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#0F0F0F]">Plan Your Celebration</h2>
        <p className="text-xl text-black/60 mb-10">Weekends fill up quickly. Secure your large group booking today to avoid disappointment.</p>
        <Link href="/reserve?segment=celebrations" className="inline-flex items-center bg-[#0F0F0F] text-white font-bold text-lg px-12 py-5 rounded-2xl hover:bg-[#7CFF01] hover:text-black transition-all shadow-xl group">
          Book Your Event <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  )
}
