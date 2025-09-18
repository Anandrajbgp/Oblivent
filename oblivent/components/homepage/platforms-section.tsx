"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle,
  Sparkles,
  Smartphone,
  Brain,
  Clock
} from "lucide-react";

function Counter({ end }: { end: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          const isPercent = end.includes('%');
          const isMs = end.includes('ms');
          const isMin = end.includes('min');
          const isPlus = end.includes('+');
          const isNumber = !isNaN(parseInt(end));

          let numValue: number;

          if (isPercent) numValue = parseFloat(end);
          else if (isMs) numValue = parseInt(end);
          else if (isMin) numValue = parseInt(end);
          else if (isPlus) numValue = parseInt(end);
          else if (isNumber) numValue = parseInt(end);
          else numValue = 0;

          const timer = setInterval(() => {
            setCount(prev => {
              const increment = numValue / 120;
              const nextCount = prev + increment;
              if (nextCount >= numValue) {
                clearInterval(timer);
                return numValue;
              }
              return nextCount;
            });
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [end, isVisible]);

  const formatNumber = (num: number) => {
    if (end.includes('%')) return num.toFixed(1) + '%';
    if (end.includes('ms')) return '<' + Math.floor(num) + 'ms';
    if (end.includes('min')) return '<' + Math.floor(num) + 'min';
    if (end === '24/7') return '24/7';
    if (end.includes('+')) return Math.floor(num) + '+';
    return Math.floor(num);
  };

  if (end === '24/7') return <span ref={ref}>24/7</span>;

  return (
    <span ref={ref} className="inline-block">
      {formatNumber(count)}
    </span>
  );
}

const features = [
  {
    icon: Zap,
    title: "50ms Lightning Fast",
    description: "Optimized for speed with 99.9% uptime guarantee and instant loading across all platforms.",
    color: "from-yellow-400 to-orange-500",
    bgColor: "from-yellow-50 to-orange-50"
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Enterprise-grade encryption and security protocols protecting your data 24/7.",
    color: "from-green-400 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50"
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Seamlessly responsive experience optimized for all devices and screen sizes.",
    color: "from-pink-400 to-rose-500",
    bgColor: "from-pink-50 to-rose-50"
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Smart recommendations, predictive analytics, and personalized experiences.",
    color: "from-purple-400 to-violet-500",
    bgColor: "from-purple-50 to-violet-50"
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Available worldwide with multi-language support and local payment methods.",
    color: "from-blue-400 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support with instant chat and priority assistance.",
    color: "from-indigo-400 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50"
  }
];

const highlights = [
  "One-click platform switching",
  "Unified payment system",
  "Cross-platform data sync",
  "Advanced analytics dashboard",
  "API integration support",
  "Custom white-label solutions"
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-blue-600/5 bg-[length:400%_400%]"
        />
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
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
            <span className="text-white font-semibold">Premium Features</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Built for
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Every feature is designed with user experience, performance, and scalability in mind.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 h-full"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg mb-6`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-5 rounded-3xl pointer-events-none`}
                />

                {/* Floating particles */}
                <motion.div
                  animate={{ y: [0, -20, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute top-4 right-4 w-2 h-2 bg-white/40 rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Highlights List */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-8">
              What Makes Us <span className="text-purple-400">Different</span>
            </h3>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center flex-shrink-0"
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 1.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "99.9%", label: "Uptime", color: "from-green-400 to-emerald-500" },
                { number: "<30min", label: "Response Time", color: "from-blue-400 to-cyan-500" },
                { number: "150+", label: "Countries", color: "from-purple-400 to-violet-500" },
                { number: "24/7", label: "Support", color: "from-orange-400 to-red-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    <Counter end={stat.number} />
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-purple-400/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-blue-400/30 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}