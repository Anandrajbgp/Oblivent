"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Users, Globe, Sparkles } from "lucide-react";

const floatingIcons = [
  { Icon: Zap, delay: 0, position: "top-1/4 left-1/6" },
  { Icon: Shield, delay: 0.5, position: "top-1/3 right-1/6" },
  { Icon: Users, delay: 1, position: "bottom-1/3 left-1/4" },
  { Icon: Globe, delay: 1.5, position: "bottom-1/4 right-1/4" },
];

export function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Animated Background */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 bg-[length:400%_400%]"
        />
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400/10 via-transparent to-transparent" />
      </div>

      {/* Floating Background Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { opacity: 0.3, scale: 1, rotate: 0 } : {}}
            transition={{ delay: item.delay, duration: 1 }}
            className={`absolute ${item.position}`}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: index * 2,
              }}
              className="p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <item.Icon className="w-8 h-8 text-white/60" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
              <span className="text-white font-semibold">Ready to Get Started?</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Transform Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Digital Future Today
              </span>
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Join over <span className="text-yellow-400 font-bold">150,000+ users</span> who have already discovered the power of our integrated ecosystem.
            <br />
            <span className="text-purple-300">One account. Six platforms. Infinite possibilities.</span>
          </motion.p>

          {/* Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {[
              { icon: Zap, text: "Lightning Fast", color: "from-yellow-400 to-orange-400" },
              { icon: Shield, text: "Secure & Safe", color: "from-green-400 to-emerald-400" },
              { icon: Users, text: "150K+ Users", color: "from-blue-400 to-cyan-400" },
              { icon: Globe, text: "Global Access", color: "from-purple-400 to-pink-400" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-white font-medium text-sm">{feature.text}</div>
              </motion.div>
            ))}
          </motion.div>

          

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-400" />
              <span className="font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span className="font-medium">150K+ Active Users</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-medium">99.9% Uptime</span>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-gray-400 text-sm mt-8"
          >
            No credit card required • Cancel anytime • 30-day money-back guarantee
          </motion.p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-10 right-10 w-32 h-32 border border-white/10 rounded-full pointer-events-none"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-10 left-10 w-24 h-24 border border-white/10 rounded-full pointer-events-none"
        />

        {/* Particle Effects */}
        {[...Array(20)].map((_, i) => {
          // Predefined positions to avoid hydration mismatch
          const positions = [
            { left: 10, top: 20 }, { left: 85, top: 15 }, { left: 30, top: 80 }, { left: 70, top: 45 },
            { left: 15, top: 60 }, { left: 90, top: 75 }, { left: 45, top: 25 }, { left: 25, top: 90 },
            { left: 80, top: 35 }, { left: 55, top: 70 }, { left: 35, top: 40 }, { left: 75, top: 85 },
            { left: 20, top: 55 }, { left: 65, top: 20 }, { left: 40, top: 75 }, { left: 85, top: 50 },
            { left: 50, top: 30 }, { left: 15, top: 85 }, { left: 75, top: 60 }, { left: 95, top: 40 }
          ];
          const position = positions[i] || { left: 50, top: 50 };
          
          return (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: (i % 3) + 2, // Deterministic duration based on index
                repeat: Infinity,
                delay: (i % 4) * 0.5, // Deterministic delay based on index
              }}
              className="absolute w-1 h-1 bg-white/40 rounded-full pointer-events-none"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
              }}
            />
          );
        })}
      </div>
    </section>
  );
}