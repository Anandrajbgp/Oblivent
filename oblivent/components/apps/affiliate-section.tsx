
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  DollarSign, 
  TrendingUp, 
  Award,
  Share2,
  BarChart3,
  Gift,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const affiliateFeatures = [
  {
    icon: DollarSign,
    title: "Up to 30% Commission",
    description: "Earn competitive commissions on every sale you refer",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Share2,
    title: "Easy Sharing Tools",
    description: "Custom links, banners, and marketing materials provided",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track clicks, conversions, and earnings in real-time",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Gift,
    title: "Performance Bonuses",
    description: "Extra rewards for top performers and milestone achievements",
    gradient: "from-orange-500 to-red-500"
  }
];

const earningsData = [
  { name: "Rahul S.", earnings: "₹45,230", referrals: 127, tier: "Gold" },
  { name: "Priya M.", earnings: "₹38,900", referrals: 95, tier: "Gold" },
  { name: "Amit K.", earnings: "₹52,100", referrals: 156, tier: "Platinum" },
  { name: "Sneha R.", earnings: "₹29,450", referrals: 78, tier: "Silver" },
];

export function AffiliateSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Platinum": return "text-purple-600 bg-purple-100";
      case "Gold": return "text-yellow-600 bg-yellow-100";
      case "Silver": return "text-gray-600 bg-gray-100";
      default: return "text-blue-600 bg-blue-100";
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-6 py-3 mb-6"
            >
              <DollarSign className="w-6 h-6 text-green-600" />
              <span className="text-green-700 font-semibold">Affiliate Program</span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-green-600 bg-clip-text text-transparent">
                Earn While You
              </span>
              <br />
              <span className="text-green-600">Share Great Tools</span>
            </h2>

            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              Turn your recommendations into revenue. Join our affiliate program and earn up to 30% commission 
              on every tool you recommend to your audience.
            </p>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {affiliateFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-green-100 hover:shadow-lg transition-all"
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${feature.gradient} flex-shrink-0`}>
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all">
                Join Affiliate Program
              </Button>
              <Button variant="outline" className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Earnings Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <Card className="bg-white/70 backdrop-blur-sm border border-green-100 shadow-2xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900">Affiliate Dashboard</h3>
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">₹1,24,500</div>
                    <div className="text-sm text-gray-600">Total Earnings</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">453</div>
                    <div className="text-sm text-gray-600">Referrals</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">28.5%</div>
                    <div className="text-sm text-gray-600">Conversion</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">₹15,200</div>
                    <div className="text-sm text-gray-600">This Month</div>
                  </div>
                </div>

                {/* Top Affiliates */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    Top Performers
                  </h4>
                  <div className="space-y-3">
                    {earningsData.map((affiliate, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <div className="font-medium text-slate-900">{affiliate.name}</div>
                            <div className="text-xs text-gray-600">{affiliate.referrals} referrals</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-green-600">{affiliate.earnings}</div>
                          <span className={`text-xs px-2 py-1 rounded-full ${getTierColor(affiliate.tier)}`}>
                            {affiliate.tier}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1 bg-green-600 text-white hover:bg-green-700">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Tools
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 border-green-600 text-green-600 hover:bg-green-50">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    View Stats
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
              className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <Zap className="w-8 h-8 text-white" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg"
            >
              <DollarSign className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">Join 2,000+ Active Affiliates</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">₹50L+</div>
              <div className="text-green-100">Total Paid Out</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15K+</div>
              <div className="text-green-100">Tools Promoted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30%</div>
              <div className="text-green-100">Max Commission</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24-48h</div>
              <div className="text-green-100">Payout Time</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
