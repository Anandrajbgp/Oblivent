
"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Search, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Download,
  Star,
  Palette,
  DollarSign,
  BarChart3,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";

const toolCategories = [
  { icon: Zap, name: "Productivity", count: "150+" },
  { icon: Star, name: "Learning", count: "120+" },
  { icon: Palette, name: "Design", count: "200+" },
  { icon: DollarSign, name: "Finance", count: "80+" },
  { icon: BarChart3, name: "Marketing", count: "90+" },
  { icon: Briefcase, name: "Business", count: "110+" },
];

const trendingTools = [
  { name: "NotionAI Templates", rating: 4.9, downloads: "25K+" },
  { name: "Canva Pro Bundle", rating: 4.8, downloads: "45K+" },
  { name: "SIP Calculator Pro", rating: 4.7, downloads: "15K+" },
  { name: "Social Media Scheduler", rating: 4.9, downloads: "30K+" },
];

export function HeroSection() {
  const [currentTool, setCurrentTool] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTool((prev) => (prev + 1) % trendingTools.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-medium">Premium Digital Tools Hub</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
                All Your Useful
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Tools, One Hub.
              </span>
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-2xl">
              Discover curated apps, websites & SaaS tools to boost productivity, learning & growth. 
              AI-powered recommendations with tutorials and real-world use cases.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="flex items-center bg-white rounded-2xl shadow-lg border border-purple-100 p-2 max-w-md">
                <Search className="w-5 h-5 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder="Search tools, apps, websites..."
                  className="flex-1 px-4 py-3 text-gray-700 bg-transparent border-none outline-none"
                />
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all">
                  Search
                </Button>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all">
                Explore Tools
              </Button>
              <Button variant="outline" className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-2xl font-semibold hover:bg-purple-50 transition-all">
                Submit Your Tool
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600">750+</div>
                <div className="text-gray-600 text-sm">Verified Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">100K+</div>
                <div className="text-gray-600 text-sm">Happy Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-indigo-600">4.9★</div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Tool Categories & Trending */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Tool Categories Grid */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Popular Categories</h3>
              <div className="grid grid-cols-2 gap-4">
                {toolCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100 hover:shadow-lg transition-all cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800">{category.name}</div>
                      <div className="text-sm text-gray-600">{category.count} tools</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trending Tools Carousel */}
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-orange-500" />
                <h3 className="text-xl font-bold text-gray-800">Trending Now</h3>
              </div>
              
              <motion.div
                key={currentTool}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{trendingTools[currentTool].name}</h4>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current text-yellow-300" />
                    <span className="text-sm">{trendingTools[currentTool].rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span className="text-sm">{trendingTools[currentTool].downloads} downloads</span>
                  </div>
                  <Button size="sm" className="bg-white/20 hover:bg-white/30 text-white border-none">
                    View Tool
                  </Button>
                </div>
              </motion.div>

              {/* Carousel Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {trendingTools.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTool ? 'bg-purple-600 w-6' : 'bg-gray-300'
                    }`}
                    onClick={() => setCurrentTool(index)}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
