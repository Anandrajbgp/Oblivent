"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

function Counter({ end, suffix }: { end: string | number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);

          if (typeof end === 'string') {
            if (end === '24/7') return;
            const numValue = parseFloat(end);

            const timer = setInterval(() => {
              setCount((prevCount) => {
                const increment = numValue / 120;
                const nextCount = prevCount + increment;

                if (nextCount >= numValue) {
                  clearInterval(timer);
                  return numValue;
                }
                return nextCount;
              });
            }, 1000 / 60);

            return () => clearInterval(timer);
          }

          const timer = setInterval(() => {
            setCount((prevCount) => {
              const increment = Number(end) / 120;
              const nextCount = prevCount + increment;

              if (nextCount >= Number(end)) {
                clearInterval(timer);
                return Number(end);
              }
              return nextCount;
            });
          }, 1000 / 60);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, isVisible]);

  if (end === '24/7') return <span ref={ref}>24/7</span>;

  const formatNumber = (num: number) => {
    if (typeof end === 'string' && end.includes('.')) {
      return num.toFixed(1);
    }
    return Math.floor(num);
  };

  return (
    <span ref={ref} className="inline-block">
      {formatNumber(count)}{suffix || ''}
    </span>
  );
}


const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Software Engineer",
    company: "Tech Innovations Pvt Ltd",
    image: "PS",
    rating: 5,
    text: "Oblivent has completely transformed how I learn and work. The e-learning platform helped me master React, and the app store has amazing productivity tools. The integration between platforms is seamless!",
    platform: "E-Learning & Apps",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Business Owner",
    company: "Kumar Digital Solutions",
    image: "RK",
    rating: 5,
    text: "The digital agency platform helped us scale our business 10x in just 6 months. Their web development and marketing services are top-notch. Highly recommend for any business looking to go digital!",
    platform: "Digital Agency",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Anjali Patel",
    role: "UPSC Aspirant",
    company: "Delhi University",
    image: "AP",
    rating: 5,
    text: "The competition exam platform is incredible! Mock tests are exactly like the real exam, and the performance analytics helped me identify my weak areas. Finally cleared UPSC on my second attempt!",
    platform: "Competition Exams",
    gradient: "from-green-500 to-blue-500"
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Investment Analyst",
    company: "Alpha Capital",
    image: "VS",
    rating: 5,
    text: "The trading platform's AI insights are game-changing. Real-time data analysis and risk management tools have improved my portfolio performance by 40%. Professional-grade tools at an affordable price!",
    platform: "Broker Trading",
    gradient: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    name: "Sneha Gupta",
    role: "Freelance Designer",
    company: "Independent",
    image: "SG",
    rating: 5,
    text: "Love the app store! Found amazing design tools and productivity apps that weren't available elsewhere. The mart also has great tech accessories at competitive prices. One platform for everything!",
    platform: "Apps & Mart",
    gradient: "from-pink-500 to-purple-500"
  },
  {
    id: 6,
    name: "Arjun Mehta",
    role: "Startup Founder",
    company: "InnovateTech",
    image: "AM",
    rating: 5,
    text: "Used multiple platforms - e-learning for team training, agency for our website, and trading for investment. The unified account experience is fantastic. Saved us thousands in subscription costs!",
    platform: "Multiple Platforms",
    gradient: "from-blue-500 to-green-500"
  }
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
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
            transition={{ duration: 1, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-6 py-3 mb-6"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 text-yellow-600 fill-current" />
            </motion.div>
            <span className="text-yellow-700 font-semibold">User Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              What Our
            </span>
            <br />
            <span className="text-purple-600">Users Say</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied users who have transformed their digital journey with Oblivent.
          </p>
        </motion.div>

        {/* Mobile View - Single Testimonial Carousel */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-100 shadow-xl">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-purple-400 mb-6" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                &ldquo;{currentTestimonial.text}&rdquo;
              </blockquote>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentTestimonial.gradient} flex items-center justify-center text-white font-bold`}>
                  {currentTestimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{currentTestimonial.name}</div>
                  <div className="text-sm text-gray-600">{currentTestimonial.role}</div>
                  <div className="text-xs text-purple-600 font-medium">{currentTestimonial.platform}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-purple-200 hover:bg-purple-50"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-purple-600 w-6' : 'bg-purple-200'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-purple-200 hover:bg-purple-50"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Desktop View - Three Testimonials */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className={`relative group ${index === 0 ? 'md:scale-105 z-10' : 'md:scale-95 opacity-80'} transition-all duration-500`}
            >
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-100 shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Glassmorphism Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-purple-50/50 rounded-3xl" />

                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-purple-400 mb-4 relative z-10" />

                {/* Rating */}
                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>

                {/* Platform Tag */}
                <div className={`inline-block bg-gradient-to-r ${testimonial.gradient} text-white text-xs font-bold px-3 py-1 rounded-full mb-4 relative z-10`}>
                  {testimonial.platform}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed relative z-10 flex-grow">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                {/* User Info */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold`}>
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="absolute top-6 right-6 w-2 h-2 bg-purple-400/60 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden md:flex justify-center items-center gap-6 mt-12"
        >
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-purple-200 hover:bg-purple-50 w-12 h-12"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentIndex ? 'bg-purple-600' : 'bg-purple-200 hover:bg-purple-300'
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-purple-200 hover:bg-purple-50 w-12 h-12"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </motion.div>

        
      </div>
    </section>
  );
}