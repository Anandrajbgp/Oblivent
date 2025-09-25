"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Home,
  BookOpen,
  ShoppingBag,
  Briefcase,
  Globe,
  Zap, // Using Zap as the Test icon
  LogIn,
  Menu,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu items with icons
  const menuItems = [
    { name: "Home", icon: <Home size={20} className="text-blue-400" />, href: "/" },
    { name: "E-Learning", icon: <BookOpen size={20} className="text-blue-400" />, href: "/elearning" },
    { name: "Digital Agency", icon: <Briefcase size={20} className="text-blue-400" />, href: "/agency" },
    { name: "Shopping Mart", icon: <ShoppingBag size={20} className="text-blue-400" />, href: "/mart" },
    { name: "Trading", icon: <Globe size={20} className="text-blue-400" />, href: "/trading" },
    { name: "Test", icon: <Zap size={20} className="text-blue-400" />, href: "/test" }, // changed icon and href
    { name: "Login / Sign Up", icon: <LogIn size={20} className="text-blue-400" />, href: "/auth" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%]   
                   bg-[#0a1f44]/90 backdrop-blur-xl rounded-2xl   
                   px-4 sm:px-6 py-3 flex items-center justify-between   
                   shadow-2xl border border-blue-500/20 z-50"
      >
        {/* Left Side - Logo */}
        <div className="flex items-center">
          <Image 
            src="/oblivent-logo.png" 
            alt="Oblivent Logo" 
            width={128}
            height={128}
            className="h-14 sm:h-20 w-auto"
            priority
          />
        </div>

        {/* Center - Empty space for balance */}
        <div className="flex-1"></div>

        {/* Right Side - Menu Button */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
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
                       bg-[#0a1f44]/95 backdrop-blur-2xl   
                       shadow-2xl border-r border-blue-500/20 z-40   
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
                                 hover:bg-white/5 transition-all cursor-pointer group w-full
                                 text-base sm:text-lg"
                    >
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center gap-4 w-full"
                      >
                        <div className="p-2 rounded-lg bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors flex-shrink-0">
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
