import type { Metadata } from "next";
import { MartNavbar } from "@/components/layout/mart-navbar";
import { MartFooter } from "@/components/layout/mart-footer";

export const metadata: Metadata = {
  title: "Shopping Mart | Oblivent",
  description: "Your one-stop destination for quality products at unbeatable prices. Shop with confidence and convenience.",
  keywords: "shopping, ecommerce, products, online store, deals, mart, retail, shopping cart",
};

export default function MartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <MartNavbar />
      <main className="min-h-screen overflow-y-auto">
        {children}
      </main>
      <MartFooter />
    </div>
  );
}