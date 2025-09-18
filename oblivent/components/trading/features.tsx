
'use client';

import { motion } from 'framer-motion';
import { BarChart3, Brain, Shield, Smartphone, BookOpen, Users, Zap, TrendingUp, PieChart } from 'lucide-react';

export function TradingFeatures() {
  const features = [
    {
      icon: BarChart3,
      title: "Multi-Asset Trading",
      description: "Stocks, Options, Futures, Mutual Funds, ETFs, Commodities - All in one platform",
      category: "Trading"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Smart trade suggestions, market predictions & portfolio optimization",
      category: "Intelligence"
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description: "Real-time charts, technical indicators, multi-timeframe analysis",
      category: "Analytics"
    },
    {
      icon: Shield,
      title: "Secure Execution",
      description: "Two-factor authentication, biometric login, high-speed order execution",
      category: "Security"
    },
    {
      icon: BookOpen,
      title: "Learning Modules",
      description: "Paper trading, tutorials, scenario simulations for all skill levels",
      category: "Education"
    },
    {
      icon: Smartphone,
      title: "Mobile Trading",
      description: "Trade anywhere with our mobile-optimized platform and real-time alerts",
      category: "Accessibility"
    },
    {
      icon: Users,
      title: "Community & Mentorship",
      description: "Expert sessions, verified trader discussions, Q&A forums",
      category: "Support"
    },
    {
      icon: Zap,
      title: "Real-Time Data",
      description: "Live market data, instant notifications, price alerts & news updates",
      category: "Data"
    },
    {
      icon: PieChart,
      title: "Portfolio Management",
      description: "Track performance, risk analysis, customizable dashboard widgets",
      category: "Management"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-6 py-3 mb-6">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Professional Trading Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything You Need to
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Trade Smart</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner-friendly tools to advanced analytics - our platform grows with your trading expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-2 py-1">
                    {feature.category}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors flex items-center gap-2 group">
                  Learn More
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
