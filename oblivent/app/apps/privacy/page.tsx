
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - App Store | Oblivent",
  description: "Privacy Policy for Oblivent App Store Platform",
};

export default function AppsPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            App Store Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. App Store Data Collection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our App Store platform collects the following information:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>App download and usage statistics</li>
                <li>User reviews and ratings</li>
                <li>Purchase history and transaction records</li>
                <li>App preferences and recommendations</li>
                <li>Device compatibility information</li>
                <li>Developer interaction data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Developer Data Protection
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We protect developer information including app source code, revenue data, 
                and business metrics. Sensitive developer data is never shared without explicit consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. App Recommendations
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We analyze your app usage patterns to provide personalized recommendations. 
                This helps you discover relevant apps and improves your overall experience.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Third-Party App Privacy
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Third-party apps have their own privacy policies. We require all developers 
                to comply with privacy standards but are not responsible for their data practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact App Store Team
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: apps-privacy@oblivent.com</p>
                <p>Phone: +91 98765 43216</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
