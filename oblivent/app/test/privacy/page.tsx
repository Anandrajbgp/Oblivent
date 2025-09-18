
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Competition Exams | Oblivent",
  description: "Privacy Policy for Oblivent Competition Exams Platform",
};

export default function TestPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Competition Exams Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Exam Platform Data Collection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our Competition Exams platform collects exam-related information:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Test scores and performance analytics</li>
                <li>Study progress and time spent</li>
                <li>Question attempt patterns and accuracy</li>
                <li>Mock test results and rankings</li>
                <li>Subject-wise strength and weakness analysis</li>
                <li>Discussion forum interactions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Performance Analytics
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We analyze your test performance to provide personalized study recommendations 
                and track your preparation progress. All analytics help improve your exam readiness.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Leaderboards & Rankings
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your performance may appear on leaderboards with anonymized identifiers. 
                Personal information is never disclosed in public rankings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Study Data Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                All study data and test results are securely stored and encrypted. 
                We maintain strict confidentiality of your academic performance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact Exam Support
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: exams-privacy@oblivent.com</p>
                <p>Phone: +91 98765 43215</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
