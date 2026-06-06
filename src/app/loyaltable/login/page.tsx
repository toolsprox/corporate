'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import { Mail, Lock, ArrowRight, Loader2, Info } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [step, setStep] = useState<'email' | 'otp'>('email')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const supabase = createClient()

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { error } = await supabase.auth.signInWithOtp({
      email: email,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setStep('otp')
      setLoading(false)
    }
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error } = await supabase.auth.verifyOtp({
      email: email,
      token,
      type: 'email',
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else if (data?.session) {
      router.push('/loyaltable')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center justify-center relative overflow-hidden bg-[#0A1128]">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7CFF01] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md p-8 sm:p-10 glass-card"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-white mb-2">Loyaltable</h1>
          <p className="text-white/60 text-sm">Exclusive rewards for our distinguished guests.</p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
            {error}
          </div>
        )}

        {step === 'email' ? (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/80 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40">
                  <Mail className="w-5 h-5" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="vip@masakali.co.uk"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#7CFF01] focus:ring-1 focus:ring-[#7CFF01] transition-all"
                />
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20 flex gap-3 text-sm text-blue-400 items-start">
              <Info className="w-5 h-5 shrink-0 mt-0.5" />
              <p>We've temporarily switched to Email verification for easier testing. Just enter your email to get a 6-digit code!</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#7CFF01] text-[#0A1128] font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(124,255,1,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Send Code <ArrowRight className="w-4 h-4" /></>}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-white/80 uppercase tracking-wider">Verification Code</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-white/40">
                  <Lock className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  placeholder="000000"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white tracking-widest placeholder:text-white/20 focus:outline-none focus:border-[#7CFF01] focus:ring-1 focus:ring-[#7CFF01] transition-all text-lg"
                />
              </div>
              <p className="text-xs text-white/40 mt-2 text-center">We sent a 6-digit code to your email.</p>
            </div>

            <button
              type="submit"
              disabled={loading || token.length < 6}
              className="w-full py-4 rounded-xl bg-[#7CFF01] text-[#0A1128] font-bold uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_15px_rgba(124,255,1,0.2)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Verify & Enter'}
            </button>
            
            <button
              type="button"
              onClick={() => setStep('email')}
              className="w-full text-center text-sm text-white/60 hover:text-white transition-colors"
            >
              Use a different email
            </button>
          </form>
        )}
      </motion.div>
    </div>
  )
}
