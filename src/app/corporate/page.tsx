'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Briefcase, ArrowRight, CheckCircle2, ShieldCheck, GlassWater } from 'lucide-react'
import PulseCTA from '@/components/shared/PulseCTA'

export default function CorporatePage() {
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
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F0F0F] relative overflow-hidden font-sans pt-32 pb-16">
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-[10%] left-[-10%] w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.05] pointer-events-none z-0"
      />
      
      <div className="absolute bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-[#5CB800] rounded-full blur-[120px] opacity-[0.05] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-[#7CFF01]/10 text-[#5CB800] rounded-full px-5 py-2 mb-8 border border-[#7CFF01]/20 cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Corporate Dining</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight"
            >
              Impress Your Clients. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CB800] to-[#7CFF01]">Seal the Deal.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              className="text-black/60 text-xl mb-10 leading-relaxed"
            >
              The London branch of Masakali offers a vibrant dining experience where authentic Indian flavours meet contemporary culinary creativity. The ultimate setting for business lunches and corporate dinners.
            </motion.p>
            
            <motion.div variants={listVariants} initial="hidden" animate="show" className="space-y-6 mb-12">
              {[
                "Dedicated Corporate Packages", 
                "Private & Semi-Private Dining Areas", 
                "Expedited Lunch Menus for Busy Schedules"
              ].map((text, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center text-black/80 group">
                  <div className="p-2 bg-[#7CFF01]/10 rounded-full mr-4 group-hover:bg-[#7CFF01]/20 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-[#5CB800]" />
                  </div>
                  <span className="text-lg">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex gap-4 mt-4">
              <PulseCTA href="/reserve?segment=corporate" className="group relative bg-[#0F0F0F] text-white font-bold px-10 py-5 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_40px_rgba(124,255,1,0.3)] transition-all">
                <span className="relative z-10 flex items-center">
                  Book Corporate Table <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5CB800] to-[#7CFF01] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-black font-bold z-10">
                  Book Corporate Table <ArrowRight className="w-5 h-5 ml-2 translate-x-1" />
                </span>
              </PulseCTA>
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
              <Image src="/images/user_upload_1.png" alt="Signature Corporate Dish" fill className="object-contain opacity-90" priority />
            </motion.div>
            
            {/* Floating Glass Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-4 left-4 right-4 z-20 bg-white p-6 rounded-3xl border border-black/5 shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#7CFF01]/10 rounded-full flex items-center justify-center border border-[#7CFF01]/20 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-[#5CB800]" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0F0F0F] mb-1">Corporate Accounts</h3>
                  <p className="text-black/60 text-xs">Set up a corporate tab for seamless, monthly billing.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* --- OUR STORY (Authentic Copy) --- */}
      <section className="py-24 bg-[#7CFF01]/5 relative z-10 border-t border-black/5 mt-16">
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

      {/* --- PRIVATE DINING SPACES --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 border-t border-black/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0F0F0F]">Private Dining & Events</h2>
          <p className="text-black/60 text-lg">Tailored spaces for intimate meetings or full-scale corporate parties.</p>
        </div>
        
        <div className="md:hidden flex items-center justify-end mt-8 mb-[-2rem] text-[#7CFF01] font-bold text-xs uppercase tracking-widest animate-pulse relative z-20">
          Swipe <ArrowRight className="w-3 h-3 ml-1" />
        </div>
        <div className="flex md:grid md:grid-cols-2 gap-6 md:gap-8 mt-16 relative overflow-x-auto snap-x snap-mandatory pb-8 -mx-4 px-4 md:overflow-visible md:snap-none md:pb-0 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden">
          <motion.div whileHover={{ y: -10 }} className="snap-center shrink-0 w-[85vw] md:w-auto group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-black/5 transition-all">
            <div className="h-48 bg-[#F5F3EC] rounded-2xl mb-6 relative overflow-hidden group-hover:bg-[#7CFF01]/10 transition-colors flex items-center justify-center">
               <ShieldCheck className="w-16 h-16 text-[#5CB800] group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2">The Executive Room</h3>
            <p className="text-black/60 mb-4">Perfect for board meetings and intimate client dinners. Seats up to 12 guests with full privacy and dedicated service.</p>
            <ul className="space-y-2 mb-6 text-sm text-black/80 font-medium">
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7CFF01] mr-2" /> AV Equipment Available</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7CFF01] mr-2" /> Bespoke Tasting Menu</li>
            </ul>
          </motion.div>
          
          <motion.div whileHover={{ y: -10 }} className="snap-center shrink-0 w-[85vw] md:w-auto group bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl border border-black/5 transition-all">
            <div className="h-48 bg-[#F5F3EC] rounded-2xl mb-6 relative overflow-hidden group-hover:bg-[#7CFF01]/10 transition-colors flex items-center justify-center">
               <Briefcase className="w-16 h-16 text-[#5CB800] group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif font-bold text-2xl mb-2">The Main Hall Buyout</h3>
            <p className="text-black/60 mb-4">Host your company milestone or holiday party in our stunning main dining room. Accommodates up to 150 guests.</p>
            <ul className="space-y-2 mb-6 text-sm text-black/80 font-medium">
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7CFF01] mr-2" /> Custom Floor Plans</li>
              <li className="flex items-center"><CheckCircle2 className="w-4 h-4 text-[#7CFF01] mr-2" /> Open Bar Packages</li>
            </ul>
          </motion.div>
        </div>
      </section>



      {/* --- FINAL CTA --- */}
      <section className="py-24 max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-[#0F0F0F]">Secure Your Corporate Booking</h2>
        <p className="text-xl text-black/60 mb-10">Our events team will work with you to craft the perfect itinerary and menu for your clients or team.</p>
        <Link href="/reserve?segment=corporate" className="inline-flex items-center bg-[#0F0F0F] text-white font-bold text-lg px-12 py-5 rounded-2xl hover:bg-[#7CFF01] hover:text-black transition-all shadow-xl group">
          Enquire Now <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </section>
    </main>
  )
}
