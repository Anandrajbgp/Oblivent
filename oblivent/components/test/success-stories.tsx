"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Star, MapPin, Award } from "lucide-react";

export function SuccessStoriesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const successStories = [
    {
      name: "Rajesh Kumar",
      exam: "SBI PO",
      rank: 45,
      location: "Patna, Bihar",
      story: "Used Oblivent for 6 months. AI mentor helped identify my weak areas and provided targeted practice. The adaptive tests were game-changers!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
      package: "Premium",
      improvement: "+35 ranks from first attempt"
    },
    {
      name: "Priya Sharma",
      exam: "SSC CGL",
      rank: 28,
      location: "Jaipur, Rajasthan", 
      story: "The gamification kept me motivated daily. Competing with peers and earning badges made studying fun. Scored 98.5% in final attempt!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya2",
      package: "Pro Max",
      improvement: "First attempt success"
    },
    {
      name: "Arjun Singh",
      exam: "IBPS Clerk",
      rank: 12,
      location: "Lucknow, UP",
      story: "Started with free plan, upgraded to Premium after seeing results. AI-powered analytics pinpointed exactly what to study. Amazing platform!",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun2",
      package: "Premium",
      improvement: "Top 1% in quantitative aptitude"
    },
    {
      name: "Kavya Patel",
      exam: "Railway Group D",
      rank: 156,
      location: "Ahmedabad, Gujarat",
      story: "Offline mode was perfect for my village preparation. Could practice anywhere without internet. The detailed reports helped track progress daily.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=kavya2",
      package: "Premium",
      improvement: "Improved speed by 40%"
    }
  ];

  const achievements = [
    { number: "15,000+", label: "Success Stories", icon: Trophy },
    { number: "98.5%", label: "Success Rate", icon: Star },
    { number: "2.5M+", label: "Tests Taken", icon: Award }
  ];

  return (
    <section 
      ref={ref} 
      className="py-24 bg-gradient-to-br from-purple-50 to-indigo-50 relative overflow-hidden"
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
            className="inline-flex items-center gap-3 bg-yellow-100 rounded-full px-6 py-3 mb-6"
          >
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="text-yellow-700 font-semibold">Success Stories</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-purple-600 bg-clip-text text-transparent">
              Real Results,
            </span>
            <br />
            <span className="text-purple-600">Real Success</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet our successful candidates who cracked their dream exams with our AI-powered platform. 
            Your success story could be next!
          </p>
        </motion.div>

        {/* Success Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={story.avatar} 
                    alt={story.name}
                    className="w-16 h-16 rounded-full border-2 border-purple-200"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{story.name}</h3>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>{story.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Rank #{story.rank}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">{story.exam}</div>
                </div>
              </div>

              {/* Story */}
              <p className="text-gray-700 leading-relaxed italic">
                &quot;{story.story}&quot;
              </p>

              {/* Achievement Badges */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    {story.package}
                  </span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Verified ✓
                  </span>
                </div>

                <div className="text-right">
                  <div className="text-green-600 font-semibold text-sm">{story.improvement}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-8">Platform Achievements</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <achievement.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="text-4xl font-bold mb-2">{achievement.number}</div>
                  <div className="text-indigo-200">{achievement.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xl text-indigo-100 mb-6">
                Ready to join our hall of success? Your achievement could be featured here next!
              </p>
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Your Success Journey
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}