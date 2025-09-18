"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star, Crown, Zap, Brain, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function PackagesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const packages = [
    {
      name: "Freemium",
      subtitle: "Start Your Journey",
      price: "Free",
      originalPrice: "",
      icon: Trophy,
      color: "from-green-500 to-emerald-600",
      bgColor: "from-green-50 to-emerald-50",
      popular: false,
      description: "Perfect for beginners to get started",
      features: [
        "1 Mock Test per day",
        "Basic performance analytics",
        "Access to study materials",
        "Community forum access",
        "Limited AI suggestions"
      ],
      limitations: [
        "Limited test history",
        "Basic leaderboard access",
        "No offline mode"
      ]
    },
    {
      name: "Premium",
      subtitle: "Complete Test Preparation",
      price: "1,999",
      originalPrice: "3,999",
      icon: Brain,
      color: "from-blue-500 to-purple-600",
      bgColor: "from-blue-50 to-purple-50",
      popular: true,
      description: "Most popular choice for serious aspirants",
      features: [
        "Unlimited Mock Tests",
        "Advanced AI-powered analytics",
        "Personalized AI mentor chat",
        "Offline test downloads",
        "Live classes & doubt sessions",
        "Detailed performance insights",
        "Weakness & strength analysis",
        "Rank prediction algorithms",
        "Priority support"
      ],
      bonus: [
        "Gamification rewards system",
        "Premium study materials",
        "Peer comparison analytics"
      ]
    },
    {
      name: "Pro Max",
      subtitle: "Ultimate Success Package",
      price: "3,999",
      originalPrice: "7,999",
      icon: Crown,
      color: "from-purple-500 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      popular: false,
      description: "For ambitious candidates who want everything",
      features: [
        "Everything from Premium",
        "1-on-1 mentorship sessions",
        "Advanced AI predictive roadmap",
        "Custom test series creation",
        "Interview preparation modules",
        "Exclusive masterclasses",
        "Priority doubt resolution",
        "Direct expert guidance",
        "Performance coaching calls"
      ],
      bonus: [
        "Lifetime access to study materials",
        "Exclusive Pro Max community",
        "Success guarantee program",
        "Referral earning opportunities"
      ]
    }
  ];

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-br from-slate-50 to-indigo-50 relative overflow-hidden"
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
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-purple-100 rounded-full px-6 py-3 mb-6"
          >
            <Zap className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">Choose Your Success Plan</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              Success Packages
            </span>
            <br />
            <span className="text-purple-600">Built for Winners</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From free practice to premium mentorship - choose the plan that fits your ambition.
            All plans include AI guidance and gamified learning.
          </p>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className={`relative ${pkg.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
            >
              {pkg.popular && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <Card className={`relative p-8 h-full bg-gradient-to-br ${pkg.bgColor} border-2 ${pkg.popular ? 'border-purple-200 shadow-2xl' : 'border-gray-100 shadow-lg'} hover:shadow-xl transition-all duration-300 group`}>
                {/* Package Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <pkg.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Package Info */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{pkg.subtitle}</p>
                  <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl font-bold text-slate-900">
                      {pkg.price === "Free" ? "Free" : `₹${pkg.price}`}
                    </span>
                    {pkg.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">₹{pkg.originalPrice}</span>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {pkg.price === "Free" ? "Forever" : "One-time payment &bull; Lifetime access"}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-3">What&apos;s Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations (for free plan) */}
                {pkg.limitations && (
                  <div className="mb-6">
                    <h4 className="font-bold text-orange-600 mb-3">Limitations:</h4>
                    <ul className="space-y-2">
                      {pkg.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <div className="w-4 h-4 border-2 border-orange-400 rounded-full mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Bonus */}
                {pkg.bonus && (
                  <div className="mb-6">
                    <h4 className="font-bold text-purple-600 mb-3">Bonus:</h4>
                    <ul className="space-y-2">
                      {pkg.bonus.map((bonus, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm">
                          <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0 fill-current" />
                          <span className="text-gray-700">{bonus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Button
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all duration-300 ${pkg.popular ? 'shadow-lg hover:shadow-xl' : ''}`}
                  size="lg"
                >
                  {pkg.price === "Free" ? "Get Started Free" : "Upgrade Now"}
                </Button>

                {/* Money Back Guarantee */}
                {pkg.price !== "Free" && (
                  <div className="text-center mt-4">
                    <span className="text-xs text-gray-500">30-day money-back guarantee</span>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <div className="bg-white/80 rounded-2xl p-6 border border-indigo-100 max-w-3xl mx-auto">
            <h4 className="font-bold text-slate-900 mb-3">🎯 Success Guarantee</h4>
            <p className="text-gray-600 mb-4">
              Join Premium or Pro Max and see improvement in 30 days, or get your money back.
              98.5% of our premium users see rank improvements!
            </p>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
              Talk to Success Counselor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}