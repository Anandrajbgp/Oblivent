import type { Metadata } from "next";
import { TradingNavbar } from "@/components/layout/trading-navbar";
import { TradingFooter } from "@/components/layout/trading-footer";

export const metadata: Metadata = {
  title: "Trading Platform | Oblivent",
  description: "Advanced trading platform with real-time data, analytical tools, and secure transactions for smart investing.",
  keywords: "trading, stocks, investment, portfolio, market analysis, financial, trading platform",
};

export default function TradingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <TradingNavbar />
      <main className="min-h-screen overflow-y-auto">
        {children}
      </main>
      <TradingFooter />
    </div>
  );
}