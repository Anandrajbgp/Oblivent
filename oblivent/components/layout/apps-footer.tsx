
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  ArrowRight,
  Sparkles,
  Package,
  Users,
  Trophy,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Browse Apps",
    links: [
      { name: "Productivity", href: "/apps/category/productivity" },
      { name: "Design & Creative", href: "/apps/category/design" },
      { name: "Business Tools", href: "/apps/category/business" },
      { name: "Learning", href: "/apps/category/learning" },
      { name: "Marketing", href: "/apps/category/marketing" },
      { name: "Finance", href: "/apps/category/finance" },
    ]
  },
  {
    title: "For Creators",
    links: [
      { name: "Submit Your App", href: "/apps/submit" },
      { name: "Creator Dashboard", href: "/apps/creator/dashboard" },
      { name: "Revenue & Analytics", href: "/apps/creator/analytics" },
      { name: "Creator Resources", href: "/apps/creator/resources" },
      { name: "Success Stories", href: "/apps/creator/stories" },
      { name: "Creator Community", href: "/apps/creator/community" },
    ]
  },
  {
    title: "Features",
    links: [
      { name: "Smart Bundles", href: "/apps/bundles" },
      { name: "AI Recommendations", href: "/apps/ai-recommendations" },
      { name: "Wishlist & Favorites", href: "/apps/wishlist" },
      { name: "Reviews & Ratings", href: "/apps/reviews" },
      { name: "Download Manager", href: "/apps/downloads" },
      { name: "Affiliate Program", href: "/apps/affiliate" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/apps/help" },
      { name: "Getting Started", href: "/apps/getting-started" },
      { name: "Developer API", href: "/apps/api" },
      { name: "Tool Guidelines", href: "/apps/guidelines" },
      { name: "Report Issues", href: "/apps/report" },
      { name: "Contact Support", href: "/apps/support" },
    ]
  }
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/oblivent", color: "hover:text-blue-500" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com/oblivent", color: "hover:text-sky-400" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/oblivent", color: "hover:text-pink-500" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/oblivent", color: "hover:text-blue-600" },
  { name: "GitHub", icon: Github, href: "https://github.com/oblivent", color: "hover:text-gray-400" },
];

export function AppsFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <span className="text-white font-semibold">Stay In The Loop</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  New Tools Weekly
                </span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8">
                Be the first to discover amazing new tools, exclusive bundles, and creator spotlights delivered to your inbox.
              </p>

              <form 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const email = formData.get("email") as string;
                  if (email) {
                    alert("Thank you for subscribing to Apps updates!");
                    form.reset();
                  }
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Subscribe
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="col-span-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                      Oblivent Apps
                    </span>
                    <div className="text-sm text-purple-200">Premium Tools Hub</div>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Your ultimate destination for curated digital tools, apps, and websites. 
                  Discover, download, and boost your productivity with AI-powered recommendations.
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-purple-400">750+</div>
                    <div className="text-xs text-gray-400">Tools</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-pink-400">100K+</div>
                    <div className="text-xs text-gray-400">Users</div>
                  </div>
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-yellow-400">4.9★</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">apps@oblivent.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Mumbai, India</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="col-span-1"
              >
                <h4 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                  {section.title === "Browse Apps" && <Package className="w-4 h-4" />}
                  {section.title === "For Creators" && <Users className="w-4 h-4" />}
                  {section.title === "Features" && <Trophy className="w-4 h-4" />}
                  {section.title === "Support" && <Heart className="w-4 h-4" />}
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200 block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Social Links & Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <span className="text-gray-400 text-sm font-medium text-center sm:text-left">Follow Oblivent Apps:</span>
                <div className="flex gap-4 flex-wrap justify-center">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
                    >
                      <social.icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm text-center md:text-right"
              >
                <p>© {new Date().getFullYear()} Oblivent Apps. All rights reserved.</p>
                <p className="text-xs mt-1">Part of the Oblivent Digital Ecosystem</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
