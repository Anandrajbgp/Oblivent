
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - Oblivent",
  description: "Cookie Policy for Oblivent multi-platform ecosystem",
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                What Are Cookies?
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Cookies are small text files that are stored on your computer or mobile device when you visit 
                our website. They help us provide you with a better experience by remembering your preferences 
                and improving our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Types of Cookies We Use
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    These cookies are necessary for our website to function properly.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>User authentication and session management</li>
                    <li>Security and fraud prevention</li>
                    <li>Shopping cart functionality</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Analytics Cookies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    These help us understand how visitors interact with our website.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Google Analytics for website traffic analysis</li>
                    <li>User behavior and engagement tracking</li>
                    <li>Performance monitoring</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    These cookies enhance your experience on our website.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Language and region preferences</li>
                    <li>Theme settings (dark/light mode)</li>
                    <li>Personalized content recommendations</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Marketing Cookies
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    These cookies help us deliver relevant advertisements.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>Targeted advertising on social media</li>
                    <li>Retargeting campaigns</li>
                    <li>Conversion tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Managing Your Cookie Preferences
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Use our cookie consent banner to adjust your preferences</li>
                <li>Modify your browser settings to block or delete cookies</li>
                <li>Opt out of targeted advertising through industry tools</li>
                <li>Contact us directly to discuss your privacy preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Third-Party Cookies
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We may use third-party services that set their own cookies:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>YouTube for embedded videos</li>
                <li>Social media platforms for sharing buttons</li>
                <li>Payment processors for secure transactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Updates to Cookie Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Cookie Policy periodically to reflect changes in our practices or for 
                legal and regulatory reasons. We will notify you of any significant changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Contact Us About Cookies
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: privacy@oblivent.com</p>
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
