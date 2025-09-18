
'use client';

import { motion } from 'framer-motion';
import { Verified, Star, Award, Users, TrendingUp, MapPin, GraduationCap, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function SellerSpotlight() {
  const featuredSellers = [
    {
      id: 1,
      name: "TechHub Delhi",
      type: "Verified Store",
      location: "New Delhi",
      rating: 4.9,
      reviews: 2435,
      products: 850,
      sales: "50K+",
      specialty: "Electronics & Gadgets",
      avatar: "🏪",
      badge: "Top Seller",
      verified: true,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      name: "Ravi's Digital Store",
      type: "Student Entrepreneur",
      location: "Bangalore",
      rating: 4.8,
      reviews: 892,
      products: 250,
      sales: "15K+",
      specialty: "Digital Products & Courses",
      avatar: "👨‍🎓",
      badge: "Rising Star",
      verified: true,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      name: "CreativeWorks Studio",
      type: "Digital Creator",
      location: "Mumbai",
      rating: 4.7,
      reviews: 654,
      products: 180,
      sales: "8K+",
      specialty: "Design & Creative Services",
      avatar: "🎨",
      badge: "Creative Pro",
      verified: true,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      name: "GadgetGuru Chennai",
      type: "Local Business",
      location: "Chennai",
      rating: 4.9,
      reviews: 1234,
      products: 420,
      sales: "25K+",
      specialty: "Mobile & Accessories",
      avatar: "📱",
      badge: "Trusted Seller",
      verified: true,
      color: "from-orange-500 to-orange-600"
    }
  ];

  const sellerCategories = [
    {
      title: "Verified Stores",
      count: "500+",
      icon: <Store size={24} />,
      description: "Established businesses with verified credentials",
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Student Sellers",
      count: "250+",
      icon: <GraduationCap size={24} />,
      description: "Young entrepreneurs building their dreams",
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Digital Creators",
      count: "180+",
      icon: <Award size={24} />,
      description: "Creative professionals and service providers",
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "Local Businesses",
      count: "320+",
      icon: <MapPin size={24} />,
      description: "Community businesses serving local customers",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const achievements = [
    { label: "Total Sellers", value: "1.2K+", icon: <Users size={20} /> },
    { label: "Products Listed", value: "45K+", icon: <Store size={20} /> },
    { label: "Monthly Sales", value: "₹2.5Cr", icon: <TrendingUp size={20} /> },
    { label: "Verified Sellers", value: "98%", icon: <Verified size={20} /> }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5 text-gray-600" />
            <span className="text-gray-800 font-medium">Seller Spotlight</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
              Meet Our Trusted Sellers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Verified sellers, student entrepreneurs, and local businesses bringing you quality products with trust and reliability
          </p>
        </motion.div>

        {/* Achievement Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-2xl mb-4 text-gray-600">
                {achievement.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{achievement.value}</div>
              <div className="text-sm text-gray-600">{achievement.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Featured Sellers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Featured Sellers</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSellers.map((seller, index) => (
              <motion.div
                key={seller.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${seller.color} text-white text-xs px-2 py-1 rounded-full font-bold`}>
                  {seller.badge}
                </div>

                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{seller.avatar}</div>
                  
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <h4 className="font-bold text-lg text-gray-800">{seller.name}</h4>
                    {seller.verified && (
                      <Verified className="text-blue-500" size={18} />
                    )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-1">{seller.type}</p>
                  <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                    <MapPin size={12} />
                    {seller.location}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={i < Math.floor(seller.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {seller.rating} ({seller.reviews} reviews)
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="font-bold text-gray-800">{seller.products}</div>
                    <div className="text-xs text-gray-600">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-800">{seller.sales}</div>
                    <div className="text-xs text-gray-600">Sales</div>
                  </div>
                </div>

                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 font-medium">{seller.specialty}</p>
                </div>

                <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 rounded-2xl">
                  View Store
                </Button>

                {/* Background Decoration */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="absolute -bottom-4 -right-4 text-6xl opacity-5"
                >
                  {seller.avatar}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Seller Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Seller Categories</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sellerCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${category.color} rounded-2xl mb-4`}>
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h4>
                <div className="text-2xl font-bold text-gray-600 mb-2">{category.count}</div>
                <p className="text-sm text-gray-600">{category.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Become a Seller CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
          >
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Start Selling on Oblivent Mart
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful sellers. Whether you&apos;re a student, business owner, or creative professional, we provide the platform to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl text-lg font-semibold">
                <Store className="mr-2" size={20} />
                Start Selling
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-semibold">
                Learn More
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
