import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - E-Learning Platform | Oblivent",
  description: "Terms of Service for Oblivent E-Learning Platform",
};

export default function ELearningTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            E-Learning Platform Terms of Service
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Course Access and Usage
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Course access is granted for personal, non-commercial use only</li>
                <li>Sharing login credentials or course content is strictly prohibited</li>
                <li>Course materials are protected by copyright and intellectual property laws</li>
                <li>Lifetime access means access for the lifetime of the platform</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Student Responsibilities
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Maintain academic integrity in all assessments</li>
                <li>Respect other students and instructors in discussions</li>
                <li>Use the platform in accordance with community guidelines</li>
                <li>Report any technical issues or inappropriate content</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Certification and Completion
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Certificates are issued upon successful completion of course requirements. 
                Certificates are digital and verifiable through our platform. We reserve the 
                right to revoke certificates for violations of academic integrity.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Refund Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                30-day money-back guarantee for all courses. Refunds are processed if you&apos;re 
                not satisfied with the course content, subject to course completion being less than 30%.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact E-Learning Team
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: elearning@oblivent.com</p>
                <p>Phone: +91 98765 43212</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}