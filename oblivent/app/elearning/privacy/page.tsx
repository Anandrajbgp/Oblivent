
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - E-Learning Platform | Oblivent",
  description: "Privacy Policy for Oblivent E-Learning Platform",
};

export default function ELearningPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            E-Learning Platform Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. E-Learning Specific Data Collection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                In addition to general Oblivent data collection, our E-Learning platform collects:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Learning progress and course completion data</li>
                <li>Quiz and assignment submissions</li>
                <li>Video viewing statistics and engagement metrics</li>
                <li>Discussion forum posts and interactions</li>
                <li>Certificate and achievement records</li>
                <li>Learning preferences and course ratings</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. How We Use E-Learning Data
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Personalize learning recommendations</li>
                <li>Track progress and provide completion certificates</li>
                <li>Improve course content and learning experience</li>
                <li>Provide instructor feedback and analytics</li>
                <li>Enable collaborative learning features</li>
                <li>Generate learning reports and analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Student Data Protection
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to protecting student privacy and comply with educational data protection 
                regulations. Student data is used solely for educational purposes and is not shared with 
                third parties without explicit consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Learning Analytics
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We use learning analytics to improve educational outcomes. This includes analyzing 
                engagement patterns, identifying at-risk learners, and optimizing course delivery. 
                All analytics are anonymized and aggregated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact E-Learning Support
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: elearning-privacy@oblivent.com</p>
                <p>Phone: +91 98765 43212</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
