
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Play, ShoppingCart, Heart, Share2, Eye, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TrendingProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const trendingProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "₹1,34,900",
      originalPrice: "₹1,59,900",
      rating: 4.8,
      reviews: 1247,
      image: "📱",
      badge: "Best Seller",
      discount: "15% OFF",
      features: ["6.7-inch Display", "48MP Camera", "A17 Pro Chip"],
      inStock: true,
      fastDelivery: true
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      price: "₹1,99,900",
      originalPrice: "₹2,39,900",
      rating: 4.9,
      reviews: 892,
      image: "💻",
      badge: "Editor's Choice",
      discount: "17% OFF",
      features: ["14-inch Liquid Retina", "M3 Chip", "18hrs Battery"],
      inStock: true,
      fastDelivery: true
    },
    {
      id: 3,
      name: "AirPods Pro 2",
      price: "₹19,900",
      originalPrice: "₹26,900",
      rating: 4.7,
      reviews: 2156,
      image: "🎧",
      badge: "Trending",
      discount: "26% OFF",
      features: ["Active Noise Cancel", "Spatial Audio", "6hrs Playback"],
      inStock: true,
      fastDelivery: false
    },
    {
      id: 4,
      name: "iPad Pro 12.9",
      price: "₹81,900",
      originalPrice: "₹1,09,900",
      rating: 4.6,
      reviews: 543,
      image: "📱",
      badge: "New",
      discount: "25% OFF",
      features: ["12.9-inch Display", "M2 Chip", "Apple Pencil Ready"],
      inStock: false,
      fastDelivery: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5 text-blue-600" />
            <span className="text-blue-800 font-medium">Trending Now</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              Top Trending Products
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Verified ratings, video reviews, and real-time popularity tracking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
            >
              {/* Badge */}
              <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold ${
                product.badge === 'Best Seller' ? 'bg-yellow-500 text-white' :
                product.badge === "Editor's Choice" ? 'bg-purple-500 text-white' :
                product.badge === 'Trending' ? 'bg-red-500 text-white' :
                'bg-green-500 text-white'
              }`}>
                {product.badge}
              </div>

              {/* Discount Badge */}
              <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                {product.discount}
              </div>

              {/* Product Image */}
              <div className="text-center mb-4 relative">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                
                {/* Video Play Button Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProduct === product.id ? 1 : 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl"
                >
                  <div className="bg-white/90 rounded-full p-3 cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-blue-600" />
                  </div>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    {product.fastDelivery && (
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        2hr delivery
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-gray-500 line-through">{product.originalPrice}</div>
                </div>

                {/* Features */}
                <ul className="text-sm text-gray-600 space-y-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                  <span className={`text-sm font-medium ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <Button 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2" size={16} />
                    Buy Now
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    <Heart size={16} />
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    <Share2 size={16} />
                  </Button>
                </div>

                {/* Earn Commission Button */}
                <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 rounded-xl">
                  Earn ₹{Math.floor(parseInt(product.price.replace(/[₹,]/g, '')) * 0.05).toLocaleString()} Commission
                </Button>
              </div>

              {/* Hover Animation Background */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: hoveredProduct === product.id ? 1 : 0 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-3xl pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold">
            <Eye className="mr-2" size={20} />
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
