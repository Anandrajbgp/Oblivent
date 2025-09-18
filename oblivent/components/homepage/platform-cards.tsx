"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  BookOpen, 
  Building2, 
  Trophy, 
  TrendingUp, 
  Smartphone, 
  ShoppingBag,
  Star,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Counter component
function Counter({ end, suffix }: { end: number | string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          const numValue =
            typeof end === "string"
              ? parseInt(end.replace(/[^0-9.]/g, "")) || 0
              : Number(end);

          const timer = setInterval(() => {
            setCount((prev) => {
              const increment = numValue / 120;
              const next = prev + increment;
              if (next >= numValue) {
                clearInterval(timer);
                return numValue;
              }
              return next;
            });
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, isVisible]);

  const formatNumber = (num: number) => {
    if (typeof end === "string") {
      if (end.includes("K")) return Math.floor(num) + "K";
      if (end.includes("M")) return Math.floor(num) + "M";
      return Math.floor(num).toString();
    }
    return Math.floor(num).toString();
  };

  return (
    <span ref={ref} className="inline-block">
      {formatNumber(count)}
      {suffix && typeof end === "number" ? suffix : ""}
    </span>
  );
}

// Platform data
const platforms = [
  {
    id: "elearning",
    title: "E-Learning Platform",
    description: "World-class courses, interactive content, and AI-powered personalized learning paths for all skill levels.",
    icon: BookOpen,
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 via-blue-100 to-cyan-50",
    features: ["1000+ Courses", "Expert Instructors", "Certificates", "Live Classes"],
    stats: { users: "25K+", rating: 4.9, courses: "1000+" },
    tag: "Most Popular",
    tagColor: "bg-blue-500"
  },
  {
    id: "agency",
    title: "Digital Agency",
    description: "Complete digital marketing solutions, web development, and brand strategy services for modern businesses.",
    icon: Building2,
    gradient: "from-purple-500 via-purple-600 to-violet-600",
    bgGradient: "from-purple-50 via-purple-100 to-violet-50",
    features: ["Web Development", "Digital Marketing", "Brand Strategy", "SEO Services"],
    stats: { users: "500+", rating: 4.8, projects: "2000+" },
    tag: "Premium",
    tagColor: "bg-purple-500"
  },
  {
    id: "exams",
    title: "Competition Exams",
    description: "Comprehensive test preparation with mock tests, analytics, and expert guidance for competitive exams.",
    icon: Trophy,
    gradient: "from-green-500 via-green-600 to-emerald-600",
    bgGradient: "from-green-50 via-green-100 to-emerald-50",
    features: ["Mock Tests", "Performance Analytics", "Expert Tips", "Study Materials"],
    stats: { users: "15K+", rating: 4.7, tests: "500+" },
    tag: "Top Rated",
    tagColor: "bg-green-500"
  },
  {
    id: "trading",
    title: "Broker Trading",
    description: "Advanced trading platform with real-time data, AI insights, and professional-grade trading tools.",
    icon: TrendingUp,
    gradient: "from-orange-500 via-orange-600 to-red-600",
    bgGradient: "from-orange-50 via-orange-100 to-red-50",
    features: ["Real-time Data", "AI Insights", "Risk Management", "Portfolio Analytics"],
    stats: { users: "10K+", rating: 4.6, volume: "$50M+" },
    tag: "Pro Tools",
    tagColor: "bg-orange-500"
  },
  {
    id: "apps",
    title: "App Store",
    description: "Curated collection of productivity apps, utilities, and tools designed to enhance your digital workflow.",
    icon: Smartphone,
    gradient: "from-pink-500 via-pink-600 to-rose-600",
    bgGradient: "from-pink-50 via-pink-100 to-rose-50",
    features: ["500+ Apps", "Regular Updates", "User Reviews", "Free & Premium"],
    stats: { users: "100K+", rating: 4.8, apps: "500+" },
    tag: "Fastest Growing",
    tagColor: "bg-pink-500"
  },
  {
    id: "mart",
    title: "Oblivent Mart",
    description: "E-commerce marketplace with secure payments, fast delivery, and quality products from trusted sellers.",
    icon: ShoppingBag,
    gradient: "from-red-500 via-red-600 to-pink-600",
    bgGradient: "from-red-50 via-red-100 to-pink-50",
    features: ["Secure Payments", "Fast Delivery", "Quality Products", "Trusted Sellers"],
    stats: { users: "50K+", rating: 4.9, products: "10K+" },
    tag: "Secure Shopping",
    tagColor: "bg-red-500"
  },
];

export function PlatformCardsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full px-6 py-3 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-purple-600" />
            </motion.div>
            <span className="text-purple-700 font-semibold">Six Powerful Platforms</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              Choose Your
            </span>
            <br />
            <span className="text-purple-600">Digital Journey</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Six specialized platforms, one unified account. Experience the future of integrated digital services.
          </p>
        </motion.div>

        {/* Platform Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Card className="relative h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                {/* Tag */}
                <div className={`absolute top-4 right-4 ${platform.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full z-10`}>
                  {platform.tag}
                </div>

                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <CardContent className="relative p-8 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${platform.gradient} shadow-lg mb-6 w-fit`}
                  >
                    <platform.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                    {platform.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                    {platform.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {platform.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-xl group-hover:bg-white/80 transition-colors">
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900">
                        <Counter end={platform.stats.users ?? 0} />
                      </div>
                      <div className="text-xs text-gray-500">Users</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-lg font-bold text-slate-900">
                          <Counter end={platform.stats.rating ?? 0} />
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-slate-900">
                        <Counter
                          end={
                            platform.stats.courses ??
                            platform.stats.projects ??
                            platform.stats.tests ??
                            platform.stats.volume ??
                            platform.stats.apps ??
                            platform.stats.products ??
                            0
                          }
                        />
                      </div>
                      <div className="text-xs text-gray-500">
                        {platform.id === "elearning"
                          ? "Courses"
                          : platform.id === "agency"
                          ? "Projects"
                          : platform.id === "exams"
                          ? "Tests"
                          : platform.id === "trading"
                          ? "Volume"
                          : platform.id === "apps"
                          ? "Apps"
                          : "Products"}
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="absolute top-20 right-8 w-2 h-2 bg-purple-400/60 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [0, -15, 0], opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    className="absolute bottom-32 left-8 w-1.5 h-1.5 bg-blue-400/60 rounded-full"
                  />
                </CardContent>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-5 pointer-events-none`}
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Transform Your Digital Experience?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join over 150,000 users who have already discovered the power of our integrated platform ecosystem.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
                        }
