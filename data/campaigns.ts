export type CampaignCategory = "Fintech" | "Luxury" | "D2C" | "Gaming" | "Tech" | "Sports" | "Food" | "Finance" | "E-Commerce" | "Matrimonial";

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
  image?: string;        // /public/images/campaigns/
  videoPreview?: string; // /public/videos/
  reelUrl?: string;      // Instagram reel URL
};

export const campaigns: Campaign[] = [
  {
    id: "zepto",
    brand: "Zepto",
    title: "Zepto — 7M Views",
    emoji: "🍔",
    headline: "7M Views",
    category: "Food",
    label: "FOOD",
    stat: "🔥 7M Views • Creator Campaign",
    summary:
      "Zepto Cafe needed to feel like a friend's tip, not an ad. We placed the product with food creators who genuinely loved it no script, just real reactions. The result was 7M views of content that felt like discovery, not marketing.",
    badges: ["7M total views", "Food creator network", "Organic feel"],
    image: "zepto.png",
    videoPreview: "/videos/zepto-preview.mp4",
    reelUrl: "https://www.instagram.com/reel/DSaNrL3gh6e/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "kotak",
    brand: "Kotak Mahindra Bank",
    title: "Kotak — 37.7M Views",
    emoji: "🏦",
    headline: "37.7M Views",
    category: "Finance",
    label: "FINANCE",
    stat: "🌟 37.7M+ Views",
    summary:
      "Finance content going viral sounds impossible until you find the right creators. Kotak's 'Let's Make Money Simple' campaign used finance and lifestyle creators together to make banking feel approachable. 37.7M views proved money talk can hit different when the storyteller is right.",
    badges: ["37.7M+ views", "Finance + lifestyle creators", "Pan India reach"],
    image: "kotak.png",
    videoPreview: "/videos/kotak-preview.mp4",
    reelUrl: "https://www.instagram.com/reel/DUVZqFMCMZU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "kalyan",
    brand: "Kalyan Matrimony",
    title: "Kalyan Matrimony — 1.3M Views",
    emoji: "💍",
    headline: "1.3M Views",
    category: "Matrimonial",
    label: "MATRIMONIAL",
    stat: "💍 1.3M+ Views",
    summary:
      "Kalyan Matrimony wanted emotional, not transactional. We matched them with creators whose audiences were genuinely at that life stage and let the stories do the work. The campaign felt real because it was real. 1.3M views and thousands of saves.",
    badges: ["1.3M+ views", "Emotional storytelling", "High saves & shares"],
    image: "kalyan.png",
    videoPreview: "/videos/Kalyan-preview.mp4",
    reelUrl: "https://www.instagram.com/reel/DPDDEXTk5Fz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "flipkart",
    brand: "Flipkart",
    title: "Flipkart — 72.7M Engagements",
    emoji: "🛒",
    headline: "72.7M Engagements",
    category: "E-Commerce",
    label: "E-COMMERCE",
    stat: "⚡ 72.7M+ Engagements",
    summary:
      "India's biggest shopping event needed India's biggest creator moment. We coordinated fashion, lifestyle, and deal hunting creators to drop content simultaneously creating a wave that felt like the whole country was shopping. 72.7M engagements in one campaign window.",
    badges: ["72.7M+ engagements", "Multi niche creators", "Coordinated drop"],
    image: "flipkart.png",
    videoPreview: "/videos/flipkart-preview.mp4",
    reelUrl: "https://www.instagram.com/reel/DUkO96YCJy7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: "boat",
    brand: "boAt",
    title: "boAt — 8.9M Views",
    emoji: "🎧",
    headline: "8.9M Views",
    category: "D2C",
    label: "D2C",
    stat: "📱 8.9M+ Views",
    summary:
      "boAt's Nirvana range needed to look premium without losing its young, energetic audience. We placed it with tech and lifestyle creators who showed it in real environments gaming setups, gym sessions, commutes. 8.9M views of product content that felt like aspiration, not advertising.",
    badges: ["8.9M+ views", "Tech + lifestyle creators", "Premium feel"],
    image: "boat.png",
    videoPreview: "/videos/boat-preview.mp4",
    reelUrl: "https://www.instagram.com/reel/DUkbTuYDA2b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
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
    badges: ["500+ streamers", "15M+ engagements", "Pan India launch"],
  },
];