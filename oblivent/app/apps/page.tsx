
"use client";

import { HeroSection } from "@/components/apps/hero";
import { CategoriesSection } from "@/components/apps/categories";
import { FeaturedToolsSection } from "@/components/apps/featured-tools";
import { BundlesDealsSection } from "@/components/apps/bundles-deals";
import { CreatorSpotlightSection } from "@/components/apps/creator-spotlight";
import { TestimonialsSection } from "@/components/apps/testimonials";
import { CTABanner } from "@/components/apps/cta-banner";
import { AppsNavbar } from "@/components/layout/apps-navbar";
import { AppsFooter } from "@/components/layout/apps-footer";

export default function AppsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-cyan-50 to-teal-50">
      <AppsNavbar />
      <HeroSection />
      <CategoriesSection />
      <FeaturedToolsSection />
      <BundlesDealsSection />
      <CreatorSpotlightSection />
      <TestimonialsSection />
      <CTABanner />
      <AppsFooter />
    </div>
  );
}
