
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Digital Agency | Oblivent",
  description: "Terms of Service for Oblivent Digital Agency services",
};

export default function AgencyTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Digital Agency Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Service Scope & Deliverables
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>All project specifications will be clearly defined in project agreements</li>
                <li>Deliverables are provided as per agreed timelines and milestones</li>
                <li>Revisions are included as specified in the project contract</li>
                <li>Source code and design files ownership terms as per agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Client Responsibilities
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Provide necessary content, assets, and access credentials</li>
                <li>Timely feedback and approvals to maintain project timeline</li>
                <li>Payment of invoices as per agreed terms</li>
                <li>Respect intellectual property rights of third parties</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Payment Terms
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>50% advance payment required to begin work</li>
                <li>Remaining balance due upon project completion</li>
                <li>Monthly retainer for ongoing services</li>
                <li>Late payment charges: 2% per month on overdue amounts</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Upon full payment, clients receive rights to final deliverables as specified in the 
                project agreement. We retain rights to use project as portfolio/case study with client permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Support & Maintenance
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>30 days free support included for all projects</li>
                <li>Extended maintenance contracts available</li>
                <li>Emergency support charges apply outside business hours</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                6. Contact Legal Team
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: agency-legal@oblivent.com</p>
                <p>Phone: +91 98765 43213</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
