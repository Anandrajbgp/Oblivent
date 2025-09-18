
'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Zap, Clock, Gift, Sparkles, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DealsFlashSales() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  const [isSpinning, setIsSpinning] = useState(false);
  const [spinResult, setSpinResult] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const spinWheel = () => {
    setIsSpinning(true);
    const prizes = [
      "10% OFF", "20% OFF", "Free Shipping", "₹100 OFF", 
      "30% OFF", "Buy 1 Get 1", "₹500 OFF", "Free Product"
    ];
    
    setTimeout(() => {
      setIsSpinning(false);
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      setSpinResult(randomPrize);
    }, 3000);
  };

  const flashDeals = [
    { 
      name: "iPhone 15 Pro Max", 
      originalPrice: "₹1,59,900", 
      salePrice: "₹1,34,900", 
      discount: "15%",
      image: "📱",
      stock: "Limited Stock"
    },
    { 
      name: "MacBook Pro M3", 
      originalPrice: "₹2,39,900", 
      salePrice: "₹1,99,900", 
      discount: "17%",
      image: "💻",
      stock: "3 Left"
    },
    { 
      name: "AirPods Pro 2", 
      originalPrice: "₹26,900", 
      salePrice: "₹19,900", 
      discount: "26%",
      image: "🎧",
      stock: "Hot Deal"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5 text-red-600" />
            <span className="text-red-800 font-medium">Flash Sale Active</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              Daily Deals & Flash Sales
            </span>
          </h2>

          {/* Countdown Timer */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <Clock className="text-red-600" size={24} />
            <div className="flex gap-2">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-red-600 text-white px-4 py-2 rounded-xl font-bold">
                  {String(value).padStart(2, '0')}
                  <div className="text-xs opacity-80">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Flash Deals */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">⚡ Flash Deals</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {flashDeals.map((deal, index) => (
                <motion.div
                  key={deal.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-red-100"
                >
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-2">{deal.image}</div>
                    <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full inline-block mb-2">
                      {deal.discount} OFF
                    </div>
                  </div>

                  <h4 className="font-bold text-gray-800 mb-2">{deal.name}</h4>
                  
                  <div className="mb-3">
                    <div className="text-2xl font-bold text-green-600">{deal.salePrice}</div>
                    <div className="text-sm text-gray-500 line-through">{deal.originalPrice}</div>
                  </div>

                  <div className="text-xs text-red-600 font-semibold mb-4">{deal.stock}</div>

                  <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white rounded-2xl">
                    Buy Now
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Spinning Wheel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-xl border-2 border-yellow-200"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                🎯 Daily Spin & Win
              </h3>

              <div className="text-center mb-6">
                <motion.div
                  animate={isSpinning ? { rotate: 1080 } : {}}
                  transition={{ duration: 3, ease: "easeOut" }}
                  className="inline-block"
                >
                  <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-4xl cursor-pointer hover:scale-105 transition-transform"
                    onClick={spinWheel}
                  >
                    🎰
                  </div>
                </motion.div>
              </div>

              {spinResult && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="bg-green-100 border border-green-300 rounded-2xl p-4 mb-4 text-center"
                >
                  <Sparkles className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <div className="font-bold text-green-800">You Won!</div>
                  <div className="text-2xl font-bold text-green-600">{spinResult}</div>
                </motion.div>
              )}

              <Button
                onClick={spinWheel}
                disabled={isSpinning}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white rounded-2xl"
              >
                {isSpinning ? (
                  <>
                    <RotateCcw className="mr-2 animate-spin" size={20} />
                    Spinning...
                  </>
                ) : (
                  <>
                    <Gift className="mr-2" size={20} />
                    Spin for Discount
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                * Free spin available daily. Terms apply.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
