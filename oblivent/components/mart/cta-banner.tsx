
'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Coins, ArrowRight, Sparkles, Gift, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function MartCTABanner() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          {/* Main CTA Banner */}
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-400/20 rounded-full blur-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                </motion.div>
                <span className="text-white font-semibold">Your ₹200 First Payout is Waiting</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                Start Shopping & Earning
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Today!
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed"
              >
                Join the revolution of smart shopping with AI recommendations, instant earnings through our affiliate program, and premium products at unbeatable prices. Your journey to financial freedom starts here.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-6 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 group">
                  <ShoppingBag className="mr-3 group-hover:scale-110 transition-transform" size={24} />
                  Shop Now & Earn
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>

                <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-10 py-6 rounded-2xl text-lg font-semibold backdrop-blur-sm">
                  <Coins className="mr-3" size={24} />
                  Become Affiliate
                </Button>
              </motion.div>

              {/* Features Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Zap className="w-8 h-8 text-yellow-300 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Instant Commissions</h3>
                  <p className="text-sm text-blue-100">Earn 5-12% on every sale immediately</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Gift className="w-8 h-8 text-pink-300 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">Premium Products</h3>
                  <p className="text-sm text-blue-100">Curated quality items with best prices</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                  <Sparkles className="w-8 h-8 text-green-300 mx-auto mb-3" />
                  <h3 className="font-bold mb-2">AI Shopping Assistant</h3>
                  <p className="text-sm text-blue-100">Smart recommendations just for you</p>
                </div>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-blue-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  25,000+ Happy Customers
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                  ₹5L+ Paid to Affiliates
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                  2-Hour Fast Delivery
                </div>
              </motion.div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [-20, 20, -20],
                rotate: [0, 10, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute top-20 right-20 text-4xl opacity-20"
            >
              🛍️
            </motion.div>

            <motion.div
              animate={{ 
                y: [20, -20, 20],
                rotate: [0, -10, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="absolute bottom-20 left-20 text-4xl opacity-20"
            >
              💰
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
