import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Crown, Star, Gift, LogOut } from 'lucide-react'

export default async function LoyaltableDashboard() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/loyaltable/login')
  }

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-[#0A1128]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-serif font-bold text-white mb-2">Welcome Back,</h1>
            <p className="text-[#7CFF01] font-mono text-lg">{user.email}</p>
          </div>
          <form action="/auth/signout" method="post">
            <button className="flex items-center gap-2 text-white/50 hover:text-white transition-colors">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Status Card */}
          <div className="glass-card p-8 col-span-1 md:col-span-2 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#7CFF01] rounded-full blur-[80px] opacity-20"></div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#7CFF01]/20 flex items-center justify-center text-[#7CFF01]">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider">Current Tier</h3>
                <p className="text-3xl font-serif text-white">Gold Member</p>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/60">Points to Platinum</span>
                <span className="text-[#7CFF01] font-bold">1,450 / 2,000</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#7CFF01] w-[72%] shadow-[0_0_10px_#7CFF01]"></div>
              </div>
            </div>
          </div>

          {/* Points Card */}
          <div className="glass-card p-8 flex flex-col justify-center items-center text-center">
            <h3 className="text-white/60 text-sm font-bold uppercase tracking-wider mb-2">Available Points</h3>
            <p className="text-5xl font-serif text-white mb-4">8,450</p>
            <button className="text-xs font-bold uppercase tracking-wider text-[#0A1128] bg-[#7CFF01] px-4 py-2 rounded-full w-full">
              Redeem Now
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-serif font-bold text-white mb-6">Exclusive Rewards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Complimentary Dessert", points: "500 pts", icon: Gift },
            { title: "Priority Private Dining", points: "Gold Tier", icon: Star },
            { title: "Chef's Tasting Menu for Two", points: "5,000 pts", icon: Crown },
          ].map((reward, i) => (
            <div key={i} className="glass-card p-6 flex items-center justify-between group hover:bg-white/5 transition-colors cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 group-hover:text-[#7CFF01] transition-colors">
                  <reward.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold">{reward.title}</h4>
                  <p className="text-sm text-[#7CFF01]">{reward.points}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
