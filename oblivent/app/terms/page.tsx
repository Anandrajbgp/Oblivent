import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Oblivent",
  description: "Terms of Service for Oblivent multi-platform ecosystem",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                By accessing and using Oblivent&apos;s services, you accept and agree to be bound by the terms 
                and provision of this agreement. This includes all six platforms: E-Learning, Digital Agency, 
                Competition Exams, Broker Trading, App Store, and Oblivent Mart.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Use License
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Permission is granted to temporarily access and use Oblivent&apos;s services for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
              <p className="text-gray-600 dark:text-gray-300">Under this license you may not:</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mt-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for commercial purposes</li>
                <li>Attempt to reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Account Registration
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                You must register for an account to access certain features. You are responsible for maintaining 
                the confidentiality of your account credentials and for all activities under your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Platform-Specific Terms
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Learning Platform</h3>
                  <p className="text-gray-600 dark:text-gray-300">Course content is for personal use only. Sharing or distributing course materials is prohibited.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Trading Platform</h3>
                  <p className="text-gray-600 dark:text-gray-300">Trading involves risk. Past performance does not guarantee future results.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketplace (Mart)</h3>
                  <p className="text-gray-600 dark:text-gray-300">Sellers are responsible for product quality and descriptions. Returns subject to seller policies.</p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Payment Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                All fees are non-refundable unless otherwise stated. Prices are subject to change with notice. 
                You authorize us to charge your payment method for all fees incurred.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Oblivent shall not be liable for any damages arising from the use of our services. 
                Our liability is limited to the amount you paid for the specific service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                7. Contact Information
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: legal@oblivent.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Address: Mumbai, India</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}