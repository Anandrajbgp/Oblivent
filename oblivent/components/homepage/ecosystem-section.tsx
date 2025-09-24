"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Globe, Users, Rocket, Zap, Brain, Shield } from "lucide-react";
import { Counter as SharedCounter } from "@/components/shared/counter";

// Helper to calculate dynamic count based on days passed
const getBaseCount = (baseValue: number) => {
  const today = new Date();
  const startDate = new Date("2024-01-01");
  const daysPassed = Math.floor(
    (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
  return baseValue + daysPassed;
};

// Enhanced trust-building stats for ecosystem
const ecosystemFeatures = [
  { icon: Users, count: getBaseCount(250000), suffix: "+", label: "Happy Users", isK: true },
  { icon: Globe, count: getBaseCount(50000), suffix: "+", label: "Active Learners", isK: true },
  { icon: Rocket, count: getBaseCount(15000), suffix: "+", label: "Successful Projects", isK: true },
  { icon: Zap, count: 99.9, suffix: "%", label: "System Uptime", isK: false },
  { icon: Brain, count: getBaseCount(2500000), suffix: "+", label: "Payouts Given", prefix: "₹", isK: true },
  { icon: Shield, count: 4.8, suffix: "/5", label: "User Rating", isK: false },
];

// Counter component
function Counter({
  end,
  suffix,
  duration = 2,
  isK = false,
}: {
  end: number;
  suffix: string;
  duration?: number;
  isK?: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // ✅ Updated from threshold

  useEffect(() => {
    if (isInView) {
      setCount(0); // Reset count when in view
      const interval = setInterval(() => {
        setCount((prev) => {
          const increment = end / (duration * 60); // 60 FPS
          const next = prev + increment;
          if (next >= end) {
            clearInterval(interval);
            return end;
          }
          return next;
        });
      }, 1000 / 60);

      return () => clearInterval(interval);
    }
  }, [isInView, end, duration]);

  const formatNumber = (num: number) => {
    if (isK && num >= 1000) return Math.floor(num / 1000) + "K";
    return Math.floor(num);
  };

  return (
    <span ref={ref} className="inline-block">
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

// Ecosystem Section
export function EcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // ✅ Triggers once

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]" />
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
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-purple-100 rounded-full px-6 py-3 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-6 h-6 text-purple-600" />
            </motion.div>
            <span className="text-purple-700 font-semibold">Digital Ecosystem</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              One Platform,
            </span>
            <br />
            <span className="text-purple-600">Endless Opportunities</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of unified innovation. Our ecosystem connects learning, business, trading, and technology into one seamless experience.
          </p>
        </motion.div>

        {/* Central Hub Visualization */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Central Hub */}
            <div className="flex items-center justify-center">
              <motion.div className="w-32 h-32 bg-white border-2 border-purple-200 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                <span className="text-purple-600 font-bold text-xl">Oblivent</span>
              </motion.div>
            </div>

            {/* Orbit Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 border-2 border-dashed border-purple-200 rounded-full" />
              <div className="absolute w-96 h-96 border border-purple-100 rounded-full" />
            </div>

            {/* Platform Orbits */}
            {[
              { name: "E-Learning", angle: 0, color: "from-blue-500 to-blue-600" },
              { name: "Agency", angle: 60, color: "from-purple-500 to-purple-600" },
              { name: "Exams", angle: 120, color: "from-green-500 to-green-600" },
              { name: "Trading", angle: 180, color: "from-orange-500 to-orange-600" },
              { name: "Apps", angle: 240, color: "from-pink-500 to-pink-600" },
              { name: "Mart", angle: 300, color: "from-red-500 to-red-600" },
            ].map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${platform.angle}deg) translateY(-140px) rotate(-${platform.angle}deg)`,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-full flex items-center justify-center shadow-lg cursor-pointer`}
                >
                  <span className="text-white text-xs font-semibold text-center leading-tight">
                    {platform.name}
                  </span>
                </motion.div>

                {/* Connection Line */}
                <div
                  className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-purple-300 to-transparent origin-left -z-10"
                  style={{ transform: `translate(-50%, -50%) rotate(${platform.angle + 180}deg)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {ecosystemFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-purple-600" />
              </motion.div>

              <div className="text-3xl font-bold text-slate-900 mb-2">
                <SharedCounter
                  end={feature.count}
                  suffix={feature.suffix}
                  duration={2}
                  isK={feature.isK}
                  prefix={feature.prefix}
                />
              </div>

              <div className="text-gray-600 font-medium">{feature.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-16"
        >
          {[
            { number: 99, suffix: "%", label: "Customer Satisfaction" },
            { number: 24, suffix: "/7", label: "Support Available" },
            { number: 15000, suffix: "+", label: "Certificates Issued", isK: true },
            { number: 100, suffix: "%", label: "Secure Platform" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-white/80 to-purple-50/80 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">
                <Counter
                  end={stat.number}
                  suffix={stat.suffix}
                  duration={2}
                  isK={stat.isK}
                />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-wrap justify-center items-center gap-8 mt-12 mb-16"
        >
          {[
            "ISO Certified",
            "SSL Secured",
            "GDPR Compliant",
            "24/7 Monitored",
            "Bank-Grade Security",
            "Award Winning"
          ].map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 py-2"
            >
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-green-700 font-medium text-sm">{badge}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            Join <span className="font-bold text-purple-600">2,50,000+</span> users already transforming their digital experience
          </p>
          <p className="text-sm text-gray-500">
            Trusted by individuals and businesses worldwide • Founded in 2020 • Serving 50+ countries
          </p>
        </motion.div>
      </div>
    </section>
  );
}
