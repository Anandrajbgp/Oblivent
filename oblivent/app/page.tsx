"use client";

import { HeroSection } from "@/components/homepage/hero-section";
import { EcosystemSection } from "@/components/homepage/ecosystem-section";
import { PlatformCardsSection } from "@/components/homepage/platform-cards";
import { FeaturesSection } from "@/components/homepage/platforms-section";
import { TestimonialsSection } from "@/components/homepage/testimonials-section";
import { CTABanner } from "@/components/homepage/cta-banner";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <EcosystemSection />
      <PlatformCardsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
