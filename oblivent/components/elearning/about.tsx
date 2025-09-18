"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Users, Award, TrendingUp, Heart } from "lucide-react";
import { Counter, getBaseCount } from "@/components/shared/counter";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const milestones = [
    { year: "2020", title: "Foundation", desc: "Started with a vision to democratize education" },
    { year: "2021", title: "First 1K Users", desc: "Reached our first thousand active learners" },
    { year: "2022", title: "₹1 Crore Payouts", desc: "Distributed first crore in affiliate earnings" },
    { year: "2023", title: "10K+ Certificates", desc: "Issued over 10,000 verified certificates" },
    { year: "2024", title: "Pan-India Reach", desc: "Expanded to all 28 states of India" },
    { year: "2025", title: "Global Vision", desc: "Expanding worldwide with AI-powered learning" },
  ];

  const impactStats = [
    { icon: Users, count: getBaseCount(75000), suffix: "+", label: "Lives Transformed", isK: true },
    { icon: MapPin, count: 28, suffix: "/28", label: "Indian States" },
    { icon: TrendingUp, count: getBaseCount(35000000), suffix: "+", label: "Total Payouts", prefix: "₹", isK: true },
    { icon: Award, count: getBaseCount(20000), suffix: "+", label: "Success Stories", isK: true },
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-6 py-3 mb-6"
          >
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Our Story</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              5+ Years of
            </span>
            <br />
            <span className="text-blue-600">Trust & Innovation</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From a small idea in 2020 to India&apos;s largest skill + earning ecosystem. 
            We&apos;ve been empowering students from Tier 2 & 3 cities to achieve their dreams.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-200" />
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed text-blue-100">
              &quot;Our dream is that every Indian student gets world-class education, 
              and they don&apos;t just study but also earn while learning. Education should not be just for certificates, 
              but for complete life transformation.&quot;
            </p>
          </motion.div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-slate-800">Our Journey</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-blue-100 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-3xl font-bold text-blue-600 mb-2 group-hover:text-purple-600 transition-colors duration-300"
                >
                  {milestone.year}
                </motion.div>
                <h4 className="font-bold text-slate-800 mb-2">{milestone.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{milestone.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12 text-slate-800">Our Impact</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                
                <div className="text-3xl font-bold text-slate-900 mb-2">
                  <Counter
                    end={stat.count}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                    isK={stat.isK}
                    duration={2}
                  />
                </div>
                
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}