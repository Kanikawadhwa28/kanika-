export type CampaignCategory = "Fintech" | "Luxury" | "D2C" | "Gaming" | "Tech" | "Sports";

export type Campaign = {
  id: string;
  brand: string;
  title: string;
  emoji: string;
  headline: string;
  category: CampaignCategory;
  label: string;
  stat: string;
  summary: string;
  badges: string[];
};

// Case study data reused across /for-brands and /platform
export const campaigns: Campaign[] = [
  {
    id: "navi",
    brand: "Navi",
    title: "Navi — 45M Views",
    emoji: "🎬",
    headline: "45M Views",
    category: "Fintech",
    label: "FINTECH",
    stat: "🔥 45M Views • 200+ Creators",
    summary:
      "200+ fintech creators drove 45M views with 3.2% engagement — over 4x the industry benchmark for finance campaigns.",
    badges: ["45M total views", "200+ creators", "3.2% engagement rate"],
  },
  {
    id: "samsonite",
    brand: "Samsonite",
    title: "Samsonite — 100M Reach",
    emoji: "🧳",
    headline: "100M Reach",
    category: "Luxury",
    label: "LUXURY",
    stat: "🌟 100M+ Reach",
    summary:
      "A celebrity + mega-influencer mix that generated 100M+ reach in 3 weeks for Samsonite India’s flagship campaign.",
    badges: ["100M+ reach", "3-week burst", "Celebrity + creator mix"],
  },
  {
    id: "boat",
    brand: "boAt",
    title: "boAt — 30K Sign-Ups",
    emoji: "🎧",
    headline: "30K Sign-Ups",
    category: "D2C",
    label: "D2C",
    stat: "📈 30K Sign-Ups",
    summary:
      "500+ micro-influencers drove 30K direct sign-ups, beating paid performance media benchmarks by more than 2.5x.",
    badges: ["30K sign-ups", "500+ micro-creators", "2.5x vs paid media"],
  },
  {
    id: "bgmi",
    brand: "BGMI",
    title: "BGMI — 15M Engagements",
    emoji: "🎮",
    headline: "15M Engagements",
    category: "Gaming",
    label: "GAMING",
    stat: "⚡ 15M Engagements",
    summary:
      "India's largest gaming influencer activation: 500+ streamers coordinated centrally, resulting in 15M+ engagements.",
    badges: ["500+ streamers", "15M+ engagements", "Pan-India launch"],
  },
  {
    id: "samsung",
    brand: "Samsung",
    title: "Samsung — 22M Reach",
    emoji: "📱",
    headline: "22M Reach",
    category: "Tech",
    label: "TECH",
    stat: "📱 22M Reach, 10 Days",
    summary:
      "Samsung Galaxy launch with 300+ tech creators delivered 22M reach in just 10 days with precise audience targeting.",
    badges: ["22M reach", "300+ tech creators", "10-day launch window"],
  },
  {
    id: "puma",
    brand: "Puma",
    title: "Puma — 8M Impressions",
    emoji: "👟",
    headline: "8M Impressions",
    category: "Sports",
    label: "SPORTS",
    stat: "👟 8M Impressions",
    summary:
      "120+ fitness and fashion creators drove 8M impressions in 2 weeks for Puma India’s seasonal drop.",
    badges: ["8M impressions", "120+ creators", "2-week burst"],
  },
];

