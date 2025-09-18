
'use client';

import { motion } from 'framer-motion';
import { Smartphone, Laptop, Headphones, Camera, Watch, Gamepad2, Home, Car } from 'lucide-react';

export function SmartCategories() {
  const categories = [
    { 
      name: "Digital Products", 
      icon: <Laptop size={32} />, 
      count: "12K+ products", 
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    { 
      name: "Gadgets", 
      icon: <Smartphone size={32} />, 
      count: "8K+ products", 
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    { 
      name: "Audio", 
      icon: <Headphones size={32} />, 
      count: "3K+ products", 
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50"
    },
    { 
      name: "Photography", 
      icon: <Camera size={32} />, 
      count: "2K+ products", 
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    { 
      name: "Wearables", 
      icon: <Watch size={32} />, 
      count: "5K+ products", 
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50"
    },
    { 
      name: "Gaming", 
      icon: <Gamepad2 size={32} />, 
      count: "4K+ products", 
      color: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50"
    },
    { 
      name: "Lifestyle", 
      icon: <Home size={32} />, 
      count: "15K+ products", 
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50"
    },
    { 
      name: "Automotive", 
      icon: <Car size={32} />, 
      count: "1K+ products", 
      color: "from-gray-500 to-slate-500",
      bgColor: "bg-gray-50"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              Smart Categories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-powered product discovery with personalized recommendations for every category
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 } 
              }}
              className="group cursor-pointer"
            >
              <div className={`${category.bgColor} rounded-3xl p-6 text-center transition-all duration-300 group-hover:shadow-2xl border border-white/50`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl text-white mb-4 shadow-lg`}
                >
                  {category.icon}
                </motion.div>
                
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-sm text-gray-600 group-hover:text-gray-700">
                  {category.count}
                </p>

                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl pointer-events-none"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Buy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Quick Buy with AI Assistant</h3>
          <p className="text-blue-100 mb-6">
            Tell us what you need, and our AI will find the perfect products for you
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-blue-50 transition-all duration-300"
          >
            Try AI Shopping Assistant
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
