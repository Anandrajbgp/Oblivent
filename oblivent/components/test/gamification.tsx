
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gamepad2, Gift, Users, Flame, Target, Zap } from "lucide-react";

export function GamificationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const gamificationFeatures = [
    {
      title: "Daily Streaks",
      description: "Build consistency with daily test-taking streaks. Longer streaks = bigger rewards!",
      icon: Flame,
      color: "from-orange-500 to-red-600",
      reward: "Up to 500 points/day"
    },
    {
      title: "Achievement Badges",
      description: "Earn rare badges for completing challenges and reaching milestones",
      icon: Target,
      color: "from-blue-500 to-purple-600",
      reward: "25+ unique badges"
    },
    {
      title: "Study Groups",
      description: "Create or join study groups with friends and compete in batch challenges",
      icon: Users,
      color: "from-green-500 to-emerald-600",
      reward: "Group bonuses"
    },
    {
      title: "Redeemable Rewards",
      description: "Convert points to courses, eBooks, Mart discounts, and premium features",
      icon: Gift,
      color: "from-purple-500 to-pink-600",
      reward: "Real rewards"
    }
  ];

  const rewardTiers = [
    { points: "0-999", tier: "Bronze", color: "from-amber-600 to-yellow-600", perks: ["Basic rewards", "Community access"] },
    { points: "1000-2499", tier: "Silver", color: "from-gray-500 to-gray-600", perks: ["Better rewards", "Priority support"] },
    { points: "2500-4999", tier: "Gold", color: "from-yellow-500 to-yellow-600", perks: ["Premium rewards", "Advanced features"] },
    { points: "5000+", tier: "Diamond", color: "from-blue-500 to-purple-600", perks: ["Best rewards", "VIP treatment"] }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-purple-100 rounded-full px-6 py-3 mb-6"
          >
            <Gamepad2 className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">Gamified Learning</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              Make Learning
            </span>
            <br />
            <span className="text-purple-600">Fun & Rewarding</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Turn your exam preparation into an exciting game! Earn points, unlock badges, 
            compete with friends, and redeem amazing rewards.
          </p>
        </motion.div>

        {/* Gamification Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {gamificationFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {feature.description}
              </p>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3">
                <span className="text-purple-700 font-semibold text-sm">{feature.reward}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reward Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-slate-900">Reward Tiers</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {rewardTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-200 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                >
                  <Zap className="w-8 h-8 text-white" />
                </motion.div>

                <h4 className="text-xl font-bold text-slate-900 mb-2">{tier.tier}</h4>
                <p className="text-gray-600 text-sm mb-4">{tier.points} points</p>

                <ul className="space-y-2">
                  {tier.perks.map((perk, idx) => (
                    <li key={idx} className="text-gray-600 text-sm flex items-center justify-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sample Rewards Store */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold text-center mb-8">Rewards Store Preview</h3>
            
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {[
                { item: "Premium Course", points: "2,500 pts", icon: "📚" },
                { item: "eBook Collection", points: "1,500 pts", icon: "📖" },
                { item: "Mart 20% Discount", points: "1,000 pts", icon: "🛒" },
                { item: "1-on-1 Mentorship", points: "5,000 pts", icon: "👨‍🏫" }
              ].map((reward, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-4xl mb-3">{reward.icon}</div>
                  <h4 className="font-bold mb-2">{reward.item}</h4>
                  <p className="text-purple-200 text-sm">{reward.points}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl text-purple-100 mb-6">
                Start earning points today and unlock amazing rewards!
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                View Full Rewards Store
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
