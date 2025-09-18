
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles, Clock, Trophy, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTABannerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const urgencyFeatures = [
    {
      icon: Clock,
      text: "Start Your Prep Today",
      highlight: "Free Trial"
    },
    {
      icon: Trophy,
      text: "Join 5 Lakh+ Students",
      highlight: "Proven Results"
    },
    {
      icon: Brain,
      text: "AI-Powered Learning",
      highlight: "Personalized"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden"
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
        <Trophy size={80} />
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
                Your Dream Rank
              </span>
              <br />
              <span className="text-white">
                is Just One
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Test Away!
              </span>
            </h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
            >
              Start your exam prep journey today with <span className="text-yellow-400 font-bold">AI-powered guidance</span>. 
              Join 5 lakh+ students who are <span className="text-green-400 font-bold">acing their exams</span> with our platform!
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
                <span>Start Free Test</span>
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
                Explore Premium
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
                <div className="text-3xl font-bold text-yellow-400 mb-2">🧠 Learn</div>
                <div className="text-white">AI-Powered Adaptive Tests</div>
                <div className="text-gray-300 text-sm">Questions that adapt to your level</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">🏆 Compete</div>
                <div className="text-white">Live Leaderboards</div>
                <div className="text-gray-300 text-sm">Compete with lakhs of students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">🎯 Succeed</div>
                <div className="text-white">98.5% Success Rate</div>
                <div className="text-gray-300 text-sm">Proven track record of results</div>
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
              <span>Free Trial - No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span>24/7 AI Mentor Support</span>
            </div>
          </motion.div>

          {/* Exam Countdown Effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 rounded-full px-6 py-3">
              <Clock className="w-5 h-5 text-red-400 animate-pulse" />
              <span className="text-red-300 font-semibold">
                Next exam season starting soon - Prepare now!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
