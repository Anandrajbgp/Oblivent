'use client';

import { motion } from 'framer-motion';
import { Sparkles, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

export function TradingFooter() {
  const platformLinks = [
    { name: "Trading Platform", href: "/trading" },
    { name: "My Portfolio", href: "/trading/portfolio" },
    { name: "Trading History", href: "/trading/history" },
    { name: "Watchlist", href: "/trading/watchlist" },
    { name: "Market Scanner", href: "/trading/scanner" },
    { name: "Trading Tools", href: "/trading/tools" },
    { name: "Paper Trading", href: "/trading/paper" },
  ];

  const marketsLinks = [
    { name: "Stock Market", href: "/trading/stocks" },
    { name: "Forex Trading", href: "/trading/forex" },
    { name: "Cryptocurrency", href: "/trading/crypto" },
    { name: "Commodities", href: "/trading/commodities" },
    { name: "Options Trading", href: "/trading/options" },
    { name: "Futures Trading", href: "/trading/futures" },
  ];

  const supportLinks = [
    { name: "Trading Support", href: "/trading/support" },
    { name: "Risk Management", href: "/trading/risk" },
    { name: "Trading Academy", href: "/trading/academy" },
    { name: "Market Hours", href: "/trading/market-hours" },
    { name: "Account Help", href: "/trading/account-help" },
    { name: "Contact Support", href: "/trading/contact" },
  ];

  const aboutLinks = [
    { name: "About Trading", href: "/trading/about" },
    { name: "Trading Education", href: "/trading/education" },
    { name: "Market Research", href: "/trading/research" },
    { name: "Trading Strategies", href: "/trading/strategies" },
    { name: "API Documentation", href: "/trading/api" },
    { name: "Press & Media", href: "/trading/press" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/trading/privacy" },
    { name: "Terms of Service", href: "/trading/terms" },
    { name: "Risk Disclosure", href: "/trading/risk-disclosure" },
    { name: "Regulatory Compliance", href: "/trading/compliance" },
    { name: "Cookie Policy", href: "/trading/cookies" },
    { name: "Dispute Resolution", href: "/trading/disputes" },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: "https://www.facebook.com/share/1D3nFtxV6h/", label: "Facebook" },
    { icon: <Instagram size={20} />, href: "https://www.instagram.com/oblivent?igsh=MTFydWtyMWU2YTduNA==", label: "Instagram" },
    { icon: <Youtube size={20} />, href: "https://youtube.com/@oblivent?feature=shared", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <span className="text-white font-semibold">Trading Updates</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Get Market Alerts & Trading Insights
                </span>
              </h3>
              
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our trading newsletter for market alerts, analysis, and trading opportunities.
              </p>

              <form 
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  const email = formData.get("email") as string;
                  if (email) {
                    alert("Thank you for subscribing to Trading updates!");
                    form.reset();
                  }
                }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">T</span>
                </div>
                <h4 className="text-2xl font-bold text-white">Trading Platform</h4>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Advanced trading platform with real-time data, analytical tools, and secure transactions for smart investing and portfolio management.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={18} className="text-blue-400" />
                  <span>trading@oblivent.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone size={18} className="text-blue-400" />
                  <span>+91 98765 43213</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={18} className="text-blue-400" />
                  <span>Pune, India</span>
                </div>
              </div>
            </motion.div>

            {/* Platform */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Platform</h4>
              <ul className="space-y-3">
                {platformLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Markets */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Markets</h4>
              <ul className="space-y-3">
                {marketsLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* About & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-6">About & Legal</h4>
              <ul className="space-y-3">
                {aboutLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2 border-t border-white/10">
                  <p className="text-xs text-gray-400 mb-2">Legal</p>
                </li>
                {legalLinks.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:scale-125 transition-transform"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-gray-400 text-center sm:text-left">
                  © 2025 Oblivent Trading Platform. All rights reserved.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}