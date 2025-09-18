
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - App Store | Oblivent",
  description: "Terms of Service for Oblivent App Store Platform",
};

export default function AppsTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            App Store Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. App Download & Usage
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Apps downloaded for personal use as per app licenses</li>
                <li>Some apps may require additional permissions</li>
                <li>Free and paid apps available with clear pricing</li>
                <li>Updates delivered automatically when available</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Developer Guidelines
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Apps must comply with quality and security standards</li>
                <li>No malicious or harmful content allowed</li>
                <li>Regular app updates and maintenance required</li>
                <li>Revenue sharing as per developer agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Reviews & Ratings
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Genuine reviews and ratings encouraged</li>
                <li>Fake or paid reviews will be removed</li>
                <li>Developers can respond to user feedback</li>
                <li>Review moderation for inappropriate content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Refunds & Returns
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Refunds available within 24 hours of purchase</li>
                <li>Technical issues eligible for full refund</li>
                <li>In-app purchases subject to developer policies</li>
                <li>Subscription cancellations processed immediately</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact App Store Team
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: apps@oblivent.com</p>
                <p>Phone: +91 98765 43216</p>
                <p>Developer Support: developer@oblivent.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
