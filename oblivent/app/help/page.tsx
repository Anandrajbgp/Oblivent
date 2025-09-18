
import { Metadata } from "next";
import { MessageCircle, Phone, Mail, Clock, Search, FileText, Video, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Help & Support - Oblivent",
  description: "Get help and support for all Oblivent platforms and services",
};

export default function HelpPage() {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team instantly",
      action: "Start Chat",
      available: "24/7",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      action: "Call Now",
      available: "9 AM - 8 PM",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us detailed questions",
      action: "Send Email",
      available: "24-48 hour response",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Video,
      title: "Video Call",
      description: "Schedule a screen-sharing session",
      action: "Book Call",
      available: "By appointment",
      color: "from-orange-500 to-red-600"
    }
  ];

  const faqs = [
    {
      category: "Account & Billing",
      questions: [
        { q: "How do I reset my password?", a: "Go to login page and click 'Forgot Password' link." },
        { q: "How can I update my payment method?", a: "Visit Account Settings > Payment Methods to update." },
        { q: "What payment methods are accepted?", a: "UPI, Credit/Debit Cards, Net Banking, and Digital Wallets." }
      ]
    },
    {
      category: "Technical Issues",
      questions: [
        { q: "The website is loading slowly", a: "Try clearing browser cache or switch to a different browser." },
        { q: "I can't access my course videos", a: "Check your internet connection and try refreshing the page." },
        { q: "Mobile app is not working", a: "Update to the latest app version from Play Store/App Store." }
      ]
    },
    {
      category: "Platform Specific",
      questions: [
        { q: "How do I track my order on Mart?", a: "Login to your account and check 'My Orders' section." },
        { q: "Can I change my trading plan?", a: "Yes, you can upgrade/downgrade anytime from your dashboard." },
        { q: "How to download certificates?", a: "Complete the course and visit 'Certificates' section in your dashboard." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-blue-600 bg-clip-text text-transparent">
              Help & Support
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get help with any of our platforms. Our expert support team is here to assist you.
          </p>
        </div>

        {/* Quick Support Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Get Instant Help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="p-6 text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {option.description}
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <Clock className="w-4 h-4" />
                  {option.available}
                </div>
                <Button size="sm" className="w-full">
                  {option.action}
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Search Help */}
        <section className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles, tutorials, or FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <Button className="absolute right-2 top-2">
                Search
              </Button>
            </div>
          </div>
        </section>

        {/* Platform-Specific Help */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Platform-Specific Help
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "E-Learning", icon: "📚", email: "elearning@oblivent.com", phone: "+91 98765 43212" },
              { name: "Digital Agency", icon: "🎨", email: "agency@oblivent.com", phone: "+91 98765 43213" },
              { name: "Trading Platform", icon: "📈", email: "trading@oblivent.com", phone: "+91 98765 43214" },
              { name: "Competition Exams", icon: "🎯", email: "exams@oblivent.com", phone: "+91 98765 43215" },
              { name: "App Store", icon: "📱", email: "apps@oblivent.com", phone: "+91 98765 43216" },
              { name: "Oblivent Mart", icon: "🛍️", email: "mart@oblivent.com", phone: "+91 98765 43217" }
            ].map((platform, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{platform.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {platform.name}
                  </h3>
                </div>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {platform.email}
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    {platform.phone}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {faqs.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="p-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                        Q: {faq.q}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        A: {faq.a}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Contact */}
        <section>
          <Card className="p-8 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-red-200 dark:border-red-800">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4 flex items-center justify-center gap-2">
                <Users className="w-6 h-6" />
                Emergency Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                For urgent issues affecting your business operations or financial transactions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Hotline: +91 98765 43200
                </Button>
                <Button variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Priority WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
