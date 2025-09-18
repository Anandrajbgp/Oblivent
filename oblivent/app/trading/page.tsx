
import { TradingHero } from "@/components/trading/hero";
import { TradingFeatures } from "@/components/trading/features";
import { HowItWorks } from "@/components/trading/how-it-works";
import { TradingPlans } from "@/components/trading/plans";
import { TradingTestimonials } from "@/components/trading/testimonials";
import { TradingCommunity } from "@/components/trading/community";
import { TradingCTA } from "@/components/trading/cta-banner";

export default function TradingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      <TradingHero />
      <TradingFeatures />
      <HowItWorks />
      <TradingPlans />
      <TradingTestimonials />
      <TradingCommunity />
      <TradingCTA />
    </div>
  );
}
