
import { HeroSection } from "@/components/elearning/hero";
import { AboutSection } from "@/components/elearning/about";
import { PackagesSection } from "@/components/elearning/packages";
import { LifeMasterySection } from "@/components/elearning/life-mastery";
import { AffiliateProofSection } from "@/components/elearning/affiliate-proof";
import { SuccessStoriesSection } from "@/components/elearning/success-stories";
import { FeaturesGridSection } from "@/components/elearning/features-grid";
import { CTABannerSection } from "@/components/elearning/cta-banner";

export default function ELearningPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <LifeMasterySection />
      <AffiliateProofSection />
      <SuccessStoriesSection />
      <FeaturesGridSection />
      <CTABannerSection />
    </main>
  );
}
