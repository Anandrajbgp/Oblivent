"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Award, Calendar, IndianRupee } from "lucide-react";
import { Counter, getBaseCount } from "@/components/shared/counter";
import Image from "next/image";

export function AffiliateProofSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Real-time stats for affiliate proof
  const liveStats = [
    { 
      icon: IndianRupee, 
      count: getBaseCount(47500000), 
      suffix: "+", 
      label: "Total Payouts Distributed", 
      isK: true,
      color: "from-green-500 to-emerald-600"
    },
    { 
      icon: Users, 
      count: getBaseCount(8500), 
      suffix: "+", 
      label: "Active Affiliates", 
      isK: false,
      color: "from-blue-500 to-purple-600"
    },
    { 
      icon: TrendingUp, 
      count: getBaseCount(1250), 
      suffix: "", 
      label: "Today's Conversions", 
      isK: false,
      color: "from-purple-500 to-pink-600"
    },
    { 
      icon: Calendar, 
      count: 156, 
      suffix: "", 
      label: "This Week's New Affiliates", 
      isK: false,
      color: "from-orange-500 to-red-600"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Jaipur, Rajasthan",
      earning: "₹85,000",
      period: "Last Month",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
      quote: "I earned ₹3.5 lakh in just 6 months! Oblivent changed my life completely. Along with affiliate marketing, my skills also got upgraded.",
      package: "Expert"
    },
    {
      name: "Rohit Kumar",
      location: "Patna, Bihar", 
      earning: "₹45,000",
      period: "Last Month",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rohit",
      quote: "Started earning since college days. Making my parents proud every day. Weekly payouts have given me complete financial freedom!",
      package: "Pro"
    },
    {
      name: "Sneha Patel",
      location: "Surat, Gujarat",
      earning: "₹28,000", 
      period: "Last Month",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha",
      quote: "Doing part-time affiliate marketing to help my family. Started with Beginner package, now upgraded to Pro!",
      package: "Pro"
    }
  ];

  const achievementLevels = [
    { level: "Beginner", students: "2,500+", certificates: "Foundation Level", color: "from-green-500 to-emerald-600" },
    { level: "Pro", students: "1,800+", certificates: "Advanced Level", color: "from-blue-500 to-purple-600" },
    { level: "Expert", students: "950+", certificates: "Master Level", color: "from-purple-500 to-pink-600" }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 right-10 text-purple-300 opacity-20"
      >
        <IndianRupee size={80} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-green-500/20 rounded-full px-6 py-3 mb-6 border border-green-500/30"
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-300 font-semibold">Live Earning Proof</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Real Students,
            </span>
            <br />
            <span className="text-white">Real Earnings</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See live numbers and real testimonials. Our students are earning every day 
            and you can earn too!
          </p>
        </motion.div>

        {/* Live Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {liveStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg transition-all duration-300`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>

              <div className="text-2xl md:text-3xl font-bold mb-2">
                <Counter
                  end={stat.count}
                  suffix={stat.suffix}
                  prefix="₹"
                  isK={stat.isK}
                  duration={3}
                  className="text-white"
                />
              </div>

              <div className="text-gray-300 font-medium text-sm">
                {stat.label}
              </div>

              {/* Live indicator */}
              <div className="flex items-center gap-2 mt-3">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-300 text-xs">Live</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Student Achievement Levels</h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievementLevels.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Award className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold text-white mb-4">{achievement.level}</h4>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Active Students:</span>
                    <span className="text-green-400 font-bold">{achievement.students}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Certification:</span>
                    <span className="text-blue-400 font-bold">{achievement.certificates}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Success Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12 text-white">Success Stories</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={64} // Equivalent to w-16
                    height={64} // Equivalent to h-16
                    className="rounded-full border-2 border-white/30"
                  />
                  <div className="text-left">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gray-300 text-sm">{testimonial.location}</p>
                    <div className="inline-block bg-purple-500/30 text-purple-200 px-2 py-1 rounded text-xs mt-1">
                      {testimonial.package} Package
                    </div>
                  </div>
                </div>

                {/* Earning */}
                <div className="bg-green-500/20 rounded-lg p-3 mb-4 border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400">{testimonial.earning}</div>
                  <div className="text-green-300 text-sm">{testimonial.period}</div>
                </div>

                {/* Quote */}
                <p className="text-gray-300 text-sm leading-relaxed italic">
                  &quot;{testimonial.quote}&quot;
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl p-8 border border-green-500/30">
            <h4 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Earning Journey?
            </h4>
            <p className="text-gray-300 mb-6">
              Join thousands of students who are already earning. Your ₹200 first payout is waiting!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                Start Earning Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                View Earning Calculator
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}