
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  Search,
  Package,
  Users,
  Trophy,
  Heart,
  User,
  Settings,
  LogIn,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AppsNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", icon: <Home size={20} className="text-blue-400" />, href: "/apps" },
    { name: "Browse Apps", icon: <Search size={20} className="text-blue-400" />, href: "/apps/browse" },
    { name: "Bundles & Deals", icon: <Package size={20} className="text-blue-400" />, href: "/apps/bundles" },
    { name: "Creator Hub", icon: <Users size={20} className="text-blue-400" />, href: "/apps/creators" },
    { name: "Leaderboard", icon: <Trophy size={20} className="text-blue-400" />, href: "/apps/leaderboard" },
    { name: "Wishlist", icon: <Heart size={20} className="text-blue-400" />, href: "/apps/wishlist" },
    { name: "My Dashboard", icon: <User size={20} className="text-blue-400" />, href: "/apps/dashboard" },
    { name: "Settings", icon: <Settings size={20} className="text-blue-400" />, href: "/apps/settings" },
    { name: "Login / Sign Up", icon: <LogIn size={20} className="text-blue-400" />, href: "/auth" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%]   
                   bg-gradient-to-r from-purple-900/90 to-pink-900/90 backdrop-blur-xl rounded-2xl   
                   px-4 sm:px-6 py-3 flex items-center justify-between   
                   shadow-2xl border border-purple-500/20 z-50"
      >
        {/* Left Side - Menu Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Home size={28} />}
          </button>
        </div>

        {/* Center - Apps Title */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="hidden sm:block">
            <div className="text-white font-bold text-lg">Oblivent Apps</div>
            <div className="text-purple-200 text-xs">Premium Tools Hub</div>
          </div>
        </div>

        {/* Right Side - Logo */}
        <div className="flex items-center">
          <Image 
            src="/oblivent-logo.png" 
            alt="Oblivent Logo" 
            width={128}
            height={128}
            className="h-12 sm:h-16 w-auto"
            priority
          />
        </div>
      </nav>

      {/* Expandable Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 h-screen w-full sm:w-80   
                       bg-gradient-to-b from-purple-900/95 to-pink-900/95 backdrop-blur-2xl   
                       shadow-2xl border-r border-purple-500/20 z-40   
                       flex flex-col"
          >
            {/* Close button for mobile */}
            <div className="flex justify-end p-4 sm:hidden">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="px-6 flex-1 overflow-y-auto pt-16 sm:pt-20 pb-6">
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
                className="flex flex-col gap-2 text-white"
              >
                {menuItems.map((item, idx) => (
                  <motion.li key={idx}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 px-4 py-4 rounded-xl   
                                 hover:bg-white/10 transition-all cursor-pointer group w-full
                                 text-base sm:text-lg"
                    >
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center gap-4 w-full"
                      >
                        <div className="p-2 rounded-lg bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors flex-shrink-0">
                          {item.icon}
                        </div>
                        <span className="font-medium text-white truncate">
                          {item.name}
                        </span>
                      </motion.div>
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
