"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Heart, Lightbulb, Users, Shield, Leaf, Baby, Scale } from "lucide-react";

export function LifeMasterySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const lifeMasterySkills = [
    {
      icon: Scale,
      title: "Tax & Financial Planning",
      description: "Master personal finance management and tax optimization"
    },
    {
      icon: Brain,
      title: "Emotional Intelligence",
      description: "Develop self-awareness and interpersonal skills"
    },
    {
      icon: Heart,
      title: "Mindfulness",
      description: "Learn meditation, stress management, and mental well-being"
    },
    {
      icon: Lightbulb,
      title: "Critical Thinking",
      description: "Enhance analytical and problem-solving abilities"
    },
    {
      icon: Users,
      title: "Relationship Skills",
      description: "Build healthy personal and professional relationships"
    },
    {
      icon: Baby,
      title: "Parenting Awareness",
      description: "Learn effective parenting strategies and child development"
    },
    {
      icon: Shield,
      title: "Civic Sense",
      description: "Understand civic responsibilities and social awareness"
    },
    {
      icon: Users,
      title: "Cultural Awareness",
      description: "Develop global perspective and cultural sensitivity"
    },
    {
      icon: Scale,
      title: "Ethical Decision-Making",
      description: "Learn moral reasoning and ethical frameworks"
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      description: "Understand sustainability and environmental stewardship"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden"
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
            className="inline-flex items-center gap-3 bg-emerald-100 rounded-full px-6 py-3 mb-6"
          >
            <Heart className="w-5 h-5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">Life Mastery Track</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-emerald-600 bg-clip-text text-transparent">
              Be a Better
            </span>
            <br />
            <span className="text-emerald-600">Human</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beyond technical skills, develop the life skills that matter most. 
            This comprehensive track helps you become a well-rounded individual 
            ready to face life&apos;s challenges with confidence and wisdom.
          </p>
        </motion.div>

        {/* Free Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full px-8 py-4 text-lg font-bold shadow-lg">
            <Heart className="w-6 h-6" />
            <span>FREE with Every Package Purchase</span>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {lifeMasterySkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-emerald-200 group-hover:to-teal-200 transition-all duration-300"
              >
                <skill.icon className="w-7 h-7 text-emerald-600" />
              </motion.div>
              
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-12 text-white text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="max-w-4xl mx-auto"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-emerald-200" />
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Complete Human Development</h3>
            <p className="text-xl leading-relaxed text-emerald-100 mb-8">
              Skills are just the beginning. True success comes from developing yourself 
              as a complete human being. Learn the life skills that will serve you 
              in every aspect of your personal and professional journey.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-emerald-200 mb-2">10+</div>
                <div className="text-emerald-100">Life Skills</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-200 mb-2">FREE</div>
                <div className="text-emerald-100">With Any Package</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-200 mb-2">Lifetime</div>
                <div className="text-emerald-100">Access</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}