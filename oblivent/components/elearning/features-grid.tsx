"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Shield, 
  Award, 
  Clock, 
  Users, 
  HeadphonesIcon, 
  Smartphone,
  TrendingUp,
  BookOpen,
  Video,
  Download,
  MessageCircle,
  Star
} from "lucide-react";

export function FeaturesGridSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const trustBadges = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "256-bit SSL encrypted payments",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Award,
      title: "Verified Certificates",
      description: "QR code verified & LinkedIn ready",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Weekly Payouts",
      description: "Guaranteed payments every Saturday",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Users,
      title: "Trusted Platform",
      description: "50,000+ satisfied students",
      color: "from-orange-500 to-red-600"
    }
  ];

  const platformFeatures = [
    {
      icon: Video,
      title: "HD Video Learning",
      description: "Crystal clear videos with subtitles & variable speed playback",
      category: "Learning"
    },
    {
      icon: BookOpen,
      title: "300+ Courses",
      description: "Comprehensive library from beginner to expert level",
      category: "Content"
    },
    {
      icon: Download,
      title: "Downloadable Resources",
      description: "PDFs, templates, and tools for offline access",
      category: "Resources"
    },
    {
      icon: MessageCircle,
      title: "Community Support",
      description: "24/7 peer support and mentor guidance",
      category: "Support"
    },
    {
      icon: Smartphone,
      title: "Mobile Learning",
      description: "Learn anywhere with our mobile-optimized platform",
      category: "Accessibility"
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "AI-powered analytics to track your learning journey",
      category: "Analytics"
    },
    {
      icon: HeadphonesIcon,
      title: "Priority Support",
      description: "Dedicated support team for Pro & Expert members",
      category: "Support"
    },
    {
      icon: Star,
      title: "Gamification",
      description: "Badges, leaderboards, and rewards for motivation",
      category: "Engagement"
    }
  ];

  const categoryColors = {
    Learning: "from-blue-500 to-purple-600",
    Content: "from-green-500 to-emerald-600", 
    Resources: "from-orange-500 to-red-600",
    Support: "from-purple-500 to-pink-600",
    Accessibility: "from-indigo-500 to-blue-600",
    Analytics: "from-pink-500 to-rose-600",
    Engagement: "from-yellow-500 to-orange-600"
  };

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:30px_30px]" />
      </div>

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
            className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-6 py-3 mb-6"
          >
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Platform Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              Why Choose
            </span>
            <br />
            <span className="text-blue-600">Oblivent Academy?</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Not just courses, but a complete ecosystem. Trust, quality, and earning opportunities - 
            everything on one platform.
          </p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">Trust & Security</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}
                >
                  <badge.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h4 className="font-bold text-slate-900 mb-2">{badge.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{badge.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Platform Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800">Platform Capabilities</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`px-3 py-1 bg-gradient-to-r ${categoryColors[feature.category as keyof typeof categoryColors]} rounded-full text-white text-xs font-semibold`}>
                    {feature.category}
                  </div>
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 bg-gradient-to-br from-gray-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300"
                >
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </motion.div>

                {/* Content */}
                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <h3 className="text-3xl font-bold mb-6">Complete Learning Ecosystem</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">300+</div>
                  <div className="text-blue-100">Expert Courses</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Support Available</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50K+</div>
                  <div className="text-blue-100">Happy Students</div>
                </div>
              </div>
              
              <p className="text-xl text-blue-100 mt-8 max-w-2xl mx-auto">
                सिर्फ courses नहीं, complete career transformation। 
                Real skills, real earning opportunities, real support.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "99.9%", label: "Platform Uptime", icon: Shield },
              { number: "4.8/5", label: "Student Rating", icon: Star },
              { number: "2020", label: "Since", icon: Award },
              { number: "₹4.7Cr+", label: "Payouts Given", icon: TrendingUp }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 2 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-blue-600" />
                </motion.div>
                <div className="text-2xl font-bold text-slate-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}