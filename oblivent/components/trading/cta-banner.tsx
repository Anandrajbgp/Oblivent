
'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TradingCTA() {
  const benefits = [
    {
      icon: TrendingUp,
      text: "AI-Powered Insights"
    },
    {
      icon: Shield,
      text: "Bank-Grade Security"
    },
    {
      icon: Zap,
      text: "Instant Execution"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <TrendingUp className="w-5 h-5 text-green-400" />
              </motion.div>
              <span className="text-white font-semibold">Ready to Start Trading?</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Start Your Trading
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Journey Today
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join 10,000+ successful traders who trust our platform for secure, profitable trading with AI-powered insights
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10"
              >
                <benefit.icon className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group">
                Open Trading Account
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="px-10 py-5 border-2 border-white/30 text-white rounded-2xl text-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                Try Demo Trading
              </Button>
            </motion.div>
          </motion.div>

          {/* Special Offer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">₹500</div>
                <div className="text-white font-medium">Welcome Bonus</div>
                <div className="text-sm text-gray-300">For new Premium users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">30 Days</div>
                <div className="text-white font-medium">Free Premium</div>
                <div className="text-sm text-gray-300">No commitment required</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">Zero</div>
                <div className="text-white font-medium">Account Fees</div>
                <div className="text-sm text-gray-300">Forever free basic plan</div>
              </div>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 mt-12 opacity-60"
          >
            <div className="text-sm text-gray-400">Trusted by 10,000+ traders</div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-sm text-gray-400">Bank-grade security</div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-sm text-gray-400">99.9% uptime</div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-sm text-gray-400">24/7 support</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
