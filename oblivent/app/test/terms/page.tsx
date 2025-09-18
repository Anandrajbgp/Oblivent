
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Competition Exams | Oblivent",
  description: "Terms of Service for Oblivent Competition Exams Platform",
};

export default function TestTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Competition Exams Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Exam Access & Usage
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Mock tests and study materials for personal use only</li>
                <li>Sharing of test questions or answers is prohibited</li>
                <li>Multiple attempts allowed as per package limitations</li>
                <li>Time limits strictly enforced during mock tests</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Academic Integrity
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>No cheating or unfair means during tests</li>
                <li>Plagiarism in discussions/submissions not allowed</li>
                <li>Multiple accounts per user prohibited</li>
                <li>Suspicious activity may result in account suspension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Subscription & Access
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Subscription provides access to selected exam categories</li>
                <li>Auto-renewal can be disabled from account settings</li>
                <li>Refunds available within 7 days of purchase</li>
                <li>Access valid for subscription period only</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Content Accuracy
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                While we strive for accuracy in all content, exam patterns and syllabi may change. 
                We regularly update content but recommend checking official sources for latest information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact Exam Team
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: exams@oblivent.com</p>
                <p>Phone: +91 98765 43215</p>
                <p>Support Hours: 9:00 AM - 9:00 PM</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
