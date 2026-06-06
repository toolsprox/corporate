import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Crown, Star, Gift, LogOut, Info, ArrowRight, CreditCard, ChevronRight } from 'lucide-react'

export default async function LoyaltableDashboard() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/loyaltable/login')
  }

  // Simulated user data since we don't have a real DB yet
  const userProfile = {
    tier: 'Platinum',
    points: 12450,
    walletBalance: '£250.00',
    visits: 12,
    nextTier: 'Diamond',
    pointsToNext: 2550
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-4 sm:px-8 relative z-10 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#7CFF01]/10 rounded-full blur-[120px] mix-blend-multiply pointer-events-none"></div>
      <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#0F0F0F]/10 rounded-full blur-[100px] mix-blend-multiply pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-[#0F0F0F] mb-2">My Wallet</h1>
            <p className="text-[#0F0F0F]/60 font-medium">Welcome back, <span className="text-[#0F0F0F]">{user.email}</span></p>
          </div>
          <form action="/auth/signout" method="post">
            <button className="flex items-center gap-2 text-[#0F0F0F]/50 hover:text-[#0F0F0F] transition-colors font-bold uppercase tracking-wider text-xs px-4 py-2 rounded-full glass-panel hover:bg-white">
              <LogOut className="w-4 h-4" />
              Sign Out
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Wallet Card (Apple Wallet Style) */}
          <div className="lg:col-span-5 relative group perspective">
            <div className="w-full aspect-[1/1.5] sm:aspect-[1.6/1] lg:aspect-[1/1.6] p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-700 transform-style-3d group-hover:rotate-y-4 group-hover:-rotate-x-4 bg-[#0F0F0F]/90 backdrop-blur-3xl border border-white/20 rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.3),inset_0_2px_10px_rgba(255,255,255,0.2)]">
              
              {/* Card Background Glow & Pattern */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#7CFF01] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent bg-[length:20px_20px]"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-[inset_0_2px_4px_rgba(255,255,255,0.3)]">
                    <Crown className="w-5 h-5 text-[#7CFF01]" />
                  </div>
                  <span className="font-serif font-bold text-white tracking-widest uppercase text-lg drop-shadow-md">Masakali</span>
                </div>
                <div className="text-right">
                  <p className="text-[0.65rem] font-bold tracking-widest text-white/50 uppercase mb-1">Tier</p>
                  <p className="text-xs font-bold text-[#0F0F0F] uppercase tracking-wider bg-[#7CFF01] px-3 py-1 rounded-full shadow-[0_0_15px_rgba(124,255,1,0.4)]">{userProfile.tier}</p>
                </div>
              </div>

              <div className="relative z-10 mt-auto mb-12 sm:mb-8 lg:mb-12">
                <p className="text-xs font-bold tracking-widest text-white/50 uppercase mb-2">Available Balance</p>
                <p className="text-5xl sm:text-6xl font-serif font-bold text-white tracking-tight drop-shadow-lg">{userProfile.walletBalance}</p>
                <div className="flex items-center gap-2 mt-4 text-sm font-medium text-white/80">
                  <Star className="w-4 h-4 fill-[#7CFF01] text-[#7CFF01]" />
                  <span>{userProfile.points.toLocaleString()} Points</span>
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end border-t border-white/10 pt-6">
                <div>
                  <p className="text-[0.65rem] font-bold tracking-widest text-white/50 uppercase mb-1">Member Since</p>
                  <p className="text-sm font-mono text-white/90">2026</p>
                </div>
                <div className="flex gap-1.5 opacity-50">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-2 h-2 rounded-full bg-white shadow-[0_0_5px_white]"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Simulated NFC / Add to Wallet button */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 py-3 bg-black text-white rounded-full flex items-center justify-center gap-2 shadow-2xl hover:bg-black/80 transition-colors cursor-pointer group-hover:translate-y-1">
              <CreditCard className="w-4 h-4" />
              <span className="text-xs font-bold tracking-widest uppercase">Add to Apple Wallet</span>
            </div>
          </div>

          {/* Right Column: Benefits & Activity */}
          <div className="lg:col-span-7 space-y-6 mt-12 lg:mt-0">
            
            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <button className="glass-panel p-4 rounded-2xl flex items-center justify-between hover:bg-white/60 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0F0F0F]/10 flex items-center justify-center text-[#0F0F0F] group-hover:bg-[#7CFF01] transition-colors">
                    <Gift className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[#0F0F0F] text-sm tracking-wide">Redeem</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#0F0F0F]/40" />
              </button>
              <button className="glass-panel p-4 rounded-2xl flex items-center justify-between hover:bg-white/60 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0F0F0F]/10 flex items-center justify-center text-[#0F0F0F] group-hover:bg-[#7CFF01] transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-[#0F0F0F] text-sm tracking-wide">Top Up</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#0F0F0F]/40" />
              </button>
            </div>

            {/* Tier Progress */}
            <div className="glass-panel p-8 rounded-3xl">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className="text-sm font-bold text-[#0F0F0F] uppercase tracking-widest mb-1">Status Progress</h3>
                  <p className="text-xs text-[#0F0F0F]/60 font-medium">{userProfile.pointsToNext.toLocaleString()} points to {userProfile.nextTier}</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#0F0F0F]/10 flex items-center justify-center text-[#0F0F0F]">
                  <Star className="w-4 h-4" />
                </div>
              </div>

              <div className="w-full h-3 bg-[#0F0F0F]/5 rounded-full overflow-hidden border border-[#0F0F0F]/10">
                <div 
                  className="h-full bg-gradient-to-r from-[#0F0F0F] to-[#7CFF01] rounded-full relative"
                  style={{ width: '80%' }}
                >
                  <div className="absolute inset-0 bg-white/20 w-full h-full animate-[shimmer_2s_infinite]"></div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="glass-panel p-8 rounded-3xl">
              <h3 className="text-sm font-bold text-[#0F0F0F] uppercase tracking-widest mb-6">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { title: 'Dinner at Masakali', date: 'Oct 24, 2026', amount: '-£145.00', points: '+145' },
                  { title: 'Wallet Top-up', date: 'Oct 20, 2026', amount: '+£250.00', points: '+25' },
                  { title: 'Birthday Reward', date: 'Sep 15, 2026', amount: '+£50.00', points: '0' },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-2xl hover:bg-white/40 transition-colors cursor-pointer border border-transparent hover:border-white">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#0F0F0F]/5 flex items-center justify-center text-[#0F0F0F]">
                        {item.amount.startsWith('+') ? <ArrowRight className="w-4 h-4 rotate-90" /> : <Star className="w-4 h-4" />}
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#0F0F0F]">{item.title}</p>
                        <p className="text-xs text-[#0F0F0F]/50 font-medium mt-1">{item.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${item.amount.startsWith('+') ? 'text-[#0F0F0F]' : 'text-[#0F0F0F]/70'}`}>{item.amount}</p>
                      <p className="text-xs font-medium text-[#7CFF01] bg-[#7CFF01]/10 px-2 py-0.5 rounded-md inline-block mt-1">{item.points} pts</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
