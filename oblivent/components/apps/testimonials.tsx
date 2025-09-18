
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, Play, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Arjun Sharma",
    title: "Digital Marketing Specialist",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Oblivent Apps transformed my productivity workflow. The AI recommendations are spot-on, and I've discovered tools I never knew existed. The bundle deals saved me thousands!",
    toolsUsed: 15,
    savings: "₹12,000",
    category: "Productivity"
  },
  {
    id: 2,
    name: "Priya Mehta", 
    title: "Freelance Designer",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "As a freelancer, finding quality design tools within budget was always a challenge. This platform curates the best tools and offers amazing creator bundles. Highly recommended!",
    toolsUsed: 23,
    savings: "₹8,500",
    category: "Design"
  },
  {
    id: 3,
    name: "Rahul Gupta",
    title: "Startup Founder", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The entrepreneur bundle is incredible value. Got all essential business tools for a fraction of individual costs. The tutorials and community support are bonus perks!",
    toolsUsed: 8,
    savings: "₹15,000",
    category: "Business"
  },
  {
    id: 4,
    name: "Sneha Patel",
    title: "Content Creator",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Love how organized everything is! The wishlist feature, AI suggestions, and creator spotlight helped me discover tools that boosted my content quality significantly.",
    toolsUsed: 19,
    savings: "₹6,800",
    category: "Creative"
  },
  {
    id: 5,
    name: "Amit Singh",
    title: "Finance Professional",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The finance tools section is comprehensive. Found excellent SIP calculators, budget trackers, and investment planning tools. The verification badges give confidence in tool quality.",
    toolsUsed: 7,
    savings: "₹4,200",
    category: "Finance"
  },
  {
    id: 6,
    name: "Meera Jain",
    title: "Online Educator",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Perfect for educators! The learning tools category has everything from quiz makers to presentation tools. The bulk discounts for educational institutions are fantastic.",
    toolsUsed: 12,
    savings: "₹9,300",
    category: "Education"
  }
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Productivity": return "bg-blue-100 text-blue-600";
      case "Design": return "bg-purple-100 text-purple-600";
      case "Business": return "bg-green-100 text-green-600";
      case "Creative": return "bg-pink-100 text-pink-600";
      case "Finance": return "bg-yellow-100 text-yellow-600";
      case "Education": return "bg-indigo-100 text-indigo-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6"
          >
            <Star className="w-6 h-6 text-blue-600 fill-current" />
            <span className="text-blue-700 font-semibold">User Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              Loved By
            </span>
            <br />
            <span className="text-blue-600">100,000+ Users</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how professionals, creators, and businesses are transforming their workflows with our curated tools.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-12 h-12 text-blue-600" />
                  </div>

                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-blue-100"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                        <CheckCircle className="w-2 h-2 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full ${getCategoryColor(testimonial.category)}`}>
                      {testimonial.category}
                    </span>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 flex-grow">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Stats */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{testimonial.toolsUsed}</div>
                      <div className="text-xs text-gray-500">Tools Used</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{testimonial.savings}</div>
                      <div className="text-xs text-gray-500">Saved</div>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Glow */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 pointer-events-none"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-left">
                  <h3 className="text-3xl font-bold mb-4">
                    See Success Stories in Action
                  </h3>
                  <p className="text-blue-100 mb-6 text-lg">
                    Watch real users share how Oblivent Apps transformed their productivity and boosted their business growth.
                  </p>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Real User Stories</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Verified Results</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-300" />
                      <span>Case Studies</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:bg-white/30 transition-all"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.button>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">Trusted by professionals worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {["Google", "Microsoft", "Adobe", "Shopify", "Slack", "Zoom"].map((company) => (
              <div key={company} className="text-2xl font-bold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
