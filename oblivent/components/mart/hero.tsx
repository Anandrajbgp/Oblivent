
'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Zap, Coins, ArrowRight, Star, Trophy, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MartHero() {
  const heroStats = [
    { label: "Products", value: "50K+", icon: <ShoppingBag size={20} /> },
    { label: "Happy Customers", value: "25K+", icon: <Star size={20} /> },
    { label: "Paid to Affiliates", value: "₹5L+", icon: <Coins size={20} /> },
    { label: "Delivery Speed", value: "2 Hrs", icon: <Zap size={20} /> }
  ];

  const trendingItems = [
    { name: "iPhone 15 Pro", price: "₹1,34,900", image: "📱" },
    { name: "MacBook Air M2", price: "₹1,14,900", image: "💻" },
    { name: "AirPods Pro", price: "₹24,900", image: "🎧" },
    { name: "iPad Pro", price: "₹81,900", image: "📱" }
  ];

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full mb-6"
            >
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-medium">AI-Powered Smart Shopping</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
                Shop Smart.
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Earn Instantly.
              </span>
              <br />
              <span className="text-gray-800">Live Premium.</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
              Experience the future of shopping with AI recommendations, instant earnings, and premium lifestyle products—all in one ecosystem.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <ShoppingBag className="mr-2" size={20} />
                Start Shopping
              </Button>
              <Button variant="outline" className="border-2 border-gray-300 hover:border-blue-500 px-8 py-6 rounded-2xl text-lg font-semibold transition-all duration-300">
                <Coins className="mr-2" size={20} />
                Start Earning
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20 shadow-lg"
                >
                  <div className="flex justify-center mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-2xl text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Trending Products Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-white/30 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Trending Now</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-gray-600">Live</span>
                </div>
              </div>

              <div className="space-y-4">
                {trendingItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between bg-white/60 rounded-2xl p-4 hover:bg-white/80 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-3xl">{item.image}</div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.name}</h4>
                        <p className="text-green-600 font-bold">{item.price}</p>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Buy Now
                    </Button>
                  </motion.div>
                ))}
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-3 shadow-lg"
              >
                <Gift className="text-white" size={24} />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full p-3 shadow-lg"
              >
                <Trophy className="text-white" size={24} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
