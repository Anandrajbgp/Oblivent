
'use client';

import { motion } from 'framer-motion';
import { UserPlus, Wallet, TrendingUp, BarChart3, CheckCircle } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: UserPlus,
      title: "Open Account",
      description: "Quick KYC verification & account setup in under 10 minutes",
      details: ["Aadhaar verification", "PAN linking", "Bank account setup"]
    },
    {
      icon: Wallet,
      title: "Add Funds",
      description: "Secure fund transfer via UPI, NetBanking or bank transfer",
      details: ["Instant UPI deposits", "Zero fees", "24/7 fund access"]
    },
    {
      icon: TrendingUp,
      title: "Trade & Learn",
      description: "Start with paper trading, learn strategies, then go live",
      details: ["Demo account", "Learning modules", "Risk-free practice"]
    },
    {
      icon: BarChart3,
      title: "Analyze Performance",
      description: "Track portfolio, analyze trades, optimize strategies",
      details: ["P&L tracking", "Performance metrics", "AI insights"]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <span className="text-white font-semibold">Simple Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Trading in
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 4 Easy Steps</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From account opening to advanced trading - we&apos;ll guide you every step of the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl">
            <svg className="w-full h-2" viewBox="0 0 800 20">
              <motion.line
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                x1="100" y1="10" x2="700" y2="10"
                stroke="url(#stepGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <defs>
                <linearGradient id="stepGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20"
                >
                  <step.icon className="w-10 h-10 text-blue-400" />
                </motion.div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (detailIndex * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-gray-400"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Trading Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
