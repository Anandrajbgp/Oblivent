
'use client';

import { motion } from 'framer-motion';
import { BarChart3, PieChart, Zap, Shield, Brain, Play, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TradingHero() {
  const floatingIcons = [
    { Icon: TrendingUp, color: 'text-green-400', delay: 0 },
    { Icon: BarChart3, color: 'text-blue-400', delay: 0.2 },
    { Icon: PieChart, color: 'text-purple-400', delay: 0.4 },
    { Icon: Brain, color: 'text-yellow-400', delay: 0.6 },
    { Icon: Shield, color: 'text-red-400', delay: 0.8 },
    { Icon: Zap, color: 'text-cyan-400', delay: 1.0 },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.8 }}
            className={`absolute ${
              index % 2 === 0 
                ? `top-${20 + (index * 10)}% left-${10 + (index * 15)}%` 
                : `bottom-${15 + (index * 8)}% right-${8 + (index * 12)}%`
            }`}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              className={`p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${item.color}`}
            >
              <item.Icon className="w-6 h-6" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-5 h-5 text-green-400" />
              </motion.div>
              <span className="text-white font-semibold">AI-Powered Trading Platform</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Trade Smarter.
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Earn Faster.
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stocks, Options, Futures, ETFs, Mutual Funds & Crypto – Learn, Trade & Analyze with real-time AI insights on one secure platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Trading
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="outline" className="px-8 py-4 border-2 border-white/20 text-white rounded-2xl text-lg font-semibold hover:bg-white/5 transition-all duration-300">
                  <Play className="w-5 h-5 mr-2" />
                  Open Demo Account
                </Button>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">₹50Cr+</div>
                <div className="text-sm text-gray-400">Daily Volume</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">10K+</div>
                <div className="text-sm text-gray-400">Active Traders</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Portfolio Dashboard</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-400">Live</span>
                </div>
              </div>

              {/* Portfolio Value */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-white mb-2">₹2,45,680</div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 font-semibold">+₹12,450 (5.34%)</span>
                  <span className="text-gray-400">Today</span>
                </div>
              </div>

              {/* Mock Chart */}
              <div className="relative h-40 bg-white/5 rounded-xl p-4 mb-6">
                <svg className="w-full h-full" viewBox="0 0 300 120">
                  <motion.polyline
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    points="0,100 50,80 100,60 150,40 200,30 250,20 300,10"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Holdings */}
              <div className="space-y-3">
                {['RELIANCE', 'TCS', 'INFY', 'HDFC'].map((stock) => (
                  <div key={stock} className="flex items-center justify-between">
                    <span className="text-white font-medium">{stock}</span>
                    <span className="text-green-400">+2.4%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl p-4"
            >
              <TrendingUp className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
