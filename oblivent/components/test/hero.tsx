
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Brain, Target, Zap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter, getBaseCount } from "@/components/shared/counter";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const heroStats = [
    { icon: Users, count: getBaseCount(500000), suffix: "+", label: "Test Takers", isK: true },
    { icon: Trophy, count: getBaseCount(150000), suffix: "+", label: "Success Stories", isK: true },
    { icon: Brain, count: getBaseCount(50000), suffix: "+", label: "AI Questions", isK: true },
    { icon: Target, count: 98.5, suffix: "%", label: "Success Rate" },
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 text-indigo-500 opacity-20"
      >
        <Trophy size={60} />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-40 right-20 text-purple-500 opacity-20"
      >
        <Brain size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3"
            >
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="text-purple-700 font-semibold">India&apos;s #1 AI-Powered Test Platform</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Crack Any Exam.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Anytime.
                </span>
                <br />
                <span className="text-slate-800">Anywhere.</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                All-in-one platform with <span className="font-bold text-indigo-600">AI guidance</span>, 
                <span className="font-bold text-purple-600"> live classes</span> & 
                <span className="font-bold text-pink-600"> gamified learning</span>. 
                Join 5 lakh+ students already acing their exams!
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Free Test
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                View Premium Plans
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 text-sm text-gray-500 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live AI Mentor</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Offline Mode Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Trusted Since 2020</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-indigo-200 group-hover:to-purple-200 transition-all duration-300"
                  >
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    <Counter
                      end={stat.count}
                      suffix={stat.suffix}
                      isK={stat.isK}
                      duration={2.5}
                    />
                  </div>
                  
                  <div className="text-gray-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <Trophy className="w-5 h-5 text-white" />
                <span className="font-semibold">Rank #1 achiever this week!</span>
              </div>
              <p className="text-yellow-100 text-sm">
                Join the leaderboard and compete with thousands
              </p>
            </motion.div>

            {/* AI Mentor Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="absolute top-10 right-0 bg-white rounded-2xl p-4 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-sm">AI Mentor Says:</span>
              </div>
              <p className="text-gray-700 text-sm">
                &quot;Based on your performance, practice more Quantitative Aptitude!&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
