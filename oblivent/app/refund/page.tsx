"use client";

import { useState } from "react";

export default function RefundPolicyPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-8">
          Refund Policy
        </h1>
        <p className="text-lg text-gray-700 text-center mb-12">
          At <span className="font-semibold">Oblivent</span>, we strive to
          provide high-quality services across our digital ecosystem. This
          Refund Policy explains the terms under which refunds are processed for
          all our platforms.
        </p>

        {/* Sections */}
        <div className="space-y-6">
          {/* Digital Products */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("digital")}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold text-blue-800 hover:bg-blue-50 transition"
            >
              Digital Products
              <span>{openSection === "digital" ? "−" : "+"}</span>
            </button>
            {openSection === "digital" && (
              <div className="px-6 pb-6 text-gray-700 space-y-3">
                <p>
                  Refunds are eligible only if the product is defective, not as
                  described, or inaccessible due to technical issues from our
                  end.
                </p>
                <p>
                  Refund requests must be submitted within{" "}
                  <span className="font-semibold">7 days</span> of purchase.
                </p>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("services")}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold text-blue-800 hover:bg-blue-50 transition"
            >
              Services (Agency, Trading, etc.)
              <span>{openSection === "services" ? "−" : "+"}</span>
            </button>
            {openSection === "services" && (
              <div className="px-6 pb-6 text-gray-700 space-y-3">
                <p>
                  For service-based projects, refunds are not provided once work
                  has commenced. However, if no deliverables have been provided,
                  you may be eligible for a partial refund.
                </p>
              </div>
            )}
          </div>

          {/* Subscription Plans */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("subscription")}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold text-blue-800 hover:bg-blue-50 transition"
            >
              Subscription Plans
              <span>{openSection === "subscription" ? "−" : "+"}</span>
            </button>
            {openSection === "subscription" && (
              <div className="px-6 pb-6 text-gray-700 space-y-3">
                <p>
                  Subscriptions can be cancelled anytime, but refunds are only
                  granted if cancellation is requested within the{" "}
                  <span className="font-semibold">first 3 days</span> of
                  purchase.
                </p>
                <p>
                  After this period, you may cancel future renewals, but the
                  current billing cycle will remain active.
                </p>
              </div>
            )}
          </div>

          {/* Non-Refundable Items */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("nonrefundable")}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold text-blue-800 hover:bg-blue-50 transition"
            >
              Non-Refundable Items
              <span>{openSection === "nonrefundable" ? "−" : "+"}</span>
            </button>
            {openSection === "nonrefundable" && (
              <div className="px-6 pb-6 text-gray-700">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Downloaded digital files</li>
                  <li>Customized services already in progress</li>
                  <li>Gift cards and promotional credits</li>
                </ul>
              </div>
            )}
          </div>

          {/* Refund Process */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <button
              onClick={() => toggleSection("process")}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold text-blue-800 hover:bg-blue-50 transition"
            >
              Refund Process
              <span>{openSection === "process" ? "−" : "+"}</span>
            </button>
            {openSection === "process" && (
              <div className="px-6 pb-6 text-gray-700 space-y-3">
                <p>To request a refund:</p>
                <ul className="list-decimal pl-6 space-y-2">
                  <li>Log in to your Oblivent account</li>
                  <li>
                    Navigate to &quot;Order History&quot; or &quot;Subscriptions&quot;
                  </li>
                  <li>
                    Find the relevant purchase and click &quot;Request Refund&quot;
                  </li>
                  <li>Provide a reason and submit the request</li>
                </ul>
                <p>
                  Refunds, if approved, will be processed within{" "}
                  <span className="font-semibold">5-10 business days</span>.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-sm text-gray-600 text-center">
          Last updated: <span className="font-medium">September 2025</span>
        </div>
      </div>
    </div>
  );
}