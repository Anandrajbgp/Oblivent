
'use client';

import { motion } from 'framer-motion';
import { Star, TrendingUp, Award, Users } from 'lucide-react';

export function TradingTestimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Day Trader",
      location: "Mumbai",
      image: "R",
      rating: 5,
      profit: "+₹2.3L",
      period: "in 6 months",
      testimonial: "The AI insights helped me identify profitable patterns I would have missed. The platform's speed and reliability are unmatched.",
      verified: true
    },
    {
      name: "Priya Gupta",
      role: "Investment Advisor",
      location: "Delhi",
      image: "P",
      rating: 5,
      profit: "+45%",
      period: "portfolio return",
      testimonial: "Best platform for my clients' portfolios. The risk management tools and detailed analytics have improved our investment strategies significantly.",
      verified: true
    },
    {
      name: "Arjun Patel",
      role: "Options Trader",
      location: "Ahmedabad",
      image: "A",
      rating: 5,
      profit: "+₹1.8L",
      period: "monthly avg",
      testimonial: "Started as a beginner with paper trading. The learning modules and mentorship helped me become a profitable options trader.",
      verified: true
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "10,000+",
      label: "Active Traders",
      color: "text-blue-500"
    },
    {
      icon: TrendingUp,
      number: "₹50Cr+",
      label: "Daily Volume",
      color: "text-green-500"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "User Rating",
      color: "text-yellow-500"
    },
    {
      icon: Star,
      number: "99.9%",
      label: "Uptime",
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white font-semibold">Success Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> 10,000+ Traders</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real profits, real stories from our trading community
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Profit */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 text-green-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-bold text-2xl">{testimonial.profit}</span>
                </div>
                <div className="text-sm text-gray-400">{testimonial.period}</div>
              </div>

              {/* Testimonial */}
              <p className="text-gray-300 leading-relaxed italic">
                &quot;{testimonial.testimonial}&quot;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold mb-4">Join Thousands of Profitable Traders</h3>
          <p className="text-gray-300 mb-6">
            Our community has collectively earned over ₹100 Crores in profits using our platform
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Success Story
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
