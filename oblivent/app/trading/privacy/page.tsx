
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Trading Platform | Oblivent",
  description: "Privacy Policy for Oblivent Trading Platform",
};

export default function TradingPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Trading Platform Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Trading-Specific Data Collection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our Trading Platform collects financial and investment-related data:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>KYC documents and identity verification</li>
                <li>Bank account and payment information</li>
                <li>Trading history and investment patterns</li>
                <li>Risk assessment and investment preferences</li>
                <li>Portfolio performance and holdings</li>
                <li>Communication records for compliance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Financial Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We employ bank-grade encryption and security measures to protect all financial data. 
                All transactions are secured with SSL encryption and multi-factor authentication.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Regulatory Compliance
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We comply with SEBI regulations and maintain required records for regulatory reporting. 
                Data sharing is limited to authorized entities as per regulatory requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Trading Analytics
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We analyze trading patterns to provide personalized insights and improve platform performance. 
                All analytics data is anonymized and aggregated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact Trading Support
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: trading-privacy@oblivent.com</p>
                <p>Phone: +91 98765 43214</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
