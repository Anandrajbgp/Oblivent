import type { Metadata } from "next";
import { AgencyNavbar } from "@/components/layout/agency-navbar";
import { AgencyFooter } from "@/components/layout/agency-footer";

export const metadata: Metadata = {
  title: "Digital Agency | Oblivent",
  description: "Professional digital solutions for your business. From web development to marketing, we deliver excellence.",
  keywords: "digital agency, web development, marketing, design, branding, seo, business solutions",
};

export default function AgencyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <AgencyNavbar />
      <main className="min-h-screen overflow-y-auto">
        {children}
      </main>
      <AgencyFooter />
    </div>
  );
}