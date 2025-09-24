"use client";


import { EcosystemSection } from "@/components/homepage/ecosystem-section";
import { PlatformCardsSection } from "@/components/homepage/platform-cards";
import { TestimonialsSection } from "@/components/homepage/testimonials-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      
      <EcosystemSection />
      <PlatformCardsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
