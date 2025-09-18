"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Quote, Star, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SuccessStoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const videoTestimonials = [
    {
      id: 1,
      name: "Arjun Mehta",
      age: 22,
      location: "Indore, MP",
      course: "Digital Marketing Master",
      earning: "₹65,000/month",
      thumbnail: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun",
      duration: "3:45",
      title: "From College Student to ₹65k/month",
      description: "Arjun learned digital marketing in his final year of college and started his own business"
    },
    {
      id: 2,
      name: "Kavya Singh",
      age: 25,
      location: "Lucknow, UP", 
      course: "Affiliate Marketing Pro",
      earning: "₹45,000/month",
      thumbnail: "https://api.dicebear.com/7.x/avataaars/svg?seed=kavya",
      duration: "2:30",
      title: "Housewife to Financial Independence",
      description: "Kavya achieved financial independence by doing affiliate marketing from home"
    },
    {
      id: 3,
      name: "Rahul Sharma",
      age: 28,
      location: "Jaipur, RJ",
      course: "Complete Business Bundle",
      earning: "₹1,20,000/month",
      thumbnail: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul",
      duration: "4:20",
      title: "Job to Business Owner Journey",
      description: "Rahul left his job to start his own business and now has a 6-figure income"
    }
  ];

  const textTestimonials = [
    {
      name: "Priya Agarwal",
      age: 24,
      location: "Chandigarh",
      course: "Expert Package",
      rating: 5,
      date: "2 weeks ago",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
      review: "Oblivent Academy completely transformed my life! I earned over ₹4 lakh in 8 months. The courses are very practical and mentorship is amazing. Highly recommended for serious learners! 🔥",
      verified: true
    },
    {
      name: "Vikash Kumar",
      age: 26,
      location: "Patna, Bihar",
      course: "Pro Package",
      rating: 5,
      date: "1 week ago", 
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=vikash",
      review: "Best investment ever! Started part-time affiliate marketing in college, now consistently earning ₹30k+ monthly. Making my parents proud feels amazing. Thank you Oblivent! 💪",
      verified: true
    },
    {
      name: "Sneha Patel",
      age: 23,
      location: "Ahmedabad, GJ",
      course: "Beginner Package",
      rating: 5,
      date: "3 days ago",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha",
      review: "Started with Beginner package, now upgraded to Pro! Community support is amazing. Every doubt gets cleared instantly. Now consistently earning ₹20k+ monthly. Great platform! ⭐",
      verified: true
    },
    {
      name: "Amit Verma",
      age: 27,
      location: "Kanpur, UP",
      course: "Expert Package",
      rating: 5,
      date: "5 days ago",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit",
      review: "Life-changing platform! Got many advanced skills with Expert package. Mentorship is world-class. Now starting my own digital agency. Monthly income crossed ₹80k+! 🚀",
      verified: true
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:25px_25px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-yellow-100 rounded-full px-6 py-3 mb-6"
          >
            <Star className="w-5 h-5 text-yellow-600 fill-current" />
            <span className="text-yellow-700 font-semibold">Success Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              Real Stories,
            </span>
            <br />
            <span className="text-purple-600">Real Transformations</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Listen to our students&apos; success stories directly from them. 
            These are not just testimonials, but real transformations.
          </p>
        </motion.div>

        {/* Video Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Video Success Stories</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                    />
                    
                    {/* Play Button */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 text-purple-600 ml-1" />
                      </div>
                    </motion.div>

                    {/* Duration */}
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div>
                        <h4 className="font-bold text-slate-900">{video.name}, {video.age}</h4>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{video.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg p-3 mb-3">
                      <div className="text-sm text-green-700 font-medium">Monthly Earning</div>
                      <div className="text-lg font-bold text-green-600">{video.earning}</div>
                    </div>

                    <h5 className="font-bold text-slate-800 mb-2">{video.title}</h5>
                    <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>

                    <div className="mt-4 text-purple-600 text-sm font-medium">
                      Course: {video.course}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center mt-8"
          >
            <Button 
              variant="outline" 
              className="border-purple-600 text-purple-600 hover:bg-purple-50"
            >
              Watch All Success Stories
            </Button>
          </motion.div>
        </motion.div>

        {/* Text Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Student Reviews</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {textTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border-2 border-purple-200"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        )}
                      </div>
                      <div className="text-gray-600 text-sm">{testimonial.location}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{testimonial.date}</span>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-purple-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6 pr-2">
                    {testimonial.review}
                  </p>
                </div>

                {/* Course Badge */}
                <div className="mt-4 inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.course}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h4>
            <p className="text-purple-100 mb-6 text-lg">
              Your success story could also be featured on our platform. 
              Start your transformation journey today!
            </p>
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-xl"
            >
              Start My Journey Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}