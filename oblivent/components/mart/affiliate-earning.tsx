
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Coins, TrendingUp, Users, Share2, Wallet, Trophy, Gift, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Counter } from '@/components/shared/counter';

export function AffiliateEarning() {
  const [earnings, setEarnings] = useState(525000);
  const [affiliates, setAffiliates] = useState(12450);

  useEffect(() => {
    const interval = setInterval(() => {
      setEarnings(prev => prev + Math.floor(Math.random() * 500) + 100);
      if (Math.random() > 0.7) {
        setAffiliates(prev => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const earningStats = [
    { 
      label: "Total Paid to Affiliates", 
      value: earnings, 
      prefix: "₹", 
      icon: <Wallet size={24} />, 
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    { 
      label: "Active Affiliates", 
      value: affiliates, 
      prefix: "", 
      suffix: "+",
      icon: <Users size={24} />, 
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    { 
      label: "Products Shared", 
      value: 85420, 
      prefix: "", 
      suffix: "+",
      icon: <Share2 size={24} />, 
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    { 
      label: "Avg. Weekly Earning", 
      value: 12500, 
      prefix: "₹", 
      icon: <TrendingUp size={24} />, 
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    }
  ];

  const earningTiers = [
    {
      title: "Starter Affiliate",
      commission: "5%",
      requirement: "0-10 sales",
      perks: ["Basic dashboard", "Standard support", "Monthly payouts"],
      color: "from-gray-500 to-gray-600"
    },
    {
      title: "Gold Affiliate",
      commission: "8%",
      requirement: "11-50 sales",
      perks: ["Advanced analytics", "Priority support", "Bi-weekly payouts", "Bonus rewards"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Platinum Affiliate",
      commission: "12%",
      requirement: "51+ sales",
      perks: ["Premium dashboard", "24/7 support", "Weekly payouts", "Exclusive products", "Trip rewards"],
      color: "from-blue-500 to-purple-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <Coins className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium">Earn While You Shop</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Affiliate & Earning System
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Share products, earn commissions instantly, and unlock exclusive rewards with our gamified earning platform
          </p>
        </motion.div>

        {/* Real-time Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {earningStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 text-center border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-2xl mb-4`}>
                <div className={stat.color}>
                  {stat.icon}
                </div>
              </div>
              
              <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                {stat.prefix}
                <Counter 
                  end={stat.value} 
                  duration={2} 
                />
                {stat.suffix}
              </div>
              
              <div className="text-sm text-gray-600">{stat.label}</div>
              
              {index === 0 && (
                <div className="mt-2 text-xs text-green-600 font-semibold animate-pulse">
                  Live updating
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Earning Tiers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Earning Tiers</h3>
            <div className="space-y-6">
              {earningTiers.map((tier, index) => (
                <motion.div
                  key={tier.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg`}>
                      {tier.commission}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{tier.title}</h4>
                      <p className="text-sm text-gray-600">{tier.requirement}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {tier.perks.map((perk, perkIndex) => (
                      <li key={perkIndex} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-400 rounded-full" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Affiliate Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
                <Trophy className="w-5 h-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Your Dashboard</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Start Earning Today</h3>
            </div>

            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-100 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-600">₹0</div>
                  <div className="text-sm text-green-700">This Week</div>
                </div>
                <div className="bg-blue-100 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">0</div>
                  <div className="text-sm text-blue-700">Total Sales</div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-2xl py-3">
                  <Share2 className="mr-2" size={20} />
                  Share & Earn
                </Button>
                <Button variant="outline" className="w-full border-purple-300 text-purple-600 hover:bg-purple-50 rounded-2xl py-3">
                  <Gift className="mr-2" size={20} />
                  View Rewards
                </Button>
                <Button variant="outline" className="w-full border-orange-300 text-orange-600 hover:bg-orange-50 rounded-2xl py-3">
                  <Wallet className="mr-2" size={20} />
                  Withdraw Earnings
                </Button>
              </div>

              {/* Gamification Element */}
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-bold text-purple-800">Daily Streak: 0 days</div>
                    <div className="text-sm text-purple-600">Earn bonus points!</div>
                  </div>
                </div>
                <div className="w-full bg-purple-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full w-0 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center text-white"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Your ₹200 First Payout is Waiting
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of earners who are making money by sharing products they love. Start today and get your first commission within 24 hours!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-2xl text-lg font-semibold">
              <Coins className="mr-2" size={20} />
              Start Earning Now
            </Button>
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-semibold">
              Learn How It Works
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
