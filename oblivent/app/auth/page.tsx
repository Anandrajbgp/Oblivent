'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your authentication logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 rounded-3xl shadow-2xl overflow-hidden"
      >
        <div className="flex min-h-[600px]">
          {/* Welcome Section */}
          <AnimatePresence mode="wait">
            {isLogin ? (
              <motion.div
                key="login-welcome"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex-1 bg-gradient-to-br from-orange-500 to-red-500 p-12 flex flex-col justify-center text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <h1 className="text-5xl font-bold mb-6">WELCOME BACK!</h1>
                  <p className="text-xl leading-relaxed text-orange-100">
                    We are happy to have you with us again. If you need anything, we are here to help.
                  </p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
              </motion.div>
            ) : (
              <motion.div
                key="register-welcome"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex-1 bg-gradient-to-br from-orange-500 to-red-500 p-12 flex flex-col justify-center text-white relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <h1 className="text-5xl font-bold mb-6">WELCOME!</h1>
                  <p className="text-xl leading-relaxed text-orange-100">
                    We&apos;re delighted to have you here. If you need any assistance, feel free to reach out.
                  </p>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Auth Form Section */}
          <div className="flex-1 bg-gradient-to-br from-gray-900 to-black p-12 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {isLogin ? (
                <motion.div
                  key="login-form"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-md mx-auto"
                >
                  <h2 className="text-4xl font-bold text-white mb-8">Login</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Username Field */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <User size={20} />
                      </div>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-4 pl-12 pr-4 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                        required
                      />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Lock size={20} />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-4 pl-12 pr-12 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>

                    {/* Login Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
                    >
                      Login
                    </Button>
                  </form>

                  {/* Switch to Register */}
                  <div className="text-center mt-8">
                    <p className="text-gray-400">
                      Don&apos;t have an account?{' '}
                      <button
                        onClick={() => setIsLogin(false)}
                        className="text-orange-500 hover:text-orange-400 font-semibold transition-colors"
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="register-form"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full max-w-md mx-auto"
                >
                  <h2 className="text-4xl font-bold text-white mb-8">Register</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Username Field */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <User size={20} />
                      </div>
                      <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-4 pl-12 pr-4 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Mail size={20} />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-4 pl-12 pr-4 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                        required
                      />
                    </div>

                    {/* Password Field */}
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <Lock size={20} />
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b-2 border-gray-600 text-white placeholder-gray-400 py-4 pl-12 pr-12 focus:border-orange-500 focus:outline-none transition-colors text-lg"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>

                    {/* Register Button */}
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
                    >
                      Register
                    </Button>
                  </form>

                  {/* Switch to Login */}
                  <div className="text-center mt-8">
                    <p className="text-gray-400">
                      Don&apos;t have an account?{' '}
                      <button
                        onClick={() => setIsLogin(true)}
                        className="text-orange-500 hover:text-orange-400 font-semibold transition-colors"
                      >
                        Sign In
                      </button>
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}