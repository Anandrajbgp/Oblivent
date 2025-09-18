"use client";

import { motion } from "framer-motion";
import { 
  Award, 
  Trophy, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Users, 
  BarChart3,
  Brain
} from "lucide-react";

export default function TestDashboardPage() {
  const dashboardStats = [
    { title: "Tests Taken", value: "47", icon: BookOpen, color: "from-blue-500 to-blue-600" },
    { title: "Average Score", value: "85.2%", icon: Target, color: "from-green-500 to-green-600" },
    { title: "Current Streak", value: "12 days", icon: Flame, color: "from-orange-500 to-orange-600" },
    { title: "Rank Position", value: "#156", icon: Trophy, color: "from-purple-500 to-purple-600" },
  ];

  const recentTests = [
    { exam: "SBI PO Mock Test #15", score: 88.5, rank: 145, date: "2 hours ago" },
    { exam: "SSC CGL Practice Set #8", score: 92.3, rank: 89, date: "1 day ago" },
    { exam: "IBPS Clerk Mock #22", score: 79.8, rank: 234, date: "2 days ago" },
    { exam: "Railway Group D #5", score: 85.6, rank: 178, date: "3 days ago" },
  ];

  const weekPerformance = [
    { day: "Mon", score: 78, tests: 3 },
    { day: "Tue", score: 82, tests: 2 },
    { day: "Wed", score: 88, tests: 4 },
    { day: "Thu", score: 85, tests: 3 },
    { day: "Fri", score: 91, tests: 2 },
    { day: "Sat", score: 89, tests: 5 },
    { day: "Sun", score: 87, tests: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Test Dashboard</h1>
              <p className="text-xl text-gray-600">Track your exam preparation progress</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Welcome back, Arjun!</h2>
                <p className="text-gray-600">Ready to ace another test today?</p>
              </div>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
                  Take New Test
                </button>
                <button className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors">
                  AI Mentor Chat
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {dashboardStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.title}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Tests */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                  Recent Test Results
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentTests.map((test, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                      <div>
                        <h4 className="font-semibold text-gray-800">{test.exam}</h4>
                        <p className="text-gray-600 text-sm">{test.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">{test.score}%</div>
                        <div className="text-sm text-gray-600">Rank #{test.rank}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-6 py-3 text-indigo-600 hover:text-indigo-800 font-semibold">
                  View All Results →
                </button>
              </div>
            </div>
          </motion.div>

          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 mb-6">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 flex items-center gap-3">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Week Performance
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  {weekPerformance.map((day, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">{day.day}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                            style={{ width: `${day.score}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{day.score}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Mentor Suggestion */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-6 h-6" />
                <h3 className="text-lg font-bold">AI Mentor Says</h3>
              </div>
              <p className="text-blue-100 mb-4">
                Your quantitative aptitude needs work. Focus on speed and accuracy in number series!
              </p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors">
                Get Study Plan
              </button>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          {[
            { title: "Mock Tests", icon: Target, href: "/test/mock" },
            { title: "Performance", icon: TrendingUp, href: "/test/performance" },
            { title: "Leaderboard", icon: Users, href: "/test/leaderboard" },
            { title: "Achievements", icon: Award, href: "/test/achievements" },
          ].map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center group"
            >
              <action.icon className="w-8 h-8 text-indigo-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold text-gray-800">{action.title}</h4>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}