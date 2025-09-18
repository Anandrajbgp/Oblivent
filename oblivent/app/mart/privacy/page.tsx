
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Oblivent Mart | Oblivent",
  description: "Privacy Policy for Oblivent Mart E-commerce Platform",
};

export default function MartPrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Oblivent Mart Privacy Policy
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. E-commerce Data Collection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Oblivent Mart collects information necessary for e-commerce operations:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Shipping and billing addresses</li>
                <li>Order history and purchase preferences</li>
                <li>Product reviews and ratings</li>
                <li>Wishlist and cart information</li>
                <li>Seller communication records</li>
                <li>Payment method details (securely encrypted)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Seller Information Protection
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We protect seller business information including sales data, inventory levels, 
                and customer lists. Seller data is used only for platform operations and analytics.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Order & Delivery Tracking
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                We track orders and deliveries to provide real-time updates. Location data is used 
                only for delivery purposes and is shared with logistics partners as needed.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Payment Security
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                All payment information is processed through secure, PCI-compliant payment gateways. 
                We do not store complete payment card details on our servers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact Mart Team
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: mart-privacy@oblivent.com</p>
                <p>Phone: +91 98765 43217</p>
                <p>Customer Care: 24/7 Available</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
