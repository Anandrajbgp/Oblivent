
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Star, Play, ThumbsUp, Verified, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CustomerReviews() {
  const [activeReview, setActiveReview] = useState(0);

  const videoReviews = [
    {
      id: 1,
      name: "Arjun Sharma",
      location: "Mumbai",
      product: "iPhone 15 Pro",
      rating: 5,
      review: "Amazing quality and super fast delivery! The AI recommendations helped me choose the perfect phone. Already earned ₹500 through affiliate program.",
      verified: true,
      helpful: 45,
      avatar: "👨‍💼",
      videoThumbnail: "📱"
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "Delhi",
      product: "MacBook Pro M3",
      rating: 5,
      review: "Best purchase ever! The unboxing experience was premium and the laptop performs incredibly well. Customer support is top-notch.",
      verified: true,
      helpful: 32,
      avatar: "👩‍💻",
      videoThumbnail: "💻"
    },
    {
      id: 3,
      name: "Rohit Kumar",
      location: "Bangalore",
      product: "AirPods Pro 2",
      rating: 4,
      review: "Great sound quality and noise cancellation. Delivery was within 2 hours as promised. Highly recommend for music lovers.",
      verified: true,
      helpful: 28,
      avatar: "👨‍🎓",
      videoThumbnail: "🎧"
    }
  ];

  const textReviews = [
    {
      name: "Sneha Gupta",
      location: "Chennai",
      rating: 5,
      review: "Oblivent Mart has changed my shopping experience completely. The AI suggests exactly what I need, and the quality is always premium.",
      date: "2 days ago",
      product: "iPad Pro 12.9",
      verified: true
    },
    {
      name: "Vikash Singh",
      location: "Pune",
      rating: 5,
      review: "Earning through affiliate program while shopping for my needs. Made ₹2000 last month just by sharing products with friends!",
      date: "1 week ago",
      product: "Multiple Products",
      verified: true
    },
    {
      name: "Anjali Rao",
      location: "Hyderabad",
      rating: 4,
      review: "Premium quality products and excellent customer service. The gamified earning system makes shopping fun and rewarding.",
      date: "2 weeks ago",
      product: "Apple Watch Series 9",
      verified: true
    }
  ];

  const trustStats = [
    { label: "Verified Reviews", value: "45K+", icon: <Verified size={20} /> },
    { label: "5-Star Ratings", value: "89%", icon: <Star size={20} /> },
    { label: "Video Reviews", value: "2.5K+", icon: <Play size={20} /> },
    { label: "Happy Customers", value: "25K+", icon: <ThumbsUp size={20} /> }
  ];

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % videoReviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + videoReviews.length) % videoReviews.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
            <Verified className="w-5 h-5 text-purple-600" />
            <span className="text-purple-800 font-medium">Verified Customer Reviews</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from verified buyers with video testimonials and authentic experiences
          </p>
        </motion.div>

        {/* Trust Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {trustStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 shadow-lg"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-2xl mb-4 text-purple-600">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Video Reviews Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">📹 Video Testimonials</h3>
            
            <div className="relative">
              <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
                <div className="relative mb-6">
                  {/* Video Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer">
                    <div className="text-6xl mb-4">{videoReviews[activeReview].videoThumbnail}</div>
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300">
                      <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-purple-600" />
                      </div>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full p-2">
                      <Verified size={16} />
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <button
                    onClick={prevReview}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextReview}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Review Content */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{videoReviews[activeReview].avatar}</div>
                    <div>
                      <h4 className="font-bold text-gray-800">{videoReviews[activeReview].name}</h4>
                      <p className="text-sm text-gray-600">{videoReviews[activeReview].location}</p>
                      <p className="text-sm text-blue-600 font-medium">{videoReviews[activeReview].product}</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < videoReviews[activeReview].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 text-purple-300" size={24} />
                    <p className="text-gray-700 italic pl-6">{videoReviews[activeReview].review}</p>
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                      <ThumbsUp size={16} />
                      Helpful ({videoReviews[activeReview].helpful})
                    </button>
                    <div className="flex items-center gap-1">
                      <Verified className="text-green-500" size={16} />
                      <span className="text-sm text-green-600 font-medium">Verified Purchase</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {videoReviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeReview ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Text Reviews */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">✍️ Recent Reviews</h3>
            
            <div className="space-y-6">
              {textReviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-800">{review.name}</h4>
                        {review.verified && (
                          <Verified className="text-green-500" size={16} />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{review.location}</p>
                      <p className="text-sm text-blue-600 font-medium">{review.product}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{review.review}</p>

                  <div className="text-xs text-gray-500">{review.date}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <Button variant="outline" className="border-purple-300 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-2xl">
                View All Reviews
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
