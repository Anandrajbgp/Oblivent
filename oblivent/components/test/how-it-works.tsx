
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Brain, BarChart3, Trophy } from "lucide-react";

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const steps = [
    {
      step: 1,
      title: "Select Exam",
      description: "Choose from Banking, SSC, UPSC, Railway, Campus placement and more competitive exams",
      icon: Search,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Take Tests",
      description: "AI-powered adaptive questions that adjust based on your performance and learning style",
      icon: Brain,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 3,
      title: "Analyze & Learn",
      description: "Get detailed performance insights, weakness analysis, and personalized improvement suggestions",
      icon: BarChart3,
      color: "from-green-500 to-green-600"
    },
    {
      step: 4,
      title: "AI Mentor Guidance",
      description: "Chat with AI mentor for personalized roadmap, daily study plans, and success predictions",
      icon: Trophy,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-white to-indigo-50 relative overflow-hidden"
    >
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
            className="inline-flex items-center gap-3 bg-indigo-100 rounded-full px-6 py-3 mb-6"
          >
            <Brain className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-semibold">How It Works</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent">
              Your Success Journey
            </span>
            <br />
            <span className="text-indigo-600">In 4 Simple Steps</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform makes exam preparation simple, effective, and engaging. 
            Follow these steps to achieve your goals.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="relative group"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-200 to-purple-200 transform translate-x-4" />
              )}

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Journey?</h3>
            <p className="text-indigo-100 mb-6 text-lg">
              Join thousands of successful candidates who cracked their exams with our platform
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Start Your First Test
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
