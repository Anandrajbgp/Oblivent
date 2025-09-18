
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  BookOpen, 
  Palette, 
  DollarSign, 
  BarChart3, 
  Briefcase,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "productivity",
    icon: Zap,
    title: "Productivity",
    description: "Task managers, note-taking apps, time tracking, and workflow automation tools",
    count: "150+",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    tools: ["NotionAI", "Todoist", "RescueTime", "Zapier"]
  },
  {
    id: "learning",
    icon: BookOpen,
    title: "Learning",
    description: "Language apps, flashcards, quiz makers, and educational platforms",
    count: "120+",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    tools: ["Anki", "Duolingo", "Coursera", "Quizlet"]
  },
  {
    id: "design",
    icon: Palette,
    title: "Design & Creative",
    description: "Design tools, stock photos, video editors, and creative templates",
    count: "200+",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    tools: ["Canva", "Figma", "Unsplash", "Adobe CC"]
  },
  {
    id: "finance",
    icon: DollarSign,
    title: "Finance",
    description: "Budget trackers, SIP calculators, expense managers, and investment tools",
    count: "80+",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
    tools: ["YNAB", "Mint", "Personal Capital", "Groww"]
  },
  {
    id: "marketing",
    icon: BarChart3,
    title: "Marketing",
    description: "Social media tools, analytics, email marketing, and growth platforms",
    count: "90+",
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-50 to-pink-50",
    tools: ["Hootsuite", "Mailchimp", "Buffer", "Hotjar"]
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business & SaaS",
    description: "CRM tools, invoicing, landing page builders, and business automation",
    count: "110+",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    tools: ["HubSpot", "FreshBooks", "Webflow", "Slack"]
  }
];

export function CategoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:40px_40px]" />
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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-purple-600" />
            </motion.div>
            <span className="text-purple-700 font-semibold">Explore Categories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              Find Your Perfect
            </span>
            <br />
            <span className="text-purple-600">Digital Tools</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover curated collections of premium apps and websites organized by your needs and industry.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Tool Count Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                  {category.count} tools
                </div>

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <CardContent className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.gradient} shadow-lg mb-6 w-fit`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {category.description}
                  </p>

                  {/* Popular Tools */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Popular Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.tools.map((tool, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full group-hover:bg-white/80 transition-colors">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-purple-600 font-semibold group-hover:text-purple-700 transition-colors"
                  >
                    <span>Explore {category.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </CardContent>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-5 pointer-events-none`}
                />

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute top-20 right-8 w-2 h-2 bg-purple-400/60 rounded-full"
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Submit your favorite tool or request a new category. Help us build the most comprehensive digital tools hub.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Submit Tool
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 hover:bg-gray-50 font-semibold px-6 py-3 rounded-xl transition-all"
              >
                Request Category
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
