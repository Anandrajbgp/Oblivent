
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Gift, Sparkles, Clock, Star, Flame, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FestivalOffers() {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const festivalOffers = [
    {
      id: 1,
      title: "Diwali Mega Sale",
      subtitle: "Lights, Camera, Savings!",
      discount: "Up to 70% OFF",
      emoji: "🪔",
      gradient: "from-yellow-400 via-orange-500 to-red-500",
      textColor: "text-white",
      features: ["Free Gold-plated earbuds with every phone", "Instant cashback ₹5000", "Festival gift wrapping"],
      limited: true
    },
    {
      id: 2,
      title: "Holi Color Splash",
      subtitle: "Add Colors to Your Tech",
      discount: "Up to 60% OFF",
      emoji: "🎨",
      gradient: "from-pink-500 via-purple-500 to-blue-500",
      textColor: "text-white",
      features: ["Colorful device covers FREE", "Buy 2 Get 1 Free", "Color-themed bundles"],
      limited: false
    },
    {
      id: 3,
      title: "New Year Tech Boost",
      subtitle: "Start 2025 with Latest Tech",
      discount: "Up to 50% OFF",
      emoji: "🎆",
      gradient: "from-blue-600 via-indigo-600 to-purple-600",
      textColor: "text-white",
      features: ["2025 Calendar included", "Extended warranty", "New Year resolution tracker app"],
      limited: true
    }
  ];

  const limitedBundles = [
    {
      name: "Apple Ecosystem Bundle",
      originalPrice: "₹2,89,800",
      offerPrice: "₹1,99,900",
      savings: "₹89,900",
      items: ["iPhone 15 Pro", "MacBook Air M2", "AirPods Pro", "Apple Watch Series 9"],
      icon: "🍎",
      available: 15,
      color: "from-gray-800 to-gray-900"
    },
    {
      name: "Gaming Pro Bundle",
      originalPrice: "₹1,89,800",
      offerPrice: "₹1,29,900",
      savings: "₹59,900",
      items: ["Gaming Laptop", "Gaming Mouse", "Mechanical Keyboard", "Gaming Headset"],
      icon: "🎮",
      available: 23,
      color: "from-green-600 to-blue-600"
    },
    {
      name: "Content Creator Bundle",
      originalPrice: "₹2,19,800",
      offerPrice: "₹1,59,900",
      savings: "₹59,900",
      items: ["DSLR Camera", "MacBook Pro", "Ring Light", "Microphone", "Tripod"],
      icon: "📸",
      available: 8,
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 px-4 py-2 rounded-full mb-6">
            <Gift className="w-5 h-5 text-orange-600" />
            <span className="text-orange-800 font-medium">Festival Special</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Festival & Special Offers
            </span>
          </h2>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 inline-block border border-white/30 shadow-lg mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-red-600" size={24} />
              <span className="text-lg font-semibold text-gray-800">Festival Sale Ends In:</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-3 rounded-xl font-bold text-xl">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600 mt-1 capitalize">{unit}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Festival Themed Banners */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {festivalOffers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
            >
              <div className={`bg-gradient-to-br ${offer.gradient} p-8 h-full relative`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 right-4 text-6xl">{offer.emoji}</div>
                  <div className="absolute bottom-4 left-4 text-4xl opacity-50">{offer.emoji}</div>
                </div>

                <div className="relative z-10">
                  {offer.limited && (
                    <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-white mb-4">
                      <Flame size={14} />
                      Limited Time
                    </div>
                  )}

                  <h3 className={`text-2xl font-bold ${offer.textColor} mb-2`}>
                    {offer.title}
                  </h3>
                  <p className={`${offer.textColor} opacity-90 mb-4`}>
                    {offer.subtitle}
                  </p>

                  <div className={`text-3xl font-bold ${offer.textColor} mb-6`}>
                    {offer.discount}
                  </div>

                  <div className="space-y-2 mb-6">
                    {offer.features.map((feature, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-sm ${offer.textColor} opacity-90`}>
                        <Star size={14} className="text-yellow-300" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 rounded-2xl w-full">
                    Shop Festival Sale
                  </Button>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute top-2 right-2 text-2xl"
                >
                  <Sparkles className="text-white/60" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Limited Edition Bundles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <Crown className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Limited Edition Bundles</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800">
              Exclusive Bundle Deals
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {limitedBundles.map((bundle, index) => (
              <motion.div
                key={bundle.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 relative overflow-hidden"
              >
                {/* Limited Stock Badge */}
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                  Only {bundle.available} left
                </div>

                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${bundle.color} rounded-2xl text-white text-2xl mb-4`}>
                    {bundle.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{bundle.name}</h4>
                </div>

                <div className="space-y-3 mb-6">
                  {bundle.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <Zap size={14} className="text-blue-500" />
                      {item}
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-gray-500 line-through">{bundle.originalPrice}</div>
                    <div className="text-3xl font-bold text-green-600">{bundle.offerPrice}</div>
                    <div className="text-sm text-green-600 font-semibold">
                      You Save {bundle.savings}
                    </div>
                  </div>
                </div>

                <Button className={`w-full bg-gradient-to-r ${bundle.color} hover:opacity-90 text-white rounded-2xl py-3`}>
                  Get Bundle Deal
                </Button>

                {/* Background Decoration */}
                <div className="absolute -bottom-4 -right-4 text-6xl opacity-5">
                  {bundle.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
