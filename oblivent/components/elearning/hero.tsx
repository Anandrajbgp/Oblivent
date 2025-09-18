"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, TrendingUp, Users, Star, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter, getBaseCount } from "@/components/shared/counter";

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const heroStats = [
    { icon: Users, count: getBaseCount(50000), suffix: "+", label: "Active Students", isK: true },
    { icon: TrendingUp, count: getBaseCount(25000000), suffix: "+", label: "Payouts Given", prefix: "₹", isK: true },
    { icon: Award, count: getBaseCount(15000), suffix: "+", label: "Certificates Issued", isK: true },
    { icon: Star, count: 4.8, suffix: "/5", label: "Student Rating" },
  ];

  return (
    <section 
      ref={ref}
      className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden"
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
        className="absolute top-20 left-10 text-blue-500 opacity-20"
      >
        <BookOpen size={60} />
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
        <GraduationCap size={80} />
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
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3"
            >
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-purple-700 font-semibold">India&apos;s #1 Skill + Earning Platform</span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Learn.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Earn.
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Grow.
                </span>
                <br />
                <span className="text-slate-800">Together.</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Join India&apos;s most comprehensive skill + earning ecosystem. Learn real-world skills, 
                earn while learning through affiliates, and build your career with certified mentorship.
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
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Learning Today
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                View Packages
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Live Platform</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>Trusted Since 2020</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>Weekly Payouts</span>
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
                    className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"
                  >
                    <stat.icon className="w-6 h-6 text-purple-600" />
                  </motion.div>
                  
                  <div className="text-3xl font-bold text-slate-800 mb-2">
                    <Counter
                      end={stat.count}
                      suffix={stat.suffix}
                      prefix={stat.prefix}
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

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-2xl shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                <span className="font-semibold">Your ₹200 first payout is just one step away!</span>
              </div>
              <p className="text-green-100 text-sm">
                Join now and start earning from Day 1
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}