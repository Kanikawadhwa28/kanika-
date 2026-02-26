// This is your home page
// It only imports sections - NO logic here at all
// Each section manages its own code internally

import HeroSection from "@/components/sections/HeroSection";
import TickerSection from "@/components/sections/TickerSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BrandMarquee from "@/components/sections/BrandMarquee";
import HowItWorks from "@/components/sections/HowItWorks";
import CreatorNetwork from "@/components/sections/CreatorNetwork";
import InfluencerDirectory from "@/components/sections/InfluencerDirectory";
import StatsBand from "@/components/sections/StatsBand";
import VideoGallery from "@/components/sections/VideoGallery";
import CampaignTypes from "@/components/sections/CampaignTypes";
import SplitPlatform from "@/components/sections/SplitPlatform";
import PricingSection from "@/components/sections/PricingSection";
import TeamSection from "@/components/sections/TeamSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import FaqSection from "@/components/sections/FaqSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import DualCta from "@/components/sections/DualCta";
import Modal from "@/components/ui/Modal";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TickerSection />
      <FeaturesSection />
      <BrandMarquee />
      <HowItWorks />
      <CreatorNetwork />
      <InfluencerDirectory />
      <StatsBand />
      <VideoGallery />
      <CampaignTypes />
      <SplitPlatform />
      <PricingSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <FaqSection />
      <NewsletterSection />
      <DualCta />

      {/* Modal lives here so it's available to VideoGallery clicks */}
      <Modal />
    </>
  );
}