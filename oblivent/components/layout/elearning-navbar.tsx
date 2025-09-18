'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, BookOpen, LayoutDashboard, User, Users, X, LogIn, Briefcase, ShoppingBag, Globe, Zap } from 'lucide-react';

export function ELearningNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // Check admin status on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const adminStatus = localStorage.getItem('isAdmin') === 'true';
      setIsAdmin(adminStatus);
    }
  }, []);

  // Menu items for regular users - only Dashboard for current platform
  const userMenuItems = [
    { name: "Home", icon: <Home size={20} className="text-blue-400" />, href: "/" },
    { name: "Dashboard", icon: <LayoutDashboard size={20} className="text-blue-400" />, href: "/elearning/dashboard" },
    { name: "Login / Sign Up", icon: <LogIn size={20} className="text-blue-400" />, href: "/auth" },
  ];

  // Menu items for admin - all platform options
  const adminMenuItems = [
    { name: "Home", icon: <Home size={20} className="text-blue-400" />, href: "/" },
    { name: "Dashboard", icon: <LayoutDashboard size={20} className="text-blue-400" />, href: "/elearning/dashboard" },
    { name: "E-Learning Platform", icon: <BookOpen size={20} className="text-blue-400" />, href: "/elearning" },
    { name: "Student Dashboard", icon: <User size={20} className="text-blue-400" />, href: "/elearning/dashboard/student" },
    { name: "Affiliate Dashboard", icon: <Users size={20} className="text-blue-400" />, href: "/elearning/dashboard/affiliate" },
    { name: "Digital Agency", icon: <Briefcase size={20} className="text-blue-400" />, href: "/agency" },
    { name: "Shopping Mart", icon: <ShoppingBag size={20} className="text-blue-400" />, href: "/mart" },
    { name: "Trading Platform", icon: <Globe size={20} className="text-blue-400" />, href: "/trading" },
    { name: "Test Platform", icon: <Zap size={20} className="text-blue-400" />, href: "/test" },
    { name: "Login / Sign Up", icon: <LogIn size={20} className="text-blue-400" />, href: "/auth" },
  ];

  const menuItems = isAdmin ? adminMenuItems : userMenuItems;

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-2 sm:top-4 left-1/2 -translate-x-1/2 w-[95%] sm:w-[92%]   
                   bg-[#0a1f44]/90 backdrop-blur-xl rounded-2xl   
                   px-4 sm:px-6 py-3 flex items-center justify-between   
                   shadow-2xl border border-blue-500/20 z-50"
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

        {/* Center - Empty space for balance */}
        <div className="flex-1"></div>

        {/* Right Side - Larger Logo */}
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
            <div className="sm:hidden p-4 border-b border-white/10">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto p-6">
              <motion.ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link href={item.href} onClick={() => setIsOpen(false)}>
                      <motion.div
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-4 p-4 rounded-2xl   
                                   hover:bg-white/5 transition-all duration-200   
                                   group cursor-pointer border border-transparent   
                                   hover:border-blue-500/30"
                      >
                        <div className="transition-transform group-hover:scale-110">
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