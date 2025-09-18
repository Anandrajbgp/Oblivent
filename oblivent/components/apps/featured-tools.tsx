
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { 
  Star, 
  Download, 
  ExternalLink, 
  Heart, 
  Shield, 
  TrendingUp,
  Award,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const featuredTools = [
  {
    id: 1,
    name: "NotionAI Pro Templates",
    category: "Productivity",
    description: "50+ premium Notion templates for productivity, project management, and personal organization",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=240&fit=crop",
    rating: 4.9,
    downloads: "25.4K",
    price: "Free",
    verified: true,
    trending: true,
    tags: ["Templates", "Productivity", "Organization"],
    features: ["50+ Templates", "Lifetime Updates", "Video Tutorials"]
  },
  {
    id: 2,
    name: "Canva Pro Bundle",
    category: "Design",
    description: "Complete design toolkit with premium templates, fonts, and graphics for creators",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=240&fit=crop",
    rating: 4.8,
    downloads: "45.2K",
    price: "₹299/mo",
    verified: true,
    trending: true,
    tags: ["Design", "Graphics", "Templates"],
    features: ["Premium Templates", "Brand Kit", "Magic Resize"]
  },
  {
    id: 3,
    name: "SIP Calculator Pro",
    category: "Finance",
    description: "Advanced SIP calculator with portfolio tracking and financial planning tools",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=240&fit=crop",
    rating: 4.7,
    downloads: "15.8K",
    price: "₹99",
    verified: true,
    trending: false,
    tags: ["Finance", "Investment", "Calculator"],
    features: ["SIP Planning", "Goal Tracking", "Tax Calculator"]
  },
  {
    id: 4,
    name: "Social Media Scheduler",
    category: "Marketing",
    description: "Schedule and manage social media posts across multiple platforms with analytics",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=240&fit=crop",
    rating: 4.9,
    downloads: "32.1K",
    price: "₹499/mo",
    verified: true,
    trending: true,
    tags: ["Social Media", "Marketing", "Automation"],
    features: ["Multi-Platform", "Analytics", "Team Collaboration"]
  },
  {
    id: 5,
    name: "Language Learning AI",
    category: "Learning",
    description: "AI-powered language learning with personalized lessons and speech recognition",
    image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&h=240&fit=crop",
    rating: 4.6,
    downloads: "18.7K",
    price: "₹199/mo",
    verified: true,
    trending: false,
    tags: ["Language", "AI", "Education"],
    features: ["15 Languages", "Speech Recognition", "Progress Tracking"]
  },
  {
    id: 6,
    name: "Invoice Generator Pro",
    category: "Business",
    description: "Professional invoice generator with payment tracking and client management",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=240&fit=crop",
    rating: 4.8,
    downloads: "22.3K",
    price: "₹149",
    verified: true,
    trending: false,
    tags: ["Business", "Invoice", "Finance"],
    features: ["Custom Branding", "Payment Tracking", "Client Portal"]
  }
];

export function FeaturedToolsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (toolId: number) => {
    setFavorites(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full px-6 py-3 mb-6"
          >
            <Award className="w-6 h-6 text-orange-600" />
            <span className="text-orange-700 font-semibold">Featured Tools</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              Top Rated &
            </span>
            <br />
            <span className="text-orange-600">Most Downloaded</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the most popular and highest-rated tools trusted by thousands of users worldwide.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTools.map((tool, index) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Overlay Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {tool.verified && (
                      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                    {tool.trending && (
                      <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </span>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(tool.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all"
                  >
                    <Heart className={`w-4 h-4 ${favorites.includes(tool.id) ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
                  </button>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      className="bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-white transition-all"
                    >
                      <Play className="w-6 h-6 text-gray-800" />
                    </motion.button>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                        {tool.name}
                      </h3>
                      <span className="text-sm text-purple-600 font-medium bg-purple-50 px-3 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">{tool.price}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {tool.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {tool.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{tool.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-4 h-4" />
                        <span>{tool.downloads}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transition-all">
                      <Download className="w-4 h-4 mr-2" />
                      Install
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all">
            View All Tools
          </Button>
          <p className="text-gray-600 mt-4">
            Discover 750+ more premium tools in our complete catalog
          </p>
        </motion.div>
      </div>
    </section>
  );
}
