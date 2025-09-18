
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Package, 
  Clock, 
  Zap, 
  Star, 
  ArrowRight,
  Gift,
  Crown,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const bundles = [
  {
    id: 1,
    title: "Ultimate Productivity Bundle",
    description: "Everything you need to boost productivity and streamline your workflow",
    originalPrice: 2499,
    bundlePrice: 999,
    discount: 60,
    tools: [
      { name: "NotionAI Pro", price: 599, icon: "📝" },
      { name: "Task Master Pro", price: 399, icon: "✅" },
      { name: "Time Tracker Elite", price: 299, icon: "⏰" },
      { name: "Focus Assistant", price: 199, icon: "🎯" },
      { name: "Workflow Automation", price: 999, icon: "⚡" }
    ],
    features: ["Lifetime Access", "Free Updates", "Priority Support", "Bonus Templates"],
    badge: "Most Popular",
    badgeColor: "bg-orange-500",
    gradient: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Creative Designer Kit",
    description: "Complete design toolkit for creators, freelancers, and agencies",
    originalPrice: 3999,
    bundlePrice: 1499,
    discount: 62,
    tools: [
      { name: "Design Templates Pro", price: 899, icon: "🎨" },
      { name: "Stock Photo Bundle", price: 699, icon: "📸" },
      { name: "Video Editor Pro", price: 1299, icon: "🎬" },
      { name: "Font Collection", price: 399, icon: "🔤" },
      { name: "Icon Library", price: 699, icon: "🎪" }
    ],
    features: ["Commercial License", "4K Assets", "Monthly Updates", "Design Courses"],
    badge: "Best Value",
    badgeColor: "bg-green-500",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    id: 3,
    title: "Entrepreneur Starter Pack",
    description: "Essential tools for starting and growing your business online",
    originalPrice: 1999,
    bundlePrice: 699,
    discount: 65,
    tools: [
      { name: "Business Plan Template", price: 299, icon: "📊" },
      { name: "Invoice Generator", price: 399, icon: "💳" },
      { name: "Social Media Kit", price: 499, icon: "📱" },
      { name: "Website Builder", price: 599, icon: "🌐" },
      { name: "Marketing Tools", price: 199, icon: "📈" }
    ],
    features: ["1-Year License", "Business Support", "Training Videos", "Community Access"],
    badge: "Limited Time",
    badgeColor: "bg-red-500",
    gradient: "from-green-500 to-teal-600"
  }
];

const flashDeals = [
  { 
    name: "AI Writing Assistant", 
    originalPrice: 299, 
    dealPrice: 99, 
    timeLeft: "2h 15m",
    discount: 67
  },
  { 
    name: "Premium Icon Pack", 
    originalPrice: 199, 
    dealPrice: 49, 
    timeLeft: "5h 42m",
    discount: 75
  },
  { 
    name: "Social Media Templates", 
    originalPrice: 399, 
    dealPrice: 149, 
    timeLeft: "1h 33m",
    discount: 63
  }
];

export function BundlesDealsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
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
            <Package className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-semibold">Smart Bundles & Deals</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Save Big with
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Smart Bundles
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Get premium tool collections at unbeatable prices. Curated bundles for every workflow and budget.
          </p>
        </motion.div>

        {/* Flash Deals Bar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl p-6 mb-12"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">⚡ Flash Deals</h3>
                <p className="text-red-100">Limited time offers - grab them fast!</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-white font-bold">Deals ending soon!</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {flashDeals.map((deal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-white">{deal.name}</h4>
                  <span className="bg-white/20 text-xs px-2 py-1 rounded-full text-white">
                    -{deal.discount}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-red-200 line-through text-sm">₹{deal.originalPrice}</span>
                    <span className="text-white font-bold text-lg ml-2">₹{deal.dealPrice}</span>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-300 text-sm">
                    <Clock className="w-4 h-4" />
                    {deal.timeLeft}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bundles Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {bundles.map((bundle, index) => (
            <motion.div
              key={bundle.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border-0 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500">
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${bundle.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1`}>
                  <Crown className="w-3 h-3" />
                  {bundle.badge}
                </div>

                <CardContent className="p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${bundle.gradient} shadow-lg mb-4 w-fit`}>
                      <Package className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                      {bundle.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {bundle.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div className="bg-white/5 rounded-2xl p-4 mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 line-through text-lg">₹{bundle.originalPrice}</span>
                      <span className="bg-green-500 text-white text-sm font-bold px-2 py-1 rounded-full">
                        Save {bundle.discount}%
                      </span>
                    </div>
                    <div className="text-3xl font-bold text-white">₹{bundle.bundlePrice}</div>
                    <div className="text-green-400 text-sm">You save ₹{bundle.originalPrice - bundle.bundlePrice}</div>
                  </div>

                  {/* Tools Included */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <Gift className="w-4 h-4" />
                      Includes {bundle.tools.length} Premium Tools:
                    </h4>
                    <div className="space-y-2">
                      {bundle.tools.map((tool, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <span>{tool.icon}</span>
                            <span className="text-gray-300">{tool.name}</span>
                          </div>
                          <span className="text-gray-400">₹{tool.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Bundle Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {bundle.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Button className={`w-full bg-gradient-to-r ${bundle.gradient} text-white font-semibold py-4 rounded-xl hover:shadow-lg transition-all group-hover:scale-105`}>
                    <div className="flex items-center justify-center gap-2">
                      Get Bundle Now
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Button>

                  {/* Social Proof */}
                  <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {Math.floor(Math.random() * 1000) + 500}+ purchased
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      4.{Math.floor(Math.random() * 3) + 7}/5
                    </div>
                  </div>
                </CardContent>

                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${bundle.gradient} opacity-5 pointer-events-none`}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Want Custom Bundle Recommendations?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Tell us about your workflow and we&apos;ll create a personalized bundle just for you with AI-powered recommendations.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all">
              Get AI Recommendations
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
