'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, CalendarDays, Users, ArrowRight, ChefHat, MapPin, Wine, CalendarHeart, GlassWater, Music, Quote, Heart, TrendingUp, Sparkles, Phone, ShoppingBag, GraduationCap, Briefcase } from 'lucide-react'

// Mock Data
const occasions = [
  { name: 'Date Night', icon: <Heart className="w-6 h-6" />, desc: 'Intimate setting, low lighting, premium experience.' },
  { name: 'Birthday Celebrations', icon: <CalendarHeart className="w-6 h-6" />, desc: 'Make it unforgettable with our celebration packages.' },
  { name: 'Corporate Events', icon: <Briefcase className="w-6 h-6" />, desc: 'Impress clients in our exclusive private dining spaces.' },
  { name: 'Weekend Gatherings', icon: <GlassWater className="w-6 h-6" />, desc: 'Vibrant atmosphere with signature cocktails.' },
  { name: 'Family Dining', icon: <Users className="w-6 h-6" />, desc: 'A warm and welcoming environment for the whole family.' },
  { name: 'Special Celebrations', icon: <Sparkles className="w-6 h-6" />, desc: 'Perfect for anniversaries, milestones, and life achievements.' },
]

const signatureDishes = [
  { name: 'Murgh Makhani', desc: 'Classic Delhi butter chicken, slow-cooked overnight.', price: '£18.50', image: '/images/hero_bbq_chicken.png', popular: true },
  { name: 'Nalli Nihari', desc: 'Fall-off-the-bone lamb shank in aromatic spices.', price: '£24.00', image: '/images/top_barbecue.png', popular: true },
  { name: 'Dum Pukht Biryani', desc: 'Aromatic basmati & tender lamb sealed with dough.', price: '£21.00', image: '/images/top_pizza.png', popular: false },
]

const reviews = [
  { name: 'James T.', platform: 'Google', text: "The best Indian fine dining experience in London. The ambiance is unmatched, and the Nalli Nihari is life-changing. Highly recommend booking in advance!", rating: 5 },
  { name: 'Sarah M.', platform: 'Tripadvisor', text: "Booked for our anniversary. The staff went above and beyond to make it special. The cocktails are incredibly inventive.", rating: 5 },
  { name: 'David L.', platform: 'Google', text: "Absolutely stunning interior and flawless service. Don't skip the signature curries.", rating: 5 },
]

const galleryFilters = ['All', 'Food', 'Drinks', 'Ambience', 'Events']
const galleryImages = [
  { src: '/images/hero_bbq_chicken.png', category: 'Food' },
  { src: '/images/top_barbecue.png', category: 'Food' },
  { src: '/images/top_pizza.png', category: 'Food' },
  { src: '/images/top_noodles.png', category: 'Food' },
  // Reusing available dummy images for aesthetic
]

