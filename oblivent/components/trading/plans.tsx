'use client';

import { motion } from 'framer-motion';
import { Check, Star, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function TradingPlans() {
  const plans = [
    {
      name: "Freemium",
      icon: Zap,
      price: "₹0",
      period: "Forever",
      description: "Perfect for beginners to start their trading journey",
      features: [
        "Basic market data",
        "Limited trading (5 trades/day)",
        "Basic charts & indicators",
        "Paper trading",
        "Community access",
        "Mobile app"
      ],
      limitations: [
        "Limited to cash segment",
        "Basic support only",
        "No AI insights"
      ],
      buttonText: "Start Free",
      popular: false
    },
    {
      name: "Premium",
      icon: Star,
      price: "₹999",
      period: "per month",
      description: "Advanced tools for serious traders & investors",
      features: [
        "Real-time market data",
        "Unlimited trading",
        "Advanced analytics & AI insights",
        "All segments (Equity, F&O, Commodity)",
        "Priority support",
        "Margin trading",
        "Expert mentorship sessions",
        "Risk management tools",
        "Custom alerts & notifications",
        "Portfolio optimization",
        "Advanced charting tools"
      ],
      limitations: [],
      buttonText: "Go Premium",
      popular: true
    },
    {
      name: "Expert",
      icon: Crown,
      price: "₹1,999",
      period: "per month",
      description: "Complete trading ecosystem for professionals",
      features: [
        "Everything in Premium",
        "API access for algo trading",
        "Dedicated relationship manager",
        "Institutional research reports",
        "Advanced derivatives strategies",
        "Custom indicators & strategies",
        "White-label solutions",
        "Priority execution",
        "Tax optimization guidance",
        "Exclusive webinars & events"
      ],
      limitations: [],
      buttonText: "Go Expert",
      popular: false
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
            <Crown className="w-5 h-5 text-blue-600" />
            <span className="text-blue-600 font-semibold">Choose Your Plan</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Start Free, Upgrade When
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> You&apos;re Ready</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginner-friendly free tools to professional-grade analytics - choose the plan that fits your trading goals
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-blue-500 ring-4 ring-blue-100'
                  : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500'
                    : 'bg-gray-100'
                }`}>
                  <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>

                <Button
                  className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                      : 'bg-gray-800 hover:bg-gray-900 text-white'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 border-b border-gray-200 pb-2">
                  &quot;What&apos;s Included:&quot;
                </h4>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <div className="pt-4 border-t border-gray-200">
                    <h5 className="text-sm font-medium text-gray-500 mb-2">Limitations:</h5>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, limitIndex) => (
                        <li key={limitIndex} className="text-sm text-gray-500 flex items-start gap-2">
                          <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                          {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Special Offers</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">₹500</div>
              <div className="text-sm text-gray-600">Welcome Bonus for New Premium Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-500 mb-2">30 Days</div>
              <div className="text-sm text-gray-600">Free Premium Trial</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-500 mb-2">20%</div>
              <div className="text-sm text-gray-600">Off on Annual Plans</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}