
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building, Train, GraduationCap, Briefcase, Users, BookOpen } from "lucide-react";

export function FeaturedExamsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const featuredExams = [
    {
      name: "Banking",
      icon: Building,
      description: "SBI PO, IBPS, RBI, Clerk & More",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      students: "2.5L+",
      tests: "500+"
    },
    {
      name: "SSC",
      icon: Briefcase,
      description: "CGL, CHSL, MTS, GD & More",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      students: "3.2L+",
      tests: "600+"
    },
    {
      name: "UPSC",
      icon: GraduationCap,
      description: "IAS, IPS, IFS Preparation",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      students: "1.8L+",
      tests: "400+"
    },
    {
      name: "Railway",
      icon: Train,
      description: "RRB NTPC, Group D, ALP & More",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      students: "2.1L+",
      tests: "450+"
    },
    {
      name: "Campus",
      icon: Users,
      description: "TCS, Infosys, Wipro & More",
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      students: "1.5L+",
      tests: "300+"
    },
    {
      name: "PSC",
      icon: BookOpen,
      description: "State PSC Exams Preparation",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "from-indigo-50 to-indigo-100",
      students: "1.2L+",
      tests: "350+"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden"
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
            <GraduationCap className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-semibold">Choose Your Exam</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-transparent">
              Master Every
            </span>
            <br />
            <span className="text-indigo-600">Competitive Exam</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From Banking to UPSC, we&apos;ve got comprehensive preparation for every exam. 
            AI-powered questions updated daily based on latest patterns.
          </p>
        </motion.div>

        {/* Exams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredExams.map((exam, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative bg-gradient-to-br ${exam.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 overflow-hidden`}>
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${exam.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <exam.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                  {exam.name}
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {exam.description}
                </p>

                {/* Stats */}
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-lg font-bold text-slate-900">{exam.students}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">{exam.tests}</div>
                    <div className="text-sm text-gray-600">Tests</div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className={`absolute inset-0 bg-gradient-to-br ${exam.color} opacity-10 pointer-events-none rounded-2xl`}
                />

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute top-6 right-6 w-2 h-2 bg-indigo-400/60 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4">Can&apos;t Find Your Exam?</h4>
            <p className="text-indigo-100 mb-6 text-lg">
              We&apos;re constantly adding new exams. Tell us what you need and we&apos;ll prioritize it!
            </p>
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Request New Exam
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