export default function Home() {
  const [activeGalleryFilter, setActiveGalleryFilter] = useState('All')

  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#0F0F0F] relative overflow-hidden font-sans">
      
      {/* Background Accents */}
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.10] pointer-events-none z-0"></div>
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-stretch justify-between gap-6 pt-32 pb-16 px-4 md:px-8 max-w-7xl mx-auto z-10">
        
        {/* Left Column: Text & CTAs */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-[55%] flex flex-col justify-center"
        >
          <div className="inline-flex items-center space-x-2 bg-black/5 border border-black/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md self-start shadow-sm">
            <Star className="w-3 h-3 text-[#7CFF01] fill-[#7CFF01]" />
            <span className="text-[10px] text-[#5CB800] font-bold uppercase tracking-widest">London's Premier Indian Dining</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-6 tracking-tight text-[#0F0F0F]">
            Elevated Indian Cuisine.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5CB800] to-[#7CFF01]">Unforgettable Evenings.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-black/60 max-w-lg mb-10 leading-relaxed">
            Experience the royal flavors of India in a breathtaking, modern setting. Book your table tonight and let us craft a flawless culinary journey for you.
          </p>
          
          {/* Primary & Secondary CTAs Above Fold */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/reserve" className="w-full sm:w-auto bg-[#0F0F0F] text-white font-bold text-base px-8 py-4 rounded-2xl hover:bg-[#7CFF01] hover:text-black transition-all shadow-[0_15px_30px_rgba(0,0,0,0.15)] flex items-center justify-center group">
              Reserve Your Table
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/menu" className="w-full sm:w-auto bg-white border border-black/10 text-[#0F0F0F] font-bold text-base px-8 py-4 rounded-2xl hover:bg-black/5 transition-all text-center">
              View Menu
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-black/60">
            <span className="flex items-center"><div className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></div> Tables available for tonight</span>
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
            <div className="absolute inset-0 bg-[#7CFF01] rounded-full blur-[100px] opacity-20 pointer-events-none scale-110"></div>
            
            {/* Spinning Element */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
              className="w-[85%] h-[85%] relative z-10 origin-center filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)]"
            >
              <Image
                src="/images/hero_bbq_chicken.png"
                alt="Signature Masakali Dish"
                fill
                className="object-contain mix-blend-multiply"
                priority
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- EXPERIENCE SHOWCASE (FOMO) --- */}
      <section className="py-24 bg-[#0F0F0F] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">More Than A Meal. <br/><span className="text-[#7CFF01]">An Atmosphere.</span></h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                From the moment you step through our doors, every detail is designed to transport you. Signature cocktails crafted by master mixologists, low ambient lighting, and dishes that tell a story of heritage and passion.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-3xl font-bold text-[#7CFF01] mb-2">10k+</h4>
                  <p className="text-sm text-white/50 uppercase tracking-widest font-bold">Happy Guests</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-[#7CFF01] mb-2">4.9</h4>
                  <p className="text-sm text-white/50 uppercase tracking-widest font-bold">Average Rating</p>
                </div>
              </div>
              <Link href="/reserve" className="inline-flex items-center text-[#7CFF01] font-bold hover:text-white transition-colors group">
                Experience it yourself <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            {/* Visual Collage */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              <div className="bg-white/5 rounded-3xl overflow-hidden relative border border-white/10">
                 <Image src="/images/top_barbecue.png" alt="Atmosphere" fill className="object-cover mix-blend-screen opacity-80" />
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="bg-[#7CFF01]/10 rounded-3xl overflow-hidden relative border border-[#7CFF01]/30 p-6 flex flex-col justify-end">
                  <Wine className="w-8 h-8 text-[#7CFF01] mb-2" />
                  <h3 className="font-bold text-lg">Mixology</h3>
                </div>
                <div className="bg-white/5 rounded-3xl overflow-hidden relative border border-white/10">
                  <Image src="/images/top_pizza.png" alt="Food" fill className="object-cover mix-blend-screen opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- OCCASION-BASED NAVIGATION --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0F0F0F]">What brings you in?</h2>
          <p className="text-black/60 text-lg">Select your occasion so we can tailor the perfect experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occ, idx) => (
            <Link key={idx} href={`/reserve?occasion=${occ.name.toLowerCase().replace(' ', '-')}`} className="group">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.8, type: "spring", bounce: 0.4 }}
                className="glass-card p-8 hover:shadow-deep hover:border-[#7CFF01]/50 transition-all duration-500 cursor-pointer h-full flex flex-col perspective-1000 transform-style-3d hover:-translate-y-2"
              >
                <div className="w-14 h-14 rounded-full bg-[#7CFF01]/10 flex items-center justify-center text-[#5CB800] mb-6 group-hover:scale-110 group-hover:bg-[#7CFF01] group-hover:text-black transition-all">
                  {occ.icon}
                </div>
                <h3 className="font-bold text-xl mb-3 text-[#0F0F0F]">{occ.name}</h3>
                <p className="text-black/50 text-sm flex-1">{occ.desc}</p>
                <span className="text-[#5CB800] font-bold text-sm mt-6 flex items-center group-hover:text-black transition-colors">
                  Plan your visit <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* --- EXCLUSIVE OFFERS & PROGRAMS --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0F0F0F]">Exclusive Offers & Programs</h2>
          <p className="text-black/60 text-lg">Enhance your Masakali experience with our specially curated options.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Student Discount */}
          <div className="glass-card-dark p-8 hover:shadow-deep hover:border-[#7CFF01]/50 transition-all duration-500 group flex flex-col items-start relative overflow-hidden perspective-1000 transform-style-3d hover:-translate-y-2">
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#7CFF01] rounded-full blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity"></div>
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#7CFF01] group-hover:text-black transition-colors relative z-10">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-2xl mb-3 text-white relative z-10">Student Discount</h3>
            <p className="text-white/60 text-sm mb-6 flex-1 relative z-10">Treat yourself to an elevated dining experience without breaking the bank. Show your student ID to claim.</p>
            <Link href="/reserve" className="inline-flex items-center text-xs font-bold uppercase tracking-widest bg-white text-[#0F0F0F] px-4 py-2.5 rounded-lg group-hover:bg-[#7CFF01] transition-colors relative z-10">
              Claim Offer <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Corporate */}
          <div className="glass-card p-8 hover:shadow-deep hover:border-[#7CFF01]/50 transition-all duration-500 group flex flex-col items-start relative overflow-hidden perspective-1000 transform-style-3d hover:-translate-y-2">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#7CFF01] rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="w-12 h-12 rounded-full bg-[#7CFF01]/10 flex items-center justify-center text-[#5CB800] mb-6 group-hover:bg-[#7CFF01] group-hover:text-black transition-colors relative z-10">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-2xl mb-3 text-[#0F0F0F] relative z-10">Corporate Business</h3>
            <p className="text-black/60 text-sm mb-6 flex-1 relative z-10">Looking to host a corporate lunch or impress clients? Discover our tailored corporate packages and private dining.</p>
            <Link href="/private-events" className="inline-flex items-center text-xs font-bold uppercase tracking-widest bg-[#0F0F0F] text-white px-4 py-2.5 rounded-lg group-hover:bg-[#7CFF01] group-hover:text-black transition-colors relative z-10">
              Enquire Now <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- SIGNATURE FOOD SECTION --- */}
      <section className="py-24 bg-[#F5F3EC] relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-[#0F0F0F]">Signature Creations</h2>
              <p className="text-black/60 max-w-md">Our most highly requested dishes, crafted with precision.</p>
            </div>
            <Link href="/menu" className="hidden md:flex bg-white border border-black/10 px-6 py-3 rounded-full font-bold text-sm hover:bg-black/5 transition-colors">
              Explore Full Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="glass-card p-6 hover:shadow-deep hover:border-[#7CFF01]/50 transition-all duration-500 group relative perspective-1000 transform-style-3d hover:-translate-y-2"
              >
                {item.popular && (
                  <div className="absolute top-4 right-4 bg-[#7CFF01] text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-20 flex items-center shadow-lg">
                    <TrendingUp className="w-3 h-3 mr-1" /> Most Loved
                  </div>
                )}
                <div className="relative h-48 w-full rounded-2xl bg-[#FDFBF7] mb-6 flex items-center justify-center overflow-visible group-hover:bg-[#7CFF01]/5 transition-colors">
                   <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 50, ease: "linear" }} className="w-40 h-40 relative">
                    <Image src={item.image} alt={item.name} fill className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                   </motion.div>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-black/50 text-sm mb-6">{item.desc}</p>
                <div className="flex justify-between items-center border-t border-black/5 pt-4">
                  <span className="font-bold text-lg">{item.price}</span>
                  <Link href="/reserve" className="text-[#5CB800] font-bold text-sm hover:text-black transition-colors flex items-center">
                    Book to taste <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOCIAL PROOF --- */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-center text-3xl font-serif font-bold mb-12">Loved by Our Guests</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.8, type: "spring" }}
              className="glass-card p-8 hover:shadow-deep transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex text-[#7CFF01] mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <p className="text-black/70 mb-6 italic">"{review.text}"</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-bold">{review.name}</span>
                <span className="text-xs text-black/40 font-bold uppercase tracking-widest">{review.platform}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- EVENTS & EXPERIENCES --- */}
      <section className="py-24 bg-[#0F0F0F] text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#111] to-[#1a1a1a] rounded-[2.5rem] p-10 md:p-16 border border-[#222]">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="inline-flex items-center space-x-2 bg-[#7CFF01]/10 text-[#7CFF01] rounded-full px-4 py-1.5 mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Live Experience</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Friday DJ Sessions</h2>
              <p className="text-white/60 text-lg mb-8 max-w-md">
                Elevate your weekend. Join us every Friday night for curated beats, signature cocktails, and an electric dining atmosphere.
              </p>
              <Link href="/reserve?event=friday-dj" className="inline-block bg-[#7CFF01] text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-colors shadow-[0_0_20px_rgba(124,255,1,0.3)]">
                Secure Your Spot
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-64 h-64 bg-white/5 rounded-full flex items-center justify-center border-4 border-[#7CFF01]/20 relative">
                <Music className="w-24 h-24 text-[#7CFF01] animate-pulse" />
                {/* Decorative circles */}
                <div className="absolute inset-0 border border-[#7CFF01]/40 rounded-full animate-[ping_3s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STRONG RESERVATION CTA --- */}
      <section className="py-32 relative z-10 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7CFF01] rounded-full blur-[150px] opacity-[0.15] pointer-events-none z-0"></div>
        
        <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#0F0F0F]">Plan Your Evening.</h2>
          <p className="text-xl text-black/60 mb-10">
            Reservations fill up quickly. Secure your table now to guarantee an exceptional dining experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/reserve" className="bg-[#0F0F0F] text-white font-bold text-lg px-12 py-5 rounded-2xl hover:bg-[#7CFF01] hover:text-black transition-all shadow-xl">
              Book Your Table Now
            </Link>
            <a href="https://wa.me/447123456789" target="_blank" rel="noreferrer" className="bg-white border-2 border-black/10 text-[#0F0F0F] font-bold text-lg px-12 py-5 rounded-2xl hover:border-[#7CFF01] hover:bg-[#7CFF01]/5 transition-all flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" /> Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}
