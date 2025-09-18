"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Copy, 
  Share2, 
  BarChart3, 
  Calendar,
  Target,
  Award,
  Download,
  Link,
  User,
  Settings
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Counter } from "@/components/shared/counter";

export function AffiliateDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [copiedLink, setCopiedLink] = useState(false);

  // Mock affiliate data
  const affiliateData = {
    name: "Sarah Wilson",
    affiliateId: "AF12345",
    joinDate: "December 1, 2023",
    totalReferrals: 127,
    directReferrals: 89,
    secondLevelReferrals: 38,
    totalEarnings: 245680,
    thisMonthEarnings: 45320,
    pendingPayouts: 12450,
    clickThrough: 1250,
    conversionRate: 7.12
  };

  const referralLink = "https://oblivent.com/ref/AF12345";

  const recentEarnings = [
    { name: "John Doe", package: "Pro Package", earnings: 1245, date: "2 hours ago", level: "Direct" },
    { name: "Maria Garcia", package: "Beginner Package", earnings: 540, date: "5 hours ago", level: "Direct" },
    { name: "David Kim", package: "Expert Package", earnings: 2899, date: "1 day ago", level: "Direct" },
    { name: "Lisa Wang", package: "Pro Package", earnings: 175, date: "1 day ago", level: "2nd Level" },
    { name: "Alex Johnson", package: "Beginner Package", earnings: 540, date: "2 days ago", level: "Direct" }
  ];

  const monthlyStats = [
    { month: "Jan", earnings: 28500, referrals: 15 },
    { month: "Feb", earnings: 35200, referrals: 22 },
    { month: "Mar", earnings: 41800, referrals: 28 },
    { month: "Apr", earnings: 45320, referrals: 31 }
  ];

  const marketingMaterials = [
    { title: "Hero Banner Set", type: "Images", downloads: 1250, size: "2.3 MB" },
    { title: "Success Stories Video", type: "Video", downloads: 890, size: "45 MB" },
    { title: "Social Media Kit", type: "Images", downloads: 2100, size: "5.1 MB" },
    { title: "Email Templates", type: "Text", downloads: 650, size: "890 KB" }
  ];

  const statCards = [
    {
      title: "Total Earnings",
      value: affiliateData.totalEarnings,
      icon: DollarSign,
      color: "from-green-500 to-green-600",
      prefix: "₹",
      isK: true
    },
    {
      title: "This Month",
      value: affiliateData.thisMonthEarnings,
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
      prefix: "₹",
      isK: true
    },
    {
      title: "Total Referrals",
      value: affiliateData.totalReferrals,
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Conversion Rate",
      value: affiliateData.conversionRate,
      icon: Target,
      color: "from-orange-500 to-orange-600",
      suffix: "%"
    }
  ];

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome back, {affiliateData.name}!</h1>
                <p className="text-gray-600">Affiliate ID: {affiliateData.affiliateId} • Member since {affiliateData.joinDate}</p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <Counter 
                    end={stat.value} 
                    duration={1.5} 
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    isK={stat.isK}
                  />
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.title}</div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Referral Link Card */}
        <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Link className="w-5 h-5" />
            Your Referral Link
          </h3>
          <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-green-200">
            <div className="flex-1 font-mono text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded">
              {referralLink}
            </div>
            <Button 
              onClick={copyReferralLink}
              className={`flex items-center gap-2 ${copiedLink ? 'bg-green-600' : 'bg-green-500'} hover:bg-green-600`}
            >
              <Copy className="w-4 h-4" />
              {copiedLink ? 'Copied!' : 'Copy'}
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                <Counter end={affiliateData.clickThrough} duration={1} />
              </div>
              <div className="text-green-700 text-sm">Total Clicks</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">
                <Counter end={affiliateData.conversionRate} suffix="%" duration={1} />
              </div>
              <div className="text-blue-700 text-sm">Conversion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                <Counter end={affiliateData.directReferrals} duration={1} />
              </div>
              <div className="text-purple-700 text-sm">Direct Referrals</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600">
                <Counter end={affiliateData.secondLevelReferrals} duration={1} />
              </div>
              <div className="text-orange-700 text-sm">2nd Level</div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-200">
              {["overview", "earnings", "materials"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 font-medium capitalize transition-colors ${
                    activeTab === tab
                      ? "text-green-600 border-b-2 border-green-600"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Monthly Performance */}
                <Card className="p-6 bg-white border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Performance</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {monthlyStats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-lg font-bold text-gray-900">₹{(stat.earnings/1000).toFixed(0)}K</div>
                        <div className="text-sm text-gray-600">{stat.month}</div>
                        <div className="text-xs text-blue-600">{stat.referrals} referrals</div>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">Pending Payouts</h4>
                        <p className="text-gray-600 text-sm">Will be processed on Saturday</p>
                      </div>
                      <div className="text-3xl font-bold text-blue-600">
                        ₹<Counter end={affiliateData.pendingPayouts/1000} suffix="K" duration={1} />
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-2">This Week</h4>
                        <p className="text-gray-600 text-sm">New referrals and earnings</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">12</div>
                        <div className="text-purple-600 text-sm">Referrals</div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}

            {activeTab === "earnings" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Earnings</h3>
                {recentEarnings.map((earning, index) => (
                  <Card key={index} className="p-4 bg-white border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{earning.name}</h4>
                          <p className="text-gray-600 text-sm">{earning.package} • {earning.level}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-green-600">₹{earning.earnings}</div>
                        <div className="text-gray-600 text-sm">{earning.date}</div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "materials" && (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Materials</h3>
                {marketingMaterials.map((material, index) => (
                  <Card key={index} className="p-4 bg-white border border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                          <Download className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{material.title}</h4>
                          <p className="text-gray-600 text-sm">{material.type} • {material.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-sm font-medium text-gray-900">{material.downloads} downloads</div>
                        </div>
                        <Button size="sm" className="flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Leaderboard */}
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Top Performers
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Alex Johnson", earnings: "₹85K", rank: 1 },
                  { name: "Maria Garcia", earnings: "₹72K", rank: 2 },
                  { name: "Sarah Wilson", earnings: "₹68K", rank: 3 },
                  { name: "David Kim", earnings: "₹54K", rank: 4 }
                ].map((performer, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        index === 0 ? 'bg-yellow-500' : index === 1 ? 'bg-gray-400' : index === 2 ? 'bg-orange-500' : 'bg-blue-500'
                      }`}>
                        {performer.rank}
                      </div>
                      <span className="text-sm font-medium text-gray-900">{performer.name}</span>
                    </div>
                    <span className="text-sm font-bold text-green-600">{performer.earnings}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-white border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Users className="w-4 h-4 mr-2" />
                  Manage Referrals
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Reports
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Payout
                </Button>
              </div>
            </Card>

            {/* Support */}
            <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Our affiliate support team is here to help you maximize your earnings.
              </p>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Contact Support
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}