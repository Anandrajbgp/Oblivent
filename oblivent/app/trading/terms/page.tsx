
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Trading Platform | Oblivent",
  description: "Terms of Service for Oblivent Trading Platform",
};

export default function TradingTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Trading Platform Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Trading Account & KYC
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Valid KYC documents required for account activation</li>
                <li>Minimum age requirement: 18 years</li>
                <li>One trading account per individual</li>
                <li>Account verification within 24-48 hours</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Trading Rules & Risks
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Trading involves market risks and potential losses</li>
                <li>Past performance does not guarantee future results</li>
                <li>Users responsible for their investment decisions</li>
                <li>Platform provides tools and data, not investment advice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Fees & Charges
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Brokerage charges as per selected plan</li>
                <li>No account opening or maintenance charges</li>
                <li>Transparent fee structure with no hidden costs</li>
                <li>Real-time calculation of charges</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Regulatory Compliance
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Our platform is SEBI compliant and follows all regulatory guidelines. 
                We maintain required records and report to regulatory authorities as mandated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact Trading Team
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: trading@oblivent.com</p>
                <p>Phone: +91 98765 43214</p>
                <p>Trading Hours: 9:00 AM - 3:30 PM (Mon-Fri)</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
