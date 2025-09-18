
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Digital Agency | Oblivent",
  description: "Privacy Policy for Oblivent Digital Agency services",
};

export default function AgencyPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Digital Agency Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Agency-Specific Data Collection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our Digital Agency services collect additional information for project delivery:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Business information and requirements</li>
                <li>Project specifications and creative briefs</li>
                <li>Brand assets and intellectual property (with permission)</li>
                <li>Communication records and project feedback</li>
                <li>Analytics data from websites/apps we develop</li>
                <li>Client testimonials and case study data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. How We Use Client Data
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Deliver digital marketing and development services</li>
                <li>Provide project updates and performance reports</li>
                <li>Optimize campaigns and website performance</li>
                <li>Create case studies (with explicit permission)</li>
                <li>Provide ongoing support and maintenance</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Client Confidentiality
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We maintain strict confidentiality regarding all client projects and business information. 
                All team members sign NDAs and we never share proprietary information without written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Third-Party Integrations
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We may use third-party tools for analytics, design, and development. All integrations 
                comply with privacy standards and client data is protected throughout the process.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact Agency Team
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: agency-privacy@oblivent.com</p>
                <p>Phone: +91 98765 43213</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
