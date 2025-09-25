"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Youtube,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const footerSections = [
  {
    title: "Platforms",
    links: [
      { name: "E-Learning", href: "/platforms/elearning" },
      { name: "Digital Agency", href: "/platforms/agency" },
      { name: "Competition Exams", href: "/platforms/exams" },
      { name: "Broker Trading", href: "/platforms/trading" },
      { name: "App Store", href: "/platforms/apps" },
      { name: "Oblivent Mart", href: "/platforms/mart" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
      { name: "Blog", href: "/blog" },
      { name: "Press", href: "/press" },
      { name: "Investors", href: "/investors" },
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Status", href: "/status" },
      { name: "Bug Report", href: "/bugs" },
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Security", href: "/security" },
      { name: "Compliance", href: "/compliance" },
      { name: "Refund Policy", href: "/refunds" },
    ]
  }
];

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1D3nFtxV6h/", color: "hover:text-blue-500" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/oblivent?igsh=MTFydWtyMWU2YTduNA==", color: "hover:text-pink-500" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@oblivent?feature=shared", color: "hover:text-red-500" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        

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
                  <div className="text-3xl font-bold text-white">
                    Oblivent Pvt. Ltd.
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  World-class digital ecosystem with six powerful platforms under one account. 
                  Transforming how you learn, work, trade, and shop online.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">teamoblivent@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+91 98357 42586</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">Bhagalpur, Bihar, India</span>
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
                <h4 className="text-white font-semibold text-lg mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
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
                <span className="text-gray-400 text-sm font-medium text-center sm:text-left">Follow Us:</span>
                <div className="flex gap-4 flex-wrap justify-center">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color}`}
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
                <p>© {new Date().getFullYear()} Oblivent. All rights reserved.</p>
             </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}