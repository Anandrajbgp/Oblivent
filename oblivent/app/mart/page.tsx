
import { MartHero } from "@/components/mart/hero";
import { SmartCategories } from "@/components/mart/smart-categories";
import { DealsFlashSales } from "@/components/mart/deals-flash-sales";
import { TrendingProducts } from "@/components/mart/trending-products";
import { CustomerReviews } from "@/components/mart/customer-reviews";
import { FestivalOffers } from "@/components/mart/festival-offers";
import { SellerSpotlight } from "@/components/mart/seller-spotlight";
import { MartCTABanner } from "@/components/mart/cta-banner";

export default function MartPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <MartHero />
      <SmartCategories />
      <DealsFlashSales />
      <TrendingProducts />
      <CustomerReviews />
      <FestivalOffers />
      <SellerSpotlight />
      <MartCTABanner />
    </div>
  );
}
