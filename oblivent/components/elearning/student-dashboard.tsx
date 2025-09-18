"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Home,
  User,
  BookOpen,
  CreditCard,
  Video,
  Share2,
  Users,
  Wallet,
  GraduationCap,
  FileText,
  Trophy,
  Search,
  Bell,
  Settings,
  Play,
  Award,
  TrendingUp,
  CheckCircle,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Counter } from "@/components/shared/counter";

export function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Mock student data
  const studentData = {
    name: "Alex Johnson",
    package: "Gold Package",
    enrollmentDate: "January 15, 2024",
    totalCourses: 45,
    completedCourses: 12,
    currentStreak: 7,
    totalWatchTime: 156,
    certificatesEarned: 8
  };

  const sidebarItems = [
    { id: "dashboard", label: "Dashboard", icon: Home, active: true },
    { id: "profile", label: "Profile", icon: User },
    { id: "courses", label: "My Courses", icon: BookOpen },
    { id: "plan", label: "Plan", icon: CreditCard },
    { id: "startup", label: "Startup Video", icon: Video },
    { id: "social", label: "Social Media Handles", icon: Share2 },
    { id: "affiliates", label: "Affiliates", icon: Users, hasSubmenu: true },
    { id: "payment", label: "Payment Section", icon: Wallet },
    { id: "training", label: "Training Section", icon: GraduationCap },
    { id: "certificates", label: "Certificates", icon: Award },
    { id: "assignments", label: "Assignments", icon: FileText },
    { id: "leaderboard", label: "Leaderboard", icon: Trophy }
  ];

  const enrolledCourses = [
    {
      id: 1,
      title: "Advanced Graphic Design",
      category: "Design",
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      duration: "4.5 hours",
      instructor: "Sarah Miller",
      thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=design",
      lastWatched: "2 hours ago"
    },
    {
      id: 2,
      title: "YouTube Mastery",
      category: "Marketing",
      progress: 60,
      totalLessons: 32,
      completedLessons: 19,
      duration: "6.2 hours",
      instructor: "Mike Chen",
      thumbnail: "https://api.dicebear.com/7.x/shapes/svg?seed=youtube",
      lastWatched: "1 day ago"
    }
  ];

  const statCards = [
    {
      title: "Total Earnings",
      value: "₹25,400",
      icon: Wallet,
      color: "from-green-500 to-green-600",
      change: "+12.5%"
    },
    {
      title: "Courses Completed",
      value: studentData.completedCourses,
      icon: CheckCircle,
      color: "from-blue-500 to-blue-600",
      change: "+3 this month"
    },
    {
      title: "Active Referrals",
      value: 28,
      icon: Users,
      color: "from-purple-500 to-purple-600",
      change: "+5 new"
    },
    {
      title: "Certificates",
      value: studentData.certificatesEarned,
      icon: Award,
      color: "from-orange-500 to-orange-600",
      change: "+2 pending"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-80 bg-white shadow-lg border-r border-gray-200 fixed h-full z-40">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Growsence</h1>
              <p className="text-sm text-gray-600">E-Learning Platform</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                whileHover={{ x: 4 }}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? "text-white" : "text-gray-600"}`} />
                <span className="font-medium">{item.label}</span>
                {item.hasSubmenu && (
                  <div className="ml-auto">
                    <div className="w-1.5 h-1.5 bg-current rounded-full" />
                  </div>
                )}
              </motion.button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-80">
        {/* Top Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome to Growsence</h1>
              <p className="text-gray-600">{studentData.package} • Learning, Rahul</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Search className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Bell className="w-4 h-4" />
              </Button>
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-8">
          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                        <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
                      <div className="text-gray-600 text-sm font-medium">{stat.title}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Three Column Layout */}
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Continue Learning */}
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Continue Learning</h3>
                  <div className="space-y-4">
                    {enrolledCourses.map((course) => (
                      <div key={course.id} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-3 mb-3">
                          <img 
                            src={course.thumbnail} 
                            alt={course.title}
                            className="w-10 h-10 rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm">{course.title}</h4>
                            <p className="text-gray-600 text-xs">{course.progress}% Complete</p>
                          </div>
                        </div>
                        <Button size="sm" className="w-full flex items-center gap-2">
                          <Play className="w-4 h-4" />
                          Continue
                        </Button>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* Performance Stats */}
                <Card className="p-6 bg-gradient-to-br from-red-50 to-pink-50 border border-red-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Performance</h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">
                        <Counter end={studentData.currentStreak} duration={1} />
                      </div>
                      <div className="text-red-600 font-medium text-sm">Day Streak</div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Watch Time</span>
                        <span className="font-medium">{studentData.totalWatchTime}h</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Avg. Score</span>
                        <span className="font-medium">87%</span>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Quick Actions */}
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Session
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Award className="w-4 h-4 mr-2" />
                      View Certificates
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Analytics
                    </Button>
                    <Button variant="outline" className="w-full justify-start" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Settings
                    </Button>
                  </div>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card className="p-6 bg-white border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Completed &ldquo;Advanced Marketing&rdquo; course</p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Earned certificate in &ldquo;Digital Marketing&rdquo;</p>
                      <p className="text-sm text-gray-600">1 day ago</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Other tab contents */}
          {activeTab !== "dashboard" && (
            <div className="flex items-center justify-center h-96">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {sidebarItems.find(item => item.id === activeTab)?.label}
                </h3>
                <p className="text-gray-600">This section is under development</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}