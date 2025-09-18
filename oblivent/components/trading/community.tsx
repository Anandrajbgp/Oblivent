'use client';

import { motion } from 'framer-motion';
import { Users, MessageCircle, BookOpen, Award, Calendar, Video } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TradingCommunity() {
  const communityFeatures = [
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "1-on-1 sessions with experienced traders and market experts",
      highlight: "Premium Feature"
    },
    {
      icon: MessageCircle,
      title: "Trader Forums",
      description: "Discussion boards for strategies, market analysis, and Q&A",
      highlight: "Active Community"
    },
    {
      icon: Video,
      title: "Live Webinars",
      description: "Weekly market updates and educational sessions",
      highlight: "Free Access"
    },
    {
      icon: BookOpen,
      title: "Learning Resources",
      description: "Comprehensive guides, tutorials, and market research",
      highlight: "Updated Daily"
    },
    {
      icon: Award,
      title: "Trading Challenges",
      description: "Monthly competitions with cash prizes and recognition",
      highlight: "Win Prizes"
    },
    {
      icon: Calendar,
      title: "Market Calendar",
      description: "Earnings, events, and important market dates",
      highlight: "Always Updated"
    }
  ];

  const mentors = [
    {
      name: "Vikram Singh",
      role: "Senior Market Analyst",
      experience: "12+ years",
      specialty: "Technical Analysis",
      image: "V"
    },
    {
      name: "Meera Agarwal",
      role: "Options Strategist",
      experience: "8+ years",
      specialty: "Derivatives Trading",
      image: "M"
    },
    {
      name: "Suresh Kumar",
      role: "Fund Manager",
      experience: "15+ years",
      specialty: "Portfolio Management",
      image: "S"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-blue-100 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Trading Community</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Learn from the
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Best Traders</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our community of successful traders, get mentorship, and access exclusive resources
          </p>
        </motion.div>

        {/* Community Features */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 rounded-full px-2 py-1">
                    {feature.highlight}
                  </span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Expert Mentors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-xl"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Expert Mentors</h3>
            <p className="text-xl text-gray-600">
              Get guidance from industry veterans with decades of trading experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="text-center bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6">
                  {mentor.image}
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-2">{mentor.name}</h4>
                <p className="text-blue-600 font-semibold mb-2">{mentor.role}</p>
                <p className="text-gray-600 mb-2">{mentor.experience} Experience</p>
                <p className="text-sm text-gray-500 mb-6">Specializes in {mentor.specialty}</p>

                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl">
                  Book Session
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { number: "500+", label: "Mentorship Sessions", subtext: "This Month" },
            { number: "50+", label: "Expert Mentors", subtext: "Available 24/7" },
            { number: "10K+", label: "Community Members", subtext: "Growing Daily" },
            { number: "1000+", label: "Success Stories", subtext: "Profitable Traders" }
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-800 font-semibold mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.subtext}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}