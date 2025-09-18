"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BookOpen, Building2, TrendingUp, Smartphone, ShoppingBag, Trophy, Sparkles } from "lucide-react";

function Counter({ end, suffix }: { end: number | string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          if (typeof end === 'string') {
            setCount(parseFloat(end) || 0);
            return;
          }
          
          const timer = setInterval(() => {
            setCount((prevCount) => {
              const increment = end / 120; // 2 seconds at 60fps
              const nextCount = prevCount + increment;
              
              if (nextCount >= end) {
                clearInterval(timer);
                return end;
              }
              return nextCount;
            });
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, isVisible]);

  const formatNumber = (num: number) => {
    if (typeof end === 'string') return end;
    return Math.floor(num);
  };

  return (
    <span ref={ref} className="inline-block">
      {formatNumber(count)}{suffix || ''}
    </span>
  );
}

const platformIcons = [
  { Icon: BookOpen, color: "text-blue-400", delay: 0.2 },
  { Icon: Building2, color: "text-purple-400", delay: 0.4 },
  { Icon: Trophy, color: "text-green-400", delay: 0.6 },
  { Icon: TrendingUp, color: "text-orange-400", delay: 0.8 },
  { Icon: Smartphone, color: "text-pink-400", delay: 1.0 },
  { Icon: ShoppingBag, color: "text-red-400", delay: 1.2 },
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 bg-[length:400%_400%]"
        />
      </div>

      {/* Floating Platform Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {platformIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: item.delay, duration: 0.8 }}
            className={`absolute ${getRandomPosition(index)}`}
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: index * 0.5,
              }}
              className={`p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 ${item.color}`}
            >
              <item.Icon className="w-5 h-5" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
            <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Oblivent
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-3xl md:text-5xl font-extrabold mb-6"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
            One Account.
          </span>
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Six Worlds.
          </span>
          <br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Infinite Possibilities.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Premium digital ecosystem competing with{" "}
          <span className="text-purple-400 font-semibold">Stripe</span>,{" "}
          <span className="text-blue-400 font-semibold">Notion</span> &{" "}
          <span className="text-green-400 font-semibold">Shopify</span>
          <br />
          E-Learning • Digital Agency • Trading • Apps • Mart • Exams
        </motion.p>

        

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {[
            { number: 6, suffix: "", label: "Platforms" },
            { number: 1000000, suffix: "+", label: "Users", isK: true },
            { number: "99.9", suffix: "%", label: "Uptime" },
            { number: "24/7", suffix: "", label: "Support" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold text-white mb-1"
              >
                {typeof stat.number === 'string' ? stat.number : 
                 stat.isK ? <><Counter end={stat.number / 1000} />K{stat.suffix}</> : 
                 <Counter end={stat.number} suffix={stat.suffix} />}
              </motion.div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function getRandomPosition(index: number) {
  const positions = [
    "top-1/4 left-1/4",
    "top-1/3 right-1/4", 
    "top-1/2 left-1/6",
    "top-2/3 right-1/6",
    "bottom-1/3 left-1/3",
    "bottom-1/4 right-1/3",
  ];
  return positions[index % positions.length];
}