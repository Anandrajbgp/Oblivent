'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Trophy, 
  Clock,
  Code,
  Smartphone,
  Video,
  Palette,
  TrendingUp,
  Shield,
  Award,
  ExternalLink,
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  LayoutDashboard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Counter } from '@/components/shared/counter';

export default function AgencyPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Services data
  const services = [
    {
      icon: Code,
      title: "Website Development",
      tagline: "Websites that Sell",
      description: "Custom websites, landing pages, e-commerce stores with SEO optimization",
      features: ["React, Next.js, WordPress", "High-conversion optimized", "E-Commerce ready", "SEO optimized"],
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Smartphone,
      title: "App Development",
      tagline: "Apps that Scale",
      description: "Android & iOS apps, SaaS platforms, business automation tools",
      features: ["Flutter, React Native", "Custom SaaS platforms", "Business automation", "UI/UX prototypes"],
      color: "from-slate-600 to-slate-800"
    },
    {
      icon: Video,
      title: "Video Production",
      tagline: "Stories that Connect",
      description: "Corporate videos, social media content, animated explainers",
      features: ["Corporate videos", "Social media reels", "Animated explainers", "Ad films"],
      color: "from-zinc-700 to-zinc-900"
    },
    {
      icon: Palette,
      title: "Graphic Design",
      tagline: "Designs that Impress",
      description: "Branding, social media creatives, motion graphics",
      features: ["Logo & brand kits", "Social media creatives", "Ads & banners", "Motion graphics"],
      color: "from-neutral-600 to-neutral-800"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      tagline: "Growth that Matters",
      description: "Social media marketing, Google Ads, SEO, influencer campaigns",
      features: ["Social media marketing", "Google Ads & SEO", "Influencer campaigns", "Content marketing"],
      color: "from-stone-700 to-stone-900"
    }
  ];

  // Portfolio cases
  const portfolioCases = [
    {
      title: "TechStartup SaaS Platform",
      category: "Web Development",
      description: "Increased user engagement by 300% with modern SaaS dashboard",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      results: "300% user engagement increase"
    },
    {
      title: "E-commerce Fashion Brand",
      category: "Full Stack",
      description: "Built complete e-commerce solution with 5x sales growth",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&h=300&fit=crop",
      results: "5x sales growth"
    },
    {
      title: "Restaurant Chain App",
      category: "Mobile App",
      description: "Cross-platform app serving 50,000+ daily users",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop",
      results: "50K+ daily users"
    }
  ];

  // Client testimonials
  const testimonials = [
    {
      name: "Rajesh Gupta",
      company: "TechVision Solutions",
      role: "CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rajesh",
      rating: 5,
      text: "Oblivent team transformed our business completely. Our website conversions increased by 400% and their marketing strategies brought us 10x more leads!",
      project: "Complete Digital Transformation"
    },
    {
      name: "Priya Sharma",
      company: "Fashion Forward",
      role: "Founder",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
      rating: 5,
      text: "Best investment for our business! The e-commerce platform they built generated ₹50 lakhs in first 3 months. Highly recommended!",
      project: "E-commerce Development"
    },
    {
      name: "Amit Patel",
      company: "FoodChain India",
      role: "Director",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=amit",
      rating: 5,
      text: "Professional team, on-time delivery, excellent support. Our mobile app now serves 1 lakh+ customers daily. Thank you Oblivent!",
      project: "Mobile App Development"
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: 1,
      title: "Discovery Call",
      description: "Understanding your business needs and goals",
      duration: "30 mins",
      icon: MessageCircle
    },
    {
      step: 2,
      title: "Planning & Strategy",
      description: "Creating detailed project roadmap and timeline",
      duration: "1-2 days",
      icon: Trophy
    },
    {
      step: 3,
      title: "Design & Development",
      description: "Bringing your vision to life with latest technologies",
      duration: "2-8 weeks",
      icon: Code
    },
    {
      step: 4,
      title: "Testing & Feedback",
      description: "Rigorous testing and incorporating your feedback",
      duration: "3-5 days",
      icon: CheckCircle
    },
    {
      step: 5,
      title: "Launch & Support",
      description: "Going live with ongoing maintenance and support",
      duration: "Lifetime",
      icon: Shield
    }
  ];

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-slate-600/20 bg-[length:400%_400%]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20"
            >
              <Award className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Professional Digital Agency</span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Your Brand.
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
                Our Innovation.
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-400 to-zinc-400 bg-clip-text text-transparent">
                Infinite Growth.
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              We design, build & scale businesses with cutting-edge digital solutions. 
              From stunning websites to powerful apps, we make your brand unstoppable.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gray-700 to-slate-800 hover:from-gray-800 hover:to-slate-900 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-gray-500/25 transition-all duration-300 group"
              >
                Get Free Consultation
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-xl font-semibold rounded-2xl backdrop-blur-sm transition-all duration-300"
              >
                View Portfolio
              </Button>
            </div>
          </motion.div>

          {/* Trust Builders */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { icon: Trophy, count: 250, label: "Projects Delivered", suffix: "+" },
              { icon: Users, count: 120, label: "Happy Clients", suffix: "+" },
              { icon: Award, count: 5, label: "Years Experience", suffix: "+" },
              { icon: Clock, count: 24, label: "Support", suffix: "/7" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500/20 to-slate-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                  <stat.icon className="w-8 h-8 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  <Counter end={stat.count} suffix={stat.suffix} duration={2.5} />
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-gray-800 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete digital solutions to transform your business and accelerate growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 font-semibold mb-3">{service.tagline}</p>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" className="w-full group-hover:bg-slate-50 group-hover:border-gray-400">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-gray-800 bg-clip-text text-transparent">
                Our Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real projects, real results. See how we&apos;ve transformed businesses across industries.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioCases.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="text-sm text-green-700 font-medium">Result:</div>
                      <div className="text-lg font-bold text-green-600">{project.results}</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" className="bg-gradient-to-r from-gray-700 to-slate-800 hover:from-gray-800 hover:to-slate-900">
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-gray-800 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Hear from our clients who&apos;ve achieved incredible growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full border-2 border-gray-200"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                      <p className="text-gray-700 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>

                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-gray-700 text-sm font-medium">Project: {testimonial.project}</div>
                    <div className="text-xs text-gray-500 mt-1">✓ Verified Project</div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-gray-800 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 5-step process that ensures your project&apos;s success from concept to launch
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-gray-200 to-slate-200"></div>
            
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-12 h-12 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 -mt-10 relative z-10">
                    <step.icon className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                  <div className="text-gray-700 text-xs font-medium">{step.duration}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-yellow-600 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by industry leaders and recognized for excellence in digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "ISO Certified", logo: "🏆", desc: "Quality Management" },
              { name: "Google Partner", logo: "🎖️", desc: "Ads & Analytics" },
              { name: "Top Rated", logo: "⭐", desc: "Clutch.co" },
              { name: "5-Star Agency", logo: "🌟", desc: "Upwork" },
              { name: "Excellence Award", logo: "🏅", desc: "Web Design" },
              { name: "Best Agency", logo: "🎯", desc: "2024" }
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <span className="text-3xl">{award.logo}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1">{award.name}</h3>
                <p className="text-gray-600 text-xs">{award.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-gray-800 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert designers, developers, and marketers dedicated to your success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { name: "Arjun Sharma", role: "Creative Director", expertise: "UI/UX Design", experience: "8+ Years", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjun" },
              { name: "Priya Gupta", role: "Lead Developer", expertise: "Full-Stack Dev", experience: "6+ Years", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya-dev" },
              { name: "Rahul Kumar", role: "Marketing Head", expertise: "Digital Strategy", experience: "7+ Years", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=rahul" },
              { name: "Sneha Patel", role: "Video Producer", expertise: "Content Creation", experience: "5+ Years", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sneha-video" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-6 text-center h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-gray-300 transition-colors">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-gray-700 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-2">{member.expertise}</p>
                  <div className="bg-gray-50 rounded-lg p-2">
                    <span className="text-gray-700 text-xs font-medium">{member.experience}</span>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features for Clients */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-900 to-gray-800 bg-clip-text text-transparent">
                Client Benefits
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive perks and features that make working with us a premium experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MessageCircle,
                title: "Free Consultation",
                description: "Complimentary business strategy session for every new client",
                color: "from-green-500 to-emerald-600"
              },
              {
                icon: Users,
                title: "Dedicated Manager",
                description: "Personal project manager assigned to your account",
                color: "from-gray-700 to-slate-800"
              },
              {
                icon: Shield,
                title: "Transparent Pricing",
                description: "Clear contracts with no hidden costs or surprises",
                color: "from-orange-500 to-red-600"
              },
              {
                icon: LayoutDashboard,
                title: "Client Dashboard",
                description: "Real-time project tracking and progress updates",
                color: "from-slate-700 to-zinc-800"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="p-8 h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Resources & Blog */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Free Resources
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert guides, templates, and insights to help your business grow
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Marketing Guide 2024",
                description: "Complete guide to scale your business with digital marketing strategies",
                downloadCount: "5,200+",
                type: "PDF Guide",
                color: "from-gray-700 to-slate-800"
              },
              {
                title: "Website Conversion Checklist",
                description: "50-point checklist to optimize your website for maximum conversions",
                downloadCount: "3,800+",
                type: "Checklist",
                color: "from-slate-600 to-slate-800"
              },
              {
                title: "Branding Toolkit",
                description: "Essential templates and guidelines for building a strong brand identity",
                downloadCount: "4,500+",
                type: "Template Kit",
                color: "from-zinc-700 to-zinc-900"
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <Card className="p-8 h-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 group-hover:-translate-y-2">
                  <div className={`w-16 h-16 bg-gradient-to-br ${resource.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-gray-500/20 text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
                      {resource.type}
                    </span>
                    <span className="text-gray-400 text-sm">
                      {resource.downloadCount} downloads
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-300 mb-6">{resource.description}</p>
                  
                  <Button className="w-full bg-white/10 border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300">
                    Download Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-2xl backdrop-blur-sm"
            >
              View All Resources
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]" />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let&apos;s Build Your Brand&apos;s
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-400 to-slate-400 bg-clip-text text-transparent">
                Future Together 🚀
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Ready to transform your business? Get a free consultation and see how we can help you grow.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
                      <option value="">Service Needed</option>
                      <option value="website">Website Development</option>
                      <option value="app">App Development</option>
                      <option value="video">Video Production</option>
                      <option value="design">Graphic Design</option>
                      <option value="marketing">Digital Marketing</option>
                    </select>
                  </div>
                  <div>
                    <select className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent">
                      <option value="">Budget Range</option>
                      <option value="50k-1l">₹50K - ₹1L</option>
                      <option value="1l-5l">₹1L - ₹5L</option>
                      <option value="5l-10l">₹5L - ₹10L</option>
                      <option value="10l+">₹10L+</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full bg-gradient-to-r from-gray-700 to-slate-800 hover:from-gray-800 hover:to-slate-900 text-white font-bold py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Direct Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center mt-8"
          >
            <Button 
              variant="outline" 
              className="border-2 border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-3 rounded-xl"
              onClick={() => window.open('https://wa.me/919876543211?text=Hi! I want to discuss my project with Oblivent Agency.', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Chat
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-xl"
              onClick={() => window.open('tel:+919876543211', '_self')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400/10 px-8 py-3 rounded-xl"
              onClick={() => window.open('mailto:agency@oblivent.com?subject=Project Inquiry&body=Hi! I would like to discuss my project requirements.', '_self')}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}