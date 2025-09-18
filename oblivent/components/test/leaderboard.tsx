
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Flame, Target, Zap } from "lucide-react";

export function LeaderboardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const topPerformers = [
    {
      rank: 1,
      name: "Arjun Sharma",
      exam: "Banking",
      score: 95.8,
      streak: 45,
      badges: 12,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun1",
      location: "Delhi"
    },
    {
      rank: 2,
      name: "Priya Singh",
      exam: "SSC",
      score: 94.2,
      streak: 38,
      badges: 10,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya1",
      location: "Mumbai"
    },
    {
      rank: 3,
      name: "Rohit Kumar",
      exam: "UPSC",
      score: 93.7,
      streak: 52,
      badges: 15,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rohit1",
      location: "Bangalore"
    },
    {
      rank: 4,
      name: "Sneha Patel",
      exam: "Railway",
      score: 92.5,
      streak: 29,
      badges: 8,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha1",
      location: "Ahmedabad"
    },
    {
      rank: 5,
      name: "Vikash Gupta",
      exam: "Campus",
      score: 91.8,
      streak: 41,
      badges: 11,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikash1",
      location: "Pune"
    }
  ];

  const achievements = [
    {
      title: "First Test Taker",
      description: "Complete your first mock test",
      icon: Target,
      color: "from-green-500 to-emerald-600",
      rarity: "Common"
    },
    {
      title: "Week Warrior",
      description: "7-day test taking streak",
      icon: Flame,
      color: "from-orange-500 to-red-600",
      rarity: "Rare"
    },
    {
      title: "Top 10 Ranker",
      description: "Reach top 10 in any exam leaderboard",
      icon: Medal,
      color: "from-purple-500 to-pink-600",
      rarity: "Epic"
    },
    {
      title: "Perfect Score",
      description: "Score 100% in any mock test",
      icon: Award,
      color: "from-yellow-400 to-orange-500",
      rarity: "Legendary"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden"
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
            className="inline-flex items-center gap-3 bg-yellow-100 rounded-full px-6 py-3 mb-6"
          >
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-700 font-semibold">Live Leaderboard</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              Compete &
            </span>
            <br />
            <span className="text-purple-600">Conquer Together</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of aspirants in friendly competition. Track your progress, 
            earn badges, and climb the leaderboard!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-500" />
                This Week&apos;s Top Performers
              </h3>

              <div className="space-y-4">
                {topPerformers.map((performer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:shadow-lg ${
                      performer.rank === 1 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200' :
                      performer.rank === 2 ? 'bg-gradient-to-r from-gray-50 to-slate-50 border-2 border-gray-200' :
                      performer.rank === 3 ? 'bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200' :
                      'bg-gray-50 border border-gray-100'
                    }`}
                  >
                    {/* Rank Badge */}
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                      performer.rank === 1 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                      performer.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-500' :
                      performer.rank === 3 ? 'bg-gradient-to-r from-amber-500 to-yellow-500' :
                      'bg-gradient-to-r from-indigo-500 to-purple-500'
                    }`}>
                      {performer.rank <= 3 ? (
                        performer.rank === 1 ? <Trophy className="w-5 h-5" /> :
                        performer.rank === 2 ? <Medal className="w-5 h-5" /> :
                        <Award className="w-5 h-5" />
                      ) : performer.rank}
                    </div>

                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full border-2 border-white shadow-md bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {performer.name.charAt(0)}
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-slate-900">{performer.name}</h4>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{performer.score}%</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>{performer.exam} • {performer.location}</span>
                        <div className="flex items-center gap-1">
                          <Flame className="w-4 h-4 text-orange-500" />
                          <span>{performer.streak}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4 text-purple-500" />
                          <span>{performer.badges}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button className="text-indigo-600 hover:text-indigo-800 font-semibold">
                  View Full Leaderboard →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Achievement System */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <Zap className="w-6 h-6 text-purple-500" />
                Achievement System
              </h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-12 h-12 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-bold text-slate-900">{achievement.title}</h4>
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          achievement.rarity === 'Common' ? 'bg-green-100 text-green-600' :
                          achievement.rarity === 'Rare' ? 'bg-blue-100 text-blue-600' :
                          achievement.rarity === 'Epic' ? 'bg-purple-100 text-purple-600' :
                          'bg-yellow-100 text-yellow-600'
                        }`}>
                          {achievement.rarity}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-slate-900">Your Progress</h4>
                    <p className="text-gray-600 text-sm">Next: Week Warrior (3 days left)</p>
                  </div>
                  <div className="text-2xl">🏆</div>
                </div>
                <div className="mt-3 bg-gray-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full w-3/5"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Join the Competition Today!</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-indigo-200">Active Competitors</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2.5M+</div>
                <div className="text-indigo-200">Tests Taken</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-indigo-200">Daily Challenges</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98.5%</div>
                <div className="text-indigo-200">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
