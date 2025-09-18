
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Users, 
  Award, 
  TrendingUp, 
  Star,
  ExternalLink,
  Crown,
  Trophy,
  DollarSign
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const topCreators = [
  {
    id: 1,
    name: "Alex Thompson",
    title: "Productivity Expert",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    tools: 15,
    downloads: "125K+",
    rating: 4.9,
    verified: true,
    topTool: "NotionAI Templates",
    earnings: "₹2.5L",
    badge: "Top Creator",
    speciality: "Productivity & Organization",
    description: "Helping professionals boost productivity with proven templates and systems."
  },
  {
    id: 2,
    name: "Sarah Chen",
    title: "Design Guru",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=100&h=100&fit=crop&crop=face",
    tools: 23,
    downloads: "89K+",
    rating: 4.8,
    verified: true,
    topTool: "Design Template Bundle",
    earnings: "₹1.8L",
    badge: "Rising Star",
    speciality: "UI/UX Design",
    description: "Creating beautiful, functional design resources for modern creators."
  },
  {
    id: 3,
    name: "Raj Patel",
    title: "Finance Wizard",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    tools: 8,
    downloads: "67K+",
    rating: 4.7,
    verified: true,
    topTool: "SIP Calculator Pro",
    earnings: "₹95K",
    badge: "Expert",
    speciality: "Financial Planning",
    description: "Simplifying complex financial calculations for smart investors."
  },
  {
    id: 4,
    name: "Maya Singh",
    title: "Marketing Maven",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    tools: 12,
    downloads: "94K+",
    rating: 4.9,
    verified: true,
    topTool: "Social Media Kit",
    earnings: "₹1.2L",
    badge: "Trending",
    speciality: "Digital Marketing",
    description: "Growth hacking tools and strategies for ambitious marketers."
  }
];

export function CreatorSpotlightSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getBadgeStyle = (badge: string) => {
    switch (badge) {
      case "Top Creator":
        return "bg-gradient-to-r from-yellow-500 to-orange-500";
      case "Rising Star":
        return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "Expert":
        return "bg-gradient-to-r from-blue-500 to-cyan-500";
      case "Trending":
        return "bg-gradient-to-r from-green-500 to-emerald-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6"
          >
            <Trophy className="w-6 h-6 text-purple-600" />
            <span className="text-purple-700 font-semibold">Creator Spotlight</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              Meet Our Top
            </span>
            <br />
            <span className="text-purple-600">Tool Creators</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the talented creators behind your favorite tools and join our thriving creator economy.
          </p>
        </motion.div>

        {/* Creators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {topCreators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Badge */}
                <div className={`absolute top-4 right-4 ${getBadgeStyle(creator.badge)} text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1`}>
                  <Crown className="w-3 h-3" />
                  {creator.badge}
                </div>

                <CardContent className="p-6 text-center h-full flex flex-col">
                  {/* Avatar */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative"
                    >
                      <img
                        src={creator.avatar}
                        alt={creator.name}
                        className="w-20 h-20 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
                      />
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Award className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors">
                    {creator.name}
                  </h3>
                  
                  <p className="text-purple-600 font-medium mb-2">{creator.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{creator.speciality}</p>
                  
                  <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">
                    {creator.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900">{creator.tools}</div>
                      <div className="text-xs text-gray-500">Tools</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900">{creator.downloads}</div>
                      <div className="text-xs text-gray-500">Downloads</div>
                    </div>
                  </div>

                  {/* Top Tool */}
                  <div className="bg-purple-50 rounded-lg p-3 mb-4">
                    <div className="text-xs text-purple-600 font-medium mb-1">Top Tool:</div>
                    <div className="font-semibold text-slate-900">{creator.topTool}</div>
                  </div>

                  {/* Rating & Earnings */}
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{creator.rating}</span>
                    </div>
                    <div className="text-green-600 font-bold">{creator.earnings}</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg transition-all text-sm">
                      View Profile
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>

                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 pointer-events-none"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Become Creator CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold">Join Our Creator Program</h3>
                </div>
                
                <p className="text-xl text-purple-100 mb-8">
                  Share your expertise, build your audience, and earn from your digital creations.
                  Join 500+ creators already earning on our platform.
                </p>

                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  {[
                    { icon: Upload, text: "Upload Tools", desc: "Share your creations" },
                    { icon: TrendingUp, text: "Grow Audience", desc: "Build your following" },
                    { icon: DollarSign, text: "Earn Revenue", desc: "70% revenue share" },
                    { icon: Award, text: "Get Recognition", desc: "Featured placement" }
                  ].map((item, idx) => (
                    <div key={idx} className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="font-semibold text-white mb-1">{item.text}</div>
                      <div className="text-sm text-purple-100">{item.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl transition-all">
                    Start Creating Today
                  </Button>
                  <Button variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all">
                    Learn More
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

// Missing imports for the creator section
const Upload = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
);
