
import { HeroSection } from "@/components/test/hero";
import { FeaturedExamsSection } from "@/components/test/featured-exams";
import { HowItWorksSection } from "@/components/test/how-it-works";
import { PackagesSection } from "@/components/test/packages";
import { LeaderboardSection } from "@/components/test/leaderboard";
import { SuccessStoriesSection } from "@/components/test/success-stories";
import { CTABannerSection } from "@/components/test/cta-banner";

export default function TestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      <HeroSection />
      <FeaturedExamsSection />
      <HowItWorksSection />
      <PackagesSection />
      <LeaderboardSection />
      <SuccessStoriesSection />
      <CTABannerSection />
    </main>
  );
}
