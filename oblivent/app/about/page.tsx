import { Metadata } from "next";
import { Sparkles, Users, Globe, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - Oblivent",
  description: "Learn about Oblivent&apos;s mission to revolutionize digital ecosystems",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <span className="text-gray-900 dark:text-white font-semibold">About Oblivent</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
            One Account,
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Six Platforms</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Oblivent is India&apos;s leading multi-platform digital ecosystem, revolutionizing how you learn, 
            work, trade, and shop online. With six powerful platforms under one unified account, 
            we&apos;re building the future of digital experiences.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To democratize access to world-class digital services by creating an integrated ecosystem 
                where learning, business, trading, and commerce converge seamlessly under one platform.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                To become the world&apos;s most trusted and comprehensive digital ecosystem, empowering 
                millions of users to achieve their personal and professional goals through innovative technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Six Platforms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "E-Learning",
                description: "Comprehensive online education with courses, certifications, and skill development programs.",
                color: "from-blue-500 to-cyan-500"
              },
              {
                name: "Digital Agency",
                description: "Professional digital services including web development, marketing, and design solutions.",
                color: "from-purple-500 to-pink-500"
              },
              {
                name: "Competition Exams",
                description: "Preparation platform for competitive exams with mock tests, study materials, and analytics.",
                color: "from-green-500 to-emerald-500"
              },
              {
                name: "Broker Trading",
                description: "Advanced trading platform with real-time data, analytics, and portfolio management.",
                color: "from-orange-500 to-red-500"
              },
              {
                name: "App Store",
                description: "Curated marketplace for productivity tools, utilities, and business applications.",
                color: "from-indigo-500 to-blue-500"
              },
              {
                name: "Oblivent Mart",
                description: "E-commerce platform offering a wide range of products with secure payment options.",
                color: "from-pink-500 to-rose-500"
              }
            ].map((platform) => (
              <div key={platform.name} className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center mb-4`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{platform.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-12 shadow-xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
                <div className="text-gray-600 dark:text-gray-300">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">6</div>
                <div className="text-gray-600 dark:text-gray-300">Platforms</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
                <div className="text-gray-600 dark:text-gray-300">Courses &amp; Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-gray-600 dark:text-gray-300">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">teamoblivent@gmail.com</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+91 98357 42586</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Bhagalpur, Bihar, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
