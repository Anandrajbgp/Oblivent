
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Oblivent Mart | Oblivent",
  description: "Terms of Service for Oblivent Mart E-commerce Platform",
};

export default function MartTermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Oblivent Mart Terms of Service
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString('en-IN')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                1. Marketplace Usage
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Products sold by registered sellers on our platform</li>
                <li>Product authenticity guaranteed by sellers</li>
                <li>Price accuracy and availability subject to seller confirmation</li>
                <li>Age restriction applies for certain product categories</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                2. Ordering & Payment
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Orders confirmed after successful payment processing</li>
                <li>Multiple payment options: UPI, Cards, Net Banking, COD</li>
                <li>Order cancellation allowed before dispatch</li>
                <li>Prices include applicable taxes and charges</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                3. Delivery & Returns
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Delivery timelines as specified by sellers</li>
                <li>Free shipping available on orders above specified amount</li>
                <li>Return policy varies by seller and product category</li>
                <li>Damaged or defective items eligible for free return</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                4. Seller Terms
              </h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Valid business registration required for selling</li>
                <li>Product listings must be accurate and legal</li>
                <li>Timely order fulfillment and customer service</li>
                <li>Commission charges as per seller agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                5. Contact Mart Team
              </h2>
              <div className="text-gray-600 dark:text-gray-300">
                <p>Email: mart@oblivent.com</p>
                <p>Phone: +91 98765 43217</p>
                <p>Seller Support: seller@oblivent.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
