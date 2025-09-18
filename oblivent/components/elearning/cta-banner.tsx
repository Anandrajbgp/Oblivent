"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Clock, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABannerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const urgencyFeatures = [
    {
      icon: Clock,
      text: "Limited Time Offer",
      highlight: "50% OFF"
    },
    {
      icon: Users,
      text: "Join 50,000+ Students",
      highlight: "Growing Fast"
    },
    {
      icon: TrendingUp,
      text: "Start Earning in 30 Days",
      highlight: "Guaranteed"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 text-purple-300 opacity-20"
      >
        <Sparkles size={60} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-20 right-10 text-blue-300 opacity-20"
      >
        <TrendingUp size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Bar */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-8 mb-12 flex-wrap"
          >
            {urgencyFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2 border border-white/20"
              >
                <feature.icon className="w-5 h-5 text-yellow-400" />
                <span className="text-white text-sm">{feature.text}</span>
                <span className="bg-yellow-400 text-purple-900 px-2 py-1 rounded-full text-xs font-bold">
                  {feature.highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Your ₹200
              </span>
              <br />
              <span className="text-white">
                First Payout is
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Just One Step Away!
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Join today and get your <span className="text-yellow-400 font-bold">guaranteed first payout</span>. 
              50,000+ students are already earning. <span className="text-green-400 font-bold">How long will you wait?</span>
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 group"
              >
                <span>Start Earning Today</span>
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 font-bold px-12 py-6 text-xl rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                View Success Stories
              </Button>
            </motion.div>
          </motion.div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">✅ Learn</div>
                <div className="text-white">300+ Expert Courses</div>
                <div className="text-gray-300 text-sm">Real-world skills with certificates</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">💰 Earn</div>
                <div className="text-white">Weekly Payouts</div>
                <div className="text-gray-300 text-sm">Start earning from Day 1</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">🚀 Grow</div>
                <div className="text-white">Life Mastery Track</div>
                <div className="text-gray-300 text-sm">Complete personality development</div>
              </div>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center justify-center gap-6 mt-8 text-gray-400 text-sm flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span>Secure SSL Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span>24/7 Support Available</span>
            </div>
          </motion.div>

          {/* Countdown Timer Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3">
              <Clock className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-300 font-semibold">
                Limited Time: 50% OFF expires soon!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}